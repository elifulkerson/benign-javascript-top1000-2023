jQuery(document).ready(function($) {
    $(".tabs-menu.edit a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".editiorial .tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
	 var default_tab = $(".tabs-menu.edit li.current a").attr("href");
	 $(default_tab).fadeIn();	 
});