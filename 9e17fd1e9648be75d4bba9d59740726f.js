WH.hp_images = (function () {
	"use strict";
	function error(img) {
        if (img.src && img.src.includes("mag_blue.jpg") ) {
            return;
        }
		img.src = '/images/thumb/e/e5/Default_mag_blue.jpg/-crop-375-250-333px-Default_mag_blue.jpg';
	}

	return {
		'error' :error,
	};
})();