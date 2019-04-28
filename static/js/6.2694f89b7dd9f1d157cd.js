webpackJsonp([6],{"H2h+":function(t,e){
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(i)},H5fL:function(t,e){},TQvf:function(t,e,i){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var s;s=function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),o=l(i(1)),r=l(i(3)),a=l(i(4));function l(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(t,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.resolveOptions(i),s.listenClick(t),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),n(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return h("action",t)}},{key:"defaultTarget",value:function(t){var e=h("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return h("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach(function(t){i=i&&!!document.queryCommandSupported(t)}),i}}]),e}();function h(t,e){var i="data-clipboard-"+t;if(e.hasAttribute(i))return e.getAttribute(i)}t.exports=c},function(t,e,i){"use strict";var s,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),r=i(2),a=(s=r)&&s.__esModule?s:{default:s};var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,a.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,a.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":n(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=l},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var s=window.getSelection(),n=document.createRange();n.selectNodeContents(t),s.removeAllRanges(),s.addRange(n),e=s.toString()}return e}},function(t,e){function i(){}i.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,r=s.length;o<r;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}},t.exports=i},function(t,e,i){var s=i(5),n=i(6);t.exports=function(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(i))throw new TypeError("Third argument must be a Function");if(s.node(t))return function(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}(t,e,i);if(s.nodeList(t))return function(t,e,i){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,i)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,i)})}}}(t,e,i);if(s.string(t))return function(t,e,i){return n(document.body,t,e,i)}(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var i=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===i||"[object HTMLCollection]"===i)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,i){var s=i(7);function n(t,e,i,n,o){var r=function(t,e,i,n){return function(i){i.delegateTarget=s(i.target,e),i.delegateTarget&&n.call(t,i)}}.apply(this,arguments);return t.addEventListener(i,r,o),{destroy:function(){t.removeEventListener(i,r,o)}}}t.exports=function(t,e,i,s,o){return"function"==typeof t.addEventListener?n.apply(null,arguments):"function"==typeof i?n.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return n(t,e,i,s,o)}))}},function(t,e){var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var s=Element.prototype;s.matches=s.matchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector||s.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])},t.exports=s()},"Va4+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),n=i("TQvf"),o=i.n(n);function r(t,e){var i=new o.a(e.target,{text:function(){return t}});i.on("success",function(){s.default.prototype.$notify({title:"success",message:"copy成功",type:"success"}),i.off("error"),i.off("success"),i.destroy()}),i.on("error",function(){s.default.prototype.$notify.error({title:"error",message:"copy失败"}),i.off("error"),i.off("success"),i.destroy()}),i.onClick(e)}var a=i("TQvf");if(!a)throw new Error("you should npm install `clipboard` --save at first");var l={bind:function(t,e){if("success"===e.arg)t._v_clipboard_success=e.value;else if("error"===e.arg)t._v_clipboard_error=e.value;else{var i=new a(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"}});i.on("success",function(e){var i=t._v_clipboard_success;i&&i(e)}),i.on("error",function(e){var i=t._v_clipboard_error;i&&i(e)}),t._v_clipboard=i}},update:function(t,e){"success"===e.arg?t._v_clipboard_success=e.value:"error"===e.arg?t._v_clipboard_error=e.value:(t._v_clipboard.text=function(){return e.value},t._v_clipboard_action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){"success"===e.arg?delete t._v_clipboard_success:"error"===e.arg?delete t._v_clipboard_error:(t._v_clipboard.destroy(),delete t._v_clipboard)}},c=function(t){t.directive("Clipboard",l)};window.Vue&&(window.clipboard=l,Vue.use(c)),l.install=c;var h=l;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let d=0;function u(){}u.prototype.__mixinApplications,u.prototype.__mixinSet;const p=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=d++;return function(s){let n=s.__mixinSet;if(n&&n[i])return s;let o=e,r=o.get(s);r||(r=t(s),o.set(s,r));let a=Object.create(r.__mixinSet||n||null);return a[i]=!0,r.__mixinSet=a,r}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let g=0,m=0,_=[],v=0,b=document.createTextNode("");new window.MutationObserver(function(){const t=_.length;for(let e=0;e<t;e++){let t=_[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}_.splice(0,t),m+=t}).observe(b,{characterData:!0});const y={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},w={run:t=>(b.textContent=v++,_.push(t),g++),cancel(t){const e=t-m;if(e>=0){if(!_[e])throw new Error("invalid async handle: "+t);_[e]=null}}},k=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:t=>t,x=w,C=p(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let s=this.__data[t],n=this._shouldPropertyChange(t,e,s);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=s),this.__data[t]=e,this.__dataPending[t]=e),n}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,x.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i))}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,s){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,s)}_attributeToProperty(t,e,i){if(!this.__serializing){const s=this.__dataAttributes,n=s&&s[t]||t;this[n]=this._deserializeValue(e,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const s=this._serializeValue(e);void 0===s?t.removeAttribute(i):("class"!==i&&"name"!==i&&"slot"!==i||(t=k(t)),t.setAttribute(i,s))}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}});const E=p(t=>{const e=C(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const s=t[i];e[i]="function"==typeof s?{type:s}:s}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,f.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=s(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,s(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=new Map;class N{constructor(t,e,i,s=j){this.strings=t,this.values=e,this.type=i,this.partCallback=s}getHTML(){const t=this.strings.length-1;let e="",i=!0;for(let s=0;s<t;s++){const t=this.strings[s];e+=t;const n=R(t);e+=(i=n>-1?n<t.length:i)?T:P}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const P=`{{lit-${String(Math.random()).slice(2)}}}`,T=`\x3c!--${P}--\x3e`,O=new RegExp(`${P}|${T}`),L=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function R(t){const e=t.lastIndexOf(">");return t.indexOf("<",e+1)>-1?t.length:e}class A{constructor(t,e,i,s,n){this.type=t,this.index=e,this.name=i,this.rawName=s,this.strings=n}}const M=t=>-1!==t.index;class I{constructor(t,e){this.parts=[],this.element=e;const i=this.element.content,s=document.createTreeWalker(i,133,null,!1);let n=-1,o=0;const r=[];let a,l;for(;s.nextNode();){n++,a=l;const e=l=s.currentNode;if(1===e.nodeType){if(!e.hasAttributes())continue;const i=e.attributes;let s=0;for(let t=0;t<i.length;t++)i[t].value.indexOf(P)>=0&&s++;for(;s-- >0;){const s=t.strings[o],r=L.exec(s)[1],a=i.getNamedItem(r),l=a.value.split(O);this.parts.push(new A("attribute",n,a.name,r,l)),e.removeAttribute(a.name),o+=l.length-1}}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(P)<0)continue;const i=e.parentNode,s=t.split(O),a=s.length-1;o+=a;for(let t=0;t<a;t++)i.insertBefore(""===s[t]?document.createComment(""):document.createTextNode(s[t]),e),this.parts.push(new A("node",n++));i.insertBefore(""===s[a]?document.createComment(""):document.createTextNode(s[a]),e),r.push(e)}else if(8===e.nodeType&&e.nodeValue===P){const t=e.parentNode,i=e.previousSibling;null===i||i!==a||i.nodeType!==Node.TEXT_NODE?t.insertBefore(document.createComment(""),e):n--,this.parts.push(new A("node",n++)),r.push(e),null===e.nextSibling?t.insertBefore(document.createComment(""),e):n--,l=a,o++}}for(const t of r)t.parentNode.removeChild(t)}}const $=(t,e)=>B(e)?(e=e(t),z):null===e?void 0:e,B=t=>"function"==typeof t&&!0===t.__litDirective,z={},D=t=>null===t||!("object"==typeof t||"function"==typeof t);class H{constructor(t,e,i,s){this.instance=t,this.element=e,this.name=i,this.strings=s,this.size=s.length-1,this._previousValues=[]}_interpolate(t,e){const i=this.strings,s=i.length-1;let n="";for(let o=0;o<s;o++){n+=i[o];const s=$(this,t[e+o]);if(s&&s!==z&&(Array.isArray(s)||"string"!=typeof s&&s[Symbol.iterator]))for(const t of s)n+=t;else n+=s}return n+i[s]}_equalToPreviousValues(t,e){for(let i=e;i<e+this.size;i++)if(this._previousValues[i]!==t[i]||!D(t[i]))return!1;return!0}setValue(t,e){if(this._equalToPreviousValues(t,e))return;const i=this.strings;let s;2===i.length&&""===i[0]&&""===i[1]?(s=$(this,t[e]),Array.isArray(s)&&(s=s.join(""))):s=this._interpolate(t,e),s!==z&&this.element.setAttribute(this.name,s),this._previousValues=t}}class V{constructor(t,e,i){this.instance=t,this.startNode=e,this.endNode=i,this._previousValue=void 0}setValue(t){if((t=$(this,t))!==z)if(D(t)){if(t===this._previousValue)return;this._setText(t)}else t instanceof N?this._setTemplateResult(t):Array.isArray(t)||t[Symbol.iterator]?this._setIterable(t):t instanceof Node?this._setNode(t):void 0!==t.then?this._setPromise(t):this._setText(t)}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_setNode(t){this._previousValue!==t&&(this.clear(),this._insert(t),this._previousValue=t)}_setText(t){const e=this.startNode.nextSibling;t=void 0===t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._setNode(document.createTextNode(t)),this._previousValue=t}_setTemplateResult(t){const e=this.instance._getTemplate(t);let i;this._previousValue&&this._previousValue.template===e?i=this._previousValue:(i=new F(e,this.instance._partCallback,this.instance._getTemplate),this._setNode(i._clone()),this._previousValue=i),i.update(t.values)}_setIterable(t){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const e=this._previousValue;let i=0;for(const s of t){let t=e[i];if(void 0===t){let s=this.startNode;if(i>0){s=e[i-1].endNode=document.createTextNode(""),this._insert(s)}t=new V(this.instance,s,this.endNode),e.push(t)}t.setValue(s),i++}if(0===i)this.clear(),this._previousValue=void 0;else if(i<e.length){const t=e[i-1];e.length=i,this.clear(t.endNode.previousSibling),t.endNode=this.endNode}}_setPromise(t){this._previousValue=t,t.then(e=>{this._previousValue===t&&this.setValue(e)})}clear(t=this.startNode){q(this.startNode.parentNode,t.nextSibling,this.endNode)}}const j=(t,e,i)=>{if("attribute"===e.type)return new H(t,i,e.name,e.strings);if("node"===e.type)return new V(t,i,i.nextSibling);throw new Error(`Unknown part type ${e.type}`)};class F{constructor(t,e,i){this._parts=[],this.template=t,this._partCallback=e,this._getTemplate=i}update(t){let e=0;for(const i of this._parts)i?void 0===i.size?(i.setValue(t[e]),e++):(i.setValue(t,e),e+=i.size):e++}_clone(){const t=this.template.element.content.cloneNode(!0),e=this.template.parts;if(e.length>0){const i=document.createTreeWalker(t,133,null,!1);let s=-1;for(let t=0;t<e.length;t++){const n=e[t],o=M(n);if(o)for(;s<n.index;)s++,i.nextNode();this._parts.push(o?this._partCallback(this,n,i.currentNode):void 0)}}return t}}const q=(t,e,i=null)=>{let s=e;for(;s!==i;){const e=s.nextSibling;t.removeChild(s),s=e}},X=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;const W=t=>{let e=1;const i=document.createTreeWalker(t,X,null,!1);for(;i.nextNode();)e++;return e},Y=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(M(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=(t,e)=>`${t}--${e}`,G=t=>e=>{const i=J(e.type,t);let s=S.get(i);void 0===s&&(s=new Map,S.set(i,s));let n=s.get(e.strings);if(void 0===n){const i=e.getTemplateElement();"object"==typeof window.ShadyCSS&&window.ShadyCSS.prepareTemplateDom(i,t),n=new I(e,i),s.set(e.strings,n)}return n},U=["html","svg"];function K(t){U.forEach(e=>{const i=S.get(J(e,t));void 0!==i&&i.forEach(t=>{const{element:{content:e}}=t,i=e.querySelectorAll("style");!function(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,X,null,!1);let o=0,r=s[0],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==r&&r.index===a;)r.index=null!==h?-1:r.index-l,r=s[++o]}c.forEach(t=>t.parentNode.removeChild(t))}(t,new Set(Array.from(i)))})})}const Q=new Set,Z=(t,e,i)=>{if(!Q.has(i)){Q.add(i);const s=document.createElement("template");if(Array.from(t.querySelectorAll("style")).forEach(t=>{s.content.appendChild(t)}),window.ShadyCSS.prepareTemplateStyles(s,i),K(i),window.ShadyCSS.nativeShadow){const i=s.content.querySelector("style");null!==i&&(t.insertBefore(i,t.firstChild),function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null===i||void 0===i)return void s.appendChild(e);const o=document.createTreeWalker(s,X,null,!1);let r=Y(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(i.parentNode.insertBefore(e,i),a=W(e));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=Y(n,r);return}r=Y(n,r)}}(e,i.cloneNode(!0),e.element.content.firstChild))}}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const tt=(t,...e)=>new N(t,e,"html",et),et=(t,e,i)=>{if("attribute"===e.type){if("on-"===e.rawName.substr(0,3)){return new class{constructor(t,e,i){this.instance=t,this.element=e,this.eventName=i}setValue(t){const e=$(this,t);e!==this._listener&&(null==e?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=e)}handleEvent(t){"function"==typeof this._listener?this._listener.call(this.element,t):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(t)}}(t,i,e.rawName.slice(3))}const s=e.name.substr(e.name.length-1);if("$"===s){const s=e.name.slice(0,-1);return new H(t,i,s,e.strings)}if("?"===s){return new class extends H{setValue(t,e){const i=this.strings;if(2!==i.length||""!==i[0]||""!==i[1])throw new Error("boolean attributes can only contain a single expression");{const i=$(this,t[e]);if(i===z)return;i?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}}(t,i,e.name.slice(0,-1),e.strings)}return new class extends H{setValue(t,e){const i=this.strings;let s;this._equalToPreviousValues(t,e)||((s=2===i.length&&""===i[0]&&""===i[1]?$(this,t[e]):this._interpolate(t,e))!==z&&(this.element[this.name]=s),this._previousValues=t)}}(t,i,e.rawName,e.strings)}return j(t,e,i)};class it extends(E(HTMLElement)){constructor(){super(...arguments),this.__renderComplete=null,this.__resolveRenderComplete=null,this.__isInvalid=!1,this.__isChanging=!1}ready(){this._root=this._createRoot(),super.ready(),this._firstRendered()}connectedCallback(){window.ShadyCSS&&this._root&&window.ShadyCSS.styleElement(this),super.connectedCallback()}_firstRendered(){}_createRoot(){return this.attachShadow({mode:"open"})}_shouldPropertiesChange(t,e,i){const s=this._shouldRender(t,e,i);return!s&&this.__resolveRenderComplete&&this.__resolveRenderComplete(!1),s}_shouldRender(t,e,i){return!0}_propertiesChanged(t,e,i){super._propertiesChanged(t,e,i);const s=this._render(t);s&&void 0!==this._root&&this._applyRender(s,this._root),this._didRender(t,e,i),this.__resolveRenderComplete&&this.__resolveRenderComplete(!0)}_flushProperties(){this.__isChanging=!0,this.__isInvalid=!1,super._flushProperties(),this.__isChanging=!1}_shouldPropertyChange(t,e,i){const s=super._shouldPropertyChange(t,e,i);return s&&this.__isChanging&&console.trace("Setting properties in response to other properties changing "+`considered harmful. Setting '${t}' from `+`'${this._getProperty(t)}' to '${e}'.`),s}_render(t){throw new Error("_render() not implemented")}_applyRender(t,e){!function(t,e,i){const s=G(i),n=s(t);let o=e.__templateInstance;if(void 0!==o&&o.template===n&&o._partCallback===t.partCallback)return void o.update(t.values);o=new F(n,t.partCallback,s),e.__templateInstance=o;const r=o._clone();o.update(t.values);const a=e instanceof ShadowRoot?e.host:void 0;void 0!==a&&"object"==typeof window.ShadyCSS&&(Z(r,n,i),window.ShadyCSS.styleElement(a)),q(e,e.firstChild),e.appendChild(r)}(t,e,this.localName)}_didRender(t,e,i){}requestRender(){this._invalidateProperties()}_invalidateProperties(){this.__isInvalid=!0,super._invalidateProperties()}get renderComplete(){return this.__renderComplete||(this.__renderComplete=new Promise(t=>{this.__resolveRenderComplete=(e=>{this.__resolveRenderComplete=this.__renderComplete=null,t(e)})}),!this.__isInvalid&&this.__resolveRenderComplete&&Promise.resolve().then(()=>this.__resolveRenderComplete(!1))),this.__renderComplete}}const st=2,nt=1,ot=.85,rt=0,at=9;class lt{constructor(){this.p=""}get value(){return this.p.trim()}moveTo(t,e){this.p+="M "+t+" "+e+" "}bcurveTo(t,e,i,s,n,o){this.p+="C "+t+" "+e+", "+i+" "+s+", "+n+" "+o+" "}}const ct=new class{_svgNode(t,e){const i=document.createElementNS("http://www.w3.org/2000/svg",t);if(e)for(const t in e)e.hasOwnProperty(t)&&i.setAttributeNS(null,t,e[t]);return i}line(t,e,i,s,n){const o=this._line(e,i,s,n),r=this._svgNode("path",{d:o.value});return t.appendChild(r),r}rectangle(t,e,i,s,n){e+=2,i+=2,s-=4,n-=4;let o=this._line(e,i,e+s,i);o=this._line(e+s,i,e+s,i+n,o),o=this._line(e+s,i+n,e,i+n,o),o=this._line(e,i+n,e,i,o);const r=this._svgNode("path",{d:o.value});return t.appendChild(r),r}polygon(t,e){let i=null;const s=e.length;if(s>2)for(let t=0;t<2;t++){let n=!0;for(let t=1;t<s;t++)i=this._continuousLine(e[t-1][0],e[t-1][1],e[t][0],e[t][1],n,t>0,i),n=!1;i=this._continuousLine(e[s-1][0],e[s-1][1],e[0][0],e[0][1],n,t>0,i)}else i=2==s?this._line(e[0][0],e[0][1],e[1][0],e[1][1]):new lt;const n=this._svgNode("path",{d:i.value});return t.appendChild(n),n}ellipse(t,e,i,s,n){s=Math.max(s>10?s-4:s-1,1),n=Math.max(n>10?n-4:n-1,1);const o=2*Math.PI/at;let r=Math.abs(s/2),a=Math.abs(n/2);r+=this._getOffset(.05*-r,.05*r),a+=this._getOffset(.05*-a,.05*a);let l=this._ellipse(o,e,i,r,a,1,o*this._getOffset(.1,this._getOffset(.4,1)));l=this._ellipse(o,e,i,r,a,1.5,0,l);const c=this._svgNode("path",{d:l.value});return t.appendChild(c),c}_ellipse(t,e,i,s,n,o,r,a){const l=this._getOffset(-.5,.5)-Math.PI/2,c=[];c.push([this._getOffset(-o,o)+e+.9*s*Math.cos(l-t),this._getOffset(-o,o)+i+.9*n*Math.sin(l-t)]);for(let r=l;r<2*Math.PI+l-.01;r+=t)c.push([this._getOffset(-o,o)+e+s*Math.cos(r),this._getOffset(-o,o)+i+n*Math.sin(r)]);return c.push([this._getOffset(-o,o)+e+s*Math.cos(l+2*Math.PI+.5*r),this._getOffset(-o,o)+i+n*Math.sin(l+2*Math.PI+.5*r)]),c.push([this._getOffset(-o,o)+e+.98*s*Math.cos(l+r),this._getOffset(-o,o)+i+.98*n*Math.sin(l+r)]),c.push([this._getOffset(-o,o)+e+.9*s*Math.cos(l+.5*r),this._getOffset(-o,o)+i+.9*n*Math.sin(l+.5*r)]),this._curve(c,a)}_getOffset(t,e){return nt*(Math.random()*(e-t)+t)}_line(t,e,i,s,n){const o=Math.pow(t-i,2)+Math.pow(e-s,2);let r=st||0;r*r*100>o&&(r=Math.sqrt(o)/10);const a=r/2,l=.2+.2*Math.random();let c=ot*st*(s-e)/200,h=ot*st*(t-i)/200;c=this._getOffset(-c,c),h=this._getOffset(-h,h);let d=n||new lt;return d.moveTo(t+this._getOffset(-r,r),e+this._getOffset(-r,r)),d.bcurveTo(c+t+(i-t)*l+this._getOffset(-r,r),h+e+(s-e)*l+this._getOffset(-r,r),c+t+2*(i-t)*l+this._getOffset(-r,r),h+e+2*(s-e)*l+this._getOffset(-r,r),i+this._getOffset(-r,r),s+this._getOffset(-r,r)),d.moveTo(t+this._getOffset(-a,a),e+this._getOffset(-a,a)),d.bcurveTo(c+t+(i-t)*l+this._getOffset(-a,a),h+e+(s-e)*l+this._getOffset(-a,a),c+t+2*(i-t)*l+this._getOffset(-a,a),h+e+2*(s-e)*l+this._getOffset(-a,a),i+this._getOffset(-a,a),s+this._getOffset(-a,a)),d}_continuousLine(t,e,i,s,n,o,r){r=r||new lt;const a=Math.pow(t-i,2)+Math.pow(e-s,2);let l=st||0;l*l*100>a&&(l=Math.sqrt(a)/10);const c=l/2,h=.2+.2*Math.random();let d=ot*st*(s-e)/200,u=ot*st*i/200;return d=this._getOffset(-d,d),u=this._getOffset(-u,u),n&&r.moveTo(t+this._getOffset(-l,l),e+this._getOffset(-l,l)),o?r.bcurveTo(d+t+(i-t)*h+this._getOffset(-c,c),u+e+(s-e)*h+this._getOffset(-c,c),d+t+2*(i-t)*h+this._getOffset(-c,c),u+e+2*(s-e)*h+this._getOffset(-c,c),i+this._getOffset(-c,c),s+this._getOffset(-c,c)):r.bcurveTo(d+t+(i-t)*h+this._getOffset(-l,l),u+e+(s-e)*h+this._getOffset(-l,l),d+t+2*(i-t)*h+this._getOffset(-l,l),u+e+2*(s-e)*h+this._getOffset(-l,l),i+this._getOffset(-l,l),s+this._getOffset(-l,l)),r}_curve(t,e){const i=t.length;let s=e||new lt;if(i>3){const e=[],n=1-rt;s.moveTo(t[1][0],t[1][1]);for(let o=1;o+2<i;o++){const i=t[o];e[0]=[i[0],i[1]],e[1]=[i[0]+(n*t[o+1][0]-n*t[o-1][0])/6,i[1]+(n*t[o+1][1]-n*t[o-1][1])/6],e[2]=[t[o+1][0]+(n*t[o][0]-n*t[o+2][0])/6,t[o+1][1]+(n*t[o][1]-n*t[o+2][1])/6],e[3]=[t[o+1][0],t[o+1][1]],s.bcurveTo(e[1][0],e[1][1],e[2][0],e[2][1],e[3][0],e[3][1])}}else 3===i?(s.moveTo(t[0][0],t[0][1]),s.bcurveTo(t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1])):2==i&&(s=this._line(t[0][0],t[0][1],t[1][0],t[1][1],s));return s}};customElements.define("wired-button",class extends it{static get properties(){return{elevation:Number,disabled:Boolean}}constructor(){super(),this.elevation=1,this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,elevation:e,disabled:i}){return this._onDisableChange(),tt`
    <style>
      :host {
        display: inline-block;
        font-family: inherit;
        cursor: pointer;
        padding: 8px 10px;
        position: relative;
        text-align: center;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        display: inline-flex;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(:active) path {
        transform: scale(0.97) translate(1.5%, 1.5%);
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        background: rgba(0, 0, 0, 0.07);
        cursor: default;
        pointer-events: none;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
        transition: transform 0.05s ease;
      }
    </style>
    <slot></slot>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect(),i=Math.min(Math.max(1,this.elevation),5),s=e.width+2*(i-1),n=e.height+2*(i-1);t.setAttribute("width",s),t.setAttribute("height",n),ct.rectangle(t,0,0,e.width,e.height);for(var o=1;o<i;o++)ct.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(75-10*o)/100,ct.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(75-10*o)/100,ct.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(75-10*o)/100,ct.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(75-10*o)/100;this.classList.remove("pending")}});customElements.define("wired-card",class extends it{static get properties(){return{elevation:Number}}constructor(){super(),this.elevation=1}_createRoot(){const t=this.attachShadow({mode:"open"});return this.classList.add("pending"),t}_render(){return tt`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    </style>
    <div>
      <slot on-slotchange="${()=>this._requestRender()}"></slot>
    </div>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect(),i=Math.min(Math.max(1,this.elevation),5),s=e.width+2*(i-1),n=e.height+2*(i-1);t.setAttribute("width",s),t.setAttribute("height",n),ct.rectangle(t,0,0,e.width,e.height);for(var o=1;o<i;o++)ct.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(85-10*o)/100,ct.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(85-10*o)/100,ct.line(t,2*o,e.height+2*o,e.width+2*o,e.height+2*o).style.opacity=(85-10*o)/100,ct.line(t,e.width+2*o,e.height+2*o,e.width+2*o,2*o).style.opacity=(85-10*o)/100;this.classList.remove("pending")}});customElements.define("wired-checkbox",class extends it{static get properties(){return{checked:Boolean,text:String,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,iconsize:e}){return this._onDisableChange(),tt`
    <style>
      :host {
        display: block;
        font-family: inherit;
        outline: none;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      #container {
        display: inline-block;
        white-space: nowrap;
      }
    
      .inline {
        display: inline-block;
        vertical-align: middle;
      }
    
      #checkPanel {
        cursor: pointer;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: 0.7;
      }
    </style>
    <div id="container" on-click="${()=>this._toggleCheck()}">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">${t}</div>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=24,i=24;t.setAttribute("width",e),t.setAttribute("height",i),ct.rectangle(t,0,0,e,i);const s=[];s.push(ct.line(t,.3*e,.4*i,.5*e,.7*i)),s.push(ct.line(t,.5*e,.7*i,e+5,-5)),s.forEach(t=>{t.style.strokeWidth=2.5}),this.checked?s.forEach(t=>{t.style.display=""}):s.forEach(t=>{t.style.display="none"}),this.classList.remove("pending")}});customElements.define("wired-item",class extends it{static get properties(){return{text:String,value:String}}_render({text:t}){return tt`
    <style>
      :host {
        display: block;
        padding: 8px;
        font-family: inherit;
      }
    </style>
    <span>${t}</span>
    `}connectedCallback(){super.connectedCallback(),this._itemClickHandler=(t=>{this._onClick(t)}),this.addEventListener("click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("click",this._itemClickHandler),this._itemClickHandler=null)}_onClick(t){const e=new CustomEvent("item-click",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value}});this.dispatchEvent(e)}});customElements.define("wired-combo",class extends it{static get properties(){return{value:Object,selected:String,disabled:Boolean}}constructor(){super(),this.disabled=!1,this._cardShowing=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({value:t}){return this._onDisableChange(),tt`
    <style>
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
      }
    
      :host(.disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
      }
    
      ::slotted(wired-item) {
        cursor: pointer;
        white-space: nowrap;
      }
    
      ::slotted(wired-item:hover) {
        background: var(--wired-combo-item-hover-bg, rgba(0, 0, 0, 0.1));
      }
    </style>
    <div id="container" on-click="${t=>this._onCombo(t)}">
      <div id="textPanel" class="inline">
        <span>${t&&t.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
    </div>
    <wired-card id="card" on-item-click="${t=>this._onItemClick(t)}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_firstRendered(){this._refreshSelection()}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height);const i=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=i.height+"px",ct.rectangle(t,0,0,i.width,i.height);const s=i.width-4;ct.rectangle(t,s,0,34,i.height);const n=Math.max(0,Math.abs((i.height-24)/2)),o=ct.polygon(t,[[s+8,5+n],[s+26,5+n],[s+17,n+Math.min(i.height,18)]]);o.style.fill="currentColor",o.style.pointerEvents=this.disabled?"none":"auto",o.style.cursor="pointer",this.classList.remove("pending")}_refreshSelection(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let e=null;for(let i=0;i<t.length;i++)if("WIRED-ITEM"===t[i].tagName){const s=t[i].value||"";if(this.selected&&s===this.selected){e=t[i];break}}this.value=e?{value:e.value,text:e.text}:null}}_onCombo(t){t.stopPropagation(),this._setCardShowing(!this._cardShowing)}_setCardShowing(t){this._cardShowing=t;const e=this.shadowRoot.getElementById("card");e.style.display=t?"":"none",t&&setTimeout(()=>{e._requestRender()},10)}_onItemClick(t){t.stopPropagation(),this._setCardShowing(!1),this.selected=t.detail.value,this._refreshSelection();const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ht=tt`<style>:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}
</style>`;i("H2h+");customElements.define("mwc-icon",
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class extends it{_renderStyle(){return ht}_render(){return tt`${this._renderStyle()}<slot></slot>`}});customElements.define("wired-icon-button",class extends it{static get properties(){return{disabled:Boolean}}constructor(){super(),this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),tt`
    <style>
      :host {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box !important;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 50%;
        pointer-events: none;
      }
    
      :host(:active) path {
        transform: scale(0.96) translate(2%, 2%);
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: var(--wired-icon-bg-color, transparent);
        transition: transform 0.05s ease;
      }
    
      mwc-icon {
        position: relative;
        font-size: var(--wired-icon-size, 24px);
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <mwc-icon>
      <slot></slot>
    </mwc-icon>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect(),i=Math.min(e.width,e.height);t.setAttribute("width",i),t.setAttribute("height",i),ct.ellipse(t,i/2,i/2,i,i),this.classList.remove("pending")}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}});customElements.define("wired-input",class extends it{static get properties(){return{placeholder:String,disabled:Boolean,type:String,required:Boolean,autocomplete:String,autofocus:Boolean,minlength:Number,maxlength:Number,min:String,max:String,step:String,readonly:Boolean,size:Number,autocapitalize:String,autocorrect:String}}constructor(){super(),this.disabled=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({type:t,placeholder:e,disabled:i,required:s,autocomplete:n,autofocus:o,minlength:r,maxlength:a,min:l,max:c,step:h,readonly:d,size:u,autocapitalize:p,autocorrect:f}){return this._onDisableChange(),tt`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: sans-serif;
        width: 150px;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    </style>
    <input id="txt" type$="${t}" placeholder$="${e}" disabled?="${i}" required?="${s}" autocomplete$="${n}"
      autofocus?="${o}" minlength$="${r}" maxlength$="${a}" min$="${l}" max$="${c}" step$="${h}"
      readonly?="${d}" size$="${u}" autocapitalize$="${p}" autocorrect$="${f}" on-change="${t=>this._onChange(t)}">
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}get input(){return this.shadowRoot.getElementById("txt")}get value(){const t=this.input;return t&&t.value||""}set value(t){const e=this.input;e&&(e.value=t)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_onChange(t){t.stopPropagation();const e=new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:t.cancelable,detail:{sourceEvent:t}});this.dispatchEvent(e)}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),ct.rectangle(t,0,0,e.width,e.height),this.classList.remove("pending")}});customElements.define("wired-listbox",class extends it{static get properties(){return{value:Object,selected:String,horizontal:Boolean}}constructor(){super(),this.horizontal=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({horizontal:t}){return t?this.classList.add("horizontal"):this.classList.remove("horizontal"),this._onDisableChange(),tt`
      <style>
        :host {
          display: inline-block;
          font-family: inherit;
          position: relative;
          padding: 5px;
          outline: none;
        }
      
        :host(.pending) {
          opacity: 0;
        }
      
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
      
        svg {
          display: block;
        }
      
        path {
          stroke: currentColor;
          stroke-width: 0.7;
          fill: transparent;
        }
      
        ::slotted(.selected-item) {
          background: var(--wired-combo-item-selected-bg, rgba(0, 0, 200, 0.1));
        }
      
        ::slotted(wired-item) {
          cursor: pointer;
          white-space: nowrap;
          display: block;
        }
      
        :host(.horizontal) ::slotted(wired-item) {
          display: inline-block;
        }
      
        ::slotted(wired-item:hover) {
          background: var(--wired-combo-item-hover-bg, rgba(0, 0, 0, 0.1));
        }
      </style>
      <slot id="slot"></slot>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>`}connectedCallback(){super.connectedCallback(),this._itemClickHandler=(t=>{this._onItemClick(t)}),this.addEventListener("item-click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("item-click",this._itemClickHandler),this._itemClickHandler=null)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_firstRendered(){this._refreshSelection()}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),ct.rectangle(t,0,0,e.width,e.height),this.classList.remove("pending")}_refreshSelection(){this.lastSelectedItem&&this.lastSelectedItem.classList.remove("selected-item");const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let e=null;for(let i=0;i<t.length;i++)if("WIRED-ITEM"===t[i].tagName){const s=t[i].value||"";if(this.selected&&s===this.selected){e=t[i];break}}this.lastSelectedItem=e,e?(this.lastSelectedItem.classList.add("selected-item"),this.value={value:e.value,text:e.text}):this.value=null}}_onItemClick(t){t.stopPropagation(),this.selected=t.detail.value,this._refreshSelection();const e=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(e)}});customElements.define("wired-progress",class extends it{static get properties(){return{value:Number,min:Number,max:Number,percentage:Boolean}}constructor(){super(),this.percentage=!1,this.max=100,this.min=0,this.value=0}_createRoot(){const t=this.attachShadow({mode:"open"});return this.classList.add("pending"),t}_render(){return tt`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 18px);
      }
    
      .progbox {
        fill: var(--wired-progress-color, rgba(0, 0, 200, 0.1));
        stroke-opacity: 0.6;
        stroke-width: 0.4;
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this._getProgressLabel()}</div>
    </div>
    `}_getProgressLabel(){return this.percentage?this.max==this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height),ct.rectangle(t,0,0,e.width,e.height);let i=0;if(this.max>this.min){i=(this.value-this.min)/(this.max-this.min);const s=e.width*Math.max(0,Math.min(i,100));ct.polygon(t,[[0,0],[s,0],[s,e.height],[0,e.height]]).classList.add("progbox")}this.classList.remove("pending")}});customElements.define("wired-radio",class extends it{static get properties(){return{checked:Boolean,name:String,text:String,iconsize:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1,this.iconsize=24}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({text:t,iconsize:e}){return this._onDisableChange(),tt`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: inherit;
        width: 150px;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
      }
    
      #container {
        display: inline-block;
        white-space: nowrap;
      }
    
      .inline {
        display: inline-block;
        vertical-align: middle;
      }
    
      #checkPanel {
        cursor: pointer;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .filledPath {
        fill: var(--wired-radio-icon-color, currentColor);
      }
    </style>
    <div id="container" on-click="${()=>this._toggleCheck()}">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">${t}</div>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t),this._dot=null;const e={width:this.iconsize||24,height:this.iconsize||24};t.setAttribute("width",e.width),t.setAttribute("height",e.height),ct.ellipse(t,e.width/2,e.height/2,e.width,e.height);const i=Math.max(.6*e.width,5),s=Math.max(.6*e.height,5);this._dot=ct.ellipse(t,e.width/2,e.height/2,i,s),this._dot.classList.add("filledPath"),this._dot.style.display=this.checked?"":"none",this.classList.remove("pending")}});customElements.define("wired-radio-group",class extends it{static get properties(){return{selected:String}}_render({selected:t}){return tt`
    <style>
      :host {
        display: inline-block;
      }
    
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    </style>
    <slot id="slot" on-slotchange="${()=>this.slotChange()}"></slot>
    `}constructor(){super(),this._checkListener=this._handleChecked.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this._checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("checked",this._checkListener)}_handleChecked(t){const e=t.detail.checked,i=t.target.name;this.selected=e&&i||"";const s=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(s)}slotChange(){this._requestRender()}_didRender(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t&&t.length)for(let e=0;e<t.length;e++)if("WIRED-RADIO"===t[e].tagName){const i=t[e].name||"";this.selected&&i===this.selected?t[e].checked=!0:t[e].checked=!1}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class dt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ut.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ut.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof dt?t._cancelAsync():t=new dt,t.setConfig(e,i),t}}let ut=new Set;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;(pt=document.baseURI||window.location.href).substring(0,pt.lastIndexOf("/")+1);var pt;window.Polymer&&window.Polymer.sanitizeDOMValue;let ft=!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let gt="string"==typeof document.head.style.touchAction,mt="__polymerGestures",_t="__polymerGesturesHandled",vt="__polymerGesturesTouchAction",bt=25,yt=5,wt=2500,kt=["mousedown","mousemove","mouseup","click"],xt=[0,1,4,2],Ct=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Et(t){return kt.indexOf(t)>-1}let St=!1;function Nt(t){if(!Et(t)&&"touchend"!==t)return gt&&St&&ft?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){St=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let Pt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Tt=[],Ot={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Lt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Rt(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let i=t.getRootNode();if(t.id){let s=i.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<s.length;t++)e.push(s[t])}}return e}let At=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[_t]={skip:!0},"click"===t.type)){let e=!1,s=Dt(t);for(let t=0;t<s.length;t++){if(s[t].nodeType===Node.ELEMENT_NODE)if("label"===s[t].localName)Tt.push(s[t]);else if(i=s[t],Ot[i.localName]){let i=Rt(s[t]);for(let t=0;t<i.length;t++)e=e||Tt.indexOf(i[t])>-1}if(s[t]===$t.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function Mt(t){let e=Pt?["click"]:kt;for(let i,s=0;s<e.length;s++)i=e[s],t?(Tt.length=0,document.addEventListener(i,At,!0)):document.removeEventListener(i,At,!0)}function It(t){let e=t.type;if(!Et(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Ct&&(e=xt[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let $t={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Bt(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function zt(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){$t.mouse.mouseIgnoreJob||Mt(!0),$t.mouse.target=Dt(t)[0],$t.mouse.mouseIgnoreJob=dt.debounce($t.mouse.mouseIgnoreJob,y.after(wt),function(){Mt(),$t.mouse.target=null,$t.mouse.mouseIgnoreJob=null})},!!St&&{passive:!0});const Dt=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Ht={},Vt=[];function jt(t){const e=Dt(t);return e.length>0?e[0]:t.target}function Ft(t){let e,i=t.type,s=t.currentTarget[mt];if(!s)return;let n=s[i];if(n){if(!t[_t]&&(t[_t]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&($t.touch.id=e.identifier),$t.touch.id!==e.identifier)return;gt||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)$t.touch.x=e.clientX,$t.touch.y=e.clientY,$t.touch.scrollDecided=!1;else if("touchmove"===i){if($t.touch.scrollDecided)return;$t.touch.scrollDecided=!0;let i=function(t){let e="auto",i=Dt(t);for(let t,s=0;s<i.length;s++)if((t=i[s])[vt]){e=t[vt];break}return e}(t),s=!1,n=Math.abs($t.touch.x-e.clientX),o=Math.abs($t.touch.y-e.clientY);t.cancelable&&("none"===i?s=!0:"pan-x"===i?s=o>n:"pan-y"===i&&(s=n>o)),s?t.preventDefault():Yt("track")}}(t)}if(!(e=t[_t]).skip){for(let i,s=0;s<Vt.length;s++)n[(i=Vt[s]).name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let s,o=0;o<Vt.length;o++)n[(s=Vt[o]).name]&&!e[s.name]&&(e[s.name]=!0,s[i](t))}}}function qt(t,e,i){return!!Ht[e]&&(function(t,e,i){let s=Ht[e],n=s.deps,o=s.name,r=t[mt];r||(t[mt]=r={});for(let e,i,s=0;s<n.length;s++)e=n[s],Pt&&Et(e)&&"click"!==e||((i=r[e])||(r[e]=i={_count:0}),0===i._count&&t.addEventListener(e,Ft,Nt(e)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),s.touchAction&&function(t,e){gt&&t instanceof HTMLElement&&w.run(()=>{t.style.touchAction=e});t[vt]=e}(t,s.touchAction)}(t,e,i),!0)}function Xt(t){Vt.push(t);for(let e=0;e<t.emits.length;e++)Ht[t.emits[e]]=t}function Wt(t,e,i){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,k(t).dispatchEvent(s),s.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Yt(t){let e=function(t){for(let e,i=0;i<Vt.length;i++){e=Vt[i];for(let i,s=0;s<e.emits.length;s++)if((i=e.emits[s])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Jt(t,e,i,s){e&&Wt(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(t){return Yt(t)}})}function Gt(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let s=Math.abs(t.x-e),n=Math.abs(t.y-i);return s>=yt||n>=yt}function Ut(t,e,i){if(!e)return;let s,n=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],r=o.x-t.x,a=o.y-t.y,l=0;n&&(s=o.x-n.x,l=o.y-n.y),Wt(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:r,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM&&s!==(s=s.shadowRoot.elementFromPoint(t,e));)s&&(i=s);return i}(i.clientX,i.clientY)}})}function Kt(t,e,i){let s=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),o=jt(i||e);!o||Lt[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(n)||s<=bt&&n<=bt||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=jt(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),s=t.pageX,n=t.pageY;return!(s>=i.left&&s<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(e))&&(t.prevent||Wt(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}Xt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){zt(this.info)},mousedown:function(t){if(!It(t))return;let e=jt(t),i=this;Bt(this.info,function(t){It(t)||(Jt("up",e,t),zt(i.info))},function(t){It(t)&&Jt("up",e,t),zt(i.info)}),Jt("down",e,t)},touchstart:function(t){Jt("down",jt(t),t.changedTouches[0],t)},touchend:function(t){Jt("up",jt(t),t.changedTouches[0],t)}}),Xt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,zt(this.info)},mousedown:function(t){if(!It(t))return;let e=jt(t),i=this,s=function(t){let s=t.clientX,n=t.clientY;Gt(i.info,s,n)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&Yt("tap"),i.info.addMove({x:s,y:n}),It(t)||(i.info.state="end",zt(i.info)),e&&Ut(i.info,e,t),i.info.started=!0)};Bt(this.info,s,function(t){i.info.started&&s(t),zt(i.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=jt(t),i=t.changedTouches[0],s=i.clientX,n=i.clientY;Gt(this.info,s,n)&&("start"===this.info.state&&Yt("tap"),this.info.addMove({x:s,y:n}),Ut(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=jt(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Ut(this.info,e,i))}}),Xt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){It(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){It(t)&&Kt(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Kt(this.info,t.changedTouches[0],t)}});customElements.define("wired-slider",class extends it{static get properties(){return{value:Number,min:Number,max:Number,knobradius:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.value=0,this.min=0,this.max=100,this.knobradius=10}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),tt`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        height: 40px;
        outline: none;
        box-sizing: border-box;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
    
      :host(.disabled) .knob {
        pointer-events: none !important;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .knob {
        pointer-events: auto;
        fill: var(--wired-slider-knob-zero-color, gray);
        stroke: var(--wired-slider-knob-zero-color, gray);
        transition: transform 0.15s ease;
        cursor: pointer;
      }
    
      .hasValue {
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
    
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
    
      :host(.pending) {
        opacity: 0;
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._firstRendered(),100)}_firstRendered(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e=this.getBoundingClientRect();t.setAttribute("width",e.width),t.setAttribute("height",e.height);let i=this.knobradius||10;this._barWidth=e.width-2*i,this._bar=ct.line(t,i,e.height/2,e.width-i,e.height/2),this._bar.classList.add("bar"),this._knobGroup=ct._svgNode("g"),t.appendChild(this._knobGroup),this._knob=ct.ellipse(this._knobGroup,i,e.height/2,2*i,2*i),this._knob.classList.add("knob"),this._onValueChange(),this.classList.remove("pending"),qt(this._knob,"down",t=>{this.disabled||this._knobdown(t)}),qt(this._knob,"up",t=>{this.disabled||this._resetKnob(t)}),qt(this._knob,"track",t=>{this.disabled||this._onTrack(t)})}_onValueChange(){if(!this._knob)return;let t=0;this.max>this.min&&(t=Math.min(1,Math.max((this.value-this.min)/(this.max-this.min),0))),this._pct=t,t?this._knob.classList.add("hasValue"):this._knob.classList.remove("hasValue");let e=t*this._barWidth;this._knobGroup.style.transform="translateX("+Math.round(e)+"px)"}_knobdown(t){this._knobExpand(!0),t.preventDefault(),this.focus()}_resetKnob(t){this._knobExpand(!1)}_knobExpand(t){this._knob&&(t?this._knob.classList.add("expanded"):this._knob.classList.remove("expanded"))}_onTrack(t){switch(t.stopPropagation(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackX(t);break;case"end":this._trackEnd()}}_trackStart(t){this._intermediateValue=this.value,this._startx=this._pct*this._barWidth,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._barWidth-this._startx,this._dragging=!0}_trackX(t){this._dragging||this._trackStart(t);var e=t.detail.dx||0,i=Math.max(Math.min(this._startx+e,this._barWidth),0);this._knobGroup.style.transform="translateX("+Math.round(i)+"px)";var s=i/this._barWidth;this._intermediateValue=this.min+s*(this.max-this.min)}_trackEnd(){this._dragging=!1,this._resetKnob(),this.value=this._intermediateValue,this._pct=(this.value-this.min)/(this.max-this.min);const t=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this._intermediateValue}});this.dispatchEvent(t)}});customElements.define("wired-textarea",class extends it{static get properties(){return{rows:Number,maxrows:Number,autocomplete:String,autofocus:Boolean,inputmode:String,placeholder:String,readonly:Boolean,required:Boolean,minlength:Number,maxlength:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.rows=1,this.maxrows=0}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render({rows:t,maxrows:e,autocomplete:i,autofocus:s,inputmode:n,placeholder:o,readonly:r,required:a,minlength:l,maxlength:c,disabled:h}){return this._onDisableChange(),tt`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: sans-serif;
        width: 400px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      .fit {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    
      .overlay {
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
      }
    
      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        padding: 5px;
        box-sizing: border-box;
      }
    </style>
    <div id="mirror" class="mirror-text">&#160;</div>
    <div class="fit">
      <textarea id="textarea" autocomplete$="${i}" autofocus?="${s}" inputmode$="${n}" placeholder$="${o}"
        readonly?="${r}" required?="${a}" disabled?="${h}" rows$="${t}" minlength$="${l}" maxlength$="${c}"
        on-input="${()=>this._onInput()}"></textarea>
    </div>
    <div class="fit overlay">
      <svg id="svg"></svg>
    </div>
    `}connectedCallback(){super.connectedCallback(),this.value=this.value||""}get textarea(){return this.shadowRoot.getElementById("textarea")}get mirror(){return this.shadowRoot.getElementById("mirror")}get value(){const t=this.textarea;return t&&t.value||""}set value(t){const e=this.textarea;e&&(e.value!==t&&(e.value=t||0===t?t:""),this.mirror.innerHTML=this._valueForMirror(),this._requestRender())}_constrain(t){var e;for(t=t||[""],e=this.maxRows>0&&t.length>this.maxRows?t.slice(0,this.maxRows):t.slice(0);this.rows>0&&e.length<this.rows;)e.push("");return e.join("<br/>")+"&#160;"}_valueForMirror(){var t=this.textarea;if(t)return this.tokens=t&&t.value?t.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_updateCached(){this.mirror.innerHTML=this._constrain(this.tokens)}_onInput(t){this.value=this.textarea.value}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_needsLayout(){this.getBoundingClientRect().height!=this._prevHeight&&this._requestRender()}_didRender(){const t=this.getBoundingClientRect(),e=this.shadowRoot.getElementById("svg");this._prevHeight!==t.height&&(this._clearNode(e),e.setAttribute("width",t.width),e.setAttribute("height",t.height),ct.rectangle(e,2,2,t.width-2,t.height-2),this._prevHeight=t.height),this.classList.remove("pending"),this._updateCached()}});customElements.define("wired-toggle",class extends it{static get properties(){return{checked:Boolean,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1}_createRoot(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),t}_render(){return this._onDisableChange(),tt`
    <style>
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .unchecked {
        fill: var(--wired-toggle-off-color, gray);
      }
    
      .checked {
        fill: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
    </style>
    <div on-click="${()=>this._toggleCheck()}">
      <svg id="svg"></svg>
    </div>
    `}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_toggleCheck(){this.checked=!this.checked;const t=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(t)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_didRender(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);const e={width:2.5*(this.height||32),height:this.height||32};t.setAttribute("width",e.width),t.setAttribute("height",e.height),ct.rectangle(t,0,0,e.width,e.height),this.knob=ct.ellipse(t,e.height/2,e.height/2,e.height,e.height),this.knobOffset=e.width-e.height,this.knob.style.transition="all 0.3s ease",this.knob.style.transform=this.checked?"translateX("+this.knobOffset+"px)":"";const i=this.knob.classList;this.checked?(i.remove("unchecked"),i.add("checked")):(i.remove("checked"),i.add("unchecked")),this.classList.remove("pending")}});customElements.define("wired-tooltip",class extends it{static get properties(){return{for:String,position:String,text:String,offset:Number}}constructor(){super(),this._dirty=!1,this._showing=!1,this._target=null,this.offset=14,this.position="bottom"}_render({text:t},e){return e&&(e.position||e.text)&&(this._dirty=!0),(!this._target||e&&e.for)&&this._refreshTarget(),tt`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
        font-family: inherit;
        font-size: 9pt;
        line-height: 1;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke-width: 0.7;
        stroke: var(--wired-tooltip-border-color, currentColor);
        fill: var(--wired-tooltip-background, rgba(255, 255, 255, 0.9));
      }
    
      #container {
        position: relative;
        padding: 8px;
      }
    </style>
    <div id="container" style="display: none;">
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
      <span style="position: relative;">${t}</span>
    </div>
    `}get target(){if(this._target)return this._target;var t=this.parentNode,e=(this.getRootNode?this.getRootNode():null)||this.getOwnerDocument();return this.for?e.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t}_detachListeners(){this._showHandler&&this._hideHandler&&(this._target&&(this._target.removeEventListener("mouseenter",this._showHandler),this._target.removeEventListener("focus",this._showHandler),this._target.removeEventListener("mouseleave",this._hideHandler),this._target.removeEventListener("blur",this._hideHandler),this._target.removeEventListener("click",this._hideHandler)),this.removeEventListener("mouseenter",this._hideHandler))}_attachListeners(){this._showHandler=(()=>{this.show()}),this._hideHandler=(()=>{this.hide()}),this._target&&(this._target.addEventListener("mouseenter",this._showHandler),this._target.addEventListener("focus",this._showHandler),this._target.addEventListener("mouseleave",this._hideHandler),this._target.addEventListener("blur",this._hideHandler),this._target.addEventListener("click",this._hideHandler)),this.addEventListener("mouseenter",this._hideHandler)}_refreshTarget(){this._detachListeners(),this._target=null,this._target=this.target,this._attachListeners(),this._dirty=!0}_clearNode(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)}_layout(){const t=this.shadowRoot.getElementById("svg");this._clearNode(t);var e=this.getBoundingClientRect(),i=e.width,s=e.height;switch(this.position){case"left":case"right":i+=this.offset;break;default:s+=this.offset}t.setAttribute("width",i),t.setAttribute("height",s);var n=[];switch(this.position){case"top":n=[[2,2],[i-2,2],[i-2,s-this.offset],[i/2+8,s-this.offset],[i/2,s-this.offset+8],[i/2-8,s-this.offset],[0,s-this.offset]];break;case"left":n=[[2,2],[i-this.offset,2],[i-this.offset,s/2-8],[i-this.offset+8,s/2],[i-this.offset,s/2+8],[i-this.offset,s],[2,s-2]];break;case"right":n=[[this.offset,2],[i-2,2],[i-2,s-2],[this.offset,s-2],[this.offset,s/2+8],[this.offset-8,s/2],[this.offset,s/2-8]],t.style.transform="translateX("+-this.offset+"px)";break;default:n=[[2,this.offset],[0,s-2],[i-2,s-2],[i-2,this.offset],[i/2+8,this.offset],[i/2,this.offset-8],[i/2-8,this.offset]],t.style.transform="translateY("+-this.offset+"px)"}ct.polygon(t,n),this._dirty=!1}_firstRendered(){this._layout()}_didRender(){this._dirty&&this._layout()}show(){this._showing||(this._showing=!0,this.shadowRoot.getElementById("container").style.display="",this.updatePosition(),setTimeout(()=>{this._layout()},1))}hide(){this._showing&&(this._showing=!1,this.shadowRoot.getElementById("container").style.display="none")}updatePosition(){if(this._target&&this.offsetParent){var t,e,i=this.offset,s=this.offsetParent.getBoundingClientRect(),n=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),r=(n.width-o.width)/2,a=(n.height-o.height)/2,l=n.left-s.left,c=n.top-s.top;switch(this.position){case"top":t=l+r,e=c-o.height-i;break;case"bottom":t=l+r,e=c+n.height+i;break;case"left":t=l-o.width-i,e=c+a;break;case"right":t=l+n.width+i,e=c+a}this.style.left=t+"px",this.style.top=e+"px"}}});var Qt={directives:{clipboard:h},data:function(){return{activeName:"js",inputData:"https://github.com/Neveryu/vue-cms"}},methods:{handleCopy1:function(){this.$refs.input1.$refs.input.select(),document.execCommand("Copy"),this.$notify({title:"success",message:"copy成功",type:"success"})},handleCopy2:function(t,e){r(t,e)},clipboardSuccess:function(){this.$notify({title:"success",message:"copy成功",type:"success"})}}},Zt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"原生js方式",name:"js"}},[i("el-input",{ref:"input1",staticStyle:{width:"400px"},attrs:{placeholder:"Please input"},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}}),t._v(" "),i("wired-button",{attrs:{elevation:"3"},on:{click:t.handleCopy1}},[t._v("copy")]),t._v(" "),i("p",{staticClass:"title"},[t._v("粘贴一下：")]),t._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"用clipboard插件",name:"directly"},on:{click:function(e){return t.console.log("s")}}},[i("el-input",{ref:"input2",staticStyle:{width:"400px"},attrs:{placeholder:"Please input"},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}}),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCopy2(t.inputData,e)}}},[t._v("copy")]),t._v(" "),i("p",{staticClass:"title"},[t._v("粘贴一下：")]),t._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"通过指令的方式调用clipboard",name:"v-directive"}},[i("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"please input"},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}}),t._v(" "),i("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.inputData,expression:"inputData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{type:"primary"}},[t._v("copy")]),t._v(" "),i("p",{staticClass:"title"},[t._v("粘贴一下：")]),t._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1)],1)],1)},staticRenderFns:[]};var te=i("VU/8")(Qt,Zt,!1,function(t){i("H5fL")},"data-v-ca0160b6",null);e.default=te.exports}});
//# sourceMappingURL=6.2694f89b7dd9f1d157cd.js.map