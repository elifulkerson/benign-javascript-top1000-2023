let firefly_last_known_scroll_position = 0;
		let firefly_sticky_sb_ticking = false;
		let firefly_sticky_sb_timeout = false;
		let firefly_sticky_sb_delay = 250;

		// Only run when page has fixed-widgets
		if ( document.querySelector(".fixed-widgets") ) {
			// add scroll event if asside exists.
			fireflyStickySbSetScrollEventListener();

			// handle browser resize.
			window.addEventListener( "resize", fireflyStickySbSetScrollEventListener );
		}

		// add/remove scrollEventListener based on browser width.
		function fireflyStickySbSetScrollEventListener() {
			if ( window.innerWidth >= 768 ) {
				document.addEventListener( "scroll", fireflyStickySbScrollListener );
			} else {
				document.removeEventListener( "scroll", fireflyStickySbScrollListener );
			}
		}

		// listener for scroll event... uses requestAnimationFrame for efficiency.
		function fireflyStickySbScrollListener() {
			firefly_last_known_scroll_position = window.scrollY;

			if ( !firefly_sticky_sb_ticking ) {
				window.requestAnimationFrame(function() {
					fireflyPreventWidgetOverlap(firefly_last_known_scroll_position);
					firefly_sticky_sb_ticking = false;
				})

				firefly_sticky_sb_ticking = true;
			}
		}

		// preventing fixed-widget from overlapping footer.
		function fireflyPreventWidgetOverlap( window_scroll_position ) {
			let fixedWidgets = document.querySelector(".fixed-widgets");
			let firefly_sticky_sb_body_height = document.body.offsetHeight;
			let firefly_sticky_sb_widget_height = fixedWidgets.offsetHeight;
			let firefly_sticky_sb_footer_height = document.querySelector("footer").offsetHeight;
			let firefly_sticky_sb_menu_height = document.getElementById("site-header").offsetHeight;
			let firefly_sticky_sb_stop_height = firefly_sticky_sb_body_height - firefly_sticky_sb_widget_height - firefly_sticky_sb_footer_height - firefly_sticky_sb_menu_height;

			// once to the footer, attach sticky to bottom instead of top.
			if ( ( window_scroll_position > firefly_sticky_sb_stop_height ) && ( document.getElementsByClassName("fixed-widgets fixed").length >= 1 ) ) {
				fixedWidgets.classList.add("stop");
			} else {
				fixedWidgets.classList.remove("stop");
			}
		}