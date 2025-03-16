var g_AccountID = 0;
	var g_sessionID = "b7345eff150af64789d4419e";
	var g_ServerTime = 1697428496;
	var g_bUseNewCartAPI = false;

	$J( InitMiniprofileHovers( 'https%3A%2F%2Fstore.steampowered.com%2F' ) );

	
			GStoreItemData.AddNavParams({
			__page_default: "1_4_4_",
			storemenu_recommendedtags: "1_4_4__17"		});
		GDynamicStore.Init( 0, false, "", {"primary_language":null,"secondary_languages":null,"platform_windows":null,"platform_mac":null,"platform_linux":null,"timestamp_updated":null,"hide_store_broadcast":null,"review_score_preference":null,"timestamp_content_descriptor_preferences_updated":null,"provide_deck_feedback":null,"additional_languages":null}, 'US',
			{"bNoDefaultDescriptors":false} );
		GStoreItemData.SetCurrencyFormatter( function( nValueInCents, bWholeUnitsOnly ) { var fmt = function( nValueInCents, bWholeUnitsOnly ) {	var format = v_numberformat( nValueInCents / 100, bWholeUnitsOnly ? 0 : 2, ".", ","); return format; };var strNegativeSymbol = '';	if ( nValueInCents < 0 ) { strNegativeSymbol = '-'; nValueInCents = -nValueInCents; }return strNegativeSymbol + "$" + fmt( nValueInCents, bWholeUnitsOnly );} );
		GStoreItemData.SetCurrencyMinPriceIncrement( 1 );