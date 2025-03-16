var onesignalConfig = {
"appId" : "bf7c1147-c214-44f3-b909-620c0ec86b97"
};
window.reliablePageLoad.then(function(){
window.vanilla.featureFlags.onesignal.enabled && window.vanilla.addScript("https://cdn.onesignal.com/sdks/OneSignalSDK.js", 'onesignal', true);
})