var scrolled_tgm = false;
		document.addEventListener('scroll', function(e) {	
			if (!scrolled_tgm) {
				
				(function(w, d, s, l, i) {
					w[l] = w[l] || [];
					w[l].push({
						'gtm.start': new Date().getTime(),
						event: 'gtm.js'
					});
					var f = d.getElementsByTagName(s)[0],
						j = d.createElement(s),
						dl = l != 'dataLayer' ? '&l=' + l : '';
					j.async = true;
					j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
					f.parentNode.insertBefore(j, f);
				})(window, document, 'script', 'dataLayer', 'GTM-NP4NT6N');

				scrolled_tgm = true;
			}
		});