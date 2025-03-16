var gptadslots = [];
window.googletag = window.googletag || {cmd: []};

    // initialize pbjs
    var pbjs = pbjs || {};
    pbjs.que = pbjs.que || [];

    gpt_slot_objects = [];

    googletag.cmd.push(function(){
        gpt_leaderboard = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[970,90],[970,250],[728,90]], 'div-gpt-ad-leaderboard_top')
                .setTargeting('pos', ['leaderboard_top'])
                .addService(googletag.pubads());

        gpt_mr1 = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[300,250],[300,600],[336,280]], 'div-gpt-ad-rectangle')
                .setTargeting('pos', ['rectangle'])
                .addService(googletag.pubads());

        gpt_mr2 = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[300,250],[300,600],[336,280]], 'div-gpt-ad-billboard_vertical')
                .setTargeting('pos', ['billboard_vertical'])
                .addService(googletag.pubads());

        gpt_infeed1 = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[728,90]], 'div-gpt-ad-infeed1')
                .setTargeting('pos', ['infeed1'])
                .addService(googletag.pubads());

        gpt_infeed2 = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[728,90]], 'div-gpt-ad-infeed2')
                .setTargeting('pos', ['infeed2'])
                .addService(googletag.pubads());

        gpt_infeed3 = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[728,90]], 'div-gpt-ad-infeed3')
                .setTargeting('pos', ['infeed3'])
                .addService(googletag.pubads());

        gpt_skinleft = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[120,600],[90,600],[160,600]], 'div-gpt-ad-skin_left')
                .setTargeting('pos', ['skin_left'])
                .addService(googletag.pubads());

        gpt_skinright = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[120,600],[90,600],[160,600]], 'div-gpt-ad-skin_right')
                .setTargeting('pos', ['skin_right'])
                .addService(googletag.pubads());

        gpt_sticky = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[728,90]], 'div-gpt-ad-sticky_bottom')
                .setTargeting('pos', ['sticky_bottom'])
                .addService(googletag.pubads());
        
        gpt_ct1 = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[1,1]], 'div-gpt-ad-custom1')
                .setTargeting('pos', ['custom1'])
                .addService(googletag.pubads());
        
        gpt_ct2 = googletag.defineSlot('/253109699/IDNTimesDesktop/Homepage', [[1,1]], 'div-gpt-ad-custom2')
                .setTargeting('pos', ['custom2'])
                .addService(googletag.pubads());

        gpt_oop = googletag.defineOutOfPageSlot('/253109699/IDNTimesDesktop/Homepage', 'div-gpt-ad-oop1')
                .setTargeting('pos', ['oop1'])
                .addService(googletag.pubads());

        gpt_interstitial = googletag.defineOutOfPageSlot('/253109699/IDNTimesDesktop/Interstitial',
            googletag.enums.OutOfPageFormat.INTERSTITIAL)
            .addService(googletag.pubads());
            

        gpt_slot_objects.push(gpt_leaderboard, gpt_mr1, gpt_mr2, gpt_infeed1, gpt_infeed2, gpt_infeed3, gpt_skinleft, gpt_skinright, gpt_sticky, gpt_ct1, gpt_ct2, gpt_oop,gpt_interstitial);
                
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.pubads().collapseEmptyDivs(true);
        googletag.pubads().setTargeting('page_type', ['home']);
        if(window.isAllowAddressByRegion){
            googletag.pubads().setTargeting('lotameAudience', getLotameAudience());
        }
        googletag.pubads().addEventListener('slotOnload', function (event) {
            $("#"+event.slot.getSlotElementId()).removeClass("loading-ads");
        });
        googletag.pubads().addEventListener('slotRenderEnded', function(event){var slot_id = event.slot.getSlotElementId();
            if (slot_id == 'div-gpt-ad-sticky_bottom'){if (!event.isEmpty){$('.bottom-sticky-ads').css({ 'display': 'block' });}}
        });

        googletag.enableServices();

        // function that calls the ad-server
        function callAdserver(gptSlots) {
            if (pbjs.adserverCalled) return;
            pbjs.adserverCalled = true;
            googletag.pubads().refresh(gptSlots);
            }

        // request pbjs bids when it loads
        pbjs.que.push(function() {
        pbjs.rp.requestBids({
            callback: callAdserver,
                gptSlotObjects: gpt_slot_objects
        });
    });

    // failsafe in case PBJS doesn't load
     setTimeout(function() {
      callAdserver(gpt_slot_objects);
     }, 3500);
  });