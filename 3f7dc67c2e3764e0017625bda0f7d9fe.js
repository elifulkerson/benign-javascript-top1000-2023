var isChromium = window.chrome;
        var winNav = window.navigator;
        var vendorName = winNav.vendor;
        var isOpera = typeof window.opr !== "undefined";
        var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
        var isIOSChrome = winNav.userAgent.match("CriOS");


        if (isIOSChrome) {
          // is Google Chrome on IOS
        } else if (
          isChromium !== null &&
          typeof isChromium !== "undefined" &&
          vendorName === "Google Inc." &&
          isOpera === false &&
          isIEedge === false
        ) {
          /*
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//avgle.com/sw.js';
      head.appendChild(script);
      */
          // document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://pussl48.com/483debfe31743e60cc35e4c11b6ed602/invoke.js"></scr' + 'ipt>');
          // is Google Chrome
        } else {
          // not Google Chrome
        }