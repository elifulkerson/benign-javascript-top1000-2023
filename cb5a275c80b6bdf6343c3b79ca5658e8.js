if( typeof(afreeca) == 'undefined')
{
	// http://www.afreeca.com/script/common/afreeca.js no call readyë¯¸í¸ì¶ì ëí ëë¹
	var afreeca ={
		front : {
		}
	};
}

afreeca.front.statistics = {
	// íµê³ API í¸ì¶ ì ë¬´
	isLog : false
	, nPageContentIdx : 0 // íì´ì§ ë´ììì ì»¨íì¸  ìì (íì¬ íì´ì§ì ëªë² ì§¸ ì»¨íì¸ ë¥¼ ëë¥¸ê±´ì§)
    , nContentIdx : 0 // ì íí ì»¨íì¸ ì ìì ((íì´ì§ ë²í¸ -1) * íì´ì§ë¹ ë¸ì¶ ê°ì) + íì¬ íì´ì§ììì ì»¨íì¸  ìì
	, nContentCnt : 0// ì íí ì»¨íì¸  ìì¹ìì ë¸ì¶ë ê°ì ((íì´ì§ ë²í¸) * íì´ì§ë¹ ë¸ì¶ ê°ì)
    , nContentTotalCnt : 0 // ê²ì ê²°ê³¼ì ì´ ê°ì
	, szSckSessionId : '' // í­ ì´ë, ìë¡ì´ ê²ì ë°ìì ë³ê²½ëë ê°
	, section_name : '' // ëì¼ í¹ì± ì»¨íì¸  ì¤(live, vod, bj, post) ì»¨íì¸  ë´ì ìì­ì´ ì¸ë¶í ëìë ê²½ì° êµ¬ë¶íê¸° ìí¨(íµí©ê²ì, ë¤ìë³´ê¸° VOD, ìë¡ëVODë±)
	, more_type : '' // ëë³´ê¸° ë²í¼ì ëë³´ê¸° íì êµ¬ë¶
	, logFileType : '' // logì ex) review
	, szIsHot : 'false' // í«ë VODì¸ì§
	, setCommonSearchParam: function () {
		// ê³µì© ë°ì´í° - íì ë°ì´í° ë³ì ì¤ì íë ë¶ë¶
		var szActType = $('input[name=szActType]').val();

		switch ($('input[name=szSearchType]').val())
		{
			case 'broad':
				szActType = 'live';	// ìë°©ì¡ í­
				break;
			case 'video':
				if(szActType != "recommend"){
					szActType = 'vod';	// ëìì í­
				}
				break;
			case 'bj':
				szActType = 'bj';	// BJ í­
				break;
			case 'post':
				szActType = 'post'; // ê²ìê¸ í­
				break;
			case 'total':
				//szActType = '';	// íµí©ê²ì í­ ë° ê¸°í
				break;
		}
		$('input[name=szActType]').val(szActType);

		// szSortType : szActType ì ë°ë¼ ë¤ë¦
		var szSortType = $('input[name=szSortType]').val();
		if (szActType == 'live')
		{
			switch ($('input[name=szBroadOrder]').val())
			{
				case 'rank':
					szSortType = 'bjrank';		// BJë­í¹ì
					break;
				case 'pc_total_view_cnt':
					szSortType = 'view_count';	// ìì²­ì¸ìì or ëì ìì²­ìì
					break;
				case 'broad_start':
					szSortType = 'latest';		// ìµì ì
					break;
				case 'broad_bps':
					szSortType = 'broad_bps';	// ê³ íì§ì
					break;
				case 'broad_resolution':
					szSortType = 'broad_resolution';	// ê³ í´ìëì
					break;
				case '':
					szSortType = 'score';	// ì íëì
					break;
			}
		}
		else if (szActType == 'vod')
		{
			switch ($('input[name=szVideoOrder]').val())
			{
				case 'view_cnt':
					szSortType = 'view_count';	// ìì²­ì¸ìì or ëì ìì²­ìì
					break;
				case 'reg_date':
					szSortType = 'latest';		// ìµì ì
					break;
				default:
					szSortType = 'score';		// ì íëì
				break;
			}
		}
		
		else if (szActType == 'post')
		{
			switch ($('input[name=szPostOrder]').val())
			{
				case 'reg_date':
					szSortType = 'latest';		// ìµì ì
					break;
				case 'view_cnt':
					szSortType = 'view_count';	// ìì²­ì¸ìì or ëì ìì²­ìì
					break;
				case 'memo_cnt':
					szSortType = 'memo_cnt';	// ë°©ì¡ìê°ì
					break;
				case '':
					szSortType = 'latest';		// ìµì ì
					break;
			}
		}
		else if (szActType == 'bj')
		{
			switch ($('input[name=szBjOrder]').val())
			{
				case 'ranking':
					szSortType = 'bjrank';		// BJë­í¹ì
					break;
				case 'total_view_cnt':
					szSortType = 'view_count';	// ìì²­ì¸ìì or ëì ìì²­ìì
					break;
				case 'total_broad_time':
					szSortType = 'broad_time';	// ë°©ì¡ìê°ì
					break;
				case 'favorite_cnt':
					szSortType = 'favorite';	// ì ì²­ìì
					break;
				case 'fanclub_cnt':
					szSortType = 'fan_club';	// í¬í´ë½ì
					break;
				case '':
					szSortType = 'score';	// ì íëì
					break;
			}
		}
		else if (szActType == 'hash_all')
		{
			szSortType = 'view_count';
			$('input[name=szTerm]').val('1month');
		}
		else if (szActType == 'hash_live')
		{
			szSortType = $('#hashtagLive_order li.on').data('order').toLowerCase();
			switch (szSortType) {
				case 'broad_start':
					szSortType = "latest";
					break;
				default:
					szSortType = "view_count";
					break;
			}
		}
		else if (szActType == 'hash_vod')
		{
			szSortType = $('#hashtagVod_order li.on').data('order').toLowerCase();
			switch (szSortType) {	// í´ìíê·¸ ëìì UPì=recomm_cnt, ëê¸ì=memo_cntë¡ ë³´ë
				case 'reg_date':
					szSortType = "latest";
					break;
				case 'view_cnt':
					szSortType = "view_count";
					break;
			}
			$('input[name=szTerm]').val($('#hashtagVod_range li.on').data('range').toLowerCase());
		}
		$('input[name=szSortType]').val(szSortType);
	
		var szFilterType = '';
		if (szActType == 'hash') {
			$('input[name=szTerm]').val($('#range li.on').data('range').toLowerCase());
		}
		switch ($('input[name=szTerm]').val())
		{
			case 'all':
				szFilterType = 'all';	// ì ì²´ê¸°ê° íí°ë§
				break;
			case '1day':
				szFilterType = '1day';	// ìµê·¼ 1ì¼ íí°ë§
				break;
			case '1week':
				szFilterType = '1week';	// ìµê·¼1ì£¼ íí°ë§
				break;
			case '1month':
				szFilterType = '1month';	// ìµê·¼ 1ë¬ íí°ë§
				break;
			case '1year':
				szFilterType = '1year';	// ìµê·¼ 1ë íí°ë§
				break;
			case 'input':
				szFilterType = 'di';	// ì§ì ìë ¥ íí°ë§
				break;
		}
		$('input[name=szFilterType]').val(szFilterType);

		// szActCode	: ê°ë³ë¡ ì¤ì 
		// szBjId		: ê°ë³ë¡ ì¤ì 
		// szBno		: ê°ë³ë¡ ì¤ì 
		// szVno		: ê°ë³ë¡ ì¤ì 
		// szStype 		: ê°ë³ë¡ ì¤ì 
	}
	, setRealTimeSearchParam: function (szKeyWord) {
		//ì¤ìê° ê²ìì´ í´ë¦­ í  ê²½ì°
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();			// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szStype]').val('rk');							// actionLog í sType ì¸í
		$('input[name=szLocation]').val('total_search');			// actionLog í location ì¸í
	}
	, setRelationSearchListParam: function (szKeyWord) {
		//ì°ê´ ê²ì bjë¦¬ì¤í¸ í´ë¦­ í  ê²½ì°
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();			// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szStype]').val('rb');							// actionLog í sType ì¸í
		$('input[name=szLocation]').val('total_search');			// actionLog í location ì¸í
	}
	, setRecommendSearchParam: function (szKeyWord) {
		// ì¶ì² ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();			// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szStype]').val('rc');						// actionLog í sType ì¸í
		$('input[name=szSearchType]').val('total');				// íµí©ê²ì ëí´í¸
		$('input[name=szLocation]').val('total_search');		// actionLog í location ì¸í
	}
	, setRelateSearchParam: function (szKeyWord) {
		// ì°ê´ ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szStype]').val('rt');
		$('input[name=szLocation]').val('total_search');
		return true;
	}
	, setReSearchParam: function (szKeyWord, szStype) {
		// ì°ê´ ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szStype]').val(szStype);
		$('input[name=szLocation]').val('total_search');
		return true;
	}	
	, setLiveQuickViewSearchParam: function (szKeyWord, szActCode, szBjId, szBno) {
		//ë°©ì¡ ë°ë¡ë³´ê¸°
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActType]').val('direct');
		$('input[name=szActCode]').val(szActCode);

		if (typeof (szBjId) != 'undefined' && szBjId != null)
		{
			$('input[name=szBjId]').val(szBjId);
		}

		if (typeof (szBno) != 'undefined' && szBno != null)
		{
			$('input[name=szBno]').val(szBno);
		}		

		//$('input[name=szStype]').val( 'rt' );

		afreeca.front.statistics.callSearchStatistics(szKeyWord);	// íµê³ API í¸ì¶
		return true;
	}
	, setProfileSearchParam: function (szKeyWord, szActCode, szBjId, szBno, nTitleNo, szAddData) {
		// BJ íë¡í ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActType]').val('bjp');
		$('input[name=szActCode]').val(szActCode);

		if (typeof (szBjId) != 'undefined' && szBjId != null)
		{
			$('input[name=szBjId]').val(szBjId);
		}

		if (typeof (szBno) != 'undefined' && szBno != null)
		{
			$('input[name=szBno]').val(szBno);
		}

		if( typeof(nTitleNo) != 'undefined' && nTitleNo != null )
		{
			$('input[name=nTitleNo]').val( nTitleNo );
		}
		
		if (typeof (szAddData) != 'undefined' && szAddData != null && szActCode == 'more')
		{
			afreeca.front.statistics.more_type = szAddData;
		}		

		//$('input[name=szStype]').val( 'rt' );

		afreeca.front.statistics.callSearchStatistics(szKeyWord);	// íµê³ API í¸ì¶
		return true;
	}
	, setProfileAreaSearchParam: function (szKeyWord, szActCode, szBjId, szBno, szVno, szAddData, szFileType, szIsHot) {
		// BJ íë¡í ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActType]').val('bjp');
		$('input[name=szActCode]').val(szActCode);

		if (typeof (szBjId) != 'undefined' || szBjId != '')
		{
			$('input[name=szBjId]').val(szBjId);
		}

		if (typeof (szBno) != 'undefined' || szBno != '')
		{
			$('input[name=szBno]').val(szBno);
		}

		if( typeof(szVno) != 'undefined' || szVno != '' )
		{
			$('input[name=szVno]').val( szVno );
		}

		if(afreeca.front.statistics.section_name == 'latest_contents'){
			if( typeof(szFileType) != 'undefined' || szFileType != '' )
			{
				afreeca.front.statistics.logFileType = szFileType;
			}
			
			if( typeof(szIsHot) != 'undefined')
			{
				afreeca.front.statistics.szIsHot = szIsHot;
			}
		}

		//$('input[name=szStype]').val( 'rt' );

		afreeca.front.statistics.callSearchStatistics(szKeyWord);	// íµê³ API í¸ì¶
		return true;
	}	
	,setThemeSearchParam : function( szKeyWord, szActCode, szBjid ){
		// íë§ ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}
		
		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 
		
		if (typeof (szBjid) != 'undefined' && szBjid != null)
		{
			$('input[name=szBjId]').val(szBjid);
		}
		
		$('input[name=szActType]').val( 'tsk' );
		$('input[name=szActCode]').val( szActCode );

		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}
	,sendThemeSearchSimpleParam : function( szActCode, nListIdx ){ //actcode =tt, nListIndx = ëªë²ì§¸ ììì¸ì§
		// íë§ ê²ìì´ ë¶ë¶, ë¡ê·¸ ê°ìíë ë²ì 
		//https://scketc.afreecatv.com/api.php?m=actionLog&w=webk&location=total_search&acttype=tsk&actcode=tt&list_idx=0&d="ê¸°ì¡´ê²ìììë¶ì´ëê°"&stype="ê¸°ì¡´ê²ìììë¶ì´ëê°"
		// íµê³ API
		var szUrl = SEARCH_SCKETC_80+'/api.php';
		var szStype = $('input[name=szStype]').val();
		var params = {
			m		: 'actionLog',
			d		: encodeURIComponent(szKeyword),
			w		: 'webk',
			location: 'total_search',
			acttype : 'tsk',
			actcode : szActCode,
			stype	: szStype
		};

		if(nListIdx != ''){
			params['list_idx'] = nListIdx;
		}
	
		try
		{
			$.ajax({
				type		: 'GET',
				dataType	: 'jsonp',
				//jsonp		: 'callback',
				url			: szUrl,
				cache		: false,
				//async		: false,
				data		: params,
				success	: function(oData,status){
				},
				error : function(jqXHR, status, errorThrow){
				}
			});
		}
		catch(e)
		{
		}

		return true;
	}
	, setLiveSearchParam: function (szKeyWord, szActCode, szBjId, szBno, nContentIdx, nContentTotalCnt) {
		// ìë°©ì¡ ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		$('input[name=szActType]').val('live');
		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActCode]').val(szActCode);

		if (typeof (szBjId) != 'undefined' && szBjId != null)
		{
			$('input[name=szBjId]').val(szBjId);
		}

		if (typeof (szBno) != 'undefined' && szBno != null)
		{
			$('input[name=szBno]').val(szBno);
		}

		if(typeof(nContentIdx) != "undefined" && typeof(nContentTotalCnt) != "undefined"){
			var nTmpPageNo = parseInt($('input[name=nPageNo]').val());
			var nTmpListCnt = parseInt($('input[name=nListCnt]').val());

			afreeca.front.statistics.nPageContentIdx = nContentIdx;
			afreeca.front.statistics.nContentIdx = nContentIdx;
			afreeca.front.statistics.nContentTotalCnt = nContentTotalCnt;

			if(nTmpPageNo > 1 && nTmpListCnt > 0){
				afreeca.front.statistics.nContentCnt = nTmpPageNo * nTmpListCnt;
				nTmpPageNo = nTmpPageNo -1;

				afreeca.front.statistics.nContentIdx = nTmpPageNo * nTmpListCnt + parseInt(nContentIdx);
			}
		}

		afreeca.front.statistics.callSearchStatistics(szKeyWord);	// íµê³ API í¸ì¶
		return true;
	}
	, setRecommendContentsSearchParam: function (szKeyWord, szActCode, szBjId, szContentType, szContentNo, nContentIdx, nContentTotalCnt) {
		// ìë°©ì¡ ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		$('input[name=szActType]').val('recommend');
		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActCode]').val(szActCode);

		if (typeof (szBjId) != 'undefined' && szBjId != null)
		{
			$('input[name=szBjId]').val(szBjId);
		}

		if (szContentType == 'live' && typeof (szContentType) != 'undefined' && szContentNo != null)
		{
			$('input[name=szBno]').val(szContentNo);
		}

		if (szContentType == 'vod' && typeof (szContentType) != 'undefined' && szContentNo != null)
		{
			$('input[name=szVno]').val(szContentNo);
		}
		
		if (szContentType == 'bj' && typeof (szContentType) != 'undefined' && szContentNo != null)
		{
			$('input[name=szBjId]').val(szContentNo);
		}		

		if(typeof(nContentIdx) != "undefined" && typeof(nContentTotalCnt) != "undefined"){
			var nTmpPageNo = parseInt($('input[name=nPageNo]').val());
			var nTmpListCnt = parseInt($('input[name=nListCnt]').val());

			afreeca.front.statistics.nPageContentIdx = nContentIdx;
			afreeca.front.statistics.nContentIdx = nContentIdx;
			afreeca.front.statistics.nContentTotalCnt = nContentTotalCnt;

			if(nTmpPageNo > 1 && nTmpListCnt > 0){
				afreeca.front.statistics.nContentCnt = nTmpPageNo * nTmpListCnt;
				nTmpPageNo = nTmpPageNo -1;

				afreeca.front.statistics.nContentIdx = nTmpPageNo * nTmpListCnt + parseInt(nContentIdx);
			}
		}

		afreeca.front.statistics.callSearchStatistics(szKeyWord);	// íµê³ API í¸ì¶
		return true;
	}	
	, setMoreParam: function (szKeyWord, szActType) {
		// ìë°©ì¡ ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if (jQuery.trim(szKeyWord) == '')
		{
			return;
		}

		$('input[name=szActType]').val(szActType);
		$('input[name=szActCode]').val('more');
		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		afreeca.front.statistics.callSearchStatistics(szKeyWord);	// íµê³ API í¸ì¶
		return true;
	}	
	,setVodSearchParam : function( szKeyWord, szActType, szActCode, szBjId, szVno, szPageNo, szMlsearchType, nContentIdx, nContentTotalCnt, nVodPlayListVno){
		// ëìì ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}
		
		if(szActType == "recommend"){
			$('input[name=szActType]').val('recommend');
		} else {
			$('input[name=szActType]').val('vod');
		}
		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActCode]').val( szActCode );

		if( typeof(szBjId) != 'undefined' && szBjId != null )
		{
			$('input[name=szBjId]').val( szBjId );
		}

		if( typeof(szVno) != 'undefined' && szVno != null && szActType != 'vod_playlist')
		{
			$('input[name=szVno]').val( szVno );
		}

		if( typeof(szVno) != 'undefined' && szVno != null && szActType == 'vod_playlist')
		{
			$('input[name=szPlaylistIdx]').val(szVno);


			if( typeof(nVodPlayListVno) != 'undefined' && nVodPlayListVno != null)
			{
				$('input[name=szVno]').val(nVodPlayListVno);
			}			
		}

		if( typeof(szPageNo) != 'undefined' && szPageNo != null )
		{
			$('input[name=nPageNo]').val( szPageNo );
		}

		if( typeof(szMlsearchType) != 'undefined' && szMlsearchType != null )
		{
			$('input[name=szMlsearchType]').val(szMlsearchType);
		}
		
		if(typeof(nContentIdx) != "undefined" && typeof(nContentTotalCnt) != "undefined"){
			var nTmpPageNo = parseInt($('input[name=nPageNo]').val());
			var nTmpListCnt = parseInt($('input[name=nListCnt]').val());

			afreeca.front.statistics.nPageContentIdx = nContentIdx;
			afreeca.front.statistics.nContentIdx = nContentIdx;
			afreeca.front.statistics.nContentTotalCnt = nContentTotalCnt;

			if(nTmpPageNo > 1 && nTmpListCnt > 0){
				afreeca.front.statistics.nContentCnt = nTmpPageNo * nTmpListCnt;
				nTmpPageNo = nTmpPageNo -1;

				afreeca.front.statistics.nContentIdx = nTmpPageNo * nTmpListCnt + parseInt(nContentIdx);
			}
		}		

		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}
	,setVodMoreParam : function( szKeyWord, nFoldType ){
		// ëìì ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}

		$('input[name=szActType]').val('vod');
		$('input[name=szActCode]').val('more');
		if( typeof(nFoldType) != 'undefined')
		{
			// ê´ë ¨ VOD ëë³´ê¸°
			if(nFoldType == 1){
				if($('div#related_vod_div div.more_list a').attr('class') == 'close'){
					// ì ê¸° ìíë¥¼ ëë ë¤
					$('input[name=szActCode]').val('rvf');
				}else{
					// í¼ì¹ê¸° ìíë¥¼ ëë ë¤
					$('input[name=szActCode]').val('rvuf');
				}
			// ìµì  VOD ëë³´ê¸°
			}else if(nFoldType == 2){
				$('input[name=szActCode]').val('lv');
			}
		}		
		
		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}
	,setHashtagParam : function( szKeyWord, szActType, szActCode, szBjId, szBno, szVno, szPageNo ){

		// ëìì ê²ìì´ ë¶ë¶
		// afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}

		// $('input[name=szSearchType]').val('video');

		$('input[name=szActType]').val( szActType );

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActCode]').val( szActCode );
		$('input[name=szStype]').val('ht');

		if( typeof(szBjId) != 'undefined' && szBjId != null )
		{
			$('input[name=szBjId]').val( szBjId );
		}

		if( typeof(szBno) != 'undefined' && szBno != null )
		{
			$('input[name=szBno]').val( szBno );
		}

		if( typeof(szVno) != 'undefined' && szVno != null )
		{
			$('input[name=szVno]').val( szVno );
		}

		if( typeof(szPageNo) != 'undefined' && szPageNo != null )
		{
			$('input[name=nPageNo]').val(szPageNo);
		}

		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}
	, setPostSearchParam: function (szKeyWord, szActCode, szBjId, nTitleNo, nPageNo, nContentIdx, nContentTotalCnt) {
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨W
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}

		$('input[name=szActType]').val( 'post' );
		
		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActCode]').val(szActCode);

		if( typeof(szBjId) != 'undefined' && szBjId != null )
		{
			$('input[name=szBjId]').val( szBjId );
		}

		if( typeof(nTitleNo) != 'undefined' && nTitleNo != null )
		{
			$('input[name=nTitleNo]').val( nTitleNo );
		}

		if( typeof(nPageNo) != 'undefined' && nPageNo != null )
		{
			$('input[name=nPageNo]').val( nPageNo );
		}

		if(typeof(nContentIdx) != "undefined" && typeof(nContentTotalCnt) != "undefined"){
			var nTmpPageNo = parseInt($('input[name=nPageNo]').val());
			var nTmpListCnt = parseInt($('input[name=nListCnt]').val());

			afreeca.front.statistics.nPageContentIdx = nContentIdx;
			afreeca.front.statistics.nContentIdx = nContentIdx;
			afreeca.front.statistics.nContentTotalCnt = nContentTotalCnt;

			if(nTmpPageNo > 1 && nTmpListCnt > 0){
				afreeca.front.statistics.nContentCnt = nTmpPageNo * nTmpListCnt;
				nTmpPageNo = nTmpPageNo -1;

				afreeca.front.statistics.nContentIdx = nTmpPageNo * nTmpListCnt + parseInt(nContentIdx);
			}
		}		

		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}
	,setBjSearchParam : function( szKeyWord, szActCode, szBjId, nContentIdx, nContentTotalCnt){
		// BJ ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}

		$('input[name=szActType]').val( 'bj' );
		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szActCode]').val( szActCode );

		if( typeof(szBjId) != 'undefined' && szBjId != null )
		{
			$('input[name=szBjId]').val( szBjId );
		}

		if(typeof(nContentIdx) != "undefined" && typeof(nContentTotalCnt) != "undefined"){
			var nTmpPageNo = parseInt($('input[name=nPageNo]').val());
			var nTmpListCnt = parseInt($('input[name=nListCnt]').val());

			afreeca.front.statistics.nPageContentIdx = nContentIdx;
			afreeca.front.statistics.nContentIdx = nContentIdx;
			afreeca.front.statistics.nContentTotalCnt = nContentTotalCnt;

			if(nTmpPageNo > 1 && nTmpListCnt > 0){
				afreeca.front.statistics.nContentCnt = nTmpPageNo * nTmpListCnt;
				nTmpPageNo = nTmpPageNo -1;

				afreeca.front.statistics.nContentIdx = nTmpPageNo * nTmpListCnt + parseInt(nContentIdx);
			}						
		}		

		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}	
	,setAutoSearchParam : function( szKeyWord ){
		// ìëìì± ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szStype]').val( 'ac' );

		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}
	,setNotAutoSearchParam : function( szKeyWord ){
		// ìëìì±ì´ ìë ì¬ì©ì ê²ìì¼ ê²½ì°ì ê²ìì´ ë¶ë¶
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 

		$('input[name=szStype]').val( 'di' );

		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}	
	,setStatisticsSeachParam : function( szActType, szActCode, szBjId, szBno, szVno, szSortType, szFilterType, szStype, szMlsearchType ){
		// ê²ìíì´ì§ íµê³ê´ë ¨ ë°ì´í° ì¤ì 
		$('input[name=szActType]').val( szActType );
		$('input[name=szActCode]').val( szActCode );
		$('input[name=szBjId]').val( szBjId );
		$('input[name=szBno]').val( szBno );
		$('input[name=szVno]').val( szVno );
		$('input[name=szMlsearchType]').val(szMlsearchType);
		//$('input[name=szSortType]').val( szSortType );
		//$('input[name=szFilterType]').val( szFilterType );
		//$('input[name=szStype]').val( szStype );
		afreeca.front.statistics.nContentIdx = 0;
		afreeca.front.statistics.nContentCnt = 0;
		afreeca.front.statistics.nContentTotalCnt = 0;
	}
	
	,callSearchStatistics : function( szKeyWord ) {
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}
		var szActype = $('input[name=szActype]').val();
		var szActType = $('input[name=szActType]').val();
		var szActCode = $('input[name=szActCode]').val();
		var szBjId = $('input[name=szBjId]').val();
		var szBno = $('input[name=szBno]').val();
		var szVno = $('input[name=szVno]').val();
		var szPlaylistIdx = $('input[name=szPlaylistIdx]').val();
		var szSortType = $('input[name=szSortType]').val();
		var szFilterType = $('input[name=szFilterType]').val();
		var szStype = $('input[name=szStype]').val();
		var nPageNo = $('input[name=nPageNo]').val();
		var nTitleNo = $('input[name=nTitleNo]').val();
		var szMlsearchType = $('input[name=szMlsearchType]').val();

		var nAge = $('input[name=nAge]').val();
		var szSex = $('input[name=szSex]').val();

		// íµê³ API
		var szUrl = SEARCH_SCKETC_80+'/api.php';
		var szType = 'actionLog';
		var szVersion = '1.0';
		var szLocation = 'total_search';

		var szContentsType ='';
		var szContentsValue ='';
		var szTabType = '';
		// íµí©ê²ì í­ì ì ì¸íê³ ë í´ë¹ input ê°ì¼ë¡ ì¤ì ë ë¸ì¶ê°ì íì ê°ë¥
		var nListCnt = parseInt($('input[name=nListCnt]').val());
		var nListTotalCnt = afreeca.front.statistics.nContentTotalCnt;
		var szSearchType = $('input[name=szSearchType]').val();
		var szVideoFileType = '';
		var szLiveLink = 'live';
		var szVodLink = 'vod';
		var szStationLink = 'bj';
		var szPostLink = 'post';
		var nAge = $('input[name=nAge]').val();
		var szSex = $('input[name=szSex]').val();

		var szMoreType = '';

		if(nPageNo == ''){
			nPageNo = 1;
		}

		if(szSearchType == 'total'){
			// íµí© ê²ì í­ì ë¬´ì¡°ê±´ íì´ì§1ì´ê¸° ëë¬¸ì ì´ë ê² ì²ë¦¬ë¨
			nPageNo = 1;
			// íµí©ê²ì ì¼ë ì»¨íì¸  ì íì
			var nTabDisplayContentCnt = 1;
			switch(szActType){
				case 'live':
					nTabDisplayContentCnt = $("#broad_list.result_list ul.onair_list").length;
					break;
				case 'vod':
					// íµí©ê²ìììë íì¼íì íí°ë§ì í ì ìì¼ë¯ë¡ ì ì²´ íì ì¸í
					szVideoFileType = 'ALL';
					// íµí© ê²ì íì´ì§ ë´ììë VODë¥¼ ì ì¸í ì»¨íì¸ ë ê¸°ë³¸ ìµë ìì²­ê°ìê° 5ê°
					nListCnt = 4;
					switch(afreeca.front.statistics.section_name){
						// ìµì  VOD
						case 'latest_vod':
							// ì´ê±°ë íì´ì§ ëë²ë§ì ëí ê°ëì´ ë¤ë¦ ì¼ìª½, ì¤ë¥¸ìª½ ì¬ë¼ì´ë ë²í¼ ëë¥´ë©´ì ëì ë¨
							nTabDisplayContentCnt = $("#divLatestVodList.result_list ul#vodList li").length;
							break;
						case 'review_vod':
							nListCnt = 2;
							nTabDisplayContentCnt = $("#review_div ul#review_list li").length;
							break;
						case 'normal_vod':
							nTabDisplayContentCnt = $("#normal_div ul#normal_list li").length;
							break;
						case 'clip_vod':
							nTabDisplayContentCnt = $("#clip_div ul#clip_list li").length;
							break;
						case 'catch_vod':
							nTabDisplayContentCnt = $("#catch_div ul#catch_list li").length;
							break;
						// ê´ë ¨ VOD
						case 'related_vod':
							nTabDisplayContentCnt = $("#related_vod_div ul#related_vod_list li").length;
							nListCnt = $("#related_vod_div ul#related_vod_list li").length;
							break;							
					}
					break;
				case 'vod_playlist':
					nTabDisplayContentCnt = $("#playlist_div ul#playlist_list li").length;					
					break;
				case 'bj':
					nTabDisplayContentCnt = $("#bj_list.result_bj ul.bj_list ").length;
					break;
				case 'post':
					nTabDisplayContentCnt = $("#posts_list.result_post div.post_list").length;
					break;
			}

			afreeca.front.statistics.nContentCnt = nTabDisplayContentCnt;
			afreeca.front.statistics.nContentTotalCnt = nTabDisplayContentCnt;
		// íµí© ê²ì í­ì´ ìë ê²½ì°
		}else{
			afreeca.front.statistics.section_name = '';
			if(nListCnt && nPageNo !='' && nPageNo >= 1 && nListTotalCnt > 0){
				// í í íì´ì§ìë¥¼ ê³ì°
        		var nTotalPage = Math.ceil( nListTotalCnt /  nListCnt);
				var nPrevPageNo = nPageNo - 1;
				var nPageContentIdx = afreeca.front.statistics.nPageContentIdx;

				// 1íì´ì§ê° ì ë¶ì¸ ê²½ì°
				if(nPageNo == 1 && nPageNo == nTotalPage){
					afreeca.front.statistics.nContentCnt = afreeca.front.statistics.nContentTotalCnt;
				// íì¬ ë³´ê³  ìë íì´ì§ê° ë§ì§ë§ íì´ì§
				}else if(nPageNo == nTotalPage){
					var nTabDisplayContentCnt = 1;

					switch(szSearchType){
						case 'broad':
							nTabDisplayContentCnt = $("#broad_list.result_list ul.onair_list").length;
							break;
						case 'video':
							nTabDisplayContentCnt = $("#detailVideoPageList.search_list > li").length;
							break;
						case 'bj':
							nTabDisplayContentCnt = $("#bj_list.result_bj ul.bj_list ").length;
							break;
						case 'post':
							nTabDisplayContentCnt = $("#posts_list.result_post div.post_list").length;
							break;
					}
					// ë§ì§ë§ìë íì¬ ì»¨íì¸ ë³ ë¸ì¶ëê³  ìëê±° ê°ìë¥¼ ì§ì  lengthë¡ íìí´ì¼ë¨
					afreeca.front.statistics.nContentCnt = nPrevPageNo * nListCnt + nTabDisplayContentCnt;
				}else{
					afreeca.front.statistics.nContentCnt = nPageNo * nListCnt;
				}
			}
		}
		// DEFAULT ì¸í
		switch (szSearchType)
		{
			case 'broad':
				szTabType = 'LIVE';
				szContentsType = szLiveLink;
				szContentsValue = szBno;
				if(szActCode == 'bjn'){
					szContentsType = szStationLink;
					szContentsValue = szBjId;
				}
				break;
			case 'video':
				szTabType = 'VOD';
				// VODí­ì íì¼íì íí°ë§ ê° ì¶ì¶
				szVideoFileType = $('input[name="szVideoFileType"]').val();
				szContentsType = szVodLink;
				szContentsValue = szVno;
				if(szActCode == 'bjn'){
					szContentsType = szStationLink;
					szContentsValue = szBjId;
				}				
				break;
			case 'bj':
				szTabType = 'BJ';
				szContentsType = szStationLink;
				szContentsValue = szBjId;
				break;
			case 'post':
				szTabType = 'POST';
				szContentsType = szStationLink;
				szContentsValue = szBjId;
				if(szActCode == 'sn' || szActCode == 'tt'){
					szContentsType = szPostLink;
					szContentsValue = nTitleNo; // ê²ìê¸ì ë²í¸
				}
				break;
			// íµí© ê²ì í­
			default:
				szTabType = 'TOTAL';
				
				switch(szActType){
					case 'direct':
						szContentsType = szLiveLink;
						szContentsValue = szBno;											
						break;
					// bj profile
					case 'bjp':
						szContentsType = szLiveLink;
						szContentsValue = szBno;
						if(szActCode == 'nt'){
							szContentsType = szPostLink;
							szContentsValue = nTitleNo; // ê²ìê¸ì ë²í¸
						}else if(szActCode == 'nick' || szActCode == 'rbj'){
							szContentsType = szStationLink;
							szContentsValue = szBjId;
						}else if(szActCode == 'sn' || szActCode == 'tt'){
							szContentsType = szVodLink;
							szContentsValue = szVno;
						}else if(szActCode == 'fav'){
							szContentsType = '';
							szContentsValue = '';
						}else if(szActCode == 'fb'){
							szContentsType = szStationLink;
							szContentsValue = szBjId;
						}
						break;
					case 'vod':
						szContentsType = szVodLink;
						szContentsValue = szVno;
						if(szActCode == 'bjn'){
							szContentsType = szStationLink;
							szContentsValue = szBjId;
						}						
						break;
					case 'vod_playlist':
						szContentsType = szVodLink;
						szContentsValue = szVno;
						if(szActCode == 'bjn'){
							szContentsType = szStationLink;
							szContentsValue = szBjId;
						}						
						break;						
					case 'live':
						szContentsType = szLiveLink;
						szContentsValue = szBno;
						if(szActCode == 'bjn'){
							szContentsType = szStationLink;
							szContentsValue = szBjId;
						}						
						break;
					case 'bj':
						szContentsType = szStationLink;
						szContentsValue = szBjId;
						break;
					case 'post':
						szContentsType = szStationLink;
						szContentsValue = szBjId;
						if(szActCode == 'sn' || szActCode == 'tt'){
							szContentsType = szPostLink;
							szContentsValue = nTitleNo; // ê²ìê¸ì ë²í¸
						}
						break;
					// ì¬ë¬ ì»¨íì¸ ê° ìì¬ ìì
					case 'recommend':
						
						if(szVno){
							szContentsType = szVodLink;
							szContentsValue = szVno;							
						}else if(szBno){
							szContentsType = szLiveLink;
							szContentsValue = szBno;							
						}else if(szBjId){
							szContentsType = szStationLink;
							szContentsValue = szBjId;
						}

						if(szActCode == 'sti' || szActCode == 'nick'){
							szContentsType = szStationLink;
							szContentsValue = szBjId;
						}

						// ëë¤ì ëë ìë
						break;
						
				}
				break;
		}

		if(szActCode == 'more' && afreeca.front.statistics.more_type){
			szMoreType = afreeca.front.statistics.more_type;
		}

		// ëë³´ê¸° ë²í¼ ì¡ì ê²½ì°
		if(szActCode == 'more' || szActCode == 'rvuf' || szActCode == 'rvf' || szActCode == 'lv'){
			nPageNo = '';
			afreeca.front.statistics.nContentIdx = 0;
			afreeca.front.statistics.nContentCnt = 0;
			afreeca.front.statistics.nContentTotalCnt = 0;
			szContentsType = '';
			afreeca.front.statistics.section_name = '';


		}		

		/*
			<< szActType : acttype >>
			bjp : BJíë¡íê²ì,  tsk: íë§ê²ì,   live: ìë°©ì¡,   vod: ëìì,   bj: BJê²ì
		*/
		/*
			<< szActCode : actcode >>
			[BJ íë¡í]
			fav : ì¦ê²¨ì°¾ê¸°,  nick : ëë¤ì,  live : LIVE,  crr : ê²½ë ¥,  cmm : ì»¤ë®¤ëí°,
			nt : ê³µì§ì¬í­,  prz : ììë©ë¬,  rbj : ì°ê´BJ,  qna : 10ë¬¸10ëµ,
			tt: íì´í, sn: ì¸ë¤ì¼

			[íë§ê²ì]
			tt:íì´í, inf : ë¶ê°ì ë³´

			[ìë°©ì¡]
			sn : ì¸ë¤ì¼,  tt : íì´í, bjn : BJëª

			[ëìì]
			sm : ì¸ë¤ì¼,  tt : íì´í, bjn : BJëª

			[BJ]
			sti : ë°©ì¡êµ­ëíì´ë¯¸ì§,  st : ë°©ì¡êµ­,  stn : ë°©ì¡êµ­ëª

			[ì§ì ìë ¥]   : di
			[ì¶ì²ê²ìì´] : rc
			[ìëìì±]   : ac
			[ì°ê´ê²ìì´] : rt
			[ì°ê´ ê²ì BJ ë¦¬ì¤í¸] : rb
			[ì¤ìê° ê²ìì´] : rk
		*/
		/*
			<< szBjId : bid >> : ì¡°ê±´íì
			1. acttype : bjp, actcode : live
			2. acttype : bjp, actcode : rbj
			3. acttype : vod, actcode : sm / tt / bjn
			4. acttype : bj (ì ì²´), actcode : sti / st / stn
			5. acttype : tsk, actcode: fb

			<< szBno : bno >> : ì¡°ê±´íì
			1. acttype : bjp, actcode : live
			2. acttype : live (ì ì²´), actcode : sn / tt / bjn

			<< szVno : vno >> : ì¡°ê±´íì
			1. acttype : vod (ì ì²´), actcode : sn / tt / bj
		*/
		/*
			<< szSortType : st >> : íì
			bjrank  : BJë­í¹ì,   view_count : ìì²­ì¸ìì or ëì ìì²­ìì,   latest : ìµì ì
			broad_bps : ê³ íì§ì,   broad_resolution : ê³ í´ìëì,   score : ì íëì,  broad_time : ë°©ì¡ìê°ì
		*/
		/*
			<< szFilterType : ft >> : íì
			all : ì ì²´ê¸°ê° íí°ë§
			1day : ìµê·¼ 1ì¼ íí°ë§
			1week : ìµê·¼1ì£¼ íí°ë§
			1month : ìµê·¼ 1ë¬ íí°ë§
			di : ì§ì ìë ¥ íí°ë§
		*/
		/*
			<< szStype : stype >> : íì
			di : ì§ì ìë ¥
			rc : ì¶ì² ê²ìì´
			ac : ìëìì±
			rt : ì°ê´ê²ìì´
		*/
		var ft = szFilterType;
		if(szVideoFileType !== ""){
			ft = szFilterType+'|'+szVideoFileType
		}
		var params = {
			m		: szType,
			v		: szVersion,
			d		: encodeURIComponent(szKeyWord),
			t		: 'json',
			c		: 'EUC-KR',
			w		: 'webk',
			location: szLocation,
			acttype : szActType,
			actcode : szActCode,
			bjid	: szBjId,
			bno 	: szBno,
			vno		: szVno,
			st		: szSortType,
			ft		: ft,
			stype	: szStype,
			page	: nPageNo,
			tno 	: nTitleNo,
			ac_type : szActype,
			//pageContentsIdx : afreeca.front.statistics.nPageContentIdx,
            // contentsIdx : afreeca.front.statistics.nContentIdx,
			// contentsCnt : afreeca.front.statistics.nContentCnt,
			// contentsTotalCnt : afreeca.front.statistics.nContentTotalCnt,
			contents_type : szContentsType,
			contents_value : szContentsValue,
			sck_session_key : afreeca.front.statistics.szSessionKey,
			tab: szTabType,
			nListCnt : nListCnt,
			section_name : afreeca.front.statistics.section_name,
			szFileType : szVideoFileType,
			list_idx : afreeca.front.statistics.nContentIdx
		};

		if (szPlaylistIdx != '') {
			params.playlist_idx = szPlaylistIdx;
		}

		if (szMlsearchType != '') {
			params.mlsearch_type = szMlsearchType;
		}

		if(afreeca.front.statistics.section_name == 'latest_contents'){
			params.file_type = afreeca.front.statistics.logFileType;
			params.is_hot = afreeca.front.statistics.szIsHot;
		}

		if(params.acttype == 'bjp' && szActCode == 'fav'){
			params.sub_location = 'bjp ';
		}

		if (nAge != '') {
			params.nAge = nAge;
		}

		if (szSex != '') {
			params.szSex = szSex;
		}

		if(params.acttype == 'recommend'){
			params.is_profile = 'false';
			if($("#profile_on").css("display") !== 'none'){
				params.is_profile = 'true';
			}
		}

		if(szMoreType != ''){
			params.more_type = szMoreType;
			if(szMoreType == 'profile'){
				// íì¬ ì´ë ¤ ìë ìíë¼ë©´
				if($(".proflie_more button").hasClass('open')){
					params.is_fold = 'false';
				}else{
					params.is_fold = 'true';
				}

			}
		}

		try
		{
			$.ajax({
				type		: 'GET',
				dataType	: 'jsonp',
				//jsonp		: 'callback',
				url			: szUrl,
				cache		: false,
				//async		: false,
				data		: params,
				success	: function(oData,status){
				},
				error : function(jqXHR, status, errorThrow){
				}
			});
		}
		catch(e)
		{
		}

		afreeca.front.statistics.section_name = '';
	}
	,setPlayerSearchParam : function( szKeyWord, szActType, szActCode, szBjId, szBno, szVno, szSortType, szFilterType, szStype ){
		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}

		var szUserId = '';
		if( typeof(Read_Cookie) == 'function' && Read_Cookie('PdboxUser') != '' )
		{
			var aUserInfo = Read_Cookie('PdboxUser').split('&');
			var aUserId = aUserInfo[0].split('=');
			if( aUserId.length > 1 )
			{
				szUserId = aUserId[1];
			}
		}

		if( typeof(szActType) == 'undefined' )
		{
			szActType = '';	// íµí¨ê²ì : ë¹ê°, ìë°©ì¡ : live,   ëìì : vod
		}
		if( typeof(szActCode) == 'undefined' )
		{
			szActCode = '';
		}
		if( typeof(szBjId) == 'undefined' )
		{
			szBjId = '';
		}
		if( typeof(szBno) == 'undefined' )
		{
			szBno = '';
		}
		if( typeof(szVno) == 'undefined' )
		{
			szVno = '';
		}
		if( typeof(szSortType) == 'undefined' )
		{
			szSortType = '';
		}

		switch( szActType )
		{
			case 'live' :
				// szOrderCol
				if( szSortType == 'orderByRankAsc' )
				{
					szSortType = 'bjrank';				// BJë­í¹ì
				}
				else if( szSortType == 'orderByCurrentViewCntDesc' )
				{
					szSortType = 'view_count';			// ìì²­ì¸ìì
				}
				else if( szSortType == 'orderByBroadNoDesc' )
				{
					szSortType = 'latest';				// ìµì ì
				}
				else if( szSortType == 'orderByBpsDesc' )
				{
					szSortType = 'broad_bps';			// ê³ íì§ì
				}
				else if( szSortType == 'orderByResolutionDesc' )
				{
					szSortType = 'broad_resolution';	// ê³ í´ìëì
				}
				else if( szSortType == 'orderByAccur' )
				{
					szSortType = 'score';	// ì íëì
				}
				else
				{
					szSortType = 'score';				// default : ì íëì ì¤ì 
				}

				// szBroadKind
				if( szFilterType == 'real' )
				{
					szFilterType = 'base';		// ë³¸ë°©ì¡
				}
				else if( szFilterType == 'scrap' )
				{
					szFilterType = 'relay';	// ì¤ê³ë°©ì¡
				}
				else
				{
					szFilterType = 'all';			// default : all  ëª¨ë(ì ì²´)ì¼ë¡ ì¤ì 
				}
				break;
			case 'vod' :
				// szOrderUcc
				if( szSortType == 'orderByRegDesc' )
				{
					szSortType = 'latest';			// ìµì ì
				}
				else if( szSortType == 'accur' )
				{
					szSortType = 'score';			// ì íëì
				}
				else if( szSortType == 'orderByViewDesc' )
				{
					szSortType = 'view_count';		// ìì²­ì¸ìì
				}
				else
				{
					szSortType = 'latest';			// default : ìµì ìì¼ë¡ ì¤ì 
				}
				// szUccFileType
				if( szFilterType == 'REVIEW' )
				{
					szFilterType = 'review';		// ë°©ì¡ë¤ìë³´ê¸°
				}
				else if( szFilterType == 'HIGHLIGHT' )
				{
					szFilterType = 'highlight';	// íì´ë¼ì´í¸
				}
				else if( szFilterType == 'NORMAL' )
				{
					szFilterType = 'normal';		// ì¼ë°ëìì
				}
				else if( szFilterType == 'CLIP' )
				{
					szFilterType = 'clip';		// ì¼ë°ëìì
				}
				else if( szFilterType == 'CATCH' )
				{
					szFilterType = 'catch';		// ì¼ë°ëìì
				}
				else
				{
					szFilterType = 'all';	// default :  ëª¨ë(ì ì²´)ì¼ë¡ ì¤ì 
				}
				break;
		}
		if( typeof(szStype) == 'undefined' )
		{
			szStype = 'di';
		}

		// íµê³ API
		var szUrl = SEARCH_SCKETC_80+'/api.php';
		var szType = 'actionLog';
		var szVersion = '1.0';
		var szLocation = 'total_search';

		$.ajax({
			type		: 'GET',
			dataType	: 'jsonp',
			//jsonp		: 'callback',
			url			: szUrl,
			cache		: false,
			//async		: false,
			data		: {
				m		: szType,
				v		: szVersion,
				d		: encodeURIComponent(szKeyWord),
				t		: 'json',
				c		: 'EUC-KR',
				w		: 'atv1',
				uid		: szUserId,
				location: szLocation,
				acttype : szActType,	// live vod
				actcode : szActCode,
				bjid	: szBjId,
				bno 	: szBno,
				vno		: szVno,
				st		: szSortType,
				ft		: szFilterType,
				stype	: szStype
			},
			success	: function(oData,status){
			},
			error : function(jqXHR, status, errorThrow){
			}
		});
	}
	,setAdBanerSearchParam : function( szKeyWord ){
		// ê´ê³  ë¸ì¶ ê´ë ¨ ì ê· ë¡ê·¸
		afreeca.front.statistics.setStatisticsSeachParam(); // ì´ê¸°í

		// í¤ìëê° ìì¼ë©´ íµê³ API í¸ì¶ ìí¨
		if( jQuery.trim(szKeyWord) == '' )
		{
			return;
		}

		afreeca.front.statistics.setCommonSearchParam();	// ê³µì© ë°ì´í° ì¤ì 


		var nAge = '';
		var szSex = '';
		if( typeof(Read_Cookie) == 'function' && Read_Cookie('PdboxUser') != '' )
		{
			var aUserInfo = Read_Cookie('PdboxUser').split('&');
			var aUserSex = aUserInfo[3].split('=');
			if( aUserSex.length > 1 )
			{
				szSex = aUserSex[1];
			}
			var aUserAge = aUserInfo[2].split('=');
			if( aUserAge.length > 1 )
			{
				nAge = aUserAge[1];
			}
		}

		$('input[name=szActType]').val( 'ad' );
		$('input[name=szActCode]').val( 'bn' );
		$('input[name=nAge]').val( nAge );
		$('input[name=szSex]').val( szSex );
		
		afreeca.front.statistics.callSearchStatistics( szKeyWord );	// íµê³ API í¸ì¶
		return true;
	}
}