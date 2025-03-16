now = new Date();
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.async = true;
	script.type = 'text/javascript';
	var script_address = 'https://cdn.yektanet.com/template/bnrs/yn_bnr.min.js';
	script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
	head.appendChild(script);