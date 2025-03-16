window.ccpaAppliesPromise = new Promise(function(resolve){
if (typeof window.__tcfapi === 'function') {
try {
window.__tcfapi('getTCData', 2, function() {
if (typeof window.__uspapi === 'function') {
window.__uspapi('getUSPData', 1, function(uspData, _success) {
var ccpaApplies = JSON.stringify(uspData).indexOf("---")===-1 ? true : false;
resolve(ccpaApplies);
})
}
});
} catch (err) {}
}
}); document.addEventListener('DOMContentLoaded', function(){
var footer = document.querySelector('#document-footer-content > nav > ul')
if (!footer|| window.vanXCountryCodeReal !==('US')) {
return
}
var anchor = document.createElement('a')
var regionPrefix = window.ffte.regionLink ? '/' + window.ffte.regionLink : ''
anchor.href = regionPrefix + '/privacy-portal'
anchor.textContent = 'Do not sell or share my personal information'
var listItem = document.createElement('li');
if (document.querySelector('.footer__nav .footer__list')) {
anchor.className = 'link footer__links'
listItem.className = 'footer__list-item'
}
listItem.appendChild(anchor)
footer.appendChild(listItem)
// Some styles to hide 2 links in the modal we don't want
var style = document.createElement('style');
style.innerText = '#qc-usp-delete-link, #qc-usp-access-link { display: none; }' +
'#qc-usp-policy-link {border-left: none;}';
document.head.appendChild(style);
}, false);
window.reliableConsentGiven = new Promise(function(resolve) {
if (typeof window.__tcfapi === 'function') {
window.__tcfapi('addEventListener', 2, function(data, success) {
if (
success &&
(data.eventStatus === 'tcloaded' || data.eventStatus === 'useractioncomplete')
) {
resolve({ consent: data });
}
});
}
}); document.addEventListener('DOMContentLoaded', function() {
if (reliableConsentGiven) {
reliableConsentGiven
.then(function(consentResponse) {
if(consentResponse.consent && consentResponse.consent.gdprApplies) {
window.reliablePageLoad.then(function() {
var footerNav = window.document.querySelector('#document-footer-content > nav > ul') || window.document.querySelector('ul.footer__list');
if(footerNav){
var reconsentLink = window.document.createElement('a');
reconsentLink.className = 'link footer__links';
reconsentLink.addEventListener('click', function() {
if (window.__tcfapi && window._sp_) {
var cmpConfigId = '757880';
if(typeof window.vanilla.featureFlags.sourcepoint !== 'undefined'){
cmpConfigId = window.vanilla.featureFlags.sourcepoint.cmpConfigId ?? cmpConfigId;
}
window._sp_.gdpr.loadPrivacyManagerModal(cmpConfigId);
}
});
reconsentLink.href = '#';
reconsentLink.textContent = window.__translator ? window.__translator.trans('cmp_footer_link') : 'GDPR consent';
var reconsentEntry = window.document.createElement('li');
reconsentEntry.classList.add('footer__list-item');
reconsentEntry.appendChild(reconsentLink);
footerNav && footerNav.appendChild(reconsentEntry);
}
});
}
});
}
}, false);
!function(){"use strict";const r=(r,e)=>null==e?r:e,e=r=>[].concat(r)[0],a=r=>{return"object"!=typeof(e=r)||Array.isArray(e)||null===e?{}:r;var e},t="",o="",c="",s=!1,i=0,n="",y=[],u="",p=[],d="",g=[],m="",P=[],l=[],f={primaryProduct:"",secondaryProducts:[],companies:[],groups:[],category:""},w=r=>r.replace(/[#*()+\-='",<>\{\}\[\]\\\/]/gi,"").replace(/[_-]/g," ");window.FEPProcess=w=>(({articleName:a,articleType:w,strategy:C,nullified:h,timestamp:O,adTags:b={},hawkTags:j={}})=>{const A={articleName:r(t,a),articleType:r(o,w),strategy:r(c,C),nullified:r(s,h),timestamp:r(i,O)};return b&&Object.assign(A,{primaryProduct:r(d,b.primaryProduct),secondaryProducts:r(g,b.secondaryProducts),category:r(n,e(b.category)),groups:r(y,b.groups),primaryCompany:r(u,b.primaryCompany),companies:r(p,b.companies),primaryCategory:r(m,e(b.primaryCategory)),secondaryCategories:r(P,b.secondaryCategories),tertiaryCategories:r(l,b.thirdCategories)}),j&&Object.assign(A,{hawk:{primaryProduct:r(f.primaryProduct,j.primaryProduct),secondaryProducts:r(f.secondaryProducts,j.secondaryProducts),companies:r(f.companies,j.companies),groups:r(f.groups,j.groups),category:r(f.category,e(j.category))}}),A.kwMunge=[A.primaryProduct,A.secondaryProducts,A.companies,A.category].reduce(((r,e)=>r.concat(e)),[]).filter(((r,e,a)=>void 0!==r&&""!==r&&a.indexOf(r)===e)),A})(a((r=>{if(Array.isArray(r)){const[e={}]=r;return e}return r})(w))),window.FEPSanitise=r=>Object.keys(r).reduce(((e,a)=>{const t=function(r){if(Array.isArray(r)){const e=[];return Object.keys(r).forEach((a=>{r.hasOwnProperty(a)&&e.push(w(r[a]))})),e}return r instanceof Object?r:w(r)}(r[a]);return t.length>0&&(e[a]=t),e}),{})}(); !function(){"use strict";var e=window,n=e.document,t=e.performance,o=e.Promise,i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return e.apply(void 0,n)}},a=function(){return t&&t.now&&t.now()||0},r=a();performance.mark("DOMPromises - Initialising"),e.resolveFEP=null,e.processFEP=o?new o((function(n){e.resolveFEP=n})):{then:function(e){}};var u=!(window.location.href.indexOf("disable_dom_promise_timeouts")>-1),d=!1,c=[],l=function(e){d||(d=!0,c.forEach(i(e)))};u&&setTimeout((function(){return l({timeStamp:a()})}),5e3),n.addEventListener("DOMContentLoaded",l),e.reliableDOMContentLoaded=o?new o((function(e){u&&setTimeout((function(){return e({timeStamp:a()})}),5e3),n.addEventListener("DOMContentLoaded",e)})):{then:function(e){d?e():c.push(e)}},e.reliableDOMContentLoaded.then((function(e){var n=e.timeStamp;console.log("DOMContentLoaded at",n-r|0)}));var f=!1,m=[],s=function(e){f||(f=!0,m.forEach(i(e)))};u&&setTimeout((function(){return s({timeStamp:a()})}),7e3),e.addEventListener("load",s),e.reliablePageLoad=o?new o((function(n){u&&setTimeout((function(){return n({timeStamp:a()})}),7e3),e.addEventListener("load",n)})):{then:function(n){return f?n():m.push(n),e.reliablePageLoad},catch:function(){return e.reliablePageLoad}},e.reliablePageLoad.then((function(e){var n=e.timeStamp;console.log("PageLoad at",n-r|0)}))}();