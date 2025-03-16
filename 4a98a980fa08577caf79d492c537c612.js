(function(w, d) {
        w.$$each = function(arr, fn) {
          for (var i = 0; i < arr.length; i++) {
            fn(arr[i], i, arr);
          }
        };
        w.$$getHead = function() {
          return d.getElementsByTagName('head')[0] || document.documentElement;
        };
        w.$$mark = function(name) {
          if (typeof w.performance !== 'undefined' && typeof w.performance.measure !== 'undefined') {
            w.performance.measure(name);
          }
        };
        w.$$mark('body_execution_started');
        var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame;
        w.$$requestPaint = function(fn) {
          if (raf) {
            raf(function() {
              w.setTimeout(fn, 0);
            });
          } else {
            if (w.addEventListener) {
              w.addEventListener('load', fn);
            } else if (w.attachEvent) {
              w.attachEvent('onload', fn);
            } else {
              w.setTimeout(fn, 0);
            }
          }
        };
        var t = false;
        var q = [];
        w.$$requestBundle = function(fn) {
          if (t) {
            fn();
          } else {
            q.push(fn);
          }
        };
        w.$$triggerBundle = function() {
          t = true;
          w.$$each(q, function(fn) {
            fn();
          });
          q = [];
        };
        w.$$loadScript = function(src, deferred, callback) {
          var head = w.$$getHead();
          var done = false;
          var script = d.createElement('script');
          script.type = 'text/javascript';
          script.async = false;
          script.defer = deferred;
          script.onload = script.onerror = script.onreadystatechange = function() {
            if (!done && (!script.readyState || script.readyState === "loaded" || script.readyState === "complete")) {
              done = true;
              script.onload = script.onerror = script.onreadystatechange = null;
              if (head && script.parentNode) {
                head.removeChild(script);
              }
              if (callback) {
                callback();
              }
            }
          };
          script.src = src;
          head.appendChild(script);
        };
        w.$$scripts = ["https://s.smallpdf.com/static/bd18bdd931f4dbe67355-landing.js"];
      })(window, document);