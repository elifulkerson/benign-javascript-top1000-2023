var szLang = 'ko_KR';
    var szAcptLang = '';
	var _szCurHash = '';
	var _szHashTag = '';
	var _szHashType = '';
	//var szPageType = ( szLang != "" ) ?  szLang : "list_main";
	var szPageType = "list_main";
	var nCurrentPageType = 2;
	// 홈 개편 백업 플래그
	var bMyplusOpen = true;

	if(szLang == "ko_KR" )
	{
		if ( (oMainData.MAIN_PM_RESULT == 1) && _szCurHash == "" )
		{
			location.href = VOD_AFREECATV;
		}
	}

	function initSeasonalBnr()
	{
		// 시즈널 배너
		if(oMainData.MAIN_SEASONAL_BNR_RESULT == 1)
		{
			var oSeasonalBnr = oMainData.MAIN_SEASONAL_BNR_DATA[0];
			var szTarget = '';

			if(oSeasonalBnr.target == 'Y')
			{
				szTarget = 'target="_blank"';
			}

			if (oSeasonalBnr.list_img_path != "" && oSeasonalBnr.list_img_path != null)
			{
				$('h1#afLogo').html('<a href="'+ oSeasonalBnr.link +'" '+ szTarget +'><img alt="" src="'+ ADMIN_IMG_AFREECATV +'/'+ oSeasonalBnr.list_img_path +'" width="210" height="65" title="afreecaTV loading="lazy"">');
			}
			else
			{
				$('h1#afLogo').html('<a href="https://www.afreecatv.com">afreecaTV</a></h1>');
			}
		}
		else
		{
			$('h1#afLogo').html('<a href="https://www.afreecatv.com">afreecaTV</a></h1>');
		}
	}

    try
    {
        var importAAB = document.createElement('script');
        importAAB.src = RES_AFREECATV + '/script/ad/af_ad_block.js';
        document.head.appendChild(importAAB);
    } catch(e) {}

    // 창크기 변환 리스트
    $(window).ready(function(){
		const szCoupleBnrHash = (_szCurHash == "" && 1) ? "myplus" : _szCurHash;
		const bAdMainCoupleBanner = 1 ? 1 : 0; //애드블럭 때문에 php 변수로 변수 재생성

		if (bAdMainCoupleBanner && (typeof BannerLoader !== 'undefined')) {
			//비동기로 인해 BannerLoader.js에서 this 값이 겹쳐 객체 2개 생성
			const coupleLeftbanner = new BannerLoader();
			const coupleGnbtbanner = new BannerLoader();
			
			if (coupleLeftbanner.loadMainCoupleLnbBanner) {
				coupleLeftbanner.loadMainCoupleLnbBanner({parentId: "innerLnb", category: szCoupleBnrHash});
			}
			if (coupleGnbtbanner.loadMainCoupleGnbBanner) {
				coupleGnbtbanner.loadMainCoupleGnbBanner({parentId: "afSearch_inner", category: szCoupleBnrHash});
			}
		}


        if((checkSimple("main","ad_banner") && (_szCurHash == "" || _szCurHash == "myplus")) && 1) {
            if(typeof BannerLoader !== 'undefined') {
				var mainBanner = new BannerLoader();
				mainBanner.loadMainBanner();
            }
        }
    });

	function profileImgOnError(e, szUserId){
		if(e.src.split(".").at(-1) == "webp"){
			e.src = "https://stimg.afreecatv.com/LOGO/" + szUserId.substring(0,2) + "/" + szUserId + "/" + szUserId + ".jpg";
		} else {
			e.src="https://res.afreecatv.com/images/afmain/img_thumb_profile.gif";
		}
	}