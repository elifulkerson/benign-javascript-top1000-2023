(function(){
			var mobileSwitcher = mr.id('mobileSwitcher');

			mr.bind(mobileSwitcher, 'click', function(e) {
				e || (e = window.event);
				if (__PH.cookie.s.getGlobal('m_mr') != undefined) {
					__PH.cookie.s.removeGlobal('m_mr');
					mr.counter('clb946112');
					setTimeout(function(){
						window.location.reload();
					},10);
				} else {
					mr.counter('clb660358');
					setTimeout(function(){
						window.location.href = mobileSwitcher.href;
					}, 10);
				}
				e.preventDefault ? e.preventDefault() : (e.returnValue = false);
			});
		})();