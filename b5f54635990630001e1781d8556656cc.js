var _szUserId = '';
	var isLogin = 0;
	var bPcBanner =  '0';
	var bPcMainBanner =  '1';
	var bPcCategoryBanner =  '1';
	var bPcMainCoupleBanner =  '1';
	var geo_cc = 'KR';
	var szIdTag = ''; 
	var szHrefLang = 'ko';

	require.config({
		urlArgs: '' //'v=' + (+new Date())//AppVersion
		, paths: {
			favorite : 'app/main/favorite.global'
            , recent : 'app/main/recent'
			//, search : 'app/main/search.global'
			, hashtag : 'app/main/hashtag.global'
			, doT :	'app/main/doT.min'
			, view : 'app/main/view.global.broadlist'
			, banner : 'app/main/banner.category'
		}
		, shim: {
			'li18n' : {
				deps: ['jquery']
				, exports : 'jQuery'
			}
		}
		, deps: ['https://static.afreecatv.com/asset/service/config/config.js']
		, callback: function() {
			requirejs(['app'], function(app) {
				app.start();
			}, function(err) {
			});
		}
	});

	define('preLoad', ['afreeca'], function() {
	});

	var _search;
	define('app', ['afreeca', 'view', 'preLoad'], function(afreeca, view) {
		var $ = afreeca.$;

		return {
			start : function()
			{
				//_search = search;
				view.szLocale = "ko_KR";
				view.nAbroadChk = "0";
				view.nChinaChk = "0";
				view.bDisableMainHotIssueVod = "";
				view.init();
                atv.releaseInit('addFav');
				atv.releaseInit('Later');
			}
		}
	});