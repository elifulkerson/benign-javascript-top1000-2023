<!--
    window.$Nav && $Nav.declare('config.fixedBarBeacon',false);
    window.$Nav && $Nav.when("data").run(function(data) { data({"freshTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<style>#nav-flyout-fresh{width:269px;padding:0;}#nav-flyout-fresh .nav-flyout-content{padding:0;}</style><a href='/amazonfresh'><img src='https://images-eu.ssl-images-amazon.com/images/G/02/omaha/images/yoda/flyout_72dpi._V270092858_.png' /></a>"}}}},"cartTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mi cesta","url":"/gp/cart/view.html?ref_=nav_err_cart_timeout"},"title":" ","paragraph":"Hay un problema al recuperar su cesta en este momento."}}}},"primeTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<a href='/gp/prime?ref_=nav_prime_btn_fb'><img src='https://images-eu.ssl-images-amazon.com/images/G/02/prime/yourprime/yourprime-widget-piv-fallback._V310089192_.jpg' /></a>"}}}},"ewcTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mi cesta","url":"/gp/cart/view.html?ref_=nav_err_ewc_timeout"},"title":" ","paragraph":"Hay un problema al recuperar su cesta en este momento"}}}},"errorWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mi lista de deseos","url":"/gp/registry/wishlist/?ref_=nav_err_wishlist"},"title":" ","paragraph":"Hay un problema recuperar la lista ahora"}}}},"emptyWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mi lista de deseos","url":"/gp/registry/wishlist/?ref_=nav_err_empty_wishlist"},"title":" ","paragraph":"La lista está vacía"}}}},"yourAccountContent":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mi cuenta","url":"/gp/css/homepage.html?ref_=nav_err_youraccount"},"title":" ","paragraph":"Hay un problema recuperar la lista ahora"}}}},"shopAllTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"Hay un problema recuperar la lista ahora"}}}},"kindleTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"Hay un problema recuperar la lista ahora"}}}}}); });
window.$Nav && $Nav.when("util.templates").run("FlyoutErrorTemplate", function(templates) {
      templates.add("flyoutError", "<# if(error.title) { #><span class='nav-title'><#=error.title #></span><# } #><# if(error.paragraph) { #><p class='nav-paragraph'><#=error.paragraph #></p><# } #><# if(error.button) { #><a href='<#=error.button.url #>' class='nav-action-button' ><span class='nav-action-inner'><#=error.button.text #></span></a><# } #>");
    });

    if (typeof uet == 'function') {
    uet('bb', 'iss-init-pc', {wb: 1});
  }
  if (!window.$SearchJS && window.$Nav) {
    window.$SearchJS = $Nav.make('sx');
  }

  var opts = {
    host: "completion.amazon.co.uk/search/complete"
  , marketId: "44551"
  , obfuscatedMarketId: "A1RKKUPIHCS9HS"
  , searchAliases: ["amazon-devices","amazonfresh","dia","mercadodelapaz","audible","stripbooks","english-books","foreign-books","popular","dvd","electronics","software","videogames","aps","watches","toys","kitchen","digital-text","mobile-apps","gift-cards","baby","shoes","mp3-downloads","digital-music","digital-music-track","digital-music-album","computers","automotive","vehicles","sporting","diy","jewelry","lighting","office-products","hpc","apparel","mi","warehouse-deals","handmade","handmade-jewelry","handmade-home-and-kitchen","lawngarden","grocery","beauty","industrial","instant-video","black-friday","cyber-monday","pets","appliances","alexa-skills","amazon-global-store","under-ten-dollars","specialty-aps-sns","luxury","prime-wardrobe","fashion","fashion-baby","fashion-baby-boys","fashion-baby-girls","fashion-boys","fashion-boys-accessories","fashion-boys-clothing","fashion-boys-jewelry","fashion-boys-shoes","fashion-boys-watches","fashion-girls","fashion-girls-accessories","fashion-girls-clothing","fashion-girls-jewelry","fashion-girls-shoes","fashion-girls-watches","fashion-luggage","fashion-mens","fashion-mens-accessories","fashion-mens-clothing","fashion-mens-jewelry","fashion-mens-shoes","fashion-mens-watches","fashion-womens","fashion-womens-accessories","fashion-womens-clothing","fashion-womens-handbags","fashion-womens-jewelry","fashion-womens-shoes","fashion-womens-watches"]
  , filterAliases: []
  , pageType: "Gateway"
  , requestId: "HETT4VZW343THJHAD5GH"
  , sessionId: "259-0697940-8176965"
  , language: "es_ES"
  , customerId: ""
  , asin: ""
  , b2b: 0
  , fresh: 0
  , isJpOrCn: 0
  , isUseAuiIss: 1
};

var issOpts = {
    fallbackFlag: 1
  , isDigitalFeaturesEnabled: 0
  , isWayfindingEnabled: 0
  , dropdown: "select.searchSelect"
  , departmentText: "en {department}"
  , suggestionText: "Sugerencias de búsqueda"
  , recentSearchesTreatment: "C"
  , authorSuggestionText: "Explora libros XXAUTHXX"
  , translatedStringsMap: {"sx-recent-searches":"Búsquedas recientes","sx-your-recent-search":"Inspirado por tu búsqueda reciente"}
  , biaTitleText: ""
  , biaPurchasedText: ""
  , biaViewAllText: ""
  , biaViewAllManageText: ""
  , biaAndText: ""
  , biaManageText: ""
  , biaWeblabTreatment: ""
  , issNavConfig: {}
  , np: 0
  , issCorpus: []
  , cf: 1
  , removeDeepNodeISS: ""
  , trendingTreatment: "C"
  , useAPIV2: ""
  , opfSwitch: ""
  , isISSDesktopRefactorEnabled: "1"
  , useServiceHighlighting: "true"
  , isInternal: 0
  , isAPICachingDisabled: true
  , isBrowseNodeScopingEnabled: false
  , isStorefrontTemplateEnabled: false
  , disableAutocompleteOnFocus: ""
};

  if (opts.isUseAuiIss === 1 && window.$Nav) {
  window.$Nav.when('sx.iss').run('iss-mason-init', function(iss){
    var issInitObj = buildIssInitObject(opts, issOpts, true);
    new iss.IssParentCoordinator(issInitObj);

    $SearchJS.declare('canCreateAutocomplete', issInitObj);
  });
} else if (window.$SearchJS) {
  var iss;

  // BEGIN Deprecated globals
  var issHost = opts.host
    , issMktid = opts.marketId
    , issSearchAliases = opts.searchAliases
    , updateISSCompletion = function() { iss.updateAutoCompletion(); };
  // END deprecated globals


  $SearchJS.when('jQuery', 'search-js-autocomplete-lib').run('autocomplete-init', initializeAutocomplete);
  $SearchJS.when('canCreateAutocomplete').run('createAutocomplete', createAutocomplete);

} // END conditional for window.$SearchJS
  function initializeAutocomplete(jQuery) {
  var issInitObj = buildIssInitObject(opts, issOpts);
  $SearchJS.declare("canCreateAutocomplete", issInitObj);
} // END initializeAutocomplete
  function initSearchCsl(searchCSL, issInitObject) {
  searchCSL.init(
    opts.pageType,
    (window.ue && window.ue.rid) || opts.requestId
  );
  $SearchJS.declare("canCreateAutocomplete", issInitObject);
} // END initSearchCsl
  function createAutocomplete(issObject) {
  iss = new AutoComplete(issObject);

  $SearchJS.publish("search-js-autocomplete", iss);

  logMetrics();
} // END createAutocomplete
  function buildIssInitObject(opts, issOpts, isNewIss) {
    var issInitObj = {
        src: opts.host
      , sessionId: opts.sessionId
      , requestId: opts.requestId
      , mkt: opts.marketId
      , obfMkt: opts.obfuscatedMarketId
      , pageType: opts.pageType
      , language: opts.language
      , customerId: opts.customerId
      , fresh: opts.fresh
      , b2b: opts.b2b
      , aliases: opts.searchAliases
      , fb: issOpts.fallbackFlag
      , isDigitalFeaturesEnabled: issOpts.isDigitalFeaturesEnabled
      , isWayfindingEnabled: issOpts.isWayfindingEnabled
      , issPrimeEligible: issOpts.issPrimeEligible
      , deptText: issOpts.departmentText
      , sugText: issOpts.suggestionText
      , filterAliases: opts.filterAliases
      , biaWidgetUrl: opts.biaWidgetUrl
      , recentSearchesTreatment: issOpts.recentSearchesTreatment
      , authorSuggestionText: issOpts.authorSuggestionText
      , translatedStringsMap: issOpts.translatedStringsMap
      , biaTitleText: ""
      , biaPurchasedText: ""
      , biaViewAllText: ""
      , biaViewAllManageText: ""
      , biaAndText: ""
      , biaManageText: ""
      , biaWeblabTreatment: ""
      , issNavConfig: issOpts.issNavConfig
      , cf: issOpts.cf
      , ime: opts.isJpOrCn
      , mktid: opts.marketId
      , qs: opts.isJpOrCn
      , issCorpus: issOpts.issCorpus
      , deepNodeISS: {
          searchAliasAccessor: function($) {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAlias()) ||
                   $('select.searchSelect').children().attr('data-root-alias');
          },
          searchAliasDisplayNameAccessor: function() {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAliasDisplayName());
          }
        }
      , removeDeepNodeISS: issOpts.removeDeepNodeISS
      , trendingTreatment: issOpts.trendingTreatment
      , useAPIV2: issOpts.useAPIV2
      , opfSwitch: issOpts.opfSwitch
      , isISSDesktopRefactorEnabled: issOpts.isISSDesktopRefactorEnabled
      , useServiceHighlighting: issOpts.useServiceHighlighting
      , isInternal: issOpts.isInternal
      , isAPICachingDisabled: issOpts.isAPICachingDisabled
      , isBrowseNodeScopingEnabled: issOpts.isBrowseNodeScopingEnabled
      , isStorefrontTemplateEnabled: issOpts.isStorefrontTemplateEnabled
      , disableAutocompleteOnFocus: issOpts.disableAutocompleteOnFocus
      , asin: opts.asin
    };
  
    // If we aren't using the new ISS then we need to add these properties
    
    if (!isNewIss) {
      issInitObj.dd = issOpts.dropdown; // The element with id searchDropdownBox doesn't exist in C.
      issInitObj.imeSpacing = issOpts.imeSpacing;
      issInitObj.isNavInline = 1;
      issInitObj.triggerISSOnClick = 0;
      issInitObj.sc = 1;
      issInitObj.np = issOpts.np;
    }
  
    return issInitObj;
  } // END buildIssInitObject
  function logMetrics() {
  if (typeof uet == 'function' && typeof uex == 'function') {
      uet('be', 'iss-init-pc',
          {
              wb: 1
          });
      uex('ld', 'iss-init-pc',
          {
              wb: 1
          });
  }
} // END logMetrics
  
    
window.$Nav && $Nav.declare('config.navDeviceType','desktop');

window.$Nav && $Nav.declare('config.navDebugHighres',false);

window.$Nav && $Nav.declare('config.pageType','Gateway');
window.$Nav && $Nav.declare('config.subPageType','desktop');

window.$Nav && $Nav.declare('config.dynamicMenuUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdynamic\x2Dmenu.html');

window.$Nav && $Nav.declare('config.dismissNotificationUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdismissnotification.html');

window.$Nav && $Nav.declare('config.enableDynamicMenus',true);

window.$Nav && $Nav.declare('config.isInternal',false);

window.$Nav && $Nav.declare('config.isBackup',false);

window.$Nav && $Nav.declare('config.isRecognized',false);

window.$Nav && $Nav.declare('config.transientFlyoutTrigger','\x23nav\x2Dtransient\x2Dflyout\x2Dtrigger');

window.$Nav && $Nav.declare('config.subnavFlyoutUrl','\x2Fnav\x2Fajax\x2FsubnavFlyout');
window.$Nav && $Nav.declare('config.isSubnavFlyoutMigrationEnabled',true);

window.$Nav && $Nav.declare('config.recordEvUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Frecordevent.html');
window.$Nav && $Nav.declare('config.recordEvInterval',15000);
window.$Nav && $Nav.declare('config.sessionId','259\x2D0697940\x2D8176965');
window.$Nav && $Nav.declare('config.requestId','HETT4VZW343THJHAD5GH');

window.$Nav && $Nav.declare('config.alexaListEnabled',true);

window.$Nav && $Nav.declare('config.readyOnATF',true);

window.$Nav && $Nav.declare('config.dynamicMenuArgs',{"rid":"HETT4VZW343THJHAD5GH","isFullWidthPrime":0,"isPrime":0,"dynamicRequest":1,"weblabs":"","isFreshRegionAndCustomer":"","primeMenuWidth":310});

window.$Nav && $Nav.declare('config.customerName',false);

window.$Nav && $Nav.declare('config.customerCountryCode',null);

window.$Nav && $Nav.declare('config.yourAccountPrimeURL',null);

window.$Nav && $Nav.declare('config.yourAccountPrimeHover',true);

window.$Nav && $Nav.declare('config.searchBackState',{});

window.$Nav && $Nav.declare('nav.inline');

(function (i) {
  if(window._navbarSpriteUrl) {
    i.onload = function() {window.uet && uet('ne')};
    i.src = window._navbarSpriteUrl;
  }
}(new Image()));

window.$Nav && $Nav.declare('config.autoFocus',false);

window.$Nav && $Nav.declare('config.responsiveTouchAgents',["ieTouch"]);

window.$Nav && $Nav.declare('config.responsiveGW',true);

window.$Nav && $Nav.declare('config.pageHideEnabled',false);

window.$Nav && $Nav.declare('config.sslTriggerType','null');
window.$Nav && $Nav.declare('config.sslTriggerRetry',0);

window.$Nav && $Nav.declare('config.doubleCart',false);

window.$Nav && $Nav.declare('config.signInOverride',true);

window.$Nav && $Nav.declare('config.signInTooltip',true);

window.$Nav && $Nav.declare('config.isPrimeMember',false);

window.$Nav && $Nav.declare('config.packardGlowTooltip',false);

window.$Nav && $Nav.declare('config.packardGlowFlyout',false);

window.$Nav && $Nav.declare('config.rightMarginAlignEnabled',true);

window.$Nav && $Nav.declare('config.flyoutAnimation',false);

window.$Nav && $Nav.declare('config.campusActivation','null');

window.$Nav && $Nav.declare('config.primeTooltip',false);

window.$Nav && $Nav.declare('config.primeDay',false);

window.$Nav && $Nav.declare('config.disableBuyItAgain',false);

window.$Nav && $Nav.declare('config.enableCrossShopBiaFlyout',false);

window.$Nav && $Nav.declare('config.pseudoPrimeFirstBrowse',null);

window.$Nav && $Nav.declare('config.sdaYourAccount',false);

window.$Nav && $Nav.declare('config.csYourAccount',false);

window.$Nav && $Nav.declare('config.cartFlyoutDisabled',true);

window.$Nav && $Nav.declare('config.isTabletBrowser',false);

window.$Nav && $Nav.declare('config.HmenuProximityArea',[200,200,200,200]);

window.$Nav && $Nav.declare('config.HMenuIsProximity',true);

window.$Nav && $Nav.declare('config.isPureAjaxALF',false);

window.$Nav && $Nav.declare('config.accountListFlyoutRedesign',false);

window.$Nav && $Nav.declare('config.navfresh',false);

window.$Nav && $Nav.declare('config.isFreshRegion',false);

if (window.ue && ue.tag) { ue.tag('navbar'); };

window.$Nav && $Nav.declare('config.blackbelt',true);

window.$Nav && $Nav.declare('config.beaconbelt',true);

window.$Nav && $Nav.declare('config.accountList',true);

window.$Nav && $Nav.declare('config.iPadTablet',false);

window.$Nav && $Nav.declare('config.searchapiEndpoint',false);

window.$Nav && $Nav.declare('config.timeline',false);

window.$Nav && $Nav.declare('config.timelineAsinPriceEnabled',false);

window.$Nav && $Nav.declare('config.timelineDeleteEnabled',false);



window.$Nav && $Nav.declare('config.extendedFlyout',false);

window.$Nav && $Nav.declare('config.flyoutCloseDelay',600);

window.$Nav && $Nav.declare('config.pssFlag',0);

window.$Nav && $Nav.declare('config.isPrimeTooltipMigrated',false);

window.$Nav && $Nav.declare('config.hashCustomerAndSessionId','d5aa8d1349e63ef3bae140161452fcd8b37690a8');

window.$Nav && $Nav.declare('config.isExportMode',false);

window.$Nav && $Nav.declare('config.languageCode','es_ES');

window.$Nav && $Nav.declare('config.environmentVFI','AmazonNavigationCards\x2Fdevelopment\x2D6154693607\x40B6155239336\x2DAL2_x86_64');

window.$Nav && $Nav.declare('config.isHMenuBrowserCacheDisable',false);

window.$Nav && $Nav.declare('config.signInUrlWithRefTag','https\x3A\x2F\x2Fwww.amazon.es\x2Fap\x2Fsignin\x3Fopenid.pape.max_auth_age\x3D0\x26openid.return_to\x3Dhttps\x253A\x252F\x252Fwww.amazon.es\x252F\x253F_encoding\x253DUTF8\x2526ref_\x253DnavSignInUrlRefTagPlaceHolder\x26openid.identity\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x252Fidentifier_select\x26openid.assoc_handle\x3Desflex\x26openid.mode\x3Dcheckid_setup\x26openid.claimed_id\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x252Fidentifier_select\x26openid.ns\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0');

window.$Nav && $Nav.declare('config.regionalStores',[]);

window.$Nav && $Nav.declare('config.isALFRedesignPT2',false);

window.$Nav && $Nav.declare('config.isNavALFRegistryGiftList',false);

window.$Nav && $Nav.declare('config.marketplaceId','A1RKKUPIHCS9HS');

window.$Nav && $Nav.declare('config.exportTransitionState','none');

window.$Nav && $Nav.declare('config.enableAeeXopFlyout',false);

window.$Nav && $Nav.declare('config.isPrimeFlyoutMigrationEnabled',false);

window.$Nav && $Nav.declare('config.isAjaxMigrated',true);

window.$Nav && $Nav.declare('config.isAjaxPaymentNotificationMigrated',false);

window.$Nav && $Nav.declare('config.isAjaxPaymentSuppressNotificationMigrated',true);

if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
  window.P.now('packardGlowIngressJsEnabled').execute(function(glowEnabled) {
    if (!glowEnabled) {
      window.P.declare('packardGlowIngressJsEnabled', true);
    }
  });
  window.P.now('packardGlowStoreName').execute(function(storeName) {
    if (!storeName) {
      window.P.declare('packardGlowStoreName','generic');
    }
  });
}

window.$Nav && $Nav.declare('configComplete');

    -->