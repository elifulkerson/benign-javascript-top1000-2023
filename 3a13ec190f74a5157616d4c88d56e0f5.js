var jump_links = {"qrqm":{"name":"私人定制","link":"//www.mama.cn/index.php?g=Home&a=Qrqm&d=skip"},
						  "beiyun":{"name":"备孕频道","link":"//www.mama.cn/baby/beiyun/"},
				  		  "youer":{"name":"1-3岁频道","link":"//www.mama.cn/baby/youer/"},
				  		  "xueqian":{"name":"3-6岁频道","link":"//www.mama.cn/baby/xueqian/"},
				  		  "qrqm_jump":{"name":"","link":"//www.mama.cn/jump.html"}
				 };


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
	
	function SetCookie(name, value, domain,days) { //两个参数，一个是cookie的名子，一个是值  
		var exp = new Date(); //new Date("December 31, 9998");  
		if(typeof(days) == 'undefined'){
			days = 1;
		}
		exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	}
	
	function DateDiff1(d1, d2) {
		var day = 24 * 60 * 60 * 1000;
		try {
			var dateArr = d1.split("-");
			var checkDate = new Date();
			checkDate.setFullYear(dateArr[0], dateArr[1] - 1, dateArr[2]);
			var checkTime = checkDate.getTime();

			var dateArr2 = d2.split("-");
			var checkDate2 = new Date();
			checkDate2.setFullYear(dateArr2[0], dateArr2[1] - 1, dateArr2[2]);
			var checkTime2 = checkDate2.getTime();

			var cha = (checkTime - checkTime2) / day;
			return parseInt(cha);
		} catch (e) {
			return false;
		}
	}


	// qrqm (私人定制)
	function right_qrqm_block(data,now_date){ // bb_type: 1准备怀孕  2怀孕中  3有宝宝  4其他
		
		if(data['uid']){
			
			qrqm_date = data['bb_message'];
			$('#qrqm_box').show();
			$('#qrqm_datepicker').hide();
			
			
			if($.trim(data.avatar) == "0"  || $.trim(data.avatar) == "" ){
				data.avatar = '//avatar.mama.cn/021/20/24/75_avatar_middle.jpg';
			}
			
			$('#qrqm_user_avatar').attr("src", data.avatar);
			$('#qrqm_user_link').attr('href','http://www.mama.cn/u/'+data['uid']+'/'); //个人中心
			$('#qrqm_user').text(data['username']);
	    	$('#qrqm_user').attr('href','http://www.mama.cn/u/'+data['uid']+'/'); //个人中心
			
			if (data['bb_type'] == 3 || (data['bb_type'] == 2 && now_date > data['bb_message'])  ) {
				$('#bb_type').text('有宝宝');
				$('#bb_message').html('宝宝生日为：<strong>' + data['bb_message'] + '</strong>');
				var day_diff = DateDiff1(now_date, data['bb_message']);
				if (day_diff <= 365) {
					$('#qrqm_change_link').attr('href', jump_links.qrqm.link);	
				}
				if (day_diff > 365 && day_diff <= 1095) {//1-3
					$('#qrqm_change_link').attr('href', jump_links.qrqm.link);
					$('#qrqm_change_link').html("进入"+jump_links.qrqm.name);
				}
				if (day_diff > 1095) { //3-6
					$('#qrqm_change_link').attr('href', jump_links.qrqm.link);
					$('#qrqm_change_link').html("进入"+jump_links.qrqm.name);
				}
			} else if (data['bb_type'] == 2 && data['bb_message'] > now_date) {
				$('#bb_type').text('怀孕中');
				var day_diff = DateDiff1(data['bb_message'], now_date);
				$('#bb_message').html('距离预产期：<strong>' + day_diff + '</strong>天');
				//$('#cid1').val(2);
				$('#qrqm_change_link').attr('href',jump_links.qrqm.link);
				
			} else if (data['bb_type'] == 1) {
				$('#bb_type').text('备孕');
				$('#bb_message').text('备孕中');
				//$('#cid1').val(81);
				$('#qrqm_change_link').attr('href', jump_links.beiyun.link);
				$('#qrqm_change_link').html("进入"+jump_links.beiyun.name);
			} else {
				$('#bb_type').text('其它');
				//$('#order').attr('href', 'http://www.mama.cn/jump.html'); //修改资料
				$('#bb_message').text('');
				$('#qrqm_change_link').attr('href', 'http://www.mama.cn/u/'+data['uid']+'/profile/');
				$('#qrqm_user').text('修改宝宝日期');
			}
			
		}else{  // not_login
			
			var orderdate = $.trim(myGetCookie('orderdate')); 
			
			$('#qrqm_box').hide();
			$('#qrqm_datepicker').show();	
			if (orderdate != '') {
				day_diff = DateDiff1(now_date,orderdate);
				if( day_diff < -279 || day_diff > 364 ){
					SetCookie('orderdate','','mama.cn',0);  // 超过时间范围, cookie 设置失效
				}else{
					
					$("#datepicker").val(orderdate);
					qrqm_date = orderdate;
				}
			}
		}
	}
	
	
	// 右侧推荐数据块处理  /cms_shtml/php/qrqm.php?action=right_block&type=ajax&mydebug=4&qrqm_date=2014-10-25  
	function right_qrqm_ajax(qrqm_date){ 
	 	$.getJSON('/cms_shtml/php/qrqm.php?action=right_block&type=ajax&qrqm_date='+qrqm_date+'&i='+Math.floor(Math.random()*100024),function(data){ 
			if(data.today_read.length > 0){
				//alert(qrqm_date+'   '+data.qrqm_age);
				$('#qrqm_todyread_title').show();
				$('#qrqm_todyread_con').show();
				$("#qrqm_todyread_con").empty();
				$.each(data.today_read, function(i,data_item){
					//alert(data_item.title);
					$("#qrqm_todyread_con").append('<li><div class="loginRec cl"><p class="l"><a target="_blank" href="'+data_item.url+'"><img width="110" height="80" src="'+data_item.thumb_pic+'"></a></p><dl class="r"><dt><a target="_blank" href="'+data_item.url+'">'+data_item.title+'</a></dt><dd><a href="'+data_item.url+'">'+data_item.desc+'</a></dd></dl></div><p class="relate"><a href="'+data_item.suburl+'">相关阅读:'+data_item.subtitle+'</a></p></li>');
				});
			}
			if(data.tlq.length > 0){
				$('#qrqm_tlq_title').html("<span>"+data.qrqm_age_des+"妈妈关注话题</span>");
				$('#qrqm_tlq_title').show();
				$('#qrqm_tlq_con').show();
				$("#qrqm_tlq_con").empty();
				$.each(data.tlq, function(i,data_item){
					classAdd = '';
					if(i <= 1)	classAdd = "class=\"sep\"";
					$("#qrqm_tlq_con").append("<li><a  "+classAdd+" href='"+data_item.url+"' target='_blank'>"+data_item.subject+"</a></li>");
				});
			}
		});
	}
	
	function mamacn_index(data){
		$("#backHome a").addClass("now");		
		if(data['uid']){
			$('#date').hide();
			$('#login').show();
			
			
			$('#m_profile').attr('href','http://www.mama.cn/u/'+data['uid']+'/profile/'); //修改宝宝日期
			$('#s_profile').attr('href','http://www.mama.cn/u/'+data['uid']+'/profile/'); //个人资料
			
			$('#main_username').attr('href','http://www.mama.cn/u/'+data['uid']+'/'); //个人中心
			$('#main_username').text(data['username']);
			$('#main_img').attr('href','http://www.mama.cn/u/'+data['uid']+'/'); //个人中心
			
			if($.trim(data.avatar) == "0"  || $.trim(data.avatar) == "" ){
				data.avatar = '//avatar.mama.cn/021/20/24/75_avatar_middle.jpg';
			}
			
			$('#picture').attr("src", data.avatar);
			
		
			if(data['bb_type']== 3 || data['bb_type']==2 && now_date > data['bb_message'] ){
				
				$('#bb_type').text('有宝宝');
				$('#bb_message').html('宝宝生日为：<strong>'+data['bb_message']+'</strong>');
				$('#cid1').val(1);
				$(".brief").removeClass().addClass("babyBrief");
				//$(".brief").css("background","url(http://static1.cdnmama.com/std/images/date_picker.png)");
				var dayb = DateDiff1(now_date,data['bb_message']);
				if(dayb <= 365){
					$('#inmyorder').attr('href',jump_links.qrqm.link); 
					$('#qrqm_order').attr('href',jump_links.qrqm.link); 
				}
				if( dayb > 365 && dayb <= 1095){//1-3岁
					$('#inmyorder').attr('href',jump_links.qrqm.link); 
					$('#qrqm_order').attr('href',jump_links.qrqm.link); 
				}
				if( dayb > 1095 ){ //3-6岁
					$('#inmyorder').attr('href',jump_links.qrqm.link); 
					$('#qrqm_order').attr('href',jump_links.qrqm.link); 
				}
				
			}else if(data['bb_type']==2  &&  data['bb_message'] > now_date ){
				
				$('#bb_type').text('怀孕中');
				//alert(data['bb_message']+now_date);
				var dayu = DateDiff1(data['bb_message'],now_date);
				$('#bb_message').html('距离预产期：<strong>'+dayu+'</strong>天');
				$('#cid1').val(2);
				$('#inmyorder').attr('href',jump_links.qrqm.link); 
				$('#qrqm_order').attr('href',jump_links.qrqm.link); 
				
			}else if(data['bb_type']==1){
				
				$('#bb_type').text('备孕');
				$('#bb_message').text('备孕中');
				$('#cid1').val(81);
				$('#inmyorder').attr('href',jump_links.beiyun.link); 
				
			}else{
			
				$('#bb_type').text('其它');
				//$('#qrqm_order').attr('href','http://www.mama.cn/u/'+data['uid']+'/profile/'); //修改资料   
				$('#qrqm_order').attr('href','//www.mama.cn/jump.html'); //修改资料
				$('#bb_message').text('');
				$('#myorder').hide();
				$('#setbaby').show();
				
			}
			getJingxuan(data['bb_message'],data['uid']);	
		}else{
			
			var orderdate = myGetCookie('orderdate');
			if(orderdate ==''){
				$('#qrqm_order').attr('href',jump_links.qrqm_jump.link);
			}else{
				$('#qrqm_order').attr('href',jump_links.qrqm.link); 
			}
			
			$('#date').show();
			$('#login').hide();
		}
	}
	
	function getJingxuan(bb_message,uid){
		if( bb_message!=''){
			$.getJSON('//www.mama.cn/ask/?g=Api&a=Question&d=getJingxuan&bday='+bb_message+'&rnd='+Math.random(),function(ret){
				var str = '';
			    var advstr = $('#baby_wl').html();    
				$.each(ret.data,function(i,rs){
					if(i==1 && advstr !=''){
						str += '<li>'+advstr+'</li>';
					}else{
						str += get_app_div(rs.link, rs.name);
					}
				});
				if(ret.status==0){
					$('.askList').html(str);
				}
			});

			$('#ask_profile').attr('href','http://www.mama.cn/u/'+uid+'/profile/'); //修改资料
			$('#askEp').show();
		}
	}
	
	function  get_app_div(link,name){
		var str = '';
		str += '<li><a target="_blank" href="'+ link +'">'+ name +'</a></li>';
		return str;
	}