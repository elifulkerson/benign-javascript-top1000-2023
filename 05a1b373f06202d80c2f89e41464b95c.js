var interstitialSlot, staticSlot;
   
   
   window.googletag = window.googletag || {cmd:[]};
   googletag.cmd.push(function() {

      
      var $window = $(window);
         function checkWidth(){

            var windowsize = $window.width();
            if (windowsize > 1000){
                                 
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[728,90],[970,250]], 'leaderboard').setTargeting('pos', ['leaderboard']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[970,100]], 'leaderboard_custom').setTargeting('pos', ['leaderboard_custom']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[300,250]], 'rectangle_1').setTargeting('pos', ['rectangle_1']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[300,250]], 'rectangle_2').setTargeting('pos', ['rectangle_2']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[300,250]], 'rectangle_3').setTargeting('pos', ['rectangle_3']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[160,600]], 'skin-left').setTargeting('pos', ['skin-left']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[160,600]], 'skin-right').setTargeting('pos', ['skin-right']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[728,90]], 'bottomframe').setTargeting('pos', ['bottomframe']).addService(googletag.pubads());

                                             } else {
                                 
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[320,100],[320,50]], 'sticky-top').setTargeting('pos', ['sticky-top']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[320,100]], 'top_custom').setTargeting('pos', ['top_custom']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[320,100]], 'bottom_custom').setTargeting('pos', ['bottom_custom']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[300,250]], 'middle_3').setTargeting('pos', ['middle_3']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[320,480]], 'giant').setTargeting('pos', ['giant']).addService(googletag.pubads());

                  
                     googletag.defineSlot('/11225321/VIVA.CO.ID/Home', [[300,600]], 'flying').setTargeting('pos', ['flying']).addService(googletag.pubads());

                                             }
         }
      checkWidth();

      
                        
      
      googletag.defineSlot('/11225321/VIVA.CO.ID/UMKM', [[300,250]], 'umkm_1').setTargeting('pos', ['umkm_1']).addService(googletag.pubads());
      googletag.defineSlot('/11225321/VIVA.CO.ID/UMKM', [[300,250]], 'umkm_2').setTargeting('pos', ['umkm_2']).addService(googletag.pubads());
      
      googletag.pubads().enableLazyLoad({fetchMarginPercent:500, renderMarginPercent:200, mobileScaling:2.0});
      googletag.pubads().enableSingleRequest();
      // googletag.pubads().collapseEmptyDivs();
      googletag.enableServices();      

   });