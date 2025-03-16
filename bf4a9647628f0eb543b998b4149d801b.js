g_sessionID = "46ef3d1ac1acca3963d46e91";
	g_steamID = false;
	g_strLanguage = "english";
	g_SNR = '2_4_DefaultAction_';
	g_bAllowAppImpressions = true;
		g_ContentDescriptorPreferences = [1,3,4];

	

	// We always want to have the timezone cookie set for PHP to use
	setTimezoneCookies();

	$J( function() {

		InitMiniprofileHovers(( 'https%3A%2F%2Fsteamcommunity.com' ));
		InitEmoticonHovers();
		ApplyAdultContentPreferences();
	});

	$J( function() { InitEconomyHovers( "https:\/\/community.cloudflare.steamstatic.com\/public\/css\/skin_1\/economy.css?v=Hib2Mv7hYJ4z&l=english&_cdn=cloudflare", "https:\/\/community.cloudflare.steamstatic.com\/public\/javascript\/economy_common.js?v=tsXdRVB0yEaR&l=english&_cdn=cloudflare", "https:\/\/community.cloudflare.steamstatic.com\/public\/javascript\/economy.js?v=7F-CkHa-o5A1&l=english&_cdn=cloudflare" );});