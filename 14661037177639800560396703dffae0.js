document.body.classList.add("entrance-terms--shown")


        

        var ua = window.navigator.userAgent;
        var isWebOS = ua.toLowerCase().indexOf("Web0S".toLowerCase()) !== -1;
        var isSmartTv = ua.toLowerCase().indexOf("SmartTV".toLowerCase()) !== -1;
        var isSafari = ua.toLowerCase().indexOf("Safari".toLowerCase()) !== -1;

        if (isWebOS || isSmartTv) {
            document.body.classList.add("lg-tv-black-overlay")
        }

        if (isSafari && document.getElementsByClassName("scroll").length > 0) {
            // desktop safari auto scrolls to first focusable element on page load
            // give tabindex to parent and focus it instead to fix this
            var scrollableEl = document.getElementsByClassName("scroll")[0]
            scrollableEl.tabIndex = -1
            scrollableEl.style.outline = "none"
            scrollableEl.focus()
        }

        if (window.newrelic) {
            window.newrelic.addPageAction('Over18OverlayShown')
        }

        var focusableEls = document
            .getElementById("entrance_terms")
            .querySelectorAll("a[href]:not([disabled]), button:not([disabled])");
        var firstFocusableEl = focusableEls[0];
        var lastFocusableEl = focusableEls[focusableEls.length - 1];
        var KEYCODE_TAB = 9;

        document
            .getElementById("entrance_terms")
            .addEventListener("keydown", function (e) {
                if (e.key === "Tab" || e.keyCode === KEYCODE_TAB) {
                    if (e.shiftKey) {
                        // Shift/tab to focus backwards
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            e.preventDefault();
                        }
                    } else {
                        // just tab
                        if (document.activeElement === lastFocusableEl) {
                            firstFocusableEl.focus();
                            e.preventDefault();
                        }
                    }
                }
            });

        document.getElementById('close_entrance_terms').addEventListener("click", function (e) {
            document.body.classList.remove("entrance-terms--shown")
            document.body.classList.remove("lg-tv-black-overlay")
            document.getElementById('entrance_terms').style.display = "none";
            document.getElementById('entrance_terms_overlay').style.display = "none";
            var oneYearFromNow = new Date();
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
            document.cookie = "agreeterms=1;expires=" + oneYearFromNow.toUTCString() + ";path=/";
            if (window.newrelic) {
                window.newrelic.addPageAction('Over18OverlayAccepted')
            }
        });