window.initData = window.initData || {};
		window.initData.theme = "light";
			(()=>{"use strict";const t=/(?:^|;)\s*theme=(dark|light)(?:;|$)|$/.exec(document.cookie)[1];t&&(document.documentElement.classList.toggle("theme-dark","dark"===t),document.documentElement.classList.toggle("theme-light","light"===t),window.initData=window.initData||{},window.initData.theme=t)})();