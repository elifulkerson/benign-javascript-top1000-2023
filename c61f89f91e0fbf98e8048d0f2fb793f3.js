if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#mobile_mw_hp_ban14").is(":visible")) {
                const info = {"target":"#mobile_mw_hp_ban14","iu":"mw/hp/ban14","sizes":["300x250","300x50","320x50","fluid","1x1"],"pos":"mobile","props":{"adPrefetchMargin":1000,"adRefreshRate":30}};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }