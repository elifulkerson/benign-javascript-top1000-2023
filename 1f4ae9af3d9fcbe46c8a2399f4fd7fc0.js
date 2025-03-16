(function initSentry() {
  var options = window.ikeaExternalScriptOptions || {};
  var sentryOptions = options.sentry || {};
  var dsn = sentryOptions.dsn;
  var env = sentryOptions.env;

  if (!env || !window.Sentry) {
    return;
  }

  window.Sentry.init({
    dsn: dsn,
    environment: env,
    sampleRate: 0.1,
    beforeSend: (event, hint) => {
      const err = hint && hint.originalException;

      if (err && err.message) {
        const ignorePatterns = [
          /null is not an object \(evaluating 'this.selector.appendChild'\)/,
          /Preflight response is not successful/,
          /NotAllowedError: The request is not allowed by the user agent/,
          /Network request failed/,
          /NetworkError when attempting to fetch resource/,
          /cancelled/,
          /Abgebrochen/,
          /geannuleerd/,
          /avbruten/,
          /annullato/,
          /cancelado/,
          /annulÃ©/,
          /annulleret/,
          /anulowane/,
          /avbrutt/,
        ];

        for (var i = 0; i < ignorePatterns.length; i++) {
          if (err.message.match(ignorePatterns[i])) {
            return null;
          }
        }
      }

      return event;
    },
  });
})();
