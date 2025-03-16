setTimeout(function() {
                if (!window.__OVERLAY_INITIALIZED) {
                    var overlay = document.getElementById('global-mobile-overlay');
                    if (!overlay) return;
                    var btn = overlay.querySelector('[data-qaid="close_btn"]');
                    if (!btn) return;
                    btn.addEventListener('click', function () {
                        if (!window.__OVERLAY_INITIALIZED) {
                            console.warn('Scripts arent loaded yet, using fallback for overlay close')
                            overlay.style.display = 'none';
                        }
                    })
                }
            }, 500);