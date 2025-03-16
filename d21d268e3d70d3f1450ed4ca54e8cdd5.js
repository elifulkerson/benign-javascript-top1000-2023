var adWrapper = document.querySelector('.slideshow-ad-wrapper');
			if (typeof googletag !== 'undefined') {
				googletag.cmd.push(function() {
					if (window.definedSlots && -1 !== window.definedSlots.indexOf("div-gpt-ad-native")) {
						googletag.display("div-gpt-ad-native");
					} else {
						console.log('div-gpt-ad-native not a defined slot', window.definedSlots || []);
					}
				});
			}