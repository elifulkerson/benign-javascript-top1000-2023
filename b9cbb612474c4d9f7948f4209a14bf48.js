var adWrapper = document.querySelector('.slideshow-ad-wrapper');
			if (typeof googletag !== 'undefined') {
				googletag.cmd.push(function() {
					if (window.definedSlots && -1 !== window.definedSlots.indexOf("div-gpt-ad-billb_btf")) {
						googletag.display("div-gpt-ad-billb_btf");
					} else {
						console.log('div-gpt-ad-billb_btf not a defined slot', window.definedSlots || []);
					}
				});
			}