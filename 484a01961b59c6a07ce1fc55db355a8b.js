if (window.bbcuser && window.bbcuser.isUKCombined) {
        bbcuser.isUKCombined().then(function (isUK) {
            if (isUK) {
                import('https://nav.files.bbci.co.uk/searchbox/521fdb102453edfd515ee5fca2a40eda//js/search-suggest.js').then(drawer => {
                    drawer.setupSearchDrawer({
                        searchboxAppStaticPrefix: 'https://nav.files.bbci.co.uk/searchbox/521fdb102453edfd515ee5fca2a40eda/',
                        searchAPIURL: "https://search.api.bbci.co.uk/formula/",
                        searchSuggestAPIKey: "HJ34sajBaTjACnUJtGZ2Gvsy0QeqJ5UK",
                        soundsSearchAPIURL: "https://rms.api.bbc.co.uk/v2/experience/inline/search",
                        soundsSearchAPIKey: "3A5LU4tQWvWW3lpgF5OT4IWUoyLaju9z",
                        variant: 'default',
                    });
                });
            }
        });
    }