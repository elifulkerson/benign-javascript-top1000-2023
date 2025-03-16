if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#desktop-sm_desk_hp_lb6").is(":visible")) {
                const info = {"target":"#desktop-sm_desk_hp_lb6","iu":"desk/hp/lb6","sizes":["728x90","970x250","970x66","300x250","320x50","300x50","fluid","1x1"],"pos":"desktop","props":{"adPrefetchMargin":350,"adRefreshRate":30}};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }