$(function () {
				let $w = $(window)
					, $bodybg = $('body')
					, param = new URLSearchParams(location.search)
					, val = $(document).height() - $w.height();
				$w.on('scroll', function () {
					let st = $w.scrollTop();
					$bodybg.get(0).style.setProperty('--backskin-st', st + 'px');
					if (st < 225) {
					} else {
						if (param.get('ad_bg_log')) {
							console.log(`ad_bg_log ${st} : ${val}`);
						}
					}
				}).on('resize', function () {
					val = $(document).height() - $w.height();
				}).trigger('resize').trigger('scroll');
			});