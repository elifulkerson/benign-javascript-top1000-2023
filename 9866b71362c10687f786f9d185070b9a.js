var PREBID_TIMEOUT = 1250;
var infinity_ad_count = infinity_ad_count || 0;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var ads = [];
var ntd_no_ads = ntd_no_ads || false;

var ntd_storage_prefer = localStorage.getItem("ntd_storage_prefer");

if ((ntd_storage_prefer == null || ntd_storage_prefer.indexOf('ntd-advertisment-storage') <= 0) && (typeof(ntd_language_active) != "undefined" && ('ntd_italian' == ntd_language_active || 'ntd_portuguese' == ntd_language_active ))) {		
	ntd_no_ads = true;
}

var ads_term_ids = [];
if (typeof ntd_ads_term_ids === 'string') {
	ads_term_ids = ntd_ads_term_ids.split(",");
} 
if (!ntd_no_ads){
(function() {
	var gads = document.createElement('script');
	gads.async = true;
	gads.type = 'text/javascript';
	var useSSL = 'https:' === document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') +
		'//securepubads.g.doubleclick.net/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
})();

function getRootDomain(hostname) {
	if(hostname) {
		var temp = hostname.split('.').reverse();
		var root_domain = temp[1] + '.' + temp[0];
		return root_domain;
	} else {
		return null;
	}
}

googletag.cmd.push(function() {
	if (ads_term_ids.length > 0) {
		googletag.pubads().setTargeting("ENTD_category", ads_term_ids);
	}

	var hostname = window.location.hostname;
	if(hostname) {
		var domains = [];
		domains.push(hostname);

		var root_domain = getRootDomain(hostname);

		domains.push(root_domain);
		googletag.pubads().setTargeting("site", domains);
	}
});

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
pbjs.adUnitCount = pbjs.adUnitCount || 0;

(function() {
	if ( !pbjs.prebid_loaded && typeof pbjs.processQueue === "undefined" && !document.getElementById("prebid-js") ) {
		pbjs.prebid_loaded = true;

		var pbjsEl = document.createElement("script");
		pbjsEl.id = "prebid-js";
		pbjsEl.type = "text/javascript";
		pbjsEl.async = true;
		pbjsEl.src = "/assets/themes/m-ntd/js/ads/prebid.js";
		var pbjsTargetEl = document.getElementsByTagName("head")[0];
		pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
	}
})();

googletag.cmd.push(function() {
	googletag.pubads().enableSingleRequest();
	googletag.pubads().collapseEmptyDivs();
	googletag.pubads().disableInitialLoad();
	googletag.enableServices();
});

var display_ads = function (slots) {
	var pbjs_response = false;
	$(slots).each(function(index, item) {
		var default_size = item['default_size'] || '300x250';

		if ($('#' + item['slot']).length > 0) {
			var adUnits = [
				{
					code: item['slot'],
					mediaTypes: {
						banner: {
							sizes: item['sizes']
						}
					},
					bids: ednBidders(default_size, item['ad_unit'], item['slot'])
				}
			];

			var ad_slot;

			googletag.cmd.push(function () {
				ad_slot = googletag.defineSlot(item['ad_unit'], item['sizes'], item['slot']).addService(googletag.pubads());
			});

			var initAdserver = function() {
				if (pbjs_response) return;
				pbjs_response = true;

				if (item.lazyLoad) {
					add_lazy_load_section('#' + item['slot'], function () {
						googletag.cmd.push(function() {
							pbjs.que.push(function() {
								pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
								googletag.pubads().refresh([ad_slot], {changeCorrelator: false});
							});
						});
					});
				} else {
					googletag.cmd.push(function() {
						pbjs.que.push(function() {
							pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
							googletag.pubads().refresh([ad_slot], {changeCorrelator: false});
						});
					});
				}

			};

			pbjs.que.push(function () {
				pbjs.addAdUnits(adUnits);
				pbjs.adUnitCount = pbjs.adUnitCount + adUnits.length;

				var sendBids = function () {
					pbjs.requestBids({
						timeout: PREBID_TIMEOUT,
						adUnitCodes: [item['slot']],
						bidsBackHandler: function () {
							initAdserver();
						}
					});

					setTimeout(initAdserver, PREBID_TIMEOUT);
				};


				if (item.lazyLoad && pbjs.adUnitCount > 3) {
					add_lazy_load_section('#' + item['slot'], function () {
						sendBids();
					}, 800);
				} else {
					sendBids();
				}

			});
		}
	})
};

(function() {
	var $ = jQuery;
	if ($('body.home').length > 0) {
		if (typeof(ntd_language_active) !== "undefined" && ntd_language_active  === 'ntd_japan') {
			$('body.home .top_part_news .top_one').before(get_ads_wrapper('ad_frontpage_top_728', 'margin: 15px auto 30px auto;'));
		} else {
			$('body.home .news_wrap').before(get_ads_wrapper('ad_frontpage_top_728', 'margin: 15px auto 30px auto;'));
		}
	}

	if ($('body.single').length > 0) {
		if (!$('body.single').hasClass('ntd_korea') && !$('body.single').hasClass('ntd_japan') && !$('body.single').hasClass('ntd_spanish') && $("div.editor_choice").length > 0 ) {
			$("div.editor_choice").eq(0).after(get_ads_wrapper('outbrain-below-article-thumbnails'));
		}

		if ($('body.single').hasClass('ntd_spanish') && $("div.related_article").length > 0 ) {
			$("div.related_article").eq(0).after(get_ads_wrapper('outbrain-below-article-thumbnails'));
		}

		if (!ntd_no_ads && $('.single-post .article_body .post_content').length > 0) {
			//article page
			if (typeof(ntd_language_active) !== 'undefined') {
				if (ntd_language_active  === 'ntd_italian') {
					var ads = document.createElement('script');
					ads.async = true;
					ads.type = 'text/javascript';
					ads.src = '//optimized-by.4wnetwork.com/js/sdk.min.js';
					var node = document.getElementsByTagName('script')[0];
					node.parentNode.insertBefore(ads, node);

					if ($('#sidebar_ads_right_top_300_1').length > 0) {
						$('#sidebar_ads_right_top_300_1').append('<script type="text/javascript" id="4w_234688_37959513">' +
							'var obj_4w = obj_4w || [];' +
							'obj_4w.push({"cid":"4w_234688_37959513", "ic":"234688;110686;80180;0","dim":{"width":"300px", "height":"600px"} });</script>');
					}
				} else if (ntd_language_active  === 'ntd_korea') {
					var ads = document.createElement('script');
					ads.async = true;
					ads.type = 'text/javascript';
					ads.src = "//www.mediacategory.com/servlet/adBannerFloating?from="+escape(document.referrer)+"&s=517246&igb=74&iwh=300_250&fType=3&align=right&types=video";
					var node = document.getElementsByTagName('script')[0];
					node.parentNode.insertBefore(ads, node);

					var ads2 = document.createElement('script');
					ads2.async = true;
					ads2.type = 'text/javascript';
					ads2.src = "//www.mediacategory.com/servlet/iadbn?from="+escape(document.referrer)+"&s=517242&psb=99";
					node.parentNode.insertBefore(ads2, node);
				}
			}

			var pre_artbody = "body.single-post .article_body .post_content";
			var art_p = pre_artbody + " p:not(:empty), " + pre_artbody + " figure";
			var p_length = $(art_p).length;
			var step = 4;
			var p_start = (typeof(ntd_language_active) !== "undefined" && ntd_language_active  === 'ntd_italian') ? 4 : 0;

			for (var i = p_start; i < p_length; i = i + step) {
				$(art_p).eq(i).after(get_ads_wrapper('ad_article_inside_336_' + infinity_ad_count));
				infinity_ad_count++;
			}

			//$(pre_artbody).after('<div id="ntd_tv_1x1"></div>');
		}
	}
})();

pbjs.que.push(function() {
	var customBannerPriceGranularity = {
		"buckets": [
			{ "precision": 2, "min": 0, "max": 5, "increment": 0.01 },
			{ "precision": 2, "min": 5, "max": 10, "increment": 0.05 },
			{ "precision": 2, "min": 10, "max": 20, "increment": 0.10 },
			{ "precision": 2, "min": 20, "max": 30, "increment": 0.50 },
			{ "precision": 2, "min": 30, "max": 40, "increment": 1.00 }
		]
	};

	var customVideoPriceGranularity = {
		"buckets": [
			{
				"precision": 2, //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
				"min": 0,
				"max": 40,
				"increment": 0.50
			}
		]
	};

	if(!pbjs.initialized) {
		pbjs.initialized = true;

		pbjs.setConfig({
			cache: {url: 'https://prebid.adnxs.com/pbc/v1/cache'},
			bidderTimeout: PREBID_TIMEOUT,
			userSync: {
				iframeEnabled: true,
				filterSettings: {
					iframe: {
						bidders: ['pubmatic', 'appnexus', 'sonobi', 'districtmDMX', 'openx', 'aol', 'conversant'],
						filter: 'include'
					},
				},
				syncsPerBidder: 0,
				syncDelay: 2000
			},
			/*s2sConfig: {
				endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
				syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
				accountId : 'da48d533-4e7c-4cf2-b5a4-647479e7c5ed',
				enabled : true,
				bidders : [
					'appnexus'
				],
				timeout : 1000,
				adapter : 'prebidServer'
			},*/
			'mediaTypePriceGranularity': {
				'banner': customBannerPriceGranularity,
				'video': customVideoPriceGranularity
			}
		});
	}

	var billboard_sizes = [
		{
			minWidth : 1000,  //if device screen width is greater than 1024, use these sizes
			sizes : [[970,250], [970,90],[728,90]]
		},
		{
			minWidth : 740,  //if device screen width is < 1024 && >= 768, use these sizes
			sizes : [[728,90]]
		},
		{
			minWidth : 460,  //if device screen width is < 768 && >= 480, use these sizes
			sizes : [[320,100],[320,50],[300,100],[300,50]]
		},
		{
			minWidth : 0,  //if device screen width is < 480 && > 0, use these sizes
			sizes : [[300,100],[300,50]]
		}
	];
});

(function() {
	var $ = jQuery;

	var googletag_billboard;

	googletag.cmd.push(function() {
		googletag_billboard = googletag.sizeMapping().
		addSize([1000, 0], [[970, 250],[970,90],[728,90]]).
		addSize([740, 0], [[728,90]]).
		addSize([460, 0], [[320,100],[320,50],[300,100],[300,50]]).
		addSize([0, 0], [[300,100],[300,50]]).
		build();
	});

	var slots = [];

	if ($("#ad_frontpage_top_728").length > 0) {
		slots = [
			{
				'slot': 'ad_frontpage_top_728',
				'ad_unit': '/5965368/ntd_multi_lang_frontpage_header_728',
				'sizes': [
					[970,250], [970,90], [728,90]
				],
				'default_size': '728x90'
			}
		];
		display_ads(slots);
	}

	if ($("#category_top_ads_970").length > 0) {
		slots = [
			{
				'slot': 'category_top_ads_970',
				'ad_unit': '/5965368/ntd_multi_lang_header_728x90',
				'sizes': [
					[970,250], [970,90], [728,90]
				],
				'default_size': '728x90'
			}
		];
		display_ads(slots);
	}

	if ($("#category_bottom_ads_970").length > 0) {
		slots = [
			{
				'slot': 'category_bottom_ads_970',
				'ad_unit': '/5965368/ntd_multi_lang_header_728x90_2',
				'sizes': [
					[970,250], [970,90], [728,90]
				],
				'lazyLoad': true
			}
		];
		display_ads(slots);
	}

	if ($("#single_top_ads_970").length > 0 && ntd_language_active  !== 'ntd_italian') {
		slots = [
			{
				'slot': 'single_top_ads_970',
				'ad_unit': '/5965368/ntd_multi_lang_article_header_728x90',
				'sizes': [
					[970,250], [970,90], [728,90]
				],
				'default_size': '728x90'
			}
		];
		display_ads(slots);
	}

	if ($("#single_bottom_ads_970").length > 0) {
		slots = [
			{
				'slot': 'single_bottom_ads_970',
				'ad_unit': '/5965368/ntd_multi_lang_article_header_728x90_2',
				'sizes': [
					[970,250], [970,90], [728,90]
				],
				'lazyLoad': true
			}
		];
		display_ads(slots);
	}

	if ($("#front_ads_right_300_01").length > 0) {
		slots = [
			{
				'slot': 'front_ads_right_300_01',
				'ad_unit': '/5965368/ntd_multi_lang_336x280-1',
				'sizes': [
					[300, 250]
				],
				'default_size': '300x250'
			}
		];
		display_ads(slots);
	}

	if ($("#front_ads_right_300_02").length > 0) {
		slots = [
			{
				'slot': 'front_ads_right_300_02',
				'ad_unit': '/5965368/ntd_multi_lang_336x280-2',
				'sizes': [
					[300, 250]
				],
				'lazyLoad': true
			}
		];
		display_ads(slots);
	}

	if ($("#front_ads_right_300_03").length > 0) {
		slots = [
			{
				'slot': 'front_ads_right_300_03',
				'ad_unit': '/5965368/ntd_multi_lang_336x280-3',
				'sizes': [
					[300, 250]
				],
				'lazyLoad': true
			}
		];
		display_ads(slots);
	}

	if ($("#sidebar_ads_right_top_300_1").length > 0 && ntd_language_active  !== 'ntd_italian') {
		slots = [
			{
				'slot': 'sidebar_ads_right_top_300_1',
				'ad_unit': '/5965368/ntd_multi_lang_336x280-4',
				'sizes': [
					[300, 250],
					[300, 600]
				],
				'default_size': '300x250'
			}
		];
		display_ads(slots);
	}

	if ($("#sidebar_ads_right_300_2").length > 0) {
		slots = [
			{
				'slot': 'sidebar_ads_right_300_2',
				'ad_unit': '/5965368/ntd_multi_lang_336x280-5',
				'sizes': [
					[300, 250]
				],
				'lazyLoad': true
			}
		];
		display_ads(slots);
	}

	if ($("#sidebar_ads_right_300_3").length > 0) {
		slots = [
			{
				'slot': 'sidebar_ads_right_300_3',
				'ad_unit': '/5965368/ntd_multi_lang_336x280-6',
				'sizes': [
					[300, 250],
					[300, 600]
				],
				'lazyLoad': true
			}
		];
		display_ads(slots);
	}

	display_infinite_ads(0, infinity_ad_count);

	/*not truth article*/
	if ($("#outbrain-below-article-thumbnails").length > 0) {
		add_lazy_load_section('#outbrain-below-article-thumbnails', function() {
			$("#outbrain-below-article-thumbnails").after('<div class="OUTBRAIN" data-src=' + window.location.href + ' data-widget-id="TF_6" data-ob-template="NTDTV"></div><script type="text/javascript" async="async" src="//widgets.outbrain.com/outbrain.js"></script>');
		});
	}

})();

function display_infinite_ads(adcount_start, adcount_end){
	for(var i = adcount_start; i < adcount_end; i = i + 3) {
		if ($("#ad_article_inside_336_" + (i)).length > 0) {
			slots = [
				{
					'slot': 'ad_article_inside_336_' + i,
					'ad_unit': '/5965368/ntd_multi_lang_article_inside_336_1',
					'sizes': [
						[300,250], [336,280]
					],
					'default_size': '300x250',
					'lazyLoad': true
				}
			];
			display_ads(slots);
		}
		if ($("#ad_article_inside_336_" + (i + 1)).length > 0) {
			slots = [
				{
					'slot': 'ad_article_inside_336_' + (i + 1),
					'ad_unit': '/5965368/ntd_multi_lang_article_inside_336_2',
					'sizes': [
						[300,250], [336,280]
					],
					'default_size': '300x250',
					'lazyLoad': true
				}
			];
			display_ads(slots);
		}
		if ($("#ad_article_inside_336_" + (i + 2)).length > 0) {
			slots = [
				{
					'slot': 'ad_article_inside_336_' + (i + 2),
					'ad_unit': '/5965368/ntd_multi_lang_article_inside_336_3',
					'sizes': [
						[300,250], [336,280]
					],
					'default_size': '300x250',
					'lazyLoad': true
				}
			];
			display_ads(slots);
		}
	}
}



function get_ads_wrapper(ad_id, style) {
	if("undefined" == typeof style ) {
		style = 'margin : 5px auto; text-align: center;';
	}

	return '<div style="' + style + '"><div style="margin: auto; text-align: center">' +
		'<div style="display: block;text-align: center; margin: 5px auto;">' +
		'<div id="' + ad_id + '"></div></div></div></div>';
}

//header bidding settings start
function ednBidders(size, adunit, dom_id) {
	var appnexus = {
			'300x250': 11752308,
			'300x600': 11752312,
			'728x90': 11752313,
			'970x250': 11752314,
			'970x90': 11752315
	};

	var aol = {
			'300x250': '4514956'
	};

	var openx = {
			'300x50': '538813631',
			'300x100': '538813632',
			'300x250': '538813633',
			'160x600': '538813634',
			'300x600': '538813635',
			'320x50': '538813636',
			'320x100': '538813637',
			'336x280': '538813638',
			'728x90': '538813639',
			'970x90': '538813640',
			'970x250': '538813641'
	};

	var hostname = window.location.hostname;
	var root_domain = getRootDomain(hostname);

	var pubmatic = [];
	pubmatic['ntd.tv'] = {
			'728x90': '1358170@728x90',
			'970x90': '1358172@970x90',
			'970x250': '1358171@970x250',
			'300x250': '1358164@300x250',
			'336x280': '1358167@336x280'
	};
	pubmatic['ntdtv.kr'] = {
			'728x90': '1358160@728x90',
			'970x250': '1358161@970x250',
			'970x90': '1358162@970x90',
			'300x600': '1358163@300x600',
			'300x250': '1358154@300x250',
			'336x280': '1358157@336x280'
	};
	pubmatic['epochtimes.fr'] = {
			'728x90': '1619450@728x90',
			'970x90': '1619446@970x90',
			'970x250': '1619445@970x250',
			'300x600': '1619447@300x600',
			'300x250': '1619449@300x250',
			'336x280': '1619448@336x280'
	};
	pubmatic['lagranepoca.com'] = {
			'728x90': '1619364@728x90',
			'970x90': '1619368@970x90',
			'970x250': '1619369@970x250',
			'300x600': '1619367@300x600',
			'300x250': '1619365@300x250',
			'336x280': '1619366@336x280'
	};

	if (!(root_domain in pubmatic)) {
		root_domain = 'ntd.tv';
	}

	var bidders = [{
			bidder: 'districtmDMX',
			params: {
				dmxid: '117689',
				memberid: '100086'
			}
		}, {
		bidder: 'openx',
		params: {
			unit: openx[size],
			delDomain: 'epoch-times-d.openx.net'
		}
	}, {
		bidder: 'appnexus',
		params: {
			placementId: appnexus[size]
		}
	}, {
		bidder: 'conversant',
		params: {
			site_id: '112252'
		}
	}, {
		bidder: 'sonobi',
		params: {
			dom_id: dom_id,
			ad_unit: adunit
		}
	}, {
		bidder: 'aol',
		params: {
			placement: aol[size],
			network: '10564.1'
		}
	}, {
		bidder: 'pubmatic',
		params: {
			publisherId: '156822',
			adSlot: pubmatic[root_domain][size]
		}
	}];
	return bidders;
}
} /* !ntd_no_ads */