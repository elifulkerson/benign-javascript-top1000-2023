$(document).ready(function()
{
	if ($.cookie('msg') != null)
	{
		if ($.cookie('msg').length > 0)
		{
			var msg2 = '<div id="warning">' + $.cookie('msg').replace(/["+"]/g, ' ') + '</div>';
			$("#msg1").html(msg2);
			$.cookie('msg', '', { expires: -1 });
		}
	}
});