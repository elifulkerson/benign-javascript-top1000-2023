function loadAdSlot(){
		var gptAdSlots = [];
		if(typeof googletag !== "undefined"){
			googletag.cmd.push(function () {
				var mapping = googletag.sizeMapping().
				addSize([4000, 0], [[728, 90], [970, 90], [970, 250]]).
				addSize([3000, 0], [[728, 90], [970, 90], [970, 250]]).
				addSize([2000, 0], [[728, 90], [970, 90], [970, 250]]).
				addSize([1000, 0], [[728, 90], [970, 90], [970, 250]]).
				addSize([750, 0], [728, 90]).
				addSize([700, 0], [[300, 250],[336, 280]]).
				addSize([530, 0], [[300, 250],[336, 280]]).
				addSize([336, 0], [[300, 250],[336, 280]]).
				addSize([320, 0], [300, 250]).
				addSize([0, 0], [300, 250]).build();
				var mapping1 = googletag.sizeMapping().
                addSize([700, 0], [300, 250]).
				addSize([530, 0], [300, 250]).
				addSize([430, 0], [300, 250]).
				addSize([320, 0], [300, 250]).
				addSize([0, 0], [300, 250]).build();
				if(itViewPort=='mobile') {
				 googletag.defineSlot('/1007232/IT_HP_Mobile_ATF_300x250', [[250,250],[336,280],[300,250]], 'div-gpt-ad-1663137470573-0').defineSizeMapping(mapping1).addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Mobile_MTF_1_300x250', [[336,280],[250,250],[300,250]], 'div-gpt-ad-1663658451611-0').defineSizeMapping(mapping1).addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Mobile_MTF_2_300x250', [[336,280],[250,250],[300,250]], 'div-gpt-ad-1663658494297-0').defineSizeMapping(mapping1).addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Mobile_MTF_3_300x250', [[250,250],[336,280],[300,250]], 'div-gpt-ad-1663658532994-0').defineSizeMapping(mapping).addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Mobile_MTF_4_300x250', [[250,250],[336,280],[300,250]], 'div-gpt-ad-1663589936774-0').defineSizeMapping(mapping).addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Mobile_MTF_5_300x250', [[250,250],[300,250],[336,280]], 'div-gpt-ad-1663569524607-0').defineSizeMapping(mapping1).addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Mobile_BTF_300x250', [[250,250],[300,250],[336,280]], 'div-gpt-ad-1663138229275-0').defineSizeMapping(mapping1).addService(googletag.pubads());

			     } else{
			     googletag.defineSlot('/1007232/IT_HP_Desktop_ATF_728x90', [[970,90],[970,250],[728,90]], 'div-gpt-ad-1663134262918-0').addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Desktop_ATF_300x250', [300,250], 'div-gpt-ad-1663134379794-0').addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Desktop_MTF_1_300x250', [[300,600],[300,250]], 'div-gpt-ad-1663656678574-0').addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Desktop_BTF_728x90', [728,90], 'div-gpt-ad-1663134504173-0').addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Desktop_MTF_1_728x90', [728,90], 'div-gpt-ad-1663134593929-0').addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Desktop_MTF_2_728x90', [728,90], 'div-gpt-ad-1663134643515-0').addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Desktop_MTF_3_728x90', [[728,90],[300,250]], 'div-gpt-ad-1663589591188-0').addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Desktop_MTF_4_728x90', [[728,90],[300,250]], 'div-gpt-ad-1663589781753-0').addService(googletag.pubads());
googletag.defineSlot('/1007232/IT_HP_Desktop_MTF_5_728x90', [728,90], 'div-gpt-ad-1663569390387-0').addService(googletag.pubads());

		     	}
				googletag.pubads().setTargeting('category', ['IndiaTodayLatest News, Breaking News Today - Bollywood, Cricket, Business, Politics - IndiaToday | IndiaToday', 'IndiaTodayLatest News, Breaking News Today - Bollywood, Cricket, Business, Politics - IndiaToday | IndiaTodayhome']);googletag.pubads().setTargeting('keywords', ["Latest News"," Bollywood News"," India News"," World News Today"," News Headlines"," Breaking News Headlines"," News Today"]);
				if(adcookie_gdpr==0){googletag.pubads().setRequestNonPersonalizedAds(1);}
				if(getCookie_ppid("sp_itgd") !== undefined){googletag.pubads().setPublisherProvidedId(getCookie_ppid("sp_itgd"));}
				googletag.pubads().enableSingleRequest();
				googletag.pubads().disableInitialLoad();
				googletag.pubads().collapseEmptyDivs();
				googletag.enableServices();
				// OpenWrap code START here	
				requestBids()
				
			});
		}
	}