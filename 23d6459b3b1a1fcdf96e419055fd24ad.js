(function(){
  // load outbrain js
  function loadOutbrain(){
    var ref = document.querySelector("div.OUTBRAIN");

    var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src', 'https://widgets.outbrain.com/outbrain.js');
    script.setAttribute('async', 'async');

    ref.appendChild(script);
  }

  // Disable on mobile and tablet screens
  // 880px is the upper bound for the `medium` breakpoint defined in UserAgent JS lib.
  var shouldDisable = false && screen.width <= 880;
  var hymnalPreviewContent = !!(window.location.href.indexOf("concert_preview") > -1);

  if (!shouldDisable && !hymnalPreviewContent) {
    // first, set a timeout to loadOutbrain, in case no ads load in 5s
    // (i.e., blocked). once an ad has loaded, create a new timeout that
    // will load outbrain if openmic doesn't get loaded in 2s
    //
    var adBlockerTimeoutId = setTimeout(loadOutbrain, 5000);
    document.body.addEventListener('first_ad_rendered', function(){
      clearTimeout(adBlockerTimeoutId);
      var outbrainTimeoutId = setTimeout(loadOutbrain, 2000);
      document.body.addEventListener('playlistRendered', function(){
        clearTimeout(outbrainTimeoutId);
      });
    });
  }
})();