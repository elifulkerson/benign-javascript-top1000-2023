var config = {
		useDefaultContentName: true,
		useShortNameForContentBlob: false,
		autoCapture: {
			pageView: true,
			onLoad: true,
			onUnload: true,
			lineage: true,
			click: true,
			scroll: true,
			resize: false,
			lineage: true,
			jsError: true,
			addin: true,
			perf: true
		},
		urlCollectHash: true,
		urlCollectQuery: true,
		instrumentationKey: "f194a55d6cb942d9b0e5b604e01b609b-8c663a24-3636-4cc5-a2bf-267a92b4ee4f-7662",
		coreData: {
			appId: "VSCOM",
			market: adobePageMarket
		},
		callback: {
			pageName: function(){return document.title}
		}
	};
	awa.init(config);
	//tracking the search button expand click
	// 1DS not tracking the click on html button element even after tagging data-bi attribute
	document.addEventListener("DOMContentLoaded", function(event) {
    const element = document.getElementById('search')
	if(element) {
		element.addEventListener("click", () => {
			var overrideValues = {
				behavior: awa.behavior.SEARCHINITIATE,
				actionType: "CL",
				contentTags: {
					areaName: 'Search_nav',
					id: 'Nav Search Bar Open '
				}
			};
			if (typeof awa === "object" && typeof awa.ct === "object") {
				awa.ct.captureContentPageAction(overrideValues);
			}
		});
	}
});