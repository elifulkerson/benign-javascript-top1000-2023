$(document).ready(function() {
	/* Go top when refresh*/
	//$('body').css('position', 'fixed').delay(200).promise().done(function() {
	$('body').css({'position':'fixed', 'width':'100%'}).delay(200).promise().done(function() {
		$('body').css('position', 'relative');
	});

	/*visible posts*/
	var domain_link = window.location.protocol + "//" + window.location.host + "/";
	var dir_path = window.location.pathname;
	var visible_posts = "visible=false";
	if(dir_path=="/_visible"){
		visible_posts  = "visible=true";
	}
	removeRedundantPost();
	hidePosts();
	hideFilterKeywords();
    	remove_rel_nofollow();

	stickiedIconsButtons();

        var user_device = "pc";
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                user_device = "mobile"
        }

	if(user_device=="mobile"){
		$(".ads-item .side-ads-pc").remove();
	}else{
		$(".ads-item .side-ads-mobile").remove();
	}

	/***************** [Index Page] Index Recent Infinite Pagination **********************/
        if($("#more_news_index").length){

		var total_records_per_load = 15;
        	var sortby = "";
		var domain_link = window.location.protocol + "//" + window.location.host + "/";
		var ads_url = domain_link + '_ads/'+user_device+"/repeat_content";
		var recent_pagination = domain_link + '_pagination?pageno=';
		var reload_page = domain_link;
        	if(window.location.search.length > 0){
                	sortby = window.location.search;
			recent_pagination = domain_link + '_pagination'+ sortby  +'&pageno=';
			reload_page = domain_link + sortby;			
        	}

		if(dir_path=="/_visible"){
			reload_page = domain_link + "visible";
		}

		var no_more_articles = "<span id='no_more'><a href='"+reload_page+"'><h3>更新して新しい投稿を表示</h3></a></span>";
		var clicks = 1;
		var clicks_fufb = 0;
                var additional_articles_loaded = 0;

		var stick_on = $("#more_news_index").offset().top - 856.90625;
		var state = true;
		
		/*$(window).on("scroll resize", function() {
			if ($(window).scrollTop() > stick_on && $('#additional_articles_loaded').val() < 1000 && state == true) {
				stick_on = $("#more_news_index").offset().top;
                        	clicks++;
                        	additional_articles_loaded = additional_articles_loaded + total_records_per_load;

				var url = recent_pagination + clicks + "&" + visible_posts
				//var url = recent_pagination + clicks
                        	$('<div id="loader_box" align="middle"><div class="loader"></div></div>').insertAfter('#more_news_index');
                        	$("#more_news_index").hide();
                        	$.ajax({
                                	url: url,
                                	context: document.body,
                                	success: function(data) {
                                        	if(data.length != 0){
                                                	$(".threadlist").append(data);
                                                	$("#more_news_index").show();
                                                	$('#loader_box').remove();
							$(".threadlist").append($("<li class='ads_conten_main'>").load(ads_url));
							console.log(ads_url);
							console.log("test: " + total_records_per_load);
							if(user_device=="mobile"){
								//var node = document.createElement("LI");
								//var textnode = document.createTextNode(_iads.outAd(199));
								//node.appendChild(textnode);
								//document.getElementById("thread_list_posts").appendChild(node);
								//$(".threadlist").append(_iads.outAd(199));
								//$("li.ads_conten_main").html(_iads.outAd(199));
							}
							removeRedundantPost();
							hidePosts();
							hideFilterKeywords();
                        				remove_rel_nofollow();
                                        	}else{
                                                	$(no_more_articles).insertAfter(".more-posts");
							$('.more-posts').remove();
                                        	}
                                	}
                        	});

                        	$('#recent_page').val(clicks);
                        	$('#additional_articles_loaded').val(additional_articles_loaded);

				state = !state;
			}else if ($(window).scrollTop() < stick_on && state == false) {
				state = !state;
				
			}
                });*/

		$( ".refresh_button" ).on( "click", function() {
			redirect("/");
		});
		/* CLICK LOAD MORE POSTS BUTTON*/
                $( "#more_news_index" ).on( "click", function() {
                        clicks++;
                        additional_articles_loaded = additional_articles_loaded + total_records_per_load;
			var url = recent_pagination + clicks + "&" + visible_posts
			$('<div id="loader_box" align="middle"><div class="loader"></div></div>').insertAfter('#more_news_index');
                        $("#more_news_index").hide();
                        $.ajax({
                                url: url,
                                context: document.body,
                                success: function(data) {
                                	console.log("total: " + total_records_per_load);
                                        if(data.length != 0){
						$(".threadlist").append(data);
                                                $("#more_news_index").show();
                                                $('#loader_box').remove();
						$(".threadlist").append($("<li class='ads_conten_main'>").load(ads_url));

						removeRedundantPost();
						hidePosts();
						hideFilterKeywords();
                        			remove_rel_nofollow();
                                        }else{
						//$(no_more_articles).insertAfter("#more_news_index");
						//$("#no_more").fadeOut(fadeout_timeout);
						/*alert("end of default and mix top be posts - click");
						$("#more_news_index").show();
						$('#loader_box').remove();
						*/
                                                $('#more_news_index').remove();
                                                //$('#loader_box').remove();
						if(dir_path=="/_visible") redirect(dir_path);
						else redirect("/");				
                                        }
                                }
                        });

                        $('#recent_page').val(clicks);
                        $('#additional_articles_loaded').val(additional_articles_loaded);
                });


		
	}	





	/* Follow and Unfollow */
	$(document).on("click", ".unfollow-button" , function() {
		//var board = $(this).parent().closest("li[data-board]").attr('data-board');
		var board = $(this).attr('data-boardid');
		var button_obj = $(this);
                var myKeyVals = {'board':board}
		disabledButton(button_obj);
                $.ajax({
			type: 'POST',
                        url: '/_unfollow_board',
                        data: myKeyVals,
			dataType: "text",
                        success: function(data) {
                                if(data==="OK"){
					button_obj.removeClass('unfollow-button').addClass("follow-button");
                                        button_obj.prop('disabled', false);
                                        button_obj.text("フォローする");
                                }else if(data==="UA"){
					redirect("/_login");
                                }
			}
		 });

	});

        $(document).on("click", ".follow-button" , function() {
                //var board = $(this).parent().closest("li[data-board]").attr('data-board');
		var board = $(this).attr('data-boardid');
		var button_obj = $(this);
		var myKeyVals = {'board':board}
		disabledButton(button_obj);
                $.ajax({
                        type: 'POST',
                        url: '/_follow_board',
                        data: myKeyVals,
                        dataType: "text",
                        success: function(data) {
				if(data==="OK"){
					button_obj.removeClass('follow-button').addClass('unfollow-button');
                                        button_obj.prop('disabled', false);
                                        button_obj.text("フォロー");
				}else if(data==="ERR_1020"){
					button_obj.removeClass('unfollow-button').addClass("follow-button");
                                        button_obj.prop('disabled', false);
                                        button_obj.text("フォローする");
					alert("すでにフォローしました。");
                                }else if(data==="UA"){
                                        redirect("/_login");
                                }

                        }
                 });


        });

        $(document).on("click", ".follow-button-user" , function() {
                var userid = $(this).attr('id');
                var button_obj = $(this);
                var myKeyVals = {'userid':userid}
                disabledButton(button_obj);
                $.ajax({
                        type: 'POST',
                        url: '/_follow_user',
                        data: myKeyVals,
                        dataType: "text",
                        success: function(data) {

				if(data==="OK"){
					button_obj.removeClass('follow-button-user').addClass('unfollow-button-user');
					button_obj.prop('disabled', false);
					button_obj.text("フォロー");
				}else if(data==="ERR_1120"){
                                        button_obj.removeClass('unfollow-button-user').addClass("follow-button-user");
                                        button_obj.prop('disabled', false);
                                        button_obj.text("フォローする");
					alert("すでにフォローしました。");
				}else if(data==="NG"){
                                        button_obj.removeClass('unfollow-button-user').addClass("follow-button-user");
                                        button_obj.prop('disabled', false);
                                        button_obj.text("フォローする");
					alert("エラーが出ました。管理者に問い合わせてください。");
                                }else if(data==="UA"){
                                        redirect("/_login");
                                }
                        }
                 });

        });


        $(document).on("click", ".unfollow-button-user" , function() {
                var userid = $(this).attr('id');
                var button_obj = $(this);
                var myKeyVals = {'userid':userid}
                disabledButton(button_obj);
                $.ajax({
                        type: 'POST',
                        url: '/_unfollow_user',
                        data: myKeyVals,
                        dataType: "text",
                        success: function(data) {

                                if(data==="OK"){
                                        button_obj.removeClass('unfollow-button-user').addClass('follow-button-user');
                                        button_obj.prop('disabled', false);
                                        button_obj.text("フォローする");
                                /*}else if(data==="ERR_1120"){
                                        button_obj.removeClass('follow-button-user').addClass("unfollow-button-user");
                                        button_obj.prop('disabled', false);
                                        button_obj.text("Following");
                                        alert("Already Following User");*/
                                }else if(data==="NG"){
                                        button_obj.removeClass('follow-button-user').addClass("unfollow-button-user");
                                        button_obj.prop('disabled', false);
                                        button_obj.text("フォロー");
                                        alert("エラーが出ました。管理者に問い合わせてください。");
                                }else if(data==="UA"){
                                        redirect("/_login");
                                }
                        }
                 });

        });


	/*Expand post content*/
	$(document).on("click", ".fade-buttom-thread-content" , function() {
		var cont_obj = $(this);
		//remove class to expand
		cont_obj.removeClass('fade-buttom-thread-content')
	});

        $(document).on("click", ".ban_user" , function() {
                var userid = $(this).attr('id');
                var button_obj = $(this);
                var myKeyVals = {'userid':userid}
                disabledButton(button_obj);
                $.ajax({
                        type: 'POST',
                        url: '/_ban_user',
                        data: myKeyVals,
                        dataType: "text",
                        success: function(data) {
				if(data==="OK"){
					button_obj.removeClass('ban_user').addClass('unban_user');
					button_obj.removeClass('btn-info').addClass('btn-danger');
					button_obj.prop('disabled', false);
					button_obj.text("Unban");	
				}else if(data==="NG"){
					alert("エラーが出ました。管理者に問い合わせてください。");
					button_obj.prop('disabled', false);
					button_obj.text("Ban");
				}else{
					redirect("/_login");
				}
                        }
                 });

        });


	/*search posts*/
        $('#search_input').keypress(function(event){
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                        var s = $(this).val();
			if(s!=""){
				redirect("/_search?q="+s);
			}
                }
        });

	/* search boards */
	$( "#search_boards_button" ).on( "click", function() {
		var sb = $("#search_boad_input").val();

		if(sb!="" && alphanumeric(sb)){
                	var button_obj = $(this);
                	var myKeyVals = {'search_board':sb}
                	disabledButton(button_obj);
                	$.ajax({
                        	type: 'POST',
                        	url: '/_search_boards',
                        	data: myKeyVals,
                        	dataType: "json",
                        	success: function(data) {
					if(data.str!=="" && data.total > 0){
						$(".search-boards-list-box .follow-total").html("トータルボード検索: <b>" + data.total + "</b>");
						$("#search_boards").html(data.str);
						$("#search_boards").show();
                                	}else{
						$(".search-boards-list-box .follow-total").html("板を見つかりません。別の板を探してみてください。");
						$("#search_boards").hide();
					}

					button_obj.prop('disabled', false);
					button_obj.text("検索");
					$(".search-boards-list-box").show();
                        	}
                 	});
		}

        });

	/* search be user */
	$( "#search_be_user_button" ).on( "click", function() {
		var sb = $("#search_be_user_input").val();

		if(sb!="" && alphanumeric(sb)){
                	var button_obj = $(this);
                	var myKeyVals = {'search_be_user':sb}
                	disabledButton(button_obj);
                	$.ajax({
                        	type: 'POST',
                        	url: '/_search_be_user',
                        	data: myKeyVals,
                        	dataType: "json",
                        	success: function(data) {
					if(data.str!=="" && data.total > 0){
						$(".search-be-users-list-box .follow-total").html("トータルボード検索: <b>" + data.total + "</b>");
						$("#search_be_users").html(data.str);
						$("#search_be_users").show();
                                	}else{
						$(".search-be-users-list-box .follow-total").html("板を見つかりません。別の板を探してみてください。");
						$("#search_be_users").hide();
					}

					button_obj.prop('disabled', false);
					button_obj.text("検索");
					$(".search-be-users-list-box").show();
                        	}
                 	});
		}

        });


	/******** Manage Posts **********/

        /* sticky */
	$(document).on("click", ".sticky_button" , function() {
		var post_item = $(this).closest("li.thread");
		post_item.find(".post_manage_nav").attr("style","display: none;");
		var post_contents = post_item.get(0).outerHTML;
		post_contents = post_contents.replace('<a href="javascript:void(0)" class="sticky_button">[sticky]</a><a href="javascript:void(0)" class="promote_button">[promote]</a><a href="javascript:void(0)" class="age_button">[age]</a><a href="javascript:void(0)" class="sage_button">[sage]</a>',"");
		post_contents = post_contents.replace('type="button" class="btn btn-info btn-xs unfollow-button">フォロー</button>','type="button" class="btn btn-info btn-xs follow-button">フォローする</button>');
		var r = confirm("この投稿を固定しますか?");

		if (r == true) {
			
			var board = $(this).parent().parent().parent().parent().parent().parent().attr('data-board');
			var thread = $(this).parent().attr('manage-post-thread');
			var post_id = $(this).parent().attr('manage-post-id');
			var board_threadid = post_item.attr('data-board-threadid');
			var myKeyVals = {"b":board,"th":thread,"p":post_id,"post_sticky_content":post_contents,"board_threadid":board_threadid,"s":true}
			$.ajax({
				type: 'POST',
				url: '/_mod/sticky',
				data: myKeyVals,
				dataType: "json",
				success: function(data) {
					if(data.success){
						post_item.remove();
						$(".threadlist_sticky").prepend(post_contents);
						stickiedIconsButtons();
						alert(data.message);
					}else{
						alert(data.message);
					}
				}
			});		
		}
	});

        /* promote */
	$(document).on("click", ".promote_button" , function() {
                var r = confirm("Are you sure you wish to promote this post?")
                if (r == true) {

			var board = $(this).parent().parent().parent().parent().parent().parent().attr('data-board');
                        var thread = $(this).parent().attr('manage-post-thread');
                        var post_id = $(this).parent().attr('manage-post-id');
                        var myKeyVals = {"b":board,"th":thread,"p":post_id,"pr":true}
			var button_obj = $(this);
                        $.ajax({
                                type: 'POST',
                                url: '/_mod/promote',
                                data: myKeyVals,
                                dataType: "json",
                                success: function(data) {
                                        if(data.success){
						button_obj.removeClass('promote_button').addClass("demote_button");
						button_obj.text("[demote]");
                                                alert(data.message);
                                        }else{
                                                alert(data.message);
                                        }
                                }
                        });
                }
        });


        /* age */
	$(document).on("click", ".age_button" , function() {
                var r = confirm("Are you sure you wish to age this post?")
                if (r == true) {

			var board = $(this).parent().parent().parent().parent().parent().parent().attr('data-board');
                        var thread = $(this).parent().attr('manage-post-thread');
                        var post_id = $(this).parent().attr('manage-post-id');
                        var myKeyVals = {"b":board,"th":thread,"p":post_id,"a":true}
			var button_obj = $(this);
                        $.ajax({
                                type: 'POST',
                                url: '/_mod/age',
                                data: myKeyVals,
                                dataType: "json",
                                success: function(data) {
                                        if(data.success){
						button_obj.removeClass('age_button').addClass("unage_button");
						button_obj.text("[-age]");
                                                alert(data.message);
                                        }else{
                                                alert(data.message);
                                        }
                                }
                        });
                }
        });


        /* sage */
	$(document).on("click", ".sage_button" , function() {
                var r = confirm("Are you sure you wish to sage this post?")
                if (r == true) {

			var board = $(this).parent().parent().parent().parent().parent().parent().attr('data-board');
                        var thread = $(this).parent().attr('manage-post-thread');
                        var post_id = $(this).parent().attr('manage-post-id');
                        var myKeyVals = {"b":board,"th":thread,"p":post_id,"sg":true}
			var button_obj = $(this);
                        $.ajax({
                                type: 'POST',
                                url: '/_mod/sage',
                                data: myKeyVals,
                                dataType: "json",
                                success: function(data) {
                                        if(data.success){
						button_obj.removeClass('sage_button').addClass("unsage_button");
						button_obj.text("[-sage]");
                                                alert(data.message);
                                        }else{
                                                alert(data.message);
                                        }
                                }
                        });
                }
        });

        /* visible/invisible */
        $(document).on("click", ".flag_post_button" , function() {
		var flag = $(this).attr("flag-action");
		//var r = confirm("Are you sure you wish to "+flag+" this post?")
		var r = true;
		if (typeof getUrlVars()['sortby'] !== 'undefined') {
			var sb = getUrlVars()['sortby'];
		}else{
			var sb = 'energy';
		}
		if (r == true) {
			var button_flag_obj = $(this).closest("a[flag-action]");
                        var post_li = $(this).parent().closest("li[data-board]");
                        var thread = $(this).parent().attr('manage-post-thread');
                        var board_post_id = post_li.attr('data-board-threadid');
                        var myKeyVals = {'board_post_id':board_post_id,'th':thread,"flag_post":flag,"sortby":sb}
			$.ajax({
                                type: 'POST',
                                url: '/_mod/flag_post',
                                data: myKeyVals,
                                dataType: "json",
                                success: function(data) {
					if(data.success){
                                                //alert(data.message);
						//post_li.remove();
						if(flag=="visible"){
							button_flag_obj.html("[取り消す]");//<span class=\"fa fa-check-square\"></span>
							button_flag_obj.attr("flag-action","invisible");
							button_flag_obj.after("<span class=\"fa fa-check-square\"></span>");
						}else if(flag=="invisible"){
                                                        button_flag_obj.html("[承認]");
                                                        button_flag_obj.attr("flag-action","visible");
							button_flag_obj.next().remove();
						}
                                        }else{
                                                alert(data.message);
                                        }
                                }
                        });
                }
        });       


	/*hide - Hide post*/
	$(document).on("click", ".hide_post" , function() {
		//var r = confirm("このスレを非表示にしますか？")
		//if (r == true) {
			var u_pid = $(this).parent().parent().parent().parent().parent().attr('data-board-threadid');
			$("." + u_pid).hide();
			addHiddenPost(u_pid);
		//}
	});

	/* clear hide posts */
        $(document).on("click", "#clear_hide_posts" , function() {
		var r = confirm("非表示の投稿を本当に再表示しますか？")
		if (r == true) {
			clearHidePosts();
                }
        });


        /* unsticky post */
        $(document).on("click", ".unsticky_button" , function() {
                var r = confirm("固定を解除しますか？")
                if (r == true) {

			var post_li = $(this).parent().closest("li[data-board]");
			var board = post_li.attr("data-board");
			var thread = $(this).parent().find(".post_manage_nav").attr('manage-post-thread');
			var post_id = $(this).parent().find(".post_manage_nav").attr('manage-post-id');
			var board_post_id = post_li.attr('data-board-threadid');
			var myKeyVals = {'board_post_id':board_post_id,'b':board,'p':post_id,'th':thread,"s":false}
			$.ajax({
				type: 'POST',
				url: '/_mod/unsticky',
				data: myKeyVals,
				dataType: "json",
				success: function(data) {
					if(data.success){
						post_li.remove();
						alert(data.message);
						removeStickyMainBox();
					}else{
						alert(data.message);
					}
				}
			});
                }
        });

        /* demote post */
        $(document).on("click", ".demote_button" , function() {
                var r = confirm("Are you sure you wish to demote this posts?")
                if (r == true) {

			var post_li = $(this).parent().closest("li[data-board]");
			var board = post_li.attr("data-board");
                        var thread = $(this).parent().attr('manage-post-thread');
                        var post_id = $(this).parent().attr('manage-post-id');
                        var myKeyVals = {"b":board,"th":thread,"p":post_id,"demote":true}

			var button_obj = $(this);
			
                        $.ajax({
                                type: 'POST',
                                url: '/_mod/demote',
                                data: myKeyVals,
                                dataType: "json",
                                success: function(data) {
                                        if(data.success){
						button_obj.removeClass('demote_button').addClass("promote_button");
						button_obj.text("[promote]");
                                                alert(data.message);
                                        }else{
                                                alert(data.message);
                                        }
                                }
                        });
                }
        });

        /* unage post */
        $(document).on("click", ".unage_button" , function() {
                var r = confirm("Are you sure you wish to -age this posts?")
                if (r == true) {

                        var post_li = $(this).parent().closest("li[data-board]");
                        var board = post_li.attr("data-board");
                        var thread = $(this).parent().attr('manage-post-thread');
                        var post_id = $(this).parent().attr('manage-post-id');
                        var myKeyVals = {"b":board,"th":thread,"p":post_id,"unage":true}

                        var button_obj = $(this);
                        $.ajax({
                                type: 'POST',
                                url: '/_mod/unage',
                                data: myKeyVals,
                                dataType: "json",
                                success: function(data) {
                                        if(data.success){
                                                button_obj.removeClass('unage_button').addClass("age_button");
                                                button_obj.text("[age]");
                                                alert(data.message);
                                        }else{
                                                alert(data.message);
                                        }
                                }
                        });
                }
        });

        /* unsage post */
        $(document).on("click", ".unsage_button" , function() {
                var r = confirm("Are you sure you wish to -sage this posts?")
                if (r == true) {

                        var post_li = $(this).parent().closest("li[data-board]");
                        var board = post_li.attr("data-board");
                        var thread = $(this).parent().attr('manage-post-thread');
                        var post_id = $(this).parent().attr('manage-post-id');
                        var myKeyVals = {"b":board,"th":thread,"p":post_id,"unsage":true}

                        var button_obj = $(this);
                        $.ajax({
                                type: 'POST',
                                url: '/_mod/unsage',
                                data: myKeyVals,
                                dataType: "json",
                                success: function(data) {
                                        if(data.success){
                                                button_obj.removeClass('unsage_button').addClass("sage_button");
                                                button_obj.text("[sage]");
                                                alert(data.message);
                                        }else{
                                                alert(data.message);
                                        }
                                }
                        });
                }
        });

        /* remove post */
        $(document).on("click", ".remove_button" , function() {
		var r = confirm("フロントページから外してよろしいですか？");
		if (r == true) {

                        var post_li = $(this).parent().closest("li[data-board]");
                        var thread = $(this).parent().attr('manage-post-thread');
                        var board_post_id = post_li.attr('data-board-threadid');
			var thread_info = board_post_id.split("-");		
			var myKeyVals = {"b":thread_info[0],"th":thread,"p":thread_info[1]}
                        var button_obj = $(this);
			$.ajax({
                                type: 'POST',
                                url: '/_mod/remove_post',
                                data: myKeyVals,
                                dataType: "json",
                                success: function(data) {
					if(data.success){
						post_li.remove();
						alert(data.message);
                                        }else{
                                                alert(data.message);
                                        }
                                }
                        });
                }
        });	

	/* undo post */
	$(document).on("click", ".unhide-post-button" , function() {
		var deleted_id = $(this).attr('id');
		var thread_info = deleted_id.split("_");
		var button_obj = $(this);
		var myKeyVals = {'b':thread_info[0],"th":thread_info[1],"p":thread_info[2]}
		var total_post_deleted = $("#total_post_deleted").html();
		var r = confirm("Are you sure you want to undo the removal of this post?");
		if(r == true){
			$.ajax({
                        	type: 'POST',
                        	url: '/_mod/undo_remove_post',
                        	data: myKeyVals,
                        	dataType: "json",
                        	success: function(data) {
                                	if(data.success){
						$("#total_post_deleted").html(total_post_deleted - 1);
                                        	button_obj.parent().parent().remove();
					}
					alert(data.message);
                        	}
                 	});
		}
	});

	/* sortby selector */
	$( ".sortby_option_elem" ).on('change',function (e) {
		var optionSelected = $("option:selected", this);
		var valueSelected = this.value;
		if(valueSelected!="none"){
			redirect("/?sortby="+valueSelected);
		}
	});
});


/*Functions*/

function remove_rel_nofollow(){
        $("a[rel='nofollow']").each(function() {
                var url = $(this).attr('href');
                if (url.indexOf("5ch.net") > -1) {
                        $(this).removeAttr("rel");
                }
        });
}

function disabledButton(obj) {
	obj.prop('disabled', true);
	obj.text("読み込み中");
}

function redirect(url){
	window.location.href=url;
}

function removeRedundantPost() {
	var arr = [];
	$("li.thread").each(function() {
	      var board_pid = $(this).attr('data-board-threadid');

	      if(arr.indexOf(board_pid)!=-1){
	      	$("."+board_pid).last().remove();
	      }
	      arr.push(board_pid);
	});
}

function alphanumeric(inputtxt){
        var regex = /^[A-Za-z0-9]+$/
 
        var isValid = regex.test(inputtxt);

	return isValid;
}

/* Post hidden */
function addHiddenPost(b_p_id) {
	var current_list = getHiddenList();
	var new_insert = b_p_id;
	current_list.push(new_insert);
	localStorage.setItem("postsHidden", JSON.stringify(current_list));
}

function getHiddenList() {
	if(localStorage.postsHidden){
		return JSON.parse(localStorage.postsHidden);
	}else{
		return [];
	}
}

function hidePosts(){
	var hidden_arr_list = getHiddenList();
	hidden_arr_list.forEach(function(elem) {
		$("." + elem).hide();
	});
	
}

function clearHidePosts(){
	
        var hidden_arr_list = getHiddenList();
        hidden_arr_list.forEach(function(elem) {
                $("." + elem).show();
        });
		
	localStorage.setItem("postsHidden", []);
}

/** Stickied contents buttons / icons ***/
function stickiedIconsButtons(){
	if($( "#main-content-box" ).find("ul").hasClass( "threadlist_sticky" )){
		var sticky_contents = function() {
        		var nav = $(this).html();
        		var stickied_icon = "<i class=\"fa fa-thumb-tack\" title=\"Sticky\"></i>";
			var unsticky_button = "<a href=\"javascript:void(0)\" class=\"unsticky_button\">[固定を解除]</a>";
        		$(this).prepend( $( stickied_icon ) );
			if($("body").hasClass("moderator") || $("body").hasClass("admin")){
				//$(this).find(".post_manage_nav").html(unsticky_button);
				$(this).append(unsticky_button);
			}else{
				$(this).find(".post_manage_nav").remove();
			}
		};
		$('.threadlist_sticky .post_nav_buttons').each(sticky_contents);
	}
}

function removeStickyMainBox(){
	var sticky_content = $(".threadlist_sticky").html();
	var sticky_length =sticky_content.trim().length;
	if(sticky_length == 0){
		$(".threadlist_sticky").parent().parent().remove();
	}	
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

