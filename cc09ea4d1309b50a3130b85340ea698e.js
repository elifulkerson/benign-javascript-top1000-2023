var tjPreloadAds = JSON.parse('{"11531":{"url":"\/\/www.redtube.com\/_xa\/ads_batch?ads=true&clientType=mobile&channel[context_page_type]=home&channel[site]=redtube&site_id=16&device_type=tablet&hc=E3BC098A-1EB7-4005-89DD-C925C7E3E414&data=%5B%7B%22spots%22%3A%5B%7B%22zone%22%3A11531%7D%5D%7D%5D&noc=0&dm=www.redtube.com\/_xa"},"11571":{"url":"\/\/www.redtube.com\/_xa\/ads_batch?ads=true&clientType=mobile&channel[context_page_type]=home&channel[site]=redtube&site_id=16&device_type=tablet&hc=E3BC098A-1EB7-4005-89DD-C925C7E3E414&data=%5B%7B%22spots%22%3A%5B%7B%22zone%22%3A11571%7D%5D%7D%5D&noc=0&dm=www.redtube.com\/_xa"}}');

			var TJ_ADS_TAKEOVER = {
				preloadAds: function() {
					if (!tjPreloadAds) return;

					for(var i in tjPreloadAds) {
						TJ_ADS_TAKEOVER.getAd(tjPreloadAds[i]);
					}
				},
				getAd: function(ad) {
					var request = window['XDomainRequest'] ? 
						new window['XDomainRequest']() : new XMLHttpRequest();
					
					var duration = new Date().getTime();
					request.onload = request.onerror = request.ontimeout = function() {
						ad.response = request.responseText;
						ad.duration = new Date().getTime() - duration;
						ad.status = request.status;
						if (typeof window.tjPreloadEmbeddedAds === 'function') {
							window.tjPreloadEmbeddedAds();
						}
					}

					request.onprogress = function() {}; // IE9 fix
					request.open('GET', ad.url);
					request.timeout = 10000; // IE9 fix
					request.send();
				}
			};

			TJ_ADS_TAKEOVER.preloadAds();