(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5075)}])},9006:function(n,t,e){"use strict";var r=e(5893);t.Z=function(n){var t=n.src;return(0,r.jsx)("div",{className:"aspect-video sm:mx-0",children:(0,r.jsx)("img",{src:t,alt:"",className:"w-full h-full object-cover"})})}},9550:function(n,t,e){"use strict";var r=e(5893);t.Z=function(n){var t=n.tagName,e=n.onClick,a=n.hover,o=n.selected;return(0,r.jsxs)("span",{className:"bg-slate-100 p-1.5 mr-1 mt-1 rounded text-xs font-normal \n      ".concat(a&&"cursor-pointer"," \n      ").concat(o&&"bg-secondary text-white","\n      \n      "),onClick:e,children:["#",t]})}},2889:function(n,t,e){"use strict";var r=e(5893),a=e(9008),o=e.n(a),s=e(9953),c=e(4298),i=e.n(c);t.Z=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"\uac1c\ubc1c\uc790 ".concat(s.w)}),(0,r.jsx)("meta",{property:"og:image",content:"/favicon/social_preview.jpeg"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,r.jsx)("meta",{name:"google-site-verification",content:"UvtxWDaEi6g_ZkTZOmiWKdYOwB5WgIEEdhSJ6DWnoVc"})]}),(0,r.jsx)(i(),{src:"https://www.googletagmanager.com/gtag/js?id=G-TKZLCNQKCR",strategy:"afterInteractive"}),(0,r.jsx)(i(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){window.dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-TKZLCNQKCR');\n        "})]})}},9953:function(n,t,e){"use strict";e.d(t,{w:function(){return r}});var r="| \ubb38\uc900\ud638"},5075:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return x},default:function(){return h}});var r=e(603),a=e(5893),o=e(9008),s=e.n(o),c=e(1664),i=e.n(c),l=e(7294),u=e(1163),m=e(9953),f=e(9006),d=e(2889),p=e(9550),g=e(2695),x=!0;function h(n){var t,e,o=n.allPosts,c=n.allTags,x=(0,u.useRouter)();l.useEffect((function(){var n;x.isReady&&w((null===(n=x.query.tag)||void 0===n?void 0:n.toString())||"\uc804\uccb4")}),[x.query.tag]);var h=(null===(t=x.query.tag)||void 0===t?void 0:t.toString())||decodeURI((null===(e=x.asPath.match(new RegExp("[&?]tag=(.*)(&|$)")))||void 0===e?void 0:e[1])||""),v=(0,r.Z)(l.useState(h||"\uc804\uccb4"),2),j=v[0],w=v[1];return(0,a.jsxs)(g.Z,{children:[(0,a.jsx)(d.Z,{}),(0,a.jsxs)(s(),{children:[(0,a.jsxs)("title",{children:["\uac1c\ubc1c\uc790 ",m.w]}),(0,a.jsx)("meta",{name:"description",content:"\uac1c\ubc1c\uc790 ".concat(m.w," | \ube14\ub85c\uadf8")})]}),(0,a.jsx)("div",{className:"flex flex-wrap pt-4",children:c.map((function(n,t){return(0,a.jsx)(p.Z,{tagName:"".concat(n[0]," ").concat(n[1]),onClick:function(){w(n[0]),x.push({pathname:"/",query:{tag:n[0]}})},selected:n[0]===j,hover:!0},t)}))}),(0,a.jsx)("div",{className:"flex flex-wrap pt-4",children:o.filter((function(n){return"\uc804\uccb4"===j||n.tags.includes(j)})).map((function(n,t){var e;return(0,a.jsx)(i(),{as:"/posts/".concat(n.slug),href:"/posts/[slug]",children:(0,a.jsxs)("div",{className:"inline-block w-full my-3 bg-white rounded overflow-hidden cursor-pointer shadow-sm\n              \n\n              md:w-[calc(100%/3-1rem)]\n              md:m-3\n              ".concat(t%3===0&&"md:ml-0"," \n              ").concat(t%3===2&&"md:mr-0","\n              "),children:[(0,a.jsx)(f.Z,{src:n.coverImage}),(0,a.jsxs)("div",{className:"h-[184px] p-3 relative",children:[(0,a.jsx)("h4",{className:"line-clamp-2 mb-2 text-lg font-normal",children:n.title}),(0,a.jsx)("p",{className:"line-clamp-3 text-sm",children:n.excerpt}),(0,a.jsxs)("div",{className:"absolute bottom-3 flex flex-wrap",children:[(0,a.jsx)("span",{className:"bg-slate-100 p-1.5 mr-1 mt-1 rounded text-xs font-normal",children:n.date}),null===(e=n.tags)||void 0===e?void 0:e.map((function(n,t){return(0,a.jsx)(p.Z,{tagName:n},t)}))]})]})]})},t)}))})]})}},9008:function(n,t,e){n.exports=e(5443)},4298:function(n,t,e){n.exports=e(699)},603:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,{Z:function(){return a}})}},function(n){n.O(0,[9774,2888,179],(function(){return t=8312,n(n.s=t);var t}));var t=n.O();_N_E=t}]);