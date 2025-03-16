var adWrapper = document.querySelector('.slideshow-ad-wrapper');
			if (typeof googletag !== 'undefined') {
				googletag.cmd.push(function() {
					if (window.definedSlots && -1 !== window.definedSlots.indexOf("div-gpt-ad-overlay_fullpage")) {
						googletag.display("div-gpt-ad-overlay_fullpage");
					} else {
						console.log('div-gpt-ad-overlay_fullpage not a defined slot', window.definedSlots || []);
					}
				});
			}