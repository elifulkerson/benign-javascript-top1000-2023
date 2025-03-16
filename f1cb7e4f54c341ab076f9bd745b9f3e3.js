RA.config.set('fox', true);
        RA.config.set('fox-video', true);
        RA.repo.banner = {
            isHalt: function() {
                return false;
            },
            getService: function() {
                return {
                    getPlaces: function() {
                        return [];
                    },
                    createPlaceholder: function(){
                        return null;
                    }
                }
            },
            addFloatTargetingKeyValue: function() {},
            addFloatHideBanners: function() {},
            setTargeting: function() {},
            addEventListener: function() {},
            removeEventListener: function() {},
            run: function() {},
            refresh: function() {},
            clear: function() {},
            exclusiveValue: function() {},
            checkAdBlock: function() {
                return 1;
            },
            clearTargeting: function() {},
            getFloatHideBanners: function() {},
            disableRefresh: function() {},
            EVENTS: {}
        };

        const helpers = window.RA.repo.helpers;
        let hashCode = 0;
        if (helpers && helpers.hashCode) {
            hashCode = helpers.hashCode(RA.repo.banner.checkAdBlock.toString());
        }

        window.RA.config.set('bHashCode', hashCode);