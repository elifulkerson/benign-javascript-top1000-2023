//load the apstag.js library
  !(function (a9, a, p, s, t, A, g) {
    if (a[a9]) return;
    function q(c, r) {
      a[a9]._Q.push([c, r]);
    }
    a[a9] = {
      init: function () {
        q("i", arguments);
      },
      fetchBids: function () {
        q("f", arguments);
      },
      setDisplayBids: function () {},
      targetingKeys: function () {
        return [];
      },
      _Q: [],
    };
    A = p.createElement(s);
    A.async = !0;
    A.src = t;
    g = p.getElementsByTagName(s)[0];
    g.parentNode.insertBefore(A, g);
  })(
    "apstag",
    window,
    document,
    "script",
    "//c.amazon-adsystem.com/aax2/apstag.js"
  );
  //initialize the apstag.js library on the page to allow bidding
  apstag.init({
    pubID: "26bcdfda-ceb4-4990-9499-0e9e49381175", //enter your pub ID here as shown above, it must within quotes
    adServer: "googletag",
  });
  /** Executes a parallel auction with prebid **/
  function executeParallelAuctionAlongsidePrebid() {
    var requestManager = {
      adserverRequestSent: false,
      aps: false,
    };
    // sends bid request to APS and Prebid
    function requestHeaderBids() {
      // APS request
      var adUnit = "";
      if (utag_data.tipo_pagina == "home" && window.location.pathname == "/") {
        adUnit = "85042905/" + utag_data.ad_unit + "/home";
        apstag.fetchBids(
          {
            slots: [
              {
                slotID: "pub-super-1",
                slotName: adUnit,
                sizes: [
                  [728, 90],
                  [970, 90],
                  [970, 250],
                  [970, 150],
                  [1190, 250],
                  [1190, 150],
                ],
              },
              {
                slotID: "pub-super-2",
                slotName: adUnit,
                sizes: [
                  [970, 250],
                  [728, 90],
                  [970, 90],
                  [970, 150],
                  [1190, 250],
                ],
              },
              {
                slotID: "pub-super-3",
                slotName: adUnit,
                sizes: [
                  [970, 90],
                  [728, 90],
                  [970, 250],
                  [1190, 250],
                  [970, 150],
                ],
              },
              {
                slotID: "pub-super-4",
                slotName: adUnit,
                sizes: [
                  [970, 90],
                  [728, 90],
                  [970, 250],
                  [1190, 250],
                  [970, 150],
                ],
              },
              {
                slotID: "pub-retangulo-1",
                slotName: adUnit,
                sizes: [[300, 250]],
              },
              {
                slotID: "pub-retangulo-2",
                slotName: adUnit,
                sizes: [
                  [300, 250],
                  [300, 600],
                ],
              },
            ],
            timeout: 2e3,
          },
          function (bids) {
            googletag.cmd.push(function () {
              apstag.setDisplayBids();
              requestManager.aps = true; // signals that APS request has completed
            });
          }
        );
      } else if (utag_data.tipo_pagina == "home") {
        adUnit = "85042905/" + utag_data.ad_unit;
        apstag.fetchBids(
          {
            slots: [
              {
                slotID: "mc-container-top",
                slotName: adUnit,
                sizes: [
                  [728, 90],
                  [970, 90],
                  [970, 250],
                  [970, 150],
                  [1190, 250],
                  [1190, 150],
                ],
              },
              {
                slotID: "banner_slb_meio",
                slotName: adUnit,
                sizes: [
                  [728, 90],
                  [970, 90],
                  [970, 250],
                  [970, 150],
                  [1190, 250],
                ],
              },
              {
                slotID: "banner_feed__0",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [728, 90],
                  [300, 250],
                ],
              },
              {
                slotID: "banner_middle_feed__1",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [728, 90],
                  [300, 250],
                ],
              },
              {
                slotID: "banner_feed__1",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [728, 90],
                  [300, 250],
                ],
              },
              {
                slotID: "banner_middle_feed__2",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [728, 90],
                  [300, 250],
                ],
              },
            ],
            timeout: 2e3,
          },
          function (bids) {
            googletag.cmd.push(function () {
              apstag.setDisplayBids();
              requestManager.aps = true; // signals that APS request has completed
            });
          }
        );
      } else if (utag_data.tipo_pagina == "topic") {
        adUnit = "85042905/" + utag_data.ad_unit;
        apstag.fetchBids(
          {
            slots: [
              {
                slotID: "mc-container-top",
                slotName: adUnit,
                sizes: [
                  [970, 90],
                  [728, 90],
                  [970, 250],
                  [970, 150],
                  [1190, 250],
                  [1190, 150],
                ],
              },
              {
                slotID: "pub-retangulo-1",
                slotName: adUnit,
                sizes: [[300, 250]],
              },
              {
                slotID: "pub-retangulo-2",
                slotName: adUnit,
                sizes: [[300, 250]],
              },
              {
                slotID: "banner_feed__0",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [728, 90],
                  [300, 250],
                ],
              },
              {
                slotID: "banner_middle_feed__1",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [970, 90],
                  [300, 250],
                ],
              },
              {
                slotID: "banner_feed__1",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [728, 90],
                  [300, 250],
                ],
              },
            ],
            timeout: 2e3,
          },
          function (bids) {
            googletag.cmd.push(function () {
              apstag.setDisplayBids();
              requestManager.aps = true; // signals that APS request has completed
            });
          }
        );
      } else {
        adUnit = "85042905/" + utag_data.ad_unit;
        apstag.fetchBids(
          {
            slots: [
              {
                slotID: "mc-container-top",
                slotName: adUnit,
                sizes: [
                  [970, 90],
                  [728, 90],
                  [970, 250],
                  [970, 150],
                  [1190, 250],
                  [1190, 150],
                ],
              },
              {
                slotID: "banner_materia1",
                slotName: adUnit,
                sizes: [[300, 250]],
              },
              {
                slotID: "pub-in-text",
                slotName: adUnit,
                sizes: [
                  [640, 360],
                  [640, 480],
                ],
              },
              {
                slotID: "banner_materia2",
                slotName: adUnit,
                sizes: [
                  [970, 90],
                  [728, 90],
                  [970, 250],
                  [970, 150],
                  [1190, 250],
                ],
              },
              {
                slotID: "banner_feed__0",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [970, 250],
                  [970, 90],
                  [970, 150],
                ],
              },
              {
                slotID: "banner_middle_feed__1",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [970, 250],
                  [970, 90],
                  [728, 90],
                  [970, 150],
                ],
              },
              {
                slotID: "banner_feed__1",
                slotName: adUnit,
                sizes: [
                  [600, 300],
                  [970, 250],
                  [970, 90],
                  [970, 150],
                ],
              },
            ],
            timeout: 2e3,
          },
          function (bids) {
            googletag.cmd.push(function () {
              apstag.setDisplayBids();
              requestManager.aps = true; // signals that APS request has completed
            });
          }
        );
      }
    }
    // initiate bid request
    requestHeaderBids();
  }
  executeParallelAuctionAlongsidePrebid();