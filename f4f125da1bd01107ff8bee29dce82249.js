function enableScrollEvent() {
                window.SG.scroll.enable();
                window.removeEventListener('adsReady', enableScrollEvent);
            }
            window.addEventListener('adsReady', enableScrollEvent);