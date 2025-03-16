var url = "https://uc.chinaz.com";
$(function () {
    xrLoginHtml();
	var ucCookie = getCookie("ucvalidate");
    if (ucCookie === null || ucCookie === "") {
        delCookie("chinaz_zxuser");
    }
    var ticket = getCookie("chinaz_zxuser");
    if (ticket === null || ticket === "") {
        $.ajax({
            type: "get",
            url: url + "/api/open/checklogin",
            data: { f: "news", p: "pc" },
            xhrFields: {
                withCredentials: true
            },
            dataType:"JSON",
            success: function (msg) {
                if (msg.code === 0) {
                    setCookie("chinaz_zxuser", msg.data.ticket);
                    GetUserInfo(msg.data.ticket);
                }
                else {
                    let html = '<div class="login-div">  <a href="javascript:void(0);" onclick="OpenLogin()" class="login-btn login-before">[登录/注册]</a><div class="user-infor"></div>'
                    $("#chinaz_topbar").html(html);

                }
            },
            error: function () {
            }
        });
    }
    else {
        GetUserInfo(ticket);
    }

    /**
     * iframe登录需要监听子页面返回
     */
    // 监听前判断只能调用一次
    // message只需触发一次，调用多次会多次返回结果
    window.addEventListener('message', function (event) {
        var type = event.data.type;
        var data = event.data.data;

        // 判断反馈类型
        switch (type) {
            case 'CLOSE_LOGIN': // 关闭登录，自行处理，关闭或删除iframe就好
                closeLoginPop();
                break;
            case 'SUCCESS_LOGIN': // 成功登录，返回ticket，自行处理，但也需要关闭或删除iframe
                setCookie("chinaz_zxuser", data.ticket);
                GetUserInfo(data.ticket);
                closeLoginPop();
                break;
            case 'REPEAT_LOGIN': // 重复登录，用户在其他栏目、平台、页面登录时触发
                // 无返回参数，可以自行刷新页面或其他处理
                location.reload();
                break;
            case 'CLIENT_JUMP': // 客户端调整连接（不是客户端调用可以删除）
                console.log('需要客户端来跳转的连接：', data);
                break;
        }
    }, false);

});

function OpenLogin() {
    $("#my-login").attr('src', 'https://uc.chinaz.com/?t=2&p=pc&f=news&r=https://www.chinaz.com&i=1&o=1');
    $(".com-login-box").show();
}

// 添加登录弹窗
function xrLoginHtml() {
    let ifmBoxHtml = '<div class="com-login-box">';
    ifmBoxHtml += ' <iframe  id="my-login" scrolling="no" frameborder="0" src=""></iframe>'
    ifmBoxHtml += '</div>'
    $("body").append(ifmBoxHtml)
}

function closeLoginPop() {
    $(".com-login-box").hide()
    $("#my-login").attr('src', '')
}

function GetUserInfo(ticket) {
    $.ajax({
        url: 'https://comment.chinaz.com/api/Login/GetUserInfo',
        type: 'POST',
        dataType: 'JSON',
        data: "ticket=" + ticket,
	    xhrFields: {
            withCredentials: true
        },
        success: function (msg) {
            if (msg.code === 0) {
				let html = ' <div class="userbar user-infor" style="display: block;">'
				html += ' <a class="username item-expand" href="https://uc.chinaz.com/user/mine" id="top_link_center" target="_blank"><span>用户中心</span><i class="iconfont icon-xiangxia is-rotate"></i></a>'
				html += '<div class="dropdownmenu-wrap menu-setting" id="settingpopup"><div class="dropdownmenu"><div class="clearfix dropdownmenu-inner"><ul class="menu-setting-list"><li><a href="https://zcm.chinaz.com/user/"target="_blank">Z传媒中心</a></li><li><a href="//my.chinaz.com/ToolMember/Member/Account"target="_blank">工具中心</a></li><li><a href="//my.chinaz.com/ChinazAPI/DataCenter/MyDataApi"target="_blank">API中心</a></li><li><a href="//zj.chinaz.com"target="_blank">SEO中介</a></li><li><a href="https://down.chinaz.com/tougao/manage/1.htm"target="_blank">下载中心</a></li><li><a href="https://topuser.chinaz.com/"target="_blank">排行榜中心</a></li></ul></div></div></div>'
                html += '</div>'
				html += ' <div class="user-infor">'
				html += ' <a href="javascript:void(0);" onclick="loginout(\''+ ticket + '\')" class="logout">退出</a>'
				html += '</div>'
                $("#chinaz_topbar").html(html);
				userMenu()
            }
        }
    });
}


function loginout(ticket) {
    $.ajax({
        url: 'https://comment.chinaz.com/api/Login/LoginOut',
        type: 'POST',
        dataType: 'JSON',
        contentType: 'application/x-www-form-urlencoded',
        data: "ticket=" + ticket,
        success: function (msg) {
            if (msg.code === 0) {
                delCookie("chinaz_zxuser");
                window.location.href = "https://www.chinaz.com";
            }
        }
    });
}

//读取cookies 
function getCookie(cookieName) {
    var cookieContent = '';
    var cookieAry = document.cookie.split("; ");//得到Cookie数组   
    for (var i = 0; i < cookieAry.length; i++) {
        var temp = cookieAry[i].split("=");
        if (temp[0] === cookieName) {
            cookieContent = unescape(temp[1]);
        }
    }
    return cookieContent;
}

//设置cookie值
function setCookie(name, value) {
    //document.cookie.setPath("/");
    var hour = 8 * 29;
    var exp = new Date();
    exp.setTime(exp.getTime() + hour * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";Domain=.chinaz.com;path=/";
}


//删除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";Domain=.chinaz.com;path=/;expires=" + exp.toGMTString();
    }
}

function userMenu(){
	var userbar = $('.userbar');
	userbar.mouseleave(function(){$('.menu-setting').css({"display":"none"})})
	userbar.mouseover(function(){$('.menu-setting').css({"display":"block"})})
	
}
