$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "//i.gamersky.com/user/removecookie",
        dataType: "jsonp",
        success: function (response) {
        }
    });
	
	$.ajax({
        type: "POST",
        url: "//cm.gamersky.com/api/removecookie",
        dataType: "jsonp",
        success: function (response) {
        }
    });
});