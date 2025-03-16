(function(w, d) {
                            w.nativeSectionCodes = w.nativeSectionCodes || [];
                            w.nativeSectionCodes = w.nativeSectionCodes.concat(["d9cb7420-8614-47e1-88fa-3383be601dc0","fd1fee89-d620-41fe-b5d0-8b2ec3f5fea3"]);
                            w.apiKey = "HJRFTXTT38GD283N672X";
                            w.imageType = "thumbnail";
                            
                            var script = d.createElement("script");
                            script.async = true;

                            script.src = "https://s.yimg.com/dy/ads/native.js";
                            d.body.appendChild(script);

                            w.nativePassbackHandler = w.nativeErrorHandler = function(data){
                                if (data && data.code === 'd9cb7420-8614-47e1-88fa-3383be601dc0') {
                                    var container = document.getElementById('gemini-right-rail-thumbnails');
                                    if (container) {
                                        container.parentNode.removeChild(container);
                                    }
                                }
                            };
                        })(window.top, window.top.document);