var leadImages = [];
leadImages = [].slice.call(document.querySelectorAll(".top-section img.lazy"))
leadImages.forEach(function (lazyImage) {
lazyImageloader(lazyImage);
});