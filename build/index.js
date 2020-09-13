/*!
 * 
 *   cryo-ui v0.1.2
 *   https://github.com/Bluecoaster455/cryo-ui
 * 
 *   Copyright (c) Bluecoaster455 (https://github.com/Bluecoaster455)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,r){"object"===typeof exports&&"object"===typeof module?module.exports=r():"function"===typeof define&&define.amd?define("CryoUI",[],r):"object"===typeof exports?exports.CryoUI=r():e.CryoUI=r()}(this,(function(){return function(e){var r={};function __webpack_require__(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,r){if(1&r&&(e=__webpack_require__(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(__webpack_require__.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)__webpack_require__.d(t,n,function(r){return e[r]}.bind(null,n));return t},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="/",__webpack_require__(__webpack_require__.s=1)}([function(e,r,t){"use strict";var n=t(2),isMergeableObject=function(e){return function(e){return!!e&&"object"===n(e)}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(e,r){return!1!==r.clone&&r.isMergeableObject(e)?deepmerge((t=e,Array.isArray(t)?[]:{}),e,r):e;var t}function defaultArrayMerge(e,r,t){return e.concat(r).map((function(e){return cloneUnlessOtherwiseSpecified(e,t)}))}function getKeys(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(r){return e.propertyIsEnumerable(r)})):[]}(e))}function propertyIsOnObject(e,r){try{return r in e}catch(t){return!1}}function mergeObject(e,r,t){var n={};return t.isMergeableObject(e)&&getKeys(e).forEach((function(r){n[r]=cloneUnlessOtherwiseSpecified(e[r],t)})),getKeys(r).forEach((function(o){(function(e,r){return propertyIsOnObject(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))})(e,o)||(propertyIsOnObject(e,o)&&t.isMergeableObject(r[o])?n[o]=function(e,r){if(!r.customMerge)return deepmerge;var t=r.customMerge(e);return"function"===typeof t?t:deepmerge}(o,t)(e[o],r[o],t):n[o]=cloneUnlessOtherwiseSpecified(r[o],t))})),n}function deepmerge(e,r,t){(t=t||{}).arrayMerge=t.arrayMerge||defaultArrayMerge,t.isMergeableObject=t.isMergeableObject||isMergeableObject,t.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var n=Array.isArray(r);return n===Array.isArray(e)?n?t.arrayMerge(e,r,t):mergeObject(e,r,t):cloneUnlessOtherwiseSpecified(r,t)}deepmerge.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,t){return deepmerge(e,t,r)}),{})};var i=deepmerge;e.exports=i},function(e,r,t){e.exports=t(4)},function(e,r){function _typeof(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=_typeof=function(e){return typeof e}:e.exports=_typeof=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(r)}e.exports=_typeof},function(e,r,t){},function(e,r,t){"use strict";function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r);var n=function(){function CryoInstance(e){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,CryoInstance),_defineProperty(this,"$element",void 0),_defineProperty(this,"$ref",void 0),_defineProperty(this,"text",""),_defineProperty(this,"template",""),this.$element=e}var e,r,t;return e=CryoInstance,(r=[{key:"freeze",value:function(){var e=!1;"body"===this.$element.tagName.toLowerCase()&&(e=!0);var r=this.template,t="";t=r instanceof HTMLElement?r.outerHTML:r.replace("{{text}}",this.text);var n='\n      <div class="cryo-wrapper '.concat(e?"fixed":"",'">\n        ').concat(t,"\n      </div>\n    "),o=document.createElement("div");o.innerHTML=n.trim(),o=o.firstChild;var i=this.$element.appendChild(o);this.$element.classList.add("cryo-freeze"),this.$ref=i}},{key:"unfreeze",value:function(){this.$element.classList.remove("cryo-freeze"),this.$ref.remove()}}])&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),CryoInstance}(),o=t(0),i=t.n(o);t(3);function App_defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function App_defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c=function(){function Cryo(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Cryo),App_defineProperty(this,"instances",{}),App_defineProperty(this,"defaultOptions",{selector:"body",text:"Loading...",template:'\n      <div class="cryo-default-style">\n        {{text}}\n      </div>\n    '}),App_defineProperty(this,"inited",!1)}var e,r,t;return e=Cryo,(r=[{key:"isElementFrozen",value:function(e){if(!e.classList.contains("cryo-freeze")){var r=e.parentElement;return null!==r&&this.isElementFrozen(r)}return!0}},{key:"freeze",value:function(e){void 0===e&&(e={});var r=i()(this.defaultOptions,e),t=document.querySelector(r.selector),o=new n(t);return o.text=r.text,o.template=r.template,this.unfreeze(r.selector),o.freeze(),this.instances[r.selector]=o,this.inited||this.init(),o}},{key:"unfreeze",value:function(e){if(void 0===e)for(var r in this.instances)this.instances[r].unfreeze();else{var t=this.instances[e];void 0!==t&&t.unfreeze()}}},{key:"init",value:function(){var e=this,fct=function(r){var t=r.target;e.isElementFrozen(t)&&(r.stopPropagation(),r.preventDefault())};document.body.addEventListener("keypress",fct),document.body.addEventListener("keydown",fct),document.body.addEventListener("keyup",fct),document.body.addEventListener("dblclick",fct),document.body.addEventListener("mousedown",fct)}}])&&App_defineProperties(e.prototype,r),t&&App_defineProperties(e,t),Cryo}();r.default=c}])}));
//# sourceMappingURL=index.js.map