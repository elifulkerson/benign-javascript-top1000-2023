window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
	'gtm.start': Date.now(),
	'event' : 'gtm.js',
	'AnalyticsActiveGroups' : ",1,2,3,4,",
	'policy_ga_only' : false,
});
var firstScript = document.getElementsByTagName('script')[0];
var thisScript = document.createElement('script');
thisScript.async = true;
thisScript.src = '//www.googletagmanager.com/gtm.js?id=GTM-KH2LPK';
firstScript.parentNode.insertBefore(thisScript, firstScript);