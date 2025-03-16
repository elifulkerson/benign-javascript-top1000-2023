window.googletag = window.googletag || {cmd: []};
  
  if (sessionStorage.getItem("bucket_test") === null) {
    sessionStorage.setItem("bucket_test", Math.floor((Math.random() * 20) + 1));
  }
  
  googletag.cmd.push(function() {
    googletag.pubads().setTargeting("ddURL", window.location.href);
    googletag.pubads().setTargeting("ddDomain", "downdetector.com");
    googletag.pubads().setTargeting("bucket_test", sessionStorage.getItem("bucket_test"));
  });