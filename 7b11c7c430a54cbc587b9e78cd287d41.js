// Enable scheduling brand transition
  window.scheduling_brand_transition = true;
  
  // Sets endpoint for @sqs/track-events
  window._sqspEventsUrl = 'https://events.squarespace.com/api/v1/events';

  // Toggle console logging for @sqs/track-events
  window._sqspEventsLogging = false;

  /* template-store */
  /* [template-store] flags */
  // [template-store] Display installed state in Template Switcher grid
  window.TEMPLATE_STORE_FLAG_INSTALLED_IN_SWITCHER = true;
  // [template-store] Should use Template Ranking service (bandit)
  window.TEMPLATE_STORE_FLAG_USE_TEMPLATE_RANKING_SERVICE = true;
  // [template-store] Should use Template Ranking service through TTS
  window.TEMPLATE_STORE_FLAG_USE_TEMPLATE_RANKING_FROM_TTS = true;
  // [template-store] International survey
  window.TEMPLATE_STORE_FLAG_INTERNATIONAL_SURVEY_INTERSTITIAL = true;
  // [template-store] timeout survey
  window.TEMPLATE_STORE_FLAG_ENABLE_TIMEOUT_SURVEY = false;
  // [template-store] marketing moment type/topic additions
  window.TEMPLATE_STORE_FLAG_ENABLE_MARKETING_MOMENT_TYPE_TOPIC_ADDITIONS = true;
  
  /* [template-store] tests */
  // [template-store] english-only page title improvements for SEO
  window.TEMPLATE_STORE_EXPERIMENT_TYPE_TOPIC_TITLE_UPDATE = true;
  // [template-store] seperate the traffic segments for template-ranking vs conversion
  window.TEMPLATE_STORE_EXPERIMENT_RESERVED_TRAFFIC_SEGMENTATION = true;
  // [template-store] Filters Nav collapsed-by-default test
  window.TEMPLATE_STORE_EXPERIMENT_COLLAPSED_FILTERS_NAV = false;
  // [template-store] Render template grid with three columns
  window.TEMPLATE_STORE_EXPERIMENT_THREE_UP_GRID = false;
// [template-store] blank-demo 3 way test
  window.TEMPLATE_STORE_EXPERIMENT_BLANK_TEMPLATE = false;
  // [template-store] survey interstitial redesign
  window.TEMPLATE_STORE_EXPERIMENT_SURVEY_INTERSTITIAL_REDESIGN = false;
  // [template-store] enable the UHOG for interstitial
  window.TEMPLATE_STORE_EXPERIMENT_SURVEY_INTERSTITIAL_UNIVERSAL_HOLDOUT_GROUP = true;
  /* end template-store */
  
  // Select form vars
  window.SELECT_FORM_ACTION = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
  window.SELECT_FORM_OID = '00D6g000003vFpc';
  window.SELECT_FORM_SELECTID = '00N6g00000RoUOd';
  window.SELECT_FORM_RECORDID = '0126g000000Wade';

  // Disable A/B Test Assignment Events
  window.DISABLE_TEST_EVENTS = false;
  
  window.offer_banner_10_9_23 = (function(){
    var start = new Date('October 9, 2023 00:00:00');
    var end = new Date('October 13, 2023 23:59:59');
    var now = new Date();
    return now >= start && now <= end;
  }());
  
  window.offer_banner_10_9_23_scheduling = (function(){
    var start = new Date('October 9, 2023 00:00:00');
    var end = new Date('October 13, 2023 23:59:59');
    var now = new Date();
    return now >= start && now <= end;
  }());
  
  window.offer_banner_10_23_23 = (function(){
    var start = new Date('October 23, 2023 00:00:00');
    var end = new Date('October 28, 2023 23:59:59');
    var now = new Date();
    return now >= start && now <= end;
  }());
  
  window.offer_banner_10_23_23_scheduling = (function(){
    var start = new Date('October 23, 2023 00:00:00');
    var end = new Date('October 28, 2023 23:59:59');
    var now = new Date();
    return now >= start && now <= end;
  }());
      
  window.EXTENSION_SURVEY_ENABLED = true;
  window.L10N_HERO_COPY = true;
  window.MPP_SLIM_V1 = true;
  window.BYOT_HOMEPAGE_BANNER_V0 = false;
  window.BUNDLING_TEST_ACTIVE = false;
  window.HOMEPAGE_HERO_2023 = true;
  window.HOMEPAGE_HERO_TAGLINE = true;