window.googleAsyncLoad = function() {
  // Protection against double calling of this function
  (function(d) {
    var js;
    var id = 'google-jssdk';
    var ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.onload = loadGoogle;
    js.src = "https://accounts.google.com/gsi/client"
    ref.parentNode.insertBefore(js, ref);
  }(document));
}

if (!window.defer_google) {
  // Autoload if not deferred
  window.googleAsyncLoad();
} else {
  // Defer loading by 5 seconds
  setTimeout(function() {
    window.googleAsyncLoad();
  }, 5000);
}