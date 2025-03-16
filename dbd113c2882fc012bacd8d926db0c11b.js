var plink = "https://www.in.gr";
    try {setas()} catch (e) {var lineitemids = ''; var adserver = ''}
    googletag.cmd.push(function() {
        var header_mapping = googletag.sizeMapping().addSize([0, 0], []).addSize([670, 200], [[970, 250], [970, 90], [728, 90]]).build();
        var skin_mapping = googletag.sizeMapping().addSize([0, 0], []).addSize([1100, 200], [1920, 1200]).addSize([1700, 200], [[1920, 1200], [2000, 1200]]).build();
        var right_mapping = googletag.sizeMapping().addSize([0, 0], []).addSize([875, 200], [[300, 250], [300, 450], [300, 600]]).build();
        var over_mapping = googletag.sizeMapping().addSize([0, 0], []).addSize([1000, 200], [1, 1]).build();
        var mapping_320 = googletag.sizeMapping().addSize([0, 0], [320, 50]).addSize([668, 0], []).build();
        var middle_mapping = googletag.sizeMapping().addSize([0, 0], []).addSize([300, 250], [[300, 250]]).addSize([300, 500], [[300, 600], [300, 250]]).addSize([668, 0], []).build();
        googletag.defineSlot('/28509845/Home_320x50_top', [320, 50], '320x50_top').defineSizeMapping(mapping_320).addService(googletag.pubads());
        googletag.defineSlot('/28509845/Mobile_300x250_middle_home', [[300, 600], [300, 250]], '300x250_middle_home').defineSizeMapping(middle_mapping).addService(googletag.pubads());
        googletag.defineSlot('/28509845/1x1_over', [1, 1], '1x1_over').defineSizeMapping(over_mapping).addService(googletag.pubads());
        googletag.defineSlot('/28509845/home_970x90_top', [[970, 250], [970, 90], [728, 90]], '970x90_top').defineSizeMapping(header_mapping).addService(googletag.pubads());
        googletag.defineSlot('/28509845/home_300x250_r1', [[300, 250], [300, 450], [300, 600]], '300x250_r1').defineSizeMapping(right_mapping).addService(googletag.pubads());
        googletag.defineSlot('/28509845/home_300x250_r2', [[300, 250], [300, 450], [300, 600]], '300x250_r2').defineSizeMapping(right_mapping).addService(googletag.pubads());
        googletag.defineSlot('/28509845/home_300x250_r3', [[300, 250], [300, 450], [300, 600]], '300x250_r3').defineSizeMapping(right_mapping).addService(googletag.pubads());
//         googletag.defineSlot('/28509845/home_1x1_out', [[1920, 1200], [2000, 1200]], '1x1_out').defineSizeMapping(skin_mapping).addService(googletag.pubads());
        var islot = googletag.defineOutOfPageSlot('/28509845/interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL);
        if (islot) {islot.addService(googletag.pubads());}        
        googletag.pubads().setTargeting('Category', 'home');
        googletag.pubads().setTargeting('SubCategory', '');
        googletag.pubads().setTargeting('AdServer', adserver);
        googletag.pubads().setTargeting('Item_Id', '');
        googletag.pubads().setTargeting('Tags', '');
        googletag.pubads().setTargeting('Skin', skinSize);
        googletag.pubads().setTargeting('Platform', platform);
        googletag.pubads().collapseEmptyDivs(true);
        
        googletag.pubads().enableVideoAds();
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if(event.slot.getSlotElementId() === '300x250_r1' && !event.isEmpty && event.size[1] >= 300 ){ document.querySelector('body').classList.add('das600');}
        if(event.slot.getSlotElementId() === '300x250_r2' && !event.isEmpty && event.size[1] >= 300 ){ document.querySelector('body').classList.add('das600_r2'); }
        if(event.slot.getSlotElementId() === '300x250_r3' && !event.isEmpty && event.size[1] >= 300 ){ document.querySelector('body').classList.add('das600_r3'); }
        if(event.slot.getSlotElementId() === '300x250_r1' && !event.isEmpty && event.size[1] === 250 ){ document.querySelector('body').classList.add('das300'); }
        if(event.slot.getSlotElementId() === '300x250_r2' && !event.isEmpty && event.size[1] === 250 ){ document.querySelector('body').classList.add('das300_r2'); }
        if(event.slot.getSlotElementId() === '300x250_r3' && !event.isEmpty && event.size[1] === 250 ){ document.querySelector('body').classList.add('das300_r3'); }
//         if(event.slot.getSlotElementId() === '1x1_out' && !event.isEmpty && event.size[0] < 2000 && event.size[0] >= 1200){ document.querySelector('body').classList.add('fxskin', 'skind'); }
//         if(event.slot.getSlotElementId() === '1x1_out' && !event.isEmpty && event.size[0] === 2000){ document.querySelector('body').classList.add('fxskinb', 'skind'); }
        if (event.slot.getSlotElementId() === '300x250_r1' || event.slot.getSlotElementId() === '300x250_middle' || event.slot.getSlotElementId() === '300x250_middle_home') 
        {if (!event.isEmpty && lineitemids.includes(event.lineItemId, 0) || !event.isEmpty && orderids.includes(event.campaignId, 0)) {pgm300();}};
        if (event.slot.getSlotElementId() === '320x50_top')  {if (!event.isEmpty && mlineitemids.includes(event.lineItemId, 0) || !event.isEmpty && morderids.includes(event.campaignId, 0)) {pgm320();}}
        if (event.slot.getSlotElementId() === '970x90_top')  {if (!event.isEmpty && xlineitemids.includes(event.lineItemId, 0) || !event.isEmpty && xorderids.includes(event.campaignId, 0)) {pgm970();}}
      
        if(event.slot.getSlotElementId() === "970x90_top" && !event.isEmpty) {
          const dasplaceholder =  document.querySelector('.wrap-das-placeholder');
          dasplaceholder.style.paddingTop = '30px';
          dasplaceholder.style.paddingBottom = '30px';
        }
          
        });
      
        googletag.pubads().setCentering(true);
        var ppid = getPPIDCookie();
        if (ppid != "") {
            googletag.pubads().setPublisherProvidedId(ppid);
        }        
        googletag.enableServices();
        googletag.display(islot);
        
    });