window.bugsnagQueue = {
        notify: [],
        breadcrumbs: [],
    };

    window.bugsnagClient = {
        notify: function(error, metadata) {
            window.bugsnagQueue.notify.push([error, metadata]);
        },
        leaveBreadcrumb: function(message, metadata) {
            window.bugsnagQueue.breadcrumbs.push([message, metadata]);
        }
    };

    window.bugsnagConfig = {
        apiKey: "17bbe461a38dfa81f61aea5d09d995f2",
        endpoints: {
            notify: "https:\/\/notify.bugsnag.com\/"        },
        releaseStage: "production",
        notifyReleaseStages: [ "production" ]
    };