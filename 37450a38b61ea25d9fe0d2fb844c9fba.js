window._pxAppId = "PX8FCGYgk4";
        window._pxJsClientSrc = "/8FCGYgk4/init.js";
        window._pxFirstPartyEnabled = true;
        window._pxHostUrl = "/8FCGYgk4/xhr";
        window._pxreCaptchaTheme = "light";
        window._pxUuid = qs("uuid");

        if (!window._pxUuid) {
            window.pxInit = function (px) {
                px.Events.one("uid", function (uuid) {
                    if (uuid) {
                        document.getElementById("block_uuid").textContent = `Block reference ID: ${ uuid }`;
                    }
                });
            };
        }

        function qs(name) {
            const search = new URLSearchParams(window.location.search);

            return search.get(name) || "";
        }