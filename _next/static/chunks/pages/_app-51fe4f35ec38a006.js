(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9080)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,u=n(7273).Z,a=o(n(7294)),l=n(6273),c=n(2725),f=n(3462),i=n(1018),s=n(7190),d=n(1210),p=n(8684),h="undefined"!==typeof a.default.useTransition,v={};function b(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=a.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,m=e.children,x=e.prefetch,j=e.passHref,g=e.replace,_=e.soft,C=e.shallow,M=e.scroll,O=e.locale,w=e.onClick,R=e.onMouseEnter,P=e.onTouchStart,L=e.legacyBehavior,E=void 0===L?!0!==Boolean(!1):L,k=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!E||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var N=!1!==x,T=r(h?a.default.useTransition():[],2)[1],S=a.default.useContext(f.RouterContext),I=a.default.useContext(i.AppRouterContext);I&&(S=I);var Z,U=a.default.useMemo((function(){var e=r(l.resolveHref(S,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(S,y):n||t}}),[S,o,y]),A=U.href,D=U.as,B=a.default.useRef(A),H=a.default.useRef(D);E&&(Z=a.default.Children.only(n));var K=E?Z&&"object"===typeof Z&&Z.ref:t,G=r(s.useIntersection({rootMargin:"200px"}),3),z=G[0],F=G[1],X=G[2],q=a.default.useCallback((function(e){H.current===D&&B.current===A||(X(),H.current=D,B.current=A),z(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[D,K,A,X,z]);a.default.useEffect((function(){var e=F&&N&&l.isLocalURL(A),t="undefined"!==typeof O?O:S&&S.locale,n=v[A+"%"+D+(t?"%"+t:"")];e&&!n&&b(S,A,D,{locale:t})}),[D,A,F,O,N,S]);var J={ref:q,onClick:function(e){E||"function"!==typeof w||w(e),E&&Z.props&&"function"===typeof Z.props.onClick&&Z.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a,c,f,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:a,locale:f,scroll:c})};i?i(s):s()}}(e,S,A,D,g,_,C,M,O,I?T:void 0)},onMouseEnter:function(e){E||"function"!==typeof R||R(e),E&&Z.props&&"function"===typeof Z.props.onMouseEnter&&Z.props.onMouseEnter(e),l.isLocalURL(A)&&b(S,A,D,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof P||P(e),E&&Z.props&&"function"===typeof Z.props.onTouchStart&&Z.props.onTouchStart(e),l.isLocalURL(A)&&b(S,A,D,{priority:!0})}};if(!E||j||"a"===Z.type&&!("href"in Z.props)){var W="undefined"!==typeof O?O:S&&S.locale,Q=S&&S.isLocaleDomain&&d.getDomainLocale(D,W,S.locales,S.domainLocales);J.href=Q||p.addBasePath(c.addLocale(D,W,S&&S.defaultLocale))}return E?a.default.cloneElement(Z,J):a.default.createElement("a",Object.assign({},k,J),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!a,i=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],h=r(o.useState(null),2),v=h[0],b=h[1];o.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),f||d)return;return v&&v.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},c.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[v,f,n,t,d]);var y=o.useCallback((function(){p(!1)}),[]);return[b,d,y]};var o=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var u=r.default.createContext(null);t.LayoutRouterContext=u;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a},9080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(1799),o=n(5893),u=(n(7294),function(e){var t=e.children,n=e.className;return(0,o.jsx)("div",{className:"w-full max-w-4xl min-w-[320px] ".concat(n," px-4"),children:t})}),a=function(){return(0,o.jsx)("div",{className:"w-full h-20 mt-10 flex justify-center border-t border-t-[#d8e0e7] bg-[#f6f9fc] ",children:(0,o.jsxs)(u,{className:"flex items-center",children:[(0,o.jsx)("span",{className:"text-[#8898a9] font-[300]",children:"\xa9 Moon Junho. 2022"}),(0,o.jsx)("a",{href:"https://github.com/junho2343",target:"_blank",children:(0,o.jsx)("img",{src:"/assets/icon_github_logo.svg",alt:"",className:"pl-4"})})]})})},l=n(1664),c=n.n(l),f=n(1163),i=function(){var e=(0,f.useRouter)(),t="/resume"===(null===e||void 0===e?void 0:e.pathname);return(0,o.jsx)("div",{className:"flex justify-center w-full border-b border-b-[#d8e0e7] pt-10 pb-2 sticky top-0 z-10 bg-white",children:(0,o.jsx)(u,{children:(t?[{name:"Resume",href:"/resume"},{name:"Github",href:"https://github.com/junho2343"}]:[{name:"About",href:"/about"},{name:"Posts",href:"/"}]).map((function(e){return e.href.startsWith("http")?(0,o.jsx)("a",{href:e.href,target:"_blank",className:"pr-4 font-[400]",children:e.name}):(0,o.jsx)(c(),{href:e.href,children:(0,o.jsx)("a",{className:"pr-4 font-[400]",children:e.name})})}))})})},s=function(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{}),(0,o.jsx)("div",{className:"min-h-screen flex items-center flex-col relative",children:(0,o.jsx)(u,{children:(0,o.jsx)("main",{children:t})})}),(0,o.jsx)(a,{})]})};n(4186);function d(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s,{children:(0,o.jsx)(t,(0,r.Z)({},n))})})}},4186:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);