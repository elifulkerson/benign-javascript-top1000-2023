(function(w, d) {
        var injectPreloadScriptLink = function(href) {
          var link = d.createElement('link');
          link.rel = 'preload';
          link.href = href;
          link.as = 'script';
          w.$$getHead().appendChild(link);
        };
        w.$$each(w.$$scripts, function(script) {
          injectPreloadScriptLink(script);
        });
      })(window, document);