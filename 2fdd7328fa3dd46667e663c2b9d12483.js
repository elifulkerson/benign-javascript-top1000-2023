if (window.Sentry) {
        window.Sentry.onLoad(function() {
          window.Sentry.init({
            maxBreadcrumbs: 30,
            release: '9ee8e0209c4100dd733f42843e6e2714fc147f75',
            environment: 'prd',
            beforeSend: function(e, v) {
              if (/amazon-adsystem|ads-us|ampproject|amp4ads|pubads|2mdn|chartbeat|gsi|bk_addPageCtx|yimg|BOOMR|boomerang/.test(v.originalException && v.originalException.stack || '')) return null;
              return e;
            }  
          });
        });
      }