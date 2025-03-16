(function(w) {
        w.$$requestPaint(function() {
          var isAvailable = function(v) {
            return typeof v !== 'undefined';
          };
          if (!(
            isAvailable(Array.from)
            && isAvailable(Array.prototype.fill)
            && isAvailable(Array.prototype.find)
            && isAvailable(Array.prototype.findIndex)
            && isAvailable(Array.prototype.includes)
            && isAvailable(String.prototype.includes)
            && isAvailable(String.prototype.padStart)
            && isAvailable(String.prototype.startsWith)
            && isAvailable(String.prototype.endsWith)
            && isAvailable(Math.trunc)
            && isAvailable(Number.isNaN)
            && isAvailable(Number.parseInt)
            && isAvailable(Number.parseFloat)
            && isAvailable(Object.entries)
            && isAvailable(Object.values)
            && isAvailable(Object.fromEntries)
            && isAvailable(w.fetch)
            && isAvailable(w.Promise)
            && isAvailable(w.Map)
            && isAvailable(w.Set)
            && isAvailable(w.URL)
            && isAvailable(w.URLSearchParams)
          )) {
            w.$$trackJS.console.info('Polyfills required');
            w.$$loadScript("https://s.smallpdf.com/static/b869c5e2a1fc0b28d969-polyfills.js", false);
          }
          var n = 0;
          var handleScriptLoad = function() {
            n += 1;
            if (n === w.$$scripts.length) {
              w.$$triggerBundle();
            }
          };
          w.$$each(w.$$scripts, function(script) {
            w.$$loadScript(script, false, handleScriptLoad);
          });
        });
      })(window);