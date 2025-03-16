var ff_current_page = 1;
			var FF_REP_COUNT = -1;
			var FF_EXCLUDE_ADS = [];

			function firefly_setTargeting() {
				googletag.pubads().setTargeting("Site", ["http://www.westernjournal.com"]);
				googletag.pubads().setTargeting("Tag", [""]);
				googletag.pubads().setTargeting("Category", [""]);

				googletag.pubads().setTargeting("URL", "/");
				googletag.pubads().setTargeting("GoogleCompliant", "true");

				if( typeof FIREFLY_AIRTV_RAND != 'undefined' && FIREFLY_AIRTV_RAND < 0.2 ) googletag.pubads().setTargeting("AIRTV", "true");

				['campaign','content','medium','source'].forEach( function( utm ) { googletag.pubads().setTargeting( 'utm_' + utm, getParameterByName( 'utm_' + utm ) ); } );
			}
			function firefly_size_list_to_max_wh( size_list ) {
				let max_wh = [0, 0];
				for( let i = 0; i < size_list.length; i++ ) {
					if( size_list[i][0] > max_wh[0] ) max_wh[0] = size_list[i][0];
					if( size_list[i][1] > max_wh[1] ) max_wh[1] = size_list[i][1];
				}
				return max_wh;
			}
		var FFADS = {"desktop_bidding_timeout":"2100","mobile_bidding_timeout":"2100","lazy_load_threshold":"900","lazy_load":"yes","units":{"SB4":{"lazy_load":"yes","ad_type":null,"size_mappings":[{"screen_width":"944","creative_sizes":[{"size":"300x250"}]}]},"HP1":{"ad_type":"dfp_prebid","size_mappings":[{"screen_width":"1004","creative_sizes":[{"size":"970x90"},{"size":"970x250"},{"size":"728x90"}]},{"screen_width":"748","creative_sizes":[{"size":"728x90"},{"size":"300x250"},{"size":"336x280"}]},{"screen_width":"1","creative_sizes":[{"size":"300x250"},{"size":"320x50"},{"size":"320x100"},{"size":"300x100"},{"size":"300x50"}]}],"bidders":[{"name":"appnexus","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":"14687143","medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"appnexus","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":"27448662","medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"rubicon","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":"14758","rubicon_siteid":" 362618","rubicon_zoneid":"1963066","sovrn_tagid":null},{"name":"medianet","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":"8CU8Y0E88","medianet_crid":"374842454","minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"pubmatic","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":"158410","pubmatic_adslot":"WesternJournal_Archive_Direct_HP1_CS_Prebid","rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855220"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855221"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855222"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855223"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855224"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855225"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855226"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855227"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855228"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855229"}]},"SB1":{"ad_type":"custom"},"SB2":{"ad_type":"custom"},"SB3":{"ad_type":"custom"},"BB1":{"ad_type":"dfp_prebid"},"SB5":{"ad_type":null},"HP2":{"ad_type":"custom","lazy_load":"yes","custom_ads":[{"code":"<div id=\"rc-widget-7174ad\" data-rc-widget data-widget-host=\"habitat\" data-endpoint=\"\/\/trends.revcontent.com\" data-widget-id=\"273515\"><\/div>","rendering_script":"if( typeof window.renderRCWidget == 'function' ) {\r\n  window.renderRCWidget( document.getElementById( 'rc-widget-7174ad' ) );\r\n} else {\r\n  let rcs = document.createElement( 'script' );\r\n  rcs.src = 'https:\/\/assets.revcontent.com\/master\/delivery.js';\r\n  rcs.defer = 'defer';\r\n  document.body.appendChild( rcs );\r\n}"}]},"HP3":{"ad_type":"dfp_prebid","lazy_load":"yes","size_mappings":[{"screen_width":"1004","creative_sizes":[{"size":"970x90"},{"size":"970x250"},{"size":"728x90"},{"size":"300x250"}]},{"screen_width":"748","creative_sizes":[{"size":"728x90"},{"size":"336x280"},{"size":"300x250"}]},{"screen_width":"1","creative_sizes":[{"size":"300x250"},{"size":"320x100"},{"size":"320x50"},{"size":"300x100"},{"size":"300x50"}]}],"bidders":[{"name":"appnexus","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":"14687145","medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"medianet","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":"8CU8Y0E88","medianet_crid":"234461826","minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"pubmatic","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":"158410","pubmatic_adslot":"WesternJournal_Archive_Direct_HP3_CS_Prebid","rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855270"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855271"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855273"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855274"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855275"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855276"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855277"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855278"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855279"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855260"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855261"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855263"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855264"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855265"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855266"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855267"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855268"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855269"},{"name":"rubicon","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":"14758","rubicon_siteid":"362618","rubicon_zoneid":"1963072","sovrn_tagid":null}]},"HP4":{"ad_type":"dfp_prebid","lazy_load":"yes","size_mappings":[{"screen_width":"1004","creative_sizes":[{"size":"728x90"},{"size":"970x90"},{"size":"970x250"},{"size":"300x250"}]},{"screen_width":"748","creative_sizes":[{"size":"728x90"},{"size":"336x280"},{"size":"300x250"}]},{"screen_width":"1","creative_sizes":[{"size":"300x250"},{"size":"320x100"},{"size":"320x50"},{"size":"300x100"},{"size":"300x50"}]}],"bidders":[{"name":"appnexus","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":"14687148","medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"medianet","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":"8CU8Y0E88","medianet_crid":"546649754","minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"pubmatic","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":"158410","pubmatic_adslot":"WesternJournal_Archive_Direct_HP4_CS_Prebid","rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855290"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855291"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855293"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855294"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855295"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855296"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855297"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855298"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855299"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855280"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855281"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855283"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855284"},{"name":"sovrn","device_category":"desktop","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855285"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855286"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855287"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855288"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855289"},{"name":"rubicon","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":"14758","rubicon_siteid":"362618","rubicon_zoneid":"1963064","sovrn_tagid":null}]},"SA1":{"ad_type":"dfp_prebid","size_mappings":[{"screen_width":"500"},{"screen_width":"1","creative_sizes":[{"size":"320x100"},{"size":"320x50"},{"size":"300x100"},{"size":"300x50"},{"size":"1x1"}]}],"bidders":[{"name":"appnexus","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":"14827619","medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"pubmatic","device_category":"all","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":"158410","pubmatic_adslot":"WesternJournal_Archive_Direct_SA1_CS_Prebid","rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"medianet","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":"8CU8Y0E88","medianet_crid":"912738285","minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":null},{"name":"rubicon","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":"14758","rubicon_siteid":"362618","rubicon_zoneid":"2672012","sovrn_tagid":null},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855216"},{"name":"sovrn","device_category":"mobile","ttacross_siteid":null,"ttacross_productid":null,"adagio_organizationid":null,"adagio_site":null,"adagio_adunitelementid":null,"adagio_environment":null,"adagio_placement":null,"adtelligent_aid":null,"appnexus_placementid":null,"medianet_cid":null,"medianet_crid":null,"minutemedia_org":null,"minutemedia_placementid":null,"ogury_assetkey":null,"ogury_adunitid":null,"pubmatic_publisherid":null,"pubmatic_adslot":null,"rubicon_accountid":null,"rubicon_siteid":null,"rubicon_zoneid":null,"sovrn_tagid":"855217"}]},"HP5":{"ad_type":"dfp_prebid","lazy_load":"yes"},"HP6":{"ad_type":"dfp_prebid","lazy_load":"yes"},"HP7":{"ad_type":"dfp_prebid","lazy_load":"yes"},"HP8":{"ad_type":"dfp_prebid","lazy_load":"yes"},"OOP":{"ad_type":"custom"},"IC5":{"repeating":true}},"ad_type":"dfp_prebid","dfp_account_id":"101957818,22550773714","use_fixed_containers":"yes","scaling_sheet_id":"0","replace_ict":"document.querySelector( '.article-extras.trending' ).outerHTML = '<div id=\"8c8cbe52-80e8-468f-a95b-ce8f1f39546b\" style=\"margin-bottom: 30px;\"><\/div>'; (function (d,s,n,id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.className = n; js.src = \"https:\/\/stream.playbuzz.com\/embed\/sdk.js?embedId=8c8cbe52-80e8-468f-a95b-ce8f1f39546b\"; fjs.parentNode.insertBefore(js, fjs); }(document,'script','playbuzz-stream','stream-sdk-jssdk_westernjournal.com_RSS'));","dfp_unit_path":"WesternJournal\/WesternJournal_Archive\/WesternJournal_Archive_Direct\/WesternJournal_Archive_Direct_","seller_id":"2018001","cat":"uncategorized"};

			FFADS.debug = function( msg ) {
				if( document.location.href.search( 'ffads_debug=true' ) !== -1 ) {
					if( typeof msg !== 'undefined' ) msg = JSON.parse( JSON.stringify( msg ) );
					else msg = 'undefined';
					console.log( 'FFADS DEBUG: ' + msg );
				}
			}

			FFADS.content_order = ["OOP","SA1","BB1","HP1","HP2","HP3","HP4","HP5","HP6","HP7","HP8"];
			FFADS.sidebar_order = ["SB1","SB2","SB3","SB4","SB5"];

	  	

			for( let ad_unit in FFADS.units ) if( ( FFADS.units[ad_unit].ad_type == 'dfp_prebid' || FFADS.units[ad_unit].ad_type == 'hybrid' ) && FFADS.units[ad_unit].size_mappings ) for( let i = 0; i < FFADS.units[ad_unit].size_mappings.length; i++ ) if( window.innerWidth >= FFADS.units[ad_unit].size_mappings[i].screen_width ) {
				if( FFADS.units[ad_unit].size_mappings[i].creative_sizes && FF_EXCLUDE_ADS.indexOf( ad_unit ) == -1 ) {
					FFADS.units[ad_unit].sizes = FFADS.units[ad_unit].size_mappings[i].creative_sizes.map( function( sizeObj ) {
						if( sizeObj.size == 'fluid' ) {
							return sizeObj.size
						}
						return sizeObj.size.split( 'x' ).map( function( numString ) {
							return parseInt( numString );
						} );
					} );
				}
				break;
			}

			let new_unit_obj = {};
			for( let i in FFADS.content_order ) {
				FFADS.debug( 'Checking if ' + FFADS.content_order[i] + ' is valid on this page' );
				let ad_unit = FFADS.content_order[i].split( '_' )[0];
				if( FFADS.units[ad_unit] && ( FFADS.units[ad_unit].ad_type == 'custom' || FFADS.units[ad_unit].sizes ) ) new_unit_obj[ad_unit] = FFADS.units[ad_unit];
				else {
					FFADS.debug( FFADS.content_order[i] + ' is not valid on this page. Removing it from content_order.' );
					FFADS.content_order[i] = false;
				}
			}
			FFADS.content_order = FFADS.content_order.filter( function( ad_unit ) { return ad_unit && FFADS.units[ad_unit.split( '_' )[0]].lazy_load; } );
			if( window.innerWidth >= 944 ) for( let i in FFADS.sidebar_order ) {
				FFADS.debug( 'Checking if ' + FFADS.sidebar_order[i] + ' is valid on this page' );
				if( FFADS.units[FFADS.sidebar_order[i]].ad_type == 'custom' || FFADS.units[FFADS.sidebar_order[i]].sizes ) new_unit_obj[FFADS.sidebar_order[i]] = FFADS.units[FFADS.sidebar_order[i]];
				else {
					FFADS.debug( FFADS.sidebar_order[i] + ' is not valid on this page. Removing it from sidebar_order.' );
					FFADS.sidebar_order[i] = false;
				}
			}
			FFADS.sidebar_order = FFADS.sidebar_order.filter( function( ad_unit ) { return ad_unit && FFADS.units[ad_unit].lazy_load; } );
			FFADS.units = new_unit_obj;

			FFADS.all_bidders = {"ttacross":{"nicename":"33Across","params":["siteId","productId"]},"adagio":{"nicename":"Adagio","params":["organizationId","site","adUnitElementId","environment","placement"]},"adtelligent":{"nicename":"Adtelligent","params":["aid"]},"appnexus":{"nicename":"AppNexus","params":["placementId"]},"medianet":{"nicename":"MediaNet","params":["cid","crid"]},"minutemedia":{"nicename":"MinuteMedia","params":["org","placementId"]},"ogury":{"nicename":"Ogury","params":["assetKey","adUnitId"]},"pubmatic":{"nicename":"PubMatic","params":["publisherId","adSlot"]},"rubicon":{"nicename":"Rubicon","params":["accountId","siteId","zoneId"]},"sovrn":{"nicename":"Sovrn","params":["tagid"]}};

			FFADS.pb_units = [];
			for( let bidder in FFADS.all_bidders ) {
				FFADS.all_bidders[bidder].param_map = {};
				for( let param in FFADS.all_bidders[bidder].params ) FFADS.all_bidders[bidder].param_map[FFADS.all_bidders[bidder].params[param].toLowerCase()] = FFADS.all_bidders[bidder].params[param];
				for( let param in FFADS.all_bidders[bidder].array_params ) FFADS.all_bidders[bidder].param_map[FFADS.all_bidders[bidder].array_params[param].toLowerCase()] = FFADS.all_bidders[bidder].array_params[param];
			}
			for( let ad_unit in FFADS.units ) {
				FFADS.debug( ad_unit + ' type: ' + FFADS.units[ad_unit].ad_type );
				FFADS.debug( ad_unit + ' size mappings:' );
				FFADS.debug( FFADS.units[ad_unit].size_mappings );
				if( ( FFADS.units[ad_unit].ad_type == 'dfp_prebid' || FFADS.units[ad_unit].ad_type == 'hybrid' ) && FFADS.units[ad_unit].size_mappings ) {
					FFADS.debug( 'creating PB unit(s) for ' + ad_unit );
					let bids = [];
					for( let i in FFADS.units[ad_unit].bidders ) if(
						FFADS.units[ad_unit].bidders[i].device_category == 'all' ||
						FFADS.units[ad_unit].bidders[i].device_category == 'desktop' && window.innerWidth >= 944 ||
						FFADS.units[ad_unit].bidders[i].device_category == 'mobile' && window.innerWidth < 944
					) {
						let params = {};
						for( let param in FFADS.units[ad_unit].bidders[i] ) if( param.search( FFADS.units[ad_unit].bidders[i].name.toLowerCase() + '_' ) === 0 ) {
							let param_name_lower = param.split( '_' ).splice( 1 ).join( '_' );
							let param_name = FFADS.all_bidders[FFADS.units[ad_unit].bidders[i].name].param_map[param_name_lower];
							if( typeof FFADS.units[ad_unit].bidders[i][param] == 'object' ) {
								params[param_name] = [];
								for( let j in FFADS.units[ad_unit].bidders[i][param] ) params[param_name].push( parseInt( FFADS.units[ad_unit].bidders[i][param][j][param_name_lower] ) || FFADS.units[ad_unit].bidders[i][param][j][param_name_lower] );
							}
							else params[param_name] = FFADS.units[ad_unit].bidders[i][param];
							// Custom ext param format overwrite for OneTag provider
							if(FFADS.units[ad_unit].bidders[i].name == "onetag" && param_name == "ext") {
								params[param_name] = { "placement_name" : params[param_name] };
							}
						}
						bids.push( { bidder: FFADS.units[ad_unit].bidders[i].name.replace( 'ttacross', '33across' ), params: params } );
					}
					let pb_sizes_copy = JSON.parse(JSON.stringify(FFADS.units[ad_unit].sizes));
					if ( pb_sizes_copy.includes( 'fluid' ) ) {
						pb_sizes_copy.splice( pb_sizes_copy.indexOf( 'fluid' ), 1 );
					}
					if( FFADS.units[ad_unit].repeating ) for( let i = 0; i < FF_REP_COUNT; i++ ) FFADS.pb_units.push( {
						mediaTypes: {
							banner: {
								sizes: pb_sizes_copy
							}
						},
						bids: bids,
						code: 'REP_' + i
					} );
		  			else if( FFADS.units[ad_unit].rep_count ) for( let i = 0; i < FFADS.units[ad_unit].rep_count; i++ ) FFADS.pb_units.push( {
						mediaTypes: {
							banner: {
								sizes: pb_sizes_copy
							}
						},
						bids: bids,
						code: ad_unit + '_' + i
					} );
					else FFADS.pb_units.push( {
						mediaTypes: {
							banner: {
								sizes: pb_sizes_copy
							}
						},
						bids: bids,
						code: ad_unit
					} );
				}

				FFADS.units[ad_unit].instances = {};
				if( FFADS.units[ad_unit].repeating ) for( let i = 0; i < FF_REP_COUNT; i++ ) FFADS.units[ad_unit].instances['REP_' + i] = {};
				else if( FFADS.units[ad_unit].rep_count ) for( let i = 0; i < FFADS.units[ad_unit].rep_count; i++ ) FFADS.units[ad_unit].instances[ad_unit + '_' + i] = {};
				else FFADS.units[ad_unit].instances[ad_unit] = {};
			}

			FFADS.prebid_timeout = window.innerWidth > 943 ? FFADS.desktop_bidding_timeout : FFADS.mobile_bidding_timeout;

			FFADS.get_unit_path = function( ad_unit ) {
				let path = '/' + ( this.dfp_account_id || 101957818 ) + '/';

				if ( this.dfp_unit_path ) {
					path += this.dfp_unit_path + ad_unit;
				} else {
					path += ad_unit + '_' + ( this.custom_unit_code || 'WJ' );
				}

				if ( typeof this.use_sx_units != 'undefined' && this.use_sx_units == 'yes' ) {
					path += window.innerWidth > 943 ? '_LGSX' : '_SMSX';
				}

				return path;
			}
			FFADS.pbjs_bids_back = function() {
				FFADS.debug( 'PB bids back for initial units' );
				FFADS.pbjs_ready = true;
				if( FFADS.a9_ready ) return sendInitialAdserverRequest();
			}
			FFADS.render_ad = function( ad_unit, div_id = false ) {
				div_id = div_id || ad_unit;
				this.debug( 'refreshing ' + ad_unit + ' into #' + div_id );
				this.units[ad_unit].instances[div_id].displayed = true;
				if( this.units[ad_unit].ad_type == 'custom' ) eval( this.units[ad_unit].custom_ads[0].rendering_script );
				else googletag.cmd.push( this.request_bids.bind( this, ad_unit, div_id ) );
			}
			FFADS.request_bids = function( ad_unit, div_id = false ) {
				div_id = div_id || ad_unit;

				this.debug( 'requesting bids for ' + ad_unit + ' in #' + div_id );

				FFADS.units[ad_unit].instances[div_id].gt_slot = googletag.defineSlot( this.get_unit_path( ad_unit ), this.units[ad_unit].sizes, div_id ).setTargeting( 'ad_h', (new Date).getUTCHours().toString() ).addService( googletag.pubads() );
				window['firefly_pbjs_ready' + div_id] = false, window['firefly_a9_ready' + div_id] = false;

				pbjs.rp.requestBids( {
				callback: firefly_pbjs_bids_back_single.bind( null, ad_unit, div_id ),
				gptSlotObjects:     [FFADS.units[ad_unit].instances[div_id].gt_slot]
			} );

				setTimeout( sendSingleAdserverRequest.bind( FFADS, ad_unit, div_id ), FFADS.prebid_timeout );

				apstag.fetchBids(
					{
						slots: [
							{
								slotID:   div_id,
								slotName: this.get_unit_path( ad_unit ),
								sizes:    this.units[ad_unit].sizes
							}
						]
					},
					firefly_a9_bids_back_single.bind( null, ad_unit, div_id )
				);
			};

			FFADS.lazy_load_check = function() {
				FFADS.debug( 'checking lazy load' );

				for( let i = 0; i < FFADS.content_order.length; i++ ) {
					let ad_unit_id = FFADS.content_order[i];
					let ad_unit = ad_unit_id.split( '_' )[0];
					if( ! FFADS.units[ad_unit].repeating ) {
						if( checkAlmostVisible( document.getElementById( ad_unit_id ), FFADS.lazy_load_threshold ) ) {
							FFADS.debug( ad_unit_id + ' is almost visible' );
							FFADS.content_order.splice( i--, 1 ); // splice first in case render_ad fails, decrement i to account for item removed
							FFADS.render_ad( ad_unit, ad_unit_id );
						}
					}
					else for( var j = 0; j < FF_REP_COUNT; j++ ) {
						let div_id = 'REP_' + j;
						if( ! FFADS.units[ad_unit].instances[div_id].displayed ) {
							if( checkAlmostVisible( document.getElementById( div_id ), FFADS.lazy_load_threshold ) ) {
								FFADS.debug( div_id + ' is almost visible' );
								if( j == FF_REP_COUNT - 1 ) FFADS.content_order.splice( i, 1 ); // splice first in case render_ad fails
								FFADS.render_ad( ad_unit, div_id );
							}
							else break;
						}
					}
				}

				if( window.innerWidth > 943 ) for( let i = 0; i < FFADS.sidebar_order.length; i++ ) {
					let ad_unit_code = FFADS.sidebar_order[i];
					if( checkAlmostVisible( document.getElementById( ad_unit_code ), FFADS.lazy_load_threshold ) ) {
						FFADS.debug( ad_unit_code + ' is almost visible' );
						FFADS.sidebar_order.splice( i, 1 );
						FFADS.render_ad( ad_unit_code );
					}
					else break;
				}
			}

			FFADS.comments_displayed = false;

			// initialize pbjs
			var pbjs = pbjs || {};
			pbjs.que = pbjs.que || [ function() { FFADS.debug( 'pbjs.que starting' ); } ];

			// setup googletag
			var googletag = googletag || {};
			googletag.cmd = googletag.cmd || [ function() { FFADS.debug( 'googletag.cmd starting' ); } ];

			googletag.cmd.push( function() {
				googletag.pubads().disableInitialLoad();

				for( let ad_unit in FFADS.units ) if( ! FFADS.units[ad_unit].lazy_load && ( FFADS.units[ad_unit].ad_type == 'dfp_prebid' || FFADS.units[ad_unit].ad_type == 'hybrid' ) ) {
					FFADS.debug( 'defining slot for ' + ad_unit + ' #' + ad_unit );
					FFADS.units[ad_unit].instances[ad_unit].gt_slot = googletag.defineSlot( FFADS.get_unit_path( ad_unit ), FFADS.units[ad_unit].sizes, ad_unit ).setTargeting( 'ad_h', (new Date).getUTCHours().toString() ).addService( googletag.pubads() );
				}

				if ( FFADS.enable_is1 ) {
					FFADS.is1 = googletag.defineOutOfPageSlot( FFADS.get_unit_path( 'IS1' ), googletag.enums.OutOfPageFormat.INTERSTITIAL );
					if ( FFADS.is1 ) FFADS.is1.addService( googletag.pubads() );
				}
				googletag.pubads().enableSingleRequest();
				firefly_setTargeting();
				googletag.pubads().setCentering(true);
				googletag.enableServices();

				// request pbjs bids when it loads
				pbjs.que.push(function() {

					pbjs.enableAnalytics([{
						provider: "atsAnalytics",
						options: {
							pid: "122"
						}
					},{
						provider: "hadronAnalytics",
						options: {
							partnerId: 484,
							eventsToTrack: ["auctionEnd", "bidResponse", "noBid", "bidWon"]
						}
					}])

					pbjs.setConfig( {
						priceGranularity: "high",
						userSync: {
							userIds: [{
							name: "identityLink",
							params: {
								pid: "122",
							},
							storage: {
								type: "cookie",
								name: "idl_env",
								expires: 15,
								refreshInSeconds: 1800
							},
							consentManagement: {
								gdpr: {
									cmpApi: "iab",
									allowAuctionWithoutConsent: false, // suppress auctions if theres no GDPR consent string
									timeout: 3000  // GDPR timeout 3000ms
								},
								usp: {
									timeout: 100 // US Privacy timeout 100ms
								}
							}
						},
						{
							name: "hadronId",
							params: {
								partnerId: 484
							}
						}],
							iframeEnabled: true,
							filterSettings: {
								iframe: {
									bidders: ['nobid','pubmatic', 'consumable', 'connectad'],
									filter: 'include'
								}
							},
							syncDelay: 3000
						},
						realTimeData: {
							auctionDelay: 100,
							dataProviders: [
								{
									name: "Hadron",
									waitForIt: true,
									params: {
										segmentCache: false,
										partnerId: 484
									}
								}
							]
						}
					} );

					FFADS.debug( 'adding units to PB' );
					FFADS.debug( FFADS.pb_units );
					pbjs.addAdUnits( FFADS.pb_units );
					let adUnitCodes = [];
					for( let ad_unit in FFADS.units ) {
						if( ! FFADS.units[ad_unit].lazy_load ) {
							if( FFADS.units[ad_unit].ad_type != 'custom' ) {
								if ( ! FFADS.units[ad_unit].repeating ) {
									div_id = ad_unit
									adUnitCodes.push( FFADS.units[ad_unit].instances[div_id].gt_slot );
								}
								else for( var j = 0; j < FF_REP_COUNT; j++ ) {
									div_id = 'REP_' + j;
									adUnitCodes.push( FFADS.units[ad_unit].instances[div_id].gt_slot );
								}
							}
						}
					}
					FFADS.debug( 'requesting PB bids for initial units' );
					pbjs.rp.requestBids({
				callback: FFADS.pbjs_bids_back,
				gptSlotObjects:     adUnitCodes
			});
				});
			} );

			function sendInitialAdserverRequest() {
				if( FFADS.initialAdserverRequestSent ) return;
				FFADS.initialAdserverRequestSent = true;

				FFADS.debug( 'queuing DFP request for initial units' );

				googletag.cmd.push(function() {
					pbjs.que.push(function() {
						FFADS.debug( 'sending DFP request for initial units' );

						let adUnitCodes = [];
						let dfpAdUnits = [];
						for( let ad_unit in FFADS.units ) if( ! FFADS.units[ad_unit].lazy_load ) {
							if( FFADS.units[ad_unit].ad_type == 'hybrid' ) {
								let pb_bid = pbjs.getHighestCpmBids( ad_unit );
								pb_bid = pb_bid.length ? pb_bid[0].cpm : 0;
								FFADS.debug( 'Prebid bid ' + pb_bid + ' for ' + ad_unit );

								if( pb_bid < FFADS.units[ad_unit].custom_ads[0].cpm ) {
									FFADS.debug( 'Custom code won for ' + ad_unit );
									let el = false;
									if( el = document.getElementById( ad_unit ) ) {
										el.innerHTML = FFADS.units[ad_unit].custom_ads[0].code;
										eval( FFADS.units[ad_unit].custom_ads[0].rendering_script );
									}
									else FFADS.debug( 'failed to render custom code in ' + ad_unit + ' since the unit is not on this page' );
									continue;
								}
							}

							adUnitCodes.push( ad_unit );
							dfpAdUnits.push( FFADS.units[ad_unit].instances[ad_unit].gt_slot );
						}

						pbjs.setTargetingForGPTAsync( adUnitCodes );
						apstag.setDisplayBids();

						googletag.pubads().refresh( dfpAdUnits );
					});
				});
			}

			FFADS.debug( 'scheduling DFP request for initial units' );
			setTimeout( function() {
				sendInitialAdserverRequest();
			}, FFADS.prebid_timeout );

			function sendSingleAdserverRequest( ad_unit, div_id = false ) {
				div_id = div_id || ad_unit;
				if( FFADS.units[ad_unit].instances[div_id].adserverRequestSent ) return;
				FFADS.units[ad_unit].instances[div_id].adserverRequestSent = true;

				if( FFADS.units[ad_unit].ad_type == 'hybrid' ) {
					let pb_bid = pbjs.getHighestCpmBids( div_id );
					pb_bid = pb_bid.length ? pb_bid[0].cpm : 0;
					FFADS.debug( 'Prebid bid ' + pb_bid + ' for #' + div_id );

					if( pb_bid < FFADS.units[ad_unit].custom_ads[0].cpm ) {
						FFADS.debug( 'Custom code won for #' + div_id );
						document.getElementById( div_id ).innerHTML = FFADS.units[ad_unit].custom_ads[0].code;
						eval( FFADS.units[ad_unit].custom_ads[0].rendering_script );
						return;
					}
				}

				apstag.setDisplayBids();
				pbjs.setTargetingForGPTAsync( [div_id] );
				FFADS.debug( 'sending DFP request for ' + ad_unit + ' #' + div_id );
				googletag.pubads().refresh( [FFADS.units[ad_unit].instances[div_id].gt_slot] );
			}

			function firefly_pbjs_bids_back_single( ad_unit, div_id = false ) {
				div_id = div_id || ad_unit;
				FFADS.debug( 'PB bids back for ' + ad_unit + ' #' + div_id );

				window['firefly_pbjs_ready' + ad_unit] = true;
				if( window['firefly_a9_ready' + ad_unit] ) return sendSingleAdserverRequest( ad_unit, div_id );
			}

			function firefly_a9_bids_back_single( ad_unit, div_id = false ) {
				div_id = div_id || ad_unit;
				FFADS.debug( 'A9 bids back for ' + ad_unit + ' #' + div_id );

				window['firefly_a9_ready' + ad_unit] = true;
				if( window['firefly_pbjs_ready' + ad_unit] ) return sendSingleAdserverRequest( ad_unit, div_id );
			}

			!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){console.log('FFADS DEBUG: running empty apstag.setDisplayBids() stub')},targetingKeys:function(){return[]},dpa:function(){q("di",arguments)},rpa:function(){("ri",arguments)},upa:function(){q("ui",arguments)},_Q:[]};}("apstag",window);

			let ats_ess = getCookie( "ats_ess" );
			if ( ats_ess ) {
				apstag.rpa( {
					"hashedRecords": [
						{
							"type": "email",
							"record": ats_ess
						}
					]
				} );
			}

			apstag.init({
				pubID: 'da224ee9-07c8-4a80-87e4-528df4ac939e',
				adServer: 'googletag',
				bidTimeout: FFADS.prebid_timeout,
				schain: {
					complete: 1,
					ver: '1.0',
					nodes: [
						{
							asi: 'fireflyengagement.com',
							sid: FFADS.seller_id,
							hp: 1
						}
					]
				}
			});

			var a9_slot_arr = [];
			for( var ad_unit in FFADS.units ) {
				if( ! FFADS.units[ad_unit].lazy_load ) var a9_slot_arr = a9_slot_arr.concat( [ {
					slotID:   ad_unit,
					slotName: FFADS.get_unit_path( ad_unit ),
					sizes:    FFADS.units[ad_unit].sizes
				} ] );
			};

			var a9_bids_fetched = false;
			function fetch_initial_a9_bids( tcData, success ) {
				if ( success && ( tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete' ) ) {
					if ( a9_bids_fetched ) {
						return;
					}
					a9_bids_fetched = true;

					FFADS.debug( 'CMP loaded, requesting A9 bids for initial units' );
					apstag.fetchBids( { slots: a9_slot_arr },
						function( bids ) {
							FFADS.debug( 'A9 bids back for initial units' );
							FFADS.a9_ready = true;
							if( FFADS.pbjs_ready ) return sendInitialAdserverRequest();
						}
					);
				}
			}
			FFADS.debug( 'hooking fetch_initial_a9_bids into CMP' );
			__tcfapi( 'addEventListener', 2, fetch_initial_a9_bids );