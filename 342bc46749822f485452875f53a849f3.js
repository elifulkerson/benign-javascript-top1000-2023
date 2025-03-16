(function(t, l) {
                try {
                    let w = window,
                        d = document,
                        s = d.createElement("script"),
                        f = d.getElementsByTagName("script")[0];
                    w[t] =
                        w[t] ||
                        function() {
                            (w["_rgea"] = w["_rgea"] || [["uts", new Date()]]).push(
                                Array.prototype.slice.call(arguments)
                            );
                            w.RGEA && w.RGEA.p();
                        };
                    s.type = "text/javascript";
                    s.async = true;
                    s.defer = true;
                    s.src = l;
                    f.parentNode.insertBefore(s, f);

                    // 되는 파라미터
                    rgea("propertyId", "RGEA0002-32de3446-a2a6-4f9a-a387-f40138212b2b");
                    rgea("lolpid", "na1");
                    rgea("anonymous", false);
                } catch (error) {
                    console.error(error);
                }
            })("rgea", "https://static.developer.riotgames.com/js/rgea.min.js");