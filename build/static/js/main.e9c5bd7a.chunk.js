(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(10),i=c.n(n),l=(c(21),c(5)),r=c(4),o=c(16),j=(c(27),c(2)),b=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)({language:"english",translation:"ASV"}),i=Object(r.a)(n,2),b=i[0],d=i[1],h=Object(s.useState)({from:"Genesis",to:"Revelation"}),u=Object(r.a)(h,2),O=u[0],m=u[1],x=Object(s.useState)(!1),v=Object(r.a)(x,2),p=v[0],f=v[1],N=Object(s.useState)(!1),g=Object(r.a)(N,2),S=g[0],w=g[1],T=Object(s.useState)(!1),F=Object(r.a)(T,2),B=F[0],C=F[1];return Object(j.jsxs)("div",{className:"frontContainer",children:[Object(j.jsxs)("div",{className:S?"frontTop fullscreen":"frontTop",children:[B&&S&&Object(j.jsx)(o.a,{pagination:!1,className:"carousel",breakPoints:[{width:1,itemsToShow:1,itemsToScroll:1},{width:500,itemsToShow:2,itemsToScroll:2},{width:1e3,itemsToShow:3,itemsToScroll:3},{width:1600,itemsToShow:4,itemsToScroll:4}],children:B.results.map((function(e,t){return Object(j.jsxs)("div",{className:"verseContainer",children:[Object(j.jsx)("h2",{className:"passage",children:e.title}),Object(j.jsx)("p",{className:"verse",children:e.preview})]},"verse".concat(t))}))}),B&&S?Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("p",{className:"details",children:"".concat(c," shows up ").concat(B.results.length," times between ").concat(O.from," and ").concat(O.to)}),Object(j.jsx)("button",{className:"searchButton",onClick:function(){w(!1)},children:"Again"})]}):Object(j.jsx)("h1",{className:"frontTitle",children:"Find Bible Words"})]}),Object(j.jsxs)("div",{className:"frontBottom",children:[Object(j.jsx)("div",{className:"frontBorder",children:Object(j.jsx)("p",{className:"frontSubtitle",children:"in one place"})}),Object(j.jsxs)("div",{className:"searchField",children:[Object(j.jsx)("label",{htmlFor:"search",children:"Search"}),Object(j.jsx)("input",{name:"search",type:"text",value:c,onChange:function(e){a(e.target.value)}})]}),Object(j.jsx)("div",{className:"searchField",children:Object(j.jsxs)("div",{className:"searchLane",children:[Object(j.jsxs)("div",{className:"selectField",children:[Object(j.jsx)("label",{children:"Language"}),Object(j.jsx)("select",{value:"english",children:Object(j.jsx)("option",{value:"english",children:"English"})})]}),Object(j.jsxs)("div",{className:"selectField",children:[Object(j.jsx)("label",{children:"Translation"}),Object(j.jsxs)("select",{onChange:function(e){d(Object(l.a)(Object(l.a)({},b),{},{translation:e.target.value}))},value:b.translation,children:[Object(j.jsx)("option",{value:"ASV",children:"ASV"}),Object(j.jsx)("option",{value:"KJV",children:"KJV"}),Object(j.jsx)("option",{value:"LEB",children:"LEB"})]})]})]})}),Object(j.jsx)("div",{className:"searchField",children:Object(j.jsxs)("div",{className:"searchLane",children:[Object(j.jsxs)("div",{className:"selectField",children:[Object(j.jsx)("label",{children:"From"}),Object(j.jsx)("input",{value:O.from,onChange:function(e){m(Object(l.a)(Object(l.a)({},O),{},{from:e.target.value}))}})]}),Object(j.jsxs)("div",{className:"selectField",children:[Object(j.jsx)("label",{children:"To"}),Object(j.jsx)("input",{value:O.to,onChange:function(e){m(Object(l.a)(Object(l.a)({},O),{},{to:e.target.value}))}})]})]})}),Object(j.jsx)("button",{disabled:p,className:"searchButton",onClick:function(){var e=c.trim().replace(" ","-");w(!0),f(!0),fetch("https://api.biblia.com/v1/bible/search/".concat(b.translation,".js?query=").concat(e,"&mode=verse&passages=").concat(O.from,"-").concat(O.to,"&start=0&limit=100000&preview=text&sort=passage&key=ad71372585262d43eebf20e7393e6757")).then((function(e){return e.json()})).then((function(e){setTimeout((function(){C(e),f(!1)}),500)})).catch((function(){f(!1)}))},children:"Go!"})]})]})};var d=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e9c5bd7a.chunk.js.map