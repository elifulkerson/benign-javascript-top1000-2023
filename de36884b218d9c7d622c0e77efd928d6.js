window.BOOMR_config = {
      autorun: false,
      Errors: {
        enabled: true,
        monitorGlobal: true,  // onerror
        monitorNetwork: false, // XHRs
        monitorConsole: true, // window.console.error
        monitorEvents: false,  // addEventListener
        monitorTimeout: false, // setTimeout, setInterval
        maxErrors: 10,         // max errors sent per page
        onError: function(err) {
          var text = err.message || "";
          return text.indexOf(".cnet.com") !== -1 &&   // first party
            text.indexOf("Script error") === -1 &&           // not a script error
            text.indexOf("Load timeout for modules") === -1; // not a load timeout
        }
      },
      // Enable Histroy plugin for SPA performance tracking
      // https://developer.akamai.com/tools/boomerang/legacy-spa#other-spas
      History: {
        auto: true,
        enabled: true
      }
    };

    (function(){
        if (window.BOOMR && window.BOOMR.version) {
          return;
        }
        var dom,doc,where,iframe = document.createElement("iframe");

        function boomerangSaveLoadTime(e) {
          window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
        }
        if (window.addEventListener) {
          window.addEventListener("load", boomerangSaveLoadTime, false);
        } else if (window.attachEvent) {
          window.attachEvent("onload", boomerangSaveLoadTime);
        }

        iframe.src = "javascript:void(0)";
        iframe.title = "";
        iframe.role = "presentation";
        (iframe.frameElement || iframe).style.cssText = "width:0;height:0;border:0;display:none;";
        where = document.getElementsByTagName("script")[0];
        where.parentNode.insertBefore(iframe, where);

        try {
          doc = iframe.contentWindow.document;
        } catch(e) {
          dom = document.domain;
          iframe.src = "javascript:var d = document.open(); d.domain='" + dom + "'; void(0);";
          doc = iframe.contentWindow.document;
        }
        doc.open()._l = function() {
          var js = this.createElement("script");
          if (dom) {
            this.domain = dom;
          }
          js.id = "boomr-if-as";
          js.src = "//c.go-mpulse.net/boomerang/38QDY-8CT77-8XNH2-VJQTD-EK4YX";
          BOOMR_lstart = new Date().getTime();
          this.body.appendChild(js);
        };
        doc.write('<body onload="document._l();">');
        doc.close();
    })();