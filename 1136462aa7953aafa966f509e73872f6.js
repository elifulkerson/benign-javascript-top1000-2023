window.performance.mark('frontend.taboola.init.config');
				window._taboola = window._taboola || [];
				window._taboola.push({"homepage":"auto"});
				window.taboolaInit = function(d) {
					var e = d.createElement('script');
					e.onload = function() {
						window._taboola.checkTaboolaLoaded = function () { return true; }
						window.performance.measure('frontend.taboola.init.success', 'frontend.taboola.init.start');
					};
					e.onerror = function() {
						window._taboola.checkTaboolaLoaded = function () { return false; }
						window.performance.mark('frontend.taboola.init.error');
					};
					e.async = true;
					e.setAttribute('id', 'tb_loader_script');
					e.src = 'https://cdn.taboola.com/libtrc/gomedia1-network/loader.js';
					d.getElementsByTagName('head')[0].appendChild(e);

					window.performance.mark('tbl_ic');
					window.performance.mark('frontend.taboola.init.start');
				};