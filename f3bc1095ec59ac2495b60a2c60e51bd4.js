<!-- /* OneTrust callback */ -->
        function OptanonWrapper() {

            function getCookie(name) {
                var value = "; " + document.cookie;
                var parts = value.split("; " + name + "=");
                if (parts.length == 2) {
                    return parts.pop().split(";").shift();
                }
            }

            function removeElement(element) {
                if (!getCookie('OptanonAlertBoxClosed') && element) {
                    element.style.display = "none";
                }
            }

            <!-- /* enable footer link */ -->
            var footerLinkToggle = document.querySelector(".page-footer_link .optanon-toggle-display");
            if (footerLinkToggle) {
                footerLinkToggle.addEventListener("click", Optanon.ToggleInfoDisplay, false);
                footerLinkToggle.addEventListener("keydown", function(e){
                    if (e.keyCode === 13) {
                        Optanon.ToggleInfoDisplay()
                    }
                }, false);
            }

            //Check if user's cookies are enabled, if not remove One Trust from page
            var cookies = ("cookie" in document && (document.cookie.length > 0 || (document.cookie = "test").indexOf.call(document.cookie, "test") > -1));
            if (!cookies) {
                var box = document.querySelector('#onetrust-consent-sdk');
                box.remove();
                return;
            }

            try {
                //Check if current page is Privacy page, if so do not display One Trust modal
                if(digitalData) {
                    if(digitalData.page.pagename.indexOf(":company:privacy") > -1){
                        var el = document.querySelector("#onetrust-consent-sdk");
                        removeElement(el);
                    }
                }
                <!-- /* reinitialize active groups after user updates consent */ -->
                if (SfdcWwwBase.gdpr) {
                    SfdcWwwBase.gdpr.init();
                }
            }catch(err){
                console.error(err.message)
            }
        }