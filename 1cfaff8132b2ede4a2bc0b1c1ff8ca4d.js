window.lazyObserveElement = function(element, callback, distance) {
var offset = 1000;
if (distance) {
offset = distance;
}
if (window.IntersectionObserver) {
var margin = offset + "px";
var observer = new window.IntersectionObserver(function (entries, observer) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
window.requestAnimationFrame(callback);
observer.disconnect();
}
})
}, {threshold:[0],rootMargin:margin});
observer.observe(element);
} else {
window.requestAnimationFrame(callback);
}
};