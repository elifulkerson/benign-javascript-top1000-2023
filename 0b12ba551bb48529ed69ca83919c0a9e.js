var googletag = googletag || {};
	googletag.cmd = googletag.cmd || [];
	googletag.cmd.push(function () {
	if (googletag.pubads().getTargeting('carbon_segment').length === 0) {
	var carbon = JSON.parse(window.localStorage.getItem('ccRealtimeData'));
	googletag.pubads().setTargeting('carbon_segment', carbon ? carbon.audiences.map(function (i) { return i.id; }) : []);
	}
	if (googletag.pubads().getTargeting('cc-iab-class-id').length === 0) {
	var iabIds = JSON.parse(window.localStorage.getItem('ccContextualData'));
	googletag.pubads().setTargeting('cc-iab-class-id', iabIds);
	}
	})