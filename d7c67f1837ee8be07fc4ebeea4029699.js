window.HPGam = window.HPGam || {};
  window.HPGam.cmd = window.HPGam.cmd || [];
  window.googletag = window.googletag || {};
  window.googletag.cmd = window.googletag.cmd || [];

  HPGam.cmd.push(function(){
    var units = [];
    var brandPlatform = ['huffpost'];
    var renderer = 'unknown';

    
    brandPlatform.push('desktop');
    
    
    var category = 'unknown';
    
    category = 'home';
    

    
    renderer = 'cambria';
    
    
    
    

    units.push(
      '6556',
      brandPlatform.join('.'),
      'en',
      category
    );
    
    var testAdStr = "".replace(/\s*/g, '');
    var testAds = testAdStr.length > 0 ? testAdStr.split(",") : [];

    HPGam.env.setParams({
      site: "us",
      section: category,
      subSections: [],
      platform: brandPlatform[1],
      platformNames: ["cambria"],
      pageTypes: ["atf","front","homepage","vert_front"],
      entryId: "",
      tags: [],
      testAds: testAds,
      bnp: "",
      adUnits: units,
      networkID: '6556',
      brandPlatform: brandPlatform.join('.'),
      locale: 'en',
      abData: ["hp_taboola_test-control"]
    });

    function targetMap() {
      function csvToArr(str) {
        var str2 = str.replace(/(^\s+|\s+$)/g, '');
        return (str2.length && str2.split(",") || []);
      }
      var r = [];
      function addKV(key, val) {
        if (val.length > 0) {
          r.push([key, val]);
        }
      }
      addKV("destination", "huffpost");
      addKV("edition", "us");
      addKV("hpid", "");
      
      addKV("zone3", "home");
      
      addKV("pageType", csvToArr("atf,front,homepage,vert_front"));
      addKV("section", csvToArr(""));
      
      
      
      addKV("user", csvToArr(""));
      var dfpKeywordVal = HPGam.getQuery("dfp-keyword");
      if (dfpKeywordVal) {
        addKV('dfp-keyword', dfpKeywordVal);
      }
      if (renderer) {
        addKV('renderer', renderer);
      }
      
      addKV('abtest', csvToArr("hp_taboola_test-control"));
      
      return r;
    }

    googletag.cmd.push(function(){
      var map = targetMap();
      HPGam.log('setTargeting', map);
      map.forEach(function(t){
        return googletag.pubads().setTargeting(t[0], t[1]);
      });
    });

    return;
  });