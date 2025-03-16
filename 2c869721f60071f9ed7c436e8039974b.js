function InitiateClevertapJs() {
        // console.log("clevertapInitiated")
        window.clevertap = { event: [], profile: [], account: [], onUserLogin: [], region: 'in1', notifications: [], privacy: [] };
        // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
        window.clevertap.account.push({ "id": '694-R65-566Z' });
        window.clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
        window.clevertap.privacy.push({ useIP: true }); //set the flag to true, if the user agrees to share their IP data
        scriptLoader("https://d2r1yp2w7bby2u.cloudfront.net/js/clevertap.min.js");
    }  function adRecoverScript() {
        (function (w, d) { var s = d.createElement("script"); s.src = "//delivery.adrecover.com/43988/adRecover.js"; s.type = "text/javascript"; s.async = true; (d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]).appendChild(s); })(window, document);
    }window.PWT = window.PWT || {};
    window.googletag = window.googletag || { cmd: [] };
    const scriptLoader = (src, onload = () => {}, options = {}) => {
        if (typeof document !== 'undefined') {
            let s = document.createElement('script');
            let el = document.getElementsByTagName('script')[0];
            s.defer = true;
            s.onload = onload;
            s.src = src;
            Object.keys(options).forEach((opt) => {
                if (opt == 'attr') {
                    Object.keys(options[opt]).forEach((key) => {
                        s.setAttribute(key, options[opt][key]);
                    });
                } else {
                    s[opt] = options[opt];
                }
            });
        
            el.parentNode.insertBefore(s, el);
        }
    };
    
    function q(c, r) {
        apstag._Q.push([c, r]);
    }
    var apstag = {
        init: function () {
            q("i", arguments);
        },
        fetchBids: function () {
            q("f", arguments);
        },
        setDisplayBids: function () { },
        _Q: [],
    };

    googletag.cmd.push(function () {
        googletag.pubads().setTargeting('section_name',"Home");
  googletag.pubads().setTargeting('meta_keywords', "News, Latest News, Breaking News, News Headlines, Live News, Today News, CNN-News18 Breaking News");
  googletag.pubads().setTargeting('Content_Type',"Home"); 
  googletag.pubads().setTargeting('DFP', "okay"); 
  googletag.pubads().setTargeting('page_url', "https://www.news18.com/");
  googletag.pubads().setTargeting('city', "");
        var referer = document.referrer;
        googletag.pubads().setTargeting('referer',referer);
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });

    window.addEventListener('load', (event) => {
        setTimeout(() => {
            var purl = window.location.href;
            var url = '//ads.pubmatic.com/AdServer/js/pwt/113941/2778';
            var profileVersionId = '';
            if (purl.indexOf('pwtv=') > 0) {
                var regexp = /pwtv=(.*?)(&|$)/g;
                var matches = regexp.exec(purl);
                if (matches.length >= 2 && matches[1].length > 0) {
                    profileVersionId = '/' + matches[1];
                }
            }
            scriptLoader(url + profileVersionId + "/pwt.js", () => {
                scriptLoader("https://securepubads.g.doubleclick.net/tag/js/gpt.js");
                setTimeout(() => {
                    adRecoverScript();
                }, 2000);
            });	
        }, 1000);
        setTimeout(() => {
            InitiateClevertapJs();
        }, 3000);
    });
 
  function executeParallelAuctionAlongsidePrebid(divid, adcode, adsizes) {
      var FAILSAFE_TIMEOUT = 1000;
      var requestManager = {
          adserverRequestSent: false,
          aps: false,
          prebid: false
      };
      var slot, requestSlot, interstitialSlot;
      if(adcode.includes("_OOP")) {
        if (adcode.includes("_INSTL_OOP")) {
            googletag.cmd.push(function () {
              slot = googletag.defineOutOfPageSlot(adcode, googletag.enums.OutOfPageFormat.INTERSTITIAL).addService(googletag.pubads());
              interstitialSlot = slot;
            });
          }
          else {
            googletag.cmd.push(function () {
              slot = googletag.defineOutOfPageSlot(adcode, divid).addService(googletag.pubads());
            });
          }
      }
      else{
        googletag.cmd.push(function () {
          slot = googletag.defineSlot(adcode, adsizes, divid).addService(googletag.pubads());
        });
      }
      googletag.cmd.push(function () {
          requestSlot = googletag.pubads().getSlots().filter(item => item.getSlotElementId() == divid);
      });

      // when both APS and Prebid have returned, initiate ad request
      function biddersBack() {
          if (requestManager.aps && requestManager.prebid) {
              sendAdserverRequest();
          }
          return;
      }
      
      // sends adserver request
      function sendAdserverRequest() {
        if (requestManager.adserverRequestSent === true) {
          return;
        }
        requestManager.adserverRequestSent = true;
        googletag.cmd.push(function () {
          googletag.pubads().refresh([slot]);
        });
        // auto-close interstitial
            if (adcode.includes("_INSTL_OOP")) {
                googletag.pubads().addEventListener('impressionViewable', (event) => {
                setTimeout(()=>{
                    googletag.destroySlots([interstitialSlot]);
                },15000)
                })
            }
        }
        
      // sends bid request to APS and Prebid
      function requestHeaderBids() {
        //Ignoring NW18 Internal ads for header bidding
        if (adcode.includes("_OOP") || adcode.includes("_1x1")) {
            return sendAdserverRequest();
        }
          // APS request
          apstag.init({
              pubID: '779bdaf2-7955-402f-9476-b0a531d45eaa',
              adServer: 'googletag'
          });
          apstag.fetchBids({
              slots: [{
                slotID: divid,
                slotName: adcode,
                sizes: adsizes
              }]
          }, function (bids) {
              googletag.cmd.push(function () {
                  apstag.setDisplayBids();
                  requestManager.aps = true;
                  biddersBack();
              });
          });                
          googletag.cmd.push(function () {
              if (typeof PWT.requestBids === 'function') {
                  PWT.requestBids(PWT.generateConfForGPT(requestSlot), function (adUnitArray) {
                      PWT.addKeyValuePairsToGPTSlots(adUnitArray);
                      requestManager.prebid = true;
                      biddersBack();
                  });
              } else {
                  requestManager.prebid = true;
                  biddersBack();
              };
          });

      }

      // initiate bid request
      requestHeaderBids();

      // set failsafe timeout
      window.setTimeout(function () {
          sendAdserverRequest();
      }, FAILSAFE_TIMEOUT);
  }