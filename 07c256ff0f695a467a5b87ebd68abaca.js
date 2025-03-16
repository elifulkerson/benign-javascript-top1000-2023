(function(){
function loadGTM(gtmCode){
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', gtmCode);
}
// Can't be in asset loader until we can call custom loader functions
;(window.Promise
? Promise.all([
window.reliablePageLoad,
window.reliableConsentGiven
])
: window.reliableConsentGiven
).then(function(){
setTimeout(
function(){
window.vanilla.featureFlags.gtm.sitespecific && loadGTM('GTM-KQ7DP6')
window.vanilla.featureFlags.gtm.vanilla && loadGTM('GTM-KHCPGDF')
}, 1500);
});
})();