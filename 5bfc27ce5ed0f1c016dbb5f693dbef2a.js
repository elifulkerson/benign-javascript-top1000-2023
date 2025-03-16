AdsServicePosition['LB-MULTI_ATF'] = {
    alias: '93484749',
    sizes: "LB"
 };
 AdsClientPosition['LB-MULTI_ATF'] = {
     flexible: { enabledByAds: true }, 
     safeFrame:{
        features: {
           expandPush: {
              enabled: true
           },
           resize: {
              enabled: true
           }
        }
    },
    targetElement: 'LB-MULTI_ATF' , render: {requireViewable: true}
    , rotation: { enabled: true }
 };