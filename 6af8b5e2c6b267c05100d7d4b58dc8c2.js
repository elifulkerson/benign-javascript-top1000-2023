var USERNMMC = '';
var AFTERLOGINCALLBACK = '';
var AFTERNICKNAMECALLBACK = '';
var FORUM_SITEURL = 'https://mmb.moneycontrol.com/';

//Save message Start
function save_forum_widget_message_response(json_data){
	var frm_id = $.trim($('#txt_forum_widget_curr_msg_id').val());
	
	if(json_data.response_status != null && json_data.response_status != '' && json_data.response_status != 'undefined'){
		if(json_data.response_status == 'done'){
			alert(json_data.response_msg);
			$('form#'+frm_id+' #f_message').val('');
			
			if($.trim(AFTERLOGINCALLBACK) != ''){ AFTERLOGINCALLBACK = ''; }
			if($.trim(AFTERNICKNAMECALLBACK) != ''){ AFTERNICKNAMECALLBACK = ''; }
			
			return false;
		}else if(json_data.response_status == 'nk_blank'){
			alert(json_data.response_msg);
		}else if(json_data.response_msg != null && json_data.response_msg != '' && json_data.response_msg != 'undefined'){
			alert(json_data.response_msg);
		}else{
			alert('Error..!!');
		}
	}
	return false;
}

function save_forum_widget_message(fnm){
	var currTxtarea = '';
	
	if($('form#'+fnm+' #f_message').length > 0){
		var f_topicid = $('form#'+fnm+' #f_topicid').val();
		var ref_page_id = $('form#'+fnm+' #ref_page_id').val();
		var f_thread_id = $('form#'+fnm+' #f_thread_id').val();
		
		currTxtarea = $('form#'+fnm+' #f_message');
		$('#txt_forum_widget_curr_msg_id').val(fnm);
		
		var currTxtareaVal = $.trim(currTxtarea.val());
		var err = 0;
		
		if(currTxtareaVal == ''){
			err++;
			alert('Please enter message.');
			currTxtarea.focus();
			return false;
		}
		
		currTxtareaVal = currTxtareaVal.replace(/\s\s+/g, ' ');
		var msg_word_count = currTxtareaVal.split(' ');
		
		if(currTxtareaVal.length <= 49 && msg_word_count.length <= 9){
			err++;
			alert('Enter minimum 10 words.');
			currTxtarea.focus();
			return false;
		}
		
		if(err == 0){
			if(USERNMMC != false && USERNMMC != 'false' && USERNMMC != ''){
				var ajx_url = FORUM_SITEURL+'index.php?q=home/ajax_call&section=post_message&callback=save_forum_widget_message_response&m_type=message&f_message='+escape(currTxtareaVal)+'&f_topicid='+f_topicid+'&ref_page_id='+ref_page_id+'&f_thread_id='+f_thread_id;
				$.ajax({
				url : ajx_url,
				type : "POST",
				jsonp: "save_forum_widget_message_response",
				dataType : "jsonp",
				success : function(json_data) {
				}
			});
			}else{
				AFTERLOGINCALLBACK = 'save_forum_widget_message("'+fnm+'")';
				showLoginPop('login');
			}
		}
	}
	
	return false;
}
//Save message End

//Add strip for display response message START
function close_strip(el){
	setTimeout(function(){
		$(el).slideUp(200);
	}, 5000);
}

function add_info_strip(el, msg, typ_cls){
	if($.trim(msg) != ''){
		if($.trim(typ_cls) == ''){ typ_cls = ' pink '; }
		
		if($(el).parent().find('div.show_common_info_n_error').length == 0){
			$(el).after('<div class="show_common_info_n_error alert_strip '+typ_cls+' MT10" style="display:none;"><span class="ic_repsTick vmiddle MR5"></span> '+msg+'</div>');
			$(el).parent().find('div.show_common_info_n_error').slideDown(350, function(){
				setTimeout(function(){
					$(el).parent().find('div.show_common_info_n_error').slideUp(200, function(){
						$(el).parent().find('div.show_common_info_n_error').remove();
					});
				}, 3000);
			});
		}else{
			$(el).parent().find('div.show_common_info_n_error').remove();
			add_info_strip(el, msg, typ_cls);
		}
	}
	return false;
}
//Add strip for display response message END

function open_msg_popup(id, typ){
	if($('div#'+id).length > 0){
		$('div.common_popup_cls_name').slideUp(150);
		if(typ == 1){
			if(USERNMMC != false && USERNMMC != 'false' && USERNMMC != ''){
				if($.trim(USERNMMC) == 'guest' || $.trim(USERNMMC) == 'Guest'){
					alert('Sorry! Guest do not have the privilege to mark messages as offensive.');
				}else{
					$('div#'+id).slideDown(200);
				}
			}else{
				AFTERLOGINCALLBACK = 'open_msg_popup('+id+', 1)';
				showLoginPop('login');
			}
		}else{
			$('div#'+id).slideDown(200);
		}
	}
	return false;
}

function close_msg_popup(){
	$('div.common_popup_cls_name').slideUp(150);
	return false;
}

//Submit Poll Start
function submit_poll_result_mc_response(json_data){
	var poll_id = $.trim($('#txt_forum_widget_curr_msg_id').val());
	
	if(json_data.response_msg != null && json_data.response_msg != '' && json_data.response_msg != 'undefined'){
		if($.trim(json_data.response_status) == 'OK'){
			//window.location = FORUM_SITEURL+'poll/'+poll_id;
			//window.open(FORUM_SITEURL+'poll/'+poll_id, '_blank');
			total = parseInt(json_data.opt1) + parseInt(json_data.opt2) + parseInt(json_data.opt3) + parseInt(json_data.opt4); 
			opt1_per = Math.round((parseInt(json_data.opt1)/total)*100);
			opt2_per = Math.round((parseInt(json_data.opt2)/total)*100);
			opt3_per = Math.round((parseInt(json_data.opt3)/total)*100);
			opt4_per = Math.round((parseInt(json_data.opt4)/total)*100);
			
			if($('div#forum_widget_poll_res').length > 0){
				if($('div#forum_widget_poll_res div.opt_res_1').length > 0){
					$('div#forum_widget_poll_res div.opt_res_1 div.pollres2').html('<span class="grnyes bar_1" style="width:'+opt1_per+'%;"></span>');
					$('div#forum_widget_poll_res div.opt_res_1 div.pollres3').html(opt1_per+'%');
				}
				
				if($('div#forum_widget_poll_res div.opt_res_2').length > 0){
					$('div#forum_widget_poll_res div.opt_res_2 div.pollres2').html('<span class="redno" style="width:'+opt2_per+'%;"></span>');
					$('div#forum_widget_poll_res div.opt_res_2 div.pollres3').html(opt2_per+'%');
				}
				
				if($('div#forum_widget_poll_res div.opt_res_3').length > 0){
					$('div#forum_widget_poll_res div.opt_res_3 div.pollres2').html('<span class="graybar" style="width:'+opt3_per+'%;"></span>');
					$('div#forum_widget_poll_res div.opt_res_3 div.pollres3').html(opt3_per+'%');
				}
				
				if($('div#forum_widget_poll_res div.opt_res_4').length > 0){
					$('div#forum_widget_poll_res div.opt_res_4 div.pollres2').html('<span class="graybar" style="width:'+opt4_per+'%;"></span>');
					$('div#forum_widget_poll_res div.opt_res_4 div.pollres3').html(opt4_per+'%');
				}
				
				$('div#forum_widget_poll_res').slideDown();
			}
			console.log('OPT1 = '+opt1_per);
			console.log('OPT2 = '+opt2_per);
			console.log('OPT3 = '+opt3_per);
			console.log('OPT4 = '+opt4_per);
			return false;
		}else{
			alert(json_data.response_msg);
		}
	}else{
		alert("Error..!!");
	}
	
	return false;
}

function submit_poll_result_mc(poll_id) {
	var act_el = $('input.feedback_cls_'+poll_id).parent('span').parent('li').parent('ul.opinion_list').find('li.checked').length;
	var option = $.trim($('input.feedback_cls_'+poll_id).parent('span').parent('li').parent('ul.opinion_list').find('li.checked input.feedback_cls_'+poll_id).val());
	
	if(act_el == 0 || option == '' || option == 0){
		alert("Select an option.");
		return false;
	}else{
		if(poll_id != '' && option != ''){
			var isVoted = readCookie(poll_id);
			if(isVoted != false && isVoted != 'false' && isVoted != ''){
				alert("You can vote only once.");
				//window.location = FORUM_SITEURL+'poll/'+poll_id;
				return false;
			}
			
			$('#txt_forum_widget_curr_msg_id').val(poll_id);
			var ajx_url = FORUM_SITEURL+'index.php?q=home/ajax_call&section=update_poll_result&callback=submit_poll_result_mc_response&id='+poll_id+'&val='+option;
			
			$.ajax({
				url : ajx_url,
				type : "POST",
				jsonp: "submit_poll_result_mc_response",
				dataType : "jsonp",
				success: function(json_data) {
				}
			});
		}
	}
	return true;
}
//Submit Poll End

//topic/stocks follow/unfollow Start
function follow_unfollow_topic_response(json_data){
	LOADDATA = 0; var str = '';
	var msg_id = $.trim($('#txt_forum_widget_curr_msg_id').val());
	
	if(json_data.response_status != null && json_data.response_status != '' && json_data.response_status != 'undefined'){
		if(json_data.response_status == 'done' || json_data.response_status == 'following'){
			$('a#topic_follow_unfollow_txt_'+msg_id).html('<span class="ic_mfollow MR2"></span>Unfollow');
			alert(json_data.response_msg);
		}
		if($.trim(AFTERLOGINCALLBACK) != ''){ AFTERLOGINCALLBACK = ''; }
	}else{
		if(json_data.response_msg != null && json_data.response_msg != '' && json_data.response_msg != 'undefined'){
			alert(json_data.response_msg);
		}else{
			alert("Error..!!");
		}
	}
	
	return false;
}

function follow_unfollow_topic(tid, cid){
	if(tid != ''){
		$('#txt_forum_widget_curr_msg_id').val(tid);
		
		if(USERNMMC != false && USERNMMC != 'false' && USERNMMC != ''){
			var ajx_url = FORUM_SITEURL+'index.php?q=topic/ajax_call&section=follow_topic&callback=follow_unfollow_topic_response&tid='+tid+'&cid='+cid;
			$.ajax({
				url : ajx_url,
				type : "POST",
				jsonp: "follow_unfollow_topic_response",
				dataType : "jsonp",
				success : function(json_data) {
				}
			});
		}else{
			AFTERLOGINCALLBACK = 'follow_unfollow_topic('+tid+','+cid+')';
			showLoginPop('login');
		}
	}
	return false;
}
//topic/stocks follow/unfollow End

//boarder follow/unfollow Start
function followunfollow_boarder_response(json_data){
	LOADDATA = 0; var str = '';
	var msg_id = $.trim($('#txt_forum_widget_curr_msg_id').val());
	
	if(json_data.response_msg != null && json_data.response_msg != '' && json_data.response_msg != 'undefined'){
		alert(json_data.response_msg);
		var followcount = $('#follower_cnt_'+msg_id).html();
		
		if($.trim(json_data.action_type) == 'follow'){
			$('a#follow_id_'+msg_id).html('Unfollow');
			followcount++;
		}else if($.trim(json_data.action_type) == 'unfollow'){
			$('a#follow_id_'+msg_id).html('Follow');
			followcount--;
		}
		$('#follower_cnt_'+msg_id).html(followcount);
		
		if($.trim(AFTERLOGINCALLBACK) != ''){ AFTERLOGINCALLBACK = ''; }
	}else{
		alert("Error..!!");
	}
	
	return false;
}

function followunfollow_boarder(id){
	if(id != ''){
		$('#txt_forum_widget_curr_msg_id').val(id);
		
		if(USERNMMC != false && USERNMMC != 'false' && USERNMMC != ''){
			var ajx_url = FORUM_SITEURL+'index.php?q=boarder/ajax_call&section=follow_unfollow_boarder&callback=followunfollow_boarder_response&fid='+id;
			$.ajax({
				url : ajx_url,
				type : "POST",
				jsonp: "followunfollow_boarder_response",
				dataType : "jsonp",
				success : function(json_data) {
					//hideLoader();
				}
			});
		}else{
			AFTERLOGINCALLBACK = 'followunfollow_boarder("'+id+'")';
			showLoginPop('login');
		}
	}
	return false;
}
//boarder follow/unfollow End

function open_msg_share_popup(msid, url){
	var share_msg_text='<div class="arrow" style="margin-left:180px"></div>'+
							'<div>'+
								'<div class="tar PB5"><a onClick="close_msg_popup();" class="m3_cls" href="javascript:void(0);"></a></div>'+
								'<div style="padding-right:5px;" class="FL">'+
									'<iframe scrolling="no" frameborder="0" allowtransparency="true" style="border:none; overflow:hidden; width:200px; height:80px;" src="https://www.facebook.com/plugins/like.php?href='+escape(url)+'&amp;layout=standard&amp;show_faces=true&amp;width=200&amp;action=recommend&amp;font=arial&amp;colorscheme=light&amp;height=80"></iframe>'+
								'</div>'+
								'<div style="padding-left:10px;" class="FL brdrl">'+
									'<iframe allowtransparency="true" frameborder="0" scrolling="no" src="https://platform.twitter.com/widgets/tweet_button.html?url='+escape(url)+'&amp;source=moneycontrol&amp;style=&count=vertical" style="width:57px; height:70px;"></iframe>'+
								'</div>'+
								'<div style="padding-left:10px;" class="FL brdrl">'+
								'</div>'+
							'</div><div class="CL"></div>';
						'</div>';

	$('div.common_popup_cls_name').slideUp(150);
	$('#share_msg_'+msid).html(share_msg_text);
	$('div#share_msg_'+msid).slideDown(200);
}

//Reply message Start
function save_reply_response(json_data){
	LOADDATA = 0; var str = '';
	var msg_id = $.trim($('#txt_forum_widget_curr_msg_id').val());
	
	if(json_data.response_status != null && json_data.response_status != '' && json_data.response_status != 'undefined'){
		if(json_data.response_status == 'done'){
			$('#reppop_'+msg_id).slideUp();
			$('#reppop_'+msg_id+' #r_message').val('');
			
			if($.trim(AFTERLOGINCALLBACK) != ''){ AFTERLOGINCALLBACK = ''; }
			if($.trim(AFTERNICKNAMECALLBACK) != ''){ AFTERNICKNAMECALLBACK = ''; }
			alert(json_data.response_msg);
		}else if(json_data.response_status == 'nk_blank'){
			alert("Kindly add your nick name.");
			window.location = FORUM_SITEURL;
			return false;
		}
		
		if(json_data.response_msg != null && json_data.response_msg != '' && json_data.response_msg != 'undefined' && json_data.response_status != 'done'){
			alert(json_data.response_msg);
		}else if(json_data.response_status != 'done'){
			alert('Error..!!');
		}
	}else{
		alert("Error..!!");
	}
						
	return false;
}

function save_reply_msg(id){
	if($('div#reppop_'+id).length > 0 && $('div#reppop_'+id+' textarea#r_message').length > 0){
		var currTxtarea = $('div#reppop_'+id+' textarea#r_message');
		var currTxtareaVal = $.trim(currTxtarea.val());
		var err = 0;
		$('#txt_forum_widget_curr_msg_id').val(id);
		
		if(currTxtareaVal == ''){
			err++;
			alert('Please enter message.');
			currTxtarea.focus();
			return false;
		}
		
		currTxtareaVal = currTxtareaVal.replace(/\s\s+/g, ' ');
		var msg_word_count = currTxtareaVal.split(' ');
		
		if(currTxtareaVal.length <= 49 && msg_word_count.length <= 9){
			err++;
			alert('Enter minimum 10 words.');
			currTxtarea.focus();
			return false;
		}
		
		if(err == 0){
			if(USERNMMC != false && USERNMMC != 'false' && USERNMMC != ''){
				var ajx_url = FORUM_SITEURL+'index.php?q=home/ajax_call&section=post_message&callback=save_reply_response&r_rply_id='+id+'&r_message='+escape(currTxtareaVal);
				$.ajax({
					url : ajx_url,
					type : "POST",
					jsonp: "save_reply_response",
					dataType : "jsonp",
					success : function(json_data) {
					}
				});
			}else{
				//alert("Please login.");
				AFTERLOGINCALLBACK = 'save_reply_msg('+id+')';
				showLoginPop('login');
			}
		}
	}
	return false;
}
//Reply message End

//Message like Start
function msg_like_response(json_data){
	LOADDATA = 0; var str = '';
	var msg_id = $.trim($('#txt_forum_widget_curr_msg_id').val());
	
	if(json_data.response_status != null && json_data.response_status != '' && json_data.response_status != 'undefined'){
		if(json_data.response_status == 'OK'){
			$('a#a_btn_msg_like_'+msg_id).attr('rel', '1');
			alert(json_data.response_msg);
		}else{
			alert(json_data.response_msg);
		}
		if($.trim(AFTERLOGINCALLBACK) != ''){ AFTERLOGINCALLBACK = ''; }
	}else{
		alert("Error..!!");
	}
	
	return false;
}

function msg_like_request(id){
	if(id != ''){
		$('#txt_forum_widget_curr_msg_id').val(id);
		var is_liked = $.trim($('a#a_btn_msg_like_'+id).attr('rel'));
		
		if(is_liked == '1' || is_liked == 1){
			alert('You have already liked.');
			return false;
		}else{
			if(USERNMMC != false && USERNMMC != 'false' && USERNMMC != ''){
				var ajx_url = FORUM_SITEURL+'index.php?q=home/ajax_call&section=msg_like&callback=msg_like_response&mid='+id;
				$.ajax({
					url : ajx_url,
					type : "POST",
					jsonp: "msg_like_response",
					dataType : "jsonp",
					success : function(json_data) {
					}
				});
			}else{
				//alert("Please login.");
				AFTERLOGINCALLBACK = 'msg_like_request("'+id+'")';
				showLoginPop('login');
			}
		}
	}
	
	return false;
}
//Message like End

//Message repost Start
function msg_repost_response(json_data){
	LOADDATA = 0; var str = '';
	var msg_id = $.trim($('#txt_forum_widget_curr_msg_id').val());
	
	if(json_data.response_status != null && json_data.response_status != '' && json_data.response_status != 'undefined'){
		if(json_data.response_status == 'OK'){
			$('a#a_btn_msg_repost_'+msg_id).attr('rel', '1');
			alert(json_data.response_msg);
			/*$('#repost_msg_'+msg_id+' #repost_txt_'+msg_id).html('Thank you <strong>'+json_data.msg_reposted_by+'</strong> for reposting this message.');
			
			setTimeout(function(){
				$('#repost_msg_'+msg_id).slideUp(100);
			}, 3500);*/
		}else{
			alert(json_data.response_msg);
		}
		if($.trim(AFTERLOGINCALLBACK) != ''){ AFTERLOGINCALLBACK = ''; }
	}else{
		alert("Error....!!");
	}
	
	return false;
}

function msg_repost_request(id){
	if(id != ''){
		$('#txt_forum_widget_curr_msg_id').val(id);
		var is_repost = $.trim($('a#a_btn_msg_repost_'+id).attr('rel'));
		
		if(is_repost == '1' || is_repost == 1){
			alert('You have already reposted this message.');
			return false;
		}else{
			if(USERNMMC != false && USERNMMC != 'false' && USERNMMC != ''){
				var ajx_url = FORUM_SITEURL+'index.php?q=home/ajax_call&section=msg_repost&callback=msg_repost_response&mid='+id;
				$.ajax({
					url : ajx_url,
					type : "POST",
					jsonp: "msg_repost_response",
					dataType : "jsonp",
					success : function(json_data) {
					}
				});
			}else{
				//alert("Please login.");
				AFTERLOGINCALLBACK = 'msg_repost_request("'+id+'")';
				showLoginPop('login');
			}
		}
	}
	
	return false;
}
//Message repost End

function overlay_screen(n){
	document.getElementById('login_back_overlay').style.width = document.body.clientWidth + "px";
	document.getElementById('login_back_overlay').style.height = document.body.clientHeight +"px";
	document.getElementById('login_back_overlay').style.display = 'block';
	jQuery.fn.center = function () {
		this.css("position","absolute");
		//this.css("position","fixed");
		var topPos = ($(window).height() - this.height() ) / 2;
		this.css("top", -topPos).show().animate({'top':topPos},300);
		this.css("left", ( $(window).width() - this.width() ) / 2);
		return this;
	}
	
	setTimeout(function(){$('#backInner'+n).center()},100);
}

function closeoverlay_screen(n){
	document.getElementById('login_back_overlay').style.display = 'none';
	document.getElementById('backInner'+n).style.display = 'none';
}

function loadImage(e){
    if(e == 0){ $("#ldimgr").html('<img border="0" src="https://images.moneycontrol.com/images/simple_watchlist/ajax-loader.gif" align="absmiddle">'); }else{ $("#ldimgr").html(""); }
}

$(window).load(function(e) {
	USERNMMC = readCookie("nnmc");
	
	$("#bgtArc .hddv").hide();
	$(".bgtYr ul li:first").addClass("active").show();
	$("#bgtArc .hddv:first").show(); 
	
	$(".bgtYr ul li").click(function() {
		$(".bgtYr ul li").removeClass("active"); 
		$(this).addClass("active"); 
		$("#bgtArc .hddv").hide();
		
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	
	if($('div.forum_widget_main .opinion_list li').length > 0){
		$('div.forum_widget_main .opinion_list li').click(function(e) {
			$('div.forum_widget_main .opinion_list li').removeClass("checked");
			$(this).addClass("checked");
			
			$('div.forum_widget_main .opinion_list li input:radio').attr('checked', false);
			$('div.forum_widget_main .opinion_list li.checked input:radio',this).attr('checked', true)
            return false;
        });
	}
	
	if($('.chart_scroll').length > 0){
		$('.chart_scroll').jScrollPane(
			{verticalDragMinHeight: 37,
			verticalDragMaxHeight: 37,
			autoReinitialise:true
		});
	}
	
	window.addEventListener("message", function(e){
		 if(e.data.afterlogin != '' && e.data.afterlogin != undefined && e.data.afterlogin != 'undefined' && e.data.afterlogin != false && e.data.afterlogin == 'afterlogin'){
			 USERNMMC = readCookie("nnmc");
			 
			 if(USERNMMC != false && USERNMMC != 'false' && USERNMMC != ''){
				 $("#LoginModal").modal("hide");
				 
				 if($.trim(AFTERLOGINCALLBACK) != ''){
					 eval(AFTERLOGINCALLBACK);
					 setTimeout(function(){					 	
					 	location.reload(true);
					 }, 2000);
				 }else{
					 location.reload(true);
				 }
				 
				 return false;
			 }
		 }
	 }, false);
});