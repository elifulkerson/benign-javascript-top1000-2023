/* Tealium */
      (function(a, b, c, d) {
        a = window.utag_data.url;
        b = document;
        c = 'script';
        d = b.createElement(c);
        d.src = a;
        d.type = 'text/java' + c;
        d.async = true;
        a = b.getElementsByTagName(c)[0];
        a.parentNode.insertBefore(d, a);
      })();