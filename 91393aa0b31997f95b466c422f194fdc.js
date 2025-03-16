var _dl = {"version":"1.0.0","user":{},"content":{},"session":{}};
                window._analyticsQueue = window._analyticsQueue || [];

                window._trackAnalytics = function(event) {
                  console.log('analytics event', event);
                  window._analyticsQueue.push(event);
                }

                window.processAnalyticsQueue = function() {
                  window.analyticsQueue.forEach(window._trackAnalytics);
                }