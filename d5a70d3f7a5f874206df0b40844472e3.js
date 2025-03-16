var dfpEnabled = typeof article === 'object' ? article.dfpEnabled : true;
if (Globals.isScoresPage) {
    dfpEnabled = true;
}
if (dfpEnabled && !mgzUI.notLoadAllAds) {
    window.dfpService.displayAllDfpAds();
}
// We support mainImageResize() call only on summary-page, article and article-page only
var allowMainImageResizePages = ['lean/summary', 'lean/article'];
var isMainImageResize = allowMainImageResizePages.reduce(function(previousValue, currentValue) {
    if (Globals && Globals.pageId && Globals.pageId.indexOf(currentValue) !== -1) {
        previousValue = true;
    }
    return previousValue;
}, false);
if (isMainImageResize) {
    mainImageResize();
}