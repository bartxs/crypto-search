(this["webpackJsonpreact-api-crypto"]=this["webpackJsonpreact-api-crypto"]||[]).push([[0],{20:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(2),r=t.n(n),s=t(13),i=t.n(s),o=t(4),p=(t(20),t(14)),l=t.n(p),j=(t(38),function(e){var c=e.name,t=e.image,n=e.symbol,r=e.price,s=e.volume,i=e.priceChange,o=e.marketcap;return Object(a.jsx)("div",{className:"coin-container",children:Object(a.jsxs)("div",{className:"coin-row",children:[Object(a.jsxs)("div",{className:"coin",children:[Object(a.jsx)("img",{src:t,alt:"crypto"}),Object(a.jsx)("h1",{children:c}),Object(a.jsx)("p",{className:"coin-symbol",children:n})]}),Object(a.jsxs)("div",{className:"coin-data",children:[Object(a.jsxs)("p",{className:"coin-price",children:["\u20ac ",r]}),Object(a.jsxs)("p",{className:"coin-volume",children:["\u20ac ",s.toLocaleString()]}),i<0?Object(a.jsxs)("p",{className:"coin-percent red",children:[i,"%"]}):Object(a.jsxs)("p",{className:"coin-percent green",children:[i,"%"]}),Object(a.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: \u20ac ",o.toLocaleString()]})]})]})})});var m=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],r=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),p=i[0],m=i[1];Object(n.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]);var h=t.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return Object(a.jsxs)("div",{className:"coin-app",children:[Object(a.jsxs)("div",{className:"coin-search",children:[Object(a.jsx)("h1",{className:"coin-text",children:"Search for Crypto"}),Object(a.jsx)("form",{children:Object(a.jsx)("input",{type:"text",className:"coin-input",placeholder:"Search",onChange:function(e){m(e.target.value)}})})]}),h.map((function(e){return console.log(typeof e.price_change_percentage_24h),Object(a.jsx)(j,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:"number"==typeof e.price_change_percentage_24h?e.price_change_percentage_24h.toFixed(2):e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.430bc2ca.chunk.js.map