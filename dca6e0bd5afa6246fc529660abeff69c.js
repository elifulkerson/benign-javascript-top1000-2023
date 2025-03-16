$(document).ready(function() {
	var gstarNewsWrap = $('#todayNews');
	gstarNewsWrap.find('.tab_list > li').on({
		click: function(e) {
			var me = $(this);
			var tabnum = me.find("a").data('link');
	
			if(tabnum != "6"){
				gstarNewsWrap.find('.tab_list > li').removeClass('active');
				me.addClass('active');

				gstarNewsWrap.find('.news_content_area').removeClass('active');
				gstarNewsWrap.find('.news_content_area.news'+tabnum).addClass('active');
			}
		},
	});
});