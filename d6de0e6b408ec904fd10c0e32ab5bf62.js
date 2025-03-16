var PPID_REGEXP = /^([0-9a-zA-Z]{32,150})$|^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];

  googletag.cmd.push(function() {
    var { gam_ppid: ppid } = Object.fromEntries(document.cookie.split('; ').map((tmp) => tmp.split("=")));
    if (ppid && ppid.match(PPID_REGEXP)) {
      googletag.pubads().setPublisherProvidedId(ppid);
    }
  });