(this.webpackJsonpwnd=this.webpackJsonpwnd||[]).push([[0],{10:function(n,e,t){},11:function(n,e,t){},13:function(n,e,t){"use strict";t.r(e);var c=t(1),s=t.n(c),o=t(4),r=t.n(o),i=(t(10),t(2)),u=(t(11),t(5)),j=t.n(u),a=t(0);function l(n){return Object(a.jsx)("button",{className:"button button2",onClick:function(){n.select_country(n.con),n.get_news(n.con)},children:n.con})}function h(n){if(null==n.cont)var e=n.json;else e=n.json.filter((function(e){return e[1]==n.cont.toUpperCase()}));return Object(a.jsx)(a.Fragment,{children:e.map((function(e){return Object(a.jsx)(l,{con:e[0],select_country:n.select_country,get_news:n.get_news},n.json.indexOf(e))}))})}function d(n){return Object(a.jsx)("li",{class:"list-group-item",children:n.headline})}function b(n){return""==n.country?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"news",children:"Some news from "+n.country}),Object(a.jsx)("ul",{class:"list-group list-group-flush",children:n.news.map((function(e){return Object(a.jsx)(d,{headline:e},n.news.indexOf(e))}))})]})}var f=function(n){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],o=t[1],r=Object(c.useState)([]),u=Object(i.a)(r,2),l=u[0],d=u[1],f=Object(c.useState)("as"),O=Object(i.a)(f,2),x=O[0],g=O[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"display-4 heading",children:"N   E   W   S"}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{className:"col-xl map",children:Object(a.jsx)(j.a,{selected:x,onSelect:g})}),Object(a.jsx)("div",{className:"col-xl menu",children:Object(a.jsx)(h,{cont:x,json:n.json,select_country:function(n){o(n)},get_news:function(n){var e=[];fetch("https://kushagrahans.me/listings/"+n).then((function(n){return n.json()})).then((function(n){for(var t=0;t<n.length;t++)e.push(n[t]);d(e)}))}})})]}),Object(a.jsx)("div",{className:"container listings",children:Object(a.jsx)(b,{news:l,country:s})})]})},O=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(e){var t=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),c(n),s(n),o(n),r(n)}))};fetch("https://kushagrahans.me/con").then((function(n){return n.json()})).then((function(n){return function(n){r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{json:n})}),document.getElementById("root"))}(n)})),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.85d535a3.chunk.js.map