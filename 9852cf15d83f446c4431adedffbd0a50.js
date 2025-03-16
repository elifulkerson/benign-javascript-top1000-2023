if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#desktop-sm_desk_hp_rvr3").is(":visible")) {
                const info = {"target":"#desktop-sm_desk_hp_rvr3","iu":"desk/hp/rvr3","sizes":["300x250","320x50","300x50","fluid","1x1"],"pos":"desktop","props":{"adPrefetchMargin":350,"adRefreshRate":30}};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }