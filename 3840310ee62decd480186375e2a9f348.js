$J( function() {

		GStoreItemData.AddStoreItemDataSet(
			{"rgApps":[],"rgPackages":[],"rgBundles":[]}		);
		GStoreItemData.AddStoreAccountData( [] );

		GHomepage.InitUserData( {
			rgRecommendedGames: [],
			bMergeRecommendationsToHighlights: 0,
			bNewRecommendations: 0,
			bUseNewMainCapZip: 1,
			bIsLimitedUser: 0,
			rgCuratedAppsData: [],
			rgCreatorFollowedAppData: [],
			oSettings: {"main_cluster":{"top_sellers":1,"early_access":1,"games_already_in_library":null,"recommended_for_you":1,"prepurchase":1,"games":null,"software":1,"dlc_for_you":1,"dlc":null,"recently_viewed":1,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":1,"video":1,"localized":1,"virtual_reality":1,"recommended_by_curators":null,"hidden":null},"new_on_steam":{"top_sellers":null,"early_access":null,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":null,"games":null,"software":1,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":1,"video":1,"localized":1,"virtual_reality":1,"recommended_by_curators":null,"hidden":null},"recently_updated":{"top_sellers":null,"early_access":1,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":null,"games":null,"software":1,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":1,"only_current_platform":1,"video":1,"localized":1,"virtual_reality":1,"recommended_by_curators":null,"hidden":null},"tabs":{"top_sellers":null,"early_access":1,"games_already_in_library":1,"recommended_for_you":null,"prepurchase":null,"games":null,"software":null,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":null,"video":null,"localized":1,"virtual_reality":null,"recommended_by_curators":null,"hidden":null},"specials":{"top_sellers":1,"early_access":1,"games_already_in_library":1,"recommended_for_you":1,"prepurchase":null,"games":null,"software":null,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":1,"games_not_in_library":null,"only_current_platform":null,"video":null,"localized":1,"virtual_reality":null,"recommended_by_curators":null,"hidden":null},"more_recommendations":{"top_sellers":1,"early_access":1,"games_already_in_library":null,"recommended_for_you":1,"prepurchase":null,"games":null,"software":null,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":1,"games_not_in_library":null,"only_current_platform":1,"video":null,"localized":1,"virtual_reality":null,"recommended_by_curators":null,"hidden":null},"friend_recommendations":{"top_sellers":1,"early_access":1,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":null,"games":null,"software":null,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":null,"video":null,"localized":1,"virtual_reality":null,"recommended_by_curators":null,"hidden":null},"curators":{"top_sellers":null,"early_access":1,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":null,"games":null,"software":1,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":1,"video":1,"localized":1,"virtual_reality":1,"recommended_by_curators":null,"hidden":null},"home":{"top_sellers":null,"early_access":1,"games_already_in_library":null,"recommended_for_you":null,"prepurchase":1,"games":null,"software":1,"dlc_for_you":null,"dlc":null,"recently_viewed":null,"new_on_steam":null,"popular_new_releases":null,"games_not_in_library":null,"only_current_platform":null,"video":1,"localized":1,"virtual_reality":1,"recommended_by_curators":null,"hidden":null},"success":1,"rwgrsn":-2},
			rgFriendRecommendations: [],
			rgRecommendedAppsByCreators: [],
			rgRecommendedBySteamLabsApps: [],
			rgCommunityRecommendations: [],
			strCommunityRecommendationsPrefLastSaved: false,
			rgRecommendedByDeepDiveApps: [],
			rgRecommendedByDeepDiveKeyTags: [],
			rgRecommendedByDeepDiveAppTags: [],
			recommendedByDeepDiveMethod: "",
			recommendedByDeepDiveFocusedApp: -1,
            nLastIRSettingsUpdate: 0,
            rgIRIncludedTags: [],
            rgIRExcludedTags: [],
			bShowTakeunder: 0,
            rgShuffleModules: [],
            nModuleShuffleCohort: 0,
            bDisplayShuffleCohort: false		} );

		InitAppPriorityLists( {} );

		if ( GHomepage.recommendedByDeepDiveFocusedApp > 0 )
		    $J('.deep_dive_omni_ctn').show();

		
					$J('#discovery_queue_static').hide();
						} );

	function injectSearch (name, resultsContainerName, resultsContentName)
	{
		var g_rgUserPreferences = {
			excluded_tags : [],
			excluded_content_descriptors : [3,4]		};
		var thing = $J("#"+name);
		var elemSuggestionsCtn = $J("#deep_dive_searchterm_options");
		var elemSuggestions = $J("#deep_dive_search_suggestion_contents");
		EnableSearchSuggestions( thing, '1_4_4_', 'US', 1, 'english', g_rgUserPreferences, '20694075', elemSuggestionsCtn, elemSuggestions);
	}