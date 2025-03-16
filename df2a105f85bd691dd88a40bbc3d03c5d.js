function pushAdTag(view_config, orientation, container_id) {
        if (container_id === 'contentad-outstream-1') {
            window._aeq.push(['getAdTag', 'VIDEO_OUTSTREAM', 'contentad-outstream-1']);
        } else {
            if (typeof view_config[app_nexus.view] === 'number') {
                window._aeq = window._aeq || [];

                window._aeq.push(['getAdTag', {
                    containerId: container_id,
                    orientation: orientation,
                    index: view_config[app_nexus.view],
                }]);
            }
        }
    }

    window.app_nexus = [];

    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth < 660) {
        app_nexus.view = 'smartphone';
    } else if (viewportWidth < 1000) {
        app_nexus.view = 'tablet';
    } else {
        app_nexus.view = 'desktop';
    }

    if (app_nexus.view !== 'desktop') {
        app_nexus.mobile = true;
    } else {
        app_nexus.mobile = false;
    }

    var globalOptions = {"layout":"homepage","category":"home","adunit1":"chip_digital","adunit2":"home","dataproviderId":"D0000","contentId":"ir-813479","jobId":"J9999"};
    globalOptions.device = app_nexus.view;
    globalOptions.mobile = app_nexus.mobile;

    window._aeq = window._aeq || [];
    window._aeq.push(['setGlobalOptions', globalOptions]);