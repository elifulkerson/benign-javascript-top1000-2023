var concertAdsQueue = concertAdsQueue || [];
  if (!window.pageloadId) {
    window.pageloadId = (crypto.randomUUID) ? crypto.randomUUID() : ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, function (c)  { return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);} );
  }
  CONCERT_ADS_CONFIG = {"slug":"/172968584/polygon/polygon.com/front_page","dfpVariables":{"network":["polygon"],"affiliation":["general"],"unison":[true],"page_type":["home_page"],"entry_group":["front-page"],"keywords":["polygon","gaming","and","entertainment","news","reviews","and","more","front-page"]},"isUnison":true,"is_unison":true,"prebid":{},"slots":[],"adConfigurationUrl":"https://concertads-configs.vox-cdn.com/sbn/polygon/config.json"}
  CONCERT_ADS_CONFIG.pageload_id = window.pageloadId;
  CONCERT_ADS_CONFIG.dfpVariables.pageload_id = window.pageloadId;