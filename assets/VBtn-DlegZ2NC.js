import{m as _,k as x,a as R,b as z,y as w,l as O,c as j,d as E,e as K,P as le,Q as ie,p as oe,S as ue,v as de,w as ce,x as ve,n as re,R as me,z as fe,q as be,g as ye,A as ke,o as ge,T as Pe,B as Ve,C as Ce,h as g,V as P,i as Be}from"./VAvatar-dmscyC76.js";import{p as y,m as N,a as F,d as $,g as C,e as q,A as he,t as V,u as B,c as s,B as Ie,aD as Se,h as r,w as De,D as Le,a1 as A,a4 as Te,a5 as Ae}from"./index-iVPC1WgH.js";const J=y({divided:Boolean,..._(),...N(),...x(),...R(),...z(),...F(),...$(),...w()},"VBtnGroup"),G=C()({name:"VBtnGroup",props:J(),setup(e,o){let{slots:t}=o;const{themeClasses:n}=q(e),{densityClasses:u}=O(e),{borderClasses:d}=j(e),{elevationClasses:c}=E(e),{roundedClasses:v}=K(e);he({VBtn:{height:"auto",color:V(e,"color"),density:V(e,"density"),flat:!0,variant:V(e,"variant")}}),B(()=>s(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,d.value,u.value,c.value,v.value,e.class],style:e.style},t))}}),Q=Symbol.for("vuetify:v-btn-toggle"),Ge=y({...J(),...le()},"VBtnToggle");C()({name:"VBtnToggle",props:Ge(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isSelected:n,next:u,prev:d,select:c,selected:v}=ie(e,Q);return B(()=>{const k=G.filterProps(e);return s(G,Ie({class:["v-btn-toggle",e.class]},k,{style:e.style}),{default:()=>{var m;return[(m=t.default)==null?void 0:m.call(t,{isSelected:n,next:u,prev:d,select:c,selected:v})]}})}),{next:u,prev:d,select:c}}});const _e=["static","relative","fixed","absolute","sticky"],xe=y({position:{type:String,validator:e=>_e.includes(e)}},"position");function Re(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Se();return{positionClasses:r(()=>e.position?`${o}--${e.position}`:void 0)}}function ze(e,o){De(()=>{var t;return(t=e.isActive)==null?void 0:t.value},t=>{e.isLink.value&&t&&o&&Le(()=>{o(!0)})},{immediate:!0})}const we=y({active:{type:Boolean,default:void 0},symbol:{type:null,default:Q},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:A,appendIcon:A,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,..._(),...N(),...x(),...oe(),...R(),...ue(),...de(),...ce(),...xe(),...z(),...ve(),...re(),...F({tag:"button"}),...$(),...w({variant:"elevated"})},"VBtn"),Ee=C()({name:"VBtn",directives:{Ripple:me},props:we(),emits:{"group:selected":e=>!0},setup(e,o){let{attrs:t,slots:n}=o;const{themeClasses:u}=q(e),{borderClasses:d}=j(e),{colorClasses:c,colorStyles:v,variantClasses:k}=fe(e),{densityClasses:m}=O(e),{dimensionStyles:H}=be(e),{elevationClasses:M}=E(e),{loaderClasses:U}=ye(e),{locationStyles:W}=ke(e),{positionClasses:X}=Re(e),{roundedClasses:Y}=K(e),{sizeClasses:Z,sizeStyles:p}=ge(e),a=Pe(e,e.symbol,!1),l=Ve(e,t),ee=r(()=>{var i;return e.active!==void 0?e.active:l.isLink.value?(i=l.isActive)==null?void 0:i.value:a==null?void 0:a.isSelected.value}),f=r(()=>(a==null?void 0:a.disabled.value)||e.disabled),ae=r(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),ne=r(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function te(i){var b;f.value||l.isLink.value&&(i.metaKey||i.ctrlKey||i.shiftKey||i.button!==0||t.target==="_blank")||((b=l.navigate)==null||b.call(l,i),a==null||a.toggle())}return ze(l,a==null?void 0:a.select),B(()=>{var S,D;const i=l.isLink.value?"a":e.tag,b=!!(e.prependIcon||n.prepend),se=!!(e.appendIcon||n.append),h=!!(e.icon&&e.icon!==!0),I=(a==null?void 0:a.isSelected.value)&&(!l.isLink.value||((S=l.isActive)==null?void 0:S.value))||!a||((D=l.isActive)==null?void 0:D.value);return Te(s(i,{type:i==="a"?void 0:"button",class:["v-btn",a==null?void 0:a.selectedClass.value,{"v-btn--active":ee.value,"v-btn--block":e.block,"v-btn--disabled":f.value,"v-btn--elevated":ae.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},u.value,d.value,I?c.value:void 0,m.value,M.value,U.value,X.value,Y.value,Z.value,k.value,e.class],style:[I?v.value:void 0,H.value,W.value,p.value,e.style],disabled:f.value||void 0,href:l.href.value,onClick:te,value:ne.value},{default:()=>{var L;return[Ce(!0,"v-btn"),!e.icon&&b&&s("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?s(P,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):s(g,{key:"prepend-icon",icon:e.prependIcon},null)]),s("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&h?s(g,{key:"content-icon",icon:e.icon},null):s(P,{key:"content-defaults",disabled:!h,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var T;return[((T=n.default)==null?void 0:T.call(n))??e.text]}})]),!e.icon&&se&&s("span",{key:"append",class:"v-btn__append"},[n.append?s(P,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):s(g,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&s("span",{key:"loader",class:"v-btn__loader"},[((L=n.loader)==null?void 0:L.call(n))??s(Be,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ae("ripple"),!f.value&&e.ripple,null]])}),{group:a}}});export{Ee as V,xe as m,Re as u};
