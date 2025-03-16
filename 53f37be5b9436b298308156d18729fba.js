function sendToGoogleAnalytics(metric) {
            console.log(metric)
            const {name, delta, value, id, entries, rating, attribution} = metric
            gtag('event', name, {
                event_category: 'Web Vitals',
                first_view: isFirstView,
                value: Math.round(name === 'CLS' ? delta * 1000000000 : delta),
                event_label: id,
                non_interaction: true,
                metric_id: id,
                metric_value: value,
                metric_delta: delta,
                metric_rating: rating,
                debug_target: attribution ? attribution.largestShiftTarget||attribution.element||attribution.eventTarget||'' : '(not set)',
                debug_event: attribution ? attribution.eventType||'' : '',
                debug_timing: attribution ? attribution.loadState||'' : '',
                event_time: attribution ? attribution.largestShiftTime||(attribution.lcpEntry&&attribution.lcpEntry.startTime)||attribution.eventTime||'': '',
            });
        }

        (function() {
            var script = document.createElement('script');
            script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.attribution.iife.js';
            script.onload = function() {
                webVitals.onCLS(sendToGoogleAnalytics);
                webVitals.onFID(sendToGoogleAnalytics);
                webVitals.onLCP(sendToGoogleAnalytics);
                webVitals.onTTFB(sendToGoogleAnalytics);
                webVitals.onFCP(sendToGoogleAnalytics);
                webVitals.onINP(sendToGoogleAnalytics);
            }
            document.head.appendChild(script);
        }())