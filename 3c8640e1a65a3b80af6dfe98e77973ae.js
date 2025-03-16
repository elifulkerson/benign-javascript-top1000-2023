(function(w) {
        var q = [];
        w.$$trackJS = {
          q: q,
          track: function(e) {
            q.push([1, e])
          },
          addMetadata: function(k, m) {
            q.push([2, k, m]);
          },
          console: {
            info: function() {
              q.push([3].concat(Array.prototype.slice.call(arguments)));
            },
            warn: function() {
              q.push([4].concat(Array.prototype.slice.call(arguments)));
            },
          },
          removeMetadata: function(k) {
            q.push([5, k]);
          }
        };
        w.onerror = function(m, s, l, c, error) {
          if (error) {
            w.$$trackJS.track(error);
          }
          return true;
        };
        if (w.addEventListener) {
          w.addEventListener('unhandledrejection', function(ev) {
            ev.preventDefault();
            var r = ev.reason;
            if (r) {
              w.$$trackJS.track(r);
            }
          });
        }
      })(window);