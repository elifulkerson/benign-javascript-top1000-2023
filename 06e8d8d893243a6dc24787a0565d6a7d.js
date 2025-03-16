(function () {
    try {
      Sentry.init({
        dsn: "https://31b3f7bcba3e4968b21fbe03b7957b3b@o152342.ingest.sentry.io/5415568",
        
        beforeBreadcrumb: function(breadcrumb, hint) {
          return null
        },
        
        autoSessionTracking: true,
        
        
        ignoreErrors: ["Refused\x20to\x20evaluate\x20a\x20string\x20as\x20JavaScript","Non-Error\x20promise\x20rejection\x20captured\x20with\x20value:\x20Object\x20Not\x20Found\x20Matching\x20Id:","Illegal\x20invocation"],
        
        environment: "production",
        release: "homepage@2.9.0"
      })
      if (typeof window._GLID === 'string') {
        Sentry.setTag("ck.fers.glid", window._GLID)
      }
    } catch(e) {
      console.error('Unable to initialize Sentry')
    }
  })()