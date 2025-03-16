if ('PerformanceObserver' in window) {
		// Set our starting mark.
		performance.mark('load-start');

		// First Contentful Paint start.
		// Create a variable to hold the FCP, we'll need it later.
		var fcp;
		// Register the PerformanceObserver to track paint timing.
		var observerFCP = new PerformanceObserver((list) => {
			for (var entry of list.getEntriesByName('first-contentful-paint')) {
				fcp = Math.round(entry.startTime);
				ga('send', 'event', {
					eventCategory: 'Performance Metrics',
					eventAction: 'First Contentful Paint',
					eventValue: fcp,
					eventLabel: window.location.href,
					nonInteraction: true,
				});
				observerFCP.disconnect();
				}
		});
		// Start observing paint entries.
		observerFCP.observe({
			type: 'paint',
		});
		// First Contentful Paint end.

		// First Input Delay start.
		// Register the PerformanceObserver to track first input delay.
		var observerFID = new PerformanceObserver((list) => {
			for (var entry of list.getEntries()) {
			var fid = entry.processingStart - entry.startTime;
				ga('send', 'event', {
					eventCategory: 'Performance Metrics',
					eventAction: 'First Input Delay',
					eventValue: Math.round(fid),
					eventLabel: window.location.href,
					nonInteraction: true,
				});
			observerFID.disconnect();
			}
		});

			// Start observing first-input entries.
		observerFID.observe({
			type: 'first-input',
			buffered: true,
		});
		// First Input Delay end.

			// Largest Contentful Paint start.
		// Create a variable to hold the latest LCP value (since it can change).
		var lcp;

			// Create the PerformanceObserver instance.
		var observerLCP = new PerformanceObserver((list) => {
			var entries = list.getEntries();
			var lastEntry = entries[entries.length - 1];

			// Update `lcp` to the latest value, using `renderTime` if it's available,
			// otherwise using `loadTime`. (Note: `renderTime` may not be available if
			// the element is an image and it's loaded cross-origin without the
			// `Timing-Allow-Origin` header.)
			lcp = lastEntry.renderTime || lastEntry.loadTime;
		});

			// Observe entries of type `largest-contentful-paint`, including buffered
		// entries, i.e. entries that occurred before calling `observe()`.
		observerLCP.observe({
			type: 'largest-contentful-paint',
			buffered: true
		});

			// Send the latest LCP value to your analytics server once the user
		// leaves the tab. This waits to log LCP until the page's lifecycle state changes to hidden.
		// This is a way of ensuring that it only logs the latest entry.
		function handleLCPVisibility() {
			if (lcp && document.visibilityState === 'hidden') {
			ga('send', 'event', {
				eventCategory: 'Performance Metrics',
				eventAction: 'Largest Contentful Paint',
				eventValue: Math.round(lcp),
				eventLabel: window.location.href,
				nonInteraction: true,
			});
			removeEventListener('visibilitychange', handleLCPVisibility, true);
			observerLCP.disconnect();
			}
		}
		addEventListener('visibilitychange',handleLCPVisibility, true);
		// Largest Contentful Paint end.

			// Load Abandonment start.
		function handleAbandonmentVisibility() {
			if (document.visibilityState === 'hidden') {
			// Mark when the user left.
			performance.mark('user-left');

				// Create our measure.
			performance.measure('time-on-page', 'load-start', 'user-left');

				// Get our measure.
			var timeOnPage = performance.getEntriesByName('time-on-page', 'measure');

				// Create our abandonment var.
			var userAbandoned = false;
			if (fcp && timeOnPage[0] && timeOnPage[0].duration < fcp) {
				userAbandoned = true;
			}
			ga('send', 'event', {
				eventCategory: 'Performance Metrics',
				eventAction: 'User Abandoned',
				eventValue: userAbandoned,
				eventLabel: window.location.href,
				nonInteraction: true,
			});
			removeEventListener('visibilitychange', handleAbandonmentVisibility, true);
			}
		}
		addEventListener('visibilitychange', handleAbandonmentVisibility, true);
		// Load Abandonment end.
		}