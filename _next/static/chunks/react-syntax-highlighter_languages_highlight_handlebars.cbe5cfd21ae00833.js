(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7719],{3512:function(e){function n(e){return e?"string"===typeof e?e:e.source:null}function a(...e){return e.map((e=>n(e))).join("")}e.exports=function(e){const t={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},s=/\[\]|\[[^\]]+\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,l=function(...e){return"("+e.map((e=>n(e))).join("|")+")"}(/""|"[^"]+"/,/''|'[^']+'/,s,i),r=a(a("(",/\.|\.\/|\//,")?"),l,function(e){return a("(",e,")*")}(a(/(\.|\/)/,l))),c=a("(",s,"|",i,")(?==)"),o={begin:r,lexemes:/[\w.\/]+/},m=e.inherit(o,{keywords:{literal:["true","false","undefined","null"]}}),d={begin:/\(/,end:/\)/},u={className:"attr",begin:c,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,m,d]}}},b={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},u,m,d],returnEnd:!0},g=e.inherit(o,{className:"name",keywords:t,starts:e.inherit(b,{end:/\)/})});d.contains=[g];const p=e.inherit(o,{keywords:t,className:"name",starts:e.inherit(b,{end:/\}\}/})}),N=e.inherit(o,{keywords:t,className:"name"}),h=e.inherit(o,{className:"name",keywords:t,starts:e.inherit(b,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[p],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[N]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[p]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[N]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[h]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[h]}]}}}}]);