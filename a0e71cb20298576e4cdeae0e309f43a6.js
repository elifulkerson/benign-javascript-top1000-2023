
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var footer_leaderboard_size = $(window).width() >= 1000 ? [970, 90] : [728, 90];
var gptAdSlots = [];
var adsNum = 0;

googletag.cmd.push(function() {
    googletag.pubads().enableSingleRequest();
    // Disable initial load.
    googletag.pubads().disableInitialLoad();
    // Start ad fetching
    googletag.enableServices();
    googletag.pubads().collapseEmptyDivs();
});

var adsTypeCounter = {
	'div_desktop_leaderboard': {
		name: 'div_desktop_leaderboard_',
		counter: 0
	},
	'div_mrec': {
		name: 'div_mrec_',
		counter: 0
	},
	'div_mobile_leaderboard': {
		name: 'div_mobile_leaderboard_',
		counter: 0
	},
	'div_desktop_footer': {
		name: 'div_desktop_footer_',
		counter: 0,
	},
	getDivId: function(prefix) {
		var self = adsTypeCounter;
		if ( typeof self[prefix] !== 'undefined' ) {
			self[prefix].counter = self[prefix].counter + 1;
			return self[prefix].name + self[prefix].counter.toString();
		} else {
			return false;
		}
	},
};

function loadAdDivId($placeholder, type, adsNum) {
    var newId = false;
    var isMobileAds = false;

    if ( typeof isMobileBrowser !== 'undefined' && typeof isMobileBrowser.any === 'function' ) {
		isMobileAds = Array.isArray(isMobileBrowser.any());
	}

    switch (type) {
        case 'PORTAL_Home_Leaderboard_1':
            newId = adsTypeCounter.getDivId('div_desktop_leaderboard');
        break;

        case 'PORTAL_Home_MobileLeaderboard_1':
            newId = adsTypeCounter.getDivId('div_mobile_leaderboard');
        break;

        case 'PORTAL_Home_Mrec_1':
            newId = adsTypeCounter.getDivId('div_mrec');
        break;       

        case 'PORTAL_Home_Billboard_Footer':
            if (isMobileAds) {
                newId = adsTypeCounter.getDivId('div_mobile_leaderboard');
            } else {
                newId = adsTypeCounter.getDivId('div_desktop_footer');
            }
        break;
    }

    if ( newId === false ) {
		newId = 'ads_' + adsNum;
	}

    return newId;
}

function loadAd($placeholder, type, size, keywords) {
    googletag.cmd.push(function() {
        adsNum++;

        var old_id_id = 'ads_' + adsNum; //OLD ADS_ID
        var ad_id = loadAdDivId($placeholder, type, adsNum);
        
        $placeholder.append('<div id="' + ad_id + '" class="dfp_ad"></div>');

        if (typeof keywords !== "undefined" && keywords.length != 0) {
            gptAdSlots[adsNum - 1] = googletag.defineSlot("/344684475/" + type, size, ad_id).addService(googletag.pubads()).setTargeting("keyword", keywords);
        } else {
            gptAdSlots[adsNum - 1] = googletag.defineSlot("/344684475/" + type, size, ad_id).addService(googletag.pubads());
        }
        
        if( typeof MoatYieldIntelligence !== "undefined" ) {
            MoatYieldIntelligence.dfpAdsDisplayCallback.push(function () {
                googletag.display(ad_id);
            }); 

            MoatYieldIntelligence.render();
        } else {
            googletag.display(ad_id);
        }

        googletag.pubads().refresh([gptAdSlots[adsNum - 1]]);
    }); 
}