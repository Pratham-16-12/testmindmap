import{s as y,b,e as w,a as $,h as B,c as k,d as u,f as v,g as C,j as h,k as E,l as M,m as j,o as D}from"../chunks/scheduler.C0K_npDq.js";import{S as H,i as I,b as P,c as S,a as T,m as A,t as L,d as R,e as V}from"../chunks/index.TBJpg9q5.js";import{g as N}from"../chunks/entry.Cr5dPzKn.js";import{M as z}from"../chunks/markmap.U9iNCfXW.js";import{T as F}from"../chunks/toolbar.CUJVmcqR.js";import{s as G}from"../chunks/loader.Bi8JGaVy.js";function J(t){let s,l,a,n,p,c,f,m,r;function _(e){t[4](e)}function q(e){t[5](e)}let d={content:t[1]};return t[0]!==void 0&&(d.el=t[0]),t[2]!==void 0&&(d.mm=t[2]),n=new z({props:d}),b.push(()=>P(n,"el",_)),b.push(()=>P(n,"mm",q)),m=new F({props:{class:"absolute right-0 bottom-0 mr-2 mb-2",showBrand:!0,mm:t[2],onREPLView:t[3]}}),{c(){s=w("meta"),l=$(),a=w("main"),S(n.$$.fragment),f=$(),S(m.$$.fragment),this.h()},l(e){const o=B("svelte-mkjjb9",document.head);s=k(o,"META",{name:!0,content:!0}),o.forEach(u),l=v(e),a=k(e,"MAIN",{class:!0});var i=C(a);T(n.$$.fragment,i),f=v(i),T(m.$$.fragment,i),i.forEach(u),this.h()},h(){document.title="markmap in full page view",h(s,"name","Description"),h(s,"content","Show a predefined markmap in full page view."),h(a,"class","markmap-wrapper h-screen")},m(e,o){E(document.head,s),M(e,l,o),M(e,a,o),A(n,a,null),E(a,f),A(m,a,null),r=!0},p(e,[o]){const i={};o&2&&(i.content=e[1]),!p&&o&1&&(p=!0,i.el=e[0],j(()=>p=!1)),!c&&o&4&&(c=!0,i.mm=e[2],j(()=>c=!1)),n.$set(i);const g={};o&4&&(g.mm=e[2]),m.$set(g)},i(e){r||(L(n.$$.fragment,e),L(m.$$.fragment,e),r=!0)},o(e){R(n.$$.fragment,e),R(m.$$.fragment,e),r=!1},d(e){e&&(u(l),u(a)),u(s),V(n),V(m)}}}function K(t,s,l){let a,n="",p;function c(){N("/repl"+window.location.hash)}D(async()=>G(_=>{l(1,n=_)}));function f(r){a=r,l(0,a)}function m(r){p=r,l(2,p)}return[a,n,p,c,f,m]}class Z extends H{constructor(s){super(),I(this,s,K,J,y,{})}}export{Z as component};