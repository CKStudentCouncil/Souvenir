const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainLayout-oIpLME_6.js","assets/MainLayout-BxOPtNEZ.css","assets/HomePage-uQGIDzrT.js","assets/catalog-CMgAmKpx.js","assets/HomePage-DynLzOXU.css","assets/ProductPage-DcVk7-95.js","assets/cart-DaSpHWIX.js","assets/ProductPage-M949wkh3.css","assets/CartPage-BltLYUEv.js","assets/orderService-BUUsbuxN.js","assets/CartPage-gJQGnMtU.css","assets/OrderSuccessPage-B_um3qdL.js","assets/OrderSuccessPage-D10zPSSa.css","assets/OrdersPage-DBfvjZXV.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/OrdersPage-D9TWRHQr.css","assets/OrderDetailPage-DCAJTQm2.js","assets/app-C9qWJ0yl.js","assets/OrderDetailPage-DpVTa5iP.css","assets/TermsPage-DbKjDFb7.js","assets/TermsPage-Bg43QWmE.css","assets/AboutPage-DAZNKikv.js","assets/AboutPage-ChaxHzRl.css","assets/ComingSoonPage-DCZWgow5.js","assets/ComingSoonPage-DEHHwKO6.css","assets/AdminPage-z6FVOBeq.js","assets/AdminPage-Dk0eqQuN.css","assets/AccountPage-xHTc4pEj.js","assets/AccountPage-BGD3aAuB.css","assets/AdminLoginPage-ChWWd2xW.js","assets/AdminLoginPage-skmGsMzE.css"])))=>i.map(i=>d[i]);
const xT=(function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"})(),VT=function(t){return"/"+t},cd={},at=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");s=o(n.map(u=>{if(u=VT(u),u in cd)return;cd[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":xT,f||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((v,S)=>{m.addEventListener("load",v),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},xs=[],In=()=>{},fg=()=>!1,ic=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oc=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Wu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},MT=Object.prototype.hasOwnProperty,ke=(t,e)=>MT.call(t,e),se=Array.isArray,Vs=t=>yo(t)==="[object Map]",ei=t=>yo(t)==="[object Set]",ld=t=>yo(t)==="[object Date]",me=t=>typeof t=="function",$e=t=>typeof t=="string",Yt=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",dg=t=>(De(t)||me(t))&&me(t.then)&&me(t.catch),pg=Object.prototype.toString,yo=t=>pg.call(t),LT=t=>yo(t).slice(8,-1),mg=t=>yo(t)==="[object Object]",ac=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mi=zu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},FT=/-\w/g,St=cc(t=>t.replace(FT,e=>e.slice(1).toUpperCase())),UT=/\B([A-Z])/g,cs=cc(t=>t.replace(UT,"-$1").toLowerCase()),lc=cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),hl=cc(t=>t?`on${lc(t)}`:""),wn=(t,e)=>!Object.is(t,e),sa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},uc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},BT=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let ud;const hc=()=>ud||(ud=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gu(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?HT(r):Gu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||De(t))return t}const jT=/;(?![^(]*\))/g,$T=/:([^]+)/,qT=/\/\*[^]*?\*\//g;function HT(t){const e={};return t.replace(qT,"").split(jT).forEach(n=>{if(n){const r=n.split($T);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ku(t){let e="";if($e(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=Ku(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",WT=zu(zT);function _g(t){return!!t||t===""}function GT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ti(t[r],e[r]);return n}function ti(t,e){if(t===e)return!0;let n=ld(t),r=ld(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Yt(t),r=Yt(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?GT(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ti(t[o],e[o]))return!1}}return String(t)===String(e)}function Qu(t,e){return t.findIndex(n=>ti(n,e))}const yg=t=>!!(t&&t.__v_isRef===!0),Kl=t=>$e(t)?t:t==null?"":se(t)||De(t)&&(t.toString===pg||!me(t.toString))?yg(t)?Kl(t.value):JSON.stringify(t,vg,2):String(t),vg=(t,e)=>yg(e)?vg(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[fl(r,i)+" =>"]=s,n),{})}:ei(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fl(n))}:Yt(e)?fl(e):De(e)&&!se(e)&&!mg(e)?String(e):e,fl=(t,e="")=>{var n;return Yt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let et;class Eg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&et&&(et.active?(this.parent=et,this.index=(et.scopes||(et.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){++this._on===1&&(this.prevScope=et,et=this)}off(){if(this._on>0&&--this._on===0){if(et===this)et=this.prevScope;else{let e=et;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Tg(t){return new Eg(t)}function wg(){return et}function KT(t,e=!1){et&&et.cleanups.push(t)}let Ve;const dl=new WeakSet;class Ig{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,et&&(et.active?et.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dl.has(this)&&(dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ag(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hd(this),Rg(this);const e=Ve,n=an;Ve=this,an=!0;try{return this.fn()}finally{Sg(this),Ve=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xu(e);this.deps=this.depsTail=void 0,hd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ql(this)&&this.run()}get dirty(){return Ql(this)}}let bg=0,Li,Fi;function Ag(t,e=!1){if(t.flags|=8,e){t.next=Fi,Fi=t;return}t.next=Li,Li=t}function Ju(){bg++}function Yu(){if(--bg>0)return;if(Fi){let e=Fi;for(Fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Li;){let e=Li;for(Li=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Rg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Xu(r),QT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ql(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Cg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zi)||(t.globalVersion=Zi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ql(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=an;Ve=t,an=!0;try{Rg(t);const s=t.fn(t._value);(e.version===0||wn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,an=r,Sg(t),t.flags&=-3}}function Xu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function QT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const Pg=[];function Qn(){Pg.push(an),an=!1}function Jn(){const t=Pg.pop();an=t===void 0?!0:t}function hd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Zi=0;class JT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!an||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new JT(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,kg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Zi++,this.notify(e)}notify(e){Ju();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yu()}}}function kg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)kg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ea=new WeakMap,Xr=Symbol(""),Jl=Symbol(""),eo=Symbol("");function yt(t,e,n){if(an&&Ve){let r=Ea.get(t);r||Ea.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Zu),s.map=r,s.key=n),s.track()}}function $n(t,e,n,r,s,i){const o=Ea.get(t);if(!o){Zi++;return}const c=l=>{l&&l.trigger()};if(Ju(),e==="clear")o.forEach(c);else{const l=se(t),u=l&&ac(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===eo||!Yt(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(eo)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Xr)),Vs(t)&&c(o.get(Jl)));break;case"delete":l||(c(o.get(Xr)),Vs(t)&&c(o.get(Jl)));break;case"set":Vs(t)&&c(o.get(Xr));break}}Yu()}function YT(t,e){const n=Ea.get(t);return n&&n.get(e)}function ws(t){const e=Re(t);return e===t?e:(yt(e,"iterate",eo),jt(t)?e:e.map(hn))}function fc(t){return yt(t=Re(t),"iterate",eo),t}function En(t,e){return Yn(t)?$s(Wn(t)?hn(e):e):hn(e)}const XT={__proto__:null,[Symbol.iterator](){return pl(this,Symbol.iterator,t=>En(this,t))},concat(...t){return ws(this).concat(...t.map(e=>se(e)?ws(e):e))},entries(){return pl(this,"entries",t=>(t[1]=En(this,t[1]),t))},every(t,e){return Fn(this,"every",t,e,void 0,arguments)},filter(t,e){return Fn(this,"filter",t,e,n=>n.map(r=>En(this,r)),arguments)},find(t,e){return Fn(this,"find",t,e,n=>En(this,n),arguments)},findIndex(t,e){return Fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fn(this,"findLast",t,e,n=>En(this,n),arguments)},findLastIndex(t,e){return Fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ml(this,"includes",t)},indexOf(...t){return ml(this,"indexOf",t)},join(t){return ws(this).join(t)},lastIndexOf(...t){return ml(this,"lastIndexOf",t)},map(t,e){return Fn(this,"map",t,e,void 0,arguments)},pop(){return wi(this,"pop")},push(...t){return wi(this,"push",t)},reduce(t,...e){return fd(this,"reduce",t,e)},reduceRight(t,...e){return fd(this,"reduceRight",t,e)},shift(){return wi(this,"shift")},some(t,e){return Fn(this,"some",t,e,void 0,arguments)},splice(...t){return wi(this,"splice",t)},toReversed(){return ws(this).toReversed()},toSorted(t){return ws(this).toSorted(t)},toSpliced(...t){return ws(this).toSpliced(...t)},unshift(...t){return wi(this,"unshift",t)},values(){return pl(this,"values",t=>En(this,t))}};function pl(t,e,n){const r=fc(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const ZT=Array.prototype;function Fn(t,e,n,r,s,i){const o=fc(t),c=o!==t&&!jt(t),l=o[e];if(l!==ZT[e]){const p=l.apply(t,i);return c?hn(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,En(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function fd(t,e,n,r){const s=fc(t),i=s!==t&&!jt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=En(t,u)),n.call(this,u,En(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?En(t,l):l}function ml(t,e,n){const r=Re(t);yt(r,"iterate",eo);const s=r[e](...n);return(s===-1||s===!1)&&dc(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function wi(t,e,n=[]){Qn(),Ju();const r=Re(t)[e].apply(t,n);return Yu(),Jn(),r}const ew=zu("__proto__,__v_isRef,__isVue"),Ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yt));function tw(t){Yt(t)||(t=String(t));const e=Re(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Dg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?hw:Mg:i?Vg:xg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=XT[n]))return l;if(n==="hasOwnProperty")return tw}const c=Reflect.get(e,n,We(e)?e:r);if((Yt(n)?Ng.has(n):ew(n))||(s||yt(e,"get",n),i))return c;if(We(c)){const l=o&&ac(n)?c:c.value;return s&&De(l)?Xl(l):l}return De(c)?s?Xl(c):ls(c):c}}class Og extends Dg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=se(e)&&ac(n);if(!this._isShallow){const u=Yn(i);if(!jt(r)&&!Yn(r)&&(i=Re(i),r=Re(r)),!o&&We(i)&&!We(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,We(e)?e:s);return e===Re(s)&&(c?wn(r,i)&&$n(e,"set",n,r):$n(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&$n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Yt(n)||!Ng.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",se(e)?"length":Xr),Reflect.ownKeys(e)}}class nw extends Dg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rw=new Og,sw=new nw,iw=new Og(!0);const Yl=t=>t,Ko=t=>Reflect.getPrototypeOf(t);function ow(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=Vs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Yl:e?$s:hn;return!e&&yt(i,"iterate",l?Jl:Xr),Xe(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Qo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function aw(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),c=Re(s);t||(wn(s,c)&&yt(o,"get",s),yt(o,"get",c));const{has:l}=Ko(o),u=e?Yl:t?$s:hn;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Re(s),"iterate",Xr),s.size},has(s){const i=this.__v_raw,o=Re(i),c=Re(s);return t||(wn(s,c)&&yt(o,"has",s),yt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Re(c),u=e?Yl:t?$s:hn;return!t&&yt(l,"iterate",Xr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Xe(n,t?{add:Qo("add"),set:Qo("set"),delete:Qo("delete"),clear:Qo("clear")}:{add(s){const i=Re(this),o=Ko(i),c=Re(s),l=!e&&!jt(s)&&!Yn(s)?c:s;return o.has.call(i,l)||wn(s,l)&&o.has.call(i,s)||wn(c,l)&&o.has.call(i,c)||(i.add(l),$n(i,"add",l,l)),this},set(s,i){!e&&!jt(i)&&!Yn(i)&&(i=Re(i));const o=Re(this),{has:c,get:l}=Ko(o);let u=c.call(o,s);u||(s=Re(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?wn(i,f)&&$n(o,"set",s,i):$n(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:c}=Ko(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&$n(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&$n(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ow(s,t,e)}),n}function eh(t,e){const n=aw(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const cw={get:eh(!1,!1)},lw={get:eh(!1,!0)},uw={get:eh(!0,!1)};const xg=new WeakMap,Vg=new WeakMap,Mg=new WeakMap,hw=new WeakMap;function fw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dw(t){return t.__v_skip||!Object.isExtensible(t)?0:fw(LT(t))}function ls(t){return Yn(t)?t:th(t,!1,rw,cw,xg)}function Lg(t){return th(t,!1,iw,lw,Vg)}function Xl(t){return th(t,!0,sw,uw,Mg)}function th(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=dw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Wn(t){return Yn(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function dc(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function us(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&gg(t,"__v_skip",!0),t}const hn=t=>De(t)?ls(t):t,$s=t=>De(t)?Xl(t):t;function We(t){return t?t.__v_isRef===!0:!1}function cn(t){return Fg(t,!1)}function pw(t){return Fg(t,!0)}function Fg(t,e){return We(t)?t:new mw(t,e)}class mw{constructor(e,n){this.dep=new Zu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:hn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||Yn(e);e=r?e:Re(e),wn(e,n)&&(this._rawValue=e,this._value=r?e:hn(e),this.dep.trigger())}}function rn(t){return We(t)?t.value:t}const gw={get:(t,e,n)=>e==="__v_raw"?t:rn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return We(s)&&!We(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ug(t){return Wn(t)?t:new Proxy(t,gw)}function _w(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=vw(t,n);return e}class yw{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Yt(n)?n:String(n),this._raw=Re(e);let s=!0,i=e;if(!se(e)||Yt(this._key)||!ac(this._key))do s=!dc(i)||jt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=rn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&We(this._raw[this._key])){const n=this._object[this._key];if(We(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return YT(this._raw,this._key)}}function vw(t,e,n){return new yw(t,e,n)}class Ew{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Zu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Ag(this,!0),!0}get value(){const e=this.dep.track();return Cg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tw(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new Ew(r,s,n)}const Jo={},Ta=new WeakMap;let zr;function ww(t,e=!1,n=zr){if(n){let r=Ta.get(n);r||Ta.set(n,r=[]),r.push(t)}}function Iw(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=$=>s?$:jt($)||s===!1||s===0?qn($,1):qn($);let f,p,m,v,S=!1,N=!1;if(We(t)?(p=()=>t.value,S=jt(t)):Wn(t)?(p=()=>u(t),S=!0):se(t)?(N=!0,S=t.some($=>Wn($)||jt($)),p=()=>t.map($=>{if(We($))return $.value;if(Wn($))return u($);if(me($))return l?l($,2):$()})):me(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Qn();try{m()}finally{Jn()}}const $=zr;zr=f;try{return l?l(t,3,[v]):t(v)}finally{zr=$}}:p=In,e&&s){const $=p,H=s===!0?1/0:s;p=()=>qn($(),H)}const C=wg(),U=()=>{f.stop(),C&&C.active&&Wu(C.effects,f)};if(i&&e){const $=e;e=(...H)=>{$(...H),U()}}let O=N?new Array(t.length).fill(Jo):Jo;const L=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const H=f.run();if(s||S||(N?H.some((te,R)=>wn(te,O[R])):wn(H,O))){m&&m();const te=zr;zr=f;try{const R=[H,O===Jo?void 0:N&&O[0]===Jo?[]:O,v];O=H,l?l(e,3,R):e(...R)}finally{zr=te}}}else f.run()};return c&&c(L),f=new Ig(p),f.scheduler=o?()=>o(L,!1):L,v=$=>ww($,!1,f),m=f.onStop=()=>{const $=Ta.get(f);if($){if(l)l($,4);else for(const H of $)H();Ta.delete(f)}},e?r?L(!0):O=f.run():o?o(L.bind(null,!0),!0):f.run(),U.pause=f.pause.bind(f),U.resume=f.resume.bind(f),U.stop=U,U}function qn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,We(t))qn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)qn(t[r],e,n);else if(ei(t)||Vs(t))t.forEach(r=>{qn(r,e,n)});else if(mg(t)){for(const r in t)qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vo(t,e,n,r){try{return r?t(...r):t()}catch(s){pc(s,e,n)}}function fn(t,e,n,r){if(me(t)){const s=vo(t,e,n,r);return s&&dg(s)&&s.catch(i=>{pc(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(fn(t[i],e,n,r));return s}}function pc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Qn(),vo(i,null,10,[t,l,u]),Jn();return}}bw(t,n,s,r,o)}function bw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let _n=-1;const Ms=[];let dr=null,Cs=0;const Bg=Promise.resolve();let wa=null;function mc(t){const e=wa||Bg;return t?e.then(this?t.bind(this):t):e}function Aw(t){let e=_n+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=to(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function nh(t){if(!(t.flags&1)){const e=to(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=to(n)?At.push(t):At.splice(Aw(e),0,t),t.flags|=1,jg()}}function jg(){wa||(wa=Bg.then(qg))}function Rw(t){se(t)?Ms.push(...t):dr&&t.id===-1?dr.splice(Cs+1,0,t):t.flags&1||(Ms.push(t),t.flags|=1),jg()}function dd(t,e,n=_n+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function $g(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,r)=>to(n)-to(r));if(Ms.length=0,dr){dr.push(...e);return}for(dr=e,Cs=0;Cs<dr.length;Cs++){const n=dr[Cs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dr=null,Cs=0}}const to=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qg(t){try{for(_n=0;_n<At.length;_n++){const e=At[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<At.length;_n++){const e=At[_n];e&&(e.flags&=-2)}_n=-1,At.length=0,$g(),wa=null,(At.length||Ms.length)&&qg()}}let Ft=null,Hg=null;function Ia(t){const e=Ft;return Ft=t,Hg=t&&t.type.__scopeId||null,e}function Sw(t,e=Ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sa(-1);const i=Ia(e);let o;try{o=t(...s)}finally{Ia(i),r._d&&Sa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cw(t,e){if(Ft===null)return t;const n=Ec(Ft),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function $r(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Qn(),fn(l,n,8,[t.el,c,t,e]),Jn())}}function ia(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=hs();if(r||Zr){let s=Zr?Zr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}function Pw(){return!!(hs()||Zr)}const kw=Symbol.for("v-scx"),Nw=()=>Jt(kw);function Ui(t,e,n){return zg(t,e,n)}function zg(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,c=Xe({},n),l=e&&r||!e&&i!=="post";let u;if(so){if(i==="sync"){const v=Nw();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=In,v.resume=In,v.pause=In,v}}const f=Et;c.call=(v,S,N)=>fn(v,f,S,N);let p=!1;i==="post"?c.scheduler=v=>{Pt(v,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(v,S)=>{S?v():nh(v)}),c.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=Iw(t,e,c);return so&&(u?u.push(m):l&&m()),m}function Dw(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Wg(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=Eo(this),c=zg(s,i.bind(r),n);return o(),c}function Wg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ow=Symbol("_vte"),Gg=t=>t.__isTeleport,yn=Symbol("_leaveCb"),Ii=Symbol("_enterCb");function Kg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return t_(()=>{t.isMounted=!0}),ih(()=>{t.isUnmounting=!0}),t}const Wt=[Function,Array],Qg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},Jg=t=>{const e=t.subTree;return e.component?Jg(e.component):e},xw={name:"BaseTransition",props:Qg,setup(t,{slots:e}){const n=hs(),r=Kg();return()=>{const s=e.default&&rh(e.default(),!0),i=s&&s.length?Yg(s):n.subTree?su():void 0;if(!i)return;const o=Re(t),{mode:c}=o;if(r.isLeaving)return gl(i);const l=pd(i);if(!l)return gl(i);let u=no(l,o,r,n,p=>u=p);l.type!==Rt&&ts(l,u);let f=n.subTree&&pd(n.subTree);if(f&&f.type!==Rt&&!Gr(f,l)&&Jg(n).type!==Rt){let p=no(f,o,r,n);if(ts(f,p),c==="out-in"&&l.type!==Rt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},gl(i);c==="in-out"&&l.type!==Rt?p.delayLeave=(m,v,S)=>{const N=Xg(r,f);N[String(f.key)]=f,m[yn]=()=>{v(),m[yn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Yg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Rt){e=n;break}}return e}const Vw=xw;function Xg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function no(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:v,onAfterLeave:S,onLeaveCancelled:N,onBeforeAppear:C,onAppear:U,onAfterAppear:O,onAppearCancelled:L}=e,$=String(t.key),H=Xg(n,t),te=(_,I)=>{_&&fn(_,r,9,I)},R=(_,I)=>{const A=I[1];te(_,I),se(_)?_.every(w=>w.length<=1)&&A():_.length<=1&&A()},y={mode:o,persisted:c,beforeEnter(_){let I=l;if(!n.isMounted)if(i)I=C||l;else return;_[yn]&&_[yn](!0);const A=H[$];A&&Gr(t,A)&&A.el[yn]&&A.el[yn](),te(I,[_])},enter(_){if(H[$]===t)return;let I=u,A=f,w=p;if(!n.isMounted)if(i)I=U||u,A=O||f,w=L||p;else return;let E=!1;_[Ii]=ye=>{E||(E=!0,ye?te(w,[_]):te(A,[_]),y.delayedLeave&&y.delayedLeave(),_[Ii]=void 0)};const K=_[Ii].bind(null,!1);I?R(I,[_,K]):K()},leave(_,I){const A=String(t.key);if(_[Ii]&&_[Ii](!0),n.isUnmounting)return I();te(m,[_]);let w=!1;_[yn]=K=>{w||(w=!0,I(),K?te(N,[_]):te(S,[_]),_[yn]=void 0,H[A]===t&&delete H[A])};const E=_[yn].bind(null,!1);H[A]=t,v?R(v,[_,E]):E()},clone(_){const I=no(_,e,n,r,s);return s&&s(I),I}};return y}function gl(t){if(gc(t))return t=Sr(t),t.children=null,t}function pd(t){if(!gc(t))return Gg(t.type)&&t.children?Yg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&me(n.default))return n.default()}}function ts(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ts(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rh(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Kt?(o.patchFlag&128&&s++,r=r.concat(rh(o.children,e,c))):(e||o.type!==Rt)&&r.push(c!=null?Sr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function sh(t,e){return me(t)?Xe({name:t.name},e,{setup:t}):t}function Zg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function md(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ba=new WeakMap;function Bi(t,e,n,r,s=!1){if(se(t)){t.forEach((N,C)=>Bi(N,e&&(se(e)?e[C]:e),n,r,s));return}if(ji(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Bi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ec(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===xe?c.refs={}:c.refs,p=c.setupState,m=Re(p),v=p===xe?fg:N=>md(f,N)?!1:ke(m,N),S=(N,C)=>!(C&&md(f,C));if(u!=null&&u!==l){if(gd(e),$e(u))f[u]=null,v(u)&&(p[u]=null);else if(We(u)){const N=e;S(u,N.k)&&(u.value=null),N.k&&(f[N.k]=null)}}if(me(l))vo(l,c,12,[o,f]);else{const N=$e(l),C=We(l);if(N||C){const U=()=>{if(t.f){const O=N?v(l)?p[l]:f[l]:S()||!t.k?l.value:f[t.k];if(s)se(O)&&Wu(O,i);else if(se(O))O.includes(i)||O.push(i);else if(N)f[l]=[i],v(l)&&(p[l]=f[l]);else{const L=[i];S(l,t.k)&&(l.value=L),t.k&&(f[t.k]=L)}}else N?(f[l]=o,v(l)&&(p[l]=o)):C&&(S(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const O=()=>{U(),ba.delete(t)};O.id=-1,ba.set(t,O),Pt(O,n)}else gd(t),U()}}}function gd(t){const e=ba.get(t);e&&(e.flags|=8,ba.delete(t))}hc().requestIdleCallback;hc().cancelIdleCallback;const ji=t=>!!t.type.__asyncLoader,gc=t=>t.type.__isKeepAlive;function Mw(t,e){e_(t,"a",e)}function Lw(t,e){e_(t,"da",e)}function e_(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_c(e,r,n),n){let s=n.parent;for(;s&&s.parent;)gc(s.parent.vnode)&&Fw(r,e,n,s),s=s.parent}}function Fw(t,e,n,r){const s=_c(e,t,r,!0);r_(()=>{Wu(r[e],s)},n)}function _c(t,e,n=Et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Qn();const c=Eo(n),l=fn(e,n,t,o);return c(),Jn(),l});return r?s.unshift(i):s.push(i),i}}const nr=t=>(e,n=Et)=>{(!so||t==="sp")&&_c(t,(...r)=>e(...r),n)},Uw=nr("bm"),t_=nr("m"),Bw=nr("bu"),n_=nr("u"),ih=nr("bum"),r_=nr("um"),jw=nr("sp"),$w=nr("rtg"),qw=nr("rtc");function Hw(t,e=Et){_c("ec",t,e)}const zw="components";function Ww(t,e){return Kw(zw,t,!0,e)||t}const Gw=Symbol.for("v-ndc");function Kw(t,e,n=!0,r=!1){const s=Ft||Et;if(s){const i=s.type;{const c=xI(i,!1);if(c&&(c===e||c===St(e)||c===lc(St(e))))return i}const o=_d(s[t]||i[t],e)||_d(s.appContext[t],e);return!o&&r?i:o}}function _d(t,e){return t&&(t[e]||t[St(e)]||t[lc(St(e))])}function sx(t,e,n,r){let s;const i=n,o=se(t);if(o||$e(t)){const c=o&&Wn(t);let l=!1,u=!1;c&&(l=!jt(t),u=Yn(t),t=fc(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?$s(hn(t[f])):hn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Zl=t=>t?I_(t)?Ec(t):Zl(t.parent):null,$i=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zl(t.parent),$root:t=>Zl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>i_(t),$forceUpdate:t=>t.f||(t.f=()=>{nh(t.update)}),$nextTick:t=>t.n||(t.n=mc.bind(t.proxy)),$watch:t=>Dw.bind(t)}),_l=(t,e)=>t!==xe&&!t.__isScriptSetup&&ke(t,e),Qw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_l(r,e))return o[e]=1,r[e];if(s!==xe&&ke(s,e))return o[e]=2,s[e];if(ke(i,e))return o[e]=3,i[e];if(n!==xe&&ke(n,e))return o[e]=4,n[e];eu&&(o[e]=0)}}const u=$i[e];let f,p;if(u)return e==="$attrs"&&yt(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==xe&&ke(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ke(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _l(s,e)?(s[e]=n,!0):r!==xe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==xe&&c[0]!=="$"&&ke(t,c)||_l(e,c)||ke(i,c)||ke(r,c)||ke($i,c)||ke(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yd(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let eu=!0;function Jw(t){const e=i_(t),n=t.proxy,r=t.ctx;eu=!1,e.beforeCreate&&vd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:S,activated:N,deactivated:C,beforeDestroy:U,beforeUnmount:O,destroyed:L,unmounted:$,render:H,renderTracked:te,renderTriggered:R,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:A,components:w,directives:E,filters:K}=e;if(u&&Yw(u,r,null),o)for(const he in o){const Ee=o[he];me(Ee)&&(r[he]=Ee.bind(n))}if(s){const he=s.call(n,n);De(he)&&(t.data=ls(he))}if(eu=!0,i)for(const he in i){const Ee=i[he],xt=me(Ee)?Ee.bind(n,n):me(Ee.get)?Ee.get.bind(n,n):In,en=!me(Ee)&&me(Ee.set)?Ee.set.bind(n):In,qt=ue({get:xt,set:en});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Ue=>qt.value=Ue})}if(c)for(const he in c)s_(c[he],r,n,he);if(l){const he=me(l)?l.call(n):l;Reflect.ownKeys(he).forEach(Ee=>{ia(Ee,he[Ee])})}f&&vd(f,t,"c");function be(he,Ee){se(Ee)?Ee.forEach(xt=>he(xt.bind(n))):Ee&&he(Ee.bind(n))}if(be(Uw,p),be(t_,m),be(Bw,v),be(n_,S),be(Mw,N),be(Lw,C),be(Hw,y),be(qw,te),be($w,R),be(ih,O),be(r_,$),be(jw,_),se(I))if(I.length){const he=t.exposed||(t.exposed={});I.forEach(Ee=>{Object.defineProperty(he,Ee,{get:()=>n[Ee],set:xt=>n[Ee]=xt,enumerable:!0})})}else t.exposed||(t.exposed={});H&&t.render===In&&(t.render=H),A!=null&&(t.inheritAttrs=A),w&&(t.components=w),E&&(t.directives=E),_&&Zg(t)}function Yw(t,e,n=In){se(t)&&(t=tu(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),We(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vd(t,e,n){fn(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function s_(t,e,n,r){let s=r.includes(".")?Wg(n,r):()=>n[r];if($e(t)){const i=e[t];me(i)&&Ui(s,i)}else if(me(t))Ui(s,t.bind(n));else if(De(t))if(se(t))t.forEach(i=>s_(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Ui(s,i,t)}}function i_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Aa(l,u,o,!0)),Aa(l,e,o)),De(e)&&i.set(e,l),l}function Aa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Aa(t,i,n,!0),s&&s.forEach(o=>Aa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Xw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Xw={data:Ed,props:Td,emits:Td,methods:Ci,computed:Ci,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Ci,directives:Ci,watch:eI,provide:Ed,inject:Zw};function Ed(t,e){return e?t?function(){return Xe(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function Zw(t,e){return Ci(tu(t),tu(e))}function tu(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Ci(t,e){return t?Xe(Object.create(null),t,e):e}function Td(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Xe(Object.create(null),yd(t),yd(e??{})):e}function eI(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function o_(){return{app:null,config:{isNativeTag:fg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tI=0;function nI(t,e){return function(r,s=null){me(r)||(r=Xe({},r)),s!=null&&!De(s)&&(s=null);const i=o_(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:tI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:MI,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&me(f.install)?(o.add(f),f.install(u,...p)):me(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const v=u._ceVNode||ut(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),l=!0,u._container=f,f.__vue_app__=u,Ec(v.component)}},onUnmount(f){c.push(f)},unmount(){l&&(fn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Zr;Zr=u;try{return f()}finally{Zr=p}}};return u}}let Zr=null;const rI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function sI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&rI(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>$e(f)?f.trim():f)),o.number&&(s=n.map(uc)));let c,l=r[c=hl(e)]||r[c=hl(St(e))];!l&&i&&(l=r[c=hl(cs(e))]),l&&fn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,fn(u,t,6,s)}}const iI=new WeakMap;function a_(t,e,n=!1){const r=n?iI:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!me(t)){const l=u=>{const f=a_(u,e,!0);f&&(c=!0,Xe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):Xe(o,i),De(t)&&r.set(t,o),o)}function yc(t,e){return!t||!ic(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,cs(e))||ke(t,e))}function wd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:v,ctx:S,inheritAttrs:N}=t,C=Ia(t);let U,O;try{if(n.shapeFlag&4){const $=s||r,H=$;U=Tn(u.call(H,$,f,p,v,m,S)),O=c}else{const $=e;U=Tn($.length>1?$(p,{attrs:c,slots:o,emit:l}):$(p,null)),O=e.props?c:oI(c)}}catch($){qi.length=0,pc($,t,1),U=ut(Rt)}let L=U;if(O&&N!==!1){const $=Object.keys(O),{shapeFlag:H}=L;$.length&&H&7&&(i&&$.some(oc)&&(O=aI(O,i)),L=Sr(L,O,!1,!0))}return n.dirs&&(L=Sr(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&ts(L,n.transition),U=L,Ia(C),U}const oI=t=>{let e;for(const n in t)(n==="class"||n==="style"||ic(n))&&((e||(e={}))[n]=t[n]);return e},aI=(t,e)=>{const n={};for(const r in t)(!oc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Id(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(c_(o,r,m)&&!yc(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Id(r,o,u):!0:!!o;return!1}function Id(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(c_(e,t,i)&&!yc(n,i))return!0}return!1}function c_(t,e,n){const r=t[n],s=e[n];return n==="style"&&De(r)&&De(s)?!ti(r,s):r!==s}function lI({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const l_={},u_=()=>Object.create(l_),h_=t=>Object.getPrototypeOf(t)===l_;function uI(t,e,n,r=!1){const s={},i=u_();t.propsDefaults=Object.create(null),f_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Lg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Re(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(yc(t.emitsOptions,m))continue;const v=e[m];if(l)if(ke(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const S=St(m);s[S]=nu(l,c,S,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{f_(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!ke(e,p)&&((f=cs(p))===p||!ke(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=nu(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&$n(t.attrs,"set","")}function f_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Mi(l))continue;const u=e[l];let f;s&&ke(s,f=St(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:yc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Re(n),u=c||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=nu(s,l,p,u[p],t,!ke(u,p))}}return o}function nu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ke(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&me(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Eo(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}const fI=new WeakMap;function d_(t,e,n=!1){const r=n?fI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!me(t)){const f=p=>{l=!0;const[m,v]=d_(p,e,!0);Xe(o,m),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return De(t)&&r.set(t,xs),xs;if(se(i))for(let f=0;f<i.length;f++){const p=St(i[f]);bd(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=St(f);if(bd(p)){const m=i[f],v=o[p]=se(m)||me(m)?{type:m}:Xe({},m),S=v.type;let N=!1,C=!0;if(se(S))for(let U=0;U<S.length;++U){const O=S[U],L=me(O)&&O.name;if(L==="Boolean"){N=!0;break}else L==="String"&&(C=!1)}else N=me(S)&&S.name==="Boolean";v[0]=N,v[1]=C,(N||ke(v,"default"))&&c.push(p)}}const u=[o,c];return De(t)&&r.set(t,u),u}function bd(t){return t[0]!=="$"&&!Mi(t)}const oh=t=>t==="_"||t==="_ctx"||t==="$stable",ah=t=>se(t)?t.map(Tn):[Tn(t)],dI=(t,e,n)=>{if(e._n)return e;const r=Sw((...s)=>ah(e(...s)),n);return r._c=!1,r},p_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(oh(s))continue;const i=t[s];if(me(i))e[s]=dI(s,i,r);else if(i!=null){const o=ah(i);e[s]=()=>o}}},m_=(t,e)=>{const n=ah(e);t.slots.default=()=>n},g_=(t,e,n)=>{for(const r in e)(n||!oh(r))&&(t[r]=e[r])},pI=(t,e,n)=>{const r=t.slots=u_();if(t.vnode.shapeFlag&32){const s=e._;s?(g_(r,e,n),n&&gg(r,"_",s,!0)):p_(e,r)}else e&&m_(t,e)},mI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:g_(s,e,n):(i=!e.$stable,p_(e,s)),o=e}else e&&(m_(t,e),o={default:1});if(i)for(const c in s)!oh(c)&&o[c]==null&&delete s[c]},Pt=EI;function gI(t){return _I(t)}function _I(t,e){const n=hc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=In,insertStaticContent:S}=t,N=(T,b,P,x=null,B=null,M=null,Q=void 0,G=null,z=!!b.dynamicChildren)=>{if(T===b)return;T&&!Gr(T,b)&&(x=V(T),Ue(T,B,M,!0),T=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:Y}=b;switch(q){case vc:C(T,b,P,x);break;case Rt:U(T,b,P,x);break;case oa:T==null&&O(b,P,x,Q);break;case Kt:w(T,b,P,x,B,M,Q,G,z);break;default:Y&1?H(T,b,P,x,B,M,Q,G,z):Y&6?E(T,b,P,x,B,M,Q,G,z):(Y&64||Y&128)&&q.process(T,b,P,x,B,M,Q,G,z,ne)}oe!=null&&B?Bi(oe,T&&T.ref,M,b||T,!b):oe==null&&T&&T.ref!=null&&Bi(T.ref,null,M,T,!0)},C=(T,b,P,x)=>{if(T==null)r(b.el=c(b.children),P,x);else{const B=b.el=T.el;b.children!==T.children&&u(B,b.children)}},U=(T,b,P,x)=>{T==null?r(b.el=l(b.children||""),P,x):b.el=T.el},O=(T,b,P,x)=>{[T.el,T.anchor]=S(T.children,b,P,x,T.el,T.anchor)},L=({el:T,anchor:b},P,x)=>{let B;for(;T&&T!==b;)B=m(T),r(T,P,x),T=B;r(b,P,x)},$=({el:T,anchor:b})=>{let P;for(;T&&T!==b;)P=m(T),s(T),T=P;s(b)},H=(T,b,P,x,B,M,Q,G,z)=>{if(b.type==="svg"?Q="svg":b.type==="math"&&(Q="mathml"),T==null)te(b,P,x,B,M,Q,G,z);else{const q=T.el&&T.el._isVueCE?T.el:null;try{q&&q._beginPatch(),_(T,b,B,M,Q,G,z)}finally{q&&q._endPatch()}}},te=(T,b,P,x,B,M,Q,G)=>{let z,q;const{props:oe,shapeFlag:Y,transition:re,dirs:ae}=T;if(z=T.el=o(T.type,M,oe&&oe.is,oe),Y&8?f(z,T.children):Y&16&&y(T.children,z,null,x,B,yl(T,M),Q,G),ae&&$r(T,null,x,"created"),R(z,T,T.scopeId,Q,x),oe){for(const _e in oe)_e!=="value"&&!Mi(_e)&&i(z,_e,null,oe[_e],M,x);"value"in oe&&i(z,"value",null,oe.value,M),(q=oe.onVnodeBeforeMount)&&mn(q,x,T)}ae&&$r(T,null,x,"beforeMount");const ce=yI(B,re);ce&&re.beforeEnter(z),r(z,b,P),((q=oe&&oe.onVnodeMounted)||ce||ae)&&Pt(()=>{try{q&&mn(q,x,T),ce&&re.enter(z),ae&&$r(T,null,x,"mounted")}finally{}},B)},R=(T,b,P,x,B)=>{if(P&&v(T,P),x)for(let M=0;M<x.length;M++)v(T,x[M]);if(B){let M=B.subTree;if(b===M||E_(M.type)&&(M.ssContent===b||M.ssFallback===b)){const Q=B.vnode;R(T,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},y=(T,b,P,x,B,M,Q,G,z=0)=>{for(let q=z;q<T.length;q++){const oe=T[q]=G?jn(T[q]):Tn(T[q]);N(null,oe,b,P,x,B,M,Q,G)}},_=(T,b,P,x,B,M,Q)=>{const G=b.el=T.el;let{patchFlag:z,dynamicChildren:q,dirs:oe}=b;z|=T.patchFlag&16;const Y=T.props||xe,re=b.props||xe;let ae;if(P&&qr(P,!1),(ae=re.onVnodeBeforeUpdate)&&mn(ae,P,b,T),oe&&$r(b,T,P,"beforeUpdate"),P&&qr(P,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&f(G,""),q?I(T.dynamicChildren,q,G,P,x,yl(b,B),M):Q||Ee(T,b,G,null,P,x,yl(b,B),M,!1),z>0){if(z&16)A(G,Y,re,P,B);else if(z&2&&Y.class!==re.class&&i(G,"class",null,re.class,B),z&4&&i(G,"style",Y.style,re.style,B),z&8){const ce=b.dynamicProps;for(let _e=0;_e<ce.length;_e++){const Ce=ce[_e],je=Y[Ce],Ke=re[Ce];(Ke!==je||Ce==="value")&&i(G,Ce,je,Ke,B,P)}}z&1&&T.children!==b.children&&f(G,b.children)}else!Q&&q==null&&A(G,Y,re,P,B);((ae=re.onVnodeUpdated)||oe)&&Pt(()=>{ae&&mn(ae,P,b,T),oe&&$r(b,T,P,"updated")},x)},I=(T,b,P,x,B,M,Q)=>{for(let G=0;G<b.length;G++){const z=T[G],q=b[G],oe=z.el&&(z.type===Kt||!Gr(z,q)||z.shapeFlag&198)?p(z.el):P;N(z,q,oe,null,x,B,M,Q,!0)}},A=(T,b,P,x,B)=>{if(b!==P){if(b!==xe)for(const M in b)!Mi(M)&&!(M in P)&&i(T,M,b[M],null,B,x);for(const M in P){if(Mi(M))continue;const Q=P[M],G=b[M];Q!==G&&M!=="value"&&i(T,M,G,Q,B,x)}"value"in P&&i(T,"value",b.value,P.value,B)}},w=(T,b,P,x,B,M,Q,G,z)=>{const q=b.el=T?T.el:c(""),oe=b.anchor=T?T.anchor:c("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:ae}=b;ae&&(G=G?G.concat(ae):ae),T==null?(r(q,P,x),r(oe,P,x),y(b.children||[],P,oe,B,M,Q,G,z)):Y>0&&Y&64&&re&&T.dynamicChildren&&T.dynamicChildren.length===re.length?(I(T.dynamicChildren,re,P,B,M,Q,G),(b.key!=null||B&&b===B.subTree)&&__(T,b,!0)):Ee(T,b,P,oe,B,M,Q,G,z)},E=(T,b,P,x,B,M,Q,G,z)=>{b.slotScopeIds=G,T==null?b.shapeFlag&512?B.ctx.activate(b,P,x,Q,z):K(b,P,x,B,M,Q,z):ye(T,b,z)},K=(T,b,P,x,B,M,Q)=>{const G=T.component=PI(T,x,B);if(gc(T)&&(G.ctx.renderer=ne),kI(G,!1,Q),G.asyncDep){if(B&&B.registerDep(G,be,Q),!T.el){const z=G.subTree=ut(Rt);U(null,z,b,P),T.placeholder=z.el}}else be(G,T,b,P,B,M,Q)},ye=(T,b,P)=>{const x=b.component=T.component;if(cI(T,b,P))if(x.asyncDep&&!x.asyncResolved){he(x,b,P);return}else x.next=b,x.update();else b.el=T.el,x.vnode=b},be=(T,b,P,x,B,M,Q)=>{const G=()=>{if(T.isMounted){let{next:Y,bu:re,u:ae,parent:ce,vnode:_e}=T;{const ft=y_(T);if(ft){Y&&(Y.el=_e.el,he(T,Y,Q)),ft.asyncDep.then(()=>{Pt(()=>{T.isUnmounted||q()},B)});return}}let Ce=Y,je;qr(T,!1),Y?(Y.el=_e.el,he(T,Y,Q)):Y=_e,re&&sa(re),(je=Y.props&&Y.props.onVnodeBeforeUpdate)&&mn(je,ce,Y,_e),qr(T,!0);const Ke=wd(T),Ht=T.subTree;T.subTree=Ke,N(Ht,Ke,p(Ht.el),V(Ht),T,B,M),Y.el=Ke.el,Ce===null&&lI(T,Ke.el),ae&&Pt(ae,B),(je=Y.props&&Y.props.onVnodeUpdated)&&Pt(()=>mn(je,ce,Y,_e),B)}else{let Y;const{el:re,props:ae}=b,{bm:ce,m:_e,parent:Ce,root:je,type:Ke}=T,Ht=ji(b);qr(T,!1),ce&&sa(ce),!Ht&&(Y=ae&&ae.onVnodeBeforeMount)&&mn(Y,Ce,b),qr(T,!0);{je.ce&&je.ce._hasShadowRoot()&&je.ce._injectChildStyle(Ke,T.parent?T.parent.type:void 0);const ft=T.subTree=wd(T);N(null,ft,P,x,T,B,M),b.el=ft.el}if(_e&&Pt(_e,B),!Ht&&(Y=ae&&ae.onVnodeMounted)){const ft=b;Pt(()=>mn(Y,Ce,ft),B)}(b.shapeFlag&256||Ce&&ji(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&T.a&&Pt(T.a,B),T.isMounted=!0,b=P=x=null}};T.scope.on();const z=T.effect=new Ig(G);T.scope.off();const q=T.update=z.run.bind(z),oe=T.job=z.runIfDirty.bind(z);oe.i=T,oe.id=T.uid,z.scheduler=()=>nh(oe),qr(T,!0),q()},he=(T,b,P)=>{b.component=T;const x=T.vnode.props;T.vnode=b,T.next=null,hI(T,b.props,x,P),mI(T,b.children,P),Qn(),dd(T),Jn()},Ee=(T,b,P,x,B,M,Q,G,z=!1)=>{const q=T&&T.children,oe=T?T.shapeFlag:0,Y=b.children,{patchFlag:re,shapeFlag:ae}=b;if(re>0){if(re&128){en(q,Y,P,x,B,M,Q,G,z);return}else if(re&256){xt(q,Y,P,x,B,M,Q,G,z);return}}ae&8?(oe&16&&Ct(q,B,M),Y!==q&&f(P,Y)):oe&16?ae&16?en(q,Y,P,x,B,M,Q,G,z):Ct(q,B,M,!0):(oe&8&&f(P,""),ae&16&&y(Y,P,x,B,M,Q,G,z))},xt=(T,b,P,x,B,M,Q,G,z)=>{T=T||xs,b=b||xs;const q=T.length,oe=b.length,Y=Math.min(q,oe);let re;for(re=0;re<Y;re++){const ae=b[re]=z?jn(b[re]):Tn(b[re]);N(T[re],ae,P,null,B,M,Q,G,z)}q>oe?Ct(T,B,M,!0,!1,Y):y(b,P,x,B,M,Q,G,z,Y)},en=(T,b,P,x,B,M,Q,G,z)=>{let q=0;const oe=b.length;let Y=T.length-1,re=oe-1;for(;q<=Y&&q<=re;){const ae=T[q],ce=b[q]=z?jn(b[q]):Tn(b[q]);if(Gr(ae,ce))N(ae,ce,P,null,B,M,Q,G,z);else break;q++}for(;q<=Y&&q<=re;){const ae=T[Y],ce=b[re]=z?jn(b[re]):Tn(b[re]);if(Gr(ae,ce))N(ae,ce,P,null,B,M,Q,G,z);else break;Y--,re--}if(q>Y){if(q<=re){const ae=re+1,ce=ae<oe?b[ae].el:x;for(;q<=re;)N(null,b[q]=z?jn(b[q]):Tn(b[q]),P,ce,B,M,Q,G,z),q++}}else if(q>re)for(;q<=Y;)Ue(T[q],B,M,!0),q++;else{const ae=q,ce=q,_e=new Map;for(q=ce;q<=re;q++){const it=b[q]=z?jn(b[q]):Tn(b[q]);it.key!=null&&_e.set(it.key,q)}let Ce,je=0;const Ke=re-ce+1;let Ht=!1,ft=0;const sr=new Array(Ke);for(q=0;q<Ke;q++)sr[q]=0;for(q=ae;q<=Y;q++){const it=T[q];if(je>=Ke){Ue(it,B,M,!0);continue}let zt;if(it.key!=null)zt=_e.get(it.key);else for(Ce=ce;Ce<=re;Ce++)if(sr[Ce-ce]===0&&Gr(it,b[Ce])){zt=Ce;break}zt===void 0?Ue(it,B,M,!0):(sr[zt-ce]=q+1,zt>=ft?ft=zt:Ht=!0,N(it,b[zt],P,null,B,M,Q,G,z),je++)}const li=Ht?vI(sr):xs;for(Ce=li.length-1,q=Ke-1;q>=0;q--){const it=ce+q,zt=b[it],Do=b[it+1],_s=it+1<oe?Do.el||v_(Do):x;sr[q]===0?N(null,zt,P,_s,B,M,Q,G,z):Ht&&(Ce<0||q!==li[Ce]?qt(zt,P,_s,2):Ce--)}}},qt=(T,b,P,x,B=null)=>{const{el:M,type:Q,transition:G,children:z,shapeFlag:q}=T;if(q&6){qt(T.component.subTree,b,P,x);return}if(q&128){T.suspense.move(b,P,x);return}if(q&64){Q.move(T,b,P,ne);return}if(Q===Kt){r(M,b,P);for(let Y=0;Y<z.length;Y++)qt(z[Y],b,P,x);r(T.anchor,b,P);return}if(Q===oa){L(T,b,P);return}if(x!==2&&q&1&&G)if(x===0)G.beforeEnter(M),r(M,b,P),Pt(()=>G.enter(M),B);else{const{leave:Y,delayLeave:re,afterLeave:ae}=G,ce=()=>{T.ctx.isUnmounted?s(M):r(M,b,P)},_e=()=>{M._isLeaving&&M[yn](!0),Y(M,()=>{ce(),ae&&ae()})};re?re(M,ce,_e):_e()}else r(M,b,P)},Ue=(T,b,P,x=!1,B=!1)=>{const{type:M,props:Q,ref:G,children:z,dynamicChildren:q,shapeFlag:oe,patchFlag:Y,dirs:re,cacheIndex:ae,memo:ce}=T;if(Y===-2&&(B=!1),G!=null&&(Qn(),Bi(G,null,P,T,!0),Jn()),ae!=null&&(b.renderCache[ae]=void 0),oe&256){b.ctx.deactivate(T);return}const _e=oe&1&&re,Ce=!ji(T);let je;if(Ce&&(je=Q&&Q.onVnodeBeforeUnmount)&&mn(je,b,T),oe&6)Vt(T.component,P,x);else{if(oe&128){T.suspense.unmount(P,x);return}_e&&$r(T,null,b,"beforeUnmount"),oe&64?T.type.remove(T,b,P,ne,x):q&&!q.hasOnce&&(M!==Kt||Y>0&&Y&64)?Ct(q,b,P,!1,!0):(M===Kt&&Y&384||!B&&oe&16)&&Ct(z,b,P),x&&Be(T)}const Ke=ce!=null&&ae==null;(Ce&&(je=Q&&Q.onVnodeUnmounted)||_e||Ke)&&Pt(()=>{je&&mn(je,b,T),_e&&$r(T,null,b,"unmounted"),Ke&&(T.el=null)},P)},Be=T=>{const{type:b,el:P,anchor:x,transition:B}=T;if(b===Kt){rr(P,x);return}if(b===oa){$(T);return}const M=()=>{s(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:G}=B,z=()=>Q(P,M);G?G(T.el,M,z):z()}else M()},rr=(T,b)=>{let P;for(;T!==b;)P=m(T),s(T),T=P;s(b)},Vt=(T,b,P)=>{const{bum:x,scope:B,job:M,subTree:Q,um:G,m:z,a:q}=T;Ad(z),Ad(q),x&&sa(x),B.stop(),M&&(M.flags|=8,Ue(Q,T,b,P)),G&&Pt(G,b),Pt(()=>{T.isUnmounted=!0},b)},Ct=(T,b,P,x=!1,B=!1,M=0)=>{for(let Q=M;Q<T.length;Q++)Ue(T[Q],b,P,x,B)},V=T=>{if(T.shapeFlag&6)return V(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const b=m(T.anchor||T.el),P=b&&b[Ow];return P?m(P):b};let Z=!1;const J=(T,b,P)=>{let x;T==null?b._vnode&&(Ue(b._vnode,null,null,!0),x=b._vnode.component):N(b._vnode||null,T,b,null,null,null,P),b._vnode=T,Z||(Z=!0,dd(x),$g(),Z=!1)},ne={p:N,um:Ue,m:qt,r:Be,mt:K,mc:y,pc:Ee,pbc:I,n:V,o:t};return{render:J,hydrate:void 0,createApp:nI(J)}}function yl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function yI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function __(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=jn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&__(o,c)),c.type===vc&&(c.patchFlag===-1&&(c=s[i]=jn(c)),c.el=o.el),c.type===Rt&&!c.el&&(c.el=o.el)}}function vI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function y_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:y_(e)}function Ad(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function v_(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?v_(e.subTree):null}const E_=t=>t.__isSuspense;function EI(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Rw(t)}const Kt=Symbol.for("v-fgt"),vc=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),oa=Symbol.for("v-stc"),qi=[];let Ut=null;function Ra(t=!1){qi.push(Ut=t?null:[])}function TI(){qi.pop(),Ut=qi[qi.length-1]||null}let ro=1;function Sa(t,e=!1){ro+=t,t<0&&Ut&&e&&(Ut.hasOnce=!0)}function T_(t){return t.dynamicChildren=ro>0?Ut||xs:null,TI(),ro>0&&Ut&&Ut.push(t),t}function ru(t,e,n,r,s,i){return T_(ch(t,e,n,r,s,i,!0))}function wI(t,e,n,r,s){return T_(ut(t,e,n,r,s,!0))}function Ca(t){return t?t.__v_isVNode===!0:!1}function Gr(t,e){return t.type===e.type&&t.key===e.key}const w_=({key:t})=>t??null,aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||We(t)||me(t)?{i:Ft,r:t,k:e,f:!!n}:t:null);function ch(t,e=null,n=null,r=0,s=null,i=t===Kt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&w_(e),ref:e&&aa(e),scopeId:Hg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ft};return c?(lh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),ro>0&&!o&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const ut=II;function II(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gw)&&(t=Rt),Ca(t)){const c=Sr(t,e,!0);return n&&lh(c,n),ro>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag=-2,c}if(VI(t)&&(t=t.__vccOpts),e){e=bI(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=Ku(c)),De(l)&&(dc(l)&&!se(l)&&(l=Xe({},l)),e.style=Gu(l))}const o=$e(t)?1:E_(t)?128:Gg(t)?64:De(t)?4:me(t)?2:0;return ch(t,e,n,r,s,o,i,!0)}function bI(t){return t?dc(t)||h_(t)?Xe({},t):t:null}function Sr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?RI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&w_(u),ref:e&&e.ref?n&&i?se(i)?i.concat(aa(e)):[i,aa(e)]:aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ts(f,l.clone(f)),f}function AI(t=" ",e=0){return ut(vc,null,t,e)}function ix(t,e){const n=ut(oa,null,t);return n.staticCount=e,n}function su(t="",e=!1){return e?(Ra(),wI(Rt,null,t)):ut(Rt,null,t)}function Tn(t){return t==null||typeof t=="boolean"?ut(Rt):se(t)?ut(Kt,null,t.slice()):Ca(t)?jn(t):ut(vc,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function lh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),lh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!h_(e)?e._ctx=Ft:s===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Ft},n=32):(e=String(e),r&64?(n=16,e=[AI(e)]):n=8);t.children=e,t.shapeFlag|=n}function RI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ku([e.class,r.class]));else if(s==="style")e.style=Gu([e.style,r.style]);else if(ic(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!oc(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function mn(t,e,n,r=null){fn(t,e,7,[n,r])}const SI=o_();let CI=0;function PI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||SI,i={uid:CI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:d_(r,s),emitsOptions:a_(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sI.bind(null,i),t.ce&&t.ce(i),i}let Et=null;const hs=()=>Et||Ft;let Pa,iu;{const t=hc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Pa=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),iu=e("__VUE_SSR_SETTERS__",n=>so=n)}const Eo=t=>{const e=Et;return Pa(t),t.scope.on(),()=>{t.scope.off(),Pa(e)}},Rd=()=>{Et&&Et.scope.off(),Pa(null)};function I_(t){return t.vnode.shapeFlag&4}let so=!1;function kI(t,e=!1,n=!1){e&&iu(e);const{props:r,children:s}=t.vnode,i=I_(t);uI(t,r,i,e),pI(t,s,n||e);const o=i?NI(t,e):void 0;return e&&iu(!1),o}function NI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qw);const{setup:r}=n;if(r){Qn();const s=t.setupContext=r.length>1?OI(t):null,i=Eo(t),o=vo(r,t,0,[t.props,s]),c=dg(o);if(Jn(),i(),(c||t.sp)&&!ji(t)&&Zg(t),c){if(o.then(Rd,Rd),e)return o.then(l=>{Sd(t,l)}).catch(l=>{pc(l,t,0)});t.asyncDep=o}else Sd(t,o)}else b_(t)}function Sd(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Ug(e)),b_(t)}function b_(t,e,n){const r=t.type;t.render||(t.render=r.render||In);{const s=Eo(t);Qn();try{Jw(t)}finally{Jn(),s()}}}const DI={get(t,e){return yt(t,"get",""),t[e]}};function OI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,DI),slots:t.slots,emit:t.emit,expose:e}}function Ec(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ug(us(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $i)return $i[n](t)},has(e,n){return n in e||n in $i}})):t.proxy}function xI(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function VI(t){return me(t)&&"__vccOpts"in t}const ue=(t,e)=>Tw(t,e,so);function de(t,e,n){try{Sa(-1);const r=arguments.length;return r===2?De(e)&&!se(e)?Ca(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ca(n)&&(n=[n]),ut(t,e,n))}finally{Sa(1)}}const MI="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ou;const Cd=typeof window<"u"&&window.trustedTypes;if(Cd)try{ou=Cd.createPolicy("vue",{createHTML:t=>t})}catch{}const A_=ou?t=>ou.createHTML(t):t=>t,LI="http://www.w3.org/2000/svg",FI="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,Pd=Bn&&Bn.createElement("template"),UI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Bn.createElementNS(LI,t):e==="mathml"?Bn.createElementNS(FI,t):n?Bn.createElement(t,{is:n}):Bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pd.innerHTML=A_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Pd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cr="transition",bi="animation",qs=Symbol("_vtc"),R_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},S_=Xe({},Qg,R_),BI=t=>(t.displayName="Transition",t.props=S_,t),jI=BI((t,{slots:e})=>de(Vw,C_(t),e)),Hr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},kd=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function C_(t){const e={};for(const w in t)w in R_||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,S=$I(s),N=S&&S[0],C=S&&S[1],{onBeforeEnter:U,onEnter:O,onEnterCancelled:L,onLeave:$,onLeaveCancelled:H,onBeforeAppear:te=U,onAppear:R=O,onAppearCancelled:y=L}=e,_=(w,E,K,ye)=>{w._enterCancelled=ye,hr(w,E?f:c),hr(w,E?u:o),K&&K()},I=(w,E)=>{w._isLeaving=!1,hr(w,p),hr(w,v),hr(w,m),E&&E()},A=w=>(E,K)=>{const ye=w?R:O,be=()=>_(E,w,K);Hr(ye,[E,be]),Nd(()=>{hr(E,w?l:i),gn(E,w?f:c),kd(ye)||Dd(E,r,N,be)})};return Xe(e,{onBeforeEnter(w){Hr(U,[w]),gn(w,i),gn(w,o)},onBeforeAppear(w){Hr(te,[w]),gn(w,l),gn(w,u)},onEnter:A(!1),onAppear:A(!0),onLeave(w,E){w._isLeaving=!0;const K=()=>I(w,E);gn(w,p),w._enterCancelled?(gn(w,m),au(w)):(au(w),gn(w,m)),Nd(()=>{w._isLeaving&&(hr(w,p),gn(w,v),kd($)||Dd(w,r,C,K))}),Hr($,[w,K])},onEnterCancelled(w){_(w,!1,void 0,!0),Hr(L,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),Hr(y,[w])},onLeaveCancelled(w){I(w),Hr(H,[w])}})}function $I(t){if(t==null)return null;if(De(t))return[vl(t.enter),vl(t.leave)];{const e=vl(t);return[e,e]}}function vl(t){return BT(t)}function gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qs]||(t[qs]=new Set)).add(e)}function hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[qs];n&&(n.delete(e),n.size||(t[qs]=void 0))}function Nd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qI=0;function Dd(t,e,n,r){const s=t._endId=++qI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=P_(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=v=>{v.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function P_(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${cr}Delay`),i=r(`${cr}Duration`),o=Od(s,i),c=r(`${bi}Delay`),l=r(`${bi}Duration`),u=Od(c,l);let f=null,p=0,m=0;e===cr?o>0&&(f=cr,p=o,m=i.length):e===bi?u>0&&(f=bi,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?cr:bi:null,m=f?f===cr?i.length:l.length:0);const v=f===cr&&/\b(?:transform|all)(?:,|$)/.test(r(`${cr}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:v}}function Od(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>xd(n)+xd(t[r])))}function xd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function au(t){return(t?t.ownerDocument:document).body.offsetHeight}function HI(t,e,n){const r=t[qs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ka=Symbol("_vod"),k_=Symbol("_vsh"),ox={name:"show",beforeMount(t,{value:e},{transition:n}){t[ka]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ai(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ai(t,!0),r.enter(t)):r.leave(t,()=>{Ai(t,!1)}):Ai(t,e))},beforeUnmount(t,{value:e}){Ai(t,e)}};function Ai(t,e){t.style.display=e?t[ka]:"none",t[k_]=!e}const zI=Symbol(""),WI=/(?:^|;)\s*display\s*:/;function GI(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Pi(r,c,"")}else for(const o in e)n[o]==null&&Pi(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?QI(t,o,!$e(e)&&e?e[o]:void 0,c)||Pi(r,o,c):Pi(r,o,"")}}else if(s){if(e!==n){const o=r[zI];o&&(n+=";"+o),r.cssText=n,i=WI.test(n)}}else e&&t.removeAttribute("style");ka in t&&(t[ka]=i?r.display:"",t[k_]&&(r.display="none"))}const Vd=/\s*!important$/;function Pi(t,e,n){if(se(n))n.forEach(r=>Pi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=KI(t,e);Vd.test(n)?t.setProperty(cs(r),n.replace(Vd,""),"important"):t[r]=n}}const Md=["Webkit","Moz","ms"],El={};function KI(t,e){const n=El[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return El[e]=r;r=lc(r);for(let s=0;s<Md.length;s++){const i=Md[s]+r;if(i in t)return El[e]=i}return e}function QI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&$e(r)&&n===r}const Ld="http://www.w3.org/1999/xlink";function Fd(t,e,n,r,s,i=WT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ld,e.slice(6,e.length)):t.setAttributeNS(Ld,e,n):n==null||i&&!_g(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Yt(n)?String(n):n)}function Ud(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?A_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=_g(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function gr(t,e,n,r){t.addEventListener(e,n,r)}function JI(t,e,n,r){t.removeEventListener(e,n,r)}const Bd=Symbol("_vei");function YI(t,e,n,r,s=null){const i=t[Bd]||(t[Bd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=XI(e);if(r){const u=i[e]=tb(r,s);gr(t,c,u,l)}else o&&(JI(t,c,o,l),i[e]=void 0)}}const jd=/(?:Once|Passive|Capture)$/;function XI(t){let e;if(jd.test(t)){e={};let r;for(;r=t.match(jd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let Tl=0;const ZI=Promise.resolve(),eb=()=>Tl||(ZI.then(()=>Tl=0),Tl=Date.now());function tb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;fn(nb(r,n.value),e,5,[r])};return n.value=t,n.attached=eb(),n}function nb(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $d=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rb=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?HI(t,r,o):e==="style"?GI(t,n,r):ic(e)?oc(e)||YI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sb(t,e,r,o))?(Ud(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fd(t,e,r,o,i,e!=="value")):t._isVueCE&&(ib(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!$e(r)))?Ud(t,St(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Fd(t,e,r,o))};function sb(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$d(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $d(e)&&$e(n)?!1:e in t}function ib(t,e){const n=t._def.props;if(!n)return!1;const r=St(e);return Array.isArray(n)?n.some(s=>St(s)===r):Object.keys(n).some(s=>St(s)===r)}const N_=new WeakMap,D_=new WeakMap,Na=Symbol("_moveCb"),qd=Symbol("_enterCb"),ob=t=>(delete t.props.mode,t),ab=ob({name:"TransitionGroup",props:Xe({},S_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=hs(),r=Kg();let s,i;return n_(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!fb(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(lb),s.forEach(ub);const c=s.filter(hb);au(n.vnode.el),c.forEach(l=>{const u=l.el,f=u.style;gn(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=u[Na]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",p),u[Na]=null,hr(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Re(t),c=C_(o);let l=o.tag||Kt;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),ts(f,no(f,c,r,n)),N_.set(f,O_(f.el)))}i=e.default?rh(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&ts(f,no(f,c,r,n))}return ut(l,null,i)}}}),cb=ab;function lb(t){const e=t.el;e[Na]&&e[Na](),e[qd]&&e[qd]()}function ub(t){D_.set(t,O_(t.el))}function hb(t){const e=N_.get(t),n=D_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el,o=i.style,c=i.getBoundingClientRect();let l=1,u=1;return i.offsetWidth&&(l=c.width/i.offsetWidth),i.offsetHeight&&(u=c.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),o.transform=o.webkitTransform=`translate(${r/l}px,${s/u}px)`,o.transitionDuration="0s",t}}function O_(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function fb(t,e,n){const r=t.cloneNode(),s=t[qs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=P_(r);return i.removeChild(r),o}const Hs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>sa(e,n):e};function db(t){t.target.composing=!0}function Hd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gn=Symbol("_assign");function zd(t,e,n){return e&&(t=t.trim()),n&&(t=uc(t)),t}const ax={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gn]=Hs(s);const i=r||s.props&&s.props.type==="number";gr(t,e?"change":"input",o=>{o.target.composing||t[Gn](zd(t.value,n,i))}),(n||i)&&gr(t,"change",()=>{t.value=zd(t.value,n,i)}),e||(gr(t,"compositionstart",db),gr(t,"compositionend",Hd),gr(t,"change",Hd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Gn]=Hs(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?uc(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},cx={deep:!0,created(t,e,n){t[Gn]=Hs(n),gr(t,"change",()=>{const r=t._modelValue,s=io(t),i=t.checked,o=t[Gn];if(se(r)){const c=Qu(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(ei(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(x_(t,i))})},mounted:Wd,beforeUpdate(t,e,n){t[Gn]=Hs(n),Wd(t,e,n)}};function Wd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(se(e))s=Qu(e,r.props.value)>-1;else if(ei(e))s=e.has(r.props.value);else{if(e===n)return;s=ti(e,x_(t,!0))}t.checked!==s&&(t.checked=s)}const lx={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ei(e);gr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?uc(io(o)):io(o));t[Gn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,mc(()=>{t._assigning=!1})}),t[Gn]=Hs(r)},mounted(t,{value:e}){Gd(t,e)},beforeUpdate(t,e,n){t[Gn]=Hs(n)},updated(t,{value:e}){t._assigning||Gd(t,e)}};function Gd(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!ei(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=io(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Qu(e,c)>-1}else o.selected=e.has(c);else if(ti(io(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function io(t){return"_value"in t?t._value:t.value}function x_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const pb=["ctrl","shift","alt","meta"],mb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pb.some(n=>t[`${n}Key`]&&!e.includes(n))},ux=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=mb[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},gb=Xe({patchProp:rb},UI);let Kd;function _b(){return Kd||(Kd=gI(gb))}const V_=((...t)=>{const e=_b().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=vb(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,yb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function yb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vb(t){return $e(t)?document.querySelector(t):t}function uh(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const ns=cn(!1);let cu;function Eb(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}function Tb(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const M_="ontouchstart"in window||window.navigator.maxTouchPoints>0;function wb(t){const e=t.toLowerCase(),n=Tb(e),r=Eb(e,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||e.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,e.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),ns.value===!0&&(cu={is:{...s}}),M_===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Qd=navigator.userAgent||navigator.vendor||window.opera,Ib={has:{touch:!1,webStorage:!1},within:{iframe:!1}},bn={userAgent:Qd,is:wb(Qd),has:{touch:M_},within:{iframe:window.self!==window.top}},lu={install(t){const{$q:e}=t;ns.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,bn),ns.value=!1}),e.platform=ls(this)):e.platform=this}};{let t;uh(bn.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(lu,bn),ns.value===!0&&(Object.assign(lu,cu,Ib),cu=null)}function To(t){return us(sh(t))}function bb(t){return us(t)}const Tc=(t,e)=>{const n=ls(t);for(const r in t)uh(e,r,()=>n[r],s=>{n[r]=s});return e},wo={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(wo,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function oo(){}function Ab(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function L_(t){t.stopPropagation()}function Rb(t){t.cancelable!==!1&&t.preventDefault()}function Is(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function Sb(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],t[s[2]],wo[s[3]])})}function Cb(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],wo[r[3]])}),t[n]=void 0)}function Pb(t,e=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,t.apply(this,i)};r!==null&&clearTimeout(r),r=setTimeout(o,e)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const wl=["sm","md","lg","xl"],{passive:Jd}=wo,kb=Tc({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:oo,setDebounce:oo,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||bn.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=t.config.screen?.bodyClasses===!0;this.__update=p=>{const[m,v]=i();if(v!==this.height&&(this.height=v),m!==this.width)this.width=m;else if(p!==!0)return;let S=this.sizes;this.gt.xs=m>=S.sm,this.gt.sm=m>=S.md,this.gt.md=m>=S.lg,this.gt.lg=m>=S.xl,this.lt.sm=m<S.sm,this.lt.md=m<S.md,this.lt.lg=m<S.lg,this.lt.xl=m<S.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,S=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",S!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${S}`)),this.name=S)};let c,l={},u=16;this.setSizes=p=>{wl.forEach(m=>{p[m]!==void 0&&(l[m]=p[m])})},this.setDebounce=p=>{u=p};const f=()=>{const p=getComputedStyle(document.body);p.getPropertyValue("--q-size-sm")&&wl.forEach(m=>{this.sizes[m]=parseInt(p.getPropertyValue(`--q-size-${m}`),10)}),this.setSizes=m=>{wl.forEach(v=>{m[v]&&(this.sizes[v]=m[v])}),this.__update(!0)},this.setDebounce=m=>{c!==void 0&&r.removeEventListener("resize",c,Jd),c=m>0?Pb(this.__update,m):this.__update,r.addEventListener("resize",c,Jd)},this.setDebounce(u),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};ns.value===!0?e.push(f):f()}}),gt=Tc({isActive:!1,mode:!1},{__media:void 0,set(t){gt.mode=t,t==="auto"?(gt.__media===void 0&&(gt.__media=window.matchMedia("(prefers-color-scheme: dark)"),gt.__updateMedia=()=>{gt.set("auto")},gt.__media.addListener(gt.__updateMedia)),t=gt.__media.matches):gt.__media!==void 0&&(gt.__media.removeListener(gt.__updateMedia),gt.__media=void 0),gt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){gt.set(gt.isActive===!1)},install({$q:t,ssrContext:e}){const n=t.config.dark;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function Nb(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let F_=!1;function Db(t){F_=t.isComposing===!0}function Ob(t){return F_===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function uu(t,e){return Ob(t)===!0?!1:[].concat(e).includes(t.keyCode)}function U_(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function xb({is:t,has:e,within:n},r){const s=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const i=U_(t);i!==void 0&&s.push("platform-"+i)}if(t.nativeMobile===!0){const i=t.nativeMobileWrapper;s.push(i),s.push("native-mobile"),t.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else t.electron===!0?s.push("electron"):t.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function Vb(){const{is:t}=bn,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=U_(t);s!==void 0&&n.add(`platform-${s}`)}}bn.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),bn.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function Mb(t){for(const e in t)Nb(e,t[e])}const Lb={install(t){if(this.__installed!==!0){if(ns.value===!0)Vb();else{const{$q:e}=t;e.config.brand!==void 0&&Mb(e.config.brand);const n=xb(bn,e.config);document.body.classList.add.apply(document.body.classList,n)}bn.is.ios===!0&&document.body.addEventListener("touchstart",oo),window.addEventListener("keydown",Db,!0)}}},B_=()=>!0;function Fb(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function Ub(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function Bb(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return B_;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(Fb).map(Ub)),()=>e.includes(window.location.hash)}const jb={__history:[],add:oo,remove:oo,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=bn.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r?.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=B_),this.__history.push(o)},this.remove=o=>{const c=this.__history.indexOf(o);c>=0&&this.__history.splice(c,1)};const s=Bb(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},Yd={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:t=>`Previous ${t} years`,nextRangeYears:t=>`Next ${t} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Xd(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const pr=Tc({__qLang:{}},{getLocale:Xd,set(t=Yd,e){const n={...t,rtl:t.rtl===!0,getLocale:Xd};{if(n.set=pr.set,pr.__langConfig===void 0||pr.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(pr.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=pr.__qLang,pr.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(e||Yd))}}),$b={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Da=Tc({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=Da.set,Object.assign(Da.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,uh(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(e||$b))}}),qb="_q_",Oa={};let j_=!1;function Hb(){j_=!0}function ao(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const Zd=[lu,Lb,gt,kb,jb,pr,Da];function zb(t,e){const n=V_(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...s}=e._context;return Object.assign(n._context,s),n}function ep(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function Wb(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(qb,n.$q),ep(n,Zd),e.components!==void 0&&Object.values(e.components).forEach(r=>{ao(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{ao(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&ep(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Zd.includes(r)===!1)),ns.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}const Gb=function(e,n={}){const r={version:"2.19.3"};j_===!1?(n.config!==void 0&&Object.assign(Oa,n.config),r.config={...Oa},Hb()):r.config=n.config||{},Wb(e,n,{parentApp:e,$q:r,lang:n.lang,iconSet:n.iconSet,onSSRHydrated:[]})},Kb={name:"Quasar",version:"2.19.3",install:Gb,lang:pr,iconSet:Da};/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $_;const wc=t=>$_=t,q_=Symbol();function hu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hi||(Hi={}));function Qb(){const t=Tg(!0),e=t.run(()=>cn({}));let n=[],r=[];const s=us({install(i){wc(s),s._a=i,i.provide(q_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const H_=()=>{};function tp(t,e,n,r=H_){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&wg()&&KT(s),s}function bs(t,...e){t.forEach(n=>{n(...e)})}const Jb=t=>t(),np=Symbol(),Il=Symbol();function fu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];hu(s)&&hu(r)&&t.hasOwnProperty(n)&&!We(r)&&!Wn(r)?t[n]=fu(s,r):t[n]=r}return t}const Yb=Symbol();function Xb(t){return!hu(t)||!Object.prototype.hasOwnProperty.call(t,Yb)}const{assign:fr}=Object;function Zb(t){return!!(We(t)&&t.effect)}function eA(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=_w(n.state.value[t]);return fr(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=us(ue(()=>{wc(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return l=z_(t,u,e,n,r,!0),l}function z_(t,e,n={},r,s,i){let o;const c=fr({actions:{}},n),l={deep:!0};let u,f,p=new Set,m=new Set,v;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={});let N;function C(y){let _;u=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Hi.patchFunction,storeId:t,events:v}):(fu(r.state.value[t],y),_={type:Hi.patchObject,payload:y,storeId:t,events:v});const I=N=Symbol();mc().then(()=>{N===I&&(u=!0)}),f=!0,bs(p,_,r.state.value[t])}const U=i?function(){const{state:_}=n,I=_?_():{};this.$patch(A=>{fr(A,I)})}:H_;function O(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const L=(y,_="")=>{if(np in y)return y[Il]=_,y;const I=function(){wc(r);const A=Array.from(arguments),w=new Set,E=new Set;function K(he){w.add(he)}function ye(he){E.add(he)}bs(m,{args:A,name:I[Il],store:H,after:K,onError:ye});let be;try{be=y.apply(this&&this.$id===t?this:H,A)}catch(he){throw bs(E,he),he}return be instanceof Promise?be.then(he=>(bs(w,he),he)).catch(he=>(bs(E,he),Promise.reject(he))):(bs(w,be),be)};return I[np]=!0,I[Il]=_,I},$={_p:r,$id:t,$onAction:tp.bind(null,m),$patch:C,$reset:U,$subscribe(y,_={}){const I=tp(p,y,_.detached,()=>A()),A=o.run(()=>Ui(()=>r.state.value[t],w=>{(_.flush==="sync"?f:u)&&y({storeId:t,type:Hi.direct,events:v},w)},fr({},l,_)));return I},$dispose:O},H=ls($);r._s.set(t,H);const R=(r._a&&r._a.runWithContext||Jb)(()=>r._e.run(()=>(o=Tg()).run(()=>e({action:L}))));for(const y in R){const _=R[y];if(We(_)&&!Zb(_)||Wn(_))i||(S&&Xb(_)&&(We(_)?_.value=S[y]:fu(_,S[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const I=L(_,y);R[y]=I,c.actions[y]=_}}return fr(H,R),fr(Re(H),R),Object.defineProperty(H,"$state",{get:()=>r.state.value[t],set:y=>{C(_=>{fr(_,y)})}}),r._p.forEach(y=>{fr(H,o.run(()=>y({store:H,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(H.$state,S),u=!0,f=!0,H}/*! #__NO_SIDE_EFFECTS__ */function W_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=Pw();return o=o||(l?Jt(q_,null):null),o&&wc(o),o=$_,o._s.has(t)||(s?z_(t,e,r,o):eA(t,r,o)),o._s.get(t)}return i.$id=t,i}const tA=W_("toast",()=>{const t=cn(""),e=cn(!1),n=cn(1);let r=null,s="";function i(o,c=3e3){r&&clearTimeout(r),s===o&&e.value?n.value+=1:(t.value=o,n.value=1,s=o,e.value=!0),r=setTimeout(()=>{e.value=!1,n.value=1,s=""},c)}return{message:t,visible:e,count:n,show:i}}),nA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rA={key:0,class:"app-toast"},sA={key:0,class:"app-toast-count"},iA={__name:"AppToast",setup(t){const e=tA();return(n,r)=>rn(e).visible?(Ra(),ru("div",rA,[ch("span",null,Kl(rn(e).message),1),rn(e).count>1?(Ra(),ru("span",sA,Kl(rn(e).count),1)):su("",!0)])):su("",!0)}},oA=nA(iA,[["__scopeId","data-v-75aa35c9"]]),aA={__name:"App",setup(t){return(e,n)=>{const r=Ww("router-view");return Ra(),ru(Kt,null,[ut(r),ut(oA)],64)}}};function hx(t){return t}const bl=()=>Qb(),cA=t=>t,lA=cA;/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ps=typeof document<"u";function G_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&G_(t.default)}const Pe=Object.assign;function Al(t,e){const n={};for(const r in e){const s=e[r];n[r]=dn(s)?s.map(t):t(s)}return n}const zi=()=>{},dn=Array.isArray;function rp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const K_=/#/g,hA=/&/g,fA=/\//g,dA=/=/g,pA=/\?/g,Q_=/\+/g,mA=/%5B/g,gA=/%5D/g,J_=/%5E/g,_A=/%60/g,Y_=/%7B/g,yA=/%7C/g,X_=/%7D/g,vA=/%20/g;function hh(t){return t==null?"":encodeURI(""+t).replace(yA,"|").replace(mA,"[").replace(gA,"]")}function EA(t){return hh(t).replace(Y_,"{").replace(X_,"}").replace(J_,"^")}function du(t){return hh(t).replace(Q_,"%2B").replace(vA,"+").replace(K_,"%23").replace(hA,"%26").replace(_A,"`").replace(Y_,"{").replace(X_,"}").replace(J_,"^")}function TA(t){return du(t).replace(dA,"%3D")}function wA(t){return hh(t).replace(K_,"%23").replace(pA,"%3F")}function IA(t){return wA(t).replace(fA,"%2F")}function co(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const bA=/\/$/,AA=t=>t.replace(bA,"");function Rl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=PA(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:co(o)}}function RA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function SA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zs(e.matched[r],n.matched[s])&&Z_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Z_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!CA(t[n],e[n]))return!1;return!0}function CA(t,e){return dn(t)?ip(t,e):dn(e)?ip(e,t):t?.valueOf()===e?.valueOf()}function ip(t,e){return dn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function PA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const lr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let pu=(function(t){return t.pop="pop",t.push="push",t})({}),Sl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function kA(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AA(t)}const NA=/^[^#]+#/;function DA(t,e){return t.replace(NA,"#")+e}function OA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ic=()=>({left:window.scrollX,top:window.scrollY});function xA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=OA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function op(t,e){return(history.state?history.state.position-e:-1)+t}const mu=new Map;function VA(t,e){mu.set(t,e)}function MA(t){const e=mu.get(t);return mu.delete(t),e}function LA(t){return typeof t=="string"||t&&typeof t=="object"}function ey(t){return typeof t=="string"||typeof t=="symbol"}let ze=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const ty=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function Ws(t,e){return Pe(new Error,{type:t,[ty]:!0},e)}function Un(t,e){return t instanceof Error&&ty in t&&(e==null||!!(t.type&e))}const FA=["params","query","hash"];function UA(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of FA)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function BA(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Q_," "),i=s.indexOf("="),o=co(i<0?s:s.slice(0,i)),c=i<0?null:co(s.slice(i+1));if(o in e){let l=e[o];dn(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function ap(t){let e="";for(let n in t){const r=t[n];if(n=TA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(r)?r.map(s=>s&&du(s)):[r&&du(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function jA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $A=Symbol(""),cp=Symbol(""),bc=Symbol(""),fh=Symbol(""),gu=Symbol("");function Ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ws(ze.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):LA(m)?l(Ws(ze.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Cl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(G_(l)){const u=(l.__vccOpts||l)[e];u&&i.push(mr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=uA(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&mr(m,n,r,o,c,s)()}))}}return i}function qA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>zs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>zs(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let HA=()=>location.protocol+"//"+location.host;function ny(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),sp(c,"")}return sp(n,t)+r+s}function zA(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const v=ny(t,location),S=n.value,N=e.value;let C=0;if(m){if(n.value=v,e.value=m,o&&o===S){o=null;return}C=N?m.position-N.position:0}else r(v);s.forEach(U=>{U(n.value,S,{delta:C,type:pu.pop,direction:C?C>0?Sl.forward:Sl.back:Sl.unknown})})};function l(){o=n.value}function u(m){s.push(m);const v=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Pe({},m.state,{scroll:Ic()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function lp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ic():null}}function WA(t){const{history:e,location:n}=window,r={value:ny(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:HA()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Pe({},e.state,lp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Pe({},s.value,e.state,{forward:l,scroll:Ic()});i(f.current,f,!0),i(l,Pe({},lp(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function GA(t){t=kA(t);const e=WA(t),n=zA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:DA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Kr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ze=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ze||{});const KA={type:Kr.Static,value:""},QA=/[a-zA-Z0-9_]/;function JA(t){if(!t)return[[]];if(t==="/")return[[KA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=Ze.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===Ze.Static?i.push({type:Kr.Static,value:u}):n===Ze.Param||n===Ze.ParamRegExp||n===Ze.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Kr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Ze.ParamRegExp){r=n,n=Ze.EscapeNext;continue}switch(n){case Ze.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=Ze.Param):m();break;case Ze.EscapeNext:m(),n=r;break;case Ze.Param:l==="("?n=Ze.ParamRegExp:QA.test(l)?m():(p(),n=Ze.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Ze.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Ze.ParamRegExpEnd:f+=l;break;case Ze.ParamRegExpEnd:p(),n=Ze.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const up="[^/]+?",YA={sensitive:!1,strict:!1,start:!0,end:!0};var bt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(bt||{});const XA=/[.+*?^${}()[\]/\\]/g;function ZA(t,e){const n=Pe({},YA,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[bt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=bt.Segment+(n.sensitive?bt.BonusCaseSensitive:0);if(m.type===Kr.Static)p||(s+="/"),s+=m.value.replace(XA,"\\$&"),v+=bt.Static;else if(m.type===Kr.Param){const{value:S,repeatable:N,optional:C,regexp:U}=m;i.push({name:S,repeatable:N,optional:C});const O=U||up;if(O!==up){v+=bt.BonusCustomRegExp;try{`${O}`}catch($){throw new Error(`Invalid custom RegExp for param "${S}" (${O}): `+$.message)}}let L=N?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(L=C&&u.length<2?`(?:/${L})`:"/"+L),C&&(L+="?"),s+=L,v+=bt.Dynamic,C&&(v+=bt.BonusOptional),N&&(v+=bt.BonusRepeatable),O===".*"&&(v+=bt.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=bt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",S=i[m-1];p[S.name]=v&&S.repeatable?v.split("/"):v}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===Kr.Static)f+=v.value;else if(v.type===Kr.Param){const{value:S,repeatable:N,optional:C}=v,U=S in u?u[S]:"";if(dn(U)&&!N)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const O=dn(U)?U.join("/"):U;if(!O)if(C)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=O}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function eR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===bt.Static+bt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===bt.Static+bt.Segment?1:-1:0}function ry(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=eR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hp(r))return 1;if(hp(s))return-1}return s.length-r.length}function hp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tR={strict:!1,end:!0,sensitive:!1};function nR(t,e,n){const r=ZA(JA(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rR(t,e){const n=[],r=new Map;e=rp(tR,e);function s(p){return r.get(p)}function i(p,m,v){const S=!v,N=dp(p);N.aliasOf=v&&v.record;const C=rp(e,p),U=[N];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const H of $)U.push(dp(Pe({},N,{components:v?v.record.components:N.components,path:H,aliasOf:v?v.record:N})))}let O,L;for(const $ of U){const{path:H}=$;if(m&&H[0]!=="/"){const te=m.record.path,R=te[te.length-1]==="/"?"":"/";$.path=m.record.path+(H&&R+H)}if(O=nR($,m,C),v?v.alias.push(O):(L=L||O,L!==O&&L.alias.push(O),S&&p.name&&!pp(O)&&o(p.name)),sy(O)&&l(O),N.children){const te=N.children;for(let R=0;R<te.length;R++)i(te[R],O,v&&v.children[R])}v=v||O}return L?()=>{o(L)}:zi}function o(p){if(ey(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=oR(p,n);n.splice(m,0,p),p.record.name&&!pp(p)&&r.set(p.record.name,p)}function u(p,m){let v,S={},N,C;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Ws(ze.MATCHER_NOT_FOUND,{location:p});C=v.record.name,S=Pe(fp(m.params,v.keys.filter(L=>!L.optional).concat(v.parent?v.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&fp(p.params,v.keys.map(L=>L.name))),N=v.stringify(S)}else if(p.path!=null)N=p.path,v=n.find(L=>L.re.test(N)),v&&(S=v.parse(N),C=v.record.name);else{if(v=m.name?r.get(m.name):n.find(L=>L.re.test(m.path)),!v)throw Ws(ze.MATCHER_NOT_FOUND,{location:p,currentLocation:m});C=v.record.name,S=Pe({},m.params,p.params),N=v.stringify(S)}const U=[];let O=v;for(;O;)U.unshift(O.record),O=O.parent;return{name:C,path:N,params:S,matched:U,meta:iR(U)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function fp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:sR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iR(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function oR(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ry(t,e[i])<0?r=i:n=i+1}const s=aR(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function aR(t){let e=t;for(;e=e.parent;)if(sy(e)&&ry(t,e)===0)return e}function sy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function mp(t){const e=Jt(bc),n=Jt(fh),r=ue(()=>{const l=rn(t.to);return e.resolve(l)}),s=ue(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(zs.bind(null,f));if(m>-1)return m;const v=gp(l[u-2]);return u>1&&gp(f)===v&&p[p.length-1].path!==v?p.findIndex(zs.bind(null,l[u-2])):m}),i=ue(()=>s.value>-1&&fR(n.params,r.value.params)),o=ue(()=>s.value>-1&&s.value===n.matched.length-1&&Z_(n.params,r.value.params));function c(l={}){if(hR(l)){const u=e[rn(t.replace)?"replace":"push"](rn(t.to)).catch(zi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function cR(t){return t.length===1?t[0]:t}const lR=sh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:mp,setup(t,{slots:e}){const n=ls(mp(t)),{options:r}=Jt(bc),s=ue(()=>({[_p(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_p(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&cR(e.default(n));return t.custom?i:de("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uR=lR;function hR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function gp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _p=(t,e,n)=>t??e??n,dR=sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(gu),s=ue(()=>t.route||r.value),i=Jt(cp,0),o=ue(()=>{let u=rn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=ue(()=>s.value.matched[o.value]);ia(cp,ue(()=>o.value+1)),ia($A,c),ia(gu,s);const l=cn();return Ui(()=>[l.value,c.value,t.name],([u,f,p],[m,v,S])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!zs(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return yp(n.default,{Component:m,route:u});const v=p.props[f],S=v?v===!0?u.params:typeof v=="function"?v(u):v:null,C=de(m,Pe({},S,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return yp(n.default,{Component:C,route:u})||C}}});function yp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pR=dR;function mR(t){const e=rR(t.routes,t),n=t.parseQuery||BA,r=t.stringifyQuery||ap,s=t.history,i=Ri(),o=Ri(),c=Ri(),l=pw(lr);let u=lr;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Al.bind(null,V=>""+V),p=Al.bind(null,IA),m=Al.bind(null,co);function v(V,Z){let J,ne;return ey(V)?(J=e.getRecordMatcher(V),ne=Z):ne=V,e.addRoute(ne,J)}function S(V){const Z=e.getRecordMatcher(V);Z&&e.removeRoute(Z)}function N(){return e.getRoutes().map(V=>V.record)}function C(V){return!!e.getRecordMatcher(V)}function U(V,Z){if(Z=Pe({},Z||l.value),typeof V=="string"){const P=Rl(n,V,Z.path),x=e.resolve({path:P.path},Z),B=s.createHref(P.fullPath);return Pe(P,x,{params:m(x.params),hash:co(P.hash),redirectedFrom:void 0,href:B})}let J;if(V.path!=null)J=Pe({},V,{path:Rl(n,V.path,Z.path).path});else{const P=Pe({},V.params);for(const x in P)P[x]==null&&delete P[x];J=Pe({},V,{params:p(P)}),Z.params=p(Z.params)}const ne=e.resolve(J,Z),ve=V.hash||"";ne.params=f(m(ne.params));const T=RA(r,Pe({},V,{hash:EA(ve),path:ne.path})),b=s.createHref(T);return Pe({fullPath:T,hash:ve,query:r===ap?jA(V.query):V.query||{}},ne,{redirectedFrom:void 0,href:b})}function O(V){return typeof V=="string"?Rl(n,V,l.value.path):Pe({},V)}function L(V,Z){if(u!==V)return Ws(ze.NAVIGATION_CANCELLED,{from:Z,to:V})}function $(V){return R(V)}function H(V){return $(Pe(O(V),{replace:!0}))}function te(V,Z){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:ne}=J;let ve=typeof ne=="function"?ne(V,Z):ne;return typeof ve=="string"&&(ve=ve.includes("?")||ve.includes("#")?ve=O(ve):{path:ve},ve.params={}),Pe({query:V.query,hash:V.hash,params:ve.path!=null?{}:V.params},ve)}}function R(V,Z){const J=u=U(V),ne=l.value,ve=V.state,T=V.force,b=V.replace===!0,P=te(J,ne);if(P)return R(Pe(O(P),{state:typeof P=="object"?Pe({},ve,P.state):ve,force:T,replace:b}),Z||J);const x=J;x.redirectedFrom=Z;let B;return!T&&SA(r,ne,J)&&(B=Ws(ze.NAVIGATION_DUPLICATED,{to:x,from:ne}),qt(ne,ne,!0,!1)),(B?Promise.resolve(B):I(x,ne)).catch(M=>Un(M)?Un(M,ze.NAVIGATION_GUARD_REDIRECT)?M:en(M):Ee(M,x,ne)).then(M=>{if(M){if(Un(M,ze.NAVIGATION_GUARD_REDIRECT))return R(Pe({replace:b},O(M.to),{state:typeof M.to=="object"?Pe({},ve,M.to.state):ve,force:T}),Z||x)}else M=w(x,ne,!0,b,ve);return A(x,ne,M),M})}function y(V,Z){const J=L(V,Z);return J?Promise.reject(J):Promise.resolve()}function _(V){const Z=rr.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(V):V()}function I(V,Z){let J;const[ne,ve,T]=qA(V,Z);J=Cl(ne.reverse(),"beforeRouteLeave",V,Z);for(const P of ne)P.leaveGuards.forEach(x=>{J.push(mr(x,V,Z))});const b=y.bind(null,V,Z);return J.push(b),Ct(J).then(()=>{J=[];for(const P of i.list())J.push(mr(P,V,Z));return J.push(b),Ct(J)}).then(()=>{J=Cl(ve,"beforeRouteUpdate",V,Z);for(const P of ve)P.updateGuards.forEach(x=>{J.push(mr(x,V,Z))});return J.push(b),Ct(J)}).then(()=>{J=[];for(const P of T)if(P.beforeEnter)if(dn(P.beforeEnter))for(const x of P.beforeEnter)J.push(mr(x,V,Z));else J.push(mr(P.beforeEnter,V,Z));return J.push(b),Ct(J)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),J=Cl(T,"beforeRouteEnter",V,Z,_),J.push(b),Ct(J))).then(()=>{J=[];for(const P of o.list())J.push(mr(P,V,Z));return J.push(b),Ct(J)}).catch(P=>Un(P,ze.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function A(V,Z,J){c.list().forEach(ne=>_(()=>ne(V,Z,J)))}function w(V,Z,J,ne,ve){const T=L(V,Z);if(T)return T;const b=Z===lr,P=Ps?history.state:{};J&&(ne||b?s.replace(V.fullPath,Pe({scroll:b&&P&&P.scroll},ve)):s.push(V.fullPath,ve)),l.value=V,qt(V,Z,J,b),en()}let E;function K(){E||(E=s.listen((V,Z,J)=>{if(!Vt.listening)return;const ne=U(V),ve=te(ne,Vt.currentRoute.value);if(ve){R(Pe(ve,{replace:!0,force:!0}),ne).catch(zi);return}u=ne;const T=l.value;Ps&&VA(op(T.fullPath,J.delta),Ic()),I(ne,T).catch(b=>Un(b,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?b:Un(b,ze.NAVIGATION_GUARD_REDIRECT)?(R(Pe(O(b.to),{force:!0}),ne).then(P=>{Un(P,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===pu.pop&&s.go(-1,!1)}).catch(zi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),Ee(b,ne,T))).then(b=>{b=b||w(ne,T,!1),b&&(J.delta&&!Un(b,ze.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===pu.pop&&Un(b,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(ne,T,b)}).catch(zi)}))}let ye=Ri(),be=Ri(),he;function Ee(V,Z,J){en(V);const ne=be.list();return ne.length?ne.forEach(ve=>ve(V,Z,J)):console.error(V),Promise.reject(V)}function xt(){return he&&l.value!==lr?Promise.resolve():new Promise((V,Z)=>{ye.add([V,Z])})}function en(V){return he||(he=!V,K(),ye.list().forEach(([Z,J])=>V?J(V):Z()),ye.reset()),V}function qt(V,Z,J,ne){const{scrollBehavior:ve}=t;if(!Ps||!ve)return Promise.resolve();const T=!J&&MA(op(V.fullPath,0))||(ne||!J)&&history.state&&history.state.scroll||null;return mc().then(()=>ve(V,Z,T)).then(b=>b&&xA(b)).catch(b=>Ee(b,V,Z))}const Ue=V=>s.go(V);let Be;const rr=new Set,Vt={currentRoute:l,listening:!0,addRoute:v,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:N,resolve:U,options:t,push:$,replace:H,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:be.add,isReady:xt,install(V){V.component("RouterLink",uR),V.component("RouterView",pR),V.config.globalProperties.$router=Vt,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>rn(l)}),Ps&&!Be&&l.value===lr&&(Be=!0,$(s.location).catch(ne=>{}));const Z={};for(const ne in lr)Object.defineProperty(Z,ne,{get:()=>l.value[ne],enumerable:!0});V.provide(bc,Vt),V.provide(fh,Lg(Z)),V.provide(gu,l);const J=V.unmount;rr.add(V),V.unmount=function(){rr.delete(V),rr.size<1&&(u=lr,E&&E(),E=null,l.value=lr,Be=!1,he=!1),J()}}};function Ct(V){return V.reduce((Z,J)=>Z.then(()=>_(J)),Promise.resolve())}return Vt}function fx(){return Jt(bc)}function dx(t){return Jt(fh)}const gR=[{path:"/",component:()=>at(()=>import("./MainLayout-oIpLME_6.js"),__vite__mapDeps([0,1])),children:[{path:"",name:"home",component:()=>at(()=>import("./HomePage-uQGIDzrT.js"),__vite__mapDeps([2,3,4]))},{path:"product/:id",name:"product",component:()=>at(()=>import("./ProductPage-DcVk7-95.js"),__vite__mapDeps([5,3,6,7]))},{path:"cart",name:"cart",component:()=>at(()=>import("./CartPage-BltLYUEv.js"),__vite__mapDeps([8,6,3,9,10]))},{path:"order-success",name:"order-success",component:()=>at(()=>import("./OrderSuccessPage-B_um3qdL.js"),__vite__mapDeps([11,9,12]))},{path:"orders",name:"orders",component:()=>at(()=>import("./OrdersPage-DBfvjZXV.js"),__vite__mapDeps([13,14,9,15]))},{path:"orders/:id",name:"order-detail",component:()=>at(()=>import("./OrderDetailPage-DCAJTQm2.js"),__vite__mapDeps([16,17,9,18]))},{path:"terms",name:"terms",component:()=>at(()=>import("./TermsPage-DbKjDFb7.js"),__vite__mapDeps([19,20]))},{path:"about",name:"about",component:()=>at(()=>import("./AboutPage-DAZNKikv.js"),__vite__mapDeps([21,22]))},{path:"comingsoon",name:"comingsoon",component:()=>at(()=>import("./ComingSoonPage-DCZWgow5.js"),__vite__mapDeps([23,24]))}]},{path:"/admin",component:()=>at(()=>import("./MainLayout-oIpLME_6.js"),__vite__mapDeps([0,1])),meta:{requiresAdmin:!0,isAdminSection:!0},children:[{path:"",name:"admin",component:()=>at(()=>import("./AdminPage-z6FVOBeq.js"),__vite__mapDeps([25,14,3,9,17,26]))},{path:"orders/:id",name:"admin-order-detail",component:()=>at(()=>import("./OrderDetailPage-DCAJTQm2.js"),__vite__mapDeps([16,17,9,18])),meta:{isAdminSection:!0}},{path:"account",name:"account",component:()=>at(()=>import("./AccountPage-xHTc4pEj.js"),__vite__mapDeps([27,17,28]))}]},{path:"/admin/login",name:"admin-login",component:()=>at(()=>import("./AdminLoginPage-ChWWd2xW.js"),__vite__mapDeps([29,30]))},{path:"/:catchAll(.*)*",redirect:"/"}],_R=()=>{};var vp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},oy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new vR;const m=i<<2|c>>4;if(r.push(m),u!==64){const v=c<<4&240|u>>2;if(r.push(v),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ER=function(t){const e=iy(t);return oy.encodeByteArray(e,!0)},xa=function(t){return ER(t).replace(/\./g,"")},ay=function(t){try{return oy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=()=>TR().__FIREBASE_DEFAULTS__,IR=()=>{if(typeof process>"u"||typeof vp>"u")return;const t=vp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ay(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return _R()||wR()||IR()||bR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cy=t=>Ac()?.emulatorHosts?.[t],ly=t=>{const e=cy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uy=()=>Ac()?.config,hy=t=>Ac()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dh(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[xa(JSON.stringify(n)),xa(JSON.stringify(o)),""].join(".")}const Wi={};function RR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Wi))Wi[e]?t.emulator.push(e):t.prod.push(e);return t}function SR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ep=!1;function ph(t,e){if(typeof window>"u"||typeof document>"u"||!fs(window.location.host)||Wi[t]===e||Wi[t]||Ep)return;Wi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=RR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ep=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=SR(r),v=n("text"),S=document.getElementById(v)||document.createElement("span"),N=n("learnmore"),C=document.getElementById(N)||document.createElement("a"),U=n("preprendIcon"),O=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const L=m.element;c(L),f(C,N);const $=u();l(O,U),L.append(O,S,C,$),document.body.appendChild(L)}i?(S.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function PR(){const t=Ac()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DR(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OR(){return!PR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gh(){try{return typeof indexedDB=="object"}catch{return!1}}function _h(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function dy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xR,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?VR(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Zt(s,c,r)}}function VR(t,e){return t.replace(MR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const MR=/\{\$([^}]+)}/g;function LR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tp(i)&&Tp(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function FR(t,e){const n=new UR(t,e);return n.subscribe.bind(n)}class UR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pl),s.error===void 0&&(s.error=Pl),s.complete===void 0&&(s.complete=Pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=1e3,$R=2,qR=14400*1e3,HR=.5;function wp(t,e=jR,n=$R){const r=e*Math.pow(n,t),s=Math.round(HR*r*(Math.random()-.5)*2);return Math.min(qR,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GR(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WR(t){return t===Wr?void 0:t}function GR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const QR={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},JR=Te.INFO,YR={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},XR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=JR,this._logHandler=XR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const ZR=(t,e)=>e.some(n=>t instanceof n);let Ip,bp;function eS(){return Ip||(Ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tS(){return bp||(bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const py=new WeakMap,_u=new WeakMap,my=new WeakMap,kl=new WeakMap,yh=new WeakMap;function nS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&py.set(n,t)}).catch(()=>{}),yh.set(e,t),e}function rS(t){if(_u.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_u.set(t,e)}let yu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _u.get(t);if(e==="objectStoreNames")return t.objectStoreNames||my.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sS(t){yu=t(yu)}function iS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nl(this),e,...n);return my.set(r,e.sort?e.sort():[e]),wr(r)}:tS().includes(t)?function(...e){return t.apply(Nl(this),e),wr(py.get(this))}:function(...e){return wr(t.apply(Nl(this),e))}}function oS(t){return typeof t=="function"?iS(t):(t instanceof IDBTransaction&&rS(t),ZR(t,eS())?new Proxy(t,yu):t)}function wr(t){if(t instanceof IDBRequest)return nS(t);if(kl.has(t))return kl.get(t);const e=oS(t);return e!==t&&(kl.set(t,e),yh.set(e,t)),e}const Nl=t=>yh.get(t);function gy(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wr(o.result),l.oldVersion,l.newVersion,wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const aS=["get","getKey","getAll","getAllKeys","count"],cS=["put","add","delete","clear"],Dl=new Map;function Ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dl.get(e))return Dl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aS.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Dl.set(e,i),i}sS(t=>({...t,get:(e,n,r)=>Ap(e,n)||t.get(e,n,r),has:(e,n)=>!!Ap(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uS(t){return t.getComponent()?.type==="VERSION"}const vu="@firebase/app",Rp="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Rc("@firebase/app"),hS="@firebase/app-compat",fS="@firebase/analytics-compat",dS="@firebase/analytics",pS="@firebase/app-check-compat",mS="@firebase/app-check",gS="@firebase/auth",_S="@firebase/auth-compat",yS="@firebase/database",vS="@firebase/data-connect",ES="@firebase/database-compat",TS="@firebase/functions",wS="@firebase/functions-compat",IS="@firebase/installations",bS="@firebase/installations-compat",AS="@firebase/messaging",RS="@firebase/messaging-compat",SS="@firebase/performance",CS="@firebase/performance-compat",PS="@firebase/remote-config",kS="@firebase/remote-config-compat",NS="@firebase/storage",DS="@firebase/storage-compat",OS="@firebase/firestore",xS="@firebase/ai",VS="@firebase/firestore-compat",MS="firebase",LS="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="[DEFAULT]",FS={[vu]:"fire-core",[hS]:"fire-core-compat",[dS]:"fire-analytics",[fS]:"fire-analytics-compat",[mS]:"fire-app-check",[pS]:"fire-app-check-compat",[gS]:"fire-auth",[_S]:"fire-auth-compat",[yS]:"fire-rtdb",[vS]:"fire-data-connect",[ES]:"fire-rtdb-compat",[TS]:"fire-fn",[wS]:"fire-fn-compat",[IS]:"fire-iid",[bS]:"fire-iid-compat",[AS]:"fire-fcm",[RS]:"fire-fcm-compat",[SS]:"fire-perf",[CS]:"fire-perf-compat",[PS]:"fire-rc",[kS]:"fire-rc-compat",[NS]:"fire-gcs",[DS]:"fire-gcs-compat",[OS]:"fire-fst",[VS]:"fire-fst-compat",[xS]:"fire-vertex","fire-js":"fire-js",[MS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Map,US=new Map,Tu=new Map;function Sp(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(Tu.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Tu.set(e,t);for(const n of Va.values())Sp(n,t);for(const n of US.values())Sp(n,t);return!0}function Vr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new ds("app","Firebase",BS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=LS;function _y(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Eu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ir.create("bad-app-name",{appName:String(s)});if(n||(n=uy()),!n)throw Ir.create("no-options");const i=Va.get(s);if(i){if(Cr(n,i.options)&&Cr(r,i.config))return i;throw Ir.create("duplicate-app",{appName:s})}const o=new KR(s);for(const l of Tu.values())o.addComponent(l);const c=new jS(n,r,o);return Va.set(s,c),c}function Sc(t=Eu){const e=Va.get(t);if(!e&&t===Eu&&uy())return _y();if(!e)throw Ir.create("no-app",{appName:t});return e}function Dt(t,e,n){let r=FS[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(o.join(" "));return}pn(new Xt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="firebase-heartbeat-database",qS=1,lo="firebase-heartbeat-store";let Ol=null;function yy(){return Ol||(Ol=gy($S,qS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),Ol}async function HS(t){try{const n=(await yy()).transaction(lo),r=await n.objectStore(lo).get(vy(t));return await n.done,r}catch(e){if(e instanceof Zt)Xn.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e?.message});Xn.warn(n.message)}}}async function Cp(t,e){try{const r=(await yy()).transaction(lo,"readwrite");await r.objectStore(lo).put(e,vy(t)),await r.done}catch(n){if(n instanceof Zt)Xn.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n?.message});Xn.warn(r.message)}}}function vy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=1024,WS=30;class GS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pp();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>WS){const s=JS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Xn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pp(),{heartbeatsToSend:n,unsentEntries:r}=KS(this._heartbeatsCache.heartbeats),s=xa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Xn.warn(e),""}}}function Pp(){return new Date().toISOString().substring(0,10)}function KS(t,e=zS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),kp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gh()?_h().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HS(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function kp(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}function JS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){pn(new Xt("platform-logger",e=>new lS(e),"PRIVATE")),pn(new Xt("heartbeat",e=>new GS(e),"PRIVATE")),Dt(vu,Rp,t),Dt(vu,Rp,"esm2020"),Dt("fire-js","")}YS("");function Ey(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XS=Ey,Ty=new ds("auth","Firebase",Ey());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Rc("@firebase/auth");function ZS(t,...e){Ma.logLevel<=Te.WARN&&Ma.warn(`Auth (${ps}): ${t}`,...e)}function ca(t,...e){Ma.logLevel<=Te.ERROR&&Ma.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,...e){throw Eh(t,...e)}function ln(t,...e){return Eh(t,...e)}function vh(t,e,n){const r={...XS(),[e]:n};return new ds("auth","Firebase",r).create(e,{appName:t.name})}function br(t){return vh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wy(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kn(t,"argument-error"),vh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ty.create(t,...e)}function fe(t,e,...n){if(!t)throw Eh(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ca(e),new Error(e)}function Zn(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){return typeof self<"u"&&self.location?.href||""}function eC(){return Np()==="http:"||Np()==="https:"}function Np(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eC()||mh()||"connection"in navigator)?navigator.onLine:!0}function nC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=CR()||NR()}get(){return tC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iC=new bo(3e4,6e4);function wh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ni(t,e,n,r,s={}){return by(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Io({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return kR()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&fs(t.emulatorConfig.host)&&(u.credentials="include"),Iy.fetch()(await Ay(t,t.config.apiHost,n,c),u)})}async function by(t,e,n){t._canInitEmulator=!1;const r={...rC,...e};try{const s=new aC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vh(t,f,u);kn(t,f)}}catch(s){if(s instanceof Zt)throw s;kn(t,"network-request-failed",{message:String(s)})}}async function oC(t,e,n,r,s={}){const i=await ni(t,e,n,r,s);return"mfaPendingCredential"in i&&kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ay(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Th(t.config,s):`${t.config.apiScheme}://${s}`;return sC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class aC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),iC.get())})}}function Yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e){return ni(t,"POST","/v1/accounts:delete",e)}async function La(t,e){return ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lC(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Ih(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Gi(xl(s.auth_time)),issuedAtTime:Gi(xl(s.iat)),expirationTime:Gi(xl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function xl(t){return Number(t)*1e3}function Ih(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=ay(n);return s?JSON.parse(s):(ca("Failed to decode base64 JWT payload"),null)}catch(s){return ca("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Dp(t){const e=Ih(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&uC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t){const e=t.auth,n=await t.getIdToken(),r=await uo(t,La(e,{idToken:n}));fe(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Ry(s.providerUserInfo):[],o=dC(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Iu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function fC(t){const e=rt(t);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ry(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e){const n=await by(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ay(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&fs(t.emulatorConfig.host)&&(l.credentials="include"),Iy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mC(t,e){return ni(t,"POST","/v2/accounts:revokeToken",wh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Dp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ls;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new hC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Iu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await uo(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lC(this,e)}reload(){return fC(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await uo(this,cC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:S,stsTokenManager:N}=n;fe(p&&N,e,"internal-error");const C=Ls.fromJSON(this.name,N);fe(typeof p=="string",e,"internal-error"),ur(r,e.name),ur(s,e.name),fe(typeof m=="boolean",e,"internal-error"),fe(typeof v=="boolean",e,"internal-error"),ur(i,e.name),ur(o,e.name),ur(c,e.name),ur(l,e.name),ur(u,e.name),ur(f,e.name);const U=new sn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:C,createdAt:u,lastLoginAt:f});return S&&Array.isArray(S)&&(U.providerData=S.map(O=>({...O}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ls;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ry(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Ls;c.updateFromIdToken(r);const l=new sn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Iu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new Map;function zn(t){Zn(t instanceof Function,"Expected a class definition");let e=Op.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Op.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sy.type="NONE";const xp=Sy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=la(this.userKey,s.apiKey,i),this.fullPersistenceKey=la("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await La(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(zn(xp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(xp);const o=la(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await La(e,{idToken:f}).catch(()=>{});if(!m)break;p=await sn._fromGetAccountInfoResponse(e,m,f)}else p=sn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Fs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ny(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Oy(e))return"Blackberry";if(xy(e))return"Webos";if(Py(e))return"Safari";if((e.includes("chrome/")||ky(e))&&!e.includes("edge/"))return"Chrome";if(Dy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Cy(t=Tt()){return/firefox\//i.test(t)}function Py(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ky(t=Tt()){return/crios\//i.test(t)}function Ny(t=Tt()){return/iemobile/i.test(t)}function Dy(t=Tt()){return/android/i.test(t)}function Oy(t=Tt()){return/blackberry/i.test(t)}function xy(t=Tt()){return/webos/i.test(t)}function bh(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gC(t=Tt()){return bh(t)&&!!window.navigator?.standalone}function _C(){return DR()&&document.documentMode===10}function Vy(t=Tt()){return bh(t)||Dy(t)||xy(t)||Oy(t)||/windows phone/i.test(t)||Ny(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t,e=[]){let n;switch(t){case"Browser":n=Vp(Tt());break;case"Worker":n=`${Vp(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e={}){return ni(t,"GET","/v2/passwordPolicy",wh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=6;class TC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??EC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mp(this),this.idTokenSubscription=new Mp(this),this.beforeStateQueue=new yC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ty,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await La(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Lt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(br(this));const n=e?rt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vC(this),n=new TC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mC(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=My(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ZS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ri(t){return rt(t)}class Mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=FR(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IC(t){Ah=t}function bC(t){return Ah.loadJS(t)}function AC(){return Ah.gapiScript}function RC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t,e){const n=Vr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cr(i,e??{}))return s;kn(s,"already-initialized")}return n.initialize({options:e})}function CC(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(zn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function PC(t,e,n){const r=ri(t);fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ly(e),{host:o,port:c}=kC(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){fe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),fe(Cr(u,r.config.emulator)&&Cr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,fs(o)?(dh(`${i}//${o}${l}`),ph("Auth",!0)):NC()}function Ly(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kC(t){const e=Ly(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lp(o)}}}function Lp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e){return oC(t,"POST","/v1/accounts:signInWithIdp",wh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="http://localhost";class rs extends Fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:DC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Cc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ao{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ao{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ao{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=Fp(r);return new Gs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fp(r);return new Gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Zt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ua(e,n,r,s)}}function Uy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(t,i,e,r):i})}async function OC(t,e,n=!1){const r=await uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(br(r));const s="reauthenticate";try{const i=await uo(t,Uy(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Ih(i.idToken);fe(o,r,"internal-error");const{sub:c}=o;return fe(t.uid===c,r,"user-mismatch"),Gs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&kn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e,n=!1){if(Lt(t.app))return Promise.reject(br(t));const r="signIn",s=await Uy(t,r,e),i=await Gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function MC(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function LC(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function FC(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function UC(t){return rt(t).signOut()}const Ba="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=1e3,jC=10;class jy extends By{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_C()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jy.type="LOCAL";const $C=jy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y extends By{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$y.type="SESSION";const qy=$y;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await qC(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Rh("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function zC(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function WC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GC(){return navigator?.serviceWorker?.controller||null}function KC(){return Hy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="firebaseLocalStorageDb",QC=1,ja="firebaseLocalStorage",Wy="fbase_key";class Ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function JC(){const t=indexedDB.deleteDatabase(zy);return new Ro(t).toPromise()}function bu(){const t=indexedDB.open(zy,QC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ja,{keyPath:Wy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await JC(),e(await bu()))})})}async function Up(t,e,n){const r=kc(t,!0).put({[Wy]:e,value:n});return new Ro(r).toPromise()}async function YC(t,e){const n=kc(t,!1).get(e),r=await new Ro(n).toPromise();return r===void 0?null:r.value}function Bp(t,e){const n=kc(t,!0).delete(e);return new Ro(n).toPromise()}const XC=800,ZC=3;class Gy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(KC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await WC(),!this.activeServiceWorker)return;this.sender=new HC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bu();return await Up(e,Ba,"1"),await Bp(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Up(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kc(s,!1).getAll();return new Ro(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gy.type="LOCAL";const e0=Gy;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e){return e?zn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends Fy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t0(t){return VC(t.auth,new Ch(t),t.bypassAuthState)}function n0(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),xC(n,new Ch(t),t.bypassAuthState)}async function r0(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),OC(n,new Ch(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t0;case"linkViaPopup":case"linkViaRedirect":return r0;case"reauthViaPopup":case"reauthViaRedirect":return n0;default:kn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=new bo(2e3,1e4);async function px(t,e,n){if(Lt(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=ri(t);wy(t,e,Cc);const s=Sh(r,n);return new Qr(r,"signInViaPopup",e,s).executeNotNull()}class Qr extends Ky{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s0.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="pendingRedirect",ua=new Map;class o0 extends Ky{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ua.get(this.auth._key());if(!e){try{const r=await a0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ua.set(this.auth._key(),e)}return this.bypassAuthState||ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a0(t,e){const n=Jy(e),r=Qy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function c0(t,e){return Qy(t)._set(Jy(e),"true")}function l0(t,e){ua.set(t._key(),e)}function Qy(t){return zn(t._redirectPersistence)}function Jy(t){return la(i0,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t,e,n){return u0(t,e,n)}async function u0(t,e,n){if(Lt(t.app))return Promise.reject(br(t));const r=ri(t);wy(t,e,Cc),await r._initializationPromise;const s=Sh(r,n);return await c0(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function gx(t,e){return await ri(t)._initializationPromise,Yy(t,e,!1)}async function Yy(t,e,n=!1){if(Lt(t.app))return Promise.reject(br(t));const r=ri(t),s=Sh(r,e),o=await new o0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=600*1e3;class f0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Xy(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ln(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h0&&this.cachedEventUids.clear(),this.cachedEventUids.has(jp(e))}saveEventToCache(e){this.cachedEventUids.add(jp(e)),this.lastProcessedEventTime=Date.now()}}function jp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xy({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function d0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e={}){return ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g0=/^https?/;async function _0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p0(t);for(const n of e)try{if(y0(n))return}catch{}kn(t,"unauthorized-domain")}function y0(t){const e=wu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g0.test(n))return!1;if(m0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new bo(3e4,6e4);function $p(){const t=An().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E0(t){return new Promise((e,n)=>{function r(){$p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$p(),n(ln(t,"network-request-failed"))},timeout:v0.get()})}if(An().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(An().gapi?.load)r();else{const s=RC("iframefcb");return An()[s]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},bC(`${AC()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ha=null,e})}let ha=null;function T0(t){return ha=ha||E0(t),ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new bo(5e3,15e3),I0="__/auth/iframe",b0="emulator/auth/iframe",A0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S0(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Th(e,b0):`https://${t.config.authDomain}/${I0}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=R0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Io(r).slice(1)}`}async function C0(t){const e=await T0(t),n=An().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:S0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=An().setTimeout(()=>{i(o)},w0.get());function l(){An().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k0=500,N0=600,D0="_blank",O0="http://localhost";class qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x0(t,e,n,r=k0,s=N0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...P0,width:r.toString(),height:s.toString(),top:i,left:o},u=Tt().toLowerCase();n&&(c=ky(u)?D0:n),Cy(u)&&(e=e||O0,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,S])=>`${m}${v}=${S},`,"");if(gC(u)&&c!=="_self")return V0(e||"",c),new qp(null);const p=window.open(e||"",c,f);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new qp(p)}function V0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="__/auth/handler",L0="emulator/auth/handler",F0=encodeURIComponent("fac");async function Hp(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof Cc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ao){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${F0}=${encodeURIComponent(l)}`:"";return`${U0(t)}?${Io(c).slice(1)}${u}`}function U0({config:t}){return t.emulator?Th(t,L0):`https://${t.authDomain}/${M0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="webStorageSupport";class B0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qy,this._completeRedirectFn=Yy,this._overrideRedirectResult=l0}async _openPopup(e,n,r,s){Zn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Hp(e,n,r,wu(),s);return x0(e,i,Rh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hp(e,n,r,wu(),s);return zC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C0(e),r=new f0(e);return n.register("authEvent",s=>(fe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vl,{type:Vl},s=>{const i=s?.[0]?.[Vl];i!==void 0&&n(!!i),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vy()||Py()||bh()}}const j0=B0;var zp="@firebase/auth",Wp="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H0(t){pn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:My(t)},u=new wC(r,s,i,l);return CC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Xt("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(r=>new $0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(zp,Wp,q0(t)),Dt(zp,Wp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=300,W0=hy("authIdTokenMaxAge")||z0;let Gp=null;const G0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W0)return;const s=n?.token;Gp!==s&&(Gp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function K0(t=Sc()){const e=Vr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SC(t,{popupRedirectResolver:j0,persistence:[e0,$C,qy]}),r=hy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=G0(i.toString());LC(n,o,()=>o(n.currentUser)),MC(n,c=>o(c))}}const s=cy("auth");return s&&PC(n,`http://${s}`),n}function Q0(){return document.getElementsByTagName("head")?.[0]??document}IC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Q0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H0("Browser");var Kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,Zy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function _(){}_.prototype=y.prototype,R.D=y.prototype,R.prototype=new _,R.prototype.constructor=R,R.C=function(I,A,w){for(var E=Array(arguments.length-2),K=2;K<arguments.length;K++)E[K-2]=arguments[K];return y.prototype[A].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)I[A]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(A=0;16>A;++A)I[A]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=R.g[0],_=R.g[1],A=R.g[2];var w=R.g[3],E=y+(w^_&(A^w))+I[0]+3614090360&4294967295;y=_+(E<<7&4294967295|E>>>25),E=w+(A^y&(_^A))+I[1]+3905402710&4294967295,w=y+(E<<12&4294967295|E>>>20),E=A+(_^w&(y^_))+I[2]+606105819&4294967295,A=w+(E<<17&4294967295|E>>>15),E=_+(y^A&(w^y))+I[3]+3250441966&4294967295,_=A+(E<<22&4294967295|E>>>10),E=y+(w^_&(A^w))+I[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=w+(A^y&(_^A))+I[5]+1200080426&4294967295,w=y+(E<<12&4294967295|E>>>20),E=A+(_^w&(y^_))+I[6]+2821735955&4294967295,A=w+(E<<17&4294967295|E>>>15),E=_+(y^A&(w^y))+I[7]+4249261313&4294967295,_=A+(E<<22&4294967295|E>>>10),E=y+(w^_&(A^w))+I[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=w+(A^y&(_^A))+I[9]+2336552879&4294967295,w=y+(E<<12&4294967295|E>>>20),E=A+(_^w&(y^_))+I[10]+4294925233&4294967295,A=w+(E<<17&4294967295|E>>>15),E=_+(y^A&(w^y))+I[11]+2304563134&4294967295,_=A+(E<<22&4294967295|E>>>10),E=y+(w^_&(A^w))+I[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=w+(A^y&(_^A))+I[13]+4254626195&4294967295,w=y+(E<<12&4294967295|E>>>20),E=A+(_^w&(y^_))+I[14]+2792965006&4294967295,A=w+(E<<17&4294967295|E>>>15),E=_+(y^A&(w^y))+I[15]+1236535329&4294967295,_=A+(E<<22&4294967295|E>>>10),E=y+(A^w&(_^A))+I[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=w+(_^A&(y^_))+I[6]+3225465664&4294967295,w=y+(E<<9&4294967295|E>>>23),E=A+(y^_&(w^y))+I[11]+643717713&4294967295,A=w+(E<<14&4294967295|E>>>18),E=_+(w^y&(A^w))+I[0]+3921069994&4294967295,_=A+(E<<20&4294967295|E>>>12),E=y+(A^w&(_^A))+I[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=w+(_^A&(y^_))+I[10]+38016083&4294967295,w=y+(E<<9&4294967295|E>>>23),E=A+(y^_&(w^y))+I[15]+3634488961&4294967295,A=w+(E<<14&4294967295|E>>>18),E=_+(w^y&(A^w))+I[4]+3889429448&4294967295,_=A+(E<<20&4294967295|E>>>12),E=y+(A^w&(_^A))+I[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=w+(_^A&(y^_))+I[14]+3275163606&4294967295,w=y+(E<<9&4294967295|E>>>23),E=A+(y^_&(w^y))+I[3]+4107603335&4294967295,A=w+(E<<14&4294967295|E>>>18),E=_+(w^y&(A^w))+I[8]+1163531501&4294967295,_=A+(E<<20&4294967295|E>>>12),E=y+(A^w&(_^A))+I[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=w+(_^A&(y^_))+I[2]+4243563512&4294967295,w=y+(E<<9&4294967295|E>>>23),E=A+(y^_&(w^y))+I[7]+1735328473&4294967295,A=w+(E<<14&4294967295|E>>>18),E=_+(w^y&(A^w))+I[12]+2368359562&4294967295,_=A+(E<<20&4294967295|E>>>12),E=y+(_^A^w)+I[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=w+(y^_^A)+I[8]+2272392833&4294967295,w=y+(E<<11&4294967295|E>>>21),E=A+(w^y^_)+I[11]+1839030562&4294967295,A=w+(E<<16&4294967295|E>>>16),E=_+(A^w^y)+I[14]+4259657740&4294967295,_=A+(E<<23&4294967295|E>>>9),E=y+(_^A^w)+I[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=w+(y^_^A)+I[4]+1272893353&4294967295,w=y+(E<<11&4294967295|E>>>21),E=A+(w^y^_)+I[7]+4139469664&4294967295,A=w+(E<<16&4294967295|E>>>16),E=_+(A^w^y)+I[10]+3200236656&4294967295,_=A+(E<<23&4294967295|E>>>9),E=y+(_^A^w)+I[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=w+(y^_^A)+I[0]+3936430074&4294967295,w=y+(E<<11&4294967295|E>>>21),E=A+(w^y^_)+I[3]+3572445317&4294967295,A=w+(E<<16&4294967295|E>>>16),E=_+(A^w^y)+I[6]+76029189&4294967295,_=A+(E<<23&4294967295|E>>>9),E=y+(_^A^w)+I[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=w+(y^_^A)+I[12]+3873151461&4294967295,w=y+(E<<11&4294967295|E>>>21),E=A+(w^y^_)+I[15]+530742520&4294967295,A=w+(E<<16&4294967295|E>>>16),E=_+(A^w^y)+I[2]+3299628645&4294967295,_=A+(E<<23&4294967295|E>>>9),E=y+(A^(_|~w))+I[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=w+(_^(y|~A))+I[7]+1126891415&4294967295,w=y+(E<<10&4294967295|E>>>22),E=A+(y^(w|~_))+I[14]+2878612391&4294967295,A=w+(E<<15&4294967295|E>>>17),E=_+(w^(A|~y))+I[5]+4237533241&4294967295,_=A+(E<<21&4294967295|E>>>11),E=y+(A^(_|~w))+I[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=w+(_^(y|~A))+I[3]+2399980690&4294967295,w=y+(E<<10&4294967295|E>>>22),E=A+(y^(w|~_))+I[10]+4293915773&4294967295,A=w+(E<<15&4294967295|E>>>17),E=_+(w^(A|~y))+I[1]+2240044497&4294967295,_=A+(E<<21&4294967295|E>>>11),E=y+(A^(_|~w))+I[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=w+(_^(y|~A))+I[15]+4264355552&4294967295,w=y+(E<<10&4294967295|E>>>22),E=A+(y^(w|~_))+I[6]+2734768916&4294967295,A=w+(E<<15&4294967295|E>>>17),E=_+(w^(A|~y))+I[13]+1309151649&4294967295,_=A+(E<<21&4294967295|E>>>11),E=y+(A^(_|~w))+I[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=w+(_^(y|~A))+I[11]+3174756917&4294967295,w=y+(E<<10&4294967295|E>>>22),E=A+(y^(w|~_))+I[2]+718787259&4294967295,A=w+(E<<15&4294967295|E>>>17),E=_+(w^(A|~y))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+A&4294967295,R.g[3]=R.g[3]+w&4294967295}r.prototype.u=function(R,y){y===void 0&&(y=R.length);for(var _=y-this.blockSize,I=this.B,A=this.h,w=0;w<y;){if(A==0)for(;w<=_;)s(this,R,w),w+=this.blockSize;if(typeof R=="string"){for(;w<y;)if(I[A++]=R.charCodeAt(w++),A==this.blockSize){s(this,I),A=0;break}}else for(;w<y;)if(I[A++]=R[w++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;var _=8*this.o;for(y=R.length-8;y<R.length;++y)R[y]=_&255,_/=256;for(this.u(R),R=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)R[_++]=this.g[y]>>>I&255;return R};function i(R,y){var _=c;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=y(R)}function o(R,y){this.h=y;for(var _=[],I=!0,A=R.length-1;0<=A;A--){var w=R[A]|0;I&&w==y||(_[A]=w,I=!1)}this.g=_}var c={};function l(R){return-128<=R&&128>R?i(R,function(y){return new o([y|0],0>y?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return C(u(-R));for(var y=[],_=1,I=0;R>=_;I++)y[I]=R/_|0,_*=4294967296;return new o(y,0)}function f(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return C(f(R.substring(1),y));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,A=0;A<R.length;A+=8){var w=Math.min(8,R.length-A),E=parseInt(R.substring(A,A+w),y);8>w?(w=u(Math.pow(y,w)),I=I.j(w).add(u(E))):(I=I.j(_),I=I.add(u(E)))}return I}var p=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-C(this).m();for(var R=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);R+=(0<=I?I:4294967296+I)*y,y*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(S(this))return"0";if(N(this))return"-"+C(this).toString(R);for(var y=u(Math.pow(R,6)),_=this,I="";;){var A=$(_,y).g;_=U(_,A.j(y));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(R);if(_=A,S(_))return w+I;for(;6>w.length;)w="0"+w;I=w+I}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function S(R){if(R.h!=0)return!1;for(var y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function N(R){return R.h==-1}t.l=function(R){return R=U(this,R),N(R)?-1:S(R)?0:1};function C(R){for(var y=R.g.length,_=[],I=0;I<y;I++)_[I]=~R.g[I];return new o(_,~R.h).add(m)}t.abs=function(){return N(this)?C(this):this},t.add=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],I=0,A=0;A<=y;A++){var w=I+(this.i(A)&65535)+(R.i(A)&65535),E=(w>>>16)+(this.i(A)>>>16)+(R.i(A)>>>16);I=E>>>16,w&=65535,E&=65535,_[A]=E<<16|w}return new o(_,_[_.length-1]&-2147483648?-1:0)};function U(R,y){return R.add(C(y))}t.j=function(R){if(S(this)||S(R))return p;if(N(this))return N(R)?C(this).j(C(R)):C(C(this).j(R));if(N(R))return C(this.j(C(R)));if(0>this.l(v)&&0>R.l(v))return u(this.m()*R.m());for(var y=this.g.length+R.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<R.g.length;A++){var w=this.i(I)>>>16,E=this.i(I)&65535,K=R.i(A)>>>16,ye=R.i(A)&65535;_[2*I+2*A]+=E*ye,O(_,2*I+2*A),_[2*I+2*A+1]+=w*ye,O(_,2*I+2*A+1),_[2*I+2*A+1]+=E*K,O(_,2*I+2*A+1),_[2*I+2*A+2]+=w*K,O(_,2*I+2*A+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new o(_,0)};function O(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function L(R,y){this.g=R,this.h=y}function $(R,y){if(S(y))throw Error("division by zero");if(S(R))return new L(p,p);if(N(R))return y=$(C(R),y),new L(C(y.g),C(y.h));if(N(y))return y=$(R,C(y)),new L(C(y.g),y.h);if(30<R.g.length){if(N(R)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,I=y;0>=I.l(R);)_=H(_),I=H(I);var A=te(_,1),w=te(I,1);for(I=te(I,2),_=te(_,2);!S(I);){var E=w.add(I);0>=E.l(R)&&(A=A.add(_),w=E),I=te(I,1),_=te(_,1)}return y=U(R,A.j(y)),new L(A,y)}for(A=p;0<=R.l(y);){for(_=Math.max(1,Math.floor(R.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),w=u(_),E=w.j(y);N(E)||0<E.l(R);)_-=I,w=u(_),E=w.j(y);S(w)&&(w=m),A=A.add(w),R=U(R,E)}return new L(A,R)}t.A=function(R){return $(this,R).h},t.and=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&R.i(I);return new o(_,this.h&R.h)},t.or=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|R.i(I);return new o(_,this.h|R.h)},t.xor=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^R.i(I);return new o(_,this.h^R.h)};function H(R){for(var y=R.g.length+1,_=[],I=0;I<y;I++)_[I]=R.i(I)<<1|R.i(I-1)>>>31;return new o(_,R.h)}function te(R,y){var _=y>>5;y%=32;for(var I=R.g.length-_,A=[],w=0;w<I;w++)A[w]=0<y?R.i(w+_)>>>y|R.i(w+_+1)<<32-y:R.i(w+_);return new o(A,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ar=o}).apply(typeof Kp<"u"?Kp:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ev,ki,tv,fa,Au,nv,rv,sv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function v(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,D){for(var W=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)W[Oe-2]=arguments[Oe];return h.prototype[k].apply(g,W)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function C(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const k=a.length||0,D=g.length||0;a.length=k+D;for(let W=0;W<D;W++)a[k+W]=g[W]}else a.push(g)}}class U{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var H=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function te(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function R(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let D=0;D<_.length;D++)d=_[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function A(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function w(a){c.setTimeout(()=>{throw a},0)}function E(){var a=xt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class K{constructor(){this.h=this.g=null}add(h,d){const g=ye.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var ye=new U(()=>new be,a=>a.reset());class be{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let he,Ee=!1,xt=new K,en=()=>{const a=c.Promise.resolve(void 0);he=()=>{a.then(qt)}};var qt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){w(d)}var h=ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var rr=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a})();function Vt(a,h){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(H){e:{try{$(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Vt.aa.h.call(this)}}S(Vt,Be);var Ct={2:"touch",3:"pen",4:"mouse"};Vt.prototype.h=function(){Vt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Z=0;function J(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++Z,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ve(a){this.src=a,this.g={},this.h=0}ve.prototype.add=function(a,h,d,g,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var W=b(a,h,g,k);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new J(h,this.src,D,!!g,k),h.fa=d,a.push(h)),h};function T(a,h){var d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=k)&&Array.prototype.splice.call(g,k,1),D&&(ne(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function b(a,h,d,g){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),x={};function B(a,h,d,g,k){if(Array.isArray(h)){for(var D=0;D<h.length;D++)B(a,h[D],d,g,k);return null}return d=ae(d),a&&a[V]?a.K(h,d,u(g)?!!g.capture:!1,k):M(a,h,d,!1,g,k)}function M(a,h,d,g,k,D){if(!h)throw Error("Invalid event type");var W=u(k)?!!k.capture:!!k,Oe=Y(a);if(Oe||(a[P]=Oe=new ve(a)),d=Oe.add(h,d,g,W,D),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)rr||(k=W),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(q(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return h.call(a.src,a.listener,d)}const h=oe;return a}function G(a,h,d,g,k){if(Array.isArray(h))for(var D=0;D<h.length;D++)G(a,h[D],d,g,k);else g=u(g)?!!g.capture:!!g,d=ae(d),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=b(D,d,g,k),-1<d&&(ne(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,d,g,k)),(d=-1<a?h[a]:null)&&z(d))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])T(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(q(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Y(h))?(T(d,a),d.h==0&&(d.src=null,h[P]=null)):ne(a)}}}function q(a){return a in x?x[a]:x[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new Vt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&z(a),a=d.call(g,h)}return a}function Y(a){return a=a[P],a instanceof ve?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function ce(){Ue.call(this),this.i=new ve(this),this.M=this,this.F=null}S(ce,Ue),ce.prototype[V]=!0,ce.prototype.removeEventListener=function(a,h,d,g){G(this,a,h,d,g)};function _e(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Be(h,a);else if(h instanceof Be)h.target=h.target||a;else{var k=h;h=new Be(g,a),I(h,k)}if(k=!0,d)for(var D=d.length-1;0<=D;D--){var W=h.g=d[D];k=Ce(W,g,!0,h)&&k}if(W=h.g=a,k=Ce(W,g,!0,h)&&k,k=Ce(W,g,!1,h)&&k,d)for(D=0;D<d.length;D++)W=h.g=d[D],k=Ce(W,g,!1,h)&&k}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ne(d[g]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ce.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ce(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,D=0;D<h.length;++D){var W=h[D];if(W&&!W.da&&W.capture==d){var Oe=W.listener,ot=W.ha||W.src;W.fa&&T(a.i,W),k=Oe.call(ot,g)!==!1&&k}}return k&&!g.defaultPrevented}function je(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Ke(a){a.g=je(()=>{a.g=null,a.i&&(a.i=!1,Ke(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ht extends Ue{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ke(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){Ue.call(this),this.h=a,this.g={}}S(ft,Ue);var sr=[];function li(a){te(a.g,function(h,d){this.g.hasOwnProperty(d)&&z(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),li(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=c.JSON.stringify,zt=c.JSON.parse,Do=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function _s(){}_s.prototype.h=null;function _f(a){return a.h||(a.h=a.i())}function yf(){}var ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yc(){Be.call(this,"d")}S(Yc,Be);function Xc(){Be.call(this,"c")}S(Xc,Be);var Fr={},vf=null;function Oo(){return vf=vf||new ce}Fr.La="serverreachability";function Ef(a){Be.call(this,Fr.La,a)}S(Ef,Be);function hi(a){const h=Oo();_e(h,new Ef(h))}Fr.STAT_EVENT="statevent";function Tf(a,h){Be.call(this,Fr.STAT_EVENT,a),this.stat=h}S(Tf,Be);function wt(a){const h=Oo();_e(h,new Tf(h,a))}Fr.Ma="timingevent";function wf(a,h){Be.call(this,Fr.Ma,a),this.size=h}S(wf,Be);function fi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function hT(a,h,d,g,k,D){a.info(function(){if(a.g)if(D)for(var W="",Oe=D.split("&"),ot=0;ot<Oe.length;ot++){var Se=Oe[ot].split("=");if(1<Se.length){var dt=Se[0];Se=Se[1];var pt=dt.split("_");W=2<=pt.length&&pt[1]=="type"?W+(dt+"="+Se+"&"):W+(dt+"=redacted&")}}else W=null;else W=D;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+W})}function fT(a,h,d,g,k,D,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+D+" "+W})}function ys(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+pT(a,d)+(g?" "+g:"")})}function dT(a,h){a.info(function(){return"TIMEOUT: "+h})}di.prototype.info=function(){};function pT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return it(d)}catch{return h}}var xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},If={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zc;function Vo(){}S(Vo,_s),Vo.prototype.g=function(){return new XMLHttpRequest},Vo.prototype.i=function(){return{}},Zc=new Vo;function ir(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bf}function bf(){this.i=null,this.g="",this.h=!1}var Af={},el={};function tl(a,h,d){a.L=1,a.v=Uo(Mn(h)),a.m=d,a.P=!0,Rf(a,null)}function Rf(a,h){a.F=Date.now(),Mo(a),a.A=Mn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Bf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new bf,a.g=sd(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ht(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(sr[0]=k.toString()),k=sr);for(var D=0;D<k.length;D++){var W=B(d,k[D],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),hi(),hT(a.i,a.u,a.A,a.l,a.R,a.m)}ir.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ln(a)==3?h.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const pt=Ln(this.g);var h=this.g.Ba();const Ts=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Gf(this.g)))){this.J||pt!=4||h==7||(h==8||0>=Ts?hi(3):hi(2)),nl(this);var d=this.g.Z();this.X=d;t:if(Sf(this)){var g=Gf(this.g);a="";var k=g.length,D=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),pi(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,fT(this.i,this.u,this.A,this.l,this.R,pt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,ot=this.g;if((Oe=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Oe)){var Se=Oe;break t}}Se=null}if(d=Se)ys(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rl(this,d);else{this.o=!1,this.s=3,wt(12),Ur(this),pi(this);break e}}if(this.P){d=!0;let tn;for(;!this.J&&this.C<W.length;)if(tn=mT(this,W),tn==el){pt==4&&(this.s=4,wt(14),d=!1),ys(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Af){this.s=4,wt(15),ys(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else ys(this.i,this.l,tn,null),rl(this,tn);if(Sf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||W.length!=0||this.h.h||(this.s=1,wt(16),d=!1),this.o=this.o&&d,!d)ys(this.i,this.l,W,"[Invalid Chunked Response]"),Ur(this),pi(this);else if(0<W.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ll(dt),dt.M=!0,wt(11))}}else ys(this.i,this.l,W,null),rl(this,W);pt==4&&Ur(this),this.o&&!this.J&&(pt==4?ed(this.j,this):(this.o=!1,Mo(this)))}else DT(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Ur(this),pi(this)}}}catch{}finally{}};function Sf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?el:(d=Number(h.substring(d,g)),isNaN(d)?Af:(g+=1,g+d>h.length?el:(h=h.slice(g,g+d),a.C=g+d,h)))}ir.prototype.cancel=function(){this.J=!0,Ur(this)};function Mo(a){a.S=Date.now()+a.I,Cf(a,a.I)}function Cf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fi(m(a.ba,a),h)}function nl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ir.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(dT(this.i,this.A),this.L!=2&&(hi(),wt(17)),Ur(this),this.s=2,pi(this)):Cf(this,this.S-a)};function pi(a){a.j.G==0||a.J||ed(a.j,a)}function Ur(a){nl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,li(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function rl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||sl(d.h,a))){if(!a.K&&sl(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)zo(d),qo(d);else break e;cl(d),wt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=fi(m(d.Za,d),6e3));if(1>=Nf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else jr(d,11)}else if((a.K||d.g==a)&&zo(d),!O(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let Se=k[h];if(d.T=Se[0],Se=Se[1],d.G==2)if(Se[0]=="c"){d.K=Se[1],d.ia=Se[2];const dt=Se[3];dt!=null&&(d.la=dt,d.j.info("VER="+d.la));const pt=Se[4];pt!=null&&(d.Aa=pt,d.j.info("SVER="+d.Aa));const Ts=Se[5];Ts!=null&&typeof Ts=="number"&&0<Ts&&(g=1.5*Ts,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const tn=a.g;if(tn){const Go=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Go){var D=g.h;D.g||Go.indexOf("spdy")==-1&&Go.indexOf("quic")==-1&&Go.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(il(D,D.h),D.h=null))}if(g.D){const ul=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(g.ya=ul,Me(g.I,g.D,ul))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var W=a;if(g.qa=rd(g,g.J?g.ia:null,g.W),W.K){Df(g.h,W);var Oe=W,ot=g.L;ot&&(Oe.I=ot),Oe.B&&(nl(Oe),Mo(Oe)),g.g=W}else Xf(g);0<d.i.length&&Ho(d)}else Se[0]!="stop"&&Se[0]!="close"||jr(d,7);else d.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?jr(d,7):al(d):Se[0]!="noop"&&d.l&&d.l.ta(Se),d.v=0)}}hi(4)}catch{}}var gT=class{constructor(a,h){this.g=a,this.map=h}};function Pf(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Nf(a){return a.h?1:a.g?a.g.size:0}function sl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function il(a,h){a.g?a.g.add(h):a.h=h}function Df(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Pf.prototype.cancel=function(){if(this.i=Of(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Of(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function _T(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function yT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function xf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=yT(a),g=_T(a),k=g.length,D=0;D<k;D++)h.call(void 0,g[D],d&&d[D],a)}var Vf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var D=a[d].substring(0,g);k=a[d].substring(g+1)}else D=a[d];h(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Br){this.h=a.h,Lo(this,a.j),this.o=a.o,this.g=a.g,Fo(this,a.s),this.l=a.l;var h=a.i,d=new _i;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Mf(this,d),this.m=a.m}else a&&(h=String(a).match(Vf))?(this.h=!1,Lo(this,h[1]||"",!0),this.o=mi(h[2]||""),this.g=mi(h[3]||"",!0),Fo(this,h[4]),this.l=mi(h[5]||"",!0),Mf(this,h[6]||"",!0),this.m=mi(h[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}Br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(gi(h,Lf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(gi(h,Lf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(gi(d,d.charAt(0)=="/"?wT:TT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",gi(d,bT)),a.join("")};function Mn(a){return new Br(a)}function Lo(a,h,d){a.j=d?mi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Mf(a,h,d){h instanceof _i?(a.i=h,AT(a.i,a.h)):(d||(h=gi(h,IT)),a.i=new _i(h,a.h))}function Me(a,h,d){a.i.set(h,d)}function Uo(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function mi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,ET),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ET(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lf=/[#\/\?@]/g,TT=/[#\?:]/g,wT=/[#\?]/g,IT=/[#\?@]/g,bT=/#/g;function _i(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&vT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=_i.prototype,t.add=function(a,h){or(this),this.i=null,a=vs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ff(a,h){or(a),h=vs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Uf(a,h){return or(a),h=vs(a,h),a.g.has(h)}t.forEach=function(a,h){or(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){or(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const k=a[g];for(let D=0;D<k.length;D++)d.push(h[g])}return d},t.V=function(a){or(this);let h=[];if(typeof a=="string")Uf(this,a)&&(h=h.concat(this.g.get(vs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return or(this),this.i=null,a=vs(this,a),Uf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bf(a,h,d){Ff(a,h),0<d.length&&(a.i=null,a.g.set(vs(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const D=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var k=D;W[g]!==""&&(k+="="+encodeURIComponent(String(W[g]))),a.push(k)}}return this.i=a.join("&")};function vs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function AT(a,h){h&&!a.j&&(or(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(Ff(this,g),Bf(this,k,d))},a)),a.j=h}function RT(a,h){const d=new di;if(c.Image){const g=new Image;g.onload=v(ar,d,"TestLoadImage: loaded",!0,h,g),g.onerror=v(ar,d,"TestLoadImage: error",!1,h,g),g.onabort=v(ar,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(ar,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function ST(a,h){const d=new di,g=new AbortController,k=setTimeout(()=>{g.abort(),ar(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(k),D.ok?ar(d,"TestPingServer: ok",!0,h):ar(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),ar(d,"TestPingServer: error",!1,h)})}function ar(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function CT(){this.g=new Do}function PT(a,h,d){const g=d||"";try{xf(a,function(k,D){let W=k;u(k)&&(W=it(k)),h.push(g+D+"="+encodeURIComponent(W))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Bo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Bo,_s),Bo.prototype.g=function(){return new jo(this.l,this.j)},Bo.prototype.i=(function(a){return function(){return a}})({});function jo(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(jo,ce),t=jo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yi(this):vi(this),this.readyState==3&&jf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Qa=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,vi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $f(a){let h="";return te(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function ol(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=$f(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Me(a,h,d))}function He(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(He,ce);var kT=/^https?$/i,NT=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zc.g(),this.v=this.o?_f(this.o):_f(Zc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){qf(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(NT,h,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,W]of d)this.g.setRequestHeader(D,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wf(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){qf(this,D)}};function qf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Hf(a),$o(a)}function Hf(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zf(this):this.bb())},t.bb=function(){zf(this)};function zf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)je(a.Ea,0,a);else if(_e(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=W===0){var k=String(a.D).match(Vf)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),g=!kT.test(k?k.toLowerCase():"")}d=g}if(d)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var D=2<Ln(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Hf(a)}}finally{$o(a)}}}}function $o(a,h){if(a.g){Wf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{d.onreadystatechange=g}catch{}}}function Wf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),zt(h)}};function Gf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function DT(a){const h={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(O(a[g]))continue;var d=A(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[k]||[];h[k]=D,D.push(d)}R(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Kf(a){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,a),this.cb=Ei("retryDelaySeedMs",1e4,a),this.Wa=Ei("forwardChannelMaxRetries",2,a),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Pf(a&&a.concurrentRequestLimit),this.Da=new CT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){wt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=rd(this,null,this.W),Ho(this)};function al(a){if(Qf(a),a.G==3){var h=a.U++,d=Mn(a.I);if(Me(d,"SID",a.K),Me(d,"RID",h),Me(d,"TYPE","terminate"),Ti(a,d),h=new ir(a,a.j,h),h.L=2,h.v=Uo(Mn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=sd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Mo(h)}nd(a)}function qo(a){a.g&&(ll(a),a.g.cancel(),a.g=null)}function Qf(a){qo(a),a.u&&(c.clearTimeout(a.u),a.u=null),zo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ho(a){if(!kf(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||en(),Ee||(he(),Ee=!0),xt.add(h,a),a.B=0}}function OT(a,h){return Nf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fi(m(a.Ga,a,h),td(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new ir(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Yf(this,k,h),d=Mn(this.I),Me(d,"RID",a),Me(d,"CVER",22),this.D&&Me(d,"X-HTTP-Session-Id",this.D),Ti(this,d),D&&(this.O?h="headers="+encodeURIComponent(String($f(D)))+"&"+h:this.m&&ol(d,this.m,D)),il(this.h,k),this.Ua&&Me(d,"TYPE","init"),this.P?(Me(d,"$req",h),Me(d,"SID","null"),k.T=!0,tl(k,d,null)):tl(k,d,h),this.G=2}}else this.G==3&&(a?Jf(this,a):this.i.length==0||kf(this.h)||Jf(this))};function Jf(a,h){var d;h?d=h.l:d=a.U++;const g=Mn(a.I);Me(g,"SID",a.K),Me(g,"RID",d),Me(g,"AID",a.T),Ti(a,g),a.m&&a.o&&ol(g,a.m,a.o),d=new ir(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Yf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),il(a.h,d),tl(d,g,h)}function Ti(a,h){a.H&&te(a.H,function(d,g){Me(h,g,d)}),a.l&&xf({},function(d,g){Me(h,g,d)})}function Yf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const W=["count="+d];D==-1?0<d?(D=k[0].g,W.push("ofs="+D)):D=0:W.push("ofs="+D);let Oe=!0;for(let ot=0;ot<d;ot++){let Se=k[ot].g;const dt=k[ot].map;if(Se-=D,0>Se)D=Math.max(0,k[ot].g-100),Oe=!1;else try{PT(dt,W,"req"+Se+"_")}catch{g&&g(dt)}}if(Oe){g=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Xf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||en(),Ee||(he(),Ee=!0),xt.add(h,a),a.v=0}}function cl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fi(m(a.Fa,a),td(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),qo(this),Zf(this))};function ll(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Zf(a){a.g=new ir(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Mn(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),Ti(a,h),a.m&&a.o&&ol(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Uo(Mn(h)),d.m=null,d.P=!0,Rf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,qo(this),cl(this),wt(19))};function zo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ed(a,h){var d=null;if(a.g==h){zo(a),ll(a),a.g=null;var g=2}else if(sl(a.h,h))d=h.D,Df(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=Oo(),_e(g,new wf(g,d)),Ho(a)}else Xf(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&OT(a,h)||g==2&&cl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function td(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function jr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const k=!g;g=new Br(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Lo(g,"https"),Uo(g),k?RT(g.toString(),d):ST(g.toString(),d)}else wt(2);a.G=0,a.l&&a.l.sa(h),nd(a),Qf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function nd(a){if(a.G=0,a.ka=[],a.l){const h=Of(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function rd(a,h,d){var g=d instanceof Br?Mn(d):new Br(d);if(g.g!="")h&&(g.g=h+"."+g.g),Fo(g,g.s);else{var k=c.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var D=new Br(null);g&&Lo(D,g),h&&(D.g=h),k&&Fo(D,k),d&&(D.l=d),g=D}return d=a.D,h=a.ya,d&&h&&Me(g,d,h),Me(g,"VER",a.la),Ti(a,g),g}function sd(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new He(new Bo({eb:d})):new He(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function id(){}t=id.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wo(){}Wo.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){ce.call(this),this.g=new Kf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Es(this)}S(Mt,ce),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){al(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=it(a),a=d);h.i.push(new gT(h.Ya++,a)),h.G==3&&Ho(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,al(this.g),delete this.g,Mt.aa.N.call(this)};function od(a){Yc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(od,Yc);function ad(){Xc.call(this),this.status=1}S(ad,Xc);function Es(a){this.g=a}S(Es,id),Es.prototype.ua=function(){_e(this.g,"a")},Es.prototype.ta=function(a){_e(this.g,new od(a))},Es.prototype.sa=function(a){_e(this.g,new ad)},Es.prototype.ra=function(){_e(this.g,"b")},Wo.prototype.createWebChannel=Wo.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,sv=function(){return new Wo},rv=function(){return Oo()},nv=Fr,Au={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xo.NO_ERROR=0,xo.TIMEOUT=8,xo.HTTP_ERROR=6,fa=xo,If.COMPLETE="complete",tv=If,yf.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",ce.prototype.listen=ce.prototype.K,ki=yf,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,ev=He}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});const Qp="@firebase/firestore",Jp="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Rc("@firebase/firestore");function ks(){return ss.logLevel}function X(t,...e){if(ss.logLevel<=Te.DEBUG){const n=e.map(Ph);ss.debug(`Firestore (${si}): ${t}`,...n)}}function er(t,...e){if(ss.logLevel<=Te.ERROR){const n=e.map(Ph);ss.error(`Firestore (${si}): ${t}`,...n)}}function Ks(t,...e){if(ss.logLevel<=Te.WARN){const n=e.map(Ph);ss.warn(`Firestore (${si}): ${t}`,...n)}}function Ph(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,iv(t,r,n)}function iv(t,e,n){let r=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function Ne(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||iv(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class J0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_t.UNAUTHENTICATED)))}shutdown(){}}class Y0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class X0{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new ov(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class Z0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Z0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ne(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Yp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Ru(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ml(s)===Ml(i)?we(s,i):Ml(s)?1:-1}return we(t.length,e.length)}const rP=55296,sP=57343;function Ml(t){const e=t.charCodeAt(0);return e>=rP&&e<=sP}function Qs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=vn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),s=vn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?vn.extractNumericId(e).compare(vn.extractNumericId(n)):Ru(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ar.fromString(e.substring(4,e.length-2))}}class Le extends vn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Le(n)}static emptyPath(){return new Le([])}}const iP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends vn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return iP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xp}static keyField(){return new lt([Xp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ee(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ee(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Le.fromString(e))}static fromName(e){return new ie(Le.fromString(e).popFirst(5))}static empty(){return new ie(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t,e,n){if(!n)throw new ee(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oP(t,e,n,r){if(e===!0&&r===!0)throw new ee(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zp(t){if(!ie.isDocumentKey(t))throw new ee(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function em(t){if(ie.isDocumentKey(t))throw new ee(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nh(t);throw new ee(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){const n={typeString:t};return e&&(n.value=e),n}function So(t,e){if(!cv(t))throw new ee(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ee(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=-62135596800,nm=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*nm);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<tm)throw new ee(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nm}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(So(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:Je("string",Fe._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Fe(0,0))}static max(){return new pe(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=-1;function aP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Pr(s,ie.empty(),e)}function cP(t){return new Pr(t.readTime,t.key,ho)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(pe.min(),ie.empty(),ho)}static max(){return new Pr(pe.max(),ie.empty(),ho)}}function lP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==uP)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function fP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Nc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=-1;function Dc(t){return t==null}function $a(t){return t===0&&1/t==-1/0}function dP(t){return typeof t=="number"&&Number.isInteger(t)&&!$a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="";function pP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=rm(e)),e=mP(t.get(n),e);return rm(e)}function mP(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case lv:n+="";break;default:n+=i}}return n}function rm(t){return t+lv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zo(this.root,e,this.comparator,!0)}}class Zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new im(this.data.getIterator())}getIteratorFrom(e){return new im(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class im{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new nt(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hv("Invalid base64 string: "+i):i}})(e);return new ht(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const gP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(Ne(!!t,39018),typeof t=="string"){let e=0;const n=gP.exec(t);if(Ne(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="server_timestamp",dv="__type__",pv="__previous_value__",mv="__local_write_time__";function Oh(t){return(t?.mapValue?.fields||{})[dv]?.stringValue===fv}function Oc(t){const e=t.mapValue.fields[pv];return Oh(e)?Oc(e):e}function fo(t){const e=kr(t.mapValue.fields[mv].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const qa="(default)";class po{constructor(e,n){this.projectId=e,this.database=n||qa}static empty(){return new po("","")}get isDefaultDatabase(){return this.database===qa}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="__type__",yP="__max__",ea={mapValue:{}},_v="__vector__",Ha="value";function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oh(t)?4:EP(t)?9007199254740991:vP(t)?10:11:le(28295,{value:t})}function Dn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),c=kr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),c=Ge(i.doubleValue);return o===c?$a(o)===$a(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(sm(o)!==sm(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Dn(o[l],c[l])))return!1;return!0})(t,e);default:return le(52216,{left:t})}}function mo(t,e){return(t.values||[]).find((n=>Dn(n,e)))!==void 0}function Js(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return om(t.timestampValue,e.timestampValue);case 4:return om(fo(t),fo(e));case 5:return Ru(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=Nr(i),l=Nr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=we(c[u],l[u]);if(f!==0)return f}return we(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=we(Ge(i.latitude),Ge(o.latitude));return c!==0?c:we(Ge(i.longitude),Ge(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return am(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Ha]?.arrayValue,f=l[Ha]?.arrayValue,p=we(u?.values?.length||0,f?.values?.length||0);return p!==0?p:am(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===ea.mapValue&&o===ea.mapValue)return 0;if(i===ea.mapValue)return 1;if(o===ea.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Ru(l[p],f[p]);if(m!==0)return m;const v=Js(c[l[p]],u[f[p]]);if(v!==0)return v}return we(l.length,f.length)})(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function om(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=kr(t),r=kr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function am(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Js(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Ys(t){return Su(t)}function Su(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Nr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ie.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Su(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Su(n.fields[o])}`;return s+"}"})(t.mapValue):le(61005,{value:t})}function da(t){switch(Dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(t);return e?16+da(e):16;case 5:return 2*t.stringValue.length;case 6:return Nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+da(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Mr(r.fields,((i,o)=>{s+=i.length+da(o)})),s})(t.mapValue);default:throw le(13486,{value:t})}}function Cu(t){return!!t&&"integerValue"in t}function xh(t){return!!t&&"arrayValue"in t}function cm(t){return!!t&&"nullValue"in t}function lm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pa(t){return!!t&&"mapValue"in t}function vP(t){return(t?.mapValue?.fields||{})[gv]?.stringValue===_v}function Ki(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ki(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ki(t.arrayValue.values[n]);return e}return{...t}}function EP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===yP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ki(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];pa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Nt(Ki(this.value))}}function yv(t){const e=[];return Mr(t.fields,((n,r)=>{const s=new lt([n]);if(pa(r)){const i=yv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,pe.min(),pe.min(),pe.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,pe.min(),pe.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,pe.min(),pe.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n){this.position=e,this.inclusive=n}}function um(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Js(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function TP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{}class tt extends vv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IP(e,n,r):n==="array-contains"?new RP(e,r):n==="in"?new SP(e,r):n==="not-in"?new CP(e,r):n==="array-contains-any"?new PP(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bP(e,r):new AP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Js(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(Js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends vv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new On(e,n)}matches(e){return Ev(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ev(t){return t.op==="and"}function Tv(t){return wP(t)&&Ev(t)}function wP(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Pu(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Ys(t.value);if(Tv(t))return t.filters.map((e=>Pu(e))).join(",");{const e=t.filters.map((n=>Pu(n))).join(",");return`${t.op}(${e})`}}function wv(t,e){return t instanceof tt?(function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&Dn(r.value,s.value)})(t,e):t instanceof On?(function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&wv(o,s.filters[c])),!0):!1})(t,e):void le(19439)}function Iv(t){return t instanceof tt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ys(n.value)}`})(t):t instanceof On?(function(n){return n.op.toString()+" {"+n.getFilters().map(Iv).join(" ,")+"}"})(t):"Filter"}class IP extends tt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class bP extends tt{constructor(e,n){super(e,"in",n),this.keys=bv("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class AP extends tt{constructor(e,n){super(e,"not-in",n),this.keys=bv("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function bv(t,e){return(e.arrayValue?.values||[]).map((n=>ie.fromName(n.referenceValue)))}class RP extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xh(n)&&mo(n.arrayValue,this.value)}}class SP extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mo(this.value.arrayValue,n)}}class CP extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!mo(this.value.arrayValue,n)}}class PP extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>mo(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function fm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new kP(t,e,n,r,s,i,o)}function Vh(t){const e=ge(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Pu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ys(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ys(r))).join(",")),e.Te=n}return e.Te}function Mh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hm(t.startAt,e.startAt)&&hm(t.endAt,e.endAt)}function ku(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function NP(t,e,n,r,s,i,o,c){return new xc(t,e,n,r,s,i,o,c)}function Lh(t){return new xc(t)}function dm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DP(t){return t.collectionGroup!==null}function Qi(t){const e=ge(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new nt(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Wa(i,r))})),n.has(lt.keyField().canonicalString())||e.Ie.push(new Wa(lt.keyField(),r))}return e.Ie}function Rn(t){const e=ge(t);return e.Ee||(e.Ee=OP(e,Qi(t))),e.Ee}function OP(t,e){if(t.limitType==="F")return fm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Wa(s.field,i)}));const n=t.endAt?new za(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new za(t.startAt.position,t.startAt.inclusive):null;return fm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nu(t,e,n){return new xc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vc(t,e){return Mh(Rn(t),Rn(e))&&t.limitType===e.limitType}function Av(t){return`${Vh(Rn(t))}|lt:${t.limitType}`}function Ns(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Iv(s))).join(", ")}]`),Dc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ys(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ys(s))).join(",")),`Target(${r})`})(Rn(t))}; limitType=${t.limitType})`}function Mc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Qi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=um(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Qi(r),s)||r.endAt&&!(function(o,c,l){const u=um(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Qi(r),s))})(t,e)}function xP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rv(t){return(e,n)=>{let r=!1;for(const s of Qi(t)){const i=VP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VP(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Js(l,u):le(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return uv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=new qe(ie.comparator);function tr(){return MP}const Sv=new qe(ie.comparator);function Ni(...t){let e=Sv;for(const n of t)e=e.insert(n.key,n);return e}function Cv(t){let e=Sv;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Jr(){return Ji()}function Pv(){return Ji()}function Ji(){return new ms((t=>t.toString()),((t,e)=>t.isEqual(e)))}const LP=new qe(ie.comparator),FP=new nt(ie.comparator);function Ie(...t){let e=FP;for(const n of t)e=e.add(n);return e}const UP=new nt(we);function BP(){return UP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$a(e)?"-0":e}}function kv(t){return{integerValue:""+t}}function jP(t,e){return dP(e)?kv(e):Fh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this._=void 0}}function $P(t,e,n){return t instanceof Ga?(function(s,i){const o={fields:{[dv]:{stringValue:fv},[mv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oh(i)&&(i=Oc(i)),i&&(o.fields[pv]=i),{mapValue:o}})(n,e):t instanceof go?Dv(t,e):t instanceof _o?Ov(t,e):(function(s,i){const o=Nv(s,i),c=pm(o)+pm(s.Ae);return Cu(o)&&Cu(s.Ae)?kv(c):Fh(s.serializer,c)})(t,e)}function qP(t,e,n){return t instanceof go?Dv(t,e):t instanceof _o?Ov(t,e):n}function Nv(t,e){return t instanceof Ka?(function(r){return Cu(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ga extends Lc{}class go extends Lc{constructor(e){super(),this.elements=e}}function Dv(t,e){const n=xv(e);for(const r of t.elements)n.some((s=>Dn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class _o extends Lc{constructor(e){super(),this.elements=e}}function Ov(t,e){let n=xv(e);for(const r of t.elements)n=n.filter((s=>!Dn(s,r)));return{arrayValue:{values:n}}}class Ka extends Lc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function pm(t){return Ge(t.integerValue||t.doubleValue)}function xv(t){return xh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function HP(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof go&&s instanceof go||r instanceof _o&&s instanceof _o?Qs(r.elements,s.elements,Dn):r instanceof Ka&&s instanceof Ka?Dn(r.Ae,s.Ae):r instanceof Ga&&s instanceof Ga})(t.transform,e.transform)}class zP{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function Vv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uh(t.key,un.none()):new Co(t.key,t.data,un.none());{const n=t.data,r=Nt.empty();let s=new nt(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new Bt(s.toArray()),un.none())}}function WP(t,e,n){t instanceof Co?(function(s,i,o){const c=s.value.clone(),l=gm(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Lr?(function(s,i,o){if(!ma(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=gm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Mv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Yi(t,e,n,r){return t instanceof Co?(function(i,o,c,l){if(!ma(i.precondition,o))return c;const u=i.value.clone(),f=_m(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Lr?(function(i,o,c,l){if(!ma(i.precondition,o))return c;const u=_m(i.fieldTransforms,l,o),f=o.data;return f.setAll(Mv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return ma(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function GP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Nv(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function mm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qs(r,s,((i,o)=>HP(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends Fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends Fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function gm(t,e,n){const r=new Map;Ne(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,qP(o,c,n[s]))}return r}function _m(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$P(i,o,e))}return r}class Uh extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KP extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pv();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Vv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,((n,r)=>mm(n,r)))&&Qs(this.baseMutations,e.baseMutations,((n,r)=>mm(n,r)))}}class Bh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return LP})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ae;function XP(t){switch(t){case j.OK:return le(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function Lv(t){if(t===void 0)return er("GRPC error has no .code"),j.UNKNOWN;switch(t){case Qe.OK:return j.OK;case Qe.CANCELLED:return j.CANCELLED;case Qe.UNKNOWN:return j.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return j.INTERNAL;case Qe.UNAVAILABLE:return j.UNAVAILABLE;case Qe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Qe.NOT_FOUND:return j.NOT_FOUND;case Qe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Qe.ABORTED:return j.ABORTED;case Qe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Qe.DATA_LOSS:return j.DATA_LOSS;default:return le(39323,{code:t})}}(Ae=Qe||(Qe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=new Ar([4294967295,4294967295],0);function ym(t){const e=ZP().encode(t),n=new Zy;return n.update(e),new Uint8Array(n.digest())}function vm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([s,i],0)]}class jh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Di(`Invalid padding: ${n}`);if(r<0)throw new Di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Di(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ar.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Ar.fromNumber(r)));return s.compare(ek)===1&&(s=new Ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ym(e),[r,s]=vm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new jh(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=ym(e),[r,s]=vm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uc(pe.min(),s,new qe(we),tr(),Ie())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Fv{constructor(e,n){this.targetId=e,this.Ce=n}}class Uv{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Em{constructor(){this.ve=0,this.Fe=Tm(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}})),new Po(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Tm()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tk{constructor(e){this.Ge=e,this.ze=new Map,this.je=tr(),this.Je=ta(),this.He=ta(),this.Ye=new qe(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(ku(i))if(r===0){const o=new ie(i.path);this.et(n,o,vt.newNoDocument(o,pe.min()))}else Ne(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Nr(r).toUint8Array()}catch(l){if(l instanceof hv)return Ks("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new jh(o,s,i)}catch(l){return Ks(l instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&ku(c.target)){const l=new ie(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ie();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Uc(e,n,this.Ye,this.je,r);return this.je=tr(),this.Je=ta(),this.He=ta(),this.Ye=new qe(we),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Em,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nt(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nt(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Em),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ta(){return new qe(ie.comparator)}function Tm(){return new qe(ie.comparator)}const nk={asc:"ASCENDING",desc:"DESCENDING"},rk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sk={and:"AND",or:"OR"};class ik{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Du(t,e){return t.useProto3Json||Dc(e)?e:{value:e}}function Qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ok(t,e){return Qa(t,e.toTimestamp())}function Sn(t){return Ne(!!t,49232),pe.fromTimestamp((function(n){const r=kr(n);return new Fe(r.seconds,r.nanos)})(t))}function $h(t,e){return Ou(t,e).canonicalString()}function Ou(t,e){const n=(function(s){return new Le(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function jv(t){const e=Le.fromString(t);return Ne(Wv(e),10190,{key:e.toString()}),e}function xu(t,e){return $h(t.databaseId,e.path)}function Ll(t,e){const n=jv(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(qv(n))}function $v(t,e){return $h(t.databaseId,e)}function ak(t){const e=jv(t);return e.length===4?Le.emptyPath():qv(e)}function Vu(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qv(t){return Ne(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function wm(t,e,n){return{name:xu(t,e),fields:n.value.mapValue.fields}}function ck(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ne(f===void 0||typeof f=="string",58123),ht.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ht.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?j.UNKNOWN:Lv(u.code);return new ee(f,u.message||"")})(o);n=new Uv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ll(t,r.document.name),i=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):pe.min(),c=new Nt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ga(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ll(t,r.document),i=r.readTime?Sn(r.readTime):pe.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ga([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ll(t,r.document),i=r.removedTargetIds||[];n=new ga([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new YP(s,i),c=r.targetId;n=new Fv(c,o)}}return n}function lk(t,e){let n;if(e instanceof Co)n={update:wm(t,e.key,e.value)};else if(e instanceof Uh)n={delete:xu(t,e.key)};else if(e instanceof Lr)n={update:wm(t,e.key,e.data),updateMask:yk(e.fieldMask)};else{if(!(e instanceof KP))return le(16599,{Vt:e.type});n={verify:xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Ga)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ka)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw le(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ok(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)})(t,e.precondition)),n}function uk(t,e){return t&&t.length>0?(Ne(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Sn(s.updateTime):Sn(i);return o.isEqual(pe.min())&&(o=Sn(i)),new zP(o,s.transformResults||[])})(n,e)))):[]}function hk(t,e){return{documents:[$v(t,e.path)]}}function fk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$v(t,s);const i=(function(u){if(u.length!==0)return zv(On.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ds(m.field),direction:mk(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Du(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function dk(t){let e=ak(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Hv(p);return m instanceof On&&Tv(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(S){return new Wa(Os(S.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Dc(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,v=p.values||[];return new za(v,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,v=p.values||[];return new za(v,m)})(n.endAt)),NP(e,s,o,i,c,"F",l,u)}function pk(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Os(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Os(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Os(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Os(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(t):t.fieldFilter!==void 0?(function(n){return tt.create(Os(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return On.create(n.compositeFilter.filters.map((r=>Hv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(n.compositeFilter.op))})(t):le(30097,{filter:t})}function mk(t){return nk[t]}function gk(t){return rk[t]}function _k(t){return sk[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Os(t){return lt.fromServerFormat(t.fieldPath)}function zv(t){return t instanceof tt?(function(n){if(n.op==="=="){if(lm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(cm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(cm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:gk(n.op),value:n.value}}})(t):t instanceof On?(function(n){const r=n.getFilters().map((s=>zv(s)));return r.length===1?r[0]:{compositeFilter:{op:_k(n.op),filters:r}}})(t):le(54877,{filter:t})}function yk(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Wv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),c=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.yt=e}}function Ek(t){const e=dk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.Cn=new wk}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Pr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class wk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gv=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(Gv,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Xs(0)}static cr(){return new Xs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="LruGarbageCollector",Ik=1048576;function Am([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class bk{constructor(e){this.Ir=e,this.buffer=new nt(Am),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Am(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ak{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(bm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){oi(n)?X(bm,"Ignoring IndexedDB error during garbage collection: ",n):await ii(n)}await this.Vr(3e5)}))}}class Rk{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Nc.ce);const r=new bk(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Im)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Im):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ks()<=Te.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Sk(t,e){return new Rk(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.changes=new ms((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Yi(r.mutation,s,Bt.empty(),Fe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Jr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Ni();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=tr();const o=Ji(),c=(function(){return Ji()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Lr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Yi(f.mutation,u,f.mutation.getFieldMask(),Fe.now())):o.set(u.key,Bt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new Pk(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Ji();let s=new qe(((o,c)=>o-c)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Bt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Pv();f.forEach((m=>{if(!i.has(m)){const v=Vv(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Jr());let c=ho,l=i;return o.next((u=>F.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Ie()))).next((f=>({batchId:c,changes:Cv(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next((r=>{let s=Ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ni();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,m){return new xc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let c=Ni();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Yi(f.mutation,u,Bt.empty(),Fe.now()),Mc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Sn(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:Ek(s.bundledQuery),readTime:Sn(s.readTime)}})(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.overlays=new qe(ie.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Jr(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Jr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JP(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.Qr=new nt(st.$r),this.Ur=new nt(st.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new st(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ie(new Le([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ie(new Le([])),r=new st(n,e),s=new st(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new st(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ie.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nt(st.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QP(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new st(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Dh:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(we);return n.forEach((s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new st(new ie(i),0);let c=new nt(we);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),F.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ne(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,(s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new st(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.ri=e,this.docs=(function(){return new qe(ie.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,c=new ie(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lP(cP(f),r)<=0||(s.has(f.key)||Mc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new Mk(this)}getSize(e){return F.resolve(this.size)}}class Mk extends Ck{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.persistence=e,this.si=new ms((n=>Vh(n)),Mh),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new qh,this.targetCount=0,this.ai=Xs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Xs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n){this.ui={},this.overlays={},this.ci=new Nc(0),this.li=!1,this.li=!0,this.hi=new Ok,this.referenceDelegate=e(this),this.Pi=new Lk(this),this.indexManager=new Tk,this.remoteDocumentCache=(function(s){return new Vk(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new vk(n),this.Ii=new Nk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Dk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new xk(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new Fk(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return F.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class Fk extends hP{constructor(e){super(),this.currentSequenceNumber=e}}class Hh{constructor(e){this.persistence=e,this.Ri=new qh,this.Vi=null}static mi(e){return new Hh(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,(r=>{const s=ie.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,pe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ja{constructor(e,n){this.persistence=e,this.pi=new ms((r=>pP(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Sk(this,n)}static mi(e,n){return new Ja(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return F.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,pe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=da(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return OR()?8:fP(Tt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Uk;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(ks()<=Te.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(ks()<=Te.DEBUG&&X("QueryEngine","Query:",Ns(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ks()<=Te.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):F.resolve())}ys(e,n){if(dm(n))return F.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Nu(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Nu(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return dm(n)||s.isEqual(pe.min())?F.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(ks()<=Te.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ns(n)),this.vs(e,o,n,aP(s,ho)).next((c=>c)))}))}Ds(e,n){let r=new nt(Rv(e));return n.forEach(((s,i)=>{Mc(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ks()<=Te.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ns(n)),this.ps.getDocumentsMatchingQuery(e,n,Pr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="LocalStore",jk=3e8;class $k{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new qe(we),this.xs=new ms((i=>Vh(i)),Mh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kk(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function qk(t,e,n,r){return new $k(t,e,n,r)}async function Qv(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Ie();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function Hk(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let v=F.resolve();return m.forEach((S=>{v=v.next((()=>f.getEntry(l,S))).next((N=>{const C=u.docVersions.get(S);Ne(C!==null,48541),N.version.compareTo(C)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Jv(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function zk(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ht.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(N,C,U){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=jk?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(m,v,f)&&c.push(n.Pi.updateTargetData(i,v))}));let l=tr(),u=Ie();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(Wk(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(pe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function Wk(t,e,n){let r=Ie(),s=Ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=tr();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Wh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function Gk(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Dh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Kk(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Mu(t,e,n){const r=ge(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!oi(o))throw o;X(Wh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Rm(t,e,n){const r=ge(t);let s=pe.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=ge(l),m=p.xs.get(f);return m!==void 0?F.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,Rn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ie()))).next((c=>(Qk(r,xP(e),c),{documents:c,Qs:i})))))}function Qk(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Sm{constructor(){this.activeTargetIds=BP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jk{constructor(){this.Mo=new Sm,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Sm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="ConnectivityMonitor";class Pm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(Cm,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(Cm,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na=null;function Lu(){return na===null?na=(function(){return 268435456+Math.round(2147483648*Math.random())})():na++,"0x"+na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="RestConnection",Xk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===qa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Lu(),c=this.zo(e,n.toUriEncodedString());X(Fl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=fs(u);return this.Jo(e,c,l,r,f).then((p=>(X(Fl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Ks(Fl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+si})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=Xk[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class t1 extends Zk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Lu();return new Promise(((c,l)=>{const u=new ev;u.setWithCredentials(!0),u.listenOnce(tv.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case fa.NO_ERROR:const p=u.getResponseJson();X(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case fa.TIMEOUT:X(mt,`RPC '${e}' ${o} timed out`),l(new ee(j.DEADLINE_EXCEEDED,"Request time out"));break;case fa.HTTP_ERROR:const m=u.getStatus();if(X(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v?.error;if(S&&S.status&&S.message){const N=(function(U){const O=U.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(O)>=0?O:j.UNKNOWN})(S.status);l(new ee(N,S.message))}else l(new ee(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ee(j.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Lu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sv(),c=rv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,v=!1;const S=new e1({Yo:C=>{v?X(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(X(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(mt,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Zo:()=>p.close()}),N=(C,U,O)=>{C.listen(U,(L=>{try{O(L)}catch($){setTimeout((()=>{throw $}),0)}}))};return N(p,ki.EventType.OPEN,(()=>{v||(X(mt,`RPC '${e}' stream ${s} transport opened.`),S.o_())})),N(p,ki.EventType.CLOSE,(()=>{v||(v=!0,X(mt,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(p))})),N(p,ki.EventType.ERROR,(C=>{v||(v=!0,Ks(mt,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),S.a_(new ee(j.UNAVAILABLE,"The operation could not be completed")))})),N(p,ki.EventType.MESSAGE,(C=>{if(!v){const U=C.data[0];Ne(!!U,16349);const O=U,L=O?.error||O[0]?.error;if(L){X(mt,`RPC '${e}' stream ${s} received error:`,L);const $=L.status;let H=(function(y){const _=Qe[y];if(_!==void 0)return Lv(_)})($),te=L.message;H===void 0&&(H=j.INTERNAL,te="Unknown error status: "+$+" with message "+L.message),v=!0,S.a_(new ee(H,te)),p.close()}else X(mt,`RPC '${e}' stream ${s} received:`,U),S.u_(U)}})),N(c,nv.STAT_EVENT,(C=>{C.stat===Au.PROXY?X(mt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Au.NOPROXY&&X(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Ul(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){return new ik(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="PersistentStream";class Xv{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yv(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ee(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(km,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(X(km,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class n1 extends Xv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ck(this.serializer,e),r=(function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Sn(o.readTime):pe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Vu(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=ku(l)?{documents:hk(i,l)}:{query:fk(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Bv(i,o.resumeToken);const u=Du(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){c.readTime=Qa(i,o.snapshotVersion.toTimestamp());const u=Du(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=pk(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Vu(this.serializer),n.removeTarget=e,this.q_(n)}}class r1 extends Xv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=uk(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Vu(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>lk(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{}class i1 extends s1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ee(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Ou(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(j.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Ou(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(j.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class o1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(er(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="RemoteStore";class a1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{gs(this)&&(X(is,"Restarting streams for network reachability change."),await(async function(l){const u=ge(l);u.Ea.add(4),await ko(u),u.Ra.set("Unknown"),u.Ea.delete(4),await jc(u)})(this))}))})),this.Ra=new o1(r,s)}}async function jc(t){if(gs(t))for(const e of t.da)await e(!0)}async function ko(t){for(const e of t.da)await e(!1)}function Zv(t,e){const n=ge(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Jh(n)?Qh(n):ai(n).O_()&&Kh(n,e))}function Gh(t,e){const n=ge(t),r=ai(n);n.Ia.delete(e),r.O_()&&eE(n,e),n.Ia.size===0&&(r.O_()?r.L_():gs(n)&&n.Ra.set("Unknown"))}function Kh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ai(t).Y_(e)}function eE(t,e){t.Va.Ue(e),ai(t).Z_(e)}function Qh(t){t.Va=new tk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ai(t).start(),t.Ra.ua()}function Jh(t){return gs(t)&&!ai(t).x_()&&t.Ia.size>0}function gs(t){return ge(t).Ea.size===0}function tE(t){t.Va=void 0}async function c1(t){t.Ra.set("Online")}async function l1(t){t.Ia.forEach(((e,n)=>{Kh(t,e)}))}async function u1(t,e){tE(t),Jh(t)?(t.Ra.ha(e),Qh(t)):t.Ra.set("Unknown")}async function h1(t,e,n){if(t.Ra.set("Online"),e instanceof Uv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){X(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ya(t,r)}else if(e instanceof ga?t.Va.Ze(e):e instanceof Fv?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await Jv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),eE(i,l);const p=new Tr(f.target,l,u,f.sequenceNumber);Kh(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(is,"Failed to raise snapshot:",r),await Ya(t,r)}}async function Ya(t,e,n){if(!oi(e))throw e;t.Ea.add(1),await ko(t),t.Ra.set("Offline"),n||(n=()=>Jv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(is,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await jc(t)}))}function nE(t,e){return e().catch((n=>Ya(t,n,e)))}async function $c(t){const e=ge(t),n=Or(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dh;for(;f1(e);)try{const s=await Gk(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,d1(e,s)}catch(s){await Ya(e,s)}rE(e)&&sE(e)}function f1(t){return gs(t)&&t.Ta.length<10}function d1(t,e){t.Ta.push(e);const n=Or(t);n.O_()&&n.X_&&n.ea(e.mutations)}function rE(t){return gs(t)&&!Or(t).x_()&&t.Ta.length>0}function sE(t){Or(t).start()}async function p1(t){Or(t).ra()}async function m1(t){const e=Or(t);for(const n of t.Ta)e.ea(n.mutations)}async function g1(t,e,n){const r=t.Ta.shift(),s=Bh.from(r,e,n);await nE(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await $c(t)}async function _1(t,e){e&&Or(t).X_&&await(async function(r,s){if((function(o){return XP(o)&&o!==j.ABORTED})(s.code)){const i=r.Ta.shift();Or(r).B_(),await nE(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await $c(r)}})(t,e),rE(t)&&sE(t)}async function Nm(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),X(is,"RemoteStore received new credentials");const r=gs(n);n.Ea.add(3),await ko(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await jc(n)}async function y1(t,e){const n=ge(t);e?(n.Ea.delete(2),await jc(n)):e||(n.Ea.add(2),await ko(n),n.Ra.set("Unknown"))}function ai(t){return t.ma||(t.ma=(function(n,r,s){const i=ge(n);return i.sa(),new n1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:c1.bind(null,t),t_:l1.bind(null,t),r_:u1.bind(null,t),H_:h1.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Jh(t)?Qh(t):t.Ra.set("Unknown")):(await t.ma.stop(),tE(t))}))),t.ma}function Or(t){return t.fa||(t.fa=(function(n,r,s){const i=ge(n);return i.sa(),new r1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:p1.bind(null,t),r_:_1.bind(null,t),ta:m1.bind(null,t),na:g1.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await $c(t)):(await t.fa.stop(),t.Ta.length>0&&(X(is,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Yh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xh(t,e){if(er("AsyncQueue",`${e}: ${t}`),oi(t))return new ee(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{static emptySet(e){return new Bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Ni(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.ga=new qe(ie.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Zs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Zs(e,n,Bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class E1{constructor(){this.queries=Om(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Om(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new ee(j.ABORTED,"Firestore shutting down"))}}function Om(){return new ms((t=>Av(t)),Vc)}async function iE(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new v1,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Xh(o,`Initialization of query '${Ns(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Zh(n)}async function oE(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function T1(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Zh(n)}function w1(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Zh(t){t.Ca.forEach((e=>{e.next()}))}var Fu,xm;(xm=Fu||(Fu={})).Ma="default",xm.Cache="cache";class aE{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.key=e}}class lE{constructor(e){this.key=e}}class I1{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=Rv(e),this.tu=new Bs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Dm,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),v=Mc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let C=!1;m&&v?m.data.isEqual(v.data)?S!==N&&(r.track({type:3,doc:v}),C=!0):this.su(m,v)||(r.track({type:2,doc:v}),C=!0,(l&&this.eu(v,l)>0||u&&this.eu(v,u)<0)&&(c=!0)):!m&&v?(r.track({type:0,doc:v}),C=!0):m&&!v&&(r.track({type:1,doc:m}),C=!0,(l||u)&&(c=!0)),C&&(v?(o=o.add(v),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(v,S){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:C})}};return N(v)-N(S)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Zs(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Dm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new lE(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new cE(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Zs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ef="SyncEngine";class b1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A1{constructor(e){this.key=e,this.hu=!1}}class R1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ms((c=>Av(c)),Vc),this.Iu=new Map,this.Eu=new Set,this.du=new qe(ie.comparator),this.Au=new Map,this.Ru=new qh,this.Vu={},this.mu=new Map,this.fu=Xs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function S1(t,e,n=!0){const r=mE(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await uE(r,e,n,!0),s}async function C1(t,e){const n=mE(t);await uE(n,e,!0,!1)}async function uE(t,e,n,r){const s=await Kk(t.localStore,Rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await P1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Zv(t.remoteStore,s),c}async function P1(t,e,n,r,s){t.pu=(p,m,v)=>(async function(N,C,U,O){let L=C.view.ru(U);L.Cs&&(L=await Rm(N.localStore,C.query,!1).then((({documents:R})=>C.view.ru(R,L))));const $=O&&O.targetChanges.get(C.targetId),H=O&&O.targetMismatches.get(C.targetId)!=null,te=C.view.applyChanges(L,N.isPrimaryClient,$,H);return Mm(N,C.targetId,te.au),te.snapshot})(t,p,m,v);const i=await Rm(t.localStore,e,!0),o=new I1(e,i.Qs),c=o.ru(i.documents),l=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Mm(t,n,u.au);const f=new b1(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function k1(t,e,n){const r=ge(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Vc(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gh(r.remoteStore,s.targetId),Uu(r,s.targetId)})).catch(ii)):(Uu(r,s.targetId),await Mu(r.localStore,s.targetId,!0))}async function N1(t,e){const n=ge(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gh(n.remoteStore,r.targetId))}async function D1(t,e,n){const r=U1(t);try{const s=await(function(o,c){const l=ge(o),u=Fe.now(),f=c.reduce(((v,S)=>v.add(S.key)),Ie());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let S=tr(),N=Ie();return l.Ns.getEntries(v,f).next((C=>{S=C,S.forEach(((U,O)=>{O.isValidDocument()||(N=N.add(U))}))})).next((()=>l.localDocuments.getOverlayedDocuments(v,S))).next((C=>{p=C;const U=[];for(const O of c){const L=GP(O,p.get(O.key).overlayedDocument);L!=null&&U.push(new Lr(O.key,L,yv(L.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,U,c)})).next((C=>{m=C;const U=C.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(v,C.batchId,U)}))})).then((()=>({batchId:m.batchId,changes:Cv(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new qe(we)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await No(r,s.changes),await $c(r.remoteStore)}catch(s){const i=Xh(s,"Failed to persist write");n.reject(i)}}async function hE(t,e){const n=ge(t);try{const r=await zk(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ne(o.hu,14607):s.removedDocuments.size>0&&(Ne(o.hu,42227),o.hu=!1))})),await No(n,r,e)}catch(r){await ii(r)}}function Vm(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ge(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Zh(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function O1(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new qe(ie.comparator);o=o.insert(i,vt.newNoDocument(i,pe.min()));const c=Ie().add(i),l=new Uc(pe.min(),new Map,new qe(we),o,c);await hE(r,l),r.du=r.du.remove(i),r.Au.delete(e),tf(r)}else await Mu(r.localStore,e,!1).then((()=>Uu(r,e,n))).catch(ii)}async function x1(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await Hk(n.localStore,e);dE(n,r,null),fE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await No(n,s)}catch(s){await ii(s)}}async function V1(t,e,n){const r=ge(t);try{const s=await(function(o,c){const l=ge(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Ne(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);dE(r,e,n),fE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await No(r,s)}catch(s){await ii(s)}}function fE(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function dE(t,e,n){const r=ge(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Uu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||pE(t,r)}))}function pE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Gh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),tf(t))}function Mm(t,e,n){for(const r of n)r instanceof cE?(t.Ru.addReference(r.key,e),M1(t,r)):r instanceof lE?(X(ef,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||pE(t,r.key)):le(19791,{wu:r})}function M1(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(ef,"New document in limbo: "+n),t.Eu.add(r),tf(t))}function tf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ie(Le.fromString(e)),r=t.fu.next();t.Au.set(r,new A1(n)),t.du=t.du.insert(n,r),Zv(t.remoteStore,new Tr(Rn(Lh(n.path)),r,"TargetPurposeLimboResolution",Nc.ce))}}async function No(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=zh.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=ge(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Es,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>F.forEach(m.ds,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!oi(p))throw p;X(Wh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.Ms.get(m),S=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,N)}}})(r.localStore,i))}async function L1(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){X(ef,"User change. New user:",e.toKey());const r=await Qv(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new ee(j.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await No(n,r.Ls)}}function F1(t,e){const n=ge(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function mE(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=O1.bind(null,e),e.Pu.H_=T1.bind(null,e.eventManager),e.Pu.yu=w1.bind(null,e.eventManager),e}function U1(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V1.bind(null,e),e}class Xa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return qk(this.persistence,new Bk,e.initialUser,this.serializer)}Cu(e){return new Kv(Hh.mi,this.serializer)}Du(e){return new Jk}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xa.provider={build:()=>new Xa};class B1 extends Xa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ne(this.persistence.referenceDelegate instanceof Ja,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ak(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new Kv((r=>Ja.mi(r,n)),this.serializer)}}class Bu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L1.bind(null,this.syncEngine),await y1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new E1})()}createDatastore(e){const n=Bc(e.databaseInfo.databaseId),r=(function(i){return new t1(i)})(e.databaseInfo);return(function(i,o,c,l){return new i1(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new a1(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Vm(this.syncEngine,n,0)),(function(){return Pm.v()?new Pm:new Yk})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new R1(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=ge(n);X(is,"RemoteStore shutting down."),r.Ea.add(5),await ko(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Bu.provider={build:()=>new Bu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class j1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=kh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Bl(t,e){t.asyncQueue.verifyOperationInProgress(),X(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Qv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Lm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $1(t);X(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Nm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Nm(e.remoteStore,s))),t._onlineComponents=e}async function $1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(xr,"Using user provided OfflineComponentProvider");try{await Bl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await Bl(t,new Xa)}}else X(xr,"Using default OfflineComponentProvider"),await Bl(t,new B1(void 0));return t._offlineComponents}async function _E(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(xr,"Using user provided OnlineComponentProvider"),await Lm(t,t._uninitializedComponentsProvider._online)):(X(xr,"Using default OnlineComponentProvider"),await Lm(t,new Bu))),t._onlineComponents}function q1(t){return _E(t).then((e=>e.syncEngine))}async function yE(t){const e=await _E(t),n=e.eventManager;return n.onListen=S1.bind(null,e.syncEngine),n.onUnlisten=k1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=C1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=N1.bind(null,e.syncEngine),n}function H1(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new gE({next:m=>{f.Nu(),o.enqueueAndForget((()=>oE(i,p)));const v=m.docs.has(c);!v&&m.fromCache?u.reject(new ee(j.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?u.reject(new ee(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new aE(Lh(c.path),f,{includeMetadataChanges:!0,qa:!0});return iE(i,p)})(await yE(t),t.asyncQueue,e,n,r))),r.promise}function z1(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new gE({next:m=>{f.Nu(),o.enqueueAndForget((()=>oE(i,p))),m.fromCache&&l.source==="server"?u.reject(new ee(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new aE(c,f,{includeMetadataChanges:!0,qa:!0});return iE(i,p)})(await yE(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="firestore.googleapis.com",Um=!0;class Bm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=EE,this.ssl=Um}else this.host=e.host,this.ssl=e.ssl??Um;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Gv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ik)throw new ee(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vE(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new J0;switch(r.type){case"firstParty":return new eP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Fm.get(n);r&&(X("ComponentProvider","Removing Datastore"),Fm.delete(n),r.terminate())})(this),Promise.resolve()}}function W1(t,e,n,r={}){t=Nn(t,qc);const s=fs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(dh(`https://${c}`),ph("Firestore",!0)),i.host!==EE&&i.host!==c&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Cr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=_t.MOCK_USER;else{u=fy(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new _t(p)}t._authCredentials=new Y0(new ov(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hc(this.firestore,e,this._query)}}class Ye{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(So(n,Ye._jsonSchema))return new Ye(e,r||null,new ie(Le.fromString(n.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:Je("string",Ye._jsonSchemaVersion),referencePath:Je("string")};class Rr extends Hc{constructor(e,n,r){super(e,n,Lh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new ie(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function yx(t,e,...n){if(t=rt(t),av("collection","path",e),t instanceof qc){const r=Le.fromString(e,...n);return em(r),new Rr(t,null,r)}{if(!(t instanceof Ye||t instanceof Rr))throw new ee(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return em(r),new Rr(t.firestore,null,r)}}function G1(t,e,...n){if(t=rt(t),arguments.length===1&&(e=kh.newId()),av("doc","path",e),t instanceof qc){const r=Le.fromString(e,...n);return Zp(r),new Ye(t,null,new ie(r))}{if(!(t instanceof Ye||t instanceof Rr))throw new ee(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Zp(r),new Ye(t.firestore,t instanceof Rr?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="AsyncQueue";class $m{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yv(this,"async_queue_retry"),this._c=()=>{const r=Ul();r&&X(jm,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ul();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Kn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!oi(e))throw e;X(jm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",qm(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Yh.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:qm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function qm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ci extends qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new $m,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $m(e),this._firestoreClient=void 0,await e}}}function K1(t,e){const n=typeof t=="object"?t:Sc(),r=typeof t=="string"?t:qa,s=Vr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ly("firestore");i&&W1(s,...i)}return s}function nf(t){if(t._terminated)throw new ee(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Q1(t),t._firestoreClient}function Q1(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new _P(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,vE(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new j1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(ht.fromBase64String(e))}catch(n){throw new ee(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(So(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:Je("string",Qt._jsonSchemaVersion),bytes:Je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Cn._jsonSchemaVersion}}static fromJSON(e){if(So(e,Cn._jsonSchema))return new Cn(e.latitude,e.longitude)}}Cn._jsonSchemaVersion="firestore/geoPoint/1.0",Cn._jsonSchema={type:Je("string",Cn._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(So(e,Pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Pn(e.vectorValues);throw new ee(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pn._jsonSchemaVersion="firestore/vectorValue/1.0",Pn._jsonSchema={type:Je("string",Pn._jsonSchemaVersion),vectorValues:Je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=/^__.*__$/;class Y1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}class TE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class sf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Za(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(wE(this.Ac)&&J1.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class X1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bc(e)}Cc(e,n,r,s=!1){return new sf({Ac:e,methodName:n,Dc:r,path:lt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function IE(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new X1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Z1(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);of("Data must be an object, but it was:",o,r);const c=bE(r,o);let l,u;if(i.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=ju(e,p,n);if(!o.contains(m))throw new ee(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);RE(f,m)||f.push(m)}l=new Bt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new Y1(new Nt(c),l,u)}class Wc extends rf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}function eN(t,e,n,r){const s=t.Cc(1,e,n);of("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();Mr(r,((l,u)=>{const f=af(e,l,n);u=rt(u);const p=s.yc(f);if(u instanceof Wc)i.push(f);else{const m=Gc(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Bt(i);return new TE(o,c,s.fieldTransforms)}function tN(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[ju(e,r,n)],l=[s];if(i.length%2!=0)throw new ee(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ju(e,i[m])),l.push(i[m+1]);const u=[],f=Nt.empty();for(let m=c.length-1;m>=0;--m)if(!RE(u,c[m])){const v=c[m];let S=l[m];S=rt(S);const N=o.yc(v);if(S instanceof Wc)u.push(v);else{const C=Gc(S,N);C!=null&&(u.push(v),f.set(v,C))}}const p=new Bt(u);return new TE(f,p,o.fieldTransforms)}function Gc(t,e){if(AE(t=rt(t)))return of("Unsupported field value:",e,t),bE(t,e);if(t instanceof rf)return(function(r,s){if(!wE(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Gc(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:Qa(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qa(s.serializer,i)}}if(r instanceof Cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:Bv(s.serializer,r._byteString)};if(r instanceof Ye){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$h(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pn)return(function(o,c){return{mapValue:{fields:{[gv]:{stringValue:_v},[Ha]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Fh(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Nh(r)}`)})(t,e)}function bE(t,e){const n={};return uv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,((r,s)=>{const i=Gc(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function AE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Cn||t instanceof Qt||t instanceof Ye||t instanceof rf||t instanceof Pn)}function of(t,e,n){if(!AE(n)||!cv(n)){const r=Nh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function ju(t,e,n){if((e=rt(e))instanceof zc)return e._internalPath;if(typeof e=="string")return af(t,e);throw Za("Field path arguments must be of type string or ",t,!1,void 0,n)}const nN=new RegExp("[~\\*/\\[\\]]");function af(t,e,n){if(e.search(nN)>=0)throw Za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zc(...e.split("."))._internalPath}catch{throw Za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Za(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ee(j.INVALID_ARGUMENT,c+t+l)}function RE(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(CE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rN extends SE{data(){return super.data()}}function CE(t,e){return typeof e=="string"?af(t,e):e instanceof zc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iN{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Ha].arrayValue?.values?.map((r=>Ge(r.doubleValue)));return new Pn(n)}convertGeoPoint(e){return new Cn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Oc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ne(Wv(r),9688,{name:e});const s=new po(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class es extends SE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(CE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}es._jsonSchemaVersion="firestore/documentSnapshot/1.0",es._jsonSchema={type:Je("string",es._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class _a extends es{data(e={}){return super.data(e)}}class js{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new _a(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new _a(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Oi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new _a(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Oi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:aN(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=js._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){t=Nn(t,Ye);const e=Nn(t.firestore,ci);return H1(nf(e),t._key).then((n=>lN(e,t,n)))}js._jsonSchemaVersion="firestore/querySnapshot/1.0",js._jsonSchema={type:Je("string",js._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};class PE extends iN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,n)}}function vx(t){t=Nn(t,Hc);const e=Nn(t.firestore,ci),n=nf(e),r=new PE(e);return sN(t._query),z1(n,t._query).then((s=>new js(e,r,t,s)))}function Ex(t,e,n){t=Nn(t,Ye);const r=Nn(t.firestore,ci),s=oN(t.converter,e);return cf(r,[Z1(IE(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,un.none())])}function Tx(t,e,n,...r){t=Nn(t,Ye);const s=Nn(t.firestore,ci),i=IE(s);let o;return o=typeof(e=rt(e))=="string"||e instanceof zc?tN(i,"updateDoc",t._key,e,n,r):eN(i,"updateDoc",t._key,e),cf(s,[o.toMutation(t._key,un.exists(!0))])}function wx(t){return cf(Nn(t.firestore,ci),[new Uh(t._key,un.none())])}function cf(t,e){return(function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget((async()=>D1(await q1(r),s,i))),i.promise})(nf(t),e)}function lN(t,e,n){const r=n.docs.get(e._key),s=new PE(t);return new es(t,s,e._key,r,new Oi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){si=s})(ps),pn(new Xt("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ci(new X0(r.getProvider("auth-internal")),new tP(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Dt(Qp,Jp,e),Dt(Qp,Jp,"esm2020")})();var uN="firebase",hN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(uN,hN,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="firebasestorage.googleapis.com",fN="storageBucket",dN=120*1e3,pN=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Zt{constructor(e,n,r=0){super(jl(e),`Firebase Storage: ${n} (${jl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xn||(xn={}));function jl(t){return"storage/"+t}function mN(){const t="An unknown error occurred, please check the error payload for server response.";return new Vn(xn.UNKNOWN,t)}function gN(){return new Vn(xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _N(){return new Vn(xn.CANCELED,"User canceled the upload/download.")}function yN(t){return new Vn(xn.INVALID_URL,"Invalid URL '"+t+"'.")}function vN(t){return new Vn(xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hm(t){return new Vn(xn.INVALID_ARGUMENT,t)}function NE(){return new Vn(xn.APP_DELETED,"The Firebase app was deleted.")}function EN(t){return new Vn(xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(r.path==="")return r;throw vN(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u($){$.path_=decodeURIComponent($.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),S={bucket:1,path:3},N=n===kE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",U=new RegExp(`^https?://${N}/${s}/${C}`,"i"),L=[{regex:c,indices:l,postModify:i},{regex:v,indices:S,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let $=0;$<L.length;$++){const H=L[$],te=H.regex.exec(e);if(te){const R=te[H.indices.bucket];let y=te[H.indices.path];y||(y=""),r=new on(R,y),H.postModify(r);break}}if(r==null)throw yN(e);return r}}class TN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...C){u||(u=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,t(v,l())},C)}function m(){i&&clearTimeout(i)}function v(C,...U){if(u){m();return}if(C){m(),f.call(null,C,...U);return}if(l()||o){m(),f.call(null,C,...U);return}r<64&&(r*=2);let L;c===1?(c=2,L=0):L=(r+Math.random())*1e3,p(L)}let S=!1;function N(C){S||(S=!0,m(),!u&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function IN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){return t!==void 0}function zm(t,e,n,r){if(r<e)throw Hm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Hm(`Invalid value for '${t}'. Expected ${n} or less.`)}function AN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ec;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ec||(ec={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n,r,s,i,o,c,l,u,f,p,m=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,N)=>{this.resolve_=S,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ra(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===ec.NO_ERROR,l=i.getStatus();if(!c||RN(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ec.ABORT;r(!1,new ra(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ra(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());bN(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=mN();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?NE():_N();o(l)}else{const l=gN();o(l)}};this.canceled_?n(!1,new ra(!1,null,!0)):this.backoffId_=wN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ra{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function CN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function NN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DN(t,e,n,r,s,i,o=!0,c=!1){const l=AN(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return kN(f,e),CN(f,n),PN(f,i),NN(f,r),new SN(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new tc(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xN(this._location.path)}get storage(){return this._service}get parent(){const e=ON(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new tc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw EN(e)}}function Wm(t,e){const n=e?.[fN];return n==null?null:on.makeFromBucketSpec(n,t)}function VN(t,e,n,r={}){t.host=`${e}:${n}`;const s=fs(e);s&&(dh(`https://${t.host}/b`),ph("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:fy(i,t.app.options.projectId))}class MN{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=kE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dN,this._maxUploadRetryTime=pN,this._requests=new Set,s!=null?this._bucket=on.makeFromBucketSpec(s,this._host):this._bucket=Wm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=Wm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new tc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new TN(NE());{const o=DN(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Gm="@firebase/storage",Km="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="storage";function LN(t=Sc(),e){t=rt(t);const r=Vr(t,DE).getImmediate({identifier:e}),s=ly("storage");return s&&FN(r,...s),r}function FN(t,e,n,r={}){VN(t,e,n,r)}function UN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new MN(n,r,s,e,ps)}function BN(){pn(new Xt(DE,UN,"PUBLIC").setMultipleInstances(!0)),Dt(Gm,Km,""),Dt(Gm,Km,"esm2020")}BN();const OE="@firebase/installations",lf="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=1e4,VE=`w:${lf}`,ME="FIS_v2",jN="https://firebaseinstallations.googleapis.com/v1",$N=3600*1e3,qN="installations",HN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new ds(qN,HN,zN);function LE(t){return t instanceof Zt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE({projectId:t}){return`${jN}/projects/${t}/installations`}function UE(t){return{token:t.token,requestStatus:2,expiresIn:GN(t.expiresIn),creationTime:Date.now()}}async function BE(t,e){const r=(await e.json()).error;return os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WN(t,{refreshToken:e}){const n=jE(t);return n.append("Authorization",KN(e)),n}async function $E(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GN(t){return Number(t.replace("s","000"))}function KN(t){return`${ME} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=FE(t),s=jE(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:ME,appId:t.appId,sdkVersion:VE},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await $E(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:UE(u.authToken)}}else throw await BE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=/^[cdef][\w-]{21}$/,$u="";function XN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ZN(t);return YN.test(n)?n:$u}catch{return $u}}function ZN(t){return JN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new Map;function zE(t,e){const n=Kc(t);WE(n,e),eD(n,e)}function WE(t,e){const n=HE.get(t);if(n)for(const r of n)r(e)}function eD(t,e){const n=tD();n&&n.postMessage({key:t,fid:e}),nD()}let Yr=null;function tD(){return!Yr&&"BroadcastChannel"in self&&(Yr=new BroadcastChannel("[Firebase] FID Change"),Yr.onmessage=t=>{WE(t.data.key,t.data.fid)}),Yr}function nD(){HE.size===0&&Yr&&(Yr.close(),Yr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="firebase-installations-database",sD=1,as="firebase-installations-store";let $l=null;function uf(){return $l||($l=gy(rD,sD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}})),$l}async function nc(t,e){const n=Kc(t),s=(await uf()).transaction(as,"readwrite"),i=s.objectStore(as),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&zE(t,e.fid),e}async function GE(t){const e=Kc(t),r=(await uf()).transaction(as,"readwrite");await r.objectStore(as).delete(e),await r.done}async function Qc(t,e){const n=Kc(t),s=(await uf()).transaction(as,"readwrite"),i=s.objectStore(as),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&zE(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(t){let e;const n=await Qc(t.appConfig,r=>{const s=iD(r),i=oD(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===$u?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iD(t){const e=t||{fid:XN(),registrationStatus:0};return KE(e)}function oD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=aD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cD(t)}:{installationEntry:e}}async function aD(t,e){try{const n=await QN(t,e);return nc(t.appConfig,n)}catch(n){throw LE(n)&&n.customData.serverCode===409?await GE(t.appConfig):await nc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cD(t){let e=await Qm(t.appConfig);for(;e.registrationStatus===1;)await qE(100),e=await Qm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await hf(t);return r||n}return e}function Qm(t){return Qc(t,e=>{if(!e)throw os.create("installation-not-found");return KE(e)})}function KE(t){return lD(t)?{fid:t.fid,registrationStatus:0}:t}function lD(t){return t.registrationStatus===1&&t.registrationTime+xE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD({appConfig:t,heartbeatServiceProvider:e},n){const r=hD(t,n),s=WN(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:VE,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await $E(()=>fetch(r,c));if(l.ok){const u=await l.json();return UE(u)}else throw await BE("Generate Auth Token",l)}function hD(t,{fid:e}){return`${FE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(t,e=!1){let n;const r=await Qc(t.appConfig,i=>{if(!QE(i))throw os.create("not-registered");const o=i.authToken;if(!e&&pD(o))return i;if(o.requestStatus===1)return n=fD(t,e),i;{if(!navigator.onLine)throw os.create("app-offline");const c=gD(i);return n=dD(t,c),c}});return n?await n:r.authToken}async function fD(t,e){let n=await Jm(t.appConfig);for(;n.authToken.requestStatus===1;)await qE(100),n=await Jm(t.appConfig);const r=n.authToken;return r.requestStatus===0?ff(t,e):r}function Jm(t){return Qc(t,e=>{if(!QE(e))throw os.create("not-registered");const n=e.authToken;return _D(n)?{...e,authToken:{requestStatus:0}}:e})}async function dD(t,e){try{const n=await uD(t,e),r={...e,authToken:n};return await nc(t.appConfig,r),n}catch(n){if(LE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await GE(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await nc(t.appConfig,r)}throw n}}function QE(t){return t!==void 0&&t.registrationStatus===2}function pD(t){return t.requestStatus===2&&!mD(t)}function mD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$N}function gD(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function _D(t){return t.requestStatus===1&&t.requestTime+xE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t){const e=t,{installationEntry:n,registrationPromise:r}=await hf(e);return r?r.catch(console.error):ff(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(t,e=!1){const n=t;return await ED(n),(await ff(n,e)).token}async function ED(t){const{registrationPromise:e}=await hf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t){if(!t||!t.options)throw ql("App Configuration");if(!t.name)throw ql("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ql(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ql(t){return os.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="installations",wD="installations-internal",ID=t=>{const e=t.getProvider("app").getImmediate(),n=TD(e),r=Vr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bD=t=>{const e=t.getProvider("app").getImmediate(),n=Vr(e,JE).getImmediate();return{getId:()=>yD(n),getToken:s=>vD(n,s)}};function AD(){pn(new Xt(JE,ID,"PUBLIC")),pn(new Xt(wD,bD,"PRIVATE"))}AD();Dt(OE,lf);Dt(OE,lf,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="analytics",RD="firebase_id",SD="origin",CD=60*1e3,PD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",df="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Rc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new ds("analytics","Analytics",kD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){if(!t.startsWith(df)){const e=$t.create("invalid-gtag-resource",{gtagURL:t});return Ot.warn(e.message),""}return t}function YE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function DD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function OD(t,e){const n=DD("firebase-js-sdk-policy",{createScriptURL:ND}),r=document.createElement("script"),s=`${df}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function xD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VD(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await YE(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Ot.error(c)}t("config",s,i)}async function MD(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await YE(n);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ot.error(i)}}function LD(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await MD(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await VD(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Ot.error(c)}}return s}function FD(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=LD(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function UD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(df)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=30,jD=1e3;class $D{constructor(e={},n=jD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const XE=new $D;function qD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HD(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:qD(n)},s=PD.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();c.error?.message&&(o=c.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function zD(t,e=XE,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw $t.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new KD;return setTimeout(async()=>{c.abort()},CD),ZE({appId:r,apiKey:s,measurementId:i},o,c,e)}async function ZE(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=XE){const{appId:i,measurementId:o}=t;try{await WD(r,e)}catch(c){if(o)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw c}try{const c=await HD(t);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!GD(l)){if(s.deleteThrottleMetadata(i),o)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw c}const u=Number(l?.customData?.httpStatus)===503?wp(n,s.intervalMillis,BD):wp(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,f),Ot.debug(`Calling attemptFetch again in ${u} millis`),ZE(t,f,r,s)}}function WD(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function GD(t){if(!(t instanceof Zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class KD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(){if(gh())try{await _h()}catch(t){return Ot.warn($t.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ot.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YD(t,e,n,r,s,i,o){const c=zD(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ot.error(m)),e.push(c);const l=JD().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);UD(i)||OD(i,u.measurementId),s("js",new Date);const p=o?.config??{};return p[SD]="firebase",p.update=!0,f!=null&&(p[RD]=f),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.app=e}_delete(){return delete Xi[this.app.options.appId],Promise.resolve()}}let Xi={},Ym=[];const Xm={};let Hl="dataLayer",ZD="gtag",Zm,eT,eg=!1;function eO(){const t=[];if(mh()&&t.push("This is a browser extension environment."),dy()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});Ot.warn(n.message)}}function tO(t,e,n){eO();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(Xi[r]!=null)throw $t.create("already-exists",{id:r});if(!eg){xD(Hl);const{wrappedGtag:i,gtagCore:o}=FD(Xi,Ym,Xm,Hl,ZD);eT=i,Zm=o,eg=!0}return Xi[r]=YD(t,Ym,Xm,e,Zm,Hl,n),new XD(t)}function nO(t=Sc()){t=rt(t);const e=Vr(t,rc);return e.isInitialized()?e.getImmediate():rO(t)}function rO(t,e={}){const n=Vr(t,rc);if(n.isInitialized()){const s=n.getImmediate();if(Cr(e,n.getOptions()))return s;throw $t.create("already-initialized")}return n.initialize({options:e})}async function sO(){if(mh()||!dy()||!gh())return!1;try{return await _h()}catch{return!1}}function iO(t,e,n,r){t=rt(t),QD(eT,Xi[t.app.options.appId],e,n,r).catch(s=>Ot.error(s))}const tg="@firebase/analytics",ng="0.10.18";function oO(){pn(new Xt(rc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return tO(r,s,n)},"PUBLIC")),pn(new Xt("analytics-internal",t,"PRIVATE")),Dt(tg,ng),Dt(tg,ng,"esm2020");function t(e){try{const n=e.getProvider(rc).getImmediate();return{logEvent:(r,s,i)=>iO(n,r,s,i)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}oO();const aO={apiKey:"AIzaSyB8PR6m1CjfxX4JH4BEQXJcs2EjSnDssbE",authDomain:"cksc-merchandis.firebaseapp.com",projectId:"cksc-merchandis",storageBucket:"cksc-merchandis.firebasestorage.app",messagingSenderId:"294251224185",appId:"1:294251224185:web:5b1904f929e6ced3eb08a8",measurementId:"G-J8LM25YKVM"},Jc=_y(aO),qu=K0(Jc),tT=K1(Jc),cO=LN(Jc);let nT;sO().then(t=>{t&&(nT=nO(Jc))});const lO=()=>{},uO=Object.freeze(Object.defineProperty({__proto__:null,get analytics(){return nT},auth:qu,db:tT,default:lO,storage:cO},Symbol.toStringTag,{value:"Module"})),hO=W_("auth",()=>{const t=cn(null),e=cn(!0),n=ue(()=>t.value?.isAdmin===!0),r=ue(()=>!!t.value);let s=null;function i(){return s||(s=new Promise(c=>{FC(qu,async l=>{if(l)try{const u=G1(tT,"users",l.uid),f=await cN(u),p=f.exists()&&f.data().role==="admin";t.value={...l,isAdmin:p}}catch{t.value={...l,isAdmin:!1}}else t.value=null;e.value=!1,c()})}),s)}async function o(){await UC(qu),t.value=null}return{user:t,loading:e,isAdmin:n,isLoggedIn:r,init:i,signOut:o}}),zl=lA(function(){const e=mR({scrollBehavior:()=>({left:0,top:0}),routes:gR,history:GA("/")});return e.beforeEach(async n=>{const r=hO();return r.loading&&await r.init(),n.meta.requiresAdmin,n.name==="admin-login"&&r.isAdmin?{name:"admin"}:!0}),e});async function fO(t,e){const n=t(aA);n.use(Kb,e);const r=typeof bl=="function"?await bl({}):bl;n.use(r);const s=us(typeof zl=="function"?await zl({store:r}):zl);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}const Hu={xs:18,sm:24,md:32,lg:38,xl:46},pf={size:String};function mf(t,e=Hu){return ue(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}function dO(t,e){return t!==void 0&&t()||e}function xi(t,e){return t!==void 0?e.concat(t()):e}function pO(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}const rg="0 0 24 24",Wl=t=>t,Gl=t=>`ionicons ${t}`,rT={"mdi-":t=>`mdi ${t}`,"icon-":Wl,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":Gl,"ion-ios":Gl,"ion-logo":Gl,"iconfont ":Wl,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`,"i-":Wl},sT={o_:"-outlined",r_:"-round",s_:"-sharp"},iT={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},mO=new RegExp("^("+Object.keys(rT).join("|")+")"),gO=new RegExp("^("+Object.keys(sT).join("|")+")"),sg=new RegExp("^("+Object.keys(iT).join("|")+")"),_O=/^[Mm]\s?[-+]?\.?\d/,yO=/^img:/,vO=/^svguse:/,EO=/^ion-/,TO=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,sc=To({name:"QIcon",props:{...pf,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=hs(),r=mf(t),s=ue(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),i=ue(()=>{let o,c=t.name;if(c==="none"||!c)return{none:!0};if(n.iconMapFn!==null){const f=n.iconMapFn(c);if(f!==void 0)if(f.icon!==void 0){if(c=f.icon,c==="none"||!c)return{none:!0}}else return{cls:f.cls,content:f.content!==void 0?f.content:" "}}if(_O.test(c)===!0){const[f,p=rg]=c.split("|");return{svg:!0,viewBox:p,nodes:f.split("&&").map(m=>{const[v,S,N]=m.split("@@");return de("path",{style:S,d:v,transform:N})})}}if(yO.test(c)===!0)return{img:!0,src:c.substring(4)};if(vO.test(c)===!0){const[f,p=rg]=c.split("|");return{svguse:!0,src:f.substring(7),viewBox:p}}let l=" ";const u=c.match(mO);if(u!==null)o=rT[u[1]](c);else if(TO.test(c)===!0)o=c;else if(EO.test(c)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${c.substring(3)}`;else if(sg.test(c)===!0){o="notranslate material-symbols";const f=c.match(sg);f!==null&&(c=c.substring(6),o+=iT[f[1]]),l=c}else{o="notranslate material-icons";const f=c.match(gO);f!==null&&(c=c.substring(2),o+=sT[f[1]]),l=c}return{cls:o,content:l}});return()=>{const o={class:s.value,style:r.value,"aria-hidden":"true"};return i.value.none===!0?de(t.tag,o,dO(e.default)):i.value.img===!0?de(t.tag,o,xi(e.default,[de("img",{src:i.value.src})])):i.value.svg===!0?de(t.tag,o,xi(e.default,[de("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?de(t.tag,o,xi(e.default,[de("svg",{viewBox:i.value.viewBox},[de("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(o.class+=" "+i.value.cls),de(t.tag,o,xi(e.default,[i.value.content])))}}}),wO=To({name:"QAvatar",props:{...pf,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=mf(t),r=ue(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),s=ue(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const i=t.icon!==void 0?[de(sc,{name:t.icon})]:void 0;return de("div",{class:r.value,style:n.value},[de("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},pO(e.default,i))])}}}),IO={size:{type:[String,Number],default:"1em"},color:String};function bO(t){return{cSize:ue(()=>t.size in Hu?`${Hu[t.size]}px`:t.size),classes:ue(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}const oT=To({name:"QSpinner",props:{...IO,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=bO(t);return()=>de("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[de("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function AO(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function RO(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function ig(t,e,n,r){n.modifiers.stop===!0&&L_(t);const s=n.modifiers.color;let i=n.modifiers.center;i=i===!0||r===!0;const o=document.createElement("span"),c=document.createElement("span"),l=Ab(t),{left:u,top:f,width:p,height:m}=e.getBoundingClientRect(),v=Math.sqrt(p*p+m*m),S=v/2,N=`${(p-v)/2}px`,C=i?N:`${l.left-u-S}px`,U=`${(m-v)/2}px`,O=i?U:`${l.top-f-S}px`;c.className="q-ripple__inner",AO(c,{height:`${v}px`,width:`${v}px`,transform:`translate3d(${C},${O},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${s?" text-"+s:""}`,o.setAttribute("dir","ltr"),o.appendChild(c),e.appendChild(o);const L=()=>{o.remove(),clearTimeout($)};n.abort.push(L);let $=setTimeout(()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${N},${U},0) scale3d(1,1,1)`,c.style.opacity=.2,$=setTimeout(()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,$=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(L),1)},275)},250)},50)}function og(t,{modifiers:e,value:n,arg:r}){const s=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}const SO=bb({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(s){r.enabled===!0&&s.qSkipRipple!==!0&&s.type===(r.modifiers.early===!0?"pointerdown":"click")&&ig(s,t,r,s.qKeyEvent===!0)},keystart:RO(s=>{r.enabled===!0&&s.qSkipRipple!==!0&&uu(s,r.modifiers.keyCodes)===!0&&s.type===`key${r.modifiers.early===!0?"down":"up"}`&&ig(s,t,r,!0)},300)};og(r,e),t.__qripple=r,Sb(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&og(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),Cb(e,"main"),delete t._qripple)}}),aT={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},CO=Object.keys(aT),PO={align:{type:String,validator:t=>CO.includes(t)}};function kO(t){return ue(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${aT[e]}`})}function NO(t){return t.appContext.config.globalProperties.$router!==void 0}function ag(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function cg(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function DO(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(Array.isArray(s)===!1||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function lg(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function OO(t,e){return Array.isArray(t)===!0?lg(t,e):Array.isArray(e)===!0?lg(e,t):t===e}function xO(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(OO(t[n],e[n])===!1)return!1;return!0}const VO={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function MO({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=hs(),{props:r,proxy:s,emit:i}=n,o=NO(n),c=ue(()=>r.disable!==!0&&r.href!==void 0),l=ue(e===!0?()=>o===!0&&r.disable!==!0&&c.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&c.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),u=ue(()=>l.value===!0?O(r.to):null),f=ue(()=>u.value!==null),p=ue(()=>c.value===!0||f.value===!0),m=ue(()=>r.type==="a"||p.value===!0?"a":r.tag||t||"div"),v=ue(()=>c.value===!0?{href:r.href,target:r.target}:f.value===!0?{href:u.value.href,target:r.target}:{}),S=ue(()=>{if(f.value===!1)return-1;const{matched:H}=u.value,{length:te}=H,R=H[te-1];if(R===void 0)return-1;const y=s.$route.matched;if(y.length===0)return-1;const _=y.findIndex(cg.bind(null,R));if(_!==-1)return _;const I=ag(H[te-2]);return te>1&&ag(R)===I&&y[y.length-1].path!==I?y.findIndex(cg.bind(null,H[te-2])):_}),N=ue(()=>f.value===!0&&S.value!==-1&&DO(s.$route.params,u.value.params)),C=ue(()=>N.value===!0&&S.value===s.$route.matched.length-1&&xO(s.$route.params,u.value.params)),U=ue(()=>f.value===!0?C.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":N.value===!0?` ${r.activeClass}`:"":"");function O(H){try{return s.$router.resolve(H)}catch{}return null}function L(H,{returnRouterError:te,to:R=r.to,replace:y=r.replace}={}){if(r.disable===!0)return H.preventDefault(),Promise.resolve(!1);if(H.metaKey||H.altKey||H.ctrlKey||H.shiftKey||H.button!==void 0&&H.button!==0||r.target==="_blank")return Promise.resolve(!1);H.preventDefault();const _=s.$router[y===!0?"replace":"push"](R);return te===!0?_:_.then(()=>{}).catch(()=>{})}function $(H){if(f.value===!0){const te=R=>L(H,R);i("click",H,te),H.defaultPrevented!==!0&&te()}else i("click",H)}return{hasRouterLink:f,hasHrefLink:c,hasLink:p,linkTag:m,resolvedLink:u,linkIsActive:N,linkIsExactActive:C,linkClass:U,linkAttrs:v,getLink:O,navigateToRouterLink:L,navigateOnClick:$}}const ug={none:0,xs:4,sm:8,md:16,lg:24,xl:32},LO={xs:8,sm:10,md:14,lg:20,xl:24},FO=["button","submit","reset"],UO=/[^\s]\/[^\s]/,BO=["flat","outline","push","unelevated"];function jO(t,e){return t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e}const $O={...pf,...VO,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...BO.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...PO.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},qO={...$O,round:Boolean};function HO(t){const e=mf(t,LO),n=kO(t),{hasRouterLink:r,hasLink:s,linkTag:i,linkAttrs:o,navigateOnClick:c}=MO({fallbackTag:"button"}),l=ue(()=>{const C=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},C,{padding:t.padding.split(/\s+/).map(U=>U in ug?ug[U]+"px":U).join(" "),minWidth:"0",minHeight:"0"}):C}),u=ue(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),f=ue(()=>t.disable!==!0&&t.loading!==!0),p=ue(()=>f.value===!0?t.tabindex||0:-1),m=ue(()=>jO(t,"standard")),v=ue(()=>{const C={tabindex:p.value};return s.value===!0?Object.assign(C,o.value):FO.includes(t.type)===!0&&(C.type=t.type),i.value==="a"?(t.disable===!0?C["aria-disabled"]="true":C.href===void 0&&(C.role="button"),r.value!==!0&&UO.test(t.type)===!0&&(C.type=t.type)):t.disable===!0&&(C.disabled="",C["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(C,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),C}),S=ue(()=>{let C;t.color!==void 0?t.flat===!0||t.outline===!0?C=`text-${t.textColor||t.color}`:C=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(C=`text-${t.textColor}`);const U=t.round===!0?"round":`rectangle${u.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${m.value} q-btn--${U}`+(C!==void 0?" "+C:"")+(f.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),N=ue(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:S,style:l,innerClasses:N,attributes:v,hasLink:s,linkTag:i,navigateOnClick:c,isActionable:f}}const{passiveCapture:Gt}=wo;let As=null,Rs=null,Ss=null;const zO=To({name:"QBtn",props:{...qO,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=hs(),{classes:s,style:i,innerClasses:o,attributes:c,hasLink:l,linkTag:u,navigateOnClick:f,isActionable:p}=HO(t),m=cn(null),v=cn(null);let S=null,N,C=null;const U=ue(()=>t.label!==void 0&&t.label!==null&&t.label!==""),O=ue(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),L=ue(()=>({center:t.round})),$=ue(()=>{const K=Math.max(0,Math.min(100,t.percentage));return K>0?{transition:"transform 0.6s",transform:`translateX(${K-100}%)`}:{}}),H=ue(()=>{if(t.loading===!0)return{onMousedown:E,onTouchstart:E,onClick:E,onKeydown:E,onKeyup:E};if(p.value===!0){const K={onClick:R,onKeydown:y,onMousedown:I};if(r.$q.platform.has.touch===!0){const ye=t.onTouchstart!==void 0?"":"Passive";K[`onTouchstart${ye}`]=_}return K}return{onClick:Is}}),te=ue(()=>({ref:m,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:i.value,...c.value,...H.value}));function R(K){if(m.value!==null){if(K!==void 0){if(K.defaultPrevented===!0)return;const ye=document.activeElement;if(t.type==="submit"&&ye!==document.body&&m.value.contains(ye)===!1&&ye.contains(m.value)===!1){K.qAvoidFocus!==!0&&m.value.focus();const be=()=>{document.removeEventListener("keydown",Is,!0),document.removeEventListener("keyup",be,Gt),m.value?.removeEventListener("blur",be,Gt)};document.addEventListener("keydown",Is,!0),document.addEventListener("keyup",be,Gt),m.value.addEventListener("blur",be,Gt)}}f(K)}}function y(K){m.value!==null&&(n("keydown",K),uu(K,[13,32])===!0&&Rs!==m.value&&(Rs!==null&&w(),K.defaultPrevented!==!0&&(K.qAvoidFocus!==!0&&m.value.focus(),Rs=m.value,m.value.classList.add("q-btn--active"),document.addEventListener("keyup",A,!0),m.value.addEventListener("blur",A,Gt)),Is(K)))}function _(K){m.value!==null&&(n("touchstart",K),K.defaultPrevented!==!0&&(As!==m.value&&(As!==null&&w(),As=m.value,S=K.target,S.addEventListener("touchcancel",A,Gt),S.addEventListener("touchend",A,Gt)),N=!0,C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,N=!1},200)))}function I(K){m.value!==null&&(K.qSkipRipple=N===!0,n("mousedown",K),K.defaultPrevented!==!0&&Ss!==m.value&&(Ss!==null&&w(),Ss=m.value,m.value.classList.add("q-btn--active"),document.addEventListener("mouseup",A,Gt)))}function A(K){if(m.value!==null&&!(K?.type==="blur"&&document.activeElement===m.value)){if(K?.type==="keyup"){if(Rs===m.value&&uu(K,[13,32])===!0){const ye=new MouseEvent("click",K);ye.qKeyEvent=!0,K.defaultPrevented===!0&&Rb(ye),K.cancelBubble===!0&&L_(ye),m.value.dispatchEvent(ye),Is(K),K.qKeyEvent=!0}n("keyup",K)}w()}}function w(K){const ye=v.value;K!==!0&&(As===m.value||Ss===m.value)&&ye!==null&&ye!==document.activeElement&&(ye.setAttribute("tabindex",-1),ye.focus()),As===m.value&&(S!==null&&(S.removeEventListener("touchcancel",A,Gt),S.removeEventListener("touchend",A,Gt)),As=S=null),Ss===m.value&&(document.removeEventListener("mouseup",A,Gt),Ss=null),Rs===m.value&&(document.removeEventListener("keyup",A,!0),m.value?.removeEventListener("blur",A,Gt),Rs=null),m.value?.classList.remove("q-btn--active")}function E(K){Is(K),K.qSkipRipple=!0}return ih(()=>{w(!0)}),Object.assign(r,{click:K=>{p.value===!0&&R(K)}}),()=>{let K=[];t.icon!==void 0&&K.push(de(sc,{name:t.icon,left:t.stack!==!0&&U.value===!0,role:"img"})),U.value===!0&&K.push(de("span",{class:"block"},[t.label])),K=xi(e.default,K),t.iconRight!==void 0&&t.round===!1&&K.push(de(sc,{name:t.iconRight,right:t.stack!==!0&&U.value===!0,role:"img"}));const ye=[de("span",{class:"q-focus-helper",ref:v})];return t.loading===!0&&t.percentage!==void 0&&ye.push(de("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[de("span",{class:"q-btn__progress-indicator fit block",style:$.value})])),ye.push(de("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},K)),t.loading!==null&&ye.push(de(jI,{name:"q-transition--fade"},()=>t.loading===!0?[de("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[de(oT)])]:null)),Cw(de(u.value,te.value,ye),[[SO,O.value,void 0,L.value]])}}});let WO=document.body;function GO(t,e){const n=document.createElement("div");if(n.id=t,Oa.globalNodes!==void 0){const r=Oa.globalNodes.class;r!==void 0&&(n.className=r)}return WO.appendChild(n),n}let KO=0;const ya={},va={},nn={},cT={},QO=/^\s*$/,lT=[],JO=[void 0,null,!0,!1,""],gf=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],YO=["top-left","top-right","bottom-left","bottom-right"],Vi={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function uT(t,e,n){if(!t)return Si("parameter required");let r;const s={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(s,ya),ao(t)===!1&&(s.type&&Object.assign(s,Vi[s.type]),t={message:t}),Object.assign(s,Vi[t.type||s.type],t),typeof s.icon=="function"&&(s.icon=s.icon(e)),s.spinner?(s.spinner===!0&&(s.spinner=oT),s.spinner=us(s.spinner)):s.spinner=!1,s.meta={hasMedia:!!(s.spinner!==!1||s.icon||s.avatar),hasText:hg(s.message)||hg(s.caption)},s.position){if(gf.includes(s.position)===!1)return Si("wrong position",t)}else s.position="bottom";if(JO.includes(s.timeout)===!0)s.timeout=5e3;else{const l=Number(s.timeout);if(isNaN(l)||l<0)return Si("wrong timeout",t);s.timeout=Number.isFinite(l)?l:0}s.timeout===0?s.progress=!1:s.progress===!0&&(s.meta.progressClass="q-notification__progress"+(s.progressClass?` ${s.progressClass}`:""),s.meta.progressStyle={animationDuration:`${s.timeout+1e3}ms`});const i=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(ya.actions)===!0?ya.actions:[]).concat(Array.isArray(Vi[t.type]?.actions)===!0?Vi[t.type].actions:[]),{closeBtn:o}=s;if(o&&i.push({label:typeof o=="string"?o:e.lang.label.close}),s.actions=i.map(({handler:l,noDismiss:u,...f})=>({flat:!0,...f,onClick:typeof l=="function"?()=>{l(),u!==!0&&c()}:()=>{c()}})),s.multiLine===void 0&&(s.multiLine=s.actions.length>1),Object.assign(s.meta,{class:`q-notification row items-stretch q-notification--${s.multiLine===!0?"multi-line":"standard"}`+(s.color!==void 0?` bg-${s.color}`:"")+(s.textColor!==void 0?` text-${s.textColor}`:"")+(s.classes!==void 0?` ${s.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(s.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(s.multiLine===!0?"":" col"),leftClass:s.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...s.attrs}}),s.group===!1?(s.group=void 0,s.meta.group=void 0):((s.group===void 0||s.group===!0)&&(s.group=[s.message,s.caption,s.multiline].concat(s.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),s.meta.group=s.group+"|"+s.position),s.actions.length===0?s.actions=void 0:s.meta.actionsClass="q-notification__actions row items-center "+(s.multiLine===!0?"justify-end":"col-auto")+(s.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),s.meta.uid=n.notif.meta.uid;const l=nn[s.position].value.indexOf(n.notif);nn[s.position].value[l]=s}else{const l=va[s.meta.group];if(l===void 0){if(s.meta.uid=KO++,s.meta.badge=1,["left","right","center"].indexOf(s.position)!==-1)nn[s.position].value.splice(Math.floor(nn[s.position].value.length/2),0,s);else{const u=s.position.indexOf("top")!==-1?"unshift":"push";nn[s.position].value[u](s)}s.group!==void 0&&(va[s.meta.group]=s)}else{if(l.meta.timer&&(clearTimeout(l.meta.timer),l.meta.timer=void 0),s.badgePosition!==void 0){if(YO.includes(s.badgePosition)===!1)return Si("wrong badgePosition",t)}else s.badgePosition=`top-${s.position.indexOf("left")!==-1?"right":"left"}`;s.meta.uid=l.meta.uid,s.meta.badge=l.meta.badge+1,s.meta.badgeClass=`q-notification__badge q-notification__badge--${s.badgePosition}`+(s.badgeColor!==void 0?` bg-${s.badgeColor}`:"")+(s.badgeTextColor!==void 0?` text-${s.badgeTextColor}`:"")+(s.badgeClass?` ${s.badgeClass}`:"");const u=nn[s.position].value.indexOf(l);nn[s.position].value[u]=va[s.meta.group]=s}}const c=()=>{XO(s),r=void 0};if(s.timeout>0&&(s.meta.timer=setTimeout(()=>{s.meta.timer=void 0,c()},s.timeout+1e3)),s.group!==void 0)return l=>{l!==void 0?Si("trying to update a grouped one which is forbidden",t):c()};if(r={dismiss:c,config:t,notif:s},n!==void 0){Object.assign(n,r);return}return l=>{if(r!==void 0)if(l===void 0)r.dismiss();else{const u=Object.assign({},r.config,l,{group:!1,position:s.position});uT(u,e,r)}}}function XO(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=nn[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete va[t.meta.group];const n=lT[String(t.meta.uid)];if(n){const{width:r,height:s}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=s}nn[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function hg(t){return t!=null&&QO.test(t)!==!0}function Si(t,e){return console.error(`Notify: ${t}`,e),!1}function ZO(){return To({name:"QNotifications",devtools:{hide:!0},setup(){return()=>de("div",{class:"q-notifications"},gf.map(t=>de(cb,{key:t,class:cT[t],tag:"div",name:`q-notification--${t}`},()=>nn[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(de(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(de(sc,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(de(wO,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>de("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let i;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const c=[e.message];i=e.caption?[de("div",c),de("div",{class:"q-notification__caption"},[e.caption])]:c}r.push(de("div",o,i))}const s=[de("div",{class:n.contentClass},r)];return e.progress===!0&&s.push(de("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&s.push(de("div",{class:n.actionsClass},e.actions.map(i=>de(zO,i)))),n.badge>1&&s.push(de("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),de("div",{ref:i=>{lT[String(n.uid)]=i},key:n.uid,class:n.class,...n.attrs},[de("div",{class:n.wrapperClass},s)])}))))}})}const ex={setDefaults(t){ao(t)===!0&&Object.assign(ya,t)},registerType(t,e){ao(e)===!0&&(Vi[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>uT(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){gf.forEach(r=>{nn[r]=cn([]);const s=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")!==-1?"top":"bottom",i=r.indexOf("left")!==-1?"start":r.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${i}`;cT[r]=`q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`});const n=GO("q-notify");zb(ZO(),e).mount(n)}}},tx={config:{},plugins:{Notify:ex}},nx="/";async function rx({app:t,router:e,store:n},r){let s=!1;const i=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},o=l=>{if(s=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const u=i(l);u!==null&&(window.location.href=u)},c=window.location.href.replace(window.location.origin,"");for(let l=0;s===!1&&l<r.length;l++)try{await r[l]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:c,publicPath:nx})}catch(u){if(u&&u.url){o(u.url);return}console.error("[Quasar] boot error:",u);return}s!==!0&&(t.use(e),t.mount("#q-app"))}fO(V_,tx).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[e]([at(()=>Promise.resolve().then(()=>uO),void 0),at(()=>import("./toast-hupx2LFM.js"),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");rx(t,s)})});export{ls as A,lx as B,cN as C,G1 as D,tT as E,Kt as F,W_ as G,Gu as H,mc as I,ix as J,Mw as K,We as L,vx as M,yx as N,Tx as O,wx as P,sc as Q,gx as R,qu as S,Sw as T,yr as U,mx as V,px as W,Ex as X,nA as _,hO as a,hx as b,ru as c,Ra as d,ch as e,su as f,ut as g,rn as h,sx as i,wI as j,fx as k,Ww as l,AI as m,Ku as n,t_ as o,ue as p,dx as q,cn as r,Ui as s,Kl as t,tA as u,ox as v,Cw as w,cx as x,ux as y,ax as z};
