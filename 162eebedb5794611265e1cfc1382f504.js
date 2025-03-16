window.zdconsent.run.push(function() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'pageType': 'Home',
      'companyCategory': '',
      'ddPage': '',
      'ddDomain': 'downdetector.com',
      'isBlocked': window.isBlocked,
      'bucket_test': sessionStorage.getItem("bucket_test"),
      'gdprApplies': window?.zdconsent?.gdprApplies,
      'gaOptInStatus': window?.zdconsent?.optins?.ga,
      'zdOptIns': window?.zdconsent?.optins
    });
  
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=7veOy1jPMnMwsQYAHVcifQ&gtm_preview=env-73&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WS2HF4K');
  });
  
  function postGADefaultProblemReport() {
    dataLayer.push({
      'event': 'problem-report-default',
    });
  }
  
  function sendIndicatorToGA(isTopIndicator = false) {
    if (isTopIndicator) {
      dataLayer.push({
        event: 'problem-report-trending',
      });
    }
  
    dataLayer.push({
      event: 'indicator',
      'problem-indicator': window.DD.indicators.INDICATOR_LABEL,
      'problem-data-pk': `${window.DD.indicators.INDICATOR_PK}`,
    });
  }
  
  function sendLocationStatusToGA(locationGranted = false) {
    dataLayer.push({
      event: 'indicator-location',
      'location-granted': locationGranted ? 'true' : 'false',
    });
  }