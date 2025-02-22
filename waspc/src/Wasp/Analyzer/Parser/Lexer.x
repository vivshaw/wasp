{
-- This file is processed by Alex (https://www.haskell.org/alex/) and generates
-- the module `Analyzer.Parser.Lexer`

{-# LANGUAGE NamedFieldPuns #-}

module Wasp.Analyzer.Parser.Lexer
  ( lexer
  ) where

import Wasp.Analyzer.Parser.LexerUtils
import Wasp.Analyzer.Parser.Monad
import Wasp.Analyzer.Parser.Token (Token (..), TokenType (..))
import Wasp.Analyzer.Parser.ParseError (ParseError (..))
import Control.Monad.State.Lazy (gets)
import Control.Monad.Except (throwError)
}

-- Character set aliases
$digit = 0-9
$alpha = [a-zA-Z]
$identstart = [_$alpha]
$ident = [_$alpha$digit]
$any = [.$white]

-- Regular expression aliases
@string = \"([^\\\"]|\\.)*\" -- matches string-literal on a single line, from https://stackoverflow.com/a/9260547/3902376
@double = "-"? $digit+ "." $digit+
@integer = "-"? $digit+
@ident = $identstart $ident* "'"*
@linecomment = "//" [^\n\r]*
@blockcomment = "/*" (("*"[^\/]) | [^\*] | $white)* "*/" -- Based on https://stackoverflow.com/a/16165598/1509394 .

-- Tokenization rules (regex -> token)
tokens :-

-- Skips whitespace and comments
<0>       $white+ ;
<0>       @linecomment ;
<0>       @blockcomment ;

-- Quoter rules:
-- Uses Alex start codes to lex quoted characters with different rules:
-- - On "{=tag", enter <quoter> start code and make a TLQuote token
-- - While in <quoter>, if "tag=}" is seen
--   - If this closing tag matches the opening, enter <0> and make a TRQuote token
--   - Otherwise, stay in <quoter> and make a TQuoted token
-- - Otherwise, take one character at a time and make a TQuoted token
<0>       "{=" @ident { beginQuoter }
<quoter>  @ident "=}" { lexQuoterEndTag }
<quoter>  $any { createValueToken TQuoted }

-- Simple tokens
<0>       "(" { createConstToken TLParen }
<0>       ")" { createConstToken TRParen }
<0>       "[" { createConstToken TLSquare }
<0>       "]" { createConstToken TRSquare }
<0>       "{" { createConstToken TLCurly }
<0>       "}" { createConstToken TRCurly }
<0>       "," { createConstToken TComma }
<0>       ":" { createConstToken TColon }
<0>       "import" { createConstToken TImport }
<0>       "from" { createConstToken TFrom }
<0>       "true" { createConstToken TTrue }
<0>       "false" { createConstToken TFalse }

-- Strings, numbers, identifiers
<0>       @string { createValueToken $ \s -> TString $ read s }
<0>       @double { createValueToken $ \s -> TDouble $ read s }
<0>       @integer { createValueToken $ \s -> TInt $ read s }
<0>       @ident { createValueToken $ \s -> TIdentifier s }

{

-- | Lexes a single token from the input.
--
--   This function is designed for use with the Happy monadic parser that uses threaded/monadic lexer.
--   This means that parser, as it is building an AST, asks for a single token at a time from the lexer, on the go.
--   This is done in "continuation" style -> parser calls lexer while passing it the function ('parseToken') via which
--   lexer gives control back to the parser.
--   In such setup both lexer and parser are operating in the same 'Parser' monad.
--   Check https://www.haskell.org/happy/doc/html/sec-monads.html#sec-lexers for more details.
--
--   This function internally calls `alexScan`, which is a function generated by Alex responsible for doing actual lexing/scanning.
lexer :: (Token -> Parser a) -> Parser a
lexer parseToken = do
  input@(_, _, remainingSource) <- gets parserRemainingInput
  startCodeInt <- gets $ startCodeToInt quoter .  parserLexerStartCode
  case alexScan input startCodeInt of
    AlexError _input'@(_, _, c:_) -> do
      -- NOTE(martin): @_input'@ is actually the same as @input@ before the scan,
      --   that is how AlexError works -> it returns last AlexInput before Alex
      --   failed. Therefore, the character it failed on is actually the first
      --   character of the remaining source.
      pos <- gets parserSourcePosition
      throwError $ UnexpectedChar c pos
    AlexError (_, _, []) -> error "impossible"
    AlexSkip _input' numCharsSkipped -> do
      updateParserStateWithSkippedChars numCharsSkipped
      lexer parseToken
    AlexToken _input' tokenLength mkToken -> do
      let lexeme = take tokenLength remainingSource
      token <- mkToken lexeme
      updateParserStateWithScannedToken token
      parseToken token
    AlexEOF -> do
      token <- createConstToken TEOF ""
      updateParserStateWithScannedToken token
      parseToken token

}
