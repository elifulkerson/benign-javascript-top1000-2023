$CQ(function() {
        
    

    if (window.CQ_Analytics && CQ_Analytics.SegmentMgr) {
	CQ_Analytics.SegmentMgr.areSegmentsLoaded = true;
	CQ_Analytics.SegmentMgr.fireEvent('segmentsload');
}


    if ( CQ_Analytics && CQ_Analytics.CampaignMgr ) {
        var campaigns = [];
        CQ_Analytics.CampaignMgr.addInitProperty('campaigns', campaigns);
        CQ_Analytics.CampaignMgr.init();
    }
    

CQ_Analytics.SFDCSegmentUtils.init();
CQ_Analytics.kruxStore.init();


CQ_Analytics.SFDCSegmentUtils.init();
CQ_Analytics.DemandbaseStore.init();


    if( CQ_Analytics && CQ_Analytics.PageDataMgr) {
    CQ_Analytics.PageDataMgr.loadInitProperties({
  "hits": 0,
  "title": "Overview",
  "path": "/content/www/en_us/home/products/platform/overview",
  "navTitle": "Overview",
  "tags": "Awareness IT Salesforce Platform ",
  "description": "Go digital fast and empower your teams to work from anywhere. Develop scalable, custom business apps with low-code development or give your teams the tools to build with services and APIs.",
  "sitesection": "en_us",
  "subsection": "home",
  "random": "0.93"
}, true);
}



        CQ_Analytics.Utils.isOptimizedCC = true;
        CQ_Analytics.ClientContextMgr.PATH = "\/etc\/clientcontext\/sfdc\u002Dwww";
        CQ_Analytics.ClientContextMgr.loadConfig({"initializationEventTimer": 10}, true);

        
    });