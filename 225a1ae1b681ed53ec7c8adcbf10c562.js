var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
googletag.pubads().disableInitialLoad();
googletag.pubads().enableSingleRequest();
googletag.pubads().setPrivacySettings({
'restrictDataProcessing': false
});
googletag.enableServices();
});