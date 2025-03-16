if (typeof falconLazyLoad !== 'undefined') {
            var observer = falconLazyLoad('.falcon-lazyload', {
                rootMargin: '0px 0px 40% 0px'
            })
            observer.observe()
        }

        if (typeof resourceSDK !== 'undefined') {
            var isSupprotCut = "true" === 'true';
            resourceSDK({ isSupprotCut: isSupprotCut })
        }