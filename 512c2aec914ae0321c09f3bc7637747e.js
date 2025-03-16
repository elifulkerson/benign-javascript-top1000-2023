var onesignalConfig = {
"appId" : "5d17643d-5591-493f-aa87-48525dadcf1e"
};
window.reliablePageLoad.then(function(){
window.vanilla.featureFlags.onesignal.enabled && window.vanilla.addScript("https://cdn.onesignal.com/sdks/OneSignalSDK.js", 'onesignal', true);
})