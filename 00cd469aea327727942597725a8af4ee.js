window.rapidConfig = (function(){
  var rapidJson = {"spaceid":"1197803116","async_all_clicks":true,"accountGUID":null,"tracked_mods":[],"nonanchor_track_class":"yr-track","rapid_noclick_resp":"yr-no-track","test_id":null,"keys":{"st_sec":"us.hpmg","pt":"home","ver":"cambria","p_sec":"homepage","p_subsec":"front-page","pageview_on_init":true},"pageview_on_init":true} || {};
  function getCookie(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }

  return rapidJson;
}());
if (window.getProfile) {
  window.getProfile()
  .then(function(profile) {
    if (!profile) return;
    window.rapidConfig.accountGUID = profile.guid;
    var subscription = profile.subscriptions.find(function(sub) {
      return sub.roles && sub.roles.indexOf('premium') > -1;
    });
    if (!subscription) {
      window.rapidConfig.keys.pl4 = 'basic';
      return;
    }
    switch (subscription.renewalPeriod) {
      case 'monthly':
        window.rapidConfig.keys.pl4 = 'premium-monthly';
      break;
      case 'yearly':
        window.rapidConfig.keys.pl4 = 'premium-annual';
      break;
    }
  })
  .then(function() {
    /*window.RapidInstance = new window.YAHOO.i13n.Rapid(window.rapidConfig);

    window.HUFFPOST.pageReady(function() {
      var sections = document.querySelectorAll('[data-rapid="marko-sec"]');
      window.HUFFPOST.rapidSecs = Array.prototype.map.call(sections, function(el) { return el.id });
      window.RapidInstance.addModules(window.HUFFPOST.rapidSecs, false, { useViewability: true });
      if ( window.RapidInstance.addModuleProgression && window.HUFFPOST.rapidSecs.includes("entry-body") ) {
        window.RapidInstance.addModuleProgression('entry-body');
      }
    });*/
  })
  .catch(function(e) {
    console.warn("Couldn't init Rapid", e);
  })
}