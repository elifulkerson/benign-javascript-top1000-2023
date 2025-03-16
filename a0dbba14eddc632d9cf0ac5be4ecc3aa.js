window._sp_queue = [];
window._sp_ = {
config: {
accountId: 200,
baseEndpoint: 'https://cdn.privacy-mgmt.com',
ccpa: {},
gdpr: {},
events: {
onMessageChoiceSelect: function() {},
onMessageReady: function() {},
onMessageChoiceError: function() {},
onPrivacyManagerAction: function() {},
onPMCancel: function() {},
onMessageReceiveData: function() {},
onSPPMObjectReady: function() {},
onConsentReady: function (consentUUID, euconsent) {},
onError: function() {
console.log('[event] onError', arguments);
},
}
}
}