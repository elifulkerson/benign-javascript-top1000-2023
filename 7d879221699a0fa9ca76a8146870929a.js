// GPT slots

 var gptAdSlots = [];
 var anchorSlot;
 var interstitialSlot;

 googletag.cmd.push(function() {

   var REFRESH_KEY = 'refresh';
   var REFRESH_VALUE = 'true';

   // Define a size mapping object. The first parameter to addSize is

   // a viewport size, while the second is a list of allowed ad sizes.

  var mapping = googletag.sizeMapping().

    addSize([992, 0], [[970, 90], [728, 90], [1, 1]]). //desktop
    addSize([768, 0], [[728, 90], [1, 1]]). //tablet
    addSize([320, 0], [[320, 50], [320, 100], [300, 50], [300, 100], [300, 250], [1, 1]]). //mobile
    addSize([0, 0], [[320, 50], [1, 1]]). //other
    build();


    var mapping1 = googletag.sizeMapping()
                            .addSize([992, 10], [[970, 90], [728, 90], [1, 1]])
                            .addSize([768, 10], [[728, 90], [1, 1]])
                            .addSize([1, 1], [])
                            .build();
                            
  var mapping2 = googletag.sizeMapping().
    addSize([992, 0], [[970, 90], [728, 90], [1, 1]]). //desktop
    addSize([768, 0], [[728, 90], [1, 1]]). //tablet
    addSize([320, 0], [[320, 50], [320, 100], [300, 50], [300, 100], [1, 1]]). //mobile
    addSize([0, 0], [[320, 50], [1, 1]]). //other

    build();
    
    var mapping3 = googletag.sizeMapping().
    addSize([992, 0], [[970, 90], [728, 90], [1, 1]]). //desktop
    addSize([768, 0], [[728, 90], [1, 1]]). //tablet
    addSize([320, 0], [[320, 50]]). //mobile
    addSize([0, 0], [[320, 50], [1, 1]]). //other

    build();
    
    var mapping4 = googletag.sizeMapping().
    addSize([992, 0], [[300, 250], [1, 1]]). //desktop
    addSize([768, 0], [[300, 250], [1, 1]]). //tablet
    addSize([320, 0], [[320, 50], [320, 100], [300, 50], [300, 100],[300, 250], [1, 1]]). //mobile
    addSize([0, 0], [[320, 50], [1, 1]]). //other

    build();
    
    
    var mapping5 = googletag.sizeMapping()
    .addSize([992, 0], [[728, 90], 'fluid', [970, 90]])
    .addSize([768, 0], [[728, 90], 'fluid'])
    .addSize([320, 0], [[300, 50], [300, 100], [320, 50], 'fluid', [320, 100]])
    .addSize([0,0], [728, 90])
    .build();

  googletag.defineSlot('/14001636/DP_Leaderboard_1', [[320, 50],[320, 100], [300, 50], [300, 100], [728, 90]], 'div-gpt-ad-1500386953281-8').defineSizeMapping(mapping2).addService(googletag.pubads()).setTargeting('Category',''); 


   googletag.defineSlot('/14001636/DP_InsidePost_MPU_1', [[300, 250],[320, 100], [336, 280], [320, 50], [300, 100],[300, 50]], 'div-gpt-ad-1524595905268-4').defineSizeMapping(mapping4).addService(googletag.pubads()).setTargeting('Category','');

  googletag.defineSlot('/14001636/DP_InsidePost_MPU_2', [[300, 250],[320, 100], [336, 280], [320, 50], [300, 100],[300, 50]], 'div-gpt-ad-1524595905268-5').addService(googletag.pubads()).setTargeting('Category','');

  googletag.defineSlot('/14001636/DP_InsidePost_MPU_3', [[300, 250],[320, 100], [336, 280], [320, 50], [300, 100], [300, 50]], 'div-gpt-ad-1524595905268-6').addService(googletag.pubads()).setTargeting('Category','');

  googletag.defineSlot('/14001636/DP_InsidePost_MPU_4', [[300, 250],[320, 100], [336, 280], [320, 50], [300, 100], [300, 50]], 'div-gpt-ad-1524595905268-7').addService(googletag.pubads()).setTargeting('Category','');
  
googletag.defineSlot('/14001636/DP_InsidePost_MPU_5', [[300, 250],[320, 100], [336, 280], [320, 50], [300, 100],[300, 50]], 'div-gpt-ad-1574186466205-0').addService(googletag.pubads()).setTargeting('Category',''); 

googletag.defineSlot('/14001636/DP_InsidePost_MPU_6', [[300, 250],[320, 100], [336, 280], [320, 50], [300, 100],[300, 50]], 'div-gpt-ad-1574186166799-0').addService(googletag.pubads()).setTargeting('Category','');

anchorSlot =  googletag.defineOutOfPageSlot(
            '/14001636/DP_Leaderboard_2', googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR);
        if (anchorSlot) {
          anchorSlot
              .setTargeting('Category','')
              .addService(googletag.pubads());
        }
        


var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 60;

googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
});



  // Configure page-level targeting.
  googletag.pubads().setTargeting('URL','/');
  
  // Enable SRA and services.
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();

  });