$(document).ready(function() {
		let tabMenu = $(".hotven-party .link-tab h3");
		let tabList = $(".hotven-party .post-list");

		tabMenu.hover(function() {
			let linkTab = $(this).index();

			tabMenu.removeClass("on").eq(linkTab).addClass("on");
			tabList.removeClass("on").eq(linkTab).addClass("on");
		});
	});