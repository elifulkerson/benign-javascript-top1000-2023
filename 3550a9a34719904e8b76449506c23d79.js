(function(w, d) {
        var styleSheets = ["https://s.smallpdf.com/static/bd18bdd931f4dbe67355.css"];
        var n = 0;
        var handleStyleSheetLoad = function() {
          n += 1;
          if (n === styleSheets.length) {
            if (d.body.classList) {
              d.body.classList.add('css-styles-loaded');
            }
          }
        };
        w.$$requestBundle(function() {
          w.$$each(styleSheets, function (styleSheet) {
            var link = d.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.onload = handleStyleSheetLoad;
            link.href = styleSheet;
            w.$$getHead().appendChild(link);
          });
        });
      })(window, document);