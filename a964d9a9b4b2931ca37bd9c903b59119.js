window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
                
        googletag.defineSlot('/1029551/Dawn-Responsive-BTF-MREC', [[300,250]], 'div-gpt-ad-1683363763562-0')
            .defineSizeMapping([[[0,0],[[300,250]]]])
            .addService(googletag.pubads());        
        googletag.defineSlot('/1029551/Dawn-Responsive-ATF-MREC', [[300,250]], 'div-gpt-ad-1683363673257-0')
            .defineSizeMapping([[[0,0],[[300,250]]]])
            .addService(googletag.pubads());        
        googletag.defineSlot('/1029551/Dawn-Responsive-Middle-Leaderboard', [[970,250],[970,90],[728,90],[300,600],[320,480],[320,50],[320,100],[300,50],[300,250],[1,1]], 'div-gpt-ad-1693559881661-0')
            .defineSizeMapping([[[970,0],[[970,250],[970,90],[728,90],[300,600],[320,480],[320,50],[320,100],[300,50],[1,1]]],[[728,0],[[728,90],[300,600],[320,480],[320,50],[320,100],[300,50],[1,1]]],[[0,0],[[300,600],[320,480],[300,250],[320,50],[320,100],[300,50],[1,1]]]])
            .addService(googletag.pubads());        
        googletag.defineSlot('/1029551/Dawn-Responsive-SKY-MREC', [[300,250],[320,480],[300,600],[160,600]], 'div-gpt-ad-1683363860950-0')
            .defineSizeMapping([[[0,0],[[300,600],[320,480],[300,250],[160,600]]]])
            .addService(googletag.pubads());        
        googletag.defineSlot('/1029551/Dawn-Responsive-Footer-Stickable-Leaderboard', [[970,250],[970,90],[728,90],[320,50],[320,100],[300,50],[300,250],[1,1]], 'div-gpt-ad-1693559286339-0')
            .defineSizeMapping([[[970,0],[[970,250],[970,90],[728,90],[320,50],[320,100],[300,50],[1,1]]],[[728,0],[[728,90],[320,50],[320,100],[300,50],[1,1]]],[[0,0],[[300,250],[320,50],[320,100],[300,50],[1,1]]]])
            .addService(googletag.pubads());        
        googletag.defineSlot('/1029551/Dawn-Responsive-Header-Leaderboard', [[970,250],[970,90],[728,90],[320,50],[320,100],[300,50],[300,250]], 'div-gpt-ad-1683363187247-0')
            .defineSizeMapping([[[970,0],[[970,250],[970,90],[728,90],[320,50],[320,100],[300,50]]],[[728,0],[[728,90],[320,50],[320,100],[300,50]]],[[0,0],[[300,250],[320,50],[320,100],[300,50]]]])
            .addService(googletag.pubads());
                
        googletag.pubads().setTargeting('site', ["www.dawn.com"]);        
        googletag.pubads().setTargeting('category', ["Home"]);
        
        googletag.pubads().enableLazyLoad({
            fetchMarginPercent: -1,
            renderMarginPercent: 50,
            mobileScaling: 2.0
        });
        
        googletag.pubads().enableSingleRequest();

        // Relocate Ads
        document.querySelectorAll('[data-selector]').forEach(ad => {
            if (target = document.querySelector(ad.getAttribute('data-selector'))) {
                target.insertAdjacentElement('afterend', ad);
            }
        });
        
        if (window.location && window.location.search && window.location.search.includes('googfc')) {
            // debugging is enabled, add bgcolor and padding on all ad divs
            document.querySelectorAll('[id^="div-gpt-ad-"]').forEach(el => {
                var hasError = el.classList.contains('advert-error');
                el.style.backgroundColor = hasError ? '#ecc' : '#ccc';
                el.title = el.dataset.name || '';
                el.innerHTML = hasError ? el.dataset.name : '';
                if (hasError) {
                    el.style.padding = '10px';
                }
                el.style.height = el.dataset.height || '';
                el.style.width = el.dataset.width || '';
            });
        } else {
            googletag.pubads().collapseEmptyDivs();
        }
        
        googletag.enableServices();
    });