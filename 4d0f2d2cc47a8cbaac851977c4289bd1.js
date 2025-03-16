window.clerkStats = [];
        window.CLERK_CONFIG = {
            'trackWebEvents': false,
            endpointUrl: "//tracker.prom.ua/endpoint",
            mirrorDimensions: [
                'mobile',
                'controller_action',
                'ab_test',
                'branddev_utm_tags',
                'chunk_name',
                'es_query_hash',
                'cid',
                'user_id',
                'user_tracking',
            ],
            eventMethod: "",
            fingerprintMethod: "events",
            apeironSchema: null,
        };