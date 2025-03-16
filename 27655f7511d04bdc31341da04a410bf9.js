(function (wd, dc) {
wd.addEventListener('load', function (evt) {
const backdrop = dc.querySelector('.block-over-backdrop');
if (!backdrop.classList.contains('loaded')) {
backdrop.classList.add('block-over-backdrop__active', 'loaded');
} else {
backdrop.classList.remove('block-over-backdrop__active');
}
});
}(window, document))