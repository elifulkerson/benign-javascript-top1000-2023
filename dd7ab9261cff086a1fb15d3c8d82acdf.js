const messageCounts = {};
              onerror = function (m, s, l, c, e) {
                var getError = function(e){var t=e;return"object"==typeof e&&(e instanceof Array||(t={},Object.getOwnPropertyNames(e).forEach((function(r){t[r]=e[r]})))),t};
                var _e = e || {};
                messageCounts[m] = (messageCounts[m] || 0) + 1;
                if (_e.__handled || messageCounts[m] > 3) return;
                var x = new XMLHttpRequest();
                x.open('POST', '/_errors');
                x.setRequestHeader('Content-Type', 'application/json');
                x.send(
                  JSON.stringify({
                    message: m,
                    source: s,
                    line: l,
                    col: c,
                    error: getError(_e),
                  })
                );
                _e.__handled = true;
              };