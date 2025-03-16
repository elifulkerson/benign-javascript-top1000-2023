var adWrapper = document.querySelector('.slideshow-ad-wrapper');
			if (typeof googletag !== 'undefined') {
				googletag.cmd.push(function() {
					if (window.definedSlots && -1 !== window.definedSlots.indexOf("div-gpt-ad-rec_atf")) {
						googletag.display("div-gpt-ad-rec_atf");
					} else {
						console.log('div-gpt-ad-rec_atf not a defined slot', window.definedSlots || []);
					}
				});
			}