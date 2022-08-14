import{m as y,c as A,$ as h,a as N,b as C,d as B,e as F,f as I,r as p,g as c,h as a,i as J,j as $,k as g,N as W,B as b,l as j}from"./works.d944391c.js";import"./project.astro_astro_type_style_index_0_lang.695975a6.js";const f="astro:jsx",l=Symbol("empty"),m=t=>t.trim().replace(/[-_]([a-z])/g,(r,s)=>s.toUpperCase());function i(t){return t&&typeof t=="object"&&t[f]}function x(t){if(typeof t.type=="string")return t;const r={};if(i(t.props.children)){const s=t.props.children;if(!i(s)||!("slot"in s.props))return;const e=m(s.props.slot);r[e]=[s],r[e].$$slot=!0,delete s.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(s=>{if(!i(s)||!("slot"in s.props))return s;const e=m(s.props.slot);return Array.isArray(r[e])?r[e].push(s):(r[e]=[s],r[e].$$slot=!0),delete s.props.slot,l}).filter(s=>s!==l)),Object.assign(t.props,r)}function d(t){return typeof t=="string"?y(t):Array.isArray(t)?t.map(r=>d(r)):t}function S(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const r=d(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:r});return}if("set:text"in t.props){const r=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:r});return}}}function O(t,r){const s={[f]:!0,type:t,props:r??{}};return S(s),x(s),s}A("/@fs/home/runner/work/my-portfolio-astro/my-portfolio-astro/src/layouts/project.astro",{modules:[{module:h,specifier:"../components/MainHead.astro",assert:{}},{module:N,specifier:"../components/Button/index.jsx",assert:{}},{module:C,specifier:"../components/Footer/index.jsx",assert:{}},{module:B,specifier:"../components/Nav/index.jsx",assert:{}}],hydratedComponents:[],clientOnlyComponents:[],hydrationDirectives:new Set([]),hoisted:[]});const w=F("/@fs/home/runner/work/my-portfolio-astro/my-portfolio-astro/src/layouts/project.astro","","file:///home/runner/work/my-portfolio-astro/my-portfolio-astro/"),k=I(async(t,r,s)=>{const e=t.createAstro(w,r,s);e.self=k;const{content:o}=e.props,u=[];for(const n of u)t.styles.add(n);return p`<html${c(o.lang||"en","lang")} class="astro-FNBAIWJC">
	<head>
		${a(t,"MainHead",J,{title:o.title,description:o.description,class:"astro-FNBAIWJC"})}
		
	${$(t)}</head>
	<body class="astro-FNBAIWJC">
		${a(t,"Nav",W,{class:"astro-FNBAIWJC"})}
		<header${c(`background-image:url(${o.img})`,"style")} class="hero astro-FNBAIWJC">
			<h1 class="title astro-FNBAIWJC">${o.title}</h1>
		</header>
		<div class="leadIn astro-FNBAIWJC">
			<div class="wrapper pt8 pb8 mb8 tac astro-FNBAIWJC">
				${o.tags.map(n=>p`<span class="tag astro-FNBAIWJC">${n}</span>`)}
				<h3 class="tagline astro-FNBAIWJC">${o.description}</h3>
			</div>
		</div>
		<div class="wrapper wrapper__readable astro-FNBAIWJC">
			<div class="content astro-FNBAIWJC">${g(t,s.default)}</div>
		</div>
		<footer class="tac mt6 astro-FNBAIWJC">
			<a href="/projects" class="astro-FNBAIWJC">
				${a(t,"Button",b,{class:"astro-FNBAIWJC"},{default:()=>p`View More`})}
			</a>
		</footer>
		${a(t,"Footer",j,{class:"astro-FNBAIWJC"})}
	</body></html>`});export{k as $,O as c};
