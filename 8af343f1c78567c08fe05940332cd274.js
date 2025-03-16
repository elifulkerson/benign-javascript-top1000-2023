(function(){
                    function updateNavBar(){
                        var navEl = document.createElement("li"),
                            aEl = document.createElement("a"),
                            orbNav = document.querySelectorAll(".orb-panel-content ul")[0],
                            orbNavWeather = document.querySelectorAll(".orb-panel-content .orb-nav-weather")[0];
                        navEl.setAttribute("class", "orb-nav-bbcselect orb-nav-hide");
                        aEl.setAttribute("href", "https://www.bbcselect.com");
                        aEl.innerHTML = "BBC Select";
                        navEl.appendChild(aEl);
                        try {
                            if(typeof orbNav !== "undefined" && typeof orbNavWeather !== "undefined") {
                                orbNav.insertBefore(navEl, orbNavWeather);
                                if (window.bbcuser && window.bbcuser.getCountry && typeof (window.bbcuser.getCountry) === 'function') {
                                    window.bbcuser.getCountry().then(function (countryCode) {
                                        var isValid = countryCode && ['US', 'CA'].indexOf(countryCode.toUpperCase()) !== -1;
                                        /*if no countryCode return, we default to the edition css to show-hide */
                                        if (countryCode && !isValid) {
                                            document.getElementsByClassName('orb-nav-bbcselect')[0].remove();
                                        }
                                        if (countryCode && countryCode.toUpperCase() === 'CA') {
                                            aEl.setAttribute("href", "https://www.bbcselect.com/ca/")
                                        }
                                    });
                                }
                                clearInterval(window.isNavBarReadyInterval);
                            }
                        } catch(e) {}
                    }

                    window.isNavBarReadyInterval = setInterval(updateNavBar, 500);
                    setTimeout(function (){
                        clearInterval(window.isNavBarReadyInterval);
                    }, 5000);
                })();