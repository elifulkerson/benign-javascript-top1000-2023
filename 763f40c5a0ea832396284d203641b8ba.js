if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#desktop_desk_hp_lb3").is(":visible")) {
                const info = {"target":"#desktop_desk_hp_lb3","iu":"desk/hp/lb3","sizes":["728x90","970x250","970x66","300x250","320x50","300x50","fluid","1x1"],"pos":"desktop","props":{"adPrefetchMargin":350,"adRefreshRate":30}};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }