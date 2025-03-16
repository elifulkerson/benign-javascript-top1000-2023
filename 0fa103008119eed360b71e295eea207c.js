(function () {
  // Create box visitor ID for use in gen204 tracking below.
  // Similar to http://phpjs.org/functions/uniqid/
  function uniqid(prefix, more_entropy) {
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Kankrelune (http://www.webfaktory.info/)
    // %        note 1: Uses an internal counter (in php_js global) to avoid collision
    if (typeof prefix === 'undefined') {
      prefix = "";
    }

    var retId;
    var formatSeed = function (seed, reqWidth) {

      // To hex str.
      seed = parseInt(seed, 10).toString(16);

      // So long we split.
      if (reqWidth < seed.length) {
        return seed.slice(seed.length - reqWidth);
      }

      // So short we pad.
      if (reqWidth > seed.length) {
        return Array(1 + (reqWidth - seed.length)).join('0') + seed;
      }
      return seed;
    };

    // BEGIN REDUNDANT

    if (!window.php_js) {
      window.php_js = {};
    }

    // END REDUNDANT
    // Init seed with big random int.
    if (!window.php_js.uniqidSeed) {
      window.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
    }
    window.php_js.uniqidSeed++;

    // Start with prefix, add current milliseconds hex string.
    retId = prefix;
    retId += formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);

    // Add seed hex string.
    retId += formatSeed(window.php_js.uniqidSeed, 5);
    if (more_entropy) {

      // For more entropy we add a float lower to 10.
      retId += (Math.random() * 10).toFixed(8).toString();
    }

    return retId;
  }

  //  Get domain.
  var cookieDomain = document.domain.replace(/^[^.]+\./g, "");

  // Data layer variables.
  window.analyticsData = window.analyticsData || {};
  analyticsData.boxVisitorID = Cookies.get('box_visitor_id');

  // Check cookie has created the id.
  if (!analyticsData.boxVisitorID) {

    // Generate a new id.
    var uniqueId = uniqid('', true);

    // Assign on the data layer.
    analyticsData.boxVisitorID = uniqueId;

    // Set the cookie.
    Cookies.set('box_visitor_id', uniqueId, {
      domain: cookieDomain,
      path: '/',
      expires: 365,
      secure: location.protocol != 'https:' ? false : true
    });
  }
})();