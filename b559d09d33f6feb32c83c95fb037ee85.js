window.fbAsyncInit = function() {
  FB.init({
    appId: "2369844204",
    version: "v8.0",
    status: true,
    cookie: true,
    xfbml: true
  });

  // Additional initialization code.
  if (window.InitFacebook) {
    // facebook.ts already loaded, set it up.
    window.InitFacebook();
  } else {
    // Set a flag for facebook.ts to find when it loads.
    window.academiaAuthReadyFacebook = true;
  }
};