function IS(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function US(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var w0={exports:{}},Mc={},A0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),FS=Symbol.for("react.portal"),OS=Symbol.for("react.fragment"),kS=Symbol.for("react.strict_mode"),BS=Symbol.for("react.profiler"),zS=Symbol.for("react.provider"),VS=Symbol.for("react.context"),HS=Symbol.for("react.forward_ref"),GS=Symbol.for("react.suspense"),WS=Symbol.for("react.memo"),XS=Symbol.for("react.lazy"),qm=Symbol.iterator;function jS(n){return n===null||typeof n!="object"?null:(n=qm&&n[qm]||n["@@iterator"],typeof n=="function"?n:null)}var C0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,b0={};function Qa(n,e,t){this.props=n,this.context=e,this.refs=b0,this.updater=t||C0}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Qa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function P0(){}P0.prototype=Qa.prototype;function dp(n,e,t){this.props=n,this.context=e,this.refs=b0,this.updater=t||C0}var hp=dp.prototype=new P0;hp.constructor=dp;R0(hp,Qa.prototype);hp.isPureReactComponent=!0;var $m=Array.isArray,D0=Object.prototype.hasOwnProperty,pp={current:null},L0={key:!0,ref:!0,__self:!0,__source:!0};function N0(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)D0.call(e,i)&&!L0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:_l,type:n,key:s,ref:a,props:r,_owner:pp.current}}function YS(n,e){return{$$typeof:_l,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function mp(n){return typeof n=="object"&&n!==null&&n.$$typeof===_l}function qS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Km=/\/+/g;function qc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?qS(""+n.key):e.toString(36)}function vu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case _l:case FS:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+qc(a,0):i,$m(r)?(t="",n!=null&&(t=n.replace(Km,"$&/")+"/"),vu(r,e,t,"",function(u){return u})):r!=null&&(mp(r)&&(r=YS(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Km,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",$m(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+qc(s,o);a+=vu(s,e,t,l,r)}else if(l=jS(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+qc(s,o++),a+=vu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Dl(n,e,t){if(n==null)return n;var i=[],r=0;return vu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function $S(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var gn={current:null},xu={transition:null},KS={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:xu,ReactCurrentOwner:pp};function I0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Dl,forEach:function(n,e,t){Dl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Dl(n,function(){e++}),e},toArray:function(n){return Dl(n,function(e){return e})||[]},only:function(n){if(!mp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};We.Component=Qa;We.Fragment=OS;We.Profiler=BS;We.PureComponent=dp;We.StrictMode=kS;We.Suspense=GS;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;We.act=I0;We.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=R0({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=pp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)D0.call(e,l)&&!L0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:_l,type:n.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(n){return n={$$typeof:VS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:zS,_context:n},n.Consumer=n};We.createElement=N0;We.createFactory=function(n){var e=N0.bind(null,n);return e.type=n,e};We.createRef=function(){return{current:null}};We.forwardRef=function(n){return{$$typeof:HS,render:n}};We.isValidElement=mp;We.lazy=function(n){return{$$typeof:XS,_payload:{_status:-1,_result:n},_init:$S}};We.memo=function(n,e){return{$$typeof:WS,type:n,compare:e===void 0?null:e}};We.startTransition=function(n){var e=xu.transition;xu.transition={};try{n()}finally{xu.transition=e}};We.unstable_act=I0;We.useCallback=function(n,e){return gn.current.useCallback(n,e)};We.useContext=function(n){return gn.current.useContext(n)};We.useDebugValue=function(){};We.useDeferredValue=function(n){return gn.current.useDeferredValue(n)};We.useEffect=function(n,e){return gn.current.useEffect(n,e)};We.useId=function(){return gn.current.useId()};We.useImperativeHandle=function(n,e,t){return gn.current.useImperativeHandle(n,e,t)};We.useInsertionEffect=function(n,e){return gn.current.useInsertionEffect(n,e)};We.useLayoutEffect=function(n,e){return gn.current.useLayoutEffect(n,e)};We.useMemo=function(n,e){return gn.current.useMemo(n,e)};We.useReducer=function(n,e,t){return gn.current.useReducer(n,e,t)};We.useRef=function(n){return gn.current.useRef(n)};We.useState=function(n){return gn.current.useState(n)};We.useSyncExternalStore=function(n,e,t){return gn.current.useSyncExternalStore(n,e,t)};We.useTransition=function(){return gn.current.useTransition()};We.version="18.3.1";A0.exports=We;var ne=A0.exports;const U0=US(ne),ZS=IS({__proto__:null,default:U0},[ne]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=ne,JS=Symbol.for("react.element"),eM=Symbol.for("react.fragment"),tM=Object.prototype.hasOwnProperty,nM=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iM={key:!0,ref:!0,__self:!0,__source:!0};function F0(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)tM.call(e,i)&&!iM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:JS,type:n,key:s,ref:a,props:r,_owner:nM.current}}Mc.Fragment=eM;Mc.jsx=F0;Mc.jsxs=F0;w0.exports=Mc;var I=w0.exports,ud={},O0={exports:{}},Yn={},k0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(z,G){var Z=z.length;z.push(G);e:for(;0<Z;){var te=Z-1>>>1,ee=z[te];if(0<r(ee,G))z[te]=G,z[Z]=ee,Z=te;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var G=z[0],Z=z.pop();if(Z!==G){z[0]=Z;e:for(var te=0,ee=z.length,Ae=ee>>>1;te<Ae;){var Le=2*(te+1)-1,ze=z[Le],$=Le+1,ae=z[$];if(0>r(ze,Z))$<ee&&0>r(ae,ze)?(z[te]=ae,z[$]=Z,te=$):(z[te]=ze,z[Le]=Z,te=Le);else if($<ee&&0>r(ae,Z))z[te]=ae,z[$]=Z,te=$;else break e}}return G}function r(z,G){var Z=z.sortIndex-G.sortIndex;return Z!==0?Z:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=z)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function S(z){if(v=!1,x(z),!_)if(t(l)!==null)_=!0,V(T);else{var G=t(u);G!==null&&F(S,G.startTime-z)}}function T(z,G){_=!1,v&&(v=!1,h(y),y=-1),p=!0;var Z=f;try{for(x(G),d=t(l);d!==null&&(!(d.expirationTime>G)||z&&!b());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var ee=te(d.expirationTime<=G);G=n.unstable_now(),typeof ee=="function"?d.callback=ee:d===t(l)&&i(l),x(G)}else i(l);d=t(l)}if(d!==null)var Ae=!0;else{var Le=t(u);Le!==null&&F(S,Le.startTime-G),Ae=!1}return Ae}finally{d=null,f=Z,p=!1}}var C=!1,w=null,y=-1,E=5,L=-1;function b(){return!(n.unstable_now()-L<E)}function D(){if(w!==null){var z=n.unstable_now();L=z;var G=!0;try{G=w(!0,z)}finally{G?U():(C=!1,w=null)}}else C=!1}var U;if(typeof g=="function")U=function(){g(D)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,k=H.port2;H.port1.onmessage=D,U=function(){k.postMessage(null)}}else U=function(){m(D,0)};function V(z){w=z,C||(C=!0,U())}function F(z,G){y=m(function(){z(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,V(T))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(z){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var Z=f;f=G;try{return z()}finally{f=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=f;f=z;try{return G()}finally{f=Z}},n.unstable_scheduleCallback=function(z,G,Z){var te=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?te+Z:te):Z=te,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Z+ee,z={id:c++,callback:G,priorityLevel:z,startTime:Z,expirationTime:ee,sortIndex:-1},Z>te?(z.sortIndex=Z,e(u,z),t(l)===null&&z===t(u)&&(v?(h(y),y=-1):v=!0,F(S,Z-te))):(z.sortIndex=ee,e(l,z),_||p||(_=!0,V(T))),z},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(z){var G=f;return function(){var Z=f;f=G;try{return z.apply(this,arguments)}finally{f=Z}}}})(B0);k0.exports=B0;var rM=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sM=ne,Wn=rM;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,Ho={};function Vs(n,e){Ia(n,e),Ia(n+"Capture",e)}function Ia(n,e){for(Ho[n]=e,n=0;n<e.length;n++)z0.add(e[n])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,aM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zm={},Qm={};function oM(n){return cd.call(Qm,n)?!0:cd.call(Zm,n)?!1:aM.test(n)?Qm[n]=!0:(Zm[n]=!0,!1)}function lM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function uM(n,e,t,i){if(e===null||typeof e>"u"||lM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Jt[n]=new _n(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Jt[e]=new _n(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Jt[n]=new _n(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Jt[n]=new _n(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Jt[n]=new _n(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Jt[n]=new _n(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Jt[n]=new _n(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Jt[n]=new _n(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Jt[n]=new _n(n,5,!1,n.toLowerCase(),null,!1,!1)});var gp=/[\-:]([a-z])/g;function _p(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(gp,_p);Jt[e]=new _n(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(gp,_p);Jt[e]=new _n(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(gp,_p);Jt[e]=new _n(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Jt[n]=new _n(n,1,!1,n.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Jt[n]=new _n(n,1,!1,n.toLowerCase(),null,!0,!0)});function vp(n,e,t,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uM(e,t,r,i)&&(t=null),i||r===null?oM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var mr=sM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),ua=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),hd=Symbol.for("react.suspense_list"),Sp=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),G0=Symbol.for("react.offscreen"),Jm=Symbol.iterator;function so(n){return n===null||typeof n!="object"?null:(n=Jm&&n[Jm]||n["@@iterator"],typeof n=="function"?n:null)}var Et=Object.assign,$c;function Mo(n){if($c===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);$c=e&&e[1]||""}return`
`+$c+n}var Kc=!1;function Zc(n,e){if(!n||Kc)return"";Kc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Kc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Mo(n):""}function cM(n){switch(n.tag){case 5:return Mo(n.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return n=Zc(n.type,!1),n;case 11:return n=Zc(n.type.render,!1),n;case 1:return n=Zc(n.type,!0),n;default:return""}}function pd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ca:return"Fragment";case ua:return"Portal";case fd:return"Profiler";case xp:return"StrictMode";case dd:return"Suspense";case hd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H0:return(n.displayName||"Context")+".Consumer";case V0:return(n._context.displayName||"Context")+".Provider";case yp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Sp:return e=n.displayName||null,e!==null?e:pd(n.type)||"Memo";case Ar:e=n._payload,n=n._init;try{return pd(n(e))}catch{}}return null}function fM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function W0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dM(n){var e=W0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Nl(n){n._valueTracker||(n._valueTracker=dM(n))}function X0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=W0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function zu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function md(n,e){var t=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function eg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=$r(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(n,e){e=e.checked,e!=null&&vp(n,"checked",e,!1)}function gd(n,e){j0(n,e);var t=$r(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?_d(n,e.type,t):e.hasOwnProperty("defaultValue")&&_d(n,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function tg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function _d(n,e,t){(e!=="number"||zu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Eo=Array.isArray;function Ea(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+$r(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function vd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ng(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(Eo(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:$r(t)}}function Y0(n,e){var t=$r(e.value),i=$r(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function ig(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function q0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?q0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Il,$0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Il.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Go(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hM=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(n){hM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Po[e]=Po[n]})});function K0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Po.hasOwnProperty(n)&&Po[n]?(""+e).trim():e+"px"}function Z0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=K0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var pM=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(n,e){if(e){if(pM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Sd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function Mp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ed=null,Ta=null,wa=null;function rg(n){if(n=yl(n)){if(typeof Ed!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=Cc(e),Ed(n.stateNode,n.type,e))}}function Q0(n){Ta?wa?wa.push(n):wa=[n]:Ta=n}function J0(){if(Ta){var n=Ta,e=wa;if(wa=Ta=null,rg(n),e)for(n=0;n<e.length;n++)rg(e[n])}}function ev(n,e){return n(e)}function tv(){}var Qc=!1;function nv(n,e,t){if(Qc)return n(e,t);Qc=!0;try{return ev(n,e,t)}finally{Qc=!1,(Ta!==null||wa!==null)&&(tv(),J0())}}function Wo(n,e){var t=n.stateNode;if(t===null)return null;var i=Cc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var Td=!1;if(ar)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Td=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Td=!1}function mM(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Do=!1,Vu=null,Hu=!1,wd=null,gM={onError:function(n){Do=!0,Vu=n}};function _M(n,e,t,i,r,s,a,o,l){Do=!1,Vu=null,mM.apply(gM,arguments)}function vM(n,e,t,i,r,s,a,o,l){if(_M.apply(this,arguments),Do){if(Do){var u=Vu;Do=!1,Vu=null}else throw Error(ie(198));Hu||(Hu=!0,wd=u)}}function Hs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function iv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function sg(n){if(Hs(n)!==n)throw Error(ie(188))}function xM(n){var e=n.alternate;if(!e){if(e=Hs(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return sg(r),n;if(s===i)return sg(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function rv(n){return n=xM(n),n!==null?sv(n):null}function sv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=sv(n);if(e!==null)return e;n=n.sibling}return null}var av=Wn.unstable_scheduleCallback,ag=Wn.unstable_cancelCallback,yM=Wn.unstable_shouldYield,SM=Wn.unstable_requestPaint,Pt=Wn.unstable_now,MM=Wn.unstable_getCurrentPriorityLevel,Ep=Wn.unstable_ImmediatePriority,ov=Wn.unstable_UserBlockingPriority,Gu=Wn.unstable_NormalPriority,EM=Wn.unstable_LowPriority,lv=Wn.unstable_IdlePriority,Ec=null,Ni=null;function TM(n){if(Ni&&typeof Ni.onCommitFiberRoot=="function")try{Ni.onCommitFiberRoot(Ec,n,void 0,(n.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:CM,wM=Math.log,AM=Math.LN2;function CM(n){return n>>>=0,n===0?32:31-(wM(n)/AM|0)|0}var Ul=64,Fl=4194304;function To(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=To(o):(s&=a,s!==0&&(i=To(s)))}else a=t&~r,a!==0?i=To(a):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-_i(e),r=1<<t,i|=n[t],e&=~r;return i}function RM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-_i(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=RM(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Ad(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function uv(){var n=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),n}function Jc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-_i(e),n[e]=t}function PM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-_i(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Tp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-_i(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var it=0;function cv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var fv,wp,dv,hv,pv,Cd=!1,Ol=[],kr=null,Br=null,zr=null,Xo=new Map,jo=new Map,Rr=[],DM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function og(n,e){switch(n){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function oo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=yl(e),e!==null&&wp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function LM(n,e,t,i,r){switch(e){case"focusin":return kr=oo(kr,n,e,t,i,r),!0;case"dragenter":return Br=oo(Br,n,e,t,i,r),!0;case"mouseover":return zr=oo(zr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Xo.set(s,oo(Xo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,oo(jo.get(s)||null,n,e,t,i,r)),!0}return!1}function mv(n){var e=Es(n.target);if(e!==null){var t=Hs(e);if(t!==null){if(e=t.tag,e===13){if(e=iv(t),e!==null){n.blockedOn=e,pv(n.priority,function(){dv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Rd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Md=i,t.target.dispatchEvent(i),Md=null}else return e=yl(t),e!==null&&wp(e),n.blockedOn=t,!1;e.shift()}return!0}function lg(n,e,t){yu(n)&&t.delete(e)}function NM(){Cd=!1,kr!==null&&yu(kr)&&(kr=null),Br!==null&&yu(Br)&&(Br=null),zr!==null&&yu(zr)&&(zr=null),Xo.forEach(lg),jo.forEach(lg)}function lo(n,e){n.blockedOn===e&&(n.blockedOn=null,Cd||(Cd=!0,Wn.unstable_scheduleCallback(Wn.unstable_NormalPriority,NM)))}function Yo(n){function e(r){return lo(r,n)}if(0<Ol.length){lo(Ol[0],n);for(var t=1;t<Ol.length;t++){var i=Ol[t];i.blockedOn===n&&(i.blockedOn=null)}}for(kr!==null&&lo(kr,n),Br!==null&&lo(Br,n),zr!==null&&lo(zr,n),Xo.forEach(e),jo.forEach(e),t=0;t<Rr.length;t++)i=Rr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Rr.length&&(t=Rr[0],t.blockedOn===null);)mv(t),t.blockedOn===null&&Rr.shift()}var Aa=mr.ReactCurrentBatchConfig,Xu=!0;function IM(n,e,t,i){var r=it,s=Aa.transition;Aa.transition=null;try{it=1,Ap(n,e,t,i)}finally{it=r,Aa.transition=s}}function UM(n,e,t,i){var r=it,s=Aa.transition;Aa.transition=null;try{it=4,Ap(n,e,t,i)}finally{it=r,Aa.transition=s}}function Ap(n,e,t,i){if(Xu){var r=Rd(n,e,t,i);if(r===null)cf(n,e,i,ju,t),og(n,i);else if(LM(r,n,e,t,i))i.stopPropagation();else if(og(n,i),e&4&&-1<DM.indexOf(n)){for(;r!==null;){var s=yl(r);if(s!==null&&fv(s),s=Rd(n,e,t,i),s===null&&cf(n,e,i,ju,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else cf(n,e,i,null,t)}}var ju=null;function Rd(n,e,t,i){if(ju=null,n=Mp(i),n=Es(n),n!==null)if(e=Hs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=iv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ju=n,null}function gv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MM()){case Ep:return 1;case ov:return 4;case Gu:case EM:return 16;case lv:return 536870912;default:return 16}default:return 16}}var Dr=null,Cp=null,Su=null;function _v(){if(Su)return Su;var n,e=Cp,t=e.length,i,r="value"in Dr?Dr.value:Dr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Su=r.slice(n,1<i?1-i:void 0)}function Mu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function kl(){return!0}function ug(){return!1}function qn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kl:ug,this.isPropagationStopped=ug,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),e}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rp=qn(Ja),xl=Et({},Ja,{view:0,detail:0}),FM=qn(xl),ef,tf,uo,Tc=Et({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==uo&&(uo&&n.type==="mousemove"?(ef=n.screenX-uo.screenX,tf=n.screenY-uo.screenY):tf=ef=0,uo=n),ef)},movementY:function(n){return"movementY"in n?n.movementY:tf}}),cg=qn(Tc),OM=Et({},Tc,{dataTransfer:0}),kM=qn(OM),BM=Et({},xl,{relatedTarget:0}),nf=qn(BM),zM=Et({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),VM=qn(zM),HM=Et({},Ja,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),GM=qn(HM),WM=Et({},Ja,{data:0}),fg=qn(WM),XM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=YM[n])?!!e[n]:!1}function bp(){return qM}var $M=Et({},xl,{key:function(n){if(n.key){var e=XM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Mu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bp,charCode:function(n){return n.type==="keypress"?Mu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),KM=qn($M),ZM=Et({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=qn(ZM),QM=Et({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bp}),JM=qn(QM),eE=Et({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),tE=qn(eE),nE=Et({},Tc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iE=qn(nE),rE=[9,13,27,32],Pp=ar&&"CompositionEvent"in window,Lo=null;ar&&"documentMode"in document&&(Lo=document.documentMode);var sE=ar&&"TextEvent"in window&&!Lo,vv=ar&&(!Pp||Lo&&8<Lo&&11>=Lo),hg=" ",pg=!1;function xv(n,e){switch(n){case"keyup":return rE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fa=!1;function aE(n,e){switch(n){case"compositionend":return yv(e);case"keypress":return e.which!==32?null:(pg=!0,hg);case"textInput":return n=e.data,n===hg&&pg?null:n;default:return null}}function oE(n,e){if(fa)return n==="compositionend"||!Pp&&xv(n,e)?(n=_v(),Su=Cp=Dr=null,fa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var lE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!lE[n.type]:e==="textarea"}function Sv(n,e,t,i){Q0(i),e=Yu(e,"onChange"),0<e.length&&(t=new Rp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var No=null,qo=null;function uE(n){Lv(n,0)}function wc(n){var e=pa(n);if(X0(e))return n}function cE(n,e){if(n==="change")return e}var Mv=!1;if(ar){var rf;if(ar){var sf="oninput"in document;if(!sf){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),sf=typeof gg.oninput=="function"}rf=sf}else rf=!1;Mv=rf&&(!document.documentMode||9<document.documentMode)}function _g(){No&&(No.detachEvent("onpropertychange",Ev),qo=No=null)}function Ev(n){if(n.propertyName==="value"&&wc(qo)){var e=[];Sv(e,qo,n,Mp(n)),nv(uE,e)}}function fE(n,e,t){n==="focusin"?(_g(),No=e,qo=t,No.attachEvent("onpropertychange",Ev)):n==="focusout"&&_g()}function dE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wc(qo)}function hE(n,e){if(n==="click")return wc(e)}function pE(n,e){if(n==="input"||n==="change")return wc(e)}function mE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var xi=typeof Object.is=="function"?Object.is:mE;function $o(n,e){if(xi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!cd.call(e,r)||!xi(n[r],e[r]))return!1}return!0}function vg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xg(n,e){var t=vg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=vg(t)}}function Tv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Tv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function wv(){for(var n=window,e=zu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=zu(n.document)}return e}function Dp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function gE(n){var e=wv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Tv(t.ownerDocument.documentElement,t)){if(i!==null&&Dp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=xg(t,s);var a=xg(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _E=ar&&"documentMode"in document&&11>=document.documentMode,da=null,bd=null,Io=null,Pd=!1;function yg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pd||da==null||da!==zu(i)||(i=da,"selectionStart"in i&&Dp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&$o(Io,i)||(Io=i,i=Yu(bd,"onSelect"),0<i.length&&(e=new Rp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=da)))}function Bl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ha={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},af={},Av={};ar&&(Av=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function Ac(n){if(af[n])return af[n];if(!ha[n])return n;var e=ha[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Av)return af[n]=e[t];return n}var Cv=Ac("animationend"),Rv=Ac("animationiteration"),bv=Ac("animationstart"),Pv=Ac("transitionend"),Dv=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(n,e){Dv.set(n,e),Vs(e,[n])}for(var of=0;of<Sg.length;of++){var lf=Sg[of],vE=lf.toLowerCase(),xE=lf[0].toUpperCase()+lf.slice(1);ts(vE,"on"+xE)}ts(Cv,"onAnimationEnd");ts(Rv,"onAnimationIteration");ts(bv,"onAnimationStart");ts("dblclick","onDoubleClick");ts("focusin","onFocus");ts("focusout","onBlur");ts(Pv,"onTransitionEnd");Ia("onMouseEnter",["mouseout","mouseover"]);Ia("onMouseLeave",["mouseout","mouseover"]);Ia("onPointerEnter",["pointerout","pointerover"]);Ia("onPointerLeave",["pointerout","pointerover"]);Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Mg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,vM(i,e,void 0,n),n.currentTarget=null}function Lv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Mg(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Mg(r,o,u),s=l}}}if(Hu)throw n=wd,Hu=!1,wd=null,n}function pt(n,e){var t=e[Ud];t===void 0&&(t=e[Ud]=new Set);var i=n+"__bubble";t.has(i)||(Nv(e,n,2,!1),t.add(i))}function uf(n,e,t){var i=0;e&&(i|=4),Nv(t,n,i,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[zl]){n[zl]=!0,z0.forEach(function(t){t!=="selectionchange"&&(yE.has(t)||uf(t,!1,n),uf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[zl]||(e[zl]=!0,uf("selectionchange",!1,e))}}function Nv(n,e,t,i){switch(gv(e)){case 1:var r=IM;break;case 4:r=UM;break;default:r=Ap}t=r.bind(null,e,t,n),r=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function cf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Es(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}nv(function(){var u=s,c=Mp(t),d=[];e:{var f=Dv.get(n);if(f!==void 0){var p=Rp,_=n;switch(n){case"keypress":if(Mu(t)===0)break e;case"keydown":case"keyup":p=KM;break;case"focusin":_="focus",p=nf;break;case"focusout":_="blur",p=nf;break;case"beforeblur":case"afterblur":p=nf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=JM;break;case Cv:case Rv:case bv:p=VM;break;case Pv:p=tE;break;case"scroll":p=FM;break;case"wheel":p=iE;break;case"copy":case"cut":case"paste":p=GM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dg}var v=(e&4)!==0,m=!v&&n==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=Wo(g,h),S!=null&&v.push(Zo(g,S,x)))),m)break;g=g.return}0<v.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Md&&(_=t.relatedTarget||t.fromElement)&&(Es(_)||_[or]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Es(_):null,_!==null&&(m=Hs(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(v=cg,S="onMouseLeave",h="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(v=dg,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:pa(p),x=_==null?f:pa(_),f=new v(S,g+"leave",p,t,c),f.target=m,f.relatedTarget=x,S=null,Es(c)===u&&(v=new v(h,g+"enter",_,t,c),v.target=x,v.relatedTarget=m,S=v),m=S,p&&_)t:{for(v=p,h=_,g=0,x=v;x;x=Ys(x))g++;for(x=0,S=h;S;S=Ys(S))x++;for(;0<g-x;)v=Ys(v),g--;for(;0<x-g;)h=Ys(h),x--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=Ys(v),h=Ys(h)}v=null}else v=null;p!==null&&Eg(d,f,p,v,!1),_!==null&&m!==null&&Eg(d,m,_,v,!0)}}e:{if(f=u?pa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=cE;else if(mg(f))if(Mv)T=pE;else{T=dE;var C=fE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=hE);if(T&&(T=T(n,u))){Sv(d,T,t,c);break e}C&&C(n,f,u),n==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&_d(f,"number",f.value)}switch(C=u?pa(u):window,n){case"focusin":(mg(C)||C.contentEditable==="true")&&(da=C,bd=u,Io=null);break;case"focusout":Io=bd=da=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,yg(d,t,c);break;case"selectionchange":if(_E)break;case"keydown":case"keyup":yg(d,t,c)}var w;if(Pp)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else fa?xv(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(vv&&t.locale!=="ko"&&(fa||y!=="onCompositionStart"?y==="onCompositionEnd"&&fa&&(w=_v()):(Dr=c,Cp="value"in Dr?Dr.value:Dr.textContent,fa=!0)),C=Yu(u,y),0<C.length&&(y=new fg(y,n,null,t,c),d.push({event:y,listeners:C}),w?y.data=w:(w=yv(t),w!==null&&(y.data=w)))),(w=sE?aE(n,t):oE(n,t))&&(u=Yu(u,"onBeforeInput"),0<u.length&&(c=new fg("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=w))}Lv(d,e)})}function Zo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Yu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wo(n,t),s!=null&&i.unshift(Zo(n,s,r)),s=Wo(n,e),s!=null&&i.push(Zo(n,s,r))),n=n.return}return i}function Ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Eg(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Wo(t,s),l!=null&&a.unshift(Zo(t,l,o))):r||(l=Wo(t,s),l!=null&&a.push(Zo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var SE=/\r\n?/g,ME=/\u0000|\uFFFD/g;function Tg(n){return(typeof n=="string"?n:""+n).replace(SE,`
`).replace(ME,"")}function Vl(n,e,t){if(e=Tg(e),Tg(n)!==e&&t)throw Error(ie(425))}function qu(){}var Dd=null,Ld=null;function Nd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,EE=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,TE=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(n){return wg.resolve(null).then(n).catch(wE)}:Id;function wE(n){setTimeout(function(){throw n})}function ff(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Yo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Yo(e)}function Vr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ag(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Ri="__reactFiber$"+eo,Qo="__reactProps$"+eo,or="__reactContainer$"+eo,Ud="__reactEvents$"+eo,AE="__reactListeners$"+eo,CE="__reactHandles$"+eo;function Es(n){var e=n[Ri];if(e)return e;for(var t=n.parentNode;t;){if(e=t[or]||t[Ri]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ag(n);n!==null;){if(t=n[Ri])return t;n=Ag(n)}return e}n=t,t=n.parentNode}return null}function yl(n){return n=n[Ri]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function pa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function Cc(n){return n[Qo]||null}var Fd=[],ma=-1;function ns(n){return{current:n}}function mt(n){0>ma||(n.current=Fd[ma],Fd[ma]=null,ma--)}function ht(n,e){ma++,Fd[ma]=n.current,n.current=e}var Kr={},cn=ns(Kr),Mn=ns(!1),Us=Kr;function Ua(n,e){var t=n.type.contextTypes;if(!t)return Kr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function En(n){return n=n.childContextTypes,n!=null}function $u(){mt(Mn),mt(cn)}function Cg(n,e,t){if(cn.current!==Kr)throw Error(ie(168));ht(cn,e),ht(Mn,t)}function Iv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,fM(n)||"Unknown",r));return Et({},t,i)}function Ku(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Us=cn.current,ht(cn,n),ht(Mn,Mn.current),!0}function Rg(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=Iv(n,e,Us),i.__reactInternalMemoizedMergedChildContext=n,mt(Mn),mt(cn),ht(cn,n)):mt(Mn),ht(Mn,t)}var Ki=null,Rc=!1,df=!1;function Uv(n){Ki===null?Ki=[n]:Ki.push(n)}function RE(n){Rc=!0,Uv(n)}function is(){if(!df&&Ki!==null){df=!0;var n=0,e=it;try{var t=Ki;for(it=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ki=null,Rc=!1}catch(r){throw Ki!==null&&(Ki=Ki.slice(n+1)),av(Ep,is),r}finally{it=e,df=!1}}return null}var ga=[],_a=0,Zu=null,Qu=0,Zn=[],Qn=0,Fs=null,Ji=1,er="";function gs(n,e){ga[_a++]=Qu,ga[_a++]=Zu,Zu=n,Qu=e}function Fv(n,e,t){Zn[Qn++]=Ji,Zn[Qn++]=er,Zn[Qn++]=Fs,Fs=n;var i=Ji;n=er;var r=32-_i(i)-1;i&=~(1<<r),t+=1;var s=32-_i(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ji=1<<32-_i(e)+r|t<<r|i,er=s+n}else Ji=1<<s|t<<r|i,er=n}function Lp(n){n.return!==null&&(gs(n,1),Fv(n,1,0))}function Np(n){for(;n===Zu;)Zu=ga[--_a],ga[_a]=null,Qu=ga[--_a],ga[_a]=null;for(;n===Fs;)Fs=Zn[--Qn],Zn[Qn]=null,er=Zn[--Qn],Zn[Qn]=null,Ji=Zn[--Qn],Zn[Qn]=null}var Vn=null,kn=null,gt=!1,hi=null;function Ov(n,e){var t=ei(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function bg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Vn=n,kn=Vr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Vn=n,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Fs!==null?{id:Ji,overflow:er}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ei(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Vn=n,kn=null,!0):!1;default:return!1}}function Od(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kd(n){if(gt){var e=kn;if(e){var t=e;if(!bg(n,e)){if(Od(n))throw Error(ie(418));e=Vr(t.nextSibling);var i=Vn;e&&bg(n,e)?Ov(i,t):(n.flags=n.flags&-4097|2,gt=!1,Vn=n)}}else{if(Od(n))throw Error(ie(418));n.flags=n.flags&-4097|2,gt=!1,Vn=n}}}function Pg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Hl(n){if(n!==Vn)return!1;if(!gt)return Pg(n),gt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nd(n.type,n.memoizedProps)),e&&(e=kn)){if(Od(n))throw kv(),Error(ie(418));for(;e;)Ov(n,e),e=Vr(e.nextSibling)}if(Pg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){kn=Vr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}kn=null}}else kn=Vn?Vr(n.stateNode.nextSibling):null;return!0}function kv(){for(var n=kn;n;)n=Vr(n.nextSibling)}function Fa(){kn=Vn=null,gt=!1}function Ip(n){hi===null?hi=[n]:hi.push(n)}var bE=mr.ReactCurrentBatchConfig;function co(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function Gl(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Dg(n){var e=n._init;return e(n._payload)}function Bv(n){function e(h,g){if(n){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function t(h,g){if(!n)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Xr(h,g),h.index=0,h.sibling=null,h}function s(h,g,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,g,x,S){return g===null||g.tag!==6?(g=xf(x,h.mode,S),g.return=h,g):(g=r(g,x),g.return=h,g)}function l(h,g,x,S){var T=x.type;return T===ca?c(h,g,x.props.children,S,x.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&Dg(T)===g.type)?(S=r(g,x.props),S.ref=co(h,g,x),S.return=h,S):(S=bu(x.type,x.key,x.props,null,h.mode,S),S.ref=co(h,g,x),S.return=h,S)}function u(h,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=yf(x,h.mode,S),g.return=h,g):(g=r(g,x.children||[]),g.return=h,g)}function c(h,g,x,S,T){return g===null||g.tag!==7?(g=Ps(x,h.mode,S,T),g.return=h,g):(g=r(g,x),g.return=h,g)}function d(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=xf(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ll:return x=bu(g.type,g.key,g.props,null,h.mode,x),x.ref=co(h,null,g),x.return=h,x;case ua:return g=yf(g,h.mode,x),g.return=h,g;case Ar:var S=g._init;return d(h,S(g._payload),x)}if(Eo(g)||so(g))return g=Ps(g,h.mode,x,null),g.return=h,g;Gl(h,g)}return null}function f(h,g,x,S){var T=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(h,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ll:return x.key===T?l(h,g,x,S):null;case ua:return x.key===T?u(h,g,x,S):null;case Ar:return T=x._init,f(h,g,T(x._payload),S)}if(Eo(x)||so(x))return T!==null?null:c(h,g,x,S,null);Gl(h,x)}return null}function p(h,g,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,o(g,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ll:return h=h.get(S.key===null?x:S.key)||null,l(g,h,S,T);case ua:return h=h.get(S.key===null?x:S.key)||null,u(g,h,S,T);case Ar:var C=S._init;return p(h,g,x,C(S._payload),T)}if(Eo(S)||so(S))return h=h.get(x)||null,c(g,h,S,T,null);Gl(g,S)}return null}function _(h,g,x,S){for(var T=null,C=null,w=g,y=g=0,E=null;w!==null&&y<x.length;y++){w.index>y?(E=w,w=null):E=w.sibling;var L=f(h,w,x[y],S);if(L===null){w===null&&(w=E);break}n&&w&&L.alternate===null&&e(h,w),g=s(L,g,y),C===null?T=L:C.sibling=L,C=L,w=E}if(y===x.length)return t(h,w),gt&&gs(h,y),T;if(w===null){for(;y<x.length;y++)w=d(h,x[y],S),w!==null&&(g=s(w,g,y),C===null?T=w:C.sibling=w,C=w);return gt&&gs(h,y),T}for(w=i(h,w);y<x.length;y++)E=p(w,h,y,x[y],S),E!==null&&(n&&E.alternate!==null&&w.delete(E.key===null?y:E.key),g=s(E,g,y),C===null?T=E:C.sibling=E,C=E);return n&&w.forEach(function(b){return e(h,b)}),gt&&gs(h,y),T}function v(h,g,x,S){var T=so(x);if(typeof T!="function")throw Error(ie(150));if(x=T.call(x),x==null)throw Error(ie(151));for(var C=T=null,w=g,y=g=0,E=null,L=x.next();w!==null&&!L.done;y++,L=x.next()){w.index>y?(E=w,w=null):E=w.sibling;var b=f(h,w,L.value,S);if(b===null){w===null&&(w=E);break}n&&w&&b.alternate===null&&e(h,w),g=s(b,g,y),C===null?T=b:C.sibling=b,C=b,w=E}if(L.done)return t(h,w),gt&&gs(h,y),T;if(w===null){for(;!L.done;y++,L=x.next())L=d(h,L.value,S),L!==null&&(g=s(L,g,y),C===null?T=L:C.sibling=L,C=L);return gt&&gs(h,y),T}for(w=i(h,w);!L.done;y++,L=x.next())L=p(w,h,y,L.value,S),L!==null&&(n&&L.alternate!==null&&w.delete(L.key===null?y:L.key),g=s(L,g,y),C===null?T=L:C.sibling=L,C=L);return n&&w.forEach(function(D){return e(h,D)}),gt&&gs(h,y),T}function m(h,g,x,S){if(typeof x=="object"&&x!==null&&x.type===ca&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ll:e:{for(var T=x.key,C=g;C!==null;){if(C.key===T){if(T=x.type,T===ca){if(C.tag===7){t(h,C.sibling),g=r(C,x.props.children),g.return=h,h=g;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&Dg(T)===C.type){t(h,C.sibling),g=r(C,x.props),g.ref=co(h,C,x),g.return=h,h=g;break e}t(h,C);break}else e(h,C);C=C.sibling}x.type===ca?(g=Ps(x.props.children,h.mode,S,x.key),g.return=h,h=g):(S=bu(x.type,x.key,x.props,null,h.mode,S),S.ref=co(h,g,x),S.return=h,h=S)}return a(h);case ua:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(h,g.sibling),g=r(g,x.children||[]),g.return=h,h=g;break e}else{t(h,g);break}else e(h,g);g=g.sibling}g=yf(x,h.mode,S),g.return=h,h=g}return a(h);case Ar:return C=x._init,m(h,g,C(x._payload),S)}if(Eo(x))return _(h,g,x,S);if(so(x))return v(h,g,x,S);Gl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(h,g.sibling),g=r(g,x),g.return=h,h=g):(t(h,g),g=xf(x,h.mode,S),g.return=h,h=g),a(h)):t(h,g)}return m}var Oa=Bv(!0),zv=Bv(!1),Ju=ns(null),ec=null,va=null,Up=null;function Fp(){Up=va=ec=null}function Op(n){var e=Ju.current;mt(Ju),n._currentValue=e}function Bd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ca(n,e){ec=n,Up=va=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Sn=!0),n.firstContext=null)}function ri(n){var e=n._currentValue;if(Up!==n)if(n={context:n,memoizedValue:e,next:null},va===null){if(ec===null)throw Error(ie(308));va=n,ec.dependencies={lanes:0,firstContext:n}}else va=va.next=n;return e}var Ts=null;function kp(n){Ts===null?Ts=[n]:Ts.push(n)}function Vv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,kp(e)):(t.next=r.next,r.next=t),e.interleaved=t,lr(n,i)}function lr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Cr=!1;function Bp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function nr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,lr(n,t)}return r=i.interleaved,r===null?(e.next=e,kp(i)):(e.next=r.next,r.next=e),i.interleaved=e,lr(n,t)}function Eu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Tp(n,t)}}function Lg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function tc(n,e,t,i){var r=n.updateQueue;Cr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,v=o;switch(f=e,p=t,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Et({},d,f);break e;case 2:Cr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ks|=a,n.lanes=a,n.memoizedState=d}}function Ng(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Sl={},Ii=ns(Sl),Jo=ns(Sl),el=ns(Sl);function ws(n){if(n===Sl)throw Error(ie(174));return n}function zp(n,e){switch(ht(el,e),ht(Jo,n),ht(Ii,Sl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=xd(e,n)}mt(Ii),ht(Ii,e)}function ka(){mt(Ii),mt(Jo),mt(el)}function Gv(n){ws(el.current);var e=ws(Ii.current),t=xd(e,n.type);e!==t&&(ht(Jo,n),ht(Ii,t))}function Vp(n){Jo.current===n&&(mt(Ii),mt(Jo))}var xt=ns(0);function nc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hf=[];function Hp(){for(var n=0;n<hf.length;n++)hf[n]._workInProgressVersionPrimary=null;hf.length=0}var Tu=mr.ReactCurrentDispatcher,pf=mr.ReactCurrentBatchConfig,Os=0,Mt=null,kt=null,Xt=null,ic=!1,Uo=!1,tl=0,PE=0;function tn(){throw Error(ie(321))}function Gp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!xi(n[t],e[t]))return!1;return!0}function Wp(n,e,t,i,r,s){if(Os=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tu.current=n===null||n.memoizedState===null?IE:UE,n=t(i,r),Uo){s=0;do{if(Uo=!1,tl=0,25<=s)throw Error(ie(301));s+=1,Xt=kt=null,e.updateQueue=null,Tu.current=FE,n=t(i,r)}while(Uo)}if(Tu.current=rc,e=kt!==null&&kt.next!==null,Os=0,Xt=kt=Mt=null,ic=!1,e)throw Error(ie(300));return n}function Xp(){var n=tl!==0;return tl=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Mt.memoizedState=Xt=n:Xt=Xt.next=n,Xt}function si(){if(kt===null){var n=Mt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var e=Xt===null?Mt.memoizedState:Xt.next;if(e!==null)Xt=e,kt=n;else{if(n===null)throw Error(ie(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Xt===null?Mt.memoizedState=Xt=n:Xt=Xt.next=n}return Xt}function nl(n,e){return typeof e=="function"?e(n):e}function mf(n){var e=si(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Os&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Mt.lanes|=c,ks|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,xi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Mt.lanes|=s,ks|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function gf(n){var e=si(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);xi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Wv(){}function Xv(n,e){var t=Mt,i=si(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,jp(qv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(t.flags|=2048,il(9,Yv.bind(null,t,i,r,e),void 0,null),jt===null)throw Error(ie(349));Os&30||jv(t,e,r)}return r}function jv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Yv(n,e,t,i){e.value=t,e.getSnapshot=i,$v(e)&&Kv(n)}function qv(n,e,t){return t(function(){$v(e)&&Kv(n)})}function $v(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!xi(n,t)}catch{return!0}}function Kv(n){var e=lr(n,1);e!==null&&vi(e,n,1,-1)}function Ig(n){var e=wi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:n},e.queue=n,n=n.dispatch=NE.bind(null,Mt,n),[e.memoizedState,n]}function il(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Zv(){return si().memoizedState}function wu(n,e,t,i){var r=wi();Mt.flags|=n,r.memoizedState=il(1|e,t,void 0,i===void 0?null:i)}function bc(n,e,t,i){var r=si();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&Gp(i,a.deps)){r.memoizedState=il(e,t,s,i);return}}Mt.flags|=n,r.memoizedState=il(1|e,t,s,i)}function Ug(n,e){return wu(8390656,8,n,e)}function jp(n,e){return bc(2048,8,n,e)}function Qv(n,e){return bc(4,2,n,e)}function Jv(n,e){return bc(4,4,n,e)}function ex(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function tx(n,e,t){return t=t!=null?t.concat([n]):null,bc(4,4,ex.bind(null,e,n),t)}function Yp(){}function nx(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Gp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ix(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Gp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function rx(n,e,t){return Os&21?(xi(t,e)||(t=uv(),Mt.lanes|=t,ks|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Sn=!0),n.memoizedState=t)}function DE(n,e){var t=it;it=t!==0&&4>t?t:4,n(!0);var i=pf.transition;pf.transition={};try{n(!1),e()}finally{it=t,pf.transition=i}}function sx(){return si().memoizedState}function LE(n,e,t){var i=Wr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ax(n))ox(e,t);else if(t=Vv(n,e,t,i),t!==null){var r=pn();vi(t,n,i,r),lx(t,e,i)}}function NE(n,e,t){var i=Wr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ax(n))ox(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,xi(o,a)){var l=e.interleaved;l===null?(r.next=r,kp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Vv(n,e,r,i),t!==null&&(r=pn(),vi(t,n,i,r),lx(t,e,i))}}function ax(n){var e=n.alternate;return n===Mt||e!==null&&e===Mt}function ox(n,e){Uo=ic=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function lx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Tp(n,t)}}var rc={readContext:ri,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},IE={readContext:ri,useCallback:function(n,e){return wi().memoizedState=[n,e===void 0?null:e],n},useContext:ri,useEffect:Ug,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,wu(4194308,4,ex.bind(null,e,n),t)},useLayoutEffect:function(n,e){return wu(4194308,4,n,e)},useInsertionEffect:function(n,e){return wu(4,2,n,e)},useMemo:function(n,e){var t=wi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=wi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=LE.bind(null,Mt,n),[i.memoizedState,n]},useRef:function(n){var e=wi();return n={current:n},e.memoizedState=n},useState:Ig,useDebugValue:Yp,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=Ig(!1),e=n[0];return n=DE.bind(null,n[1]),wi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Mt,r=wi();if(gt){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),jt===null)throw Error(ie(349));Os&30||jv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ug(qv.bind(null,i,s,n),[n]),i.flags|=2048,il(9,Yv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=wi(),e=jt.identifierPrefix;if(gt){var t=er,i=Ji;t=(i&~(1<<32-_i(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=tl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=PE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},UE={readContext:ri,useCallback:nx,useContext:ri,useEffect:jp,useImperativeHandle:tx,useInsertionEffect:Qv,useLayoutEffect:Jv,useMemo:ix,useReducer:mf,useRef:Zv,useState:function(){return mf(nl)},useDebugValue:Yp,useDeferredValue:function(n){var e=si();return rx(e,kt.memoizedState,n)},useTransition:function(){var n=mf(nl)[0],e=si().memoizedState;return[n,e]},useMutableSource:Wv,useSyncExternalStore:Xv,useId:sx,unstable_isNewReconciler:!1},FE={readContext:ri,useCallback:nx,useContext:ri,useEffect:jp,useImperativeHandle:tx,useInsertionEffect:Qv,useLayoutEffect:Jv,useMemo:ix,useReducer:gf,useRef:Zv,useState:function(){return gf(nl)},useDebugValue:Yp,useDeferredValue:function(n){var e=si();return kt===null?e.memoizedState=n:rx(e,kt.memoizedState,n)},useTransition:function(){var n=gf(nl)[0],e=si().memoizedState;return[n,e]},useMutableSource:Wv,useSyncExternalStore:Xv,useId:sx,unstable_isNewReconciler:!1};function fi(n,e){if(n&&n.defaultProps){e=Et({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function zd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Et({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Pc={isMounted:function(n){return(n=n._reactInternals)?Hs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=pn(),r=Wr(n),s=nr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Hr(n,s,r),e!==null&&(vi(e,n,r,i),Eu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=pn(),r=Wr(n),s=nr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Hr(n,s,r),e!==null&&(vi(e,n,r,i),Eu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=pn(),i=Wr(n),r=nr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Hr(n,r,i),e!==null&&(vi(e,n,i,t),Eu(e,n,i))}};function Fg(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!$o(t,i)||!$o(r,s):!0}function ux(n,e,t){var i=!1,r=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=En(e)?Us:cn.current,i=e.contextTypes,s=(i=i!=null)?Ua(n,r):Kr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Og(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Pc.enqueueReplaceState(e,e.state,null)}function Vd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Bp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=En(e)?Us:cn.current,r.context=Ua(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),tc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ba(n,e){try{var t="",i=e;do t+=cM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function _f(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Hd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var OE=typeof WeakMap=="function"?WeakMap:Map;function cx(n,e,t){t=nr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ac||(ac=!0,Qd=i),Hd(n,e)},t}function fx(n,e,t){t=nr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Hd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Hd(n,e),typeof i!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function kg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new OE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=ZE.bind(null,n,e,t),e.then(n,n))}function Bg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function zg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=nr(-1,1),e.tag=2,Hr(t,e,1))),t.lanes|=1),n)}var kE=mr.ReactCurrentOwner,Sn=!1;function dn(n,e,t,i){e.child=n===null?zv(e,null,t,i):Oa(e,n.child,t,i)}function Vg(n,e,t,i,r){t=t.render;var s=e.ref;return Ca(e,r),i=Wp(n,e,t,i,s,r),t=Xp(),n!==null&&!Sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ur(n,e,r)):(gt&&t&&Lp(e),e.flags|=1,dn(n,e,i,r),e.child)}function Hg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!tm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,dx(n,e,s,i,r)):(n=bu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:$o,t(a,i)&&n.ref===e.ref)return ur(n,e,r)}return e.flags|=1,n=Xr(s,i),n.ref=e.ref,n.return=e,e.child=n}function dx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if($o(s,i)&&n.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Sn=!0);else return e.lanes=n.lanes,ur(n,e,r)}return Gd(n,e,t,i,r)}function hx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(ya,In),In|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ht(ya,In),In|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ht(ya,In),In|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ht(ya,In),In|=i;return dn(n,e,r,t),e.child}function px(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Gd(n,e,t,i,r){var s=En(t)?Us:cn.current;return s=Ua(e,s),Ca(e,r),t=Wp(n,e,t,i,s,r),i=Xp(),n!==null&&!Sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ur(n,e,r)):(gt&&i&&Lp(e),e.flags|=1,dn(n,e,t,r),e.child)}function Gg(n,e,t,i,r){if(En(t)){var s=!0;Ku(e)}else s=!1;if(Ca(e,r),e.stateNode===null)Au(n,e),ux(e,t,i),Vd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=ri(u):(u=En(t)?Us:cn.current,u=Ua(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Og(e,a,i,u),Cr=!1;var f=e.memoizedState;a.state=f,tc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Mn.current||Cr?(typeof c=="function"&&(zd(e,t,c,i),l=e.memoizedState),(o=Cr||Fg(e,t,o,i,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Hv(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:fi(e.type,o),a.props=u,d=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=En(t)?Us:cn.current,l=Ua(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Og(e,a,i,l),Cr=!1,f=e.memoizedState,a.state=f,tc(e,i,a,r);var _=e.memoizedState;o!==d||f!==_||Mn.current||Cr?(typeof p=="function"&&(zd(e,t,p,i),_=e.memoizedState),(u=Cr||Fg(e,t,u,i,f,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Wd(n,e,t,i,s,r)}function Wd(n,e,t,i,r,s){px(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Rg(e,t,!1),ur(n,e,s);i=e.stateNode,kE.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Oa(e,n.child,null,s),e.child=Oa(e,null,o,s)):dn(n,e,o,s),e.memoizedState=i.state,r&&Rg(e,t,!0),e.child}function mx(n){var e=n.stateNode;e.pendingContext?Cg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Cg(n,e.context,!1),zp(n,e.containerInfo)}function Wg(n,e,t,i,r){return Fa(),Ip(r),e.flags|=256,dn(n,e,t,i),e.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function jd(n){return{baseLanes:n,cachePool:null,transitions:null}}function gx(n,e,t){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ht(xt,r&1),n===null)return kd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Nc(a,i,0,null),n=Ps(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=jd(t),e.memoizedState=Xd,n):qp(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return BE(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Xr(o,s):(s=Ps(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?jd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Xd,i}return s=n.child,n=s.sibling,i=Xr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function qp(n,e){return e=Nc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Wl(n,e,t,i){return i!==null&&Ip(i),Oa(e,n.child,null,t),n=qp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function BE(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=_f(Error(ie(422))),Wl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nc({mode:"visible",children:i.children},r,0,null),s=Ps(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Oa(e,n.child,null,a),e.child.memoizedState=jd(a),e.memoizedState=Xd,s);if(!(e.mode&1))return Wl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=_f(s,i,void 0),Wl(n,e,a,i)}if(o=(a&n.childLanes)!==0,Sn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,lr(n,r),vi(i,n,r,-1))}return em(),i=_f(Error(ie(421))),Wl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=QE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,kn=Vr(r.nextSibling),Vn=e,gt=!0,hi=null,n!==null&&(Zn[Qn++]=Ji,Zn[Qn++]=er,Zn[Qn++]=Fs,Ji=n.id,er=n.overflow,Fs=e),e=qp(e,i.children),e.flags|=4096,e)}function Xg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Bd(n.return,e,t)}function vf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function _x(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(n,e,i.children,t),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xg(n,t,e);else if(n.tag===19)Xg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ht(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&nc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),vf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&nc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}vf(e,!0,t,null,s);break;case"together":vf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Au(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ur(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ks|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=Xr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Xr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zE(n,e,t){switch(e.tag){case 3:mx(e),Fa();break;case 5:Gv(e);break;case 1:En(e.type)&&Ku(e);break;case 4:zp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Ju,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(xt,xt.current&1),e.flags|=128,null):t&e.child.childLanes?gx(n,e,t):(ht(xt,xt.current&1),n=ur(n,e,t),n!==null?n.sibling:null);ht(xt,xt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return _x(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,hx(n,e,t)}return ur(n,e,t)}var vx,Yd,xx,yx;vx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yd=function(){};xx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ws(Ii.current);var s=null;switch(t){case"input":r=md(n,r),i=md(n,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=vd(n,r),i=vd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=qu)}yd(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ho.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yx=function(n,e,t,i){t!==i&&(e.flags|=4)};function fo(n,e){if(!gt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function nn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function VE(n,e,t){var i=e.pendingProps;switch(Np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return En(e.type)&&$u(),nn(e),null;case 3:return i=e.stateNode,ka(),mt(Mn),mt(cn),Hp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Hl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hi!==null&&(th(hi),hi=null))),Yd(n,e),nn(e),null;case 5:Vp(e);var r=ws(el.current);if(t=e.type,n!==null&&e.stateNode!=null)xx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return nn(e),null}if(n=ws(Ii.current),Hl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ri]=e,i[Qo]=s,n=(e.mode&1)!==0,t){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)pt(wo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":eg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":ng(i,s),pt("invalid",i)}yd(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Vl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Vl(i.textContent,o,n),r=["children",""+o]):Ho.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(t){case"input":Nl(i),tg(i,s,!0);break;case"textarea":Nl(i),ig(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=q0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ri]=e,n[Qo]=i,vx(n,e,!1,!1),e.stateNode=n;e:{switch(a=Sd(t,i),t){case"dialog":pt("cancel",n),pt("close",n),r=i;break;case"iframe":case"object":case"embed":pt("load",n),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)pt(wo[r],n);r=i;break;case"source":pt("error",n),r=i;break;case"img":case"image":case"link":pt("error",n),pt("load",n),r=i;break;case"details":pt("toggle",n),r=i;break;case"input":eg(n,i),r=md(n,i),pt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",n);break;case"textarea":ng(n,i),r=vd(n,i),pt("invalid",n);break;default:r=i}yd(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Z0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Go(n,l):typeof l=="number"&&Go(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",n):l!=null&&vp(n,s,l,a))}switch(t){case"input":Nl(n),tg(n,i,!1);break;case"textarea":Nl(n),ig(n);break;case"option":i.value!=null&&n.setAttribute("value",""+$r(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ea(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ea(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=qu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(n&&e.stateNode!=null)yx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=ws(el.current),ws(Ii.current),Hl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ri]=e,(s=i.nodeValue!==t)&&(n=Vn,n!==null))switch(n.tag){case 3:Vl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ri]=e,e.stateNode=i}return nn(e),null;case 13:if(mt(xt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(gt&&kn!==null&&e.mode&1&&!(e.flags&128))kv(),Fa(),e.flags|=98560,s=!1;else if(s=Hl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Ri]=e}else Fa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else hi!==null&&(th(hi),hi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||xt.current&1?Bt===0&&(Bt=3):em())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return ka(),Yd(n,e),n===null&&Ko(e.stateNode.containerInfo),nn(e),null;case 10:return Op(e.type._context),nn(e),null;case 17:return En(e.type)&&$u(),nn(e),null;case 19:if(mt(xt),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)fo(s,!1);else{if(Bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=nc(n),a!==null){for(e.flags|=128,fo(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ht(xt,xt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Pt()>za&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(n=nc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return nn(e),null}else 2*Pt()-s.renderingStartTime>za&&t!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,t=xt.current,ht(xt,i?t&1|2:t&1),e):(nn(e),null);case 22:case 23:return Jp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function HE(n,e){switch(Np(e),e.tag){case 1:return En(e.type)&&$u(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ka(),mt(Mn),mt(cn),Hp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Vp(e),null;case 13:if(mt(xt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Fa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return mt(xt),null;case 4:return ka(),null;case 10:return Op(e.type._context),null;case 22:case 23:return Jp(),null;case 24:return null;default:return null}}var Xl=!1,an=!1,GE=typeof WeakSet=="function"?WeakSet:Set,_e=null;function xa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){wt(n,e,i)}else t.current=null}function qd(n,e,t){try{t()}catch(i){wt(n,e,i)}}var jg=!1;function WE(n,e){if(Dd=Xu,n=wv(),Dp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(o=a),f===s&&++c===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ld={focusedElem:n,selectionRange:t},Xu=!1,_e=e;_e!==null;)if(e=_e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_e=n;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:fi(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){wt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}return _=jg,jg=!1,_}function Fo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&qd(e,t,s)}r=r.next}while(r!==i)}}function Dc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function $d(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Sx(n){var e=n.alternate;e!==null&&(n.alternate=null,Sx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ri],delete e[Qo],delete e[Ud],delete e[AE],delete e[CE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mx(n){return n.tag===5||n.tag===3||n.tag===4}function Yg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=qu));else if(i!==4&&(n=n.child,n!==null))for(Kd(n,e,t),n=n.sibling;n!==null;)Kd(n,e,t),n=n.sibling}function Zd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Zd(n,e,t),n=n.sibling;n!==null;)Zd(n,e,t),n=n.sibling}var $t=null,di=!1;function xr(n,e,t){for(t=t.child;t!==null;)Ex(n,e,t),t=t.sibling}function Ex(n,e,t){if(Ni&&typeof Ni.onCommitFiberUnmount=="function")try{Ni.onCommitFiberUnmount(Ec,t)}catch{}switch(t.tag){case 5:an||xa(t,e);case 6:var i=$t,r=di;$t=null,xr(n,e,t),$t=i,di=r,$t!==null&&(di?(n=$t,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):$t.removeChild(t.stateNode));break;case 18:$t!==null&&(di?(n=$t,t=t.stateNode,n.nodeType===8?ff(n.parentNode,t):n.nodeType===1&&ff(n,t),Yo(n)):ff($t,t.stateNode));break;case 4:i=$t,r=di,$t=t.stateNode.containerInfo,di=!0,xr(n,e,t),$t=i,di=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&qd(t,e,a),r=r.next}while(r!==i)}xr(n,e,t);break;case 1:if(!an&&(xa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){wt(t,e,o)}xr(n,e,t);break;case 21:xr(n,e,t);break;case 22:t.mode&1?(an=(i=an)||t.memoizedState!==null,xr(n,e,t),an=i):xr(n,e,t);break;default:xr(n,e,t)}}function qg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new GE),e.forEach(function(i){var r=JE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function oi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:$t=o.stateNode,di=!1;break e;case 3:$t=o.stateNode.containerInfo,di=!0;break e;case 4:$t=o.stateNode.containerInfo,di=!0;break e}o=o.return}if($t===null)throw Error(ie(160));Ex(s,a,r),$t=null,di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tx(e,n),e=e.sibling}function Tx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(e,n),Mi(n),i&4){try{Fo(3,n,n.return),Dc(3,n)}catch(v){wt(n,n.return,v)}try{Fo(5,n,n.return)}catch(v){wt(n,n.return,v)}}break;case 1:oi(e,n),Mi(n),i&512&&t!==null&&xa(t,t.return);break;case 5:if(oi(e,n),Mi(n),i&512&&t!==null&&xa(t,t.return),n.flags&32){var r=n.stateNode;try{Go(r,"")}catch(v){wt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&j0(r,s),Sd(o,a);var u=Sd(o,s);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Z0(r,d):c==="dangerouslySetInnerHTML"?$0(r,d):c==="children"?Go(r,d):vp(r,c,d,u)}switch(o){case"input":gd(r,s);break;case"textarea":Y0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ea(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ea(r,!!s.multiple,s.defaultValue,!0):Ea(r,!!s.multiple,s.multiple?[]:"",!1))}r[Qo]=s}catch(v){wt(n,n.return,v)}}break;case 6:if(oi(e,n),Mi(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){wt(n,n.return,v)}}break;case 3:if(oi(e,n),Mi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(v){wt(n,n.return,v)}break;case 4:oi(e,n),Mi(n);break;case 13:oi(e,n),Mi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zp=Pt())),i&4&&qg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(an=(u=an)||c,oi(e,n),an=u):oi(e,n),Mi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(_e=n,c=n.child;c!==null;){for(d=_e=c;_e!==null;){switch(f=_e,p=f.child,f.tag){case 0:case 11:case 14:case 15:Fo(4,f,f.return);break;case 1:xa(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){wt(i,t,v)}}break;case 5:xa(f,f.return);break;case 22:if(f.memoizedState!==null){Kg(d);continue}}p!==null?(p.return=f,_e=p):Kg(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=K0("display",a))}catch(v){wt(n,n.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){wt(n,n.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:oi(e,n),Mi(n),i&4&&qg(n);break;case 21:break;default:oi(e,n),Mi(n)}}function Mi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Mx(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var s=Yg(n);Zd(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Yg(n);Kd(n,o,a);break;default:throw Error(ie(161))}}catch(l){wt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function XE(n,e,t){_e=n,wx(n)}function wx(n,e,t){for(var i=(n.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Xl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||an;o=Xl;var u=an;if(Xl=a,(an=l)&&!u)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?Zg(r):l!==null?(l.return=a,_e=l):Zg(r);for(;s!==null;)_e=s,wx(s),s=s.sibling;_e=r,Xl=o,an=u}$g(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):$g(n)}}function $g(n){for(;_e!==null;){var e=_e;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:fi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ng(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Ng(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Yo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}an||e.flags&512&&$d(e)}catch(f){wt(e,e.return,f)}}if(e===n){_e=null;break}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}}function Kg(n){for(;_e!==null;){var e=_e;if(e===n){_e=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_e=t;break}_e=e.return}}function Zg(n){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Dc(4,e)}catch(l){wt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{$d(e)}catch(l){wt(e,s,l)}break;case 5:var a=e.return;try{$d(e)}catch(l){wt(e,a,l)}}}catch(l){wt(e,e.return,l)}if(e===n){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var jE=Math.ceil,sc=mr.ReactCurrentDispatcher,$p=mr.ReactCurrentOwner,ii=mr.ReactCurrentBatchConfig,$e=0,jt=null,Ut=null,Zt=0,In=0,ya=ns(0),Bt=0,rl=null,ks=0,Lc=0,Kp=0,Oo=null,yn=null,Zp=0,za=1/0,qi=null,ac=!1,Qd=null,Gr=null,jl=!1,Lr=null,oc=0,ko=0,Jd=null,Cu=-1,Ru=0;function pn(){return $e&6?Pt():Cu!==-1?Cu:Cu=Pt()}function Wr(n){return n.mode&1?$e&2&&Zt!==0?Zt&-Zt:bE.transition!==null?(Ru===0&&(Ru=uv()),Ru):(n=it,n!==0||(n=window.event,n=n===void 0?16:gv(n.type)),n):1}function vi(n,e,t,i){if(50<ko)throw ko=0,Jd=null,Error(ie(185));vl(n,t,i),(!($e&2)||n!==jt)&&(n===jt&&(!($e&2)&&(Lc|=t),Bt===4&&br(n,Zt)),Tn(n,i),t===1&&$e===0&&!(e.mode&1)&&(za=Pt()+500,Rc&&is()))}function Tn(n,e){var t=n.callbackNode;bM(n,e);var i=Wu(n,n===jt?Zt:0);if(i===0)t!==null&&ag(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&ag(t),e===1)n.tag===0?RE(Qg.bind(null,n)):Uv(Qg.bind(null,n)),TE(function(){!($e&6)&&is()}),t=null;else{switch(cv(i)){case 1:t=Ep;break;case 4:t=ov;break;case 16:t=Gu;break;case 536870912:t=lv;break;default:t=Gu}t=Nx(t,Ax.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ax(n,e){if(Cu=-1,Ru=0,$e&6)throw Error(ie(327));var t=n.callbackNode;if(Ra()&&n.callbackNode!==t)return null;var i=Wu(n,n===jt?Zt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=lc(n,i);else{e=i;var r=$e;$e|=2;var s=Rx();(jt!==n||Zt!==e)&&(qi=null,za=Pt()+500,bs(n,e));do try{$E();break}catch(o){Cx(n,o)}while(!0);Fp(),sc.current=s,$e=r,Ut!==null?e=0:(jt=null,Zt=0,e=Bt)}if(e!==0){if(e===2&&(r=Ad(n),r!==0&&(i=r,e=eh(n,r))),e===1)throw t=rl,bs(n,0),br(n,i),Tn(n,Pt()),t;if(e===6)br(n,i);else{if(r=n.current.alternate,!(i&30)&&!YE(r)&&(e=lc(n,i),e===2&&(s=Ad(n),s!==0&&(i=s,e=eh(n,s))),e===1))throw t=rl,bs(n,0),br(n,i),Tn(n,Pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:_s(n,yn,qi);break;case 3:if(br(n,i),(i&130023424)===i&&(e=Zp+500-Pt(),10<e)){if(Wu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){pn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Id(_s.bind(null,n,yn,qi),e);break}_s(n,yn,qi);break;case 4:if(br(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-_i(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jE(i/1960))-i,10<i){n.timeoutHandle=Id(_s.bind(null,n,yn,qi),i);break}_s(n,yn,qi);break;case 5:_s(n,yn,qi);break;default:throw Error(ie(329))}}}return Tn(n,Pt()),n.callbackNode===t?Ax.bind(null,n):null}function eh(n,e){var t=Oo;return n.current.memoizedState.isDehydrated&&(bs(n,e).flags|=256),n=lc(n,e),n!==2&&(e=yn,yn=t,e!==null&&th(e)),n}function th(n){yn===null?yn=n:yn.push.apply(yn,n)}function YE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(n,e){for(e&=~Kp,e&=~Lc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-_i(e),i=1<<t;n[t]=-1,e&=~i}}function Qg(n){if($e&6)throw Error(ie(327));Ra();var e=Wu(n,0);if(!(e&1))return Tn(n,Pt()),null;var t=lc(n,e);if(n.tag!==0&&t===2){var i=Ad(n);i!==0&&(e=i,t=eh(n,i))}if(t===1)throw t=rl,bs(n,0),br(n,e),Tn(n,Pt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,_s(n,yn,qi),Tn(n,Pt()),null}function Qp(n,e){var t=$e;$e|=1;try{return n(e)}finally{$e=t,$e===0&&(za=Pt()+500,Rc&&is())}}function Bs(n){Lr!==null&&Lr.tag===0&&!($e&6)&&Ra();var e=$e;$e|=1;var t=ii.transition,i=it;try{if(ii.transition=null,it=1,n)return n()}finally{it=i,ii.transition=t,$e=e,!($e&6)&&is()}}function Jp(){In=ya.current,mt(ya)}function bs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,EE(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(Np(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$u();break;case 3:ka(),mt(Mn),mt(cn),Hp();break;case 5:Vp(i);break;case 4:ka();break;case 13:mt(xt);break;case 19:mt(xt);break;case 10:Op(i.type._context);break;case 22:case 23:Jp()}t=t.return}if(jt=n,Ut=n=Xr(n.current,null),Zt=In=e,Bt=0,rl=null,Kp=Lc=ks=0,yn=Oo=null,Ts!==null){for(e=0;e<Ts.length;e++)if(t=Ts[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Ts=null}return n}function Cx(n,e){do{var t=Ut;try{if(Fp(),Tu.current=rc,ic){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ic=!1}if(Os=0,Xt=kt=Mt=null,Uo=!1,tl=0,$p.current=null,t===null||t.return===null){Bt=1,rl=e,Ut=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Bg(a);if(p!==null){p.flags&=-257,zg(p,a,o,s,e),p.mode&1&&kg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){kg(s,u,e),em();break e}l=Error(ie(426))}}else if(gt&&o.mode&1){var m=Bg(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),zg(m,a,o,s,e),Ip(Ba(l,o));break e}}s=l=Ba(l,o),Bt!==4&&(Bt=2),Oo===null?Oo=[s]:Oo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=cx(s,l,e);Lg(s,h);break e;case 1:o=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Gr===null||!Gr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=fx(s,o,e);Lg(s,S);break e}}s=s.return}while(s!==null)}Px(t)}catch(T){e=T,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function Rx(){var n=sc.current;return sc.current=rc,n===null?rc:n}function em(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),jt===null||!(ks&268435455)&&!(Lc&268435455)||br(jt,Zt)}function lc(n,e){var t=$e;$e|=2;var i=Rx();(jt!==n||Zt!==e)&&(qi=null,bs(n,e));do try{qE();break}catch(r){Cx(n,r)}while(!0);if(Fp(),$e=t,sc.current=i,Ut!==null)throw Error(ie(261));return jt=null,Zt=0,Bt}function qE(){for(;Ut!==null;)bx(Ut)}function $E(){for(;Ut!==null&&!yM();)bx(Ut)}function bx(n){var e=Lx(n.alternate,n,In);n.memoizedProps=n.pendingProps,e===null?Px(n):Ut=e,$p.current=null}function Px(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=HE(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Bt=6,Ut=null;return}}else if(t=VE(t,e,In),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Bt===0&&(Bt=5)}function _s(n,e,t){var i=it,r=ii.transition;try{ii.transition=null,it=1,KE(n,e,t,i)}finally{ii.transition=r,it=i}return null}function KE(n,e,t,i){do Ra();while(Lr!==null);if($e&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(PM(n,s),n===jt&&(Ut=jt=null,Zt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jl||(jl=!0,Nx(Gu,function(){return Ra(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var a=it;it=1;var o=$e;$e|=4,$p.current=null,WE(n,t),Tx(t,n),gE(Ld),Xu=!!Dd,Ld=Dd=null,n.current=t,XE(t),SM(),$e=o,it=a,ii.transition=s}else n.current=t;if(jl&&(jl=!1,Lr=n,oc=r),s=n.pendingLanes,s===0&&(Gr=null),TM(t.stateNode),Tn(n,Pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ac)throw ac=!1,n=Qd,Qd=null,n;return oc&1&&n.tag!==0&&Ra(),s=n.pendingLanes,s&1?n===Jd?ko++:(ko=0,Jd=n):ko=0,is(),null}function Ra(){if(Lr!==null){var n=cv(oc),e=ii.transition,t=it;try{if(ii.transition=null,it=16>n?16:n,Lr===null)var i=!1;else{if(n=Lr,Lr=null,oc=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,_e=n.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:Fo(8,c,s)}var d=c.child;if(d!==null)d.return=c,_e=d;else for(;_e!==null;){c=_e;var f=c.sibling,p=c.return;if(Sx(c),c===u){_e=null;break}if(f!==null){f.return=p,_e=f;break}_e=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,_e=h;break e}_e=s.return}}var g=n.current;for(_e=g;_e!==null;){a=_e;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,_e=x;else e:for(a=g;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Dc(9,o)}}catch(T){wt(o,o.return,T)}if(o===a){_e=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,_e=S;break e}_e=o.return}}if($e=r,is(),Ni&&typeof Ni.onPostCommitFiberRoot=="function")try{Ni.onPostCommitFiberRoot(Ec,n)}catch{}i=!0}return i}finally{it=t,ii.transition=e}}return!1}function Jg(n,e,t){e=Ba(t,e),e=cx(n,e,1),n=Hr(n,e,1),e=pn(),n!==null&&(vl(n,1,e),Tn(n,e))}function wt(n,e,t){if(n.tag===3)Jg(n,n,t);else for(;e!==null;){if(e.tag===3){Jg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gr===null||!Gr.has(i))){n=Ba(t,n),n=fx(e,n,1),e=Hr(e,n,1),n=pn(),e!==null&&(vl(e,1,n),Tn(e,n));break}}e=e.return}}function ZE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=pn(),n.pingedLanes|=n.suspendedLanes&t,jt===n&&(Zt&t)===t&&(Bt===4||Bt===3&&(Zt&130023424)===Zt&&500>Pt()-Zp?bs(n,0):Kp|=t),Tn(n,e)}function Dx(n,e){e===0&&(n.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var t=pn();n=lr(n,e),n!==null&&(vl(n,e,t),Tn(n,t))}function QE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Dx(n,t)}function JE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Dx(n,t)}var Lx;Lx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Sn=!1,zE(n,e,t);Sn=!!(n.flags&131072)}else Sn=!1,gt&&e.flags&1048576&&Fv(e,Qu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Au(n,e),n=e.pendingProps;var r=Ua(e,cn.current);Ca(e,t),r=Wp(null,e,i,n,r,t);var s=Xp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,Ku(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bp(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,Vd(e,i,n,t),e=Wd(null,e,i,!0,s,t)):(e.tag=0,gt&&s&&Lp(e),dn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Au(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=t1(i),n=fi(i,n),r){case 0:e=Gd(null,e,i,n,t);break e;case 1:e=Gg(null,e,i,n,t);break e;case 11:e=Vg(null,e,i,n,t);break e;case 14:e=Hg(null,e,i,fi(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Gd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Gg(n,e,i,r,t);case 3:e:{if(mx(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Hv(n,e),tc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ba(Error(ie(423)),e),e=Wg(n,e,i,t,r);break e}else if(i!==r){r=Ba(Error(ie(424)),e),e=Wg(n,e,i,t,r);break e}else for(kn=Vr(e.stateNode.containerInfo.firstChild),Vn=e,gt=!0,hi=null,t=zv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Fa(),i===r){e=ur(n,e,t);break e}dn(n,e,i,t)}e=e.child}return e;case 5:return Gv(e),n===null&&kd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Nd(i,r)?a=null:s!==null&&Nd(i,s)&&(e.flags|=32),px(n,e),dn(n,e,a,t),e.child;case 6:return n===null&&kd(e),null;case 13:return gx(n,e,t);case 4:return zp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Oa(e,null,i,t):dn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Vg(n,e,i,r,t);case 7:return dn(n,e,e.pendingProps,t),e.child;case 8:return dn(n,e,e.pendingProps.children,t),e.child;case 12:return dn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(Ju,i._currentValue),i._currentValue=a,s!==null)if(xi(s.value,a)){if(s.children===r.children&&!Mn.current){e=ur(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=nr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Bd(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Bd(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ca(e,t),r=ri(r),i=i(r),e.flags|=1,dn(n,e,i,t),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),Hg(n,e,i,r,t);case 15:return dx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Au(n,e),e.tag=1,En(i)?(n=!0,Ku(e)):n=!1,Ca(e,t),ux(e,i,r),Vd(e,i,r,t),Wd(null,e,i,!0,n,t);case 19:return _x(n,e,t);case 22:return hx(n,e,t)}throw Error(ie(156,e.tag))};function Nx(n,e){return av(n,e)}function e1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,e,t,i){return new e1(n,e,t,i)}function tm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function t1(n){if(typeof n=="function")return tm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===yp)return 11;if(n===Sp)return 14}return 2}function Xr(n,e){var t=n.alternate;return t===null?(t=ei(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function bu(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")tm(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ca:return Ps(t.children,r,s,e);case xp:a=8,r|=8;break;case fd:return n=ei(12,t,e,r|2),n.elementType=fd,n.lanes=s,n;case dd:return n=ei(13,t,e,r),n.elementType=dd,n.lanes=s,n;case hd:return n=ei(19,t,e,r),n.elementType=hd,n.lanes=s,n;case G0:return Nc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V0:a=10;break e;case H0:a=9;break e;case yp:a=11;break e;case Sp:a=14;break e;case Ar:a=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=ei(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ps(n,e,t,i){return n=ei(7,n,i,e),n.lanes=t,n}function Nc(n,e,t,i){return n=ei(22,n,i,e),n.elementType=G0,n.lanes=t,n.stateNode={isHidden:!1},n}function xf(n,e,t){return n=ei(6,n,null,e),n.lanes=t,n}function yf(n,e,t){return e=ei(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function n1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nm(n,e,t,i,r,s,a,o,l){return n=new n1(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bp(s),n}function i1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ua,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ix(n){if(!n)return Kr;n=n._reactInternals;e:{if(Hs(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(En(t))return Iv(n,t,e)}return e}function Ux(n,e,t,i,r,s,a,o,l){return n=nm(t,i,!0,n,r,s,a,o,l),n.context=Ix(null),t=n.current,i=pn(),r=Wr(t),s=nr(i,r),s.callback=e??null,Hr(t,s,r),n.current.lanes=r,vl(n,r,i),Tn(n,i),n}function Ic(n,e,t,i){var r=e.current,s=pn(),a=Wr(r);return t=Ix(t),e.context===null?e.context=t:e.pendingContext=t,e=nr(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Hr(r,e,a),n!==null&&(vi(n,r,a,s),Eu(n,r,a)),a}function uc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function e_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function im(n,e){e_(n,e),(n=n.alternate)&&e_(n,e)}function r1(){return null}var Fx=typeof reportError=="function"?reportError:function(n){console.error(n)};function rm(n){this._internalRoot=n}Uc.prototype.render=rm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));Ic(n,e,null,null)};Uc.prototype.unmount=rm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Bs(function(){Ic(null,n,null,null)}),e[or]=null}};function Uc(n){this._internalRoot=n}Uc.prototype.unstable_scheduleHydration=function(n){if(n){var e=hv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Rr.length&&e!==0&&e<Rr[t].priority;t++);Rr.splice(t,0,n),t===0&&mv(n)}};function sm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function t_(){}function s1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=uc(a);s.call(u)}}var a=Ux(e,i,n,0,null,!1,!1,"",t_);return n._reactRootContainer=a,n[or]=a.current,Ko(n.nodeType===8?n.parentNode:n),Bs(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=uc(l);o.call(u)}}var l=nm(n,0,!1,null,null,!1,!1,"",t_);return n._reactRootContainer=l,n[or]=l.current,Ko(n.nodeType===8?n.parentNode:n),Bs(function(){Ic(e,l,t,i)}),l}function Oc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=uc(a);o.call(l)}}Ic(e,a,n,r)}else a=s1(t,e,n,r,i);return uc(a)}fv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=To(e.pendingLanes);t!==0&&(Tp(e,t|1),Tn(e,Pt()),!($e&6)&&(za=Pt()+500,is()))}break;case 13:Bs(function(){var i=lr(n,1);if(i!==null){var r=pn();vi(i,n,1,r)}}),im(n,1)}};wp=function(n){if(n.tag===13){var e=lr(n,134217728);if(e!==null){var t=pn();vi(e,n,134217728,t)}im(n,134217728)}};dv=function(n){if(n.tag===13){var e=Wr(n),t=lr(n,e);if(t!==null){var i=pn();vi(t,n,e,i)}im(n,e)}};hv=function(){return it};pv=function(n,e){var t=it;try{return it=n,e()}finally{it=t}};Ed=function(n,e,t){switch(e){case"input":if(gd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Cc(i);if(!r)throw Error(ie(90));X0(i),gd(i,r)}}}break;case"textarea":Y0(n,t);break;case"select":e=t.value,e!=null&&Ea(n,!!t.multiple,e,!1)}};ev=Qp;tv=Bs;var a1={usingClientEntryPoint:!1,Events:[yl,pa,Cc,Q0,J0,Qp]},ho={findFiberByHostInstance:Es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o1={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=rv(n),n===null?null:n.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||r1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Ec=Yl.inject(o1),Ni=Yl}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1;Yn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sm(e))throw Error(ie(200));return i1(n,e,null,t)};Yn.createRoot=function(n,e){if(!sm(n))throw Error(ie(299));var t=!1,i="",r=Fx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=nm(n,1,!1,null,null,t,!1,i,r),n[or]=e.current,Ko(n.nodeType===8?n.parentNode:n),new rm(e)};Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=rv(e),n=n===null?null:n.stateNode,n};Yn.flushSync=function(n){return Bs(n)};Yn.hydrate=function(n,e,t){if(!Fc(e))throw Error(ie(200));return Oc(null,n,e,!0,t)};Yn.hydrateRoot=function(n,e,t){if(!sm(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Fx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=Ux(e,null,n,1,t??null,r,!1,s,a),n[or]=e.current,Ko(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Uc(e)};Yn.render=function(n,e,t){if(!Fc(e))throw Error(ie(200));return Oc(null,n,e,!1,t)};Yn.unmountComponentAtNode=function(n){if(!Fc(n))throw Error(ie(40));return n._reactRootContainer?(Bs(function(){Oc(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1};Yn.unstable_batchedUpdates=Qp;Yn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Fc(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return Oc(n,e,t,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function Ox(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ox)}catch(n){console.error(n)}}Ox(),O0.exports=Yn;var l1=O0.exports,n_=l1;ud.createRoot=n_.createRoot,ud.hydrateRoot=n_.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},sl.apply(this,arguments)}var Nr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Nr||(Nr={}));const i_="popstate";function u1(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return nh("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:cc(r)}return f1(e,t,null,n)}function Ft(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function am(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function c1(){return Math.random().toString(36).substr(2,8)}function r_(n,e){return{usr:n.state,key:n.key,idx:e}}function nh(n,e,t,i){return t===void 0&&(t=null),sl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?to(e):e,{state:t,key:e&&e.key||i||c1()})}function cc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function to(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function f1(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Nr.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(sl({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){o=Nr.Pop;let m=c(),h=m==null?null:m-u;u=m,l&&l({action:o,location:v.location,delta:h})}function f(m,h){o=Nr.Push;let g=nh(v.location,m,h);u=c()+1;let x=r_(g,u),S=v.createHref(g);try{a.pushState(x,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(S)}s&&l&&l({action:o,location:v.location,delta:1})}function p(m,h){o=Nr.Replace;let g=nh(v.location,m,h);u=c();let x=r_(g,u),S=v.createHref(g);a.replaceState(x,"",S),s&&l&&l({action:o,location:v.location,delta:0})}function _(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:cc(m);return g=g.replace(/ $/,"%20"),Ft(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let v={get action(){return o},get location(){return n(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(i_,d),l=m,()=>{r.removeEventListener(i_,d),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return a.go(m)}};return v}var s_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(s_||(s_={}));function d1(n,e,t){return t===void 0&&(t="/"),h1(n,e,t)}function h1(n,e,t,i){let r=typeof e=="string"?to(e):e,s=om(r.pathname||"/",t);if(s==null)return null;let a=kx(n);p1(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let u=A1(s);o=E1(a[l],u)}return o}function kx(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Ft(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=jr([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(Ft(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kx(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:S1(u,s.index),routesMeta:c})};return n.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Bx(s.path))r(s,a,l)}),e}function Bx(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Bx(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>n.startsWith("/")&&l===""?"/":l)}function p1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:M1(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const m1=/^:[\w-]+$/,g1=3,_1=2,v1=1,x1=10,y1=-2,a_=n=>n==="*";function S1(n,e){let t=n.split("/"),i=t.length;return t.some(a_)&&(i+=y1),e&&(i+=_1),t.filter(r=>!a_(r)).reduce((r,s)=>r+(m1.test(s)?g1:s===""?v1:x1),i)}function M1(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function E1(n,e,t){let{routesMeta:i}=n,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=T1({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:jr([s,d.pathname]),pathnameBase:D1(jr([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=jr([s,d.pathnameBase]))}return a}function T1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=w1(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let v=o[d]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=o[d];return p&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:n}}function w1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),am(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function A1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return am(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function om(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const C1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R1=n=>C1.test(n);function b1(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?to(n):n,s;if(t)if(R1(t))s=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),am(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?s=o_(t.substring(1),"/"):s=o_(t,e)}else s=e;return{pathname:s,search:L1(i),hash:N1(r)}}function o_(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Sf(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function P1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function zx(n,e){let t=P1(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Vx(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=to(n):(r=sl({},n),Ft(!r.pathname||!r.pathname.includes("?"),Sf("?","pathname","search",r)),Ft(!r.pathname||!r.pathname.includes("#"),Sf("#","pathname","hash",r)),Ft(!r.search||!r.search.includes("#"),Sf("#","search","hash",r)));let s=n===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let d=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=b1(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const jr=n=>n.join("/").replace(/\/\/+/g,"/"),D1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),L1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,N1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function I1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Hx=["post","put","patch","delete"];new Set(Hx);const U1=["get",...Hx];new Set(U1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},al.apply(this,arguments)}const lm=ne.createContext(null),F1=ne.createContext(null),Gs=ne.createContext(null),kc=ne.createContext(null),rs=ne.createContext({outlet:null,matches:[],isDataRoute:!1}),Gx=ne.createContext(null);function O1(n,e){let{relative:t}=e===void 0?{}:e;Ml()||Ft(!1);let{basename:i,navigator:r}=ne.useContext(Gs),{hash:s,pathname:a,search:o}=Xx(n,{relative:t}),l=a;return i!=="/"&&(l=a==="/"?i:jr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Ml(){return ne.useContext(kc)!=null}function El(){return Ml()||Ft(!1),ne.useContext(kc).location}function Wx(n){ne.useContext(Gs).static||ne.useLayoutEffect(n)}function k1(){let{isDataRoute:n}=ne.useContext(rs);return n?J1():B1()}function B1(){Ml()||Ft(!1);let n=ne.useContext(lm),{basename:e,future:t,navigator:i}=ne.useContext(Gs),{matches:r}=ne.useContext(rs),{pathname:s}=El(),a=JSON.stringify(zx(r,t.v7_relativeSplatPath)),o=ne.useRef(!1);return Wx(()=>{o.current=!0}),ne.useCallback(function(u,c){if(c===void 0&&(c={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let d=Vx(u,JSON.parse(a),s,c.relative==="path");n==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:jr([e,d.pathname])),(c.replace?i.replace:i.push)(d,c.state,c)},[e,i,a,s,n])}const z1=ne.createContext(null);function V1(n){let e=ne.useContext(rs).outlet;return e&&ne.createElement(z1.Provider,{value:n},e)}function Xx(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=ne.useContext(Gs),{matches:r}=ne.useContext(rs),{pathname:s}=El(),a=JSON.stringify(zx(r,i.v7_relativeSplatPath));return ne.useMemo(()=>Vx(n,JSON.parse(a),s,t==="path"),[n,a,s,t])}function H1(n,e){return G1(n,e)}function G1(n,e,t,i){Ml()||Ft(!1);let{navigator:r}=ne.useContext(Gs),{matches:s}=ne.useContext(rs),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=El(),c;if(e){var d;let m=typeof e=="string"?to(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||Ft(!1),c=m}else c=u;let f=c.pathname||"/",p=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=d1(n,{pathname:p}),v=q1(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:jr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:jr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,i);return e&&v?ne.createElement(kc.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Nr.Pop}},v):v}function W1(){let n=Q1(),e=I1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},e),t?ne.createElement("pre",{style:r},t):null,null)}const X1=ne.createElement(W1,null);class j1 extends ne.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ne.createElement(rs.Provider,{value:this.props.routeContext},ne.createElement(Gx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y1(n){let{routeContext:e,match:t,children:i}=n,r=ne.useContext(lm);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ne.createElement(rs.Provider,{value:e},i)}function q1(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=(r=t)==null?void 0:r.errors;if(o!=null){let c=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);c>=0||Ft(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=t,_=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,f)=>{let p,_=!1,v=null,m=null;t&&(p=o&&d.route.id?o[d.route.id]:void 0,v=d.route.errorElement||X1,l&&(u<0&&f===0?(eT("route-fallback"),_=!0,m=null):u===f&&(_=!0,m=d.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,f+1)),g=()=>{let x;return p?x=v:_?x=m:d.route.Component?x=ne.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=c,ne.createElement(Y1,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:t!=null},children:x})};return t&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?ne.createElement(j1,{location:t.location,revalidation:t.revalidation,component:v,error:p,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var jx=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(jx||{}),Yx=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Yx||{});function $1(n){let e=ne.useContext(lm);return e||Ft(!1),e}function K1(n){let e=ne.useContext(F1);return e||Ft(!1),e}function Z1(n){let e=ne.useContext(rs);return e||Ft(!1),e}function qx(n){let e=Z1(),t=e.matches[e.matches.length-1];return t.route.id||Ft(!1),t.route.id}function Q1(){var n;let e=ne.useContext(Gx),t=K1(),i=qx();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function J1(){let{router:n}=$1(jx.UseNavigateStable),e=qx(Yx.UseNavigateStable),t=ne.useRef(!1);return Wx(()=>{t.current=!0}),ne.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,al({fromRouteId:e},s)))},[n,e])}const l_={};function eT(n,e,t){l_[n]||(l_[n]=!0)}function tT(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function nT(n){return V1(n.context)}function vs(n){Ft(!1)}function iT(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Nr.Pop,navigator:s,static:a=!1,future:o}=n;Ml()&&Ft(!1);let l=e.replace(/^\/*/,"/"),u=ne.useMemo(()=>({basename:l,navigator:s,static:a,future:al({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=to(i));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:_="default"}=i,v=ne.useMemo(()=>{let m=om(c,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:p,key:_},navigationType:r}},[l,c,d,f,p,_,r]);return v==null?null:ne.createElement(Gs.Provider,{value:u},ne.createElement(kc.Provider,{children:t,value:v}))}function rT(n){let{children:e,location:t}=n;return H1(ih(e),t)}new Promise(()=>{});function ih(n,e){e===void 0&&(e=[]);let t=[];return ne.Children.forEach(n,(i,r)=>{if(!ne.isValidElement(i))return;let s=[...e,r];if(i.type===ne.Fragment){t.push.apply(t,ih(i.props.children,s));return}i.type!==vs&&Ft(!1),!i.props.index||!i.props.children||Ft(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=ih(i.props.children,s)),t.push(a)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rh(){return rh=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},rh.apply(this,arguments)}function sT(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function aT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function oT(n,e){return n.button===0&&(!e||e==="_self")&&!aT(n)}const lT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],uT="6";try{window.__reactRouterVersion=uT}catch{}const cT="startTransition",u_=ZS[cT];function fT(n){let{basename:e,children:t,future:i,window:r}=n,s=ne.useRef();s.current==null&&(s.current=u1({window:r,v5Compat:!0}));let a=s.current,[o,l]=ne.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},c=ne.useCallback(d=>{u&&u_?u_(()=>l(d)):l(d)},[l,u]);return ne.useLayoutEffect(()=>a.listen(c),[a,c]),ne.useEffect(()=>tT(i),[i]),ne.createElement(iT,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,future:i})}const dT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xn=ne.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,viewTransition:d}=e,f=sT(e,lT),{basename:p}=ne.useContext(Gs),_,v=!1;if(typeof u=="string"&&hT.test(u)&&(_=u,dT))try{let x=new URL(window.location.href),S=u.startsWith("//")?new URL(x.protocol+u):new URL(u),T=om(S.pathname,p);S.origin===x.origin&&T!=null?u=T+S.search+S.hash:v=!0}catch{}let m=O1(u,{relative:r}),h=pT(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:r,viewTransition:d});function g(x){i&&i(x),x.defaultPrevented||h(x)}return ne.createElement("a",rh({},f,{href:_||m,onClick:v||s?i:g,ref:t,target:l}))});var c_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(c_||(c_={}));var f_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(f_||(f_={}));function pT(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=k1(),u=El(),c=Xx(n,{relative:a});return ne.useCallback(d=>{if(oT(d,t)){d.preventDefault();let f=i!==void 0?i:cc(u)===cc(c);l(n,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,c,i,r,t,n,s,a,o])}function mT(){const n=El(),[e,t]=ne.useState(!1),i=r=>n.pathname===r;return I.jsxs("nav",{className:"fixed top-0 w-full bg-white/5 backdrop-blur-xl z-50 flex justify-between items-center px-8 h-20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",children:[I.jsx(xn,{to:"/",className:"text-xl font-bold tracking-tighter text-white font-headline",children:"王雨莹"}),I.jsxs("div",{className:"hidden md:flex items-center gap-8 font-headline tracking-tighter font-semibold",children:[I.jsx(xn,{to:"/",className:`${i("/")?"text-white border-b-2 border-accent pb-1":"text-foreground-muted hover:text-accent"} transition-colors`,children:"作品"}),I.jsx(xn,{to:"/about",className:`${i("/about")?"text-white border-b-2 border-accent pb-1":"text-foreground-muted hover:text-accent"} transition-colors`,children:"关于"}),I.jsx(xn,{to:"/projects",className:`${i("/projects")?"text-white border-b-2 border-accent pb-1":"text-foreground-muted hover:text-accent"} transition-colors`,children:"归档"}),I.jsx(xn,{to:"/contact",className:`${i("/contact")?"text-white border-b-2 border-accent pb-1":"text-foreground-muted hover:text-accent"} transition-colors`,children:"联系"}),I.jsx("button",{className:"ml-4 px-6 py-2 btn-gradient text-white text-sm font-semibold rounded-lg hover:scale-95 transition-all active:scale-90",children:"简历"})]}),I.jsx("button",{className:"md:hidden text-white",onClick:()=>t(!e),children:I.jsx("span",{className:"material-symbols-outlined",children:e?"close":"menu"})}),e&&I.jsx("div",{className:"absolute top-20 left-0 w-full bg-background-deep/98 backdrop-blur-xl border-t border-white/5 md:hidden",children:I.jsxs("div",{className:"flex flex-col py-4",children:[I.jsx(xn,{to:"/",className:"px-8 py-4 text-foreground-muted hover:text-accent hover:bg-white/5 transition-colors",onClick:()=>t(!1),children:"作品"}),I.jsx(xn,{to:"/about",className:"px-8 py-4 text-foreground-muted hover:text-accent hover:bg-white/5 transition-colors",onClick:()=>t(!1),children:"关于"}),I.jsx(xn,{to:"/projects",className:"px-8 py-4 text-foreground-muted hover:text-accent hover:bg-white/5 transition-colors",onClick:()=>t(!1),children:"归档"}),I.jsx(xn,{to:"/contact",className:"px-8 py-4 text-foreground-muted hover:text-accent hover:bg-white/5 transition-colors",onClick:()=>t(!1),children:"联系"}),I.jsx("div",{className:"px-8 py-4",children:I.jsx("button",{className:"w-full px-6 py-3 btn-gradient text-white font-semibold rounded-lg",children:"简历"})})]})})]})}function gT(){return I.jsx("footer",{className:"w-full py-16 bg-background-deep border-t border-white/5",children:I.jsxs("div",{className:"max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8",children:[I.jsx("div",{className:"text-lg font-black text-white font-headline tracking-tighter uppercase",children:"王雨莹"}),I.jsxs("div",{className:"flex gap-12 font-label text-[11px] uppercase tracking-[0.2em] font-bold",children:[I.jsx("a",{href:"#",className:"text-foreground-muted hover:text-accent transition-colors",children:"设计"}),I.jsx("a",{href:"#",className:"text-foreground-muted hover:text-accent transition-colors",children:"研究"}),I.jsx("a",{href:"#",className:"text-foreground-muted hover:text-accent transition-colors",children:"流程"})]}),I.jsx("div",{className:"font-label text-[11px] uppercase tracking-[0.2em] font-bold text-foreground-muted",children:"© 2024 王雨莹 版权所有"})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="183",_T=0,d_=1,vT=2,Pu=1,xT=2,Ao=3,Zr=0,wn=1,Qi=2,ir=0,ba=1,h_=2,p_=3,m_=4,yT=5,Ss=100,ST=101,MT=102,ET=103,TT=104,wT=200,AT=201,CT=202,RT=203,sh=204,ah=205,bT=206,PT=207,DT=208,LT=209,NT=210,IT=211,UT=212,FT=213,OT=214,oh=0,lh=1,uh=2,Va=3,ch=4,fh=5,dh=6,hh=7,$x=0,kT=1,BT=2,Ui=0,Kx=1,Zx=2,Qx=3,Jx=4,ey=5,ty=6,ny=7,iy=300,zs=301,Ha=302,Mf=303,Ef=304,Bc=306,ph=1e3,tr=1001,mh=1002,Kt=1003,zT=1004,ql=1005,ln=1006,Tf=1007,As=1008,Jn=1009,ry=1010,sy=1011,ol=1012,cm=1013,ki=1014,Pi=1015,cr=1016,fm=1017,dm=1018,ll=1020,ay=35902,oy=35899,ly=1021,uy=1022,gi=1023,fr=1026,Cs=1027,cy=1028,hm=1029,Ga=1030,pm=1031,mm=1033,Du=33776,Lu=33777,Nu=33778,Iu=33779,gh=35840,_h=35841,vh=35842,xh=35843,yh=36196,Sh=37492,Mh=37496,Eh=37488,Th=37489,wh=37490,Ah=37491,Ch=37808,Rh=37809,bh=37810,Ph=37811,Dh=37812,Lh=37813,Nh=37814,Ih=37815,Uh=37816,Fh=37817,Oh=37818,kh=37819,Bh=37820,zh=37821,Vh=36492,Hh=36494,Gh=36495,Wh=36283,Xh=36284,jh=36285,Yh=36286,VT=3200,HT=0,GT=1,Pr="",Un="srgb",Wa="srgb-linear",fc="linear",nt="srgb",qs=7680,g_=519,WT=512,XT=513,jT=514,gm=515,YT=516,qT=517,_m=518,$T=519,__=35044,v_="300 es",Di=2e3,dc=2001;function KT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ZT(){const n=hc("canvas");return n.style.display="block",n}const x_={};function y_(...n){const e="THREE."+n.shift();console.log(e,...n)}function fy(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=fy(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=fy(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function pc(...n){const e=n.join(" ");e in x_||(x_[e]=!0,Ie(...n))}function QT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const JT={[oh]:lh,[uh]:dh,[ch]:hh,[Va]:fh,[lh]:oh,[dh]:uh,[hh]:ch,[fh]:Va};class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=Math.PI/180,qh=180/Math.PI;function Tl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function ew(n,e){return(n%e+e)%e}function Af(n,e,t){return(1-t)*n+t*e}function po(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class io{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(d!==v||l!==f||u!==p||c!==_){let m=l*f+u*p+c*_+d*v;m<0&&(f=-f,p=-p,_=-_,v=-v,m=-m);let h=1-o;if(m<.9995){const g=Math.acos(m),x=Math.sin(g);h=Math.sin(h*g)/x,o=Math.sin(o*g)/x,l=l*h+f*o,u=u*h+p*o,c=c*h+_*o,d=d*h+v*o}else{l=l*h+f*o,u=u*h+p*o,c=c*h+_*o,d=d*h+v*o;const g=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=g,u*=g,c*=g,d*=g}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-o*p,e[t+2]=u*_+c*p+o*f-l*d,e[t+3]=c*_-o*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(S_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(S_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cf.copy(this).projectOnVector(e),this.sub(Cf)}reflect(e){return this.sub(Cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cf=new j,S_=new io;class ke{constructor(e,t,i,r,s,a,o,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],g=r[1],x=r[4],S=r[7],T=r[2],C=r[5],w=r[8];return s[0]=a*v+o*g+l*T,s[3]=a*m+o*x+l*C,s[6]=a*h+o*S+l*w,s[1]=u*v+c*g+d*T,s[4]=u*m+c*x+d*C,s[7]=u*h+c*S+d*w,s[2]=f*v+p*g+_*T,s[5]=f*m+p*x+_*C,s[8]=f*h+p*S+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,f=o*l-c*s,p=u*s-a*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rf.makeScale(e,t)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new ke,M_=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tw(){const n={enabled:!0,workingColorSpace:Wa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Pa(r.r),r.g=Pa(r.g),r.b=Pa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pr?fc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wa]:{primaries:e,whitePoint:i,transfer:fc,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),n}const qe=tw();function rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $s;class nw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$s===void 0&&($s=hc("canvas")),$s.width=e.width,$s.height=e.height;const r=$s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=rr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iw=0;class vm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bf(r[a].image)):s.push(bf(r[a]))}else s=bf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let rw=0;const Pf=new j;class mn extends no{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=tr,r=tr,s=ln,a=As,o=gi,l=Jn,u=mn.DEFAULT_ANISOTROPY,c=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=Tl(),this.name="",this.source=new vm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pf).x}get height(){return this.source.getSize(Pf).y}get depth(){return this.source.getSize(Pf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=iy;mn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,T=(h+1)/2,C=(c+f)/4,w=(d+v)/4,y=(_+m)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=w/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=y/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-v)/g,this.z=(f-c)/g,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sw extends no{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new mn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new vm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends sw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dy extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aw extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ot{constructor(e,t,i,r,s,a,o,l,u,c,d,f,p,_,v,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,d,f,p,_,v,m)}set(e,t,i,r,s,a,o,l,u,c,d,f,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ks.setFromMatrixColumn(e,0).length(),s=1/Ks.setFromMatrixColumn(e,1).length(),a=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*c,p=a*d,_=o*c,v=o*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-v*u,t[9]=-o*l,t[2]=v-f*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,v=u*d;t[0]=f+v*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,v=u*d;t[0]=f-v*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=v-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*d,_=o*c,v=o*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+v,t[1]=l*d,t[5]=v*u+f,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,p=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+v,t[5]=a*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*c,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ow,e,lw)}lookAt(e,t,i){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),yr.crossVectors(i,Ln),yr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),yr.crossVectors(i,Ln)),yr.normalize(),$l.crossVectors(Ln,yr),r[0]=yr.x,r[4]=$l.x,r[8]=Ln.x,r[1]=yr.y,r[5]=$l.y,r[9]=Ln.y,r[2]=yr.z,r[6]=$l.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],g=i[3],x=i[7],S=i[11],T=i[15],C=r[0],w=r[4],y=r[8],E=r[12],L=r[1],b=r[5],D=r[9],U=r[13],H=r[2],k=r[6],V=r[10],F=r[14],z=r[3],G=r[7],Z=r[11],te=r[15];return s[0]=a*C+o*L+l*H+u*z,s[4]=a*w+o*b+l*k+u*G,s[8]=a*y+o*D+l*V+u*Z,s[12]=a*E+o*U+l*F+u*te,s[1]=c*C+d*L+f*H+p*z,s[5]=c*w+d*b+f*k+p*G,s[9]=c*y+d*D+f*V+p*Z,s[13]=c*E+d*U+f*F+p*te,s[2]=_*C+v*L+m*H+h*z,s[6]=_*w+v*b+m*k+h*G,s[10]=_*y+v*D+m*V+h*Z,s[14]=_*E+v*U+m*F+h*te,s[3]=g*C+x*L+S*H+T*z,s[7]=g*w+x*b+S*k+T*G,s[11]=g*y+x*D+S*V+T*Z,s[15]=g*E+x*U+S*F+T*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15],g=l*p-u*f,x=o*p-u*d,S=o*f-l*d,T=a*p-u*c,C=a*f-l*c,w=a*d-o*c;return t*(v*g-m*x+h*S)-i*(_*g-m*T+h*C)+r*(_*x-v*T+h*w)-s*(_*S-v*C+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],g=t*o-i*a,x=t*l-r*a,S=t*u-s*a,T=i*l-r*o,C=i*u-s*o,w=r*u-s*l,y=c*v-d*_,E=c*m-f*_,L=c*h-p*_,b=d*m-f*v,D=d*h-p*v,U=f*h-p*m,H=g*U-x*D+S*b+T*L-C*E+w*y;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/H;return e[0]=(o*U-l*D+u*b)*k,e[1]=(r*D-i*U-s*b)*k,e[2]=(v*w-m*C+h*T)*k,e[3]=(f*C-d*w-p*T)*k,e[4]=(l*L-a*U-u*E)*k,e[5]=(t*U-r*L+s*E)*k,e[6]=(m*S-_*w-h*x)*k,e[7]=(c*w-f*S+p*x)*k,e[8]=(a*D-o*L+u*y)*k,e[9]=(i*L-t*D-s*y)*k,e[10]=(_*C-v*S+h*g)*k,e[11]=(d*S-c*C-p*g)*k,e[12]=(o*E-a*b-l*y)*k,e[13]=(t*b-i*E+r*y)*k,e[14]=(v*x-_*T-m*g)*k,e[15]=(c*T-d*x+f*g)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,d=o+o,f=s*u,p=s*c,_=s*d,v=a*c,m=a*d,h=o*d,g=l*u,x=l*c,S=l*d,T=i.x,C=i.y,w=i.z;return r[0]=(1-(v+h))*T,r[1]=(p+S)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(f+h))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+x)*w,r[9]=(m-g)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ks.set(r[0],r[1],r[2]).length();const o=Ks.set(r[4],r[5],r[6]).length(),l=Ks.set(r[8],r[9],r[10]).length();s<0&&(a=-a),li.copy(this);const u=1/a,c=1/o,d=1/l;return li.elements[0]*=u,li.elements[1]*=u,li.elements[2]*=u,li.elements[4]*=c,li.elements[5]*=c,li.elements[6]*=c,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,t.setFromRotationMatrix(li),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Di,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===Di)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===dc)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Di,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===Di)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===dc)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ks=new j,li=new Ot,ow=new j(0,0,0),lw=new j(1,1,1),yr=new j,$l=new j,Ln=new j,T_=new Ot,w_=new io;class dr{constructor(e=0,t=0,i=0,r=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return T_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return w_.setFromEuler(this),this.setFromQuaternion(w_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class hy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uw=0;const A_=new j,Zs=new io,Gi=new Ot,Kl=new j,mo=new j,cw=new j,fw=new io,C_=new j(1,0,0),R_=new j(0,1,0),b_=new j(0,0,1),P_={type:"added"},dw={type:"removed"},Qs={type:"childadded",child:null},Df={type:"childremoved",child:null};class Hn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new j,t=new dr,i=new io,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ke}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(R_,e)}rotateZ(e){return this.rotateOnAxis(b_,e)}translateOnAxis(e,t){return A_.copy(e).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(R_,e)}translateZ(e){return this.translateOnAxis(b_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kl.copy(e):Kl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(mo,Kl,this.up):Gi.lookAt(Kl,mo,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P_),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dw),Df.child=e,this.dispatchEvent(Df),Df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P_),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,cw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,fw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Hn.DEFAULT_UP=new j(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zl extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hw={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(u,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Nf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=ew(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Nf(a,s,e+1/3),this.g=Nf(a,s,e),this.b=Nf(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Un){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=py[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return qe.workingToColorSpace(sn.copy(this),e),Math.round(Xe(sn.r*255,0,255))*65536+Math.round(Xe(sn.g*255,0,255))*256+Math.round(Xe(sn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Un){qe.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Ql);const i=Af(Sr.h,Ql.h,t),r=Af(Sr.s,Ql.s,t),s=Af(Sr.l,Ql.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new at;at.NAMES=py;class pw extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ui=new j,Wi=new j,If=new j,Xi=new j,Js=new j,ea=new j,D_=new j,Uf=new j,Ff=new j,Of=new j,kf=new Dt,Bf=new Dt,zf=new Dt;class mi{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ui.subVectors(e,t),r.cross(ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ui.subVectors(r,t),Wi.subVectors(i,t),If.subVectors(e,t);const a=ui.dot(ui),o=ui.dot(Wi),l=ui.dot(If),u=Wi.dot(Wi),c=Wi.dot(If),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-o*c)*f,_=(a*c-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return kf.setScalar(0),Bf.setScalar(0),zf.setScalar(0),kf.fromBufferAttribute(e,t),Bf.fromBufferAttribute(e,i),zf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(kf,s.x),a.addScaledVector(Bf,s.y),a.addScaledVector(zf,s.z),a}static isFrontFacing(e,t,i,r){return ui.subVectors(i,t),Wi.subVectors(e,t),ui.cross(Wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ui.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Js.subVectors(r,i),ea.subVectors(s,i),Uf.subVectors(e,i);const l=Js.dot(Uf),u=ea.dot(Uf);if(l<=0&&u<=0)return t.copy(i);Ff.subVectors(e,r);const c=Js.dot(Ff),d=ea.dot(Ff);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Js,a);Of.subVectors(e,s);const p=Js.dot(Of),_=ea.dot(Of);if(_>=0&&p<=_)return t.copy(s);const v=p*u-l*_;if(v<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(ea,o);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return D_.subVectors(s,r),o=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(D_,o);const h=1/(m+v+f);return a=v*h,o=f*h,t.copy(i).addScaledVector(Js,a).addScaledVector(ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wl{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),eu.subVectors(this.max,go),ta.subVectors(e.a,go),na.subVectors(e.b,go),ia.subVectors(e.c,go),Mr.subVectors(na,ta),Er.subVectors(ia,na),ls.subVectors(ta,ia);let t=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-ls.z,ls.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,ls.z,0,-ls.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-ls.y,ls.x,0];return!Vf(t,ta,na,ia,eu)||(t=[1,0,0,0,1,0,0,0,1],!Vf(t,ta,na,ia,eu))?!1:(tu.crossVectors(Mr,Er),t=[tu.x,tu.y,tu.z],Vf(t,ta,na,ia,eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new j,new j,new j,new j,new j,new j,new j,new j],ci=new j,Jl=new wl,ta=new j,na=new j,ia=new j,Mr=new j,Er=new j,ls=new j,go=new j,eu=new j,tu=new j,us=new j;function Vf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){us.fromArray(n,s);const o=r.x*Math.abs(us.x)+r.y*Math.abs(us.y)+r.z*Math.abs(us.z),l=e.dot(us),u=t.dot(us),c=i.dot(us);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Nt=new j,nu=new Ke;let mw=0;class Oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=__,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nu.fromBufferAttribute(this,t),nu.applyMatrix3(e),this.setXY(t,nu.x,nu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=po(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=po(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=po(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==__&&(e.usage=this.usage),e}}class my extends Oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gy extends Oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sr extends Oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const gw=new wl,_o=new j,Hf=new j;class xm{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const t=_o.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Hf)),this.expandByPoint(_o.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _w=0;const $n=new Ot,Gf=new Hn,ra=new j,Nn=new wl,vo=new wl,Wt=new j;class gr extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KT(e)?gy:my)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vo.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Nn.min,vo.min),Nn.expandByPoint(Wt),Wt.addVectors(Nn.max,vo.max),Nn.expandByPoint(Wt)):(Nn.expandByPoint(vo.min),Nn.expandByPoint(vo.max))}Nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Wt.fromBufferAttribute(o,u),l&&(ra.fromBufferAttribute(e,u),Wt.add(ra)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new j,l[y]=new j;const u=new j,c=new j,d=new j,f=new Ke,p=new Ke,_=new Ke,v=new j,m=new j;function h(y,E,L){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,L),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const b=1/(p.x*_.y-_.x*p.y);isFinite(b)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(b),o[y].add(v),o[E].add(v),o[L].add(v),l[y].add(m),l[E].add(m),l[L].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,E=g.length;y<E;++y){const L=g[y],b=L.start,D=L.count;for(let U=b,H=b+D;U<H;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new j,S=new j,T=new j,C=new j;function w(y){T.fromBufferAttribute(r,y),C.copy(T);const E=o[y];x.copy(E),x.sub(T.multiplyScalar(T.dot(E))).normalize(),S.crossVectors(C,E);const b=S.dot(l[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,b)}for(let y=0,E=g.length;y<E;++y){const L=g[y],b=L.start,D=L.count;for(let U=b,H=b+D;U<H;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,u=new j,c=new j,d=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new Oi(f,c,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vw=0;class zc extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=ba,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=ah,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(i.blending=this.blending),this.side!==Zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==ah&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yi=new j,Wf=new j,iu=new j,Tr=new j,Xf=new j,ru=new j,jf=new j;class xw{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wf.copy(e).add(t).multiplyScalar(.5),iu.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(Wf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(iu),o=Tr.dot(this.direction),l=-Tr.dot(iu),u=Tr.lengthSq(),c=Math.abs(1-a*a);let d,f,p,_;if(c>0)if(d=a*l-o,f=a*o-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const v=1/c;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Wf).addScaledVector(iu,f),p}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,r,s){Xf.subVectors(t,e),ru.subVectors(i,e),jf.crossVectors(Xf,ru);let a=this.direction.dot(jf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tr.subVectors(this.origin,e);const l=o*this.direction.dot(ru.crossVectors(Tr,ru));if(l<0)return null;const u=o*this.direction.dot(Xf.cross(Tr));if(u<0||l+u>a)return null;const c=-o*Tr.dot(jf);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _y extends zc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const L_=new Ot,cs=new xw,su=new xm,N_=new j,au=new j,ou=new j,lu=new j,Yf=new j,uu=new j,I_=new j,cu=new j;class Bi extends Hn{constructor(e=new gr,t=new _y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){uu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(Yf.fromBufferAttribute(d,e),a?uu.addScaledVector(Yf,c):uu.addScaledVector(Yf.sub(t),c))}t.add(uu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),su.copy(i.boundingSphere),su.applyMatrix4(s),cs.copy(e.ray).recast(e.near),!(su.containsPoint(cs.origin)===!1&&(cs.intersectSphere(su,N_)===null||cs.origin.distanceToSquared(N_)>(e.far-e.near)**2))&&(L_.copy(s).invert(),cs.copy(e.ray).applyMatrix4(L_),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,T=x;S<T;S+=3){const C=o.getX(S),w=o.getX(S+1),y=o.getX(S+2);r=fu(this,h,e,i,u,c,d,C,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const g=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=fu(this,a,e,i,u,c,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,T=x;S<T;S+=3){const C=S,w=S+1,y=S+2;r=fu(this,h,e,i,u,c,d,C,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const g=m,x=m+1,S=m+2;r=fu(this,a,e,i,u,c,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yw(n,e,t,i,r,s,a,o){let l;if(e.side===wn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zr,o),l===null)return null;cu.copy(o),cu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(cu);return u<t.near||u>t.far?null:{distance:u,point:cu.clone(),object:n}}function fu(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,au),n.getVertexPosition(l,ou),n.getVertexPosition(u,lu);const c=yw(n,e,t,i,au,ou,lu,I_);if(c){const d=new j;mi.getBarycoord(I_,au,ou,lu,d),r&&(c.uv=mi.getInterpolatedAttribute(r,o,l,u,d,new Ke)),s&&(c.uv1=mi.getInterpolatedAttribute(s,o,l,u,d,new Ke)),a&&(c.normal=mi.getInterpolatedAttribute(a,o,l,u,d,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new j,materialIndex:0};mi.getNormal(au,ou,lu,f.normal),c.face=f,c.barycoord=d}return c}class Sw extends mn{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Kt,c=Kt,d,f){super(null,a,o,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qf=new j,Mw=new j,Ew=new ke;class xs{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qf.subVectors(i,t).cross(Mw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ew.getNormalMatrix(e),r=this.coplanarPoint(qf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new xm,Tw=new Ke(.5,.5),du=new j;class vy{constructor(e=new xs,t=new xs,i=new xs,r=new xs,s=new xs,a=new xs){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],_=s[8],v=s[9],m=s[10],h=s[11],g=s[12],x=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-a,p-c,h-_,T-g).normalize(),r[1].setComponents(u+a,p+c,h+_,T+g).normalize(),r[2].setComponents(u+o,p+d,h+v,T+x).normalize(),r[3].setComponents(u-o,p-d,h-v,T-x).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(u-l,p-f,h-m,T-S).normalize();else if(r[4].setComponents(u-l,p-f,h-m,T-S).normalize(),t===Di)r[5].setComponents(u+l,p+f,h+m,T+S).normalize();else if(t===dc)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const t=Tw.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(du.x=r.normal.x>0?e.max.x:e.min.x,du.y=r.normal.y>0?e.max.y:e.min.y,du.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xy extends mn{constructor(e=[],t=zs,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ul extends mn{constructor(e,t,i=ki,r,s,a,o=Kt,l=Kt,u,c=fr,d=1){if(c!==fr&&c!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ww extends ul{constructor(e,t=ki,i=zs,r,s,a=Kt,o=Kt,l,u=fr){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yy extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Al extends gr{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sr(u,3)),this.setAttribute("normal",new sr(c,3)),this.setAttribute("uv",new sr(d,2));function _(v,m,h,g,x,S,T,C,w,y,E){const L=S/w,b=T/y,D=S/2,U=T/2,H=C/2,k=w+1,V=y+1;let F=0,z=0;const G=new j;for(let Z=0;Z<V;Z++){const te=Z*b-U;for(let ee=0;ee<k;ee++){const Ae=ee*L-D;G[v]=Ae*g,G[m]=te*x,G[h]=H,u.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[h]=C>0?1:-1,c.push(G.x,G.y,G.z),d.push(ee/w),d.push(1-Z/y),F+=1}}for(let Z=0;Z<y;Z++)for(let te=0;te<w;te++){const ee=f+te+k*Z,Ae=f+te+k*(Z+1),Le=f+(te+1)+k*(Z+1),ze=f+(te+1)+k*Z;l.push(ee,Ae,ze),l.push(Ae,Le,ze),z+=6}o.addGroup(p,z,E),p+=z,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cl extends gr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=t/l,p=[],_=[],v=[],m=[];for(let h=0;h<c;h++){const g=h*f-a;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-g,0),v.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const x=g+u*h,S=g+u*(h+1),T=g+1+u*(h+1),C=g+1+u*h;p.push(x,S,C),p.push(S,T,C)}this.setIndex(p),this.setAttribute("position",new sr(_,3)),this.setAttribute("normal",new sr(v,3)),this.setAttribute("uv",new sr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Xa(n[t]);for(const r in i)e[r]=i[r]}return e}function Aw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Cw={clone:Xa,merge:fn};var Rw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends zc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rw,this.fragmentShader=bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xa(e.uniforms),this.uniformsGroups=Aw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pw extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dw extends zc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lw extends zc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hu=new j,pu=new io,Ei=new j;class My extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hu,pu,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,pu,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(hu,pu,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,pu,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new j,U_=new Ke,F_=new Ke;class pi extends My{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,U_,F_),t.subVectors(F_,U_)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ym extends My{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sa=-90,aa=1;class Nw extends Hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pi(sa,aa,e,t);r.layers=this.layers,this.add(r);const s=new pi(sa,aa,e,t);s.layers=this.layers,this.add(s);const a=new pi(sa,aa,e,t);a.layers=this.layers,this.add(a);const o=new pi(sa,aa,e,t);o.layers=this.layers,this.add(o);const l=new pi(sa,aa,e,t);l.layers=this.layers,this.add(l);const u=new pi(sa,aa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Iw extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Uw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function O_(n,e,t,i){const r=Fw(i);switch(t){case ly:return n*e;case cy:return n*e/r.components*r.byteLength;case hm:return n*e/r.components*r.byteLength;case Ga:return n*e*2/r.components*r.byteLength;case pm:return n*e*2/r.components*r.byteLength;case uy:return n*e*3/r.components*r.byteLength;case gi:return n*e*4/r.components*r.byteLength;case mm:return n*e*4/r.components*r.byteLength;case Du:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _h:case xh:return Math.max(n,16)*Math.max(e,8)/4;case gh:case vh:return Math.max(n,8)*Math.max(e,8)/2;case yh:case Sh:case Eh:case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mh:case wh:case Ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vh:case Hh:case Gh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wh:case Xh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jh:case Yh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fw(n){switch(n){case Jn:case ry:return{byteLength:1,components:1};case ol:case sy:case cr:return{byteLength:2,components:1};case fm:case dm:return{byteLength:2,components:4};case ki:case cm:case Pi:return{byteLength:4,components:1};case ay:case oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ey(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ow(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,o),d.length===0)n.bufferSubData(u,0,c);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var kw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ww=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$w=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,oA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pA="gl_FragColor = linearToOutputTexel( gl_FragColor );",mA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_C=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$C=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:kw,alphahash_pars_fragment:Bw,alphamap_fragment:zw,alphamap_pars_fragment:Vw,alphatest_fragment:Hw,alphatest_pars_fragment:Gw,aomap_fragment:Ww,aomap_pars_fragment:Xw,batching_pars_vertex:jw,batching_vertex:Yw,begin_vertex:qw,beginnormal_vertex:$w,bsdfs:Kw,iridescence_fragment:Zw,bumpmap_pars_fragment:Qw,clipping_planes_fragment:Jw,clipping_planes_pars_fragment:eA,clipping_planes_pars_vertex:tA,clipping_planes_vertex:nA,color_fragment:iA,color_pars_fragment:rA,color_pars_vertex:sA,color_vertex:aA,common:oA,cube_uv_reflection_fragment:lA,defaultnormal_vertex:uA,displacementmap_pars_vertex:cA,displacementmap_vertex:fA,emissivemap_fragment:dA,emissivemap_pars_fragment:hA,colorspace_fragment:pA,colorspace_pars_fragment:mA,envmap_fragment:gA,envmap_common_pars_fragment:_A,envmap_pars_fragment:vA,envmap_pars_vertex:xA,envmap_physical_pars_fragment:PA,envmap_vertex:yA,fog_vertex:SA,fog_pars_vertex:MA,fog_fragment:EA,fog_pars_fragment:TA,gradientmap_pars_fragment:wA,lightmap_pars_fragment:AA,lights_lambert_fragment:CA,lights_lambert_pars_fragment:RA,lights_pars_begin:bA,lights_toon_fragment:DA,lights_toon_pars_fragment:LA,lights_phong_fragment:NA,lights_phong_pars_fragment:IA,lights_physical_fragment:UA,lights_physical_pars_fragment:FA,lights_fragment_begin:OA,lights_fragment_maps:kA,lights_fragment_end:BA,logdepthbuf_fragment:zA,logdepthbuf_pars_fragment:VA,logdepthbuf_pars_vertex:HA,logdepthbuf_vertex:GA,map_fragment:WA,map_pars_fragment:XA,map_particle_fragment:jA,map_particle_pars_fragment:YA,metalnessmap_fragment:qA,metalnessmap_pars_fragment:$A,morphinstance_vertex:KA,morphcolor_vertex:ZA,morphnormal_vertex:QA,morphtarget_pars_vertex:JA,morphtarget_vertex:eC,normal_fragment_begin:tC,normal_fragment_maps:nC,normal_pars_fragment:iC,normal_pars_vertex:rC,normal_vertex:sC,normalmap_pars_fragment:aC,clearcoat_normal_fragment_begin:oC,clearcoat_normal_fragment_maps:lC,clearcoat_pars_fragment:uC,iridescence_pars_fragment:cC,opaque_fragment:fC,packing:dC,premultiplied_alpha_fragment:hC,project_vertex:pC,dithering_fragment:mC,dithering_pars_fragment:gC,roughnessmap_fragment:_C,roughnessmap_pars_fragment:vC,shadowmap_pars_fragment:xC,shadowmap_pars_vertex:yC,shadowmap_vertex:SC,shadowmask_pars_fragment:MC,skinbase_vertex:EC,skinning_pars_vertex:TC,skinning_vertex:wC,skinnormal_vertex:AC,specularmap_fragment:CC,specularmap_pars_fragment:RC,tonemapping_fragment:bC,tonemapping_pars_fragment:PC,transmission_fragment:DC,transmission_pars_fragment:LC,uv_pars_fragment:NC,uv_pars_vertex:IC,uv_vertex:UC,worldpos_vertex:FC,background_vert:OC,background_frag:kC,backgroundCube_vert:BC,backgroundCube_frag:zC,cube_vert:VC,cube_frag:HC,depth_vert:GC,depth_frag:WC,distance_vert:XC,distance_frag:jC,equirect_vert:YC,equirect_frag:qC,linedashed_vert:$C,linedashed_frag:KC,meshbasic_vert:ZC,meshbasic_frag:QC,meshlambert_vert:JC,meshlambert_frag:eR,meshmatcap_vert:tR,meshmatcap_frag:nR,meshnormal_vert:iR,meshnormal_frag:rR,meshphong_vert:sR,meshphong_frag:aR,meshphysical_vert:oR,meshphysical_frag:lR,meshtoon_vert:uR,meshtoon_frag:cR,points_vert:fR,points_frag:dR,shadow_vert:hR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},de={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ci={basic:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:fn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:fn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new at(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:fn([de.points,de.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:fn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:fn([de.common,de.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:fn([de.sprite,de.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:fn([de.common,de.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:fn([de.lights,de.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Ci.physical={uniforms:fn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const mu={r:0,b:0,g:0},ds=new dr,_R=new Ot;function vR(n,e,t,i,r,s){const a=new at(0);let o=r===!0?0:1,l,u,c=null,d=0,f=null;function p(g){let x=g.isScene===!0?g.background:null;if(x&&x.isTexture){const S=g.backgroundBlurriness>0;x=e.get(x,S)}return x}function _(g){let x=!1;const S=p(g);S===null?m(a,o):S&&S.isColor&&(m(S,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(g,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===Bc)?(u===void 0&&(u=new Bi(new Al(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Xa(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ds.copy(x.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_R.makeRotationFromEuler(ds)),u.material.toneMapped=qe.getTransfer(S.colorSpace)!==nt,(c!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Bi(new Cl(2,2),new yi({name:"BackgroundMaterial",uniforms:Xa(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,x){g.getRGB(mu,Sy(n)),t.buffers.color.setClear(mu.r,mu.g,mu.b,x,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:v,dispose:h}}function xR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(b,D,U,H,k){let V=!1;const F=d(b,H,U,D);s!==F&&(s=F,u(s.object)),V=p(b,H,U,k),V&&_(b,H,U,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(b,D,U,H),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function u(b){return n.bindVertexArray(b)}function c(b){return n.deleteVertexArray(b)}function d(b,D,U,H){const k=H.wireframe===!0;let V=i[D.id];V===void 0&&(V={},i[D.id]=V);const F=b.isInstancedMesh===!0?b.id:0;let z=V[F];z===void 0&&(z={},V[F]=z);let G=z[U.id];G===void 0&&(G={},z[U.id]=G);let Z=G[k];return Z===void 0&&(Z=f(l()),G[k]=Z),Z}function f(b){const D=[],U=[],H=[];for(let k=0;k<t;k++)D[k]=0,U[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,D,U,H){const k=s.attributes,V=D.attributes;let F=0;const z=U.getAttributes();for(const G in z)if(z[G].location>=0){const te=k[G];let ee=V[G];if(ee===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),te===void 0||te.attribute!==ee||ee&&te.data!==ee.data)return!0;F++}return s.attributesNum!==F||s.index!==H}function _(b,D,U,H){const k={},V=D.attributes;let F=0;const z=U.getAttributes();for(const G in z)if(z[G].location>=0){let te=V[G];te===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const ee={};ee.attribute=te,te&&te.data&&(ee.data=te.data),k[G]=ee,F++}s.attributes=k,s.attributesNum=F,s.index=H}function v(){const b=s.newAttributes;for(let D=0,U=b.length;D<U;D++)b[D]=0}function m(b){h(b,0)}function h(b,D){const U=s.newAttributes,H=s.enabledAttributes,k=s.attributeDivisors;U[b]=1,H[b]===0&&(n.enableVertexAttribArray(b),H[b]=1),k[b]!==D&&(n.vertexAttribDivisor(b,D),k[b]=D)}function g(){const b=s.newAttributes,D=s.enabledAttributes;for(let U=0,H=D.length;U<H;U++)D[U]!==b[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function x(b,D,U,H,k,V,F){F===!0?n.vertexAttribIPointer(b,D,U,k,V):n.vertexAttribPointer(b,D,U,H,k,V)}function S(b,D,U,H){v();const k=H.attributes,V=U.getAttributes(),F=D.defaultAttributeValues;for(const z in V){const G=V[z];if(G.location>=0){let Z=k[z];if(Z===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){const te=Z.normalized,ee=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;const Le=Ae.buffer,ze=Ae.type,$=Ae.bytesPerElement,ae=ze===n.INT||ze===n.UNSIGNED_INT||Z.gpuType===cm;if(Z.isInterleavedBufferAttribute){const fe=Z.data,Oe=fe.stride,Pe=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)h(G.location+Ne,fe.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)m(G.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Ne=0;Ne<G.locationSize;Ne++)x(G.location+Ne,ee/G.locationSize,ze,te,Oe*$,(Pe+ee/G.locationSize*Ne)*$,ae)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)h(G.location+fe,Z.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let fe=0;fe<G.locationSize;fe++)x(G.location+fe,ee/G.locationSize,ze,te,ee*$,ee/G.locationSize*fe*$,ae)}}else if(F!==void 0){const te=F[z];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(G.location,te);break;case 3:n.vertexAttrib3fv(G.location,te);break;case 4:n.vertexAttrib4fv(G.location,te);break;default:n.vertexAttrib1fv(G.location,te)}}}}g()}function T(){E();for(const b in i){const D=i[b];for(const U in D){const H=D[U];for(const k in H){const V=H[k];for(const F in V)c(V[F].object),delete V[F];delete H[k]}}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const U in D){const H=D[U];for(const k in H){const V=H[k];for(const F in V)c(V[F].object),delete V[F];delete H[k]}}delete i[b.id]}function w(b){for(const D in i){const U=i[D];for(const H in U){const k=U[H];if(k[b.id]===void 0)continue;const V=k[b.id];for(const F in V)c(V[F].object),delete V[F];delete k[b.id]}}}function y(b){for(const D in i){const U=i[D],H=b.isInstancedMesh===!0?b.id:0,k=U[H];if(k!==void 0){for(const V in k){const F=k[V];for(const z in F)c(F[z].object),delete F[z];delete k[V]}delete U[H],Object.keys(U).length===0&&delete i[D]}}}function E(){L(),a=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function yR(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function o(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=c[v]*f[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function SR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==gi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const y=w===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Jn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pi&&!y)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Ie("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:C}}function MR(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new xs,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,x=g*4;let S=h.clippingState||null;l.value=S,S=c(_,f,x,p);for(let T=0;T!==x;++T)S[T]=t[T];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==v;++x,S+=4)a.copy(d[x]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Ir=4,k_=[.125,.215,.35,.446,.526,.582],Ms=20,ER=256,xo=new ym,B_=new at;let $f=null,Kf=0,Zf=0,Qf=!1;const TR=new j;class z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=TR}=s;$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Kf,Zf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:cr,format:gi,colorSpace:Wa,depthBuffer:!1},r=V_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V_(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wR(s)),this._blurMaterial=CR(s,e,t),this._ggxMaterial=AR(s,e,t)}return r}_compileMaterial(e){const t=new Bi(new gr,e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,i,r,s){const l=new pi(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(B_),d.toneMapping=Ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bi(new Al,new _y({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(B_),h=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const T=this._cubeSize;oa(r,S*T,x>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(v,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zs||e.mapping===Ha;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;oa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Ir?i-_+Ir:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,oa(s,m,h,3*v,2*v),r.setRenderTarget(s),r.render(o,xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,oa(e,m,h,3*v,2*v),r.setRenderTarget(e),r.render(o,xo)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),v=s/_,m=isFinite(s)?1+Math.floor(c*v):Ms;m>Ms&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const h=[];let g=0;for(let w=0;w<Ms;++w){const y=w/v,E=Math.exp(-y*y/2);h.push(E),w===0?g+=E:w<m&&(g+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-Ir?r-x+Ir:0),C=4*(this._cubeSize-S);oa(t,T,C,3*S,2*S),l.setRenderTarget(t),l.render(d,xo)}}function wR(n){const e=[],t=[],i=[];let r=n;const s=n-Ir+1+k_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ir?l=k_[a-n+Ir-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,v=3,m=2,h=1,g=new Float32Array(v*_*p),x=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,y=C>2?0:-1,E=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];g.set(E,v*_*C),x.set(f,m*_*C);const L=[C,C,C,C,C,C];S.set(L,h*_*C)}const T=new gr;T.setAttribute("position",new Oi(g,v)),T.setAttribute("uv",new Oi(x,m)),T.setAttribute("faceIndex",new Oi(S,h)),i.push(new Bi(T,null)),r>Ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function V_(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AR(n,e,t){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ER,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function CR(n,e,t){const i=new Float32Array(Ms),r=new j(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function H_(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function G_(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ty extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xy(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Al(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:ir});s.uniforms.tEquirect.value=t;const a=new Bi(r,s),o=t.minFilter;return t.minFilter===As&&(t.minFilter=ln),new Nw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function RR(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Mf||p===Ef)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new Ty(_.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",u),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,_=p===Mf||p===Ef,v=p===zs||p===Ha;if(_||v){let m=t.get(f);const h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new z_(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return _&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new z_(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function o(f,p){return p===Mf?f.mapping=zs:p===Ef&&(f.mapping=Ha),f}function l(f){let p=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&p++;return p===_}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function bR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pc("WebGLRenderer: "+i+" extension not supported."),r}}}function PR(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(_===void 0)return;if(p!==null){const g=p.array;v=p.version;for(let x=0,S=g.length;x<S;x+=3){const T=g[x+0],C=g[x+1],w=g[x+2];f.push(T,C,C,w,w,T)}}else{const g=_.array;v=_.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const T=x+0,C=x+1,w=x+2;f.push(T,C,C,w,w,T)}}const m=new(_.count>=65535?gy:my)(f,1);m.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function DR(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*a,_),t.update(p,i,_))}function c(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function d(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g]*v[g];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function LR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function NR(n,e,t){const i=new WeakMap,r=new Dt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let L=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*C*4*d),y=new dy(w,T,C,d);y.type=Pi,y.needsUpdate=!0;const E=S*4;for(let b=0;b<d;b++){const D=h[b],U=g[b],H=x[b],k=T*C*4*b;for(let V=0;V<D.count;V++){const F=V*E;_===!0&&(r.fromBufferAttribute(D,V),w[k+F+0]=r.x,w[k+F+1]=r.y,w[k+F+2]=r.z,w[k+F+3]=0),v===!0&&(r.fromBufferAttribute(U,V),w[k+F+4]=r.x,w[k+F+5]=r.y,w[k+F+6]=r.z,w[k+F+7]=0),m===!0&&(r.fromBufferAttribute(H,V),w[k+F+8]=r.x,w[k+F+9]=r.y,w[k+F+10]=r.z,w[k+F+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new Ke(T,C)},i.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function IR(n,e,t,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const UR={[Kx]:"LINEAR_TONE_MAPPING",[Zx]:"REINHARD_TONE_MAPPING",[Qx]:"CINEON_TONE_MAPPING",[Jx]:"ACES_FILMIC_TONE_MAPPING",[ty]:"AGX_TONE_MAPPING",[ny]:"NEUTRAL_TONE_MAPPING",[ey]:"CUSTOM_TONE_MAPPING"};function FR(n,e,t,i,r){const s=new Fi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Fi(e,t,{type:cr,depthBuffer:!1,stencilBuffer:!1}),o=new gr;o.setAttribute("position",new sr([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new sr([0,2,0,0,2,0],2));const l=new Pw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Bi(o,l),c=new ym(-1,1,1,-1,0,1);let d=null,f=null,p=!1,_,v=null,m=[],h=!1;this.setSize=function(g,x){s.setSize(g,x),a.setSize(g,x);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(g,x)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const x=s.width,S=s.height;for(let T=0;T<m.length;T++){const C=m[T];C.setSize&&C.setSize(x,S)}},this.begin=function(g,x){if(p||g.toneMapping===Ui&&m.length===0)return!1;if(v=x,x!==null){const S=x.width,T=x.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return h===!1&&g.setRenderTarget(s),_=g.toneMapping,g.toneMapping=Ui,!0},this.hasRenderPass=function(){return h},this.end=function(g,x){g.toneMapping=_,p=!0;let S=s,T=a;for(let C=0;C<m.length;C++){const w=m[C];if(w.enabled!==!1&&(w.render(g,T,S,x),w.needsSwap!==!1)){const y=S;S=T,T=y}}if(d!==g.outputColorSpace||f!==g.toneMapping){d=g.outputColorSpace,f=g.toneMapping,l.defines={},qe.getTransfer(d)===nt&&(l.defines.SRGB_TRANSFER="");const C=UR[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(v),g.render(u,c),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const wy=new mn,$h=new ul(1,1),Ay=new dy,Cy=new aw,Ry=new xy,W_=[],X_=[],j_=new Float32Array(16),Y_=new Float32Array(9),q_=new Float32Array(4);function ro(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=W_[r];if(s===void 0&&(s=new Float32Array(r),W_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hc(n,e){let t=X_[e];t===void 0&&(t=new Int32Array(e),X_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function BR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function zR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function VR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;q_.set(i),n.uniformMatrix2fv(this.addr,!1,q_),Vt(t,i)}}function HR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;Y_.set(i),n.uniformMatrix3fv(this.addr,!1,Y_),Vt(t,i)}}function GR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;j_.set(i),n.uniformMatrix4fv(this.addr,!1,j_),Vt(t,i)}}function WR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function jR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function YR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function qR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $R(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function KR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function ZR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function QR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($h.compareFunction=t.isReversedDepthBuffer()?_m:gm,s=$h):s=wy,t.setTexture2D(e||s,r)}function JR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cy,r)}function eb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ry,r)}function tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ay,r)}function nb(n){switch(n){case 5126:return OR;case 35664:return kR;case 35665:return BR;case 35666:return zR;case 35674:return VR;case 35675:return HR;case 35676:return GR;case 5124:case 35670:return WR;case 35667:case 35671:return XR;case 35668:case 35672:return jR;case 35669:case 35673:return YR;case 5125:return qR;case 36294:return $R;case 36295:return KR;case 36296:return ZR;case 35678:case 36198:case 36298:case 36306:case 35682:return QR;case 35679:case 36299:case 36307:return JR;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}function ib(n,e){n.uniform1fv(this.addr,e)}function rb(n,e){const t=ro(e,this.size,2);n.uniform2fv(this.addr,t)}function sb(n,e){const t=ro(e,this.size,3);n.uniform3fv(this.addr,t)}function ab(n,e){const t=ro(e,this.size,4);n.uniform4fv(this.addr,t)}function ob(n,e){const t=ro(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lb(n,e){const t=ro(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ub(n,e){const t=ro(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cb(n,e){n.uniform1iv(this.addr,e)}function fb(n,e){n.uniform2iv(this.addr,e)}function db(n,e){n.uniform3iv(this.addr,e)}function hb(n,e){n.uniform4iv(this.addr,e)}function pb(n,e){n.uniform1uiv(this.addr,e)}function mb(n,e){n.uniform2uiv(this.addr,e)}function gb(n,e){n.uniform3uiv(this.addr,e)}function _b(n,e){n.uniform4uiv(this.addr,e)}function vb(n,e,t){const i=this.cache,r=e.length,s=Hc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=$h:a=wy;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function xb(n,e,t){const i=this.cache,r=e.length,s=Hc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Cy,s[a])}function yb(n,e,t){const i=this.cache,r=e.length,s=Hc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ry,s[a])}function Sb(n,e,t){const i=this.cache,r=e.length,s=Hc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ay,s[a])}function Mb(n){switch(n){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ab;case 35674:return ob;case 35675:return lb;case 35676:return ub;case 5124:case 35670:return cb;case 35667:case 35671:return fb;case 35668:case 35672:return db;case 35669:case 35673:return hb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Sb}}class Eb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nb(t.type)}}class Tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mb(t.type)}}class wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function $_(n,e){n.seq.push(e),n.map[e.id]=e}function Ab(n,e,t){const i=n.name,r=i.length;for(Jf.lastIndex=0;;){const s=Jf.exec(i),a=Jf.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){$_(t,u===void 0?new Eb(o,n,e):new Tb(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new wb(o),$_(t,d)),t=d}}}class Uu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ab(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function K_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cb=37297;let Rb=0;function bb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Z_=new ke;function Pb(n){qe._getMatrix(Z_,qe.workingColorSpace,n);const e=`mat3( ${Z_.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case fc:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Q_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+bb(n.getShaderSource(e),o)}else return s}function Db(n,e){const t=Pb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Lb={[Kx]:"Linear",[Zx]:"Reinhard",[Qx]:"Cineon",[Jx]:"ACESFilmic",[ty]:"AgX",[ny]:"Neutral",[ey]:"Custom"};function Nb(n,e){const t=Lb[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gu=new j;function Ib(){qe.getLuminanceCoefficients(gu);const n=gu.x.toFixed(4),e=gu.y.toFixed(4),t=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function Fb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ob(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Co(n){return n!==""}function J_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(n){return n.replace(kb,zb)}const Bb=new Map;function zb(n,e){let t=Be[e];if(t===void 0){const i=Bb.get(e);if(i!==void 0)t=Be[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kh(t)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(n){return n.replace(Vb,Hb)}function Hb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function n0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Gb={[Pu]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function Wb(n){return Gb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xb={[zs]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function jb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Xb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yb={[Ha]:"ENVMAP_MODE_REFRACTION"};function qb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $b={[$x]:"ENVMAP_BLENDING_MULTIPLY",[kT]:"ENVMAP_BLENDING_MIX",[BT]:"ENVMAP_BLENDING_ADD"};function Kb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$b[n.combine]||"ENVMAP_BLENDING_NONE"}function Zb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Qb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Wb(t),u=jb(t),c=qb(t),d=Kb(t),f=Zb(t),p=Ub(t),_=Fb(s),v=r.createProgram();let m,h,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Co).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Co).join(`
`),h.length>0&&(h+=`
`)):(m=[n0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),h=[n0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ui?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Db("linearToOutputTexel",t.outputColorSpace),Ib(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),a=Kh(a),a=J_(a,t),a=e0(a,t),o=Kh(o),o=J_(o,t),o=e0(o,t),a=t0(a),o=t0(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=g+m+a,S=g+h+o,T=K_(r,r.VERTEX_SHADER,x),C=K_(r,r.FRAGMENT_SHADER,S);r.attachShader(v,T),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(b){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(T)||"",H=r.getShaderInfoLog(C)||"",k=D.trim(),V=U.trim(),F=H.trim();let z=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,C);else{const Z=Q_(r,T,"vertex"),te=Q_(r,C,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+k+`
`+Z+`
`+te)}else k!==""?Ie("WebGLProgram: Program Info Log:",k):(V===""||F==="")&&(G=!1);G&&(b.diagnostics={runnable:z,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:F,prefix:h}})}r.deleteShader(T),r.deleteShader(C),y=new Uu(r,v),E=Ob(r,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(v,Cb)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=C,this}let Jb=0;class eP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tP(e),t.set(e,i)),i}}class tP{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}}function nP(n,e,t,i,r,s){const a=new hy,o=new eP,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,E,L,b,D){const U=b.fog,H=D.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?b.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||k,V),z=F&&F.mapping===Bc?F.image.height:null,G=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=Z!==void 0?Z.length:0;let ee=0;H.morphAttributes.position!==void 0&&(ee=1),H.morphAttributes.normal!==void 0&&(ee=2),H.morphAttributes.color!==void 0&&(ee=3);let Ae,Le,ze,$;if(G){const tt=Ci[G];Ae=tt.vertexShader,Le=tt.fragmentShader}else Ae=y.vertexShader,Le=y.fragmentShader,o.update(y),ze=o.getVertexShaderID(y),$=o.getFragmentShaderID(y);const ae=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Pe=D.isBatchedMesh===!0,Ne=!!y.map,Ht=!!y.matcap,Ye=!!F,et=!!y.aoMap,ot=!!y.lightMap,Ve=!!y.bumpMap,Ct=!!y.normalMap,P=!!y.displacementMap,Lt=!!y.emissiveMap,Je=!!y.metalnessMap,ft=!!y.roughnessMap,Te=y.anisotropy>0,R=y.clearcoat>0,M=y.dispersion>0,O=y.iridescence>0,Q=y.sheen>0,J=y.transmission>0,K=Te&&!!y.anisotropyMap,xe=R&&!!y.clearcoatMap,ue=R&&!!y.clearcoatNormalMap,be=R&&!!y.clearcoatRoughnessMap,De=O&&!!y.iridescenceMap,re=O&&!!y.iridescenceThicknessMap,oe=Q&&!!y.sheenColorMap,ye=Q&&!!y.sheenRoughnessMap,Me=!!y.specularMap,me=!!y.specularColorMap,He=!!y.specularIntensityMap,N=J&&!!y.transmissionMap,ce=J&&!!y.thicknessMap,le=!!y.gradientMap,ve=!!y.alphaMap,se=y.alphaTest>0,q=!!y.alphaHash,Se=!!y.extensions;let Ue=Ui;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const dt={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:Ae,fragmentShader:Le,defines:y.defines,customVertexShaderID:ze,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Wa,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:Ht,envMap:Ye,envMapMode:Ye&&F.mapping,envMapCubeUVHeight:z,aoMap:et,lightMap:ot,bumpMap:Ve,normalMap:Ct,displacementMap:P,emissiveMap:Lt,normalMapObjectSpace:Ct&&y.normalMapType===GT,normalMapTangentSpace:Ct&&y.normalMapType===HT,metalnessMap:Je,roughnessMap:ft,anisotropy:Te,anisotropyMap:K,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:ue,clearcoatRoughnessMap:be,dispersion:M,iridescence:O,iridescenceMap:De,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:oe,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:me,specularIntensityMap:He,transmission:J,transmissionMap:N,thicknessMap:ce,gradientMap:le,opaque:y.transparent===!1&&y.blending===ba&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:se,alphaHash:q,combine:y.combine,mapUv:Ne&&_(y.map.channel),aoMapUv:et&&_(y.aoMap.channel),lightMapUv:ot&&_(y.lightMap.channel),bumpMapUv:Ve&&_(y.bumpMap.channel),normalMapUv:Ct&&_(y.normalMap.channel),displacementMapUv:P&&_(y.displacementMap.channel),emissiveMapUv:Lt&&_(y.emissiveMap.channel),metalnessMapUv:Je&&_(y.metalnessMap.channel),roughnessMapUv:ft&&_(y.roughnessMap.channel),anisotropyMapUv:K&&_(y.anisotropyMap.channel),clearcoatMapUv:xe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(y.sheenRoughnessMap.channel),specularMapUv:Me&&_(y.specularMap.channel),specularColorMapUv:me&&_(y.specularColorMap.channel),specularIntensityMapUv:He&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:ce&&_(y.thicknessMap.channel),alphaMapUv:ve&&_(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ct||Te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Ne||ve),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&Ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:Lt&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qi,flipSided:y.side===wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(h(E,y),g(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function h(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const E=p[y.type];let L;if(E){const b=Ci[E];L=Cw.clone(b.uniforms)}else L=y.uniforms;return L}function S(y,E){let L=c.get(E);return L!==void 0?++L.usedTimes:(L=new Qb(n,E,y,r),u.push(L),c.set(E,L)),L}function T(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function C(y){o.remove(y)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:w}}function iP(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function rP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function i0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function r0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,v,m,h){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:h},n[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=_,g.materialVariant=a(f),g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=m,g.group=h),e++,g}function l(f,p,_,v,m,h){const g=o(f,p,_,v,m,h);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):t.push(g)}function u(f,p,_,v,m,h){const g=o(f,p,_,v,m,h);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):t.unshift(g)}function c(f,p){t.length>1&&t.sort(f||rP),i.length>1&&i.sort(p||i0),r.length>1&&r.sort(p||i0)}function d(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function sP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new r0,n.set(i,[a])):r>=s.length?(a=new r0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function aP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new at};break;case"SpotLight":t={position:new j,direction:new j,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function oP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lP=0;function uP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cP(n){const e=new aP,t=oP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new Ot,a=new Ot;function o(u){let c=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,g=0,x=0,S=0,T=0,C=0,w=0;u.sort(uP);for(let E=0,L=u.length;E<L;E++){const b=u[E],D=b.color,U=b.intensity,H=b.distance;let k=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Ga?k=b.shadow.map.texture:k=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)c+=D.r*U,d+=D.g*U,f+=D.b*U;else if(b.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(b.sh.coefficients[V],U);w++}else if(b.isDirectionalLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const F=b.shadow,z=t.get(b);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=b.shadow.matrix,g++}i.directional[p]=V,p++}else if(b.isSpotLight){const V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(D).multiplyScalar(U),V.distance=H,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,i.spot[v]=V;const F=b.shadow;if(b.map&&(i.spotLightMap[T]=b.map,T++,F.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[v]=F.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=k,S++}v++}else if(b.isRectAreaLight){const V=e.get(b);V.color.copy(D).multiplyScalar(U),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=V,m++}else if(b.isPointLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const F=b.shadow,z=t.get(b);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,z.shadowCameraNear=F.camera.near,z.shadowCameraFar=F.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=b.shadow.matrix,x++}i.point[_]=V,_++}else if(b.isHemisphereLight){const V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(U),V.groundColor.copy(b.groundColor).multiplyScalar(U),i.hemi[h]=V,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==h||y.numDirectionalShadows!==g||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==T||y.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,y.directionalLength=p,y.pointLength=_,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=h,y.numDirectionalShadows=g,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=T,y.numLightProbes=w,i.version=lP++)}function l(u,c){let d=0,f=0,p=0,_=0,v=0;const m=c.matrixWorldInverse;for(let h=0,g=u.length;h<g;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function s0(n){const e=new cP(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fP(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new s0(n),e.set(r,[o])):s>=a.length?(o=new s0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const dP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pP=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],mP=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],a0=new Ot,yo=new j,ed=new j;function gP(n,e,t){let i=new vy;const r=new Ke,s=new Ke,a=new Dt,o=new Dw,l=new Lw,u={},c=t.maxTextureSize,d={[Zr]:wn,[wn]:Zr,[Qi]:Qi},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:dP,fragmentShader:hP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new gr;_.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let h=this.type;this.render=function(C,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===xT&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pu);const E=n.getRenderTarget(),L=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ir),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=h!==this.type;U&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(k=>k.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,k=C.length;H<k;H++){const V=C[H],F=V.shadow;if(F===void 0){Ie("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const z=F.getFrameExtents();r.multiply(z),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/z.x),r.x=s.x*z.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/z.y),r.y=s.y*z.y,F.mapSize.y=s.y));const G=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=G,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ao){if(V.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Fi(r.x,r.y,{format:Ga,type:cr,minFilter:ln,magFilter:ln,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new ul(r.x,r.y,Pi),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=fr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Kt,F.map.depthTexture.magFilter=Kt}else V.isPointLight?(F.map=new Ty(r.x),F.map.depthTexture=new ww(r.x,ki)):(F.map=new Fi(r.x,r.y),F.map.depthTexture=new ul(r.x,r.y,ki)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=fr,this.type===Pu?(F.map.depthTexture.compareFunction=G?_m:gm,F.map.depthTexture.minFilter=ln,F.map.depthTexture.magFilter=ln):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Kt,F.map.depthTexture.magFilter=Kt);F.camera.updateProjectionMatrix()}const Z=F.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<Z;te++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,te),n.clear();else{te===0&&(n.setRenderTarget(F.map),n.clear());const ee=F.getViewport(te);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),D.viewport(a)}if(V.isPointLight){const ee=F.camera,Ae=F.matrix,Le=V.distance||ee.far;Le!==ee.far&&(ee.far=Le,ee.updateProjectionMatrix()),yo.setFromMatrixPosition(V.matrixWorld),ee.position.copy(yo),ed.copy(ee.position),ed.add(pP[te]),ee.up.copy(mP[te]),ee.lookAt(ed),ee.updateMatrixWorld(),Ae.makeTranslation(-yo.x,-yo.y,-yo.z),a0.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),F._frustum.setFromProjectionMatrix(a0,ee.coordinateSystem,ee.reversedDepth)}else F.updateMatrices(V);i=F.getFrustum(),S(w,y,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===Ao&&g(F,y),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,L,b)};function g(C,w){const y=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fi(r.x,r.y,{format:Ga,type:cr})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,y,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,y,p,v,null)}function x(C,w,y,E){let L=null;const b=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)L=b;else if(L=y.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=L.uuid,U=w.uuid;let H=u[D];H===void 0&&(H={},u[D]=H);let k=H[U];k===void 0&&(k=L.clone(),H[U]=k,w.addEventListener("dispose",T)),L=k}if(L.visible=w.visible,L.wireframe=w.wireframe,E===Ao?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:d[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const D=n.properties.get(L);D.light=y}return L}function S(C,w,y,E,L){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&L===Ao)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);const U=e.update(C),H=C.material;if(Array.isArray(H)){const k=U.groups;for(let V=0,F=k.length;V<F;V++){const z=k[V],G=H[z.materialIndex];if(G&&G.visible){const Z=x(C,G,E,L);C.onBeforeShadow(n,C,w,y,U,Z,z),n.renderBufferDirect(y,null,U,Z,C,z),C.onAfterShadow(n,C,w,y,U,Z,z)}}}else if(H.visible){const k=x(C,H,E,L);C.onBeforeShadow(n,C,w,y,U,k,null),n.renderBufferDirect(y,null,U,k,C,null),C.onAfterShadow(n,C,w,y,U,k,null)}}const D=C.children;for(let U=0,H=D.length;U<H;U++)S(D[U],w,y,E,L)}function T(C){C.target.removeEventListener("dispose",T);for(const y in u){const E=u[y],L=C.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function _P(n,e){function t(){let N=!1;const ce=new Dt;let le=null;const ve=new Dt(0,0,0,0);return{setMask:function(se){le!==se&&!N&&(n.colorMask(se,se,se,se),le=se)},setLocked:function(se){N=se},setClear:function(se,q,Se,Ue,dt){dt===!0&&(se*=Ue,q*=Ue,Se*=Ue),ce.set(se,q,Se,Ue),ve.equals(ce)===!1&&(n.clearColor(se,q,Se,Ue),ve.copy(ce))},reset:function(){N=!1,le=null,ve.set(-1,0,0,0)}}}function i(){let N=!1,ce=!1,le=null,ve=null,se=null;return{setReversed:function(q){if(ce!==q){const Se=e.get("EXT_clip_control");q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ce=q;const Ue=se;se=null,this.setClear(Ue)}},getReversed:function(){return ce},setTest:function(q){q?ae(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(q){le!==q&&!N&&(n.depthMask(q),le=q)},setFunc:function(q){if(ce&&(q=JT[q]),ve!==q){switch(q){case oh:n.depthFunc(n.NEVER);break;case lh:n.depthFunc(n.ALWAYS);break;case uh:n.depthFunc(n.LESS);break;case Va:n.depthFunc(n.LEQUAL);break;case ch:n.depthFunc(n.EQUAL);break;case fh:n.depthFunc(n.GEQUAL);break;case dh:n.depthFunc(n.GREATER);break;case hh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=q}},setLocked:function(q){N=q},setClear:function(q){se!==q&&(se=q,ce&&(q=1-q),n.clearDepth(q))},reset:function(){N=!1,le=null,ve=null,se=null,ce=!1}}}function r(){let N=!1,ce=null,le=null,ve=null,se=null,q=null,Se=null,Ue=null,dt=null;return{setTest:function(tt){N||(tt?ae(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(tt){ce!==tt&&!N&&(n.stencilMask(tt),ce=tt)},setFunc:function(tt,Vi,Hi){(le!==tt||ve!==Vi||se!==Hi)&&(n.stencilFunc(tt,Vi,Hi),le=tt,ve=Vi,se=Hi)},setOp:function(tt,Vi,Hi){(q!==tt||Se!==Vi||Ue!==Hi)&&(n.stencilOp(tt,Vi,Hi),q=tt,Se=Vi,Ue=Hi)},setLocked:function(tt){N=tt},setClear:function(tt){dt!==tt&&(n.clearStencil(tt),dt=tt)},reset:function(){N=!1,ce=null,le=null,ve=null,se=null,q=null,Se=null,Ue=null,dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,h=null,g=null,x=null,S=null,T=null,C=null,w=new at(0,0,0),y=0,E=!1,L=null,b=null,D=null,U=null,H=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,F=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=F>=1):z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=F>=2);let G=null,Z={};const te=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),Ae=new Dt().fromArray(te),Le=new Dt().fromArray(ee);function ze(N,ce,le,ve){const se=new Uint8Array(4),q=n.createTexture();n.bindTexture(N,q),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<le;Se++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ce+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return q}const $={};$[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(Va),Ve(!1),Ct(d_),ae(n.CULL_FACE),et(ir);function ae(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function fe(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Oe(N,ce){return d[N]!==ce?(n.bindFramebuffer(N,ce),d[N]=ce,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ce),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(N,ce){let le=p,ve=!1;if(N){le=f.get(ce),le===void 0&&(le=[],f.set(ce,le));const se=N.textures;if(le.length!==se.length||le[0]!==n.COLOR_ATTACHMENT0){for(let q=0,Se=se.length;q<Se;q++)le[q]=n.COLOR_ATTACHMENT0+q;le.length=se.length,ve=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ve=!0);ve&&n.drawBuffers(le)}function Ne(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const Ht={[Ss]:n.FUNC_ADD,[ST]:n.FUNC_SUBTRACT,[MT]:n.FUNC_REVERSE_SUBTRACT};Ht[ET]=n.MIN,Ht[TT]=n.MAX;const Ye={[wT]:n.ZERO,[AT]:n.ONE,[CT]:n.SRC_COLOR,[sh]:n.SRC_ALPHA,[NT]:n.SRC_ALPHA_SATURATE,[DT]:n.DST_COLOR,[bT]:n.DST_ALPHA,[RT]:n.ONE_MINUS_SRC_COLOR,[ah]:n.ONE_MINUS_SRC_ALPHA,[LT]:n.ONE_MINUS_DST_COLOR,[PT]:n.ONE_MINUS_DST_ALPHA,[IT]:n.CONSTANT_COLOR,[UT]:n.ONE_MINUS_CONSTANT_COLOR,[FT]:n.CONSTANT_ALPHA,[OT]:n.ONE_MINUS_CONSTANT_ALPHA};function et(N,ce,le,ve,se,q,Se,Ue,dt,tt){if(N===ir){v===!0&&(fe(n.BLEND),v=!1);return}if(v===!1&&(ae(n.BLEND),v=!0),N!==yT){if(N!==m||tt!==E){if((h!==Ss||S!==Ss)&&(n.blendEquation(n.FUNC_ADD),h=Ss,S=Ss),tt)switch(N){case ba:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case h_:n.blendFunc(n.ONE,n.ONE);break;case p_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case m_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",N);break}else switch(N){case ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case h_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case p_:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m_:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",N);break}g=null,x=null,T=null,C=null,w.set(0,0,0),y=0,m=N,E=tt}return}se=se||ce,q=q||le,Se=Se||ve,(ce!==h||se!==S)&&(n.blendEquationSeparate(Ht[ce],Ht[se]),h=ce,S=se),(le!==g||ve!==x||q!==T||Se!==C)&&(n.blendFuncSeparate(Ye[le],Ye[ve],Ye[q],Ye[Se]),g=le,x=ve,T=q,C=Se),(Ue.equals(w)===!1||dt!==y)&&(n.blendColor(Ue.r,Ue.g,Ue.b,dt),w.copy(Ue),y=dt),m=N,E=!1}function ot(N,ce){N.side===Qi?fe(n.CULL_FACE):ae(n.CULL_FACE);let le=N.side===wn;ce&&(le=!le),Ve(le),N.blending===ba&&N.transparent===!1?et(ir):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const ve=N.stencilWrite;o.setTest(ve),ve&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Ct(N){N!==_T?(ae(n.CULL_FACE),N!==b&&(N===d_?n.cullFace(n.BACK):N===vT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),b=N}function P(N){N!==D&&(V&&n.lineWidth(N),D=N)}function Lt(N,ce,le){N?(ae(n.POLYGON_OFFSET_FILL),(U!==ce||H!==le)&&(U=ce,H=le,a.getReversed()&&(ce=-ce),n.polygonOffset(ce,le))):fe(n.POLYGON_OFFSET_FILL)}function Je(N){N?ae(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function ft(N){N===void 0&&(N=n.TEXTURE0+k-1),G!==N&&(n.activeTexture(N),G=N)}function Te(N,ce,le){le===void 0&&(G===null?le=n.TEXTURE0+k-1:le=G);let ve=Z[le];ve===void 0&&(ve={type:void 0,texture:void 0},Z[le]=ve),(ve.type!==N||ve.texture!==ce)&&(G!==le&&(n.activeTexture(le),G=le),n.bindTexture(N,ce||$[N]),ve.type=N,ve.texture=ce)}function R(){const N=Z[G];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function Q(){try{n.texSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function J(){try{n.texSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function ue(){try{n.texStorage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function be(){try{n.texStorage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function De(){try{n.texImage2D(...arguments)}catch(N){Qe("WebGLState:",N)}}function re(){try{n.texImage3D(...arguments)}catch(N){Qe("WebGLState:",N)}}function oe(N){Ae.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ae.copy(N))}function ye(N){Le.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Le.copy(N))}function Me(N,ce){let le=u.get(ce);le===void 0&&(le=new WeakMap,u.set(ce,le));let ve=le.get(N);ve===void 0&&(ve=n.getUniformBlockIndex(ce,N.name),le.set(N,ve))}function me(N,ce){const ve=u.get(ce).get(N);l.get(ce)!==ve&&(n.uniformBlockBinding(ce,ve,N.__bindingPointIndex),l.set(ce,ve))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,Z={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,h=null,g=null,x=null,S=null,T=null,C=null,w=new at(0,0,0),y=0,E=!1,L=null,b=null,D=null,U=null,H=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:fe,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:Ne,setBlending:et,setMaterial:ot,setFlipSided:Ve,setCullFace:Ct,setLineWidth:P,setPolygonOffset:Lt,setScissorTest:Je,activeTexture:ft,bindTexture:Te,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:De,texImage3D:re,updateUBOMapping:Me,uniformBlockBinding:me,texStorage2D:ue,texStorage3D:be,texSubImage2D:Q,texSubImage3D:J,compressedTexSubImage2D:K,compressedTexSubImage3D:xe,scissor:oe,viewport:ye,reset:He}}function vP(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):hc("canvas")}function v(R,M,O){let Q=1;const J=Te(R);if((J.width>O||J.height>O)&&(Q=O/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Q*J.width),xe=Math.floor(Q*J.height);d===void 0&&(d=_(K,xe));const ue=M?_(K,xe):d;return ue.width=K,ue.height=xe,ue.getContext("2d").drawImage(R,0,0,K,xe),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+xe+")."),ue}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){n.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,M,O,Q,J=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),M===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){const xe=J?fc:qe.getTransfer(Q);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=xe===nt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(R,M){let O;return R?M===null||M===ki||M===ll?O=n.DEPTH24_STENCIL8:M===Pi?O=n.DEPTH32F_STENCIL8:M===ol&&(O=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===ll?O=n.DEPTH_COMPONENT24:M===Pi?O=n.DEPTH_COMPONENT32F:M===ol&&(O=n.DEPTH_COMPONENT16),O}function T(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),y(M),M.isVideoTexture&&c.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),L(M)}function y(R){const M=i.get(R);if(M.__webglInit===void 0)return;const O=R.source,Q=f.get(O);if(Q){const J=Q[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(R),Object.keys(Q).length===0&&f.delete(O)}i.remove(R)}function E(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const O=R.source,Q=f.get(O);delete Q[M.__cacheKey],a.memory.textures--}function L(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let J=0;J<M.__webglFramebuffer[Q].length;J++)n.deleteFramebuffer(M.__webglFramebuffer[Q][J]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let Q=0,J=O.length;Q<J;Q++){const K=i.get(O[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(O[Q])}i.remove(R)}let b=0;function D(){b=0}function U(){const R=b;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),b+=1,R}function H(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function k(R,M){const O=i.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const Q=R.image;if(Q===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,R,M);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function V(R,M){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){$(O,R,M);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function F(R,M){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){$(O,R,M);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function z(R,M){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){ae(O,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const G={[ph]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[mh]:n.MIRRORED_REPEAT},Z={[Kt]:n.NEAREST,[zT]:n.NEAREST_MIPMAP_NEAREST,[ql]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Tf]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},te={[WT]:n.NEVER,[$T]:n.ALWAYS,[XT]:n.LESS,[gm]:n.LEQUAL,[jT]:n.EQUAL,[_m]:n.GEQUAL,[YT]:n.GREATER,[qT]:n.NOTEQUAL};function ee(R,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===Tf||M.magFilter===ql||M.magFilter===As||M.minFilter===ln||M.minFilter===Tf||M.minFilter===ql||M.minFilter===As)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,G[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,G[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,G[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==ql&&M.minFilter!==As||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const Q=M.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const K=H(M);if(K!==R.__cacheKey){J[K]===void 0&&(J[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[K].usedTimes++;const xe=J[R.__cacheKey];xe!==void 0&&(J[R.__cacheKey].usedTimes--,xe.usedTimes===0&&E(M)),R.__cacheKey=K,R.__webglTexture=J[K].texture}return O}function Le(R,M,O){return Math.floor(Math.floor(R/O)/M)}function ze(R,M,O,Q){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,O,Q,M.data);else{K.sort((re,oe)=>re.start-oe.start);let xe=0;for(let re=1;re<K.length;re++){const oe=K[xe],ye=K[re],Me=oe.start+oe.count,me=Le(ye.start,M.width,4),He=Le(oe.start,M.width,4);ye.start<=Me+1&&me===He&&Le(ye.start+ye.count-1,M.width,4)===me?oe.count=Math.max(oe.count,ye.start+ye.count-oe.start):(++xe,K[xe]=ye)}K.length=xe+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let re=0,oe=K.length;re<oe;re++){const ye=K[re],Me=Math.floor(ye.start/4),me=Math.ceil(ye.count/4),He=Me%M.width,N=Math.floor(Me/M.width),ce=me,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,He,N,ce,le,O,Q,M.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function $(R,M,O){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const J=Ae(R,M),K=M.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+O);const xe=i.get(K);if(K.version!==xe.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const ue=qe.getPrimaries(qe.workingColorSpace),be=M.colorSpace===Pr?null:qe.getPrimaries(M.colorSpace),De=M.colorSpace===Pr||ue===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let re=v(M.image,!1,r.maxTextureSize);re=ft(M,re);const oe=s.convert(M.format,M.colorSpace),ye=s.convert(M.type);let Me=x(M.internalFormat,oe,ye,M.colorSpace,M.isVideoTexture);ee(Q,M);let me;const He=M.mipmaps,N=M.isVideoTexture!==!0,ce=xe.__version===void 0||J===!0,le=K.dataReady,ve=T(M,re);if(M.isDepthTexture)Me=S(M.format===Cs,M.type),ce&&(N?t.texStorage2D(n.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,oe,ye,null));else if(M.isDataTexture)if(He.length>0){N&&ce&&t.texStorage2D(n.TEXTURE_2D,ve,Me,He[0].width,He[0].height);for(let se=0,q=He.length;se<q;se++)me=He[se],N?le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,oe,ye,me.data):t.texImage2D(n.TEXTURE_2D,se,Me,me.width,me.height,0,oe,ye,me.data);M.generateMipmaps=!1}else N?(ce&&t.texStorage2D(n.TEXTURE_2D,ve,Me,re.width,re.height),le&&ze(M,re,oe,ye)):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,oe,ye,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Me,He[0].width,He[0].height,re.depth);for(let se=0,q=He.length;se<q;se++)if(me=He[se],M.format!==gi)if(oe!==null)if(N){if(le)if(M.layerUpdates.size>0){const Se=O_(me.width,me.height,M.format,M.type);for(const Ue of M.layerUpdates){const dt=me.data.subarray(Ue*Se/me.data.BYTES_PER_ELEMENT,(Ue+1)*Se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ue,me.width,me.height,1,oe,dt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,re.depth,oe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Me,me.width,me.height,re.depth,0,me.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,re.depth,oe,ye,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Me,me.width,me.height,re.depth,0,oe,ye,me.data)}else{N&&ce&&t.texStorage2D(n.TEXTURE_2D,ve,Me,He[0].width,He[0].height);for(let se=0,q=He.length;se<q;se++)me=He[se],M.format!==gi?oe!==null?N?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,oe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Me,me.width,me.height,0,me.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,oe,ye,me.data):t.texImage2D(n.TEXTURE_2D,se,Me,me.width,me.height,0,oe,ye,me.data)}else if(M.isDataArrayTexture)if(N){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Me,re.width,re.height,re.depth),le)if(M.layerUpdates.size>0){const se=O_(re.width,re.height,M.format,M.type);for(const q of M.layerUpdates){const Se=re.data.subarray(q*se/re.data.BYTES_PER_ELEMENT,(q+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,re.width,re.height,1,oe,ye,Se)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,oe,ye,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,oe,ye,re.data);else if(M.isData3DTexture)N?(ce&&t.texStorage3D(n.TEXTURE_3D,ve,Me,re.width,re.height,re.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,oe,ye,re.data)):t.texImage3D(n.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,oe,ye,re.data);else if(M.isFramebufferTexture){if(ce)if(N)t.texStorage2D(n.TEXTURE_2D,ve,Me,re.width,re.height);else{let se=re.width,q=re.height;for(let Se=0;Se<ve;Se++)t.texImage2D(n.TEXTURE_2D,Se,Me,se,q,0,oe,ye,null),se>>=1,q>>=1}}else if(He.length>0){if(N&&ce){const se=Te(He[0]);t.texStorage2D(n.TEXTURE_2D,ve,Me,se.width,se.height)}for(let se=0,q=He.length;se<q;se++)me=He[se],N?le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,oe,ye,me):t.texImage2D(n.TEXTURE_2D,se,Me,oe,ye,me);M.generateMipmaps=!1}else if(N){if(ce){const se=Te(re);t.texStorage2D(n.TEXTURE_2D,ve,Me,se.width,se.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,ye,re)}else t.texImage2D(n.TEXTURE_2D,0,Me,oe,ye,re);m(M)&&h(Q),xe.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ae(R,M,O){if(M.image.length!==6)return;const Q=Ae(R,M),J=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);const K=i.get(J);if(J.version!==K.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const xe=qe.getPrimaries(qe.workingColorSpace),ue=M.colorSpace===Pr?null:qe.getPrimaries(M.colorSpace),be=M.colorSpace===Pr||xe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let q=0;q<6;q++)!De&&!re?oe[q]=v(M.image[q],!0,r.maxCubemapSize):oe[q]=re?M.image[q].image:M.image[q],oe[q]=ft(M,oe[q]);const ye=oe[0],Me=s.convert(M.format,M.colorSpace),me=s.convert(M.type),He=x(M.internalFormat,Me,me,M.colorSpace),N=M.isVideoTexture!==!0,ce=K.__version===void 0||Q===!0,le=J.dataReady;let ve=T(M,ye);ee(n.TEXTURE_CUBE_MAP,M);let se;if(De){N&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,He,ye.width,ye.height);for(let q=0;q<6;q++){se=oe[q].mipmaps;for(let Se=0;Se<se.length;Se++){const Ue=se[Se];M.format!==gi?Me!==null?N?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,He,Ue.width,Ue.height,0,Ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,0,0,Ue.width,Ue.height,Me,me,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,He,Ue.width,Ue.height,0,Me,me,Ue.data)}}}else{if(se=M.mipmaps,N&&ce){se.length>0&&ve++;const q=Te(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,He,q.width,q.height)}for(let q=0;q<6;q++)if(re){N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,oe[q].width,oe[q].height,Me,me,oe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,oe[q].width,oe[q].height,0,Me,me,oe[q].data);for(let Se=0;Se<se.length;Se++){const dt=se[Se].image[q].image;N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,0,0,dt.width,dt.height,Me,me,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,He,dt.width,dt.height,0,Me,me,dt.data)}}else{N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me,me,oe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,Me,me,oe[q]);for(let Se=0;Se<se.length;Se++){const Ue=se[Se];N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,0,0,Me,me,Ue.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,He,Me,me,Ue.image[q])}}}m(M)&&h(n.TEXTURE_CUBE_MAP),K.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function fe(R,M,O,Q,J,K){const xe=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),be=x(O.internalFormat,xe,ue,O.colorSpace),De=i.get(M),re=i.get(O);if(re.__renderTarget=M,!De.__hasExternalTextures){const oe=Math.max(1,M.width>>K),ye=Math.max(1,M.height>>K);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,K,be,oe,ye,M.depth,0,xe,ue,null):t.texImage2D(J,K,be,oe,ye,0,xe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Lt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,re.__webglTexture,0,P(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,re.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(R,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=S(M.stencilBuffer,J),xe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Lt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(M),K,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(M),K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,R)}else{const Q=M.textures;for(let J=0;J<Q.length;J++){const K=Q[J],xe=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),be=x(K.internalFormat,xe,ue,K.colorSpace);Lt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(M),be,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(M),be,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,be,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(R,M,O){const Q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ee(n.TEXTURE_CUBE_MAP,M.depthTexture);const De=s.convert(M.depthTexture.format),re=s.convert(M.depthTexture.type);let oe;M.depthTexture.format===fr?oe=n.DEPTH_COMPONENT24:M.depthTexture.format===Cs&&(oe=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,oe,M.width,M.height,0,De,re,null)}}else k(M.depthTexture,0);const K=J.__webglTexture,xe=P(M),ue=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,be=M.depthTexture.format===Cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===fr)Lt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ue,K,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,be,ue,K,0);else if(M.depthTexture.format===Cs)Lt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ue,K,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,be,ue,K,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const M=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(O)for(let Q=0;Q<6;Q++)Pe(M.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?Pe(M.__webglFramebuffer[0],R,0):Pe(M.__webglFramebuffer,R,0)}else if(O){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),Oe(M.__webglDepthbuffer[Q],R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,K)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Oe(M.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(R,M,O){const Q=i.get(R);M!==void 0&&fe(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ne(R)}function Ye(R){const M=R.texture,O=i.get(R),Q=i.get(M);R.addEventListener("dispose",w);const J=R.textures,K=R.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let be=0;be<M.mipmaps.length;be++)O.__webglFramebuffer[ue][be]=n.createFramebuffer()}else O.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)O.__webglFramebuffer[ue]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ue=0,be=J.length;ue<be;ue++){const De=i.get(J[ue]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Lt(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const be=J[ue];O.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const De=s.convert(be.format,be.colorSpace),re=s.convert(be.type),oe=x(be.internalFormat,De,re,be.colorSpace,R.isXRRenderTarget===!0),ye=P(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,oe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ee(n.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)fe(O.__webglFramebuffer[ue][be],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be);else fe(O.__webglFramebuffer[ue],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ue=0,be=J.length;ue<be;ue++){const De=J[ue],re=i.get(De);let oe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,re.__webglTexture),ee(oe,De),fe(O.__webglFramebuffer,R,De,n.COLOR_ATTACHMENT0+ue,oe,0),m(De)&&h(oe)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),ee(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)fe(O.__webglFramebuffer[be],R,M,n.COLOR_ATTACHMENT0,ue,be);else fe(O.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ue,0);m(M)&&h(ue),t.unbindTexture()}R.depthBuffer&&Ne(R)}function et(R){const M=R.textures;for(let O=0,Q=M.length;O<Q;O++){const J=M[O];if(m(J)){const K=g(R),xe=i.get(J).__webglTexture;t.bindTexture(K,xe),h(K),t.unbindTexture()}}}const ot=[],Ve=[];function Ct(R){if(R.samples>0){if(Lt(R)===!1){const M=R.textures,O=R.width,Q=R.height;let J=n.COLOR_BUFFER_BIT;const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),ue=M.length>1;if(ue)for(let De=0;De<M.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<M.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const re=i.get(M[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,J,n.NEAREST),l===!0&&(ot.length=0,Ve.length=0,ot.push(n.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ot.push(K),Ve.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let De=0;De<M.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const re=i.get(M[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function P(R){return Math.min(r.maxSamples,R.samples)}function Lt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Je(R){const M=a.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function ft(R,M){const O=R.colorSpace,Q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Wa&&O!==Pr&&(qe.getTransfer(O)===nt?(Q!==gi||J!==Jn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",O)),M}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=F,this.setTextureCube=z,this.rebindTextures=Ht,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xP(n,e){function t(i,r=Pr){let s;const a=qe.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===fm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ay)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ry)return n.BYTE;if(i===sy)return n.SHORT;if(i===ol)return n.UNSIGNED_SHORT;if(i===cm)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===cr)return n.HALF_FLOAT;if(i===ly)return n.ALPHA;if(i===uy)return n.RGB;if(i===gi)return n.RGBA;if(i===fr)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===cy)return n.RED;if(i===hm)return n.RED_INTEGER;if(i===Ga)return n.RG;if(i===pm)return n.RG_INTEGER;if(i===mm)return n.RGBA_INTEGER;if(i===Du||i===Lu||i===Nu||i===Iu)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Du)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Du)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Iu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===_h||i===vh||i===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yh||i===Sh)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Eh)return s.COMPRESSED_R11_EAC;if(i===Th)return s.COMPRESSED_SIGNED_R11_EAC;if(i===wh)return s.COMPRESSED_RG11_EAC;if(i===Ah)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ch||i===Rh||i===bh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ch)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ph)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ih)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vh||i===Hh||i===Gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vh)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wh||i===Xh||i===jh||i===Yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ll?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const yP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:yP,fragmentShader:SP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bi(new Cl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EP extends no{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new MP,h={},g=t.getContextAttributes();let x=null,S=null;const T=[],C=[],w=new Ke;let y=null;const E=new pi;E.viewport=new Dt;const L=new pi;L.viewport=new Dt;const b=[E,L],D=new Iw;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=T[$];return ae===void 0&&(ae=new Lf,T[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=T[$];return ae===void 0&&(ae=new Lf,T[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=T[$];return ae===void 0&&(ae=new Lf,T[$]=ae),ae.getHandSpace()};function k($){const ae=C.indexOf($.inputSource);if(ae===-1)return;const fe=T[ae];fe!==void 0&&(fe.update($.inputSource,$.frame,u||a),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",F);for(let $=0;$<T.length;$++){const ae=C[$];ae!==null&&(C[$]=null,T[$].disconnect(ae))}U=null,H=null,m.reset();for(const $ in h)delete h[$];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",V),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Oe=null,Pe=null;g.depth&&(Pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=g.stencil?Cs:fr,Oe=g.stencil?ll:ki);const Ne={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Fi(f.textureWidth,f.textureHeight,{format:gi,type:Jn,depthTexture:new ul(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Fi(p.framebufferWidth,p.framebufferHeight,{format:gi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F($){for(let ae=0;ae<$.removed.length;ae++){const fe=$.removed[ae],Oe=C.indexOf(fe);Oe>=0&&(C[Oe]=null,T[Oe].disconnect(fe))}for(let ae=0;ae<$.added.length;ae++){const fe=$.added[ae];let Oe=C.indexOf(fe);if(Oe===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=C.length){C.push(fe),Oe=Ne;break}else if(C[Ne]===null){C[Ne]=fe,Oe=Ne;break}if(Oe===-1)break}const Pe=T[Oe];Pe&&Pe.connect(fe)}}const z=new j,G=new j;function Z($,ae,fe){z.setFromMatrixPosition(ae.matrixWorld),G.setFromMatrixPosition(fe.matrixWorld);const Oe=z.distanceTo(G),Pe=ae.projectionMatrix.elements,Ne=fe.projectionMatrix.elements,Ht=Pe[14]/(Pe[10]-1),Ye=Pe[14]/(Pe[10]+1),et=(Pe[9]+1)/Pe[5],ot=(Pe[9]-1)/Pe[5],Ve=(Pe[8]-1)/Pe[0],Ct=(Ne[8]+1)/Ne[0],P=Ht*Ve,Lt=Ht*Ct,Je=Oe/(-Ve+Ct),ft=Je*-Ve;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ft),$.translateZ(Je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Te=Ht+Je,R=Ye+Je,M=P-ft,O=Lt+(Oe-ft),Q=et*Ye/R*Te,J=ot*Ye/R*Te;$.projectionMatrix.makePerspective(M,O,Q,J,Te,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ae=$.near,fe=$.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),D.near=L.near=E.near=ae,D.far=L.far=E.far=fe,(U!==D.near||H!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,H=D.far),D.layers.mask=$.layers.mask|6,E.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;const Oe=$.parent,Pe=D.cameras;te(D,Oe);for(let Ne=0;Ne<Pe.length;Ne++)te(Pe[Ne],Oe);Pe.length===2?Z(D,E,L):D.projectionMatrix.copy(E.projectionMatrix),ee($,D,Oe)};function ee($,ae,fe){fe===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function($){return h[$]};let Ae=null;function Le($,ae){if(c=ae.getViewerPose(u||a),_=ae,c!==null){const fe=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Oe=!1;fe.length!==D.cameras.length&&(D.cameras.length=0,Oe=!0);for(let Ye=0;Ye<fe.length;Ye++){const et=fe[Ye];let ot=null;if(p!==null)ot=p.getViewport(et);else{const Ct=d.getViewSubImage(f,et);ot=Ct.viewport,Ye===0&&(e.setRenderTargetTextures(S,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(S))}let Ve=b[Ye];Ve===void 0&&(Ve=new pi,Ve.layers.enable(Ye),Ve.viewport=new Dt,b[Ye]=Ve),Ve.matrix.fromArray(et.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(et.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(D.matrix.copy(Ve.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Oe===!0&&D.cameras.push(Ve)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Ye=d.getDepthInformation(fe[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,r.renderState)}if(Pe&&Pe.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ye=0;Ye<fe.length;Ye++){const et=fe[Ye].camera;if(et){let ot=h[et];ot||(ot=new yy,h[et]=ot);const Ve=d.getCameraImage(et);ot.sourceTexture=Ve}}}}for(let fe=0;fe<T.length;fe++){const Oe=C[fe],Pe=T[fe];Oe!==null&&Pe!==void 0&&Pe.update(Oe,ae,u||a)}Ae&&Ae($,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const ze=new Ey;ze.setAnimationLoop(Le),this.setAnimationLoop=function($){Ae=$},this.dispose=function(){}}}const hs=new dr,TP=new Ot;function wP(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Sy(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,x,S){h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===wn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===wn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,hs.copy(S),hs.x*=-1,hs.y*=-1,hs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.envMapRotation.value.setFromMatrix4(TP.makeRotationFromEuler(hs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AP(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function u(g,x){let S=r[g.id];S===void 0&&(_(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(g,T);const C=e.render.frame;s[g.id]!==C&&(f(g),s[g.id]=C)}function c(g){const x=d();g.__bindingPointIndex=x;const S=n.createBuffer(),T=g.__size,C=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=r[g.id],S=g.uniforms,T=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,w=S.length;C<w;C++){const y=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,L=y.length;E<L;E++){const b=y[E];if(p(b,C,E,T)===!0){const D=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let k=0;k<U.length;k++){const V=U[k],F=v(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,D+H,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,x,S,T){const C=g.value,w=x+"_"+S;if(T[w]===void 0)return typeof C=="number"||typeof C=="boolean"?T[w]=C:T[w]=C.clone(),!0;{const y=T[w];if(typeof C=="number"||typeof C=="boolean"){if(y!==C)return T[w]=C,!0}else if(y.equals(C)===!1)return y.copy(C),!0}return!1}function _(g){const x=g.uniforms;let S=0;const T=16;for(let w=0,y=x.length;w<y;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let L=0,b=E.length;L<b;L++){const D=E[L],U=Array.isArray(D.value)?D.value:[D.value];for(let H=0,k=U.length;H<k;H++){const V=U[H],F=v(V),z=S%T,G=z%F.boundary,Z=z+G;S+=G,Z!==0&&T-Z<F.storage&&(S+=T-Z),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=F.storage}}}const C=S%T;return C>0&&(S+=T-C),g.__size=S,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const g in r)n.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}const CP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function RP(){return Ti===null&&(Ti=new Sw(CP,16,16,Ga,cr),Ti.name="DFG_LUT",Ti.minFilter=ln,Ti.magFilter=ln,Ti.wrapS=tr,Ti.wrapT=tr,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class bP{constructor(e={}){const{canvas:t=ZT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Jn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,m=new Set([mm,pm,hm]),h=new Set([Jn,ki,ol,ll,fm,dm]),g=new Uint32Array(4),x=new Int32Array(4);let S=null,T=null;const C=[],w=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Un;let b=0,D=0,U=null,H=-1,k=null;const V=new Dt,F=new Dt;let z=null;const G=new at(0);let Z=0,te=t.width,ee=t.height,Ae=1,Le=null,ze=null;const $=new Dt(0,0,te,ee),ae=new Dt(0,0,te,ee);let fe=!1;const Oe=new vy;let Pe=!1,Ne=!1;const Ht=new Ot,Ye=new j,et=new Dt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ct(){return U===null?Ae:1}let P=i;function Lt(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${um}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",dt,!1),P===null){const B="webgl2";if(P=Lt(B,A),P===null)throw Lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Qe("WebGLRenderer: "+A.message),A}let Je,ft,Te,R,M,O,Q,J,K,xe,ue,be,De,re,oe,ye,Me,me,He,N,ce,le,ve;function se(){Je=new bR(P),Je.init(),ce=new xP(P,Je),ft=new SR(P,Je,e,ce),Te=new _P(P,Je),ft.reversedDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),R=new LR(P),M=new iP,O=new vP(P,Je,Te,M,ft,ce,R),Q=new RR(E),J=new Ow(P),le=new xR(P,J),K=new PR(P,J,R,le),xe=new IR(P,K,J,le,R),me=new NR(P,ft,O),oe=new MR(M),ue=new nP(E,Q,Je,ft,le,oe),be=new wP(E,M),De=new sP,re=new fP(Je),Me=new vR(E,Q,Te,xe,_,l),ye=new gP(E,xe,ft),ve=new AP(P,R,ft,Te),He=new yR(P,Je,R),N=new DR(P,Je,R),R.programs=ue.programs,E.capabilities=ft,E.extensions=Je,E.properties=M,E.renderLists=De,E.shadowMap=ye,E.state=Te,E.info=R}se(),v!==Jn&&(y=new FR(v,t.width,t.height,r,s));const q=new EP(E,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=Je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(A){A!==void 0&&(Ae=A,this.setSize(te,ee,!1))},this.getSize=function(A){return A.set(te,ee)},this.setSize=function(A,B,Y=!0){if(q.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,ee=B,t.width=Math.floor(A*Ae),t.height=Math.floor(B*Ae),Y===!0&&(t.style.width=A+"px",t.style.height=B+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(te*Ae,ee*Ae).floor()},this.setDrawingBufferSize=function(A,B,Y){te=A,ee=B,Ae=Y,t.width=Math.floor(A*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(v===Jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,B,Y,X){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,B,Y,X),Te.viewport(V.copy($).multiplyScalar(Ae).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,B,Y,X){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,B,Y,X),Te.scissor(F.copy(ae).multiplyScalar(Ae).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){Te.setScissorTest(fe=A)},this.setOpaqueSort=function(A){Le=A},this.setTransparentSort=function(A){ze=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Y=!0){let X=0;if(A){let W=!1;if(U!==null){const he=U.texture.format;W=m.has(he)}if(W){const he=U.texture.type,ge=h.has(he),pe=Me.getClearColor(),Ee=Me.getClearAlpha(),Ce=pe.r,Fe=pe.g,Ge=pe.b;ge?(g[0]=Ce,g[1]=Fe,g[2]=Ge,g[3]=Ee,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Ce,x[1]=Fe,x[2]=Ge,x[3]=Ee,P.clearBufferiv(P.COLOR,0,x))}else X|=P.COLOR_BUFFER_BIT}B&&(X|=P.DEPTH_BUFFER_BIT),Y&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Me.dispose(),De.dispose(),re.dispose(),M.dispose(),Q.dispose(),xe.dispose(),le.dispose(),ve.dispose(),ue.dispose(),q.dispose(),q.removeEventListener("sessionstart",zm),q.removeEventListener("sessionend",Vm),as.stop()};function Se(A){A.preventDefault(),y_("WebGLRenderer: Context Lost."),L=!0}function Ue(){y_("WebGLRenderer: Context Restored."),L=!1;const A=R.autoReset,B=ye.enabled,Y=ye.autoUpdate,X=ye.needsUpdate,W=ye.type;se(),R.autoReset=A,ye.enabled=B,ye.autoUpdate=Y,ye.needsUpdate=X,ye.type=W}function dt(A){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){const B=A.target;B.removeEventListener("dispose",tt),Vi(B)}function Vi(A){Hi(A),M.remove(A)}function Hi(A){const B=M.get(A).programs;B!==void 0&&(B.forEach(function(Y){ue.releaseProgram(Y)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,X,W,he){B===null&&(B=ot);const ge=W.isMesh&&W.matrixWorld.determinant()<0,pe=RS(A,B,Y,X,W);Te.setMaterial(X,ge);let Ee=Y.index,Ce=1;if(X.wireframe===!0){if(Ee=K.getWireframeAttribute(Y),Ee===void 0)return;Ce=2}const Fe=Y.drawRange,Ge=Y.attributes.position;let Re=Fe.start*Ce,rt=(Fe.start+Fe.count)*Ce;he!==null&&(Re=Math.max(Re,he.start*Ce),rt=Math.min(rt,(he.start+he.count)*Ce)),Ee!==null?(Re=Math.max(Re,0),rt=Math.min(rt,Ee.count)):Ge!=null&&(Re=Math.max(Re,0),rt=Math.min(rt,Ge.count));const Rt=rt-Re;if(Rt<0||Rt===1/0)return;le.setup(W,X,pe,Y,Ee);let Tt,st=He;if(Ee!==null&&(Tt=J.get(Ee),st=N,st.setIndex(Tt)),W.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*Ct()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(W.isLine){let en=X.linewidth;en===void 0&&(en=1),Te.setLineWidth(en*Ct()),W.isLineSegments?st.setMode(P.LINES):W.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else W.isPoints?st.setMode(P.POINTS):W.isSprite&&st.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)pc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const en=W._multiDrawStarts,we=W._multiDrawCounts,Dn=W._multiDrawCount,Ze=Ee?J.get(Ee).bytesPerElement:1,ai=M.get(X).currentProgram.getUniforms();for(let Si=0;Si<Dn;Si++)ai.setValue(P,"_gl_DrawID",Si),st.render(en[Si]/Ze,we[Si])}else if(W.isInstancedMesh)st.renderInstances(Re,Rt,W.count);else if(Y.isInstancedBufferGeometry){const en=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,we=Math.min(Y.instanceCount,en);st.renderInstances(Re,Rt,we)}else st.render(Re,Rt)};function Bm(A,B,Y){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,Pl(A,B,Y),A.side=Zr,A.needsUpdate=!0,Pl(A,B,Y),A.side=Qi):Pl(A,B,Y)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),T=re.get(Y),T.init(B),w.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const X=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const he=W.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const pe=he[ge];Bm(pe,Y,W),X.add(pe)}else Bm(he,Y,W),X.add(he)}),T=w.pop(),X},this.compileAsync=function(A,B,Y=null){const X=this.compile(A,B,Y);return new Promise(W=>{function he(){if(X.forEach(function(ge){M.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){W(A);return}setTimeout(he,10)}Je.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let jc=null;function CS(A){jc&&jc(A)}function zm(){as.stop()}function Vm(){as.start()}const as=new Ey;as.setAnimationLoop(CS),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(A){jc=A,q.setAnimationLoop(A),A===null?as.stop():as.start()},q.addEventListener("sessionstart",zm),q.addEventListener("sessionend",Vm),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const Y=q.enabled===!0&&q.isPresenting===!0,X=y!==null&&(U===null||Y)&&y.begin(E,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,B,U),T=re.get(A,w.length),T.init(B),w.push(T),Ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Oe.setFromProjectionMatrix(Ht,Di,B.reversedDepth),Ne=this.localClippingEnabled,Pe=oe.init(this.clippingPlanes,Ne),S=De.get(A,C.length),S.init(),C.push(S),q.enabled===!0&&q.isPresenting===!0){const ge=E.xr.getDepthSensingMesh();ge!==null&&Yc(ge,B,-1/0,E.sortObjects)}Yc(A,B,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(Le,ze),Ve=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ve&&Me.addToRenderList(S,A),this.info.render.frame++,Pe===!0&&oe.beginShadows();const W=T.state.shadowsArray;if(ye.render(W,A,B),Pe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&y.hasRenderPass())===!1){const ge=S.opaque,pe=S.transmissive;if(T.setupLights(),B.isArrayCamera){const Ee=B.cameras;if(pe.length>0)for(let Ce=0,Fe=Ee.length;Ce<Fe;Ce++){const Ge=Ee[Ce];Gm(ge,pe,A,Ge)}Ve&&Me.render(A);for(let Ce=0,Fe=Ee.length;Ce<Fe;Ce++){const Ge=Ee[Ce];Hm(S,A,Ge,Ge.viewport)}}else pe.length>0&&Gm(ge,pe,A,B),Ve&&Me.render(A),Hm(S,A,B)}U!==null&&D===0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U)),X&&y.end(E),A.isScene===!0&&A.onAfterRender(E,A,B),le.resetDefaultState(),H=-1,k=null,w.pop(),w.length>0?(T=w[w.length-1],Pe===!0&&oe.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function Yc(A,B,Y,X){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){X&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);const ge=xe.update(A),pe=A.material;pe.visible&&S.push(A,ge,pe,Y,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const ge=xe.update(A),pe=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),et.copy(ge.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(pe)){const Ee=ge.groups;for(let Ce=0,Fe=Ee.length;Ce<Fe;Ce++){const Ge=Ee[Ce],Re=pe[Ge.materialIndex];Re&&Re.visible&&S.push(A,ge,Re,Y,et.z,Ge)}}else pe.visible&&S.push(A,ge,pe,Y,et.z,null)}}const he=A.children;for(let ge=0,pe=he.length;ge<pe;ge++)Yc(he[ge],B,Y,X)}function Hm(A,B,Y,X){const{opaque:W,transmissive:he,transparent:ge}=A;T.setupLightsView(Y),Pe===!0&&oe.setGlobalState(E.clippingPlanes,Y),X&&Te.viewport(V.copy(X)),W.length>0&&bl(W,B,Y),he.length>0&&bl(he,B,Y),ge.length>0&&bl(ge,B,Y),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Gm(A,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const Re=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Fi(1,1,{generateMipmaps:!0,type:Re?cr:Jn,minFilter:As,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const he=T.state.transmissionRenderTarget[X.id],ge=X.viewport||V;he.setSize(ge.z*E.transmissionResolutionScale,ge.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),Ee=E.getActiveCubeFace(),Ce=E.getActiveMipmapLevel();E.setRenderTarget(he),E.getClearColor(G),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),Ve&&Me.render(Y);const Fe=E.toneMapping;E.toneMapping=Ui;const Ge=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),Pe===!0&&oe.setGlobalState(E.clippingPlanes,X),bl(A,Y,X),O.updateMultisampleRenderTarget(he),O.updateRenderTargetMipmap(he),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let rt=0,Rt=B.length;rt<Rt;rt++){const Tt=B[rt],{object:st,geometry:en,material:we,group:Dn}=Tt;if(we.side===Qi&&st.layers.test(X.layers)){const Ze=we.side;we.side=wn,we.needsUpdate=!0,Wm(st,Y,X,en,we,Dn),we.side=Ze,we.needsUpdate=!0,Re=!0}}Re===!0&&(O.updateMultisampleRenderTarget(he),O.updateRenderTargetMipmap(he))}E.setRenderTarget(pe,Ee,Ce),E.setClearColor(G,Z),Ge!==void 0&&(X.viewport=Ge),E.toneMapping=Fe}function bl(A,B,Y){const X=B.isScene===!0?B.overrideMaterial:null;for(let W=0,he=A.length;W<he;W++){const ge=A[W],{object:pe,geometry:Ee,group:Ce}=ge;let Fe=ge.material;Fe.allowOverride===!0&&X!==null&&(Fe=X),pe.layers.test(Y.layers)&&Wm(pe,B,Y,Ee,Fe,Ce)}}function Wm(A,B,Y,X,W,he){A.onBeforeRender(E,B,Y,X,W,he),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(E,B,Y,X,A,he),W.transparent===!0&&W.side===Qi&&W.forceSinglePass===!1?(W.side=wn,W.needsUpdate=!0,E.renderBufferDirect(Y,B,X,W,A,he),W.side=Zr,W.needsUpdate=!0,E.renderBufferDirect(Y,B,X,W,A,he),W.side=Qi):E.renderBufferDirect(Y,B,X,W,A,he),A.onAfterRender(E,B,Y,X,W,he)}function Pl(A,B,Y){B.isScene!==!0&&(B=ot);const X=M.get(A),W=T.state.lights,he=T.state.shadowsArray,ge=W.state.version,pe=ue.getParameters(A,W.state,he,B,Y),Ee=ue.getProgramCacheKey(pe);let Ce=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;const Fe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=Q.get(A.envMap||X.environment,Fe),X.envMapRotation=X.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ce===void 0&&(A.addEventListener("dispose",tt),Ce=new Map,X.programs=Ce);let Ge=Ce.get(Ee);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===ge)return jm(A,pe),Ge}else pe.uniforms=ue.getUniforms(A),A.onBeforeCompile(pe,E),Ge=ue.acquireProgram(pe,Ee),Ce.set(Ee,Ge),X.uniforms=pe.uniforms;const Re=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=oe.uniform),jm(A,pe),X.needsLights=PS(A),X.lightsStateVersion=ge,X.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function Xm(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Uu.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function jm(A,B){const Y=M.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function RS(A,B,Y,X,W){B.isScene!==!0&&(B=ot),O.resetTextureUnits();const he=B.fog,ge=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,pe=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Wa,Ee=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ce=Q.get(X.envMap||ge,Ee),Fe=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,Rt=!!Y.morphAttributes.color;let Tt=Ui;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Tt=E.toneMapping);const st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,en=st!==void 0?st.length:0,we=M.get(X),Dn=T.state.lights;if(Pe===!0&&(Ne===!0||A!==k)){const Gt=A===k&&X.id===H;oe.setState(X,A,Gt)}let Ze=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Dn.state.version||we.outputColorSpace!==pe||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Ce||X.fog===!0&&we.fog!==he||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==oe.numPlanes||we.numIntersection!==oe.numIntersection)||we.vertexAlphas!==Fe||we.vertexTangents!==Ge||we.morphTargets!==Re||we.morphNormals!==rt||we.morphColors!==Rt||we.toneMapping!==Tt||we.morphTargetsCount!==en)&&(Ze=!0):(Ze=!0,we.__version=X.version);let ai=we.currentProgram;Ze===!0&&(ai=Pl(X,B,W));let Si=!1,os=!1,Xs=!1;const lt=ai.getUniforms(),qt=we.uniforms;if(Te.useProgram(ai.program)&&(Si=!0,os=!0,Xs=!0),X.id!==H&&(H=X.id,os=!0),Si||k!==A){Te.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),lt.setValue(P,"projectionMatrix",A.projectionMatrix),lt.setValue(P,"viewMatrix",A.matrixWorldInverse);const vr=lt.map.cameraPosition;vr!==void 0&&vr.setValue(P,Ye.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,os=!0,Xs=!0)}if(we.needsLights&&(Dn.state.directionalShadowMap.length>0&&lt.setValue(P,"directionalShadowMap",Dn.state.directionalShadowMap,O),Dn.state.spotShadowMap.length>0&&lt.setValue(P,"spotShadowMap",Dn.state.spotShadowMap,O),Dn.state.pointShadowMap.length>0&&lt.setValue(P,"pointShadowMap",Dn.state.pointShadowMap,O)),W.isSkinnedMesh){lt.setOptional(P,W,"bindMatrix"),lt.setOptional(P,W,"bindMatrixInverse");const Gt=W.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),lt.setValue(P,"boneTexture",Gt.boneTexture,O))}W.isBatchedMesh&&(lt.setOptional(P,W,"batchingTexture"),lt.setValue(P,"batchingTexture",W._matricesTexture,O),lt.setOptional(P,W,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",W._indirectTexture,O),lt.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",W._colorsTexture,O));const _r=Y.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&me.update(W,Y,ai),(os||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,lt.setValue(P,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(qt.envMapIntensity.value=B.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=RP()),os&&(lt.setValue(P,"toneMappingExposure",E.toneMappingExposure),we.needsLights&&bS(qt,Xs),he&&X.fog===!0&&be.refreshFogUniforms(qt,he),be.refreshMaterialUniforms(qt,X,Ae,ee,T.state.transmissionRenderTarget[A.id]),Uu.upload(P,Xm(we),qt,O)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Uu.upload(P,Xm(we),qt,O),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(P,"center",W.center),lt.setValue(P,"modelViewMatrix",W.modelViewMatrix),lt.setValue(P,"normalMatrix",W.normalMatrix),lt.setValue(P,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Gt=X.uniformsGroups;for(let vr=0,js=Gt.length;vr<js;vr++){const Ym=Gt[vr];ve.update(Ym,ai),ve.bind(Ym,ai)}}return ai}function bS(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function PS(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,B,Y){const X=M.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=B,M.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const Y=M.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const DS=P.createFramebuffer();this.setRenderTarget=function(A,B=0,Y=0){U=A,b=B,D=Y;let X=null,W=!1,he=!1;if(A){const pe=M.get(A);if(pe.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(P.FRAMEBUFFER,pe.__webglFramebuffer),V.copy(A.viewport),F.copy(A.scissor),z=A.scissorTest,Te.viewport(V),Te.scissor(F),Te.setScissorTest(z),H=-1;return}else if(pe.__webglFramebuffer===void 0)O.setupRenderTarget(A);else if(pe.__hasExternalTextures)O.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Fe=A.depthTexture;if(pe.__boundDepthTexture!==Fe){if(Fe!==null&&M.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(A)}}const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(he=!0);const Ce=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[B])?X=Ce[B][Y]:X=Ce[B],W=!0):A.samples>0&&O.useMultisampledRTT(A)===!1?X=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?X=Ce[Y]:X=Ce,V.copy(A.viewport),F.copy(A.scissor),z=A.scissorTest}else V.copy($).multiplyScalar(Ae).floor(),F.copy(ae).multiplyScalar(Ae).floor(),z=fe;if(Y!==0&&(X=DS),Te.bindFramebuffer(P.FRAMEBUFFER,X)&&Te.drawBuffers(A,X),Te.viewport(V),Te.scissor(F),Te.setScissorTest(z),W){const pe=M.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,Y)}else if(he){const pe=B;for(let Ee=0;Ee<A.textures.length;Ee++){const Ce=M.get(A.textures[Ee]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,Y,pe)}}else if(A!==null&&Y!==0){const pe=M.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,Y)}H=-1},this.readRenderTargetPixels=function(A,B,Y,X,W,he,ge,pe=0){if(!(A&&A.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Te.bindFramebuffer(P.FRAMEBUFFER,Ee);try{const Ce=A.textures[pe],Fe=Ce.format,Ge=Ce.type;if(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),!ft.textureFormatReadable(Fe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ge)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-X&&Y>=0&&Y<=A.height-W&&P.readPixels(B,Y,X,W,ce.convert(Fe),ce.convert(Ge),he)}finally{const Ce=U!==null?M.get(U).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,B,Y,X,W,he,ge,pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee)if(B>=0&&B<=A.width-X&&Y>=0&&Y<=A.height-W){Te.bindFramebuffer(P.FRAMEBUFFER,Ee);const Ce=A.textures[pe],Fe=Ce.format,Ge=Ce.type;if(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe),!ft.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(B,Y,X,W,ce.convert(Fe),ce.convert(Ge),0);const rt=U!==null?M.get(U).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,rt);const Rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await QT(P,Rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(Re),P.deleteSync(Rt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Y=0){const X=Math.pow(2,-Y),W=Math.floor(A.image.width*X),he=Math.floor(A.image.height*X),ge=B!==null?B.x:0,pe=B!==null?B.y:0;O.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,ge,pe,W,he),Te.unbindTexture()};const LS=P.createFramebuffer(),NS=P.createFramebuffer();this.copyTextureToTexture=function(A,B,Y=null,X=null,W=0,he=0){let ge,pe,Ee,Ce,Fe,Ge,Re,rt,Rt;const Tt=A.isCompressedTexture?A.mipmaps[he]:A.image;if(Y!==null)ge=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Ce=Y.min.x,Fe=Y.min.y,Ge=Y.isBox3?Y.min.z:0;else{const qt=Math.pow(2,-W);ge=Math.floor(Tt.width*qt),pe=Math.floor(Tt.height*qt),A.isDataArrayTexture?Ee=Tt.depth:A.isData3DTexture?Ee=Math.floor(Tt.depth*qt):Ee=1,Ce=0,Fe=0,Ge=0}X!==null?(Re=X.x,rt=X.y,Rt=X.z):(Re=0,rt=0,Rt=0);const st=ce.convert(B.format),en=ce.convert(B.type);let we;B.isData3DTexture?(O.setTexture3D(B,0),we=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(O.setTexture2DArray(B,0),we=P.TEXTURE_2D_ARRAY):(O.setTexture2D(B,0),we=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const Dn=P.getParameter(P.UNPACK_ROW_LENGTH),Ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ai=P.getParameter(P.UNPACK_SKIP_PIXELS),Si=P.getParameter(P.UNPACK_SKIP_ROWS),os=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);const Xs=A.isDataArrayTexture||A.isData3DTexture,lt=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const qt=M.get(A),_r=M.get(B),Gt=M.get(qt.__renderTarget),vr=M.get(_r.__renderTarget);Te.bindFramebuffer(P.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let js=0;js<Ee;js++)Xs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(A).__webglTexture,W,Ge+js),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(B).__webglTexture,he,Rt+js)),P.blitFramebuffer(Ce,Fe,ge,pe,Re,rt,ge,pe,P.DEPTH_BUFFER_BIT,P.NEAREST);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||M.has(A)){const qt=M.get(A),_r=M.get(B);Te.bindFramebuffer(P.READ_FRAMEBUFFER,LS),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,NS);for(let Gt=0;Gt<Ee;Gt++)Xs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,W,Ge+Gt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,W),lt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_r.__webglTexture,he,Rt+Gt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_r.__webglTexture,he),W!==0?P.blitFramebuffer(Ce,Fe,ge,pe,Re,rt,ge,pe,P.COLOR_BUFFER_BIT,P.NEAREST):lt?P.copyTexSubImage3D(we,he,Re,rt,Rt+Gt,Ce,Fe,ge,pe):P.copyTexSubImage2D(we,he,Re,rt,Ce,Fe,ge,pe);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else lt?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(we,he,Re,rt,Rt,ge,pe,Ee,st,en,Tt.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(we,he,Re,rt,Rt,ge,pe,Ee,st,Tt.data):P.texSubImage3D(we,he,Re,rt,Rt,ge,pe,Ee,st,en,Tt):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,Re,rt,ge,pe,st,en,Tt.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,Re,rt,Tt.width,Tt.height,st,Tt.data):P.texSubImage2D(P.TEXTURE_2D,he,Re,rt,ge,pe,st,en,Tt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Dn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ai),P.pixelStorei(P.UNPACK_SKIP_ROWS,Si),P.pixelStorei(P.UNPACK_SKIP_IMAGES,os),he===0&&B.generateMipmaps&&P.generateMipmap(we),Te.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&O.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?O.setTextureCube(A,0):A.isData3DTexture?O.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?O.setTexture2DArray(A,0):O.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){b=0,D=0,U=null,Te.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Fu=8,PP=`
#define MAX_COLORS ${Fu}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,DP=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function LP({className:n,style:e,rotation:t=45,speed:i=.2,colors:r=[],transparent:s=!0,autoRotate:a=0,scale:o=1,frequency:l=1,warpStrength:u=1,mouseInfluence:c=1,parallax:d=.5,noise:f=.1}){const p=ne.useRef(null),_=ne.useRef(null),v=ne.useRef(null),m=ne.useRef(null),h=ne.useRef(null),g=ne.useRef(t),x=ne.useRef(a),S=ne.useRef(new Ke(0,0)),T=ne.useRef(new Ke(0,0)),C=ne.useRef(8);return ne.useEffect(()=>{const w=p.current,y=new pw,E=new ym(-1,1,1,-1,0,1),L=new Cl(2,2),b=Array.from({length:Fu},()=>new j(0,0,0)),D=new yi({vertexShader:DP,fragmentShader:PP,uniforms:{uCanvas:{value:new Ke(1,1)},uTime:{value:0},uSpeed:{value:i},uRot:{value:new Ke(1,0)},uColorCount:{value:0},uColors:{value:b},uTransparent:{value:s?1:0},uScale:{value:o},uFrequency:{value:l},uWarpStrength:{value:u},uPointer:{value:new Ke(0,0)},uMouseInfluence:{value:c},uParallax:{value:d},uNoise:{value:f}},premultipliedAlpha:!0,transparent:!0});m.current=D;const U=new Bi(L,D);y.add(U);const H=new bP({antialias:!1,powerPreference:"high-performance",alpha:!0});_.current=H,H.outputColorSpace=Un,H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.setClearColor(0,s?0:1),H.domElement.style.width="100%",H.domElement.style.height="100%",H.domElement.style.display="block",w.appendChild(H.domElement);const k=new Uw,V=()=>{const z=w.clientWidth||1,G=w.clientHeight||1;H.setSize(z,G,!1),D.uniforms.uCanvas.value.set(z,G)};if(V(),"ResizeObserver"in window){const z=new ResizeObserver(V);z.observe(w),h.current=z}else window.addEventListener("resize",V);const F=()=>{const z=k.getDelta(),G=k.elapsedTime;D.uniforms.uTime.value=G;const te=(g.current%360+x.current*G)*Math.PI/180,ee=Math.cos(te),Ae=Math.sin(te);D.uniforms.uRot.value.set(ee,Ae);const Le=T.current,ze=S.current,$=Math.min(1,z*C.current);Le.lerp(ze,$),D.uniforms.uPointer.value.copy(Le),H.render(y,E),v.current=requestAnimationFrame(F)};return v.current=requestAnimationFrame(F),()=>{v.current!==null&&cancelAnimationFrame(v.current),h.current?h.current.disconnect():window.removeEventListener("resize",V),L.dispose(),D.dispose(),H.dispose(),H.forceContextLoss(),H.domElement&&H.domElement.parentElement===w&&w.removeChild(H.domElement)}},[l,c,f,d,o,i,s,u]),ne.useEffect(()=>{const w=m.current,y=_.current;if(!w)return;g.current=t,x.current=a,w.uniforms.uSpeed.value=i,w.uniforms.uScale.value=o,w.uniforms.uFrequency.value=l,w.uniforms.uWarpStrength.value=u,w.uniforms.uMouseInfluence.value=c,w.uniforms.uParallax.value=d,w.uniforms.uNoise.value=f;const E=b=>{const D=b.replace("#","").trim(),U=D.length===3?[parseInt(D[0]+D[0],16),parseInt(D[1]+D[1],16),parseInt(D[2]+D[2],16)]:[parseInt(D.slice(0,2),16),parseInt(D.slice(2,4),16),parseInt(D.slice(4,6),16)];return new j(U[0]/255,U[1]/255,U[2]/255)},L=(r||[]).filter(Boolean).slice(0,Fu).map(E);for(let b=0;b<Fu;b++){const D=w.uniforms.uColors.value[b];b<L.length?D.copy(L[b]):D.set(0,0,0)}w.uniforms.uColorCount.value=L.length,w.uniforms.uTransparent.value=s?1:0,y&&y.setClearColor(0,s?0:1)},[t,a,i,o,l,u,c,d,f,r,s]),ne.useEffect(()=>{const w=m.current,y=p.current;if(!w||!y)return;const E=L=>{const b=y.getBoundingClientRect(),D=(L.clientX-b.left)/(b.width||1)*2-1,U=-((L.clientY-b.top)/(b.height||1)*2-1);S.current.set(D,U)};return y.addEventListener("pointermove",E),()=>{y.removeEventListener("pointermove",E)}},[]),I.jsx("div",{ref:p,className:`color-bends-container ${n}`,style:e})}function NP(){return I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"fixed inset-0 w-full h-full",style:{zIndex:-2},children:I.jsx(LP,{colors:["#2C7CFD","#9F2AD2","#8B10BF"],rotation:0,speed:.15,scale:1.2,frequency:1,warpStrength:.8,mouseInfluence:.5,parallax:.3,noise:.1,transparent:!0,autoRotate:.02})}),I.jsx("div",{className:"cinematic-bg",style:{zIndex:-1}}),I.jsx("div",{className:"grid-overlay",style:{zIndex:-1}}),I.jsx("div",{className:"fixed inset-0 noise-texture",style:{zIndex:-1}}),I.jsx("div",{className:"fixed -top-[400px] -left-[200px] w-[900px] h-[1400px] rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple opacity-[0.08] blur-[120px] animate-float pointer-events-none",style:{zIndex:-1}}),I.jsx("div",{className:"fixed top-[20%] -right-[300px] w-[800px] h-[1200px] rounded-full bg-gradient-to-bl from-accent-purple to-accent-bright opacity-[0.06] blur-[150px] animate-float pointer-events-none",style:{zIndex:-1,animationDelay:"2s"}}),I.jsx("div",{className:"fixed bottom-[10%] left-[10%] w-[600px] h-[900px] rounded-full bg-gradient-to-tr from-accent-cyan via-accent-bright to-transparent opacity-[0.05] blur-[140px] animate-float pointer-events-none",style:{zIndex:-1,animationDelay:"4s"}})]})}function IP(){return I.jsxs("div",{className:"min-h-screen relative",children:[I.jsx(NP,{}),I.jsx(mT,{}),I.jsx("main",{className:"pt-20",children:I.jsx(nT,{})}),I.jsx(gT,{})]})}function $i(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function by(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ja={duration:.5,overwrite:!1,delay:0},Sm,Qt,_t,ti=1e8,ct=1/ti,Zh=Math.PI*2,UP=Zh/4,FP=0,Py=Math.sqrt,OP=Math.cos,kP=Math.sin,Yt=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},hr=function(e){return typeof e=="number"},Mm=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},An=function(e){return e!==!1},Em=function(){return typeof window<"u"},_u=function(e){return At(e)||Yt(e)},Dy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,BP=/random\([^)]+\)/g,zP=/,\s*/g,o0=/(?:-?\.?\d|\.)+/gi,Ly=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,td=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ny=/[+-]=-?[.\d]+/,VP=/[^,'"\[\]\s]+/gi,HP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,Ai,Qh,Tm,Xn={},mc={},Iy,Uy=function(e){return(mc=Ya(e,Xn))&&Pn},wm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},cl=function(e,t){return!t&&console.warn(e)},Fy=function(e,t){return e&&(Xn[e]=t)&&mc&&(mc[e]=t)||Xn},fl=function(){return 0},GP={suppressEvents:!0,isStart:!0,kill:!1},Ou={suppressEvents:!0,kill:!1},WP={suppressEvents:!0},Am={},Yr=[],Jh={},Oy,Fn={},nd={},l0=30,ku=[],Cm="",Rm=function(e){var t=e[0],i,r;if(zi(t)||At(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ku.length;r--&&!ku[r].targetTest(t););i=ku[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new oS(e[r],i)))||e.splice(r,1);return e},Ds=function(e){return e._gsap||Rm(ni(e))[0]._gsap},ky=function(e,t,i){return(i=e[t])&&At(i)?e[t]():Mm(i)&&e.getAttribute&&e.getAttribute(t)||i},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},vt=function(e){return Math.round(e*1e7)/1e7||0},Da=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},XP=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},gc=function(){var e=Yr.length,t=Yr.slice(0),i,r;for(Jh={},Yr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},bm=function(e){return!!(e._initted||e._startAt||e.add)},By=function(e,t,i,r){Yr.length&&!Qt&&gc(),e.render(t,i,!!(Qt&&t<0&&bm(e))),Yr.length&&!Qt&&gc()},zy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(VP).length<2?t:Yt(e)?e.trim():e},Vy=function(e){return e},jn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},jP=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ya=function(e,t){for(var i in t)e[i]=t[i];return e},u0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=zi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},_c=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Bo=function(e){var t=e.parent||yt,i=e.keyframes?jP(un(e.keyframes)):jn;if(An(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},YP=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Hy=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Gc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ls=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},qP=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ep=function(e,t,i,r){return e._startAt&&(Qt?e._startAt.revert(Ou):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$P=function n(e){return!e||e._ts&&n(e.parent)},c0=function(e){return e._repeat?qa(e._tTime,e=e.duration()+e._rDelay)*e:0},qa=function(e,t){var i=Math.floor(e=vt(e/t));return e&&i===e?i-1:i},vc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wc=function(e){return e._end=vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Xc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=vt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wc(e),i._dirty||Ls(i,e)),e},Gy=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=vc(e.rawTime(),t),(!t._dur||Rl(0,t.totalDuration(),i)-t._tTime>ct)&&t.render(i,!0)),Ls(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ct}},bi=function(e,t,i,r){return t.parent&&Qr(t),t._start=vt((hr(i)?i:i||e!==yt?Kn(e,i,t):e._time)+t._delay),t._end=vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hy(e,t,"_first","_last",e._sort?"_start":0),tp(t)||(e._recent=t),r||Gy(e,t),e._ts<0&&Xc(e,e._tTime),e},Wy=function(e,t){return(Xn.ScrollTrigger||wm("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},Xy=function(e,t,i,r,s){if(Dm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Oy!==On.frame)return Yr.push(e),e._lazy=[s,r],1},KP=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},tp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ZP=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&KP(e)&&!(!e._initted&&tp(e))||(e._ts<0||e._dp._ts<0)&&!tp(e))?0:1,o=e._rDelay,l=0,u,c,d;if(o&&e._repeat&&(l=Rl(0,e._tDur,t),c=qa(l,o),e._yoyo&&c&1&&(a=1-a),c!==qa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Qt||r||e._zTime===ct||!t&&e._zTime){if(!e._initted&&Xy(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?ct:0),i||(i=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&ep(e,t,i,!0),e._onUpdate&&!i&&Bn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Qr(e,1),!i&&!Qt&&(Bn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QP=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},$a=function(e,t,i,r){var s=e._repeat,a=vt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:vt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Xc(e,e._tTime=e._tDur*o),e.parent&&Wc(e),i||Ls(e.parent,e),e},f0=function(e){return e instanceof hn?Ls(e):$a(e,e._dur)},JP={_start:0,endTime:fl,totalDuration:fl},Kn=function n(e,t,i){var r=e.labels,s=e._recent||JP,a=e.duration()>=ti?s.endTime(!1):e._dur,o,l,u;return Yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(l=l/100*(un(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},zo=function(e,t,i){var r=hr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;a.immediateRender=An(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new It(t[0],a,t[s+1])},ss=function(e,t){return e||e===0?t(e):t},Rl=function(e,t,i){return i<e?e:i>t?t:i},on=function(e,t){return!Yt(e)||!(t=HP.exec(e))?"":t[1]},e2=function(e,t,i){return ss(i,function(r){return Rl(e,t,r)})},np=[].slice,jy=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==Ai},t2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Yt(r)&&!t||jy(r,1)?(s=i).push.apply(s,ni(r)):i.push(r)})||i},ni=function(e,t,i){return _t&&!t&&_t.selector?_t.selector(e):Yt(e)&&!i&&(Qh||!Ka())?np.call((t||Tm).querySelectorAll(e),0):un(e)?t2(e,i):jy(e)?np.call(e,0):e?[e]:[]},ip=function(e){return e=ni(e)[0]||cl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ni(t,i.querySelectorAll?i:i===e?cl("Invalid scope")||Tm.createElement("div"):e)}},Yy=function(e){return e.sort(function(){return .5-Math.random()})},qy=function(e){if(At(e))return e;var t=zi(e)?e:{each:e},i=Ns(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=t.axis,c=r,d=r;return Yt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],d=r[1]),function(f,p,_){var v=(_||t).length,m=a[v],h,g,x,S,T,C,w,y,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,ti])[1],!E){for(w=-ti;w<(w=_[E++].getBoundingClientRect().left)&&E<v;);E<v&&E--}for(m=a[v]=[],h=l?Math.min(E,v)*c-.5:r%E,g=E===ti?0:l?v*d/E-.5:r/E|0,w=0,y=ti,C=0;C<v;C++)x=C%E-h,S=g-(C/E|0),m[C]=T=u?Math.abs(u==="y"?S:x):Py(x*x+S*S),T>w&&(w=T),T<y&&(y=T);r==="random"&&Yy(m),m.max=w-y,m.min=y,m.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(E>v?v-1:u?u==="y"?v/E:E:Math.max(E,v/E))||0)*(r==="edges"?-1:1),m.b=v<0?s-v:s,m.u=on(t.amount||t.each)||0,i=i&&v<0?rS(i):i}return v=(m[f]-m.min)/m.max||0,vt(m.b+(i?i(v):v)*m.v)+m.u}},rp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=vt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(hr(i)?0:on(i))}},$y=function(e,t){var i=un(e),r,s;return!i&&zi(e)&&(r=i=e.radius||ti,e.values?(e=ni(e.values),(s=!hr(e[0]))&&(r*=r)):e=rp(e.increment)),ss(t,i?At(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=ti,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-o,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-o),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:a,s||c===a||hr(a)?c:c+on(a)}:rp(e))},Ky=function(e,t,i,r){return ss(un(e)?!t:i===!0?!!(i=0):!r,function(){return un(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},n2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},i2=function(e,t){return function(i){return e(parseFloat(i))+(t||on(i))}},r2=function(e,t,i){return Qy(e,t,0,1,i)},Zy=function(e,t,i){return ss(i,function(r){return e[~~t(r)]})},s2=function n(e,t,i){var r=t-e;return un(e)?Zy(e,n(0,e.length),t):ss(i,function(s){return(r+(s-e)%r)%r+e})},a2=function n(e,t,i){var r=t-e,s=r*2;return un(e)?Zy(e,n(0,e.length-1),t):ss(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},dl=function(e){return e.replace(BP,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(zP);return Ky(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Qy=function(e,t,i,r,s){var a=t-e,o=r-i;return ss(s,function(l){return i+((l-e)/a*o||0)})},o2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Yt(e),o={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var v=Math.min(f,~~_);return c[v](_-v)},i=t}else r||(e=Ya(un(e)?[]:{},e));if(!c){for(l in t)Pm.call(o,e,l,"get",t[l]);s=function(_){return Im(_,o)||(a?e.p:e)}}}return ss(i,s)},d0=function(e,t,i){var r=e.labels,s=ti,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Bn=function(e,t,i){var r=e.vars,s=r[t],a=_t,o=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Yr.length&&gc(),o&&(_t=o),c=l?s.apply(u,l):s.call(u),_t=a,c},Ro=function(e){return Qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Bn(e,"onInterrupt"),e},Ma,Jy=[],eS=function(e){if(e)if(e=!e.name&&e.default||e,Em()||e.headless){var t=e.name,i=At(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:fl,render:Im,add:Pm,kill:E2,modifier:M2,rawVars:0},a={targetTest:0,get:0,getSetter:Nm,aliases:{},register:0};if(Ka(),e!==r){if(Fn[t])return;jn(r,jn(_c(e,s),a)),Ya(r.prototype,Ya(s,_c(e,a))),Fn[r.prop=t]=r,e.targetTest&&(ku.push(r),Am[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fy(t,r),e.register&&e.register(Pn,r,Rn)}else Jy.push(e)},ut=255,bo={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},id=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ut+.5|0},tS=function(e,t,i){var r=e?hr(e)?[e>>16,e>>8&ut,e&ut]:0:bo.black,s,a,o,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),bo[e])r=bo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ut,r&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(o0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=id(l+1/3,s,a),r[1]=id(l,s,a),r[2]=id(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Ly),i&&r.length<4&&(r[3]=1),r}else r=e.match(o0)||bo.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/ut,a=r[1]/ut,o=r[2]/ut,d=Math.max(s,a,o),f=Math.min(s,a,o),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},nS=function(e){var t=[],i=[],r=-1;return e.split(qr).forEach(function(s){var a=s.match(Sa)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},h0=function(e,t,i){var r="",s=(e+r).match(qr),a=t?"hsla(":"rgba(",o=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=tS(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=nS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(qr,"1").split(Sa),d=u.length-1;o<d;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(qr),d=u.length-1;o<d;o++)r+=u[o]+s[o];return r+u[d]},qr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in bo)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),l2=/hsl[a]?\(/,iS=function(e){var t=e.join(" "),i;if(qr.lastIndex=0,qr.test(t))return i=l2.test(t),e[1]=h0(e[1],i),e[0]=h0(e[0],i,nS(e[1])),!0},hl,On=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,u,c,d,f,p,_=function v(m){var h=n()-r,g=m===!0,x,S,T,C;if((h>e||h<0)&&(i+=h-t),r+=h,T=r-i,x=T-a,(x>0||g)&&(C=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,a+=x+(x>=s?4:s-x),S=1),g||(l=u(v)),S)for(p=0;p<o.length;p++)o[p](T,f,C,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Iy&&(!Qh&&Em()&&(Ai=Qh=window,Tm=Ai.document||{},Xn.gsap=Pn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(Pn.version),Uy(mc||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),Jy.forEach(eS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,a-d.time*1e3+1|0)},hl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),hl=0,u=fl},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,h,g){var x=h?function(S,T,C,w){m(S,T,C,w),d.remove(x)}:m;return d.remove(m),o[g?"unshift":"push"](x),Ka(),x},remove:function(m,h){~(h=o.indexOf(m))&&o.splice(h,1)&&p>=h&&p--},_listeners:o},d}(),Ka=function(){return!hl&&On.wake()},je={},u2=/^[\d.\-M][\d.\-,\s]/,c2=/["']/g,f2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[r]=isNaN(u)?u.replace(c2,"").trim():+u,r=l.substr(o+1).trim();return t},d2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},h2=function(e){var t=(e+"").split("("),i=je[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[f2(t[1])]:d2(e).split(",").map(zy)):je._CE&&u2.test(e)?je._CE("",e):i},rS=function(e){return function(t){return 1-e(1-t)}},sS=function n(e,t){for(var i=e._first,r;i;)i instanceof hn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Ns=function(e,t){return e&&(At(e)?e:je[e]||h2(e))||t},Ws=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Cn(e,function(o){je[o]=Xn[o]=s,je[a=o.toLowerCase()]=i;for(var l in s)je[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[o+"."+l]=s[l]}),s},aS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Zh*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*kP((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:aS(o);return s=Zh/s,l.config=function(u,c){return n(e,u,c)},l},sd=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:aS(i);return r.config=function(s){return n(e,s)},r};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ws(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Ws("Elastic",rd("in"),rd("out"),rd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Ws("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ws("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ws("Circ",function(n){return-(Py(1-n*n)-1)});Ws("Sine",function(n){return n===1?1:-OP(n*UP)+1});Ws("Back",sd("in"),sd("out"),sd());je.SteppedEase=je.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-ct;return function(o){return((r*Rl(0,a,o)|0)+s)*i}}};ja.ease=je["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Cm+=n+","+n+"Params,"});var oS=function(e,t){this.id=FP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ky,this.set=t?t.getSetter:Nm},pl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$a(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),hl||On.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,$a(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ka(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xc(this,i),!s._dp||s.parent||Gy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ct||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),By(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+c0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+c0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?qa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?vc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ct?0:this._rts,this.totalTime(Rl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Wc(this),qP(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=vt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&bi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(An(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=WP);var r=Qt;return Qt=i,bm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,f0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,f0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Kn(this,i),An(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,An(r)),this._dur||(this._zTime=-ct),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ct)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=At(i)?i:Vy,l=function(){var c=r.then;r.then=null,s&&s(),At(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ro(this)},n}();jn(pl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var hn=function(n){by(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=An(i.sortChildren),yt&&bi(i.parent||yt,$i(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Wy($i(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return zo(0,arguments,this),this},t.from=function(r,s,a){return zo(1,arguments,this),this},t.fromTo=function(r,s,a,o){return zo(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Bo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new It(r,s,Kn(this,a),1),this},t.call=function(r,s,a){return bi(this,It.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new It(r,a,Kn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,Bo(a).immediateRender=An(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},t.staggerFromTo=function(r,s,a,o,l,u,c,d){return o.startAt=a,Bo(o).immediateRender=An(o.immediateRender),this.staggerTo(r,s,o,l,u,c,d)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:vt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,v,m,h,g,x,S,T,C,w;if(this!==yt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||d){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=vt(c%m),c===l?(v=this._repeat,f=u):(T=vt(c/m),v=~~T,v&&v===T&&(f=u,v--),f>u&&(f=u)),T=qa(this._tTime,m),!o&&this._tTime&&T!==v&&this._tTime-T*m-this._dur<=0&&(T=v),C&&v&1&&(f=u-f,w=1),v!==T&&!this._lock){var y=C&&T&1,E=y===(C&&v&1);if(v<T&&(y=!y),o=y?0:c%u?u:c,this._lock=1,this.render(o||(w?0:vt(v*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=v),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,o=y?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;sS(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=QP(this,vt(o),vt(f)),g&&(c-=f-(f=g._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!T&&(Bn(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!h){g=0,_&&(c+=this._zTime=-ct);break}}p=_}else{p=this._last;for(var L=r<0?r:f;p;){if(_=p._prev,(p._act||L<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,s,a||Qt&&bm(p)),f!==this._time||!this._ts&&!h){g=0,_&&(c+=this._zTime=L?-ct:ct);break}}p=_}}if(g&&!s&&(this.pause(),g.render(f>=o?0:-ct)._zTime=f>=o?1:-1,this._ts))return this._start=S,Wc(this),this.render(r,s,a);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Qr(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(Bn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(hr(s)||(s=Kn(this,s,r)),!(r instanceof pl)){if(un(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Yt(r))return this.addLabel(r,s);if(At(r))r=It.delayedCall(0,r);else return this}return this!==r?bi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ti);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof It?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Yt(r)?this.removeLabel(r):At(r)?this.killTweensOf(r):(r.parent===this&&Gc(this,r),r===this._recent&&(this._recent=this._last),Ls(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vt(On.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Kn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=It.delayedCall(0,s||fl,a);return o.data="isPause",this._hasPause=1,bi(this,o,Kn(this,r))},t.removePause=function(r){var s=this._first;for(r=Kn(this,r);s;)s._start===r&&s.data==="isPause"&&Qr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ur!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=ni(r),l=this._first,u=hr(s),c;l;)l instanceof It?XP(l._targets,o)&&(u?(!Ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Kn(a,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=It.to(a,jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());_._dur!==m&&$a(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,jn({startAt:{time:Kn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),d0(this,Kn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),d0(this,Kn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=vt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return Ls(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ls(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=ti,u,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,bi(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=vt(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;$a(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(yt._ts&&(By(yt,vc(r,yt)),Oy=On.frame),On.frame>=l0){l0+=Gn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&Gn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},e}(pl);jn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var p2=function(e,t,i,r,s,a,o){var l=new Rn(this._pt,e,t,0,1,hS,null,s),u=0,c=0,d,f,p,_,v,m,h,g;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=dl(r)),a&&(g=[i,r],a(g,e,t),i=g[0],r=g[1]),f=i.match(td)||[];d=td.exec(r);)_=d[0],v=r.substring(u,d.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:m,c:_.charAt(1)==="="?Da(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=td.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(Ny.test(r)||h)&&(l.e=0),this._pt=l,l},Pm=function(e,t,i,r,s,a,o,l,u,c){At(r)&&(r=r(s||0,e,a));var d=e[t],f=i!=="get"?i:At(d)?u?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=At(d)?u?x2:fS:Lm,_;if(Yt(r)&&(~r.indexOf("random(")&&(r=dl(r)),r.charAt(1)==="="&&(_=Da(f,r)+(on(f)||0),(_||_===0)&&(r=_))),!c||f!==r||sp)return!isNaN(f*r)&&r!==""?(_=new Rn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?S2:dS,0,p),u&&(_.fp=u),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&wm(t,r),p2.call(this,e,t,f,r,p,l||Gn.stringFilter,u))},m2=function(e,t,i,r,s){if(At(e)&&(e=Vo(e,s,t,i,r)),!zi(e)||e.style&&e.nodeType||un(e)||Dy(e))return Yt(e)?Vo(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Vo(e[o],s,t,i,r);return a},lS=function(e,t,i,r,s,a){var o,l,u,c;if(Fn[e]&&(o=new Fn[e]).init(s,o.rawVars?t[e]:m2(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Rn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ma))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},Ur,sp,Dm=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,v=e._startAt,m=e._targets,h=e.parent,g=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!Sm,S=e.timeline,T,C,w,y,E,L,b,D,U,H,k,V,F;if(S&&(!f||!s)&&(s="none"),e._ease=Ns(s,ja.ease),e._yEase=d?rS(Ns(d===!0?s:d,ja.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(D=m[0]?Ds(m[0]).harness:0,V=D&&r[D.prop],T=_c(r,Am),v&&(v._zTime<0&&v.progress(1),t<0&&c&&o&&!p?v.render(-1,!0):v.revert(c&&_?Ou:GP),v._lazy=0),a){if(Qr(e._startAt=It.set(m,jn({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!v&&An(l),startAt:null,delay:0,onUpdate:u&&function(){return Bn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!o&&!p)&&e._startAt.revert(Ou),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!v){if(t&&(o=!1),w=jn({overwrite:!1,data:"isFromStart",lazy:o&&!v&&An(l),immediateRender:o,stagger:0,parent:h},T),V&&(w[D.prop]=V),Qr(e._startAt=It.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(Ou):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&An(l)||l&&!_,C=0;C<m.length;C++){if(E=m[C],b=E._gsap||Rm(m)[C]._gsap,e._ptLookup[C]=H={},Jh[b.id]&&Yr.length&&gc(),k=g===m?C:g.indexOf(E),D&&(U=new D).init(E,V||T,e,k,g)!==!1&&(e._pt=y=new Rn(e._pt,E,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(z){H[z]=y}),U.priority&&(L=1)),!D||V)for(w in T)Fn[w]&&(U=lS(w,T,e,k,E,g))?U.priority&&(L=1):H[w]=y=Pm.call(e,E,w,"get",T[w],k,g,0,r.stringFilter);e._op&&e._op[C]&&e.kill(E,e._op[C]),x&&e._pt&&(Ur=e,yt.killTweensOf(E,H,e.globalTime(t)),F=!e.parent,Ur=0),e._pt&&l&&(Jh[b.id]=1)}L&&pS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&S.render(ti,!0,!0)},g2=function(e,t,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return sp=1,e.vars[t]="+=0",Dm(e,o),sp=0,l?cl(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,d.e&&(d.e=bt(i)+on(d.e)),d.b&&(d.b=c.s+on(d.b))},_2=function(e,t){var i=e[0]?Ds(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Ya({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},v2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(un(t))o=i[e]||(i[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Vo=function(e,t,i,r,s){return At(e)?e.call(t,i,r,s):Yt(e)&&~e.indexOf("random(")?dl(e):e},uS=Cm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cS={};Cn(uS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return cS[n]=1});var It=function(n){by(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Bo(r))||this;var l=o.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,v=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,g=r.parent||yt,x=(un(i)||Dy(i)?hr(i[0]):"length"in r)?[i]:ni(i),S,T,C,w,y,E,L,b;if(o._targets=x.length?Rm(x):cl("GSAP target "+i+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||_u(u)||_u(c)){if(r=o.vars,S=o.timeline=new hn({data:"nested",defaults:v||{},targets:g&&g.data==="nested"?g.vars.targets:x}),S.kill(),S.parent=S._dp=$i(o),S._start=0,f||_u(u)||_u(c)){if(w=x.length,L=f&&qy(f),zi(f))for(y in f)~uS.indexOf(y)&&(b||(b={}),b[y]=f[y]);for(T=0;T<w;T++)C=_c(r,cS),C.stagger=0,h&&(C.yoyoEase=h),b&&Ya(C,b),E=x[T],C.duration=+Vo(u,$i(o),T,E,x),C.delay=(+Vo(c,$i(o),T,E,x)||0)-o._delay,!f&&w===1&&C.delay&&(o._delay=c=C.delay,o._start+=c,C.delay=0),S.to(E,C,L?L(T,E,x):0),S._ease=je.none;S.duration()?u=c=0:o.timeline=0}else if(_){Bo(jn(S.vars.defaults,{ease:"none"})),S._ease=Ns(_.ease||r.ease||"none");var D=0,U,H,k;if(un(_))_.forEach(function(V){return S.to(x,V,">")}),S.duration();else{C={};for(y in _)y==="ease"||y==="easeEach"||v2(y,_[y],C,_.easeEach);for(y in C)for(U=C[y].sort(function(V,F){return V.t-F.t}),D=0,T=0;T<U.length;T++)H=U[T],k={ease:H.e,duration:(H.t-(T?U[T-1].t:0))/100*u},k[y]=H.v,S.to(x,k,D),D+=k.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||o.duration(u=S.duration())}else o.timeline=0;return p===!0&&!Sm&&(Ur=$i(o),yt.killTweensOf(x),Ur=0),bi(g,$i(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!u&&!_&&o._start===vt(g._time)&&An(d)&&$P($i(o))&&g.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-c)||0)),m&&Wy($i(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-ct&&!c?l:r<ct?0:r,f,p,_,v,m,h,g,x,S;if(!u)ZP(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,a);if(f=vt(d%v),d===l?(_=this._repeat,f=u):(m=vt(d/v),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(S=this._yEase,f=u-f),m=qa(this._tTime,v),f===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(x&&this._yEase&&sS(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&f!==v&&this._initted&&(this._lock=a=1,this.render(vt(v*_),!0).invalidate()._lock=0))}if(!this._initted){if(Xy(this,c?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(S||this._ease)(f/u),this._from&&(this.ratio=g=1-g),!o&&d&&!s&&!m&&(Bn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&ep(this,r,s,a),Bn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&ep(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Qr(this,1),!s&&!(c&&!o)&&(d||o||h)&&(Bn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){hl||On.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Dm(this,u),c=this._ease(u/this._dur),g2(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Xc(this,0),this.parent||Hy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ro(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ur&&Ur.vars.overwrite!==!0)._first||Ro(this),this.parent&&a!==this.timeline.totalDuration()&&$a(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?ni(r):o,u=this._ptLookup,c=this._pt,d,f,p,_,v,m,h;if((!s||s==="all")&&YP(o,l))return s==="all"&&(this._pt=0),Ro(this);for(d=this._op=this._op||[],s!=="all"&&(Yt(s)&&(v={},Cn(s,function(g){return v[g]=1}),s=v),s=_2(o,s)),h=o.length;h--;)if(~l.indexOf(o[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(v in _)m=f&&f[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&Gc(this,m,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&c&&Ro(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return zo(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return zo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return yt.killTweensOf(r,s,a)},e}(pl);jn(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(n){It[n]=function(){var e=new hn,t=np.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Lm=function(e,t,i){return e[t]=i},fS=function(e,t,i){return e[t](i)},x2=function(e,t,i,r){return e[t](r.fp,i)},y2=function(e,t,i){return e.setAttribute(t,i)},Nm=function(e,t){return At(e[t])?fS:Mm(e[t])&&e.setAttribute?y2:Lm},dS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},S2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Im=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},M2=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},E2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Gc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},T2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},pS=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},Rn=function(){function n(t,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||dS,this.d=l||this,this.set=u||Lm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=T2,this.m=i,this.mt=s,this.tween=r},n}();Cn(Cm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Am[n]=1});Xn.TweenMax=Xn.TweenLite=It;Xn.TimelineLite=Xn.TimelineMax=hn;yt=new hn({sortChildren:!1,defaults:ja,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=iS;var Is=[],Bu={},w2=[],p0=0,A2=0,ad=function(e){return(Bu[e]||w2).map(function(t){return t()})},ap=function(){var e=Date.now(),t=[];e-p0>2&&(ad("matchMediaInit"),Is.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Ai.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&t.push(i))}),ad("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),p0=e,ad("matchMedia"))},mS=function(){function n(t,i){this.selector=i&&ip(i),this.data=[],this._r=[],this.isReverted=!1,this.id=A2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){At(i)&&(s=r,r=i,i=At);var a=this,o=function(){var u=_t,c=a.selector,d;return u&&u!==a&&u.data.push(a),s&&(a.selector=ip(s)),_t=a,d=r.apply(a,arguments),At(d)&&a._r.push(d),_t=u,a.selector=c,a.isReverted=!1,d};return a.last=o,i===At?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=_t;_t=null,i(this),_t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof It&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof hn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof It)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Is.length;a--;)Is[a].id===this.id&&Is.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),C2=function(){function n(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){zi(i)||(i={matches:i});var a=new mS(0,s||this.scope),o=a.conditions={},l,u,c;_t&&!a.selector&&(a.selector=_t.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Ai.matchMedia(i[u]),l&&(Is.indexOf(a)<0&&Is.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(ap):l.addEventListener("change",ap)));return c&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),xc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return eS(r)})},timeline:function(e){return new hn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Yt(e)&&(e=ni(e)[0]);var s=Ds(e||{}).get,a=i?Vy:zy;return i==="native"&&(i=""),e&&(t?a((Fn[t]&&Fn[t].get||s)(e,t,i,r)):function(o,l,u){return a((Fn[o]&&Fn[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,i){if(e=ni(e),e.length>1){var r=e.map(function(c){return Pn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var a=Fn[t],o=Ds(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var d=new a;Ma._pt=0,d.init(e,i?c+i:c,Ma,0,[e]),d.render(1,d),Ma._pt&&Im(1,Ma)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,t,i){var r,s=Pn.to(e,jn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ns(e.ease,ja.ease)),u0(ja,e||{})},config:function(e){return u0(Gn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Fn[o]&&!Xn[o]&&cl(t+" effect requires "+o+" plugin.")}),nd[t]=function(o,l,u){return i(ni(o),jn(l||{},s),u)},a&&(hn.prototype[t]=function(o,l,u){return this.add(nd[t](o,zi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){je[e]=Ns(t)},parseEase:function(e,t){return arguments.length?Ns(e,t):je},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new hn(e),r,s;for(i.smoothChildTiming=An(e.smoothChildTiming),yt.remove(i),i._dp=0,i._time=i._tTime=yt._time,r=yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof It&&r.vars.onComplete===r._targets[0]))&&bi(i,r,r._start-r._delay),r=s;return bi(yt,i,0),i},context:function(e,t){return e?new mS(e,t):_t},matchMedia:function(e){return new C2(e)},matchMediaRefresh:function(){return Is.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ap()},addEventListener:function(e,t){var i=Bu[e]||(Bu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Bu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:s2,wrapYoyo:a2,distribute:qy,random:Ky,snap:$y,normalize:r2,getUnit:on,clamp:e2,splitColor:tS,toArray:ni,selector:ip,mapRange:Qy,pipe:n2,unitize:i2,interpolate:o2,shuffle:Yy},install:Uy,effects:nd,ticker:On,updateRoot:hn.updateRoot,plugins:Fn,globalTimeline:yt,core:{PropTween:Rn,globals:Fy,Tween:It,Timeline:hn,Animation:pl,getCache:Ds,_removeLinkedListItem:Gc,reverting:function(){return Qt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return Sm=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return xc[n]=It[n]});On.add(hn.updateRoot);Ma=xc.to({},{duration:0});var R2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},b2=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=R2(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},od=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(Yt(s)&&(l={},Cn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}b2(o,s)}}}},Pn=xc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},od("roundProps",rp),od("modifiers"),od("snap",$y))||xc;It.version=hn.version=Pn.version="3.14.2";Iy=1;Em()&&Ka();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var m0,Fr,La,Um,Rs,g0,Fm,P2=function(){return typeof window<"u"},pr={},ys=180/Math.PI,Na=Math.PI/180,la=Math.atan2,_0=1e8,Om=/([A-Z])/g,D2=/(left|right|width|margin|padding|x)/i,L2=/[\s,\(]\S/,Li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},op=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},N2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},U2=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},F2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_S=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},O2=function(e,t,i){return e.style[t]=i},k2=function(e,t,i){return e.style.setProperty(t,i)},B2=function(e,t,i){return e._gsap[t]=i},z2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},V2=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},H2=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},St="transform",bn=St+"Origin",G2=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Zi(r,o)}):this.tfm[e]=a.x?a[e]:Zi(r,e),e===bn&&(this.tfm.zOrigin=a.zOrigin);else return Li.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(St)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(bn,t,"")),e=St}(s||t)&&this.props.push(e,t,s[e])},vS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},W2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Om,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Fm(),(!s||!s.isStart)&&!i[St]&&(vS(i),r.zOrigin&&i[bn]&&(i[bn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},xS=function(e,t){var i={target:e,props:[],revert:W2,save:G2};return e._gsap||Pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},yS,lp=function(e,t){var i=Fr.createElementNS?Fr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fr.createElement(e);return i&&i.style?i:Fr.createElement(e)},zn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Om,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Za(t)||t,1)||""},v0="O,Moz,ms,Ms,Webkit".split(","),Za=function(e,t,i){var r=t||Rs,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(v0[a]+e in s););return a<0?null:(a===3?"ms":a>=0?v0[a]:"")+e},up=function(){P2()&&window.document&&(m0=window,Fr=m0.document,La=Fr.documentElement,Rs=lp("div")||{style:{}},lp("div"),St=Za(St),bn=St+"Origin",Rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yS=!!Za("perspective"),Fm=Pn.core.reverting,Um=1)},x0=function(e){var t=e.ownerSVGElement,i=lp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),La.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),La.removeChild(i),s},y0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},SS=function(e){var t,i;try{t=e.getBBox()}catch{t=x0(e),i=1}return t&&(t.width||t.height)||i||(t=x0(e)),t&&!t.width&&!t.x&&!t.y?{x:+y0(e,["x","cx","x1"])||0,y:+y0(e,["y","cy","y1"])||0,width:0,height:0}:t},MS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&SS(e))},Jr=function(e,t){if(t){var i=e.style,r;t in pr&&t!==bn&&(t=St),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Om,"-$1").toLowerCase())):i.removeAttribute(t)}},Or=function(e,t,i,r,s,a){var o=new Rn(e._pt,t,i,0,1,a?_S:gS);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},S0={deg:1,rad:1,turn:1},X2={grid:1,flex:1},es=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Rs.style,l=D2.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,v,m,h;if(r===a||!s||S0[r]||S0[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&MS(e),(p||a==="%")&&(pr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],bt(p?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Fr||!v.appendChild)&&(v=Fr.body),m=v._gsap,m&&p&&m.width&&l&&m.time===On.time&&!m.uncache)return bt(s/m.width*d);if(p&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=d+r,_=e[c],g?e.style[t]=g:Jr(e,t)}else(p||a==="%")&&!X2[zn(v,"display")]&&(o.position=zn(e,"position")),v===e&&(o.position="static"),v.appendChild(Rs),_=Rs[c],v.removeChild(Rs),o.position="absolute";return l&&p&&(m=Ds(v),m.time=On.time,m.width=v[c]),bt(f?_*s/d:_&&s?d/_*s:0)},Zi=function(e,t,i,r){var s;return Um||up(),t in Li&&t!=="transform"&&(t=Li[t],~t.indexOf(",")&&(t=t.split(",")[0])),pr[t]&&t!=="transform"?(s=gl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Sc(zn(e,bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=yc[t]&&yc[t](e,t,i)||zn(e,t)||ky(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?es(e,t,s,i)+i:s},j2=function(e,t,i,r){if(!i||i==="none"){var s=Za(t,e,1),a=s&&zn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=zn(e,"borderTopColor"))}var o=new Rn(this._pt,e.style,t,0,1,hS),l=0,u=0,c,d,f,p,_,v,m,h,g,x,S,T;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=zn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=zn(e,t)||r,v?e.style[t]=v:Jr(e,t)),c=[i,r],iS(c),i=c[0],r=c[1],f=i.match(Sa)||[],T=r.match(Sa)||[],T.length){for(;d=Sa.exec(r);)m=d[0],g=r.substring(l,d.index),_?_=(_+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(_=1),m!==(v=f[u++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),m.charAt(1)==="="&&(m=Da(p,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=Sa.lastIndex-x.length,x||(x=x||Gn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=es(e,t,v,x)||0),o._pt={_next:o._pt,p:g||u===1?g:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?_S:gS;return Ny.test(r)&&(o.e=0),this._pt=o,o},M0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Y2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=M0[i]||i,t[1]=M0[r]||r,t.join(" ")},q2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],pr[o]&&(l=1,o=o==="transformOrigin"?bn:St),Jr(i,o);l&&(Jr(i,St),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",gl(i,1),a.uncache=1,vS(r)))}},yc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Rn(e._pt,t,i,0,0,q2);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},ml=[1,0,0,1,0,0],ES={},TS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},E0=function(e){var t=zn(e,St);return TS(t)?ml:t.substr(7).match(Ly).map(bt)},km=function(e,t){var i=e._gsap||Ds(e),r=e.style,s=E0(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ml:s):(s===ml&&!e.offsetParent&&e!==La&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,La.appendChild(e)),s=E0(e),l?r.display=l:Jr(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):La.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cp=function(e,t,i,r,s,a){var o=e._gsap,l=s||km(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,p=l[0],_=l[1],v=l[2],m=l[3],h=l[4],g=l[5],x=t.split(" "),S=parseFloat(x[0])||0,T=parseFloat(x[1])||0,C,w,y,E;i?l!==ml&&(w=p*m-_*v)&&(y=S*(m/w)+T*(-v/w)+(v*g-m*h)/w,E=S*(-_/w)+T*(p/w)-(p*g-_*h)/w,S=y,T=E):(C=SS(e),S=C.x+(~x[0].indexOf("%")?S/100*C.width:S),T=C.y+(~(x[1]||x[0]).indexOf("%")?T/100*C.height:T)),r||r!==!1&&o.smooth?(h=S-u,g=T-c,o.xOffset=d+(h*p+g*v)-h,o.yOffset=f+(h*_+g*m)-g):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[bn]="0px 0px",a&&(Or(a,o,"xOrigin",u,S),Or(a,o,"yOrigin",c,T),Or(a,o,"xOffset",d,o.xOffset),Or(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},gl=function(e,t){var i=e._gsap||new oS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=zn(e,bn)||"0",c,d,f,p,_,v,m,h,g,x,S,T,C,w,y,E,L,b,D,U,H,k,V,F,z,G,Z,te,ee,Ae,Le,ze;return c=d=f=v=m=h=g=x=S=0,p=_=1,i.svg=!!(e.getCTM&&MS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[St]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[St]!=="none"?l[St]:"")),r.scale=r.rotate=r.translate="none"),w=km(e,i.svg),i.svg&&(i.uncache?(z=e.getBBox(),u=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),cp(e,F||u,!!F||i.originIsAbsolute,i.smooth!==!1,w)),T=i.xOrigin||0,C=i.yOrigin||0,w!==ml&&(b=w[0],D=w[1],U=w[2],H=w[3],c=k=w[4],d=V=w[5],w.length===6?(p=Math.sqrt(b*b+D*D),_=Math.sqrt(H*H+U*U),v=b||D?la(D,b)*ys:0,g=U||H?la(U,H)*ys+v:0,g&&(_*=Math.abs(Math.cos(g*Na))),i.svg&&(c-=T-(T*b+C*U),d-=C-(T*D+C*H))):(ze=w[6],Ae=w[7],Z=w[8],te=w[9],ee=w[10],Le=w[11],c=w[12],d=w[13],f=w[14],y=la(ze,ee),m=y*ys,y&&(E=Math.cos(-y),L=Math.sin(-y),F=k*E+Z*L,z=V*E+te*L,G=ze*E+ee*L,Z=k*-L+Z*E,te=V*-L+te*E,ee=ze*-L+ee*E,Le=Ae*-L+Le*E,k=F,V=z,ze=G),y=la(-U,ee),h=y*ys,y&&(E=Math.cos(-y),L=Math.sin(-y),F=b*E-Z*L,z=D*E-te*L,G=U*E-ee*L,Le=H*L+Le*E,b=F,D=z,U=G),y=la(D,b),v=y*ys,y&&(E=Math.cos(y),L=Math.sin(y),F=b*E+D*L,z=k*E+V*L,D=D*E-b*L,V=V*E-k*L,b=F,k=z),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,h=180-h),p=bt(Math.sqrt(b*b+D*D+U*U)),_=bt(Math.sqrt(V*V+ze*ze)),y=la(k,V),g=Math.abs(y)>2e-4?y*ys:0,S=Le?1/(Le<0?-Le:Le):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!TS(zn(e,St)),F&&e.setAttribute("transform",F))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=bt(p),i.scaleY=bt(_),i.rotation=bt(v)+o,i.rotationX=bt(m)+o,i.rotationY=bt(h)+o,i.skewX=g+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[bn]=Sc(u)),i.xOffset=i.yOffset=0,i.force3D=Gn.force3D,i.renderTransform=i.svg?K2:yS?wS:$2,i.uncache=0,i},Sc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ld=function(e,t,i){var r=on(t);return bt(parseFloat(t)+parseFloat(es(e,"x",i+"px",r)))+r},$2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,wS(e,t)},ps="0deg",So="0px",ms=") ",wS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,v=i.scaleY,m=i.transformPerspective,h=i.force3D,g=i.target,x=i.zOrigin,S="",T=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==ps||c!==ps)){var C=parseFloat(c)*Na,w=Math.sin(C),y=Math.cos(C),E;C=parseFloat(d)*Na,E=Math.cos(C),a=ld(g,a,w*E*-x),o=ld(g,o,-Math.sin(C)*-x),l=ld(g,l,y*E*-x+x)}m!==So&&(S+="perspective("+m+ms),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||a!==So||o!==So||l!==So)&&(S+=l!==So||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ms),u!==ps&&(S+="rotate("+u+ms),c!==ps&&(S+="rotateY("+c+ms),d!==ps&&(S+="rotateX("+d+ms),(f!==ps||p!==ps)&&(S+="skew("+f+", "+p+ms),(_!==1||v!==1)&&(S+="scale("+_+", "+v+ms),g.style[St]=S||"translate(0, 0)"},K2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,v=i.yOrigin,m=i.xOffset,h=i.yOffset,g=i.forceCSS,x=parseFloat(a),S=parseFloat(o),T,C,w,y,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Na,u*=Na,T=Math.cos(l)*d,C=Math.sin(l)*d,w=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=Na,E=Math.tan(u-c),E=Math.sqrt(1+E*E),w*=E,y*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),T*=E,C*=E)),T=bt(T),C=bt(C),w=bt(w),y=bt(y)):(T=d,y=f,C=w=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=es(p,"x",a,"px"),S=es(p,"y",o,"px")),(_||v||m||h)&&(x=bt(x+_-(_*T+v*w)+m),S=bt(S+v-(_*C+v*y)+h)),(r||s)&&(E=p.getBBox(),x=bt(x+r/100*E.width),S=bt(S+s/100*E.height)),E="matrix("+T+","+C+","+w+","+y+","+x+","+S+")",p.setAttribute("transform",E),g&&(p.style[St]=E)},Z2=function(e,t,i,r,s){var a=360,o=Yt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ys:1),u=l-r,c=r+u+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*_0)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*_0)%a-~~(u/a)*a)),e._pt=f=new Rn(e._pt,t,i,r,u,N2),f.e=c,f.u="deg",e._props.push(i),f},T0=function(e,t){for(var i in t)e[i]=t[i];return e},Q2=function(e,t,i){var r=T0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[St]=t,o=gl(i,1),Jr(i,St),i.setAttribute("transform",u)):(u=getComputedStyle(i)[St],a[St]=t,o=gl(i,1),a[St]=u);for(l in pr)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=on(u),_=on(c),d=p!==_?es(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new Rn(e._pt,o,l,d,f-d,op),e._pt.u=_||0,e._props.push(l));T0(o,r)};Cn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});yc[e>1?"border"+n:n]=function(o,l,u,c,d){var f,p;if(arguments.length<4)return f=a.map(function(_){return Zi(o,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},a.forEach(function(_,v){return p[_]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,p,d)}});var AS={name:"css",register:up,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,d,f,p,_,v,m,h,g,x,S,T,C,w,y,E;Um||up(),this.styles=this.styles||xS(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(Fn[v]&&lS(v,t,i,r,e,s)))){if(p=typeof c,_=yc[v],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=dl(c)),_)_(this,e,v,c,i)&&(w=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",qr.lastIndex=0,qr.test(u)||(m=on(u),h=on(c),h?m!==h&&(u=es(e,v,u,h)+h):m&&(c+=m)),this.add(o,"setProperty",u,c,r,s,0,0,v),a.push(v),y.push(v,0,o[v]);else if(p!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Yt(u)&&~u.indexOf("random(")&&(u=dl(u)),on(u+"")||u==="auto"||(u+=Gn.units[v]||on(Zi(e,v))||""),(u+"").charAt(1)==="="&&(u=Zi(e,v))):u=Zi(e,v),f=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),d=parseFloat(c),v in Li&&(v==="autoAlpha"&&(f===1&&Zi(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,o.visibility),Or(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Li[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in pr,x){if(this.styles.save(v),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=zn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=c,c=zn(e,"perspective"),L?e.style.perspective=L:Jr(e,"perspective")}d=parseFloat(c)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||gl(e,t.parseTransform),C=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Rn(this._pt,o,St,0,1,T.renderTransform,T,0,-1),S.dep=1),v==="scale")this._pt=new Rn(this._pt,T,"scaleY",T.scaleY,(g?Da(T.scaleY,g+d):d)-T.scaleY||0,op),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(bn,0,o[bn]),c=Y2(c),T.svg?cp(e,c,0,C,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==T.zOrigin&&Or(this,T,"zOrigin",T.zOrigin,h),Or(this,o,v,Sc(u),Sc(c)));continue}else if(v==="svgOrigin"){cp(e,c,1,C,0,this);continue}else if(v in ES){Z2(this,T,v,f,g?Da(f,g+c):c);continue}else if(v==="smoothOrigin"){Or(this,T,"smooth",T.smooth,c);continue}else if(v==="force3D"){T[v]=c;continue}else if(v==="transform"){Q2(this,c,e);continue}}else v in o||(v=Za(v)||v);if(x||(d||d===0)&&(f||f===0)&&!L2.test(c)&&v in o)m=(u+"").substr((f+"").length),d||(d=0),h=on(c)||(v in Gn.units?Gn.units[v]:m),m!==h&&(f=es(e,v,u,h)),this._pt=new Rn(this._pt,x?T:o,v,f,(g?Da(f,g+d):d)-f,!x&&(h==="px"||v==="zIndex")&&t.autoRound!==!1?F2:op),this._pt.u=h||0,x&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=U2):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=I2);else if(v in o)j2.call(this,e,v,u,g?g+c:c);else if(v in e)this.add(e,v,u||e[v],g?g+c:c,r,s);else if(v!=="parseTransform"){wm(v,c);continue}x||(v in o?y.push(v,0,o[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,u||e[v])),a.push(v)}}w&&pS(this)},render:function(e,t){if(t.tween._time||!Fm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Zi,aliases:Li,getSetter:function(e,t,i){var r=Li[t];return r&&r.indexOf(",")<0&&(t=r),t in pr&&t!==bn&&(e._gsap.x||Zi(e,"x"))?i&&g0===i?t==="scale"?z2:B2:(g0=i||{})&&(t==="scale"?V2:H2):e.style&&!Mm(e.style[t])?O2:~t.indexOf("-")?k2:Nm(e,t)},core:{_removeProperty:Jr,_getMatrix:km}};Pn.utils.checkPrefix=Za;Pn.core.getStyleSaver=xS;(function(n,e,t,i){var r=Cn(n+","+e+","+t,function(s){pr[s]=1});Cn(e,function(s){Gn.units[s]="deg",ES[s]=1}),Li[r[13]]=n+","+e,Cn(i,function(s){var a=s.split(":");Li[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Gn.units[n]="px"});Pn.registerPlugin(AS);var fp=Pn.registerPlugin(AS)||Pn;fp.core.Tween;const J2=({text:n,as:e="div",typingSpeed:t=50,initialDelay:i=0,pauseDuration:r=2e3,deletingSpeed:s=30,loop:a=!0,className:o="",showCursor:l=!0,hideCursorWhileTyping:u=!1,cursorCharacter:c="|",cursorClassName:d="",cursorBlinkDuration:f=.5,textColors:p=[],variableSpeed:_,onSentenceComplete:v,startOnVisible:m=!1,reverseMode:h=!1,...g})=>{const[x,S]=ne.useState(""),[T,C]=ne.useState(0),[w,y]=ne.useState(!1),[E,L]=ne.useState(0),[b,D]=ne.useState(!m),U=ne.useRef(null),H=ne.useRef(null),k=ne.useMemo(()=>Array.isArray(n)?n:[n],[n]),V=ne.useCallback(()=>{if(!_)return t;const{min:G,max:Z}=_;return Math.random()*(Z-G)+G},[_,t]),F=()=>p.length===0?"inherit":p[E%p.length];ne.useEffect(()=>{if(!m||!H.current)return;const G=new IntersectionObserver(Z=>{Z.forEach(te=>{te.isIntersecting&&D(!0)})},{threshold:.1});return G.observe(H.current),()=>G.disconnect()},[m]),ne.useEffect(()=>{l&&U.current&&(fp.set(U.current,{opacity:1}),fp.to(U.current,{opacity:0,duration:f,repeat:-1,yoyo:!0,ease:"power2.inOut"}))},[l,f]),ne.useEffect(()=>{if(!b)return;let G;const Z=k[E],te=h?Z.split("").reverse().join(""):Z,ee=()=>{if(w)if(x===""){if(y(!1),E===k.length-1&&!a)return;v&&v(k[E],E),L(Ae=>(Ae+1)%k.length),C(0),G=setTimeout(()=>{},r)}else G=setTimeout(()=>{S(Ae=>Ae.slice(0,-1))},s);else if(T<te.length)G=setTimeout(()=>{S(Ae=>Ae+te[T]),C(Ae=>Ae+1)},_?V():t);else if(k.length>=1){if(!a&&E===k.length-1)return;G=setTimeout(()=>{y(!0)},r)}};return T===0&&!w&&x===""?G=setTimeout(ee,i):ee(),()=>clearTimeout(G)},[T,x,w,t,s,r,k,E,a,i,b,h,_,v]);const z=u&&(T<k[E].length||w);return ne.createElement(e,{ref:H,className:`text-type ${o}`,...g},I.jsx("span",{className:"text-type__content",style:{color:F()||"inherit"},children:x}),l&&I.jsx("span",{ref:U,className:`text-type__cursor ${d} ${z?"text-type__cursor--hidden":""}`,children:c}))};function e3(){return I.jsxs("div",{className:"max-w-[1200px] mx-auto px-8 pt-20 pb-32",children:[I.jsxs("section",{className:"flex flex-col items-start text-left space-y-8 py-32",children:[I.jsxs("div",{className:"space-y-4 max-w-4xl",children:[I.jsx("p",{className:"text-accent font-bold text-[11px] uppercase tracking-[0.4em] font-label",children:"产品设计作品集"}),I.jsxs("div",{className:"leading-[1.1]",children:[I.jsx("h1",{className:"text-5xl md:text-[84px] font-semibold leading-[1.1] tracking-[-0.04em] text-gradient mb-0",children:"HELLO"}),I.jsx(J2,{text:["I'm WANG YUYING"],as:"h1",typingSpeed:100,pauseDuration:2e3,showCursor:!1,cursorCharacter:"|",loop:!1,className:"text-5xl md:text-[84px] font-semibold leading-[1.1] tracking-[-0.04em] text-gradient my-0"}),I.jsx("h3",{className:"text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-gradient mt-0",children:"UX 设计师"})]}),I.jsx("p",{className:"text-foreground-muted text-lg md:text-xl font-body max-w-2xl leading-relaxed",children:"以精准与共情打造数字体验。通过深思熟虑的架构设计和电影级视觉叙事，解决复杂问题。"})]}),I.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 pt-4",children:[I.jsx(xn,{to:"/projects",className:"px-8 py-4 btn-gradient text-white font-semibold rounded-lg hover:scale-95 transition-all duration-300",children:"查看作品"}),I.jsx(xn,{to:"/contact",className:"px-8 py-4 bg-transparent border border-accent text-accent font-semibold rounded-lg backdrop-blur-sm hover:bg-accent/10 transition-all duration-300",children:"联系我"})]})]}),I.jsx("section",{className:"mt-32",children:I.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[I.jsxs(xn,{to:"/projects",className:"group relative overflow-hidden glass-card bg-white/[0.05] backdrop-blur-2xl p-12 rounded-xl border border-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,240,255,0.2)] flex flex-col justify-between h-[400px]",children:[I.jsx("div",{className:"absolute top-0 right-0 p-8",children:I.jsx("span",{className:"material-symbols-outlined text-foreground-muted group-hover:text-accent transition-colors",children:"arrow_outward"})}),I.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple opacity-20 flex items-center justify-center border border-accent",children:I.jsx("span",{className:"material-symbols-outlined text-accent",children:"grid_view"})}),I.jsxs("div",{children:[I.jsx("h2",{className:"text-3xl font-semibold text-white tracking-tighter mb-4",children:"查看作品"}),I.jsx("p",{className:"text-foreground-muted text-base leading-relaxed max-w-[280px]",children:"探索专注于用户中心设计和数据驱动解决方案的精选案例研究合集。"})]}),I.jsx("div",{className:"absolute -bottom-10 -right-10 w-40 h-40 border border-accent/10 rounded-full rotate-45 group-hover:border-accent/30 transition-colors"})]}),I.jsxs(xn,{to:"/contact",className:"group relative overflow-hidden glass-card bg-white/[0.05] backdrop-blur-2xl p-12 rounded-xl border border-accent-purple/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] flex flex-col justify-between h-[400px] md:mt-16",children:[I.jsx("div",{className:"absolute top-0 right-0 p-8",children:I.jsx("span",{className:"material-symbols-outlined text-foreground-muted group-hover:text-accent-bright transition-colors",children:"mail"})}),I.jsx("div",{className:"w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-accent-purple/30 group-hover:border-accent-bright transition-colors",children:I.jsx("span",{className:"material-symbols-outlined text-accent-bright",children:"alternate_email"})}),I.jsxs("div",{children:[I.jsx("h2",{className:"text-3xl font-semibold text-white tracking-tighter mb-4",children:"联系我"}),I.jsx("p",{className:"text-foreground-muted text-base leading-relaxed max-w-[280px]",children:"让我们在您的下一个数字挑战上合作。开放自由职业机会和创新合作伙伴关系。"})]}),I.jsxs("div",{className:"absolute -bottom-4 -right-4 flex gap-2",children:[I.jsx("div",{className:"w-12 h-12 border border-accent-purple/10 group-hover:border-accent-bright/30 transition-colors"}),I.jsx("div",{className:"w-12 h-12 border border-accent-purple/10 group-hover:border-accent-bright/30 transition-colors"})]})]})]})}),I.jsxs("section",{className:"mt-64 grid grid-cols-1 md:grid-cols-12 gap-12 items-center",children:[I.jsxs("div",{className:"md:col-span-7 space-y-6",children:[I.jsx("p",{className:"text-foreground-muted font-bold text-[11px] uppercase tracking-[0.2em]",children:"设计理念"}),I.jsxs("h3",{className:"text-4xl font-semibold text-white tracking-tight leading-tight",children:["超越美学：",I.jsx("br",{}),"设计是功能性的工具"]}),I.jsx("p",{className:"text-foreground-muted text-lg leading-relaxed max-w-xl",children:"我相信高端设计不仅关乎外观，更在于如何引导焦点。我的流程包括深入研究、严格原型设计，以及对交互细节的细致关注，让数字工具感觉无缝而专业。"}),I.jsxs("div",{className:"flex gap-8 pt-4",children:[I.jsxs("div",{className:"flex flex-col gap-2",children:[I.jsx("span",{className:"text-white font-bold text-2xl tracking-tighter",children:"04+"}),I.jsx("span",{className:"text-foreground-muted text-[10px] uppercase font-bold tracking-widest",children:"年经验"})]}),I.jsxs("div",{className:"flex flex-col gap-2",children:[I.jsx("span",{className:"text-white font-bold text-2xl tracking-tighter",children:"12+"}),I.jsx("span",{className:"text-foreground-muted text-[10px] uppercase font-bold tracking-widest",children:"全球项目"})]})]})]}),I.jsx("div",{className:"md:col-span-5 relative h-[300px] flex items-center justify-center",children:I.jsxs("div",{className:"relative w-64 h-64",children:[I.jsx("div",{className:"absolute inset-0 border border-accent/20 rounded-full animate-pulse-slow"}),I.jsx("div",{className:"absolute inset-4 border border-accent-bright/30 rounded-full"}),I.jsx("div",{className:"absolute inset-8 border border-accent-purple/20 rounded-full"}),I.jsx("div",{className:"absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"}),I.jsx("div",{className:"absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-bright to-transparent"}),I.jsx("div",{className:"absolute top-1/4 left-1/4 w-32 h-32 border border-accent-purple/40 rotate-45"})]})})]})]})}function t3(){const n=["用户体验设计","视觉系统","交互原型","创意指导","排版架构","动效设计","设计工程"];return I.jsx("div",{className:"relative pt-20 pb-32 px-6",children:I.jsxs("div",{className:"max-w-[800px] mx-auto",children:[I.jsx("header",{className:"mb-12",children:I.jsx("h1",{className:"text-5xl md:text-[56px] font-semibold leading-tight tracking-tighter text-gradient",children:"关于我"})}),I.jsxs("section",{className:"glass-card rounded-xl p-8 md:p-12 relative overflow-hidden border border-accent/10",children:[I.jsx("div",{className:"mb-12 flex justify-start",children:I.jsxs("div",{className:"w-[120px] h-[120px] rounded-full border border-accent/20 flex items-center justify-center relative",children:[I.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 blur-xl"}),I.jsx("span",{className:"text-white/20 font-black text-2xl tracking-widest",children:"WY"})]})}),I.jsxs("div",{className:"mb-16",children:[I.jsx("div",{className:"text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted mb-6 font-label",children:"简介"}),I.jsxs("div",{className:"space-y-6",children:[I.jsx("p",{className:"text-lg text-foreground-muted leading-relaxed",children:'我是一名多学科设计师，专注于创造高保真数字体验，在人类直觉与技术精准之间架起桥梁。我的方法植根于"数字观测台"哲学——每个界面都充当一个透镜，用以澄清复杂数据，并将用户交互提升为一场电影般的旅程。'}),I.jsx("p",{className:"text-lg text-foreground-muted leading-relaxed",children:"凭借建筑几何学和交互设计的背景，我专注于构建优先考虑结构完整性而非肤浅趋势的系统。我相信设计不仅仅是外观，更在于它在真实世界实用性压力下的表现。通过剔除不必要的元素，我为专注而有意义的互动创造空间。"}),I.jsx("p",{className:"text-lg text-foreground-muted leading-relaxed",children:"目前正在探索空间计算与生成美学的交叉点，我致力于定义下一代视觉语言。当我不做设计时，你会发现我在分析粗野主义建筑的网格系统，或在实验程序化动画节点。"})]})]}),I.jsxs("div",{children:[I.jsx("div",{className:"text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted mb-8 font-label",children:"核心能力"}),I.jsx("div",{className:"flex flex-wrap gap-3",children:n.map((e,t)=>I.jsx("span",{className:"px-5 py-2 bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 border border-accent/30 text-accent rounded-full text-[13px] font-semibold tracking-tight backdrop-blur-sm transition-all duration-300 hover:from-accent-cyan/10 hover:to-accent-purple/10 hover:border-accent hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]",children:e},t))})]}),I.jsx("div",{className:"absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tl from-accent-cyan/10 to-accent-purple/10 blur-[100px] pointer-events-none"})]})]})})}function n3(){const n=[{category:"系统架构",icon:"hub",title:"核心体验升级项目",description:"通过数据驱动的架构转变和精准聚焦的交互模型，重新设计基础用户旅程。"},{category:"AI 与认知",icon:"psychology",title:"AI 智能助手 IP 升级",description:"定义下一代智能代理的视觉识别和行为模式，在实用性与个性之间架起桥梁。"},{category:"设计运营",icon:"layers",title:"UI 组件库升级",description:"可扩展的设计令牌和原子组件结构，专为性能、一致性和跨平台可访问性而构建。"},{category:"战略研究",icon:"insights",title:"未来移动范式 2025",description:"专注于手势导航和情境感知界面的探索性概念设计，构建后应用时代生态系统。"}];return I.jsxs("div",{className:"max-w-[1200px] mx-auto px-6 py-32 md:py-48",children:[I.jsxs("header",{className:"mb-16",children:[I.jsx("h1",{className:"text-5xl md:text-6xl font-semibold text-foreground tracking-tighter mb-4 text-gradient",children:"精选作品"}),I.jsx("div",{className:"w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"})]}),I.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:n.map((e,t)=>I.jsxs("div",{className:"glass-card rounded-2xl p-8 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/30 hover:shadow-[0_20px_40px_-20px_rgba(0,240,255,0.3),0_20px_40px_-20px_rgba(139,92,246,0.2)] hover:bg-white/8",children:[I.jsxs("div",{className:"flex justify-between items-start mb-12",children:[I.jsx("span",{className:"text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted font-label",children:e.category}),I.jsx("div",{className:"w-16 h-16 rounded-xl border border-accent/30 flex items-center justify-center bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 group-hover:border-accent group-hover:from-accent-cyan/20 group-hover:to-accent-purple/20 transition-all",children:I.jsx("span",{className:"material-symbols-outlined text-accent text-3xl",children:e.icon})})]}),I.jsx("h3",{className:"text-2xl font-semibold text-white mb-4 text-gradient leading-tight",children:e.title}),I.jsx("p",{className:"text-foreground-muted leading-relaxed mb-8",children:e.description}),I.jsxs("div",{className:"mt-auto flex items-center gap-2 text-accent text-sm font-semibold tracking-tighter group-hover:gap-4 transition-all",children:["查看案例研究",I.jsx("span",{className:"material-symbols-outlined text-sm",children:"arrow_forward"})]})]},t))})]})}function i3(){const n=[{icon:"chat_bubble",label:"微信",value:"wangyuying_design",action:"arrow_forward"},{icon:"alternate_email",label:"邮箱",value:"contact@wangyuying.com",action:"content_copy"}];return I.jsx("div",{className:"relative pt-32 pb-32 px-6",children:I.jsxs("div",{className:"max-w-[700px] mx-auto flex flex-col items-center",children:[I.jsx("header",{className:"w-full mb-12 text-center",children:I.jsx("h1",{className:"text-5xl md:text-6xl font-semibold tracking-tighter text-gradient mb-4",children:"联系方式"})}),I.jsxs("section",{className:"glass-card bg-white/5 p-12 rounded-xl w-full border border-accent/10 flex flex-col items-center gap-12 transition-all duration-300",children:[I.jsxs("div",{className:"flex flex-col items-center gap-4",children:[I.jsx("span",{className:"text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted",children:"头像"}),I.jsxs("div",{className:"w-20 h-20 rounded-full border border-accent/50 flex items-center justify-center bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 relative",children:[I.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 blur-lg"}),I.jsx("span",{className:"material-symbols-outlined text-4xl text-accent relative z-10",children:"person"})]})]}),I.jsxs("div",{className:"w-full flex flex-col gap-6",children:[I.jsx("h2",{className:"text-lg font-medium text-foreground",children:"联系方式"}),I.jsx("div",{className:"flex flex-col gap-4",children:n.map((e,t)=>I.jsxs("div",{className:"group flex items-center justify-between p-4 bg-white/3 rounded-xl border border-accent/10 hover:border-accent/30 hover:bg-gradient-to-r hover:from-accent-cyan/5 hover:to-accent-purple/5 transition-all duration-300 cursor-pointer",children:[I.jsxs("div",{className:"flex items-center gap-4",children:[I.jsx("div",{className:"w-10 h-10 flex items-center justify-center border border-accent rounded-lg bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 group-hover:from-accent-cyan/20 group-hover:to-accent-purple/20 transition-all",children:I.jsx("span",{className:"material-symbols-outlined text-accent",children:e.icon})}),I.jsxs("div",{className:"flex flex-col",children:[I.jsx("span",{className:"text-sm text-foreground-muted",children:e.label}),I.jsx("span",{className:"text-base font-medium text-foreground",children:e.value})]})]}),I.jsx("span",{className:"material-symbols-outlined text-foreground-muted group-hover:text-accent transition-colors",children:e.action})]},t))})]}),I.jsx("div",{className:"w-full pt-8 border-t border-accent/10 text-center",children:I.jsx("p",{className:"text-sm text-foreground-muted italic font-body leading-relaxed",children:'"设计不仅仅是外观和感觉，设计是它如何工作。"'})})]}),I.jsx("div",{className:"mt-16 opacity-30",children:I.jsxs("svg",{width:"200",height:"2",viewBox:"0 0 200 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[I.jsx("rect",{width:"200",height:"1",fill:"url(#paint0_linear)"}),I.jsx("defs",{children:I.jsxs("linearGradient",{id:"paint0_linear",x1:"0",y1:"0",x2:"200",y2:"0",gradientUnits:"userSpaceOnUse",children:[I.jsx("stop",{stopColor:"#2C7CFD",stopOpacity:"0"}),I.jsx("stop",{offset:"0.3",stopColor:"#2C7CFD"}),I.jsx("stop",{offset:"0.7",stopColor:"#8B10BF"}),I.jsx("stop",{offset:"1",stopColor:"#8B10BF",stopOpacity:"0"})]})})]})})]})})}function r3(){return I.jsx("div",{className:"min-h-screen flex items-center justify-center px-6",children:I.jsxs("div",{className:"text-center space-y-8",children:[I.jsxs("div",{className:"space-y-4",children:[I.jsx("h1",{className:"text-8xl md:text-9xl font-bold text-gradient-accent animate-gradient-shift",children:"404"}),I.jsx("h2",{className:"text-2xl md:text-3xl font-semibold text-foreground",children:"页面未找到"}),I.jsx("p",{className:"text-foreground-muted text-lg max-w-md mx-auto",children:"您访问的页面不存在或已被移动。"})]}),I.jsxs(xn,{to:"/",className:"inline-flex items-center gap-2 px-8 py-4 btn-gradient text-white font-semibold rounded-lg hover:scale-95 transition-all duration-300",children:[I.jsx("span",{className:"material-symbols-outlined",children:"home"}),"返回首页"]})]})})}function s3(){return I.jsx(fT,{children:I.jsx(rT,{children:I.jsxs(vs,{path:"/",element:I.jsx(IP,{}),children:[I.jsx(vs,{index:!0,element:I.jsx(e3,{})}),I.jsx(vs,{path:"about",element:I.jsx(t3,{})}),I.jsx(vs,{path:"projects",element:I.jsx(n3,{})}),I.jsx(vs,{path:"contact",element:I.jsx(i3,{})}),I.jsx(vs,{path:"*",element:I.jsx(r3,{})})]})})})}ud.createRoot(document.getElementById("root")).render(I.jsx(U0.StrictMode,{children:I.jsx(s3,{})}));
