window.sliceComponents = window.sliceComponents || {};

    externalsScriptLoaded.then(() => {
        window.reliableDOMContentLoaded.then(() => {
            var componentContainer = document.querySelector("#slice-container-popularBox");

            if (componentContainer) {
                var data = {"tabs":[{"tabName":"Hardware Buying Guides","articles":[{"href":"\/best-oled-gaming-monitor\/","heading":"Best OLED gaming monitors in 2023","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/DW6zHwniANjGTi5pxCiWaG.jpg","alt":"The best OLED gaming monitors deliver crazy speed and eye-popping HDR performance.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/gaming-pc-build-guide\/","heading":"Best gaming PC builds: budget, mid-range and high-end recommendations","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/AQYCErGfchsRwDo9wdA6c4.jpg","alt":"Best gaming PC build guide header with three PC chassis on a purple background with PC Gamer badges.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/the-best-graphics-cards\/","heading":"Best graphics cards in 2023: GPUs for every budget","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/yDoLrx9uVA5c55aXYLSyDo.jpg","alt":"Our picks of the most powerful gaming GPUs and the ones that provide the best bang for your buck.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/best-gaming-chairs\/","heading":"Best gaming chairs in 2023","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/UHtKGg7rxCoE3yoZpJakja.jpg","alt":"Treat your posterior to one of the best gaming chairs.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/best-gaming-laptop\/","heading":"Best gaming laptops in 2023: Portable powerhouses","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/FC5PhtCekPHZpRheeexnSK.jpg","alt":"Don't compromise on power or portability with the best gaming laptops.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}}]},{"tabName":"Latest Game Reviews","articles":[{"href":"\/avermedia-live-gamer-ultra-2-1-review\/","heading":"AVerMedia Live Gamer Ultra 2.1 review","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/gvAFdeaSh7S2byYaUwLuX6.jpg","alt":"Avermedia Live Gamer Ultra 2.1 capture card on a red and blue background.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/star-trek-infinite-review\/","heading":"Star Trek: Infinite review","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/8bLhd7YFFCkNBuxdfgvKLV.png","alt":"Star Trek Infinite","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/lords-of-the-fallen-2023-review\/","heading":"Lords of the Fallen (2023) review","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/i6qyoDjtwVCVbtXXc5Pk5H.png","alt":"An image of a paladin in golden armour from Lords of the Fallen, staring intently at their foe.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/total-war-pharaoh-review\/","heading":"Total War: Pharaoh review","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/hHSzbjyjyddi9jbVgx87x6.jpg","alt":"The walls of a city in Total War: Pharaoh.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/meta-quest-3-review\/","heading":"Meta Quest 3 review","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/qu8Dh8qBDoAfMMNNYGvUBJ.jpg","alt":"Meta Quest 3 headset on my head. ","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}}]}]};

                var triggerHydrate = function() {
                    window.sliceComponents.popularBox.hydrate(data, componentContainer);
                }

                var triggerScriptLoadThenHydrate = function() {
                    if (window.sliceComponents.popularBox === undefined) {
                        var script = document.createElement('script');
                        script.src = 'https://slice.vanilla.futurecdn.net/12-7-7/js/popularBox.js';
                        script.async = true;
                        script.id = 'vanilla-slice-popularBox-component-script';

                        script.onload = () => {
                            window.sliceComponents.popularBox = popularBox;
                            triggerHydrate();
                        };
                        document.head.append(script);
                    } else {
                        triggerHydrate();
                    }
                }

                if (window.lazyObserveElement) {
                    window.lazyObserveElement(componentContainer, triggerScriptLoadThenHydrate, 1500);
                } else {
                    console.log('Could not lazy load slice JS for popularBox')
                }
            }
        }).catch(err => console.log('Hydration Script has failed for popularBox Slice', err));
    }).catch(err => console.log('Externals script failed to load', err));