(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function u(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(c){if(c.ep)return;c.ep=!0;const d=u(c);fetch(c.href,d)}})();var _r={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function K1(){if(sp)return ol;sp=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function u(o,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var m in c)m!=="key"&&(d[m]=c[m])}else d=c;return c=d.ref,{$$typeof:i,type:o,key:h,ref:c!==void 0?c:null,props:d}}return ol.Fragment=l,ol.jsx=u,ol.jsxs=u,ol}var up;function k1(){return up||(up=1,_r.exports=K1()),_r.exports}var C=k1(),wr={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function J1(){if(op)return lt;op=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function T(E){return E===null||typeof E!="object"?null:(E=S&&E[S]||E["@@iterator"],typeof E=="function"?E:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,U={};function X(E,H,J){this.props=E,this.context=H,this.refs=U,this.updater=J||M}X.prototype.isReactComponent={},X.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},X.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Q(){}Q.prototype=X.prototype;function Y(E,H,J){this.props=E,this.context=H,this.refs=U,this.updater=J||M}var K=Y.prototype=new Q;K.constructor=Y,V(K,X.prototype),K.isPureReactComponent=!0;var B=Array.isArray;function $(){}var q={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function it(E,H,J){var I=J.ref;return{$$typeof:i,type:E,key:H,ref:I!==void 0?I:null,props:J}}function et(E,H){return it(E.type,H,E.props)}function ct(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function vt(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(J){return H[J]})}var $t=/\/+/g;function Yt(E,H){return typeof E=="object"&&E!==null&&E.key!=null?vt(""+E.key):H.toString(36)}function Ut(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then($,$):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function j(E,H,J,I,st){var ft=typeof E;(ft==="undefined"||ft==="boolean")&&(E=null);var Tt=!1;if(E===null)Tt=!0;else switch(ft){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(E.$$typeof){case i:case l:Tt=!0;break;case v:return Tt=E._init,j(Tt(E._payload),H,J,I,st)}}if(Tt)return st=st(E),Tt=I===""?"."+Yt(E,0):I,B(st)?(J="",Tt!=null&&(J=Tt.replace($t,"$&/")+"/"),j(st,H,J,"",function(pa){return pa})):st!=null&&(ct(st)&&(st=et(st,J+(st.key==null||E&&E.key===st.key?"":(""+st.key).replace($t,"$&/")+"/")+Tt)),H.push(st)),1;Tt=0;var se=I===""?".":I+":";if(B(E))for(var Lt=0;Lt<E.length;Lt++)I=E[Lt],ft=se+Yt(I,Lt),Tt+=j(I,H,J,ft,st);else if(Lt=T(E),typeof Lt=="function")for(E=Lt.call(E),Lt=0;!(I=E.next()).done;)I=I.value,ft=se+Yt(I,Lt++),Tt+=j(I,H,J,ft,st);else if(ft==="object"){if(typeof E.then=="function")return j(Ut(E),H,J,I,st);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function k(E,H,J){if(E==null)return E;var I=[],st=0;return j(E,I,"","",function(ft){return H.call(J,ft,st++)}),I}function F(E){if(E._status===-1){var H=E._result;H=H(),H.then(function(J){(E._status===0||E._status===-1)&&(E._status=1,E._result=J)},function(J){(E._status===0||E._status===-1)&&(E._status=2,E._result=J)}),E._status===-1&&(E._status=0,E._result=H)}if(E._status===1)return E._result.default;throw E._result}var ot=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},yt={map:k,forEach:function(E,H,J){k(E,function(){H.apply(this,arguments)},J)},count:function(E){var H=0;return k(E,function(){H++}),H},toArray:function(E){return k(E,function(H){return H})||[]},only:function(E){if(!ct(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return lt.Activity=x,lt.Children=yt,lt.Component=X,lt.Fragment=u,lt.Profiler=c,lt.PureComponent=Y,lt.StrictMode=o,lt.Suspense=g,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,lt.__COMPILER_RUNTIME={__proto__:null,c:function(E){return q.H.useMemoCache(E)}},lt.cache=function(E){return function(){return E.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(E,H,J){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var I=V({},E.props),st=E.key;if(H!=null)for(ft in H.key!==void 0&&(st=""+H.key),H)!G.call(H,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&H.ref===void 0||(I[ft]=H[ft]);var ft=arguments.length-2;if(ft===1)I.children=J;else if(1<ft){for(var Tt=Array(ft),se=0;se<ft;se++)Tt[se]=arguments[se+2];I.children=Tt}return it(E.type,st,I)},lt.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},lt.createElement=function(E,H,J){var I,st={},ft=null;if(H!=null)for(I in H.key!==void 0&&(ft=""+H.key),H)G.call(H,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(st[I]=H[I]);var Tt=arguments.length-2;if(Tt===1)st.children=J;else if(1<Tt){for(var se=Array(Tt),Lt=0;Lt<Tt;Lt++)se[Lt]=arguments[Lt+2];st.children=se}if(E&&E.defaultProps)for(I in Tt=E.defaultProps,Tt)st[I]===void 0&&(st[I]=Tt[I]);return it(E,ft,st)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(E){return{$$typeof:m,render:E}},lt.isValidElement=ct,lt.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:F}},lt.memo=function(E,H){return{$$typeof:p,type:E,compare:H===void 0?null:H}},lt.startTransition=function(E){var H=q.T,J={};q.T=J;try{var I=E(),st=q.S;st!==null&&st(J,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then($,ot)}catch(ft){ot(ft)}finally{H!==null&&J.types!==null&&(H.types=J.types),q.T=H}},lt.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},lt.use=function(E){return q.H.use(E)},lt.useActionState=function(E,H,J){return q.H.useActionState(E,H,J)},lt.useCallback=function(E,H){return q.H.useCallback(E,H)},lt.useContext=function(E){return q.H.useContext(E)},lt.useDebugValue=function(){},lt.useDeferredValue=function(E,H){return q.H.useDeferredValue(E,H)},lt.useEffect=function(E,H){return q.H.useEffect(E,H)},lt.useEffectEvent=function(E){return q.H.useEffectEvent(E)},lt.useId=function(){return q.H.useId()},lt.useImperativeHandle=function(E,H,J){return q.H.useImperativeHandle(E,H,J)},lt.useInsertionEffect=function(E,H){return q.H.useInsertionEffect(E,H)},lt.useLayoutEffect=function(E,H){return q.H.useLayoutEffect(E,H)},lt.useMemo=function(E,H){return q.H.useMemo(E,H)},lt.useOptimistic=function(E,H){return q.H.useOptimistic(E,H)},lt.useReducer=function(E,H,J){return q.H.useReducer(E,H,J)},lt.useRef=function(E){return q.H.useRef(E)},lt.useState=function(E){return q.H.useState(E)},lt.useSyncExternalStore=function(E,H,J){return q.H.useSyncExternalStore(E,H,J)},lt.useTransition=function(){return q.H.useTransition()},lt.version="19.2.6",lt}var rp;function zc(){return rp||(rp=1,wr.exports=J1()),wr.exports}var Z=zc(),Br={exports:{}},rl={},Ur={exports:{}},Lr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function F1(){return cp||(cp=1,(function(i){function l(j,k){var F=j.length;j.push(k);t:for(;0<F;){var ot=F-1>>>1,yt=j[ot];if(0<c(yt,k))j[ot]=k,j[F]=yt,F=ot;else break t}}function u(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var k=j[0],F=j.pop();if(F!==k){j[0]=F;t:for(var ot=0,yt=j.length,E=yt>>>1;ot<E;){var H=2*(ot+1)-1,J=j[H],I=H+1,st=j[I];if(0>c(J,F))I<yt&&0>c(st,J)?(j[ot]=st,j[I]=F,ot=I):(j[ot]=J,j[H]=F,ot=H);else if(I<yt&&0>c(st,F))j[ot]=st,j[I]=F,ot=I;else break t}}return k}function c(j,k){var F=j.sortIndex-k.sortIndex;return F!==0?F:j.id-k.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],p=[],v=1,x=null,S=3,T=!1,M=!1,V=!1,U=!1,X=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function K(j){for(var k=u(p);k!==null;){if(k.callback===null)o(p);else if(k.startTime<=j)o(p),k.sortIndex=k.expirationTime,l(g,k);else break;k=u(p)}}function B(j){if(V=!1,K(j),!M)if(u(g)!==null)M=!0,$||($=!0,vt());else{var k=u(p);k!==null&&Ut(B,k.startTime-j)}}var $=!1,q=-1,G=5,it=-1;function et(){return U?!0:!(i.unstable_now()-it<G)}function ct(){if(U=!1,$){var j=i.unstable_now();it=j;var k=!0;try{t:{M=!1,V&&(V=!1,Q(q),q=-1),T=!0;var F=S;try{e:{for(K(j),x=u(g);x!==null&&!(x.expirationTime>j&&et());){var ot=x.callback;if(typeof ot=="function"){x.callback=null,S=x.priorityLevel;var yt=ot(x.expirationTime<=j);if(j=i.unstable_now(),typeof yt=="function"){x.callback=yt,K(j),k=!0;break e}x===u(g)&&o(g),K(j)}else o(g);x=u(g)}if(x!==null)k=!0;else{var E=u(p);E!==null&&Ut(B,E.startTime-j),k=!1}}break t}finally{x=null,S=F,T=!1}k=void 0}}finally{k?vt():$=!1}}}var vt;if(typeof Y=="function")vt=function(){Y(ct)};else if(typeof MessageChannel<"u"){var $t=new MessageChannel,Yt=$t.port2;$t.port1.onmessage=ct,vt=function(){Yt.postMessage(null)}}else vt=function(){X(ct,0)};function Ut(j,k){q=X(function(){j(i.unstable_now())},k)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(j){switch(S){case 1:case 2:case 3:var k=3;break;default:k=S}var F=S;S=k;try{return j()}finally{S=F}},i.unstable_requestPaint=function(){U=!0},i.unstable_runWithPriority=function(j,k){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=S;S=j;try{return k()}finally{S=F}},i.unstable_scheduleCallback=function(j,k,F){var ot=i.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ot+F:ot):F=ot,j){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=F+yt,j={id:v++,callback:k,priorityLevel:j,startTime:F,expirationTime:yt,sortIndex:-1},F>ot?(j.sortIndex=F,l(p,j),u(g)===null&&j===u(p)&&(V?(Q(q),q=-1):V=!0,Ut(B,F-ot))):(j.sortIndex=yt,l(g,j),M||T||(M=!0,$||($=!0,vt()))),j},i.unstable_shouldYield=et,i.unstable_wrapCallback=function(j){var k=S;return function(){var F=S;S=k;try{return j.apply(this,arguments)}finally{S=F}}}})(Lr)),Lr}var fp;function W1(){return fp||(fp=1,Ur.exports=F1()),Ur.exports}var Hr={exports:{}},le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function $1(){if(hp)return le;hp=1;var i=zc();function l(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(l(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(g,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:g,containerInfo:p,implementation:v}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,le.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return d(g,p,null,v)},le.flushSync=function(g){var p=h.T,v=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=p,o.p=v,o.d.f()}},le.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(g,p))},le.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},le.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,x=m(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,T=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?o.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:T}):v==="script"&&o.d.X(g,{crossOrigin:x,integrity:S,fetchPriority:T,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},le.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);o.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(g)},le.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=m(v,p.crossOrigin);o.d.L(g,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},le.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=m(p.as,p.crossOrigin);o.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(g)},le.requestFormReset=function(g){o.d.r(g)},le.unstable_batchedUpdates=function(g,p){return g(p)},le.useFormState=function(g,p,v){return h.H.useFormState(g,p,v)},le.useFormStatus=function(){return h.H.useHostTransitionStatus()},le.version="19.2.6",le}var dp;function P1(){if(dp)return Hr.exports;dp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Hr.exports=$1(),Hr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function I1(){if(mp)return rl;mp=1;var i=W1(),l=zc(),u=P1();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(o(188))}function p(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,a=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return g(s),t;if(r===a)return g(s),e;r=r.sibling}throw Error(o(188))}if(n.return!==a.return)n=s,a=r;else{for(var f=!1,y=s.child;y;){if(y===n){f=!0,n=s,a=r;break}if(y===a){f=!0,a=s,n=r;break}y=y.sibling}if(!f){for(y=r.child;y;){if(y===n){f=!0,n=r,a=s;break}if(y===a){f=!0,a=r,n=s;break}y=y.sibling}if(!f)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),it=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function vt(t){return t===null||typeof t!="object"?null:(t=ct&&t[ct]||t["@@iterator"],typeof t=="function"?t:null)}var $t=Symbol.for("react.client.reference");function Yt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$t?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case X:return"Profiler";case U:return"StrictMode";case B:return"Suspense";case $:return"SuspenseList";case it:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case Y:return t.displayName||"Context";case Q:return(t._context.displayName||"Context")+".Consumer";case K:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return e=t.displayName||null,e!==null?e:Yt(t.type)||"Memo";case G:e=t._payload,t=t._init;try{return Yt(t(e))}catch{}}return null}var Ut=Array.isArray,j=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ot=[],yt=-1;function E(t){return{current:t}}function H(t){0>yt||(t.current=ot[yt],ot[yt]=null,yt--)}function J(t,e){yt++,ot[yt]=t.current,t.current=e}var I=E(null),st=E(null),ft=E(null),Tt=E(null);function se(t,e){switch(J(ft,e),J(st,t),J(I,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Rm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Rm(e),t=Om(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}H(I),J(I,t)}function Lt(){H(I),H(st),H(ft)}function pa(t){t.memoizedState!==null&&J(Tt,t);var e=I.current,n=Om(e,t.type);e!==n&&(J(st,t),J(I,n))}function El(t){st.current===t&&(H(I),H(st)),Tt.current===t&&(H(Tt),al._currentValue=F)}var pu,lf;function $n(t){if(pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pu=e&&e[1]||"",lf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pu+t+lf}var yu=!1;function gu(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(N){var O=N}Reflect.construct(t,[],L)}else{try{L.call()}catch(N){O=N}t.call(L.prototype)}}else{try{throw Error()}catch(N){O=N}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(N){if(N&&O&&typeof N.stack=="string")return[N.stack,O.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],y=r[1];if(f&&y){var b=f.split(`
`),R=y.split(`
`);for(s=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;s<R.length&&!R[s].includes("DetermineComponentFrameRoot");)s++;if(a===b.length||s===R.length)for(a=b.length-1,s=R.length-1;1<=a&&0<=s&&b[a]!==R[s];)s--;for(;1<=a&&0<=s;a--,s--)if(b[a]!==R[s]){if(a!==1||s!==1)do if(a--,s--,0>s||b[a]!==R[s]){var _=`
`+b[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=s);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?$n(n):""}function Ag(t,e){switch(t.tag){case 26:case 27:case 5:return $n(t.type);case 16:return $n("Lazy");case 13:return t.child!==e&&e!==null?$n("Suspense Fallback"):$n("Suspense");case 19:return $n("SuspenseList");case 0:case 15:return gu(t.type,!1);case 11:return gu(t.type.render,!1);case 1:return gu(t.type,!0);case 31:return $n("Activity");default:return""}}function sf(t){try{var e="",n=null;do e+=Ag(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var vu=Object.prototype.hasOwnProperty,xu=i.unstable_scheduleCallback,Su=i.unstable_cancelCallback,Eg=i.unstable_shouldYield,Mg=i.unstable_requestPaint,ge=i.unstable_now,Dg=i.unstable_getCurrentPriorityLevel,uf=i.unstable_ImmediatePriority,of=i.unstable_UserBlockingPriority,Ml=i.unstable_NormalPriority,Cg=i.unstable_LowPriority,rf=i.unstable_IdlePriority,zg=i.log,Rg=i.unstable_setDisableYieldValue,ya=null,ve=null;function Sn(t){if(typeof zg=="function"&&Rg(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(ya,t)}catch{}}var xe=Math.clz32?Math.clz32:Ng,Og=Math.log,Vg=Math.LN2;function Ng(t){return t>>>=0,t===0?32:31-(Og(t)/Vg|0)|0}var Dl=256,Cl=262144,zl=4194304;function Pn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Rl(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var s=0,r=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var y=a&134217727;return y!==0?(a=y&~r,a!==0?s=Pn(a):(f&=y,f!==0?s=Pn(f):n||(n=y&~t,n!==0&&(s=Pn(n))))):(y=a&~r,y!==0?s=Pn(y):f!==0?s=Pn(f):n||(n=a&~t,n!==0&&(s=Pn(n)))),s===0?0:e!==0&&e!==s&&(e&r)===0&&(r=s&-s,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:s}function ga(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function jg(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(){var t=zl;return zl<<=1,(zl&62914560)===0&&(zl=4194304),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _g(t,e,n,a,s,r){var f=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var y=t.entanglements,b=t.expirationTimes,R=t.hiddenUpdates;for(n=f&~n;0<n;){var _=31-xe(n),L=1<<_;y[_]=0,b[_]=-1;var O=R[_];if(O!==null)for(R[_]=null,_=0;_<O.length;_++){var N=O[_];N!==null&&(N.lane&=-536870913)}n&=~L}a!==0&&ff(t,a,0),r!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=r&~(f&~e))}function ff(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-xe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-xe(n),s=1<<a;s&e|t[a]&e&&(t[a]|=e),n&=~s}}function df(t,e){var n=e&-e;return n=(n&42)!==0?1:Tu(n),(n&(t.suspendedLanes|e))!==0?0:n}function Tu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Au(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function mf(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Im(t.type))}function pf(t,e){var n=k.p;try{return k.p=t,e()}finally{k.p=n}}var bn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+bn,ce="__reactProps$"+bn,Ti="__reactContainer$"+bn,Eu="__reactEvents$"+bn,wg="__reactListeners$"+bn,Bg="__reactHandles$"+bn,yf="__reactResources$"+bn,xa="__reactMarker$"+bn;function Mu(t){delete t[Pt],delete t[ce],delete t[Eu],delete t[wg],delete t[Bg]}function Ai(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[Pt])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function Ei(t){if(t=t[Pt]||t[Ti]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Sa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Mi(t){var e=t[yf];return e||(e=t[yf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[xa]=!0}var gf=new Set,vf={};function In(t,e){Di(t,e),Di(t+"Capture",e)}function Di(t,e){for(vf[t]=e,t=0;t<e.length;t++)gf.add(e[t])}var Ug=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xf={},Sf={};function Lg(t){return vu.call(Sf,t)?!0:vu.call(xf,t)?!1:Ug.test(t)?Sf[t]=!0:(xf[t]=!0,!1)}function Ol(t,e,n){if(Lg(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Vl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function en(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function Re(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hg(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,r=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(f){n=""+f,r.call(this,f)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Du(t){if(!t._valueTracker){var e=bf(t)?"checked":"value";t._valueTracker=Hg(t,e,""+t[e])}}function Tf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=bf(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xg=/[\n"\\]/g;function Oe(t){return t.replace(Xg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Cu(t,e,n,a,s,r,f,y){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Re(e)):t.value!==""+Re(e)&&(t.value=""+Re(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?zu(t,f,Re(e)):n!=null?zu(t,f,Re(n)):a!=null&&t.removeAttribute("value"),s==null&&r!=null&&(t.defaultChecked=!!r),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Re(y):t.removeAttribute("name")}function Af(t,e,n,a,s,r,f,y){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){Du(t);return}n=n!=null?""+Re(n):"",e=e!=null?""+Re(e):n,y||e===t.value||(t.value=e),t.defaultValue=e}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=y?t.checked:!!a,t.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f),Du(t)}function zu(t,e,n){e==="number"&&Nl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Ci(t,e,n,a){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Re(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,a&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ef(t,e,n){if(e!=null&&(e=""+Re(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Re(n):""}function Mf(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(o(92));if(Ut(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Re(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),Du(t)}function zi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Df(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||Yg.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Cf(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var s in e)a=e[s],e.hasOwnProperty(s)&&n[s]!==a&&Df(t,s,a)}else for(var r in e)e.hasOwnProperty(r)&&Df(t,r,e[r])}function Ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(t){return Gg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function nn(){}var Ou=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ri=null,Oi=null;function zf(t){var e=Ei(t);if(e&&(t=e.stateNode)){var n=t[ce]||null;t:switch(t=e.stateNode,e.type){case"input":if(Cu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Oe(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var s=a[ce]||null;if(!s)throw Error(o(90));Cu(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&Tf(a)}break t;case"textarea":Ef(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}}}var Nu=!1;function Rf(t,e,n){if(Nu)return t(e,n);Nu=!0;try{var a=t(e);return a}finally{if(Nu=!1,(Ri!==null||Oi!==null)&&(Ss(),Ri&&(e=Ri,t=Oi,Oi=Ri=null,zf(e),t)))for(e=0;e<t.length;e++)zf(t[e])}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var a=n[ce]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(an)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{ju=!1}var Tn=null,_u=null,_l=null;function Of(){if(_l)return _l;var t,e=_u,n=e.length,a,s="value"in Tn?Tn.value:Tn.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var f=n-t;for(a=1;a<=f&&e[n-a]===s[r-a];a++);return _l=s.slice(t,1<a?1-a:void 0)}function wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function Vf(){return!1}function fe(t){function e(n,a,s,r,f){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(n=t[y],this[y]=n?n(r):r[y]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Bl:Vf,this.isPropagationStopped=Vf,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),e}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=fe(ti),Aa=x({},ti,{view:0,detail:0}),Qg=fe(Aa),wu,Bu,Ea,Ll=x({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(wu=t.screenX-Ea.screenX,Bu=t.screenY-Ea.screenY):Bu=wu=0,Ea=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Nf=fe(Ll),Zg=x({},Ll,{dataTransfer:0}),Kg=fe(Zg),kg=x({},Aa,{relatedTarget:0}),Uu=fe(kg),Jg=x({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),Fg=fe(Jg),Wg=x({},ti,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$g=fe(Wg),Pg=x({},ti,{data:0}),jf=fe(Pg),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ev[t])?!!e[t]:!1}function Lu(){return nv}var iv=x({},Aa,{key:function(t){if(t.key){var e=Ig[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),av=fe(iv),lv=x({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=fe(lv),sv=x({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),uv=fe(sv),ov=x({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=fe(ov),cv=x({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=fe(cv),hv=x({},ti,{newState:0,oldState:0}),dv=fe(hv),mv=[9,13,27,32],Hu=an&&"CompositionEvent"in window,Ma=null;an&&"documentMode"in document&&(Ma=document.documentMode);var pv=an&&"TextEvent"in window&&!Ma,wf=an&&(!Hu||Ma&&8<Ma&&11>=Ma),Bf=" ",Uf=!1;function Lf(t,e){switch(t){case"keyup":return mv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vi=!1;function yv(t,e){switch(t){case"compositionend":return Hf(e);case"keypress":return e.which!==32?null:(Uf=!0,Bf);case"textInput":return t=e.data,t===Bf&&Uf?null:t;default:return null}}function gv(t,e){if(Vi)return t==="compositionend"||!Hu&&Lf(t,e)?(t=Of(),_l=_u=Tn=null,Vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wf&&e.locale!=="ko"?null:e.data;default:return null}}var vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vv[t.type]:e==="textarea"}function Yf(t,e,n,a){Ri?Oi?Oi.push(a):Oi=[a]:Ri=a,e=Cs(e,"onChange"),0<e.length&&(n=new Ul("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Da=null,Ca=null;function xv(t){Am(t,0)}function Hl(t){var e=Sa(t);if(Tf(e))return t}function qf(t,e){if(t==="change")return e}var Gf=!1;if(an){var Xu;if(an){var Yu="oninput"in document;if(!Yu){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),Yu=typeof Qf.oninput=="function"}Xu=Yu}else Xu=!1;Gf=Xu&&(!document.documentMode||9<document.documentMode)}function Zf(){Da&&(Da.detachEvent("onpropertychange",Kf),Ca=Da=null)}function Kf(t){if(t.propertyName==="value"&&Hl(Ca)){var e=[];Yf(e,Ca,t,Vu(t)),Rf(xv,e)}}function Sv(t,e,n){t==="focusin"?(Zf(),Da=e,Ca=n,Da.attachEvent("onpropertychange",Kf)):t==="focusout"&&Zf()}function bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ca)}function Tv(t,e){if(t==="click")return Hl(e)}function Av(t,e){if(t==="input"||t==="change")return Hl(e)}function Ev(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Se=typeof Object.is=="function"?Object.is:Ev;function za(t,e){if(Se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!vu.call(e,s)||!Se(t[s],e[s]))return!1}return!0}function kf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jf(t,e){var n=kf(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=kf(n)}}function Ff(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ff(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Nl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Mv=an&&"documentMode"in document&&11>=document.documentMode,Ni=null,Gu=null,Ra=null,Qu=!1;function $f(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||Ni==null||Ni!==Nl(a)||(a=Ni,"selectionStart"in a&&qu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ra&&za(Ra,a)||(Ra=a,a=Cs(Gu,"onSelect"),0<a.length&&(e=new Ul("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=Ni)))}function ei(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ji={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionrun:ei("Transition","TransitionRun"),transitionstart:ei("Transition","TransitionStart"),transitioncancel:ei("Transition","TransitionCancel"),transitionend:ei("Transition","TransitionEnd")},Zu={},Pf={};an&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function ni(t){if(Zu[t])return Zu[t];if(!ji[t])return t;var e=ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pf)return Zu[t]=e[n];return t}var If=ni("animationend"),th=ni("animationiteration"),eh=ni("animationstart"),Dv=ni("transitionrun"),Cv=ni("transitionstart"),zv=ni("transitioncancel"),nh=ni("transitionend"),ih=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function Ye(t,e){ih.set(t,e),In(e,[t])}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ve=[],_i=0,ku=0;function Yl(){for(var t=_i,e=ku=_i=0;e<t;){var n=Ve[e];Ve[e++]=null;var a=Ve[e];Ve[e++]=null;var s=Ve[e];Ve[e++]=null;var r=Ve[e];if(Ve[e++]=null,a!==null&&s!==null){var f=a.pending;f===null?s.next=s:(s.next=f.next,f.next=s),a.pending=s}r!==0&&ah(n,s,r)}}function ql(t,e,n,a){Ve[_i++]=t,Ve[_i++]=e,Ve[_i++]=n,Ve[_i++]=a,ku|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ju(t,e,n,a){return ql(t,e,n,a),Gl(t)}function ii(t,e){return ql(t,null,null,e),Gl(t)}function ah(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var s=!1,r=t.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(s=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,s&&e!==null&&(s=31-xe(n),t=r.hiddenUpdates,a=t[s],a===null?t[s]=[e]:a.push(e),e.lane=n|536870912),r):null}function Gl(t){if(50<$a)throw $a=0,ar=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var wi={};function Rv(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,n,a){return new Rv(t,e,n,a)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ln(t,e){var n=t.alternate;return n===null?(n=be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function lh(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ql(t,e,n,a,s,r){var f=0;if(a=t,typeof t=="function")Fu(t)&&(f=1);else if(typeof t=="string")f=_1(t,n,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case it:return t=be(31,n,e,s),t.elementType=it,t.lanes=r,t;case V:return ai(n.children,s,r,e);case U:f=8,s|=24;break;case X:return t=be(12,n,e,s|2),t.elementType=X,t.lanes=r,t;case B:return t=be(13,n,e,s),t.elementType=B,t.lanes=r,t;case $:return t=be(19,n,e,s),t.elementType=$,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:f=10;break t;case Q:f=9;break t;case K:f=11;break t;case q:f=14;break t;case G:f=16,a=null;break t}f=29,n=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=be(f,n,e,s),e.elementType=t,e.type=a,e.lanes=r,e}function ai(t,e,n,a){return t=be(7,t,a,e),t.lanes=n,t}function Wu(t,e,n){return t=be(6,t,null,e),t.lanes=n,t}function sh(t){var e=be(18,null,null,0);return e.stateNode=t,e}function $u(t,e,n){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var uh=new WeakMap;function Ne(t,e){if(typeof t=="object"&&t!==null){var n=uh.get(t);return n!==void 0?n:(e={value:t,source:e,stack:sf(e)},uh.set(t,e),e)}return{value:t,source:e,stack:sf(e)}}var Bi=[],Ui=0,Zl=null,Oa=0,je=[],_e=0,An=null,ke=1,Je="";function sn(t,e){Bi[Ui++]=Oa,Bi[Ui++]=Zl,Zl=t,Oa=e}function oh(t,e,n){je[_e++]=ke,je[_e++]=Je,je[_e++]=An,An=t;var a=ke;t=Je;var s=32-xe(a)-1;a&=~(1<<s),n+=1;var r=32-xe(e)+s;if(30<r){var f=s-s%5;r=(a&(1<<f)-1).toString(32),a>>=f,s-=f,ke=1<<32-xe(e)+s|n<<s|a,Je=r+t}else ke=1<<r|n<<s|a,Je=t}function Pu(t){t.return!==null&&(sn(t,1),oh(t,1,0))}function Iu(t){for(;t===Zl;)Zl=Bi[--Ui],Bi[Ui]=null,Oa=Bi[--Ui],Bi[Ui]=null;for(;t===An;)An=je[--_e],je[_e]=null,Je=je[--_e],je[_e]=null,ke=je[--_e],je[_e]=null}function rh(t,e){je[_e++]=ke,je[_e++]=Je,je[_e++]=An,ke=e.id,Je=e.overflow,An=t}var It=null,Ot=null,gt=!1,En=null,we=!1,to=Error(o(519));function Mn(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Va(Ne(e,t)),to}function ch(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[Pt]=t,e[ce]=a,n){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(n=0;n<Ia.length;n++)dt(Ia[n],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),Af(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),Mf(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Cm(e.textContent,n)?(a.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),a.onScroll!=null&&dt("scroll",e),a.onScrollEnd!=null&&dt("scrollend",e),a.onClick!=null&&(e.onclick=nn),e=!0):e=!1,e||Mn(t,!0)}function fh(t){for(It=t.return;It;)switch(It.tag){case 5:case 31:case 13:we=!1;return;case 27:case 3:we=!0;return;default:It=It.return}}function Li(t){if(t!==It)return!1;if(!gt)return fh(t),gt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||xr(t.type,t.memoizedProps)),n=!n),n&&Ot&&Mn(t),fh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Ot=Bm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Ot=Bm(t)}else e===27?(e=Ot,Hn(t.type)?(t=Er,Er=null,Ot=t):Ot=e):Ot=It?Ue(t.stateNode.nextSibling):null;return!0}function li(){Ot=It=null,gt=!1}function eo(){var t=En;return t!==null&&(pe===null?pe=t:pe.push.apply(pe,t),En=null),t}function Va(t){En===null?En=[t]:En.push(t)}var no=E(null),si=null,un=null;function Dn(t,e,n){J(no,e._currentValue),e._currentValue=n}function on(t){t._currentValue=no.current,H(no)}function io(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function ao(t,e,n,a){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var r=s.dependencies;if(r!==null){var f=s.child;r=r.firstContext;t:for(;r!==null;){var y=r;r=s;for(var b=0;b<e.length;b++)if(y.context===e[b]){r.lanes|=n,y=r.alternate,y!==null&&(y.lanes|=n),io(r.return,n,t),a||(f=null);break t}r=y.next}}else if(s.tag===18){if(f=s.return,f===null)throw Error(o(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),io(f,n,t),f=null}else f=s.child;if(f!==null)f.return=s;else for(f=s;f!==null;){if(f===t){f=null;break}if(s=f.sibling,s!==null){s.return=f.return,f=s;break}f=f.return}s=f}}function Hi(t,e,n,a){t=null;for(var s=e,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var f=s.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var y=s.type;Se(s.pendingProps.value,f.value)||(t!==null?t.push(y):t=[y])}}else if(s===Tt.current){if(f=s.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(al):t=[al])}s=s.return}t!==null&&ao(e,t,n,a),e.flags|=262144}function Kl(t){for(t=t.firstContext;t!==null;){if(!Se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ui(t){si=t,un=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function te(t){return hh(si,t)}function kl(t,e){return si===null&&ui(t),hh(t,e)}function hh(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},un===null){if(t===null)throw Error(o(308));un=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else un=un.next=e;return n}var Ov=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Vv=i.unstable_scheduleCallback,Nv=i.unstable_NormalPriority,qt={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lo(){return{controller:new Ov,data:new Map,refCount:0}}function Na(t){t.refCount--,t.refCount===0&&Vv(Nv,function(){t.controller.abort()})}var ja=null,so=0,Xi=0,Yi=null;function jv(t,e){if(ja===null){var n=ja=[];so=0,Xi=cr(),Yi={status:"pending",value:void 0,then:function(a){n.push(a)}}}return so++,e.then(dh,dh),e}function dh(){if(--so===0&&ja!==null){Yi!==null&&(Yi.status="fulfilled");var t=ja;ja=null,Xi=0,Yi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function _v(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(a.status="rejected",a.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),a}var mh=j.S;j.S=function(t,e){$d=ge(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&jv(t,e),mh!==null&&mh(t,e)};var oi=E(null);function uo(){var t=oi.current;return t!==null?t:zt.pooledCache}function Jl(t,e){e===null?J(oi,oi.current):J(oi,e.pool)}function ph(){var t=uo();return t===null?null:{parent:qt._currentValue,pool:t}}var qi=Error(o(460)),oo=Error(o(474)),Fl=Error(o(542)),Wl={then:function(){}};function yh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gh(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(nn,nn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,xh(t),t;default:if(typeof e.status=="string")e.then(nn,nn);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=a}},function(a){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,xh(t),t}throw ci=e,qi}}function ri(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ci=n,qi):n}}var ci=null;function vh(){if(ci===null)throw Error(o(459));var t=ci;return ci=null,t}function xh(t){if(t===qi||t===Fl)throw Error(o(483))}var Gi=null,_a=0;function $l(t){var e=_a;return _a+=1,Gi===null&&(Gi=[]),gh(Gi,t,e)}function wa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pl(t,e){throw e.$$typeof===S?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Sh(t){function e(D,A){if(t){var z=D.deletions;z===null?(D.deletions=[A],D.flags|=16):z.push(A)}}function n(D,A){if(!t)return null;for(;A!==null;)e(D,A),A=A.sibling;return null}function a(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function s(D,A){return D=ln(D,A),D.index=0,D.sibling=null,D}function r(D,A,z){return D.index=z,t?(z=D.alternate,z!==null?(z=z.index,z<A?(D.flags|=67108866,A):z):(D.flags|=67108866,A)):(D.flags|=1048576,A)}function f(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function y(D,A,z,w){return A===null||A.tag!==6?(A=Wu(z,D.mode,w),A.return=D,A):(A=s(A,z),A.return=D,A)}function b(D,A,z,w){var nt=z.type;return nt===V?_(D,A,z.props.children,w,z.key):A!==null&&(A.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===G&&ri(nt)===A.type)?(A=s(A,z.props),wa(A,z),A.return=D,A):(A=Ql(z.type,z.key,z.props,null,D.mode,w),wa(A,z),A.return=D,A)}function R(D,A,z,w){return A===null||A.tag!==4||A.stateNode.containerInfo!==z.containerInfo||A.stateNode.implementation!==z.implementation?(A=$u(z,D.mode,w),A.return=D,A):(A=s(A,z.children||[]),A.return=D,A)}function _(D,A,z,w,nt){return A===null||A.tag!==7?(A=ai(z,D.mode,w,nt),A.return=D,A):(A=s(A,z),A.return=D,A)}function L(D,A,z){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Wu(""+A,D.mode,z),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case T:return z=Ql(A.type,A.key,A.props,null,D.mode,z),wa(z,A),z.return=D,z;case M:return A=$u(A,D.mode,z),A.return=D,A;case G:return A=ri(A),L(D,A,z)}if(Ut(A)||vt(A))return A=ai(A,D.mode,z,null),A.return=D,A;if(typeof A.then=="function")return L(D,$l(A),z);if(A.$$typeof===Y)return L(D,kl(D,A),z);Pl(D,A)}return null}function O(D,A,z,w){var nt=A!==null?A.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return nt!==null?null:y(D,A,""+z,w);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case T:return z.key===nt?b(D,A,z,w):null;case M:return z.key===nt?R(D,A,z,w):null;case G:return z=ri(z),O(D,A,z,w)}if(Ut(z)||vt(z))return nt!==null?null:_(D,A,z,w,null);if(typeof z.then=="function")return O(D,A,$l(z),w);if(z.$$typeof===Y)return O(D,A,kl(D,z),w);Pl(D,z)}return null}function N(D,A,z,w,nt){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return D=D.get(z)||null,y(A,D,""+w,nt);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case T:return D=D.get(w.key===null?z:w.key)||null,b(A,D,w,nt);case M:return D=D.get(w.key===null?z:w.key)||null,R(A,D,w,nt);case G:return w=ri(w),N(D,A,z,w,nt)}if(Ut(w)||vt(w))return D=D.get(z)||null,_(A,D,w,nt,null);if(typeof w.then=="function")return N(D,A,z,$l(w),nt);if(w.$$typeof===Y)return N(D,A,z,kl(A,w),nt);Pl(A,w)}return null}function W(D,A,z,w){for(var nt=null,xt=null,tt=A,rt=A=0,pt=null;tt!==null&&rt<z.length;rt++){tt.index>rt?(pt=tt,tt=null):pt=tt.sibling;var St=O(D,tt,z[rt],w);if(St===null){tt===null&&(tt=pt);break}t&&tt&&St.alternate===null&&e(D,tt),A=r(St,A,rt),xt===null?nt=St:xt.sibling=St,xt=St,tt=pt}if(rt===z.length)return n(D,tt),gt&&sn(D,rt),nt;if(tt===null){for(;rt<z.length;rt++)tt=L(D,z[rt],w),tt!==null&&(A=r(tt,A,rt),xt===null?nt=tt:xt.sibling=tt,xt=tt);return gt&&sn(D,rt),nt}for(tt=a(tt);rt<z.length;rt++)pt=N(tt,D,rt,z[rt],w),pt!==null&&(t&&pt.alternate!==null&&tt.delete(pt.key===null?rt:pt.key),A=r(pt,A,rt),xt===null?nt=pt:xt.sibling=pt,xt=pt);return t&&tt.forEach(function(Qn){return e(D,Qn)}),gt&&sn(D,rt),nt}function at(D,A,z,w){if(z==null)throw Error(o(151));for(var nt=null,xt=null,tt=A,rt=A=0,pt=null,St=z.next();tt!==null&&!St.done;rt++,St=z.next()){tt.index>rt?(pt=tt,tt=null):pt=tt.sibling;var Qn=O(D,tt,St.value,w);if(Qn===null){tt===null&&(tt=pt);break}t&&tt&&Qn.alternate===null&&e(D,tt),A=r(Qn,A,rt),xt===null?nt=Qn:xt.sibling=Qn,xt=Qn,tt=pt}if(St.done)return n(D,tt),gt&&sn(D,rt),nt;if(tt===null){for(;!St.done;rt++,St=z.next())St=L(D,St.value,w),St!==null&&(A=r(St,A,rt),xt===null?nt=St:xt.sibling=St,xt=St);return gt&&sn(D,rt),nt}for(tt=a(tt);!St.done;rt++,St=z.next())St=N(tt,D,rt,St.value,w),St!==null&&(t&&St.alternate!==null&&tt.delete(St.key===null?rt:St.key),A=r(St,A,rt),xt===null?nt=St:xt.sibling=St,xt=St);return t&&tt.forEach(function(Z1){return e(D,Z1)}),gt&&sn(D,rt),nt}function Ct(D,A,z,w){if(typeof z=="object"&&z!==null&&z.type===V&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case T:t:{for(var nt=z.key;A!==null;){if(A.key===nt){if(nt=z.type,nt===V){if(A.tag===7){n(D,A.sibling),w=s(A,z.props.children),w.return=D,D=w;break t}}else if(A.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===G&&ri(nt)===A.type){n(D,A.sibling),w=s(A,z.props),wa(w,z),w.return=D,D=w;break t}n(D,A);break}else e(D,A);A=A.sibling}z.type===V?(w=ai(z.props.children,D.mode,w,z.key),w.return=D,D=w):(w=Ql(z.type,z.key,z.props,null,D.mode,w),wa(w,z),w.return=D,D=w)}return f(D);case M:t:{for(nt=z.key;A!==null;){if(A.key===nt)if(A.tag===4&&A.stateNode.containerInfo===z.containerInfo&&A.stateNode.implementation===z.implementation){n(D,A.sibling),w=s(A,z.children||[]),w.return=D,D=w;break t}else{n(D,A);break}else e(D,A);A=A.sibling}w=$u(z,D.mode,w),w.return=D,D=w}return f(D);case G:return z=ri(z),Ct(D,A,z,w)}if(Ut(z))return W(D,A,z,w);if(vt(z)){if(nt=vt(z),typeof nt!="function")throw Error(o(150));return z=nt.call(z),at(D,A,z,w)}if(typeof z.then=="function")return Ct(D,A,$l(z),w);if(z.$$typeof===Y)return Ct(D,A,kl(D,z),w);Pl(D,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,A!==null&&A.tag===6?(n(D,A.sibling),w=s(A,z),w.return=D,D=w):(n(D,A),w=Wu(z,D.mode,w),w.return=D,D=w),f(D)):n(D,A)}return function(D,A,z,w){try{_a=0;var nt=Ct(D,A,z,w);return Gi=null,nt}catch(tt){if(tt===qi||tt===Fl)throw tt;var xt=be(29,tt,null,D.mode);return xt.lanes=w,xt.return=D,xt}finally{}}}var fi=Sh(!0),bh=Sh(!1),Cn=!1;function ro(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(bt&2)!==0){var s=a.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),a.pending=e,e=Gl(t),ah(t,null,n),e}return ql(t,a,e,n),Gl(t)}function Ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,hf(t,n)}}function fo(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var ho=!1;function Ua(){if(ho){var t=Yi;if(t!==null)throw t}}function La(t,e,n,a){ho=!1;var s=t.updateQueue;Cn=!1;var r=s.firstBaseUpdate,f=s.lastBaseUpdate,y=s.shared.pending;if(y!==null){s.shared.pending=null;var b=y,R=b.next;b.next=null,f===null?r=R:f.next=R,f=b;var _=t.alternate;_!==null&&(_=_.updateQueue,y=_.lastBaseUpdate,y!==f&&(y===null?_.firstBaseUpdate=R:y.next=R,_.lastBaseUpdate=b))}if(r!==null){var L=s.baseState;f=0,_=R=b=null,y=r;do{var O=y.lane&-536870913,N=O!==y.lane;if(N?(mt&O)===O:(a&O)===O){O!==0&&O===Xi&&(ho=!0),_!==null&&(_=_.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var W=t,at=y;O=e;var Ct=n;switch(at.tag){case 1:if(W=at.payload,typeof W=="function"){L=W.call(Ct,L,O);break t}L=W;break t;case 3:W.flags=W.flags&-65537|128;case 0:if(W=at.payload,O=typeof W=="function"?W.call(Ct,L,O):W,O==null)break t;L=x({},L,O);break t;case 2:Cn=!0}}O=y.callback,O!==null&&(t.flags|=64,N&&(t.flags|=8192),N=s.callbacks,N===null?s.callbacks=[O]:N.push(O))}else N={lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},_===null?(R=_=N,b=L):_=_.next=N,f|=O;if(y=y.next,y===null){if(y=s.shared.pending,y===null)break;N=y,y=N.next,N.next=null,s.lastBaseUpdate=N,s.shared.pending=null}}while(!0);_===null&&(b=L),s.baseState=b,s.firstBaseUpdate=R,s.lastBaseUpdate=_,r===null&&(s.shared.lanes=0),_n|=f,t.lanes=f,t.memoizedState=L}}function Th(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Ah(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Th(n[t],e)}var Qi=E(null),Il=E(0);function Eh(t,e){t=gn,J(Il,t),J(Qi,e),gn=t|e.baseLanes}function mo(){J(Il,gn),J(Qi,Qi.current)}function po(){gn=Il.current,H(Qi),H(Il)}var Te=E(null),Be=null;function On(t){var e=t.alternate;J(Ht,Ht.current&1),J(Te,t),Be===null&&(e===null||Qi.current!==null||e.memoizedState!==null)&&(Be=t)}function yo(t){J(Ht,Ht.current),J(Te,t),Be===null&&(Be=t)}function Mh(t){t.tag===22?(J(Ht,Ht.current),J(Te,t),Be===null&&(Be=t)):Vn()}function Vn(){J(Ht,Ht.current),J(Te,Te.current)}function Ae(t){H(Te),Be===t&&(Be=null),H(Ht)}var Ht=E(0);function ts(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Tr(n)||Ar(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rn=0,ut=null,Mt=null,Gt=null,es=!1,Zi=!1,hi=!1,ns=0,Ha=0,Ki=null,wv=0;function _t(){throw Error(o(321))}function go(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Se(t[n],e[n]))return!1;return!0}function vo(t,e,n,a,s,r){return rn=r,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?od:jo,hi=!1,r=n(a,s),hi=!1,Zi&&(r=Ch(e,n,a,s)),Dh(t),r}function Dh(t){j.H=qa;var e=Mt!==null&&Mt.next!==null;if(rn=0,Gt=Mt=ut=null,es=!1,Ha=0,Ki=null,e)throw Error(o(300));t===null||Qt||(t=t.dependencies,t!==null&&Kl(t)&&(Qt=!0))}function Ch(t,e,n,a){ut=t;var s=0;do{if(Zi&&(Ki=null),Ha=0,Zi=!1,25<=s)throw Error(o(301));if(s+=1,Gt=Mt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}j.H=rd,r=e(n,a)}while(Zi);return r}function Bv(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?Xa(e):e,t=t.useState()[0],(Mt!==null?Mt.memoizedState:null)!==t&&(ut.flags|=1024),e}function xo(){var t=ns!==0;return ns=0,t}function So(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function bo(t){if(es){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}es=!1}rn=0,Gt=Mt=ut=null,Zi=!1,Ha=ns=0,Ki=null}function ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?ut.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Xt(){if(Mt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Gt===null?ut.memoizedState:Gt.next;if(e!==null)Gt=e,Mt=t;else{if(t===null)throw ut.alternate===null?Error(o(467)):Error(o(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Gt===null?ut.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function is(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xa(t){var e=Ha;return Ha+=1,Ki===null&&(Ki=[]),t=gh(Ki,t,e),e=ut,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?od:jo),t}function as(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xa(t);if(t.$$typeof===Y)return te(t)}throw Error(o(438,String(t)))}function To(t){var e=null,n=ut.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ut.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=is(),ut.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=et;return e.index++,n}function cn(t,e){return typeof e=="function"?e(t):e}function ls(t){var e=Xt();return Ao(e,Mt,t)}function Ao(t,e,n){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var s=t.baseQueue,r=a.pending;if(r!==null){if(s!==null){var f=s.next;s.next=r.next,r.next=f}e.baseQueue=s=r,a.pending=null}if(r=t.baseState,s===null)t.memoizedState=r;else{e=s.next;var y=f=null,b=null,R=e,_=!1;do{var L=R.lane&-536870913;if(L!==R.lane?(mt&L)===L:(rn&L)===L){var O=R.revertLane;if(O===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),L===Xi&&(_=!0);else if((rn&O)===O){R=R.next,O===Xi&&(_=!0);continue}else L={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(y=b=L,f=r):b=b.next=L,ut.lanes|=O,_n|=O;L=R.action,hi&&n(r,L),r=R.hasEagerState?R.eagerState:n(r,L)}else O={lane:L,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(y=b=O,f=r):b=b.next=O,ut.lanes|=L,_n|=L;R=R.next}while(R!==null&&R!==e);if(b===null?f=r:b.next=y,!Se(r,t.memoizedState)&&(Qt=!0,_&&(n=Yi,n!==null)))throw n;t.memoizedState=r,t.baseState=f,t.baseQueue=b,a.lastRenderedState=r}return s===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Eo(t){var e=Xt(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var a=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var f=s=s.next;do r=t(r,f.action),f=f.next;while(f!==s);Se(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,a]}function zh(t,e,n){var a=ut,s=Xt(),r=gt;if(r){if(n===void 0)throw Error(o(407));n=n()}else n=e();var f=!Se((Mt||s).memoizedState,n);if(f&&(s.memoizedState=n,Qt=!0),s=s.queue,Co(Vh.bind(null,a,s,t),[t]),s.getSnapshot!==e||f||Gt!==null&&Gt.memoizedState.tag&1){if(a.flags|=2048,ki(9,{destroy:void 0},Oh.bind(null,a,s,n,e),null),zt===null)throw Error(o(349));r||(rn&127)!==0||Rh(a,e,n)}return n}function Rh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e=is(),ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Oh(t,e,n,a){e.value=n,e.getSnapshot=a,Nh(e)&&jh(t)}function Vh(t,e,n){return n(function(){Nh(e)&&jh(t)})}function Nh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Se(t,n)}catch{return!0}}function jh(t){var e=ii(t,2);e!==null&&ye(e,t,2)}function Mo(t){var e=ue();if(typeof t=="function"){var n=t;if(t=n(),hi){Sn(!0);try{n()}finally{Sn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:t},e}function _h(t,e,n,a){return t.baseState=n,Ao(t,Mt,typeof a=="function"?a:cn)}function Uv(t,e,n,a,s){if(os(t))throw Error(o(485));if(t=e.action,t!==null){var r={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};j.T!==null?n(!0):r.isTransition=!1,a(r),n=e.pending,n===null?(r.next=e.pending=r,wh(e,r)):(r.next=n.next,e.pending=n.next=r)}}function wh(t,e){var n=e.action,a=e.payload,s=t.state;if(e.isTransition){var r=j.T,f={};j.T=f;try{var y=n(s,a),b=j.S;b!==null&&b(f,y),Bh(t,e,y)}catch(R){Do(t,e,R)}finally{r!==null&&f.types!==null&&(r.types=f.types),j.T=r}}else try{r=n(s,a),Bh(t,e,r)}catch(R){Do(t,e,R)}}function Bh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Uh(t,e,a)},function(a){return Do(t,e,a)}):Uh(t,e,n)}function Uh(t,e,n){e.status="fulfilled",e.value=n,Lh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,wh(t,n)))}function Do(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Lh(e),e=e.next;while(e!==a)}t.action=null}function Lh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Hh(t,e){return e}function Xh(t,e){if(gt){var n=zt.formState;if(n!==null){t:{var a=ut;if(gt){if(Ot){e:{for(var s=Ot,r=we;s.nodeType!==8;){if(!r){s=null;break e}if(s=Ue(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Ot=Ue(s.nextSibling),a=s.data==="F!";break t}}Mn(a)}a=!1}a&&(e=n[0])}}return n=ue(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hh,lastRenderedState:e},n.queue=a,n=ld.bind(null,ut,a),a.dispatch=n,a=Mo(!1),r=No.bind(null,ut,!1,a.queue),a=ue(),s={state:e,dispatch:null,action:t,pending:null},a.queue=s,n=Uv.bind(null,ut,s,r,n),s.dispatch=n,a.memoizedState=t,[e,n,!1]}function Yh(t){var e=Xt();return qh(e,Mt,t)}function qh(t,e,n){if(e=Ao(t,e,Hh)[0],t=ls(cn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Xa(e)}catch(f){throw f===qi?Fl:f}else a=e;e=Xt();var s=e.queue,r=s.dispatch;return n!==e.memoizedState&&(ut.flags|=2048,ki(9,{destroy:void 0},Lv.bind(null,s,n),null)),[a,r,t]}function Lv(t,e){t.action=e}function Gh(t){var e=Xt(),n=Mt;if(n!==null)return qh(e,n,t);Xt(),e=e.memoizedState,n=Xt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function ki(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=ut.updateQueue,e===null&&(e=is(),ut.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Qh(){return Xt().memoizedState}function ss(t,e,n,a){var s=ue();ut.flags|=t,s.memoizedState=ki(1|e,{destroy:void 0},n,a===void 0?null:a)}function us(t,e,n,a){var s=Xt();a=a===void 0?null:a;var r=s.memoizedState.inst;Mt!==null&&a!==null&&go(a,Mt.memoizedState.deps)?s.memoizedState=ki(e,r,n,a):(ut.flags|=t,s.memoizedState=ki(1|e,r,n,a))}function Zh(t,e){ss(8390656,8,t,e)}function Co(t,e){us(2048,8,t,e)}function Hv(t){ut.flags|=4;var e=ut.updateQueue;if(e===null)e=is(),ut.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Kh(t){var e=Xt().memoizedState;return Hv({ref:e,nextImpl:t}),function(){if((bt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function kh(t,e){return us(4,2,t,e)}function Jh(t,e){return us(4,4,t,e)}function Fh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wh(t,e,n){n=n!=null?n.concat([t]):null,us(4,4,Fh.bind(null,e,t),n)}function zo(){}function $h(t,e){var n=Xt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&go(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function Ph(t,e){var n=Xt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&go(e,a[1]))return a[0];if(a=t(),hi){Sn(!0);try{t()}finally{Sn(!1)}}return n.memoizedState=[a,e],a}function Ro(t,e,n){return n===void 0||(rn&1073741824)!==0&&(mt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Id(),ut.lanes|=t,_n|=t,n)}function Ih(t,e,n,a){return Se(n,e)?n:Qi.current!==null?(t=Ro(t,n,a),Se(t,e)||(Qt=!0),t):(rn&42)===0||(rn&1073741824)!==0&&(mt&261930)===0?(Qt=!0,t.memoizedState=n):(t=Id(),ut.lanes|=t,_n|=t,e)}function td(t,e,n,a,s){var r=k.p;k.p=r!==0&&8>r?r:8;var f=j.T,y={};j.T=y,No(t,!1,e,n);try{var b=s(),R=j.S;if(R!==null&&R(y,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var _=_v(b,a);Ya(t,e,_,De(t))}else Ya(t,e,a,De(t))}catch(L){Ya(t,e,{then:function(){},status:"rejected",reason:L},De())}finally{k.p=r,f!==null&&y.types!==null&&(f.types=y.types),j.T=f}}function Xv(){}function Oo(t,e,n,a){if(t.tag!==5)throw Error(o(476));var s=ed(t).queue;td(t,s,e,F,n===null?Xv:function(){return nd(t),n(a)})}function ed(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:F},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function nd(t){var e=ed(t);e.next===null&&(e=t.alternate.memoizedState),Ya(t,e.next.queue,{},De())}function Vo(){return te(al)}function id(){return Xt().memoizedState}function ad(){return Xt().memoizedState}function Yv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=De();t=zn(n);var a=Rn(e,t,n);a!==null&&(ye(a,e,n),Ba(a,e,n)),e={cache:lo()},t.payload=e;return}e=e.return}}function qv(t,e,n){var a=De();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},os(t)?sd(e,n):(n=Ju(t,e,n,a),n!==null&&(ye(n,t,a),ud(n,e,a)))}function ld(t,e,n){var a=De();Ya(t,e,n,a)}function Ya(t,e,n,a){var s={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(os(t))sd(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var f=e.lastRenderedState,y=r(f,n);if(s.hasEagerState=!0,s.eagerState=y,Se(y,f))return ql(t,e,s,0),zt===null&&Yl(),!1}catch{}finally{}if(n=Ju(t,e,s,a),n!==null)return ye(n,t,a),ud(n,e,a),!0}return!1}function No(t,e,n,a){if(a={lane:2,revertLane:cr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},os(t)){if(e)throw Error(o(479))}else e=Ju(t,n,a,2),e!==null&&ye(e,t,2)}function os(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function sd(t,e){Zi=es=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ud(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,hf(t,n)}}var qa={readContext:te,use:as,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};qa.useEffectEvent=_t;var od={readContext:te,use:as,useCallback:function(t,e){return ue().memoizedState=[t,e===void 0?null:e],t},useContext:te,useEffect:Zh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,ss(4194308,4,Fh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ss(4194308,4,t,e)},useInsertionEffect:function(t,e){ss(4,2,t,e)},useMemo:function(t,e){var n=ue();e=e===void 0?null:e;var a=t();if(hi){Sn(!0);try{t()}finally{Sn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=ue();if(n!==void 0){var s=n(e);if(hi){Sn(!0);try{n(e)}finally{Sn(!1)}}}else s=e;return a.memoizedState=a.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},a.queue=t,t=t.dispatch=qv.bind(null,ut,t),[a.memoizedState,t]},useRef:function(t){var e=ue();return t={current:t},e.memoizedState=t},useState:function(t){t=Mo(t);var e=t.queue,n=ld.bind(null,ut,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:zo,useDeferredValue:function(t,e){var n=ue();return Ro(n,t,e)},useTransition:function(){var t=Mo(!1);return t=td.bind(null,ut,t.queue,!0,!1),ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ut,s=ue();if(gt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),zt===null)throw Error(o(349));(mt&127)!==0||Rh(a,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,Zh(Vh.bind(null,a,r,t),[t]),a.flags|=2048,ki(9,{destroy:void 0},Oh.bind(null,a,r,n,e),null),n},useId:function(){var t=ue(),e=zt.identifierPrefix;if(gt){var n=Je,a=ke;n=(a&~(1<<32-xe(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ns++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=wv++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Vo,useFormState:Xh,useActionState:Xh,useOptimistic:function(t){var e=ue();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=No.bind(null,ut,!0,n),n.dispatch=e,[t,e]},useMemoCache:To,useCacheRefresh:function(){return ue().memoizedState=Yv.bind(null,ut)},useEffectEvent:function(t){var e=ue(),n={impl:t};return e.memoizedState=n,function(){if((bt&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},jo={readContext:te,use:as,useCallback:$h,useContext:te,useEffect:Co,useImperativeHandle:Wh,useInsertionEffect:kh,useLayoutEffect:Jh,useMemo:Ph,useReducer:ls,useRef:Qh,useState:function(){return ls(cn)},useDebugValue:zo,useDeferredValue:function(t,e){var n=Xt();return Ih(n,Mt.memoizedState,t,e)},useTransition:function(){var t=ls(cn)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:Xa(t),e]},useSyncExternalStore:zh,useId:id,useHostTransitionStatus:Vo,useFormState:Yh,useActionState:Yh,useOptimistic:function(t,e){var n=Xt();return _h(n,Mt,t,e)},useMemoCache:To,useCacheRefresh:ad};jo.useEffectEvent=Kh;var rd={readContext:te,use:as,useCallback:$h,useContext:te,useEffect:Co,useImperativeHandle:Wh,useInsertionEffect:kh,useLayoutEffect:Jh,useMemo:Ph,useReducer:Eo,useRef:Qh,useState:function(){return Eo(cn)},useDebugValue:zo,useDeferredValue:function(t,e){var n=Xt();return Mt===null?Ro(n,t,e):Ih(n,Mt.memoizedState,t,e)},useTransition:function(){var t=Eo(cn)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:Xa(t),e]},useSyncExternalStore:zh,useId:id,useHostTransitionStatus:Vo,useFormState:Gh,useActionState:Gh,useOptimistic:function(t,e){var n=Xt();return Mt!==null?_h(n,Mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:To,useCacheRefresh:ad};rd.useEffectEvent=Kh;function _o(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:x({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wo={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=De(),s=zn(a);s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,a),e!==null&&(ye(e,t,a),Ba(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=De(),s=zn(a);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,a),e!==null&&(ye(e,t,a),Ba(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),a=zn(n);a.tag=2,e!=null&&(a.callback=e),e=Rn(t,a,n),e!==null&&(ye(e,t,n),Ba(e,t,n))}};function cd(t,e,n,a,s,r,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,r,f):e.prototype&&e.prototype.isPureReactComponent?!za(n,a)||!za(s,r):!0}function fd(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&wo.enqueueReplaceState(e,e.state,null)}function di(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=x({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}function hd(t){Xl(t)}function dd(t){console.error(t)}function md(t){Xl(t)}function rs(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function pd(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Bo(t,e,n){return n=zn(n),n.tag=3,n.payload={element:null},n.callback=function(){rs(t,e)},n}function yd(t){return t=zn(t),t.tag=3,t}function gd(t,e,n,a){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=a.value;t.payload=function(){return s(r)},t.callback=function(){pd(e,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){pd(e,n,a),typeof s!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function Gv(t,e,n,a,s){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&Hi(e,n,s,!0),n=Te.current,n!==null){switch(n.tag){case 31:case 13:return Be===null?bs():n.alternate===null&&wt===0&&(wt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,a===Wl?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),ur(t,a,s)),!1;case 22:return n.flags|=65536,a===Wl?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),ur(t,a,s)),!1}throw Error(o(435,n.tag))}return ur(t,a,s),bs(),!1}if(gt)return e=Te.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,a!==to&&(t=Error(o(422),{cause:a}),Va(Ne(t,n)))):(a!==to&&(e=Error(o(423),{cause:a}),Va(Ne(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,a=Ne(a,n),s=Bo(t.stateNode,a,s),fo(t,s),wt!==4&&(wt=2)),!1;var r=Error(o(520),{cause:a});if(r=Ne(r,n),Wa===null?Wa=[r]:Wa.push(r),wt!==4&&(wt=2),e===null)return!0;a=Ne(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=Bo(n.stateNode,a,t),fo(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=yd(s),gd(s,t,n,a),fo(n,s),!1}n=n.return}while(n!==null);return!1}var Uo=Error(o(461)),Qt=!1;function ee(t,e,n,a){e.child=t===null?bh(e,null,n,a):fi(e,t.child,n,a)}function vd(t,e,n,a,s){n=n.render;var r=e.ref;if("ref"in a){var f={};for(var y in a)y!=="ref"&&(f[y]=a[y])}else f=a;return ui(e),a=vo(t,e,n,f,r,s),y=xo(),t!==null&&!Qt?(So(t,e,s),fn(t,e,s)):(gt&&y&&Pu(e),e.flags|=1,ee(t,e,a,s),e.child)}function xd(t,e,n,a,s){if(t===null){var r=n.type;return typeof r=="function"&&!Fu(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,Sd(t,e,r,a,s)):(t=Ql(n.type,null,a,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Zo(t,s)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(f,a)&&t.ref===e.ref)return fn(t,e,s)}return e.flags|=1,t=ln(r,a),t.ref=e.ref,t.return=e,e.child=t}function Sd(t,e,n,a,s){if(t!==null){var r=t.memoizedProps;if(za(r,a)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=a=r,Zo(t,s))(t.flags&131072)!==0&&(Qt=!0);else return e.lanes=t.lanes,fn(t,e,s)}return Lo(t,e,n,a,s)}function bd(t,e,n,a){var s=a.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,t!==null){for(a=e.child=t.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;a=s&~r}else a=0,e.child=null;return Td(t,e,r,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(e,r!==null?r.cachePool:null),r!==null?Eh(e,r):mo(),Mh(e);else return a=e.lanes=536870912,Td(t,e,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(Jl(e,r.cachePool),Eh(e,r),Vn(),e.memoizedState=null):(t!==null&&Jl(e,null),mo(),Vn());return ee(t,e,s,n),e.child}function Ga(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Td(t,e,n,a,s){var r=uo();return r=r===null?null:{parent:qt._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Jl(e,null),mo(),Mh(e),t!==null&&Hi(t,e,a,!0),e.childLanes=s,null}function cs(t,e){return e=hs({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ad(t,e,n){return fi(e,t.child,null,n),t=cs(e,e.pendingProps),t.flags|=2,Ae(e),e.memoizedState=null,t}function Qv(t,e,n){var a=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(gt){if(a.mode==="hidden")return t=cs(e,a),e.lanes=536870912,Ga(null,t);if(yo(e),(t=Ot)?(t=wm(t,we),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:An!==null?{id:ke,overflow:Je}:null,retryLane:536870912,hydrationErrors:null},n=sh(t),n.return=e,e.child=n,It=e,Ot=null)):t=null,t===null)throw Mn(e);return e.lanes=536870912,null}return cs(e,a)}var r=t.memoizedState;if(r!==null){var f=r.dehydrated;if(yo(e),s)if(e.flags&256)e.flags&=-257,e=Ad(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(Qt||Hi(t,e,n,!1),s=(n&t.childLanes)!==0,Qt||s){if(a=zt,a!==null&&(f=df(a,n),f!==0&&f!==r.retryLane))throw r.retryLane=f,ii(t,f),ye(a,t,f),Uo;bs(),e=Ad(t,e,n)}else t=r.treeContext,Ot=Ue(f.nextSibling),It=e,gt=!0,En=null,we=!1,t!==null&&rh(e,t),e=cs(e,a),e.flags|=4096;return e}return t=ln(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function fs(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Lo(t,e,n,a,s){return ui(e),n=vo(t,e,n,a,void 0,s),a=xo(),t!==null&&!Qt?(So(t,e,s),fn(t,e,s)):(gt&&a&&Pu(e),e.flags|=1,ee(t,e,n,s),e.child)}function Ed(t,e,n,a,s,r){return ui(e),e.updateQueue=null,n=Ch(e,a,n,s),Dh(t),a=xo(),t!==null&&!Qt?(So(t,e,r),fn(t,e,r)):(gt&&a&&Pu(e),e.flags|=1,ee(t,e,n,r),e.child)}function Md(t,e,n,a,s){if(ui(e),e.stateNode===null){var r=wi,f=n.contextType;typeof f=="object"&&f!==null&&(r=te(f)),r=new n(a,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=wo,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=a,r.state=e.memoizedState,r.refs={},ro(e),f=n.contextType,r.context=typeof f=="object"&&f!==null?te(f):wi,r.state=e.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(_o(e,n,f,a),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&wo.enqueueReplaceState(r,r.state,null),La(e,a,r,s),Ua(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){r=e.stateNode;var y=e.memoizedProps,b=di(n,y);r.props=b;var R=r.context,_=n.contextType;f=wi,typeof _=="object"&&_!==null&&(f=te(_));var L=n.getDerivedStateFromProps;_=typeof L=="function"||typeof r.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,_||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(y||R!==f)&&fd(e,r,a,f),Cn=!1;var O=e.memoizedState;r.state=O,La(e,a,r,s),Ua(),R=e.memoizedState,y||O!==R||Cn?(typeof L=="function"&&(_o(e,n,L,a),R=e.memoizedState),(b=Cn||cd(e,n,b,a,O,R,f))?(_||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=R),r.props=a,r.state=R,r.context=f,a=b):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{r=e.stateNode,co(t,e),f=e.memoizedProps,_=di(n,f),r.props=_,L=e.pendingProps,O=r.context,R=n.contextType,b=wi,typeof R=="object"&&R!==null&&(b=te(R)),y=n.getDerivedStateFromProps,(R=typeof y=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==L||O!==b)&&fd(e,r,a,b),Cn=!1,O=e.memoizedState,r.state=O,La(e,a,r,s),Ua();var N=e.memoizedState;f!==L||O!==N||Cn||t!==null&&t.dependencies!==null&&Kl(t.dependencies)?(typeof y=="function"&&(_o(e,n,y,a),N=e.memoizedState),(_=Cn||cd(e,n,_,a,O,N,b)||t!==null&&t.dependencies!==null&&Kl(t.dependencies))?(R||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,N,b),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,N,b)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=N),r.props=a,r.state=N,r.context=b,a=_):(typeof r.componentDidUpdate!="function"||f===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),a=!1)}return r=a,fs(t,e),a=(e.flags&128)!==0,r||a?(r=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&a?(e.child=fi(e,t.child,null,s),e.child=fi(e,null,n,s)):ee(t,e,n,s),e.memoizedState=r.state,t=e.child):t=fn(t,e,s),t}function Dd(t,e,n,a){return li(),e.flags|=256,ee(t,e,n,a),e.child}var Ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xo(t){return{baseLanes:t,cachePool:ph()}}function Yo(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Me),t}function Cd(t,e,n){var a=e.pendingProps,s=!1,r=(e.flags&128)!==0,f;if((f=r)||(f=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),f&&(s=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(gt){if(s?On(e):Vn(),(t=Ot)?(t=wm(t,we),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:An!==null?{id:ke,overflow:Je}:null,retryLane:536870912,hydrationErrors:null},n=sh(t),n.return=e,e.child=n,It=e,Ot=null)):t=null,t===null)throw Mn(e);return Ar(t)?e.lanes=32:e.lanes=536870912,null}var y=a.children;return a=a.fallback,s?(Vn(),s=e.mode,y=hs({mode:"hidden",children:y},s),a=ai(a,s,n,null),y.return=e,a.return=e,y.sibling=a,e.child=y,a=e.child,a.memoizedState=Xo(n),a.childLanes=Yo(t,f,n),e.memoizedState=Ho,Ga(null,a)):(On(e),qo(e,y))}var b=t.memoizedState;if(b!==null&&(y=b.dehydrated,y!==null)){if(r)e.flags&256?(On(e),e.flags&=-257,e=Go(t,e,n)):e.memoizedState!==null?(Vn(),e.child=t.child,e.flags|=128,e=null):(Vn(),y=a.fallback,s=e.mode,a=hs({mode:"visible",children:a.children},s),y=ai(y,s,n,null),y.flags|=2,a.return=e,y.return=e,a.sibling=y,e.child=a,fi(e,t.child,null,n),a=e.child,a.memoizedState=Xo(n),a.childLanes=Yo(t,f,n),e.memoizedState=Ho,e=Ga(null,a));else if(On(e),Ar(y)){if(f=y.nextSibling&&y.nextSibling.dataset,f)var R=f.dgst;f=R,a=Error(o(419)),a.stack="",a.digest=f,Va({value:a,source:null,stack:null}),e=Go(t,e,n)}else if(Qt||Hi(t,e,n,!1),f=(n&t.childLanes)!==0,Qt||f){if(f=zt,f!==null&&(a=df(f,n),a!==0&&a!==b.retryLane))throw b.retryLane=a,ii(t,a),ye(f,t,a),Uo;Tr(y)||bs(),e=Go(t,e,n)}else Tr(y)?(e.flags|=192,e.child=t.child,e=null):(t=b.treeContext,Ot=Ue(y.nextSibling),It=e,gt=!0,En=null,we=!1,t!==null&&rh(e,t),e=qo(e,a.children),e.flags|=4096);return e}return s?(Vn(),y=a.fallback,s=e.mode,b=t.child,R=b.sibling,a=ln(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,R!==null?y=ln(R,y):(y=ai(y,s,n,null),y.flags|=2),y.return=e,a.return=e,a.sibling=y,e.child=a,Ga(null,a),a=e.child,y=t.child.memoizedState,y===null?y=Xo(n):(s=y.cachePool,s!==null?(b=qt._currentValue,s=s.parent!==b?{parent:b,pool:b}:s):s=ph(),y={baseLanes:y.baseLanes|n,cachePool:s}),a.memoizedState=y,a.childLanes=Yo(t,f,n),e.memoizedState=Ho,Ga(t.child,a)):(On(e),n=t.child,t=n.sibling,n=ln(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=n,e.memoizedState=null,n)}function qo(t,e){return e=hs({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function hs(t,e){return t=be(22,t,null,e),t.lanes=0,t}function Go(t,e,n){return fi(e,t.child,null,n),t=qo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zd(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),io(t.return,e,n)}function Qo(t,e,n,a,s,r){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s,treeForkCount:r}:(f.isBackwards=e,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=n,f.tailMode=s,f.treeForkCount=r)}function Rd(t,e,n){var a=e.pendingProps,s=a.revealOrder,r=a.tail;a=a.children;var f=Ht.current,y=(f&2)!==0;if(y?(f=f&1|2,e.flags|=128):f&=1,J(Ht,f),ee(t,e,a,n),a=gt?Oa:0,!y&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zd(t,n,e);else if(t.tag===19)zd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ts(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Qo(e,!1,s,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ts(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Qo(e,!0,n,null,r,a);break;case"together":Qo(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_n|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Hi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Kl(t)))}function Zv(t,e,n){switch(e.tag){case 3:se(e,e.stateNode.containerInfo),Dn(e,qt,t.memoizedState.cache),li();break;case 27:case 5:pa(e);break;case 4:se(e,e.stateNode.containerInfo);break;case 10:Dn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,yo(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(On(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Cd(t,e,n):(On(e),t=fn(t,e,n),t!==null?t.sibling:null);On(e);break;case 19:var s=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(Hi(t,e,n,!1),a=(n&e.childLanes)!==0),s){if(a)return Rd(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),J(Ht,Ht.current),a)break;return null;case 22:return e.lanes=0,bd(t,e,n,e.pendingProps);case 24:Dn(e,qt,t.memoizedState.cache)}return fn(t,e,n)}function Od(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!Zo(t,n)&&(e.flags&128)===0)return Qt=!1,Zv(t,e,n);Qt=(t.flags&131072)!==0}else Qt=!1,gt&&(e.flags&1048576)!==0&&oh(e,Oa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ri(e.elementType),e.type=t,typeof t=="function")Fu(t)?(a=di(t,a),e.tag=1,e=Md(null,e,t,a,n)):(e.tag=0,e=Lo(null,e,t,a,n));else{if(t!=null){var s=t.$$typeof;if(s===K){e.tag=11,e=vd(null,e,t,a,n);break t}else if(s===q){e.tag=14,e=xd(null,e,t,a,n);break t}}throw e=Yt(t)||t,Error(o(306,e,""))}}return e;case 0:return Lo(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,s=di(a,e.pendingProps),Md(t,e,a,s,n);case 3:t:{if(se(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var r=e.memoizedState;s=r.element,co(t,e),La(e,a,null,n);var f=e.memoizedState;if(a=f.cache,Dn(e,qt,a),a!==r.cache&&ao(e,[qt],n,!0),Ua(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Dd(t,e,a,n);break t}else if(a!==s){s=Ne(Error(o(424)),e),Va(s),e=Dd(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ot=Ue(t.firstChild),It=e,gt=!0,En=null,we=!0,n=bh(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(li(),a===s){e=fn(t,e,n);break t}ee(t,e,a,n)}e=e.child}return e;case 26:return fs(t,e),t===null?(n=Ym(e.type,null,e.pendingProps,null))?e.memoizedState=n:gt||(n=e.type,t=e.pendingProps,a=zs(ft.current).createElement(n),a[Pt]=e,a[ce]=t,ne(a,n,t),Ft(a),e.stateNode=a):e.memoizedState=Ym(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return pa(e),t===null&&gt&&(a=e.stateNode=Lm(e.type,e.pendingProps,ft.current),It=e,we=!0,s=Ot,Hn(e.type)?(Er=s,Ot=Ue(a.firstChild)):Ot=s),ee(t,e,e.pendingProps.children,n),fs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&gt&&((s=a=Ot)&&(a=b1(a,e.type,e.pendingProps,we),a!==null?(e.stateNode=a,It=e,Ot=Ue(a.firstChild),we=!1,s=!0):s=!1),s||Mn(e)),pa(e),s=e.type,r=e.pendingProps,f=t!==null?t.memoizedProps:null,a=r.children,xr(s,r)?a=null:f!==null&&xr(s,f)&&(e.flags|=32),e.memoizedState!==null&&(s=vo(t,e,Bv,null,null,n),al._currentValue=s),fs(t,e),ee(t,e,a,n),e.child;case 6:return t===null&&gt&&((t=n=Ot)&&(n=T1(n,e.pendingProps,we),n!==null?(e.stateNode=n,It=e,Ot=null,t=!0):t=!1),t||Mn(e)),null;case 13:return Cd(t,e,n);case 4:return se(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=fi(e,null,a,n):ee(t,e,a,n),e.child;case 11:return vd(t,e,e.type,e.pendingProps,n);case 7:return ee(t,e,e.pendingProps,n),e.child;case 8:return ee(t,e,e.pendingProps.children,n),e.child;case 12:return ee(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,Dn(e,e.type,a.value),ee(t,e,a.children,n),e.child;case 9:return s=e.type._context,a=e.pendingProps.children,ui(e),s=te(s),a=a(s),e.flags|=1,ee(t,e,a,n),e.child;case 14:return xd(t,e,e.type,e.pendingProps,n);case 15:return Sd(t,e,e.type,e.pendingProps,n);case 19:return Rd(t,e,n);case 31:return Qv(t,e,n);case 22:return bd(t,e,n,e.pendingProps);case 24:return ui(e),a=te(qt),t===null?(s=uo(),s===null&&(s=zt,r=lo(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),e.memoizedState={parent:a,cache:s},ro(e),Dn(e,qt,s)):((t.lanes&n)!==0&&(co(t,e),La(e,null,null,n),Ua()),s=t.memoizedState,r=e.memoizedState,s.parent!==a?(s={parent:a,cache:a},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Dn(e,qt,a)):(a=r.cache,Dn(e,qt,a),a!==s.cache&&ao(e,[qt],n,!0))),ee(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function hn(t){t.flags|=4}function Ko(t,e,n,a,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(im())t.flags|=8192;else throw ci=Wl,oo}else t.flags&=-16777217}function Vd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Km(e))if(im())t.flags|=8192;else throw ci=Wl,oo}function ds(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?cf():536870912,t.lanes|=e,$i|=e)}function Qa(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function Kv(t,e,n){var a=e.pendingProps;switch(Iu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return Vt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),on(qt),Lt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Li(e)?hn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,eo())),Vt(e),null;case 26:var s=e.type,r=e.memoizedState;return t===null?(hn(e),r!==null?(Vt(e),Vd(e,r)):(Vt(e),Ko(e,s,null,a,n))):r?r!==t.memoizedState?(hn(e),Vt(e),Vd(e,r)):(Vt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&hn(e),Vt(e),Ko(e,s,t,a,n)),null;case 27:if(El(e),n=ft.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&hn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Vt(e),null}t=I.current,Li(e)?ch(e):(t=Lm(s,a,n),e.stateNode=t,hn(e))}return Vt(e),null;case 5:if(El(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&hn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Vt(e),null}if(r=I.current,Li(e))ch(e);else{var f=zs(ft.current);switch(r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?f.createElement(s,{is:a.is}):f.createElement(s)}}r[Pt]=e,r[ce]=a;t:for(f=e.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break t;for(;f.sibling===null;){if(f.return===null||f.return===e)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}e.stateNode=r;t:switch(ne(r,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&hn(e)}}return Vt(e),Ko(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&hn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=ft.current,Li(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,s=It,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}t[Pt]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Cm(t.nodeValue,n)),t||Mn(e,!0)}else t=zs(t).createTextNode(a),t[Pt]=e,e.stateNode=t}return Vt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=Li(e),n!==null){if(t===null){if(!a)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[Pt]=e}else li(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),t=!1}else n=eo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Ae(e),e):(Ae(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Vt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Li(e),a!==null&&a.dehydrated!==null){if(t===null){if(!s)throw Error(o(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Pt]=e}else li(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else s=eo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Ae(e),e):(Ae(e),null)}return Ae(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==s&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),ds(e,e.updateQueue),Vt(e),null);case 4:return Lt(),t===null&&mr(e.stateNode.containerInfo),Vt(e),null;case 10:return on(e.type),Vt(e),null;case 19:if(H(Ht),a=e.memoizedState,a===null)return Vt(e),null;if(s=(e.flags&128)!==0,r=a.rendering,r===null)if(s)Qa(a,!1);else{if(wt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=ts(t),r!==null){for(e.flags|=128,Qa(a,!1),t=r.updateQueue,e.updateQueue=t,ds(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)lh(n,t),n=n.sibling;return J(Ht,Ht.current&1|2),gt&&sn(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ge()>vs&&(e.flags|=128,s=!0,Qa(a,!1),e.lanes=4194304)}else{if(!s)if(t=ts(r),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,ds(e,t),Qa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!gt)return Vt(e),null}else 2*ge()-a.renderingStartTime>vs&&n!==536870912&&(e.flags|=128,s=!0,Qa(a,!1),e.lanes=4194304);a.isBackwards?(r.sibling=e.child,e.child=r):(t=a.last,t!==null?t.sibling=r:e.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ge(),t.sibling=null,n=Ht.current,J(Ht,s?n&1|2:n&1),gt&&sn(e,a.treeForkCount),t):(Vt(e),null);case 22:case 23:return Ae(e),po(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),n=e.updateQueue,n!==null&&ds(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&H(oi),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),on(qt),Vt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function kv(t,e){switch(Iu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return on(qt),Lt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return El(e),null;case 31:if(e.memoizedState!==null){if(Ae(e),e.alternate===null)throw Error(o(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ae(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(Ht),null;case 4:return Lt(),null;case 10:return on(e.type),null;case 22:case 23:return Ae(e),po(),t!==null&&H(oi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return on(qt),null;case 25:return null;default:return null}}function Nd(t,e){switch(Iu(e),e.tag){case 3:on(qt),Lt();break;case 26:case 27:case 5:El(e);break;case 4:Lt();break;case 31:e.memoizedState!==null&&Ae(e);break;case 13:Ae(e);break;case 19:H(Ht);break;case 10:on(e.type);break;case 22:case 23:Ae(e),po(),t!==null&&H(oi);break;case 24:on(qt)}}function Za(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var s=a.next;n=s;do{if((n.tag&t)===t){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==s)}}catch(y){Et(e,e.return,y)}}function Nn(t,e,n){try{var a=e.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var r=s.next;a=r;do{if((a.tag&t)===t){var f=a.inst,y=f.destroy;if(y!==void 0){f.destroy=void 0,s=e;var b=n,R=y;try{R()}catch(_){Et(s,b,_)}}}a=a.next}while(a!==r)}}catch(_){Et(e,e.return,_)}}function jd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Ah(e,n)}catch(a){Et(t,t.return,a)}}}function _d(t,e,n){n.props=di(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Et(t,e,a)}}function Ka(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(s){Et(t,e,s)}}function Fe(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(s){Et(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Et(t,e,s)}else n.current=null}function wd(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(s){Et(t,t.return,s)}}function ko(t,e,n){try{var a=t.stateNode;p1(a,t.type,n,e),a[ce]=e}catch(s){Et(t,t.return,s)}}function Bd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Hn(t.type)||t.tag===4}function Jo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Bd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Hn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fo(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nn));else if(a!==4&&(a===27&&Hn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Fo(t,e,n),t=t.sibling;t!==null;)Fo(t,e,n),t=t.sibling}function ms(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Hn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(ms(t,e,n),t=t.sibling;t!==null;)ms(t,e,n),t=t.sibling}function Ud(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ne(e,a,n),e[Pt]=t,e[ce]=n}catch(r){Et(t,t.return,r)}}var dn=!1,Zt=!1,Wo=!1,Ld=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function Jv(t,e){if(t=t.containerInfo,gr=ws,t=Wf(t),qu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var f=0,y=-1,b=-1,R=0,_=0,L=t,O=null;e:for(;;){for(var N;L!==n||s!==0&&L.nodeType!==3||(y=f+s),L!==r||a!==0&&L.nodeType!==3||(b=f+a),L.nodeType===3&&(f+=L.nodeValue.length),(N=L.firstChild)!==null;)O=L,L=N;for(;;){if(L===t)break e;if(O===n&&++R===s&&(y=f),O===r&&++_===a&&(b=f),(N=L.nextSibling)!==null)break;L=O,O=L.parentNode}L=N}n=y===-1||b===-1?null:{start:y,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(vr={focusedElem:t,selectionRange:n},ws=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,r=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)s=t[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,n=e,s=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var W=di(n.type,s);t=a.getSnapshotBeforeUpdate(W,r),a.__reactInternalSnapshotBeforeUpdate=t}catch(at){Et(n,n.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)br(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":br(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function Hd(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:pn(t,n),a&4&&Za(5,n);break;case 1:if(pn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(f){Et(n,n.return,f)}else{var s=di(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Et(n,n.return,f)}}a&64&&jd(n),a&512&&Ka(n,n.return);break;case 3:if(pn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Ah(t,e)}catch(f){Et(n,n.return,f)}}break;case 27:e===null&&a&4&&Ud(n);case 26:case 5:pn(t,n),e===null&&a&4&&wd(n),a&512&&Ka(n,n.return);break;case 12:pn(t,n);break;case 31:pn(t,n),a&4&&qd(t,n);break;case 13:pn(t,n),a&4&&Gd(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=i1.bind(null,n),A1(t,n))));break;case 22:if(a=n.memoizedState!==null||dn,!a){e=e!==null&&e.memoizedState!==null||Zt,s=dn;var r=Zt;dn=a,(Zt=e)&&!r?yn(t,n,(n.subtreeFlags&8772)!==0):pn(t,n),dn=s,Zt=r}break;case 30:break;default:pn(t,n)}}function Xd(t){var e=t.alternate;e!==null&&(t.alternate=null,Xd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Mu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,he=!1;function mn(t,e,n){for(n=n.child;n!==null;)Yd(t,e,n),n=n.sibling}function Yd(t,e,n){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 26:Zt||Fe(n,e),mn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zt||Fe(n,e);var a=jt,s=he;Hn(n.type)&&(jt=n.stateNode,he=!1),mn(t,e,n),el(n.stateNode),jt=a,he=s;break;case 5:Zt||Fe(n,e);case 6:if(a=jt,s=he,jt=null,mn(t,e,n),jt=a,he=s,jt!==null)if(he)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(n.stateNode)}catch(r){Et(n,e,r)}else try{jt.removeChild(n.stateNode)}catch(r){Et(n,e,r)}break;case 18:jt!==null&&(he?(t=jt,jm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),la(t)):jm(jt,n.stateNode));break;case 4:a=jt,s=he,jt=n.stateNode.containerInfo,he=!0,mn(t,e,n),jt=a,he=s;break;case 0:case 11:case 14:case 15:Nn(2,n,e),Zt||Nn(4,n,e),mn(t,e,n);break;case 1:Zt||(Fe(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&_d(n,e,a)),mn(t,e,n);break;case 21:mn(t,e,n);break;case 22:Zt=(a=Zt)||n.memoizedState!==null,mn(t,e,n),Zt=a;break;default:mn(t,e,n)}}function qd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{la(t)}catch(n){Et(e,e.return,n)}}}function Gd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{la(t)}catch(n){Et(e,e.return,n)}}function Fv(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ld),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ld),e;default:throw Error(o(435,t.tag))}}function ps(t,e){var n=Fv(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var s=a1.bind(null,t,a);a.then(s,s)}})}function de(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a],r=t,f=e,y=f;t:for(;y!==null;){switch(y.tag){case 27:if(Hn(y.type)){jt=y.stateNode,he=!1;break t}break;case 5:jt=y.stateNode,he=!1;break t;case 3:case 4:jt=y.stateNode.containerInfo,he=!0;break t}y=y.return}if(jt===null)throw Error(o(160));Yd(r,f,s),jt=null,he=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Qd(e,t),e=e.sibling}var qe=null;function Qd(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:de(e,t),me(t),a&4&&(Nn(3,t,t.return),Za(3,t),Nn(5,t,t.return));break;case 1:de(e,t),me(t),a&512&&(Zt||n===null||Fe(n,n.return)),a&64&&dn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var s=qe;if(de(e,t),me(t),a&512&&(Zt||n===null||Fe(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,s=s.ownerDocument||s;e:switch(a){case"title":r=s.getElementsByTagName("title")[0],(!r||r[xa]||r[Pt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(a),s.head.insertBefore(r,s.querySelector("head > title"))),ne(r,a,n),r[Pt]=t,Ft(r),a=r;break t;case"link":var f=Qm("link","href",s).get(a+(n.href||""));if(f){for(var y=0;y<f.length;y++)if(r=f[y],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(y,1);break e}}r=s.createElement(a),ne(r,a,n),s.head.appendChild(r);break;case"meta":if(f=Qm("meta","content",s).get(a+(n.content||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(y,1);break e}}r=s.createElement(a),ne(r,a,n),s.head.appendChild(r);break;default:throw Error(o(468,a))}r[Pt]=t,Ft(r),a=r}t.stateNode=a}else Zm(s,t.type,t.stateNode);else t.stateNode=Gm(s,a,t.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Zm(s,t.type,t.stateNode):Gm(s,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ko(t,t.memoizedProps,n.memoizedProps)}break;case 27:de(e,t),me(t),a&512&&(Zt||n===null||Fe(n,n.return)),n!==null&&a&4&&ko(t,t.memoizedProps,n.memoizedProps);break;case 5:if(de(e,t),me(t),a&512&&(Zt||n===null||Fe(n,n.return)),t.flags&32){s=t.stateNode;try{zi(s,"")}catch(W){Et(t,t.return,W)}}a&4&&t.stateNode!=null&&(s=t.memoizedProps,ko(t,s,n!==null?n.memoizedProps:s)),a&1024&&(Wo=!0);break;case 6:if(de(e,t),me(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(W){Et(t,t.return,W)}}break;case 3:if(Vs=null,s=qe,qe=Rs(e.containerInfo),de(e,t),qe=s,me(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(W){Et(t,t.return,W)}Wo&&(Wo=!1,Zd(t));break;case 4:a=qe,qe=Rs(t.stateNode.containerInfo),de(e,t),me(t),qe=a;break;case 12:de(e,t),me(t);break;case 31:de(e,t),me(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ps(t,a)));break;case 13:de(e,t),me(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(gs=ge()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ps(t,a)));break;case 22:s=t.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,R=dn,_=Zt;if(dn=R||s,Zt=_||b,de(e,t),Zt=_,dn=R,me(t),a&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(n===null||b||dn||Zt||mi(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){b=n=e;try{if(r=b.stateNode,s)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{y=b.stateNode;var L=b.memoizedProps.style,O=L!=null&&L.hasOwnProperty("display")?L.display:null;y.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(W){Et(b,b.return,W)}}}else if(e.tag===6){if(n===null){b=e;try{b.stateNode.nodeValue=s?"":b.memoizedProps}catch(W){Et(b,b.return,W)}}}else if(e.tag===18){if(n===null){b=e;try{var N=b.stateNode;s?_m(N,!0):_m(b.stateNode,!1)}catch(W){Et(b,b.return,W)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ps(t,n))));break;case 19:de(e,t),me(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ps(t,a)));break;case 30:break;case 21:break;default:de(e,t),me(t)}}function me(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(Bd(a)){n=a;break}a=a.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var s=n.stateNode,r=Jo(t);ms(t,r,s);break;case 5:var f=n.stateNode;n.flags&32&&(zi(f,""),n.flags&=-33);var y=Jo(t);ms(t,y,f);break;case 3:case 4:var b=n.stateNode.containerInfo,R=Jo(t);Fo(t,R,b);break;default:throw Error(o(161))}}catch(_){Et(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Zd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function pn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Hd(t,e.alternate,e),e=e.sibling}function mi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Nn(4,e,e.return),mi(e);break;case 1:Fe(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&_d(e,e.return,n),mi(e);break;case 27:el(e.stateNode);case 26:case 5:Fe(e,e.return),mi(e);break;case 22:e.memoizedState===null&&mi(e);break;case 30:mi(e);break;default:mi(e)}t=t.sibling}}function yn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,s=t,r=e,f=r.flags;switch(r.tag){case 0:case 11:case 15:yn(s,r,n),Za(4,r);break;case 1:if(yn(s,r,n),a=r,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(R){Et(a,a.return,R)}if(a=r,s=a.updateQueue,s!==null){var y=a.stateNode;try{var b=s.shared.hiddenCallbacks;if(b!==null)for(s.shared.hiddenCallbacks=null,s=0;s<b.length;s++)Th(b[s],y)}catch(R){Et(a,a.return,R)}}n&&f&64&&jd(r),Ka(r,r.return);break;case 27:Ud(r);case 26:case 5:yn(s,r,n),n&&a===null&&f&4&&wd(r),Ka(r,r.return);break;case 12:yn(s,r,n);break;case 31:yn(s,r,n),n&&f&4&&qd(s,r);break;case 13:yn(s,r,n),n&&f&4&&Gd(s,r);break;case 22:r.memoizedState===null&&yn(s,r,n),Ka(r,r.return);break;case 30:break;default:yn(s,r,n)}e=e.sibling}}function $o(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Na(n))}function Po(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Na(t))}function Ge(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kd(t,e,n,a),e=e.sibling}function Kd(t,e,n,a){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Ge(t,e,n,a),s&2048&&Za(9,e);break;case 1:Ge(t,e,n,a);break;case 3:Ge(t,e,n,a),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Na(t)));break;case 12:if(s&2048){Ge(t,e,n,a),t=e.stateNode;try{var r=e.memoizedProps,f=r.id,y=r.onPostCommit;typeof y=="function"&&y(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(b){Et(e,e.return,b)}}else Ge(t,e,n,a);break;case 31:Ge(t,e,n,a);break;case 13:Ge(t,e,n,a);break;case 23:break;case 22:r=e.stateNode,f=e.alternate,e.memoizedState!==null?r._visibility&2?Ge(t,e,n,a):ka(t,e):r._visibility&2?Ge(t,e,n,a):(r._visibility|=2,Ji(t,e,n,a,(e.subtreeFlags&10256)!==0||!1)),s&2048&&$o(f,e);break;case 24:Ge(t,e,n,a),s&2048&&Po(e.alternate,e);break;default:Ge(t,e,n,a)}}function Ji(t,e,n,a,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,f=e,y=n,b=a,R=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(r,f,y,b,s),Za(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?Ji(r,f,y,b,s):ka(r,f):(_._visibility|=2,Ji(r,f,y,b,s)),s&&R&2048&&$o(f.alternate,f);break;case 24:Ji(r,f,y,b,s),s&&R&2048&&Po(f.alternate,f);break;default:Ji(r,f,y,b,s)}e=e.sibling}}function ka(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,s=a.flags;switch(a.tag){case 22:ka(n,a),s&2048&&$o(a.alternate,a);break;case 24:ka(n,a),s&2048&&Po(a.alternate,a);break;default:ka(n,a)}e=e.sibling}}var Ja=8192;function Fi(t,e,n){if(t.subtreeFlags&Ja)for(t=t.child;t!==null;)kd(t,e,n),t=t.sibling}function kd(t,e,n){switch(t.tag){case 26:Fi(t,e,n),t.flags&Ja&&t.memoizedState!==null&&w1(n,qe,t.memoizedState,t.memoizedProps);break;case 5:Fi(t,e,n);break;case 3:case 4:var a=qe;qe=Rs(t.stateNode.containerInfo),Fi(t,e,n),qe=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Ja,Ja=16777216,Fi(t,e,n),Ja=a):Fi(t,e,n));break;default:Fi(t,e,n)}}function Jd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Fa(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Wt=a,Wd(a,t)}Jd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fd(t),t=t.sibling}function Fd(t){switch(t.tag){case 0:case 11:case 15:Fa(t),t.flags&2048&&Nn(9,t,t.return);break;case 3:Fa(t);break;case 12:Fa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ys(t)):Fa(t);break;default:Fa(t)}}function ys(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Wt=a,Wd(a,t)}Jd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Nn(8,e,e.return),ys(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ys(e));break;default:ys(e)}t=t.sibling}}function Wd(t,e){for(;Wt!==null;){var n=Wt;switch(n.tag){case 0:case 11:case 15:Nn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Na(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Wt=a;else t:for(n=t;Wt!==null;){a=Wt;var s=a.sibling,r=a.return;if(Xd(a),a===n){Wt=null;break t}if(s!==null){s.return=r,Wt=s;break t}Wt=r}}}var Wv={getCacheForType:function(t){var e=te(qt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return te(qt).controller.signal}},$v=typeof WeakMap=="function"?WeakMap:Map,bt=0,zt=null,ht=null,mt=0,At=0,Ee=null,jn=!1,Wi=!1,Io=!1,gn=0,wt=0,_n=0,pi=0,tr=0,Me=0,$i=0,Wa=null,pe=null,er=!1,gs=0,$d=0,vs=1/0,xs=null,wn=null,kt=0,Bn=null,Pi=null,vn=0,nr=0,ir=null,Pd=null,$a=0,ar=null;function De(){return(bt&2)!==0&&mt!==0?mt&-mt:j.T!==null?cr():mf()}function Id(){if(Me===0)if((mt&536870912)===0||gt){var t=Cl;Cl<<=1,(Cl&3932160)===0&&(Cl=262144),Me=t}else Me=536870912;return t=Te.current,t!==null&&(t.flags|=32),Me}function ye(t,e,n){(t===zt&&(At===2||At===9)||t.cancelPendingCommit!==null)&&(Ii(t,0),Un(t,mt,Me,!1)),va(t,n),((bt&2)===0||t!==zt)&&(t===zt&&((bt&2)===0&&(pi|=n),wt===4&&Un(t,mt,Me,!1)),We(t))}function tm(t,e,n){if((bt&6)!==0)throw Error(o(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||ga(t,e),s=a?t1(t,e):sr(t,e,!0),r=a;do{if(s===0){Wi&&!a&&Un(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!Pv(n)){s=sr(t,e,!1),r=!1;continue}if(s===2){if(r=e,t.errorRecoveryDisabledLanes&r)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var y=t;s=Wa;var b=y.current.memoizedState.isDehydrated;if(b&&(Ii(y,f).flags|=256),f=sr(y,f,!1),f!==2){if(Io&&!b){y.errorRecoveryDisabledLanes|=r,pi|=r,s=4;break t}r=pe,pe=s,r!==null&&(pe===null?pe=r:pe.push.apply(pe,r))}s=f}if(r=!1,s!==2)continue}}if(s===1){Ii(t,0),Un(t,e,0,!0);break}t:{switch(a=t,r=s,r){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Un(a,e,Me,!jn);break t;case 2:pe=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(s=gs+300-ge(),10<s)){if(Un(a,e,Me,!jn),Rl(a,0,!0)!==0)break t;vn=e,a.timeoutHandle=Vm(em.bind(null,a,n,pe,xs,er,e,Me,pi,$i,jn,r,"Throttled",-0,0),s);break t}em(a,n,pe,xs,er,e,Me,pi,$i,jn,r,null,-0,0)}}break}while(!0);We(t)}function em(t,e,n,a,s,r,f,y,b,R,_,L,O,N){if(t.timeoutHandle=-1,L=e.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},kd(e,r,L);var W=(r&62914560)===r?gs-ge():(r&4194048)===r?$d-ge():0;if(W=B1(L,W),W!==null){vn=r,t.cancelPendingCommit=W(rm.bind(null,t,e,r,n,a,s,f,y,b,_,L,null,O,N)),Un(t,r,f,!R);return}}rm(t,e,r,n,a,s,f,y,b)}function Pv(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var s=n[a],r=s.getSnapshot;s=s.value;try{if(!Se(r(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e,n,a){e&=~tr,e&=~pi,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var s=e;0<s;){var r=31-xe(s),f=1<<r;a[r]=-1,s&=~f}n!==0&&ff(t,n,e)}function Ss(){return(bt&6)===0?(Pa(0),!1):!0}function lr(){if(ht!==null){if(At===0)var t=ht.return;else t=ht,un=si=null,bo(t),Gi=null,_a=0,t=ht;for(;t!==null;)Nd(t.alternate,t),t=t.return;ht=null}}function Ii(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,v1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),vn=0,lr(),zt=t,ht=n=ln(t.current,null),mt=e,At=0,Ee=null,jn=!1,Wi=ga(t,e),Io=!1,$i=Me=tr=pi=_n=wt=0,pe=Wa=null,er=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var s=31-xe(a),r=1<<s;e|=t[s],a&=~r}return gn=e,Yl(),n}function nm(t,e){ut=null,j.H=qa,e===qi||e===Fl?(e=vh(),At=3):e===oo?(e=vh(),At=4):At=e===Uo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,ht===null&&(wt=1,rs(t,Ne(e,t.current)))}function im(){var t=Te.current;return t===null?!0:(mt&4194048)===mt?Be===null:(mt&62914560)===mt||(mt&536870912)!==0?t===Be:!1}function am(){var t=j.H;return j.H=qa,t===null?qa:t}function lm(){var t=j.A;return j.A=Wv,t}function bs(){wt=4,jn||(mt&4194048)!==mt&&Te.current!==null||(Wi=!0),(_n&134217727)===0&&(pi&134217727)===0||zt===null||Un(zt,mt,Me,!1)}function sr(t,e,n){var a=bt;bt|=2;var s=am(),r=lm();(zt!==t||mt!==e)&&(xs=null,Ii(t,e)),e=!1;var f=wt;t:do try{if(At!==0&&ht!==null){var y=ht,b=Ee;switch(At){case 8:lr(),f=6;break t;case 3:case 2:case 9:case 6:Te.current===null&&(e=!0);var R=At;if(At=0,Ee=null,ta(t,y,b,R),n&&Wi){f=0;break t}break;default:R=At,At=0,Ee=null,ta(t,y,b,R)}}Iv(),f=wt;break}catch(_){nm(t,_)}while(!0);return e&&t.shellSuspendCounter++,un=si=null,bt=a,j.H=s,j.A=r,ht===null&&(zt=null,mt=0,Yl()),f}function Iv(){for(;ht!==null;)sm(ht)}function t1(t,e){var n=bt;bt|=2;var a=am(),s=lm();zt!==t||mt!==e?(xs=null,vs=ge()+500,Ii(t,e)):Wi=ga(t,e);t:do try{if(At!==0&&ht!==null){e=ht;var r=Ee;e:switch(At){case 1:At=0,Ee=null,ta(t,e,r,1);break;case 2:case 9:if(yh(r)){At=0,Ee=null,um(e);break}e=function(){At!==2&&At!==9||zt!==t||(At=7),We(t)},r.then(e,e);break t;case 3:At=7;break t;case 4:At=5;break t;case 7:yh(r)?(At=0,Ee=null,um(e)):(At=0,Ee=null,ta(t,e,r,7));break;case 5:var f=null;switch(ht.tag){case 26:f=ht.memoizedState;case 5:case 27:var y=ht;if(f?Km(f):y.stateNode.complete){At=0,Ee=null;var b=y.sibling;if(b!==null)ht=b;else{var R=y.return;R!==null?(ht=R,Ts(R)):ht=null}break e}}At=0,Ee=null,ta(t,e,r,5);break;case 6:At=0,Ee=null,ta(t,e,r,6);break;case 8:lr(),wt=6;break t;default:throw Error(o(462))}}e1();break}catch(_){nm(t,_)}while(!0);return un=si=null,j.H=a,j.A=s,bt=n,ht!==null?0:(zt=null,mt=0,Yl(),wt)}function e1(){for(;ht!==null&&!Eg();)sm(ht)}function sm(t){var e=Od(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?Ts(t):ht=e}function um(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ed(n,e,e.pendingProps,e.type,void 0,mt);break;case 11:e=Ed(n,e,e.pendingProps,e.type.render,e.ref,mt);break;case 5:bo(e);default:Nd(n,e),e=ht=lh(e,gn),e=Od(n,e,gn)}t.memoizedProps=t.pendingProps,e===null?Ts(t):ht=e}function ta(t,e,n,a){un=si=null,bo(e),Gi=null,_a=0;var s=e.return;try{if(Gv(t,s,e,n,mt)){wt=1,rs(t,Ne(n,t.current)),ht=null;return}}catch(r){if(s!==null)throw ht=s,r;wt=1,rs(t,Ne(n,t.current)),ht=null;return}e.flags&32768?(gt||a===1?t=!0:Wi||(mt&536870912)!==0?t=!1:(jn=t=!0,(a===2||a===9||a===3||a===6)&&(a=Te.current,a!==null&&a.tag===13&&(a.flags|=16384))),om(e,t)):Ts(e)}function Ts(t){var e=t;do{if((e.flags&32768)!==0){om(e,jn);return}t=e.return;var n=Kv(e.alternate,e,gn);if(n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);wt===0&&(wt=5)}function om(t,e){do{var n=kv(t.alternate,t);if(n!==null){n.flags&=32767,ht=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ht=t;return}ht=t=n}while(t!==null);wt=6,ht=null}function rm(t,e,n,a,s,r,f,y,b){t.cancelPendingCommit=null;do As();while(kt!==0);if((bt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(r=e.lanes|e.childLanes,r|=ku,_g(t,n,r,f,y,b),t===zt&&(ht=zt=null,mt=0),Pi=e,Bn=t,vn=n,nr=r,ir=s,Pd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,l1(Ml,function(){return mm(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,s=k.p,k.p=2,f=bt,bt|=4;try{Jv(t,e,n)}finally{bt=f,k.p=s,j.T=a}}kt=1,cm(),fm(),hm()}}function cm(){if(kt===1){kt=0;var t=Bn,e=Pi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var a=k.p;k.p=2;var s=bt;bt|=4;try{Qd(e,t);var r=vr,f=Wf(t.containerInfo),y=r.focusedElem,b=r.selectionRange;if(f!==y&&y&&y.ownerDocument&&Ff(y.ownerDocument.documentElement,y)){if(b!==null&&qu(y)){var R=b.start,_=b.end;if(_===void 0&&(_=R),"selectionStart"in y)y.selectionStart=R,y.selectionEnd=Math.min(_,y.value.length);else{var L=y.ownerDocument||document,O=L&&L.defaultView||window;if(O.getSelection){var N=O.getSelection(),W=y.textContent.length,at=Math.min(b.start,W),Ct=b.end===void 0?at:Math.min(b.end,W);!N.extend&&at>Ct&&(f=Ct,Ct=at,at=f);var D=Jf(y,at),A=Jf(y,Ct);if(D&&A&&(N.rangeCount!==1||N.anchorNode!==D.node||N.anchorOffset!==D.offset||N.focusNode!==A.node||N.focusOffset!==A.offset)){var z=L.createRange();z.setStart(D.node,D.offset),N.removeAllRanges(),at>Ct?(N.addRange(z),N.extend(A.node,A.offset)):(z.setEnd(A.node,A.offset),N.addRange(z))}}}}for(L=[],N=y;N=N.parentNode;)N.nodeType===1&&L.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<L.length;y++){var w=L[y];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}ws=!!gr,vr=gr=null}finally{bt=s,k.p=a,j.T=n}}t.current=e,kt=2}}function fm(){if(kt===2){kt=0;var t=Bn,e=Pi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var a=k.p;k.p=2;var s=bt;bt|=4;try{Hd(t,e.alternate,e)}finally{bt=s,k.p=a,j.T=n}}kt=3}}function hm(){if(kt===4||kt===3){kt=0,Mg();var t=Bn,e=Pi,n=vn,a=Pd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?kt=5:(kt=0,Pi=Bn=null,dm(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(wn=null),Au(n),e=e.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(ya,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=j.T,s=k.p,k.p=2,j.T=null;try{for(var r=t.onRecoverableError,f=0;f<a.length;f++){var y=a[f];r(y.value,{componentStack:y.stack})}}finally{j.T=e,k.p=s}}(vn&3)!==0&&As(),We(t),s=t.pendingLanes,(n&261930)!==0&&(s&42)!==0?t===ar?$a++:($a=0,ar=t):$a=0,Pa(0)}}function dm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Na(e)))}function As(){return cm(),fm(),hm(),mm()}function mm(){if(kt!==5)return!1;var t=Bn,e=nr;nr=0;var n=Au(vn),a=j.T,s=k.p;try{k.p=32>n?32:n,j.T=null,n=ir,ir=null;var r=Bn,f=vn;if(kt=0,Pi=Bn=null,vn=0,(bt&6)!==0)throw Error(o(331));var y=bt;if(bt|=4,Fd(r.current),Kd(r,r.current,f,n),bt=y,Pa(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(ya,r)}catch{}return!0}finally{k.p=s,j.T=a,dm(t,e)}}function pm(t,e,n){e=Ne(n,e),e=Bo(t.stateNode,e,2),t=Rn(t,e,2),t!==null&&(va(t,2),We(t))}function Et(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wn===null||!wn.has(a))){t=Ne(n,t),n=yd(2),a=Rn(e,n,2),a!==null&&(gd(n,a,e,t),va(a,2),We(a));break}}e=e.return}}function ur(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new $v;var s=new Set;a.set(e,s)}else s=a.get(e),s===void 0&&(s=new Set,a.set(e,s));s.has(n)||(Io=!0,s.add(n),t=n1.bind(null,t,e,n),e.then(t,t))}function n1(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,zt===t&&(mt&n)===n&&(wt===4||wt===3&&(mt&62914560)===mt&&300>ge()-gs?(bt&2)===0&&Ii(t,0):tr|=n,$i===mt&&($i=0)),We(t)}function ym(t,e){e===0&&(e=cf()),t=ii(t,e),t!==null&&(va(t,e),We(t))}function i1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ym(t,n)}function a1(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),ym(t,n)}function l1(t,e){return xu(t,e)}var Es=null,ea=null,or=!1,Ms=!1,rr=!1,Ln=0;function We(t){t!==ea&&t.next===null&&(ea===null?Es=ea=t:ea=ea.next=t),Ms=!0,or||(or=!0,u1())}function Pa(t,e){if(!rr&&Ms){rr=!0;do for(var n=!1,a=Es;a!==null;){if(t!==0){var s=a.pendingLanes;if(s===0)var r=0;else{var f=a.suspendedLanes,y=a.pingedLanes;r=(1<<31-xe(42|t)+1)-1,r&=s&~(f&~y),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Sm(a,r))}else r=mt,r=Rl(a,a===zt?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||ga(a,r)||(n=!0,Sm(a,r));a=a.next}while(n);rr=!1}}function s1(){gm()}function gm(){Ms=or=!1;var t=0;Ln!==0&&g1()&&(t=Ln);for(var e=ge(),n=null,a=Es;a!==null;){var s=a.next,r=vm(a,e);r===0?(a.next=null,n===null?Es=s:n.next=s,s===null&&(ea=n)):(n=a,(t!==0||(r&3)!==0)&&(Ms=!0)),a=s}kt!==0&&kt!==5||Pa(t),Ln!==0&&(Ln=0)}function vm(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var f=31-xe(r),y=1<<f,b=s[f];b===-1?((y&n)===0||(y&a)!==0)&&(s[f]=jg(y,e)):b<=e&&(t.expiredLanes|=y),r&=~y}if(e=zt,n=mt,n=Rl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(At===2||At===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Su(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ga(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Su(a),Au(n)){case 2:case 8:n=of;break;case 32:n=Ml;break;case 268435456:n=rf;break;default:n=Ml}return a=xm.bind(null,t),n=xu(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Su(a),t.callbackPriority=2,t.callbackNode=null,2}function xm(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var a=mt;return a=Rl(t,t===zt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(tm(t,a,e),vm(t,ge()),t.callbackNode!=null&&t.callbackNode===n?xm.bind(null,t):null)}function Sm(t,e){if(As())return null;tm(t,e,!0)}function u1(){x1(function(){(bt&6)!==0?xu(uf,s1):gm()})}function cr(){if(Ln===0){var t=Xi;t===0&&(t=Dl,Dl<<=1,(Dl&261888)===0&&(Dl=256)),Ln=t}return Ln}function bm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jl(""+t)}function Tm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function o1(t,e,n,a,s){if(e==="submit"&&n&&n.stateNode===s){var r=bm((s[ce]||null).action),f=a.submitter;f&&(e=(e=f[ce]||null)?bm(e.formAction):f.getAttribute("formAction"),e!==null&&(r=e,f=null));var y=new Ul("action","action",null,a,s);t.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ln!==0){var b=f?Tm(s,f):new FormData(s);Oo(n,{pending:!0,data:b,method:s.method,action:r},null,b)}}else typeof r=="function"&&(y.preventDefault(),b=f?Tm(s,f):new FormData(s),Oo(n,{pending:!0,data:b,method:s.method,action:r},r,b))},currentTarget:s}]})}}for(var fr=0;fr<Ku.length;fr++){var hr=Ku[fr],r1=hr.toLowerCase(),c1=hr[0].toUpperCase()+hr.slice(1);Ye(r1,"on"+c1)}Ye(If,"onAnimationEnd"),Ye(th,"onAnimationIteration"),Ye(eh,"onAnimationStart"),Ye("dblclick","onDoubleClick"),Ye("focusin","onFocus"),Ye("focusout","onBlur"),Ye(Dv,"onTransitionRun"),Ye(Cv,"onTransitionStart"),Ye(zv,"onTransitionCancel"),Ye(nh,"onTransitionEnd"),Di("onMouseEnter",["mouseout","mouseover"]),Di("onMouseLeave",["mouseout","mouseover"]),Di("onPointerEnter",["pointerout","pointerover"]),Di("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ia));function Am(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],s=a.event;a=a.listeners;t:{var r=void 0;if(e)for(var f=a.length-1;0<=f;f--){var y=a[f],b=y.instance,R=y.currentTarget;if(y=y.listener,b!==r&&s.isPropagationStopped())break t;r=y,s.currentTarget=R;try{r(s)}catch(_){Xl(_)}s.currentTarget=null,r=b}else for(f=0;f<a.length;f++){if(y=a[f],b=y.instance,R=y.currentTarget,y=y.listener,b!==r&&s.isPropagationStopped())break t;r=y,s.currentTarget=R;try{r(s)}catch(_){Xl(_)}s.currentTarget=null,r=b}}}}function dt(t,e){var n=e[Eu];n===void 0&&(n=e[Eu]=new Set);var a=t+"__bubble";n.has(a)||(Em(e,t,2,!1),n.add(a))}function dr(t,e,n){var a=0;e&&(a|=4),Em(n,t,a,e)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function mr(t){if(!t[Ds]){t[Ds]=!0,gf.forEach(function(n){n!=="selectionchange"&&(f1.has(n)||dr(n,!1,t),dr(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ds]||(e[Ds]=!0,dr("selectionchange",!1,e))}}function Em(t,e,n,a){switch(Im(e)){case 2:var s=H1;break;case 8:s=X1;break;default:s=Rr}n=s.bind(null,e,n,t),s=void 0,!ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),a?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function pr(t,e,n,a,s){var r=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var y=a.stateNode.containerInfo;if(y===s)break;if(f===4)for(f=a.return;f!==null;){var b=f.tag;if((b===3||b===4)&&f.stateNode.containerInfo===s)return;f=f.return}for(;y!==null;){if(f=Ai(y),f===null)return;if(b=f.tag,b===5||b===6||b===26||b===27){a=r=f;continue t}y=y.parentNode}}a=a.return}Rf(function(){var R=r,_=Vu(n),L=[];t:{var O=ih.get(t);if(O!==void 0){var N=Ul,W=t;switch(t){case"keypress":if(wl(n)===0)break t;case"keydown":case"keyup":N=av;break;case"focusin":W="focus",N=Uu;break;case"focusout":W="blur",N=Uu;break;case"beforeblur":case"afterblur":N=Uu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=uv;break;case If:case th:case eh:N=Fg;break;case nh:N=rv;break;case"scroll":case"scrollend":N=Qg;break;case"wheel":N=fv;break;case"copy":case"cut":case"paste":N=$g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=_f;break;case"toggle":case"beforetoggle":N=dv}var at=(e&4)!==0,Ct=!at&&(t==="scroll"||t==="scrollend"),D=at?O!==null?O+"Capture":null:O;at=[];for(var A=R,z;A!==null;){var w=A;if(z=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||z===null||D===null||(w=ba(A,D),w!=null&&at.push(tl(A,w,z))),Ct)break;A=A.return}0<at.length&&(O=new N(O,W,null,n,_),L.push({event:O,listeners:at}))}}if((e&7)===0){t:{if(O=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",O&&n!==Ou&&(W=n.relatedTarget||n.fromElement)&&(Ai(W)||W[Ti]))break t;if((N||O)&&(O=_.window===_?_:(O=_.ownerDocument)?O.defaultView||O.parentWindow:window,N?(W=n.relatedTarget||n.toElement,N=R,W=W?Ai(W):null,W!==null&&(Ct=d(W),at=W.tag,W!==Ct||at!==5&&at!==27&&at!==6)&&(W=null)):(N=null,W=R),N!==W)){if(at=Nf,w="onMouseLeave",D="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(at=_f,w="onPointerLeave",D="onPointerEnter",A="pointer"),Ct=N==null?O:Sa(N),z=W==null?O:Sa(W),O=new at(w,A+"leave",N,n,_),O.target=Ct,O.relatedTarget=z,w=null,Ai(_)===R&&(at=new at(D,A+"enter",W,n,_),at.target=z,at.relatedTarget=Ct,w=at),Ct=w,N&&W)e:{for(at=h1,D=N,A=W,z=0,w=D;w;w=at(w))z++;w=0;for(var nt=A;nt;nt=at(nt))w++;for(;0<z-w;)D=at(D),z--;for(;0<w-z;)A=at(A),w--;for(;z--;){if(D===A||A!==null&&D===A.alternate){at=D;break e}D=at(D),A=at(A)}at=null}else at=null;N!==null&&Mm(L,O,N,at,!1),W!==null&&Ct!==null&&Mm(L,Ct,W,at,!0)}}t:{if(O=R?Sa(R):window,N=O.nodeName&&O.nodeName.toLowerCase(),N==="select"||N==="input"&&O.type==="file")var xt=qf;else if(Xf(O))if(Gf)xt=Av;else{xt=bv;var tt=Sv}else N=O.nodeName,!N||N.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?R&&Ru(R.elementType)&&(xt=qf):xt=Tv;if(xt&&(xt=xt(t,R))){Yf(L,xt,n,_);break t}tt&&tt(t,O,R),t==="focusout"&&R&&O.type==="number"&&R.memoizedProps.value!=null&&zu(O,"number",O.value)}switch(tt=R?Sa(R):window,t){case"focusin":(Xf(tt)||tt.contentEditable==="true")&&(Ni=tt,Gu=R,Ra=null);break;case"focusout":Ra=Gu=Ni=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,$f(L,n,_);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":$f(L,n,_)}var rt;if(Hu)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Vi?Lf(t,n)&&(pt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(pt="onCompositionStart");pt&&(wf&&n.locale!=="ko"&&(Vi||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Vi&&(rt=Of()):(Tn=_,_u="value"in Tn?Tn.value:Tn.textContent,Vi=!0)),tt=Cs(R,pt),0<tt.length&&(pt=new jf(pt,t,null,n,_),L.push({event:pt,listeners:tt}),rt?pt.data=rt:(rt=Hf(n),rt!==null&&(pt.data=rt)))),(rt=pv?yv(t,n):gv(t,n))&&(pt=Cs(R,"onBeforeInput"),0<pt.length&&(tt=new jf("onBeforeInput","beforeinput",null,n,_),L.push({event:tt,listeners:pt}),tt.data=rt)),o1(L,t,R,n,_)}Am(L,e)})}function tl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cs(t,e){for(var n=e+"Capture",a=[];t!==null;){var s=t,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=ba(t,n),s!=null&&a.unshift(tl(t,s,r)),s=ba(t,e),s!=null&&a.push(tl(t,s,r))),t.tag===3)return a;t=t.return}return[]}function h1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mm(t,e,n,a,s){for(var r=e._reactName,f=[];n!==null&&n!==a;){var y=n,b=y.alternate,R=y.stateNode;if(y=y.tag,b!==null&&b===a)break;y!==5&&y!==26&&y!==27||R===null||(b=R,s?(R=ba(n,r),R!=null&&f.unshift(tl(n,R,b))):s||(R=ba(n,r),R!=null&&f.push(tl(n,R,b)))),n=n.return}f.length!==0&&t.push({event:e,listeners:f})}var d1=/\r\n?/g,m1=/\u0000|\uFFFD/g;function Dm(t){return(typeof t=="string"?t:""+t).replace(d1,`
`).replace(m1,"")}function Cm(t,e){return e=Dm(e),Dm(t)===e}function Dt(t,e,n,a,s,r){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||zi(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&zi(t,""+a);break;case"className":Vl(t,"class",a);break;case"tabIndex":Vl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Vl(t,n,a);break;case"style":Cf(t,a,r);break;case"data":if(e!=="object"){Vl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=jl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&Dt(t,e,"name",s.name,s,null),Dt(t,e,"formEncType",s.formEncType,s,null),Dt(t,e,"formMethod",s.formMethod,s,null),Dt(t,e,"formTarget",s.formTarget,s,null)):(Dt(t,e,"encType",s.encType,s,null),Dt(t,e,"method",s.method,s,null),Dt(t,e,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=jl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=nn);break;case"onScroll":a!=null&&dt("scroll",t);break;case"onScrollEnd":a!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=jl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":dt("beforetoggle",t),dt("toggle",t),Ol(t,"popover",a);break;case"xlinkActuate":en(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":en(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":en(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":en(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":en(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":en(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":en(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":en(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":en(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ol(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qg.get(n)||n,Ol(t,n,a))}}function yr(t,e,n,a,s,r){switch(n){case"style":Cf(t,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"children":typeof a=="string"?zi(t,a):(typeof a=="number"||typeof a=="bigint")&&zi(t,""+a);break;case"onScroll":a!=null&&dt("scroll",t);break;case"onScrollEnd":a!=null&&dt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vf.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),r=t[ce]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,s),typeof a=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,s);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):Ol(t,n,a)}}}function ne(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var a=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Dt(t,e,r,f,n,null)}}s&&Dt(t,e,"srcSet",n.srcSet,n,null),a&&Dt(t,e,"src",n.src,n,null);return;case"input":dt("invalid",t);var y=r=f=s=null,b=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var _=n[a];if(_!=null)switch(a){case"name":s=_;break;case"type":f=_;break;case"checked":b=_;break;case"defaultChecked":R=_;break;case"value":r=_;break;case"defaultValue":y=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,e));break;default:Dt(t,e,a,_,n,null)}}Af(t,r,y,b,R,f,s,!1);return;case"select":dt("invalid",t),a=f=r=null;for(s in n)if(n.hasOwnProperty(s)&&(y=n[s],y!=null))switch(s){case"value":r=y;break;case"defaultValue":f=y;break;case"multiple":a=y;default:Dt(t,e,s,y,n,null)}e=r,n=f,t.multiple=!!a,e!=null?Ci(t,!!a,e,!1):n!=null&&Ci(t,!!a,n,!0);return;case"textarea":dt("invalid",t),r=s=a=null;for(f in n)if(n.hasOwnProperty(f)&&(y=n[f],y!=null))switch(f){case"value":a=y;break;case"defaultValue":s=y;break;case"children":r=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Dt(t,e,f,y,n,null)}Mf(t,a,s,r);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Dt(t,e,b,a,n,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(a=0;a<Ia.length;a++)dt(Ia[a],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Dt(t,e,R,a,n,null)}return;default:if(Ru(e)){for(_ in n)n.hasOwnProperty(_)&&(a=n[_],a!==void 0&&yr(t,e,_,a,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null&&Dt(t,e,y,a,n,null))}function p1(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,f=null,y=null,b=null,R=null,_=null;for(N in n){var L=n[N];if(n.hasOwnProperty(N)&&L!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":b=L;default:a.hasOwnProperty(N)||Dt(t,e,N,null,a,L)}}for(var O in a){var N=a[O];if(L=n[O],a.hasOwnProperty(O)&&(N!=null||L!=null))switch(O){case"type":r=N;break;case"name":s=N;break;case"checked":R=N;break;case"defaultChecked":_=N;break;case"value":f=N;break;case"defaultValue":y=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:N!==L&&Dt(t,e,O,N,a,L)}}Cu(t,f,y,b,R,_,r,s);return;case"select":N=f=y=O=null;for(r in n)if(b=n[r],n.hasOwnProperty(r)&&b!=null)switch(r){case"value":break;case"multiple":N=b;default:a.hasOwnProperty(r)||Dt(t,e,r,null,a,b)}for(s in a)if(r=a[s],b=n[s],a.hasOwnProperty(s)&&(r!=null||b!=null))switch(s){case"value":O=r;break;case"defaultValue":y=r;break;case"multiple":f=r;default:r!==b&&Dt(t,e,s,r,a,b)}e=y,n=f,a=N,O!=null?Ci(t,!!n,O,!1):!!a!=!!n&&(e!=null?Ci(t,!!n,e,!0):Ci(t,!!n,n?[]:"",!1));return;case"textarea":N=O=null;for(y in n)if(s=n[y],n.hasOwnProperty(y)&&s!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Dt(t,e,y,null,a,s)}for(f in a)if(s=a[f],r=n[f],a.hasOwnProperty(f)&&(s!=null||r!=null))switch(f){case"value":O=s;break;case"defaultValue":N=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==r&&Dt(t,e,f,s,a,r)}Ef(t,O,N);return;case"option":for(var W in n)if(O=n[W],n.hasOwnProperty(W)&&O!=null&&!a.hasOwnProperty(W))switch(W){case"selected":t.selected=!1;break;default:Dt(t,e,W,null,a,O)}for(b in a)if(O=a[b],N=n[b],a.hasOwnProperty(b)&&O!==N&&(O!=null||N!=null))switch(b){case"selected":t.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Dt(t,e,b,O,a,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in n)O=n[at],n.hasOwnProperty(at)&&O!=null&&!a.hasOwnProperty(at)&&Dt(t,e,at,null,a,O);for(R in a)if(O=a[R],N=n[R],a.hasOwnProperty(R)&&O!==N&&(O!=null||N!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,e));break;default:Dt(t,e,R,O,a,N)}return;default:if(Ru(e)){for(var Ct in n)O=n[Ct],n.hasOwnProperty(Ct)&&O!==void 0&&!a.hasOwnProperty(Ct)&&yr(t,e,Ct,void 0,a,O);for(_ in a)O=a[_],N=n[_],!a.hasOwnProperty(_)||O===N||O===void 0&&N===void 0||yr(t,e,_,O,a,N);return}}for(var D in n)O=n[D],n.hasOwnProperty(D)&&O!=null&&!a.hasOwnProperty(D)&&Dt(t,e,D,null,a,O);for(L in a)O=a[L],N=n[L],!a.hasOwnProperty(L)||O===N||O==null&&N==null||Dt(t,e,L,O,a,N)}function zm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function y1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var s=n[a],r=s.transferSize,f=s.initiatorType,y=s.duration;if(r&&y&&zm(f)){for(f=0,y=s.responseEnd,a+=1;a<n.length;a++){var b=n[a],R=b.startTime;if(R>y)break;var _=b.transferSize,L=b.initiatorType;_&&zm(L)&&(b=b.responseEnd,f+=_*(b<y?1:(y-R)/(b-R)))}if(--a,e+=8*(r+f)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gr=null,vr=null;function zs(t){return t.nodeType===9?t:t.ownerDocument}function Rm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Om(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function xr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sr=null;function g1(){var t=window.event;return t&&t.type==="popstate"?t===Sr?!1:(Sr=t,!0):(Sr=null,!1)}var Vm=typeof setTimeout=="function"?setTimeout:void 0,v1=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,x1=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(S1)}:Vm;function S1(t){setTimeout(function(){throw t})}function Hn(t){return t==="head"}function jm(t,e){var n=e,a=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(s),la(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")el(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,el(n);for(var r=n.firstChild;r;){var f=r.nextSibling,y=r.nodeName;r[xa]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=f}}else n==="body"&&el(t.ownerDocument.body);n=s}while(n);la(e)}function _m(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function br(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":br(n),Mu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function b1(t,e,n,a){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[xa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Ue(t.nextSibling),t===null)break}return null}function T1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ue(t.nextSibling),t===null))return null;return t}function wm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ue(t.nextSibling),t===null))return null;return t}function Tr(t){return t.data==="$?"||t.data==="$~"}function Ar(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function A1(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ue(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Er=null;function Bm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ue(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Lm(t,e,n){switch(e=zs(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function el(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Mu(t)}var Le=new Map,Hm=new Set;function Rs(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xn=k.d;k.d={f:E1,r:M1,D:D1,C:C1,L:z1,m:R1,X:V1,S:O1,M:N1};function E1(){var t=xn.f(),e=Ss();return t||e}function M1(t){var e=Ei(t);e!==null&&e.tag===5&&e.type==="form"?nd(e):xn.r(t)}var na=typeof document>"u"?null:document;function Xm(t,e,n){var a=na;if(a&&typeof e=="string"&&e){var s=Oe(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Hm.has(s)||(Hm.add(s),t={rel:t,crossOrigin:n,href:e},a.querySelector(s)===null&&(e=a.createElement("link"),ne(e,"link",t),Ft(e),a.head.appendChild(e)))}}function D1(t){xn.D(t),Xm("dns-prefetch",t,null)}function C1(t,e){xn.C(t,e),Xm("preconnect",t,e)}function z1(t,e,n){xn.L(t,e,n);var a=na;if(a&&t&&e){var s='link[rel="preload"][as="'+Oe(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Oe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Oe(n.imageSizes)+'"]')):s+='[href="'+Oe(t)+'"]';var r=s;switch(e){case"style":r=ia(t);break;case"script":r=aa(t)}Le.has(r)||(t=x({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Le.set(r,t),a.querySelector(s)!==null||e==="style"&&a.querySelector(nl(r))||e==="script"&&a.querySelector(il(r))||(e=a.createElement("link"),ne(e,"link",t),Ft(e),a.head.appendChild(e)))}}function R1(t,e){xn.m(t,e);var n=na;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Oe(a)+'"][href="'+Oe(t)+'"]',r=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=aa(t)}if(!Le.has(r)&&(t=x({rel:"modulepreload",href:t},e),Le.set(r,t),n.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(il(r)))return}a=n.createElement("link"),ne(a,"link",t),Ft(a),n.head.appendChild(a)}}}function O1(t,e,n){xn.S(t,e,n);var a=na;if(a&&t){var s=Mi(a).hoistableStyles,r=ia(t);e=e||"default";var f=s.get(r);if(!f){var y={loading:0,preload:null};if(f=a.querySelector(nl(r)))y.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Le.get(r))&&Mr(t,n);var b=f=a.createElement("link");Ft(b),ne(b,"link",t),b._p=new Promise(function(R,_){b.onload=R,b.onerror=_}),b.addEventListener("load",function(){y.loading|=1}),b.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Os(f,e,a)}f={type:"stylesheet",instance:f,count:1,state:y},s.set(r,f)}}}function V1(t,e){xn.X(t,e);var n=na;if(n&&t){var a=Mi(n).hoistableScripts,s=aa(t),r=a.get(s);r||(r=n.querySelector(il(s)),r||(t=x({src:t,async:!0},e),(e=Le.get(s))&&Dr(t,e),r=n.createElement("script"),Ft(r),ne(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(s,r))}}function N1(t,e){xn.M(t,e);var n=na;if(n&&t){var a=Mi(n).hoistableScripts,s=aa(t),r=a.get(s);r||(r=n.querySelector(il(s)),r||(t=x({src:t,async:!0,type:"module"},e),(e=Le.get(s))&&Dr(t,e),r=n.createElement("script"),Ft(r),ne(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(s,r))}}function Ym(t,e,n,a){var s=(s=ft.current)?Rs(s):null;if(!s)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ia(n.href),n=Mi(s).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ia(n.href);var r=Mi(s).hoistableStyles,f=r.get(t);if(f||(s=s.ownerDocument||s,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,f),(r=s.querySelector(nl(t)))&&!r._p&&(f.instance=r,f.state.loading=5),Le.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Le.set(t,n),r||j1(s,t,n,f.state))),e&&a===null)throw Error(o(528,""));return f}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=aa(n),n=Mi(s).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function ia(t){return'href="'+Oe(t)+'"'}function nl(t){return'link[rel="stylesheet"]['+t+"]"}function qm(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function j1(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ne(e,"link",n),Ft(e),t.head.appendChild(e))}function aa(t){return'[src="'+Oe(t)+'"]'}function il(t){return"script[async]"+t}function Gm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Oe(n.href)+'"]');if(a)return e.instance=a,Ft(a),a;var s=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ft(a),ne(a,"style",s),Os(a,n.precedence,t),e.instance=a;case"stylesheet":s=ia(n.href);var r=t.querySelector(nl(s));if(r)return e.state.loading|=4,e.instance=r,Ft(r),r;a=qm(n),(s=Le.get(s))&&Mr(a,s),r=(t.ownerDocument||t).createElement("link"),Ft(r);var f=r;return f._p=new Promise(function(y,b){f.onload=y,f.onerror=b}),ne(r,"link",a),e.state.loading|=4,Os(r,n.precedence,t),e.instance=r;case"script":return r=aa(n.src),(s=t.querySelector(il(r)))?(e.instance=s,Ft(s),s):(a=n,(s=Le.get(r))&&(a=x({},n),Dr(a,s)),t=t.ownerDocument||t,s=t.createElement("script"),Ft(s),ne(s,"link",a),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Os(a,n.precedence,t));return e.instance}function Os(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,r=s,f=0;f<a.length;f++){var y=a[f];if(y.dataset.precedence===e)r=y;else if(r!==s)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Mr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Dr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Vs=null;function Qm(t,e,n){if(Vs===null){var a=new Map,s=Vs=new Map;s.set(n,a)}else s=Vs,a=s.get(n),a||(a=new Map,s.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var r=n[s];if(!(r[xa]||r[Pt]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(e)||"";f=t+f;var y=a.get(f);y?y.push(r):a.set(f,[r])}}return a}function Zm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function _1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Km(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function w1(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ia(a.href),r=e.querySelector(nl(s));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ns.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,Ft(r);return}r=e.ownerDocument||e,a=qm(a),(s=Le.get(s))&&Mr(a,s),r=r.createElement("link"),Ft(r);var f=r;f._p=new Promise(function(y,b){f.onload=y,f.onerror=b}),ne(r,"link",a),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Ns.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Cr=0;function B1(t,e){return t.stylesheets&&t.count===0&&_s(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&_s(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&Cr===0&&(Cr=62500*y1());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_s(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>Cr?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(s)}}:null}function Ns(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_s(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var js=null;function _s(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,js=new Map,e.forEach(U1,t),js=null,Ns.call(t))}function U1(t,e){if(!(e.state.loading&4)){var n=js.get(t);if(n)var a=n.get(null);else{n=new Map,js.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var f=s[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}s=e.instance,f=s.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,s),n.set(f,s),this.count++,a=Ns.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),r?r.parentNode.insertBefore(s,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var al={$$typeof:Y,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function L1(t,e,n,a,s,r,f,y,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.hiddenUpdates=bu(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function km(t,e,n,a,s,r,f,y,b,R,_,L){return t=new L1(t,e,n,f,b,R,_,L,y),e=1,r===!0&&(e|=24),r=be(3,null,null,e),t.current=r,r.stateNode=t,e=lo(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:e},ro(r),t}function Jm(t){return t?(t=wi,t):wi}function Fm(t,e,n,a,s,r){s=Jm(s),a.context===null?a.context=s:a.pendingContext=s,a=zn(e),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Rn(t,a,e),n!==null&&(ye(n,t,e),Ba(n,t,e))}function Wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zr(t,e){Wm(t,e),(t=t.alternate)&&Wm(t,e)}function $m(t){if(t.tag===13||t.tag===31){var e=ii(t,67108864);e!==null&&ye(e,t,67108864),zr(t,67108864)}}function Pm(t){if(t.tag===13||t.tag===31){var e=De();e=Tu(e);var n=ii(t,e);n!==null&&ye(n,t,e),zr(t,e)}}var ws=!0;function H1(t,e,n,a){var s=j.T;j.T=null;var r=k.p;try{k.p=2,Rr(t,e,n,a)}finally{k.p=r,j.T=s}}function X1(t,e,n,a){var s=j.T;j.T=null;var r=k.p;try{k.p=8,Rr(t,e,n,a)}finally{k.p=r,j.T=s}}function Rr(t,e,n,a){if(ws){var s=Or(a);if(s===null)pr(t,e,a,Bs,n),tp(t,a);else if(q1(s,t,e,n,a))a.stopPropagation();else if(tp(t,a),e&4&&-1<Y1.indexOf(t)){for(;s!==null;){var r=Ei(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Pn(r.pendingLanes);if(f!==0){var y=r;for(y.pendingLanes|=2,y.entangledLanes|=2;f;){var b=1<<31-xe(f);y.entanglements[1]|=b,f&=~b}We(r),(bt&6)===0&&(vs=ge()+500,Pa(0))}}break;case 31:case 13:y=ii(r,2),y!==null&&ye(y,r,2),Ss(),zr(r,2)}if(r=Or(a),r===null&&pr(t,e,a,Bs,n),r===s)break;s=r}s!==null&&a.stopPropagation()}else pr(t,e,a,null,n)}}function Or(t){return t=Vu(t),Vr(t)}var Bs=null;function Vr(t){if(Bs=null,t=Ai(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=h(e),t!==null)return t;t=null}else if(n===31){if(t=m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Bs=t,null}function Im(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dg()){case uf:return 2;case of:return 8;case Ml:case Cg:return 32;case rf:return 268435456;default:return 32}default:return 32}}var Nr=!1,Xn=null,Yn=null,qn=null,ll=new Map,sl=new Map,Gn=[],Y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tp(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(e.pointerId)}}function ul(t,e,n,a,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[s]},e!==null&&(e=Ei(e),e!==null&&$m(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function q1(t,e,n,a,s){switch(e){case"focusin":return Xn=ul(Xn,t,e,n,a,s),!0;case"dragenter":return Yn=ul(Yn,t,e,n,a,s),!0;case"mouseover":return qn=ul(qn,t,e,n,a,s),!0;case"pointerover":var r=s.pointerId;return ll.set(r,ul(ll.get(r)||null,t,e,n,a,s)),!0;case"gotpointercapture":return r=s.pointerId,sl.set(r,ul(sl.get(r)||null,t,e,n,a,s)),!0}return!1}function ep(t){var e=Ai(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=h(n),e!==null){t.blockedOn=e,pf(t.priority,function(){Pm(n)});return}}else if(e===31){if(e=m(n),e!==null){t.blockedOn=e,pf(t.priority,function(){Pm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Us(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Or(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);Ou=a,n.target.dispatchEvent(a),Ou=null}else return e=Ei(n),e!==null&&$m(e),t.blockedOn=n,!1;e.shift()}return!0}function np(t,e,n){Us(t)&&n.delete(e)}function G1(){Nr=!1,Xn!==null&&Us(Xn)&&(Xn=null),Yn!==null&&Us(Yn)&&(Yn=null),qn!==null&&Us(qn)&&(qn=null),ll.forEach(np),sl.forEach(np)}function Ls(t,e){t.blockedOn===e&&(t.blockedOn=null,Nr||(Nr=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,G1)))}var Hs=null;function ip(t){Hs!==t&&(Hs=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Hs===t&&(Hs=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],s=t[e+2];if(typeof a!="function"){if(Vr(a||n)===null)continue;break}var r=Ei(n);r!==null&&(t.splice(e,3),e-=3,Oo(r,{pending:!0,data:s,method:n.method,action:a},a,s))}}))}function la(t){function e(b){return Ls(b,t)}Xn!==null&&Ls(Xn,t),Yn!==null&&Ls(Yn,t),qn!==null&&Ls(qn,t),ll.forEach(e),sl.forEach(e);for(var n=0;n<Gn.length;n++){var a=Gn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)ep(n),n.blockedOn===null&&Gn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var s=n[a],r=n[a+1],f=s[ce]||null;if(typeof r=="function")f||ip(n);else if(f){var y=null;if(r&&r.hasAttribute("formAction")){if(s=r,f=r[ce]||null)y=f.formAction;else if(Vr(s)!==null)continue}else y=f.action;typeof y=="function"?n[a+1]=y:(n.splice(a,3),a-=3),ip(n)}}}function ap(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(f){return s=f})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function jr(t){this._internalRoot=t}Xs.prototype.render=jr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,a=De();Fm(n,a,t,e,null,null)},Xs.prototype.unmount=jr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fm(t.current,2,null,t,null,null),Ss(),e[Ti]=null}};function Xs(t){this._internalRoot=t}Xs.prototype.unstable_scheduleHydration=function(t){if(t){var e=mf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&ep(t)}};var lp=l.version;if(lp!=="19.2.6")throw Error(o(527,lp,"19.2.6"));k.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=p(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Q1={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{ya=Ys.inject(Q1),ve=Ys}catch{}}return rl.createRoot=function(t,e){if(!c(t))throw Error(o(299));var n=!1,a="",s=hd,r=dd,f=md;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError)),e=km(t,1,!1,null,null,n,a,null,s,r,f,ap),t[Ti]=e.current,mr(t),new jr(e)},rl.hydrateRoot=function(t,e,n){if(!c(t))throw Error(o(299));var a=!1,s="",r=hd,f=dd,y=md,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),e=km(t,1,!0,e,n??null,a,s,b,r,f,y,ap),e.context=Jm(null),n=e.current,a=De(),a=Tu(a),s=zn(a),s.callback=null,Rn(n,s,a),n=a,e.current.lanes=n,va(e,n),We(e),t[Ti]=e.current,mr(t),new Xs(e)},rl.version="19.2.6",rl}var pp;function t2(){if(pp)return Br.exports;pp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Br.exports=I1(),Br.exports}var e2=t2();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i2=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,u,o)=>o?o.toUpperCase():u.toLowerCase()),yp=i=>{const l=i2(i);return l.charAt(0).toUpperCase()+l.slice(1)},B0=(...i)=>i.filter((l,u,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===u).join(" ").trim(),a2=i=>{for(const l in i)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=Z.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:c="",children:d,iconNode:h,...m},g)=>Z.createElement("svg",{ref:g,...l2,width:l,height:l,stroke:i,strokeWidth:o?Number(u)*24/Number(l):u,className:B0("lucide",c),...!d&&!a2(m)&&{"aria-hidden":"true"},...m},[...h.map(([p,v])=>Z.createElement(p,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=(i,l)=>{const u=Z.forwardRef(({className:o,...c},d)=>Z.createElement(s2,{ref:d,iconNode:l,className:B0(`lucide-${n2(yp(i))}`,`lucide-${i}`,o),...c}));return u.displayName=yp(i),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],o2=ze("activity",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],c2=ze("arrow-up",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],h2=ze("briefcase",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gp=ze("chevron-right",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],p2=ze("circle-check-big",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],g2=ze("circle-question-mark",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],x2=ze("copy",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],b2=ze("download",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],A2=ze("headphones",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],M2=ze("heart-pulse",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],C2=ze("search",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],vp=ze("triangle-alert",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],O2=ze("x",R2),Rc=Z.createContext({});function Oc(i){const l=Z.useRef(null);return l.current===null&&(l.current=i()),l.current}const V2=typeof window<"u",U0=V2?Z.useLayoutEffect:Z.useEffect,cu=Z.createContext(null);function Vc(i,l){i.indexOf(l)===-1&&i.push(l)}function eu(i,l){const u=i.indexOf(l);u>-1&&i.splice(u,1)}const tn=(i,l,u)=>u>l?l:u<i?i:u;let Nc=()=>{};const Jn={},L0=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),H0=i=>typeof i=="object"&&i!==null,X0=i=>/^0[^.\s]+$/u.test(i);function Y0(i){let l;return()=>(l===void 0&&(l=i()),l)}const Xe=i=>i,Sl=(...i)=>i.reduce((l,u)=>o=>u(l(o))),yl=(i,l,u)=>{const o=l-i;return o?(u-i)/o:1};class jc{constructor(){this.subscriptions=[]}add(l){return Vc(this.subscriptions,l),()=>eu(this.subscriptions,l)}notify(l,u,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](l,u,o);else for(let d=0;d<c;d++){const h=this.subscriptions[d];h&&h(l,u,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ce=i=>i*1e3,He=i=>i/1e3,q0=(i,l)=>l?i*(1e3/l):0,G0=(i,l,u)=>(((1-3*u+3*l)*i+(3*u-6*l))*i+3*l)*i,N2=1e-7,j2=12;function _2(i,l,u,o,c){let d,h,m=0;do h=l+(u-l)/2,d=G0(h,o,c)-i,d>0?u=h:l=h;while(Math.abs(d)>N2&&++m<j2);return h}function bl(i,l,u,o){if(i===l&&u===o)return Xe;const c=d=>_2(d,0,1,i,u);return d=>d===0||d===1?d:G0(c(d),l,o)}const Q0=i=>l=>l<=.5?i(2*l)/2:(2-i(2*(1-l)))/2,Z0=i=>l=>1-i(1-l),K0=bl(.33,1.53,.69,.99),_c=Z0(K0),k0=Q0(_c),J0=i=>i>=1?1:(i*=2)<1?.5*_c(i):.5*(2-Math.pow(2,-10*(i-1))),wc=i=>1-Math.sin(Math.acos(i)),F0=Z0(wc),W0=Q0(wc),w2=bl(.42,0,1,1),B2=bl(0,0,.58,1),$0=bl(.42,0,.58,1),U2=i=>Array.isArray(i)&&typeof i[0]!="number",P0=i=>Array.isArray(i)&&typeof i[0]=="number",L2={linear:Xe,easeIn:w2,easeInOut:$0,easeOut:B2,circIn:wc,circInOut:W0,circOut:F0,backIn:_c,backInOut:k0,backOut:K0,anticipate:J0},H2=i=>typeof i=="string",xp=i=>{if(P0(i)){Nc(i.length===4);const[l,u,o,c]=i;return bl(l,u,o,c)}else if(H2(i))return L2[i];return i},qs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function X2(i,l){let u=new Set,o=new Set,c=!1,d=!1;const h=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function g(v){h.has(v)&&(p.schedule(v),i()),v(m)}const p={schedule:(v,x=!1,S=!1)=>{const M=S&&c?u:o;return x&&h.add(v),M.add(v),v},cancel:v=>{o.delete(v),h.delete(v)},process:v=>{if(m=v,c){d=!0;return}c=!0;const x=u;u=o,o=x,u.forEach(g),u.clear(),c=!1,d&&(d=!1,p.process(v))}};return p}const Y2=40;function I0(i,l){let u=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>u=!0,h=qs.reduce((Y,K)=>(Y[K]=X2(d),Y),{}),{setup:m,read:g,resolveKeyframes:p,preUpdate:v,update:x,preRender:S,render:T,postRender:M}=h,V=()=>{const Y=Jn.useManualTiming,K=Y?c.timestamp:performance.now();u=!1,Y||(c.delta=o?1e3/60:Math.max(Math.min(K-c.timestamp,Y2),1)),c.timestamp=K,c.isProcessing=!0,m.process(c),g.process(c),p.process(c),v.process(c),x.process(c),S.process(c),T.process(c),M.process(c),c.isProcessing=!1,u&&l&&(o=!1,i(V))},U=()=>{u=!0,o=!0,c.isProcessing||i(V)};return{schedule:qs.reduce((Y,K)=>{const B=h[K];return Y[K]=($,q=!1,G=!1)=>(u||U(),B.schedule($,q,G)),Y},{}),cancel:Y=>{for(let K=0;K<qs.length;K++)h[qs[K]].cancel(Y)},state:c,steps:h}}const{schedule:Rt,cancel:Fn,state:ie,steps:Xr}=I0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xe,!0);let ks;function q2(){ks=void 0}const oe={now:()=>(ks===void 0&&oe.set(ie.isProcessing||Jn.useManualTiming?ie.timestamp:performance.now()),ks),set:i=>{ks=i,queueMicrotask(q2)}},ty=i=>l=>typeof l=="string"&&l.startsWith(i),ey=ty("--"),G2=ty("var(--"),Bc=i=>G2(i)?Q2.test(i.split("/*")[0].trim()):!1,Q2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Sp(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const ha={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},gl={...ha,transform:i=>tn(0,1,i)},Gs={...ha,default:1},hl=i=>Math.round(i*1e5)/1e5,Uc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Z2(i){return i==null}const K2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Lc=(i,l)=>u=>!!(typeof u=="string"&&K2.test(u)&&u.startsWith(i)||l&&!Z2(u)&&Object.prototype.hasOwnProperty.call(u,l)),ny=(i,l,u)=>o=>{if(typeof o!="string")return o;const[c,d,h,m]=o.match(Uc);return{[i]:parseFloat(c),[l]:parseFloat(d),[u]:parseFloat(h),alpha:m!==void 0?parseFloat(m):1}},k2=i=>tn(0,255,i),Yr={...ha,transform:i=>Math.round(k2(i))},vi={test:Lc("rgb","red"),parse:ny("red","green","blue"),transform:({red:i,green:l,blue:u,alpha:o=1})=>"rgba("+Yr.transform(i)+", "+Yr.transform(l)+", "+Yr.transform(u)+", "+hl(gl.transform(o))+")"};function J2(i){let l="",u="",o="",c="";return i.length>5?(l=i.substring(1,3),u=i.substring(3,5),o=i.substring(5,7),c=i.substring(7,9)):(l=i.substring(1,2),u=i.substring(2,3),o=i.substring(3,4),c=i.substring(4,5),l+=l,u+=u,o+=o,c+=c),{red:parseInt(l,16),green:parseInt(u,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const ac={test:Lc("#"),parse:J2,transform:vi.transform},Tl=i=>({test:l=>typeof l=="string"&&l.endsWith(i)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${i}`}),Zn=Tl("deg"),Ie=Tl("%"),P=Tl("px"),F2=Tl("vh"),W2=Tl("vw"),bp={...Ie,parse:i=>Ie.parse(i)/100,transform:i=>Ie.transform(i*100)},ua={test:Lc("hsl","hue"),parse:ny("hue","saturation","lightness"),transform:({hue:i,saturation:l,lightness:u,alpha:o=1})=>"hsla("+Math.round(i)+", "+Ie.transform(hl(l))+", "+Ie.transform(hl(u))+", "+hl(gl.transform(o))+")"},Kt={test:i=>vi.test(i)||ac.test(i)||ua.test(i),parse:i=>vi.test(i)?vi.parse(i):ua.test(i)?ua.parse(i):ac.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?vi.transform(i):ua.transform(i),getAnimatableNone:i=>{const l=Kt.parse(i);return l.alpha=0,Kt.transform(l)}},$2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function P2(i){var l,u;return isNaN(i)&&typeof i=="string"&&(((l=i.match(Uc))==null?void 0:l.length)||0)+(((u=i.match($2))==null?void 0:u.length)||0)>0}const iy="number",ay="color",I2="var",tx="var(",Tp="${}",ex=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ca(i){const l=i.toString(),u=[],o={color:[],number:[],var:[]},c=[];let d=0;const m=l.replace(ex,g=>(Kt.test(g)?(o.color.push(d),c.push(ay),u.push(Kt.parse(g))):g.startsWith(tx)?(o.var.push(d),c.push(I2),u.push(g)):(o.number.push(d),c.push(iy),u.push(parseFloat(g))),++d,Tp)).split(Tp);return{values:u,split:m,indexes:o,types:c}}function nx(i){return ca(i).values}function ly({split:i,types:l}){const u=i.length;return o=>{let c="";for(let d=0;d<u;d++)if(c+=i[d],o[d]!==void 0){const h=l[d];h===iy?c+=hl(o[d]):h===ay?c+=Kt.transform(o[d]):c+=o[d]}return c}}function ix(i){return ly(ca(i))}const ax=i=>typeof i=="number"?0:Kt.test(i)?Kt.getAnimatableNone(i):i,lx=(i,l)=>typeof i=="number"?l!=null&&l.trim().endsWith("/")?i:0:ax(i);function sx(i){const l=ca(i);return ly(l)(l.values.map((o,c)=>lx(o,l.split[c])))}const Ke={test:P2,parse:nx,createTransformer:ix,getAnimatableNone:sx};function qr(i,l,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?i+(l-i)*6*u:u<1/2?l:u<2/3?i+(l-i)*(2/3-u)*6:i}function ux({hue:i,saturation:l,lightness:u,alpha:o}){i/=360,l/=100,u/=100;let c=0,d=0,h=0;if(!l)c=d=h=u;else{const m=u<.5?u*(1+l):u+l-u*l,g=2*u-m;c=qr(g,m,i+1/3),d=qr(g,m,i),h=qr(g,m,i-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(h*255),alpha:o}}function nu(i,l){return u=>u>0?l:i}const Nt=(i,l,u)=>i+(l-i)*u,Gr=(i,l,u)=>{const o=i*i,c=u*(l*l-o)+o;return c<0?0:Math.sqrt(c)},ox=[ac,vi,ua],rx=i=>ox.find(l=>l.test(i));function Ap(i){const l=rx(i);if(!l)return!1;let u=l.parse(i);return l===ua&&(u=ux(u)),u}const Ep=(i,l)=>{const u=Ap(i),o=Ap(l);if(!u||!o)return nu(i,l);const c={...u};return d=>(c.red=Gr(u.red,o.red,d),c.green=Gr(u.green,o.green,d),c.blue=Gr(u.blue,o.blue,d),c.alpha=Nt(u.alpha,o.alpha,d),vi.transform(c))},lc=new Set(["none","hidden"]);function cx(i,l){return lc.has(i)?u=>u<=0?i:l:u=>u>=1?l:i}function fx(i,l){return u=>Nt(i,l,u)}function Hc(i){return typeof i=="number"?fx:typeof i=="string"?Bc(i)?nu:Kt.test(i)?Ep:mx:Array.isArray(i)?sy:typeof i=="object"?Kt.test(i)?Ep:hx:nu}function sy(i,l){const u=[...i],o=u.length,c=i.map((d,h)=>Hc(d)(d,l[h]));return d=>{for(let h=0;h<o;h++)u[h]=c[h](d);return u}}function hx(i,l){const u={...i,...l},o={};for(const c in u)i[c]!==void 0&&l[c]!==void 0&&(o[c]=Hc(i[c])(i[c],l[c]));return c=>{for(const d in o)u[d]=o[d](c);return u}}function dx(i,l){const u=[],o={color:0,var:0,number:0};for(let c=0;c<l.values.length;c++){const d=l.types[c],h=i.indexes[d][o[d]],m=i.values[h]??0;u[c]=m,o[d]++}return u}const mx=(i,l)=>{const u=Ke.createTransformer(l),o=ca(i),c=ca(l);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?lc.has(i)&&!c.values.length||lc.has(l)&&!o.values.length?cx(i,l):Sl(sy(dx(o,c),c.values),u):nu(i,l)};function uy(i,l,u){return typeof i=="number"&&typeof l=="number"&&typeof u=="number"?Nt(i,l,u):Hc(i)(i,l)}const px=i=>{const l=({timestamp:u})=>i(u);return{start:(u=!0)=>Rt.update(l,u),stop:()=>Fn(l),now:()=>ie.isProcessing?ie.timestamp:oe.now()}},oy=(i,l,u=10)=>{let o="";const c=Math.max(Math.round(l/u),2);for(let d=0;d<c;d++)o+=Math.round(i(d/(c-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},iu=2e4;function Xc(i){let l=0;const u=50;let o=i.next(l);for(;!o.done&&l<iu;)l+=u,o=i.next(l);return l>=iu?1/0:l}function yx(i,l=100,u){const o=u({...i,keyframes:[0,l]}),c=Math.min(Xc(o),iu);return{type:"keyframes",ease:d=>o.next(c*d).value/l,duration:He(c)}}const Bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function sc(i,l){return i*Math.sqrt(1-l*l)}const gx=12;function vx(i,l,u){let o=u;for(let c=1;c<gx;c++)o=o-i(o)/l(o);return o}const Qr=.001;function xx({duration:i=Bt.duration,bounce:l=Bt.bounce,velocity:u=Bt.velocity,mass:o=Bt.mass}){let c,d,h=1-l;h=tn(Bt.minDamping,Bt.maxDamping,h),i=tn(Bt.minDuration,Bt.maxDuration,He(i)),h<1?(c=p=>{const v=p*h,x=v*i,S=v-u,T=sc(p,h),M=Math.exp(-x);return Qr-S/T*M},d=p=>{const x=p*h*i,S=x*u+u,T=Math.pow(h,2)*Math.pow(p,2)*i,M=Math.exp(-x),V=sc(Math.pow(p,2),h);return(-c(p)+Qr>0?-1:1)*((S-T)*M)/V}):(c=p=>{const v=Math.exp(-p*i),x=(p-u)*i+1;return-Qr+v*x},d=p=>{const v=Math.exp(-p*i),x=(u-p)*(i*i);return v*x});const m=5/i,g=vx(c,d,m);if(i=Ce(i),isNaN(g))return{stiffness:Bt.stiffness,damping:Bt.damping,duration:i};{const p=Math.pow(g,2)*o;return{stiffness:p,damping:h*2*Math.sqrt(o*p),duration:i}}}const Sx=["duration","bounce"],bx=["stiffness","damping","mass"];function Mp(i,l){return l.some(u=>i[u]!==void 0)}function Tx(i){let l={velocity:Bt.velocity,stiffness:Bt.stiffness,damping:Bt.damping,mass:Bt.mass,isResolvedFromDuration:!1,...i};if(!Mp(i,bx)&&Mp(i,Sx))if(l.velocity=0,i.visualDuration){const u=i.visualDuration,o=2*Math.PI/(u*1.2),c=o*o,d=2*tn(.05,1,1-(i.bounce||0))*Math.sqrt(c);l={...l,mass:Bt.mass,stiffness:c,damping:d}}else{const u=xx({...i,velocity:0});l={...l,...u,mass:Bt.mass},l.isResolvedFromDuration=!0}return l}function au(i=Bt.visualDuration,l=Bt.bounce){const u=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:l}:i;let{restSpeed:o,restDelta:c}=u;const d=u.keyframes[0],h=u.keyframes[u.keyframes.length-1],m={done:!1,value:d},{stiffness:g,damping:p,mass:v,duration:x,velocity:S,isResolvedFromDuration:T}=Tx({...u,velocity:-He(u.velocity||0)}),M=S||0,V=p/(2*Math.sqrt(g*v)),U=h-d,X=He(Math.sqrt(g/v)),Q=Math.abs(U)<5;o||(o=Q?Bt.restSpeed.granular:Bt.restSpeed.default),c||(c=Q?Bt.restDelta.granular:Bt.restDelta.default);let Y,K,B,$,q,G;if(V<1)B=sc(X,V),$=(M+V*X*U)/B,Y=et=>{const ct=Math.exp(-V*X*et);return h-ct*($*Math.sin(B*et)+U*Math.cos(B*et))},q=V*X*$+U*B,G=V*X*U-$*B,K=et=>Math.exp(-V*X*et)*(q*Math.sin(B*et)+G*Math.cos(B*et));else if(V===1){Y=ct=>h-Math.exp(-X*ct)*(U+(M+X*U)*ct);const et=M+X*U;K=ct=>Math.exp(-X*ct)*(X*et*ct-M)}else{const et=X*Math.sqrt(V*V-1);Y=Yt=>{const Ut=Math.exp(-V*X*Yt),j=Math.min(et*Yt,300);return h-Ut*((M+V*X*U)*Math.sinh(j)+et*U*Math.cosh(j))/et};const ct=(M+V*X*U)/et,vt=V*X*ct-U*et,$t=V*X*U-ct*et;K=Yt=>{const Ut=Math.exp(-V*X*Yt),j=Math.min(et*Yt,300);return Ut*(vt*Math.sinh(j)+$t*Math.cosh(j))}}const it={calculatedDuration:T&&x||null,velocity:et=>Ce(K(et)),next:et=>{if(!T&&V<1){const vt=Math.exp(-V*X*et),$t=Math.sin(B*et),Yt=Math.cos(B*et),Ut=h-vt*($*$t+U*Yt),j=Ce(vt*(q*$t+G*Yt));return m.done=Math.abs(j)<=o&&Math.abs(h-Ut)<=c,m.value=m.done?h:Ut,m}const ct=Y(et);if(T)m.done=et>=x;else{const vt=Ce(K(et));m.done=Math.abs(vt)<=o&&Math.abs(h-ct)<=c}return m.value=m.done?h:ct,m},toString:()=>{const et=Math.min(Xc(it),iu),ct=oy(vt=>it.next(et*vt).value,et,30);return et+"ms "+ct},toTransition:()=>{}};return it}au.applyToOptions=i=>{const l=yx(i,100,au);return i.ease=l.ease,i.duration=Ce(l.duration),i.type="keyframes",i};const Ax=5;function ry(i,l,u){const o=Math.max(l-Ax,0);return q0(u-i(o),l-o)}function uc({keyframes:i,velocity:l=0,power:u=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:h,min:m,max:g,restDelta:p=.5,restSpeed:v}){const x=i[0],S={done:!1,value:x},T=G=>m!==void 0&&G<m||g!==void 0&&G>g,M=G=>m===void 0?g:g===void 0||Math.abs(m-G)<Math.abs(g-G)?m:g;let V=u*l;const U=x+V,X=h===void 0?U:h(U);X!==U&&(V=X-x);const Q=G=>-V*Math.exp(-G/o),Y=G=>X+Q(G),K=G=>{const it=Q(G),et=Y(G);S.done=Math.abs(it)<=p,S.value=S.done?X:et};let B,$;const q=G=>{T(S.value)&&(B=G,$=au({keyframes:[S.value,M(S.value)],velocity:ry(Y,G,S.value),damping:c,stiffness:d,restDelta:p,restSpeed:v}))};return q(0),{calculatedDuration:null,next:G=>{let it=!1;return!$&&B===void 0&&(it=!0,K(G),q(G)),B!==void 0&&G>=B?$.next(G-B):(!it&&K(G),S)}}}function Ex(i,l,u){const o=[],c=u||Jn.mix||uy,d=i.length-1;for(let h=0;h<d;h++){let m=c(i[h],i[h+1]);if(l){const g=Array.isArray(l)?l[h]||Xe:l;m=Sl(g,m)}o.push(m)}return o}function Mx(i,l,{clamp:u=!0,ease:o,mixer:c}={}){const d=i.length;if(Nc(d===l.length),d===1)return()=>l[0];if(d===2&&l[0]===l[1])return()=>l[1];const h=i[0]===i[1];i[0]>i[d-1]&&(i=[...i].reverse(),l=[...l].reverse());const m=Ex(l,o,c),g=m.length,p=v=>{if(h&&v<i[0])return l[0];let x=0;if(g>1)for(;x<i.length-2&&!(v<i[x+1]);x++);const S=yl(i[x],i[x+1],v);return m[x](S)};return u?v=>p(tn(i[0],i[d-1],v)):p}function Dx(i,l){const u=i[i.length-1];for(let o=1;o<=l;o++){const c=yl(0,l,o);i.push(Nt(u,1,c))}}function Cx(i){const l=[0];return Dx(l,i.length-1),l}function zx(i,l){return i.map(u=>u*l)}function Rx(i,l){return i.map(()=>l||$0).splice(0,i.length-1)}function dl({duration:i=300,keyframes:l,times:u,ease:o="easeInOut"}){const c=U2(o)?o.map(xp):xp(o),d={done:!1,value:l[0]},h=zx(u&&u.length===l.length?u:Cx(l),i),m=Mx(h,l,{ease:Array.isArray(c)?c:Rx(l,c)});return{calculatedDuration:i,next:g=>(d.value=m(g),d.done=g>=i,d)}}const Ox=i=>i!==null;function fu(i,{repeat:l,repeatType:u="loop"},o,c=1){const d=i.filter(Ox),m=c<0||l&&u!=="loop"&&l%2===1?0:d.length-1;return!m||o===void 0?d[m]:o}const Vx={decay:uc,inertia:uc,tween:dl,keyframes:dl,spring:au};function cy(i){typeof i.type=="string"&&(i.type=Vx[i.type])}class Yc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(l=>{this.resolve=l})}notifyFinished(){this.resolve()}then(l,u){return this.finished.then(l,u)}}const Nx=i=>i/100;class lu extends Yc{constructor(l){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var o,c;const{motionValue:u}=this.options;u&&u.updatedAt!==oe.now()&&this.tick(oe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(o=this.options).onStop)==null||c.call(o))},this.options=l,this.initAnimation(),this.play(),l.autoplay===!1&&this.pause()}initAnimation(){const{options:l}=this;cy(l);const{type:u=dl,repeat:o=0,repeatDelay:c=0,repeatType:d,velocity:h=0}=l;let{keyframes:m}=l;const g=u||dl;g!==dl&&typeof m[0]!="number"&&(this.mixKeyframes=Sl(Nx,uy(m[0],m[1])),m=[0,100]);const p=g({...l,keyframes:m});d==="mirror"&&(this.mirroredGenerator=g({...l,keyframes:[...m].reverse(),velocity:-h})),p.calculatedDuration===null&&(p.calculatedDuration=Xc(p));const{calculatedDuration:v}=p;this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(o+1)-c,this.generator=p}updateTime(l){const u=Math.round(l-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=u}tick(l,u=!1){const{generator:o,totalDuration:c,mixKeyframes:d,mirroredGenerator:h,resolvedDuration:m,calculatedDuration:g}=this;if(this.startTime===null)return o.next(0);const{delay:p=0,keyframes:v,repeat:x,repeatType:S,repeatDelay:T,type:M,onUpdate:V,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,l):this.speed<0&&(this.startTime=Math.min(l-c/this.speed,this.startTime)),u?this.currentTime=l:this.updateTime(l);const X=this.currentTime-p*(this.playbackSpeed>=0?1:-1),Q=this.playbackSpeed>=0?X<0:X>c;this.currentTime=Math.max(X,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let Y=this.currentTime,K=o;if(x){const G=Math.min(this.currentTime,c)/m;let it=Math.floor(G),et=G%1;!et&&G>=1&&(et=1),et===1&&it--,it=Math.min(it,x+1),!!(it%2)&&(S==="reverse"?(et=1-et,T&&(et-=T/m)):S==="mirror"&&(K=h)),Y=tn(0,1,et)*m}let B;Q?(this.delayState.value=v[0],B=this.delayState):B=K.next(Y),d&&!Q&&(B.value=d(B.value));let{done:$}=B;!Q&&g!==null&&($=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&$);return q&&M!==uc&&(B.value=fu(v,this.options,U,this.speed)),V&&V(B.value),q&&this.finish(),B}then(l,u){return this.finished.then(l,u)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+He(l)}get time(){return He(this.currentTime)}set time(l){l=Ce(l),this.currentTime=l,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=l:this.driver&&(this.startTime=this.driver.now()-l/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=l,this.tick(l))}getGeneratorVelocity(){const l=this.currentTime;if(l<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(l);const u=this.generator.next(l).value;return ry(o=>this.generator.next(o).value,l,u)}get speed(){return this.playbackSpeed}set speed(l){const u=this.playbackSpeed!==l;u&&this.driver&&this.updateTime(oe.now()),this.playbackSpeed=l,u&&this.driver&&(this.time=He(this.currentTime))}play(){var c,d;if(this.isStopped)return;const{driver:l=px,startTime:u}=this.options;this.driver||(this.driver=l(h=>this.tick(h))),(d=(c=this.options).onPlay)==null||d.call(c);const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=u??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(oe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var l,u;this.notifyFinished(),this.teardown(),this.state="finished",(u=(l=this.options).onComplete)==null||u.call(l)}cancel(){var l,u;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(u=(l=this.options).onCancel)==null||u.call(l)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(l){return this.startTime=0,this.tick(l,!0)}attachTimeline(l){var u;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(u=this.driver)==null||u.stop(),l.observe(this)}}function jx(i){for(let l=1;l<i.length;l++)i[l]??(i[l]=i[l-1])}const xi=i=>i*180/Math.PI,oc=i=>{const l=xi(Math.atan2(i[1],i[0]));return rc(l)},_x={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:oc,rotateZ:oc,skewX:i=>xi(Math.atan(i[1])),skewY:i=>xi(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},rc=i=>(i=i%360,i<0&&(i+=360),i),Dp=oc,Cp=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),zp=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),wx={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Cp,scaleY:zp,scale:i=>(Cp(i)+zp(i))/2,rotateX:i=>rc(xi(Math.atan2(i[6],i[5]))),rotateY:i=>rc(xi(Math.atan2(-i[2],i[0]))),rotateZ:Dp,rotate:Dp,skewX:i=>xi(Math.atan(i[4])),skewY:i=>xi(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function cc(i){return i.includes("scale")?1:0}function fc(i,l){if(!i||i==="none")return cc(l);const u=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,c;if(u)o=wx,c=u;else{const m=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=_x,c=m}if(!c)return cc(l);const d=o[l],h=c[1].split(",").map(Ux);return typeof d=="function"?d(h):h[d]}const Bx=(i,l)=>{const{transform:u="none"}=getComputedStyle(i);return fc(u,l)};function Ux(i){return parseFloat(i.trim())}const da=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ma=new Set(da),Rp=i=>i===ha||i===P,Lx=new Set(["x","y","z"]),Hx=da.filter(i=>!Lx.has(i));function Xx(i){const l=[];return Hx.forEach(u=>{const o=i.getValue(u);o!==void 0&&(l.push([u,o.get()]),o.set(u.startsWith("scale")?1:0))}),l}const kn={width:({x:i},{paddingLeft:l="0",paddingRight:u="0",boxSizing:o})=>{const c=i.max-i.min;return o==="border-box"?c:c-parseFloat(l)-parseFloat(u)},height:({y:i},{paddingTop:l="0",paddingBottom:u="0",boxSizing:o})=>{const c=i.max-i.min;return o==="border-box"?c:c-parseFloat(l)-parseFloat(u)},top:(i,{top:l})=>parseFloat(l),left:(i,{left:l})=>parseFloat(l),bottom:({y:i},{top:l})=>parseFloat(l)+(i.max-i.min),right:({x:i},{left:l})=>parseFloat(l)+(i.max-i.min),x:(i,{transform:l})=>fc(l,"x"),y:(i,{transform:l})=>fc(l,"y")};kn.translateX=kn.x;kn.translateY=kn.y;const Si=new Set;let hc=!1,dc=!1,mc=!1;function fy(){if(dc){const i=Array.from(Si).filter(o=>o.needsMeasurement),l=new Set(i.map(o=>o.element)),u=new Map;l.forEach(o=>{const c=Xx(o);c.length&&(u.set(o,c),o.render())}),i.forEach(o=>o.measureInitialState()),l.forEach(o=>{o.render();const c=u.get(o);c&&c.forEach(([d,h])=>{var m;(m=o.getValue(d))==null||m.set(h)})}),i.forEach(o=>o.measureEndState()),i.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}dc=!1,hc=!1,Si.forEach(i=>i.complete(mc)),Si.clear()}function hy(){Si.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(dc=!0)})}function Yx(){mc=!0,hy(),fy(),mc=!1}class qc{constructor(l,u,o,c,d,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...l],this.onComplete=u,this.name=o,this.motionValue=c,this.element=d,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(Si.add(this),hc||(hc=!0,Rt.read(hy),Rt.resolveKeyframes(fy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:l,name:u,element:o,motionValue:c}=this;if(l[0]===null){const d=c==null?void 0:c.get(),h=l[l.length-1];if(d!==void 0)l[0]=d;else if(o&&u){const m=o.readValue(u,h);m!=null&&(l[0]=m)}l[0]===void 0&&(l[0]=h),c&&d===void 0&&c.set(l[0])}jx(l)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(l=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,l),Si.delete(this)}cancel(){this.state==="scheduled"&&(Si.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const qx=i=>i.startsWith("--");function dy(i,l,u){qx(l)?i.style.setProperty(l,u):i.style[l]=u}const Gx={};function my(i,l){const u=Y0(i);return()=>Gx[l]??u()}const Qx=my(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),py=my(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fl=([i,l,u,o])=>`cubic-bezier(${i}, ${l}, ${u}, ${o})`,Op={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fl([0,.65,.55,1]),circOut:fl([.55,0,1,.45]),backIn:fl([.31,.01,.66,-.59]),backOut:fl([.33,1.53,.69,.99])};function yy(i,l){if(i)return typeof i=="function"?py()?oy(i,l):"ease-out":P0(i)?fl(i):Array.isArray(i)?i.map(u=>yy(u,l)||Op.easeOut):Op[i]}function Zx(i,l,u,{delay:o=0,duration:c=300,repeat:d=0,repeatType:h="loop",ease:m="easeOut",times:g}={},p=void 0){const v={[l]:u};g&&(v.offset=g);const x=yy(m,c);Array.isArray(x)&&(v.easing=x);const S={delay:o,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:d+1,direction:h==="reverse"?"alternate":"normal"};return p&&(S.pseudoElement=p),i.animate(v,S)}function gy(i){return typeof i=="function"&&"applyToOptions"in i}function Kx({type:i,...l}){return gy(i)&&py()?i.applyToOptions(l):(l.duration??(l.duration=300),l.ease??(l.ease="easeOut"),l)}class vy extends Yc{constructor(l){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!l)return;const{element:u,name:o,keyframes:c,pseudoElement:d,allowFlatten:h=!1,finalKeyframe:m,onComplete:g}=l;this.isPseudoElement=!!d,this.allowFlatten=h,this.options=l,Nc(typeof l.type!="string");const p=Kx(l);this.animation=Zx(u,o,c,p,d),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const v=fu(c,this.options,m,this.speed);this.updateMotionValue&&this.updateMotionValue(v),dy(u,o,v),this.animation.cancel()}g==null||g(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var l,u;(u=(l=this.animation).finish)==null||u.call(l)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:l}=this;l==="idle"||l==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var u,o,c;const l=(u=this.options)==null?void 0:u.element;!this.isPseudoElement&&(l!=null&&l.isConnected)&&((c=(o=this.animation).commitStyles)==null||c.call(o))}get duration(){var u,o;const l=((o=(u=this.animation.effect)==null?void 0:u.getComputedTiming)==null?void 0:o.call(u).duration)||0;return He(Number(l))}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+He(l)}get time(){return He(Number(this.animation.currentTime)||0)}set time(l){const u=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ce(l),u&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(l){l<0&&(this.finishedTime=null),this.animation.playbackRate=l}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(l){this.manualStartTime=this.animation.startTime=l}attachTimeline({timeline:l,rangeStart:u,rangeEnd:o,observe:c}){var d;return this.allowFlatten&&((d=this.animation.effect)==null||d.updateTiming({easing:"linear"})),this.animation.onfinish=null,l&&Qx()?(this.animation.timeline=l,u&&(this.animation.rangeStart=u),o&&(this.animation.rangeEnd=o),Xe):c(this)}}const xy={anticipate:J0,backInOut:k0,circInOut:W0};function kx(i){return i in xy}function Jx(i){typeof i.ease=="string"&&kx(i.ease)&&(i.ease=xy[i.ease])}const Zr=10;class Fx extends vy{constructor(l){Jx(l),cy(l),super(l),l.startTime!==void 0&&l.autoplay!==!1&&(this.startTime=l.startTime),this.options=l}updateMotionValue(l){const{motionValue:u,onUpdate:o,onComplete:c,element:d,...h}=this.options;if(!u)return;if(l!==void 0){u.set(l);return}const m=new lu({...h,autoplay:!1}),g=Math.max(Zr,oe.now()-this.startTime),p=tn(0,Zr,g-Zr),v=m.sample(g).value,{name:x}=this.options;d&&x&&dy(d,x,v),u.setWithVelocity(m.sample(Math.max(0,g-p)).value,v,p),m.stop()}}const Vp=(i,l)=>l==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Ke.test(i)||i==="0")&&!i.startsWith("url("));function Wx(i){const l=i[0];if(i.length===1)return!0;for(let u=0;u<i.length;u++)if(i[u]!==l)return!0}function $x(i,l,u,o){const c=i[0];if(c===null)return!1;if(l==="display"||l==="visibility")return!0;const d=i[i.length-1],h=Vp(c,l),m=Vp(d,l);return!h||!m?!1:Wx(i)||(u==="spring"||gy(u))&&o}function pc(i){i.duration=0,i.type="keyframes"}const Sy=new Set(["opacity","clipPath","filter","transform"]),Px=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ix(i){for(let l=0;l<i.length;l++)if(typeof i[l]=="string"&&Px.test(i[l]))return!0;return!1}const tS=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),eS=Y0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nS(i){var x;const{motionValue:l,name:u,repeatDelay:o,repeatType:c,damping:d,type:h,keyframes:m}=i;if(!(((x=l==null?void 0:l.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:v}=l.owner.getProps();return eS()&&u&&(Sy.has(u)||tS.has(u)&&Ix(m))&&(u!=="transform"||!v)&&!p&&!o&&c!=="mirror"&&d!==0&&h!=="inertia"}const iS=40;class aS extends Yc{constructor({autoplay:l=!0,delay:u=0,type:o="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:h="loop",keyframes:m,name:g,motionValue:p,element:v,...x}){var M;super(),this.stop=()=>{var V,U;this._animation&&(this._animation.stop(),(V=this.stopTimeline)==null||V.call(this)),(U=this.keyframeResolver)==null||U.cancel()},this.createdAt=oe.now();const S={autoplay:l,delay:u,type:o,repeat:c,repeatDelay:d,repeatType:h,name:g,motionValue:p,element:v,...x},T=(v==null?void 0:v.KeyframeResolver)||qc;this.keyframeResolver=new T(m,(V,U,X)=>this.onKeyframesResolved(V,U,S,!X),g,p,v),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(l,u,o,c){var X,Q;this.keyframeResolver=void 0;const{name:d,type:h,velocity:m,delay:g,isHandoff:p,onUpdate:v}=o;this.resolvedAt=oe.now();let x=!0;$x(l,d,h,m)||(x=!1,(Jn.instantAnimations||!g)&&(v==null||v(fu(l,o,u))),l[0]=l[l.length-1],pc(o),o.repeat=0);const T={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>iS?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:u,...o,keyframes:l},M=x&&!p&&nS(T),V=(Q=(X=T.motionValue)==null?void 0:X.owner)==null?void 0:Q.current;let U;if(M)try{U=new Fx({...T,element:V})}catch{U=new lu(T)}else U=new lu(T);U.finished.then(()=>{this.notifyFinished()}).catch(Xe),this.pendingTimeline&&(this.stopTimeline=U.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=U}get finished(){return this._animation?this.animation.finished:this._finished}then(l,u){return this.finished.finally(l).then(()=>{})}get animation(){var l;return this._animation||((l=this.keyframeResolver)==null||l.resume(),Yx()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(l){this.animation.time=l}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(l){this.animation.speed=l}get startTime(){return this.animation.startTime}attachTimeline(l){return this._animation?this.stopTimeline=this.animation.attachTimeline(l):this.pendingTimeline=l,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var l;this._animation&&this.animation.cancel(),(l=this.keyframeResolver)==null||l.cancel()}}function by(i,l,u,o=0,c=1){const d=Array.from(i).sort((p,v)=>p.sortNodePosition(v)).indexOf(l),h=i.size,m=(h-1)*o;return typeof u=="function"?u(d,h):c===1?d*o:m-d*o}const lS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sS(i){const l=lS.exec(i);if(!l)return[,];const[,u,o,c]=l;return[`--${u??o}`,c]}function Ty(i,l,u=1){const[o,c]=sS(i);if(!o)return;const d=window.getComputedStyle(l).getPropertyValue(o);if(d){const h=d.trim();return L0(h)?parseFloat(h):h}return Bc(c)?Ty(c,l,u+1):c}const uS={type:"spring",stiffness:500,damping:25,restSpeed:10},oS=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),rS={type:"keyframes",duration:.8},cS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fS=(i,{keyframes:l})=>l.length>2?rS:ma.has(i)?i.startsWith("scale")?oS(l[1]):uS:cS;function Ay(i,l){if(i!=null&&i.inherit&&l){const{inherit:u,...o}=i;return{...l,...o}}return i}function Gc(i,l){const u=(i==null?void 0:i[l])??(i==null?void 0:i.default)??i;return u!==i?Ay(u,i):u}const hS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function dS(i){for(const l in i)if(!hS.has(l))return!0;return!1}const Qc=(i,l,u,o={},c,d)=>h=>{const m=Gc(o,i)||{},g=m.delay||o.delay||0;let{elapsed:p=0}=o;p=p-Ce(g);const v={keyframes:Array.isArray(u)?u:[null,u],ease:"easeOut",velocity:l.getVelocity(),...m,delay:-p,onUpdate:S=>{l.set(S),m.onUpdate&&m.onUpdate(S)},onComplete:()=>{h(),m.onComplete&&m.onComplete()},name:i,motionValue:l,element:d?void 0:c};dS(m)||Object.assign(v,fS(i,v)),v.duration&&(v.duration=Ce(v.duration)),v.repeatDelay&&(v.repeatDelay=Ce(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let x=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(pc(v),v.delay===0&&(x=!0)),(Jn.instantAnimations||Jn.skipAnimations||c!=null&&c.shouldSkipAnimations||m.skipAnimations)&&(x=!0,pc(v),v.delay=0),v.allowFlatten=!m.type&&!m.ease,x&&!d&&l.get()!==void 0){const S=fu(v.keyframes,m);if(S!==void 0){Rt.update(()=>{v.onUpdate(S),v.onComplete()});return}}return m.isSync?new lu(v):new aS(v)};function Np(i){const l=[{},{}];return i==null||i.values.forEach((u,o)=>{l[0][o]=u.get(),l[1][o]=u.getVelocity()}),l}function Zc(i,l,u,o){if(typeof l=="function"){const[c,d]=Np(o);l=l(u!==void 0?u:i.custom,c,d)}if(typeof l=="string"&&(l=i.variants&&i.variants[l]),typeof l=="function"){const[c,d]=Np(o);l=l(u!==void 0?u:i.custom,c,d)}return l}function bi(i,l,u){const o=i.getProps();return Zc(o,l,u!==void 0?u:o.custom,i)}const Ey=new Set(["width","height","top","left","right","bottom",...da]),jp=30,mS=i=>!isNaN(parseFloat(i));class pS{constructor(l,u={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{var d;const c=oe.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((d=this.events.change)==null||d.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(l),this.owner=u.owner}setCurrent(l){this.current=l,this.updatedAt=oe.now(),this.canTrackVelocity===null&&l!==void 0&&(this.canTrackVelocity=mS(this.current))}setPrevFrameValue(l=this.current){this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt}onChange(l){return this.on("change",l)}on(l,u){this.events[l]||(this.events[l]=new jc);const o=this.events[l].add(u);return l==="change"?()=>{o(),Rt.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const l in this.events)this.events[l].clear()}attach(l,u){this.passiveEffect=l,this.stopPassiveEffect=u}set(l){this.passiveEffect?this.passiveEffect(l,this.updateAndNotify):this.updateAndNotify(l)}setWithVelocity(l,u,o){this.set(u),this.prev=void 0,this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt-o}jump(l,u=!0){this.updateAndNotify(l),this.prev=l,this.prevUpdatedAt=this.prevFrameValue=void 0,u&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var l;(l=this.events.change)==null||l.notify(this.current)}addDependent(l){this.dependents||(this.dependents=new Set),this.dependents.add(l)}removeDependent(l){this.dependents&&this.dependents.delete(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const l=oe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||l-this.updatedAt>jp)return 0;const u=Math.min(this.updatedAt-this.prevUpdatedAt,jp);return q0(parseFloat(this.current)-parseFloat(this.prevFrameValue),u)}start(l){return this.stop(),new Promise(u=>{this.hasAnimated=!0,this.animation=l(u),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var l,u;(l=this.dependents)==null||l.clear(),(u=this.events.destroy)==null||u.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fa(i,l){return new pS(i,l)}const yc=i=>Array.isArray(i);function yS(i,l,u){i.hasValue(l)?i.getValue(l).set(u):i.addValue(l,fa(u))}function gS(i){return yc(i)?i[i.length-1]||0:i}function vS(i,l){const u=bi(i,l);let{transitionEnd:o={},transition:c={},...d}=u||{};d={...d,...o};for(const h in d){const m=gS(d[h]);yS(i,h,m)}}const ae=i=>!!(i&&i.getVelocity);function xS(i){return!!(ae(i)&&i.add)}function gc(i,l){const u=i.getValue("willChange");if(xS(u))return u.add(l);if(!u&&Jn.WillChange){const o=new Jn.WillChange("auto");i.addValue("willChange",o),o.add(l)}}function Kc(i){return i.replace(/([A-Z])/g,l=>`-${l.toLowerCase()}`)}const SS="framerAppearId",My="data-"+Kc(SS);function Dy(i){return i.props[My]}function bS({protectedKeys:i,needsAnimating:l},u){const o=i.hasOwnProperty(u)&&l[u]!==!0;return l[u]=!1,o}function Cy(i,l,{delay:u=0,transitionOverride:o,type:c}={}){let{transition:d,transitionEnd:h,...m}=l;const g=i.getDefaultTransition();d=d?Ay(d,g):g;const p=d==null?void 0:d.reduceMotion,v=d==null?void 0:d.skipAnimations;o&&(d=o);const x=[],S=c&&i.animationState&&i.animationState.getState()[c];for(const T in m){const M=i.getValue(T,i.latestValues[T]??null),V=m[T];if(V===void 0||S&&bS(S,T))continue;const U={delay:u,...Gc(d||{},T)};v&&(U.skipAnimations=!0);const X=M.get();if(X!==void 0&&!M.isAnimating()&&!Array.isArray(V)&&V===X&&!U.velocity){Rt.update(()=>M.set(V));continue}let Q=!1;if(window.MotionHandoffAnimation){const B=Dy(i);if(B){const $=window.MotionHandoffAnimation(B,T,Rt);$!==null&&(U.startTime=$,Q=!0)}}gc(i,T);const Y=p??i.shouldReduceMotion;M.start(Qc(T,M,V,Y&&Ey.has(T)?{type:!1}:U,i,Q));const K=M.animation;K&&x.push(K)}if(h){const T=()=>Rt.update(()=>{h&&vS(i,h)});x.length?Promise.all(x).then(T):T()}return x}function vc(i,l,u={}){var g;const o=bi(i,l,u.type==="exit"?(g=i.presenceContext)==null?void 0:g.custom:void 0);let{transition:c=i.getDefaultTransition()||{}}=o||{};u.transitionOverride&&(c=u.transitionOverride);const d=o?()=>Promise.all(Cy(i,o,u)):()=>Promise.resolve(),h=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:v=0,staggerChildren:x,staggerDirection:S}=c;return TS(i,l,p,v,x,S,u)}:()=>Promise.resolve(),{when:m}=c;if(m){const[p,v]=m==="beforeChildren"?[d,h]:[h,d];return p().then(()=>v())}else return Promise.all([d(),h(u.delay)])}function TS(i,l,u=0,o=0,c=0,d=1,h){const m=[];for(const g of i.variantChildren)g.notify("AnimationStart",l),m.push(vc(g,l,{...h,delay:u+(typeof o=="function"?0:o)+by(i.variantChildren,g,o,c,d)}).then(()=>g.notify("AnimationComplete",l)));return Promise.all(m)}function AS(i,l,u={}){i.notify("AnimationStart",l);let o;if(Array.isArray(l)){const c=l.map(d=>vc(i,d,u));o=Promise.all(c)}else if(typeof l=="string")o=vc(i,l,u);else{const c=typeof l=="function"?bi(i,l,u.custom):l;o=Promise.all(Cy(i,c,u))}return o.then(()=>{i.notify("AnimationComplete",l)})}const ES={test:i=>i==="auto",parse:i=>i},zy=i=>l=>l.test(i),Ry=[ha,P,Ie,Zn,W2,F2,ES],_p=i=>Ry.find(zy(i));function MS(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||X0(i):!0}const DS=new Set(["brightness","contrast","saturate","opacity"]);function CS(i){const[l,u]=i.slice(0,-1).split("(");if(l==="drop-shadow")return i;const[o]=u.match(Uc)||[];if(!o)return i;const c=u.replace(o,"");let d=DS.has(l)?1:0;return o!==u&&(d*=100),l+"("+d+c+")"}const zS=/\b([a-z-]*)\(.*?\)/gu,xc={...Ke,getAnimatableNone:i=>{const l=i.match(zS);return l?l.map(CS).join(" "):i}},Sc={...Ke,getAnimatableNone:i=>{const l=Ke.parse(i);return Ke.createTransformer(i)(l.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},wp={...ha,transform:Math.round},RS={rotate:Zn,rotateX:Zn,rotateY:Zn,rotateZ:Zn,scale:Gs,scaleX:Gs,scaleY:Gs,scaleZ:Gs,skew:Zn,skewX:Zn,skewY:Zn,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:gl,originX:bp,originY:bp,originZ:P},kc={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,fontSize:P,backgroundPositionX:P,backgroundPositionY:P,...RS,zIndex:wp,fillOpacity:gl,strokeOpacity:gl,numOctaves:wp},OS={...kc,color:Kt,backgroundColor:Kt,outlineColor:Kt,fill:Kt,stroke:Kt,borderColor:Kt,borderTopColor:Kt,borderRightColor:Kt,borderBottomColor:Kt,borderLeftColor:Kt,filter:xc,WebkitFilter:xc,mask:Sc,WebkitMask:Sc},Oy=i=>OS[i],VS=new Set([xc,Sc]);function Vy(i,l){let u=Oy(i);return VS.has(u)||(u=Ke),u.getAnimatableNone?u.getAnimatableNone(l):void 0}const NS=new Set(["auto","none","0"]);function jS(i,l,u){let o=0,c;for(;o<i.length&&!c;){const d=i[o];typeof d=="string"&&!NS.has(d)&&ca(d).values.length&&(c=i[o]),o++}if(c&&u)for(const d of l)i[d]=Vy(u,c)}class _S extends qc{constructor(l,u,o,c,d){super(l,u,o,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:l,element:u,name:o}=this;if(!u||!u.current)return;super.readKeyframes();for(let v=0;v<l.length;v++){let x=l[v];if(typeof x=="string"&&(x=x.trim(),Bc(x))){const S=Ty(x,u.current);S!==void 0&&(l[v]=S),v===l.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Ey.has(o)||l.length!==2)return;const[c,d]=l,h=_p(c),m=_p(d),g=Sp(c),p=Sp(d);if(g!==p&&kn[o]){this.needsMeasurement=!0;return}if(h!==m)if(Rp(h)&&Rp(m))for(let v=0;v<l.length;v++){const x=l[v];typeof x=="string"&&(l[v]=parseFloat(x))}else kn[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:l,name:u}=this,o=[];for(let c=0;c<l.length;c++)(l[c]===null||MS(l[c]))&&o.push(c);o.length&&jS(l,o,u)}measureInitialState(){const{element:l,unresolvedKeyframes:u,name:o}=this;if(!l||!l.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=kn[o](l.measureViewportBox(),window.getComputedStyle(l.current)),u[0]=this.measuredOrigin;const c=u[u.length-1];c!==void 0&&l.getValue(o,c).jump(c,!1)}measureEndState(){var m;const{element:l,name:u,unresolvedKeyframes:o}=this;if(!l||!l.current)return;const c=l.getValue(u);c&&c.jump(this.measuredOrigin,!1);const d=o.length-1,h=o[d];o[d]=kn[u](l.measureViewportBox(),window.getComputedStyle(l.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),(m=this.removedTransforms)!=null&&m.length&&this.removedTransforms.forEach(([g,p])=>{l.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function Ny(i,l,u){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let o=document;const c=(u==null?void 0:u[i])??o.querySelectorAll(i);return c?Array.from(c):[]}return Array.from(i).filter(o=>o!=null)}const jy=(i,l)=>l&&typeof i=="number"?l.transform(i):i;function Js(i){return H0(i)&&"offsetHeight"in i&&!("ownerSVGElement"in i)}const{schedule:Jc}=I0(queueMicrotask,!1),Ze={x:!1,y:!1};function _y(){return Ze.x||Ze.y}function wS(i){return i==="x"||i==="y"?Ze[i]?null:(Ze[i]=!0,()=>{Ze[i]=!1}):Ze.x||Ze.y?null:(Ze.x=Ze.y=!0,()=>{Ze.x=Ze.y=!1})}function wy(i,l){const u=Ny(i),o=new AbortController,c={passive:!0,...l,signal:o.signal};return[u,c,()=>o.abort()]}function BS(i){return!(i.pointerType==="touch"||_y())}function US(i,l,u={}){const[o,c,d]=wy(i,u);return o.forEach(h=>{let m=!1,g=!1,p;const v=()=>{h.removeEventListener("pointerleave",M)},x=U=>{p&&(p(U),p=void 0),v()},S=U=>{m=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),g&&(g=!1,x(U))},T=()=>{m=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},M=U=>{if(U.pointerType!=="touch"){if(m){g=!0;return}x(U)}},V=U=>{if(!BS(U))return;g=!1;const X=l(h,U);typeof X=="function"&&(p=X,h.addEventListener("pointerleave",M,c))};h.addEventListener("pointerenter",V,c),h.addEventListener("pointerdown",T,c)}),d}const By=(i,l)=>l?i===l?!0:By(i,l.parentElement):!1,Fc=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,LS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function HS(i){return LS.has(i.tagName)||i.isContentEditable===!0}const XS=new Set(["INPUT","SELECT","TEXTAREA"]);function YS(i){return XS.has(i.tagName)||i.isContentEditable===!0}const Fs=new WeakSet;function Bp(i){return l=>{l.key==="Enter"&&i(l)}}function Kr(i,l){i.dispatchEvent(new PointerEvent("pointer"+l,{isPrimary:!0,bubbles:!0}))}const qS=(i,l)=>{const u=i.currentTarget;if(!u)return;const o=Bp(()=>{if(Fs.has(u))return;Kr(u,"down");const c=Bp(()=>{Kr(u,"up")}),d=()=>Kr(u,"cancel");u.addEventListener("keyup",c,l),u.addEventListener("blur",d,l)});u.addEventListener("keydown",o,l),u.addEventListener("blur",()=>u.removeEventListener("keydown",o),l)};function Up(i){return Fc(i)&&!_y()}const Lp=new WeakSet;function GS(i,l,u={}){const[o,c,d]=wy(i,u),h=m=>{const g=m.currentTarget;if(!Up(m)||Lp.has(m))return;Fs.add(g),u.stopPropagation&&Lp.add(m);const p=l(g,m),v=(T,M)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),Fs.has(g)&&Fs.delete(g),Up(T)&&typeof p=="function"&&p(T,{success:M})},x=T=>{v(T,g===window||g===document||u.useGlobalTarget||By(g,T.target))},S=T=>{v(T,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",S,c)};return o.forEach(m=>{(u.useGlobalTarget?window:m).addEventListener("pointerdown",h,c),Js(m)&&(m.addEventListener("focus",p=>qS(p,c)),!HS(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),d}function Wc(i){return H0(i)&&"ownerSVGElement"in i}const Ws=new WeakMap;let Kn;const Uy=(i,l,u)=>(o,c)=>c&&c[0]?c[0][i+"Size"]:Wc(o)&&"getBBox"in o?o.getBBox()[l]:o[u],QS=Uy("inline","width","offsetWidth"),ZS=Uy("block","height","offsetHeight");function KS({target:i,borderBoxSize:l}){var u;(u=Ws.get(i))==null||u.forEach(o=>{o(i,{get width(){return QS(i,l)},get height(){return ZS(i,l)}})})}function kS(i){i.forEach(KS)}function JS(){typeof ResizeObserver>"u"||(Kn=new ResizeObserver(kS))}function FS(i,l){Kn||JS();const u=Ny(i);return u.forEach(o=>{let c=Ws.get(o);c||(c=new Set,Ws.set(o,c)),c.add(l),Kn==null||Kn.observe(o)}),()=>{u.forEach(o=>{const c=Ws.get(o);c==null||c.delete(l),c!=null&&c.size||Kn==null||Kn.unobserve(o)})}}const $s=new Set;let oa;function WS(){oa=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};$s.forEach(l=>l(i))},window.addEventListener("resize",oa)}function $S(i){return $s.add(i),oa||WS(),()=>{$s.delete(i),!$s.size&&typeof oa=="function"&&(window.removeEventListener("resize",oa),oa=void 0)}}function Hp(i,l){return typeof i=="function"?$S(i):FS(i,l)}function PS(i){return Wc(i)&&i.tagName==="svg"}const IS=[...Ry,Kt,Ke],tb=i=>IS.find(zy(i)),Xp=()=>({translate:0,scale:1,origin:0,originPoint:0}),ra=()=>({x:Xp(),y:Xp()}),Yp=()=>({min:0,max:0}),Jt=()=>({x:Yp(),y:Yp()}),eb=new WeakMap;function hu(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function vl(i){return typeof i=="string"||Array.isArray(i)}const $c=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pc=["initial",...$c];function du(i){return hu(i.animate)||Pc.some(l=>vl(i[l]))}function Ly(i){return!!(du(i)||i.variants)}function nb(i,l,u){for(const o in l){const c=l[o],d=u[o];if(ae(c))i.addValue(o,c);else if(ae(d))i.addValue(o,fa(c,{owner:i}));else if(d!==c)if(i.hasValue(o)){const h=i.getValue(o);h.liveStyle===!0?h.jump(c):h.hasAnimated||h.set(c)}else{const h=i.getStaticValue(o);i.addValue(o,fa(h!==void 0?h:c,{owner:i}))}}for(const o in u)l[o]===void 0&&i.removeValue(o);return l}const bc={current:null},Hy={current:!1},ib=typeof window<"u";function ab(){if(Hy.current=!0,!!ib)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),l=()=>bc.current=i.matches;i.addEventListener("change",l),l()}else bc.current=!1}const qp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let su={};function Xy(i){su=i}function lb(){return su}class sb{scrapeMotionValuesFromProps(l,u,o){return{}}constructor({parent:l,props:u,presenceContext:o,reducedMotionConfig:c,skipAnimations:d,blockInitialAnimation:h,visualState:m},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=qc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=oe.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Rt.render(this.render,!1,!0))};const{latestValues:p,renderState:v}=m;this.latestValues=p,this.baseTarget={...p},this.initialValues=u.initial?{...p}:{},this.renderState=v,this.parent=l,this.props=u,this.presenceContext=o,this.depth=l?l.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=d,this.options=g,this.blockInitialAnimation=!!h,this.isControllingVariants=du(u),this.isVariantNode=Ly(u),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(l&&l.current);const{willChange:x,...S}=this.scrapeMotionValuesFromProps(u,{},this);for(const T in S){const M=S[T];p[T]!==void 0&&ae(M)&&M.set(p[T])}}mount(l){var u,o;if(this.hasBeenMounted)for(const c in this.initialValues)(u=this.values.get(c))==null||u.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=l,eb.set(l,this),this.projection&&!this.projection.instance&&this.projection.mount(l),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,d)=>this.bindToMotionValue(d,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Hy.current||ab(),this.shouldReduceMotion=bc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(o=this.parent)==null||o.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var l;this.projection&&this.projection.unmount(),Fn(this.notifyUpdate),Fn(this.render),this.valueSubscriptions.forEach(u=>u()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(l=this.parent)==null||l.removeChild(this);for(const u in this.events)this.events[u].clear();for(const u in this.features){const o=this.features[u];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(l){this.children.add(l),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(l)}removeChild(l){this.children.delete(l),this.enteringChildren&&this.enteringChildren.delete(l)}bindToMotionValue(l,u){if(this.valueSubscriptions.has(l)&&this.valueSubscriptions.get(l)(),u.accelerate&&Sy.has(l)&&this.current instanceof HTMLElement){const{factory:h,keyframes:m,times:g,ease:p,duration:v}=u.accelerate,x=new vy({element:this.current,name:l,keyframes:m,times:g,ease:p,duration:Ce(v)}),S=h(x);this.valueSubscriptions.set(l,()=>{S(),x.cancel()});return}const o=ma.has(l);o&&this.onBindTransform&&this.onBindTransform();const c=u.on("change",h=>{this.latestValues[l]=h,this.props.onUpdate&&Rt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;typeof window<"u"&&window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,l,u)),this.valueSubscriptions.set(l,()=>{c(),d&&d()})}sortNodePosition(l){return!this.current||!this.sortInstanceNodePosition||this.type!==l.type?0:this.sortInstanceNodePosition(this.current,l.current)}updateFeatures(){let l="animation";for(l in su){const u=su[l];if(!u)continue;const{isEnabled:o,Feature:c}=u;if(!this.features[l]&&c&&o(this.props)&&(this.features[l]=new c(this)),this.features[l]){const d=this.features[l];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Jt()}getStaticValue(l){return this.latestValues[l]}setStaticValue(l,u){this.latestValues[l]=u}update(l,u){(l.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=l,this.prevPresenceContext=this.presenceContext,this.presenceContext=u;for(let o=0;o<qp.length;o++){const c=qp[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,h=l[d];h&&(this.propEventSubscriptions[c]=this.on(c,h))}this.prevMotionValues=nb(this,this.scrapeMotionValuesFromProps(l,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(l){return this.props.variants?this.props.variants[l]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(l){const u=this.getClosestVariantNode();if(u)return u.variantChildren&&u.variantChildren.add(l),()=>u.variantChildren.delete(l)}addValue(l,u){const o=this.values.get(l);u!==o&&(o&&this.removeValue(l),this.bindToMotionValue(l,u),this.values.set(l,u),this.latestValues[l]=u.get())}removeValue(l){this.values.delete(l);const u=this.valueSubscriptions.get(l);u&&(u(),this.valueSubscriptions.delete(l)),delete this.latestValues[l],this.removeValueFromRenderState(l,this.renderState)}hasValue(l){return this.values.has(l)}getValue(l,u){if(this.props.values&&this.props.values[l])return this.props.values[l];let o=this.values.get(l);return o===void 0&&u!==void 0&&(o=fa(u===null?void 0:u,{owner:this}),this.addValue(l,o)),o}readValue(l,u){let o=this.latestValues[l]!==void 0||!this.current?this.latestValues[l]:this.getBaseTargetFromProps(this.props,l)??this.readValueFromInstance(this.current,l,this.options);return o!=null&&(typeof o=="string"&&(L0(o)||X0(o))?o=parseFloat(o):!tb(o)&&Ke.test(u)&&(o=Vy(l,u)),this.setBaseTarget(l,ae(o)?o.get():o)),ae(o)?o.get():o}setBaseTarget(l,u){this.baseTarget[l]=u}getBaseTarget(l){var d;const{initial:u}=this.props;let o;if(typeof u=="string"||typeof u=="object"){const h=Zc(this.props,u,(d=this.presenceContext)==null?void 0:d.custom);h&&(o=h[l])}if(u&&o!==void 0)return o;const c=this.getBaseTargetFromProps(this.props,l);return c!==void 0&&!ae(c)?c:this.initialValues[l]!==void 0&&o===void 0?void 0:this.baseTarget[l]}on(l,u){return this.events[l]||(this.events[l]=new jc),this.events[l].add(u)}notify(l,...u){this.events[l]&&this.events[l].notify(...u)}scheduleRenderMicrotask(){Jc.render(this.render)}}class Yy extends sb{constructor(){super(...arguments),this.KeyframeResolver=_S}sortInstanceNodePosition(l,u){return l.compareDocumentPosition(u)&2?1:-1}getBaseTargetFromProps(l,u){const o=l.style;return o?o[u]:void 0}removeValueFromRenderState(l,{vars:u,style:o}){delete u[l],delete o[l]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:l}=this.props;ae(l)&&(this.childSubscription=l.on("change",u=>{this.current&&(this.current.textContent=`${u}`)}))}}class Wn{constructor(l){this.isMounted=!1,this.node=l}update(){}}function qy({top:i,left:l,right:u,bottom:o}){return{x:{min:l,max:u},y:{min:i,max:o}}}function ub({x:i,y:l}){return{top:l.min,right:i.max,bottom:l.max,left:i.min}}function ob(i,l){if(!l)return i;const u=l({x:i.left,y:i.top}),o=l({x:i.right,y:i.bottom});return{top:u.y,left:u.x,bottom:o.y,right:o.x}}function kr(i){return i===void 0||i===1}function Tc({scale:i,scaleX:l,scaleY:u}){return!kr(i)||!kr(l)||!kr(u)}function gi(i){return Tc(i)||Gy(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function Gy(i){return Gp(i.x)||Gp(i.y)}function Gp(i){return i&&i!=="0%"}function uu(i,l,u){const o=i-u,c=l*o;return u+c}function Qp(i,l,u,o,c){return c!==void 0&&(i=uu(i,c,o)),uu(i,u,o)+l}function Ac(i,l=0,u=1,o,c){i.min=Qp(i.min,l,u,o,c),i.max=Qp(i.max,l,u,o,c)}function Qy(i,{x:l,y:u}){Ac(i.x,l.translate,l.scale,l.originPoint),Ac(i.y,u.translate,u.scale,u.originPoint)}const Zp=.999999999999,Kp=1.0000000000001;function rb(i,l,u,o=!1){var m;const c=u.length;if(!c)return;l.x=l.y=1;let d,h;for(let g=0;g<c;g++){d=u[g],h=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&(Pe(i.x,-d.scroll.offset.x),Pe(i.y,-d.scroll.offset.y)),h&&(l.x*=h.x.scale,l.y*=h.y.scale,Qy(i,h)),o&&gi(d.latestValues)&&Ps(i,d.latestValues,(m=d.layout)==null?void 0:m.layoutBox))}l.x<Kp&&l.x>Zp&&(l.x=1),l.y<Kp&&l.y>Zp&&(l.y=1)}function Pe(i,l){i.min+=l,i.max+=l}function kp(i,l,u,o,c=.5){const d=Nt(i.min,i.max,c);Ac(i,l,u,d,o)}function Jp(i,l){return typeof i=="string"?parseFloat(i)/100*(l.max-l.min):i}function Ps(i,l,u){const o=u??i;kp(i.x,Jp(l.x,o.x),l.scaleX,l.scale,l.originX),kp(i.y,Jp(l.y,o.y),l.scaleY,l.scale,l.originY)}function Zy(i,l){return qy(ob(i.getBoundingClientRect(),l))}function cb(i,l,u){const o=Zy(i,u),{scroll:c}=l;return c&&(Pe(o.x,c.offset.x),Pe(o.y,c.offset.y)),o}const fb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hb=da.length;function db(i,l,u){let o="",c=!0;for(let d=0;d<hb;d++){const h=da[d],m=i[h];if(m===void 0)continue;let g=!0;if(typeof m=="number")g=m===(h.startsWith("scale")?1:0);else{const p=parseFloat(m);g=h.startsWith("scale")?p===1:p===0}if(!g||u){const p=jy(m,kc[h]);if(!g){c=!1;const v=fb[h]||h;o+=`${v}(${p}) `}u&&(l[h]=p)}}return o=o.trim(),u?o=u(l,c?"":o):c&&(o="none"),o}function Ic(i,l,u){const{style:o,vars:c,transformOrigin:d}=i;let h=!1,m=!1;for(const g in l){const p=l[g];if(ma.has(g)){h=!0;continue}else if(ey(g)){c[g]=p;continue}else{const v=jy(p,kc[g]);g.startsWith("origin")?(m=!0,d[g]=v):o[g]=v}}if(l.transform||(h||u?o.transform=db(l,i.transform,u):o.transform&&(o.transform="none")),m){const{originX:g="50%",originY:p="50%",originZ:v=0}=d;o.transformOrigin=`${g} ${p} ${v}`}}function Ky(i,{style:l,vars:u},o,c){const d=i.style;let h;for(h in l)d[h]=l[h];c==null||c.applyProjectionStyles(d,o);for(h in u)d.setProperty(h,u[h])}function Fp(i,l){return l.max===l.min?0:i/(l.max-l.min)*100}const cl={correct:(i,l)=>{if(!l.target)return i;if(typeof i=="string")if(P.test(i))i=parseFloat(i);else return i;const u=Fp(i,l.target.x),o=Fp(i,l.target.y);return`${u}% ${o}%`}},mb={correct:(i,{treeScale:l,projectionDelta:u})=>{const o=i,c=Ke.parse(i);if(c.length>5)return o;const d=Ke.createTransformer(i),h=typeof c[0]!="number"?1:0,m=u.x.scale*l.x,g=u.y.scale*l.y;c[0+h]/=m,c[1+h]/=g;const p=Nt(m,g,.5);return typeof c[2+h]=="number"&&(c[2+h]/=p),typeof c[3+h]=="number"&&(c[3+h]/=p),d(c)}},Ec={borderRadius:{...cl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:cl,borderTopRightRadius:cl,borderBottomLeftRadius:cl,borderBottomRightRadius:cl,boxShadow:mb};function ky(i,{layout:l,layoutId:u}){return ma.has(i)||i.startsWith("origin")||(l||u!==void 0)&&(!!Ec[i]||i==="opacity")}function tf(i,l,u){var h;const o=i.style,c=l==null?void 0:l.style,d={};if(!o)return d;for(const m in o)(ae(o[m])||c&&ae(c[m])||ky(m,i)||((h=u==null?void 0:u.getValue(m))==null?void 0:h.liveStyle)!==void 0)&&(d[m]=o[m]);return d}function pb(i){return window.getComputedStyle(i)}class yb extends Yy{constructor(){super(...arguments),this.type="html",this.renderInstance=Ky}readValueFromInstance(l,u){var o;if(ma.has(u))return(o=this.projection)!=null&&o.isProjecting?cc(u):Bx(l,u);{const c=pb(l),d=(ey(u)?c.getPropertyValue(u):c[u])||0;return typeof d=="string"?d.trim():d}}measureInstanceViewportBox(l,{transformPagePoint:u}){return Zy(l,u)}build(l,u,o){Ic(l,u,o.transformTemplate)}scrapeMotionValuesFromProps(l,u,o){return tf(l,u,o)}}const gb={offset:"stroke-dashoffset",array:"stroke-dasharray"},vb={offset:"strokeDashoffset",array:"strokeDasharray"};function xb(i,l,u=1,o=0,c=!0){i.pathLength=1;const d=c?gb:vb;i[d.offset]=`${-o}`,i[d.array]=`${l} ${u}`}const Sb=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Jy(i,{attrX:l,attrY:u,attrScale:o,pathLength:c,pathSpacing:d=1,pathOffset:h=0,...m},g,p,v){if(Ic(i,m,p),g){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:x,style:S}=i;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=(v==null?void 0:v.transformBox)??"fill-box",delete x.transformBox);for(const T of Sb)x[T]!==void 0&&(S[T]=x[T],delete x[T]);l!==void 0&&(x.x=l),u!==void 0&&(x.y=u),o!==void 0&&(x.scale=o),c!==void 0&&xb(x,c,d,h,!1)}const Fy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Wy=i=>typeof i=="string"&&i.toLowerCase()==="svg";function bb(i,l,u,o){Ky(i,l,void 0,o);for(const c in l.attrs)i.setAttribute(Fy.has(c)?c:Kc(c),l.attrs[c])}function $y(i,l,u){const o=tf(i,l,u);for(const c in i)if(ae(i[c])||ae(l[c])){const d=da.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[d]=i[c]}return o}class Tb extends Yy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Jt}getBaseTargetFromProps(l,u){return l[u]}readValueFromInstance(l,u){if(ma.has(u)){const o=Oy(u);return o&&o.default||0}return u=Fy.has(u)?u:Kc(u),l.getAttribute(u)}scrapeMotionValuesFromProps(l,u,o){return $y(l,u,o)}build(l,u,o){Jy(l,u,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(l,u,o,c){bb(l,u,o,c)}mount(l){this.isSVGTag=Wy(l.tagName),super.mount(l)}}const Ab=Pc.length;function Py(i){if(!i)return;if(!i.isControllingVariants){const u=i.parent?Py(i.parent)||{}:{};return i.props.initial!==void 0&&(u.initial=i.props.initial),u}const l={};for(let u=0;u<Ab;u++){const o=Pc[u],c=i.props[o];(vl(c)||c===!1)&&(l[o]=c)}return l}function Iy(i,l){if(!Array.isArray(l))return!1;const u=l.length;if(u!==i.length)return!1;for(let o=0;o<u;o++)if(l[o]!==i[o])return!1;return!0}const Eb=[...$c].reverse(),Mb=$c.length;function Db(i){return l=>Promise.all(l.map(({animation:u,options:o})=>AS(i,u,o)))}function Cb(i){let l=Db(i),u=Wp(),o=!0,c=!1;const d=p=>(v,x)=>{var T;const S=bi(i,x,p==="exit"?(T=i.presenceContext)==null?void 0:T.custom:void 0);if(S){const{transition:M,transitionEnd:V,...U}=S;v={...v,...U,...V}}return v};function h(p){l=p(i)}function m(p){const{props:v}=i,x=Py(i.parent)||{},S=[],T=new Set;let M={},V=1/0;for(let X=0;X<Mb;X++){const Q=Eb[X],Y=u[Q],K=v[Q]!==void 0?v[Q]:x[Q],B=vl(K),$=Q===p?Y.isActive:null;$===!1&&(V=X);let q=K===x[Q]&&K!==v[Q]&&B;if(q&&(o||c)&&i.manuallyAnimateOnMount&&(q=!1),Y.protectedKeys={...M},!Y.isActive&&$===null||!K&&!Y.prevProp||hu(K)||typeof K=="boolean")continue;if(Q==="exit"&&Y.isActive&&$!==!0){Y.prevResolvedValues&&(M={...M,...Y.prevResolvedValues});continue}const G=zb(Y.prevProp,K);let it=G||Q===p&&Y.isActive&&!q&&B||X>V&&B,et=!1;const ct=Array.isArray(K)?K:[K];let vt=ct.reduce(d(Q),{});$===!1&&(vt={});const{prevResolvedValues:$t={}}=Y,Yt={...$t,...vt},Ut=F=>{it=!0,T.has(F)&&(et=!0,T.delete(F)),Y.needsAnimating[F]=!0;const ot=i.getValue(F);ot&&(ot.liveStyle=!1)};for(const F in Yt){const ot=vt[F],yt=$t[F];if(M.hasOwnProperty(F))continue;let E=!1;yc(ot)&&yc(yt)?E=!Iy(ot,yt)||G:E=ot!==yt,E?ot!=null?Ut(F):T.add(F):ot!==void 0&&T.has(F)?Ut(F):Y.protectedKeys[F]=!0}Y.prevProp=K,Y.prevResolvedValues=vt,Y.isActive&&(M={...M,...vt}),(o||c)&&i.blockInitialAnimation&&(it=!1);const j=q&&G;it&&(!j||et)&&S.push(...ct.map(F=>{const ot={type:Q};if(typeof F=="string"&&(o||c)&&!j&&i.manuallyAnimateOnMount&&i.parent){const{parent:yt}=i,E=bi(yt,F);if(yt.enteringChildren&&E){const{delayChildren:H}=E.transition||{};ot.delay=by(yt.enteringChildren,i,H)}}return{animation:F,options:ot}}))}if(T.size){const X={};if(typeof v.initial!="boolean"){const Q=bi(i,Array.isArray(v.initial)?v.initial[0]:v.initial);Q&&Q.transition&&(X.transition=Q.transition)}T.forEach(Q=>{const Y=i.getBaseTarget(Q),K=i.getValue(Q);K&&(K.liveStyle=!0),X[Q]=Y??null}),S.push({animation:X})}let U=!!S.length;return o&&(v.initial===!1||v.initial===v.animate)&&!i.manuallyAnimateOnMount&&(U=!1),o=!1,c=!1,U?l(S):Promise.resolve()}function g(p,v){var S;if(u[p].isActive===v)return Promise.resolve();(S=i.variantChildren)==null||S.forEach(T=>{var M;return(M=T.animationState)==null?void 0:M.setActive(p,v)}),u[p].isActive=v;const x=m(p);for(const T in u)u[T].protectedKeys={};return x}return{animateChanges:m,setActive:g,setAnimateFunction:h,getState:()=>u,reset:()=>{u=Wp(),c=!0}}}function zb(i,l){return typeof l=="string"?l!==i:Array.isArray(l)?!Iy(l,i):!1}function yi(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wp(){return{animate:yi(!0),whileInView:yi(),whileHover:yi(),whileTap:yi(),whileDrag:yi(),whileFocus:yi(),exit:yi()}}function Mc(i,l){i.min=l.min,i.max=l.max}function Qe(i,l){Mc(i.x,l.x),Mc(i.y,l.y)}function $p(i,l){i.translate=l.translate,i.scale=l.scale,i.originPoint=l.originPoint,i.origin=l.origin}const tg=1e-4,Rb=1-tg,Ob=1+tg,eg=.01,Vb=0-eg,Nb=0+eg;function re(i){return i.max-i.min}function jb(i,l,u){return Math.abs(i-l)<=u}function Pp(i,l,u,o=.5){i.origin=o,i.originPoint=Nt(l.min,l.max,i.origin),i.scale=re(u)/re(l),i.translate=Nt(u.min,u.max,i.origin)-i.originPoint,(i.scale>=Rb&&i.scale<=Ob||isNaN(i.scale))&&(i.scale=1),(i.translate>=Vb&&i.translate<=Nb||isNaN(i.translate))&&(i.translate=0)}function ml(i,l,u,o){Pp(i.x,l.x,u.x,o?o.originX:void 0),Pp(i.y,l.y,u.y,o?o.originY:void 0)}function Ip(i,l,u,o=0){const c=o?Nt(u.min,u.max,o):u.min;i.min=c+l.min,i.max=i.min+re(l)}function _b(i,l,u,o){Ip(i.x,l.x,u.x,o==null?void 0:o.x),Ip(i.y,l.y,u.y,o==null?void 0:o.y)}function t0(i,l,u,o=0){const c=o?Nt(u.min,u.max,o):u.min;i.min=l.min-c,i.max=i.min+re(l)}function ou(i,l,u,o){t0(i.x,l.x,u.x,o==null?void 0:o.x),t0(i.y,l.y,u.y,o==null?void 0:o.y)}function e0(i,l,u,o,c){return i-=l,i=uu(i,1/u,o),c!==void 0&&(i=uu(i,1/c,o)),i}function wb(i,l=0,u=1,o=.5,c,d=i,h=i){if(Ie.test(l)&&(l=parseFloat(l),l=Nt(h.min,h.max,l/100)-h.min),typeof l!="number")return;let m=Nt(d.min,d.max,o);i===d&&(m-=l),i.min=e0(i.min,l,u,m,c),i.max=e0(i.max,l,u,m,c)}function n0(i,l,[u,o,c],d,h){wb(i,l[u],l[o],l[c],l.scale,d,h)}const Bb=["x","scaleX","originX"],Ub=["y","scaleY","originY"];function i0(i,l,u,o){n0(i.x,l,Bb,u?u.x:void 0,o?o.x:void 0),n0(i.y,l,Ub,u?u.y:void 0,o?o.y:void 0)}function a0(i){return i.translate===0&&i.scale===1}function ng(i){return a0(i.x)&&a0(i.y)}function l0(i,l){return i.min===l.min&&i.max===l.max}function Lb(i,l){return l0(i.x,l.x)&&l0(i.y,l.y)}function s0(i,l){return Math.round(i.min)===Math.round(l.min)&&Math.round(i.max)===Math.round(l.max)}function ig(i,l){return s0(i.x,l.x)&&s0(i.y,l.y)}function u0(i){return re(i.x)/re(i.y)}function o0(i,l){return i.translate===l.translate&&i.scale===l.scale&&i.originPoint===l.originPoint}function $e(i){return[i("x"),i("y")]}function Hb(i,l,u){let o="";const c=i.x.translate/l.x,d=i.y.translate/l.y,h=(u==null?void 0:u.z)||0;if((c||d||h)&&(o=`translate3d(${c}px, ${d}px, ${h}px) `),(l.x!==1||l.y!==1)&&(o+=`scale(${1/l.x}, ${1/l.y}) `),u){const{transformPerspective:p,rotate:v,rotateX:x,rotateY:S,skewX:T,skewY:M}=u;p&&(o=`perspective(${p}px) ${o}`),v&&(o+=`rotate(${v}deg) `),x&&(o+=`rotateX(${x}deg) `),S&&(o+=`rotateY(${S}deg) `),T&&(o+=`skewX(${T}deg) `),M&&(o+=`skewY(${M}deg) `)}const m=i.x.scale*l.x,g=i.y.scale*l.y;return(m!==1||g!==1)&&(o+=`scale(${m}, ${g})`),o||"none"}const ag=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Xb=ag.length,r0=i=>typeof i=="string"?parseFloat(i):i,c0=i=>typeof i=="number"||P.test(i);function Yb(i,l,u,o,c,d){c?(i.opacity=Nt(0,u.opacity??1,qb(o)),i.opacityExit=Nt(l.opacity??1,0,Gb(o))):d&&(i.opacity=Nt(l.opacity??1,u.opacity??1,o));for(let h=0;h<Xb;h++){const m=ag[h];let g=f0(l,m),p=f0(u,m);if(g===void 0&&p===void 0)continue;g||(g=0),p||(p=0),g===0||p===0||c0(g)===c0(p)?(i[m]=Math.max(Nt(r0(g),r0(p),o),0),(Ie.test(p)||Ie.test(g))&&(i[m]+="%")):i[m]=p}(l.rotate||u.rotate)&&(i.rotate=Nt(l.rotate||0,u.rotate||0,o))}function f0(i,l){return i[l]!==void 0?i[l]:i.borderRadius}const qb=lg(0,.5,F0),Gb=lg(.5,.95,Xe);function lg(i,l,u){return o=>o<i?0:o>l?1:u(yl(i,l,o))}function Qb(i,l,u){const o=ae(i)?i:fa(i);return o.start(Qc("",o,l,u)),o.animation}function xl(i,l,u,o={passive:!0}){return i.addEventListener(l,u,o),()=>i.removeEventListener(l,u)}const Zb=(i,l)=>i.depth-l.depth;class Kb{constructor(){this.children=[],this.isDirty=!1}add(l){Vc(this.children,l),this.isDirty=!0}remove(l){eu(this.children,l),this.isDirty=!0}forEach(l){this.isDirty&&this.children.sort(Zb),this.isDirty=!1,this.children.forEach(l)}}function kb(i,l){const u=oe.now(),o=({timestamp:c})=>{const d=c-u;d>=l&&(Fn(o),i(d-l))};return Rt.setup(o,!0),()=>Fn(o)}function Is(i){return ae(i)?i.get():i}class Jb{constructor(){this.members=[]}add(l){Vc(this.members,l);for(let u=this.members.length-1;u>=0;u--){const o=this.members[u];if(o===l||o===this.lead||o===this.prevLead)continue;const c=o.instance;(!c||c.isConnected===!1)&&!o.snapshot&&(eu(this.members,o),o.unmount())}l.scheduleRender()}remove(l){if(eu(this.members,l),l===this.prevLead&&(this.prevLead=void 0),l===this.lead){const u=this.members[this.members.length-1];u&&this.promote(u)}}relegate(l){var u;for(let o=this.members.indexOf(l)-1;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1&&((u=c.instance)==null?void 0:u.isConnected)!==!1)return this.promote(c),!0}return!1}promote(l,u){var c;const o=this.lead;if(l!==o&&(this.prevLead=o,this.lead=l,l.show(),o)){o.updateSnapshot(),l.scheduleRender();const{layoutDependency:d}=o.options,{layoutDependency:h}=l.options;(d===void 0||d!==h)&&(l.resumeFrom=o,u&&(o.preserveOpacity=!0),o.snapshot&&(l.snapshot=o.snapshot,l.snapshot.latestValues=o.animationValues||o.latestValues),(c=l.root)!=null&&c.isUpdating&&(l.isLayoutDirty=!0)),l.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(l=>{var u,o,c,d,h;(o=(u=l.options).onExitComplete)==null||o.call(u),(h=(c=l.resumingFrom)==null?void 0:(d=c.options).onExitComplete)==null||h.call(d)})}scheduleRender(){this.members.forEach(l=>l.instance&&l.scheduleRender(!1))}removeLeadSnapshot(){var l;(l=this.lead)!=null&&l.snapshot&&(this.lead.snapshot=void 0)}}const tu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Jr=["","X","Y","Z"],Fb=1e3;let Wb=0;function Fr(i,l,u,o){const{latestValues:c}=l;c[i]&&(u[i]=c[i],l.setStaticValue(i,0),o&&(o[i]=0))}function sg(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:l}=i.options;if(!l)return;const u=Dy(l);if(window.MotionHasOptimisedAnimation(u,"transform")){const{layout:c,layoutId:d}=i.options;window.MotionCancelOptimisedAnimation(u,"transform",Rt,!(c||d))}const{parent:o}=i;o&&!o.hasCheckedOptimisedAppear&&sg(o)}function ug({attachResizeListener:i,defaultParent:l,measureScroll:u,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(h={},m=l==null?void 0:l()){this.id=Wb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Ib),this.nodes.forEach(lT),this.nodes.forEach(sT),this.nodes.forEach(tT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new Kb)}addEventListener(h,m){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new jc),this.eventHandlers.get(h).add(m)}notifyListeners(h,...m){const g=this.eventHandlers.get(h);g&&g.notify(...m)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=Wc(h)&&!PS(h),this.instance=h;const{layoutId:m,layout:g,visualElement:p}=this.options;if(p&&!p.current&&p.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||m)&&(this.isLayoutDirty=!0),i){let v,x=0;const S=()=>this.root.updateBlockedByResize=!1;Rt.read(()=>{x=window.innerWidth}),i(h,()=>{const T=window.innerWidth;T!==x&&(x=T,this.root.updateBlockedByResize=!0,v&&v(),v=kb(S,250),tu.hasAnimatedSinceResize&&(tu.hasAnimatedSinceResize=!1,this.nodes.forEach(m0)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||g)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||p.getDefaultTransition()||fT,{onLayoutAnimationStart:V,onLayoutAnimationComplete:U}=p.getProps(),X=!this.targetLayout||!ig(this.targetLayout,T),Q=!x&&S;if(this.options.layoutRoot||this.resumeFrom||Q||x&&(X||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const Y={...Gc(M,"layout"),onPlay:V,onComplete:U};(p.shouldReduceMotion||this.options.layoutRoot)&&(Y.delay=0,Y.type=!1),this.startAnimation(Y),this.setAnimationOrigin(v,Q)}else x||m0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uT),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const x=this.path[v];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:m,layout:g}=this.options;if(m===void 0&&!g)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const g=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),g&&this.nodes.forEach(nT),this.nodes.forEach(h0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(d0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(iT),this.nodes.forEach(aT),this.nodes.forEach($b),this.nodes.forEach(Pb)):this.nodes.forEach(d0),this.clearAllSnapshots();const m=oe.now();ie.delta=tn(0,1e3/60,m-ie.timestamp),ie.timestamp=m,ie.isProcessing=!0,Xr.update.process(ie),Xr.preRender.process(ie),Xr.render.process(ie),ie.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(eT),this.sharedNodes.forEach(oT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Rt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Rt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!re(this.snapshot.measuredBox.x)&&!re(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Jt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(m=!1),m&&this.instance){const g=o(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:g,offset:u(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!c)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!ng(this.projectionDelta),g=this.getTransformTemplate(),p=g?g(this.latestValues,""):void 0,v=p!==this.prevTransformTemplateValue;h&&this.instance&&(m||gi(this.latestValues)||v)&&(c(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const m=this.measurePageBox();let g=this.removeElementScroll(m);return h&&(g=this.removeTransform(g)),hT(g),{animationId:this.root.animationId,measuredBox:m,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:h}=this.options;if(!h)return Jt();const m=h.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(dT))){const{scroll:v}=this.root;v&&(Pe(m.x,v.offset.x),Pe(m.y,v.offset.y))}return m}removeElementScroll(h){var g;const m=Jt();if(Qe(m,h),(g=this.scroll)!=null&&g.wasRoot)return m;for(let p=0;p<this.path.length;p++){const v=this.path[p],{scroll:x,options:S}=v;v!==this.root&&x&&S.layoutScroll&&(x.wasRoot&&Qe(m,h),Pe(m.x,x.offset.x),Pe(m.y,x.offset.y))}return m}applyTransform(h,m=!1,g){var v,x;const p=g||Jt();Qe(p,h);for(let S=0;S<this.path.length;S++){const T=this.path[S];!m&&T.options.layoutScroll&&T.scroll&&T!==T.root&&(Pe(p.x,-T.scroll.offset.x),Pe(p.y,-T.scroll.offset.y)),gi(T.latestValues)&&Ps(p,T.latestValues,(v=T.layout)==null?void 0:v.layoutBox)}return gi(this.latestValues)&&Ps(p,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),p}removeTransform(h){var g;const m=Jt();Qe(m,h);for(let p=0;p<this.path.length;p++){const v=this.path[p];if(!gi(v.latestValues))continue;let x;v.instance&&(Tc(v.latestValues)&&v.updateSnapshot(),x=Jt(),Qe(x,v.measurePageBox())),i0(m,v.latestValues,(g=v.snapshot)==null?void 0:g.layoutBox,x)}return gi(this.latestValues)&&i0(m,this.latestValues),m}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ie.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){var T;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==m;if(!(h||g&&this.isSharedProjectionDirty||this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:x}=this.options;if(!this.layout||!(v||x))return;this.resolvedRelativeTargetAt=ie.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Jt(),this.targetWithTransforms=Jt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),_b(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Qe(this.target,this.layout.layoutBox),Qy(this.target,this.targetDelta)):Qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Tc(this.parent.latestValues)||Gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,m,g){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jt(),this.relativeTargetOrigin=Jt(),ou(this.relativeTargetOrigin,m,g,this.options.layoutAnchor||void 0),Qe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const h=this.getLead(),m=!!this.resumingFrom||this!==h;let g=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(g=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===ie.timestamp&&(g=!1),g)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;Qe(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;rb(this.layoutCorrected,this.treeScale,this.path,m),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Jt());const{target:T}=h;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($p(this.prevProjectionDelta.x,this.projectionDelta.x),$p(this.prevProjectionDelta.y,this.projectionDelta.y)),ml(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!o0(this.projectionDelta.x,this.prevProjectionDelta.x)||!o0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){var m;if((m=this.options.visualElement)==null||m.scheduleRender(),h){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ra(),this.projectionDelta=ra(),this.projectionDeltaWithTransform=ra()}setAnimationOrigin(h,m=!1){const g=this.snapshot,p=g?g.latestValues:{},v={...this.latestValues},x=ra();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const S=Jt(),T=g?g.source:void 0,M=this.layout?this.layout.source:void 0,V=T!==M,U=this.getStack(),X=!U||U.members.length<=1,Q=!!(V&&!X&&this.options.crossfade===!0&&!this.path.some(cT));this.animationProgress=0;let Y;this.mixTargetDelta=K=>{const B=K/1e3;p0(x.x,h.x,B),p0(x.y,h.y,B),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ou(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),rT(this.relativeTarget,this.relativeTargetOrigin,S,B),Y&&Lb(this.relativeTarget,Y)&&(this.isProjectionDirty=!1),Y||(Y=Jt()),Qe(Y,this.relativeTarget)),V&&(this.animationValues=v,Yb(v,p,this.latestValues,B,Q,X)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){var m,g,p;this.notifyListeners("animationStart"),(m=this.currentAnimation)==null||m.stop(),(p=(g=this.resumingFrom)==null?void 0:g.currentAnimation)==null||p.stop(),this.pendingAnimation&&(Fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Rt.update(()=>{tu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fa(0)),this.motionValue.jump(0,!1),this.currentAnimation=Qb(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:v=>{this.mixTargetDelta(v),h.onUpdate&&h.onUpdate(v)},onStop:()=>{},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Fb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:m,target:g,layout:p,latestValues:v}=h;if(!(!m||!g||!p)){if(this!==h&&this.layout&&p&&og(this.options.animationType,this.layout.layoutBox,p.layoutBox)){g=this.target||Jt();const x=re(this.layout.layoutBox.x);g.x.min=h.target.x.min,g.x.max=g.x.min+x;const S=re(this.layout.layoutBox.y);g.y.min=h.target.y.min,g.y.max=g.y.min+S}Qe(m,g),Ps(m,v),ml(this.projectionDeltaWithTransform,this.layoutCorrected,m,v)}}registerSharedNode(h,m){this.sharedNodes.has(h)||this.sharedNodes.set(h,new Jb),this.sharedNodes.get(h).add(m);const p=m.options.initialPromotionConfig;m.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(m):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){var m;const{layoutId:h}=this.options;return h?((m=this.getStack())==null?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:h}=this.options;return h?(m=this.getStack())==null?void 0:m.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:m,preserveFollowOpacity:g}={}){const p=this.getStack();p&&p.promote(this,g),h&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let m=!1;const{latestValues:g}=h;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(m=!0),!m)return;const p={};g.z&&Fr("z",h,p,this.animationValues);for(let v=0;v<Jr.length;v++)Fr(`rotate${Jr[v]}`,h,p,this.animationValues),Fr(`skew${Jr[v]}`,h,p,this.animationValues);h.render();for(const v in p)h.setStaticValue(v,p[v]),this.animationValues&&(this.animationValues[v]=p[v]);h.scheduleRender()}applyProjectionStyles(h,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=Is(m==null?void 0:m.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=Is(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!gi(this.latestValues)&&(h.transform=g?g({},""):"none",this.hasProjected=!1);return}h.visibility="";const v=p.animationValues||p.latestValues;this.applyTransformsToTarget();let x=Hb(this.projectionDeltaWithTransform,this.treeScale,v);g&&(x=g(v,x)),h.transform=x;const{x:S,y:T}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${T.origin*100}% 0`,p.animationValues?h.opacity=p===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=p===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const M in Ec){if(v[M]===void 0)continue;const{correct:V,applyTo:U,isCSSVariable:X}=Ec[M],Q=x==="none"?v[M]:V(v[M],p);if(U){const Y=U.length;for(let K=0;K<Y;K++)h[U[K]]=Q}else X?this.options.visualElement.renderState.vars[M]=Q:h[M]=Q}this.options.layoutId&&(h.pointerEvents=p===this?Is(m==null?void 0:m.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>{var m;return(m=h.currentAnimation)==null?void 0:m.stop()}),this.root.nodes.forEach(h0),this.root.sharedNodes.clear()}}}function $b(i){i.updateLayout()}function Pb(i){var u;const l=((u=i.resumeFrom)==null?void 0:u.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&l&&i.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:c}=i.layout,{animationType:d}=i.options,h=l.source!==i.layout.source;if(d==="size")$e(x=>{const S=h?l.measuredBox[x]:l.layoutBox[x],T=re(S);S.min=o[x].min,S.max=S.min+T});else if(d==="x"||d==="y"){const x=d==="x"?"y":"x";Mc(h?l.measuredBox[x]:l.layoutBox[x],o[x])}else og(d,l.layoutBox,o)&&$e(x=>{const S=h?l.measuredBox[x]:l.layoutBox[x],T=re(o[x]);S.max=S.min+T,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[x].max=i.relativeTarget[x].min+T)});const m=ra();ml(m,o,l.layoutBox);const g=ra();h?ml(g,i.applyTransform(c,!0),l.measuredBox):ml(g,o,l.layoutBox);const p=!ng(m);let v=!1;if(!i.resumeFrom){const x=i.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:S,layout:T}=x;if(S&&T){const M=i.options.layoutAnchor||void 0,V=Jt();ou(V,l.layoutBox,S.layoutBox,M);const U=Jt();ou(U,o,T.layoutBox,M),ig(V,U)||(v=!0),x.options.layoutRoot&&(i.relativeTarget=U,i.relativeTargetOrigin=V,i.relativeParent=x)}}}i.notifyListeners("didUpdate",{layout:o,snapshot:l,delta:g,layoutDelta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:v})}else if(i.isLead()){const{onExitComplete:o}=i.options;o&&o()}i.options.transition=void 0}function Ib(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function tT(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function eT(i){i.clearSnapshot()}function h0(i){i.clearMeasurements()}function nT(i){i.isLayoutDirty=!0,i.updateLayout()}function d0(i){i.isLayoutDirty=!1}function iT(i){i.isAnimationBlocked&&i.layout&&!i.isLayoutDirty&&(i.snapshot=i.layout,i.isLayoutDirty=!0)}function aT(i){const{visualElement:l}=i.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),i.resetTransform()}function m0(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function lT(i){i.resolveTargetDelta()}function sT(i){i.calcProjection()}function uT(i){i.resetSkewAndRotation()}function oT(i){i.removeLeadSnapshot()}function p0(i,l,u){i.translate=Nt(l.translate,0,u),i.scale=Nt(l.scale,1,u),i.origin=l.origin,i.originPoint=l.originPoint}function y0(i,l,u,o){i.min=Nt(l.min,u.min,o),i.max=Nt(l.max,u.max,o)}function rT(i,l,u,o){y0(i.x,l.x,u.x,o),y0(i.y,l.y,u.y,o)}function cT(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const fT={duration:.45,ease:[.4,0,.1,1]},g0=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),v0=g0("applewebkit/")&&!g0("chrome/")?Math.round:Xe;function x0(i){i.min=v0(i.min),i.max=v0(i.max)}function hT(i){x0(i.x),x0(i.y)}function og(i,l,u){return i==="position"||i==="preserve-aspect"&&!jb(u0(l),u0(u),.2)}function dT(i){var l;return i!==i.root&&((l=i.scroll)==null?void 0:l.wasRoot)}const mT=ug({attachResizeListener:(i,l)=>xl(i,"resize",l),measureScroll:()=>{var i,l;return{x:document.documentElement.scrollLeft||((i=document.body)==null?void 0:i.scrollLeft)||0,y:document.documentElement.scrollTop||((l=document.body)==null?void 0:l.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Wr={current:void 0},rg=ug({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Wr.current){const i=new mT({});i.mount(window),i.setOptions({layoutScroll:!0}),Wr.current=i}return Wr.current},resetTransform:(i,l)=>{i.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),ef=Z.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function S0(i,l){if(typeof i=="function")return i(l);i!=null&&(i.current=l)}function pT(...i){return l=>{let u=!1;const o=i.map(c=>{const d=S0(c,l);return!u&&typeof d=="function"&&(u=!0),d});if(u)return()=>{for(let c=0;c<o.length;c++){const d=o[c];typeof d=="function"?d():S0(i[c],null)}}}}function yT(...i){return Z.useCallback(pT(...i),i)}class gT extends Z.Component{getSnapshotBeforeUpdate(l){const u=this.props.childRef.current;if(Js(u)&&l.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=u.offsetParent,c=Js(o)&&o.offsetWidth||0,d=Js(o)&&o.offsetHeight||0,h=getComputedStyle(u),m=this.props.sizeRef.current;m.height=parseFloat(h.height),m.width=parseFloat(h.width),m.top=u.offsetTop,m.left=u.offsetLeft,m.right=c-m.width-m.left,m.bottom=d-m.height-m.top,m.direction=h.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function vT({children:i,isPresent:l,anchorX:u,anchorY:o,root:c,pop:d}){var S;const h=Z.useId(),m=Z.useRef(null),g=Z.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:p}=Z.useContext(ef),v=((S=i.props)==null?void 0:S.ref)??(i==null?void 0:i.ref),x=yT(m,v);return Z.useInsertionEffect(()=>{const{width:T,height:M,top:V,left:U,right:X,bottom:Q,direction:Y}=g.current;if(l||d===!1||!m.current||!T||!M)return;const K=Y==="rtl",B=u==="left"?K?`right: ${X}`:`left: ${U}`:K?`left: ${U}`:`right: ${X}`,$=o==="bottom"?`bottom: ${Q}`:`top: ${V}`;m.current.dataset.motionPopId=h;const q=document.createElement("style");p&&(q.nonce=p);const G=c??document.head;return G.appendChild(q),q.sheet&&q.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${M}px !important;
            ${B}px !important;
            ${$}px !important;
          }
        `),()=>{var it;(it=m.current)==null||it.removeAttribute("data-motion-pop-id"),G.contains(q)&&G.removeChild(q)}},[l]),C.jsx(gT,{isPresent:l,childRef:m,sizeRef:g,pop:d,children:d===!1?i:Z.cloneElement(i,{ref:x})})}const xT=({children:i,initial:l,isPresent:u,onExitComplete:o,custom:c,presenceAffectsLayout:d,mode:h,anchorX:m,anchorY:g,root:p})=>{const v=Oc(ST),x=Z.useId();let S=!0,T=Z.useMemo(()=>(S=!1,{id:x,initial:l,isPresent:u,custom:c,onExitComplete:M=>{v.set(M,!0);for(const V of v.values())if(!V)return;o&&o()},register:M=>(v.set(M,!1),()=>v.delete(M))}),[u,v,o]);return d&&S&&(T={...T}),Z.useMemo(()=>{v.forEach((M,V)=>v.set(V,!1))},[u]),Z.useEffect(()=>{!u&&!v.size&&o&&o()},[u]),i=C.jsx(vT,{pop:h==="popLayout",isPresent:u,anchorX:m,anchorY:g,root:p,children:i}),C.jsx(cu.Provider,{value:T,children:i})};function ST(){return new Map}function cg(i=!0){const l=Z.useContext(cu);if(l===null)return[!0,null];const{isPresent:u,onExitComplete:o,register:c}=l,d=Z.useId();Z.useEffect(()=>{if(i)return c(d)},[i]);const h=Z.useCallback(()=>i&&o&&o(d),[d,o,i]);return!u&&o?[!1,h]:[!0]}const Qs=i=>i.key||"";function b0(i){const l=[];return Z.Children.forEach(i,u=>{Z.isValidElement(u)&&l.push(u)}),l}const $r=({children:i,custom:l,initial:u=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync",propagate:h=!1,anchorX:m="left",anchorY:g="top",root:p})=>{const[v,x]=cg(h),S=Z.useMemo(()=>b0(i),[i]),T=h&&!v?[]:S.map(Qs),M=Z.useRef(!0),V=Z.useRef(S),U=Oc(()=>new Map),X=Z.useRef(new Set),[Q,Y]=Z.useState(S),[K,B]=Z.useState(S);U0(()=>{M.current=!1,V.current=S;for(let G=0;G<K.length;G++){const it=Qs(K[G]);T.includes(it)?(U.delete(it),X.current.delete(it)):U.get(it)!==!0&&U.set(it,!1)}},[K,T.length,T.join("-")]);const $=[];if(S!==Q){let G=[...S];for(let it=0;it<K.length;it++){const et=K[it],ct=Qs(et);T.includes(ct)||(G.splice(it,0,et),$.push(et))}return d==="wait"&&$.length&&(G=$),B(b0(G)),Y(S),null}const{forceRender:q}=Z.useContext(Rc);return C.jsx(C.Fragment,{children:K.map(G=>{const it=Qs(G),et=h&&!v?!1:S===K||T.includes(it),ct=()=>{if(X.current.has(it))return;if(U.has(it))X.current.add(it),U.set(it,!0);else return;let vt=!0;U.forEach($t=>{$t||(vt=!1)}),vt&&(q==null||q(),B(V.current),h&&(x==null||x()),o&&o())};return C.jsx(xT,{isPresent:et,initial:!M.current||u?void 0:!1,custom:l,presenceAffectsLayout:c,mode:d,root:p,onExitComplete:et?void 0:ct,anchorX:m,anchorY:g,children:G},it)})})},fg=Z.createContext({strict:!1}),T0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let A0=!1;function bT(){if(A0)return;const i={};for(const l in T0)i[l]={isEnabled:u=>T0[l].some(o=>!!u[o])};Xy(i),A0=!0}function hg(){return bT(),lb()}function TT(i){const l=hg();for(const u in i)l[u]={...l[u],...i[u]};Xy(l)}const AT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ru(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||AT.has(i)}let dg=i=>!ru(i);function ET(i){typeof i=="function"&&(dg=l=>l.startsWith("on")?!ru(l):i(l))}try{ET(require("@emotion/is-prop-valid").default)}catch{}function MT(i,l,u){const o={};for(const c in i)c==="values"&&typeof i.values=="object"||ae(i[c])||(dg(c)||u===!0&&ru(c)||!l&&!ru(c)||i.draggable&&c.startsWith("onDrag"))&&(o[c]=i[c]);return o}const mu=Z.createContext({});function DT(i,l){if(du(i)){const{initial:u,animate:o}=i;return{initial:u===!1||vl(u)?u:void 0,animate:vl(o)?o:void 0}}return i.inherit!==!1?l:{}}function CT(i){const{initial:l,animate:u}=DT(i,Z.useContext(mu));return Z.useMemo(()=>({initial:l,animate:u}),[E0(l),E0(u)])}function E0(i){return Array.isArray(i)?i.join(" "):i}const nf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function mg(i,l,u){for(const o in l)!ae(l[o])&&!ky(o,u)&&(i[o]=l[o])}function zT({transformTemplate:i},l){return Z.useMemo(()=>{const u=nf();return Ic(u,l,i),Object.assign({},u.vars,u.style)},[l])}function RT(i,l){const u=i.style||{},o={};return mg(o,u,i),Object.assign(o,zT(i,l)),o}function OT(i,l){const u={},o=RT(i,l);return i.drag&&i.dragListener!==!1&&(u.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(u.tabIndex=0),u.style=o,u}const pg=()=>({...nf(),attrs:{}});function VT(i,l,u,o){const c=Z.useMemo(()=>{const d=pg();return Jy(d,l,Wy(o),i.transformTemplate,i.style),{...d.attrs,style:{...d.style}}},[l]);if(i.style){const d={};mg(d,i.style,i),c.style={...d,...c.style}}return c}const NT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function af(i){return typeof i!="string"||i.includes("-")?!1:!!(NT.indexOf(i)>-1||/[A-Z]/u.test(i))}function jT(i,l,u,{latestValues:o},c,d=!1,h){const g=(h??af(i)?VT:OT)(l,o,c,i),p=MT(l,typeof i=="string",d),v=i!==Z.Fragment?{...p,...g,ref:u}:{},{children:x}=l,S=Z.useMemo(()=>ae(x)?x.get():x,[x]);return Z.createElement(i,{...v,children:S})}function _T({scrapeMotionValuesFromProps:i,createRenderState:l},u,o,c){return{latestValues:wT(u,o,c,i),renderState:l()}}function wT(i,l,u,o){const c={},d=o(i,{});for(const S in d)c[S]=Is(d[S]);let{initial:h,animate:m}=i;const g=du(i),p=Ly(i);l&&p&&!g&&i.inherit!==!1&&(h===void 0&&(h=l.initial),m===void 0&&(m=l.animate));let v=u?u.initial===!1:!1;v=v||h===!1;const x=v?m:h;if(x&&typeof x!="boolean"&&!hu(x)){const S=Array.isArray(x)?x:[x];for(let T=0;T<S.length;T++){const M=Zc(i,S[T]);if(M){const{transitionEnd:V,transition:U,...X}=M;for(const Q in X){let Y=X[Q];if(Array.isArray(Y)){const K=v?Y.length-1:0;Y=Y[K]}Y!==null&&(c[Q]=Y)}for(const Q in V)c[Q]=V[Q]}}}return c}const yg=i=>(l,u)=>{const o=Z.useContext(mu),c=Z.useContext(cu),d=()=>_T(i,l,o,c);return u?d():Oc(d)},BT=yg({scrapeMotionValuesFromProps:tf,createRenderState:nf}),UT=yg({scrapeMotionValuesFromProps:$y,createRenderState:pg}),LT=Symbol.for("motionComponentSymbol");function HT(i,l,u){const o=Z.useRef(u);Z.useInsertionEffect(()=>{o.current=u});const c=Z.useRef(null);return Z.useCallback(d=>{var m;d&&((m=i.onMount)==null||m.call(i,d)),l&&(d?l.mount(d):l.unmount());const h=o.current;if(typeof h=="function")if(d){const g=h(d);typeof g=="function"&&(c.current=g)}else c.current?(c.current(),c.current=null):h(d);else h&&(h.current=d)},[l])}const gg=Z.createContext({});function sa(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function XT(i,l,u,o,c,d){var Y,K;const{visualElement:h}=Z.useContext(mu),m=Z.useContext(fg),g=Z.useContext(cu),p=Z.useContext(ef),v=p.reducedMotion,x=p.skipAnimations,S=Z.useRef(null),T=Z.useRef(!1);o=o||m.renderer,!S.current&&o&&(S.current=o(i,{visualState:l,parent:h,props:u,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:v,skipAnimations:x,isSVG:d}),T.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const M=S.current,V=Z.useContext(gg);M&&!M.projection&&c&&(M.type==="html"||M.type==="svg")&&YT(S.current,u,c,V);const U=Z.useRef(!1);Z.useInsertionEffect(()=>{M&&U.current&&M.update(u,g)});const X=u[My],Q=Z.useRef(!!X&&typeof window<"u"&&!((Y=window.MotionHandoffIsComplete)!=null&&Y.call(window,X))&&((K=window.MotionHasOptimisedAnimation)==null?void 0:K.call(window,X)));return U0(()=>{T.current=!0,M&&(U.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),Q.current&&M.animationState&&M.animationState.animateChanges())}),Z.useEffect(()=>{M&&(!Q.current&&M.animationState&&M.animationState.animateChanges(),Q.current&&(queueMicrotask(()=>{var B;(B=window.MotionHandoffMarkAsComplete)==null||B.call(window,X)}),Q.current=!1),M.enteringChildren=void 0)}),M}function YT(i,l,u,o){const{layoutId:c,layout:d,drag:h,dragConstraints:m,layoutScroll:g,layoutRoot:p,layoutAnchor:v,layoutCrossfade:x}=l;i.projection=new u(i.latestValues,l["data-framer-portal-id"]?void 0:vg(i.parent)),i.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!h||m&&sa(m),visualElement:i,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,crossfade:x,layoutScroll:g,layoutRoot:p,layoutAnchor:v})}function vg(i){if(i)return i.options.allowProjection!==!1?i.projection:vg(i.parent)}function Pr(i,{forwardMotionProps:l=!1,type:u}={},o,c){o&&TT(o);const d=u?u==="svg":af(i),h=d?UT:BT;function m(p,v){let x;const S={...Z.useContext(ef),...p,layoutId:qT(p)},{isStatic:T}=S,M=CT(p),V=h(p,T);if(!T&&typeof window<"u"){GT();const U=QT(S);x=U.MeasureLayout,M.visualElement=XT(i,V,S,c,U.ProjectionNode,d)}return C.jsxs(mu.Provider,{value:M,children:[x&&M.visualElement?C.jsx(x,{visualElement:M.visualElement,...S}):null,jT(i,p,HT(V,M.visualElement,v),V,T,l,d)]})}m.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const g=Z.forwardRef(m);return g[LT]=i,g}function qT({layoutId:i}){const l=Z.useContext(Rc).id;return l&&i!==void 0?l+"-"+i:i}function GT(i,l){Z.useContext(fg).strict}function QT(i){const l=hg(),{drag:u,layout:o}=l;if(!u&&!o)return{};const c={...u,...o};return{MeasureLayout:u!=null&&u.isEnabled(i)||o!=null&&o.isEnabled(i)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function ZT(i,l){if(typeof Proxy>"u")return Pr;const u=new Map,o=(d,h)=>Pr(d,h,i,l),c=(d,h)=>o(d,h);return new Proxy(c,{get:(d,h)=>h==="create"?o:(u.has(h)||u.set(h,Pr(h,void 0,i,l)),u.get(h))})}const KT=(i,l)=>l.isSVG??af(i)?new Tb(l):new yb(l,{allowProjection:i!==Z.Fragment});class kT extends Wn{constructor(l){super(l),l.animationState||(l.animationState=Cb(l))}updateAnimationControlsSubscription(){const{animate:l}=this.node.getProps();hu(l)&&(this.unmountControls=l.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:l}=this.node.getProps(),{animate:u}=this.node.prevProps||{};l!==u&&this.updateAnimationControlsSubscription()}unmount(){var l;this.node.animationState.reset(),(l=this.unmountControls)==null||l.call(this)}}let JT=0;class FT extends Wn{constructor(){super(...arguments),this.id=JT++,this.isExitComplete=!1}update(){var d;if(!this.node.presenceContext)return;const{isPresent:l,onExitComplete:u}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||l===o)return;if(l&&o===!1){if(this.isExitComplete){const{initial:h,custom:m}=this.node.getProps();if(typeof h=="string"||typeof h=="object"&&h!==null&&!Array.isArray(h)){const g=bi(this.node,h,m);if(g){const{transition:p,transitionEnd:v,...x}=g;for(const S in x)(d=this.node.getValue(S))==null||d.jump(x[S])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!l);u&&!l&&c.then(()=>{this.isExitComplete=!0,u(this.id)})}mount(){const{register:l,onExitComplete:u}=this.node.presenceContext||{};u&&u(this.id),l&&(this.unmount=l(this.id))}unmount(){}}const WT={animation:{Feature:kT},exit:{Feature:FT}};function Al(i){return{point:{x:i.pageX,y:i.pageY}}}const $T=i=>l=>Fc(l)&&i(l,Al(l));function pl(i,l,u,o){return xl(i,l,$T(u),o)}const xg=({current:i})=>i?i.ownerDocument.defaultView:null,M0=(i,l)=>Math.abs(i-l);function PT(i,l){const u=M0(i.x,l.x),o=M0(i.y,l.y);return Math.sqrt(u**2+o**2)}const D0=new Set(["auto","scroll"]);class Sg{constructor(l,u,{transformPagePoint:o,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:h=3,element:m}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=T=>{this.handleScroll(T.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Zs(this.lastRawMoveEventInfo,this.transformPagePoint));const T=Ir(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,V=PT(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!V)return;const{point:U}=T,{timestamp:X}=ie;this.history.push({...U,timestamp:X});const{onStart:Q,onMove:Y}=this.handlers;M||(Q&&Q(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,T)},this.handlePointerMove=(T,M)=>{this.lastMoveEvent=T,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Zs(M,this.transformPagePoint),Rt.update(this.updatePoint,!0)},this.handlePointerUp=(T,M)=>{this.end();const{onEnd:V,onSessionEnd:U,resumeAnimation:X}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&X&&X(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const Q=Ir(T.type==="pointercancel"?this.lastMoveEventInfo:Zs(M,this.transformPagePoint),this.history);this.startEvent&&V&&V(T,Q),U&&U(T,Q)},!Fc(l))return;this.dragSnapToOrigin=d,this.handlers=u,this.transformPagePoint=o,this.distanceThreshold=h,this.contextWindow=c||window;const g=Al(l),p=Zs(g,this.transformPagePoint),{point:v}=p,{timestamp:x}=ie;this.history=[{...v,timestamp:x}];const{onSessionStart:S}=u;S&&S(l,Ir(p,this.history)),this.removeListeners=Sl(pl(this.contextWindow,"pointermove",this.handlePointerMove),pl(this.contextWindow,"pointerup",this.handlePointerUp),pl(this.contextWindow,"pointercancel",this.handlePointerUp)),m&&this.startScrollTracking(m)}startScrollTracking(l){let u=l.parentElement;for(;u;){const o=getComputedStyle(u);(D0.has(o.overflowX)||D0.has(o.overflowY))&&this.scrollPositions.set(u,{x:u.scrollLeft,y:u.scrollTop}),u=u.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(l){const u=this.scrollPositions.get(l);if(!u)return;const o=l===window,c=o?{x:window.scrollX,y:window.scrollY}:{x:l.scrollLeft,y:l.scrollTop},d={x:c.x-u.x,y:c.y-u.y};d.x===0&&d.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=d.x,this.lastMoveEventInfo.point.y+=d.y):this.history.length>0&&(this.history[0].x-=d.x,this.history[0].y-=d.y),this.scrollPositions.set(l,c),Rt.update(this.updatePoint,!0))}updateHandlers(l){this.handlers=l}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Fn(this.updatePoint)}}function Zs(i,l){return l?{point:l(i.point)}:i}function C0(i,l){return{x:i.x-l.x,y:i.y-l.y}}function Ir({point:i},l){return{point:i,delta:C0(i,bg(l)),offset:C0(i,IT(l)),velocity:t3(l,.1)}}function IT(i){return i[0]}function bg(i){return i[i.length-1]}function t3(i,l){if(i.length<2)return{x:0,y:0};let u=i.length-1,o=null;const c=bg(i);for(;u>=0&&(o=i[u],!(c.timestamp-o.timestamp>Ce(l)));)u--;if(!o)return{x:0,y:0};o===i[0]&&i.length>2&&c.timestamp-o.timestamp>Ce(l)*2&&(o=i[1]);const d=He(c.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const h={x:(c.x-o.x)/d,y:(c.y-o.y)/d};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function e3(i,{min:l,max:u},o){return l!==void 0&&i<l?i=o?Nt(l,i,o.min):Math.max(i,l):u!==void 0&&i>u&&(i=o?Nt(u,i,o.max):Math.min(i,u)),i}function z0(i,l,u){return{min:l!==void 0?i.min+l:void 0,max:u!==void 0?i.max+u-(i.max-i.min):void 0}}function n3(i,{top:l,left:u,bottom:o,right:c}){return{x:z0(i.x,u,c),y:z0(i.y,l,o)}}function R0(i,l){let u=l.min-i.min,o=l.max-i.max;return l.max-l.min<i.max-i.min&&([u,o]=[o,u]),{min:u,max:o}}function i3(i,l){return{x:R0(i.x,l.x),y:R0(i.y,l.y)}}function a3(i,l){let u=.5;const o=re(i),c=re(l);return c>o?u=yl(l.min,l.max-o,i.min):o>c&&(u=yl(i.min,i.max-c,l.min)),tn(0,1,u)}function l3(i,l){const u={};return l.min!==void 0&&(u.min=l.min-i.min),l.max!==void 0&&(u.max=l.max-i.min),u}const Dc=.35;function s3(i=Dc){return i===!1?i=0:i===!0&&(i=Dc),{x:O0(i,"left","right"),y:O0(i,"top","bottom")}}function O0(i,l,u){return{min:V0(i,l),max:V0(i,u)}}function V0(i,l){return typeof i=="number"?i:i[l]||0}const u3=new WeakMap;class o3{constructor(l){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Jt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=l}start(l,{snapToCursor:u=!1,distanceThreshold:o}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=x=>{u&&this.snapToCursor(Al(x).point),this.stopAnimation()},h=(x,S)=>{const{drag:T,dragPropagation:M,onDragStart:V}=this.getProps();if(T&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wS(T),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$e(X=>{let Q=this.getAxisMotionValue(X).get()||0;if(Ie.test(Q)){const{projection:Y}=this.visualElement;if(Y&&Y.layout){const K=Y.layout.layoutBox[X];K&&(Q=re(K)*(parseFloat(Q)/100))}}this.originPoint[X]=Q}),V&&Rt.update(()=>V(x,S),!1,!0),gc(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},m=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S;const{dragPropagation:T,dragDirectionLock:M,onDirectionLock:V,onDrag:U}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:X}=S;if(M&&this.currentDirection===null){this.currentDirection=c3(X),this.currentDirection!==null&&V&&V(this.currentDirection);return}this.updateAxis("x",S.point,X),this.updateAxis("y",S.point,X),this.visualElement.render(),U&&Rt.update(()=>U(x,S),!1,!0)},g=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S,this.stop(x,S),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:v}=this.getProps();this.panSession=new Sg(l,{onSessionStart:d,onStart:h,onMove:m,onSessionEnd:g,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:o,contextWindow:xg(this.visualElement),element:this.visualElement.current})}stop(l,u){const o=l||this.latestPointerEvent,c=u||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!o)return;const{velocity:h}=c;this.startAnimation(h);const{onDragEnd:m}=this.getProps();m&&Rt.postRender(()=>m(o,c))}cancel(){this.isDragging=!1;const{projection:l,animationState:u}=this.visualElement;l&&(l.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),u&&u.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(l,u,o){const{drag:c}=this.getProps();if(!o||!Ks(l,c,this.currentDirection))return;const d=this.getAxisMotionValue(l);let h=this.originPoint[l]+o[l];this.constraints&&this.constraints[l]&&(h=e3(h,this.constraints[l],this.elastic[l])),d.set(h)}resolveConstraints(){var d;const{dragConstraints:l,dragElastic:u}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(d=this.visualElement.projection)==null?void 0:d.layout,c=this.constraints;l&&sa(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&o?this.constraints=n3(o.layoutBox,l):this.constraints=!1,this.elastic=s3(u),c!==this.constraints&&!sa(l)&&o&&this.constraints&&!this.hasMutatedConstraints&&$e(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=l3(o.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:l,onMeasureDragConstraints:u}=this.getProps();if(!l||!sa(l))return!1;const o=l.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;c.root&&(c.root.scroll=void 0,c.root.updateScroll());const d=cb(o,c.root,this.visualElement.getTransformPagePoint());let h=i3(c.layout.layoutBox,d);if(u){const m=u(ub(h));this.hasMutatedConstraints=!!m,m&&(h=qy(m))}return h}startAnimation(l){const{drag:u,dragMomentum:o,dragElastic:c,dragTransition:d,dragSnapToOrigin:h,onDragTransitionEnd:m}=this.getProps(),g=this.constraints||{},p=$e(v=>{if(!Ks(v,u,this.currentDirection))return;let x=g&&g[v]||{};(h===!0||h===v)&&(x={min:0,max:0});const S=c?200:1e6,T=c?40:1e7,M={type:"inertia",velocity:o?l[v]:0,bounceStiffness:S,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...d,...x};return this.startAxisValueAnimation(v,M)});return Promise.all(p).then(m)}startAxisValueAnimation(l,u){const o=this.getAxisMotionValue(l);return gc(this.visualElement,l),o.start(Qc(l,o,0,u,this.visualElement,!1))}stopAnimation(){$e(l=>this.getAxisMotionValue(l).stop())}getAxisMotionValue(l){const u=`_drag${l.toUpperCase()}`,c=this.visualElement.getProps()[u];return c||this.visualElement.getValue(l,this.visualElement.latestValues[l]??0)}snapToCursor(l){$e(u=>{const{drag:o}=this.getProps();if(!Ks(u,o,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(u);if(c&&c.layout){const{min:h,max:m}=c.layout.layoutBox[u],g=d.get()||0;d.set(l[u]-Nt(h,m,.5)+g)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:l,dragConstraints:u}=this.getProps(),{projection:o}=this.visualElement;if(!sa(u)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};$e(h=>{const m=this.getAxisMotionValue(h);if(m&&this.constraints!==!1){const g=m.get();c[h]=a3({min:g,max:g},this.constraints[h])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),$e(h=>{if(!Ks(h,l,null))return;const m=this.getAxisMotionValue(h),{min:g,max:p}=this.constraints[h];m.set(Nt(g,p,c[h]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;u3.set(this.visualElement,this);const l=this.visualElement.current,u=pl(l,"pointerdown",p=>{const{drag:v,dragListener:x=!0}=this.getProps(),S=p.target,T=S!==l&&YS(S);v&&x&&!T&&this.start(p)});let o;const c=()=>{const{dragConstraints:p}=this.getProps();sa(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),o||(o=r3(l,p.current,()=>this.scalePositionWithinConstraints())))},{projection:d}=this.visualElement,h=d.addEventListener("measure",c);d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),Rt.read(c);const m=xl(window,"resize",()=>this.scalePositionWithinConstraints()),g=d.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:v})=>{this.isDragging&&v&&($e(x=>{const S=this.getAxisMotionValue(x);S&&(this.originPoint[x]+=p[x].translate,S.set(S.get()+p[x].translate))}),this.visualElement.render())}));return()=>{m(),u(),h(),g&&g(),o&&o()}}getProps(){const l=this.visualElement.getProps(),{drag:u=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:h=Dc,dragMomentum:m=!0}=l;return{...l,drag:u,dragDirectionLock:o,dragPropagation:c,dragConstraints:d,dragElastic:h,dragMomentum:m}}}function N0(i){let l=!0;return()=>{if(l){l=!1;return}i()}}function r3(i,l,u){const o=Hp(i,N0(u)),c=Hp(l,N0(u));return()=>{o(),c()}}function Ks(i,l,u){return(l===!0||l===i)&&(u===null||u===i)}function c3(i,l=10){let u=null;return Math.abs(i.y)>l?u="y":Math.abs(i.x)>l&&(u="x"),u}class f3 extends Wn{constructor(l){super(l),this.removeGroupControls=Xe,this.removeListeners=Xe,this.controls=new o3(l)}mount(){const{dragControls:l}=this.node.getProps();l&&(this.removeGroupControls=l.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xe}update(){const{dragControls:l}=this.node.getProps(),{dragControls:u}=this.node.prevProps||{};l!==u&&(this.removeGroupControls(),l&&(this.removeGroupControls=l.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const tc=i=>(l,u)=>{i&&Rt.update(()=>i(l,u),!1,!0)};class h3 extends Wn{constructor(){super(...arguments),this.removePointerDownListener=Xe}onPointerDown(l){this.session=new Sg(l,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:xg(this.node)})}createPanHandlers(){const{onPanSessionStart:l,onPanStart:u,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:tc(l),onStart:tc(u),onMove:tc(o),onEnd:(d,h)=>{delete this.session,c&&Rt.postRender(()=>c(d,h))}}}mount(){this.removePointerDownListener=pl(this.node.current,"pointerdown",l=>this.onPointerDown(l))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ec=!1;class d3 extends Z.Component{componentDidMount(){const{visualElement:l,layoutGroup:u,switchLayoutGroup:o,layoutId:c}=this.props,{projection:d}=l;d&&(u.group&&u.group.add(d),o&&o.register&&c&&o.register(d),ec&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),tu.hasEverUpdated=!0}getSnapshotBeforeUpdate(l){const{layoutDependency:u,visualElement:o,drag:c,isPresent:d}=this.props,{projection:h}=o;return h&&(h.isPresent=d,l.layoutDependency!==u&&h.setOptions({...h.options,layoutDependency:u}),ec=!0,c||l.layoutDependency!==u||u===void 0||l.isPresent!==d?h.willUpdate():this.safeToRemove(),l.isPresent!==d&&(d?h.promote():h.relegate()||Rt.postRender(()=>{const m=h.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:l,layoutAnchor:u}=this.props,{projection:o}=l;o&&(o.options.layoutAnchor=u,o.root.didUpdate(),Jc.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:l,layoutGroup:u,switchLayoutGroup:o}=this.props,{projection:c}=l;ec=!0,c&&(c.scheduleCheckAfterUnmount(),u&&u.group&&u.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:l}=this.props;l&&l()}render(){return null}}function Tg(i){const[l,u]=cg(),o=Z.useContext(Rc);return C.jsx(d3,{...i,layoutGroup:o,switchLayoutGroup:Z.useContext(gg),isPresent:l,safeToRemove:u})}const m3={pan:{Feature:h3},drag:{Feature:f3,ProjectionNode:rg,MeasureLayout:Tg}};function j0(i,l,u){const{props:o}=i;i.animationState&&o.whileHover&&i.animationState.setActive("whileHover",u==="Start");const c="onHover"+u,d=o[c];d&&Rt.postRender(()=>d(l,Al(l)))}class p3 extends Wn{mount(){const{current:l}=this.node;l&&(this.unmount=US(l,(u,o)=>(j0(this.node,o,"Start"),c=>j0(this.node,c,"End"))))}unmount(){}}class y3 extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let l=!1;try{l=this.node.current.matches(":focus-visible")}catch{l=!0}!l||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Sl(xl(this.node.current,"focus",()=>this.onFocus()),xl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _0(i,l,u){const{props:o}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&o.whileTap&&i.animationState.setActive("whileTap",u==="Start");const c="onTap"+(u==="End"?"":u),d=o[c];d&&Rt.postRender(()=>d(l,Al(l)))}class g3 extends Wn{mount(){const{current:l}=this.node;if(!l)return;const{globalTapTarget:u,propagate:o}=this.node.props;this.unmount=GS(l,(c,d)=>(_0(this.node,d,"Start"),(h,{success:m})=>_0(this.node,h,m?"End":"Cancel")),{useGlobalTarget:u,stopPropagation:(o==null?void 0:o.tap)===!1})}unmount(){}}const Cc=new WeakMap,nc=new WeakMap,v3=i=>{const l=Cc.get(i.target);l&&l(i)},x3=i=>{i.forEach(v3)};function S3({root:i,...l}){const u=i||document;nc.has(u)||nc.set(u,{});const o=nc.get(u),c=JSON.stringify(l);return o[c]||(o[c]=new IntersectionObserver(x3,{root:i,...l})),o[c]}function b3(i,l,u){const o=S3(l);return Cc.set(i,u),o.observe(i),()=>{Cc.delete(i),o.unobserve(i)}}const T3={some:0,all:1};class A3 extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var g;(g=this.stopObserver)==null||g.call(this);const{viewport:l={}}=this.node.getProps(),{root:u,margin:o,amount:c="some",once:d}=l,h={root:u?u.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:T3[c]},m=p=>{const{isIntersecting:v}=p;if(this.isInView===v||(this.isInView=v,d&&!v&&this.hasEnteredView))return;v&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",v);const{onViewportEnter:x,onViewportLeave:S}=this.node.getProps(),T=v?x:S;T&&T(p)};this.stopObserver=b3(this.node.current,h,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:l,prevProps:u}=this.node;["amount","margin","root"].some(E3(l,u))&&this.startObserver()}unmount(){var l;(l=this.stopObserver)==null||l.call(this),this.hasEnteredView=!1,this.isInView=!1}}function E3({viewport:i={}},{viewport:l={}}={}){return u=>i[u]!==l[u]}const M3={inView:{Feature:A3},tap:{Feature:g3},focus:{Feature:y3},hover:{Feature:p3}},D3={layout:{ProjectionNode:rg,MeasureLayout:Tg}},C3={...WT,...M3,...m3,...D3},ic=ZT(C3,KT),z3={id:"customer_service",title:"多扬健康平台·客服服务标准化服务话术库",subtitle:"指导客服人员规范服务行为，提升服务质量，保护患者权益",lastUpdated:"2026-05-22",content:`# 多扬健康平台·客服服务标准化服务话术库

> **适用范围**：多扬健康平台全体客服人员  
> **核心定位**：本话术库旨在指导客服人员规范服务行为，提升服务质量，保护患者权益。

---

## 第一章 总则

### 1.1 话术库使用说明

本话术库是多扬健康平台客服服务的标准化指南，适用于平台所有在线问诊、健康管理、陪诊、绿通等服务场景。客服人员在日常工作中应：

- **优先熟读总则与红线清单**，建立清晰的角色边界意识
- **按需查阅具体场景章节**，结合用户实际情况灵活运用
- **严格遵守话术规范**，尤其是标注"禁止""不可"的内容
- **遇到医疗相关问题**，遵循"转医生优先、保护患者、留存记录"原则

### 1.2 客服服务定位与边界声明

#### 1.2.1 客服角色定位

客服是多扬健康平台的前端服务人员，承担**服务咨询与用户支持**职能。

> **核心原则**：客服的职责是解答用户咨询、处理平台使用问题、协调服务资源。客服不是医疗人员，对于涉及诊断、治疗、用药等医疗问题，应引导用户对接专业医生，不可自行处理。

#### 1.2.2 客服可开展的服务范围

| 序号 | 服务类型 | 说明 |
|------|----------|------|
| 1 | 用户咨询解答 | 解答用户关于平台功能、服务内容、费用等方面的问题 |
| 2 | 服务流程引导 | 引导用户完成注册、登录、下单、支付等操作 |
| 3 | 技术问题排查与协助 | 协助用户解决APP/小程序使用中的技术问题 |
| 4 | 投诉受理与转交 | 受理用户投诉，记录详情并转交相关部门处理 |
| 5 | 服务预约与协调 | 协助用户预约陪诊、绿通等服务，协调资源安排 |
| 6 | 用户反馈收集 | 收集用户意见与建议，持续改进服务质量 |
| 7 | 其他服务支持 | 经平台公示的其他用户服务事项 |

#### 1.2.3 客服禁止行为（红线）

> ⚠️ **以下行为严格禁止，一经发现按平台规定处理，情节严重者依法追究：**

1. ❌ 代替医生给出诊断或治疗建议
2. ❌ 承诺具体的治疗效果或治愈时间
3. ❌ 透露患者隐私信息或问诊内容
4. ❌ 透露医生个人隐私（手机号、微信等）
5. ❌ 与用户争吵或使用不当言辞
6. ❌ 将账号转借他人使用
7. ❌ 违反法律法规或平台公示规范的其他行为

### 1.3 工作场景及工作职责

| 业务场景                 | 核心职责           | 具体工作内容                                                 |
| ------------------------ | ------------------ | ------------------------------------------------------------ |
| **一、用户咨询与引导**   | **问题解答**       | 及时准确地解答用户关于平台功能、服务内容、费用等各类咨询问题。 |
|                          | **操作引导**       | 引导用户完成注册、登录、下单、支付、上传资料等操作流程。     |
| **二、平台使用问题处理** | **技术问题排查**   | 协助用户排查和解决小程序使用中的登录、支付、通知等技术问题。 |
| **三、服务预约与协调**   | **服务咨询与预约** | 解答用户关于陪诊、绿通等服务的问题，协助完成服务预约。       |
|                          | **资源协调**       | 协调陪诊师、陪护人员等服务资源，确保服务顺利执行。           |
|                          | **进度跟进**       | 跟进绿通等服务进度，及时向用户反馈进展。                     |
| **四、投诉与纠纷处理**   | **投诉受理**       | 认真倾听用户投诉，记录详情，表达重视和同理心。               |
|                          | **问题转交**       | 将投诉内容如实转交相关部门，跟进处理结果并回复用户。         |
| **五、用户回访与满意度** | **服务回访**       | 在服务完成后进行回访，收集用户反馈和建议。                   |
|                          | **满意度跟进**     | 跟进用户满意度，持续改进服务质量。                           |

---

## 第二章 平台使用问题处理话术

> **本章定位**：本章聚焦用户在使用多扬健康小程序过程中遇到的各类技术及操作问题，提供标准化的引导和安抚话术，帮助客服快速、专业地解决平台使用层面的用户疑问。

### 2.1 小程序使用问题处理话术

> **背景**：患者或医生在使用多扬健康小程序时，可能遇到技术问题，医助需要提供引导和安抚。

#### 2.1.1 小程序注册/登录问题话术

**场景一：微信一键授权失败/点击无反应**

**话术一（安抚+排查）**：

> 您好呀，您是点击微信一键登录没有反应对吗？别着急，这通常是微信网络授权延迟导致的～ 
>
> 您可以尝试下拉一下微信页面刷新，或者把小程序退出后台（在微信主界面下拉，把我们的小程序拖到底部删除），
>
> 然后再重新搜索“多扬健康”进去点一下授权试试～

**场景二：账号异常/登录不上**

**话术一（了解情况）**：

> 您说账号登录异常是吗？请问具体是什么情况呢？
>
> 是提示“账号被限制”、“身份信息需重新认证”，还是其他的呢？
>
> 您方便截个图发给我吗，我帮您精准排查一下～

**话术二（申诉与解除限制处理）**：

> 好的，看到您的截图了。这个情况可能是触发了系统的风控保护，或者是您的账号超过12个月没有使用进入了休眠状态。 您可以拨打我们的官方客服热线 4008400789，提供一下您授权绑定的手机号，我们会立刻让技术人员帮您核实并在后台解除限制，很快就能恢复正常的～

**场景三：登录后找不到历史问诊/健康档案**

**话术一（排查账号一致性）**：

> 您好，您说登录进去了但是找不到之前的问诊记录对吗？不用担心，数据都在的～ 因为我们的小程序是跟您的【微信号】和【绑定的手机号】一一对应的。请您回忆一下：
>
> 您这次用的微信号，和之前看病时用的是同一个吗？您刚才授权一键登录的手机号，是您之前留的那个号码吗？（有时候微信会自动拉取您其他的手机号）
>
> 您可以在“我的-设置”里看看当前绑定的手机号对不对，如果不对，可以在里面更换绑定的手机号，之前的记录就回来啦～

**注意事项**：

- ✅ 先安抚情绪，不要让用户觉得是自己的问题

- ✅ 给出清晰的排查步骤

- ✅ 提供多种解决方案

- ✅ 必要时引导拨打客服热线

  

### 2.2 支付问题话术

**场景一：支付失败**

**话术一（常见原因排查）**：

> 您好，支付失败可能有几个原因：
>
> 1. 网络不稳定——建议切换一下WiFi或移动网络
> 2. 余额不足——请确认银行卡或账户余额是否充足
> 3. 支付限额——部分银行有单笔限额，可以咨询银行
>
> 您可以先检查一下这几种情况，然后重新尝试支付～

**场景二：扣款未到账/重复扣款**

**话术一（查询确认）**：

> 您好，我先帮您查一下这笔订单的支付状态。
>
> [查询后]根据系统显示，您的这笔订单[状态说明：已支付/处理中/失败]。
>
> 如果已经扣款但显示失败，款项会在1-3个工作日内原路退回，请耐心等待～

**话术二（异常情况处理）**：

> 您说扣了两次款对吗？非常抱歉给您带来困扰了。我这边帮您记录下来，提交给财务核实。如果确实重复扣款，会在3个工作日内退还到您的原支付账户。
>
> 我帮您备注一下加快处理～

**注意事项**：

- ✅ 支付问题要耐心排查原因
- ❌ 不可承诺具体退款到账日期

---

### 2.3 功能使用引导话术

**场景一：不知道怎么上传报告**

**话术一（图文步骤引导）**：
> 您好，上传报告其实很简单～
> 1. 进入问诊页面或者健康档案页面
> 2. 点击下面的"+"号按钮
> 3. 选择"上传图片"
> 4. 拍照或者从相册选择照片
> 5. 点击发送/保存就可以了
> 
> 拍照的时候注意光线要充足，报告要平整，字要能看清哦～

**话术二（语音引导）**：
> 我来电话里教您操作～您先把手机拿出来，打开多扬健康小程序，找到首页下方的"+"号，看到了吗？好，现在点进去……
> 
> 对，就是这样！如果操作中有任何问题可以随时截图发给我，我帮您看看～

**场景二：找不到自己的主治医生**

**话术一（搜索引导）**：
> 您好，找医生的话可以在首页上方的搜索框输入医生的名字，或者在"找医生"栏目里按科室查找。
> 
> 您的主治医生是[XX医生]对吗？他/她的科室是[XX科]，您可以这样找：
> 1. 点击首页的"找医生"
> 2. 选择"[XX科]"
> 3. 找到"[XX医生]"的头像
> 4. 点击进入后就可以发起问诊了

**话术二（已关注的医生）**：
> 您之前关注过的医生可以在"我的-我的医生"里找到哦～找到之后直接点击就可以发起问诊了，很方便的！

**场景三：不知道怎么发起问诊**

**话术一（步骤引导）**：
> 您好，发起问诊很简单：
> 1. 找到您想要咨询的医生
> 2. 点击医生主页的"图文问诊"或"在线问诊"
> 3. 选择问诊类型
> 4. 简要描述您的症状或问题
> 5. 如有报告可以上传附件
> 6. 确认支付后即可发起
> 
> 医生会在规定时间内回复您，请保持手机畅通～

**话术二（视频/电话问诊引导）**：
> 如果您想视频问诊或电话问诊，步骤和图文问诊类似，只是在选择问诊类型的时候选"视频问诊"或"电话问诊"就行了。电话问诊接通后是按分钟计费的，您可以根据需要选择～

**注意事项**：
- ✅ 操作指引要清晰、可执行
- ✅ 可以提供图文或语音指导
- ✅ 鼓励用户截图发过来帮忙看
- ✅ 必要时可以电话指导

---

### 2.4 APP/小程序闪退、卡顿、加载失败话术

- **话术一（安抚+基础排查）**：

  > 您好，卡顿或者闪退确实挺烦人的～您先别着急，我们可以先排查一下：
  >
  > 1. **网络问题**：检查一下WiFi或者移动网络是否正常，可以切换一下网络试试
  > 2. **内存****不足**：看看手机存储空间够不够，可以清理一下缓存或者关闭一些不用的App
  > 3. **版本过旧**：检查一下小程序是否需要更新到最新版本
  >
  > 您先试试这几个方法，看看有没有改善～

  **话术二（小程序****重启****）**：

  > 您可以试试把小程序完全关闭后重新打开：
  >
  > - 小程序：右上三个小点，打开选择“重新进入小程序”
  >
  > 有时候重启一下就好了～

  **话术三（清理缓存引导）**：

  > 您可以试试清理一下缓存：
  >
  > - 微信用户：微信内搜索"多扬健康"，长按图标，选择"删除小程序"，然后重新搜索添加
  >
  > 清理后重新登录试试，一般能解决加载问题～

  **话术四（无法解决时）**：

  > 如果以上方法都试过了还是不行，可能是手机系统兼容性问题。您可以：
  >
  > 1. 确认一下您的手机系统和版本是否支持
  > 2. 尝试用另一个设备登录看看是否是设备问题
  >
  > 如果确实是技术问题，您可以联系我们客服4008400789反馈，我们会让技术人员尽快处理。给您带来不便非常抱歉～

  **注意事项**：

  - ✅ 先安抚情绪，表达理解和歉意
  - ✅ 提供多种排查方案
  - ✅ 必要时记录问题反馈给技术团队
  - ✅ 引导拨打客服热线

---

### 2.6 健康档案使用指导话术

- **话术一（引导建档）**：

  > 您好，健康档案是您的专属"移动病历本"，以后看病的时候医生可以直接看到您的健康信息，特别方便～
  >
  > 您可以这样完善您的档案：
  >
  > 1. 进入"我的-健康档案"
  > 2. 完善基本信息：血压、血糖、BMI等
  > 3. 添加病史：既往史、家族史、过敏史
  > 4. 上传资料：病历报告、出院记录、检查单
  >
  > 资料越完善，医生给您的建议就越准确哦～

  **话术二（数据记录引导）**：

  > 您平时在家量的血压血糖都可以记录在健康档案里：
  >
  > 1. 进入"健康档案"
  > 2. 点击"添加记录"
  > 3. 选择"血压"或"血糖"
  > 4. 填入数值和测量时间
  >
  > 这样您自己能看到趋势变化，医生也能了解您的控制情况～

  **话术三（报告上传引导）**：

  > 您可以把之前的检查报告都拍照上传：
  >
  > 1. 进入"健康档案-报告单"
  > 2. 点击"立即上传"
  > 3. 选择报告照片或者拍照上传
  >
  > 拍照时注意光线充足、字迹清晰，这样医生看起来更清楚～

  **话术四（家庭成员管理）**：

  > 您好，一个账号可以添加多位家庭成员哦～
  >
  > 1. 进入"我的-就诊人管理"
  > 2. 点击"新增就诊人"
  > 3. 填写家人的基本信息
  >
  > 添加后您可以帮家里老人孩子查看健康档案、预约问诊～

  **注意事项**：

  - ✅ 强调健康档案对患者的好处
  - ✅ 提供清晰的步骤指引
  - ✅ 引导完善档案信息
  - ✅ 介绍家庭成员共享功能

---

### 2.7 无法联系到医生/医生未回复话术

**话术一（确认医生状态）**：
> 您好，我先帮您看一下医生的状态～
> 
> [查询后]根据系统显示，您的问诊请求[已收到/已发送]，医生目前[在线/离线/正在接诊]中。
> 
> 图文问诊响应时效是48小时内，医生会在这个时间内回复您的，请耐心等待～如果您比较紧急，可以选择"在线即时问诊"，响应会更快。

**话术二（温馨提醒医生）**：

> 您好，您说医生还没回复是吧？我这边帮您提醒一下医生尽快回复～
> 
> [提醒后]已经帮您发过提醒了，医生看到后会尽快回复的。您也可以检查一下是否开启了消息通知，以免漏收回复～

**话术三（转接医助跟进）**：

> 您好，如果医生确实长时间未回复，我们可以安排医助先接入，帮您：
> 1. 整理您的问题和症状
> 2. 收集您上传的报告信息
> 3. 反馈给医生催促回复
> 
> 客服介入后会在10分钟内跟进处理，请放心～

**话术四（超时退款引导）**：
> 您好，关于您咨询的问题，如果医生超过48小时未回复，根据平台规则可以申请全额退款。
> 
> 您可以联系客服4008400789说明情况，我们帮您处理退款。同时您也可以重新发起问诊，选择响应更快的医生～

**话术五（医生不在线时的建议）**：
> 您好，您想要咨询的医生目前不在线～不过我们可以帮您：
> 1. 预约该医生的提醒，等他上线后第一时间通知您
> 2. 帮您推荐其他在线的同科室医生
> 3. 先让客服接入了解您的情况，等医生回复后代为转达
> 
> 您想怎么安排呢？

**注意事项**：
- ✅ 先确认医生状态，给出合理解释
- ✅ 提供多种替代方案
- ✅ 提醒图文问诊的48小时时效
- ✅ 客服可以先接入安抚患者
- ✅ 符合条件可以引导退款

---



## 第三章 服务包与陪诊服务话术

> **服务包类型**：陪诊服务（2小时/4小时/8小时）、上门接送陪诊、急诊/夜间陪诊、妇科手术陪同、孕前/产检陪诊、特殊检查陪诊、院内代办、专业陪护（6小时/24小时）

### 3.1 陪诊服务介绍话术

#### 3.1.1 服务详情说明

**话术一（详细说明）**：
> 我们的陪诊服务包含以下内容：
> - 诊前提醒：提前一天电话/短信提醒您就诊时间和注意事项
> - 全程陪同：从您到医院开始，陪诊师全程陪同您就诊
> - 挂号候诊：帮您挂号、取号、排队候诊
> - 协助问诊：帮您记录医嘱，提醒您要问的问题
> - 预约检查：如有检查，帮您预约并陪同前往
> - 取药取报告：帮您取药、拿报告
> - 诊后关怀：给您详细的医嘱记录和生活建议
> 
> 费用方面：[说明具体套餐和价格]
> 超时费用：XX元/小时
> 
> 请问您需要哪种时长和类型的服务呢？

**话术二（简洁说明）**：

> 陪诊服务就是陪您一起去看病，帮您省心省力～陪诊师会提前联系您，到医院后全程陪同，帮忙跑腿、记录医嘱、拿药取报告，您只需要坐着休息就好。
> 
> 目前可选的套餐：[列出套餐]
> 有任何疑问都可以问我～

**注意事项**：
- ✅ 服务内容要透明清晰
- ✅ 明确说明费用结构
- ✅ 提供多种套餐选择
- ✅ 超时费用要提前告知

---

### 3.2 陪诊预约确认话术

#### 3.2.1 预约信息确认

**话术一（标准确认）**：
> 好的，我来帮您确认一下预约信息：
> 
> **患者信息**
> - 姓名：[姓名]
> - 手机号：[电话]
> - 年龄：[年龄]
> 
> **就诊信息**
> - 医院：[医院名称]
> - 科室：[科室名称]
> - 就诊时间：[日期和时间]
> - 预计就诊时长：[X小时]
> 
> **服务信息**
> - 陪诊套餐：[2小时/4小时/8小时/其他]
> - 是否需要接送：[是/否]
> - 其他特殊需求：[如有]
> 
> 请问以上信息都正确吗？确认无误后我帮您下单～

**话术二（温馨确认）**：
> 好的，请让我确认一下您的预约信息～
> 
> 您预约的是[日期]在[医院]的陪诊服务，由我们的陪诊师[陪诊师称呼]为您提供。陪诊师会在就诊前[时间]联系您，确认接您的时间和地点。请问您的手机号和就诊地址都方便留给我吗？

**注意事项**：
- ✅ 信息要逐项确认，避免错误
- ✅ 告知陪诊师信息，让患者放心
- ✅ 说明陪诊师会提前联系

---

#### 3.2.2 预约成功通知

**话术一（标准通知）**：
> ✅ 预约成功！
> 
> 您的陪诊服务已安排好，请保存以下信息：
> 
> **服务信息**
> - 预约编号：[编号]
> - 服务日期：[日期]
> - 服务时长：[X小时]
> - 服务费用：[金额]
> 
> **陪诊师信息**
> - 姓名：[姓名]
> - 联系方式：[电话]
> - 简介：[简要介绍]
> 
> 陪诊师会在就诊前[时间]打电话给您，请保持手机畅通～祝您就诊顺利！

**话术二（温馨通知）**：
> 您好呀，您的陪诊预约已经成功啦！🎉
> 
> 陪诊师[姓名]会在[时间]联系您，跟您确认具体的见面时间和地点。陪诊师经验很丰富，您放心～有什么问题随时可以联系我们。祝您就诊顺利，身体早日康复！

**话术三（补充提醒）**：
> 温馨提示～
> 1. 请携带好身份证、医保卡、之前的检查报告等资料
> 2. 就诊前一天陪诊师会联系您确认细节
> 3. 如需取消或改期，请提前[24小时]联系客服
> 
> 期待为您服务！

**注意事项**：
- ✅ 预约编号要提供，便于查询
- ✅ 陪诊师信息要让患者知道
- ✅ 提醒携带物品
- ✅ 说明改期/取消规则

---

#### 3.2.3 改期/取消说明

**话术一（取消说明）**：
> 了解，您需要取消预约。关于退款规则请您知悉：
> - 就诊前24小时以上取消：全额退款
> - 就诊前2-24小时取消：退款80%
> - 就诊前2小时内取消：退款50%
> - 已开始服务或陪诊师已到达医院：不予退款
> 
> 请问您确认要取消吗？退款将原路返回，预计[时间]到账。

**话术二（改期说明）**：
> 好的，您想改期到[新日期]对吗？我来帮您操作～
> 
> 改期不收取手续费，但需要注意：新日期的服务时间如果正好有人预约了，可能需要调整陪诊师。请您确认一下新的就诊信息，我这边帮您协调～

**话术三（改期限制说明）**：
> 您好，取消和改期需要提前[24小时]操作哦。如果您确实需要调整，请告诉我您希望的新的就诊时间，我来看看能不能安排。如果原预约已临近2小时，可能需要收取部分费用～

**⚠️ 注意事项**：
- ✅ 退款规则要准确说明
- ✅ 区分取消和改期的不同处理方式
- ✅ 明确退款到账时间

---

### 3.3 陪诊服务进行中沟通话术

#### 3.3.1 服务开始前联系

**话术一（服务开始联系）**：

> 您好，我是多扬健康客服，您的陪诊服务即将开始～陪诊师[姓名]已经在[医院名称]等候，麻烦您到医院后拨打这个电话联系她：188-XXXX-XXXX。她会在[入口/挂号大厅/XX地方]等您～请问您现在出发了吗？路上注意安全！

**话术二（到达确认）**：

> 您好呀，陪诊师已经在医院等您了！请问您大概什么时候能到呢？如果已经到了，陪诊师会在[具体位置]等您，她穿着[颜色]的衣服，手里拿着[标识]。见到她后她会全程照顾您的～

**注意事项**：
- ✅ 告知陪诊师联系方式
- ✅ 说明具体等候位置和标识
- ✅ 确认患者出发/到达时间

---

#### 3.3.2 服务进行中跟进

**话术一（主动跟进）**：
> 您好，陪诊服务正在进行中～请问一切顺利吗？陪诊师有没有照顾好您？如果有任何需要调整的地方可以随时告诉我，我来协调～

**话术二（超时预警）**：
> 您好，系统显示您的陪诊服务时间已过半，目前还剩约[X小时]。请问您这边就诊情况怎么样？如需延长服务可以告诉我，超时费用XX/小时～

**话术三（服务结束时联系）**：
> 您好呀，陪诊服务应该快结束了～请问您今天的就诊顺利吗？陪诊师[姓名]服务得怎么样？如果您方便的话，可以简单给我反馈一下，这样也能帮助我们做得更好～感谢您的配合！

**注意事项**：
- ✅ 主动跟进服务情况
- ✅ 超时前要提醒
- ✅ 服务结束后收集反馈

---

#### 3.3.3 陪诊师迟到/爽约处理

**话术一（陪诊师迟到处理）**：
> 您好，非常抱歉陪诊师[原因迟到]，让您久等了！我已经联系她/他尽快赶到，[预计到达时间]。非常抱歉给您带来不便，我们会为本次服务给您[优惠/补偿]，请问您方便等一下吗？如果您需要其他安排也可以告诉我～

**话术二（陪诊师爽约处理）**：
> 您好，非常抱歉发生了这样的情况！陪诊师[原因]无法到场，我这边立刻为您重新安排，争取在[时间]内安排新的陪诊师到达。如果您选择取消本次服务，我们将全额退款并赠送您[优惠券]作为补偿。给您带来的不便我们深表歉意～

**话术三（持续跟进）**：
> 您好，请问新的陪诊师到了吗？[姓名]已经在[位置]等候。请您放心，我们会确保顺利完成今天的陪诊。之后我们会跟进处理之前的问题，有任何需要随时联系我！

**⚠️ 关键注意事项**：
- ✅ 立即道歉，表达重视
- ✅ 快速重新安排
- ✅ 主动提供补偿
- ✅ 陪诊师迟到≥30分钟要协商退款
- ✅ 陪诊师爽约要全额退款+优惠券

---

### 3.4 院内代办服务话术

> **院内代办服务**：代约检查、代取报告、代问诊、代配药、取送病理切片、出入院办理等

#### 3.4.1 代办服务介绍

**话术一（了解需求）**：
> 您好，我们的院内代办服务可以帮助您处理一些在医院需要跑腿的事项，比如：
> - 📋 代约检查：帮您预约B超、CT、核磁等检查
> - 📄 代取报告：帮您取检查报告、病理报告
> - 💊 代配药：如果您不方便来医院，可以帮您代开药品并快递到家
> - 🏥 出入院办理：帮您办理住院手续、出院结算等
> 
> 请问您需要哪项服务呢？

**注意事项**：
- ✅ 列举常见代办场景
- ✅ 说明每种服务的具体内容
- ✅ 询问具体需求，提供个性化方案

---

#### 3.4.2 代办服务确认

**话术一（信息确认）**：
> 好的，请确认一下您的代办服务信息：
> 
> **代办事项**
> - 服务类型：[代取报告/代约检查/其他]
> - 具体内容：[详细说明]
> 
> **患者信息**
> - 姓名：[姓名]
> - 身份证号：[身份证]
> - 医保卡号：[医保卡]
> 
> **医院信息**
> - 医院名称：[医院]
> - 就诊卡号：[如有]
> 
> **取件/送达方式**
> - 自取/快递到家（到付）
> 
> 请问以上信息都正确吗？确认后我们尽快为您办理～

**话术二（材料说明）**：
> 办理此项服务需要您提供：
> 1. 患者的身份证照片（电子版）
> 2. 医保卡照片
> 3. [根据具体服务补充，如挂号单、检查单等]
> 
> 您的信息我们会严格保密，仅用于本次代办服务。请问方便提供吗？

**注意事项**：
- ✅ 确认所有必要信息
- ✅ 说明需要的材料
- ✅ 强调信息保密

---

#### 3.4.3 代办完成通知

**话术一（报告取回通知）**：
> ✅ 您好，您委托的代取报告服务已完成！
> 
> 取回的报告：[报告名称]
> 取回时间：[时间]
> 
> 您可以选择：
> 1. 快递到家（到付）
> 2. 来我们[地址]自取
> 3. 电子版发送给您
> 
> 请问您选择哪种方式？

**话术二（预约完成通知）**：
> ✅ 您好，您委托的代约检查服务已办理完成！
> 
> 预约信息如下：
> - 检查项目：[项目名称]
> - 预约时间：[日期和时间]
> - 检查地点：[地点]
> - 注意事项：[如空腹、憋尿等]
> 
> 请您按时前往，如有变动可以联系我们更改～

**话术三（无法办理说明）**：
> 您好，关于您委托的[服务类型]，很抱歉遇到了以下情况：[说明原因，如缺少材料/系统问题/时间冲突等]。请您协助：
> 1. [需要的补充材料或信息]
> 2. [建议的解决方案]
> 
> 请问您方便配合吗？

**注意事项**：
- ✅ 完成要及时通知
- ✅ 提供多种交付方式选择
- ✅ 如遇问题要详细说明原因和解决方案

---

### 3.5 陪护服务话术

> **陪护服务**：6小时/24小时专业陪护

#### 3.5.1 陪护服务介绍

**话术二（服务介绍）**：
> 我们的专业陪护服务包括：
> - ⏰ 短期陪护：6小时/天，适合白天需要照护的情况
> - 🌙 全天陪护：24小时，提供全天候照护
> - 🏥 住院陪护：配合医院护理需求
> - 🏠 居家陪护：出院后在家中的康养照护
> 
> 陪护内容包括：生活照料、协助进食、翻身护理、陪同检查、记录病情、情绪疏导等。
> 
> 请问您需要哪种类型的服务呢？

**话术三（针对家属）**：
> 您好呀，家里人住院了对吗？如果您工作忙或者不方便全程陪护，我们可以提供专业的陪护人员～他们都有[资质证书]，可以照顾好您的家人，让您安心。
> 
> 您能说说是什么情况吗？我来帮您看看哪种陪护合适～

**注意事项**：
- ✅ 先了解陪护的具体场景（住院/居家/术后等）
- ✅ 介绍不同服务时长和内容
- ✅ 适当介绍陪护人员资质，让家属放心

---

#### 3.5.2 陪护服务安排

**话术一（安排确认）**：
> 好的，请确认陪护服务安排：
> 
> **服务信息**
> - 服务类型：[6小时/24小时/定制]
> - 服务开始时间：[日期和时间]
> - 服务天数：[X天]
> 
> **患者信息**
> - 姓名：[姓名]
> - 性别：[性别]
> - 年龄：[年龄]
> - 身体状况：[简要说明]
> 
> **服务地点**
> - [医院名称] [科室] [床位号]
> - 或 [家庭住址]
> 
> 陪护人员：[姓名] [简介]
> 联系电话：[电话]
> 
> 请问以上信息正确吗？

**话术二（服务交接说明）**：
> 陪护人员会在服务开始前[1-2小时]联系您，到达后会先跟您或患者见面交接。您可以提前准备好：
> - 患者的日常用品
> - 医嘱和用药记录
> - 特殊注意事项（如饮食、护理要求等）
> 
> 陪护期间如果您有任何问题可以随时联系我们～

**注意事项**：
- ✅ 信息要详细准确
- ✅ 说明陪护人员资质
- ✅ 告知交接准备事项

---

#### 3.5.3 陪护服务跟进

**话术一（日常跟进）**：
> 您好～陪护服务进行中，请问[患者姓名]今天感觉怎么样？陪护人员[姓名]照顾得好吗？有什么需要调整的地方吗？

**话术二（阶段性汇报）**：
> 您好，这是今天的陪护简报：
> - 用餐情况：[进食/未进食/进食量]
> - 休息情况：[睡眠/活动]
> - 特殊护理：[如有]
> - 情绪状态：[稳定/良好/需关注]
> 
> 如有异常情况我们会及时通知您～

**话术三（家属关怀）**：
> 您好呀，我知道您工作忙，没办法一直守在医院。陪护人员会照顾好您的家人，您放心～如果有什么情况我们会第一时间通知您。您也要照顾好自己，有空的时候可以来看看，毕竟家人的陪伴也很重要～

**注意事项**：
- ✅ 定期跟进服务情况
- ✅ 向家属提供简明的信息汇报
- ✅ 体现人文关怀

---



## 第四章 绿通服务话术

> **绿通服务类型**：绿通挂号、绿通手术、绿通住院、绿通检查、绿通转诊、绿通会诊、绿通床位

### 4.1 绿通服务介绍话术

#### 4.1.1 绿通服务介绍

**话术一（需求引导）**：
> 您好～看到您之前有问过关于[挂号/住院/手术]的问题，请问是遇到什么困难了吗？可能我们的绿通服务能帮到您～

**话术二（直接介绍）**：
> 您好，如果您正在为[挂号难/住院等床位/手术安排]发愁，我们可以帮您走绿通通道，快速解决这些问题！
> 
> **我们的绿通服务包括**：
> - 🎫 绿通挂号：帮您快速挂到热门专家号
> - 🏥 绿通住院：协助快速入院
> - 🔪 绿通手术：协调手术安排
> - 🛏️ 绿通床位：快速安排住院床位
> - 🔍 绿通检查：加速检查排队
> - 👨‍⚕️ 绿通会诊：安排多学科会诊
> - 📋 绿通转诊：协助转院流程
> 
> 请问您目前需要哪方面的帮助呢？

**注意事项**：
- ✅ 先了解患者的具体困难
- ✅ 介绍与需求匹配的绿通类型
- ✅ 说明绿通的核心价值（加速）

---

#### 4.1.2 绿通服务详情

**话术一（标准说明）**：
> 我们的绿通服务是帮助患者快速对接医疗资源的便捷通道。当您需要[挂号/住院/手术/检查]但普通渠道等待时间较长时，我们可以协助您加速进程。
> 
> **服务流程**：
> 1. 您提交需求和资料
> 2. 我们评估并对接医疗资源
> 3. 资源确认后快速安排
> 4. 全程客服跟进协调
> 
> **温馨提示**：绿通服务启动后，如因平台原因未能完成对接，可全额退款；如资源已确认，将协调推进，具体以实际情况为准。

**话术二（费用说明）**：
> 关于费用方面，绿通服务的收费根据您选择的服务类型和紧急程度不同而有差异：
> - 具体费用需要根据您的病情和需求评估
> - 服务启动前会明确告知所有费用
> - 资源对接前可全额退款
> 
> 您能说说具体需要什么帮助吗？我来帮您评估一下～

**⚠️ 关键注意事项**：
- ✅ 说明服务流程，让患者了解过程
- ✅ 明确退款规则（资源确认前可退，确认后不退）
- ✅ 费用要个性化评估，不一概而论
- ❌ 不可承诺具体时间（手术日期等）

---

### 4.2 绿通需求确认话术

#### 4.2.1 需求信息收集

**话术一（全面收集）**：
> 好的，为了帮您评估绿通服务，请您提供以下信息：
> 
> **患者基本信息**
> - 姓名：[姓名]
> - 年龄：[年龄]
> - 性别：[性别]
> 
> **病情信息**
> - 诊断/疑似诊断：[疾病名称]
> - 病程：[发现时间/治疗阶段]
> - 当前状态：[如住院中/门诊/在家]
> 
> **需求类型**
> - [绿通挂号/绿通住院/绿通手术/其他]
> - 指定医院：[如有]
> - 指定专家：[如有]
> - 期望时间：[越快越好/具体日期]
> 
> **已有资料**
> - 检查报告：[有/无]
> - 诊断证明：[有/无]
> 
> 请问以上信息方便提供吗？

**话术二（简化收集）**：
> 请告诉我：
> 1. 患者是谁？多大年纪？
> 2. 目前是什么情况？
> 3. 想解决什么问题（挂号/住院/手术/检查）？
> 4. 有没有想去哪家医院或找哪位专家？

**注意事项**：
- ✅ 信息要全面但不繁琐
- ✅ 根据需求类型调整收集重点
- ✅ 尊重患者隐私，说明信息用途

---

#### 4.2.2 需求可行性评估

**话术一（可执行）**：
> 好的，根据您提供的情况，我来帮您评估一下～
> 
> [分析评估内容：病情、需求匹配度、推荐方案等]
> 
> 初步判断：您的情况[适合/可以考虑]我们的[绿通类型]服务，我来帮您对接一下[医院/专家]的资源，请稍等。

**话术二（需补充）**：
> 您的情况我记下了，不过还需要您补充一些材料：
> - [所需材料1]
> - [所需材料2]
> 
> 有了这些材料我就能帮您更准确地评估和对接了～

**话术三（不可行/需调整）**：
> 感谢您告诉我您的情况～关于您的需求[绿通类型]，根据目前的政策/资源情况，可能需要调整一下方案：
> - [说明原因]
> - [建议调整方案]
> 
> 您觉得这样可以吗？或者您想了解其他方案？

**注意事项**：
- ✅ 评估要专业合理
- ✅ 不可行时要提供替代方案
- ✅ 说明原因要客观

---

### 4.3 绿通进度跟进话术

#### 4.3.1 进度告知

**话术一（标准更新）**：
> 您好，关于您的绿通申请，目前进度如下：
> 
> **申请编号**：[编号]
> **服务类型**：[绿通类型]
> **当前状态**：[资源对接中/已确认/安排中]
> 
> [具体进度说明，如：
> - 已对接XX医院XX科室
> - 专家号源已确认，等待您的确认
> - 住院床位正在协调中
> ]
> 
> 请问您还有什么问题吗？

**话术二（温馨更新）**：
> 您好呀～您申请的[绿通类型]有进展了！
> 
> [具体进展内容]
> 
> 接下来您需要做的是：[说明下一步]
> - 确认/缴费/准备材料
> 
> 有任何问题随时告诉我，我会继续帮您跟进～

**话术三（阶段提醒）**：
> 您好，关于您的绿通服务，提醒您几个重要时间点：
> - [时间点1]：[事项]
> - [时间点2]：[事项]
> 
> 请您提前做好准备，以免耽误安排～

**注意事项**：
- ✅ 进度要透明清晰
- ✅ 告知下一步行动
- ✅ 提醒重要时间点

---

#### 4.3.2 资源确认通知

**话术一（确认通知）**：
> ✅ 好消息！您的绿通申请已确认！
> 
> **确认信息**
> - [医院名称]
> - [科室/专家]
> - [时间/日期]
> - [具体安排]
> 
> **后续须知**
> - 请提前[时间]到达医院[地点]
> - 携带证件：[身份证/医保卡等]
> - 携带材料：[检查报告/病历等]
> 
> 请您确认以上信息，如无误请回复"确认"。如有变动请尽快联系我们～

**话术二（缴费提醒）**：
> 您好，您的绿通资源已确认，请在[日期]前完成相关费用缴纳：
> - 绿通服务费：[金额]
> - [其他费用，如有]
> 
> 缴费方式：[方式]
> 
> 逾期未缴费可能会影响安排哦～有问题随时联系！

**⚠️ 关键提示**：
- ⚠️ 一旦资源确认，绿通服务将进入执行阶段，如非平台原因，费用不予退还
- ⚠️ 请确认患者了解此规则

---

#### 4.3.3 资源对接失败处理

**话术一（替代方案）**：
> 您好，很抱歉通知您，您申请的[绿通类型]在[医院/专家]暂时无法安排。
> 
> **原因说明**：[说明原因]
> 
> **替代方案建议**：
> 1. [方案1]：可以帮您对接[其他医院/专家]
> 2. [方案2]：调整服务类型
> 
> 请问您想选择哪个方案呢？或者您有其他想法也可以告诉我～

**话术二（退款说明）**：
> 您好，非常抱歉，经过我们的努力，您申请的[绿通类型]在目前情况下无法安排。
> 
> 按照我们的服务规则，资源对接启动前全额退款。之前您支付的[金额]元将在[时间]内原路退回。
> 
> 给您带来不便我们深表歉意。如果您后续还有其他需要，我们会继续为您提供帮助～

**话术三（持续努力）**：
> 您好，关于您的绿通申请，我们仍在积极协调中。目前[说明进展]，请给我们多一点时间，我们会尽全力帮您安排。如果有最新消息会第一时间通知您～

**⚠️ 注意事项**：
- ✅ 资源未确认前：可全额退款
- ✅ 资源已确认后：不可退款，协调推进
- ✅ 平台原因未完成对接：全额退款
- ✅ 要提供替代方案或持续跟进

---



## 第五章 患者常见问题应答话术

### 5.1 费用与支付问题

#### 5.1.1 费用查询

**话术一（标准查询）**：
> 您好，请问您想了解什么服务的费用呢？
> - 在线问诊：[根据服务类型说明费用]
> - 陪诊服务：[根据套餐说明费用]
> - 绿通服务：[根据服务类型说明费用]
> - 其他：[根据具体情况]
> 
> 您说说具体需求，我帮您详细查询～

**话术二（时段费用说明）**：
> 关于问诊费用，根据您选择的服务类型和时间段，费用有所不同：
> - 标准时段（工作日8:00-18:00）：标准定价
> - 晚间加急（工作日18:00-22:00）：1.2倍
> - 应急服务（节假日/深夜22:00-次日8:00）：1.5倍
> 
> 请问您想预约什么时间的服务呢？我帮您算一下具体费用～

**话术三（新用户优惠说明）**：
> 您好呀～我们是新用户首单9折优惠，限1次，有效期30天。如果您是第一次使用我们的服务，可以享受这个优惠哦～
> 
> 您想了解哪种服务的费用呢？

**注意事项**：
- ✅ 清楚说明各时段定价规则
- ✅ 主动介绍新用户优惠
- ✅ 费用要透明清晰

---

#### 5.1.2 支付问题

**话术一（支付方式）**：
> 我们支持以下支付方式：
> - 💳 微信支付
> - 💰 支付宝
> 
> 请问您习惯用哪种方式呢？

**话术二（支付失败）**：
> 您好，支付失败可能有以下原因：
> - 网络不稳定，建议切换WiFi或移动网络
> - 余额不足，请确认银行卡/账户余额
> - 支付限额，部分银行有单笔限额
> 
> 您可以尝试重新支付，或者换一种支付方式～如果还是不行可以告诉我，我帮您看看其他解决方案。

**话术三（优惠券使用）**：
> 您好，您的优惠券[券名]可以抵扣[金额]元。在支付页面会自动显示可用的优惠券，点击使用即可～如果优惠券没有显示，可能是因为订单金额未达到使用门槛或已过期。

**注意事项**：
- ✅ 提供多种支付方式
- ✅ 帮助排查支付失败原因
- ✅ 优惠券使用说明要清晰

---

### 5.2 退款问题

> **⚠️ 重要规则（必须准确掌握）**：
> - 在线即时聊天/图文问诊：24小时内医生/客服未响应可全额退款
> - 电话/视频问诊：通话开始前全额退款，≤1分钟全额退款（质量差/信号中断），>1分钟不予退款
> - 服务包（陪诊/陪护等）：开始前24小时以上全额退款，2-24小时退80%，2小时内退50%，已开始不予退款
> - 绿通：资源对接启动前全额退款，资源已确认后不予退款，平台未能完成对接全额退款

#### 5.2.1 在线问诊退款咨询

**话术一（符合退款条件）**：
> 您好，我帮您查询了一下，您的情况符合退款条件：
> 
> **退款原因**：医生超过24小时未回复
> **可退金额**：全额退款[X元]
> 
> 我这边已经帮您提交退款申请，款项将在[1-3个工作日]内原路返回，请注意查收～

**话术二（不符合退款条件）**：
> 您好，我帮您核实了一下情况：
> 
> **核实结果**：医生已在规定时间内回复，您之前也已经和医生有过对话
> 
> 根据我们的退款规则，这种情况不在退款范围内哦～不过医生的回复您可以继续查看和使用，如需进一步咨询可以继续提问，或者选择结束本次问诊。

**话术三（需进一步核实）**：
> 您好，关于退款的问题，我需要帮您核实一下具体情况。请稍等，我来查一下您的问诊记录～
> 
> [核实后回复]
> 
> 根据核实结果：[说明是否符合退款条件及原因]

**⚠️ 注意事项**：
- ✅ 退款规则要准确对应
- ✅ 符合条件要立即办理
- ✅ 不符合要耐心解释

---

#### 5.2.2 电话/视频问诊退款

**话术一（通话前退款）**：
> 您好，您的情况属于通话开始前退款，我帮您办理全额退款[X元]。款项将在[1-3个工作日]内原路返回，请注意查收～

**话术二（≤1分钟退款）**：
> 您好，我了解您说的通话质量问题。系统显示本次通话时长[XX秒]，确实很短。根据退款规则，通话质量差或信号中断导致通话≤1分钟的，可以全额退款。我帮您提交申请，[金额]元将在[时间]内退还给您。

**话术三（>1分钟不退费）**：
> 您好，关于您咨询的退款问题，我帮您核实了一下通话记录：本次通话时长[X分钟X秒]。
> 
> 根据我们的退款规则，电话/视频问诊通话时长超过1分钟的，不予退款哦～因为医生已经为您提供了服务。
> 
> 不过您如果对通话质量有反馈，我可以记录下来，我们会不断改进服务质量。感谢您的理解～

**话术四（质量投诉安抚）**：
> 非常抱歉给您带来了不好的体验。虽然通话时长超过1分钟无法按规则退款，但我会帮您记录这次通话质量问题，反馈给相关部门。
> 
> 作为补偿，我帮您申请了一张[面额]的优惠券，下次问诊可以使用～希望下次能为您提供更好的服务体验。

**⚠️ 关键注意事项**：
- ✅ 通话前：全额退款
- ✅ ≤1分钟且质量问题：全额退款
- ✅ >1分钟：不予退款
- ✅ 虽不退款但可记录投诉、提供优惠券安抚

---

#### 5.2.3 服务包退款

**话术一（24小时以上取消）**：
> 您好，您的陪诊服务预约时间是[日期]，现在距离服务开始还有[时间]，符合提前24小时以上取消的条件，可以全额退款。
> 
> 我帮您办理取消和退款：[金额]元将在[时间]内原路返回。

**话术二（2-24小时内取消）**：
> 您好，您的陪诊服务预约时间是[日期]，距离服务开始还有[时间]，在2-24小时取消范围内。
> 
> 退款金额为服务费用的80%，即[金额]元，将原路返回。如有优惠券可退还，优惠券有效期不变。
> 
> 请问确认取消吗？

**话术三（2小时内取消）**：
> 您好，您的陪诊服务预约时间是[日期]，距离服务开始还有[时间]，在2小时内取消范围内。
> 
> 退款金额为服务费用的50%，即[金额]元，将原路返回。
> 
> 请问确认取消吗？

**话术四（已开始服务不退款）**：
> 您好，我了解您的情况。不过根据系统记录，陪诊师已经在[时间]到达医院并开始服务了。
> 
> 按照我们的退款规则，服务已开始的情况下不予退款哦～陪诊师今天确实有照顾您吗？如果服务过程中有任何问题您可以反馈给我，我会如实记录。

**话术五（陪诊师迟到/爽约）**：
> 您好，如果陪诊师迟到超过30分钟，可以协商退款。如果陪诊师爽约，除全额退款外，我们还会额外赠送您一张[面额]的优惠券作为补偿。
> 
> 请您告诉我具体情况，我来帮您处理～

**⚠️ 关键注意事项**：
- ✅ 24小时以上：全额退款
- ✅ 2-24小时：退80%
- ✅ 2小时以内：退50%
- ✅ 已开始：不退款
- ✅ 陪诊师迟到≥30分钟：协商退款
- ✅ 陪诊师爽约：全额退款+优惠券

---

#### 5.2.4 绿通退款

**话术一（资源未确认前退款）**：
> 您好，我来帮您查一下您的绿通申请状态。
> 
> 目前资源[已/未]确认，可以帮您办理[全额/部分]退款[金额]元。款项将在[时间]内原路返回。

**话术二（资源已确认不退款）**：
> 您好，关于绿通退款的问题，很抱歉告诉您，资源确认后就不支持退款了。
> 
> 我理解您可能遇到了困难，但资源方已经为您预留了[专家号/床位/手术档期]，取消会导致资源浪费。目前您的申请状态是[具体状态]，我们会继续帮您完成对接。
> 
> 如果您有特殊原因，可以告诉我具体情况，我来看看有没有其他解决方案。

**话术三（平台原因未完成对接）**：
> 您好，非常抱歉通知您，由于[平台原因]，您的绿通申请未能成功对接。
> 
> 按照服务规则，这种情况全额退款。我已帮您提交退款申请，[金额]元将在[时间]内退还给您。对给您造成的不便，我们深表歉意，并会在后续服务中加以改进。

**⚠️ 关键注意事项**：
- ✅ 资源对接启动前：全额退款
- ✅ 资源已确认后：不退款
- ✅ 平台原因未完成：全额退款

---

### 5.3 服务时效问题

#### 5.3.1 问诊响应时间

**话术一（即时聊天）**：
> 您好，在线即时聊天服务，医生通常会在几分钟内回复。如果超过5分钟没有回复，客服会介入协助。您的消息已经收到了，医生稍后就会回复您，请稍等片刻～

**话术二（图文问诊）**：
> 您好，图文问诊服务，医生会在48小时内回复您。您的问题和上传的资料医生都能看到，医生会根据您的情况给出回复。请您保持手机畅通，有回复会及时通知您～

**话术三（加急说明）**：
> 您好，如果您需要更快的响应，可以选择晚间加急服务（工作日18:00-22:00，1.2倍费用）或应急服务（节假日/深夜22:00-次日8:00，1.5倍费用），响应速度会更快哦～请问需要调整为加急服务吗？

**注意事项**：
- ✅ 说明各服务类型的响应时间
- ✅ 解释时段加价的合理性
- ✅ 提供加急选项

---

#### 5.3.2 陪诊/绿通时效

**话术一（陪诊预约时效）**：
> 您好，陪诊服务建议提前[24小时]预约，这样我们能安排更有经验的陪诊师。当然临时预约我们也会尽量安排，但可能选择有限。请问您想预约什么时候的服务呢？

**话术二（绿通时效）**：
> 您好，绿通服务的时效会根据您选择的医院和科室有所不同：
> - 普通专家号：通常[3-7个工作日]
> - 热门专家号：通常[1-4周]
> - 住院床位：根据病房情况，通常[3-14个工作日]
> 
> 具体时间需要等资源确认后才能确定，我们会尽快为您推进～

**话术三（时效不确定）**：
> 您好，关于您询问的时效问题，我理解您希望能尽快有结果。不过医疗资源的安排涉及到多个环节，确实需要一定时间。
> 
> 我们会尽最大努力帮您加速，同时也会及时告知您进展情况。请您耐心等待，有任何进展我们会第一时间通知您～

**注意事项**：
- ✅ 不要承诺具体日期
- ✅ 说明不确定性因素
- ✅ 强调会及时跟进

---

### 5.4 投诉处理通用话术

#### 5.4.1 投诉接待

**话术一（标准接待）**：
> 您好，我是多扬健康客服[姓名]，非常感谢您反馈这个问题，我非常重视您的意见。请您先把情况详细说一下，我会认真记录并跟进处理。

**话术二（同理心接待）**：
> 您好，我能理解您现在的心情，遇到了这样的问题确实会让人不舒服。请您放心把情况告诉我，我会认真处理，尽量让您满意。

**话术三（主动道歉接待）**：
> 您好，非常抱歉您遇到了这样的情况！感谢您告诉我们您的经历，我们会认真对待。请问能详细说说发生了什么吗？

**注意事项**：
- ✅ 先接待投诉，不打断
- ✅ 表达重视和同理心
- ✅ 主动道歉（即使还不清楚细节）

---

#### 5.4.2 投诉记录

**话术一（系统记录）**：
> 好的，我来记录一下您的情况：
> 
> **投诉人信息**
> - 姓名：[姓名]
> - 联系方式：[电话]
> 
> **投诉对象**
> - [服务类型/医生/陪诊师等]
> 
> **投诉内容**
> - [详细描述]
> 
> **诉求**
> - [希望如何处理]
> 
> 请问以上信息都记录正确吗？感谢您的配合，我们会尽快处理并回复您。

**话术二（确认诉求）**：
> 好的，您说的情况我已经记录了。关于您的诉求[退款/道歉/更换服务/其他]，我会如实反馈给相关部门，争取尽快给您一个满意的处理结果。
> 
> 一般处理周期是[1-3个工作日]，请保持手机畅通，我们会有专人与您联系～

**注意事项**：
- ✅ 完整记录投诉内容
- ✅ 确认患者诉求
- ✅ 告知处理周期

---

### 5.5 隐私保护问题

#### 5.5.1 隐私政策说明

**话术一（标准说明）**：
> 您好，感谢您关注隐私保护问题。您的个人信息在多扬健康平台会受到严格保护：
> 
> **我们承诺**：
> - 问诊记录仅您和接诊医生可见
> - 您的健康信息不会未经同意提供给第三方
> - 平台采用加密传输，保护您的数据安全
> 
> **您的权利**：
> - 可以随时查看您的问诊记录
> - 可以申请导出您的健康档案
> - 可以联系客服删除您的账户信息（需满足条件）
> 
> 如有更多隐私相关问题，可以查看我们的隐私政策详细条款～

**话术二（问诊隐私）**：
> 您问诊的内容是私密安全的，问诊记录只有您和医生能看到，其他患者是无法看到的。我们要求所有医护人员签署保密协议，保护患者隐私是我们的基本职业操守。

**注意事项**：
- ✅ 说明隐私保护措施
- ✅ 告知患者权利
- ✅ 强调问诊的私密性

---

#### 5.5.2 AI功能使用说明

**话术一（AI辅助说明）**：
> 您问诊过程中，如果有使用AI辅助功能（如智能分诊、风险预警等），我们会提前告知您。AI仅作为辅助工具，最终的医疗服务仍由医生提供。
> 
> 您的数据用于AI分析是为了更好地为您服务，如果您不希望数据用于此用途，可以告诉我们，我们会尊重您的选择。

**话术二（数据使用说明）**：
> 您提供的信息会被用于：
> 1. 提供问诊服务
> 2. 辅助医生进行风险评估
> 3. 改善平台服务质量
> 
> 我们不会将您的个人信息用于商业推广。您可以查看隐私政策了解详细的数据使用情况～

**注意事项**：
- ✅ 主动告知AI功能的使用
- ✅ 说明数据用途
- ✅ 尊重患者的选择权

---



## 第六章 投诉与纠纷处理话术

### 6.1 患者投诉安抚话术

#### 6.1.1 投诉接待

**话术一（标准接待）**：
> 您好，我是多扬健康客服[姓名]，非常感谢您反馈这个问题，我非常重视您的意见。请您先把情况详细说一下，我会认真记录并跟进处理。

**话术二（同理心接待）**：
> 您好，我能理解您现在的心情，遇到了这样的问题确实会让人不舒服。请您放心把情况告诉我，我会认真处理，尽量让您满意。

**话术三（主动道歉接待）**：
> 您好，非常抱歉您遇到了这样的情况！感谢您告诉我们您的经历，我们会认真对待。请问能详细说说发生了什么吗？

**注意事项**：
- ✅ 先接待投诉，不打断
- ✅ 表达重视和同理心
- ✅ 主动道歉（即使还不清楚细节）

---

#### 6.1.2 投诉记录

**话术一（系统记录）**：
> 好的，我来记录一下您的情况：
> 
> **投诉人信息**
> - 姓名：[姓名]
> - 联系方式：[电话]
> 
> **投诉对象**
> - [服务类型/医生/陪诊师等]
> 
> **投诉内容**
> - [详细描述]
> 
> **诉求**
> - [希望如何处理]
> 
> 请问以上信息都记录正确吗？感谢您的配合，我们会尽快处理并回复您。

**话术二（确认诉求）**：
> 好的，您说的情况我已经记录了。关于您的诉求[退款/道歉/更换服务/其他]，我会如实反馈给相关部门，争取尽快给您一个满意的处理结果。
> 
> 一般处理周期是[1-3个工作日]，请保持手机畅通，我们会有专人与您联系～

**注意事项**：
- ✅ 完整记录投诉内容
- ✅ 确认患者诉求
- ✅ 告知处理周期

---

### 6.2 退款争议话术

#### 6.2.1 规则解释

**话术一（耐心解释）**：
> 您好，关于退款的问题，我非常理解您的心情。不过按照我们的服务规则：[说明具体规则]。
> 
> 这个规则是为了保障服务者和消费者的共同利益制定的。我理解您可能觉得不太方便，但规则是统一的，对所有用户都是一样的。
> 
> 如果您有什么特殊情况，可以告诉我，我来看看有没有其他解决方案。

**话术二（换位理解）**：
> 我能理解您希望退款的心情，换做是我可能也会希望这样。不过按照我们的退款规则，您的这个情况确实不在退款范围内。
> 
> 不过我可以帮您记录这次的问题，反馈给相关部门，我们会不断改进。如果您后续有其他需要，我们还是很乐意为您服务的～

**话术三（特殊情况）**：
> 您好，关于您说的情况比较特殊，我帮您向主管申请一下特殊处理。请您提供一下[补充材料/说明情况]，我来帮您申请看看能否通融。

**注意事项**：
- ✅ 规则解释要清晰准确
- ✅ 态度要温和但坚定
- ✅ 不要承诺超出规则的处理
- ✅ 确实有特殊情况可以申请上级

---

#### 6.2.2 争议升级处理

**话术一（升级受理）**：
> 您好，我理解您的诉求，您希望[诉求内容]。这个情况我会升级反馈给我们的主管/专员，让更有权限的人来帮您处理。请您放心，我们会认真对待每一位用户的意见。
> 
> 升级后处理人员会在[时间]内与您联系，请保持手机畅通～

**话术二（安抚情绪）**：
> 我能感受到您对这个事情很重视，也很理解您为什么会有这样的诉求。虽然按照规则我没办法直接答应您，但我会把您的意见如实向上反映。
> 
> 我们平台一直很重视用户的反馈，相信会认真考虑您的情况。请您给我一点时间，我来帮您升级处理～

**注意事项**：
- ✅ 适时升级处理
- ✅ 不要激化矛盾
- ✅ 承诺跟进和回复

---

### 6.3 医生态度投诉话术

#### 6.3.1 医生服务问题反馈

**话术一（记录反馈）**：
> 您好，非常抱歉您遇到了这样的问题。医生的服务态度问题我们会认真对待。
> 
> 请问您能具体说说是什么问题吗？比如：
> - 语气让您不舒服？
> - 回复不够耐心？
> - 其他具体问题？
> 
> 我会把您说的情况如实反馈给医生和相关管理部门，我们会认真处理。

**话术二（安抚说明）**：
> 非常抱歉给您带来了不好的体验。我理解您来问诊是希望得到专业、耐心的服务，遇到这样的问题确实会让人不舒服。
> 
> 您放心，我会把这个反馈转达给医生和我们的医疗管理部门。我们会对医生进行评估和提醒，确保类似情况不再发生。
> 
> 感谢您的反馈，这对我们非常重要。

**话术三（后续跟进）**：
> 您好，您反馈的医生态度问题我们已经记录并转达给相关部门。
> 
> 处理进展：目前[进度说明]
> 预计回复时间：[时间]
> 
> 如果您之后还有其他问题或需要继续问诊，可以联系我们，我们会尽力帮助您～

**注意事项**：
- ✅ 认真倾听，不要辩解
- ✅ 表达歉意和重视
- ✅ 记录具体问题
- ✅ 承诺跟进处理
- ❌ 不可替医生开脱或反驳患者

---

### 6.4 服务质量投诉话术

#### 6.4.1 陪诊/陪护服务质量问题

**话术一（陪诊服务问题）**：
> 您好，非常抱歉陪诊服务没有让您满意。请您告诉我具体是什么问题：
> - 陪诊师迟到/未到？
> - 陪诊师服务态度不好？
> - 陪诊师专业能力不足？
> - 其他问题？
> 
> 您的反馈我们会认真记录，对于服务人员的问题我们会核实后进行相应处理。

**话术二（问题承诺）**：
> 非常抱歉给您带来不便。关于您说的问题：
> 
> 如果是陪诊师责任，我们会：
> 1. 核实情况
> 2. 对陪诊师进行评估和处理
> 3. 给您一个满意的处理结果
> 
> 关于您的诉求（退款/补偿/更换陪诊师等），我会向上级申请，尽量让您满意。

**话术三（服务改进）**：
> 您好，感谢您反馈陪诊服务质量问题，我们会认真对待：
> 
> 您的反馈已记录：
> - [具体问题]
> - [时间、地点、涉及人员]
> 
> 我们会核实后处理，同时会在后续服务中改进。感谢您帮助我们提升服务质量～

**注意事项**：
- ✅ 详细了解问题细节
- ✅ 承诺核实处理
- ✅ 给予合理的补偿方案
- ✅ 感谢反馈，转化不满

---



## 第七章 特殊场景话术

### 7.1 患者情绪激动/焦虑安抚话术

#### 7.1.1 情绪安抚

**话术一（共情安抚）**：
> 我能理解您现在的心情，遇到这样的事情肯定很着急/生气/难过。您先别着急，慢慢说，我会认真听您说。

**话术二（接纳情绪）**：
> 您有这样的情绪是完全可以理解的。我在这里，会帮助您一起解决这个问题。请您把情况告诉我，我们一起想办法。

**话术三（降调安抚）**：
> 您好，请先深呼吸一下～我知道您很不舒服，我会尽力帮您的。我们把问题一点点说清楚，好吗？

**注意事项**：
- ✅ 先接纳情绪，不急于讲道理
- ✅ 表达理解和支持
- ✅ 语速放慢，语调温和

---

#### 7.1.2 焦虑患者安抚

**话术一（信息支持）**：
> 您好，我能感觉到您很担心自己的情况。请您放心，我们会认真对待您的每一个问题。
> 
> 关于您担心的事情，我可以先帮您做一些事情：
> 1. [说明可以做什么]
> 2. [说明可以做什么]
> 
> 您先告诉我您具体担心什么，我来帮您分析一下。

**话术二（理性引导）**：
> 我理解您的担心，不过先不要自己吓自己。很多时候情况可能没有想象中那么严重。
> 
> 您能把担心的事情告诉我吗？我帮您看看需要怎么应对。如果需要医生专业判断，我们可以帮您安排问诊。

**话术三（陪伴支持）**：
> 您好呀，我在这里陪您呢。不管遇到什么问题，我们都会帮您一起面对的。您不用一个人扛着，有什么事情慢慢说～

**注意事项**：
- ✅ 给予情感支持
- ✅ 引导理性思考
- ✅ 提供具体帮助

---

### 7.2 患者询问医生个人信息话术

> **⚠️ 注意**：医生个人信息属于隐私保护范围，客服不可透露。

#### 7.2.1 询问医生身份/资质

**话术一（通用回复）**：
> 您问的关于医生的问题，我来帮您说明一下：
> 
> 在我们平台执业的医生都是经过严格资质审核的，具备合法的执业医师资格。您在问诊页面可以看到医生的[姓名/职称/擅长领域]等信息。
> 
> 具体的从业经历等详细信息属于医生个人隐私，我们不便公开透露，请您理解。不过您可以放心，我们平台的医生都具备专业资质，可以为您提供可靠的医疗服务。

**话术二（隐私说明）**：
> 您好，关于医生的[具体信息]属于医生个人隐私，按照相关规定我们不能公开医生的私人信息，请您理解。
> 
> 不过您可以放心：
> 1. 平台上线的医生都经过资质审核
> 2. 医生的专业擅长可以在问诊页面查看
> 3. 问诊过程中医生会给您专业的诊疗建议
> 
> 如果您对医生的资质有疑虑，可以在问诊前查看医生的详细介绍页～

**话术三（引导关注服务）**：
> 您好，我理解您想了解接诊医生的更多信息。不过医生的个人隐私我们不方便透露，希望您能理解。
> 
> 重要的是：无论哪位医生接诊，都会以专业的态度为您服务。如果您在问诊过程中有任何问题，可以随时联系我们客服团队，我们会协助您～

**注意事项**：
- ✅ 解释隐私保护的原因
- ✅ 提供可以公开的信息（职称、擅长等）
- ✅ 引导关注服务本身
- ❌ 不可透露医生私人信息（手机号、微信等）

---

### 7.3 患者提出非医疗服务问题话术

> **平台拒绝回复的问题类型**：非互联网医疗服务类问题、医疗司法举证或询证问题、胎儿性别鉴定问题、未按提问要求提问的问题、有危害他人/自己可能的问题、追问医生个人信息的问题、故意挑逗、侮辱医生的提问

#### 7.3.1 非医疗问题回复

**话术一（明确说明）**：
> 您好，感谢您的提问～不过这个问题不属于我们医疗服务的范围哦。
> 
> 我们平台主要是提供[在线问诊/健康咨询/陪诊绿通]等医疗服务，关于[具体非医疗问题]可能需要咨询[相应渠道，如宠物医院/法律顾问/相关机构]。
> 
> 如果您有其他健康方面的问题，欢迎随时咨询我们～

**话术二（引导回归）**：
> 您好，这个问题我没办法回答，因为[原因]。我们的服务主要是围绕健康和医疗相关的，如果您有身体不舒服或者想了解健康知识，我很乐意帮您～

**话术三（转介建议）**：
> 您好，这个问题超出了我们平台的服务范围，不太适合在这里讨论。建议您咨询专业的[相关领域]获取帮助。
> 
> 不过如果您有健康方面的任何问题，随时可以回来找我们～

**注意事项**：
- ✅ 温和但明确地说明边界
- ✅ 给出合理的转介建议
- ✅ 保持友好态度

---

#### 7.3.2 挑逗/不当提问

**话术一（礼貌拒绝）**：
> 您好，您的问题不太适合在医疗咨询场景下讨论哦～如果您有其他健康方面的问题，我很愿意帮助您～

**话术二（引导关注）**：
> 您好，我们的平台是提供专业医疗健康服务的，欢迎您提出与健康相关的问题～

**话术三（结束说明）**：
> 您好，类似的问题我无法回答。如果您还有其他合理的健康问题，可以继续咨询。谢谢您的理解～

**注意事项**：
- ✅ 保持礼貌和克制
- ✅ 不批评、不指责
- ✅ 简洁回应，不纠缠

---

### 7.4 未成年人/老年患者沟通话术

#### 7.4.1 未成年人沟通

**话术一（监护人确认）**：
> 您好呀，我注意到您填写的年龄是[年龄]岁，还属于未成年人。
> 
> 根据我们的服务规范，未成年人使用平台服务需要监护人知情和同意。请问您的爸爸妈妈或监护人知道您在使用这个服务吗？
> 
> 如果需要的话，可以让您的监护人一起咨询，这样医生也能更全面地了解情况～

**话术二（引导监护人参与）**：
> 您好，感谢您使用我们的服务～由于您的年龄未满18岁，按照相关规定，需要您的家长或监护人授权同意后才能为您提供医疗服务。
> 
> 您可以让家长联系我们，或者让家长陪同您一起问诊，这样会更好哦～

**话术三（敏感问题处理）**：
> 您好，我注意到您提到了一些比较私密的问题。如果是涉及到[两性健康/心理问题]等比较敏感的话题，建议您可以和信任的家长或老师谈谈，或者让家长陪同来咨询。
> 
> 如果您暂时不方便和家长说，也可以先跟我说说看，我会尽力帮助您，同时也会注意保护您的隐私～

**注意事项**：
- ✅ 未成年人信息需监护人同意
- ✅ 语气要温和友好
- ✅ 注意保护未成年人隐私
- ✅ 引导监护人参与

---

#### 7.4.2 老年患者沟通

**话术一（耐心关怀）**：
> 您好呀～请问您是我们平台的新用户吗？没关系的，不熟悉也没关系，我来慢慢跟您说～

**话术二（简化操作）**：
> 好的，老人家您听我说～[操作步骤要非常清晰简单，比如：先点这个按钮，然后在屏幕上找"我的"，再点"问诊"...]

**话术三（确认理解）**：
> 老人家您听清楚了吗？听不明白没关系，我再说一遍。或者您让家里年轻人帮忙操作也可以，我们也可以联系您的家人来帮您～

**话术四（主动关心）**：
> 您好呀，今天是您自己来的还是家人陪同来的呀？有什么需要帮忙的尽管说，我慢慢帮您～

**注意事项**：
- ✅ 语速放慢，表达清晰
- ✅ 操作指导要极其简单
- ✅ 主动关心，主动帮助
- ✅ 必要时联系家属协助

---

### 7.5 紧急情况处理话术

> **⚠️ 重要提示**：以下场景涉及患者生命安全，必须立即采取行动。

#### 7.5.1 患者表达轻生/自伤倾向

**话术一（立即回应）**：
> 您好，我听到您说的话了，我非常担心您的安全。您现在在哪里？身边有人吗？

**话术二（表达关心）**：
> 我能感觉到您现在非常痛苦，我很想帮助您。请您告诉我您现在的情况，您的安全是最重要的。

**话术三（紧急引导）**：
> 您好，不管发生了什么，您的生命都是最重要的。我现在非常担心您。
> 
> 请您拨打这个电话：
> - 全国心理援助热线：400-161-9995
> - 生命热线：400-821-1215
> 
> 如果您觉得有危险，请立刻拨打120或联系您身边的家人朋友陪伴您。
> 
> 请您告诉我您现在在哪里，我来帮您联系紧急帮助。

**话术四（持续陪伴）**：
> 请您不要挂断电话/聊天，我会一直陪着您。请您告诉我您现在的具体情况，我们需要一起想办法帮助您。

**⚠️ 紧急处理流程**：
1. ✅ 立即表达关心和担忧
2. ✅ 确认患者位置和安全状态
3. ✅ 提供心理援助热线
4. ✅ 鼓励拨打120或联系家人
5. ✅ 保持联系，等待专业帮助
6. ✅ 立即上报平台值班人员/主管
7. ❌ 不可轻视或忽略
8. ❌ 不可承诺保密而延误报警

---

#### 7.5.2 患者出现急性危险症状

**话术一（识别急性症状）**：
> 您好，我听到您说[描述的危险症状：胸痛、呼吸困难、大量出血等]，这可能是紧急情况！
> 
> 请您立即：
> 1. 拨打120急救电话
> 2. 联系您身边的家人朋友
> 3. 如果有既往病史，按医嘱服用急救药物
> 
> 请问您身边有人可以帮忙吗？您的具体位置在哪里？

**话术二（持续指导）**：
> 请您不要慌张，按照我说的做：
> 1. 拨打120
> 2. 告诉急救人员您的症状和位置
> 3. 在等待急救时，保持冷静，采取舒适的体位
> 
> 我会一直在线陪伴您直到急救人员到达。请告诉我您现在的情况。

**话术三（通知平台）**：
> [同时立即通知平台值班人员/上报主管]

**⚠️ 急性危险症状识别**：
- 胸痛/胸闷/心绞痛
- 呼吸困难
- 大量出血
- 意识丧失/昏厥
- 剧烈头痛/中风症状
- 过敏性休克症状
- 其他危及生命的紧急情况

**⚠️ 紧急处理原则**：
1. ✅ 立即指导拨打120
2. ✅ 确认位置，方便急救
3. ✅ 保持通话，直到急救到达
4. ✅ 同时上报平台
5. ❌ 不可说"等一下再看看"
6. ❌ 不可代替急救人员处理

---

### 7.6 服务场景话术

#### 7.6.1 夜间/节假日服务话术

**话术一（夜间服务开场）**：
> 您好，感谢您在夜间联系我们多扬健康～现在是[时间]，我是今晚值班的客服[姓名]，请问有什么可以帮您？

**话术二（节假日服务开场）**：
> 您好呀，节假日好！感谢您选择多扬健康～我是今天值班的客服[姓名]，请问有什么需要帮助的吗？

**话术三（夜间加急说明）**：
> 您好，夜间服务可能会有一些响应上的延迟，医生可能不在线。不过您放心，如果是紧急情况我们可以帮您转接紧急救援。您先说说您的情况，我来判断一下怎么处理最好～

**注意事项**：
- ✅ 夜间/节假日要有不同的开场
- ✅ 说明响应可能延迟
- ✅ 紧急情况要引导拨打120
- ✅ 语气要更温和，给人安全感

---



## 第八章 禁止话术红线清单

> **⚠️ 严重警告**：以下话术类型严格禁止，一经发现将按平台规定处理，情节严重者依法追究法律责任。

### 8.1 诊断类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 作出诊断结论 | "根据你说的症状，你就是XX病" | "这个情况需要医生来诊断" |
| 猜测疾病名称 | "我觉得可能是XX" | "医生会根据你的情况判断" |
| 确认疾病 | "没错，你就是XX" | "医生会更准确地告诉你" |
| 使用"诊断"一词 | "我来给你诊断一下" | "我来帮你整理情况" |

### 8.2 处方类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 推荐药品 | "你可以吃XX药" | "这个需要医生来开药" |
| 建议用药 | "建议你用XX药试试" | "医生会根据情况开药" |
| 修改处方 | "你把剂量改一下" | "这个需要医生来调整" |
| 确认购药 | "XX药效果不错" | "医生开的药你可以去购买" |

### 8.3 承诺类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 承诺治愈 | "这个病保证能治好" | "医生会尽力帮助你" |
| 承诺效果 | "吃了肯定有效" | "按医嘱用药会对你有帮助" |
| 承诺时间 | "明天就能安排" | "我们会尽快帮您协调" |
| 承诺退款 | "这个可以退款" | "我帮您了解一下退款规则" |

### 8.4 判断类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 报告解读 | "你的指标高一点没关系" | "这个需要医生来解读" |
| 病情判断 | "这个问题不大" | "医生会告诉你具体情况" |
| 预后判断 | "你这个问题不严重" | "医生会根据情况评估" |
| 安全判断 | "你可以放心" | "医生会告诉你需要注意什么" |

### 8.5 隐私类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 透露医生信息 | "医生手机号是XXX" | "医生个人隐私不便透露" |
| 透露其他患者信息 | "XX也在我们这看病" | "患者隐私我们不能透露" |
| 讨论平台内部问题 | "我们平台最近人手不够" | "我们会尽快为您服务" |
| 透露他人病历 | "XX和你情况一样" | "我们不能透露其他患者信息" |

### 8.6 其他禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 推诿患者 | "这个不归我管" | "我来帮您看看可以怎么处理" |
| 消极态度 | "没办法" | "我来看看有没有其他办法" |
| 争辩争吵 | "你这样说不对" | "我理解您的心情，我们慢慢说" |
| 过度承诺 | "我保证..." | "我会尽力帮您..." |
| 代替患者决定 | "你就这么办吧" | "这个您自己来决定" |
| 代替医生行事 | "医生说了也是这个意思" | "具体还是以医生说的为准" |

---

## 附录：客服服务快速参考卡

### 附录A：服务类型快速查询

| 服务类型 | 计费方式 | 响应时效 | 客服介入时机 |
|----------|----------|----------|--------------|
| 在线即时聊天 | 按次分钟（15分钟起） | 实时 | 5分钟无回复 |
| 图文问诊 | 按次 | 48小时 | 30分钟无回复 |
| 电话问诊 | 按分钟 | 实时 | 全程不可介入 |
| 视频问诊 | 按分钟 | 实时 | 全程不可介入 |

### 附录B：退款规则速查

| 场景 | 退款比例 | 备注 |
|------|----------|------|
| 即时在线咨询未响应 | 全额退款 | 医生在服务时间段内未响应 |
| 即时在线咨询，距离服务开始2小时及以上取消 | 全额退款 | 距离服务开始2小时及以上 |
| 即时在线咨询，距离服务开始2小时内取消 | 不退款 | 距离服务开始2小时内，医生已准备 |
| 图文咨询24小时未响应 | 全额退款 | 医生未响应 |
| 电话/视频通话前取消 | 全额退款 | 未开始通话 |
| 电话/视频≤1分钟（质量问题） | 全额退款 | 通话质量差/信号中断 |
| 电话/视频>1分钟 | 不退款 | 已开始服务 |
| 陪诊24小时以上取消 | 全额退款 | 服务前24小时以上 |
| 陪诊2-24小时取消 | 80%退款 | 服务前2-24小时 |
| 陪诊2小时内取消 | 50%退款 | 服务前2小时内 |
| 陪诊已开始 | 不退款 | 陪诊师已到达 |
| 陪诊师迟到≥30分钟 | 协商退款 | 按协商结果 |
| 陪诊师爽约 | 全额退款+优惠券 | 赔偿补偿 |
| 绿通资源未确认 | 全额退款 | 对接启动前 |
| 绿通资源已确认 | 不退款 | 已协调推进 |
| 平台原因未完成对接 | 全额退款 | 平台责任 |

### 附录C：时段定价速查（V1.0版本不执行）

| 时段 | 时间范围 | 定价倍数 |
|------|----------|----------|
| 标准时段 | 工作日 8:00-18:00 | 1.0x |
| 晚间加急 | 工作日 18:00-22:00 | 1.2x |
| 应急服务 | 节假日/深夜 22:00-次日8:00 | 1.5x |

### 附录D：服务项目售价速查

- **陪诊服务**

| 服务名称                   | 说明                                    | 美团售价  | 官网售价  | 小程序打包折扣价 |
| -------------------------- | --------------------------------------- | --------- | --------- | ---------------- |
| 【专业陪诊】2小时          | 挂号/排队预约/陪同检查/采样送检         | 150元     | 198元     | 158元            |
| 【专业陪诊】4小时          | 挂号/排队预约/陪同检查/采样送检         | 298元     | 398元     | 318元            |
| 【专业陪诊】8小时          | 挂号/排队预约/陪同检查/采样送检         | 598元     | 828元     | 662元            |
| 【上门接送陪诊】4小时      | 全流程陪诊/复诊/客户接送（车费自理）    | 368元     | 498元     | 398元            |
| 【上门接送陪诊】8小时      | 全流程陪诊/复诊/客户接送（车费自理）    | 658元     | 918元     | 734元            |
| 【急诊陪诊/夜间陪诊】4小时 | 急诊陪诊（18:00-次日06:00，任意四小时） | 498元     | 698元     | 558元            |
| 【妇科门诊手术陪同】4小时  | 妇科门诊手术全程陪同                    | 398元     | 558元     | 446元            |
| 【孕前陪诊/产检陪诊】4小时 | 孕前检查/产检全程陪同                   | 328元     | 458元     | 366元            |
| 【肠胃镜/核磁/CT检查陪诊】 | 特殊检查陪诊                            | 298元     | 398元     | 318元            |
| 【超时陪诊费用】           | 每一小时超时费用                        | 80元/小时 | 98元/小时 | 78元             |

- **院内代办服务**

| 服务名称                   | 说明                                                         | 美团售价 | 官网售价 | 小程序打包折扣价 |
| -------------------------- | ------------------------------------------------------------ | -------- | -------- | ---------------- |
| 【代约检查】               | 代约MRI/CT/超声/肠胃镜等，前往医院与门诊医生沟通开具检查单并预约时间 | 198元    | 268元    | 214元            |
| 【代取报告】               | 代取报告、取送结果                                           | 138元    | 188元    | 150元            |
| 【代问诊】                 | 1对1问诊，代取号、代排队、代问诊、检查开药、打印报告         | 488元    | 678元    | 542元            |
| 【代配药】                 | 依照病历前往医院开药并快递给用户                             | 198元    | 268元    | 214元            |
| 【取送邮寄病理切片】       | 代取切片、快递邮寄（本地/异地）                              | 228元    | 318元    | 254元            |
| 【出入院办理】             | 帮助办理入院及出院                                           | 258元    | 358元    | 286元            |
| 【出入院办理（上门接送）】 | 上门接送+出入院办理                                          | 328元    | 458元    | 366元            |

- **专业陪护服务**

| 服务名称       | 说明     | 美团售价 | 官网售价 | 小程序打包折扣价 |
| -------------- | -------- | -------- | -------- | ---------------- |
| 【6小时陪护】  | 半日陪护 | 388元    | 538元    | 430元            |
| 【24小时陪护】 | 全天陪护 | 528元    | 738元    | 590元            |



### 附录E：绿通服务类型速查

| 服务类型 | 说明 |
|----------|------|
| 绿通挂号 | 快速挂到热门专家号 |
| 绿通住院 | 协助快速入院 |
| 绿通手术 | 协调手术安排 |
| 绿通检查 | 加速检查排队 |
| 绿通床位 | 快速安排住院床位 |
| 绿通转诊 | 协助转院流程 |
| 绿通会诊 | 安排多学科会诊 |

### 附录F：紧急情况应对

| 场景 | 应对动作 |
|------|----------|
| 患者有轻生/自伤倾向 | 立即表达关心 → 确认位置 → 提供心理热线 → 持续陪伴 → 立即上报 |
| 患者出现急性危险症状 | 立即指导拨打120 → 确认位置 → 保持通话 → 通知平台 |
| 投诉升级 | 认真倾听 → 记录详情 → 安抚情绪 → 承诺跟进 → 升级处理 |

### 附录G：话术使用优先级

1. **遇到诊断/开方要求** → 立即转接医生，说明角色边界
2. **遇到紧急情况** → 立即采取行动（拨打120/上报），不要等待
3. **遇到无法回答的问题** → 转交专业人士，不可猜测
4. **遇到边界模糊** → "转医生优先、保护患者、留存记录"
5. **遇到情绪问题** → 先处理情绪，再处理事情
`},R3={id:"medical_assistant",title:"多扬健康平台·医助服务标准化服务话术库",subtitle:"连接医生与患者的关键桥梁，协助医疗业务场景标准沟通规范",lastUpdated:"2026-05-22",content:`# 多扬健康平台·医助服务标准化服务话术库

---

## 第一章 总则

### 1.1 话术库使用说明

本话术库是多扬健康平台医助服务的标准化指南，适用于平台所有在线问诊、健康管理、陪诊、特需服务等场景。医助人员在日常工作中应：

- **优先熟读总则与红线清单**，建立清晰的角色边界意识
- **按需查阅具体场景章节**，结合患者实际情况灵活运用
- **严格遵守话术规范**，尤其是标注"禁止""不可"的内容
- **遇到边界模糊情况**，遵循"转医生优先、保护患者、留存记录"原则

### 1.2 医助服务定位与边界声明

#### 1.2.1 医助角色定位

医助是连接医生与患者的关键桥梁，承担**辅助性服务**职能。

> **核心原则**：医助的所有服务行为应在执业医师的指导和授权范围内进行，不具有独立诊断、开具处方、作出医学结论的权限。

#### 1.2.2 工作场景及工作职责

| 业务场景                   | 核心职责               | 具体工作内容                                                 |
| -------------------------- | ---------------------- | ------------------------------------------------------------ |
| **一、诊前配置与信息收集** | **服务与价格配置**     | 在获得医生授权的前提下，医助可以协助医生配置在线付费咨询的价格、服务包以及管理服务时段。 |
|                            | **信息收集与预处理**   | 在医生正式接诊前，负责收集并整理患者的初诊数据、健康档案等基础信息，进行初步的分诊与预处理。 |
|                            | **患者群管理**         | 负责对绑定医生的患者进行社群管理，包括上传微信群二维码、将患者引导至私域等。 |
| **二、问诊与诊中沟通**     | **异常超时介入**       | 负责监控医生的回复时效。在在线即时聊天中，若医生5分钟无回复，医助需主动介入安抚或提醒；在图文问诊中，若医生30分钟无回复，医助也需介入跟进，以防订单因超时（如24小时未响应）触发全额退款。 |
|                            | **轻咨询初步回复**     | 在执业医师的明确授权范围内，医助可以代医生对患者的轻咨询类问题（如就医流程、简单的注意事项等）进行初步回复。 |
|                            | **健康教育与科普**     | 在沟通中向患者提供基础的健康教育和科普知识。                 |
| **三、诊后慢病管理与随访** | **AI高风险预警处理**   | 平台AI风控系统识别到患者健康指标出现异常波动并触发高风险预警时，任务会自动流转分配给医助，医助需第一时间介入跟进患者情况。 |
|                            | **常规随访与用药指导** | 协助医生执行随访计划。如果患者随访逾期或依从性差，医助需主动通过电话或信息回访介入；同时负责用药提醒与依从性指导。 |
|                            | **复诊与履约协同**     | 在后续医疗闭环中，医助负责协助患者进行远程复诊，引导用户进行服务包消费。 |



## 第二章 平台推荐与使用问题话术

> **服务定位**：本章用于指导医助人员向医生和患者推荐多扬健康平台，协助完成小程序扫码，并处理使用过程中的常见问题。

### 2.1 医助向医生推荐平台话术

> **背景**：医助需要面对面或通过微信/电话，向医生介绍多扬健康平台的优势，说服医生入驻并让医生推荐患者使用。

#### 2.1.1 初次接触医生的推荐话术

**话术一（标准版）**：

> 您好，XX医生，我是多扬健康的医助小扬，简单跟您介绍一下我们平台的核心能力。
>
> 我们主要帮医生解决五类问题：第一，线上问诊太碎太耗时，我们用“AI+专属医助/陪诊”帮您做患者信息预处理、基础沟通和情绪安抚，让您专注关键诊疗；第二，患者外院资料分散，我们通过AI自动整合病历、检查和影像，形成结构化档案，一目了然；第三，问诊结束后患者容易断联，我们用随访工具+医助持续管理，帮助医生做长期患者管理；第四，线上诊疗有合规风险，我们提供AI合规提醒、知情同意和全流程留痕，降低风险；第五，您积累的病例可以自动脱敏结构化，直接用于科研和论文分析。
>
> 整体就是：**帮您减负、帮您留患、帮您控风险、帮您做科研数据沉淀。**
>
> 如果您方便，我可以用两分钟再给您具体演示一下。

**话术二（简洁高效版）**：

> XX医生您好，我是多扬健康医助小扬，简单跟您介绍一下我们平台。
>
> 我们主要通过**AI+专属医助/陪诊协作模式**，帮医生解决线上问诊的几个问题：一是减少碎片化问答和重复沟通，让医助帮您做患者信息预处理和基础沟通；二是把患者外院病历、检查和影像自动整合成结构化档案，方便您快速掌握病情；三是通过随访工具和医助协作，帮助您持续管理患者，避免问诊结束后断联；同时所有数据还能自动脱敏沉淀，用于科研和论文分析。
>
> 如果您方便，我可以用两分钟给您具体演示一下。

**注意事项**：

- ✅ 先了解医生的忙碌程度，找到共鸣点
- ✅ 强调"帮您节省精力"
- ✅ 强调在AI辅助"科研数据自动生成"
- ✅ 语气尊重专业，不卑不亢
- ❌ 不可贬低医生现有的工作方式

---

#### 2.1.2 医生对平台有顾虑时的应对话术

**场景一：担心耗时**

**话术一**：
> 我理解您的顾虑，确实时间对医生来说是最宝贵的资源。不过正因为如此，我们才设计了医助+AI护航机制。
> 
> 您想想，患者经常问的那些基础问题——"这个检查要空腹吗？""药要吃多久？""什么时候来复诊？"——这些其实不需要您亲自回复。医助可以帮助回答这些常见问题，您只需要处理真正需要专业判断的部分。
> 
> 而且患者信息会提前整理好发给您，您一眼就能看到关键内容，不需要在零散的消息里去找。

**话术二**：
> 您放心，我们不会增加您的工作负担。平台的设计理念是"让医生专注于诊疗"，其他琐事由医助来处理。您只需要在方便的时候回复患者的专业问题就行了。

**场景二：担心患者信息不安全**

**话术一**：
> 您问得非常好，信息安全确实非常重要。我们平台采用加密传输技术，患者的健康信息受到严格保护，只有签约医生和患者本人可以查看。
> 
> 而且我们要求所有医助人员签署保密协议，这是我们的基本职业操守。您完全可以放心，患者的信息安全是有保障的。

**话术二**：
> 您作为医生，肯定比任何人都重视患者隐私。我们平台同样如此——所有数据都经过加密处理，遵守国家相关数据保护法规。医助只是协助整理信息，不会有任何泄露风险。

**场景三：担心收益问题**

**话术一**：
> 关于收益方面，我们平台提供的是专业的线上诊疗服务，合理收取问诊费用。您可以根据自己的时间和专业价值设定服务价格。
> 
> 而且通过平台，您可以建立更稳定的患者关系——患者离院后还能继续管理，提供复诊提醒、用药提醒等服务，这些都是提升患者粘性的好方式。

**话术二**：
> 收益这块您完全可以放心，我们平台不会收取任何入驻费用或押金，只有在您提供服务后才会有相应的诊金结算。具体分成比例我这边可以给您发一份详细的收益说明～

**场景四：已经在用其他平台**

**话术一**：
> 您已经在用其他平台了是吗？那说明您对线上诊疗是有经验的。我们平台的差异化优势就是"医助护航"——您在门诊忙碌的时候，医助会主动帮您跟进患者，这样您就不用担心消息堆积了。
> 
> 而且我们的平台支持结构化健康档案，患者可以一键上传病历报告，让您看起来一目了然。

**话术二**：
> 多一个渠道也不冲突对吧？我们可以先让您免费体验一下，感受一下医助服务的便利。您看要不要先试试？

**话术三**：
> 您说得对，平台不在多，关键看能不能真正帮到您。我们平台特别适合那些患者量大、门诊忙的医生——有医助帮忙分担，至少不用担心患者消息24小时在线待命了。

**注意事项**：
- ✅ 针对不同顾虑，提供具体、有说服力的解答
- ✅ 不贬低其他平台，客观比较优势
- ❌ 不可夸大功能或承诺做不到的事情

---

#### 2.1.3 引导医生推荐患者使用小程序的话术

**话术一（推荐患者话术）**：
> XX医生，您看您今天接诊的这位患者，之后的康复随访和用药提醒其实挺重要的。您可以推荐他使用我们的多扬健康小程序，这样您给他开的随访计划、量表任务都可以直接推送到患者手机上，患者完成情况您也能实时看到。
> 
> 您看方便的话，我帮您给患者介绍一下？

**话术二（强调便利性）**：
> 这位患者后续需要定期复诊和随访吧？您推荐他安装我们的平台后，复诊提醒、用药提醒都可以自动推送，不用您一个个去提醒了。而且患者有什么问题也可以通过平台直接联系您，医助会帮您做前置筛选。

**话术三（医生激励话术）**：
> 您推荐的每一位患者使用，都能让您的患者管理更轻松——以后随访任务直接线上发，患者数据自动汇总，您一眼就能看到哪位患者指标有波动。这样您管理100个患者都比以前管20个还轻松～

**话术四（简化操作引导）**：
> 您只要跟患者说一句"扫这个码安装，以后有问题可以在线问我"，剩下的我来帮患者完成注册和引导。您看这样可以吗？

**注意事项**：
- ✅ 让医生觉得推荐患者是帮自己减负
- ✅ 提供便捷的患者引导方式
- ✅ 不要让医生觉得是在"拉人头"
- ❌ 不可强制医生推荐

---

### 2.2 医助向患者推荐安装话术

> **背景**：医助在病人线下就诊时，推荐患者使用多扬健康小程序。

#### 2.2.1 线下就诊时推荐安装话术

**话术一（就诊结束时推荐）**：
> 您好呀，今天的就诊结束啦～您回去后如果有什么问题想咨询医生，或者医生给您开了随访任务、量表什么的，可以通过"多扬健康"小程序来接收，很方便的。
> 
> 您手机微信扫一下这个医生的二维码，几秒钟就能注册好，我来帮您操作～

**话术二（老年人关怀版）**：

> 阿姨/叔叔，您今天看完诊感觉怎么样？回去后医生给您开的药和注意事项都记住了吗？
> 
> 您看您方便的话，可以使用我们的多扬健康小程序，这样医生给您发的提醒、复查通知您都能收到，相当于您的专属线上医疗管家。您子女在旁边吗？让他们帮您扫一下码，很快就弄好了～

**注意事项**：

- ✅ 就诊结束时自然引入，不要太突兀
- ✅ 强调对患者的好处，而非平台功能
- ✅ 主动帮助患者完成安装
- ❌ 不可在患者不舒服时强行推荐

---

#### 2.2.3 患者对安装有顾虑时的应对话术

**场景一：怕麻烦**

**话术一**：

> 我理解您的想法～其实使用真的特别简单，打开微信扫一下，几秒钟就搞定了。不用填很多信息。
> 
> 您想想，以后医生给您的提醒直接发到手机上，不用担心漏掉，这多方便呀～我来帮您操作，很快就弄好了！

**话术二**：
> 不麻烦的，您看我就站在这，扫个码填个手机号就行。装好之后您看一次就知道多方便了～

**场景二：怕收费高**

**话术一**：
> 您放心，我们小程序本身是免费使用的，只有您主动发起问诊才会产生费用，而且新用户首单还有9折优惠。
> 
> 平时管理自己的健康档案，看看健康资讯都是免费的，不会无缘无故扣钱。您可以先试试看～

**场景三：不会操作手机**

**话术一（耐心引导）**：
> 没关系，我来一步一步教您～您手机拿出来，我先帮您打开微信，然后扫医生的二维码就可以了……
> 
> 对，就是这样～您学得真快！您看，是不是很简单？

**话术二（提供长期支持）**：

> 没关系的，我现在就站在这帮您弄，弄好了我再教您怎么用。要是之后忘了怎么操作，随时可以打电话给我们客服，客服会一步步教您的～

**场景四：担心隐私**

**话术一**：
> 您问得好，隐私保护确实很重要。您在我们平台的信息受到严格保护，只有为您看诊的医生和您自己能看到，其他人都看不到的。
> 
> 您注册的时候只需要填手机号，其他信息比如病史什么的都是您自己选择要不要填的，完全自愿～

**话术二**：
> 您放心，我们的隐私保护做得很好的。您问诊的内容只有医生能看到，平台不会把您的信息给任何人。而且您随时可以联系客服删除您的账户和相关信息。

**注意事项**：
- ✅ 先承认患者的顾虑是合理的
- ✅ 用通俗易懂的语言解释
- ✅ 主动提供帮助
- ✅ 不要让患者感觉被强迫

---

#### 2.2.4 老年患者/家属场景推荐安装话术

**话术一（面向老年患者）**：
> 阿姨/叔叔，您好呀～我是多扬健康的医助小扬。您今天来医院看病，医生特别让我来跟您说一声，以后有什么不舒服或者想问医生问题，可以通过手机上的"多扬健康"小程序来问，不用专门跑一趟医院。
> 
> 您孩子今天陪您来了吗？让他们帮您操作一下，很快就弄好了～以后医生给您发的提醒、让您填的表格，都能在手机上收到，省得您记不住。

**话术二（面向家属）**：
> 您好，请问您是XX患者的家属吗？医生让我来跟您说一下——您家人的后续康复和随访，我们可以通过"多扬健康"小程序来协助管理。以后复诊提醒、用药提醒、量表任务都会通过小程序发送，您们在家就能完成。
> 
> 您看方便的话，试一下？操作很简单的～

**话术三（代为操作版）**：
> 您稍等，我来帮您操作～（拿过手机帮患者完成注册）
> 
> 好啦，已经帮您弄好了！您看，现在首页上有"立即咨询"，您以后点进去这里就能和今天的医生沟通。有什么不懂的随时打电话给我们，我来教您～

**话术四（全家桶介绍版）**：
> 您知道吗，一个账号可以添加多位家庭成员的呢。您帮家里老人、孩子也把信息加上，以后帮他们问诊、查看健康档案都方便～

**注意事项**：
- ✅ 语速放慢，表达清晰
- ✅ 尽可能帮患者完成操作
- ✅ 强调对老人/慢病患者的便利性
- ✅ 必要时联系家属协助
- ✅ 介绍全家共享功能

---

### 2.3 小程序使用问题处理话术

> **背景**：患者或医生在使用多扬健康小程序时，可能遇到技术问题，医助需要提供引导和安抚。

#### 2.3.1 小**程序注册/登录问题话术**

**场景一：微信一键授权失败/点击无反应**

**话术一（安抚+排查）**：

> 您好呀，您是点击微信一键登录没有反应对吗？别着急，这通常是微信网络授权延迟导致的～ 
>
> 您可以尝试下拉一下微信页面刷新，或者把小程序退出后台（在微信主界面下拉，把我们的小程序拖到底部删除），
>
> 然后再重新搜索“多扬健康”进去点一下授权试试～

**场景二：账号异常/登录不上**

**话术一（了解情况）**：
> 您说账号登录异常是吗？请问具体是什么情况呢？
> 
> 是提示“账号被限制”、“身份信息需重新认证”，还是其他的呢？
> 
> 您方便截个图发给我吗，我帮您精准排查一下～

**话术二（申诉与解除限制处理）**：

> 好的，看到您的截图了。这个情况可能是触发了系统的风控保护，或者是您的账号超过12个月没有使用进入了休眠状态。 您可以拨打我们的官方客服热线 4008400789，提供一下您授权绑定的手机号，我们会立刻让技术人员帮您核实并在后台解除限制，很快就能恢复正常的～

**场景三：登录后找不到历史问诊/健康档案**

**话术一（排查账号一致性）**：

> 您好，您说登录进去了但是找不到之前的问诊记录对吗？不用担心，数据都在的～ 因为我们的小程序是跟您的【微信号】和【绑定的手机号】一一对应的。请您回忆一下：
>
> 您这次用的微信号，和之前看病时用的是同一个吗？您刚才授权一键登录的手机号，是您之前留的那个号码吗？（有时候微信会自动拉取您其他的手机号）
>
> 您可以在“我的-设置”里看看当前绑定的手机号对不对，如果不对，可以在里面更换绑定的手机号，之前的记录就回来啦～

**注意事项**：

- ✅ 先安抚情绪，不要让用户觉得是自己的问题
- ✅ 给出清晰的排查步骤
- ✅ 提供多种解决方案
- ✅ 必要时引导拨打客服热线

---

#### 2.3.2 支付问题话术

**场景一：支付失败**

**话术一（常见原因排查）**：
> 您好，支付失败可能有几个原因：
> 1. 网络不稳定——建议切换一下WiFi或移动网络
> 2. 余额不足——请确认银行卡或账户余额是否充足
> 3. 支付限额——部分银行有单笔限额，可以咨询银行
> 
> 您可以先检查一下这几种情况，然后重新尝试支付～

**场景二：扣款未到账/重复扣款**

**话术一（查询确认）**：
> 您好，我先帮您查一下这笔订单的支付状态。
> 
> [查询后]根据系统显示，您的这笔订单[状态说明：已支付/处理中/失败]。
> 
> 如果已经扣款但显示失败，款项会在1-3个工作日内原路退回，请耐心等待～

**话术二（异常情况处理）**：
> 您说扣了两次款对吗？非常抱歉给您带来困扰了。我这边帮您记录下来，提交给财务核实。如果确实重复扣款，会在3个工作日内退还到您的原支付账户。
> 
> 我帮您备注一下加快处理～

**注意事项**：
- ✅ 支付问题要耐心排查原因
- ❌ 不可承诺具体退款到账日期

---

#### 2.3.3 功能使用引导话术

**场景一：不知道怎么上传报告**

**话术一（语音引导）**：

> 您好，上传报告其实很简单～
> 1. 进入“我的”-“健康档案”
> 2. 点击下面的"立即上传"按钮
> 3. 选择拍照或者从相册选择照片
> 5. 点击“完成”就可以了
> 
> 拍照的时候注意光线要充足，报告要平整，字要能看清哦～

**场景二：找不到自己的主治医生**

**话术一（使用引导）**：

> 您好，找医生的话可以在首页上方就是，也可以点击“切换医生”按钮，向其他医生发起咨询。
> 
> 只有扫码加过的医生才能被找到。

**场景三：不知道怎么发起问诊**

**话术一（步骤引导）**：

> 您好，发起问诊很简单：
> 1. 在首页选择您要咨询的医生
> 2. 点击"立即咨询"
> 3. 选择“在线咨询”或者“图文咨询”
> 4. 简要描述您的症状或问题
> 5. 如有报告可以上传附件
> 6. 确认支付后即可发起
> 
> 医生会在规定时间内回复您，请保持手机畅通～

**注意事项**：
- ✅ 操作指引要清晰、可执行

- ✅ 鼓励用户截图发过来帮忙看

  

---

#### 2.3.4 小程序闪退、卡顿、加载失败话术

**话术一（安抚+基础排查）**：
> 您好，卡顿或者闪退确实挺烦人的～您先别着急，我们可以先排查一下：
> 
> 1. **网络问题**：检查一下WiFi或者移动网络是否正常，可以切换一下网络试试
> 2. **内存不足**：看看手机存储空间够不够，可以清理一下缓存或者关闭一些不用的App
> 3. **版本过旧**：检查一下小程序是否需要更新到最新版本
> 
> 您先试试这几个方法，看看有没有改善～

**话术二（小程序重启）**：

> 您可以试试把小程序完全关闭后重新打开：
> - 小程序：右上三个小点，打开选择“重新进入小程序”
> 
> 有时候重启一下就好了～

**话术三（清理缓存引导）**：

> 您可以试试清理一下缓存：
> - 微信用户：微信内搜索"多扬健康"，长按图标，选择"删除小程序"，然后重新搜索添加
> 
> 清理后重新登录试试，一般能解决加载问题～

**话术四（无法解决时）**：
> 如果以上方法都试过了还是不行，可能是手机系统兼容性问题。您可以：
> 1. 确认一下您的手机系统和版本是否支持
> 2. 尝试用另一个设备登录看看是否是设备问题
> 
> 如果确实是技术问题，您可以联系我们客服4008400789反馈，我们会让技术人员尽快处理。给您带来不便非常抱歉～

**注意事项**：
- ✅ 先安抚情绪，表达理解和歉意
- ✅ 提供多种排查方案
- ✅ 必要时记录问题反馈给技术团队
- ✅ 引导拨打客服热线

---

#### 2.3.6 健康档案使用指导话术

**话术一（引导建档）**：
> 您好，健康档案是您的专属"移动病历本"，以后看病的时候医生可以直接看到您的健康信息，特别方便～
> 
> 您可以这样完善您的档案：
> 1. 进入"我的-健康档案"
> 2. 完善基本信息：血压、血糖、BMI等
> 3. 添加病史：既往史、家族史、过敏史
> 4. 上传资料：病历报告、出院记录、检查单
> 
> 资料越完善，医生给您的建议就越准确哦～

**话术二（数据记录引导）**：
> 您平时在家量的血压血糖都可以记录在健康档案里：
> 1. 进入"健康档案"
> 2. 点击"添加记录"
> 3. 选择"血压"或"血糖"
> 4. 填入数值和测量时间
> 
> 这样您自己能看到趋势变化，医生也能了解您的控制情况～

**话术三（报告上传引导）**：
> 您可以把之前的检查报告都拍照上传：
> 1. 进入"健康档案-报告单"
> 2. 点击"立即上传"
> 3. 选择报告照片或者拍照上传
> 
> 拍照时注意光线充足、字迹清晰，这样医生看起来更清楚～

**话术四（家庭成员管理）**：

> 您好，一个账号可以添加多位家庭成员哦～
> 
> 1. 进入"我的-就诊人管理"
> 2. 点击"新增就诊人"
> 3. 填写家人的基本信息
> 
> 添加后您可以帮家里老人孩子查看健康档案、预约问诊～

**注意事项**：
- ✅ 强调健康档案对患者的好处
- ✅ 提供清晰的步骤指引
- ✅ 引导完善档案信息
- ✅ 介绍家庭成员共享功能

---



## 第三章 问诊服务话术

### 3.1 医助介入问候话术

> **适用场景**：医生超过规定时间未回复时，医助主动介入。

#### 3.1.1 在线即时聊天5分钟介入

**场景说明**：患者发起在线即时聊天，医生5分钟内未回复，系统自动/手动触发医助介入。

**话术一（标准版）**：
> 您好呀，我是多扬健康的医助小扬，看到您刚才发了消息，医生这边可能正在处理其他患者，让我先来帮您看看～请问您是遇到了什么不舒服吗？可以先和我描述一下症状，我来帮您记录，这样医生回复后能更快地了解您的情况。

**话术二（温和关怀版）**：
> 您好呀～看到您在线等候了，我是医助小扬。医生正在忙碌中，我先来陪您聊聊，您不用着急。请问有什么我可以帮您的吗？把您的症状或者问题告诉我，我这边先帮您整理好，等医生一来就能马上看到～

**话术三（简洁高效版）**：
> 您好，我是多扬健康医助。医生稍后即会回复，您先说说您的问题或症状，我帮您记录转达。

**注意事项**：
- ✅ 主动表明身份，消除患者等待焦虑
- ✅ 引导患者描述症状，为医生提供更多信息
- ✅ 告知患者医生稍后会回复，不要让患者误以为医助会直接回复
- ❌ 不可在此时给出任何诊断性判断

---

#### 3.1.2 图文问诊30分钟介入

**场景说明**：患者上传报告或图片并提问，医生30分钟内未回复，医助介入。

**话术一（标准版）**：
> 您好，我是多扬健康的医助小扬～看到您上传了[报告/图片]并提交了问题，医生这边可能正在处理其他患者，暂时还没来得及回复。让我先了解一下您的具体情况：请问您是因为什么做的这个检查？现在有什么不舒服的感觉吗？您的问题我已经帮您记录好了，医生会在48小时内给您回复，请保持手机畅通哦～

**话术二（安抚版）**：
> 您好呀！我是您的专属医助小扬。医生收到了您的问诊请求，正在仔细查看您上传的资料，稍后会给您专业的回复。在等待的过程中，您可以把不舒服的症状、最近的饮食作息情况告诉我，我帮您整理好一起转给医生，这样医生能更全面地了解您的情况～

**话术三（提醒版）**：
> 您好，我是多扬健康医助。您的问题已收到，医生会尽快回复。请补充以下信息以便医生判断：①目前主要症状是什么？②发现多长时间了？③有没有做过其他检查？资料越完整，医生回复越准确～

**注意事项**：
- ✅ 强调图文问诊的响应时效（48小时），管理患者预期
- ✅ 引导患者补充症状信息，提升问诊效率
- ✅ 说明医生会"回复"而非"诊断"，保持角色边界
- ❌ 不可对报告内容进行解读或给出任何结论

---

### 3.2 问诊引导话术

> **适用场景**：引导患者描述症状、上传检查报告、完善病史信息。

#### 3.2.1 引导描述症状

**话术一（常规引导）**：
> 为了让医生更好地了解您的情况，请问您可以描述一下：
> 1. 主要哪里不舒服？
> 2. 这种不舒服持续多长时间了？
> 3. 是一直这样，还是时好时坏？
> 4. 之前有没有遇到过类似的情况？

**话术二（轻松引导）**：
> 您好～不用紧张，您是哪里不舒服啊？感觉是什么样的（疼/痒/胀/闷）？什么时候开始的？有没有什么会加重或缓解？

**话术三（系统引导）**：
> 为了给您提供更准确的帮助，请告诉我：
> - 症状部位：[如：胃部/头部/腹部...]
> - 不适类型：[如：疼痛/胀气/反酸...]
> - 持续时间：[如：今天刚开始/好几天了/一直有...]
> - 伴随情况：[如：有没有恶心/发烧/食欲不好...]

**注意事项**：
- ✅ 使用开放式问题，让患者自由描述
- ✅ 适当给患者"减压"，减少紧张感
- ✅ 提供结构化选项，帮助不擅长表达的患者
- ❌ 不可主动引导患者"确认"某种疾病

---

#### 3.2.2 引导上传检查报告

**话术一（标准引导）**：
> 您好，如果您手边有相关的检查报告（血常规、B超、CT片子等），可以拍照上传，这样医生能更全面地了解您的身体情况。拍照时请注意：
> - 光线充足，避免反光
> - 文件要拍完整，四角都在画面内
> - 报告单要平整，不要有折痕

**话术二（简化引导）**：
> 有检查报告的话可以上传照片给医生看哦～手机拍照就行，能看清字就行，不用很专业～

**话术三（详细引导）**：
> 医生在看您的问题时，如果有检查报告作为参考，判断会更准确。您可以把以下资料拍照上传：
> 1. 最近一次的检查报告（验血、B超、X光等）
> 2. 之前的诊断单或病历
> 3. 正在服用的药物包装盒
> 拍照后点击问诊页面的"+"号上传即可～

**注意事项**：
- ✅ 提供清晰的拍照指引
- ✅ 强调报告对医生判断的价值
- ✅ 操作步骤要具体可执行
- ❌ 不可要求患者拍摄敏感部位照片

---

#### 3.2.3 引导补充病史信息

**话术一（全面引导）**：
> 为了让医生更准确地为您评估，请帮我补充以下信息：
> 1. 既往病史：以前有没有得过什么病？比如高血压、糖尿病、心脏病等
> 2. 过敏史：有没有对什么药物或食物过敏？
> 3. 用药情况：现在有没有在服用什么药物？
> 4. 检查情况：之前有没有做过相关检查？结果怎么样？

**话术二（简化引导）**：
> 医生需要了解一些基本情况：有没有药物过敏？有没有慢性病？现在在吃什么药吗？这些对判断都挺重要的～

**注意事项**：
- ✅ 病史信息对医生判断至关重要，但语气要轻松不要像"审问"
- ✅ 重点询问与当前症状相关的病史
- ✅ 对于敏感信息（如性生活史），用专业但不尴尬的方式询问

---

### 3.3 问诊转接话术（后续版本单独开放与医助的咨询功能时使用）

> **适用场景**：医助无法回答的专业问题，需要转交给医生处理。

#### 3.3.1 常规转接

**话术一（标准转接）**：

> 您问的这个问题比较专业，我这边需要请医生来为您解答。您的疑问我已经记录下来并转达给医生了，医生会在[即时回复/1小时内/今天内]给您详细的回复，请保持在线留意哦～

**话术二（温和转接）**：
> 您的这个问题问得特别好！不过这类专业问题我需要请我们平台的专业医生来为您解答，这样您能得到更准确、更放心的答案。稍等一下，我已经把您的问题提交给医生了，马上就会回复您～

**话术三（明确转接）**：
> 这个问题超出了我能够回答的范围，我已经帮您转接给[XX科室]的医生了。医生会在[具体时间]前给您回复，请注意查看消息提醒。

**注意事项**：
- ✅ 承认自己的能力边界，但不贬低自己
- ✅ 明确告知患者问题已转交医生
- ✅ 提供具体等待时间预期
- ✅ 强调等待时间计入问诊时长

---

#### 3.3.2 症状分析转接

**话术一（专业转接）**：
> 根据您描述的情况，这个症状可能涉及[多个方面/需要进一步评估]，我这边先帮您整理好信息，转交给我们平台的内分泌科医生来为您做专业判断。医生看过您的情况后会给出建议，请稍等～

**话术二（安抚转接）**：
> 您的症状听起来需要医生详细评估才能判断，我已经把您的情况整理好提交给医生了。医生会根据您的全部信息给出专业建议，请放心，保持手机畅通就好～

**注意事项**：
- ✅ 不要重复或强化患者的担忧
- ✅ 强调会"专业判断"而非"诊断"
- ✅ 保持镇定，避免传递焦虑情绪

---



## 第四章 随访风险预警话术

### 4.1 随访邀约话术（医生要求时可使用）

> **适用场景**：医生要求医助进行电话随访，或提醒平台上即将到期的随访任务。

#### 4.1.1 定期随访邀约

**话术一（标准版）**：

> 您好呀！我是多扬健康的医助小扬，[医生姓名]医生让我联系您，想了解一下您最近的身体情况～请问您现在方便通话/聊天吗？主要想问问您用药后感觉怎么样，有没有哪里不舒服，以及最近的指标控制情况。

**话术二（温和版）**：
> 您好～[医生姓名]医生惦记着您，让我来问问您最近身体怎么样了。之前医生给您开了药/做了治疗，不知道您现在感觉如何？方便的话我们聊几分钟，帮您记录一下目前的状态～

**话术三（简洁版）**：
> 您好，我是多扬健康医助。医生想了解您近期身体情况，方便回复一下以下几个问题吗？
> 1. 最近身体感觉怎么样？
> 2. 药有没有按时吃？
> 3. 有没有出现什么不舒服？

**注意事项**：
- ✅ 表明是医生安排，增加信任感
- ✅ 询问是否方便，体现尊重
- ✅ 简要说明随访内容，降低心理压力

---

#### 4.1.2 复诊前随访

**话术一（提醒版）**：
> 您好！您预约的复诊时间是[日期]，医生让我提前了解一下您近期的情况，方便提前准备～请问：
> 1. 最近症状有没有变化？
> 2. 按时吃药了吗？
> 3. 之前让做的检查做了吗？

**话术二（关怀版）**：
> 您好呀～您的复诊快到了，医生想提前了解一下您这段时间的恢复情况。您可以跟我说说：
> - 最近感觉怎么样？
> - 之前开的药吃着有没有不适？
> - 有没有什么新的情况想和医生说？

**注意事项**：
- ✅ 强调是为复诊做准备，增加配合度
- ✅ 提前了解可以补充的信息
- ✅ 提醒检查事项，避免复诊时空手

---

### 4.2 随访执行话术

> **适用场景**：随访过程中，需要患者配合完成量表填写或收集指标数据。

#### 4.2.1 量表填写引导

**话术一（标准引导）**：
> 为了让医生更准确地了解您目前的情况，需要您填写一份健康量表，大约需要[3-5分钟]。量表里的问题都是选择题，按照您的实际情况选择就好。我把量表链接发给您，填写完成后医生就能看到结果了～

**话术二（简化引导）**：
> 医生需要了解一下您目前的状态，我给您发一份小问卷，大概2分钟能填完，都是选择题，点链接就能填，很方便的～

**话术三（详细引导）**：
> 您好，为了更好地评估您的健康状况，需要您完成一份量表。量表包含以下几个部分：
> 1. 症状评估：最近身体有哪些不舒服
> 2. 生活质量：日常活动受影响程度
> 3. 情绪状态：最近心情怎么样
> 
> 完成时间约5分钟，如果有任何问题可以随时问我～

**注意事项**：
- ✅ 预估填写时间，降低心理负担
- ✅ 说明都是选择题，减少畏难情绪
- ✅ 解释量表用途，增加配合意愿

---

#### 4.2.2 指标数据收集

**话术一（常规收集）**：
> 医生想了解您近期的指标情况，方便的话请告诉我：
> - 血压：[数值/暂时没测]
> - 血糖：[数值/暂时没测]
> - 体重：[数值]
> - 最近一次检查结果：[指标名称和数值]
> 
> 如果有纸质报告可以拍照发给我，我帮您整理给医生～

**话术二（引导测量）**：
> 为了让医生了解您的控制情况，建议您近期测量一下[血压/血糖]，如果家里有血压计/血糖仪的话。测量时注意：
> - 血压：静坐5分钟后测量，连测2-3次取平均值
> - 血糖：空腹或餐后2小时测量都可以
> 
> 测量后把结果告诉我，我帮您记录～

**注意事项**：
- ✅ 提供指标参考范围，帮助患者理解
- ✅ 指导正确测量方法，保证数据准确性
- ✅ 询问是否有纸质报告，鼓励上传

---

### 4.3 随访逾期提醒话术（平台随访未完成时使用）

> **适用场景**：患者未按时完成随访任务，需要发送提醒。

#### 4.3.1 首次逾期提醒

**话术一（温和提醒）**：
> 您好呀～之前医生给您发了一份健康问卷，提醒您抽空填写一下，大概2-3分钟就能完成。您的填写结果能帮助医生更好地了解您目前的情况，为您提供更精准的建议～请问您方便现在填写吗？

**话术二（关怀提醒）**：
> 您好～[医生姓名]医生让我跟进一下您的情况。之前发您的健康问卷还没收到您的填写，不知道您是不是最近比较忙呢？问卷很简单，都是选择题，2分钟就能完成～您现在方便填吗？

**话术三（简洁提醒）**：
> 您好，提醒您填写一下医生发送的健康问卷，点此填写[链接]。如有疑问可随时联系我～

**注意事项**：
- ✅ 语气要温和友好，避免催促感
- ✅ 解释填写的重要性，但不要给压力
- ✅ 主动询问是否需要帮助

---

#### 4.3.2 多次逾期提醒

**话术一（升级提醒）**：
> 您好，系统显示您已经超过约定时间还未填写健康问卷了。医生需要了解您目前的情况才能给出后续建议，如果近期确实有困难填写，请告诉我您方便的时间，我会帮您调整～如果超过[具体时间]仍未填写，医生可能需要通过电话联系您了解情况了。

**话术二（最后提醒）**：
> 您好，这是第[2/3]次提醒您填写健康问卷了。医生一直在等您的反馈，以便为您提供持续的健康管理。如果您暂时不方便填写，也请告诉我一声，我会帮您妥善安排～

**注意事项**：
- ✅ 适度升级提醒程度，但保持友好
- ✅ 提供"联系医生"作为潜在后果，增加紧迫感
- ✅ 给予"调整时间"选项，展现灵活性

---

### 4.4 风险预警联系话术

> **适用场景**：AI系统检测到患者数据异常，需要医助联系患者进行确认。

#### 4.4.1 风险预警外呼

**话术一（标准版）**：
> 您好，请问是[患者姓名]先生/女士吗？我是[多扬健康/XX医院]的医助，想就您最近的健康情况做一个简短回访，请问现在方便说话吗？
> 
> 是这样的，系统显示您最近[上传的指标/填写的问卷]有些异常，医生想了解一下您目前的身体感受，请问您最近有没有觉得哪里不舒服？

**话术二（温和版）**：
> 您好呀～我是[医生姓名]医生的医助团队成员，医生非常关心您的情况，让我打电话来问问您。系统显示您最近的[血糖/血压/身体感受]可能有些需要注意的地方，您最近身体怎么样？有没有觉得哪里不太舒服？

**话术三（简洁版）**：
> 您好，我是多扬健康医助，系统提示您近期健康数据需要关注。请问您现在方便通话吗？想简单问您几个问题，确认一下您目前的情况。

**⚠️ 关键注意事项**：
- ✅ 先确认身份，再说明来意
- ✅ 强调是"关心"而非"警告"
- ✅ 询问是否方便通话，尊重患者时间
- ✅ 如果是紧急风险，直接询问是否需要拨打120
- ❌ 不可透露具体"风险值"或具体疾病判断
- ❌ 不可在电话中给出任何诊断或医疗建议

---

#### 4.4.2 风险确认后话术

**话术一（如患者无明显不适）**：
> 好的，感谢您告诉我您目前的情况。您的这些指标医生已经看到了，医生会在[今天内/明天]查看并给出建议。如果期间您有任何不舒服，请随时联系我们或者直接去医院就诊。请您保持手机畅通，医生可能会给您打电话进一步了解情况～

**话术二（如患者有不适）**：
> 了解了，感谢您的反馈。您说的这些情况我都会记录下来转达给医生。不过根据您目前的情况，建议您[尽快/明天]去医院就诊，或者如果感觉明显不舒服可以先去急诊。我这边也会尽快联系医生，让他直接给您回电话沟通。请您保重身体，有任何紧急情况请拨打120。

**话术三（如确认为高风险）**：
> 感谢您的反馈，您描述的情况我已经详细记录了。我现在马上联系[医生姓名]医生，让他直接和您通话给出专业建议。在此之前，请问您身边有家人或朋友可以陪伴吗？如果您感觉越来越不舒服，请立刻拨打120急救电话。请您保持通话畅通，医生会尽快联系您。

**⚠️ 风险处理原则**：
- ✅ 详细记录患者主诉，留存完整信息
- ✅ 立即通知签约医生，绝不延误
- ✅ 根据风险等级提供分级建议（观察/门诊/急诊/120）
- ❌ 绝对不可自行判断病情严重程度
- ❌ 绝对不可代替医生给出处置建议

---



## 第五章 健康教育与科普话术

> **重要声明**：以下话术仅用于健康教育与科普宣传，不可用于诊断、治疗或替代医生建议。

> **适用场景**：医生授权的日常健康指导，如饮食、运动、作息建议。

#### 5.1.1 饮食建议引导

**话术一（常规建议）**：

> 关于饮食方面，医生有一些建议给您参考：
> 1. [少油少盐/清淡饮食/均衡营养]：[具体建议]
> 2. [多吃蔬菜水果/补充优质蛋白]：[具体建议]
> 3. [避免/减少]：[具体食物]
> 
> 这些是一般性的健康饮食建议，如果您有特殊的饮食限制或慢性病，具体的饮食方案还是要听医生的哦～

**话术二（轻松建议）**：
> 医生让我跟您说一下日常饮食的小建议～[根据患者情况调整：比如对于高血压患者可以说"做菜的时候少放点盐酱油，咸菜腊肉这些也少吃一点哦"，对于糖尿病患者可以说"甜食和饮料尽量少碰，主食不要吃太多，适当多吃点蔬菜"～
> 
> 这些都是对您身体好的小习惯，慢慢调整就好，不用一下子全改～

**注意事项**：
- ✅ 建议要具体可操作，不要过于笼统
- ✅ 根据患者具体病情调整建议内容
- ✅ 强调"遵医嘱"，不可替代医生个性化方案
- ❌ 不可使用"吃了这个病就能好"等绝对化表述
- ❌ 不可推荐任何保健品或药品

---

#### 5.1.2 运动建议引导

**话术一（常规建议）**：
> 医生建议您平时可以适当运动，对身体恢复和控制病情都有帮助～
> - 运动类型：[如散步/慢跑/太极拳/瑜伽等]
> - 运动时间：[如每次20-30分钟/每天]
> - 运动强度：[如微微出汗/不感到疲劳/循序渐进]
> - 注意事项：[如避开饭后马上运动/有不适应立即停止]
> 
> 具体运动方案还是要根据您的身体情况来，您可以问问医生有没有适合您的运动建议～

**话术二（温和建议）**：
> 您好呀，医生说让您平时多动一动～不用做很剧烈的运动，散步啊、遛弯啊、做做家务啊都算活动。如果您之前不太运动，可以先从每天散步10-15分钟开始，慢慢加长时间，感觉不舒服就停下来休息～

**注意事项**：
- ✅ 强调量力而行，循序渐进
- ✅ 提到不适时立即停止
- ✅ 推荐适合患者情况的运动类型
- ❌ 不可描述为"治疗手段"
- ❌ 不可给出具体的运动处方

---

#### 5.1.3 作息建议引导

**话术一（常规建议）**：
> 医生让我提醒您，良好的作息对健康很重要～
> - 睡眠时间：建议每天保证[7-8小时/8小时以上]睡眠
> - 作息规律：尽量在[固定时间]入睡和起床
> - 睡前注意：[如避免看手机/不要吃太饱/泡脚有助于睡眠]
> - 其他：[如戒烟限酒/避免熬夜/午休适度]

**话术二（温馨提醒）**：
> 医生特别叮嘱我要提醒您，休息好很重要的～早睡早起身体好，这话虽然老套但是真的有道理。尽量在晚上[10-11点]前睡觉，睡前少看点手机电脑，睡眠质量不好的话可以在床头放点薰衣草或者泡个脚试试～

**注意事项**：
- ✅ 结合患者具体情况给建议（如失眠患者重点关注睡眠）
- ✅ 提供实用的小技巧
- ✅ 语气要温和，不要像在下命令

---

### 5.2 疾病知识科普话术

> **适用场景**：向患者介绍某种疾病的基础知识，用于健康教育。

#### 5.2.1 疾病介绍

**话术一（科普介绍）**：
> [疾病名称]是一种[类型]的疾病，[简要说明是什么]，目前在[我国/全球]还是比较常见的。它的主要表现是[列举主要症状]，如果出现[列举需警惕的症状]就要特别注意了。
> 
> 这个病的一般治疗方式包括[简要说明]，具体的治疗方案医生会根据您的情况来制定。有任何疑问都可以问医生～

**话术二（轻松科普）**：
> 您问的这个问题挺好的～[疾病名称]其实挺常见的，简单跟您说一下：就是我们身体的[某个系统/器官]出现了一些问题，主要表现就是您感觉到的那些不舒服。医生会根据您的具体情况来制定治疗方案，您配合好医生就行，不用太担心～

**⚠️ 注意事项**：
- ✅ 仅提供平台公示或官方授权的科普内容
- ✅ 强调"具体诊疗请遵医嘱"
- ✅ 用通俗易懂的语言解释专业术语
- ❌ 不可涉及具体用药方案
- ❌ 不可描述为"保证治好"等承诺性表述
- ❌ 不可替代医生面诊或视频问诊

---

### 5.3 检查/报告解读引导话术

> **重要提示**：医助不具有解读检查报告的权限，以下话术仅用于引导患者正确理解和使用检查结果。

#### 5.3.1 报告上传引导

**话术一（标准引导）**：
> 您好，如果您手边有之前的检查报告，可以拍照上传给医生看，医生会根据报告内容给您专业建议～上传方法：当你在问诊过程中，点击问诊页面下方的图片符号，选择"上传图片"，然后拍照或从相册选择照片就可以了。平时也可以上传到“我的-健康档案”中。

**话术二（详细引导）**：
> 建议您把之前做过的检查报告都整理一下，如果方便的话可以在问诊过程中，拍照上传给医生，平时也可以保存到“我的-健康档案”中：
> - 血常规、尿常规等化验单
> - B超、X光、CT、核磁等影像报告
> - 之前的诊断证明或病历
> 
> 报告拍清楚一点就行，照片要正、字要能看清～上传后医生会结合报告给您更准确的建议。

**注意事项**：
- ✅ 指导正确的上传方法
- ✅ 列出常见需要上传的报告类型
- ✅ 提供拍照要求指引
- ❌ 不可对报告内容进行任何解读或"翻译"

---

#### 5.3.2 报告等待说明

**话术一（说明等待）**：
> 有些检查项目出报告需要一定时间，比如[B超/验血/病理等]通常需要[时间]。报告出来之后，您可以把电子版或纸质版拍照发给医生，医生会为您解读～

**话术二（建议记录）**：
> 如果您的报告还没出来，建议您记一下：
> 1. 检查项目名称
> 2. 预计取报告时间
> 3. 取报告的地点（检查室/自助机/护士站等）
> 
> 报告出来后可以发给医生，或者下次复诊时带给医生看～

**注意事项**：
- ✅ 说明常见检查的出报告时间
- ✅ 帮助患者做好记录，避免遗忘
- ✅ 强调报告要给医生看，不要自己猜

---

#### 5.3.3 报告解读说明

> **⚠️ 重要声明**：此场景下医助只能引导患者向医生寻求解读，绝不可自行解读。

**话术一（正确引导）**：
> 您的报告结果建议让医生来给您解读，医生会根据报告内容结合您的症状给出专业判断。医生解读后您如果还有不明白的地方，可以再问～

**话术二（避免自行判断）**：
> 我理解您想尽快知道结果的心情，不过检查报告需要医生结合您的具体情况来解读，不同的指标组合可能代表不同的意义。建议您把报告发给您的问诊医生，医生会详细告诉您结果怎么样～

**话术三（提醒异常项）**：
> 您的报告上有几个指标标了箭头（↑或↓），这些代表一些指标偏高或偏低。不过具体是什么意思，需要医生根据您的整体情况来判断，您可以把这些内容告诉医生，医生会为您详细解读～

**⚠️ 严格注意事项**：
- ❌ 绝对不可说"指标高一点没关系"
- ❌ 绝对不可说"这个问题不大"
- ❌ 绝对不可说"这就是XX病"
- ❌ 绝对不可解读任何箭头或数值
- ✅ 所有报告解读必须转交医生

---



## 第六章 用药依从性话术（当医生有要求时可使用）

### 6.1 用药依从性跟进话术

> **适用场景**：跟进患者的用药情况，了解是否按时服药。

#### 6.1.2 用药依从性询问

**话术一（常规询问）**：
> 您好～医生让我跟进一下您的用药情况，请问您最近[药品名称]都有按时吃吗？有没有漏服或者感觉有什么不舒服的地方？

**话术二（关怀询问）**：
> 您好呀～最近身体感觉怎么样？药有没有按时吃呀？如果最近在吃药方面有什么困难，比如忘记吃、感觉吃了不舒服、或者买药不方便，都可以跟我说说，我们一起想办法～

**话术三（系统询问）**：
> 您好，您最近一次服药记录显示是[日期]，请问您现在用药情况如何？
> - A. 按时按量服用
> - B. 偶尔漏服
> - C. 经常漏服
> - D. 已经停药
> 
> 如有特殊情况请回复说明～

**注意事项**：
- ✅ 语气要关怀，不要像在"查岗"
- ✅ 给患者表达困难的机会
- ✅ 对于依从性差的患者，了解原因而非责备

---

#### 6.1.3 漏服药物处理

**话术一（常规处理）**：
> 如果您不小心漏服了一次，不用太担心：
> - 如果是每天一次的药，漏服后想起来就尽快补上，但如果快到下一次服药时间了，就跳过这一次，不要一次吃两顿的量
> - 如果是每天多次的药，漏服后想起来就补上，之后照常服用
> 
> 这个原则供您参考，具体情况您也可以问问医生会更准确～

**话术二（安抚处理）**：
> 漏服一次没关系的，不用太担心～下次记得吃就好，不用这次补服两倍的量，这样反而不好。以后可以设个闹钟提醒自己吃药，慢慢养成习惯就好了💪

**话术三（建议设置提醒）**：
> 漏服一次不用太担心，下次按时吃就好。如果经常忘记，可以试试以下方法：
> - 设置手机闹钟提醒
> - 把药放在显眼的地方（如餐桌旁、水杯边）
> - 使用药盒，提前把一周的药分装好
> 
> 您还有什么困难吗？

**⚠️ 注意事项**：
- ✅ 提供通用的漏服处理原则
- ✅ 强调"不要一次吃两倍的量"
- ✅ 提供防止漏服的小技巧
- ❌ 不可给出具体的"下次怎么补"的专业建议，必须转医生

---

#### 6.1.4 依从性差跟进

**话术一（了解原因）**：
> 我理解每个人情况不一样～请问您目前用药上有什么困难吗？
> - 觉得麻烦记不住？
> - 担心副作用？
> - 觉得吃了没什么效果？
> - 经济原因？
> - 还是其他原因？
> 
> 了解清楚后我可以帮您想想办法，或者反馈给医生看看有没有其他方案～

**话术二（鼓励坚持）**：
> 我能理解坚持吃药不容易～不过您知道吗，很多病情的控制都需要药物来帮忙，坚持服药才能让效果更好。如果您觉得有什么困难，可以告诉我，我们一起解决。如果担心副作用或者效果不好，可以让医生给您调整一下方案，总比自行停药要好～

**话术三（反馈医生）**：
> 感谢您告诉我真实的情况，我会把您的用药困难反馈给医生，让医生给您一些建议。有时候医生可以调整一下方案，比如换一种更方便的药，或者配合其他方式来帮助您。您愿意让我把这个情况告诉医生吗？

**⚠️ 关键注意事项**：
- ✅ 先了解依从性差的原因
- ✅ 不责备，多理解
- ✅ 强调规律用药的重要性
- ✅ 将情况反馈给医生寻求解决方案
- ❌ 不可说"不吃药会怎样怎样"来吓唬患者

---

### 6.2 用药异常反馈话术

> **适用场景**：患者反馈用药后出现不适或异常，需要引导联系医生。

#### 6.2.1 用药不适反馈

**话术一（安抚引导）**：

> 您好，听到您吃了药之后感觉[具体不适]，我这边先帮您记录下来。这种情况建议您尽快联系一下问诊的医生，让医生评估一下是否需要调整用药。
> 
> 您可以：
> 1. 在问诊窗口给医生留言说明情况
> 2. 联系我们帮您转达
> 
> 在医生回复之前，如果不适感加重或出现其他严重症状，请立即前往医院就诊。

**话术二（详细记录）**：

> 感谢您告诉我这些，我来帮您整理一下需要反馈给医生的信息：
> - 药品名称：[药品名]
> - 服用时间：[什么时候开始吃的]
> - 不适症状：[具体是什么感觉]
> - 不适程度：[轻微/明显/严重]
> - 其他用药：[还有没有吃其他药]
> 
> 这些信息我已经记录了，会尽快转达给医生。请问您现在不适的感觉明显吗？有没有出现[列举严重症状如呼吸困难、皮疹等]？

**话术三（紧急情况识别）**：
> 您描述的这种情况需要引起重视。如果出现以下任何一种情况，请立刻拨打120或前往最近的急诊：
> - 呼吸困难、胸闷
> - 面部或喉咙肿胀
> - 全身皮疹、瘙痒
> - 头晕乏力、意识模糊
> - 其他让您觉得"很严重"的感觉
> 
> 如果目前情况还好，请尽快联系医生说明情况，我来帮您转达！

**⚠️ 关键注意事项**：
- ✅ 详细记录异常情况
- ✅ 明确告知要找医生
- ✅ 识别严重症状，提供急诊指引
- ❌ 不可说"这个药可能有这个问题"
- ❌ 不可自行判断是否为药物副作用

---

#### 6.2.2 换药/停药咨询

**话术一（正确引导）**：
> 如果您想换药或者停药，这个需要医生来评估和决定哦。我建议您把您的想法告诉医生，比如：
> - 您想换/停药的原因是什么？
> - 现在身体感觉怎么样？
> 
> 医生会根据您的情况给出专业建议，是继续吃、换药还是调整剂量，都需要医生来判断。请不要自行停药或换药，这样可能会影响治疗效果～

**话术二（理解诉求）**：
> 您是想换药或者停药对吗？我理解您可能有[担心副作用/觉得麻烦/觉得没效果]的原因。这些情况您都可以告诉医生，让医生来帮您分析。有时候医生可以调整一下方案让您更舒服，总比自己决定要好～我可以帮您把想法转达给医生，您看可以吗？

**话术三（强调风险）**：
> 提醒您一下，除非医生明确说可以停药，否则不建议自行停药哦。突然停药可能会导致[病情反复/指标波动]等情况。如果觉得用药有困难，一定要先告诉医生，医生会帮您想办法的。

**⚠️ 关键注意事项**：
- ✅ 理解患者的诉求，不强制要求继续吃药
- ✅ 引导患者向医生表达换药/停药的想法
- ✅ 强调不能自行停药/换药的原因
- ❌ 不可同意患者自行停药/换药

---



## 第七章 服务包与陪诊推荐话术

> **服务包类型**：陪诊服务（2小时/4小时/8小时）、上门接送陪诊、急诊/夜间陪诊、妇科手术陪同、孕前/产检陪诊、特殊检查陪诊、院内代办、专业陪护（6小时/24小时）

### 7.1 陪诊服务介绍话术

#### 7.1.1 陪诊服务开场介绍

**话术一（需求挖掘）**：
> 您好～看到您最近有预约就医的安排，请问是自己去看诊还是有家人朋友陪同呢？如果是一个人去看诊或者需要有人帮忙协调的话，我们可以提供专业的陪诊服务哦～

**话术二（直接介绍）**：
> 您好，多扬健康提供专业的陪诊服务，如果您去医院看病需要有人陪同、帮忙协调，可以了解一下我们的服务：
> 
> **陪诊服务类型**：
> - ⏰ 标准陪诊：2小时/4小时/8小时三种时长可选
> - 🚗 上门接送陪诊：陪您去医院并送您回家
> - 🌙 急诊/夜间陪诊：晚上或节假日突发情况也能安排
> - 🤰 妇科/孕产陪诊：产检、手术陪同等
> - 🔍 特殊检查陪诊：如肠胃镜等需要有人陪同的检查
> 
> 请问您有什么具体的陪诊需求吗？我来帮您推荐合适的方案～

**话术三（针对老年患者）**：
> 您好呀～看到您预约了[XX医院]的门诊，您是自己去看诊吗？如果老人家腿脚不太方便，或者担心一个人搞不定的话，我们可以安排陪诊师全程陪同，帮您挂号、候诊、取药、拿报告，省心又安心～

**注意事项**：
- ✅ 先了解患者的实际需求和场景
- ✅ 介绍要清晰，列举常见场景
- ✅ 考虑特殊人群（老人、孕妇）的需求
- ✅ 不要强行推销，了解需求后推荐

---

#### 7.1.2 服务详情说明

**话术一（详细说明）**：
> 我们的陪诊服务包含以下内容：
> - 诊前提醒：提前一天电话/短信提醒您就诊时间和注意事项
> - 全程陪同：从您到医院开始，陪诊师全程陪同您就诊
> - 挂号候诊：帮您挂号、取号、排队候诊
> - 协助问诊：帮您记录医嘱，提醒您要问的问题
> - 预约检查：如有检查，帮您预约并陪同前往
> - 取药取报告：帮您取药、拿报告
> - 诊后关怀：给您详细的医嘱记录和生活建议
> 
> 费用方面：[说明具体套餐和价格]
> 超时会有超时费用
> 
> 请问您需要哪种时长和类型的服务呢？

**话术二（简洁说明）**：
> 陪诊服务就是陪您一起去看病，帮您省心省力～陪诊师会提前联系您，到医院后全程陪同，帮忙跑腿、记录医嘱、拿药取报告，您只需要坐着休息就好。
> 
> 目前可选的套餐：[列出套餐]
> 有任何疑问都可以问我～

**注意事项**：

- ✅ 服务内容要透明清晰
- ✅ 明确说明费用结构
- ✅ 提供多种套餐选择
- ✅ 超时费用要提前告知

---

### 7.4 院内代办推荐话术

> **院内代办服务**：代约检查、代取报告、代问诊、代配药、取送病理切片、出入院办理等

#### 7.4.1 代办服务咨询

**话术一（了解需求）**：
> 您好，我们的院内代办服务可以帮助您处理一些您紧急需要办理的事项，比如：
> - 📋 代约检查：帮您预约B超、CT、核磁等检查
> - 📄 代取报告：帮您取检查报告、病理报告
> - 💊 代配药：如果您不方便来医院，可以帮您代开药品并快递到家
> - 🏥 出入院办理：帮您办理住院手续、出院结算等
> 
> 请问您需要哪项服务呢？

**话术二（场景化介绍）**：
> 您说的这个情况，我们可以帮您代办～比如如果您不方便反复跑医院，我们可以帮您：
> - 拿了检查报告帮您取回来，不用您专门跑一趟
> - 帮您预约好检查时间，您按时间来就行
> - 帮您问诊取药，快递给您
> 
> 您具体是需要什么服务呢？

**注意事项**：
- ✅ 列举常见代办场景
- ✅ 说明每种服务的具体内容
- ✅ 询问具体需求，提供个性化方案

---

### 7.5 陪护服务推荐话术

> **陪护服务**：6小时/24小时专业陪护

#### 7.5.1 陪护服务咨询

**话术一（需求了解）**：
> 您好，看来您需要有人专业陪护～请问是：
> 1. 住院期间需要陪护？（日间/24小时）
> 2. 手术后需要专业护理？
> 3. 居家康养需要照护？
> 4. 其他情况？
> 
> 您能简单说说具体需求吗？我来帮您推荐合适的服务方案～

**话术二（服务介绍）**：
> 我们的专业陪护服务包括：
> - ⏰ 短期陪护：6小时/天，适合白天需要照护的情况
> - 🌙 全天陪护：24小时，提供全天候照护
> - 🏥 住院陪护：配合医院护理需求
> - 🏠 居家陪护：出院后在家中的康养照护
> 
> 陪护内容包括：生活照料、协助进食、翻身护理、陪同检查、记录病情、情绪疏导等。
> 
> 请问您需要哪种类型的服务呢？

**话术三（针对家属）**：
> 您好呀，家里人住院了对吗？如果您工作忙或者不方便全程陪护，我们可以提供专业的陪护人员～他们都有[资质证书]，可以照顾好您的家人，让您安心。
> 
> 您能说说是什么情况吗？我来帮您看看哪种陪护合适～

**注意事项**：
- ✅ 先了解陪护的具体场景（住院/居家/术后等）
- ✅ 介绍不同服务时长和内容
- ✅ 适当介绍陪护人员资质，让家属放心

---



## 第八章 特需服务推荐话术（视情况面对面或语音推荐，不可文字聊天）

> **绿通服务类型**：挂号、手术、住院、检查、转诊、会诊、床位

### 8.1 特需服务话术

#### 8.1.1 特需服务开场

**话术一（需求引导）**：
> 您好～看到您之前有问过关于[挂号/住院/手术]的问题，请问是遇到什么困难了吗？我们有一些特需服务能帮到您～

**话术二（直接介绍）**：
> 您好，如果您正在为[挂号难/住院等床位/手术安排]发愁，我们可以帮您快速解决这些问题！
>
> **我们的特需服务包括**：
>
> - 🎫 特需挂号：帮您快速挂到热门专家号
> - 🏥 特需住院：协助快速入院
> - 🔪 特需手术：协调手术安排
> - 🛏️ 特需床位：快速安排住院床位
> - 🔍 特需检查：加速检查排队
> - 👨‍⚕️ 特需会诊：安排多学科会诊
> - 📋 特需转诊：协助转院流程
>
> 请问您目前需要哪方面的帮助呢？

**话术三（场景化介绍）**：
> 您的情况我了解了～如果您想[缩短等待时间/找特定专家/尽快安排手术]，我们有特需服务可以帮您加速进程。
> 
> 简单说一下流程：您告诉我您的需求和情况，我们帮您对接医疗资源，一旦资源确认后就会快速推进。我们会全程协助您～

**注意事项**：
- ✅ 先了解患者的具体困难
- ✅ 介绍与需求匹配的服务类型
- ✅ 说明特需服务的核心价值（加速）

---

#### 8.1.2 特需服务费用说明

**话术一（费用说明）**：

> 关于费用方面，特需服务的收费根据您选择的服务类型和紧急程度不同而有差异：
> - 具体费用需要根据您的病情和需求评估
> - 服务启动前会明确告知所有费用
> - 资源对接前可全额退款
> 
> 您能说说具体需要什么帮助吗？我来帮您评估一下～

**⚠️ 关键注意事项**：
- ✅ 说明服务流程，让患者了解过程
- ✅ 明确退款规则
- ✅ 费用要个性化评估，不一概而论
- ❌ 不可承诺具体时间（手术日期等）

---



## 第九章 禁止话术红线清单

> **⚠️ 严重警告**：以下话术类型严格禁止，一经发现将按平台规定处理，情节严重者依法追究法律责任。

### 9.1 诊断类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 作出诊断结论 | "根据你说的症状，你就是XX病" | "这个情况需要医生来诊断" |
| 猜测疾病名称 | "我觉得可能是XX" | "医生会根据你的情况判断" |
| 确认疾病 | "没错，你就是XX" | "医生会更准确地告诉你" |
| 使用"诊断"一词 | "我来给你诊断一下" | "我来帮你整理情况" |

### 9.2 处方类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 推荐药品 | "你可以吃XX药" | "这个需要医生来开药" |
| 建议用药 | "建议你用XX药试试" | "医生会根据情况开药" |
| 修改处方 | "你把剂量改一下" | "这个需要医生来调整" |
| 确认购药 | "XX药效果不错" | "医生开的药你可以去购买" |

### 9.3 承诺类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 承诺治愈 | "这个病保证能治好" | "医生会尽力帮助你" |
| 承诺效果 | "吃了肯定有效" | "按医嘱用药会对你有帮助" |
| 承诺时间 | "明天就能安排" | "我们会尽快帮您协调" |
| 承诺退款 | "这个可以退款" | "我帮您了解一下退款规则" |

### 9.4 判断类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 报告解读 | "你的指标高一点没关系" | "这个需要医生来解读" |
| 病情判断 | "这个问题不大" | "医生会告诉你具体情况" |
| 预后判断 | "你这个问题不严重" | "医生会根据情况评估" |
| 安全判断 | "你可以放心" | "医生会告诉你需要注意什么" |

### 9.5 隐私类禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 透露医生信息 | "医生手机号是XXX" | "医生个人隐私不便透露，但您可以在我们平台找到他" |
| 透露其他患者信息 | "XX也在我们这看病" | "患者隐私我们不能透露" |
| 讨论平台内部问题 | "我们平台最近人手不够" | "我们会尽快为您服务" |
| 透露他人病历 | "XX和你情况一样" | "我们不能透露其他患者信息" |

### 9.6 其他禁止话术

| 禁止类型 | 禁止示例 | 正确做法 |
|----------|----------|----------|
| 推诿患者 | "这个不归我管" | "我来帮您看看可以怎么处理" |
| 消极态度 | "没办法" | "我来看看有没有其他办法" |
| 争辩争吵 | "你这样说不对" | "我理解您的心情，我们慢慢说" |
| 过度承诺 | "我保证..." | "我会尽力帮您..." |
| 代替患者决定 | "你就这么办吧" | "这个您自己来决定" |
| 代替医生行事 | "医生说了也是这个意思" | "具体还是以医生说的为准" |

---

## 第十章 附录：医助服务快速参考卡

### 附录A：服务类型快速查询

| 服务类型 | 计费方式 | 响应时效 | 医助介入时机 |
|----------|----------|----------|--------------|
| 在线即时聊天 | 按次分钟（15分钟起） | 实时 | 5分钟无回复 |
| 图文问诊 | 按次 | 48小时 | 30分钟无回复 |
| 电话问诊 | 按分钟 | 实时 | 全程不可介入 |
| 视频问诊 | 按分钟 | 实时 | 全程不可介入 |

### 附录B：退款规则速查

| 场景 | 退款比例 | 备注 |
|------|----------|------|
| 即时在线咨询未响应 | 全额退款 | 医生在服务时间段内未响应 |
| 即时在线咨询，距离服务开始2小时及以上取消 | 全额退款 | 距离服务开始2小时及以上 |
| 即时在线咨询，距离服务开始2小时内取消 | 不退款 | 距离服务开始2小时内，医生已准备 |
| 图文咨询24小时未响应 | 全额退款 | 医生未响应 |
| 电话/视频通话前取消 | 全额退款 | 未开始通话 |
| 电话/视频≤1分钟（质量问题） | 全额退款 | 通话质量差/信号中断 |
| 电话/视频>1分钟 | 不退款 | 已开始服务 |
| 陪诊24小时以上取消 | 全额退款 | 服务前24小时以上 |
| 陪诊2-24小时取消 | 80%退款 | 服务前2-24小时 |
| 陪诊2小时内取消 | 50%退款 | 服务前2小时内 |
| 陪诊已开始 | 不退款 | 陪诊师已到达 |
| 陪诊师迟到≥30分钟 | 协商退款 | 按协商结果 |
| 陪诊师爽约 | 全额退款+优惠券 | 赔偿补偿 |
| 特需资源未确认 | 全额退款 | 对接启动前 |
| 特需资源已确认 | 不退款 | 已协调推进 |
| 平台原因未完成对接 | 全额退款 | 平台责任 |

### 附录C：时段定价速查（V1.0版本暂不执行）

| 时段 | 时间范围 | 定价倍数 |
|------|----------|----------|
| 标准时段 | 工作日 8:00-18:00 | 1.0x |
| 晚间加急 | 工作日 18:00-22:00 | 1.2x |
| 应急服务 | 节假日/深夜 22:00-次日8:00 | 1.5x |

### 附录D：服务项目售价速查

- **陪诊服务**

| 服务名称                   | 说明                                    | 美团售价  | 官网售价  | 小程序打包折扣价 |
| -------------------------- | --------------------------------------- | --------- | --------- | ---------------- |
| 【专业陪诊】2小时          | 挂号/排队预约/陪同检查/采样送检         | 150元     | 198元     | 158元            |
| 【专业陪诊】4小时          | 挂号/排队预约/陪同检查/采样送检         | 298元     | 398元     | 318元            |
| 【专业陪诊】8小时          | 挂号/排队预约/陪同检查/采样送检         | 598元     | 828元     | 662元            |
| 【上门接送陪诊】4小时      | 全流程陪诊/复诊/客户接送（车费自理）    | 368元     | 498元     | 398元            |
| 【上门接送陪诊】8小时      | 全流程陪诊/复诊/客户接送（车费自理）    | 658元     | 918元     | 734元            |
| 【急诊陪诊/夜间陪诊】4小时 | 急诊陪诊（18:00-次日06:00，任意四小时） | 498元     | 698元     | 558元            |
| 【妇科门诊手术陪同】4小时  | 妇科门诊手术全程陪同                    | 398元     | 558元     | 446元            |
| 【孕前陪诊/产检陪诊】4小时 | 孕前检查/产检全程陪同                   | 328元     | 458元     | 366元            |
| 【肠胃镜/核磁/CT检查陪诊】 | 特殊检查陪诊                            | 298元     | 398元     | 318元            |
| 【超时陪诊费用】           | 每一小时超时费用                        | 80元/小时 | 98元/小时 | 78元             |

- **院内代办服务**

| 服务名称                   | 说明                                                         | 美团售价 | 官网售价 | 小程序打包折扣价 |
| -------------------------- | ------------------------------------------------------------ | -------- | -------- | ---------------- |
| 【代约检查】               | 代约MRI/CT/超声/肠胃镜等，前往医院与门诊医生沟通开具检查单并预约时间 | 198元    | 268元    | 214元            |
| 【代取报告】               | 代取报告、取送结果                                           | 138元    | 188元    | 150元            |
| 【代问诊】                 | 1对1问诊，代取号、代排队、代问诊、检查开药、打印报告         | 488元    | 678元    | 542元            |
| 【代配药】                 | 依照病历前往医院开药并快递给用户                             | 198元    | 268元    | 214元            |
| 【取送邮寄病理切片】       | 代取切片、快递邮寄（本地/异地）                              | 228元    | 318元    | 254元            |
| 【出入院办理】             | 帮助办理入院及出院                                           | 258元    | 358元    | 286元            |
| 【出入院办理（上门接送）】 | 上门接送+出入院办理                                          | 328元    | 458元    | 366元            |

- **专业陪护服务**

| 服务名称       | 说明     | 美团售价 | 官网售价 | 小程序打包折扣价 |
| -------------- | -------- | -------- | -------- | ---------------- |
| 【6小时陪护】  | 半日陪护 | 388元    | 538元    | 430元            |
| 【24小时陪护】 | 全天陪护 | 528元    | 738元    | 590元            |



### 附录E：医生分成比例

- **在线咨询（V1.0版本都按65%计算）**

| 医生职级      | 医生分成 | 说明                                                       |
| ------------- | -------- | ---------------------------------------------------------- |
| 主任医师/专家 | 70%      | 含主任医师、知名专家。高职级医生品牌溢价高，是平台核心供给 |
| 副主任医师    | 65%     | 副主任医师。高职级医生品牌溢价高，是平台核心供给           |
| 主治医师      | 60%–70%  | 中级职称，可根据服务质量、接诊量等指标浮动                 |
| 住院医师      | 50%–60%  | 初级职称，分成比例较低但可通过高接诊量获得收入             |

> **浮动机制**：主治医师和住院医师的分成比例可根据以下指标动态调整——
>
> - 患者满意度评分 ≥4.8：分成+5%
> - 月接诊量超过X单（需根据实际情况调整）：分成+3%
> - 连续3个月零投诉：分成+2%
> - 多项叠加后不超过职级上限
> - 如果医生未使用医助，则多分配5%

- ### 服务包分成比例

| 角色           | 分成比例 | 说明                                                         |
| -------------- | -------- | ------------------------------------------------------------ |
| 医生或渠道提成 | 15%      | 挂在医生个人界面的服务包，由医生获取提成。其他来源由其渠道获取提成 |

- **绿通分成比例**

| 角色     | 分成比例 | 说明                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| 对接医生 | 60%      | 绿通中贡献资源的医生（如安排手术、协调床位、提供号源），按实际参与分配 |



### 附录F：医生劳务个人所得税

根据现行税法，医生在线问诊收入属于**劳务报酬所得**，由平台代扣代缴：

| 年累计劳务报酬  | 预扣预缴税率 | 速算扣除数 | 实际税负（近似） |
| --------------- | ------------ | ---------- | ---------------- |
| 不超过20,000元  | 20%          | 0          | 约16%*           |
| 20,000-50,000元 | 30%          | 2,000      | 约16%-24%        |
| 超过50,000元    | 40%          | 7,000      | 约24%-32%        |

> *劳务报酬所得有20%的法定减除费用（即收入额 = 收入 × 80%），因此20%税率档的实际税负约为：20% × 80% = 16%。
>
> **注意**：以上为预扣预缴税率，年度终了后需并入个人综合所得汇算清缴，实际税负可能不同。本方案按预扣预缴标准计算



### 附录G：紧急情况应对

| 场景 | 应对动作 |
|------|----------|
| 患者有轻生/自伤倾向 | 立即表达关心 → 确认位置 → 提供心理热线 → 持续陪伴 → 立即上报 |
| 患者出现急性危险症状 | 立即指导拨打120 → 确认位置 → 保持通话 → 通知平台 |
| 投诉升级 | 认真倾听 → 记录详情 → 安抚情绪 → 承诺跟进 → 升级处理 |

### 附录H：话术使用优先级

1. **遇到诊断/开方要求** → 立即转接医生，说明角色边界
2. **遇到紧急情况** → 立即采取行动（拨打120/上报），不要等待
3. **遇到无法回答的问题** → 转交专业人士，不可猜测
4. **遇到边界模糊** → "转医生优先、保护患者、留存记录"
5. **遇到情绪问题** → 先处理情绪，再处理事情

### 附录I：关键红线提醒

> ⚠️ **绝对禁止**：
> 1. ❌ 独立诊断或作出医学结论
> 2. ❌ 未经授权开具/修改处方
> 3. ❌ 透露医生或患者个人信息
> 4. ❌ 承诺具体治愈效果或时间
> 5. ❌ 忽视紧急情况或延误处理
> 6. ❌ 违反法律法规或平台规范

> ✅ **必须遵守**：
> 1. ✅ 所有诊断/处方必须由医生完成
> 2. ✅ 紧急情况立即行动，不等待
> 3. ✅ 所有服务行为在授权范围内
> 4. ✅ 保护患者隐私和个人信息
> 5. ✅ 退款规则准确对应，不出错
> 6. ✅ 遇到边界立即转接医生

### 
`};function O3(i,l,u){const o=u.split(`
`),c=[];let d="前言/概述",h="基础信息",m="",g=[],p=0;const v=()=>{if(g.length>0){const x=g.join(`
`).trim();if(x){let S="普通";x.includes("❌")||x.includes("禁止")||x.includes("红线")?S="红线":x.includes("话术")||x.includes("您好")||x.match(/"[^"]+"/)?S="话术":(x.includes("✅")||x.includes("注意事项"))&&(S="注意事项"),c.push({id:`${i}-${p++}`,docId:i,docTitle:l,chapter:d,section:h,title:m||h,text:x,category:S})}g=[]}};for(let x=0;x<o.length;x++){const S=o[x].trim();if(!S){g.length>0&&g.push("");continue}S.startsWith("## ")?(v(),d=S.slice(3).trim(),h="概述",m=""):S.startsWith("### ")?(v(),h=S.slice(4).trim(),m=""):S.startsWith("#### ")?(v(),m=S.slice(5).trim()):((S.startsWith("**话术")||S.startsWith("**场景")||S.startsWith("**附录")||S.startsWith("**【")||S.startsWith("|"))&&v(),g.push(S))}return v(),c}function V3(i,l){if(!l.trim())return[];const u=l.trim().toLowerCase(),o=[];for(const c of i){const d=c.text.toLowerCase(),h=c.title.toLowerCase(),m=c.section.toLowerCase(),g=c.chapter.toLowerCase(),p=d.indexOf(u),v=h.indexOf(u),x=m.indexOf(u),S=g.indexOf(u);if(p!==-1||v!==-1||x!==-1||S!==-1){const T=[];let M=d.indexOf(u);for(;M!==-1;)T.push([M,M+u.length]),M=d.indexOf(u,M+u.length);let V="内容匹配";v!==-1?V="标题匹配":x!==-1?V="章节匹配":S!==-1&&(V="大纲匹配"),o.push({...c,matchType:V,highlightRanges:T})}}return o}function w0({content:i,highlightWord:l}){if(!i)return null;const u=(v,x)=>{if(!x||!x.trim())return v;const S=x.trim(),T=v.split(new RegExp(`(${o(S)})`,"gi"));return C.jsx(C.Fragment,{children:T.map((M,V)=>M.toLowerCase()===S.toLowerCase()?C.jsx("span",{className:"text-highlight font-medium",children:M},V):M)})};function o(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const c=i.split(`
`),d=[];let h=!1,m=[],g=[];const p=v=>{if(h){const x=S=>{const T=S.split("**");return T.length>=3?C.jsx(C.Fragment,{children:T.map((M,V)=>V%2===1?C.jsx("strong",{className:"font-semibold text-slate-900",children:u(M,l)},V):C.jsx("span",{children:u(M,l)},V))}):u(S,l)};d.push(C.jsx("div",{className:"overflow-x-auto my-4 border border-slate-200 rounded-lg shadow-xs",children:C.jsxs("table",{className:"table-markdown min-w-full m-0",children:[C.jsx("thead",{children:C.jsx("tr",{children:m.map((S,T)=>C.jsx("th",{className:"px-4 py-3 bg-slate-50 text-left font-semibold text-slate-700 border-b border-slate-200",children:x(S)},`th-${T}`))})}),C.jsx("tbody",{className:"divide-y divide-slate-200 bg-white",children:g.map((S,T)=>C.jsx("tr",{className:"hover:bg-slate-50/50 transition-colors",children:S.map((M,V)=>C.jsx("td",{className:"px-4 py-3 text-slate-600",children:x(M)},`td-${V}`))},`tr-${T}`))})]})},`table-${v}`)),h=!1,m=[],g=[]}};for(let v=0;v<c.length;v++){const S=c[v].trim();if(S.startsWith("|")){h=!0;const T=S.split("|").map(M=>M.trim()).filter((M,V,U)=>V>0&&V<U.length-1);if(T.every(M=>M.startsWith("-")||M===""))continue;m.length===0?m=T:g.push(T);continue}else p(v);if(S.startsWith("# ")){const T=S.substring(2).trim();d.push(C.jsx("h1",{id:T,className:"text-3xl md:text-4xl font-bold text-slate-950 mt-8 mb-6 scroll-mt-20",children:u(T,l)},v))}else if(S.startsWith("## ")){const T=S.substring(3).trim();d.push(C.jsxs("h2",{id:T,className:"text-xl md:text-2xl font-bold text-slate-950 mt-8 mb-4 pb-2 border-b border-slate-200 scroll-mt-20 group flex items-center justify-between",children:[C.jsx("span",{children:u(T,l)}),C.jsx("span",{className:"text-xs font-normal text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity",children:"# 章"})]},v))}else if(S.startsWith("### ")){const T=S.substring(4).trim();d.push(C.jsxs("h3",{id:T,className:"text-lg md:text-xl font-semibold text-slate-900 mt-6 mb-3 scroll-mt-20 group flex items-center justify-between",children:[C.jsx("span",{children:u(T,l)}),C.jsx("span",{className:"text-xs font-normal text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity",children:"# 节"})]},v))}else if(S.startsWith("#### ")){const T=S.substring(5).trim();d.push(C.jsx("h4",{id:T,className:"text-base md:text-lg font-bold text-slate-800 mt-5 mb-2 scroll-mt-20",children:u(T,l)},v))}else if(S.startsWith("> ")||S===">"){const T=[];let M=v;for(;M<c.length;){const B=c[M].trim();if(B.startsWith("> "))T.push(B.substring(2).trim()),M++;else if(B===">")M++;else break}v=M-1;const V=T.join(`
`).trim();if(!V)continue;const U=V.includes("红线")&&(V.includes("禁止")||V.includes("严禁")||V.includes("不得")||V.includes("绝对不能")||V.includes("以下行为")),X=V.includes("**背景**")||V.includes("**本章定位**")||V.includes("**服务包类型**")||V.includes("**适用范围**")||V.includes("> **核心定位**");let Q,Y=null;U?(Q="bg-rose-50 border-rose-500 text-rose-950 shadow-xs",Y=C.jsx("div",{className:"font-semibold text-sm mb-2 uppercase tracking-wide",children:"⚠️ 重要风控红线与原则"})):X?(Q="bg-teal-50 border-teal-500 text-teal-950 shadow-xs",Y=null):(Q="bg-indigo-50 border-indigo-600 text-indigo-950 shadow-xs",Y=null);const K=V.replace(/\*\*([^*]+)\*\*/g,"$1");d.push(C.jsxs("div",{className:`my-3 p-4 rounded-r-lg border-l-4 ${Q}`,children:[Y,C.jsx("div",{className:"text-sm md:text-base leading-relaxed whitespace-pre-line",children:u(K,l)})]},v))}else if(S==="---"||S==="***"||S==="___")d.push(C.jsx("hr",{className:"my-6 border-t-2 border-slate-300"},v));else if(S.startsWith("- ")||S.startsWith("* ")){const T=S.substring(2).trim(),M=T.split("**");let V;M.length>=3?V=C.jsxs("span",{children:[C.jsx("strong",{className:"text-slate-900 font-bold",children:u(M[1],l)}),u(M.slice(2).join(""),l)]}):V=C.jsx("span",{children:u(T,l)}),d.push(C.jsx("li",{className:"list-disc ml-5 mb-1.5 text-slate-600 leading-relaxed text-sm md:text-base",children:V},v))}else{if(!S||S===">"||S.trim()===">"||/^#{1,6}\s*$/.test(S))continue;const T=S.split("**");T.length>=3?d.push(C.jsx("p",{className:"mb-1.5 text-slate-600 text-sm md:text-base leading-relaxed",children:T.map((M,V)=>{if(V%2===1){const U=M.includes("话术")||M.includes("标准")||M.includes("提醒");return C.jsx("strong",{className:`font-semibold ${U?"text-indigo-600 bg-indigo-50 px-1 border border-indigo-100 rounded":"text-slate-900"}`,children:u(M,l)},V)}return C.jsx("span",{children:u(M,l)},V)})},v)):d.push(C.jsx("p",{className:"mb-1.5 text-slate-600 text-sm md:text-base leading-relaxed",children:u(S,l)},v))}}return p(c.length),C.jsx("div",{className:"space-y-2 select-text",children:d})}function N3(){const i="2026-05-21-v2",[l,u]=Z.useState(()=>{localStorage.getItem("duoyang_doc_version")!==i&&(console.log("🔄 检测到新版本，清除旧缓存..."),localStorage.removeItem("duoyang_doc_assistant"),localStorage.removeItem("duoyang_doc_customer"),localStorage.setItem("duoyang_doc_version",i));const $=localStorage.getItem("duoyang_doc_assistant"),q=localStorage.getItem("duoyang_doc_customer");return[$?JSON.parse($):{...R3},q?JSON.parse(q):{...z3}]}),[o,c]=Z.useState("medical_assistant"),[d,h]=Z.useState(""),[m,g]=Z.useState(!1);Z.useEffect(()=>{const B=()=>{window.scrollY>300?g(!0):g(!1)};return window.addEventListener("scroll",B),()=>window.removeEventListener("scroll",B)},[]);const p=()=>{window.scrollTo({top:0,behavior:"smooth"})},[v,x]=Z.useState(null),[S,T]=Z.useState(!1),M=Z.useMemo(()=>l.find(B=>B.id===o)||l[0],[l,o]),V=(B,$)=>{x({message:B,type:$}),setTimeout(()=>{x(null)},3500)};Z.useMemo(()=>{const B=M.content,$=B.split(`
`),q=$.filter(ct=>ct.startsWith("## ")).length,G=$.filter(ct=>ct.startsWith("### ")).length,it=(B.match(/❌/g)||[]).length+(B.match(/禁止/g)||[]).length,et=(B.match(/元/g)||[]).length;return{chapters:q,sections:G,redLines:it,prices:et}},[M]);const U=Z.useMemo(()=>O3(M.id,M.title,M.content),[M]),X=Z.useMemo(()=>V3(U,d),[U,d]),Q=Z.useMemo(()=>{const B=[],$=M.content.split(`
`);for(const q of $)if(q.startsWith("## ")){const G=q.substring(3).trim();G&&B.push({text:G,level:2})}else if(q.startsWith("### ")){const G=q.substring(4).trim();G&&B.push({text:G,level:3})}else if(q.startsWith("#### ")){const G=q.substring(5).trim();G&&B.push({text:G,level:4})}return B},[M.content]);Z.useEffect(()=>{const B=G=>(G.preventDefault(),G.stopPropagation(),!1),$=G=>{var it;return G.preventDefault(),(it=window.getSelection())==null||it.removeAllRanges(),!1},q=document.getElementById("document-viewport");return q&&(q.addEventListener("copy",B),q.addEventListener("cut",B),q.addEventListener("selectstart",$),q.addEventListener("mousedown",$),q.addEventListener("dragstart",B),q.addEventListener("contextmenu",G=>G.preventDefault()),q.addEventListener("keydown",G=>{(G.ctrlKey||G.metaKey)&&(G.key==="c"||G.key==="a"||G.key==="x")&&G.preventDefault()})),()=>{q&&(q.removeEventListener("copy",B),q.removeEventListener("cut",B),q.removeEventListener("selectstart",$),q.removeEventListener("mousedown",$),q.removeEventListener("dragstart",B),q.removeEventListener("contextmenu",G=>G.preventDefault()))}},[]);const Y=B=>{if(!B)return;const $=document.getElementById(B);$?$.scrollIntoView({behavior:"smooth",block:"start"}):console.warn(`未找到标题元素: ${B}`)},K=B=>{navigator.clipboard.writeText(B),V("话术内容已成功复制到剪贴板！","success")};return C.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col antialiased",children:[C.jsx($r,{children:v&&C.jsxs(ic.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},exit:{opacity:0,y:-50},className:"fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 border text-sm max-w-md",style:{backgroundColor:v.type==="success"?"#ecfdf5":v.type==="error"?"#fef2f2":"#eff6ff",borderColor:v.type==="success"?"#10b981":v.type==="error"?"#f87171":"#60a5fa",color:v.type==="success"?"#065f46":v.type==="error"?"#991b1b":"#1e40af"},children:[v.type==="success"?C.jsx(p2,{className:"w-5 h-5 shrink-0 text-emerald-600"}):v.type==="error"?C.jsx(vp,{className:"w-5 h-5 shrink-0 text-rose-600"}):C.jsx(o2,{className:"w-5 h-5 shrink-0 text-indigo-600"}),C.jsx("span",{className:"font-medium",children:v.message})]})}),C.jsx("header",{id:"main-client-container",className:"bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs",children:C.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:C.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4",children:[C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsx("div",{className:"flex items-center gap-2 shrink-0",children:C.jsx("img",{src:"./images/LOGO.png",alt:"多扬健康",className:"object-contain",style:{width:"120px",height:"50px"}})}),C.jsx("div",{className:"flex flex-col",children:C.jsx("div",{className:"flex items-center gap-2",children:C.jsx("span",{className:"text-xl font-bold text-slate-700 border-l-2 border-indigo-300 pl-4 ml-2 select-none leading-[50px]",children:"标准服务话术库"})})})]}),C.jsx("div",{className:"flex flex-wrap items-center gap-3",children:C.jsxs("div",{className:"bg-slate-100 p-1 rounded-xl flex items-center gap-1",children:[C.jsxs("button",{id:"tab-btn-assistant",onClick:()=>{c("medical_assistant")},className:`px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${o==="medical_assistant"?"bg-white text-indigo-700 shadow-sm scale-[1.02]":"text-slate-600 hover:bg-white/60 hover:scale-[1.02] active:scale-95"}`,children:[C.jsx(h2,{className:"w-4 h-4"}),"医助服务话术库"]}),C.jsxs("button",{id:"tab-btn-cs",onClick:()=>{c("customer_service")},className:`px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${o==="customer_service"?"bg-white text-indigo-700 shadow-sm scale-[1.02]":"text-slate-600 hover:bg-white/60 hover:scale-[1.02] active:scale-95"}`,children:[C.jsx(A2,{className:"w-4 h-4"}),"客服服务话术库"]})]})})]})})}),C.jsxs("main",{id:"main-client-container",className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6",children:[C.jsxs("div",{className:"bg-indigo-900 text-white rounded-3xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden shadow-lg shadow-indigo-100",children:[C.jsx("div",{className:"absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none",children:C.jsx(M2,{className:"w-96 h-96"})}),C.jsxs("div",{className:"relative z-10",children:[C.jsx("h2",{className:"text-xl md:text-2xl font-bold tracking-tight",children:"输入关键词进行标准化话术检索"}),C.jsxs("p",{className:"text-xs md:text-sm text-indigo-200 mt-1 leading-relaxed",children:["实时索引支撑：输入如 ",C.jsx("span",{className:"font-bold underline text-white",children:'"红线"'}),"、",C.jsx("span",{className:"font-bold underline text-white",children:'"超时"'}),"、",C.jsx("span",{className:"font-bold underline text-white",children:'"退款政策"'}),"、",C.jsx("span",{className:"font-bold underline text-white",children:'"老年人"'})," 或服务价格如 ",C.jsx("span",{className:"font-bold underline text-white",children:'"陪诊"'})," 后，系统将提供全库跨章句穿透级检索高亮。"]})]}),C.jsxs("div",{className:"relative z-10 w-full",children:[C.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",children:C.jsx(C2,{className:"w-5 h-5"})}),C.jsx("input",{type:"text",placeholder:"请输入任何您需要查询的内容或话术短语...",value:d,onChange:B=>h(B.target.value),className:"w-full pl-12 pr-12 py-3.5 bg-white text-slate-900 text-sm md:text-base border-0 outline-none rounded-2xl font-medium placeholder-slate-400 font-sans shadow-md focus:ring-4 focus:ring-indigo-500/30 transition-all transition-all"}),d&&C.jsx("button",{onClick:()=>h(""),className:"absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer",children:C.jsx(O2,{className:"w-5 h-5"})})]})]}),C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",children:[C.jsx("section",{className:"lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24 max-h-[calc(100vh-140px)] overflow-y-auto pr-1",children:d?C.jsxs("div",{className:"flex flex-col gap-4",children:[C.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-slate-500 uppercase px-1",children:[C.jsx("span",{children:"全文搜索匹配结果"}),C.jsxs("span",{className:"text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100",children:["共找到 ",X.length," 个重点片段"]})]}),C.jsx("div",{className:"flex flex-col gap-3",children:X.length===0?C.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-400",children:[C.jsx(g2,{className:"w-12 h-12 text-slate-300 mx-auto mb-2"}),C.jsxs("p",{className:"text-sm font-semibold",children:['未找到与 "',d,'" 相关的条目']}),C.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"请尝试更换检索关键词进行查询，或者去右侧手动按大纲查阅原件。"})]}):X.map((B,$)=>C.jsxs("div",{className:"bg-white rounded-2xl border border-indigo-200 shadow-xs ring-2 ring-indigo-500/5 transition-all p-4",children:[C.jsx("div",{className:"flex items-center justify-end mb-2",children:C.jsx("span",{className:"text-[10px] text-indigo-500 font-bold bg-indigo-50/50 px-1.5 py-0.5 rounded",children:B.matchType})}),C.jsxs("div",{className:"text-[11px] text-slate-400 font-semibold mb-1 truncate",children:[B.chapter," > ",B.section]}),C.jsx("h4",{className:"font-bold text-slate-800 text-sm mb-2 truncate",children:B.title}),C.jsx("p",{className:"text-xs text-slate-500 leading-relaxed line-clamp-3 bg-slate-50/70 p-2 border border-slate-100 rounded-lg mb-3 font-mono",children:B.text}),C.jsxs("div",{className:"flex items-center justify-between pt-1",children:[C.jsxs("button",{onClick:()=>K(B.text),className:"text-slate-500 hover:text-slate-800 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-all hover:underline",children:[C.jsx(x2,{className:"w-3 h-3"}),"一键复制该话术"]}),C.jsxs("button",{onClick:()=>{const q=B.title||B.section||B.chapter;setTimeout(()=>{Y(q)},100)},className:"text-indigo-600 hover:text-indigo-800 text-[11px] font-extrabold flex items-center gap-0.5 cursor-pointer transition-all hover:underline",children:["跳转对应章节",C.jsx(gp,{className:"w-3 h-3"})]})]})]},B.id))})]}):C.jsxs("div",{className:"flex flex-col gap-4",children:[C.jsxs("div",{className:"text-xs font-bold text-slate-500 uppercase px-1",children:["当前文档目录大纲 ── ",M.title.replace("多扬健康平台·","")]}),C.jsx("div",{className:"bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 shadow-2xs",children:Q.map((B,$)=>{const q=B.level===2,G=B.level===3;return B.level,C.jsxs("button",{onClick:()=>Y(B.text),className:`w-full text-left px-4 py-2.5 transition-colors flex items-start gap-2 hover:bg-slate-50 cursor-pointer ${q?"font-bold text-slate-900 bg-slate-50/40 text-sm":G?"font-medium text-slate-600 text-xs pl-8":"font-normal text-slate-500 text-[11px] pl-14"}`,children:[C.jsx(gp,{className:`w-3.5 h-3.5 shrink-0 mt-0.5 ${q?"text-indigo-600":G?"text-indigo-400":"text-slate-300"}`}),C.jsx("span",{className:"truncate",children:B.text})]},$)})}),C.jsxs("div",{className:"bg-indigo-50 border border-indigo-100 p-4 rounded-2xl",children:[C.jsxs("div",{className:"flex items-center gap-2 text-indigo-950 font-bold text-xs",children:[C.jsx(vp,{className:"w-4 h-4 text-indigo-700 shrink-0"}),C.jsx("span",{children:"标准化话术库使用红线常识"})]}),C.jsxs("p",{className:"text-[11px] text-indigo-700 leading-relaxed mt-1.5",children:["根据第九章合规要求，平台客服与医助在任何场景下均",C.jsx("strong",{children:"绝对禁止"}),"作出诊断、不推荐临床药品、不允诺具体治愈时间，且严禁替换专业医生行使处方与解释责任。"]})]})]})}),C.jsxs("section",{className:"lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6 relative select-none",onContextMenu:B=>B.preventDefault(),children:[C.jsx("div",{id:"document-viewport",className:"prose max-w-none text-slate-700 leading-relaxed font-sans select-none",onCopy:B=>B.preventDefault(),children:C.jsx(w0,{content:M.content,highlightWord:d})}),C.jsx("div",{className:"border-t border-slate-100 pt-6 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-50/50 p-4 rounded-2xl",children:C.jsxs("div",{className:"text-xs text-slate-400 font-medium",children:[C.jsx("span",{children:"当前显示的协议正文由 "}),C.jsx("strong",{className:"text-slate-500 font-semibold",children:"多扬健康标准化合规专家组"}),C.jsx("span",{children:" 审核发布并盖章。"})]})})]})]}),C.jsx($r,{children:m&&C.jsx(ic.button,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},onClick:p,className:"fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 cursor-pointer group","aria-label":"回到顶部",children:C.jsx(c2,{className:"w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"})})})]}),C.jsxs("section",{id:"printable-area",className:"hidden select-text text-black bg-white",style:{fontFamily:"Georgia, serif"},children:[C.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[C.jsx("h1",{style:{fontSize:"26pt",fontWeight:"bold",margin:"0"},children:M.title}),C.jsxs("p",{style:{fontSize:"12pt",color:"#555",marginTop:"0.5rem"},children:[M.subtitle," · 官方发布标准版 (V1.2)"]}),C.jsx("div",{style:{borderTop:"2px solid black",width:"150px",margin:"1.5rem auto"}}),C.jsx("p",{style:{fontSize:"10pt",fontStyle:"italic"},children:"多扬健康平台 · 签约医助与客服人员统一必修指南"}),C.jsxs("p",{style:{fontSize:"10pt"},children:["最新更新及发布签署日期： ",M.lastUpdated]})]}),C.jsx("div",{style:{fontSize:"11pt",lineHeight:"1.6"},children:C.jsx(w0,{content:M.content})}),C.jsxs("div",{style:{marginTop:"5rem",borderTop:"2px solid black",paddingTop:"1.5rem",fontSize:"10pt",display:"flex",justifyContent:"space-between"},children:[C.jsx("div",{children:"多扬健康医学事务与法律合规评审部 · 签发"}),C.jsx("div",{children:"合规监督电话：400-840-0789"})]})]}),C.jsx($r,{children:S&&C.jsx("div",{className:"fixed inset-0 bg-slate-950/70 z-50 flex items-center justify-center p-4",children:C.jsxs(ic.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.95,opacity:0},className:"bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full flex flex-col gap-6 shadow-2xl relative",children:[C.jsxs("div",{className:"text-center flex flex-col items-center gap-3",children:[C.jsx("div",{className:"w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center text-indigo-600",children:C.jsx(b2,{className:"w-7 h-7 shrink-0 animate-bounce"})}),C.jsx("h3",{className:"text-lg md:text-xl font-bold text-slate-900",children:"PDF 格式转换及保存引导"}),C.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:"为了向您提供不失真的矢量高清排版文档，系统已成功调起内置打印渲染。请参考下方保存指南："})]}),C.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 text-xs md:text-sm text-slate-600",children:[C.jsxs("div",{className:"flex items-start gap-2.5",children:[C.jsx("div",{className:"w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5",children:"1"}),C.jsxs("p",{children:["在即将自动弹出的浏览器系统窗格中，请找到 ",C.jsx("strong",{children:"「打印机/目标选项」 (Destination)"}),"。"]})]}),C.jsxs("div",{className:"flex items-start gap-2.5",children:[C.jsx("div",{className:"w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5",children:"2"}),C.jsxs("p",{children:["点击下拉选项卡，选中 ",C.jsx("strong",{children:"「另存为 PDF」 (Save as PDF)"}),"。"]})]}),C.jsxs("div",{className:"flex items-start gap-2.5",children:[C.jsx("div",{className:"w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5",children:"3"}),C.jsxs("p",{children:["在保存的高级设置中，建议勾选 ",C.jsx("strong",{children:"「背景图形」 (Background Graphics)"})," 以完美还原警告标志、价格单元格与红线提示的高亮底色。"]})]})]}),C.jsxs("div",{className:"flex items-center justify-between pt-2",children:[C.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:"多扬健康技术保障中心"}),C.jsx("button",{id:"modal-pdf-close",onClick:()=>T(!1),className:"bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer",children:"我知道了"})]})]})})}),C.jsxs("footer",{id:"main-client-container",className:"py-6 border-t border-slate-100 bg-white text-center text-xs text-slate-400 font-sans",children:[C.jsx("p",{children:"© 2026 多扬健康标准化信息治理平台. 保留所有合法法律权利。"}),C.jsx("p",{className:"mt-1",children:"备案合规许可证：ICP 备 4008400789-1A 号 · 平台客服及举报电话：400-840-0789"})]})]})}e2.createRoot(document.getElementById("root")).render(C.jsx(Z.StrictMode,{children:C.jsx(N3,{})}));
