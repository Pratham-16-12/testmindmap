import{s as L,b,a as D,f as P,l as F,m as v,d as H,o as z}from"../chunks/scheduler.C0K_npDq.js";import{S as E,i as R,b as k,c as $,a as h,m as C,t as M,d as S,e as T}from"../chunks/index.TBJpg9q5.js";import{i as q,g as O}from"../chunks/common.B3UbMWRD.js";import{M as U}from"../chunks/markmap.U9iNCfXW.js";import{T as V}from"../chunks/toolbar.CUJVmcqR.js";function X(t){let o,i,l,m,f,a,s;function d(e){t[5](e)}function g(e){t[6](e)}function _(e){t[7](e)}let u={class:"w-screen h-screen",fit:t[3],content:t[2],onReload:B,onOpenLink:G};return t[0]!==void 0&&(u.mm=t[0]),t[1]!==void 0&&(u.el=t[1]),t[4]!==void 0&&(u.setCursor=t[4]),o=new U({props:u}),b.push(()=>k(o,"mm",d)),b.push(()=>k(o,"el",g)),b.push(()=>k(o,"setCursor",_)),a=new V({props:{class:"absolute right-0 bottom-0 mr-2 mb-2",mm:t[0],onFullPageView:A}}),{c(){$(o.$$.fragment),f=D(),$(a.$$.fragment)},l(e){h(o.$$.fragment,e),f=P(e),h(a.$$.fragment,e)},m(e,n){C(o,e,n),F(e,f,n),C(a,e,n),s=!0},p(e,[n]){const r={};n&8&&(r.fit=e[3]),n&4&&(r.content=e[2]),!i&&n&1&&(i=!0,r.mm=e[0],v(()=>i=!1)),!l&&n&2&&(l=!0,r.el=e[1],v(()=>l=!1)),!m&&n&16&&(m=!0,r.setCursor=e[4],v(()=>m=!1)),o.$set(r);const c={};n&1&&(c.mm=e[0]),a.$set(c)},i(e){s||(M(o.$$.fragment,e),M(a.$$.fragment,e),s=!0)},o(e){S(o.$$.fragment,e),S(a.$$.fragment,e),s=!1},d(e){e&&H(f),T(o,e),T(a,e)}}}function p(t,o){parent.postMessage({type:t,data:o},window.location.origin)}function j(){p("getData")}function A(){p("goToFullPage")}function B(){window.location.reload()}function G(t){const o=new URL(t,window.top.location.href);return o.origin===window.location.origin?p("navigate",t):window.open(o,"_blank"),!1}function I(t,o,i){let l,m,f="",a=!0,s;const d={setData(n){i(2,f=n)},setCursor(n){s==null||s(n)},setFit(n){i(3,a=n)},downloadSvg(){if(!m)return;const n=new XMLSerializer().serializeToString(m);p("downloadSvg",n)},downloadHtml(){const n=O();if(!n)return;const r=n.transform(f);p("downloadHtml",{result:r})},updateTheme(n){q.set(n)}};function g(n){const{type:r,data:c}=n.data,w=d[r];w==null||w(c)}z(()=>(window.addEventListener("message",g),j(),()=>{window.removeEventListener("message",g)}));function _(n){l=n,i(0,l)}function u(n){m=n,i(1,m)}function e(n){s=n,i(4,s)}return[l,m,f,a,s,_,u,e]}class Y extends E{constructor(o){super(),R(this,o,I,X,L,{})}}export{Y as component};
