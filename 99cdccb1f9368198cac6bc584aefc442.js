//<![CDATA[
    ! function(a9, a, p, s, t, A, g) {
      if (a[a9]) return;
    
      function q(c, r) {
        a[a9]._Q.push([c, r])
      }
      a[a9] = {
      init: function() {
        q("i", arguments)
      },
      fetchBids: function() {
        q("f", arguments)
      },
      setDisplayBids: function() {},
        _Q: []
      };
      A = p.createElement(s);
      A.async = !0;
      A.src = t;
      g = p.getElementsByTagName(s)[0];
      g.parentNode.insertBefore(A, g)
    }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
    
    apstag.init({
      pubID: '3211', adServer: 'googletag', bidTimeout: 4e3, deals: true, params: { aps_privacy: '1YN' }
    });
  //]]>