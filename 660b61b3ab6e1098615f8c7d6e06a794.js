var IHPWT={}; //Initialize Namespace
      var pbjs = pbjs || {};
      pbjs.que = pbjs.que || [];
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      var gptRan = false;
      IHPWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT and Prebid
        loadPrebidAndGPT();
      };
      var loadPrebidAndGPT = function() {
        // Check the gptRan flag
        if (!gptRan) {
          gptRan = true;
          var gads = document.createElement('script');
          var useSSL = 'https:' == document.location.protocol;
          gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
          var node = document.getElementsByTagName('script')[0];
          node.parentNode.insertBefore(gads, node);
          var pbjsEl = document.createElement("script");
          pbjsEl.type = "text/javascript";
          pbjsEl.async = true;
          pbjsEl.src = "//b.cdnst.net/javascript/prebid.8.17.0.min.js"; //Your Prebid JS URL
          var pbjsTargetEl = document.getElementsByTagName("head")[0];
          pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
        }
      };
      // Failsafe to call prebid & gpt
      setTimeout(loadPrebidAndGPT, 100);