window.lazySizesConfig = window.lazySizesConfig || {};
if (Cookies.get('backstopjs_preload')) {
    window.lazySizesConfig.loadMode = 3;
    window.lazySizesConfig.preloadAfterLoad = true;
} else {
    window.lazySizesConfig.loadMode = 1;
    window.lazySizesConfig.preloadAfterLoad = false;
}