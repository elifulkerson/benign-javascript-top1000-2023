(function logo (w) {
						var images = [
								'//limg.imgsmail.ru/splash/v/i/logo_2021-fp-5f22369bd6.png',
								'//limg.imgsmail.ru/splash/v/i/logo_2021-fp-5f22369bd6.png',
								'//limg.imgsmail.ru/splash/v/i/logo_2021@2x-fp-2e4ffb1361.png',
								'//limg.imgsmail.ru/splash/v/i/logo_2021@2x-fp-2e4ffb1361.png'
							],
							width = [186,186],
							height = [32,32];var i = 0, l = null, span = null, logo = mr.id('logo'), spans = logo.getElementsByTagName('span');
for (l = spans.length; i < l; i++) {
    span = spans[i];
    if ((span.currentStyle || window.getComputedStyle(span, null)).display !== 'none') {
        document.write('<img src="' + images[mr.retina ? i + 2 : i] + '" class="logo__link__img logo__link__img_' + (!i ? 'medium' : 'wide') + '" width="' + (!i ? width[0] : width[1]) + '" height="' + (!i ? height[0] : height[1]) + '" />');
    }
    else {
        var image = document.createElement('img');
        image.className = 'logo__link__img logo__link__img_' + (!i ? 'medium' : 'wide');
        image.width = !i ? width[0] : width[1];
        image.height = !i ? height[0] : height[1];
        logo.appendChild(image);
        imagesPreloader.add(images[mr.retina ? i + 2 : i], image);
    }
}
logo.removeChild(spans[0]);
})(window);