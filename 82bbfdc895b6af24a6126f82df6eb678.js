$(document).ready(function()
{
	var menu_right;
	if ($.cookie('userid') > 0)
	{
		menu_right = '<a href="/users.php?logout" class="logout" border="0"><img src="//cdnbunny.org/i/viti.gif" alt="logout" /></a><span class="logout"><a href="/profile.php" class="logout"  border="0"><img src="//cdnbunny.org/i/profil.gif" alt="profile" /></a>';
	}
	else
	{
		menu_right = '<a href="/users.php" class="logout" border="0"><img src="//cdnbunny.org/i/zaiti.gif" alt="login" /></a>';
	}
	$("#menu_right_side").html(menu_right);
});