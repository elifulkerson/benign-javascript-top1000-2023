(function() {
                        new Image().src = "//counter.yadro.ru/hit;RS_Total/Riaru_Total?r" +
                            escape(document.referrer) + ((typeof(screen) == "undefined") ? "" :
                                ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
                                    screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
                            ";h" + escape(document.title.substring(0, 80)) + ";" + Math.random();
                    })();