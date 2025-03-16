googletag.cmd.push(function () {
                    var anchorSlot = googletag.defineOutOfPageSlot("/123148010/manoramaonline/anchor", googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR);
                    if (anchorSlot) {
                        anchorSlot.setTargeting("position", ["anchor"]).addService(googletag.pubads());
                        googletag.display(anchorSlot);
                    }
                });