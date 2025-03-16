(function () {
        'use strict';
        var sources = ["/assets/client/vendor.b755d0429b7d3e4653e7.1.js","/assets/client/app.9d43dd7263292f578ea0.1.js"];
        var attrs = {"defer":true};
        sources.forEach(function (src) {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          Object.keys(attrs).forEach(function (attrKey) { script.setAttribute(attrKey, attrs[attrKey]); });
          script.src = src;
          document.body.appendChild(script);
        });
      })()