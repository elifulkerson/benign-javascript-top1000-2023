// this function will act as a lock and will call the GPT API
        function initAdserver(forced) {
            if ((forced === true && window.initAdserverFlag !== true) || (PWT.a9_BidsReceived && PWT.ow_BidsReceived)) {
                window.initAdserverFlag = true;
                PWT.a9_BidsReceived = PWT.ow_BidsReceived = false;
                googletag.pubads().refresh();
            }
        }