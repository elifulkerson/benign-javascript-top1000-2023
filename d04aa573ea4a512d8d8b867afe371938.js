var adWrapper = document.querySelector('.slideshow-ad-wrapper');
			if (typeof googletag !== 'undefined') {
				googletag.cmd.push(function() {
					if (window.definedSlots && -1 !== window.definedSlots.indexOf("div-gpt-ad-custom")) {
						googletag.display("div-gpt-ad-custom");
					} else {
						console.log('div-gpt-ad-custom not a defined slot', window.definedSlots || []);
					}
				});
			}