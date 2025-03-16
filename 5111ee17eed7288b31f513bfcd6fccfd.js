function getDoc88ElementsByName(name) {　　
	var returns = document.getElementsByName(name);　　
	if (returns.length > 0) return returns;　　returns = new Array();　　
	var e = document.getElementsByTagName('div');
	for (i = 0; i < e.length; i++) {　　
		if (e[i].getAttribute("name") == name) {　　returns[returns.length] = e[i];　　
		}　　
	}　　
	return returns;
}

function deleteFriend(friend_id, type) {
	if (confirm("确认删除吗?")) {
		$.ajax({
			url: '/uc/usr_friend.php',
			type: 'get',
			dataType: 'json',
			//json
			data: 'act=deleteFriend&friend_id=' + friend_id,
			success: function(msg) {
				if (msg.stateLogined == 0) {
					DOC88Window.win({
						message: '/js/home/login_init.html?act=window_login&actMethod=addFriend&',
						width: 600,
						height: 200,
						title: '',
						iframe: true
					});
					return;
				}
				if (msg.stateLogined == 1) {
					alert("删除成功!");
					getFriendsContent("/uc/usr_friend.php?act=list&mid=<tpl>$member_info.member_id</tpl>&type=" + type);
				}
			}
		});
		return;
	}
}

//AJAX获得信息

function getFriendsContent(address) {
	//alert(address);
	//showText = "加载中...";
	$(".friends").html('<div style="padding-left:100px; padding-top:40px; text-align:middle"><img src="/skin/blue/images/loading.gif" style="vertical-align:middle"/><span style="vertical-align:middle" class="moreread">&nbsp;&nbsp;正在加载关注列表,请稍候...</span></div>');
	$.ajax({
		url: address,
		dataType: "html",
		// ifModified:true,   使用这个属性firefox会有问题，无法成功响应
		//beforeSubmit:  showLoading(showText),   // 提交之前执行的方法
		success: function(msg) {
			$(".friends").html(msg);
			//setDocImg('<tpl>$siteurl_thumbpng</tpl>');
		}
	});
}


//AJAX获得信息

function getAjaxContent(address, ShowDiv) {

	showText = "加载中...";
	$.ajax({
		url: address,
		dataType: "javascript",
		// ifModified:true,   使用这个属性firefox会有问题，无法成功响应
		beforeSubmit: showLoading(showText),
		// 提交之前执行的方法
		success: function(msg) {
			$("#" + ShowDiv).html(msg);
			//$("#" + ShowDiv).css("display","block");
			//alert(msg);
			hideLoading();
		}
	});
}





// 回复
$(document).ready(function() {
	$(".formbox .itosay").click(function(e) {
		e ? e.stopPropagation() : event.cancelBubble = true;
	});
	$(".formbox .itosay").click(function() {
		$(".count").text("0");
		$("textarea").val("");
		$(this).hide();
		$(this).parent().find("form").show(200);
		$(this).parent().find("textarea").focus();
	});

	$(".comment1").click(function() {
		return false;
	});

	/**
      $(document).click(function() {
          $(".count").text("0");
          $("textarea").val("");
          $(".formbox form").hide(300);
          $(".formbox form").parent().find(".itosay").show(200);
      });
		***/

});

function toReply(p_id, name, message_id, re_member_id) {
	var count = name.length + 3;
	$(".count").text(count);
	$("#text_" + p_id).val("");
	$("#pid_" + p_id).attr("value", message_id);
	$("#re_member_id_" + p_id).attr("value", re_member_id);
	$("#re_name_" + p_id).attr("value", name);
	$("#say_" + p_id).hide();
	$(".formbox .itosay").parent().find("#form_" + p_id).show(300);
	$("#text_" + p_id).val("回复" + name + "：");
	$('html,body').animate({
		scrollTop: $("#text_" + p_id).offset().top - 400
	},
	500);
	$("#text_" + p_id).focus();
}


function getCookie(name)
{
	var cValue = "";
	var cookies = document.cookie.split('; ');
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			if (parts[0]== name) {
				if(parts.length>1)
				{
					cValue =  unescape(parts[1]);
				}
			}
		}
	return cValue;
}
function setCookie(name,value,objHours)
{
	delCookie(name);
	var name = escape(name);
    var value = escape(value);
	path = "/";
    path = path == "" ? "" : ";path=" + path;
	
	if(objHours > 0){  
        var date = new Date();
        var ms = objHours*3600*1000;
        date.setTime(date.getTime() + ms);
		document.cookie = name + "=" + value  + path+"; expires=" + date.toGMTString();
   }
   else
   {
	   document.cookie = name + "=" + value  + path;
   } 
}

function delCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie= name + "=;expires="+exp.toGMTString();
}

//  //编辑文档关闭
//  	$(".bookshow3 li .editlayout .btncss2").click(function(){
//		alert("1");
//		$(".bookshow3 li .bookimg,.bookdoc,.textedit").show();
//		$(".bookshow3 li .bookshow3 .editlayout").hide();
//	});
//  
//	// 关闭编辑文档
//	$(".editlayout .edit-table .btncss2").click(function(){
//		alert("1");
////		$(".bookimg,.bookdoc,.textedit").show();
////		$(".editlayout").hide();
//	});
