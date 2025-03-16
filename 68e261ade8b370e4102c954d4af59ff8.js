var googletag = googletag || {}
        googletag.cmd = googletag.cmd || []

        googletag.cmd.push(function() {
            googletag.pubads().enableSingleRequest()
            googletag.pubads().setTargeting('tipo', 'home')
                .setTargeting('category-primary', 'portada')
            googletag.pubads().collapseEmptyDivs()
            googletag.pubads().setCentering(true)
            googletag.pubads().enableLazyLoad({
                fetchMarginPercent: 200,
                renderMarginPercent: 200,
                mobileScaling: 1.0
            });
            googletag.enableServices()
        })