// 스크롤
	let webzineHeader = document.querySelector('.webzin-header'),
		headerTop = document.querySelector('.header-top'),
		headerDepth = document.querySelector('.header-depth');
		invenlogo = webzineHeader.classList.contains('invenlogo');

	window.addEventListener('scroll', () => {
		let webzineBody = document.querySelector('#webzineBody');
		// 인벤 기본
		if (window.scrollY > 162){
			webzineHeader.classList.add('act');
			webzineBody.classList.add('act');
			if (headerDepth) {
				webzineBody.classList.add('depth');
			}
		}
		else {
			webzineHeader.classList.remove('act');
			webzineBody.classList.remove('act');
		}
		
		// 인벤 로고 추가 버전
		if (invenlogo && window.scrollY > 162) {
			webzineHeader.classList.remove('ad');
		} else if (invenlogo && window.scrollY <= 162) {
			webzineHeader.classList.add('ad');
		}
	});

	/*통합검색 변경후*/
	$(".common-header .header-top .search input[name='sw']").keydown(function(key){
		if(key.keyCode == 13){	//엔터실행
			isearch_community();
			return false;
		}
	});

	$('.common-header .header-top .search .search-btn-submit').click(function(e){
		e.preventDefault();
		isearch_community();
	});

	// 검색
	function isearch_community(){
		var url = 'https://www.inven.co.kr/search/webzine/top/';
		var isearchword =  $.trim($(".common-header .header-top .search input[name='sw']").val());
		if(isearchword == "") isearchword =  '베일드 엑스퍼트';
		
		isearchword = isearchword.replace(/\\/g, "");
		isearchword = isearchword.replace(/\"/g, "");
		isearchword = isearchword.replace(/\'/g, "");
		isearchword = isearchword.replace(/\`/g, "");
		setTimeout(() => document.location.href= (isearchword) ? url + encodeURIComponent(isearchword).replace(/%20/g, "+") : url, 0);
		return false;
	}