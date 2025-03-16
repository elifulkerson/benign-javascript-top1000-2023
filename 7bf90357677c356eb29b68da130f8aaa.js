(function() {
    // Lazyload object HTML elements like animations.
    document.addEventListener('lazybeforeunveil', function(e) {
        var svgObject = e.target.getAttribute('data-img');
        if (svgObject) {
            e.target.setAttribute('data', svgObject);
        }
    });
})();