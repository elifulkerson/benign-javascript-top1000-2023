if(window.innerWidth <= 500){
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
      // GPT ad slots
      var interstitialSlot;
      googletag.cmd.push(function () {
          // Define a web interstitial ad slot.
          interstitialSlot = googletag.defineOutOfPageSlot(
              '/27823234/GFG_Desktop_Interstitial',
              googletag.enums.OutOfPageFormat.INTERSTITIAL);
          // Slot returns null if the page or device does not support interstitials.
          if (interstitialSlot) {
              interstitialSlot.addService(googletag.pubads());
          }
          // Enable SRA and services.
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          googletag.display(interstitialSlot);
          googletag.pubads().refresh([interstitialSlot]);
      });
    }