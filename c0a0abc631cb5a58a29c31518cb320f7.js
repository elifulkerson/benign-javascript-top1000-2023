window.ga4Dims = window.ga4Dims || {};
		  if ( typeof nypost_screen !== 'undefined' ) {
				ga('set', 'dimension8', nypost_screen);
				window.ga4Dims.screen = nypost_screen;
		  }
			ga('set', 'dimension1', 'home');
ga('set', 'dimension4', 'home');
ga('set', 'dimension5', 'standard');
ga('set', 'dimension40', 'no');
ga('set', 'dimension44', 'no');
ga('set', 'dimension54', 'true');
ga('set', 'dimension76', 'Null');
			ga('set', 'dimension21', dimension21);
			window.ga4Dims.ad_blocker = dimension21;

		  // News Connect Global Identifier
			var ncgGetCookie = function( name ) {
				var regexp = new RegExp( '(?:^' + name + '|;*' + name + ')=(.*?)(?:;|$)', 'g' ),
					result = regexp.exec( document.cookie );

				return ( null === result ) ? null : result[1];
			}

			var ncgId = ncgGetCookie( '_ncg_id_' );
			if ( null !== ncgId ) {
				ga( 'set', 'dimension32', ncgId );
				window.ga4Dims.ncg_id = ncgId;
			}

			var ncgSpId = ncgGetCookie( '_ncg_sp_id\.[^=]*' );
			if ( null !== ncgSpId ) {
				ga( 'set', 'dimension51', ncgSpId );
				window.ga4Dims.ncg_sp_id = ncgSpId;
			}

			var gaAutId = ncgGetCookie( '_autid' );
			if ( null !== gaAutId ) {
				ga( 'set', 'dimension82', gaAutId );
				window.ga4Dims.ga_aut_id = gaAutId;
			}

			// Get Amazon links.
			var hasAmazon = "false";
			var links = document.links;
			var amazonLinks = [];
			for (var i = 0; links.length > i; i++) {
				if (
					links[i].href.indexOf('amazon.com') > 0
					&& !links[i].classList.contains('buy-button')
				) {
					var gaEventData = '';
					var amazonGaEvent = JSON.stringify({
						category: 'affiliate ecommerce click',
						action: 'amazon',
						label: links[i].href
					  });
					  var amazonGa4Event = JSON.stringify({
						event_name: 'ux_engagement',
						source_unit: 'amazon',
						source_position: i + 1
					  });

					if (links[i].dataset.gaEvent) {
						var currentGaEvent = links[i].dataset.gaEvent;
						if (Array.isArray(currentGaEvent)) {
							currentGaEvent.push(amazonGaEvent);
							gaEventData = currentGaEvent;
						} else {
							gaEventData = '['+currentGaEvent+','+amazonGaEvent+']';
						}
					} else {
						gaEventData = amazonGaEvent;
					}
				  if (links[i].dataset.ga4Event) {
					var currentGa4Event = links[i].dataset.ga4Event;
					if (Array.isArray(currentGa4Event)) {
					  currentGa4Event.push(amazonGa4Event);
					  ga4EventData = currentGa4Event;
					} else {
					  ga4EventData = '['+currentGa4Event+','+amazonGa4Event+']';
					}
				  } else {
					ga4EventData = amazonGa4Event;
				  }

					links[i].setAttribute(
						'data-ga-event',
						gaEventData
					  );
					  links[i].setAttribute(
						'data-ga4-event',
						ga4EventData
					  );
					amazonLinks.push(links[i].href);
					hasAmazon = "amazon";
				}
			}
			ga('set', 'dimension46', hasAmazon);
			window.ga4Dims.contains_commerce_link = hasAmazon;

		  if (amazonLinks.length > 0) {
				ga('set', 'dimension47', amazonLinks.join());
				window.ga4Dims.commerce_links = amazonLinks.join();
			}
			ga('require', 'linkid', 'linkid.js');
			ga('require', 'displayfeatures');
			ga('set', "contentGroup1", "home");
ga('set', "contentGroup2", "home");
ga('set', "contentGroup3", "nypost.com");

							ga('send', 'pageview');