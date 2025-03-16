var adWrapper = document.querySelector('.slideshow-ad-wrapper');
			if (typeof googletag !== 'undefined') {
				googletag.cmd.push(function() {
					if (window.definedSlots && -1 !== window.definedSlots.indexOf("div-gpt-ad-skin")) {
						googletag.display("div-gpt-ad-skin");
					} else {
						console.log('div-gpt-ad-skin not a defined slot', window.definedSlots || []);
					}
				});
			}