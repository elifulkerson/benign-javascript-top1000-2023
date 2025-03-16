//<![CDATA[
!function(n,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e=t();for(var r in e)("object"==typeof exports?exports:n)[r]=e[r]}}(window,function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([,function(n,t,e){"use strict";e.r(t),e.d(t,"IS_JEST_RUNNING",function(){return o}),e.d(t,"TENANT",function(){return i}),e.d(t,"COMPONENT_NAME",function(){return u}),e.d(t,"COMPONENT_SLUG",function(){return d}),e.d(t,"IS_DEBUG_ON_HASH",function(){return a}),e.d(t,"IS_VALIDATING",function(){return c}),e.d(t,"IS_VALIDATING_IOS",function(){return f}),e.d(t,"PWA_IOS_READY_EVENT",function(){return s}),e.d(t,"PWA_BEFORE_INSTALL_PROMPT",function(){return _}),e.d(t,"PWA_MODAL_DELAY_COOKIE_NAME",function(){return l}),e.d(t,"PWA_MODAL_INSTALL_EVENT",function(){return E}),e.d(t,"PWA_MODAL_REJECT_EVENT",function(){return w}),e.d(t,"PWA_MODAL_RETRY_DAYS",function(){return p}),e.d(t,"ENV_NAME",function(){return A}),e.d(t,"EVENT_CATEGORY",function(){return T}),e.d(t,"EVENT_ACTION",function(){return N}),e.d(t,"EVENT_VIEW",function(){return S});const r=window.cdaaas&&window.cdaaas.SETTINGS||{},o="undefined"!=typeof jest,i=r.SITE_ID,u="PWA",d="pwa",a=window.location.hash.substr(1)===`${d}-debug`,c=a,f=window.location.hash.substr(1)===`${d}-ios`,s="DOMContentLoaded",_="beforeinstallprompt",l="pwa-delay",E="appinstalled",w="pwa-rejected",p=7,A=window.pages&&window.pages.SETTINGS.ENV,T="pwa",N="offer-modal",S="view"},function(n,t,e){"use strict";var r=e(1);var o=()=>window.event.type;function i(){return!r.IS_JEST_RUNNING&&window.location.hostname.includes("localhost")}function u(){return"matchMedia"in window&&!(!window.matchMedia("(display-mode: standalone)").matches&&!window.navigator.standalone)}function d(){return/(android)/i.test(navigator.userAgent)}function a(){return void 0!==window.safari||navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS")}function c(){const n=o();return d()&&n===r.PWA_BEFORE_INSTALL_PROMPT||a()&&n===r.PWA_IOS_READY_EVENT}e.d(t,"e",function(){return a}),e.d(t,"a",function(){return d}),e.d(t,"d",function(){return u}),e.d(t,"c",function(){return i}),e.d(t,"b",function(){return c})},,function(n,t,e){"use strict";e.r(t);var r=e(2);window.cdaaas=window.cdaaas||{},window.cdaaas.SETTINGS=window.cdaaas.SETTINGS||{},window.cdaaas.SETTINGS.IS_PWA=Object(r.d)()}])});
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){}])});
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return r}),n.d(e,"b",function(){return l}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return h}),n.d(e,"g",function(){return o}),n.d(e,"h",function(){return a});
/**
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
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e};
/**
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
 */
/**
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
 */
class r{constructor(){this.reject=(()=>{}),this.resolve=(()=>{}),this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
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
 */function o(){return"object"==typeof indexedDB}function a(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=(()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)}),r.onupgradeneeded=(()=>{n=!1}),r.onerror=(()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")})}catch(t){e(t)}})}function s(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
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
 */
const c="FirebaseError";class u extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=c,Object.setPrototypeOf(this,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,l.prototype.create)}}class l{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?function(t,e){return t.replace(f,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}(r,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new u(i,a,n)}}const f=/\{\$([^}]+)}/g;
/**
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
 */function p(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],o=e[r];if(d(n)&&d(o)){if(!p(n,o))return!1}else if(n!==o)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function d(t){return null!==t&&"object"==typeof t}
/**
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
 */
/**
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
 */
function h(t){return t&&t._delegate?t._delegate:t}}).call(this,n(2))},function(t,e,n){!function(t){"use strict";function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,i){var r,o=new Promise(function(o,a){e(r=t[n].apply(t,i)).then(o,a)});return o.request=r,o}function i(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function r(t,e,i,r){r.forEach(function(r){r in i.prototype&&(t.prototype[r]=function(){return n(this[e],r,arguments)})})}function o(t,e,n,i){i.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function a(t,e,i,r){r.forEach(function(r){r in i.prototype&&(t.prototype[r]=function(){return function(t,e,i){var r=n(t,e,i);return r.then(function(t){if(t)return new c(t,r.request)})}(this[e],r,arguments)})})}function s(t){this._index=t}function c(t,e){this._cursor=t,this._request=e}function u(t){this._store=t}function l(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function f(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new l(n)}function p(t){this._db=t}i(s,"_index",["name","keyPath","multiEntry","unique"]),r(s,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),a(s,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(c,"_cursor",["direction","key","primaryKey","value"]),r(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(c.prototype[t]=function(){var n=this,i=arguments;return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,i),e(n._request).then(function(t){if(t)return new c(t,n._request)})})})}),u.prototype.createIndex=function(){return new s(this._store.createIndex.apply(this._store,arguments))},u.prototype.index=function(){return new s(this._store.index.apply(this._store,arguments))},i(u,"_store",["name","keyPath","indexNames","autoIncrement"]),r(u,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),a(u,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(u,"_store",IDBObjectStore,["deleteIndex"]),l.prototype.objectStore=function(){return new u(this._tx.objectStore.apply(this._tx,arguments))},i(l,"_tx",["objectStoreNames","mode"]),o(l,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new u(this._db.createObjectStore.apply(this._db,arguments))},i(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new l(this._db.transaction.apply(this._db,arguments))},i(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[u,s].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=function(t){return Array.prototype.slice.call(t)}(arguments),n=e[e.length-1],i=this._store||this._index,r=i[t].apply(i,e.slice(0,-1));r.onsuccess=function(){n(r.result)}})})}),[s,u].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,i=[];return new Promise(function(r){n.iterateCursor(t,function(t){t?(i.push(t.value),void 0===e||i.length!=e?t.continue():r(i)):r(i)})})})}),t.openDb=function(t,e,i){var r=n(indexedDB,"open",[t,e]),o=r.request;return o&&(o.onupgradeneeded=function(t){i&&i(new f(o.result,t.oldVersion,o.transaction))}),r.then(function(t){return new p(t)})},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){!function(){let t,e,n,i;const r={passive:!0,capture:!0},o=new Date,a=function(){i=[],e=-1,t=null,l(addEventListener)},s=function(i,r){t||(t=r,e=i,n=new Date,l(removeEventListener),c())};var c=function(){if(e>=0&&e<n-o){const n={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+e};i.forEach(t=>{t(n)}),i=[]}};const u=function(t){if(t.cancelable){const e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){const n=function(){s(t,e),o()},i=function(){o()};var o=function(){removeEventListener("pointerup",n,r),removeEventListener("pointercancel",i,r)};addEventListener("pointerup",n,r),addEventListener("pointercancel",i,r)}(e,t):s(e,t)}};var l=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach(e=>t(e,u,r))};let f="hidden"===document.visibilityState?0:1/0;addEventListener("visibilitychange",function t(e){"hidden"===document.visibilityState&&(f=e.timeStamp,removeEventListener("visibilitychange",t,!0))},!0),a(),self.webVitals={firstInputPolyfill(t){i.push(t),c()},resetFirstInputPolyfill:a,get firstHiddenTime(){return f}}}()},,function(t,e,n){"use strict";n.r(e);var i=n(0);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class a{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:function(t){return t===o?void 0:t}(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class s{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */const c=[];var u;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(u||(u={}));const l={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},f=u.INFO,p={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},d=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=p[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class h{constructor(t){this.name=t,this._logLevel=f,this._logHandler=d,this._userLogHandler=null,c.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?l[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}
/**
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
 */
class m{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const g="@firebase/app",v="0.7.12",b=new h("@firebase/app"),y="[DEFAULT]",w={[g]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},_=new Map,I=new Map;function E(t,e){try{t.container.addComponent(e)}catch(n){b.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function S(t){const e=t.name;if(I.has(e))return b.debug(`There were multiple attempts to register component ${e}.`),!1;I.set(e,t);for(const e of _.values())E(e,t);return!0}function T(t,e){return t.container.getProvider(e)}
/**
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
 */
const C={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},A=new i.b("app","Firebase",C);
/**
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
 */
class O{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw A.create("app-deleted",{appName:this._name})}}
/**
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
 */function D(t=y){const e=_.get(t);if(!e)throw A.create("no-app",{appName:t});return e}function N(t,e,n){var i;let o=null!==(i=w[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=e.match(/\s|\//);if(a||s){const t=[`Unable to register library "${o}" with version "${e}":`];return a&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void b.warn(t.join(" "))}S(new r(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}!
/**
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
 */
function(t){S(new r("platform-logger",t=>new m(t),"PRIVATE")),N(g,v,t),N(g,v,"esm2017"),N("fire-js","")}("");
/**
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
 */
N("firebase","9.6.2","app");var P=n(1);const k=1e4,j="w:0.5.5",M="FIS_v2",R="https://firebaseinstallations.googleapis.com/v1",L=36e5,$={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},B=new i.b("installations","Installations",$);function F(t){return t instanceof i.c&&t.code.includes("request-failed")}
/**
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
 */function U({projectId:t}){return`${R}/projects/${t}/installations`}function x(t){return{token:t.token,requestStatus:2,expiresIn:function(t){return Number(t.replace("s","000"))}(t.expiresIn),creationTime:Date.now()}}async function q(t,e){const n=(await e.json()).error;return B.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function H({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function z(t,{refreshToken:e}){const n=H(t);return n.append("Authorization",function(t){return`${M} ${t}`}
/**
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
 */(e)),n}async function V(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
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
 */
function K(t){return new Promise(e=>{setTimeout(e,t)})}
/**
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
 */
/**
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
 */
const G=/^[cdef][\w-]{21}$/,W="";function J(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return function(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}(t).substr(0,22)}
/**
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
 */(t);return G.test(e)?e:W}catch(t){return W}}function Y(t){return`${t.appName}!${t.appId}`}
/**
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
 */const X=new Map;function Q(t,e){const n=Y(t);Z(n,e),function(t,e){const n=et();n&&n.postMessage({key:t,fid:e});nt()}(n,e)}function Z(t,e){const n=X.get(t);if(n)for(const t of n)t(e)}let tt=null;function et(){return!tt&&"BroadcastChannel"in self&&((tt=new BroadcastChannel("[Firebase] FID Change")).onmessage=(t=>{Z(t.data.key,t.data.fid)})),tt}function nt(){0===X.size&&tt&&(tt.close(),tt=null)}
/**
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
 */const it="firebase-installations-database",rt=1,ot="firebase-installations-store";let at=null;function st(){return at||(at=Object(P.openDb)(it,rt,t=>{switch(t.oldVersion){case 0:t.createObjectStore(ot)}})),at}async function ct(t,e){const n=Y(t),i=(await st()).transaction(ot,"readwrite"),r=i.objectStore(ot),o=await r.get(n);return await r.put(e,n),await i.complete,o&&o.fid===e.fid||Q(t,e.fid),e}async function ut(t){const e=Y(t),n=(await st()).transaction(ot,"readwrite");await n.objectStore(ot).delete(e),await n.complete}async function lt(t,e){const n=Y(t),i=(await st()).transaction(ot,"readwrite"),r=i.objectStore(ot),o=await r.get(n),a=e(o);return void 0===a?await r.delete(n):await r.put(a,n),await i.complete,!a||o&&o.fid===a.fid||Q(t,a.fid),a}
/**
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
 */async function ft(t){let e;const n=await lt(t,n=>{const i=function(t){return dt(t||{fid:J(),registrationStatus:0})}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(B.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,e){try{const n=await async function(t,{fid:e}){const n=U(t),i=H(t),r={fid:e,authVersion:M,appId:t.appId,sdkVersion:j},o={method:"POST",headers:i,body:JSON.stringify(r)},a=await V(()=>fetch(n,o));if(a.ok){const t=await a.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:x(t.authToken)}}throw await q("Create Installation",a)}(t,e);return ct(t,n)}catch(n){throw F(n)&&409===n.customData.serverCode?await ut(t):await ct(t,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:async function(t){let e=await pt(t);for(;1===e.registrationStatus;)await K(100),e=await pt(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await ft(t);return n||e}return e}(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===W?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pt(t){return lt(t,t=>{if(!t)throw B.create("installation-not-found");return dt(t)})}function dt(t){return function(t){return 1===t.registrationStatus&&t.registrationTime+k<Date.now()}
/**
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
 */(t)?{fid:t.fid,registrationStatus:0}:t}async function ht({appConfig:t,platformLoggerProvider:e},n){const i=function(t,{fid:e}){return`${U(t)}/${e}/authTokens:generate`}
/**
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
 */(t,n),r=z(t,n),o=e.getImmediate({optional:!0});o&&r.append("x-firebase-client",o.getPlatformInfoString());const a={installation:{sdkVersion:j}},s={method:"POST",headers:r,body:JSON.stringify(a)},c=await V(()=>fetch(i,s));if(c.ok){return x(await c.json())}throw await q("Generate Auth Token",c)}async function mt(t,e=!1){let n;const i=await lt(t.appConfig,i=>{if(!vt(i))throw B.create("not-registered");const r=i.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+L}(t)}(r))return i;if(1===r.requestStatus)return n=async function(t,e){let n=await gt(t.appConfig);for(;1===n.authToken.requestStatus;)await K(100),n=await gt(t.appConfig);const i=n.authToken;return 0===i.requestStatus?mt(t,e):i}(t,e),i;{if(!navigator.onLine)throw B.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=async function(t,e){try{const n=await ht(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ct(t.appConfig,i),n}catch(n){if(!F(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ct(t.appConfig,n)}else await ut(t.appConfig);throw n}}(t,e),e}});return n?await n:i.authToken}function gt(t){return lt(t,t=>{if(!vt(t))throw B.create("not-registered");return function(t){return 1===t.requestStatus&&t.requestTime+k<Date.now()}
/**
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
 */(t.authToken)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}function vt(t){return void 0!==t&&2===t.registrationStatus}
/**
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
 */
async function bt(t,e=!1){const n=t;return await async function(t){const{registrationPromise:e}=await ft(t);e&&await e}
/**
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
 */(n.appConfig),(await mt(n,e)).token}function yt(t){return B.create("missing-app-config-values",{valueName:t})}
/**
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
 */const wt="installations",_t="installations-internal",It=t=>{const e=T(t.getProvider("app").getImmediate(),wt).getImmediate();return{getId:()=>(async function(t){const e=t,{installationEntry:n,registrationPromise:i}=await ft(e.appConfig);return i?i.catch(console.error):mt(e).catch(console.error),n.fid})(e),getToken:t=>bt(e,t)}};S(new r(wt,t=>{const e=t.getProvider("app").getImmediate();return{app:e,appConfig:
/**
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
 */
function(t){if(!t||!t.options)throw yt("App Configuration");if(!t.name)throw yt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:T(e,"platform-logger"),_delete:()=>Promise.resolve()}},"PUBLIC")),S(new r(_t,It,"PRIVATE")),N("@firebase/installations","0.5.5"),N("@firebase/installations","0.5.5","esm2017");const Et="@firebase/performance",St="0.5.5",Tt=St,Ct="FB-PERF-TRACE-START",At="FB-PERF-TRACE-STOP",Ot="FB-PERF-TRACE-MEASURE",Dt="_wt_",Nt="_fp",Pt="_fcp",kt="_fid",jt="@firebase/performance/config",Mt="@firebase/performance/configexpire",Rt={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},Lt=new i.b("performance","Performance",Rt),$t=new h("Performance");
/**
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
 */
let Bt,Ft,Ut,xt;$t.logLevel=u.INFO;class qt{constructor(t){if(this.window=t,!t)throw Lt.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&Object(i.d)()?!!Object(i.g)()||($t.info("IndexedDB is not supported by current browswer"),!1):($t.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(t,e){if(!this.PerformanceObserver)return;new this.PerformanceObserver(t=>{for(const n of t.getEntries())e(n)}).observe({entryTypes:[t]})}static getInstance(){return void 0===Bt&&(Bt=new qt(Ft)),Bt}}function Ht(){return Ut}
/**
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
 */
function zt(t,e){const n=t.length-e.length;if(n<0||n>1)throw Lt.create("invalid String merger input");const i=[];for(let n=0;n<t.length;n++)i.push(t.charAt(n)),e.length>n&&i.push(e.charAt(n));return i.join("")}
/**
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
 */class Vt{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=zt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=zt("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===xt&&(xt=new Vt),xt}}
/**
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
 */var Kt;!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"}(Kt||(Kt={}));const Gt=["firebase_","google_","ga_"],Wt=new RegExp("^[a-zA-Z]\\w*$"),Jt=40,Yt=100;function Xt(){switch(qt.getInstance().document.visibilityState){case"visible":return Kt.VISIBLE;case"hidden":return Kt.HIDDEN;default:return Kt.UNKNOWN}}
/**
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
 */
function Qt(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.appId;if(!n)throw Lt.create("no app id");return n}
/**
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
 */
const Zt="0.0.1",te={loggingEnabled:!0},ee="FIREBASE_INSTALLATIONS_AUTH";function ne(t,e){const n=function(){const t=qt.getInstance().localStorage;if(!t)return;const e=t.getItem(Mt);if(!e||!function(t){return Number(t)>Date.now()}(e))return;const n=t.getItem(jt);if(!n)return;try{const t=JSON.parse(n);return t}catch(t){return}}();return n?(re(n),Promise.resolve()):function(t,e){return function(t){const e=t.getToken();return e.then(t=>{}),e}(t.installations).then(n=>{const i=function(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.projectId;if(!n)throw Lt.create("no project id");return n}(t.app),r=function(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.apiKey;if(!n)throw Lt.create("no api key");return n}(t.app),o=`https://firebaseremoteconfig.googleapis.com/v1/projects/${i}/namespaces/fireperf:fetch?key=${r}`,a=new Request(o,{method:"POST",headers:{Authorization:`${ee} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:Qt(t.app),app_version:Tt,sdk_version:Zt})});return fetch(a).then(t=>{if(t.ok)return t.json();throw Lt.create("RC response not ok")})}).catch(()=>{$t.info(ie)})}(t,e).then(re).then(t=>(function(t){const e=qt.getInstance().localStorage;if(!t||!e)return;e.setItem(jt,JSON.stringify(t)),e.setItem(Mt,String(Date.now()+60*Vt.getInstance().configTimeToLive*60*1e3))})(t),()=>{})}const ie="Could not fetch config, will use default configs";function re(t){if(!t)return t;const e=Vt.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=te.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=oe(e.tracesSamplingRate),e.logNetworkAfterSampling=oe(e.networkRequestsSamplingRate),t}function oe(t){return Math.random()<=t}
/**
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
 */let ae,se=1;function ce(t){return se=2,ae=ae||function(t){return function(){const t=qt.getInstance().document;return new Promise(e=>{if(t&&"complete"!==t.readyState){const n=()=>{"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}().then(()=>(function(t){const e=t.getId();return e.then(t=>{Ut=t}),e})(t.installations)).then(e=>ne(t,e)).then(()=>ue(),()=>ue())}(t)}function ue(){se=3}
/**
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
 */const le=1e4,fe=5500,pe=3,de=1e3;let he,me=pe,ge=[],ve=!1;function be(t){setTimeout(()=>{if(0!==me)return ge.length?void function(){const t=ge.splice(0,de),e=t.map(t=>({source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}));(function(t,e){return function(t){const e=Vt.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}(t).then(t=>(t.ok||$t.info("Call to Firebase backend failed."),t.json())).then(t=>{const n=Number(t.nextRequestWaitMillis);let i=le;isNaN(n)||(i=Math.max(n,i));const r=t.logResponseDetails;Array.isArray(r)&&r.length>0&&"RETRY_REQUEST_LATER"===r[0].responseAction&&(ge=[...e,...ge],$t.info("Retry transport request later.")),me=pe,be(i)})})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Vt.getInstance().logSource,log_event:e},t).catch(()=>{ge=[...t,...ge],me--,$t.info(`Tries left: ${me}.`),be(le)})}():be(le)},t)}function ye(t){return(...e)=>{!function(t){if(!t.eventTime||!t.message)throw Lt.create("invalid cc log");ge=[...ge,t]}({message:t(...e),eventTime:Date.now()})}}
/**
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
 */function we(t,e){he||(he=ye(Ee)),he(t,e)}function _e(t){const e=Vt.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&qt.getInstance().requiredApisAvailable()&&(t.isAuto&&Xt()!==Kt.VISIBLE||(3===se?Ie(t):ce(t.performanceController).then(()=>Ie(t),()=>Ie(t))))}function Ie(t){if(!Ht())return;const e=Vt.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout(()=>we(t,1),0)}function Ee(t,e){return 0===e?function(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:Se(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}(t):function(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);const n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);const i={application_info:Se(t.performanceController.app),trace_metric:e};return JSON.stringify(i)}(t)}function Se(t){return{google_app_id:Qt(t),app_instance_id:Ht(),web_app_info:{sdk_version:Tt,page_url:qt.getInstance().getUrl(),service_worker_status:function(){const t=qt.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}(),visibility_state:Xt(),effective_connection_type:function(){const t=qt.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}()},application_process_state:0}}
/**
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
 */const Te=100,Ce="_",Ae=[Nt,Pt,kt];
/**
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
 */
class Oe{constructor(t,e,n=!1,i){this.performanceController=t,this.name=e,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=qt.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`${Ct}-${this.randomId}-${this.name}`,this.traceStopMark=`${At}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${Ot}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw Lt.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw Lt.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),_e(this)}record(t,e,n){if(t<=0)throw Lt.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw Lt.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const t of Object.keys(n.metrics))isNaN(Number(n.metrics[t]))||(this.counters[t]=Number(Math.floor(n.metrics[t])));_e(this)}incrementMetric(t,e=1){void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)}putMetric(t,e){if(!function(t,e){return!(0===t.length||t.length>Te)&&(e&&e.startsWith(Dt)&&Ae.indexOf(t)>-1||!t.startsWith(Ce))}(t,this.name))throw Lt.create("invalid custom metric name",{customMetricName:t});this.counters[t]=function(t){const e=Math.floor(t);return e<t&&$t.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}(e)}getMetric(t){return this.counters[t]||0}putAttribute(t,e){const n=function(t){return!(0===t.length||t.length>Jt||Gt.some(e=>t.startsWith(e))||!t.match(Wt))}(t),i=function(t){return 0!==t.length&&t.length<=Yt}(e);if(n&&i)this.customAttributes[t]=e;else{if(!n)throw Lt.create("invalid attribute name",{attributeName:t});if(!i)throw Lt.create("invalid attribute value",{attributeValue:e})}}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))}static createOobTrace(t,e,n,i){const r=qt.getInstance().getUrl();if(!r)return;const o=new Oe(t,Dt+r,!0),a=Math.floor(1e3*qt.getInstance().getTimeOrigin());o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){const t=n.find(t=>"first-paint"===t.name);t&&t.startTime&&o.putMetric(Nt,Math.floor(1e3*t.startTime));const e=n.find(t=>"first-contentful-paint"===t.name);e&&e.startTime&&o.putMetric(Pt,Math.floor(1e3*e.startTime)),i&&o.putMetric(kt,Math.floor(1e3*i))}_e(o)}static createUserTimingTrace(t,e){_e(new Oe(t,e,!1,e))}}
/**
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
 */function De(t,e){const n=e;if(!n||void 0===n.responseStart)return;const i=qt.getInstance().getTimeOrigin(),r=Math.floor(1e3*(n.startTime+i)),o=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,a=Math.floor(1e3*(n.responseEnd-n.startTime));!function(t){const e=Vt.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,i=e.logEndPointUrl.split("?")[0],r=e.flTransportEndpointUrl.split("?")[0];n!==i&&n!==r&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(()=>we(t,0),0)}({performanceController:t,url:n.name&&n.name.split("?")[0],responsePayloadBytes:n.transferSize,startTimeUs:r,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:a})}
/**
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
 */const Ne=5e3;function Pe(t){Ht()&&(setTimeout(()=>(function(t){const e=qt.getInstance(),n=e.getEntriesByType("navigation"),i=e.getEntriesByType("paint");if(e.onFirstInputDelay){let r=setTimeout(()=>{Oe.createOobTrace(t,n,i),r=void 0},Ne);e.onFirstInputDelay(e=>{r&&(clearTimeout(r),Oe.createOobTrace(t,n,i,e))})}else Oe.createOobTrace(t,n,i)})(t),0),setTimeout(()=>(function(t){const e=qt.getInstance(),n=e.getEntriesByType("resource");for(const e of n)De(t,e);e.setupObserver("resource",e=>De(t,e))})(t),0),setTimeout(()=>(function(t){const e=qt.getInstance(),n=e.getEntriesByType("measure");for(const e of n)ke(t,e);e.setupObserver("measure",e=>ke(t,e))})(t),0))}function ke(t,e){const n=e.name;n.substring(0,Ot.length)!==Ot&&Oe.createUserTimingTrace(t,n)}
/**
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
 */S(new r("performance",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw Lt.create("FB not default");if("undefined"==typeof window)throw Lt.create("no window");!function(t){Ft=t}
/**
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
 */(window);const o=new class{constructor(t,e){this.app=t,this.installations=e,this.initialized=!1}_init(t){this.initialized||(void 0!==(null===t||void 0===t?void 0:t.dataCollectionEnabled)&&(this.dataCollectionEnabled=t.dataCollectionEnabled),void 0!==(null===t||void 0===t?void 0:t.instrumentationEnabled)&&(this.instrumentationEnabled=t.instrumentationEnabled),qt.getInstance().requiredApisAvailable()?Object(i.h)().then(t=>{t&&(ve||(be(fe),ve=!0),ce(this).then(()=>Pe(this),()=>Pe(this)),this.initialized=!0)}).catch(t=>{$t.info(`Environment doesn't support IndexedDB: ${t}`)}):$t.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){Vt.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return Vt.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){Vt.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return Vt.getInstance().dataCollectionEnabled}}(n,r);return o._init(e),o},"PUBLIC")),N(Et,St),N(Et,St,"esm2017");const je={qa:{API_KEY:"AIzaSyCCHoyrh1psvX-d6zJHYDAKbe_lEHFDyms",AUTH_DOMAIN:"teste-50a45.firebaseapp.com",PROJECT_ID:"teste-50a45",STORAGE_BUCKET:"teste-50a45.appspot.com",MESSAGING_SENDER_ID:"50131884570",APP_ID:"1:50131884570:web:06b5f2fd6f995682c64fa3"},prod:{API_KEY:"AIzaSyBx0u5czp3W8EJOJPysmC0m37wtCw1ufQs",AUTH_DOMAIN:"home-globocom-prod.firebaseapp.com",PROJECT_ID:"home-globocom-prod",STORAGE_BUCKET:"home-globocom-prod.appspot.com",MESSAGING_SENDER_ID:"836420232202",APP_ID:"1:836420232202:web:f2790fea17bfd0d0d2ebf3"}},Me={CLS:"Cumulative Layout Shift",LCP:"Largest Contentful Paint",FID:"First Input Delay"};var Re=t=>({apiKey:je[t].API_KEY,authDomain:je[t].AUTH_DOMAIN,projectId:je[t].PROJECT_ID,storageBucket:je[t].STORAGE_BUCKET,messagingSenderId:je[t].MESSAGING_SENDER_ID,appId:je[t].APP_ID}),Le=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},$e=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver(function(t){return t.getEntries().map(e)});return n.observe({type:t,buffered:!0}),n}}catch(t){}},Be=function(t,e){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Fe=function(t){addEventListener("pageshow",function(e){e.persisted&&t(e)},!0)},Ue=function(t,e,n){var i;return function(r){e.value>=0&&(r||n)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},xe=-1,qe=function(){Be(function(t){var e=t.timeStamp;xe=e},!0)},He=function(){return xe<0&&((xe=window.webVitals.firstHiddenTime)===1/0&&qe(),Fe(function(){setTimeout(function(){xe="hidden"===document.visibilityState?0:1/0,qe()},0)})),{get firstHiddenTime(){return xe}}},ze=function(t,e){var n,i=He(),r=Le("FCP"),o=function(t){"first-contentful-paint"===t.name&&(s&&s.disconnect(),t.startTime<i.firstHiddenTime&&(r.value=t.startTime,r.entries.push(t),n(!0)))},a=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],s=a?null:$e("paint",o);(a||s)&&(n=Ue(t,r,e),a&&o(a),Fe(function(i){r=Le("FCP"),n=Ue(t,r,e),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-i.timeStamp,n(!0)})})}))},Ve=!1,Ke=-1,Ge={},We=function(t,e){var n,i=He(),r=Le("LCP"),o=function(t){var e=t.startTime;e<i.firstHiddenTime&&(r.value=e,r.entries.push(t),n())},a=$e("largest-contentful-paint",o);if(a){n=Ue(t,r,e);var s=function(){Ge[r.id]||(a.takeRecords().map(o),a.disconnect(),Ge[r.id]=!0,n(!0))};["keydown","click"].forEach(function(t){addEventListener(t,s,{once:!0,capture:!0})}),Be(s,!0),Fe(function(i){r=Le("LCP"),n=Ue(t,r,e),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-i.timeStamp,Ge[r.id]=!0,n(!0)})})})}};const Je=t=>{const e=t.id?`#${t.id}`:"",n=t.className?`.${t.className.split(" ").join(".")}`:"";return`${t.tagName.toLowerCase()}${e}${n}`};var Ye=t=>{const e=({name:e,delta:n,entries:r})=>{const o=Date.now(),a=Math.round("CLS"===e?1e3*n:n);r.forEach(({element:n,target:r,sources:s})=>{const c=n||r||s,u=c?(t=>Array.isArray(t)?t.map(t=>Je(t.node)).filter(Boolean).join(", "):Je(t))(c):"",l=u?{element:u}:{};(function(t,e){return t=Object(i.f)(t),new Oe(t,e)})(t,Me[e]).record(o,a,l)})};!function(t,e){Ve||(ze(function(t){Ke=t.value}),Ve=!0);var n,i=function(e){Ke>-1&&t(e)},r=Le("CLS",0),o=0,a=[],s=function(t){if(!t.hadRecentInput){var e=a[0],i=a[a.length-1];o&&t.startTime-i.startTime<1e3&&t.startTime-e.startTime<5e3?(o+=t.value,a.push(t)):(o=t.value,a=[t]),o>r.value&&(r.value=o,r.entries=a,n())}},c=$e("layout-shift",s);c&&(n=Ue(i,r,e),Be(function(){c.takeRecords().map(s),n(!0)}),Fe(function(){o=0,Ke=-1,r=Le("CLS",0),n=Ue(i,r,e)}))}(e),function(t,e){var n,i=He(),r=Le("FID"),o=function(t){t.startTime<i.firstHiddenTime&&(r.value=t.processingStart-t.startTime,r.entries.push(t),n(!0))},a=$e("first-input",o);n=Ue(t,r,e),a&&Be(function(){a.takeRecords().map(o),a.disconnect()},!0),a||window.webVitals.firstInputPolyfill(o),Fe(function(){r=Le("FID"),n=Ue(t,r,e),window.webVitals.resetFirstInputPolyfill(),window.webVitals.firstInputPolyfill(o)})}(e),We(e)};var Xe=()=>{if(window.pages)return window.pages.SETTINGS.ENV;return["localhost","local.globo","qa.globoi.com"].some(t=>location.hostname.includes(t))?"qa":"prod"};var Qe=()=>{const t=Xe(),e=function(t=D()){return T(t=Object(i.f)(t),"performance").getImmediate()}(function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:y,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw A.create("bad-app-name",{appName:String(r)});const o=_.get(r);if(o){if(Object(i.e)(t,o.options)&&Object(i.e)(n,o.config))return o;throw A.create("duplicate-app",{appName:r})}const a=new s(r);for(const t of I.values())a.addComponent(t);const c=new O(t,n,a);return _.set(r,c),c}(Re(t)));Ye(e)};n(3);Qe()}])});;

!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=16)}([function(t,e,r){var n=r(8)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(4);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(10),o=r(11),i=r(3),a=r(12);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(13),o=r(14),i=r(3),a=r(15);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){},function(t,e,r){var n=r(9).default;function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new j(n||[]);return a(i,"_invoke",{value:T(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h={};function v(){}function b(){}function y(){}var g={};f(g,u,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(A([])));x&&x!==r&&i.call(x,u)&&(g=x);var w=y.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){var r;a(this,"_invoke",{value:function(o,a){function c(){return new e((function(r,c){!function r(o,a,c,u){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}(o,a,r,c)}))}return r=r?r.then(c,c):c()}})}function T(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function A(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return b.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:b,configurable:!0}),b.displayName=f(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},_(S.prototype),f(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(4);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){"use strict";r.r(e);r(7);var n,o,i=r(1),a=r.n(i),c=r(2),u=r.n(c),s=r(0),l=r.n(s),f={CTA_BUTTON:"cta-button",CTA_IMAGERY:"cta-imagery"},p=u()({},"".concat(null===globalThis||void 0===globalThis||null===(n=globalThis.cdaaas)||void 0===n||null===(o=n.SETTINGS)||void 0===o?void 0:o.SITE_ID,"-tp-bottom-v2"),{"tp-enabled-button":[f.CTA_BUTTON],"tp-enabled-imagery-cta":[f.CTA_IMAGERY]}),d=f.TP_DISABLED,h=function(t){var e=document.cookie.split(";").find((function(e){return e.includes(t)}));return e?e.split("=")[1]:""},v=function(t,e){var r=new Date;r.setDate(r.getDate()+1),document.cookie="".concat(t,"=").concat(e,";samesite=strict;expires=").concat(r.toUTCString(),";domain=").concat(globalThis.location.hostname,";path=/")},b={executeIfAble:function(){var t=a()(l.a.mark((function t(e){var r,n,o,i,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.render,n=e.ABTestControl,t.prev=1,null==n||null===(o=n.isActiveFlag)||void 0===o||!o.call(n,d)){t.next=4;break}return t.abrupt("return");case 4:i="true"===h("cookie-banner-consent-accepted"),a="true"===h("glb-tp-bottom-closed"),i&&!a&&r(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("[bs-tp-bottom-section::executeIfAble]",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),closeForSession:function(){v("glb-tp-bottom-closed",!0)},setCookie:v,getCookie:h,TP_BOTTOM_KEY_CLOSED:"glb-tp-bottom-closed"},y=[{topic:"dismiss",fn:function(t){return function(e,r,n){var o=googletag.pubads().getSlots().find((function(t){return t.getSlotElementId()===r}));o&&(googletag.destroySlots([o]),n&&n("click | close","touchpoint_D2C","tp_bottom | ".concat(t.sizeState||"collapsed")),b.closeForSession())}}},{topic:"resize",fn:function(t){return function(e,r,n){var o=document.querySelector("#".concat(r,"  iframe")),i=e.height,a="".concat(i,"px"),c="auto"===i?"auto":a,u="expand"===e.action?"expanded":"collapsed",s="click | ".concat(u),l="tp_bottom | ".concat("expand"===e.action?"collapsed":"expanded");if(o.style.height!==a){var f=document.querySelector("#glb-tp-bottom .glb-tp-bottom__background");f&&(f.classList.add("visible"),setTimeout((function(){f.classList.remove("visible")}),1e3)),o.style.height=c,e.action&&n&&n(s,"touchpoint_D2C",l),e.isOnload&&e.contentHeight&&f&&(f.style.maxHeight="".concat(e.contentHeight>120?50:e.contentHeight,"px")),t.sizeState=u}}}},{topic:"cta-collapsed",fn:function(t){return function(t,e,r,n){r&&(r("click | cta","touchpoint_D2C","tp_bottom | collapsed"),n.conversion())}}}],g=function(t){var e=t.slot,r=t.tracker,n=t.ABTestControl,o=t.tpState,i=function(t){var e=t.tracker,r=t.ABTestControl;return function(t,n,o){window.addEventListener("message",(function(i){i.data&&"globoTouchPointD2C"===i.data.context&&i.data.event===t&&o(i.data,n,e,r)}),!1)}}({tracker:r,ABTestControl:n});y.forEach((function(t){return i(t.topic,e,t.fn(o))}))},m=function(t){var e=t.target,r=t.show,n=t.hide;if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?n():r()}))}),{root:null,rootMargin:"15% 0px 0px 0px"}).observe(e)}else r()},x=function(t){var e=t.target,r=t.aboveSelectors,n=t.translateProperty,o=getComputedStyle(e).getPropertyValue(n);return r.reduce((function(t,e){var r,n;return t-(null!==(r=null===(n=document.querySelector(e))||void 0===n?void 0:n.clientHeight)&&void 0!==r?r:0)}),o)},w=r(5),_=r.n(w),S=r(6),T=r.n(S),O=function(){var t=a()(l.a.mark((function t(){var e,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!globalThis.globalWebdeps){t.next=20;break}return t.prev=1,t.next=4,globalThis.globalWebdeps("globo-ab");case 4:if(!globalThis.HorizonClientPromise){t.next=10;break}return t.next=7,globalThis.HorizonClientPromise();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=void 0;case 11:r=t.t0,(e=new globalThis.GloboAB([".qa.",".globoi.com","localhost"].find((function(t){return globalThis.location.hostname.includes(t)}))?"qa":"prod",r)).options().timeout(2e3),e.options().skipImpression(),t.next=20;break;case 17:t.prev=17,t.t1=t.catch(1),console.error("[bs-tp-bottom-section::getGloboABClient]",t.t1);case 20:return t.abrupt("return",e);case 21:case"end":return t.stop()}}),t,null,[[1,17]])})));return function(){return t.apply(this,arguments)}}(),E=function(t){var e=t.activeFlags,r=t.abExperiments,n=Object.keys(r);return{isActiveFlag:function(t){return e.some((function(e){return e===t}))},listFlags:function(){return e},conversion:function(){return n.forEach((function(t){return r[t].conversion()}))},impression:function(){return n.forEach((function(t){return r[t].impression()}))}}},L=function(){var t=a()(l.a.mark((function t(e){var r,n,o,i,a,c,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.flagsData,n=void 0===r?p:r,o=e.abClient,t.prev=1,t.next=4,o.choose(Object.keys(n));case 4:a=t.sent,c=Object.entries(a),u=T()(new Set(c.flatMap((function(t){var e=_()(t,2),r=e[0],o=e[1];return n[r][o.alternative]})).filter(Boolean))),i=E({activeFlags:u,abExperiments:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error("[bs-tp-bottom-section::createControl]",t.t0);case 13:return t.abrupt("return",i);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),j=a()(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:return e=t.sent,t.abrupt("return",L({abClient:e}));case 4:case"end":return t.stop()}}),t)}))),A=function(t,e){window.setTimeout((function r(){window[t]?e():window.setTimeout(r,100)}),100)},k=function(t){return function(e,r,n){var o=n.split(" | "),i=o.slice(0,1),a=o.slice(1),c=i.concat(t,a).join(" | ");!function(t,e,r){A("ga",(function(){window.ga("".concat(window.cdaaas.SETTINGS.SITE_ID,"_portal.send"),"event",t,e,r)}))}(r,e,c),function(t,e,r){A("HorizonClient",(function(){window.HorizonClient.then((function(n){n.send({id:"common-event",version:"0.1",contentType:"common",properties:{eventCategory:t,eventAction:e,eventLabel:r}})}))}))}(r,e,c)}};function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I=function(){var t,e;return"touchPoint/bottom/".concat(null===globalThis||void 0===globalThis||null===(t=globalThis.cdaaas)||void 0===t||null===(e=t.SETTINGS)||void 0===e?void 0:e.SITE_ID)},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var e="banner_touch_point_bottom",r=k(t.listFlags()),n=f.CTA_BUTTON,o=f.CTA_IMAGERY;g({slot:e,tracker:r,ABTestControl:t,tpState:{sizeState:"collapsed"}});var i={allowOverlayExpansion:!0,allowPushExpansion:!0,sandbox:!0},a=function(t){var e=t.context,r=t.event,n=t.props,o=void 0===n?{}:n;try{document.querySelector("#".concat("glb-tp-bottom"," iframe")).contentWindow.postMessage(C({context:e,event:r},o),"*")}catch(t){return console.error("[glb-touchpointD2C-bottom] message error - ".concat(r),t),!1}return!0},c=function(){var c=document.getElementById("glb-tp-bottom"),u=JSON.parse(c.getAttribute("data-display").replaceAll("'",'"')).translateAbove,s=x({target:c,aboveSelectors:u,translateProperty:"--translatelimit"});c.style.setProperty("--translatelimit","".concat(s,"px")),window.googletag.cmd.push((function(){window.bannerLazyLoading(e,{adUnit:I(),targets:{version:"v7.0.0",tp_type:t.isActiveFlag(o)?"v2":"v1"}});var u=googletag.pubads();u.getSlots().find((function(t){return t.getSlotElementId()===e})).setSafeFrameConfig(i),u.addEventListener("slotOnload",(function(i){if(i.slot.getSlotElementId()===e){var u=t.isActiveFlag(n),s=t.isActiveFlag(o);m({target:document.querySelector(".tp-threshold"),show:function(){c.classList.remove("glb-tp-bottom--hide")},hide:function(){c.classList.add("glb-tp-bottom--hide")}}),u&&a({context:"tp-alternative",event:"enable-cta"}),s&&a({context:"tp-imagery",event:"enable-imagery"}),c.addEventListener("transitionend",(function(){r("view","touchpoint_D2C","tp_bottom"),t.impression()}),{once:!0})}})),window.disableLazyLoad(googletag)}))};window.libPubReady?c():document.addEventListener("libPubReady",c)}};(function(){var t=a()(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:e=t.sent,b.executeIfAble({render:M(e),ABTestControl:e});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}]);
!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var t=o();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,function(){return function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=4)}([function(e,o,t){
/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,o={rootMargin:"0px",threshold:0,load:function(o){if("picture"===o.nodeName.toLowerCase()){var t=o.querySelector("img"),n=!1;null===t&&(t=document.createElement("img"),n=!0),e&&o.getAttribute("data-iesrc")&&(t.src=o.getAttribute("data-iesrc")),o.getAttribute("data-alt")&&(t.alt=o.getAttribute("data-alt")),n&&o.append(t)}if("video"===o.nodeName.toLowerCase()&&!o.getAttribute("data-src")&&o.children){for(var r=o.children,a=void 0,m=0;m<=r.length-1;m++)(a=r[m].getAttribute("data-src"))&&(r[m].src=a);o.load()}o.getAttribute("data-poster")&&(o.poster=o.getAttribute("data-poster")),o.getAttribute("data-src")&&(o.src=o.getAttribute("data-src")),o.getAttribute("data-srcset")&&o.setAttribute("srcset",o.getAttribute("data-srcset"));var i=",";if(o.getAttribute("data-background-delimiter")&&(i=o.getAttribute("data-background-delimiter")),o.getAttribute("data-background-image"))o.style.backgroundImage="url('"+o.getAttribute("data-background-image").split(i).join("'),url('")+"')";else if(o.getAttribute("data-background-image-set")){var b=o.getAttribute("data-background-image-set").split(i),l=b[0].substr(0,b[0].indexOf(" "))||b[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===b.length?o.style.backgroundImage=l:o.setAttribute("style",(o.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+b+"); background-image: image-set("+b+")")}o.getAttribute("data-toggle-class")&&o.classList.toggle(o.getAttribute("data-toggle-class"))},loaded:function(){}};function t(e){e.setAttribute("data-loaded",!0)}var n=function(e){return"true"===e.getAttribute("data-loaded")},r=function(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:o.querySelectorAll(e)};return function(){var e,a,m=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},b=Object.assign({},o,i),l=b.root,d=b.rootMargin,s=b.threshold,c=b.load,g=b.loaded,p=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(p=new IntersectionObserver((e=c,a=g,function(o,r){o.forEach(function(o){(0<o.intersectionRatio||o.isIntersecting)&&(r.unobserve(o.target),n(o.target)||(e(o.target),t(o.target),a(o.target)))})}),{root:l,rootMargin:d,threshold:s}));for(var u,h=r(m,l),f=0;f<h.length;f++)(u=h[f]).getAttribute("data-placeholder-background")&&(u.style.background=u.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=r(m,l),o=0;o<e.length;o++)n(e[o])||(p?p.observe(e[o]):(c(e[o]),t(e[o]),g(e[o])))},triggerLoad:function(e){n(e)||(c(e),t(e),g(e))},observer:p}}}()},function(e,o,t){},,,function(e,o,t){"use strict";t.r(o);var n=t(0),r=t.n(n);const a=({marginTopBottom:e,marginBottomTop:o})=>{return{rootMargin:`${e}px 0px ${o}px 0px`,threshold:0}},m=e=>{const o=document.getElementById(e.id_elemento);o.style.marginLeft="",o.style.marginRight=""},i="GlobocomAdDebugMode",b={info:(...e)=>{console.info("[info]",...e)},warning:(...e)=>{console.warn("[Warn]",...e)},error:(...e)=>{console.error("[Error]",...e)}};let l=localStorage.getItem(i)||"Off";window.globocomToggleAdDebugMode=function(){l="On"===l?"Off":"On",localStorage.setItem(i,l),console.log("globocomAdDebugMode set to",l)};var d="On"==l?b:{info:()=>{},warning:()=>{},error:()=>{}};const s=e=>{return["function"==typeof window.bannerLazyLoading,(e=>"none"!==window.getComputedStyle(e).display)(e)].every(e=>e)},c=e=>{(window.googlefc=window.googlefc||{},window.googlefc.ccpa=window.googlefc.ccpa||{},window.googlefc.callbackQueue=window.googlefc.callbackQueue||[],new Promise((e,o)=>{googlefc.callbackQueue.push({AD_BLOCK_DATA_READY:()=>{adblockStatus===googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER||adblockStatus===googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER||adblockStatus===googlefc.AdBlockerStatusEnum.UNKNOWN?e():o()}})})).then(()=>{(e=>new Promise((o,t)=>{let n=0;const r=setInterval(()=>googletag.pubads().getSlots().find(o=>o.getSlotElementId()===e)?(clearInterval(r),void o()):++n>3?(clearInterval(r),void t()):void 0,1e3)}))(e).catch(()=>{const o=`Device: ${window.pages.SETTINGS.CHANNEL} Div Id: ${e}`;g(e,o,{extra:{bannerId:e,adblockStatus:3}})})}).catch(()=>{})};const g=(e,o,t)=>{if((e=>{const o=function(e){return e.substr(-1)in["1","2","3","4","5","6","7"]}(e),t="m"===e.substr(-1),n="t"===e.substr(-1);return!t&&(o||n)||t&&(!o||!n)})(e))return Raven.captureException(o,t)},p=(e,o,t)=>{(()=>{const e={once:!0};[m].map(o=>document.addEventListener("adserver-ad-rendered",o,e))})();const n=o=>{g(e.id,o,null)},r=t<=0?o.isControlBottomTop:o.isControlTopBottom;s(e)?(window.bannerLazyLoading(e.id,{targets:{mab:r},errorCallback:n}),d.info(`[pages-globocom-ad] Ad rendered: ${e.id}, MAB: [${r}] Y:[${t}]`)):d.info(`[pages-globocom-ad] Ad not rendered: ${e.id}, MAB: [${r}]`)},u=(e,o,t,n)=>{if(n.hasMab){const r=!e.isEmpty,a=document.querySelector(`.tag-manager-publicidade-${o}--vazio`);if(a&&a.length)return;r&&(d.info("[MAB Impression] OK: ",o),t&&t.increment(n))}},h=(e,o,t)=>{t.hasMab&&(d.info("[MAB Viewability] OK: ",e),o&&o.reward(t))},f={},v={},_=(e,o,t)=>{window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(()=>{window.googletag.pubads().addEventListener("impressionViewable",n=>{if(n.slot.getSlotElementId()!==e)return;if(!f[e])return;v[e]<=0?h(e,t.mabInstance,t):h(e,o.mabInstance,o)})}),window.googletag.cmd.push(()=>{window.googletag.pubads().addEventListener("slotRenderEnded",n=>{if(n.slot.getSlotElementId()!==e)return;if(f.hasOwnProperty(e)?f[e]&&(f[e]=!1):f[e]=!0,!f[e])return;v[e]<=0?u(n,e,t.mabInstance,t):u(n,e,o.mabInstance,o)})});const n=document.addEventListener("slotRequested",({detail:{divId:o,elYDistance:t}})=>{o===e&&(v[o]=t,document.removeEventListener("slotRequested",n))})},w=window.pages?window.pages.SETTINGS.ENV:"prod",y={banner_home1:{experimentName:{bottomTop:`home-globo:${w}:banner-home1:bottom-top:v2`},controlOffset:50},banner_home2:{experimentName:{topBottom:`home-globo:${w}:banner-home2:top-bottom:v2`,bottomTop:`home-globo:${w}:banner-home2:bottom-top:v2`},controlOffset:50},banner_home3:{experimentName:{topBottom:`home-globo:${w}:banner-home3:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home3:bottom-top:v3`},controlOffset:50},banner_home4:{experimentName:{topBottom:`home-globo:${w}:banner-home4:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home4:bottom-top:v3`},controlOffset:50},banner_home5:{experimentName:{topBottom:`home-globo:${w}:banner-home5:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home5:bottom-top:v3`},controlOffset:50},banner_home6:{experimentName:{topBottom:`home-globo:${w}:banner-home6:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home6:bottom-top:v3`},controlOffset:50}},A={banner_home1_t:{experimentName:{bottomTop:`home-globo:${w}:banner-home1-t:bottom-top:v2`},controlOffset:50},banner_home2_t:{experimentName:{topBottom:`home-globo:${w}:banner-home2-t:top-bottom:v2`,bottomTop:`home-globo:${w}:banner-home2-t:bottom-top:v2`},controlOffset:50},banner_home3_t:{experimentName:{topBottom:`home-globo:${w}:banner-home3-t:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home3-t:bottom-top:v3`},controlOffset:50},banner_home4_t:{experimentName:{topBottom:`home-globo:${w}:banner-home4-t:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home4-t:bottom-top:v3`},controlOffset:50},banner_home5_t:{experimentName:{topBottom:`home-globo:${w}:banner-home5-t:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home5-t:bottom-top:v3`},controlOffset:50},banner_home6_t:{experimentName:{topBottom:`home-globo:${w}:banner-home6-t:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home6-t:bottom-top:v3`},controlOffset:50},banner_home7_t:{experimentName:{topBottom:`home-globo:${w}:banner-home7-t:top-bottom:v3`,bottomTop:`home-globo:${w}:banner-home7-t:bottom-top:v3`},controlOffset:50}},B={...{banner_home1_m:{experimentName:{bottomTop:`home-globo:${w}:banner-home1-m:bottom-top:v2`},controlOffset:50},banner_home2_m:{experimentName:{topBottom:`home-globo:${w}:banner-home2-m:top-bottom:v2`,bottomTop:`home-globo:${w}:banner-home2-m:bottom-top:v2`},controlOffset:50},banner_home3_m:{experimentName:{topBottom:`home-globo:${w}:banner-home3-m:top-bottom:v4`,bottomTop:`home-globo:${w}:banner-home3-m:bottom-top:v4`},controlOffset:50},banner_home4_m:{experimentName:{topBottom:`home-globo:${w}:banner-home4-m:top-bottom:v4`,bottomTop:`home-globo:${w}:banner-home4-m:bottom-top:v4`},controlOffset:50},banner_home5_m:{experimentName:{topBottom:`home-globo:${w}:banner-home5-m:top-bottom:v4`,bottomTop:`home-globo:${w}:banner-home5-m:bottom-top:v4`},controlOffset:50},banner_home6_m:{experimentName:{topBottom:`home-globo:${w}:banner-home6-m:top-bottom:v4`,bottomTop:`home-globo:${w}:banner-home6-m:bottom-top:v4`},controlOffset:50},banner_home7_m:{experimentName:{topBottom:`home-globo:${w}:banner-home7-m:top-bottom:v4`,bottomTop:`home-globo:${w}:banner-home7-m:bottom-top:v4`},controlOffset:50},banner_home8_m:{experimentName:{topBottom:`home-globo:${w}:banner-home8-m:top-bottom:v4`,bottomTop:`home-globo:${w}:banner-home8-m:bottom-top:v4`},controlOffset:50},banner_home9_m:{experimentName:{topBottom:`home-globo:${w}:banner-home9-m:top-bottom:v4`,bottomTop:`home-globo:${w}:banner-home9-m:bottom-top:v4`},controlOffset:50},banner_home10_m:{experimentName:{topBottom:`home-globo:${w}:banner-home10-m:top-bottom:v4`,bottomTop:`home-globo:${w}:banner-home10-m:bottom-top:v4`},controlOffset:50}},...y,...A},$={isControlFlags:{isControlTopBottom:"0",isControlBottomTop:"0"},marginValues:{marginTopBottom:50,marginBottomTop:50}},E={qa:"https://a5dbecd426b9449da6d79658e6edc432@web.sentry.qa01.globoi.com/360",prod:"https://ad0007bcdb94452980c5d8f25e922115@web.sentry.globoi.com/777"},T=async(e,o)=>{let t=o,n={};if(!e)return{...n,marginValue:t,hasMab:!1};try{const{mab:o,properties:n}=await(e=>{const o=window.pages?window.pages.SETTINGS.ENV:"prod";if("function"!=typeof window.globalWebdeps)throw"GlobalWebDeps não encontrado";return new Promise((t,n)=>{window.globalWebdeps("globo-ab").then(()=>{const r=new GloboAB(o);r.options().skipImpression();const a=r.mab();a.choose(e).then(e=>{const{experiment:o,arm:n,testId:r,abAlternative:m}=e;t({mab:a,properties:{experiment:o,arm:n,testId:r,abAlternative:m}})}).catch(e=>n(e))})})})(e);return t=n.arm,d.info("[MAB arm] ",t+"px",e),{...n,marginValue:t,hasMab:!0,mabInstance:o}}catch(o){d.error("[MAB Error] returning default offset for",e,o)}return{...n,marginValue:t,hasMab:!1}},x=async(e,o=!0)=>{if(o&&s(e)){const o=e.id;return await(async e=>{const{controlOffset:o,experimentName:t}=B[e]||{};if(t){const n=await T(t.topBottom,o),r=await T(t.bottomTop,o);return window.libPubReady?_(e,n,r):document.addEventListener("libPubReady",()=>_(e,n,r)),{isControlFlags:{isControlTopBottom:n.marginValue==o?"0":"1",isControlBottomTop:r.marginValue==o?"0":"1"},marginValues:{marginTopBottom:n.marginValue,marginBottomTop:r.marginValue}}}return $})(o)}return $},O=({adBannerConfig:e={},size:o=[],isEmpty:t=!1})=>{const n=document.getElementById(e.name),r=n.parentElement;if(t&&r)return r.style.setProperty("display","none");if(n&&e&&r){const{hasMultipleSize:t,device:a}=e,m=(e=>{const o=window.getComputedStyle(e).minHeight;return Number(o.replace("px",""))})(r),i=o?o[1]:m;if(n.classList.remove("banner-ad-skeleton-box"),t&&i!==m&&!((e,o)=>e.forgotRuleEnabled&&(e=>(e.getBoundingClientRect()||{}).bottom<=0)(o))(e,n)&&0!==i)return e.height=i,r.style.setProperty("min-height",`${e.height}px`)}},N={forgotRuleEnabled:!1,hasMultipleSize:!0},I={banner_home1:{...N,name:"banner_home1",device:"desktop"},banner_home2:{...N,name:"banner_home2",device:"desktop"},banner_home3:{...N,name:"banner_home3",device:"desktop"},banner_home4:{...N,name:"banner_home4",device:"desktop"},banner_home5:{...N,name:"banner_home5",device:"desktop"},banner_home6:{...N,name:"banner_home6",device:"desktop"}},k={banner_home1_m:{...N,name:"banner_home1_m",device:"smart"},banner_home2_m:{...N,name:"banner_home2_m",device:"smart"},banner_home3_m:{...N,name:"banner_home3_m",device:"smart"},banner_home4_m:{...N,name:"banner_home4_m",device:"smart"},banner_home5_m:{...N,name:"banner_home5_m",device:"smart"},banner_home6_m:{...N,name:"banner_home6_m",device:"smart"},banner_home7_m:{...N,name:"banner_home7_m",device:"smart"},banner_home8_m:{...N,name:"banner_home8_m",device:"smart"},banner_home9_m:{...N,name:"banner_home9_m",device:"smart"},banner_home10_m:{...N,name:"banner_home10_m",device:"smart"}},S={banner_home1_t:{...N,name:"banner_home1_t",device:"tablet"},banner_home2_t:{...N,name:"banner_home2_t",device:"tablet"},banner_home3_t:{...N,name:"banner_home3_t",device:"tablet"},banner_home4_t:{...N,name:"banner_home4_t",device:"tablet"},banner_home5_t:{...N,name:"banner_home5_t",device:"tablet"},banner_home6_t:{...N,name:"banner_home6_t",device:"tablet"},banner_home7_t:{...N,name:"banner_home7_t",device:"tablet"}},L={...I,...k,...S};t(1);window.globalWebdeps("raven").then(e=>{Raven.config(E[w],{collectWindowErrors:!1});const o=Raven.getContext(),{width:t,height:n}=window.screen,r=Object.assign({},o,{tags:{"device.width":t,"device.height":n}});Raven.setTagsContext(r)}),window.renderAdvertising=(async e=>{const o=window.cdaaas.SETTINGS.MAB_ACTIVE,t=document.getElementById(e);let n=await x(t,o),m=a(n.marginValues);const i=s(t),b=()=>{r()(t,{...m,loaded:async r=>{const b=r.getBoundingClientRect().y;i||(n=await x(t,o),m=a(n.marginValues)),window.googletag.cmd.push(((e,o)=>{e&&document.addEventListener("adserver-ad-rendered",t=>{const{id_elemento:n,evento_original:r}=t;if(n!==o)return;const a=e[o];a&&O({adBannerConfig:a,size:r.size,isEmpty:r.isEmpty})})})(L,e),((e,o,t)=>()=>p(e,o,t))(t,n.isControlFlags,b),c(e));const l=new CustomEvent("slotRequested",{detail:{divId:e,elYDistance:b}});document.dispatchEvent(l)}}).observe()};window.libPubReady?b():document.addEventListener("libPubReady",b)})}])});
//]]>