if(typeof(session_userid) == "undefined"){
	var session_userid = 0;
}
var qrqm_date = '';
var myDate = new Date();
var Year   = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
var Month1 = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
var Month  = Month1;
if(Month1<10) var Month ='0'+Month1;
var day = myDate.getDate();        //获取当前日(1-31)
var now_date = Year+'-'+Month+'-'+day;

function initUrl(result) {
    $('#passport-login').attr('href',result['loginUrl']);
    $('#passport-register').attr('href',result['registerUrl']);
    $('.slog1 a').attr('href',result['loginUrl']);
    
    t_data = {'searchWord':result['searchWord']};
    initUserInfo(t_data);
}

function initUserInfo(data){
    $('.searchWordRecommend').val(data['searchWord']);
    if(data['uid']){
        session_userid = data['uid'];
        $('#special_user_info').show();
        $('#special_Login').hide();
        $('.j-username').text(data['username']);
        $('#messag').attr('href','//www.mama.cn/u/'+data['uid']+'/messagelist/'); //信息
        $('#notice').attr('href','//www.mama.cn/u/'+data['uid']+'/notice/'); //提醒
        $('#messagelist').attr('href','//www.mama.cn/u/'+data['uid']+'/messagelist/'); //消息
        $('#setting_u').attr('href','//www.mama.cn/u/'+data['uid']+'/'); //设置
        $('#profile').attr('href','//www.mama.cn/u/'+data['uid']+'/profile/'); //修改资料
        $('#u_profile').attr('href','//www.mama.cn/u/'+data['uid']+'/profile/'); //个人资料
        $('#u_brand').attr('href','//www.mama.cn/u/'+data['uid']+'/brand/');
        $('#u_tlq').attr('href','//www.mama.cn/u/'+data['uid']+'/age-topic/');
        $('#u_ask').attr('href','//www.mama.cn/u/'+data['uid']+'/question/');
        $('#u_dianping').attr('href','//www.mama.cn/u/'+data['uid']+'/dianping/index/');
        $('#center').attr('href','//www.mama.cn/u/'+data['uid']+'/'); //个人中心
        $('.j-username').attr('href','//www.mama.cn/u/'+data['uid']+'/'); //个人中心
        $('.j-head-a').attr('href','//www.mama.cn/u/'+data['uid']+'/'); //头像链接
        $('#profile_pw').attr('href','//www.mama.cn/u/'+data['uid']+'/profile/password/'); //修改密码
        $('#fav').attr('href','//www.mama.cn/u/'+data['uid']+'/fav/'); //我的收藏
        $('#quan').attr('href','//www.mama.cn/u/'+data['uid']+'/quan/'); //我的话题
        $('#u_publish').attr('href','http://www.mama.cn/u/'+data['uid']+'?tab=declare'); //我的发表
        $('#quan_group').attr('href','//www.mama.cn/u/'+data['uid']+'/quan/group/');
        $('#mamaLogout').attr('href', data['logoutUrl']);
        $('.j-head_image').attr('src', data['avatar']);
        $('.j-pms').text(data['newpm']);
        if (data['newpm'] != "" && data['newpm'] != undefined) {
            $('.j-pms').show();
        }
        if(typeof(cms_page_type) != 'undefined'  &&   cms_page_type == 'mamacn_index' ){
            data['ifset'] =1;
        }
    }
    if(typeof(cms_page_type) != 'undefined'){
        if(cms_page_type == 'art' || cms_page_type == 'list' ){
            right_qrqm_block(data,now_date);
            right_qrqm_ajax(qrqm_date);
        }else if(cms_page_type == 'mamacn_index'){
            mamacn_index(data,now_date);
        }
    }
}

function cklogin(){
    if(typeof(cms_page_type) == 'undefined'){
        var orderdate = myGetCookie('orderdate');
        if(session_userid<1 && orderdate ==''){
            var login_url= '//www.mama.cn/jump.html';
            $('#qrqm_order').attr('href',login_url);
        }
        if(orderdate !=''){
            var in_order_url= '//www.mama.cn/index.php?g=Home&a=Qrqm&d=skip';
            $('#qrqm_order').attr('href',in_order_url);
        }
    }
    return true;
}
function myGetCookie(a) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(a + "=");
        if (c_start != -1) {
            c_start = c_start + a.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length
            }
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return "";
}

$(document).ready(function () {
    var _nav = $("#allNav");
    var _box = $(".ny-fixl");
    var _footer = $(".footerWrap");
    var h = _box.height();
    var ft = _footer.offset().top;
    var end = $(document).height() - _footer.height() - _box.height()-50;
    $(window).scroll(function () {
        var t = _nav.offset().top + _nav.height() - 6;
        if(t+h>ft){
            t = end;
        }
        _box.css("top",t);
    }).trigger("scroll");
    //获取passport 登录和注册
    var myurl='//www.mama.cn/index.php?g=Home&a=Passport&d=getUrl&callback=initUrl&i='+Math.floor(Math.random()*100024);
    $.getScript(myurl);

    $("#special_Login .sLog").hover(
        function(){
            $(this).find("dl").show();
        },
        function(){
            $(this).find("dl").hide();
        }
    );
    $("#special_user_info").hover(
        function(){
            $("#sui_drop").show();
        },
        function(){
            $("#sui_drop").hide();
        }
    );
});
