var adWrapper = document.querySelector('.slideshow-ad-wrapper');
			if (typeof googletag !== 'undefined') {
				googletag.cmd.push(function() {
					if (window.definedSlots && -1 !== window.definedSlots.indexOf("div-gpt-ad-rec_widget")) {
						googletag.display("div-gpt-ad-rec_widget");
					} else {
						console.log('div-gpt-ad-rec_widget not a defined slot', window.definedSlots || []);
					}
				});
			}