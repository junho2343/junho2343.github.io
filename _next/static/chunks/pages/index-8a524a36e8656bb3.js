(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},9006:function(e,t,n){"use strict";var o=n(5893);t.Z=function(e){var t=e.src;return(0,o.jsx)("div",{className:"aspect-video sm:mx-0",children:(0,o.jsx)("img",{src:t,alt:"",className:"w-full h-full object-cover"})})}},2889:function(e,t,n){"use strict";var o=n(5893),r=n(9008),a=n.n(r),c=n(9953),l=n(4298),u=n.n(l);t.Z=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,o.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,o.jsx)("meta",{name:"theme-color",content:"#000"}),(0,o.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,o.jsx)("meta",{name:"description",content:"\uac1c\ubc1c\uc790 ".concat(c.w)}),(0,o.jsx)("meta",{property:"og:image",content:"/favicon/social_preview.jpeg"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,o.jsx)("meta",{name:"google-site-verification",content:"UvtxWDaEi6g_ZkTZOmiWKdYOwB5WgIEEdhSJ6DWnoVc"})]}),(0,o.jsx)(u(),{src:"https://www.googletagmanager.com/gtag/js?id=G-TKZLCNQKCR",strategy:"afterInteractive"}),(0,o.jsx)(u(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){window.dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-TKZLCNQKCR');\n        "})]})}},9953:function(e,t,n){"use strict";n.d(t,{w:function(){return o}});var o="| \ubb38\uc900\ud638"},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,c=r(n(7294)),l=n(6273),u=n(2725),s=n(3462),i=n(1018),f=n(7190),d=n(1210),p=n(8684),v="undefined"!==typeof c.default.useTransition,m={};function h(e,t,n,o){if(e&&l.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;m[t+"%"+n+(r?"%"+r:"")]=!0}}var g=c.default.forwardRef((function(e,t){var n,r=e.href,g=e.as,x=e.children,y=e.prefetch,j=e.passHref,b=e.replace,_=e.soft,w=e.shallow,C=e.scroll,L=e.locale,M=e.onClick,R=e.onMouseEnter,E=e.onTouchStart,k=e.legacyBehavior,N=void 0===k?!0!==Boolean(!1):k,O=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,!N||"string"!==typeof n&&"number"!==typeof n||(n=c.default.createElement("a",null,n));var P=!1!==y,T=o(v?c.default.useTransition():[],2)[1],Z=c.default.useContext(s.RouterContext),I=c.default.useContext(i.AppRouterContext);I&&(Z=I);var S,K=c.default.useMemo((function(){var e=o(l.resolveHref(Z,r,!0),2),t=e[0],n=e[1];return{href:t,as:g?l.resolveHref(Z,g):n||t}}),[Z,r,g]),D=K.href,U=K.as,B=c.default.useRef(D),G=c.default.useRef(U);N&&(S=c.default.Children.only(n));var A=N?S&&"object"===typeof S&&S.ref:t,H=o(f.useIntersection({rootMargin:"200px"}),3),W=H[0],F=H[1],Q=H[2],X=c.default.useCallback((function(e){G.current===U&&B.current===D||(Q(),G.current=U,B.current=D),W(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[U,A,D,Q,W]);c.default.useEffect((function(){var e=F&&P&&l.isLocalURL(D),t="undefined"!==typeof L?L:Z&&Z.locale,n=m[D+"%"+U+(t?"%"+t:"")];e&&!n&&h(Z,D,U,{locale:t})}),[U,D,F,L,P,Z]);var q={ref:X,onClick:function(e){N||"function"!==typeof M||M(e),N&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c,u,s,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var f=function(){"softPush"in t&&"softReplace"in t?t[a?r?"softReplace":"softPush":r?"replace":"push"](n):t[r?"replace":"push"](n,o,{shallow:c,locale:s,scroll:u})};i?i(f):f()}}(e,Z,D,U,b,_,w,C,L,I?T:void 0)},onMouseEnter:function(e){N||"function"!==typeof R||R(e),N&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),l.isLocalURL(D)&&h(Z,D,U,{priority:!0})},onTouchStart:function(e){N||"function"!==typeof E||E(e),N&&S.props&&"function"===typeof S.props.onTouchStart&&S.props.onTouchStart(e),l.isLocalURL(D)&&h(Z,D,U,{priority:!0})}};if(!N||j||"a"===S.type&&!("href"in S.props)){var z="undefined"!==typeof L?L:Z&&Z.locale,J=Z&&Z.isLocaleDomain&&d.getDomainLocale(U,z,Z.locales,Z.domainLocales);q.href=J||p.addBasePath(u.addLocale(U,z,Z&&Z.defaultLocale))}return N?c.default.cloneElement(S,q):c.default.createElement("a",Object.assign({},O,q),n)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!c,i=r.useRef(),f=o(r.useState(!1),2),d=f[0],p=f[1],v=o(r.useState(null),2),m=v[0],h=v[1];r.useEffect((function(){if(c){if(i.current&&(i.current(),i.current=void 0),s||d)return;return m&&m.tagName&&(i.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},u.push(n),l.set(n,t),t}(n),r=o.id,a=o.observer,c=o.elements;return c.set(e,t),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),l.delete(r);var t=u.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&u.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,s,n,t,d]);var g=r.useCallback((function(){p(!1)}),[]);return[h,d,g]};var r=n(7294),a=n(9311),c="function"===typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var c=o.default.createContext(null);t.GlobalLayoutRouterContext=c},5075:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return d}});var o=n(5893),r=n(9008),a=n.n(r),c=n(1664),l=n.n(c),u=n(9953),s=n(9006),i=n(2889),f=!0;function d(e){var t=e.allPosts;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{}),(0,o.jsxs)(a(),{children:[(0,o.jsxs)("title",{children:["\uac1c\ubc1c\uc790 ",u.w]}),(0,o.jsx)("meta",{name:"description",content:"\uac1c\ubc1c\uc790 ".concat(u.w," | \ube14\ub85c\uadf8")})]}),(0,o.jsx)("div",{className:"flex flex-wrap",children:t.map((function(e,t){var n;return(0,o.jsx)(l(),{as:"/posts/".concat(e.slug),href:"/posts/[slug]",children:(0,o.jsxs)("div",{className:"inline-block w-full my-3 bg-white rounded overflow-hidden cursor-pointer shadow-sm\n              \n\n              md:w-[calc(100%/3-1rem)]\n              md:m-3\n              ".concat(t%3===0&&"md:ml-0"," \n              ").concat(t%3===2&&"md:mr-0","\n              "),children:[(0,o.jsx)(s.Z,{src:e.coverImage}),(0,o.jsxs)("div",{className:"h-44 p-3 relative",children:[(0,o.jsx)("h4",{className:"line-clamp-2 mb-2 text-lg font-normal",children:e.title}),(0,o.jsx)("p",{className:"line-clamp-3 text-sm",children:e.excerpt}),(0,o.jsxs)("div",{className:"absolute bottom-3",children:[(0,o.jsx)("span",{className:"bg-slate-100 p-1.5 mr-1 rounded text-xs font-normal",children:e.date}),null===(n=e.tag)||void 0===n?void 0:n.map((function(e,t){return(0,o.jsxs)("span",{className:"bg-slate-100 p-1.5 mr-1 rounded text-xs font-normal",children:["#",e]},t)}))]})]})]})},t)}))})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},4298:function(e,t,n){e.exports=n(699)}},function(e){e.O(0,[9774,2888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);