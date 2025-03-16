// write your script here


// [#185330924] Fix error Chrome 114
const captions = document.querySelectorAll('.search-video__first-caption-link');
captions.forEach((item) => { item.removeAttribute('popover'); });

// premium headline missing
try{
var el = document.querySelector('.categories .site-header');
var headlineEl = document.querySelector('.categories .home-section--full');
headlineEl.setAttribute('data-component', 'PremiumHeadline');
new window.TransparentHeaderAtTop({element: el}).init();
} catch(e) {console.error("CustomScript", e);}