$('#spbar').ready(function() {
	if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1) {
		target = document.getElementById('sh_header_box');
		target.style.top = 170 + 'px';
		$('#spbar').before('<div id="sp_bar"><a href="https://fc2.com/change_sp.php?is_pc=0&lang=en"><img src="https://static.fc2.com/image/iphone/sp_btn_en.png" alt="SmartPhone" /></a></div>');
	} else if (navigator.userAgent.indexOf('Android') != -1) {
		$('#spbar').before('<div id="sp_bar"><a href="https://fc2.com/change_sp.php?is_pc=0&lang=en"><img src="https://static.fc2.com/image/iphone/sp_btn_en.png" alt="SmartPhone" /></a></div>');
		target = document.getElementById('sh_header_box');
		target.style.top = 170 + 'px';
	} else if (navigator.userAgent.indexOf('Windows Phone') != -1) {
		$('#spbar').before('<div id="sp_bar"><a href="https://fc2.com/change_sp.php?is_pc=0&lang=en"><img src="https://static.fc2.com/image/iphone/sp_btn_en.png" alt="SmartPhone" /></a></div>');
		target = document.getElementById('sh_header_box');
		target.style.top = 170 + 'px';
	}
});
