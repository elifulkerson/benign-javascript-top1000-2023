$(document).ready(function(){

	/* 헤더 축소형 */
	var headerOffset = $( '#nav_cont , .article_title, #reporter, #reporter02 , .search_top , .result_top' ).offset(); /* 20230118 추가 */
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > headerOffset.top ) {
			$( '#header' ).addClass( 'fixed' );
			$( '#all_menu' ).addClass( 'fixed' );
                        //230728 수정
			if($('#above_cmcl_box').length == 1  && parseInt($('#above_cmcl_box').height()) > 0){
				$( '#container' ).css('margin-top' , '90px' );
			}else{
				$( '#container' ).css('margin-top' , '174px' );
			}
                        $( '.search_wrap #container' ).css('margin-top' , '50px' ); /* 20230118 추가 */
			$('#sub_header').addClass('fix');
		}
		else {
			$( '#header' ).removeClass( 'fixed' );
			$( '#all_menu' ).removeClass( 'fixed' );
			$( '#container' ).css('margin-top' , '0' );
			$('#sub_header').removeClass('fix');
		}

                /* 회원가입 , 구독유도 */
		$( '#join_msg01 .msg_cont' ).addClass( 'layer_in_bottom' );
		$( '#subscribe_msg01 .msg_cont' ).addClass( 'layer_in_bottom' );
	});

	/* 전체메뉴 */
	$('.nav_icon .btn_allmenu').on('click', function () {
		$('.nav_icon .btn_allmenu').toggleClass('btn_close');
		$('#all_menu').toggle();
		$('#search_cont').hide();
		$('#latest_cont').hide();
		$('#language_cont').hide();
		$('#media_cont').hide();
                $('#login_cont').hide();

		if ($("#all_menu").css("display") == "block" )
		{
			try{
				let eventObj = {};
				eventObj = { 
					event_name : 'click_event',
					ep_button_name : '햄버거 메뉴',
					ep_button_area : '헤더',
					ep_button_category : '공통'
				}
				gabuilder.GAEventOBJ(eventObj) ;
			}catch(e){
				console.error("GA_click_event");
			}            
		}
		return false;
	});

	/* 팝업 - 헤더 - 공유하기 */
	$('#sub_header .btn_share').on('click', function () {
		$('#sub_header .share_layer').show();
		$('.nav_icon .btn_allmenu').removeClass('btn_close');
		$('#all_menu').hide();
		return false;
	});
	$('#sub_header .share_layer .btn_close').on('click', function () {
		$('#sub_header .share_layer').hide();
	});
	$(document).mouseup(function (e){
		var LayerPopup = $("#view .share_layer");
		if(LayerPopup.has(e.target).length === 0){
			LayerPopup.css('display','none');
			$('#view .recommend_cont .btn_share').removeClass('on');
		}
	});

	/* 팝업 - 기사뷰 - 공유하기 */
	$('#view .recommend_cont .btn_share').on('click', function () {
		$('#view .recommend_cont .share_layer').show();
	});
	$('#view .recommend_cont .share_layer .btn_close').on('click', function () {
		$('#view .recommend_cont .share_layer').hide();
		$('#view .recommend_cont .btn_share').removeClass('on');
	});

	/* 팝업 - 기사뷰 - 글자크기설정 */
	$('#view .article_title .font_set').on('click', function () {
		$('#view .article_title .font_layer').show();
	});
	$('#view .article_title .font_layer .btn_close').on('click', function () {
		$('#view .article_title .font_layer').hide();
	});
	$('#view #fontLayer').on('click', 'button', function() {
		$('#view #fontLayer button').removeClass('on');
		$(this).addClass('on');
	});
	$('#view #fontLayer').on('mouseenter', 'button', function() {
		$('#view #fontLayer button').removeClass('hover');
		$(this).addClass('hover');
		$('#view #fontLayer').on('mouseout', 'button', function() {
			$('#view #fontLayer button').removeClass('hover');
		});
	});

	/* 팝업 - 기사뷰 - 댓글 */
	window.replyPopupObj = Popup( $( '#replyLayerPopup' ), {
		vertical: 'top',     /* top, bottom, center */
		horizontal: 'right',  /* left, right, center */
		//effect: 'blind',  /* clip slide blind */
		//direction: 'right',   /* up, down, left, right */
		duration: 0.1
	});

	/* 기사뷰 - 읽기모드 */
	$('#view .sub_header_con .read').on('click', function () {
		if ($(this).hasClass('on')==true)
		{
			$(this).removeClass('on');
			$('body').removeClass('view_read');
		}
		else {
			$(this).addClass('on');
			$('body').addClass('view_read');
		}
	});

	/* 기사뷰 - 본문 - 포토 슬라이드 */
	$(window).resize();
	window.photoPopupObj = Popup( $( '#photoview_layerpop' ), {
		vertical: 'center',  /* top, bottom, center */
		horizontal: 'center',  /* left, right, center */
		//effect: 'slide',  /* clip slide blind */
		//direction: 'left',   /* up, down, left, right */
		duration: 300
		//scroll: true
	});
	$('#view .articlePhoto_slide .btn_large').on('click', function () {
		if ($('#photoview_layerpop').css('display') == 'block')
		{
			$('#fullScreenPopupLayer').addClass('on');
			$('#fullScreenPopupLayer').on('click', function () {
				$('#fullScreenPopupLayer').removeClass('on');
			});
			$('#photoview_layerpop .btn_close').on('click', function () {
				$('#fullScreenPopupLayer').removeClass('on');
			});
		}
	});

	/* 기사뷰 - 좋아요, 슬퍼요, 화나요, 후속기사원해요, 추천 */
	 $('#view .recommend_cont .list_wrap .img').hover(
         function () {
            $(this).addClass('hover');
         },
         function () {
            $(this).removeClass('hover');
         }
      );
	$('#view .recommend_cont').on('click', '.feel_list li', function() {
		$('#view .recommend_cont .feel_list li').removeClass('on');
		$(this).addClass('on');
	});
	$('#view .recommend_cont').on('click', '.feel_list li.on', function() {
		$(this).removeClass('on');
	});
	$('#view .recommend_cont .btn_recommend').on('click', function () {
		$('#view .recommend_cont .btn_recommend').toggleClass('on');
	});
	$('#view .recommend_cont .btn_share').on('click', function () {
		$('#view .recommend_cont .btn_share').addClass('on');
	});
	$('#view .recommend_cont02 .list_wrap li').hover(
         function () {
            $(this).children('.img').addClass('hover');
			$(this).children('.txt').addClass('hover');
			$(this).children('.counter').addClass('hover');
         },
         function () {
            $(this).children('.img').removeClass('hover');
			$(this).children('.txt').removeClass('hover');
			$(this).children('.counter').removeClass('hover');
         }
      );
	  $('#view .recommend_cont02 .list_wrap > div > div').hover(
         function () {
            $(this).children('.img').addClass('hover');
			$(this).children('.txt').addClass('hover');
			$(this).children('.counter').addClass('hover');
         },
         function () {
            $(this).children('.img').removeClass('hover');
			$(this).children('.txt').removeClass('hover');
			$(this).children('.counter').removeClass('hover');
         }
      );

	/* 기사뷰 - 관련기사 */
	$('#view .article_relation .btn_box').on('click', function () {
		$('#view .article_relation').toggleClass('more');
	});

	/* 다국어 */
	$('#language_site .txt').on('click', function () {
		$('#language_cont').show().addClass('show');
		$('#media_cont').hide();
		$('#login_cont').hide();
		$('#all_menu').hide();
		$('#search_cont').hide();
		$('#latest_cont').hide();
		$('.nav_icon .btn_allmenu').removeClass('btn_close');
		return false;
	});
	$('#language_cont').on('click', function () {
		$(this).hide().removeClass('show');
	});


	/* 미디어그룹 */
	$('#media_group .txt').on('click', function () {
		$('#media_cont').show().addClass('show');
		$('#language_cont').hide();
		$('#login_cont').hide();
		$('#all_menu').hide();
		$('#search_cont').hide();
		$('#latest_cont').hide();
		$('.nav_icon .btn_allmenu').removeClass('btn_close');
		return false;
	});
	$('#media_cont').on('click', function () {
		$(this).hide().removeClass('show');
	});

	/* 로그인 */
	$('#login_group .logout').on('click', function () {
		$('#login_group.group02').toggle().toggleClass('on').css('display','block'); //20230125 추가
		$('#login_cont').toggle().toggleClass('show');
		$('#language_cont').hide();
		$('#media_cont').hide();
		$('#all_menu').hide();
		$('#search_cont').hide();
		$('#latest_cont').hide();
		$('.nav_icon .btn_allmenu').removeClass('btn_close');

		if ($("#login_cont").css("display") == "block" )
		{
			try{
				let eventObj = {};
				eventObj = { 
					event_name : 'click_event',
					ep_button_name : '마이페이지',
					ep_button_area : '헤더',
					ep_button_category : '공통'
				}
				gabuilder.GAEventOBJ(eventObj) ;
			}catch(e){
				console.error("GA_click_event");
			}            
		}
		return false;
	});
	$('#login_cont').on('click', function () {
		$(this).hide().removeClass('show');
	});

	/* 검색 */
	$('#nav_icon .btn_search').on('click', function () {
		$('#search_cont').show();
		$('#latest_cont').show().addClass('show');
		$('#all_menu').hide();
		$('#language_cont').hide();
		$('#media_cont').hide();
		$('#login_cont').hide();
		$('.nav_icon .btn_allmenu').removeClass('btn_close');
		return false;
	});
	$('#fun_cont .close').on('click', function () {
		$('#latest_cont').hide();
		$('#search_cont').hide();
		return false;
	});
        $('#search_cont').on('click', function () {
		$('#latest_cont').show();
		return false;
	});

	/* 외부영역 클릭 시 레이어 사라짐 */
	 $(document).click(function(e){
 		if(e.target.className =="show"){return false} 
 		$(".show").stop().hide().removeClass('show');
		$('#login_group.group02').removeClass('on'); //20230125 추가
	});

	$('body').click(function(e){
		if( !$('#search_cont').has(e.target).length )
			$('#search_cont').hide();
			//$('#latest_cont').hide();

                /* 20221213 추가 */
		var LayerPopup07 = $("#dongawrap #all_menu");
		if(LayerPopup07.has(e.target).length === 0){
			LayerPopup07.css('display','none');
			$('#nav_icon .btn_allmenu').removeClass('btn_close');
		}
	});

	/* 요일별 연재 */
	var tab_m = $('#week_tab');
	var tab_sel = tab_m.find('li >a');
	tab_sel.on('click', function(e){
		e.preventDefault();
		var t = $(this).parent();
		var path = $(this).attr('href');
		tab_sel.parent().removeClass('on');
		t.addClass('on');
		$('#week_wrap .card_list').not(path).removeClass('on');
		$(path).addClass('on');
	});

	/* 추천영상 */
	$('#recommend_wrap .card_list').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToScroll: 4,
		slidesToShow: 4,
		variableWidth: false,
		prevArrow: $('.btn_move .btn_prev'),
		nextArrow: $('.btn_move .btn_next'),
		touchMove: false
	});

	/* 탑기사 타입 1 */
	$('#headline_type1 .thumb_img').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false
	});

	/* 탑기사 타입 2 */
	$('#headline_type2 .thumb_img').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false
	});

	/* 탑기사 타입 3 */
        $('#headline_type3 div.thumb_img').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false
	});
	$('#headline_type3 .list_cont').slick({
		dots: false,
		infinite: false,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll:4,
		arrows: true,
		variableWidth: false,
		touchMove: false
	});
        $('#headline_type3 .list_cont03').slick({
		dots: false,
		infinite: false,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll:3,
		arrows: true,
		variableWidth: false,
		touchMove: false
	});

       /* 탑기사 타입 4 */
       $('#headline_type4 div.thumb_img').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false
	});

	/* 특집페이지 타입1 리스트 */
	$('#special_type01 .list_cont').slick({
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll:4,
		prevArrow: $('#special_type01 .btn_prev'),
		nextArrow: $('#special_type01 .btn_next'),
		variableWidth: false,
		touchMove: false
	});

	/* 특집페이지 타입2 큰 이미지 */
	$('#special_thumb').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false,
		fade: true,
		cssEase: 'linear'
	});

	/* 특집페이지 타입2 리스트 */
	$('#special_type02 .list_cont').slick({
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll:4,
		prevArrow: $('#special_type02 .btn_prev'),
		nextArrow: $('#special_type02 .btn_next'),
		variableWidth: false,
		touchMove: false
	});

	/* 이슈 */
	var slideCount = $('.slideCount');
	var slickSlide = $('#issue_list');

	slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('#issue_cont').find('.slideCount').html('<span class="slideCountItem">' + i + '</span> ' + '/' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
	});
	$('#issue_list').slick({
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.move .btn_prev'),
		nextArrow: $('.move .btn_next'),
		touchMove: false
	});

        // 주말의 발견
	var weekendCount = $('.weekendCount');
	var weekendSlide = $('#weekend_list');

	weekendSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.weekend_cont').find('.weekendCount').html('<span class="slideCountItem">' + i + '</span> ' + '/' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
	});
	$('#weekend_list').slick({
		infinite: true,
		autoplay: false,
		autoplaySpeed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.weekend_ctrl .move .btn_prev'),
		nextArrow: $('.weekend_ctrl .move .btn_next'),
		touchMove: false
	});

	/* 동아배너 */
	$('#bann_box').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false
	});

	/* 트랜드뉴스 */
	var tab_m01 = $('#trend_tab');
	var tab_sel01 = tab_m01.find('li >a');
	tab_sel01.on('click', function(e){
		e.preventDefault();
		var t = $(this).parent();
		var path = $(this).attr('href');
		tab_sel01.parent().removeClass('on');
		t.addClass('on');
		$('#tab_cont .list_trend').not(path).removeClass('on');
		$(path).addClass('on');
	});

	/* 프로모션배너 */
	$('#promotion_box').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false
	});

	/* 속보 */
	$('#breaking_news .btn_close').on('click',function(){
		var thisID = $(this).data('cid') ;
		$.cookie('isBreakNews', thisID, { expires: 1, path: '/', domain: 'donga.com' });
		$("#breaking_news").css("display","none");
	});

	/* 헬스동아 - 레터구독팝업 */
	$("#content.health .letter_wrap .btn_letter").click(function(){
		$('#content.health #letter_toast').show();
		$('#content.health #letter_toast').delay(1000).fadeOut('slow');
	});

	/* 기자페이지 - 개인 */
	$('#reporter02 .btn_share').on('click', function () {
		$('#reporter02 .share_layer').show();
	});
	$('#reporter02 .share_layer .btn_close').on('click', function () {
		$('#reporter02 .share_layer').hide();
	});
	$(document).mouseup(function (e){
		var LayerPopup02 = $("#reporter02 .share_layer");
		var LayerPopup03 = $("#reporter .popup_wrap");
		if(LayerPopup02.has(e.target).length === 0){
			LayerPopup02.css('display','none');
		}
		if(LayerPopup03.has(e.target).length === 0){
			LayerPopup03.css('display','none');
		}
	});
	$('#reporter #aside .report_sphere .layer').on('mouseenter', function() {
		$('#reporter #aside .report_sphere .popup_wrap').css('display','block');
	});
	$('#reporter #aside .report_sphere .popup .btn_close').on('click', function () {
		$('#reporter #aside .report_sphere .popup_wrap').css('display','none');
	});

	/* 기자페이지 - 구독취소팝업 */
	$('#header.reporter_header02 .btn_subscribe.on').on('click', function () {
		$('#subCancelLayer').show();
	});
	$('#reporter02 .btn_subscribe.on').on('click', function () {
		$('#subCancelLayer').show();
	});
	$('#subCancelLayer span').on('click',function(){
		$('#subCancelLayer').hide();
	});

	// 대선 특집페이지 - 대선후보 정보
	var party = $('#party_list');
	var party_sel = party.find('li > a');
	party_sel.on('click', function(e){
		e.preventDefault();
		var t = $(this).parent();
		var path = $(this).attr('href');
		party_sel.parent().removeClass('on');
		t.addClass('on');
		$('#candidate_wrap .candidate_info').not(path).removeClass('on');
		$(path).addClass('on');
	});

	// 대표브랜드대상 20220414 추가 
	$('#masterbrand_wrap .card_list').slick({
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: $('#masterbrand_wrap .btn_move .btn_prev'),
		nextArrow: $('#masterbrand_wrap .btn_move .btn_next'),
		touchMove: false
	});

	/* 2차개편 */
	/* 면탑 - 토픽 */
	$('#topic_list').slick({
		dots: false,
		infinite: false,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll:1,
		arrows: true,
		variableWidth: false,
		touchMove: false
	});
	$('#topic_list .slick-arrow').on('mouseenter', function() {
		$('#topic_list button').removeClass('hover');
		$(this).addClass('hover');
		$('#topic_list .slick-arrow').on('mouseout', function() {
			$('#topic_list button').removeClass('hover');
		});
	});

	/* 면탑 - 오피니언 */
	$('#editorialist_list,#out_com_list').slick({
		dots: false,
		infinite: false,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll:3,
		arrows: true,
		variableWidth: false,
		touchMove: false
	});
	$('#editorialist_list .slick-arrow,#out_com_list .slick-arrow').on('mouseenter', function() {
		$('#editorialist_list button,#out_com_list button').removeClass('hover');
		$(this).addClass('hover');
		$('#editorialist_list .slick-arrow,#out_com_list .slick-arrow').on('mouseout', function() {
			$('#editorialist_list button,#out_com_list button').removeClass('hover');
		});
	});

	/* 핫이슈, 트렌드뉴스 - 설명 팝업 */
	$( '#btn_info' ).click( function() {
		$( '#info_layer' ).toggle();
	});
	$( '#info_layer' ).click( function() {
		$(this).hide();
	});
	$(document).mouseup(function (e){
		var LayerPopup04 = $("#info_layer");
		if(LayerPopup04.has(e.target).length === 0){
			LayerPopup04.css('display','none');
		}
	});

	/* 국제 - 생생 중국 뉴스 */
	$('#china_news .tab_cont a').mouseover ( function() {
		$('#china_news .live_news_box').hide();
		$('#china_news .tab_cont a').removeClass ('on');
		var idx = $('#china_news .tab_cont a').index(this);
		$('#china_news .tab_cont a').eq(idx).addClass ('on');
		$('#china_news .live_news_box').eq(idx).show();
		return false;
	});
	$('#china_news .tab_cont a').focus ( function() {
		$('#china_news .live_news_box').hide();
		$('#china_news .tab_cont a').removeClass ('on');
		var idx = $('#china_news .tab_cont a').index(this);
		$('#china_news .tab_cont a').eq(idx).addClass ('on');
		$('#china_news .live_news_box').eq(idx).show();
		return false;
	});

	/* 전체 이슈목록 */
	$(document).on('click', '#years_list .year' , function(){
		var submenu = $(this).next("div");
		if( submenu.is(":visible") ){
			submenu.hide();
			$(this).parent().removeClass ('on');
		}else{
			submenu.show();
			$(this).parent().addClass ('on');
		}
	});

	/* 이슈연재 - 리스트 */
	$('#journalist_list').slick({
		dots: false,
		infinite: false,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll:1,
		arrows: true,
		variableWidth: false,
		touchMove: false
	});
	$('#journalist_list .slick-arrow').on('mouseenter', function() {
		$('#journalist_list .slick-arrow').removeClass('hover');
		$(this).addClass('hover');
		$('#journalist_list .slick-arrow').on('mouseout', function() {
			$('#journalist_list .slick-arrow').removeClass('hover');
		});
	});

	/* 이슈연재, 트렌드뉴스 - 공유하기 */
	$('#container.etcPage .btn_share').on('click', function () {
		$('#container.etcPage .share_layer').show();
		return false;
	});
	$('#container.etcPage .share_layer .btn_close').on('click', function () {
		$('#container.etcPage .share_layer').hide();
	});
	$(document).mouseup(function (e){
		var LayerPopup05 = $("#container.etcPage .share_layer");
		if(LayerPopup05.has(e.target).length === 0){
			LayerPopup05.css('display','none');
		}
	});
	$('#container.etcPage .btn_share').on('mouseenter', function() {
		$(this).addClass('hover');
		$(this).on('mouseout', function() {
			$(this).removeClass('hover');
		});
	});
	
	/* 트렌드뉴스 - 많이본뉴스 - 종합레이어 */
	$('#content.trend_news .field span').on('click', function () {
		$('#field_layer').show();
		return false;
	});
	$('#field_layer a').on('click', function () {
		$('#field_layer').hide();
	});
	$(document).mouseup(function (e){
		var LayerPopup06 = $("#field_layer");
		if(LayerPopup06.has(e.target).length === 0){
			LayerPopup06.css('display','none');
		}
	});
	/* //2차개편 */

       /* 3차개편 */
	/* 로그인버튼 */
	$('#sub_header .logout').on('click', function () {
		$('#sub_header .logout02').toggleClass('on'); //20230130 추가
		$('#login_cont').toggle().toggleClass('show');
		return false;
	});
	
	/* 알림 - 회원가입유도 */
	$('#join_msg .btn_close').on('click',function(){
		$("#join_msg").css("display","none");
	});

	/* 알림 - 구독유도 */
	$('#subscribe_msg .btn_close').on('click',function(){
		$("#subscribe_msg").css("display","none");
	});

	/* 기사뷰 - 읽기모드 */
	$('.article_title .read').on('click', function () {
		if ($(this).hasClass('on')==true)
		{
			$(this).removeClass('on');
			$('body').removeClass('view_read');
		}
		else {
			$(this).addClass('on');
			$('body').addClass('view_read');
		}
	});

	/* 키워드 구독하기 정보 레이어 */
	$(document).mouseup(function (e){
		var info = $(".mypage_info .popup_wrap");
		if(info.has(e.target).length === 0){
			info.css('display','none');
		}
                /* 20221213 추가 */
		var LayerPopup08 = $("#latest_cont01");
		if(LayerPopup08.has(e.target).length === 0){
			$('#latest_cont01').removeClass('on');
		}
                var LayerPopup09 = $(".sort_cont");
		if(LayerPopup09.has(e.target).length === 0){
			$('.sort_cont').removeClass('on');
			$('.sort_cont').removeClass('date_on');
		}
		
	});
        /*$(".mypage_info .popup_wrap").on('mouseleave', function() {
		$('.mypage_info .popup_wrap').css('display','none');
	});*/
	$('.mypage_info .icon_info').on('mouseenter', function() {
		$('.mypage_info .popup_wrap').css('display','block');
	});
	$('.mypage_info .popup .btn_close').on('click', function () {
		$('.mypage_info .popup_wrap').css('display','none');
	});

	/* 띠 입력 팝업 */
	window.signPopupObj = Popup( $( '#popup_type02' ), {
		vertical: 'center',     /* top, bottom, center */
		horizontal: 'center',  /* left, right, center */
		//effect: 'blind',  /* clip slide blind */
		//direction: 'right',   /* up, down, left, right */
		duration: 0.3
	});
	$('.sign_info .btn_reg , .sign_info .btn_edit').on('click', function () {
		signPopupObj.show();
	});
	$('#popup_type02 .btn_close , #popup_type02 .btn_ok').on('click', function () {
		signPopupObj.hide();
	});

	//띠 입력 토글 ul
	$(".sel_cont").click(function() {
		$(".year_cont .birth_cont").toggle();
		$(".year_cont .icon_arr").toggleClass('on');
	});

	//띠 입력 옵션 선택 및 선택 후 옵션 숨기기
	$(".year_cont .birth_list li button").click(function() {
		var text = $(this).html();
		$(".year_cont .sel_cont .year").html(text);
		$(".year_cont .birth_cont").hide();
	}); 

	/* 삭제팝업 */
	window.msgdelPopupObj = Popup( $( '#popup_type01' ), {
		vertical: 'center',     /* top, bottom, center */
		horizontal: 'center',  /* left, right, center */
		//effect: 'blind',  /* clip slide blind */
		//direction: 'right',   /* up, down, left, right */
		duration: 0.3
	});
	
	/* 북마크 삭제팝업 */
	$('.del_cont .all_del').on('click', function () {
		msgdelPopupObj.show();
	});
	$('#popup_type01 .btn_close , #popup_type01 .btn_no').on('click', function () {
		msgdelPopupObj.hide();
	});

	/* 댓글 삭제팝업 */
	$('.my_reply .all_del').on('click', function () {
		msgdelPopupObj.show();
		return false;
	});

	/* 개별삭제팝업 */
	window.replydelPopupObj = Popup( $( '#popup_type03' ), {
		vertical: 'center',     /* top, bottom, center */
		horizontal: 'center',  /* left, right, center */
		//effect: 'blind',  /* clip slide blind */
		//direction: 'right',   /* up, down, left, right */
		duration: 0.3
	});
	
	/* 개별 삭제팝업 */
	$('.commentList .delete').on('click', function () {
		replydelPopupObj.show();
		return false;
	});
	$('#popup_type03 .btn_close , #popup_type03 .btn_no').on('click', function () {
		replydelPopupObj.hide();
	});

        /* 구독 토스트 메시지 */
	/*$('#subscribe_msg .btn_subscribe').click( function() {
		$('#subscribe_toast').fadeIn(300).delay(1300).fadeOut(300); 
	});

        $('.recommend_subscribe .btn_subscribe').click( function() {
		$('#subscribe_toast').fadeIn(300).delay(1300).fadeOut(300); 
	});

       $('.subscribe_top .btn_add').click( function() {
		$('#subscribe_toast').fadeIn(300).delay(1300).fadeOut(300); 
	});*/

	/* 북마크 토스트 메시지 */
	/*$('.right_box .btn_bookmark').click( function() {
		$('#bookmark_toast').fadeIn(300).delay(1000).fadeOut(300); 
	});*/

        /* 키워드 더보기 */
	$('.type_cont .btn_more').on('click', function () {
		$(this).hide();
		$('.subscribe_tit div').removeClass('hide');
	});

	/* 메인 - POLL */
	$("#main_content .poll_wrap input[name='poll']:radio").on('click', function () {
		$('#main_content .poll_wrap .label').removeClass('on');  
		$(this).parent().addClass('on');  
		$('#main_content #poll_popup').fadeIn(200);
	});
	$('#main_content #poll_popup .poll_pop_btn span').on('click', function () {
		$('#main_content #poll_popup').fadeOut(200);
	});

	/* 서브 - POLL */
	$(".subPage .poll_top input[name='poll']:radio").on('click',function () {
		$(this).closest('.poll_top').find('.poll_popup').fadeIn(200);
	});
	$('.subPage .poll_top .poll_popup .poll_pop_btn span').on('click', function () {
		$(this).closest('.poll_top').find('.poll_popup').fadeOut(200);
	});
	$('.subPage .poll_wrap .tit.toggle').on('click', function () {
		$(this).parent().toggleClass('on');
		$(this).siblings().toggle();
	});
	$('.subPage .poll_wrap .btn_reply').on('click', function () {
		replyPopupObj.show();
	});
	$('.subPage .poll_wrap .btn_article').on('click', function () {
		pollArticleObj.show();
	});
	$('.subPage .poll_wrap #relate_article .layer_close').on('click', function () {
		pollArticleObj.hide();
	});
	window.pollArticleObj = Popup( $( '#relate_article' ), {
		vertical: 'top',     /* top, bottom, center */
		horizontal: 'right',  /* left, right, center */
		//effect: 'blind',  /* clip slide blind */
		//direction: 'right',   /* up, down, left, right */
		duration: 0.1
	});   

	/* 기사뷰 - POLL */
	$("#view .poll_wrap input[name='poll']:radio").on('click', function () {
		$('#view .poll_wrap .label').removeClass('on');  
		$(this).parent().addClass('on');  
		$('#view #poll_popup').fadeIn(200);
	});
	$('#view #poll_popup .poll_pop_btn span').on('click', function () {
		$('#view #poll_popup').fadeOut(200);
	});

        /* 오늘의 뉴스레터 */
	$('#letter_swiper').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});
	/* //3차개편 */

        /* ---검색개편--- */
	/* 최근검색어 */
	$('.search_top .t').on('click', function () {
		$('#latest_cont01').addClass('on');
		$('.sort_cont.sort03').removeClass('date_on');
	 });
	 $('#latest_cont01 .close').on('click', function () {
		$('#latest_cont01').removeClass('on');
	 });

	/* 검색정렬메뉴 */
	$('.sort01 .tag').on('click', function () {
		$(this).parent().parent().toggleClass('on');
		$('.sort02, .sort03').removeClass('on');
		$('.sort_cont.sort03').removeClass('date_on');
		$('#datepicker01').hide();
		$('#datepicker').hide();
	 });
	 $('.sort02 .tag').on('click', function () {
		$(this).parent().parent().toggleClass('on');
		$('.sort01, .sort03').removeClass('on');
		$('.sort_cont.sort03').removeClass('date_on');
		$('#datepicker01').hide();
		$('#datepicker').hide();
	 });
	 $('.sort03 .tag').on('click', function () {
		$(this).parent().parent().toggleClass('on');
		$('.sort01, .sort02').removeClass('on');
		$('.sort_cont.sort03').removeClass('date_on');
                $('#datepicker').hide();
		$('#datepicker01').hide();
	 });
	 $('.sort_cont.sort03 a.date').on('click', function () {
		$('.sort_cont.sort03').addClass('date_on');
		$('#datepicker').show();
                $('#datepicker01').hide();
	 });
	 $('.sort_cont.sort03 #v1').on('click', function () {
		$('#datepicker01').attr('style', 'display: none !important');
		$('#datepicker').attr('style', 'display: block !important');
	 });
	  $('.sort_cont.sort03 #v2').on('click', function () {
		$('#datepicker01').attr('style', 'display: block !important');
		$('#datepicker').attr('style', 'display: none !important');
	 });
         $('#sort_layer .lower').on('click', function () {
		$(this).toggleClass('hide');
	 });
         $(".date_sel #v1").click(function(e){
		 $(this).addClass('on');
		 $('.date_sel #v2').removeClass('on');
	});
	 $(".date_sel #v2").click(function(e){
		 $(this).addClass('on');
		 $('.date_sel #v1').removeClass('on');
	});

        /* 검색 사진 팝업 */
	 window.resPopupObj = Popup( $( '#view_layerpop' ), {
		vertical: 'center',  /* top, bottom, center */
		horizontal: 'center',  /* left, right, center */
		effect: 'fade',  /* clip slide blind */
		//direction: 'left',   /* up, down, left, right */
		duration: 300,
		//scroll: true
	});

         /* 동아일보 지면보기란 */
	$('.top_paper .info').on('click', function () {
		 $("#txt_layer").toggle();
		 $("#no_newspaper").hide();
		 $("#layer_favor").hide();
		 $(".date_cont .top_sort").removeClass('on') ;
	 });
	  $('#txt_layer .btn_close').on('click', function () {
		 $("#txt_layer").hide();
	 });
        $(document).mouseup(function (e){
		var paper = $(".top_paper #txt_layer");
		if(paper.has(e.target).length === 0){
			paper.css('display','none');
		}
              
		var favor = $(".top_paper .date_cont .top_sort");
		if(favor.has(e.target).length === 0){
			$("#layer_favor").css('display','none');
			$(".top_paper .date_cont .top_sort").removeClass('on') ;
		}
	});

	  /* 오늘의 신문 날짜검색 */
	 $('.date_cont .date').on('click', function () {
		 $(".date_cont #layer_favor").toggle();
		 $(this).parent().toggleClass('on') ;
		  $("#txt_layer").hide();
	 });
	  $('.date_cont #layer_favor a').on('click', function () {
		 $(".date_cont #layer_favor").hide();
		 $(".date_cont .top_sort").removeClass('on') ;
	 });
	 $('#no_newspaper .btn_close').on('click', function () {
		 $("#no_newspaper").hide();
	 });

         /* 오늘의 신문개편 */
	 $('.today_view .thumb a').click(function(){
		$('#img_viewer').addClass('on');
		$('body').css('overflow' , 'hidden');
	});

	 $('#img_viewer .btn_menu').click(function(){
		$('#kind_layer').toggle();
	});
	
	 $('#kind_layer').click(function(){
		$(this).hide();
	});
	 $('#img_viewer .btn_open').click(function(){
		$('#img_viewer .pop_btm').toggleClass('off' , 300);
	});

        /* 지면보기 섹션 탭 */
	var paper_tab = $('.paper_content .tab_menu');
	var paper_sel = paper_tab.find('li >a');
	paper_sel.on('click', function(e){
		e.preventDefault();
		var t01 = $(this).parent();
		var path01 = $(this).attr('href');
		paper_sel.parent().removeClass('on');
		t01.addClass('on');
		$('.paper_content .section_wrap').not(path01).removeClass('on');
		$(path01).addClass('on');
	});

});

/* 기사뷰 - 본문 - 포토 슬라이드 */
$(window).resize(function(){
	 $('#photoview_layerpop').css({position:'fixed'}).css({
		 left: ($(window).width() - $('#photoview_layerpop').outerWidth())/2,
		 top: ($(window).height() - $('#photoview_layerpop').outerHeight())/2
	 });
	$('#photoview_layerpop').css('width',$(window).width() -100);
	$('#photoview_layerpop').css('height',$(window).height() - 100);

         /* 검색 사진 팝업 */
	 $('#view_layerpop').css({position:'fixed'}).css({
		 left: ($(window).width() - $('#view_layerpop').outerWidth())/2,
		 top: ($(window).height() - $('#view_layerpop').outerHeight())/2
	 });
	$('#view_layerpop').css('width',$(window).width() - 100);
	$('#view_layerpop').css('height',$(window).height() - 100);
	//$('#view_layerpop .photo_box').css('width',$(window).width() - 300);
	//$('#view_layerpop .photo_box').css('height',$(window).height() - 150);
	//$('#view_layerpop .photo_box .thumb').css('height',$('#view_layerpop .photo_box').height() - $('#view_layerpop .photo_box .cont_info').height());
});

/* 기자페이지 - 전체 - 상단 탭 */
function reporterTab(val) {
	$('#reporter .reporter_tab .tabMenu li').removeClass('on');
	$('#reporter .reporter_tab #reporterTab'+val).addClass('on');
	$('#reporter .reporter_tab .tabCon').css('display', 'none');
	$('#reporter .reporter_tab #tabBox'+val).css('display', '');
}

 function regExp(str)
	{
		var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
		if(reg.test(str)) return true;
		else            
		return false;
	}

/* 디지털콘텐츠주간편성표 */
$(window).on('resize', function(){
	if($('#schedule_slide #schedule_scroll').width() < $('#schedule_slide .schedule_list').width()) {
		$('#schedule_slide .scroll_prev').show();
		$('#schedule_slide .scroll_next').show();
	}
	else{
		$('#schedule_slide .scroll_prev').hide();
		$('#schedule_slide .scroll_next').hide();
	}
});
/* 편성표 슬라이드 센터정렬 */
function scheduleCenter(targetpos)
{
    var box = $('#schedule_scroll');
    var boxItem = box.find('.schedule_list li');
    var boxHarf = box.width()/2;
    var pos;
    var listWidth = 0;
    var targetLeft = 0;

    boxItem.each(function(){ listWidth += $(this).outerWidth() + 250; })

    for (var i=0; i<targetpos.index(); i++) targetLeft += boxItem.eq(i).outerWidth(); // 선택요소 까지 길이

    var selectTargetPos = (targetLeft + targetpos.outerWidth()/2);
    if (selectTargetPos <= boxHarf) { // left
        pos = 0;
    }else if (listWidth - selectTargetPos <= boxHarf) { //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
        pos = listWidth-box.width();
    }else {
        pos = selectTargetPos - boxHarf; // 중앙정렬
    }
    box.animate({scrollLeft:pos},0) ;
}

/* 주제별 요일별 슬라이드 센터정렬 */
function subjectCenter(slidepos)
{
    var box = $('.tit_slide');
    var boxItem = box.find('#subject_list li');
    var boxHarf = box.width()/2;
    var pos;
    var listWidth = 0;
    var targetLeft = 0;

    boxItem.each(function(){ listWidth += $(this).outerWidth() + 250; })

    for (var i=0; i<slidepos.index(); i++) targetLeft += boxItem.eq(i).outerWidth(); // 선택요소 까지 길이

    var selectTargetPos = (targetLeft + slidepos.outerWidth()/2);
    if (selectTargetPos <= boxHarf) { // left
        pos = 0;
    }else if (listWidth - selectTargetPos <= boxHarf) { //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
        pos = listWidth-box.width();
    }else {
        pos = selectTargetPos - boxHarf; // 중앙정렬
    }
    box.animate({scrollLeft:pos},0) ;
}

$(document).ready(function(){
         /* 요일별 주제별 공유 하기 */
	$('.schedule_page .schedule_tit .btn_share').on('click', function () {
		$('.schedule_page .schedule_tit .share_layer').show();
		return false;
	});
	$('.schedule_page .schedule_tit .share_layer .btn_close').on('click', function () {
		$('.schedule_page .schedule_tit .share_layer').hide();
	});

	var targetpos = $('#schedule_scroll .schedule_list .view') ;
        if ( targetpos.html() ) scheduleCenter(targetpos) ;

    var slidepos = $('.tit_slide #subject_list .on') ;
    if ( slidepos.html() ) subjectCenter(slidepos) ;

	// 편성표 열기
	$('#section_schedule .schedule_top .tit , #section_schedule .btn_toggle').click(function () {
		var $obj = $('#section_schedule .schedule_cont');
		if ($obj.hasClass('open')) {
			$obj.removeClass('open');
			//$obj.find('#schedule_slide').slideUp(300);
		} else {
			$obj.addClass('open');
			//$obj.find('#schedule_slide').slideDown(300);
		}
		var headerOffset = $( '#nav_cont , .article_title, #reporter, #reporter02 , .search_top , .result_top' ).offset(); /* 20230118 추가 */
		$( window ).scroll( function() {
			if ( $( document ).scrollTop() > headerOffset.top ) {
				$( '#header' ).addClass( 'fixed' );
				$( '#all_menu' ).addClass( 'fixed' );
				$( '#container' ).css('margin-top' , '174px' );
				$( '.search_wrap #container' ).css('margin-top' , '50px' ); /* 20230118 추가 */
				$('#sub_header').addClass('fix');
			}
			else {
				$( '#header' ).removeClass( 'fixed' );
				$( '#all_menu' ).removeClass( 'fixed' );
				$( '#container' ).css('margin-top' , '0' );
				$('#sub_header').removeClass('fix');
			}
		});
	});

         // 편성표 슬라이드 이동
	(function( $ ) {
		$("#schedule_slide #schedule_scroll").on('scroll', function() {
			$val = $(this).scrollLeft();
			if($(this).scrollLeft() + $(this).outerWidth() + 1 >= $(this)[0].scrollWidth) {
				$("#schedule_slide .scroll_next").fadeOut(); // 또는 hide
			}
			else {
				$("#schedule_slide .scroll_next").fadeIn();  // 또는 show
			}
			if($val == 0) {
				$("#schedule_slide .scroll_prev").fadeOut(); // 또는 hide
			}
			else {
				$("#schedule_slide .scroll_prev").fadeIn();  // 또는 show
			}
		});

		$("#schedule_slide .scroll_next").on("click", function() {
			$("#schedule_slide #schedule_scroll").animate( {
				scrollLeft: '+=250'
			}, 200);
		});
		$("#schedule_slide .scroll_prev").on("click", function() {
			$("#schedule_slide #schedule_scroll").animate( {
				scrollLeft: '-=250'
			}, 200);
		});

	})( jQuery );

        // 요일별 주제별 슬라이드 이동
	(function( $ ) {
		$("#tit_slidescroll .tit_slide").on('scroll', function() {
			var val01 = $(this).scrollLeft();
			if($(this).scrollLeft() + $(this).outerWidth() + 1 >= $(this)[0].scrollWidth) {
				$("#tit_slidescroll .scroll_next").fadeOut(); // 또는 hide
			}
			else {
				$("#tit_slidescroll .scroll_next").fadeIn();  // 또는 show
			}
			if(val01 == 0) {
				$(" #tit_slidescroll .scroll_prev").fadeOut(); // 또는 hide
			}
			else {
				$("#tit_slidescroll .scroll_prev").fadeIn();  // 또는 show
			}
		});

		$("#tit_slidescroll .scroll_next").on("click", function() {
			$("#tit_slidescroll .tit_slide").animate( {
				scrollLeft: '+=250'
			}, 500);
		});
		$(" #tit_slidescroll .scroll_prev").on("click", function() {
			$("#tit_slidescroll .tit_slide").animate( {
				scrollLeft: '-=250'
			}, 500);
		});

	})( jQuery );


       
	// 이슈 개별페이지 //230405수정
	if($('.popular_cont').hasClass('united')){
		$('#popular_list').slick({
			dots: false,
			infinite: false,
			autoplay: false,
			autoplaySpeed: 3000,
			slidesToShow: 3.37,
			slidesToScroll: 1,
			prevArrow: $('.btn_move .btn_prev'),
			nextArrow: $('.btn_move .btn_next'),
			touchMove: false,	
		});
	}else{
		$('#popular_list').slick({
			dots: false,
			infinite: false,
			autoplay: false,
			autoplaySpeed: 3000,
			slidesToShow: 3.72,
			slidesToScroll: 1,
			prevArrow: $('.btn_move .btn_prev'),
			nextArrow: $('.btn_move .btn_next'),
			touchMove: false,	
		});
	}

//버튼 감추기 230306 추가
	var countLi = $(".popular_list").find("li").length;
	if(countLi<4){
		$('#popular_wrap .btn_move').hide();//230420 수정
	}else{
		$('#popular_wrap .btn_move').show();//230420 수정
	}


         /* 이 이슈 인기 기사 - 설명 팝업 */
	$( '#btn_popular' ).click( function() {
		$( '#popular_layer' ).toggle();
	});
	$( '#popular_layer' ).click( function() {
		$(this).hide();
	});
	$(document).mouseup(function (e){
		var LayerPopup05 = $("#popular_layer");
		if(LayerPopup05.has(e.target).length === 0){
			LayerPopup05.css('display','none');
		}
	});

        /* 기사뷰 -  상단 : 기자레이어 */
	$('.report .report_two').on('click',function(){
		$(this).toggleClass('on');
		$('#journalist_layer').toggleClass('open');
	});

	/* 기사뷰 - aside 많이본 뉴스 탭 */
	var many_tab = $('.many_news .tab_sort');
	var many_sel = many_tab.find('li >a');
	many_sel.on('click', function(e){
		e.preventDefault();
		var as = $(this).parent();
		var sort01 = $(this).attr('href');
		many_sel.parent().removeClass('on');
		as.addClass('on');
		$('.many_news .trend_box').not(sort01).removeClass('on');
		$(sort01).addClass('on');
	});

	/* 기사뷰 - AI기사추천 */
	/*$('.news_recom .btn_info').on('click', function () {
		$('.news_recom #infoalm_layer').toggleClass('on');
	});
	$('.news_recom #infoalm_layer .btn_close').on('click', function () {
		$('.news_recom #infoalm_layer').removeClass('on');
	});*/

	 $(document).on('click','.news_recom .btn_info' ,function(){
		 $('.news_recom #infoalm_layer').toggleClass('on');
	});
	 $(document).on('click','.news_recom #infoalm_layer .btn_close' ,function(){
		 $('.news_recom #infoalm_layer').removeClass('on');
	});
	$(document).mouseup(function (e){
		var recom = $('.news_recom .btn_info');
		if (recom.has(e.target).length === 0){
			$('.news_recom #infoalm_layer').removeClass('on');
		}
	});
	$('#seeing_slide').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false
	});

	/* 기사뷰 - 인기 구독물 */
	$('.popular_sub .btn_info').on('click', function () {
		$('.popular_sub #infoalm_layer').toggleClass('on');
	});
	$('.popular_sub #infoalm_layer .btn_close').on('click', function () {
		$('.popular_sub #infoalm_layer').removeClass('on');
	});

	$(document).mouseup(function (e){
		var popular = $('.popular_sub .btn_info');
		if (popular.has(e.target).length === 0){
			$('.popular_sub #infoalm_layer').removeClass('on');
		}
	});

        /* 기사뷰 - 댓글작성자 레이어 풀스크린 눌렀을 때 초기화 */
        $('#fullScreenPopupLayer').on({ 
            click: function() { 
                if ( $('.reply_layer_con .reply_box').css('display') === 'none' )
                {
                    $('.reply_layer_con .reply_box').css('display', 'block') ;
            
                    $('#reply_gather').css('display', 'none') ;
                    $('#reply_gather').html('') ;
                }
            }
        });

       //기사뷰 - 기사팝업 구독버튼 위치 230502
	$('#journalist_layer .list_layer').find('li').each(function () {
		if ($(this).find('.count').length > 0) {
			$(this).find('.btn_subscribe').css('top', 17)
		} else {
			$(this).find('.btn_subscribe').css('top', 27)
		}
	});

        /* 구독추천 20230607 */
	$( '.subscribe_wrap #btn_info01' ).click( function() {
		$( '#subscribe_info' ).toggle();
	});
	$( '#subscribe_info' ).click( function() {
		$(this).hide();
	});
	$(document).mouseup(function (e){
		var subscribeLayer = $("#subscribe_info");
		if(subscribeLayer.has(e.target).length === 0){
			subscribeLayer.css('display','none');
		}
	});

	var tabcount = $('#subscribe_wrap .tabs_menu li').length;//탭이 몇개인지 계산
	tabidx = Math.floor(Math.random() * tabcount);//랜덤숫자 출력
	changeTab(tabidx);//페이지로드시 초기 탭교체
	 
	//탭클릭시 
	$('#subscribe_wrap .tabs_menu li').click(function(){
		tabidx = $(this).index();
		changeTab(tabidx);
		return false;
	});
	 
	//탭교체 함수
	function changeTab(tabidx) {
		$('#subscribe_wrap .tabs_menu li').removeClass('selected');//선택표시를 제거
		$('#subscribe_wrap .tabs_menu li').eq(tabidx).addClass('selected');//새로운 탭에 선택표시 추가
		$('#subscribe_wrap .subscribe_cont > div').hide();//기존 탭내용 제거
		$('#tab_subscribe'+(tabidx+1)).show();//새로운 탭 내용 보이기
	}
});

/* 기사뷰 영역 좌우 스크롤 */
var	top_last_scroll		= 0;
var	diff_scroll			= 0;

function	onScrollDirection(){
	var	function_direction	= function(){
	var	top_scroll	= $(document).scrollTop();
	window.diff_scroll		= top_scroll - window.top_last_scroll;
	window.top_last_scroll	= top_scroll;
		
		$(window).trigger("onScrollAdjustEndLine");
	};
	
	$(window).scroll(function_direction);
	$(window).resize(function_direction);
	
	setTimeout(function(){window.diff_scroll=-1;$(window).trigger("onScrollAdjustEndLine");}, 200);
};

function	onScrollAdjustEndLine(query_start, query_end, query_in){
	$(window).on("onScrollAdjustEndLine",function(){
			var	obj_start	= $(query_start);
			var	obj_end	= $(query_end);
			var	obj_in		= $(query_in);
			
			if ( obj_start && obj_end && obj_in ){
				var	top_in		= obj_in.offset().top;
				var	top_win		= $(document).scrollTop();
				var	top_start		= obj_start.offset().top;
				var	top_end		= obj_end.offset().top;
				var	left_start		= obj_start.offset().left;
				var	width_start	= obj_start.width();
				var	height_win	= $(window).height();
				var	height_end	= obj_end.height();
				var	height_in		= obj_in.height();
				var	bot_win		= top_win + height_win;
				var	bot_end		= top_end + height_end;
				var	bot_in		= top_in + height_in;
				var	gap_max		= top_end + height_end - top_start - height_in;
				
				obj_start.css({"height":height_in+"px"});
				
				if ( window.diff_scroll == 0 ){
					if ( obj_in.css("position") == "fixed" ){
						obj_in.css({"left":left_start+"px"});
					}
				}
				if ( height_in >= bot_end - top_start ){
					obj_in.css({"position":"relative","top":"0px","left":"0px","width":""});
				}
				else if ( height_win > top_end + height_end - top_start ){
					obj_in.css({"position":"relative","top":"0px","left":"0px","width":""});
				}					
				else if ( height_win > height_in ){
					if ( top_start >= top_win ){
						obj_in.css({"position":"relative","top":"0px","left":"0px","width":""});
					}
					else if ( top_start + gap_max <= top_win ){
						obj_in.css({"position":"relative","top":gap_max+"px","left":"0px","width":""});
					}						
					else{
						obj_in.css({"position":"fixed","top":"0px","left":left_start+"px","width":width_start+"px"});
					}
				}
				else{
					if ( window.diff_scroll < 0 )	{
						if ( top_start >= top_win ){
							obj_in.css({"position":"relative","top":"0px","left":"0px","width":""});
                                                        $('.open_view #aside').removeClass('mgt');
						}
						else if ( top_in >= top_win ){
							obj_in.css({"position":"fixed","top":"0px","left":left_start+"px","width":width_start+"px"});
                                                        $('.open_view #aside').addClass('mgt');
						}
						else if ( obj_in.css("position") == "fixed" ){
							obj_in.css({"position":"relative","top":(top_in-top_start-diff_scroll)+"px","left":"0px","width":""});
						}
					}
					if ( window.diff_scroll > 0 )	{
						if ( bot_end <= bot_win ){
							obj_in.css({"position":"relative","top":gap_max+"px","left":"0px","width":""});
						}
						else if ( bot_in <= bot_win ){
							obj_in.css({"position":"fixed","top":(height_win-height_in)+"px","left":left_start+"px","width":width_start+"px"});
						}
						else if ( obj_in.css("position") == "fixed" ){
							obj_in.css({"position":"relative","top":(top_in-top_start-diff_scroll)+"px","left":"0px","width":""});
						}
					}
				}
			}
		}
	);
};