(function () {
  if (typeof Sentry === 'undefined') return;
  var sentryConfig;
  try {
    sentryConfig = JSON.parse("{\"publicDsn\":\"https://632c598283934f76a6a49e66102577da@o75955.ingest.sentry.io/251057\",\"enabled\":true,\"sampleRate\":0.1}");
  } catch (err) {
    sentryConfig = null;
  }
  if (sentryConfig && sentryConfig.publicDsn) {
    Sentry.init({
      allowUrls: [new RegExp('^webpack://'), new RegExp('^https://d3njjcbhbojbot.cloudfront.net/web')],
      dsn: sentryConfig.publicDsn,
      enabled: sentryConfig.enabled,
      environment: 'production',
      integrations: [new Sentry.BrowserTracing()],
      release: 'b37742378934f1df16028ae03fbfcaf5808587a4',
      sampleRate: sentryConfig.sampleRate,
      tracesSampleRate: sentryConfig.sampleRate / 10
    });
    Sentry.setTag('appname', 'front-page');
    Sentry.setTag('version', 'b37742378934f1df16028ae03fbfcaf5808587a4');
    if ("{{APPVERSION_ACA}}".indexOf('APPVERSION_ACA') < 0) {
      Sentry.setTag('aca', "{{APPVERSION_ACA}}");
    }
  }
})();