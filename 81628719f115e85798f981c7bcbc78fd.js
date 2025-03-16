(function(h,o,u,n,d) {
                    h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
                    d=o.createElement(u);d.async=1;d.src=n
                    n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
                })(window,document,'script','https://www.datadoghq-browser-agent.com/datadog-rum-v4.js','DD_RUM')
                DD_RUM.onReady(function() {
                    DD_RUM.init({
                    clientToken: "pub2d38405b1987161e878b9e71d9cc80be",
                    applicationId: "2a2397b5-deb9-4159-8a6f-a494e7590049",
                    site: "us5.datadoghq.com",
                    service: "thingiverse",
                    env: "production",
                    version: "2.63.0",
                    sessionSampleRate: 1,
                    premiumSampleRate: 0,
                    trackUserInteractions: 1,
                    trackFrustrations: 1,
                    });
                })