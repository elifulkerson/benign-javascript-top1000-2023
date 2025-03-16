// frame breaker
	if( top.frames.length != 0 ) { top.location=self.document.location; }

	window.name = 'top_level';
	document.name = 'top_level';

	var t = this;
	
	var g_bRefactored = true;

	var g_bSsoLoginEnabled = true;
	var g_bSsoLoginEnabled_Twitter = true;
	var g_nAgeCheckRequired = false;
	var g_hLegalNotice = [];