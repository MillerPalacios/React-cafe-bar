(this["webpackJsonpcafe-bar"]=this["webpackJsonpcafe-bar"]||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var n=a(25),c=a.n(n),s=a(26),i=a(34),r=a(8),o=a(1),l=a(35),u=a.n(l),b=a(134),j=a.n(b),m=(a(49),a(65),a(81),a(146)),d=a(0);function O(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];Object(o.useEffect)((function(){a&&new Promise((function(e){return setTimeout(e,2e3)})).then((function(){n(!1)}))}),[a]);return Object(d.jsx)(m.a,{variant:"ligth",className:"btn-pdf",disabled:a,onClick:a?null:function(){return n(!0)},children:a?"Descargando\u2026":"Descargar men\xfa"})}var f=a(77),p=a(135),h=a.n(p),v=function(){h.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",h.a.stopTimer),e.addEventListener("mouseleave",h.a.resumeTimer)}}).fire({icon:"success",title:"Agregado al carrito"})};t.default=function(){var e=Object(o.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(o.useState)([]),b=Object(r.a)(l,2),m=b[0],p=b[1],h=Object(o.useState)(12),x=Object(r.a)(h,1)[0],g=Object(o.useState)(0),N=Object(r.a)(g,2),k=N[0],C=N[1],S=Object(f.a)([],"datos"),w=Object(r.a)(S,2),L=w[0],D=w[1],E=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://617716f19c328300175f57cb.mockapi.io/menu");case 2:t=e.sent,n=t.data,i=n.slice(a,a+x),r=i.map((function(e){return Object(d.jsx)("section",{className:"menu",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"menu-container",children:Object(d.jsxs)("div",{className:"menu-item filter-starters",children:[Object(d.jsx)("img",{src:e.imgSrc,className:"menu-img",alt:""}),Object(d.jsxs)("div",{className:"menu-content",children:[Object(d.jsx)("label",{className:"nombre",children:e.title}),Object(d.jsx)("span",{className:"precio",children:e.precio})]}),Object(d.jsx)("div",{className:"menu-ingredients",children:Object(d.jsxs)("p",{className:"descrip",children:[e.descripcion,Object(d.jsx)("i",{className:"bi-cart add-to-cart-btn",value:L,onClick:function(){D((function(t){return[].concat(Object(s.a)(t),[e])})),v()}})]})})]})})})},e.id)})),p(r),C(Math.ceil(n.length/x));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){E()}),[a]),Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("label",{className:"text-menu",children:"Men\xfa"}),Object(d.jsx)(O,{}),Object(d.jsx)("div",{className:"platos-menu",children:m}),Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{previousLabel:"Anterior",nextLabel:"Siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:k,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){var t=e.selected;n(t+1)},containerClassName:"pagination",activeClassName:"active"})})]})}}}]);
//# sourceMappingURL=4.2a48e853.chunk.js.map