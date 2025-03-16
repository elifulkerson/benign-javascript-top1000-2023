window.addEventListener('DOMContentLoaded', () => {
if (document.querySelector('.js-live-small-banner') != null) {
let liveSmallBanner = new Swiper('.js-live-small-banner', {
wrapperClass: 'live-small-banner__wrap',
slideClass: 'live-small-banner__slide',
autoplay: {
delay: 5000,
disableOnInteraction: false,
pauseOnMouseEnter: true,
},
pagination: {
el: '.live-small-banner__pagination',
bulletClass: 'live-small-banner__dot',
bulletActiveClass: 'active',
clickable: true,
},
});
let paginations = document.querySelectorAll('.live-small-banner__pagination');
if (paginations.length) {
let dots = paginations[0].querySelectorAll('.live-small-banner__dot');
if (dots.length === 1) {
paginations.forEach(pagination => { pagination.classList.add('hidden'); });
}
}
}
});