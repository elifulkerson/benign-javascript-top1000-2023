//brandpage

/* 유튜브 이미지 클릭시 레이어팝업으로 플레이 */
INVEN.brandpageMovie = window.INVEN.brandpageMovie || {};
INVEN.brandpageMovie.openBrandpageMovie = function(obj,url) {
    var brandMovieObj = getObj('comBrandpageMovie');
    if (url) {
        INVEN.Layer.show(brandMovieObj, 0 ,0, true, true, obj, false);
        var ifrmHTML = '<iframe width="858" height="482" id="iframe1" src="https://www.youtube.com/embed/'+url+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $('#comBrandpageMovie .backdrop .content .play').html(ifrmHTML);
    } else{
        INVEN.Layer.hide(brandMovieObj, true);
        $('#comBrandpageMovie .backdrop').removeAttr('style');
        $('#comBrandpageMovie .backdrop .content .play').html('');
    }
};
/* 레이어 팝업 종료 */
$(document).on('click', '#comBrandpageMovie .movie_close,#comBrandpageMovie .backdrop', function (e) {
    INVEN.brandpageMovie.openBrandpageMovie(this);
});


(function () {
    var timeoutID = null;
    
    $(document).on("mouseenter", "#commonpart_brand .category_list li", function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout($.proxy(function () {
            var clickTab = $(this).data("tab");
            var contentObj = $("#commonpart_brand .brand_list");
            $("#commonpart_brand .category_list li.on").removeClass("on");
            $(this).addClass("on");
            contentObj.removeClass("on");
            contentObj.filter("[data-content=" + clickTab + "]").addClass("on");
        }, this), (timeoutID === null) ? 0 : 55);
    });
    $(document).on('mouseenter', '#commonpart_brand .brand_list', function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
            timeoutID = null;
        }
    });
})();

//openissue
$(document).on("click", "#commonpart_issue .common_header .category_tab li button", function () {
    var clickTab = $(this).data("tab");
    var clickSrc = $(this).data("src");
    var site_domain = $(this).data("site_domain");

    if ($(this).hasClass('active')) {
        $(location).attr('href', clickSrc);
    }
    commonpartAjaxLoad('openissue', clickTab, site_domain);
});

function openissueDisplay(clickdata, returnVal) {
    var btnObj = $("#commonpart_issue .category_tab li button");
    btnObj.removeClass("active");
    btnObj.filter("[data-tab=" + clickdata + "]").addClass("active");
    $("#commonpart_issue .openissue_list").html(returnVal);
}

//market
var marketArray = [];
var invenpcArray = [];
var gamepcArray = [];
$(document).ready(function(){
	var init_market_num = $('.recommend_group .market_tab li').find('button.active').data('market_category_num');
	marketArray[init_market_num] = true;
	var init_invenpc_num = $('.invenpc_group .invenpc_tab li').find('button.active').data('custom_inven_pc_num');
    invenpcArray[init_invenpc_num] = true;
	var init_gamepc_num = $('.gamepc_group .gamepc_tab li').find('button.active').data('custom_game_pc_num');
    gamepcArray[init_gamepc_num] = true;
});
$(document).on('click','.market_category_btn',function(){
    var btnObj = $(this);
    var market_num = btnObj.data('market_category_num');
    var market_category_url = btnObj.data('market_category_url');
    $('#market_category_url').attr("href",market_category_url);
    $('.market_category_btn').removeClass("active");
    btnObj.addClass("active");
    getMaketData(market_num);
});
function getMaketData(market_num) {
    var site_domain = '';
    if(!marketArray[market_num]){
        commonpartAjaxLoad('market',market_num,site_domain);
    }else{
        marketDisplay(market_num,marketArray[market_num]);
    }
}
function marketDisplay(clickdata,returnVal){
    marketArray[clickdata] = true;
	$('#commonpart_market .market_wrap #market_item_group .item_list').hide();
	if(returnVal === true || $('#commonpart_market #market_item_num_'+clickdata).length > 0 ) {
		$('#commonpart_market #market_item_num_'+clickdata).show();
	}else{
	    $("#commonpart_market .market_wrap #market_item_group").append(returnVal);
	}
}
//gamepc
function game_pc_list_open(){
    $('.btn_more').html('더보기 ▲');
    $('.more_layer').fadeIn();
}
function game_pc_list_close(){
    $('.btn_more').html('더보기 ▼');
    $('.more_layer').fadeOut('fast');
}
$(document).on('mouseover','.btn_more', function (){ game_pc_list_open(); });

$(document).on('click','.custom_game_pc_button', function () {
	var btnObj = $(this);
    var clickTab    = btnObj.data("custom_game_pc_num");
    var site_domain = btnObj.data("site_domain");
    
	var market_game_url = btnObj.data('market_game_url');
	$('#market_game_url').attr("href",market_game_url);
    if(!gamepcArray[clickTab]){
        commonpartAjaxLoad('gamepc', clickTab ,site_domain);
    }else{
        gamepcDisplay(clickTab,gamepcArray[clickTab]);
    }
});
//마우스 영역밖
$(document).on('mouseleave','.custom-game-pc', function () { game_pc_list_close(); });
$(document).on('click','.custom_game_pc_button', function() { game_pc_list_close(); });

function gamepcDisplay(clickdata,returnVal){
    gamepcArray[clickdata] = true;
    var btnObj = $("#commonpart_gamepc .gamepc_tab  li button");
    btnObj.removeClass("active");
    btnObj.filter("[data-custom_game_pc_num='"+clickdata+"']").addClass("active");
    
    if($('#gamepc_tab_list_popup #gamepc_tab_list_num_'+clickdata).length > 0){
	    $('#gamepc_tab_list_main').prepend($('#gamepc_tab_list_num_'+clickdata));
		$('#gamepc_tab_list_num_'+clickdata+':last-child').remove();
		
		if($('#gamepc_tab_list_main li').length > 4){
			var next_num = $('#gamepc_tab_list_main li:nth-child(5)').data('gamep_tab_num');
			$('#gamepc_tab_list_popup').prepend($('#gamepc_tab_list_num_'+next_num));
		}
    }
	
    $('#commonpart_gamepc .inven-main-group').hide();

    if(returnVal === true || $('#commonpart_gamepc #gamepc_item_num_'+clickdata).length > 0 ) {
	    $('#commonpart_gamepc #gamepc_item_num_'+clickdata).show();
    }else {
	    $("#commonpart_gamepc .gamepc_area .body-group").append(returnVal);
    }
}

//invenpc
$(document).on('click','.custom_inven_pc_button',function(){
	var btnObj = $(this);
	var clickTab    = btnObj.data("custom_inven_pc_num");
	var site_domain = btnObj.data("site_domain");
	var market_inven_pc_url = btnObj.data('market_inven_pc_url');
	$('#market_inven_pc_url').attr("href",market_inven_pc_url);
	if(!invenpcArray[clickTab]){
		commonpartAjaxLoad('invenpc', clickTab ,site_domain);
	}else{
		invenpcDisplay(clickTab,invenpcArray[clickTab]);
	}
});
function invenpcDisplay(clickdata,returnVal){
    invenpcArray[clickdata] = true;
    var btnObj = $("#commonpart_invenpc .invenpc_tab  li button");
    btnObj.removeClass("active");
    btnObj.filter("[data-custom_inven_pc_num='"+clickdata+"']").addClass("active");
	$('#commonpart_invenpc .inven-main-group').hide();
	
	if(returnVal === true || $('#commonpart_invenpc #invenpc_item_num_'+clickdata).length > 0 ) {
		$('#commonpart_invenpc #invenpc_item_num_'+clickdata).show();
	}else{
	    $("#commonpart_invenpc .invenpc_area .body-group").append(returnVal);
	}
}

//Ajax 호출 
function commonpartAjaxLoad(type, clickdata,site_domain){
	var fn_name = type+"Display";  
    var sitename = $("#commonpart_issue").attr("data-site");
    
	 $.ajax({
        url: "https://www.inven.co.kr/common/module/"+type+"/"+type+"_commonpart.ajax.php",
        method: "POST",
        crossDomain: true,
	    xhrFields: { withCredentials: true },
        data: {"cdata": clickdata, "site" : sitename, "site_domain" : site_domain},
        dataType:"json",
        success:function(response){	
        	if (response.result && typeof window[fn_name] === 'function'){
		     	window[fn_name](clickdata, response.resultData);
   			}else{
   				console.log(response.msg);
   			}
        },
        error:function(jqXHR, textStatus ){
            console.log(textStatus);
        }
    }); 
}