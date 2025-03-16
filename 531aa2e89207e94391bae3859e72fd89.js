//load the apstag.js library - AC US
  !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
//initialize
  apstag.init({
    pubID: '457536b0-a8e0-433d-8bda-363076bb1799',
    adServer: 'googletag',
    bidTimeout: 2e3
  });
apstag.fetchBids({
     slots: [{
         slotID: 'header-banner',  
         slotName: '/21678054/up-v2/header-desktop',  
         sizes: [[728, 90]]  
     },
          {
         slotID: 'HeadTopSticky',  
         slotName: '/21678054/up-v2/sticky-header-top',  
         sizes: [[728, 90], [320, 100], [300, 100], [320, 50]]  
     },
     {
         slotID: 'Side1-banner',  
         slotName: '/21678054/up-v2/side-one',  
         sizes: [[300, 250]] 
     },
     {
         slotID: 'gpt-970-banner',  
         slotName: '/21678054/header_970x250',  
         sizes: [[970, 250], [970, 90]] 
     },
       {
         slotID: 'gpt-end-banner',  
         slotName: '/21678054/up-v2/end',  
         sizes: [[336, 280], [300, 250]]
     },
      {
         slotID: 'gpt-middle-banner',  
         slotName: '/21678054/up-v2/mobile-middle',  
         sizes: [[300, 250], [336, 280]]
     },
     {
         slotID: 'gpt-center-banner',  
         slotName: '/21678054/up-v2/center',  
         sizes: [[336, 280], [300, 250]]
     }],
}, function(bids) {
     // set
     googletag.cmd.push(function(){
         apstag.setDisplayBids();
       //  googletag.pubads().refresh();
     });
});