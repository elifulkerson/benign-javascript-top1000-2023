top_mobile_menu_visible = false;
acc_menu_visible = false;
lin_menu_visible = false;
sup_menu_visible = false;
lset_menu_visible = false;
cont_menu_visible = false;

username_is_valid = false;
email_is_valid = false;
password_is_valid = false;
password2_is_valid = false;
recap_script_loaded	= false;
recap_ok = false;
recap_response = "";
sup_click = false;
upd_click = false;
var comments_html_add_section = "";
comment_pids = new Array();
comment_aids = new Array();
$(document).ready(function(){
	check_menu_count();
	var share_div_list = document.querySelectorAll('div.sharing_toolbox');
	for (i = 0; i < share_div_list.length; i++) {
		share_div = share_div_list[i];
		share_div.innerHTML = '<div class="share_btn share_btn_re" onclick="return Share.reddit(this);"><span class="re_icon"></span></div>';
		share_div.innerHTML = share_div.innerHTML + '<div class="share_btn share_btn_fb" onclick="return Share.facebook(this);"><span class="fb_icon"></span></div>';
		share_div.innerHTML = share_div.innerHTML + '<div class="share_btn share_btn_tw" onclick="return Share.twitter(this);"><span class="tw_icon"></span></div>';
		share_div.innerHTML = share_div.innerHTML + '<div class="share_btn share_btn_vk" onclick="return Share.vkontakte(this);"><span class="vk_icon"></span></div>';
	}
	$('#player_el, .post_player_el').bind('contextmenu',function() { return false; });
	//********CHECK
	$("div.post_control").each(function() {
		if (!supports_html5_storage()) return;
		var post_id = $(this).data('id');
		if (checkRatingItem(post_id,"likes")) {
			$(this).attr("data-like","y").find(".vid_like_blog").removeClass("vid_like_blog").addClass("vid_like_blog_hl");
		}
		if (checkRatingItem(post_id,"orgasm")) {
			$(this).attr("data-orgasm","y").find(".vid_orgasm_blog").removeClass("vid_orgasm_blog").addClass("vid_orgasm_blog_hl");
		}
	});
	//********LIKES
	$(document).on('click','.vid_like_blog', function(e) {
		var datalike = $(this).parent().attr("data-like");
		var post_id = $(this).parent().data('id');
		var author_id = $(this).parent().data('aid');
		if (checkRatingItem(post_id,"likes")) return;
		if (datalike == "n") {
			addRatingItem(post_id,"likes");
			$(this).parent().attr("data-like","y");	
			var likes = sval($(this).html(),1);
			$(this).html(likes).removeClass("vid_like_blog").addClass("vid_like_blog_static");
			$.post("/php/likes.php", {action: "like",post_id:post_id,author_id:author_id}, function(result){
				if (result != "error") {
				}
			});
		}
	});
	//**************ORGASM
	$(document).on('click','.vid_orgasm_blog', function(e) {
		var dataorgasm = $(this).parent().attr("data-orgasm");
		var post_id = $(this).parent().data('id');
		var author_id = $(this).parent().data('aid');
		if (checkRatingItem(post_id,"orgasm")) return;		
		if (dataorgasm == "n") {
			addRatingItem(post_id,"orgasm");
			$(this).parent().attr("data-orgasm","y");
			var orgasm = sval($(this).html(),1);
			var like = sval($(this).parent().find(".vid_like_blog, .vid_like_blog_static").html(),1);
			$(this).parent().find(".vid_like_blog, .vid_like_blog_static").html(like);
			$(this).html(orgasm).removeClass("vid_orgasm_blog").addClass("vid_orgasm_blog_static");
			$.post("/php/likes.php", {action: "orgasm",post_id:post_id,author_id:author_id}, function(result){
				if (result != "error") {
				}
			});
		}
	});	
	//**************COMMENTS
	comments_html_add_section = '<div class="add_comment_div">'
	+ '<div class="comment_user_photo_main"><span style="background-color:#'+usss["author_bg_color"]+';color:#'+usss["author_char_color"]+'" >'+usss["author_char"]+'</span></div>'
	+ '<div class="comment_ta_wrap">'
	+ ' <textarea class="comment_text" placeholder="add your comment..."></textarea>'
	+ '</div>'
	+ '<div class="comment_send_wrap2">'
	+ '	<div class="comment_send_wrap"><span class="blogger_posts">Send</span></div>'
	+ '	<div class="comment_reply_to"><span class="reply_to_name"></span><span class="reply_to_cancel">×</span></div>'
	+ '</div>'
	+ '</div>';
	//run comments
	run_comments();		
	$(".pes_edit_div").each(function() {
		var aid = $(this).data('aid');
		var uid = $('.eaid').data('eaid');
		if (aid == uid) {
			var epr_t = 'Remove Poster';
			var epr_c = 'removeposter';
			if ($(this).data('poster') == 'empty') {
				epr_t = 'Add Poster';
				epr_c = 'addposter';
			}
			var eprr_el = "";
			if ($(this).data('rma') == 'rm') eprr_el = "<span class='eps rmpost' data-action='rm'>Delete post</span>";
			if ($(this).data('rma') == 'rs') eprr_el = "<span class='eps rmpost' data-action='rs'>Restore post</span><span class='eps rmpost' data-action='rm'>DELETE post</span>";
			var ep = "<div class='pedcd'><span id='editpost' class='eps'>Edit</span><span id='editposter' class='eps "+epr_c+"'>"+epr_t+"</span><b style='color:#999;'> |</b>"+eprr_el+"</div>";
			ep+= "<input type='file' id='editpost_add_poster' accept='image/jpeg, image/png'>";
			$('.pes_edit_div').append(ep);
		}
	});
	//**************NOTI
	initNoti();
	//**************SUBS
	if (usss['lin'] == "yes") {
		checkSubList(usss['id']);
	} else {
		checkSubListNL();
	}
	getvsrc();
	var small_for_blog_prev_el;
	var small_for_blog_count = 0;
	$(".post_el_wrap").each(function() {
		if ($(this).hasClass('small_for_blog')) {
			small_for_blog_count++;
		} else {
			small_for_blog_count=0;
		}
		if (small_for_blog_count == 1) small_for_blog_prev_el = this;
		if (small_for_blog_count == 2) {
			$(small_for_blog_prev_el).closest(".post_el_small").addClass('post_el_small_small');
			$(this).closest(".post_el_small").addClass('post_el_small_small');
			small_for_blog_prev_el = null;
			small_for_blog_count=0;
		} 
	});	
	//Emoji
	var emoji = ["anal","artporn","bdsm","bigass","bigtits","black","blowjob","cum","creampie","defloration","double",
				"drunk","footfetish","gangbang","hairy","hardcore","incest","kiss","lesbian","lingerie","milf","orgy",
				"party","public","pussy","rimjob","roleplay","solo","submissive","teens","threesome","titjob","porn"];
	//----------
	if ($('.emoji_area').length){
		var emoji_order = ["anal","artporn","milf","teens","threesome","orgy","bigass","bigtits","black","blowjob","double",
						"lesbian","footfetish","gangbang","creampie","hardcore","public","incest","rimjob","drunk","hairy",
						"kiss","lingerie","party","pussy","roleplay","solo","submissive","titjob","porn","cum","defloration","bdsm"];
		var emoji_vals = $(".emoji_area").data('emoji');
		var emoji_size = $(".emoji_area").data('emoji_size');
		var emoji_obj = [];
		var get_post_text = $('textarea.PostEditTA').val();
		emoji.forEach(function(val,index) {
			if (get_post_text.toLowerCase().indexOf(val) > -1) {
				emoji_order.splice(emoji_order.indexOf(val), 1);
				emoji_order.unshift(val);
				console.log(val,index);
			}
		});
		var em_mapped = emoji_vals.map(function(el, i) {
			return { index: emoji[i], value: el };
		});
		em_mapped.sort(function(a, b) {
			return a.value - b.value;
		});
		em_mapped.forEach(function(val) {
			if (val.value > 0) {
				emoji_order.splice(emoji_order.indexOf(val.index), 1);
				emoji_order.unshift(val.index);
			}	
		});
		emoji_order.forEach(function(name) {
			var val = emoji_vals[emoji.indexOf(name)];
			var index = emoji.indexOf(name)+1;
			var link = "//yps.link/emoji/"+emoji_size+"/"+ index +".png";
			var em_o = {name:name, val:val, link:link, index:index};
			emoji_obj.push(em_o);
		});
		$(document).on('click','.vid_emoji_blog', function(e) {
			if ($(".emoji_area").attr('data-loaded') != 0) {
				$(".emoji_area").fadeIn();
				return;
			}	
			emoji_obj.forEach(function(val) {
				var em_val_el = "";
				if (val.val > 0) em_val_el = "<span>"+val.val+"</span>";
				var em_el = "<div class='em_el em_ela' data-index='"+val.index+"' data-status='0'><img src='"+val.link+"' title='"+val.name+"'>"+em_val_el+"<b>"+val.name+"</b></div>";
				$(".emoji_area").append(em_el);
			});
			$(".emoji_area").attr('data-loaded',1).fadeIn();
		});
		$(document).on('click','.em_ela', function(e) {
			if ($(this).attr('data-status') != 0) return;
			var post_id = $(this).closest(".emoji_area").data("post_id");
			var emoji_index = $(this).data("index");
			$.post("/php/likes.php", {action: "emoji", emoji:emoji_index, post_id:post_id}, function(result){
				if (result != "error") {
				}
			});
			$(this).closest(".emoji_area").fadeOut();
			if ($(this).find("span").length) {
				$(this).find("span").html(parseInt($(this).find("span").html())+1);
			} else {
				$(this).append("<span>1</span>");
			}
			$(this).attr('data-status',1);
			$(".vid_emoji_blog").html(parseInt($(".vid_emoji_blog").html())+1);
		});
	}
	$(".emoji_zone").each(function() {
		var emoji_data = $(this).data('emoji');
		var emoji_size = $(this).data('size');
		var em_els = "";
		var counter = 0;
		emoji_data.forEach(function(val) {
			if (counter > 4) return false;
			var link = "//yps.link/emoji/"+emoji_size+"/"+ val.i +".png";
			var em_name = emoji[val.i-1];
			em_els+= "<a class='tdn' href='/"+em_name+".html?em="+val.i+"' title='"+em_name+"'><div class='em_el em_elz' data-index='"+val.i+"'><img width='"+emoji_size+"' height='"+emoji_size+"' src='"+link+"' title='"+em_name+"'><span>"+val.v+"</span></div></a>";
			counter++;
		});
		$(this).prepend(em_els);
	});


	
});




//MENU
$(document).on('click','.top_mobile_menu', function(e) {
	e.stopPropagation();
	if (top_mobile_menu_visible) {
		$('#top_panel_menu').fadeOut();
		top_mobile_menu_visible = false;
	} else {
		$('#top_panel_menu').fadeIn();
		top_mobile_menu_visible = true;
	}
});
$(document).on('click','.account_bar', function(e) {
	e.stopPropagation();
	if (acc_menu_visible) {
		$('.account_sub').fadeOut();
		acc_menu_visible = false;
	} else {
		$('.account_sub').fadeIn();
		acc_menu_visible = true;
	}
});
$(document).on('click','.lin_btn', function(e) {
	lin_modal();
});
$(document).on('click focusin','.addpost_login', function(e) {
	lin_modal();
});
function lin_modal() {
	if (lin_menu_visible) {
		$('.modal_window_bkg').css('display','none');
		$('.login_modal').fadeOut();
		lin_menu_visible = false;
	} else {
		$('.modal_window_bkg').css('display','block');
		$('.login_modal').fadeIn();
		lin_menu_visible = true;
		$("html").css({"overflow": "hidden","position":"fixed"});
		$('#lin_email').focus();
		viewportScalable(false);
	}	
}
$(document).on('click','.sup_btn', function(e) {
	//e.stopPropagation();
	loadRecapScript();
	if (sup_menu_visible) {
		$('.modal_window_bkg').css('display','none');
		$('.signup_modal').fadeOut();
		sup_menu_visible = false;
	} else {
		$('.modal_window_bkg').css('display','block');
		$('.signup_modal').fadeIn();
		sup_menu_visible = true;
		$("html").css({"overflow": "hidden","position":"fixed"});
		$('#sup_uname').focus();
		viewportScalable(false);
	}
});
$(document).on('click','.lset_btn', function(e) {
	//e.stopPropagation();
	if (lset_menu_visible) {
		$('.modal_window_bkg').css('display','none');
		$('.sett_modal').fadeOut();
		lset_menu_visible = false;
	} else {
		$('.modal_window_bkg').css('display','block');
		$('.sett_modal').fadeIn();
		lset_menu_visible = true;
		$("html").css({"overflow": "hidden","position":"fixed"});
		viewportScalable(false);
	}
});
$(document).on('click','.cont_support, .cont_abuse', function(e) {
	//e.stopPropagation();
	$('.contact_header').html("support").attr('data-mode','support');
	if ($(this).hasClass('cont_abuse')) $('.contact_header').html("abuse").attr('data-mode','abuse');
	if (cont_menu_visible) {
		$('.modal_window_bkg').css('display','none');
		$('.contact_modal').fadeOut();
		cont_menu_visible = false;
	} else {
		$('.modal_window_bkg').css('display','block');
		$('.contact_modal').fadeIn();
		cont_menu_visible = true;
		$("html").css({"overflow": "hidden","position":"fixed"});
		viewportScalable(false);
	}
});
$(document).on('click','.donate', function(e) {
	//e.stopPropagation();
	don_uid = $(this).data('uid');
	don_uname = $(this).data('uname');
	$.post("/php/get_donate.php",{uid: don_uid}) 
		.done(function(data) {
			$('.don_name').html(don_uname);
			$('.don_img').html('<img src="https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl='+data+'">');
			$('.don_addr').html(data);
	});
	if (cont_menu_visible) {
		$('.modal_window_bkg').css('display','none');
		$('.donate_modal').fadeOut();
		cont_menu_visible = false;
	} else {
		$('.modal_window_bkg').css('display','block');
		$('.donate_modal').fadeIn();
		cont_menu_visible = true;
		$("html").css({"overflow": "hidden","position":"fixed"});
		viewportScalable(false);
	}
	console.log('cont_menu_visible',cont_menu_visible);
});
$(document).on('click','.modal_close', function(e) {
	$('.modal_window_bkg, .modal_window').css('display','none');
	lin_menu_visible = false;
	sup_menu_visible = false;
	lset_menu_visible = false;
	cont_menu_visible = false;	
	viewportScalable(true);
	$("html").css({"overflow": "auto","position":"relative"});
});
//Contact
/*
var can_contact = true;
$(document).on('click','#modal_cont_btn', function(e) {
	var contact_name = $("#cont_name").val();
	var contact_email = $("#cont_email").val();
	var contact_add = $(".cont_text").val();
	var contact_mode = $('.contact_header').data('mode');
	if (contact_add == "") {can_contact = false; $("#cont_text").css("background-color","red");}
	if (contact_name == "") {can_contact = false; $("#cont_name").css("background-color","red");}
	if (!isValidEmailAddress(contact_email)) {can_contact = false; $(".cont_email").css("background-color","red");}
	if (!can_contact) return;
	$.post("/php/mail.php",{contact_name: contact_name,contact_email: contact_email,contact_mode: contact_mode,contact_add: contact_add}) 
		.done(function(data) {
			$('.modal_close').click();
		});
});
*/
// Login/Sign/Logout/Settings
$(document).on('click','#modal_lin_btn', function(e) {
	var email = $('#lin_email').val();
	var password = $('#lin_pswd').val();		
		$.post("/php/login.php", {password:password,email:email}, function(result){
			console.log("|"+result+"|");
			if (result == "ok") {
				var url = window.location.host+window.location.pathname;
				window.location.href = "//"+url;
			} else {
				$('#lin_email, #lin_pswd').css('background-color','#FFA7A7');
			}
		});
});
$(document).on('click','.lout_btn', function(e) {
e.stopPropagation(); 
	$(".account_sub").fadeOut();	
	$.post("/php/logout.php")
	.done(function(data) {
		var url = window.location.host+window.location.pathname;
		window.location.href = "//"+url;
	});
});
$(document).on('click','#modal_sup_btn', function(e) {
	if (sup_click) return;
	var username = $("#sup_uname").val();
	var password = $("#sup_pswd").val();
	var password2 = $("#sup_pswd2").val();
	var email = $("#sup_email").val();
	if (username_is_valid && password_is_valid && password2_is_valid && email_is_valid) {
		sup_click = true;
		$('.modal_window input').css({'pointer-events':'none','background-color':'#333'});
		$.post("/php/signup.php", {username: username, password:password,password2:password2,email:email,recap_response:recap_response}, function(result){
			var url = window.location.host+window.location.pathname;
			window.location.href = "//"+url;
		});
	}
});
$(document).on('click','#modal_upd_btn', function(e) {
	if (upd_click) return;
	var changes = new Object();
	if ($("#sett_uname").val()) username = $("#sett_uname").val(); else username = "";
	if ($("#sett_pswd").val()) password = $("#sett_pswd").val(); else password = "";
	if ($("#sett_pswd2").val()) password2 = $(sett_pswd2).val(); else password2 = "";
	if ($("#sett_uchar").val()) sett_uchar = $("#sett_uchar").val(); else sett_uchar = "";
	if ($("#sett_ucolor").val()) sett_ucolor = $(sett_ucolor).val(); else sett_ucolor = "";
	if ($("#sett_ubgc").val()) sett_ubgc = $("#sett_ubgc").val(); else sett_ubgc = "";
	if ($("#sett_donate").val()) sett_donate = $("#sett_donate").val(); else sett_donate = "";
	
	if (username != "" && !username_is_valid) return;
	if (password != "" && !password_is_valid) return;
	if (password2 != "" && !password2_is_valid) return;
	if (sett_uchar != "" && !isValidChar(sett_uchar)) return;
	if (sett_ucolor != "" && sett_ucolor.length != 7) return;
	if (sett_ubgc != "" && sett_ubgc.length != 7) return;
	if (sett_donate != "" && sett_donate.length < 5) return;
	
	if (username != "" || password != "" || password2 != "" || sett_uchar != "" || sett_ucolor != "" || sett_ubgc != "" || sett_donate != "" && password==password2){
		upd_click = true;
		$('.modal_window input').css({'pointer-events':'none','background-color':'#333'});
		$.post("/php/settings.php", {username: username, password:password,password2:password2,sett_uchar:sett_uchar,sett_ucolor:sett_ucolor,sett_ubgc:sett_ubgc,sett_donate:sett_donate}, function(result){
			var url = window.location.host+window.location.pathname;
			window.location.href = "//"+url;
		});
	}	
});
//SCROLL TO TOP
function viewportScalable(scalable){
	if (scalable) {
		viewport = document.querySelector("meta[name=viewport]");
		viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');	
	} else {
		viewport = document.querySelector("meta[name=viewport]");
		viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');	
	}
}
		$(function() {
			$(window).scroll(function() {
				if($(this).scrollTop() != 0) {
					$('#scroll_top_wrap').fadeIn();
				} else {
					$('#scroll_top_wrap').fadeOut();
				}
				if($(this).scrollTop() >= 50) {
					$(".addMobMenu").addClass('addMobMenuFixed');
					if ($(".addMobMenu").length) $("#top_panel_hsa").css('margin-bottom','45px');
				} else {
					$(".addMobMenu").removeClass('addMobMenuFixed');
					if ($(".addMobMenu").length) $("#top_panel_hsa").css('margin-bottom','0px');
				}
			});
			$('#scroll_top_wrap').click(function() {
				$('body,html').animate({scrollTop:0},800);
			});
		});
// HVP player_icon vid_container
$(document).on('playing','.hvp_player', function(e) { 
	console.log('playing',e,this);
	/*
	if ($(this).attr('data-hvpp') == 1) return;
	$(this).fadeIn();
	$(this).attr('data-hvpp','1');
	*/
});
$(document).on('mouseover','.player_icon', function(e) {
	if (!$(this).closest('div.vid_container').find('video.hvp_player').length) return;
	if ($(this).attr("data-hvp") == "1") {
		$(this).closest('div.vid_container').find('video.hvp_player').fadeIn();
	} else {
		$(this).closest('div.vid_container').find('video.hvp_player')[0].play();
		$(this).attr('data-hvp','1');
	}
});
$(document).on('mouseout','.player_icon', function(e) {
	if (!$(this).closest('div.vid_container').find('video.hvp_player').length) return;
	if ($(this).attr("data-hvp") == "0") return;
	$(this).closest('div.vid_container').find('video.hvp_player').fadeOut();
});

function check_menu_count(){
	$(".menu_count").each(function() {
		var count = parseInt($(this).html());
		if (count > 0) {
			$(this).css('display','block');
		} else {
			$(this).css('display','none');		
		}
	});
}
//Share
Share = {
    vkontakte: function(e) {
		if (Share.chk_url(e)) uri = encodeURIComponent(Share.chk_url(e)); else uri = encodeURIComponent(window.location.href);
        url  = 'http://vk.com/share.php?';
        url += 'url='          + uri;
        Share.popup(url);
    },
    facebook: function(e) {
		if (Share.chk_url(e)) uri = encodeURIComponent(Share.chk_url(e)); else uri = encodeURIComponent(window.location.href);
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[url]='       + uri;
        Share.popup(url);
    },
    twitter: function(e) {
		if (Share.chk_url(e)) uri = encodeURIComponent(Share.chk_url(e)); else uri = encodeURIComponent(window.location.href);
		if (Share.chk_tit(e)) tit = encodeURIComponent(Share.chk_tit(e)); else tit = encodeURIComponent(document.getElementsByTagName("title")[0].innerHTML);
        url  = 'http://twitter.com/share?';
        url += 'text='      + tit;
        url += '&url='      + uri;
        url += '&counturl=' + uri;
        Share.popup(url);
    },
    reddit: function(e) {
		if (Share.chk_url(e)) uri = encodeURIComponent(Share.chk_url(e)); else uri = encodeURIComponent(window.location.href);
		if (Share.chk_tit(e)) tit = encodeURIComponent(Share.chk_tit(e)); else tit = encodeURIComponent(document.getElementsByTagName("title")[0].innerHTML);
        url  = 'http://www.reddit.com/submit?';
        url += 'url='      + uri;
        url += '&title='   + tit;
        Share.popup(url);
    },
    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    },
    chk_url: function(e) {
        if (e.parentNode.hasAttribute("data-url")){
			return e.parentNode.getAttribute("data-url");
		} else {
			return false;
		}
    },
    chk_tit: function(e) {
        if (e.parentNode.hasAttribute("data-title")){
			return e.parentNode.getAttribute("data-title");
		} else {
			return false;
		}
    }	
};
//valid check
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
}
function isValidPassword(password) {
	var pattern = new RegExp(/^[a-zA-Z0-9\-!@#$%&*?]*$/);
	return pattern.test(password);
}
function isValidText(text) {
	var pattern = new RegExp(/^[a-zA-Z0-9\-!@#$%\^&*()?\[\]\.\, \/+_={}:;\"\'|]*$/gi);
	return pattern.test(text);
}
function isValidChar(chr) {
	var pattern = new RegExp(/[A-Z0-9]/);
	return pattern.test(chr);
}
function HEXsanitize(val) {
	val = val.toUpperCase();
	return val.replace(/[^0-9A-F]/g,'');
}

	$(document).on('keyup','#sup_uname', function(e) {
		var username = $("#sup_uname").val();
			username = username.replace(/[^a-z0-9]/gi,'');
			$("#sup_uname").val(username);
		if (username.length >= 3) {
			$.post("/php/uniqcheck.php", {field: "username", value: username}, function(result){
				if (result == "0") {
					$("#sup_uname").css('background-color','#DBF4DC');
					username_is_valid = true;
				} else {
					$("#sup_uname").css('background-color','#FFBABA');
					username_is_valid = false;
				}
			});
		} else {
			$("#sup_uname").css('background-color','#FFBABA');
			username_is_valid = false;
		}
	});
	$(document).on('keyup','#sup_email', function(e) {
		var email = $("#sup_email").val();
		if (email != "") {
			if(isValidEmailAddress(email)) {
				$.post("/php/uniqcheck.php", {field: "email", value: email}, function(result){
					if (result == "0") {
						$("#sup_email").css('background-color','#DBF4DC');
						email_is_valid = true;
					} else {
						$("#sup_email").css('background-color','#FFBABA');
						email_is_valid = false;
					}
				});
			} else {
				$(this).css('background-color','#FFBABA');
				email_is_valid = false;
			}
		} else {
			$(this).css("background-color","white"); 
			email_is_valid = false;
		}
	});	
	$(document).on('keyup','#sup_pswd', function(e) {	
		var password = $("#sup_pswd").val();
		if (password.length >= 6 && isValidPassword(password)) {
			$("#sup_pswd").css('background-color','#DBF4DC');
			password_is_valid = true;
		} else {
			$("#sup_pswd").css('background-color','#FFBABA');
			password_is_valid = false;
		}
	});	
	$(document).on('keyup','#sup_pswd2', function(e) {	
		var password = $("#sup_pswd").val();
		var password2 = $("#sup_pswd2").val();
		if (password.length >= 6 && isValidPassword(password2)) {
			if (password != password2) {
				$("#sup_pswd2").css('background-color','#FFBABA');
				password2_is_valid = false;
			} else {
				$("#sup_pswd2").css('background-color','#DBF4DC');
				password2_is_valid = true;
			}
		} else {
			$("#sup_pswd").css('background-color','#FFBABA');
			password2_is_valid = false;
		}
	});
	$(document).on('keyup','#sett_uchar', function(e) {		
		var val = $("#sett_uchar").val();
		val = val.toUpperCase();
		$("#sett_uchar").val(val);
		if ((val.length == 1 && isValidChar(val)) || val.length == 0) {
			if (val.length == 1) $('.account_bar_sett > .acc_char').html(val);
			if (val.length == 0) $('.account_bar_sett > .acc_char').html($('.account_bar > .acc_char').html());
			$(this).css('background-color','#DBF4DC');
		} else {
			$(this).css('background-color','#FFBABA');
		}
	});
	$(document).on('keyup','#sett_ucolor', function(e) {		
		var val = $("#sett_ucolor").val();
		if (val.length == 0) {$(this).css('background-color','#FFF'); return;}		
		val = '#'+HEXsanitize(val);
		$("#sett_ucolor").val(val);
		if (val.length == 7) {
			$('.account_bar_sett > .acc_char').css("color",val);
			$(this).css('background-color','#DBF4DC');
		} else {
			$(this).css('background-color','#FFBABA');
		}
	});
	$(document).on('keyup','#sett_ubgc', function(e) {			
		var val = $("#sett_ubgc").val();
		if (val.length == 0) {$(this).css('background-color','#FFF'); return;}
		val = '#'+HEXsanitize(val);
		$("#sett_ubgc").val(val);
		if (val.length == 7) {
			$('.account_bar_sett > .acc_char').css("background-color",val);
			$(this).css('background-color','#DBF4DC');
		} else {
			$(this).css('background-color','#FFBABA');
		}
	});
	$(document).on('keyup','#sett_uname', function(e) {	
		var username = $("#sett_uname").val();
			username = username.replace(/[^a-z0-9]/gi,'');
			$("#sett_uname").val(username);
		if (username.length >= 3) {
			$.post("/php/uniqcheck.php", {field: "username", value: username}, function(result){
				if (result == "0") {
					$("#sett_uname").css('background-color','#DBF4DC');
					username_is_valid = true;
				} else {
					$("#sett_uname").css('background-color','#FFBABA');
					username_is_valid = false;
				}
			});
		} else if (username.length == 0) {
			$("#sett_uname").css('background-color','#FFF');
		} else {
			$("#sett_uname").css('background-color','#FFBABA');
			username_is_valid = false;
		}
	});
	$(document).on('keyup','#sett_pswd', function(e) {		
		var password = $("#sett_pswd").val();
		if (password.length >= 6 && isValidPassword(password)) {
			$("#sett_pswd").css('background-color','#DBF4DC');
			password_is_valid = true;
		} else if (password.length == 0) {
			$("#sett_pswd").css('background-color','#FFF');
		} else {
			$("#sett_pswd").css('background-color','#FFBABA');
			password_is_valid = false;
		}
	});	
	$(document).on('keyup','#sett_pswd2', function(e) {			
		var password = $("#sett_pswd2").val();
		var password2 = $("#sett_pswd2").val();
		if (password.length >= 6 && isValidPassword(password2)) {
			if (password != password2) {
				$("#sett_pswd2").css('background-color','#FFBABA');
				password2_is_valid = false;
			} else {
				$("#sett_pswd2").css('background-color','#DBF4DC');
				password2_is_valid = true;
			}
		} else if (password2.length == 0) {
			$("#sett_pswd").css('background-color','#FFF');
		} else {
			$("#sett_pswd2").css('background-color','#FFBABA');
			password2_is_valid = false;
		}
	});	
	onloadRecap = function() {
		grecaptcha.render("g-recaptcha", {"sitekey": "6LfC-5wUAAAAAOTPkb6pVHH_1Glp3fO3o2vmavhJ", "theme": "light","size":"normal",'callback' : correctCaptcha});
	};
	correctCaptcha = function(response) {
		recap_ok = true;
		recap_response = response;
	};
	function loadRecapScript(){
		if (!recap_script_loaded) {
			var recap_script = document.createElement('script');
			recap_script.setAttribute('src','https://www.google.com/recaptcha/api.js?onload=onloadRecap&render=explicit');
			recap_script.setAttribute('async',"");
			recap_script.setAttribute('defer',"");
			document.head.appendChild(recap_script);
			recap_script_loaded	= true;
		}
	}
	onloadRecapS = function() {
		grecaptcha.render("g-recaptchaS", {"sitekey": "6LfC-5wUAAAAAOTPkb6pVHH_1Glp3fO3o2vmavhJ", "theme": "light","size":"normal",'callback' : correctCaptchaS});
	};
	correctCaptchaS = function(response) {
		recap_ok = true;
		recap_response = response;
	};
	function loadRecapScriptS(){
		if (!recap_script_loaded) {
			var recap_script = document.createElement('script');
			recap_script.setAttribute('src','https://www.google.com/recaptcha/api.js?onload=onloadRecapS&render=explicit');
			recap_script.setAttribute('async',"");
			recap_script.setAttribute('defer',"");
			document.head.appendChild(recap_script);
			recap_script_loaded	= true;
		}
	}	
//UPLOAD
var wantLoadVideoFile = false;
var can_blog_send = true;
var vidCoverTime = 0;
var wantLoadCombo = false;
var blog_server = "s14";
var cs_server = "https://cs.trafficdeposit.com";
var global_post_uniq_id = "";
var global_uid = "";
$(document).on('click','.addpost_text', function(e) {
    $(this).css('height','96px');
	$('.addpost_control').css({'height':'48px', 'overflow': 'visible'});
	if (usss['rec'] == 1) loadRecapScriptS(); else recap_ok = true;
});
$(document).on('change keyup paste','.addpost_text', function(e) {
	checkPostText($('.addpost_text').val().trim());
});
$(document).on('click','.attach_video', function(e) {
	if(wantLoadVideoFile) return;
	$('#addpost_vid_file').click();
});
$(document).on('change','#addpost_vid_file', function(e) {
	handleFileSelectVid(e);
});
function handleFileSelectVid(evt) {
	$(".attach_combo").remove();
	if(wantLoadVideoFile) return;
	var tmp = evt.target.files[0];
	var ext = tmp.name.split(".");
    ext = ext[ext.length-1].toLowerCase();
	if (!tmp.type.match('video.*') && ext != "f4v") {
		return;
	}
	// Render thumbnail.
	videoFile = tmp;
	wantLoadVideoFile = true;
}
$(document).on('click','.preVidCoverSel', function(e) {
	if (!can_blog_send) return;
	$(".preVidCoverSel").attr("data-cover","0");
	$(this).attr("data-cover","1");
	vidCoverTime = $(this).attr("data-pvtime");
});
//-------------------preVideo Thumbs
var preVideoTime = 3;
var preVideoEl = "";
var preVideoCanvas = "";
var preVideoInput = "";
$(document).ready(function(){
	preVideoEl = document.getElementById('preVideoEl');
	preVideoCanvas = document.getElementById('preVideoCanvas');
	preVideoInput = document.getElementById('addpost_vid_file');

	if (preVideoEl) {
		preVideoEl.addEventListener('seeked', function() {
			if (preVideoEl.duration < 10) return;
			generateThumbnail();
		}, false);
		preVideoEl.addEventListener('loadeddata', function() {
			preVideoEl.currentTime = preVideoTime;
		}, false);
	}
	(function localFileVideoPlayerInit(win) {
		var URL = win.URL || win.webkitURL,
			displayMessage = (function displayMessageInit() {
				return function displayMessage(message, isError) {
					message_text = message;
					message_text+= isError ? 'error' : 'info';
					console.log("preVideo",message_text);
				};
			}()),
			playSelectedFile = function playSelectedFileInit(event) {
				var file = this.files[0];
				var type = file.type;
				var canPlay = preVideoEl.canPlayType(type);
				canPlay = (canPlay === '' ? 'no' : canPlay);
				var message = 'Can play type "' + type + '": ' + canPlay;
				var isError = canPlay === 'no';
				displayMessage(message, isError);
				if (isError) {
					return;
				}
				var fileURL = URL.createObjectURL(file);
				preVideoEl.src = fileURL;
			}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		if (!URL) {
			displayMessage('Your browser is not ', true);
			return;
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
		if (preVideoInput) preVideoInput.addEventListener('change', playSelectedFile, false);
	}(window));	
	
});
$(document).on('click','.preVidCoverSel', function(e) {
	if (!can_blog_send) return;
	$(".preVidCoverSel").attr("data-cover","0");
	$(this).attr("data-cover","1");
	vidCoverTime = $(this).attr("data-pvtime");
});

function generateThumbnail() {   
	var preVideoEl_W = preVideoEl.videoWidth;
	var preVideoEl_H = preVideoEl.videoHeight;
	console.log(preVideoEl_W,preVideoEl_H);
	var aspect = preVideoEl_W / preVideoEl_H;
	var canvas_img_width = 80*aspect;
	preVideoCanvas.width = canvas_img_width;
	preVideoCanvas.height = 80;
    var context = preVideoCanvas.getContext('2d');
    context.drawImage(preVideoEl, 0, 0, canvas_img_width, 80);
    var dataURL = preVideoCanvas.toDataURL('image/jpeg');
    var img = document.createElement('img');
	img.onload = function(){
		console.log(img.width,img.height);
		if (img.width == 0 && img.height == 0) {
			console.log("thumb error");
			return;
		}
		var preDiv = document.createElement('div');
		preDiv.innerHTML = "<div class='cover_text transition'><span>cover</span></div>";
		preDiv.className = 'preVidCoverSel';
		preDiv.setAttribute("data-pvtime", preVideoTime);
		preDiv.appendChild(img);
		document.getElementById('addpost_vid_list').appendChild(preDiv);
		//-----------
		var pvstep = Math.round(preVideoEl.duration/30);
		preVideoTime += pvstep;
		if (preVideoEl.duration < 10) {
			console.log("preVid done < 10");
		}
		if (preVideoTime <= preVideoEl.duration) {
			preVideoEl.currentTime = preVideoTime;
		} else {
			console.log("preVid done");
		}	
	}
	img.src = dataURL;		
}
function registerPOST() {
	var post_text = $('.addpost_text').val().trim();
	var combo = 0;
	var di = 0;
	var vids = "";
	var hv = 0;	
	var hvp = 0;	
	var imgs = '[]';
	var vids = '';
	if (wantLoadCombo){
		var imgs_array = new Array();
		defaultServer = "//"+blog_server+".trafficdeposit.com";
		imgs_array.push(defaultServer+"/blog/img/"+global_uid+"/"+global_post_uniq_id+"/0.jpg");
		combo = 1;
		di = combo_poster.di;			
			var vids_array = new Array();
			for (i=0;i<combo_posts.length;i++){
				vids_array.push(combo_posts[i].id);
			}	
		vids = JSON.stringify(vids_array);
		imgs = JSON.stringify(imgs_array);
	}
	if (wantLoadVideoFile) {
		hv = 1;	
		hvp = 1;			
	}	
	$.post("/php/addpost.php", {x:blog_server,
								hv:hv,
								hvp:hvp,
								combo:combo,
								di:di,
								post_id:global_post_uniq_id,
								post_text:post_text,
								imgs:imgs,
								vids:vids,
								}, function(result){
				console.log("done " + result);
			$(".addpost_mainprogressbar_wrap > span").html("<strong>All Done<span>.</span><span>.</span><span>.</span></strong>");
			var url = window.location.href;//window.location.host+window.location.pathname;
			console.log("url",url);
			setTimeout(function(){ window.location.href = url; }, 3000);
	});
	can_blog_send = true;
}
var tmp_gss = "";
$(document).on('click','.blog_send', function(e) {
	if (!can_blog_send || !recap_ok) return;
	var posttext = $('.addpost_text').val().trim();
	if (checkPostText($('.addpost_text').val().trim())) {
		can_blog_send = false;//Starting
			$(".addpost_text").css('color','#C1C1C1').attr('readonly','readonly');
			$(".addpost_control").fadeOut();
			$(".addpost_mainprogressbar_wrap > span").html("<strong>Starting<span>.</span><span>.</span><span>.</span></strong>");
			$(".addpost_mainprogressbar_bigwrap").fadeIn();
		if (typeof videoFile == "undefined") {
			videoFileSize = 0;
		} else {
			videoFileSize = videoFile.size;
		}
		if (wantLoadCombo) {
			if (combo_poster.status != "ok" || combo_posts.length < 2) return;
		}
		$.post("/php/get_user_id.php", function(uid){
			if (uid != "") $.post("/php/get_code.php",{uid:uid,recap_response:recap_response}, function(code){
				if (code == "napp") {
					$(".addpost_mainprogressbar_wrap > span").html("<strong>Acc not approved</strong>").css("color","#9A0A0A");
				} else if (code != "") {
					var tmp = code.split("|");
					uploadAll(tmp[0],tmp[1],tmp[2]);
					tmp_gss_c = "N";
					if (tmp[2] == "https://cs.trafficdeposit.com") tmp_gss_c = "C0";
					if (tmp[2] == "https://cs1.trafficdeposit.com") tmp_gss_c = "C1";
					if (tmp[2] == "https://cs2.trafficdeposit.com") tmp_gss_c = "C2";
					tmp_gss = " > "+ tmp_gss_c;
				}
			});
		});	
	}
});
function uploadAll(user_id,code,gss){
	var fd = new FormData();
	var post_text = $('.addpost_text').val().trim(); //urlencode?
	if (wantLoadCombo){
		canvas_all = $(".canvasComboPoster");
		if (canvas_all.length) {
			var canvas = canvas_all[0];
			var dataURL = canvas.toDataURL("image/jpeg");
			var vids_array = new Array();
			for (i=0;i<combo_posts.length;i++){
				vids_array.push(combo_posts[i].id);
			}	
			var vids = JSON.stringify(vids_array);

			fd.append('mode', 'combo');
			fd.append('hidden_data', dataURL);
			fd.append('user_id', user_id);
			fd.append('di', combo_poster.di);
			fd.append('code', code);
			fd.append('vids', vids);
			fd.append('post_text', post_text);
		}
	} else if (wantLoadVideoFile) {
		fd.append('mode', 'vid');
		fd.append('vidfile', videoFile);
		fd.append('user_id', user_id);
		fd.append('cover_time', vidCoverTime);
		fd.append('code', code);
		fd.append('post_text', post_text);
	} else {
		console.log(user_id,code,post_text);
		fd.append('mode', 'txt');
		fd.append('user_id', user_id);
		fd.append('code', code);		
		fd.append('post_text', post_text);
	}
	var xhr = new XMLHttpRequest();
	xhr.open('POST', gss+'/blog/vid_loader_n.php', true);
	started_at = new Date();
	xhr.upload.onprogress = function(e) {
		if (e.lengthComputable) {
			var percentComplete = (e.loaded / e.total) * 100;
			$(".progress_bar_vid").css("width",percentComplete+"%");
				var seconds_elapsed =   ( new Date().getTime() - started_at.getTime() )/1000;
                var bytes_per_second =  seconds_elapsed ? e.loaded / seconds_elapsed : 0 ;
                var Kbytes_per_second = bytes_per_second / 1024 ;
				var LoadedMB = Math.round(e.loaded/1024/1024);
				var TotalMB = Math.round(e.total/1024/1024);
				var remaining_bytes =   e.total - e.loaded;
                var seconds_remaining = seconds_elapsed ? remaining_bytes / bytes_per_second : 'calculating' ;
				if (seconds_remaining > 60) {
					var min_rem = Math.round(seconds_remaining/60);
					time_remaining = min_rem+" Min";
				} else {
					time_remaining = seconds_remaining+" Sec";
				}
				console.log(percentComplete + '% uploaded',LoadedMB+"/"+TotalMB+" MB","Speed: "+Kbytes_per_second+" Kb/s","Rem. time: "+time_remaining);
			mainProgBarUpdate(percentComplete);
			if (percentComplete == 100) {
				$(".progress_bar_vid").css("border-bottom-right-radius","3px");
				$(".addpost_mainprogressbar_wrap > span").html("<strong>Converting<span>.</span><span>.</span><span>.</span></strong>");
				$(".vid_ok").css("display","block");
			}
		}
	};
	xhr.onload = function() {
		if (this.status == 200) {
			console.log(this.response);
			//var resp = JSON.parse(this.response);
			//console.log(resp);
			$(".addpost_mainprogressbar_wrap > span").html("<strong>All Done<span>.</span><span>.</span><span>.</span></strong>");
			var url = window.location.href;
			setTimeout(function(){ window.location.href = url; }, 3000);
		}
	};
	xhr.onerror = function(e) {
		$(".addpost_mainprogressbar_wrap > span").html("<strong>Error<span>.</span><span>.</span><span>.</span></strong>").css("color","#9A0A0A");
		console.log('There was an error!',e);
	};
	xhr.send(fd);
}
function uploadExIMG(i,article_uniq_id, uid) {
	canvas_all = $(".canvasComboPoster");
	var canvas = canvas_all[i];
	var dataURL = canvas.toDataURL("image/jpeg");
	
	var fd = new FormData();
	fd.append('hidden_data', dataURL);
	fd.append('photo_id', i);
	fd.append('user_id', uid);
	fd.append('article_id', article_uniq_id);

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '//'+blog_server+'.trafficdeposit.com'+'/blog/img_loader.php', true);
	xhr.upload.onprogress = function(e) {
		if (e.lengthComputable) {
			var percentComplete = (e.loaded / e.total) * 100;
			$(".progress_bar_img").eq(i).css("width",percentComplete+"%");
			console.log(percentComplete + '% uploaded');
			mainProgBarUpdate(percentComplete);
		}
	};
	xhr.onload = function() {
		if (this.status == 200) {
			console.log('Server img:', this.response);
			registerPOST();
		} else {
			console.log('Server img error:', this.status);
		}
	};
	xhr.send(fd);
};
function uploadExVID(post_uniq_id,user_id){
	var fd = new FormData();
	fd.append('vidfile', videoFile);
	fd.append('user_id', user_id);
	fd.append('article_id', post_uniq_id);
	fd.append('cover_time', vidCoverTime);
	fd.append('blog_server', blog_server);
	var post_text = urlencode($('.addpost_text').val().trim());
	fd.append('post_text', post_text);
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', cs_server+'/blog/vid_loader.php', true);
	started_at = new Date();
	xhr.upload.onprogress = function(e) {
		if (e.lengthComputable) {
			var percentComplete = (e.loaded / e.total) * 100;
			$(".progress_bar_vid").css("width",percentComplete+"%");
				var seconds_elapsed =   ( new Date().getTime() - started_at.getTime() )/1000;
                var bytes_per_second =  seconds_elapsed ? e.loaded / seconds_elapsed : 0 ;
                var Kbytes_per_second = bytes_per_second / 1024 ;
				var LoadedMB = Math.round(e.loaded/1024/1024);
				var TotalMB = Math.round(e.total/1024/1024);
				var remaining_bytes =   e.total - e.loaded;
                var seconds_remaining = seconds_elapsed ? remaining_bytes / bytes_per_second : 'calculating' ;
				if (seconds_remaining > 60) {
					var min_rem = Math.round(seconds_remaining/60);
					time_remaining = min_rem+" Min";
				} else {
					time_remaining = seconds_remaining+" Sec";
				}
				console.log(percentComplete + '% uploaded',LoadedMB+"/"+TotalMB+" MB","Speed: "+Kbytes_per_second+" Kb/s","Rem. time: "+time_remaining);
			mainProgBarUpdate(percentComplete);
			if (percentComplete == 100) {
				$(".progress_bar_vid").css("border-bottom-right-radius","3px");
				$(".addpost_mainprogressbar_wrap > span").html("<strong>Converting<span>.</span><span>.</span><span>.</span></strong>");
				$(".vid_ok").css("display","block");
			}
		}
	};

	xhr.onload = function() {
		if (this.status == 200) {
			console.log(this.response);
			var resp = JSON.parse(this.response);
			console.log(resp);
			registerPOST();
		}
	};
	xhr.onerror = function(e) {
		$(".addpost_mainprogressbar_wrap > span").html("<strong>Error<span>.</span><span>.</span><span>.</span></strong>").css("color","#9A0A0A");
		console.log('There was an error!',e);
	};
	xhr.send(fd);
}
function mainProgBarUpdate(percentComplete){
	$('.addpost_mainprogressbar').css('width',percentComplete+'%');
	n = percentComplete.toFixed(2) + "%" + tmp_gss;
	$(".addpost_mainprogressbar_wrap > span").html(n);
}
//------------------------------------COMBO
var combo_posts = new Array();
var combo_poster = {status:"no", di:"1", el:""};

$(document).on('click','.attach_combo', function(e) {
	wantLoadCombo = true;
	wantLoadVideoFile = false;
	$('.combo').fadeIn();
	$('.blog_attach_wrap').fadeOut();
});
$(document).on('click','.combo_add_poster', function(e) {
	$('#addpost_combo_poster').click();
});	
$(document).on('click','.combo_remove_poster', function(e) {
	$(this).removeClass("combo_remove_poster").addClass("combo_add_poster").html("Add poster");
	combo_poster = {status:"no", di:"1", el:""};
	$(".canvasComboPoster").remove();
	makeComboPreview();
});
$(document).on('change','#addpost_combo_poster', function(e) {
	handleFileComboPoster(e)
});
function handleFileComboPoster(evt) {
    var reader = new FileReader();
    reader.onload = function (e) {
		var img = document.createElement('img');
		//---------
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		canvas.classList.add('canvasComboPoster');
		img.src = e.target.result;
		//---------
		img.onload = function() {
			var MAX_WIDTH = 800;
			var MAX_HEIGHT = 600;
			var width = this.width;
			var height = this.height;
			if (width > height) {
				if (width > MAX_WIDTH) {
					height *= MAX_WIDTH / width;
					width = MAX_WIDTH;
				}
			} else {
				if (height > MAX_HEIGHT) {
					width *= MAX_HEIGHT / height;
					height = MAX_HEIGHT;
				}
			}
			canvas.width = width;
			canvas.height = height;
			ctx.drawImage(this, 0, 0, width, height);			
			//----------
			var di = Math.floor(this.width/this.height);
			combo_poster.status = "ok";
			combo_poster.di = di;
			combo_poster.el = this;
			$(".combo_add_poster").removeClass("combo_add_poster").addClass("combo_remove_poster").html("Remove poster");
			$("#combo_preview").append("<div id='combo_poster'></div>");
			document.getElementById("combo_poster").appendChild(combo_poster.el);
		};
		document.getElementById("addpost_comboposter").appendChild(canvas);		
    };
    reader.readAsDataURL(evt.target.files[0]);
}
$(document).on('click','.combo_post_list_ids', function(e) {
	var id = $(this).data("id");
	for(var i = 0; i < combo_posts.length; i++) {
		if(combo_posts[i].id == id) {
			combo_posts.splice(i, 1);
			break;
		}
	}
	$(this).fadeOut();
	$(this).remove();
});
$(document).on('input','.combo_post_ids', function(e) {
	var post_link = $(this).val();
	if (post_link.length == 0) return;
	var parser = document.createElement('a');
	parser.href = post_link;
	var temp = parser.pathname;
	temp = temp.replace("/post/", "");
	temp = temp.replace(".html", "");
		$.post("/php/combo_post.php",{post_id:temp}, function(result){
			var obj = JSON.parse(result);
			if (obj.status == "ok") {
				combo_posts.push(obj);
				$(".combo_vid_list").append("<div class='combo_post_list_ids' data-id='"+obj.id+"'><b>✖</b><span>"+obj.text+"</span></div>");
				$(".combo_post_ids").css("color","black");				
				$(".combo_post_ids").val("");
			} else {
				$(".combo_post_ids").css("color","red");
			}
		});
});
//----------comments
function run_comments() {
var ifcommex = false;
	$(".comments_area").each(function() {
		var postid = $(this).data("postid");
		var commentscount = $(this).data("commentscount");
		var commentsmode = $(this).data("commentsmode");
		var postaid = $(this).data("authorid");
		if (commentsmode == 'post') commentslimit = 5;
		if (commentsmode == 'blog') commentslimit = 3;	
		initComments(postid, postaid, commentscount,commentsmode,commentslimit);
		ifcommex = true;
	});
	if (ifcommex) loadComments(comment_pids,comment_aids,commentslimit);
}
//Events
$(document).on('focusin','.comment_text', function(e) {
	if (usss['lin'] == "no") {
		lin_modal();
		return;
	}
	$(this).closest('.add_comment_div').find('.comment_send_wrap2').css('display','block');
});
$(document).on('click','.comment_send_wrap', function(e) {
	sendComment(this);
});
$(document).on('keyup','.comment_text', function(e) {
	if (e.keyCode == 13) {
		sendComment(this);
	}
});
$(document).on('click','.moreComments', function(e) {
	$(this).css('display','none');
	var comments_area = $(this).closest('.comments_area');
	var post_id = comments_area.data('postid');
	var post_aid = comments_area.data("authorid");
	var post_ids = new Array;
	post_ids.push(post_id);
	var post_aids = new Array;
	post_aids.push(post_aid);
	comments_area.find('.comments_div').html("");
	loadComments(post_ids,post_aids,"all");
});
$(document).on('click','.comm_reply', function(e) {
	var reply_to = $(this).closest('.comment_t').data('author_name');
	var reply_author_id = $(this).closest('.comment_t').data('author_id');	
	var parent_id = $(this).closest('.comment_t').data('comment_id');
	var comments_area = $(this).closest('.comments_area');
	comments_area.attr('data-replyauthorid',reply_author_id);	
	comments_area.attr('data-replyto',reply_to);
	comments_area.attr('data-parentid',parent_id);
	comments_area.find('.reply_to_name').html(reply_to);
	comments_area.find('.comment_reply_to').fadeIn();
	comments_area.find('.comment_text').val(function(index, old) { return reply_to + ", " + old; }).focus();
});
$(document).on('click','.comment_reply_to', function(e) {
	var comments_area = $(this).closest('.comments_area');
	comments_area.attr('data-replyto','');
	comments_area.attr('data-parentid','');
	var base_author_id = comments_area.data('authorid');
	comments_area.attr('data-replyauthorid',base_author_id);	
	comments_area.attr('data-parentid','');	
	$(this).fadeOut();	
});
$(document).on('click','.comment_remove', function(e) {
	e.stopPropagation();
	e.preventDefault();
	var comment_id = $(this).closest('.comment_t').data('comment_id');
	var author_id = $(this).closest('.comment_t').data('author_id');
	var post_id = $(this).closest('.comments_area').data('postid');
	$(this).closest('.comment_t').fadeOut();	
	$.post("/php/comment_rm.php", { uid: usss['id'], post_id: post_id, comment_id: comment_id, author_id: author_id})
		.done(function(result) {
			console.log(result);
		});	
});
$(document).on('click','.comments_blog', function(e) {
	var postid = $(this).data('postid');
	$(".comments_area[data-postid='"+postid+"']").fadeIn();
});
$(document).on('input','.comment_text', function(e) {
	checkTextEditComment(this);
})
//COMMENTS
function initComments(postid,postaid,commentscount,commentsmode,commentslimit){
	//make comments
	var final_comments_html = "";
	if (commentsmode == 'post') {
		final_comments_html+= comments_html_add_section;
		if (commentscount > commentslimit) {
			final_comments_html+='<div class="moreComments"><span>Show all '+commentscount+' comments</span></div>';
		}
		final_comments_html+='<div class="comments_div"></div>';
		$(".comments_area[data-postid='"+postid+"']").append(final_comments_html);
	} else {
		if (commentscount > 0) {
			$(".comments_area[data-postid='"+postid+"']").css('display','block');
		}
		if (commentscount > commentslimit) {
			final_comments_html+='<div class="moreComments"><span>Show all '+commentscount+' comments</span></div>';
		}
		final_comments_html+='<div class="comments_div"></div>';
		final_comments_html+= comments_html_add_section;		
		$(".comments_area[data-postid='"+postid+"']").append(final_comments_html);
	}
	//load comments
	if (commentscount > 0) {
		comment_pids.push(postid);
		comment_aids.push(postaid);
	}	
}
function sendComment(el){
	if (!checkTextEditComment(el)) return;
	var comments_area = $(el).closest('.comments_area');
	var post_id = comments_area.data('postid');
	var author_id = comments_area.data('authorid'); 
	var reply_author_id = comments_area.data('replyauthorid');	
	var reply_to = "";
	var parent_id = "";	
	if (comments_area.attr('data-replyto')) {
		reply_to = comments_area.attr('data-replyto');
	}
	if (comments_area.attr('data-parentid')) {
		parent_id = comments_area.attr('data-parentid');
	}
	var comment_text = comments_area.find('.comment_text').val();
	comments_area.find('.comment_text').val('');
	comments_area.attr('data-replyto','');
	comments_area.attr('data-parentid','');
	comments_area.find('.comment_reply_to').fadeOut();	
	checkTextEditComment(el);
	var arri = new Array();
	arri[5] = 0;
	arri[6] = comments_area.data('postid').toString();
	arri[7] = comments_area.data('authorid').toString();
	arri = preda(arri);
	sid = arri[5];
	$.post("/php/comment_send.php", {author_id: usss['id'], post_id: post_id, comment_text: comment_text, parent_id:parent_id, reply_to:reply_to, aid:arri[7], sid:sid, reply_author_id:reply_author_id})
		.done(function(result) {
			var comment = JSON.parse(result);
			comment[0].author_name = usss['name'];
			comment[0].author_char = usss['author_char'];
			comment[0].author_char_color = usss['author_char_color'];
			comment[0].author_bg_color = usss['author_bg_color'];
			renderComment(comment[0]);
	});	
}
function checkTextEditComment(el) {
	if (usss['lin'] == "no") return;
	var text = $(el).closest('.comments_area').find('.comment_text').val().trim();
	if (text.length > 256 || text.length < 2) {
		$(el).css('color','red');
		$(el).closest('.comments_area').find('.comment_send_wrap').css('opacity','0.5');
		return false;
	} else {
		$(el).css('color','black');
		$(el).closest('.comments_area').find('.comment_send_wrap').css('opacity','1');
		return true;		
	}
}
function loadComments(post_ids,post_aids,commentslimit){
	var post_ids_j = JSON.stringify(post_ids);
	var post_aids_j = JSON.stringify(post_aids);
	$.post("/php/comment_load.php", {post_ids: post_ids_j, post_aids: post_aids_j, commentslimit: commentslimit})
		.done(function(result) {
			var pids = JSON.parse(result);
			$.each(pids, function(pid, comments) {
				comments.reverse();
				comments.forEach(function(comment) {
					renderComment(comment);
				});
			}); 
		});	
}
function renderComment(comment) {
	var reply_to = "";
	comment.comment_text = stripSlashes(comment.comment_text);
	if (comment.reply_to != "") {
		reply_to = "<i> > "+comment.reply_to+"</i>";
		comment.comment_text = comment.comment_text.replace(comment.reply_to,"<i class='reply_to'>"+comment.reply_to+"</i>");
	}
	var comment_html = "<div class='comment_t' data-comment_id='"+comment.comment_id+"' data-author_name='"+comment.author_name+"' data-author_id='"+comment.author_id+"'>";
		comment_html+="<a href='/blog/"+comment.author_id+"/0.html' title='"+comment.author_name+" Channel' class='tdn'><div class='comment_author'><div class='comment_user_photo'><span style='background-color:#"+comment.author_bg_color+";color:#"+comment.author_char_color+"' >"+comment.author_char+"</span></div><span class='comment_user_name transition tdn'>"+comment.author_name+reply_to+"</span>";
		if (comment.su == 1) {
			comment_html+="<span class='comment_remove'>×</span>";
		}
		comment_html+= "</div></a>";		
		comment_html+= "<div class='comm_text'>"+comment.comment_text+"</div>";		
		comment_html+= "<div class='comment_reply'><span class='comm_time'>"+ptago(comment.unixtime,comment.curtime)+"</span><span class='comm_reply' data-author='"+comment.author_name+"' data-comment_id='"+comment.comment_id+"' data-author_id='"+comment.author_id+"'>Reply</span></div>";		
		comment_html+= "</div>";
	$(".comments_area[data-postid='"+comment.post_id+"']").find('.comments_div').prepend(comment_html);
}
//COMBO MODE
$(document).on('click','.combo_mode', function(e) {
	var vidsrc = $(this).data('vidsrc');
	$('#player_el').attr('src',vidsrc).fadeIn();
	$('#player_el')[0].play();
	var eTop = $('#player_el').offset().top;
	console.log("eTop",eTop);
	$('body,html').animate({scrollTop:eTop},800);
});
//WatchLater
$(document).on('click','.tm_watchlater', function(e) {
	if (usss['lin'] == "no") {
		lin_modal();
		return;
	} else {
		window.location.href = "//"+window.location.host + "/watchlater";
	}
});	
$(document).on('click','.pes_wl', function(e) {
	if (usss['lin'] == "no") {
		lin_modal();
		return;
	} else {
		var post_id = $(this).data('postid');
		$.post("/php/wl.php", {action: 'add', postid: post_id})
			.done(function(result) {
				$('.tm_watchlater > div.menu_count').html(result);
				check_menu_count();
			});
		$(this).html('✓').css({'background':'#5cef5c','border-radius':'30px','padding':'0px 5px'});	
	}
});
$(document).on('click','.wl_ctrl > .vlc_btn_up', function(e) {
	e.stopPropagation();
	e.preventDefault();
	var post_id = $(this).closest('.wl_ctrl').data('postid');
	$.post("/php/wl.php", {action: 'add', postid: post_id})
		.done(function(result) {
			$('.tm_watchlater > div.menu_count').html(result);
			check_menu_count();
		});
	$(this).closest("div.post_el_small").fadeOut("fast", function() {
		$(this).closest("div.post_el_small").clone().prependTo(".main_content");
		$("div.post_el_small:first").fadeIn("slow");
		$(this).closest("div.post_el_small").remove();
	});		
});
$(document).on('click','.wl_ctrl > .vlc_btn_rm', function(e) {
	e.stopPropagation();
	e.preventDefault();
	var post_id = $(this).closest('.wl_ctrl').data('postid');
	$.post("/php/wl.php", {action: 'remove', postid: post_id})
		.done(function(result) {
			$('.tm_watchlater > div.menu_count').html(result);
			check_menu_count();
		});
	$(this).closest("div.post_el_small").fadeOut("slow", function() {
		$(this).closest("div.post_el_small").remove();
	});		
});
//PlayList
$(document).on('click','.tm_playlist', function(e) {
	if (usss['lin'] == "no") {
		lin_modal();
		return;
	} else {
		window.location.href = "//"+window.location.host + "/playlist";
	}
});
$(document).on('click','.vid_playlist_post', function(e) {
	if (usss['lin'] == "no") {
		lin_modal();
		return;
	} else {
		var post_id = $(this).closest('.post_control').data('postid');
		$.post("/php/pl.php", {action: 'add', postid: post_id})
			.done(function(result) {
				$('.tm_playlist > div.menu_count').html(result);
				check_menu_count();
			});
		$(this).html('✓').css({'color':'#0eff00!important'});
	}	
});
$(document).on('click','.pl_ctrl > .vlc_btn_up', function(e) {
	e.stopPropagation();
	e.preventDefault();
	var post_id = $(this).closest('.pl_ctrl').data('postid');
	$.post("/php/pl.php", {action: 'up', postid: post_id})
		.done(function(result) {
			$('.tm_playlist > div.menu_count').html(result);
			check_menu_count();
		});
	$(this).closest("div.post_el_small").fadeOut("fast", function() {
		$(this).closest("div.post_el_small").clone().prependTo(".combo_container");
		$("div.post_el_small:first").fadeIn("slow");
		$(this).closest("div.post_el_small").remove();
	});		
});
$(document).on('click','.pl_ctrl > .vlc_btn_rm', function(e) {
	e.stopPropagation();
	e.preventDefault();
	var post_id = $(this).closest('.pl_ctrl').data('postid');
	$.post("/php/pl.php", {action: 'remove', postid: post_id})
		.done(function(result) {
			$('.tm_playlist > div.menu_count').html(result);
			check_menu_count();
		});
	$(this).closest("div.post_el_small").fadeOut("slow", function() {
		$(this).closest("div.post_el_small").remove();
	});		
});
//EDIT Post
var editwindow = false;
var loading_poster = false;
var remove_poster = false;
var canEdit = true;
//-------------------------------------
$(document).on('click','#editOk', function(e) {
	checkTextEdit();
	if (editwindow && canEdit) {
	canEdit = false;
	editwindow = false;
		var post_id = $('.pes_edit_div').data("postid");
		var author_id = $('.pes_edit_div').data("aid");
		var post_text = $('.PostEditTA').val().trim();
		$.post("/php/editpost.php", {action:"editpost",post_id:post_id, author_id:author_id,post_text:post_text}, function(result){
		console.log(result);
				if (result != 'error') {
					$(".post_text > span").html(result);
				}
				var url = window.location.host+window.location.pathname;
				window.location.href = "//"+url;	
		});
		$(".PostEditDIV").fadeOut();
	}
});
$(document).on('click','#editpost, #editCancel', function(e) {
	if (editwindow) {
		$(".PostEditDIV").fadeOut();
		$(".post_text").css('display','block');
		editwindow = false;
	} else {
		$(".PostEditDIV").fadeIn();
		$(".post_text").css('display','none');
		editwindow = true;
	}
});
$(document).on('input','.PostEditTA', function(e) {
	checkTextEdit();
})
function checkTextEdit() {
	var text = $('.PostEditTA').val().trim();
	if (text.length > 1024 || text.length < 10) {
		$('.PostEditTA').css('color','red');
		$('#editOk').css('opacity','0.5');
		canEdit = false;
	} else {
		$('.PostEditTA').css('color','aliceblue');
		$('#editOk').css('opacity','1');
		canEdit = true;
	}
}
//EDIT POSTER
$(document).on('click','.addposter', function(e) {
	if(loading_poster) return;
	$('#editpost_add_poster').click();
});
$(document).on('change','#editpost_add_poster', function(e) {
	loading_poster = true;
	$('.addposter').html('Loading...').css({'color':'#c5d636','cursor':'default'});
	handleFileAddPoster(e);
});
function handleFileAddPoster(evt) {
    var reader = new FileReader();
    reader.onload = function (e) {
		var img = document.createElement('img');
		//---------
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		canvas.classList.add('canvasAddPoster');
		img.src = e.target.result;
		//---------
		img.onload = function() {
			var MAX_WIDTH = 800;
			var MAX_HEIGHT = 600;
			var width = this.width;
			var height = this.height;
			if (width > height) {
				if (width > MAX_WIDTH) {
					height *= MAX_WIDTH / width;
					width = MAX_WIDTH;
				}
			} else {
				if (height > MAX_HEIGHT) {
					width *= MAX_HEIGHT / height;
					height = MAX_HEIGHT;
				}
			}
			canvas.width = width;
			canvas.height = height;
			ctx.drawImage(this, 0, 0, width, height);
			var di = Math.floor(this.width/this.height);
		x = $('.pes_edit_div').data('x');
		defaultServer = "//"+x+".trafficdeposit.com";
		article_uniq_id = $('.pes_edit_div').data('postid');
			uploadExIMGposter2(0,article_uniq_id,defaultServer,canvas,di);			
		};
    };
    reader.readAsDataURL(evt.target.files[0]);
}
function uploadExIMGposter2(i,article_uniq_id,defaultServer,canvas,di) {
	var dataURL = canvas.toDataURL("image/jpeg");
	var fd = new FormData();
	fd.append('img', dataURL);
	fd.append('post_id', article_uniq_id);
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/php/addposter.php', true);
	xhr.upload.onprogress = function(e) {
	};
	xhr.onload = function() {
		if (this.status == 200) {
			console.log('Server img:', this.response);
				var imgs_array = new Array();
					imgs_array.push(defaultServer+"/blog/img/"+usss['id']+"/"+article_uniq_id+"/"+i+".jpg");
				var imgs = JSON.stringify(imgs_array);
				$.post("/php/editpost.php", {action:"addposter",post_id:article_uniq_id, author_id:usss['id'],post_text:"",imgs:imgs,di:di}, function(result){
					console.log(result);
						var url = window.location.host+window.location.pathname;
						window.location.href = "//"+url;	
				});
		} else {
			console.log('Server img error:', this.status);
		}
	};
	xhr.send(fd);
};
$(document).on('click','.removeposter', function(e) {
	if(remove_poster) return;
	remove_poster = true;
	$('.removeposter').html('Please wait...').css({'color':'#c5d636','cursor':'default'});
	article_uniq_id = $('.pes_edit_div').data('postid');
	$.post("/php/editpost.php", {action:"removeposter",post_id:article_uniq_id, author_id:usss['id'],post_text:"",imgs:"[]"}, function(result){
		console.log(result);
			var url = window.location.host+window.location.pathname;
			window.location.href = "//"+url;	
	});
});
$(document).on('click','.rmpost', function(e) {
	var post_id = $('.pes_edit_div').data("postid");
	var author_id = $('.pes_edit_div').data("aid");
	var action = $(this).data("action");	
	$(this).closest("div.post_el").fadeOut();
	$.post("/php/rmpost.php", {post_id:post_id, author_id:author_id, action:action}, function(result){
			console.log("rm " + result);
			var url = window.location.host+window.location.pathname;
			window.location.href = "//"+url;	
	});
});
//NOTI
notiCount = 0;
notiLoaded = false;
notiVisible = false;
function initNoti(){
	if (usss['lin'] != "yes") {
		return;
	}
	$.post("/php/noti.php", {uid:usss['id'], action:'count'}, function(result){
		notiCount = parseInt(result);
		if (notiCount > 0) {
			$('div.notify_count').html(result).fadeIn();
			$('div.notify_bar_control').append("<div><span class='noti_control noti_mysubs'>Manage Subs</span><span class='noti_control noti_clean'>Clean Noti</span></div>");
		} else {
			$('div.notify_bar_control').append("<div><span class='noti_control noti_mysubs'>Manage Subs</span></div>");
		}
	});
}
$(document).on('click','.noti_mysubs', function(e) {
	window.location.href = "/mysubs";
});
$(document).on('click','.noti_clean', function(e) {
	$.post("/php/noti.php", {uid:usss['id'], action:'clean'}, function(result){
		if (result == "clean") {
			$('div.notify_bar').fadeOut();
			$('div.notify_bar_content').html("");
			$('div.notify_bar_control').html("<div><span class='noti_control noti_mysubs'>Manage Subs</span></div>");
			$('div.notify_count').html("0").fadeOut();			
		}
	});
});
$(document).on('click','.notify', function(e) {
e.stopPropagation();
e.preventDefault();
	if (notiVisible) {
		$('div.notify_bar').fadeOut();
		notiVisible = false;
	} else {
		if (!notiLoaded) {
			loadNoti();
		}
		$('div.notify_bar').fadeIn();
		notiVisible = true;
	}	
});
function loadNoti(){
	$.post("/php/noti.php", {uid:usss['id'], action:'load'}, function(result){
		if (notiCount > 0) {
			$('div.notify_bar_content').html(result);
			notiLoaded = true;
		}
	});
}
$(document).on('click','.noti_el', function(e) {
	window.location.href = $(this).attr('data-href');
});
//LIVE //SEARCH
$(document).on('focusin','#se_in', function(e) {
	viewportScalable(false);
	$(".search_bar").addClass("search_box_mob_selected").css('box-shadow','0 0 10px rgba(0,0,0,0.9)');
});
$(document).on('focusout','#se_in', function(e) {
	if (e.relatedTarget !== null) {
		if (e.relatedTarget.className == 'lsel_arrow' || e.relatedTarget.className == 'lsel_b_text') return;
	}
	viewportScalable(true);	
	$(".search_bar").removeClass("search_box_mob_selected").css('box-shadow','0 0 0px rgba(0,0,0,0.9)');
});
var live_skey = "";
$(document).on('click','.lsel_arrow', function(e) {
	e.stopPropagation();
	e.preventDefault();
	var text = $(this).closest(".lsel_s").find(".lsel_text").html();
	$('#se_in').val(text).focus();
	search_input_input(text);
	return false;
});
$(document).on('input','#se_in', function(e) {
	search_input_input($(this).val());
});
$(document).on('keyup','#se_in', function(e) {
	if (e.keyCode == 13) {
		search($("#se_in").val());
	}
});
function search_input_input(text){
	var key = makeValidKey(text);
	if (live_skey != key && key.length > 2) {
		live_skey = key;
		liveSearch();
	} else if (key.length < 3) {
		live_skey = "";
		$(".live_search").html("");		
	}
}
function liveSearch(){
	$.post("/php/livesearch.php", {uid:usss['id'],key:live_skey,c:"livesearch4"}, function(result){
		var lsj = JSON.parse(result);
		var total_results = lsj.searches.length + lsj.blogs.length;
		console.log('ls_gen_time',lsj.gentime);
		if (total_results > 0){
			var lsContent = "<div class='lsel_spliter'></div>";
			lsj.searches.sort(lsCompare);
			for (i=0;i<lsj.searches.length;i++){
				lsContent+= "<div class='lsel lsel_s' data-href='"+lsj.searches[i].link+"'><span class='lsel_text lsel_b_text' tabindex='0'>"+lsj.searches[i].title+"</span><span tabindex='0' class='lsel_arrow'></span></div>";
			}
			for (i=0;i<lsj.blogs.length;i++){
				if (lsj.blogs[i].combo == 0) {
					lsel_class = "lsel_b";
				} else {
					lsel_class = "lsel_c";
				}
				lsContent+= "<div class='lsel "+lsel_class+"' data-href='"+lsj.blogs[i].link+"'><span class='lsel_b_text' tabindex='0'>"+lsj.blogs[i].title+"</span></div>";
			}
		} else {
				lsContent = "<div class='lsel lsel_s' data-href='/'><span>No Results</span></div>";
		}
		$(".live_search").html(lsContent);		
	});
}
function lsCompare(a,b) {
  if (a.title.length < b.title.length)
    return -1;
  else if (a.title.length > b.title.length)
    return 1;
  else 
    return 0;
}
$(document).on('click','.lsel', function(e) {
	window.location.href = $(this).attr('data-href');
});
function search(key){
	key = makeValidKey(key);
	if (key == "") return;
	window.location.href = "//"+window.location.host + "/" + key + ".html";
}
function makeValidKey(key){
	key = key.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
	key = key.replace(/ +(?= )/g,'');
	key = key.trim();
	key = key.replace(/\s+/g, '-');
	return key;
}
//SUBs blog
$(document).on('click','.blog_mysubs', function(e) {
	if (usss['lin'] == "no") {
		lin_modal();
		return;
	} else {
		window.location.href = "//"+window.location.host + "/blog/mysubs/";
	}
});
$(document).on('click','.show_more', function(e) {
	if (usss['lin'] == "no") {
		lin_modal();
		return;
	} else {
		var lut = $(this).data('lut');
		$.post("/php/mysubs_append.php", {lut:lut}, function(result){
			$('.show_more').remove();
			$('.search_results').append(result);
		});
	}
});
//SUB
function checkSubListNL(){
	$(".subs_container .ps_link,.subs_container .sub_cat_s, .blog_posts .ps_link, .blog_posts .sub_cat_s, .post_el_post .ps_link, .post_el_post .sub_cat_s").each(function(index) {
		$(this).after("<span class='sub_el sub_add_nl'>+</span>");
	});
}
function checkSubList(uid){
	var sub_list = new Array();
	$.post("/php/sub_list.php", {action: "get", uid: uid}, function(result){
		if (result != "error") {
			sub_list = JSON.parse(result); 
		}
			$(".subs_container .ps_link,.subs_container .sub_cat_s, .blog_posts .ps_link, .blog_posts .sub_cat_s, .post_el_post .ps_link, .post_el_post .sub_cat_s").each(function(index) {
				if ($(this).hasClass('ps_link')) {
					mode = 0;
				} else if ($(this).hasClass('sub_cat_s')) {
					mode = 1;
				}
				var key = $(this).data('subkey');
				key = key.replaceAll("+"," ");
				var sub_aleady = false;
				for(var i = 0; i < sub_list.length; i++) {
					if (key == sub_list[i]) {
						$(this).after("<span class='sub_el sub_aleady' data-mode='"+mode+"' data-key='"+key+"'>✓</span>");
						sub_aleady = true;
					}
				}
				if (!sub_aleady) {
					$(this).after("<span class='sub_el sub_add' data-mode='"+mode+"' data-key='"+key+"'>+</span>");
				}
			});
	});
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
$(document).on('click','.sub_add', function(e) {
	var mode = $(this).data("mode");	
	var key = $(this).data("key");
	$.post("/php/sub_list.php", {action: "add", uid: usss['id'], key: key, mode: mode}, function(result){
		console.log(result);
		if (result == "ok") {
			$(".post_text").find("[data-key='" + key + "']").removeClass("sub_add").addClass("sub_aleady").html("✓");
		}
	});
});
$(document).on('click','.sub_remove', function(e) {
	var key = $(this).data("key");
	var mode = $(this).data("mode");	
	$.post("/php/sub_list.php", {action: "remove", uid: usss['id'], key: key, mode: mode}, function(result){
		if (result == "ok") {
			$(".post_text").find("[data-key='" + key + "']").removeClass("sub_aleady sub_remove").addClass("sub_add").html("+");
		}
	});
});
$(document).on('mouseover','.sub_aleady', function(e) {
	$(this).addClass("sub_remove").html("X");
});
$(document).on('mouseout','.sub_aleady', function(e) {
	$(this).removeClass("sub_remove").html("✓");
});
$(document).on('click','.sub_add_nl', function(e) {
	lin_modal();
});
$(document).on('click','.mysubslink', function(e) {
	e.preventDefault();
	if (usss['lin'] == "no") {
		lin_modal();
	} else {
		window.location.href = "//"+window.location.host + "/mysubs/";
	}
});
//VINFO
(function () {
	'use strict';
	var devtools = {
		open: false,
		orientation: null
	};
	var threshold = 160;
	var emitEvent = function (state, orientation) {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				open: state,
				orientation: orientation
			}
		}));
	};
	setInterval(function () {
		var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		var orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (!(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
			if (!devtools.open || devtools.orientation !== orientation) {
				emitEvent(true, orientation);
			}

			devtools.open = true;
			devtools.orientation = orientation;
		} else {
			if (devtools.open) {
				emitEvent(false, null);
			}

			devtools.open = false;
			devtools.orientation = null;
		}
	}, 500);
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})();

function getvsrc() { // && !window.devtools.open
	if ($('.vidsnfo').length) {
		var vidsnfo = $('.vidsnfo').data('vnfo');
		$.each(vidsnfo, function(pid, src) {
			var tmp = src.split("/");
			tmp[1]+= "8";
			tmp = preda(tmp);
			var src = tmp.join("/");
			if ($('.combo_mode[data-postid="'+pid+'"]').length) $('.combo_mode[data-postid="'+pid+'"]').attr('data-vidsrc',src);
			if ($('.player_el_nc[data-postid="'+pid+'"]').length) $('.player_el_nc[data-postid="'+pid+'"]').attr('src',src);
			if ($('[itemprop="contentUrl"]').length) $('[itemprop="contentUrl"]').attr('content',src);
		});
	}
}
//-----------------Selector		
	function preda(arg){
		arg[5]-= parseInt(ssut51(arg[6]))+parseInt(ssut51(arg[7]));
		return arg; 
	}
	function ssut51(arg){
		var str = arg.replace(/[^0-9]/g,'');
		var sut = 0;
		for (var i = 0; i < str.length; i++) {
		sut += parseInt(str.charAt(i), 10);
		}
		return sut;
	}		
	if(!window.CurrentSelection){
		CurrentSelection = {}
	}
	CurrentSelection.Selector = {}
	CurrentSelection.Selector.getSelected = function(){
		var sel = '';
		if(window.getSelection){
			sel = window.getSelection()
		}
		else if(document.getSelection){
			sel = document.getSelection()
		}
		else if(document.selection){
			sel = document.selection.createRange()
		}
		return sel;
	}
	CurrentSelection.Selector.mouseup = function(){
		
		var st = CurrentSelection.Selector.getSelected();
		if (st.rangeCount == 0) return;
		var range = st.getRangeAt(0);
			var newNode = document.createElement("em");
			newNode.setAttribute("class", "selectedText");
			//range.surroundContents(newNode);
				newNode.appendChild(range.extractContents());
				range.insertNode(newNode);
			var getTitle = strip_tags(newNode.innerHTML);
			getTitle = getTitle.trim();
			newNode.setAttribute("title", getTitle);

			var popDiv = document.createElement('span');
			popDiv.setAttribute('class', 'popDiv');
			popDiv.innerHTML = getTitle;
			
			var searchPopButton = document.createElement('span');
			searchPopButton.setAttribute('class', 'searchPopButton transition');
			searchPopButton.setAttribute('data-skey', getTitle);
			searchPopButton.innerHTML = "search";
			popDiv.appendChild(searchPopButton);
			
			if(getTitle.length > 0) {
				document.body.appendChild(popDiv);
				search_popup_visible = true;
			}
			var position = newNode.getBoundingClientRect();
			$(".popDiv").css("top", position.top+$(window).scrollTop()+20);
			$(".popDiv").css("left", position.left+$(window).scrollLeft());
			$(".popDiv").slideDown();	
	}
$(document).on('click','.post_text, .popDiv', function(e) {
	e.stopPropagation();
	//e.preventDefault();
});
$(document).on('mouseup','.post_text', function(e) {
	$('.selectedText').contents().unwrap();
	$('.popDiv').remove();
	search_popup_visible = false;
	CurrentSelection.Selector.mouseup();
	if ($('.selectedText').html() == "") $('.selectedText').remove();
});
$(document).on('click','.searchPopButton', function(e) {
	search($(this).attr("data-skey"));
});
var voclk = false;
$(document).on('click','.vocontainer', function(e) {
	e.stopPropagation();
	if (!voclk) { 
		voclk = true;
		$.post("/php/vo.php")
		.done(function(data) {
			console.log(data); location.reload();
		});
	}
});
//FUNCKS
function strip_tags(input, allowed) {
	allowed = (((allowed || '') + '')
		.toLowerCase()
		.match(/<[a-z][a-z0-9]*>/g) || [])
		.join('');
	var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
	commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	return input.replace(commentsAndPhpTags, '')
	.replace(tags, function($0, $1) {
		return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	});
}
function sval(v,d){
	var oldv = parseInt(v);
	if (isNaN(oldv)) oldv = 0;
	nval = oldv+d;
	return nval;
}
function updateRatingColor(){
	var rating = parseInt($(".pl_rating").html());
	if (rating>0) $(".pl_rating").css('color','#73CE69');
	if (rating<0) $(".pl_rating").css('color','#CE6969');
	if (isNaN(rating)) $(".pl_rating").css('color','#73CE69');
}
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
} catch (e) {
    return false;
  }
}
function addRatingItem(id,target) {
	if (!supports_html5_storage()) return false;
	var arr = new Array();
	if (localStorage.getItem(target) !== null) {
		arr = JSON.parse(localStorage.getItem(target));
	}	
	arr.push(id);
	localStorage.setItem(target,JSON.stringify(arr));
}
function checkRatingItem(id,target) {
	if (!supports_html5_storage()) return false;
	var arr = new Array();
	if (localStorage.getItem(target) !== null) {
		arr = JSON.parse(localStorage.getItem(target));
	}
	if (isInArray(id, arr)) {
		return true;
	} else {
		return false;
	}
}
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
function stripSlashes(text) {
    return text.replace(/\\(.)/mg, "$1");
}
function ptago(unixtime,curtime) {
	comm_time_seconds = curtime-unixtime;
	if (comm_time_seconds < 60) {
		comm_time = "this moment";
	}
	if (comm_time_seconds >= 60) {
		comm_minutes = Math.floor(comm_time_seconds / 60);
		comm_time = comm_minutes+" minutes ago";
	}
	if (comm_time_seconds > 3600) {
		comm_hours = Math.floor(comm_time_seconds / 3600);
		if (comm_hours == 1) comm_time = "Hour ago";
		if (comm_hours > 1) comm_time = comm_hours+" hours ago";						
	}
	if (comm_time_seconds > 86400) {
		comm_days = Math.floor(comm_time_seconds / 86400);
		if (comm_days == 1) comm_time = "Yesterday";
		if (comm_days > 1) comm_time = comm_days+" days ago";						
	}
	if (comm_time_seconds > 2592000) {
		comm_months = Math.floor(comm_time_seconds / 2592000);
		if (comm_months == 1) comm_time = "Last month";
		if (comm_months > 1) comm_time = comm_months+" months ago";						
	}
	if (comm_time_seconds > 31104000) {
		comm_year = Math.floor(comm_time_seconds / 31104000);
		if (comm_year == 1) comm_time = "Last year";
		if (comm_year > 1) comm_time = comm_year+" years ago";						
	}
	return comm_time;
}
function uniqid(prefix, more_entropy) {
  if (typeof prefix === 'undefined') {
    prefix = '';
  }
  var retId;
  var formatSeed = function(seed, reqWidth) {
    seed = parseInt(seed, 10)
      .toString(16);
    if (reqWidth < seed.length) {
      return seed.slice(seed.length - reqWidth);
    }
    if (reqWidth > seed.length) {
      return Array(1 + (reqWidth - seed.length))
        .join('0') + seed;
    }
    return seed;
  };
  if (!this.php_js) {
    this.php_js = {};
  }
  if (!this.php_js.uniqidSeed) {
    this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
  }
  this.php_js.uniqidSeed++;

  retId = prefix;
  retId += formatSeed(parseInt(new Date()
    .getTime() / 1000, 10), 8);
  retId += formatSeed(this.php_js.uniqidSeed, 5);
  if (more_entropy) {
    retId += (Math.random() * 10)
      .toFixed(8)
      .toString();
  }
  return retId;
}
function urlencode (str) {
  str = (str + '')
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+')
}
function checkPostText(text){
	if (text.length >= 10 && text.length <= 1024) {$('#addpost_alert').fadeOut(); return true;}
	if (text.length < 10) {$('#addpost_alert').html("Too short or empty. Minimum 10 Chars").fadeIn(); return false;}
	if (text.length > 1024) {$('#addpost_alert').html("Too long. Maximum 1024 chars").fadeIn(); return false;}
}