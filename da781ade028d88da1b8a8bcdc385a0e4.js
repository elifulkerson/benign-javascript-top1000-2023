window.fbAsyncLoad = function() {
  // Protection against double calling of this function
  if (window.FB) {
      return;
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

if (!window.defer_facebook) {
  // Autoload if not deferred
  window.fbAsyncLoad();
} else {
  // Defer loading by 5 seconds
  setTimeout(function() {
    window.fbAsyncLoad();
  }, 5000);
}