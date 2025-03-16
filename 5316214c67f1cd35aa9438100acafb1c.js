function loadUA() {
        !function(n,r,e,t,c){var i,o="Promise"in n,u={then:function(){return u},catch:function(n){
        return n(new Error("Airship SDK Error: Unsupported browser")),u}},s=o?new Promise((function(n,r){i=function(e,t){e?r(e):n(t)}})):u;
            s._async_setup=function(n){if(o)try{i(null,n(c))}catch(n){i(n)}},n[t]=s;var a=r.createElement("script");
            a.src=e,a.async=!0,a.id="_uasdk",a.rel=t,r.head.appendChild(a)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
            'UA', {
                appKey: 'nc2vzUKITAyG3E4PK9yQ_Q',
                token: 'MTpuYzJ2elVLSVRBeUczRTRQSzl5UV9ROkZPUnR1MVJkTUhYTExQQjAwT09yZzBYNE8yNGtLcFNDbFRxbjhvS01ISW8',
                vapidPublicKey: 'BC-RGbqv3uep1fUhhSMMctITmleQkFudVf2vBx4oMylN5GfhzWCdeKfLZoXFNAf0QjnReX6Qpjj4qahS53w6LaQ=',
                workerUrl: '/service-workers/ua-push-worker.prod.js'
            });
    }
    cbsoptanon.onScriptsReady(function(cmp) {
        cmp.ot.targetingAllowed(function(allowed) {
            if (allowed) {
                loadUA();
            }
        });
        cmp.ot.awaitInitialConsent(function(consent_model) {
            cmp.ot.addOnConsentChangedHandler(function() {
                cmp.ot.targetingAllowed(function(allowed) {
                    if (allowed) {
                        loadUA();
                    }
                });
            });
        });
    });