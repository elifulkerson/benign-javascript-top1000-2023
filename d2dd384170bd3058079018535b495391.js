(function () {
var NAVIGATION_START = "navigationStart";

function getMeasureName(markEnd) {
  return [NAVIGATION_START, markEnd].join('-');
}

function createOnLoadListener(markEnd) {
  return function() {
    var performance = window.performance;
    if (performance && performance.measure) {
      performance.mark(markEnd);
      performance.measure(getMeasureName(markEnd), NAVIGATION_START, markEnd);
    }
  }
}

var imgOnLoadListenerEager = createOnLoadListener("eagerLoadedPhotoLoaded");
var imgOnLoadListenerLazy = createOnLoadListener("firstLazyLoadedPhotoLoaded");

function listenToImgOnLoad (handler) {
  return function(imgEl) {
    if (imgEl.complete) {
      handler();
    } else {
      imgEl.addEventListener('load', handler, { once: true });
    }
  }
}

// we select one specific grid to avoid adding listeners for duplicate photos across all 3 grids.
var masonryGrid = document.querySelector('[data-test="masonry-grid-count-three"]');
var eagerImgs = masonryGrid ? masonryGrid.querySelectorAll('[data-perf="eager-loaded-img"]') : [];
var lazyImg = masonryGrid ? masonryGrid.querySelector('[data-perf="lazy-loaded-img"]') : null;

eagerImgs.forEach(listenToImgOnLoad(imgOnLoadListenerEager));
if (lazyImg !== null) {
  listenToImgOnLoad(imgOnLoadListenerLazy)(lazyImg);
}
})();