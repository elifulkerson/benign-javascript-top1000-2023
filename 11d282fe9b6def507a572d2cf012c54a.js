window.onload = function() { 
  
    // Delay to allow the async Google Ads to load
    setTimeout(function() { 
      
      // Get the first AdSense ad unit on the page
      var ad = document.querySelector("ins.adsbygoogle");
      
      // If the ads are not loaded, track the event
      if (ad && ad.innerHTML.replace(/\s/g, "").length == 0) {
 
        if (typeof ga !== 'undefined') {
 
            // Log an event in Universal Analytics
            // but without affecting overall bounce rate
            ga('send', 'event', 'Adblock', 'Yes', {'nonInteraction': 1}); 
 
        } else if (typeof _gaq !== 'undefined') {
 
            // Log a non-interactive event in old Google Analytics
            _gaq.push(['_trackEvent', 'Adblock', 'Yes', undefined, undefined, true]);
 
        }
      }
    }, 10000); // Run ad block detection 2 seconds after page load
  };