(function () {
          /* eslint-disable */
          function getLocalStoragePolyfill() {
            var instance = {};

            function set(type, value) {
              instance[type] = value;
            }

            function get(type, def) {
              return instance[type] || def || null;
            }

            function clear() {
              for (var key in instance) {
                delete instance[key];
              }
            }

            return {
              get: get,
              set: set,
              clear: clear
            };
          }

          var localStoragePolyfill = getLocalStoragePolyfill();

          var checkLocalStorage = function () {
            try {
              window.localStorage.setItem('a', 'b');
              window.localStorage.removeItem('a');
              return true;
            } catch (e) {
              return false;
            }
          };

          if (!checkLocalStorage()) {
            window.localStorage = {};
            window.localStorage.getItem = localStoragePolyfill.get;
            window.localStorage.setItem = localStoragePolyfill.set;

            window.localStorage.removeItem = function (key) {
              localStoragePolyfill.set(key, null);
            };

            window.localStorage.clear = localStoragePolyfill.clear;

            window.localStorage.key = function () {
              return null;
            };
          }
          /* eslint-enable */

        })({})