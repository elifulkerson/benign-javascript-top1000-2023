$( document ).ready( function() {

    var page_title = $(document).find("title").text();

    gtmBannerOpen(page_title) ;

    $('#section_schedule .schedule_top .tit, #section_schedule .btn_toggle').click(function () {
        var obj = $('#section_schedule .schedule_cont');
        if (obj.hasClass('open')) 
        {
            $('.schedule_top .tit').removeAttr('data-evnt-ctg');
            $('.schedule_top .tit').removeAttr('data-evnt-act');
            $('.schedule_top .tit').removeAttr('data-event-lbl');

            $('#section_schedule .btn_toggle').removeAttr('data-evnt-ctg');
            $('#section_schedule .btn_toggle').removeAttr('data-evnt-act');
            $('#section_schedule .btn_toggle').removeAttr('data-event-lbl');

            let eventObj = {};
            eventObj = { 
                event_name : 'click_event',
                ep_button_name : '배너 열기',
                ep_button_area : '디지털 콘텐츠 배너',
                ep_button_category : '공통'
            }
            gabuilder.GAEventOBJ(eventObj) ;
        }
        else 
        {
            gtmBannerOpen(page_title) ;
        }
    });
});
document.write(" <div id='section_schedule'> ");
document.write(" <div class='schedule_cont'> ");
document.write(" <div class='schedule_top'> ");
document.write(" <strong class='tit'>동아일보에서만 볼 수 있는 ‘오늘의 콘텐츠’를 만나보세요!</strong> ");
document.write(" <a href='https://www.donga.com/weeklyschedule' data-evnt-ctg='weekly_schedule' data-evnt-act='click: banner_schedule_btn' data-evnt-lbl='banner_schedule_btn' data-event_name=\'click_event\' data-ep_button_name=\'디지털콘텐츠 주간 편성표 보기\' data-ep_button_area=\'디지털콘텐츠 배너\' data-ep_button_category=\'공통\'>디지털콘텐츠 주간 편성표 보기</a> ");
document.write(" </div> ");
document.write(" <div id='schedule_slide' class='schedule_slide'> ");
document.write(" <div id='schedule_scroll' class='slide_wrap'> ");
document.write(" <ul class='schedule_list'> ");
document.write(" <li    id='time_07'><a href='https://www.donga.com/news/Newsletter?p0=1&m=view&ymd=20231023' data-evnt-ctg='weekly_schedule' data-evnt-act='click: banner_article' data-evnt-lbl='광화문 7:30'  data-event_name=\'click_event\' data-ep_button_name=\'광화문 7:30\' data-ep_button_area=\'디지털콘텐츠 배너\' data-ep_button_category=\'공통\'><span class='tit'>광화문 7:30</span><span class='thumb'><img src='https://dimg.donga.com/a/180/100/95/1/carriage/NEWS/content/NEWS/weeklyschedule/2023/01/30/16750541500.jpg' alt='광화문 7:30'><span class='time'>7:30 <em>am</em></span></span><span class='txt'>사우디 첫 국빈 방문 나선 윤 대통령</span></a></li><li    id='time_09'><a href='https://www.donga.com/news/Newsletter?m=list&p0=70020000000285' data-evnt-ctg='weekly_schedule' data-evnt-act='click: banner_article' data-evnt-lbl='정미경의 이런영어 저런미국'  data-event_name=\'click_event\' data-ep_button_name=\'정미경의 이런영어 저런미국\' data-ep_button_area=\'디지털콘텐츠 배너\' data-ep_button_category=\'공통\'><span class='tit'>정미경의 이런영어 저런미국</span><span class='thumb'><img src='https://dimg.donga.com/a/180/100/95/1/carriage/NEWS/content/NEWS/weeklyschedule/2023/01/30/16750537660.jpg' alt='정미경의 이런영어 저런미국'><span class='time'>9:00 <em>am</em></span></span><span class='txt'>영어로 확인하는 시사, 시사로 배우는 영어</span></a></li><li    id='time_12'><a href='https://www.donga.com/news/It/article/all/20231022/121786926/1' data-evnt-ctg='weekly_schedule' data-evnt-act='click: banner_article' data-evnt-lbl='이럴땐 이렇게!'  data-event_name=\'click_event\' data-ep_button_name=\'이럴땐 이렇게!\' data-ep_button_area=\'디지털콘텐츠 배너\' data-ep_button_category=\'공통\'><span class='tit'>이럴땐 이렇게!</span><span class='thumb'><img src='https://dimg.donga.com/a/180/100/95/1/carriage/NEWS/content/NEWS/weeklyschedule/2023/03/15/16788622370.jpg' alt='이럴땐 이렇게!'><span class='time'>12:00 <em>pm</em></span></span><span class='txt'>방금 TV에서 나온 노래 제목이 궁금하면?[이럴땐 이렇게!]</span></a></li><li    id='time_14'><a href='https://www.donga.com/news/Politics/article/all/20231023/121795236/1' data-evnt-ctg='weekly_schedule' data-evnt-act='click: banner_article' data-evnt-lbl='김지현의 정치언락'  data-event_name=\'click_event\' data-ep_button_name=\'김지현의 정치언락\' data-ep_button_area=\'디지털콘텐츠 배너\' data-ep_button_category=\'공통\'><span class='tit'>김지현의 정치언락</span><span class='thumb'><img src='https://dimg.donga.com/a/180/100/95/1/carriage/NEWS/content/NEWS/weeklyschedule/2023/01/30/16750444510.jpg' alt='김지현의 정치언락'><span class='time'>2:00 <em>pm</em></span></span><span class='txt'>아직도 ‘이재명 법카’가 별 문제 아니라는 민주당[김지현의 정치언락]</span></a></li> ");
document.write(" </ul> ");
document.write(" </div> ");
document.write(" <button type='button' class='scroll_prev'>이전</button> ");
document.write(" <button type='button' class='scroll_next'>다음</button> ");
document.write(" </div> ");
document.write(" <button type='button' class='btn_toggle'><span>펼쳐보기/닫기</span></button> ");
document.write(" </div> ");
document.write(" </div> ");
if($("#time_"+14).hasClass("view") !== true) 
{
    $("#time_"+14).first().addClass("view");
}        function gtmBannerOpen(page_title)
        {
            $('.schedule_top .tit').attr('data-evnt-ctg', 'weekly_schedule');
            $('.schedule_top .tit').attr('data-evnt-act', 'click: banner_open');
            $('.schedule_top .tit').attr('data-event-lbl', page_title);
        
            $('#section_schedule .btn_toggle').attr('data-evnt-ctg', 'weekly_schedule');
            $('#section_schedule .btn_toggle').attr('data-evnt-act', 'click: banner_open');
            $('#section_schedule .btn_toggle').attr('data-event-lbl', page_title);
        }