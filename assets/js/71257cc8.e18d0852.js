(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2150],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2908:function(e,t,n){"use strict";var a=n(7294),i=n(6742),r=n(4996),o=function(){return a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")};t.Z=function(){return a.createElement("p",null,a.createElement(i.Z,{className:"in-blog-cta--link",to:(0,r.Z)("/docs")},"We are in Alpha (try it out)!"),a.createElement(o,null),a.createElement(i.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(o,null),a.createElement(i.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(9756),i=n(7294),r=n(3727),o=n(2263),s=n(3919),l=n(412),u=(0,i.createContext)({collectLink:function(){}}),c=n(4996),p=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var h=function(e){var t,n,h=e.isNavLink,m=e.to,f=e.href,g=e.activeClassName,w=e.isActive,y=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,b=void 0===k||k,v=(0,a.Z)(e,d),W=(0,o.Z)().siteConfig,C=W.trailingSlash,N=W.baseUrl,x=(0,c.C)().withBaseUrl,j=(0,i.useContext)(u),T=m||f,I=(0,s.Z)(T),O=null==T?void 0:T.replace("pathname://",""),L=void 0!==O?(n=O,b&&function(e){return e.startsWith("/")}(n)?x(n):n):void 0;L&&I&&(L=(0,p.applyTrailingSlash)(L,{trailingSlash:C,baseUrl:N}));var P,q=(0,i.useRef)(!1),A=h?r.OL:r.rU,U=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!U&&I&&null!=L&&window.docusaurus.prefetch(L),function(){U&&P&&P.disconnect()}}),[L,U,I]);var Z=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,E=!L||!I||Z;return L&&I&&!Z&&!y&&j.collectLink(L),E?i.createElement("a",Object.assign({href:L},T&&!I&&{target:"_blank",rel:"noopener noreferrer"},v)):i.createElement(A,Object.assign({},v,{onMouseEnter:function(){q.current||null==L||(window.docusaurus.preload(L),q.current=!0)},innerRef:function(e){var t,n;U&&e&&I&&(t=e,n=function(){null!=L&&window.docusaurus.prefetch(L)},(P=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))}))).observe(t))},to:L||""},h&&{isActive:w,activeClassName:g}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return o}});var a=n(2263),i=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,l=r.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,r=e.split(/[#?]/)[0],o="/"===r||r===a?r:(i=r,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(r,o)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(i).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(r).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},5101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return h},assets:function(){return m},toc:function(){return f},default:function(){return w}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=n(6742),s=n(4996),l=n(2908),u=n(589),c=["components"],p={title:"How we built a Trello clone with Wasp - Waspello!",author:"Matija Sosic",author_title:"CEO & Co-founder @ Wasp",author_url:"https://github.com/matijasos",image:"/img/waspello-screenshot.png",tags:["webdev","wasp"]},d=void 0,h={permalink:"/blog/2021/12/02/waspello",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/blog/blog/2021-12-02-waspello.md",source:"@site/blog/2021-12-02-waspello.md",title:"How we built a Trello clone with Wasp - Waspello!",description:"Enter Waspello",date:"2021-12-02T00:00:00.000Z",formattedDate:"December 2, 2021",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:9.125,truncated:!1,authors:[{name:"Matija Sosic",title:"CEO & Co-founder @ Wasp",url:"https://github.com/matijasos"}],prevItem:{title:"Meet the team - Shayne Czyzewski, Founding Engineer",permalink:"/blog/2021/12/21/shayne-intro"},nextItem:{title:"Our fundraising learnings - 250+ meetings in 98 days to the oversubscribed round",permalink:"/blog/2021/11/22/fundraising-learnings"}},m={authorsImageUrls:[void 0]},f=[{value:"Why Trello?",id:"why-trello",children:[]},{value:"What works?",id:"what-works",children:[{value:"It&#39;s alive \u26a1\ud83e\udd16 !!",id:"its-alive--",children:[]},{value:"Under the hood \ud83d\ude98 \ud83d\udd27",id:"under-the-hood--",children:[]}]},{value:"What doesn&#39;t work (yet)",id:"what-doesnt-work-yet",children:[]},{value:"What&#39;s missing (next features)",id:"whats-missing-next-features",children:[]},{value:"Become a Waspeller!",id:"become-a-waspeller",children:[]}],g={toc:f};function w(e){var t=e.components,p=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enter Waspello",src:n(9375).Z})),(0,r.kt)("p",{align:"center"},(0,r.kt)(o.Z,{to:"https://waspello.netlify.app/",mdxType:"Link"},"Try Waspello here!")," | ",(0,r.kt)(o.Z,{to:"https://github.com/wasp-lang/wasp/blob/master/examples/waspello/main.wasp",mdxType:"Link"},"See the code")),(0,r.kt)(u.ZP,{mdxType:"WaspIntro"}),(0,r.kt)(l.Z,{mdxType:"InBlogCta"}),(0,r.kt)("h2",{id:"why-trello"},"Why Trello?"),(0,r.kt)("p",null,"While building Wasp, our goal is to use it as much as we can to build our projects and play with it, so we can learn what works and what we should do next. This is why Trello was a great choice of app to build with Wasp - it is one of the most well-known full-stack web apps, it's very simple and intuitive to use  but also covers a good portion of features used by today's modern web apps."),(0,r.kt)("p",null,"So let's dig in and see and how it went - what works, what doesn't and, what's missing/coming next!"),(0,r.kt)("h2",{id:"what-works"},"What works?"),(0,r.kt)("h3",{id:"its-alive--"},"It's alive \u26a1\ud83e\udd16 !!"),(0,r.kt)("p",null,"The good news is all the basic functionality is here - Waspello users can signup/log in which brings them to their project board where they can perform CRUD operations on lists and cards - create them, edit them, move them around, etc. Let's see it in action:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Waspello in action",src:n(3428).Z})),(0,r.kt)("p",{align:"center",class:"image-caption"},"Waspello in action!"),(0,r.kt)("p",null,"As you can see things work, but not everything is perfect (e.g. there is a delay when creating/moving a card) - we'll examine why is that so a bit later."),(0,r.kt)("h3",{id:"under-the-hood--"},"Under the hood \ud83d\ude98 \ud83d\udd27"),(0,r.kt)("p",null,"Here is a simple visual overview of Waspello's code anatomy (which applies to every Wasp app):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Waspello code anatomy",src:n(9283).Z})),(0,r.kt)("p",{align:"center",class:"image-caption"},"Waspello code anatomy"),(0,r.kt)("p",null,"Let's now dig in a bit deeper and shortly examine each of the concepts Wasp supports (page, query, entity, ...) and learn through code samples how to use it to implement Waspello."),(0,r.kt)("h4",{id:"entities"},"Entities"),(0,r.kt)("p",null,"It all starts with a data model definition (called ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," in Wasp), which is defined via Prisma Schema Language:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Defining entities via Prisma Schema Language"',title:'"main.wasp',"|":!0,Defining:!0,entities:!0,via:!0,Prisma:!0,Schema:!0,'Language"':!0},"// Entities\n\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\n    lists       List[]\n    cards       Card[]\npsl=}\n\nentity List {=psl\n    id          Int     @id @default(autoincrement())\n    name        String\n    pos         Float\n\n    // List has a single author.\n    user        User    @relation(fields: [userId], references: [id])\n    userId      Int\n\n    cards       Card[]\npsl=}\n\nentity Card {=psl\n    id          Int     @id @default(autoincrement())\n    title       String\n    pos         Float\n\n    // Card belongs to a single list.\n    list        List    @relation(fields: [listId], references: [id])\n    listId      Int\n\n    // Card has a single author.\n    author      User    @relation(fields: [authorId], references: [id])\n    authorId    Int\npsl=}\n")),(0,r.kt)("p",null,"Those three entities are all we need! Wasp uses Prisma to create a database schema underneath and allows the developer to query it through its generated SDK."),(0,r.kt)("h4",{id:"queries-and-actions-operations"},"Queries and Actions (Operations)"),(0,r.kt)("p",null,"After we've defined our data models, the next step is to do something with them! We can read/create/update/delete an entity and that is what ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," mechanisms are for. Below follows an example from the Waspello code that demonstrates how it works."),(0,r.kt)("p",null,"The first step is to declare to Wasp there will be a query, point to the actual function containing the query logic, and state from which entities it will be reading information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Declaration of a query in Wasp"',title:'"main.wasp',"|":!0,Declaration:!0,of:!0,a:!0,query:!0,in:!0,'Wasp"':!0},'query getListsAndCards {\n    // Points to the function which contains query logic.\n    fn: import { getListsAndCards } from "@ext/queries.js",\n\n    // This query depends on List and Card entities.\n    // If any of them changes this query will get re-fetched (cache invalidation).\n    entities: [List, Card]\n}\n')),(0,r.kt)("p",null,"The main point of this declaration is for Wasp to be aware of the query and thus be able to ",(0,r.kt)("strong",{parentName:"p"},"do a lot of heavy lifting for us - e.g. it will make the query available to the client without any extra code"),", all that developer needs to do is import it in their React component. ",(0,r.kt)("strong",{parentName:"p"},"Another big thing is cache invalidation / automatic re-fetching of the query once the data changes")," (this is why it is important to declare which entities it depends on)."),(0,r.kt)("p",null,"The remaining step is to write the function with the query logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ext/queries.js | Query logic, using Prisma SDK via Node.js"',title:'"ext/queries.js',"|":!0,Query:!0,"logic,":!0,using:!0,Prisma:!0,SDK:!0,via:!0,'Node.js"':!0},"export const getListsAndCards = async (args, context) => {\n  // Only authenticated users can execute this query.\n  if (!context.user) { throw new HttpError(403) }\n\n  return context.entities.List.findMany({\n    // We want to make sure user can access only their own cards.\n    where: { user: { id: context.user.id } },\n    include: { cards: true }\n  })\n}\n")),(0,r.kt)("p",null,"This is just a regular Node.js function, there are no limits on what you can return! All the stuff provided by Wasp (user data, Prisma SDK for a specific entity) comes in a ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," variable."),(0,r.kt)("p",null,"The code for actions is very similar (we just need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," keyword instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),") so I won't repeat it here. You can check out the code for ",(0,r.kt)("inlineCode",{parentName:"p"},"updateCard")," action ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/master/examples/waspello/main.wasp#L103"},"here"),"."),(0,r.kt)("h4",{id:"pages-routing--components"},"Pages, routing & components"),(0,r.kt)("p",null,"To display all the nice data we have, we'll use React components. There are no limits to how you can use React components within Wasp, the only one is that each ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," has its root component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Declaration of a page & route in Wasp"',title:'"main.wasp',"|":!0,Declaration:!0,of:!0,a:!0,page:!0,"&":!0,route:!0,in:!0,'Wasp"':!0},'route "/" -> page Main\npage Main {\n    authRequired: true,\n    component: import Main from "@ext/MainPage.js"\n}\n')),(0,r.kt)("p",null,"All pretty straightforward so far! As you can see here, Wasp also provides ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basic-elements#authentication--authorization"},"authentication out-of-the-box"),"."),(0,r.kt)("p",null,"Currently, the majority of the client logic of Waspello is contained in ",(0,r.kt)("inlineCode",{parentName:"p"},"ext/MainPage.js")," (we should break it down a little \ud83d\ude05 - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/334"},"you can help us!"),"). Just to give you an idea, here's a quick glimpse into it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ext/MainPage.js | Using React component in Wasp"',title:'"ext/MainPage.js',"|":!0,Using:!0,React:!0,component:!0,in:!0,'Wasp"':!0},"// \"Special\" imports provided by Wasp.\nimport { useQuery } from '@wasp/queries'\nimport getListsAndCards from '@wasp/queries/getListsAndCards'\nimport createList from '@wasp/actions/createList'\n\nconst MainPage = ({ user }) => {\n  // Fetching data via useQuery.\n  const { data: listsAndCards, isFetchingListsAndCards, errorListsAndCards }\n    = useQuery(getListsAndCards)\n\n  // A lot of data transformations and sub components.\n  ...\n\n  // Display lists and cards.\n  return (\n    ...\n  )\n}\n")),(0,r.kt)("p",null,"Once you've defined a query or action as described above, you can immediately import it into your client code as shown in the code sample, by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@wasp")," prefix in the import path. ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," ensures reactivity so once the data changes the query will get re-fetched. You can find more details about it ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basic-elements#usequery"},"here"),"."),(0,r.kt)("p",null,"This is pretty much it from the stuff that works \ud83d\ude04 ! I kinda rushed a bit through things here - for more details on all Wasp features and to build your first app with Wasp, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/"},"docs"),"."),(0,r.kt)("h2",{id:"what-doesnt-work-yet"},"What doesn't work (yet)"),(0,r.kt)("p",null,"The main problem of the current implementation of Waspello is the ",(0,r.kt)("strong",{parentName:"p"},"lack of support for optimistic UI updates in Wasp"),". What this means is that currently, when an entity-related change is made (e.g. a card is moved from one list to another), we have to wait until that change is fully executed on the server until it is visible in the UI, which causes a noticeable delay.",(0,r.kt)("br",{parentName:"p"}),"\n","In many cases that is not an issue, but when UI elements are all visible at once and it is expected from them to be updated immediately, then it is noticeable. This is also one of the main reasons why we chose to work on Waspello - to have a benchmark/sandbox for this feature! Due to this issue, here's how things currently look like:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Waspello - no optimistic UI update",src:(0,s.Z)("img/waspello-no-opt-UI-updates.gif")}),(0,r.kt)("figcaption",{class:"image-caption"},"Without an optimistic UI update, there is a delay"))),(0,r.kt)("p",null,'You can notice the delay between the moment the card is dropped on the "Done" list and the moment it becomes a part of that list. The reason is that at the moment of dropping the card on "Done" list, the API request with the change is sent to the server, and only when that change is fully processed on the server and saved to the database, the query ',(0,r.kt)("inlineCode",{parentName:"p"},"getListsAndCards")," returns the correct info and consequently, UI is updated to the correct state.",(0,r.kt)("br",{parentName:"p"}),"\n",'That is why upon dropping on "Done", the card first goes back to the original list (because the change is not saved in db yet, so ',(0,r.kt)("inlineCode",{parentName:"p"},"useQuery(getListsAndCards)"),' still returns the "old" state), it waits a bit until the API request is processed successfully, and just then the change gets reflected in the UI.'),(0,r.kt)("h4",{id:"the-solution"},"The solution"),(0,r.kt)("p",null,"A typical approach for solving this issue is to ",(0,r.kt)("strong",{parentName:"p"},"make the client a bit more self-confident, in a way that it doesn't wait for the confirmation from the server but rather immediately updates the UI, at the same time or even before the API request is fired"),". If it then turns out something went wrong on the server (which typically shouldn't happen), it reverses the change and shows an error message. Thus the name optimistic UI update, since the client assumes in advance that everything will go well to provide a nicer UX."),(0,r.kt)("p",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Waspello - the client being brave",src:(0,s.Z)("img/waspello-client-being-brave.gif")}),(0,r.kt)("figcaption",{class:"image-caption"},"The client when performing an optimistic UI update"))),(0,r.kt)("p",null,'This is one of the most complex and error-prone features when developing web apps today and that is why we are super excited to tackle it in Wasp and make the experience as smooth as possible! We are currently in the "figuring out the solution" stage and you can ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/63"},"track/join the discussion on GitHub"),"!"),(0,r.kt)("h2",{id:"whats-missing-next-features"},"What's missing (next features)"),(0,r.kt)("p",null,"Although it looks super simple at the first glance, Trello is in fact a huge app with lots and lots of cool features hidden under the surface! Here are some of the more obvious ones that are currently not supported in Waspello:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Users can have multiple boards"),', for different projects (currently we have no notion of a "Board" entity in Waspello at all, so there is implicitly only one)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Detailed card view"),' - when clicked on a card, a "full" view with extra options opens'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Search")," - user can search for a specific list/card"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Collaboration")," - multiple users can participate on the same board")),(0,r.kt)("p",null,"And many more - e.g. support for workspaces (next level of the hierarchy, a collection of boards), card labels, filters, ... . It is very helpful to have such a variety of features since we can use it as a testing ground for Wasp and use it as a guiding star towards Beta/1.0!"),(0,r.kt)("h2",{id:"become-a-waspeller"},"Become a Waspeller!"),(0,r.kt)("p",{align:"center"},(0,r.kt)("figure",{style:{width:"55%"}},(0,r.kt)("img",{alt:"Waspello propaganda",src:(0,s.Z)("img/waspello-propaganda.png")}),(0,r.kt)("figcaption",{class:"image-caption"},"Lightweight Waspello propaganda"))),(0,r.kt)("p",null," If you want to get involved with OSS and at the same time familiarize yourself with Wasp, this is a great way to get started - feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/337"},"choose one of the features listed here or add your own")," and help us make Waspello the best demo productivity app out there!"),(0,r.kt)("p",null,"Also, make sure to ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"join our community on Discord"),". We\u2019re always there and are looking forward to seeing what you build!"),(0,r.kt)(l.Z,{mdxType:"InBlogCta"}))}w.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},9283:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspello-code-anatomy-9643f6079036dbb4e828275fe700f10f.png"},3428:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspello-in-action-6ba87b72af0af99a4c4acb9adf0cf3bb.gif"},9375:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspello-screenshot-cfb8c8229fb035e7bbac6ca19cafd805.png"}}]);