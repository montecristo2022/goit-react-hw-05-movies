"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{518:function(e,t,n){n.r(t);var a=n(885),s=n(791),i=n(87),r=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],o=(0,s.useState)(!1),u=(0,a.Z)(o,2),l=u[0],h=u[1],p=(0,s.useState)(""),f=(0,a.Z)(p,2),m=f[0],d=f[1],g=(0,s.useState)(""),_=(0,a.Z)(g,2),v=_[0],j=_[1];return(0,s.useEffect)((function(){""!==v&&(console.log(v),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("dfb50cc3b16f950a5a6b0ea437e17f05","&language=en-US&query=").concat(v,"&page=1&include_adult=false")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){c(e.results)})))}),[v]),(0,r.jsxs)("main",{children:[(0,r.jsx)("input",{type:"text",id:"message",name:"message",onChange:function(e){d(e.target.value)},value:m}),(0,r.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),j(m),h(!0)},children:"\u041f\u043e\u0438\u0441\u043a \u0444\u0438\u043b\u044c\u043c\u0430"}),""!==v?n.map((function(e){return(0,r.jsx)(i.rU,{to:"".concat(e.id),children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://png.vector.me/files/images/1/1/110358/inverted_question_mark_alternate_clip_art.jpg",alt:""}),(0,r.jsx)("p",{children:e.vote_average}),(0,r.jsx)("p",{children:e.original_title})]})},e.id)})):null,n.length<1&&!0===l?(0,r.jsxs)("h2",{children:["Film with name ",v," is not exist."]}):null]})}}}]);
//# sourceMappingURL=518.38a463f5.chunk.js.map