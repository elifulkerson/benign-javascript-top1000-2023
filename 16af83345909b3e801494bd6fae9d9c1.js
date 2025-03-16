try {
                    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
                        function getCookie(cname) {
                            var name = cname + "=";
                            var decodedCookie = decodeURIComponent(document.cookie);
                            var ca = decodedCookie.split(';');
                            for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == ' ') {
                                    c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                    return c.substring(name.length, c.length);
                                }
                            }
                            return "";
                        }

                        function updateQueryStringParameter(uri, key, value) {
                            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
                            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
                            if (uri.match(re)) {
                                return uri.replace(re, '$1' + key + "=" + value + '$2');
                            }
                            else {
                                return uri + separator + key + "=" + value;
                            }
                        }

                        var tracker = getCookie("agoda.user.03").split("&")[0].replace("UserId=", "");
                        window.location = 'microsoft-edge:' + updateQueryStringParameter(window.location.href, "follow_redirect", tracker);
                        // fall back url if cannot go to Edge browser
                        setTimeout(function () {
                            window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
                        }, 1);
                    }
                } catch (e) {
                    // do nothing
                }