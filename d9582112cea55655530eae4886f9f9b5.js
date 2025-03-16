const SWITCH_ID = 'toggle-switch';
    const IMAGE_CLASS_NAME = 'plan-head__card-eyebrow-image';
    const DARK_IMAGE = '/static/hitch/static/logos/bundles-dark.svg';
    const WHITE_IMAGE = '/static/hitch/static/logos/bundles.svg';
    const RENDER_TIME = 10;

    const switchElement = document.getElementById(SWITCH_ID).parentNode.parentNode;

    switchElement.addEventListener('load', () => {
    setTimeout(() => {
        changeImage();
    }, RENDER_TIME);
    });

    switchElement.addEventListener('click', () => {
    setTimeout(() => {
        changeImage();
    }, RENDER_TIME);
    });

    const changeImage = () => {
    const imageContainers = document.getElementsByClassName(IMAGE_CLASS_NAME);
    const compChartElement = document.getElementById('plans');
    const isDark = compChartElement.classList.contains('is-dark');

    Array.from(imageContainers).forEach((container) => {
        container.children[0].src = isDark ? DARK_IMAGE : WHITE_IMAGE;
    });
    };