/**
		 * Analytics Tracking
		 *
		 * Enhancements for Google Analytics 4
		 */
		function setCookieAnalytics(name, value, days) {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 60 * 1000));
				expires = "; expires=" + date.toUTCString();
			}
			document.cookie = name + "=" + (value || "") + expires + "; domain=.kompasiana.com; path=/;secure";
		}

		function getCookieAnalytics(cname) {
			let name = cname + "=";
			let decodedCookie = decodeURIComponent(document.cookie);
			let ca = decodedCookie.split(';');
			for(let i = 0; i <ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) == ' ') {
				c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
				}
			}
			return "";
		}

		 // Record unique pageviews in an array
		let uniquePageviews = getCookieAnalytics('unique-pageviews');
		if (uniquePageviews) {
			uniquePageviews = JSON.parse(uniquePageviews);
		} else {
			uniquePageviews = [];
		}

		// Don't continue if the current page has already been viewed in this session
		if (uniquePageviews.indexOf(location.href) !== -1) {
			console.log('ada')
		}else{
			// Track a pageview for a newly visited URL in this session
			uniquePageviews.push(location.href);
			uniquePageviews = JSON.stringify(uniquePageviews);
			setCookieAnalytics("unique-pageviews",uniquePageviews,30)

			// Send "unique_page_view" event to GA4
			window.dataLayer.push({
				event: "unique_page_view",
				page_location: location.href,
				page_referrer: document.referrer,
				ArtikelID: "",
				content_id: "",
			});

			// Debug helper (optional)
			console.log(`"unique_page_view" tracked in GA4`);
		}