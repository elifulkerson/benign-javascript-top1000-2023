function show_menu_mob()
	{
		document.getElementById("nav_wrap").className += ' show_mob_menu';
		document.getElementById("menu_hndlr").innerHTML = '<i onClick="hide_menu_mob();" class="fa fa-times"></i>';
	}
	
	function hide_menu_mob()
	{
		document.getElementById("nav_wrap").classList.remove("show_mob_menu");
		document.getElementById("menu_hndlr").innerHTML = '<i onClick="show_menu_mob();" class="fa fa-bars"></i>';
	}