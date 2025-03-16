(function () {
    var script = document.createElement('script');
    script.async = 1;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4P31SJ70EJ';
    var referenceNode = document.getElementsByTagName('script')[0];
    referenceNode.parentNode.insertBefore(script, referenceNode);
})();
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
var additionalConfig = {"anonymize_ip":true,"dimension1":"n\/a","dimension3":"Logged out","dimension4":"not lite-page","dimension6":"n\/a","dimension7":"n\/a","dimension8":"n\/a","dimension9":"n\/a"};
additionalConfig["dimension19"] = (typeof requestCachedConfig!==typeof undefined&&requestCachedConfig.isCachedPage===true) ? "cache" : "no cache";
gtag('config', 'G-4P31SJ70EJ', additionalConfig);