(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},9006:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.src;return(0,r.jsx)("div",{className:"aspect-video sm:mx-0",children:(0,r.jsx)("img",{src:t,alt:"",className:"w-full h-full object-cover"})})}},498:function(e,t,n){"use strict";var r=n(5893),o=n(8420),a=n(6159);t.Z=function(e){var t=e.dateString,n=(0,o.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,a.Z)(n,"yyyy-MM-dd HH:mm")})}},2889:function(e,t,n){"use strict";var r=n(5893),o=n(9008),a=n.n(o),u=n(9953);t.Z=function(){return(0,r.jsxs)(a(),{children:[(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"\uac1c\ubc1c\uc790 ".concat(u.w)}),(0,r.jsx)("meta",{property:"og:image",content:"/favicon/social_preview.jpeg"})]})}},9953:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var r="| \ubb38\uc900\ud638"},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),c=n(6273),l=n(2725),i=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),v="undefined"!==typeof u.default.useTransition,m={};function h(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(o?"%"+o:"")]=!0}}var y=u.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,x=e.children,j=e.prefetch,_=e.passHref,b=e.replace,g=e.soft,w=e.shallow,C=e.scroll,M=e.locale,R=e.onClick,L=e.onMouseEnter,E=e.onTouchStart,k=e.legacyBehavior,N=void 0===k?!0!==Boolean(!1):k,O=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,!N||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var P=!1!==j,T=r(v?u.default.useTransition():[],2)[1],Z=u.default.useContext(i.RouterContext),S=u.default.useContext(s.AppRouterContext);S&&(Z=S);var I,H=u.default.useMemo((function(){var e=r(c.resolveHref(Z,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?c.resolveHref(Z,y):n||t}}),[Z,o,y]),U=H.href,A=H.as,B=u.default.useRef(U),D=u.default.useRef(A);N&&(I=u.default.Children.only(n));var K=N?I&&"object"===typeof I&&I.ref:t,G=r(f.useIntersection({rootMargin:"200px"}),3),X=G[0],q=G[1],z=G[2],F=u.default.useCallback((function(e){D.current===A&&B.current===U||(z(),D.current=A,B.current=U),X(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[A,K,U,z,X]);u.default.useEffect((function(){var e=q&&P&&c.isLocalURL(U),t="undefined"!==typeof M?M:Z&&Z.locale,n=m[U+"%"+A+(t?"%"+t:"")];e&&!n&&h(Z,U,A,{locale:t})}),[A,U,q,M,P,Z]);var J={ref:F,onClick:function(e){N||"function"!==typeof R||R(e),N&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n)){e.preventDefault();var f=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:l})};s?s(f):f()}}(e,Z,U,A,b,g,w,C,M,S?T:void 0)},onMouseEnter:function(e){N||"function"!==typeof L||L(e),N&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),c.isLocalURL(U)&&h(Z,U,A,{priority:!0})},onTouchStart:function(e){N||"function"!==typeof E||E(e),N&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),c.isLocalURL(U)&&h(Z,U,A,{priority:!0})}};if(!N||_||"a"===I.type&&!("href"in I.props)){var Q="undefined"!==typeof M?M:Z&&Z.locale,V=Z&&Z.isLocaleDomain&&d.getDomainLocale(A,Q,Z.locales,Z.domainLocales);J.href=V||p.addBasePath(l.addLocale(A,Q,Z&&Z.defaultLocale))}return N?u.default.cloneElement(I,J):u.default.createElement("a",Object.assign({},O,J),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!u,s=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],v=r(o.useState(null),2),m=v[0],h=v[1];o.useEffect((function(){if(u){if(s.current&&(s.current(),s.current=void 0),i||d)return;return m&&m.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},l.push(n),c.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,i,n,t,d]);var y=o.useCallback((function(){p(!1)}),[]);return[h,d,y]};var o=n(7294),a=n(9311),u="function"===typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u},5075:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return p}});var r=n(5893),o=n(9008),a=n.n(o),u=n(1664),c=n.n(u),l=n(9953),i=n(9006),s=n(498),f=n(2889),d=!0;function p(e){var t=e.allPosts;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{}),(0,r.jsx)(a(),{children:(0,r.jsxs)("title",{children:["\uac1c\ubc1c\uc790 ",l.w]})}),(0,r.jsx)("div",{className:"flex flex-wrap",children:t.map((function(e,t){return(0,r.jsx)(c(),{as:"/posts/".concat(e.slug),href:"/posts/[slug]",children:(0,r.jsxs)("div",{className:"inline-block w-full my-3 bg-white rounded overflow-hidden cursor-pointer shadow-sm\n              \n\n              md:w-[calc(100%/3-1rem)]\n              md:m-3\n              ".concat(t%3===0&&"md:ml-0"," \n              ").concat(t%3===2&&"md:mr-0","\n              "),children:[(0,r.jsx)(i.Z,{src:e.coverImage}),(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsx)("h3",{className:"h-14 line-clamp-2 mb-2",children:e.title}),(0,r.jsx)("p",{className:"h-16 line-clamp-3 text-sm",children:e.excerpt}),(0,r.jsxs)("p",{className:"pt-3 flex items-center",children:[(0,r.jsx)("img",{src:"/assets/icon_time.svg",alt:"",className:"mr-1 mb-0.5 w-5"}),(0,r.jsx)(s.Z,{dateString:e.date})]})]})]})},t)}))})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[603,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);