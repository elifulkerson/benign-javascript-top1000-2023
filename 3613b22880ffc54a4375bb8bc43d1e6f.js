$(document).ready(function() {
		let next = 1,
			liLength = 10,
			te = null;
		let prev = liLength;
		$('.wideRight .wideRightMenu .gameRanking div.folder > a.folder').on('click', function(e) {
			let me = $(this);
			let div = me.closest('div.invenrank');
			if (div.toggleClass('off').is('.off')) {
				next = 1;
				prev = liLength;
				te = setTimeout(fn, 3000);
			} else {
				clearTimeout(te);
				div.find('li.rank').stop().css({ height: 'inherit', marginBottom: 17});
			}
			e.preventDefault();
		})
	
		let fn = function() {
			let ul = $('.wideRight .wideRightMenu .gameRanking ul.ranklist');
			try {
				if (ul.length) {
					if (next == liLength) {
						ul.find('li.rank').css({ height: 'inherit', marginBottom: 'inherit' });
					} else {
						ul.find('li.rank').filter(':nth-child(' + (next) + ')').animate({ height: 0, marginBottom:0}, 300);
					}
					prev = next;
					next = next == liLength ? 1 : (next + 1);
				} else {
					prev = liLength;
					next = 1;
				}
			} finally {
				clearTimeout(te);
				te = setTimeout(fn, 3000);
			}
		};
		te = setTimeout(fn, 3000);
	});