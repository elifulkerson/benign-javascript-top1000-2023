var myLazyLoad = new LazyLoad({
    elements_selector: ".Lazy:not(.Lazy--Async)"
});
window.addEventListener('DOMContentLoaded', function() {
    myLazyLoad.update();
});