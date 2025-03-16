var BELLESA_CLIENT_ON_ERROR = {
          previous: null,
          current: null,
          occurrence: 0,
          timeoutId: null,
          delay: 1000,
        };

        function logClientErrorRequest(message, url, lineNumber, columnNumber, error) {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open('POST', 'https://www.bellesa.co/api/rest/v1/services/logs');
          xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
          xmlhttp.send(JSON.stringify({
            level: 'error',
            type: 'client',
            message: message,
            site: 'bellesa',
            url: window.location.href,
            recurrence: BELLESA_CLIENT_ON_ERROR.occurrence,
            error: {
              name: (error && error.name) || '',
              message: message,
              url: url,
              lineNumber: lineNumber,
              columnNumber: columnNumber,
              stack: (error && error.stack) || '',
            }
          }));

          // Reset for the next error call
          BELLESA_CLIENT_ON_ERROR.occurrence = 0;
        }

        // Capture/log unhandled errors
        window.onerror = function(message, url, lineNumber, columnNumber, error) {
          // Track the error for uniqueness (this should hopefully be enough)
          BELLESA_CLIENT_ON_ERROR.current = '' + message + url + lineNumber + columnNumber;
          BELLESA_CLIENT_ON_ERROR.occurrence += 1;

          // Same error occurred again, delay sending a little longer
          if (BELLESA_CLIENT_ON_ERROR.current === BELLESA_CLIENT_ON_ERROR.previous) {
            window.clearTimeout(BELLESA_CLIENT_ON_ERROR.timeoutId);
          }

          // Replace the previous error with the current if it's different
          if (BELLESA_CLIENT_ON_ERROR.current !== BELLESA_CLIENT_ON_ERROR.previous) {
            BELLESA_CLIENT_ON_ERROR.previous = BELLESA_CLIENT_ON_ERROR.current;
          }

          BELLESA_CLIENT_ON_ERROR.timeoutId = window.setTimeout(() => logClientErrorRequest(message, url, lineNumber, columnNumber, error), BELLESA_CLIENT_ON_ERROR.delay);
        }

        // Handy way to tap into the page
        // Good for animations
        // Firing something after the page is loaded
        window.load = new Promise(resolve => {
          window.addEventListener('DOMContentLoaded', resolve);
        });