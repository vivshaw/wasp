(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1346],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,f=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2908:function(e,t,n){"use strict";var a=n(7294),o=n(6742),r=n(4996),i=function(){return a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")};t.Z=function(){return a.createElement("p",null,a.createElement(o.Z,{className:"in-blog-cta--link",to:(0,r.Z)("/docs")},"We are in Alpha (try it out)!"),a.createElement(i,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(i,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(9756),o=n(7294),r=n(3727),i=n(2263),s=n(3919),l=n(412),u=(0,o.createContext)({collectLink:function(){}}),d=n(4996),c=n(8780),h=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,f=e.to,m=e.href,g=e.activeClassName,w=e.isActive,v=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,y=void 0===b||b,k=(0,a.Z)(e,h),O=(0,i.Z)().siteConfig,W=O.trailingSlash,N=O.baseUrl,C=(0,d.C)().withBaseUrl,j=(0,o.useContext)(u),I=f||m,E=(0,s.Z)(I),Z=null==I?void 0:I.replace("pathname://",""),S=void 0!==Z?(n=Z,y&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;S&&E&&(S=(0,c.applyTrailingSlash)(S,{trailingSlash:W,baseUrl:N}));var T,x=(0,o.useRef)(!1),D=p?r.OL:r.rU,P=l.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!P&&E&&null!=S&&window.docusaurus.prefetch(S),function(){P&&T&&T.disconnect()}}),[S,P,E]);var A=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,M=!S||!E||A;return S&&E&&!A&&!v&&j.collectLink(S),M?o.createElement("a",Object.assign({href:S},I&&!E&&{target:"_blank",rel:"noopener noreferrer"},k)):o.createElement(D,Object.assign({},k,{onMouseEnter:function(){x.current||null==S||(window.docusaurus.preload(S),x.current=!0)},innerRef:function(e){var t,n;P&&e&&E&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(T=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))}))).observe(t))},to:S||""},p&&{isActive:w,activeClassName:g}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return i}});var a=n(2263),o=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+d:d}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,r=e.split(/[#?]/)[0],i="/"===r||r===a?r:(o=r,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(r,i)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(o).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(r).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},assets:function(){return h},toc:function(){return p},default:function(){return m}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=(n(6742),n(4996),n(2908)),s=n(589),l=["components"],u={title:"Our fundraising learnings - 250+ meetings in 98 days to the oversubscribed round",author:"Matija Sosic",author_title:"CEO & Co-founder @ Wasp",author_url:"https://github.com/matijasos",tags:["startup","wasp"]},d=void 0,c={permalink:"/blog/2021/11/22/fundraising-learnings",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/blog/blog/2021-11-22-fundraising-learnings.md",source:"@site/blog/2021-11-22-fundraising-learnings.md",title:"Our fundraising learnings - 250+ meetings in 98 days to the oversubscribed round",description:"Wasp fundraise chart",date:"2021-11-22T00:00:00.000Z",formattedDate:"November 22, 2021",tags:[{label:"startup",permalink:"/blog/tags/startup"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:7.81,truncated:!1,authors:[{name:"Matija Sosic",title:"CEO & Co-founder @ Wasp",url:"https://github.com/matijasos"}],prevItem:{title:"How we built a Trello clone with Wasp - Waspello!",permalink:"/blog/2021/12/02/waspello"},nextItem:{title:"Following YC, Wasp raised $1.5M Seed Round led by Lunar Ventures and HV Capital",permalink:"/blog/2021/11/21/seed-round"}},h={authorsImageUrls:[void 0]},p=[{value:"We treated fundraising as a sales process (and stuck to it)",id:"we-treated-fundraising-as-a-sales-process-and-stuck-to-it",children:[]},{value:"Our pitch became much better after ~50 meetings",id:"our-pitch-became-much-better-after-50-meetings",children:[]},{value:"Our goal was to get to 100 no&#39;s",id:"our-goal-was-to-get-to-100-nos",children:[]},{value:"We had 100+ leads from Demo Day - none of them invested",id:"we-had-100-leads-from-demo-day---none-of-them-invested",children:[]},{value:"We learned not to spend time on non-believers",id:"we-learned-not-to-spend-time-on-non-believers",children:[]},{value:"Passing through the &quot;valley of death&quot;",id:"passing-through-the-valley-of-death",children:[]},{value:"We compared ourselves to big, successful companies",id:"we-compared-ourselves-to-big-successful-companies",children:[]},{value:"Good luck - you can do it!",id:"good-luck---you-can-do-it",children:[]}],f={toc:p};function m(e){var t=e.components,u=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wasp fundraise chart",src:n(7630).Z})),(0,r.kt)(s.ZP,{mdxType:"WaspIntro"}),(0,r.kt)(i.Z,{mdxType:"InBlogCta"}),(0,r.kt)("p",null,"Wasp was part of ",(0,r.kt)("a",{parentName:"p",href:"https://www.ycombinator.com/"},"Y Combinator"),"\u2019s W21 batch, which took place from January of 2021 until the end of March."),(0,r.kt)("p",null,"At Demo Day, our product had a solid traction (200+ projects created, 1k Github stars, good ",(0,r.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/wasp-lang-alpha"},"ProductHunt")," and ",(0,r.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=26091956"},"HackerNews")," feedback) but no monetisation yet, which is typical for open-source projects at this stage. Being based in the EU, we also didn't have a huge network in the Bay Area prior to the fundraise."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'I will try to refrain from giving "general" advice (as our fundraise is a single data point), and focus on the stats and specific things that worked for us. Keep in mind the same might not work for you - I recommend always taking advice with a pinch of salt to see what makes the most sense in your case.'))),(0,r.kt)("p",null,"As we approached our fundraise, we didn't really know what to expect. We had friends from the previous batch that raised a big round very quickly (even before Demo Day) and heard a couple of stories from a few other YC founders who were also quite successful, so we imagined it might go quickly for us too."),(0,r.kt)("p",null,"As you can see from the title, we had quite a journey with plenty of meetings that provided us a lot of input on how to improve our pitch, and maybe even more importantly, how to reach the right investors."),(0,r.kt)("p",null,"Here are our stats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we spoke to ",(0,r.kt)("strong",{parentName:"li"},"212 investors")," \u2192 that led to ",(0,r.kt)("strong",{parentName:"li"},"250+ meetings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"98 days")," passed between the first and the last signed SAFE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"171")," investor passed, ",(0,r.kt)("strong",{parentName:"li"},"24")," never responded, ",(0,r.kt)("strong",{parentName:"li"},"17")," invested")),(0,r.kt)("p",null,"And here is how it all looked when laid out on a timeline:\n",(0,r.kt)("img",{alt:"Wasp fundraise chart",src:n(7630).Z})),(0,r.kt)("p",null,"Here are some of the things that worked for us:"),(0,r.kt)("h2",{id:"we-treated-fundraising-as-a-sales-process-and-stuck-to-it"},"We treated fundraising as a sales process (and stuck to it)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wasp fundraise funnel",src:n(1117).Z})),(0,r.kt)("p",null,"This means we had a typical sales funnel - lead generation, selling (pitching) and following up:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lead generation"),": it started with Demo Day of course, from which we got 100+ leads but none of them ended up investing (more on that below). After that we mainly relied on our YC batchmates to identify relevant investors and get the intros."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pitching"),": we did a conversational pitch without the deck, but we had a Notion one-pager from which I would drop links during the conversation (to e.g. our traction chart, user testimonials etc.). It also worked well as investors would typically find it interesting and keep scrolling through as we talked, asking follow-up questions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Following-up"),': we followed up once per week. I would usually "batch process" it each Wednesday. We used Streak to identify all the leads that I haven\'t heard from in over 7 days (there is a filter for that) and then manually emailed them.')),(0,r.kt)("p",null,"We started with tracking everything in Google Sheets, but with the volume of leads it soon became hard to navigate them through the funnel. Then we switched to Streak (used their fundraising template, and modified it a bit) and that worked great. The most helpful thing for me was having a CRM that is integrated with gmail, that made the process much more seamless and gave us better overview of the funnel. As soon as I would receive an email I could see in which stage the investor is, and it was also super easy to add new investors straight from gmail - it saved us from the dreaded context switching and kept us focused."),(0,r.kt)("h2",{id:"our-pitch-became-much-better-after-50-meetings"},"Our pitch became much better after ~50 meetings"),(0,r.kt)("p",null,'We kept being critical of our pitch and kept a list of questions that we felt needed more work. We called it "creating narratives", e.g. why the right time for our product is now, presenting the team, or how we plan to monetise. We talked to other companies in the same space (devtools, OSS), investigated comparatives (big companies we compared ourselves too), talked to our angels who were domain experts and used all that to build a more convincing story.'),(0,r.kt)("p",null,"I never intended to learn our pitch by heart, but after delivering it for 100s of times just that happened - both me and Martin (my brother and cofounder, who wasn't pitching but was always sitting behind me and provided feedback, especially in the beginning) knew it word by word and I realised how much more polished it sounds and how much more confident I felt compared to when we just started."),(0,r.kt)("h2",{id:"our-goal-was-to-get-to-100-nos"},"Our goal was to get to 100 no's"),(0,r.kt)("p",null,"After about 50 meetings (and about 20 VCs having passed on us) we started feeling a bit disheartened, as things didn't seem to go so easy as we initially expected. Then I chatted to a friend who also recently finished their fundraise and he gave me a tour of Streak - I saw their numbers and that over 150 investors passed on them! With that I realised our 20 passes were just the beginning and that instead of chasing yeses we should actually chase no's :) - they are more predictable, you'll get plenty of them and they will clearly show your progress."),(0,r.kt)("h2",{id:"we-had-100-leads-from-demo-day---none-of-them-invested"},"We had 100+ leads from Demo Day - none of them invested"),(0,r.kt)("p",null,"This is probably pretty specific for our case, but it's how it went. Connecting with a startup on Demo Day is a very low-cost action for investors. Also, as many investors as there are on Demo Day, there are even more of them who aren't."),(0,r.kt)("p",null,"When we sorted through the connections we got, about 20% were a really good fit for us, meaning they invest in deep tech / OSS companies, have invested recently, invest in our stage etc."),(0,r.kt)("p",null,"We still met with pretty much all the interested leads, but we quickly realised that due to our product being deeply technical and the company being pre-revenue, only investors with engineering backgrounds were really interested because they could understand and get excited about what we do. That informed us to generate our leads with much narrower focus."),(0,r.kt)("p",null,"We looked at other OSS & dev tools companies in our batch, looked at who invested in them and asked for intros. Our batchmates were also in the fundraising mode, they knew how hard it can be and they wanted to help, so everything moved very quickly."),(0,r.kt)("h2",{id:"we-learned-not-to-spend-time-on-non-believers"},"We learned not to spend time on non-believers"),(0,r.kt)("p",null,"As we learned to focus on the highly qualified leads, we also learned that it is very hard (impossible) to change somebody's mind. Plenty of investors liked u and what we do, but they were skeptical about e.g. market size or monetisation potential and made that clear from the start. Many of them were keen to keep chatting, wanted to meet our angel investors etc., but none of that helped change their mind and it was very distracting for us. I believe it is very hard to change somebody's worldview, especially in the seed stage when there is often no strong factual evidence to do so."),(0,r.kt)("h2",{id:"passing-through-the-valley-of-death"},'Passing through the "valley of death"'),(0,r.kt)("p",null,"As you can see on the chart, about two months in we barely passed $300k, and we had a whole month with no progress. At the same time, we felt that our pitch got significantly better and we were reaching investors much better suited for us.\nIt was one of the most difficult times, seeing others close their rounds, but we decided to trust in the process and keep going until we have used all the resources we had. It was also the time our lead investor took time to do their own pretty extensive due diligence on Wasp, so although it looks like no progress was made from the outside, a lot of stuff was actually happening behind the scenes."),(0,r.kt)("p",null,"Suddenly, a few things clicked together from multiple sides and our round was quickly closed, even oversubscribed! It was truly a magical feeling to start closing investors in a single day, even during the first call, when previously it took us weeks to close our first $50k check. The big factor was also that our round was getting filled up and that of course motivated investors to move faster."),(0,r.kt)("h2",{id:"we-compared-ourselves-to-big-successful-companies"},"We compared ourselves to big, successful companies"),(0,r.kt)("p",null,"This is one of the best pieces of advice we got from YC partners about fundraising. In the beginning we didn't understand how important this was, but once the meetings started we realised this was one of the best ways to explain the potential of our company to investors. With the innovation in technology that isn't easy to grasp, they needed something to hold on to understand how the business model and distribution could work, and it sounds much more doable if there is a playbook we can follow rather than us reinventing that as well. We kept working on finding a good comparable (we had a few) and explaining in which ways we are similar and why."),(0,r.kt)("h2",{id:"good-luck---you-can-do-it"},"Good luck - you can do it!"),(0,r.kt)("p",null,"I hope you found this helpful and that our story will motivate you to keep going once things get hard! We wish you the best of luck and also feel free to reach out if you'll have any questions."),(0,r.kt)(i.Z,{mdxType:"InBlogCta"}))}m.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favourite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook and Lyft.")))}l.isMDXComponent=!0},7630:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wasp-fundraise-chart-a33933a8d730d069466d786cdd899558.png"},1117:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wasp-fundraise-funnel-bbf1b2a80cd7af81c9e3c6790b4a0541.png"}}]);