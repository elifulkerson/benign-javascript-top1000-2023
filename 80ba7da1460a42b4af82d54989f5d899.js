// Initialize the agent at application startup.
      var fpPromise = import('/js/fingerprintjs.min.js')
        .then(FingerprintJS => FingerprintJS.load())