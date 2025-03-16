window.doCriteoQ = function (params) {
    

    var SiteUID = 'us'
    window.criteo_q = window.criteo_q || [];
    window.criteo_q.push({
      event: "setAccount",
      account: "14844"
    }, {
      event: "setHashedEmail",
      email: [window.analysisUserId]
    }, {
      event: "setSiteType",
      type: "d"
    }, params);

    
  }