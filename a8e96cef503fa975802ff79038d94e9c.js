(function () {
            var waferReady = window.wafer;
            waferReady = waferReady && waferReady.ready;
            function initViewer() {
                if (window.YAHOO && window.YAHOO.viewer) {
                    window.YAHOO.viewer.init({"context":{"device":"desktop","lang":"en-US","region":"US","site":"fp"},"enableAPISeamlessModal":true,"enableSeamlessProgramming":true,"factualPoll":{"config":{"doNotUseshareWidth":true},"ctrl":"FactualPoll","enabled":true,"m_id":"polls","xhrPathPrefix":"/fire_ms/_rcv/remote"},"yaft":{"viewerContainer":"content-viewer"},"clickHandler":{"clusterSize":5,"ntkClusterSize":5},"clusterArticleRapidConfig":{"pl2":"seamless-article"},"mainArticleRapidConfig":{"pl2":"seamless-article"}});
                }
            }
            if (waferReady) {
                waferReady(initViewer);
            } else {
                document.body.addEventListener('wafer:ready', initViewer);
            }
        })();