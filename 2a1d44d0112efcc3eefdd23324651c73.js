var VueDemi = Vue3
VueDemi.set =function(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}
VueDemi.set = function(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}
VueDemi.del = function(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}
/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
var Pinia=function(t,e){"use strict";let n;const i=t=>n=t,s=Symbol();function r(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var o;t.MutationType=void 0,(o=t.MutationType||(t.MutationType={})).direct="direct",o.patchObject="patch object",o.patchFunction="patch function";const c="undefined"!=typeof window;const a=()=>{};function u(t,n,i,s=a){t.push(n);const r=()=>{const e=t.indexOf(n);e>-1&&(t.splice(e,1),s())};return!i&&e.getCurrentScope()&&e.onScopeDispose(r),r}function p(t,...e){t.slice().forEach((t=>{t(...e)}))}function f(t,n){t instanceof Map&&n instanceof Map&&n.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const i in n){if(!n.hasOwnProperty(i))continue;const s=n[i],o=t[i];t[i]=r(o)&&r(s)&&t.hasOwnProperty(i)&&!e.isRef(s)&&!e.isReactive(s)?f(o,s):s}return t}const h=Symbol(),l=new WeakMap;const{assign:d}=Object;function y(n,s,o={},c,y,v){let $;const b=d({actions:{}},o),_={deep:!0};let j,O,g,m=e.markRaw([]),R=e.markRaw([]);const S=c.state.value[n];let P;function w(i){let s;j=O=!1,"function"==typeof i?(i(c.state.value[n]),s={type:t.MutationType.patchFunction,storeId:n,events:g}):(f(c.state.value[n],i),s={type:t.MutationType.patchObject,payload:i,storeId:n,events:g});const r=P=Symbol();e.nextTick().then((()=>{P===r&&(j=!0)})),O=!0,p(m,s,c.state.value[n])}v||S||(e.isVue2?e.set(c.state.value,n,{}):c.state.value[n]={}),e.ref({});const V=a;function M(t,e){return function(){i(c);const s=Array.from(arguments),r=[],o=[];function a(t){r.push(t)}function u(t){o.push(t)}let f;p(R,{args:s,name:t,store:A,after:a,onError:u});try{f=e.apply(this&&this.$id===n?this:A,s)}catch(t){throw p(o,t),t}return f instanceof Promise?f.then((t=>(p(r,t),t))).catch((t=>(p(o,t),Promise.reject(t)))):(p(r,f),f)}}const k={_p:c,$id:n,$onAction:u.bind(null,R),$patch:w,$reset:V,$subscribe(i,s={}){const r=u(m,i,s.detached,(()=>o())),o=$.run((()=>e.watch((()=>c.state.value[n]),(e=>{("sync"===s.flush?O:j)&&i({storeId:n,type:t.MutationType.direct,events:g},e)}),d({},_,s))));return r},$dispose:function(){$.stop(),m=[],R=[],c._s.delete(n)}};e.isVue2&&(k._r=!1);const A=e.reactive(k);c._s.set(n,A);const T=c._e.run((()=>($=e.effectScope(),$.run((()=>s())))));for(const t in T){const i=T[t];if(e.isRef(i)&&(!e.isRef(I=i)||!I.effect)||e.isReactive(i))v||(!S||(E=i,e.isVue2?l.has(E):r(E)&&E.hasOwnProperty(h))||(e.isRef(i)?i.value=S[t]:f(i,S[t])),e.isVue2?e.set(c.state.value[n],t,i):c.state.value[n][t]=i);else if("function"==typeof i){const n=M(t,i);e.isVue2?e.set(T,t,n):T[t]=n,b.actions[t]=i}}var E,I;return e.isVue2?Object.keys(T).forEach((t=>{e.set(A,t,T[t])})):(d(A,T),d(e.toRaw(A),T)),Object.defineProperty(A,"$state",{get:()=>c.state.value[n],set:t=>{w((e=>{d(e,t)}))}}),e.isVue2&&(A._r=!0),c._p.forEach((t=>{d(A,$.run((()=>t({store:A,app:c._a,pinia:c,options:b}))))})),S&&v&&o.hydrate&&o.hydrate(A.$state,S),j=!0,O=!0,A}let v="Store";function $(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]=function(){return t(this.$pinia)[n]},e)),{}):Object.keys(e).reduce(((n,i)=>(n[i]=function(){const n=t(this.$pinia),s=e[i];return"function"==typeof s?s.call(this,n):n[s]},n)),{})}const b=$;return t.PiniaVuePlugin=function(t){t.mixin({beforeCreate(){const t=this.$options;if(t.pinia){const e=t.pinia;if(!this._provided){const t={};Object.defineProperty(this,"_provided",{get:()=>t,set:e=>Object.assign(t,e)})}this._provided[s]=e,this.$pinia||(this.$pinia=e),e._a=this,c&&i(e)}else!this.$pinia&&t.parent&&t.parent.$pinia&&(this.$pinia=t.parent.$pinia)},destroyed(){delete this._pStores}})},t.acceptHMRUpdate=function(t,e){return()=>{}},t.createPinia=function(){const t=e.effectScope(!0),n=t.run((()=>e.ref({})));let r=[],o=[];const c=e.markRaw({install(t){i(c),e.isVue2||(c._a=t,t.provide(s,c),t.config.globalProperties.$pinia=c,o.forEach((t=>r.push(t))),o=[])},use(t){return this._a||e.isVue2?r.push(t):o.push(t),this},_p:r,_a:null,_e:t,_s:new Map,state:n});return c},t.defineStore=function(t,r,o){let c,a;const u="function"==typeof r;function p(t,o){const p=e.getCurrentInstance();(t=t||p&&e.inject(s,null))&&i(t),(t=n)._s.has(c)||(u?y(c,r,a,t):function(t,n,s,r){const{state:o,actions:c,getters:a}=n,u=s.state.value[t];let p;p=y(t,(function(){u||(e.isVue2?e.set(s.state.value,t,o?o():{}):s.state.value[t]=o?o():{});const n=e.toRefs(s.state.value[t]);return d(n,c,Object.keys(a||{}).reduce(((n,r)=>(n[r]=e.markRaw(e.computed((()=>{i(s);const n=s._s.get(t);if(!e.isVue2||n._r)return a[r].call(n,n)}))),n)),{}))}),n,s,0,!0),p.$reset=function(){const t=o?o():{};this.$patch((e=>{d(e,t)}))}}(c,a,t));return t._s.get(c)}return"string"==typeof t?(c=t,a=u?o:r):(a=t,c=t.id),p.$id=c,p},t.getActivePinia=()=>e.getCurrentInstance()&&e.inject(s)||n,t.mapActions=function(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]=function(...e){return t(this.$pinia)[n](...e)},e)),{}):Object.keys(e).reduce(((n,i)=>(n[i]=function(...n){return t(this.$pinia)[e[i]](...n)},n)),{})},t.mapGetters=b,t.mapState=$,t.mapStores=function(...t){return t.reduce(((t,e)=>(t[e.$id+v]=function(){return e(this.$pinia)},t)),{})},t.mapWritableState=function(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]={get(){return t(this.$pinia)[n]},set(e){return t(this.$pinia)[n]=e}},e)),{}):Object.keys(e).reduce(((n,i)=>(n[i]={get(){return t(this.$pinia)[e[i]]},set(n){return t(this.$pinia)[e[i]]=n}},n)),{})},t.setActivePinia=i,t.setMapStoreSuffix=function(t){v=t},t.skipHydrate=function(t){return e.isVue2?l.set(t,1)&&t:Object.defineProperty(t,h,{})},t.storeToRefs=function(t){if(e.isVue2)return e.toRefs(t);{t=e.toRaw(t);const n={};for(const i in t){const s=t[i];(e.isRef(s)||e.isReactive(s))&&(n[i]=e.toRef(t,i))}return n}},Object.defineProperty(t,"__esModule",{value:!0}),t}({},VueDemi);

