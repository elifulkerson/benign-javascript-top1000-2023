var adWrapper = document.querySelector('.slideshow-ad-wrapper');
			if (typeof googletag !== 'undefined') {
				googletag.cmd.push(function() {
					if (window.definedSlots && -1 !== window.definedSlots.indexOf("div-gpt-ad-billb_mid")) {
						googletag.display("div-gpt-ad-billb_mid");
					} else {
						console.log('div-gpt-ad-billb_mid not a defined slot', window.definedSlots || []);
					}
				});
			}