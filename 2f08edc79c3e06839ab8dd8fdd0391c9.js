// Initial omniture setup
		window.omniture = { tpv: [], tl: [] };
		window.omniture.trackPageView = function () { window.omniture.tpv.push(arguments) };
		window.omniture.trackLink = function () { window.omniture.tl.push(arguments) };
	
		// having separate account for production for correct tracking in www.flipkart.com
			if (window.location.host === 'www.flipkart.com' || /\.store\.flipkart\.com/i.test(window.location.host)) {
				// using desktop check here to set the correct report suite id for oneview
				// in oneview whenever we open batman codebase on desktop viewport we need to report
				// omniture data with the same suite id as zion codebase, hence the following check
				window.s_account = true ? 'flipkart-prd' : 'flipkart-mob-web';
				window.omnitureSamplingBucketId = '8';
				window.omnitureIngestionEnabled = 'true';
				var campaignId = '';
				// campaign id tracking code
				if (campaignId && /^EM-OW/.test(campaignId)) {
					window.omniture.trackLink({
						events: 'event1',
						evar45: campaignId
					});
				}
			} else {
				window.s_account = true ? 'flipkart-prd-test' : 'flipkart-mob-web-stage';
			}
			if (true) {
				window.s_isDesktop = true;
			}
			window.loadJS && window.loadJS('https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/omniv31-1.js', null, false, true);