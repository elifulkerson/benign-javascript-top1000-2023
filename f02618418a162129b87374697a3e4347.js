$(document).ready(function(){
    getMyscrap() ;
    $('#alarm_msg').show() ;

    $('.right_box .btn_bookmark').click( function() {
        $('#subscribe_toast').fadeIn(300).delay(1000).fadeOut(300);
    });

    $('.mypage_info .btn_bookmark').click( function() {
        $('#subscribe_toast').fadeIn(300).delay(1000).fadeOut(300);
    });

    $('#popup_type03 .btn_ok').click( function() {
        $('#subscribe_toast').fadeIn(300).delay(1000).fadeOut(300);
    });

    $('.article_view .txt_link').on('click', function(){
        var text = $(this).text().substr(0, 50);
        if ( text )
        {
            let eventObj = {};
            eventObj = {
                event_name : 'click_content_event',
                ep_button_name : text,
                ep_button_area : '기사콘텐츠',
                ep_button_area2 : '하이퍼링크',
                ep_button_category : '기사뷰'
            }
            gabuilder.GAEventOBJ(eventObj) ;
        }
    });
});

//구독버튼 클릭
$(document).on('click', '.btn_subscribe[data-scrap][data-scrap_type][data-scrap_name]' , function(){
    var sid = $(this).data('scrap') ;
    var stype = $(this).data('scrap_type') ;
    var sname = $(this).data('scrap_name') ;
    if ( sid && stype && sname ) {
        var idx = $(this).data('scrap_idx') ;
        var position = $(this).data('scrap_position') ;
        var mode = 'toggle' ;
        if ( position == 'mypage' ) { mode = 'mypage_toggle' }
        scrap(mode, stype, sid, sname, position, idx) ;
    }
});

function setCookies(key, value, expire)
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expire);

    var cookie_value = escape(value) + ((expire == null) ? '' : '; expires=' + exdate.toUTCString() + ", secure: true" );
    document.cookie = key + '=' + cookie_value + "; path=/; domain=donga.com;" ;

    return false;
}

function scrap(m, stype='', sid='', sname='', position='', idx='')
{
    var addmsg = "" ;
    var m_arr = m.split('_');
    if (m_arr.length > 1)
    {
        m = m_arr[1] ;
        addmsg = "<br>화면을 새로고침 해주세요" ;
    }

    $.ajax({
        type: "GET",
        url: "https://www.donga.com/news/scrap?m=" + m + "&stype=" + stype + "&sid=" + sid + "&sname=" + sname + "&idx=" + idx,
        dataType: "html",
        success: function (result) {
            if (m == 'myinfo')
            {
                $(".subscribe_tit").html(result);
                $(".left_info .btn_more").show();
            }
            else if (m == 'myscrap')
            {
                var scrapArr = result.split("|");
                for (var i = 0; i <scrapArr.length; i++)
                {
                    $('button.btn_subscribe[data-scrap= "' + scrapArr[i] + '"]').addClass('on');
                };
            }
            else
            {
                var gtm_type = "" ;
                if (stype == 'issue') gtm_type = "이슈" ;
                else if (stype == 'series') gtm_type = "연재" ;
                else if (stype == 'reporter') gtm_type = "기자" ;

                var gtm_sname = sname ;
                var ga_sname = "" ;
                if (stype == 'reporter')
                {
                    var gtm_sidArr = sid.split("@");
                    gtm_sname = sname + '('+gtm_sidArr[0]+')' ;

                    ga_sname = sname + "(" + sid + ")" ;
                    sname = sname + " 기자" ;
                }
                else if (stype == 'keyword')
                {
                    ga_sname = sname ;
                    sname = sname + " 키워드" ;
                }

                if (result == 'NeedLogin')
                {
                    let eventObj = {};
                    eventObj = {
                        event_name : 'logout_subscribe_event',
                        ep_button_name : gtm_sname,
                        ep_button_area : '구독하기',
                        ep_button_category : '구독하기',
                        ep_subscribe_type : gtm_type,
                        ep_subscribe_name : gtm_sname
                    }
                    gabuilder.GAEventOBJ(eventObj) ;

                    let customObj = {};
                    customObj = {
                        ep_contentdata_content_title : document.title ,
                        ep_subscribe_name : gtm_sname ,
                        ep_subscribe_type : gtm_type
                    }
                    var ep_sign_up_method = "구독" ;
                    gabuilder.setMakeCookiePV(ep_sign_up_method, 'ga4Articleinfo', 'donga.com', 10, 'https://secure.donga.com/membership/login.php?gourl=https%3A%2F%2Fwww.donga.com%2F', customObj, true) ;

                    //var targetUrl = "https://secure.donga.com/membership/login.php?gourl=https%3A%2F%2Fwww.donga.com%2F" ;
                    //location.href = targetUrl ;
                }
                else if (result == 'blockedkeyword' )
                {
                    $("#subscribe_toast .txt").html("<span class='tit'>비속어나 금지어가 사용되었습니다</span>");
                    $(".subscribe_tit .subscribe_box > div").last().css( "display", "none" );
                }
                else
                {
                    var my_gudokcnt = parseInt($('#my_gudokcnt').text()) ;

                    //tag
                    if (result == 'insert' && stype == 'keyword')
                    {
                        $("#subscribe_toast .txt").html("<span class='tit'>"+sname+"</span> 구독이 <span class='application'>완료</span> 되었습니다");
                        $('#my_gudokcnt').text(my_gudokcnt+1);
                    }
                    else if (result == 'insert')
                    {
                        $("#subscribe_toast .txt").html("<span class='tit'>"+sname+"</span> 구독이 <span class='application'>완료</span> 되었습니다" + addmsg);
                        $("#btn_subscribe .txt").html("<span class='icon_subscribe'>구독중</span>");
                        $('#btn_subscribe').addClass("on");
                        $('#alarm_msg').addClass('close').hide();
                        $('.btn_subscribe[data-scrap= "' + sid + '"]').addClass('on');
                        $('#my_gudokcnt').text(my_gudokcnt+1);
                        if ( $('.count_subscribe[data-scrap= "' + sid + '"]').length > 0 )
                        {
                            var thisCnt = parseInt($('.count_subscribe[data-scrap= "' + sid + '"]').html()) ;
                            $('.count_subscribe[data-scrap= "' + sid + '"]').html(thisCnt+1) ;
                        }
                    }
                    else if (result == 'delete')
                    {
                        $("#subscribe_toast .txt").html("<span class='tit'>"+sname+"</span> 구독이 <span class='application'>취소</span> 되었습니다");
                        $("#btn_subscribe .txt").html("<span class='icon_subscribe'>구독</span>");
                        $('#btn_subscribe').removeClass("on");
                        $('#my_gudokcnt').text(my_gudokcnt-1);
                        $('.btn_subscribe[data-scrap= "' + sid + '"]').removeClass('on');
                        if ( $('.count_subscribe[data-scrap= "' + sid + '"]').length > 0 )
                        {
                            var thisCnt = parseInt($('.count_subscribe[data-scrap= "' + sid + '"]').html()) ;
                            $('.count_subscribe[data-scrap= "' + sid + '"]').html(thisCnt-1) ;
                        }
                    }
                    else if (result == 'update')
                    {
                        $("#subscribe_toast .txt").html("<span class='tit'>수정 되었습니다</span>");
                    }
                    else if (result == 'duplicate')
                    {
                        $("#subscribe_toast .txt").html("<span class='tit'>이미 저장 되었습니다</span>");
                        $(".subscribe_tit .subscribe_box > div").last().css( "display", "none" );
                    }
                    else if (result == 'found')
                    {
                        $('.btn_subscribe[data-scrap= "' + sid + '"]').addClass('on');
                    }
                    else if (result == 'full')
                    {
                        $("#subscribe_toast .txt").html("<span class='tit'>구독 수를 초과했습니다 <br> 삭제 후 구독 해주세요</span>");
                        $(".subscribe_tit .subscribe_box > div").last().css( "display", "none" );
                    }

                    //ga
                    if ( result == 'insert' )
                    {
                        var action = "" ;
                        var label = "" ;
                        if ( stype == 'keyword' )
                        {
                            if ( position == '' || position == 'mypage' )
                            {
                                action = 'complete : subscribe btn' ;
                                label = stype + '_' + ga_sname ;
                            }
                        }
                        else
                        {
                            if (stype == 'reporter') sname = ga_sname ;

                            if ( position == '' || position == 'mypage' )
                            {
                                action = 'complete : subscribe btn' ;
                                label = stype + '_' + sname ;
                            }
                            else if ( position == 'alarm_msg' )
                            {
                                action = 'complete: encourage subscribe' ;
                                label = stype + '_' + sname ;
                            }
                        }

                        //ga-ua
                        if ( action != "" && label != "" )
                        {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                'event' : 'subscription',
                                'eventCategory' : 'subscribe',
                                'eventAction' : action,
                                'eventLabel' : label
                            });
                        }

                        //ga4
                        if ( gtm_sname != "" && gtm_type != "" )
                        {
                            let eventObj = {};
                            eventObj = {
                                event_name : 'subscribe_event',
                                ep_button_name : gtm_sname,
                                ep_button_area : '구독하기',
                                ep_button_category : '구독하기',
                                ep_subscribe_type : gtm_type,
                                ep_subscribe_name : gtm_sname
                            }
                            gabuilder.GAEventOBJ(eventObj) ;
                        }
                    }
                }
            }
            if (m != 'select' && m != 'myinfo' && m != 'myscrap')
            {
                $('#subscribe_toast').fadeIn(300).delay(1300).fadeOut(300);
            }
        }
    });

    return false;
}



function getMyscrap()
{
    var login_check = "" ;

    if (login_check == true )
    {
        scrap('myscrap');
    }
    else if ( $('.logout em').length > 0 )
    {
        // pc 메인
        scrap('myscrap');
    }

    return false;
}