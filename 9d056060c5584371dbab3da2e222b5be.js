if (!rutarget) {
                        var rutarget = {};
                    }
                    if (!rutarget.adfox) {
                        rutarget.adfox = {
                            getAdState: function() {return 0},
                            checkAd: function() {}
                        };
                    }