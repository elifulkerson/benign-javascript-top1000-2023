window.comscore_data = {"c1":2,"c2":6723616,"c3":"","c4":"https://www.huffpost.com/","c5":"front-page","c6":"","c15":"","options":{"url_append":"comscorekw=front-page"}};

  var script = document.createElement("script");
  script.src = "https://sb.scorecardresearch.com/beacon.js";
  script.async = true;
  script.onload = function() {
    if (window.__cmp) {
      window.__cmp('getVendorConsents', null, function(cmpData, cmpSuccess) {
        window.waitForGlobal('__uspapi', function() {
          window.__uspapi( 'getDoNotSell', 1, function(uspData, uspSuccess) {
            if ( cmpSuccess && cmpData && cmpData.gdprApplies && cmpData.vendorConsents ) {
              console.log('[COMSCORE] cs_ucfr from vendorConsents');
              window.comscore_data.cs_ucfr = cmpData.vendorConsents[77] ? 1 : 0; // 77 is comscore's vendor id
            } else if ( uspSuccess && uspData && uspData.hasOwnProperty('doNotSell') ) {
              // "doNotSell === true" => user has opted out of letting us sell their info
              // "doNotSell === false" => user hasn't opted out
              console.log('[COMSCORE] cs_ucfr from USP');
              window.comscore_data.cs_ucfr = uspData.doNotSell ? 0 : 1;
            }
            if (window.COMSCORE) {
              window.COMSCORE.beacon(window.comscore_data);
            }
          });
        });
      });
    } else {
      if (window.COMSCORE) {
        window.COMSCORE.beacon(window.comscore_data);
      }
    }
  };
  document.body.appendChild(script);