import{_ as i}from"./PageComponent.35e754e0.js";import{a as l,w as p,b as n,F as _,r as f,u as g,o as t,c as y}from"./entry.b250e17d.js";import{u as d}from"./composables.647e2869.js";import"./app.config.cfaa18ee.js";import{g as k,u as w}from"./groq.00e2a6ef.js";const v={__name:"[slug]",async setup(x){let e,a;const s=l(),o=k`*[_type == "pages" && tagline == '${s.params.slug}'] `;let r=([e,a]=p(()=>w(o)),e=await e,a(),e).data.value[0].body;return d({title:`Defence Industry | ${s.params.slug}`}),(B,$)=>{const u=i;return t(),n("main",null,[(t(!0),n(_,null,f(g(r),(c,m)=>(t(),y(u,{key:m,section:c},null,8,["section"]))),128))])}}};export{v as default};
