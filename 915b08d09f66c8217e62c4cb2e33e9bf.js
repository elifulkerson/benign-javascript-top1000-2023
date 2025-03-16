
var wxLoginIntervalId = 0;
var wxLoginIntervalTimes = 0;

function showWxLogin(envpath,logpage){
	setCookie("doc88_lt","wx",24*365);
	getWxqr(envpath);
	checkWxLogin(logpage);
}

function showWxLoginIndex(envpath){
	setCookie("doc88_lt","wx",24*365);
	getWxqr(envpath);

	wxLoginIntervalId = window.setInterval(checkWxLoginIndex, 5000, envpath);
	checkWxLoginIndex(envpath);
}
var wxrq_if = 0;
function getWxqr(envpath){
	if(wxrq_if==1){
		return;	
	}

	$.ajax({
		url: '/member.php',
		type: 'get',
		dataType: 'html',
		data: 'act=get_wxlogin_img',
		success: function(data){
			data=eval("("+data+")");
			if (data.result == 1) {
				qrcode_img(data.url,"doc_qrcode",130);
				$("#logo img").attr('src',envpath + "/assets/uc/images/wxlogo.png");
				wxrq_if = 1;
			}
		}
	});
}

function checkWxLogin(logpage){
	wxLoginIntervalId = window.setInterval(function(){
		if (wxLoginIntervalTimes > 30) {
			window.clearInterval(wxLoginIntervalId);
		}
		$.ajax({
			url: '/member.php',
			type: 'get',
			dataType: 'json',
			data: 'act=wx_login_check',
			success: function(data){
				if (data.result == 1) {
					if (logpage == 'index') {
						window.location.href = "/uc/index.php";
					}else if(logpage == 'task_index_new'){
						window.location.reload();
					}
					else{
						var refer_url = $("#refer").val(); // refer 登录前的来源地址
						if(refer_url == ''){
							window.location.href = "/uc/index.php";
						}else{
							window.location.href = refer_url;
						}
					}

				}
			}
		});
		wxLoginIntervalTimes++;
	}, 5000);
}
function checkWxLoginIndex(envpath){
	$.ajax({
		url: '/member.php',
		type: 'get',
		dataType: 'json',
		data: 'act=wx_login_check',
		success: function(data){
			wxLoginIntervalTimes++;

			if (data.result == 1) {
				window.clearInterval(wxLoginIntervalId);
				window.location.reload();
			}

			if (wxLoginIntervalTimes == 30) {
				window.clearInterval(wxLoginIntervalId);
				$(".wx-code-reload").show();
				$(".wx-code-reload").click(function (event) {
					window.clearInterval(wxLoginIntervalId);
					$(this).hide();
					wxLoginIntervalTimes = 0;
					showWxLoginIndex(envpath);
				});
			}
		}
	});

}
function clearAjax(){
	clearInterval(wxLoginIntervalId);
}
function showLoginSuccess(){

	var refer_url = $("#refer").val(); // refer 登录前的来源地址
}

function login_back_login (logpage){
	var login_name = $('#loginname1');
	if(login_name.val() == ""){
		login_name.focus();
		return false;
	}

	var login_pwd = $('#password1');
	if(login_pwd.val() == ""){
		login_pwd.focus();
		return false;
	}

	var captchaCode = $("#captchaCode").val();
	var code = $("#wx_valide_"+wx_login_type).val();

	if(check_level==0){
		Captcha.init('nocaptcha_login_web');
		var data = "txtloginname="+login_name.val()+"&txtPassword="+encodeURIComponent(login_pwd.val())+"&captchaCode="+captchaCode;
	}
	else if (check_level == 1){
		/*
		 滑动验证
		 */
		$('.pc-error').css('display','none');
		if(captchaCode=="2"){
			Captcha.init('nocaptcha_login_web');
			if (logpage == 'index' || logpage == 'login') {
				error('nc-lang-cnt',5);
			}else{
				$("#msgs1").html("请滑动验证").slideDown();
				$("#msgs1").removeClass().addClass("error");
			}

			return false;
		}
		if(captchaCode!="1"){
			if (logpage == 'index' || logpage == 'login') {
				error('nc-lang-cnt',5);
			}else{
				$("#msgs1").html("请滑动验证").slideDown();
				$("#msgs1").removeClass().addClass("error");
			}

			return false;
		}

		var data = "txtloginname="+login_name.val()+"&txtPassword="+encodeURIComponent(login_pwd.val())+"&captchaCode="+captchaCode;
	}else if(check_level == 2){
		if(code.length!=4){
			$("#wx_error_"+wx_login_type).removeClass("hide");
			return false;
		}else{
			var res = checkWxCode();
			if(res!=1){
				$("#wx_error_"+wx_login_type).removeClass("hide");
				return false;
			}
		}

		var data = "txtloginname="+login_name.val()+"&txtPassword="+encodeURIComponent(login_pwd.val())+"&wx_code="+code;
	}
	//禁用登录点击，展示loading
	$("#login-loading-gif").show();
	$.ajax({
		type: 'post',
		url: '/member.php?act=ajax_loginsave',
		dataType: 'json',
		data: data,
		success: function(msg) {
			$("#loginLoadImg").hide();
			if (msg.result == '1')// 成功
			{
				if (logpage == 'login') {
					$(".check-it-text").html("恭喜您, 登录成功！");
					$url = $("#refer").val(); // refer 登录前的来源地址
					if($url == ''){
						window.location.href = "/uc/usr_center.php";
					}else{
						window.location.href = "/";
					}
				}else if(logpage == 'index'){
					window.location.href = "index.php";
				}else if(logpage == 'union'){

					window.location.href = "/docunion.php?act=my_union";
				}

			}
			else if(msg.result==5)
			{
				//$('.analog-check').hide();
				$("#loginSubmit").attr("disabled", false);
				$("#loginname1").attr("disabled", false);
				$("#password1").attr("disabled", false);
				Captcha.init('nocaptcha_login_web',1);
				//$(".reg-silder").show();
				$("#login-loading-gif").hide();
			}
			else if(msg.result==6){
				check_level = 2;
				// 微信验证码
				//qrcode_img_spe(wx_code,"doc_qrcode",124);
				getWxcode();
				//出现微信验证码
				$(".reg-silder").hide();
				$("#wx_login_code_"+wx_login_type).show();


				$("#login-loading-gif").hide();

				$('.pc-error').css('display','').html(msg.message);

				$('.pc-error').addClass('shake animated infinite');
			
			}
			else{
				$("#login-loading-gif").hide();
				$('.pc-error').css('display','').html(msg.message);
				$('#wx_valide_big').attr('value','');
				$('.pc-error').addClass('shake animated infinite');
				setTimeout(function(){
					$('.pc-error').removeClass('shake animated infinite');
					$('.pc-error').css('display','none').html("");
				}, 2000);

				if(msg.result!=4){
					Captcha.init('nocaptcha_login_web');
				}

				if(check_level==2)
				{
					// 微信验证码
					getWxcode();
					$(".reg-silder").hide();
					$("#wx_login_code_"+wx_login_type).show();
					$("#login-loading-gif").hide();
				}
				else
				{
					Captcha.init('nocaptcha_login_web');
					$("#login-loading-gif").hide();
				}

			}
		}
	});
	return false;
}
//登录按钮
function login_back (logpage){
	//$("#msgs1").html("").slideUp();
	var login_name = $('#loginname1');
	if(login_name.val() == ""){
	   login_name.focus();
	   return false;
	}

	var login_pwd = $('#password1');
	if(login_pwd.val() == ""){
	   login_pwd.focus();
	   return false;
	}

	var captchaCode = $("#captchaCode").val();

	if (check_level == 1){
		/*
		滑动验证
		*/
		if(captchaCode=="2"){
			Captcha.init('nocaptcha_login');
			console.log('3');
			if (logpage == 'index' || logpage == 'login') {
				//$(".error-msg").html("请滑动验证");
				//$(".nc-lang-cnt").css('color','red');
				error('nc-lang-cnt',5);
			}else{
				// $("#msgs1").html("请滑动验证").slideDown();
				// $("#msgs1").removeClass().addClass("error");
				$("#msgs1").html("请滑动验证").slideDown();
				$("#msgs1").removeClass().addClass("error");
			}

			return false;
		}
		if(captchaCode!="1"){
			if (logpage == 'index' || logpage == 'login') {
				//$(".error-msg").html("请滑动验证");
				//$(".nc-lang-cnt").css('color','red');
				error('nc-lang-cnt',5);
			}else{
				// $("#msgs1").html("请滑动验证").slideDown();
				// $("#msgs1").removeClass().addClass("error");
				$("#msgs1").html("请滑动验证").slideDown();
				$("#msgs1").removeClass().addClass("error");
			}

			return false;
		}

		var data = "txtloginname="+login_name.val()+"&txtPassword="+encodeURIComponent(login_pwd.val())+"&captchaCode="+captchaCode;
	}else if(check_level == 2){
		var code = $("#wx_valide_"+wx_login_type).val();
		if(code.length!=4){
			$("#wx_error_"+wx_login_type).removeClass("hide");
			return false;
		}else{
			var res = checkWxCode();
			if(res!=1){
				$("#wx_error_"+wx_login_type).removeClass("hide");
				return false;
			}
		}

		var data = "txtloginname="+login_name.val()+"&txtPassword="+encodeURIComponent(login_pwd.val())+"&wx_code="+code;
	}
	//禁用登录点击，展示loading
	$("#login-loading-gif").show();
	$.ajax({
		type: 'post',
		url: '/member.php?act=ajax_loginsave',
		dataType: 'json',
		data: data,
		success: function(msg) {
			$("#loginLoadImg").hide();
			if (msg.result == '1')// 成功
			{

				if (logpage == 'login') {
					$(".check-it-text").html("恭喜您, 登录成功！");
					$url = $("#refer").val(); // refer 登录前的来源地址
					if($url == ''){
					   window.location.href = "/uc/usr_center.php";
					}else{
					   window.location.href = "/";
					}
				}else if(logpage == 'index'){

					   window.location.href = "index.php";
				}else if(logpage == 'union'){

					window.location.href = "/docunion.php?act=my_union";
				}

			}
			else if(msg.result==5)
			{
				$("#loginSubmit").attr("disabled", false);
				$("#loginname1").attr("disabled", false);
				$("#password1").attr("disabled", false);
				Captcha.init('nocaptcha_login',1);
				$("#login-loading-gif").hide();
			}
			else if(msg.result==6){
				check_level = 2;
				// 微信验证码
				qrcode_img_spe(wx_code,"doc_qrcode",124);

				//出现微信验证码
				$(".reg-silder").hide();
				$("#wx_login_code_"+wx_login_type).show();
				$("#login-loading-gif").hide();
				$('.pc-error').css('display','').html("请输入微信验证码");
				$('.pc-error').addClass('shake animated infinite');
				$("#login-btn").attr("onclick","return login_back('login');");
			}
			else{
				$("#login-loading-gif").hide();
				$("#login-btn").attr("onclick","return login_back('login');");
			
				$('.pc-error').css('display','').html("帐号或密码有误");
				$('#wx_valide_index').attr('value','');
				$('.pc-error').addClass('shake animated infinite');
			   
				if(check_level==2)
				{
					// 微信验证码
					qrcode_img_spe(wx_code,"doc_qrcode",124);
					//出现微信验证码
					$(".reg-silder").hide();
					$("#wx_login_code_"+wx_login_type).show();
					$("#login-loading-gif").hide();
				}
				else
				{
					Captcha.init('nocaptcha_login');
					//$(".reg-silder").show();
					$("#login-loading-gif").hide();
				}

			}
		}
	});

	return false;
}


//登录按钮
function login_back_index (logpage){
	$("#login-btn").addClass("disabled").removeClass("onclick").html("登 录 中");
	var login_name = $('#loginname1');
	if(login_name.val() == ""){
		login_name.focus();
		$("#login-btn").removeClass("disabled").html("登 录").attr("onclick","return login_back_index('login');");
		return false;
	}
	var login_pwd = $('#password1');
	if(login_pwd.val() == ""){
		login_pwd.focus();
		$("#login-btn").removeClass("disabled").html("登 录").attr("onclick","return login_back_index('login');");
		return false;
	}
	if (check_level == 1){
		var captchaCode = $("#captchaCode").val();
		if(captchaCode=="2"){
			Captcha.init('nocaptcha_login');
			if (logpage == 'index' || logpage == 'login') {
				error('nc-lang-cnt',5);
			}else{
				$("#msgs1").html("请滑动验证").slideDown();
				$("#msgs1").removeClass().addClass("error");
			}
			$("#login-btn").removeClass("disabled").html("登 录").attr("onclick","return login_back_index('login');");
			return false;
		}
		if(captchaCode!="1"){
			if (logpage == 'index' || logpage == 'login') {
				error('nc-lang-cnt',5);
			}else{
				$("#msgs1").html("请滑动验证").slideDown();
				$("#msgs1").removeClass().addClass("error");
			}
			$("#login-btn").removeClass("disabled").html("登 录").attr("onclick","return login_back_index('login');");
			return false;
		}
		var data = "txtloginname="+login_name.val()+"&txtPassword="+encodeURIComponent(login_pwd.val())+"&captchaCode="+captchaCode;
	}else if(check_level==2){
		var code = $("#wx_valide_index").val();
		if(code.length!=4){
			$("#wx_error_index").removeClass("hide");
			return false;
		}else{
			var res = checkWxCode();
			if(res!=1){
				$("#wx_error_index").removeClass("hide");
				$("#login-btn").removeClass("disabled").html("登 录").attr("onclick","return login_back_index('login');");
				return false;
			}
		}
		var data = "txtloginname="+login_name.val()+"&txtPassword="+encodeURIComponent(login_pwd.val())+"&wx_code="+code;
	}
	$("#login-loading-gif").show();
	$("#login-btn").attr("onclick","return false;");
	$.ajax({
		type: 'post',
		url: '/member.php?act=ajax_loginsave',
		data: data,
		dataType: 'json',
		success: function(msg) {
			$("#loginLoadImg").hide();
			$("#login-btn").removeClass("disabled").html("登 录").attr("onclick","return login_back_index('login');");
			if (msg.result == '1')// 成功
			{
				window.location.reload();
			}
			else if(msg.result==6){
				check_level = 2;
				$(".captcha-able").hide();
				$('.analog-check').css('display','none');
				// 微信验证码
				getWxcode();
				$("#wx_login_code_index").show();
				$('.error-msg').html("请输入微信验证码").show();
			}
			else if(msg.result==5){
				$(".captcha-able").show();
				Captcha.reset();
				
			}
			else{
				$('.error-msg').html("帐号或密码有误").show();
				$('#wx_valide_index').attr('value','');
				if(msg.result!=4){
					Captcha.init('nocaptcha_login');
				}
			}
		}
	});

	return false;
}

function getWxcode(){
	$.ajax({
		url:'/index.php?act=ajax_fetch_wx_code',
		type:'get',
		dataType:'json',
		success:function(msg){
			qrcode_img_spe(msg,"doc_qrcode",124);
		}
	});
}
// 闪烁提示
function normal(cls,times){          
   var obj=$("."+cls);    
   obj.css("color","#444444");    
   if(times<0){     
	  return;    
   }    
   times=times-1;    
   setTimeout("error('"+cls+"',"+times+")",150);    
}    
// 闪烁提示
function error(cls,times){          
   var obj=$("."+cls);    
   obj.css("color","red");    
   times=times-1;    
   setTimeout("normal('"+cls+"',"+times+")",150);    
} 
//密码登陆切换
function pw_cutover(obj){
$(obj).parents('.wx').removeClass('show');
$('.pw').addClass('show');
}


// 手机号登录错误提示
function showMobileLoginError(message) {
	$('.pc-error').css('display','').html(message);
	$('.pc-error').addClass('shake animated infinite');
}

var is_send = true;
var num = 60
// 获取短信验证码
function getPhoneCode() {
	if (is_send == false) {
		return false
	}

	// 验证手机号
	var mobile_phone = $('#mobilephone').val();

	if (mobile_phone == '') {
		showMobileLoginError('请输入手机号');
		$('#mobilephone').focus();
		return false;
	}

	if (!(/^1[3456789]\d{9}$/.test(mobile_phone))) {
		showMobileLoginError('手机号码格式不正确');
		return false;
	}

	// 验证滑块
	var captchaCode = $("#captchaCode").val();
	if (captchaCode == "2") {
		error('nc-lang-cnt',5);
		//showMobileLoginError('请滑动验证');
		return false;
	}
	if (captchaCode != "1") {
		error('nc-lang-cnt',5);
		//showMobileLoginError('请滑动验证');
		return false;
	}
	// 发送短信
	$.ajax({
		url: '/doc.php',
		type: 'get',
		dataType: 'json',
		data: 'act=send_sms&source=2&fk=20228888&type=0&phone=' + mobile_phone,
		beforeSend: function () {
			$('.phone-code-btn').html('发送中..');
			is_send = false
		},
		success: function (msg) {
			if (msg.result == 0) {
				$('.phone-code-btn').html('已发送');
				//开启倒计时
				var timer = setInterval(function countDown() {
					num--
					$('.phone-code-btn').html(num + 's')
					if (num <= 0) {
						clearInterval(timer)
						$('.phone-code-btn').html('获取验证码');
						num = 60
						is_send = true
					}
				}, 1000)
			} else {
				showMobileLoginError(msg.message);
				$('.phone-code-btn').html('获取验证码');
				is_send = true

				return false;
			}

		}
	})
}
var is_submit = true;
// 手机号登录提交
function phoneLoginSubmit() {
	if (is_submit == false) {
		return false
	}

	var mobile_phone = $('#mobilephone').val();
	var mobile_phone_code = $("#mobilephonecode").val();

	if (mobile_phone == '') {
		$('#mobilephone').focus();
		return false;
	}

	if (!(/^1[23456789]\d{9}$/.test(mobile_phone))) {
		showMobileLoginError('手机号码格式有误');
		return false;
	}

	var captchaCode = $("#captchaCode").val();
	if (captchaCode == "2") {
		//showMobileLoginError('请滑动验证');
		error('nc-lang-cnt',5);
		return false;
	}
	if (captchaCode != "1") {
		error('nc-lang-cnt',5);
		//showMobileLoginError('请滑动验证');
		return false;
	}

	if (mobile_phone_code == '') {
		showMobileLoginError('请输入验证码');
		$("#mobilephonecode").focus();
		return false;
	}
	if (mobile_phone_code.length != 5) {
		showMobileLoginError('验证码格式有误');
		return false;
	}
	is_submit = false;
	var data = "phone=" + mobile_phone + "&sms_checkcode=" + mobile_phone_code;
	$("#loginLoadImg").show();
	$("#loginSubmit").attr("disabled", "disabled");

	$("#mobilephone").attr("disabled", "disabled");
	$("#mobilephonecode").attr("disabled", "disabled");

	$.ajax({
		type: 'post',
		url: '/mobile/mobile.php?act=phone_member_check',
		dataType: 'json',
		data: data,
		success: function (msg) {
			$("#loginLoadImg").hide();
			if (msg.code == 1) {
				window.location.reload();
			} else {
				showMobileLoginError('验证码有误');
				is_submit = true;

				$("#mobilephone").attr("disabled", false);
				$("#mobilephonecode").attr("disabled", false);
				$("#mobile").show();

				Captcha.init('nocaptcha_phone');
				$("#captchaCode").val('0');
				return false;
			}
		}
	});
	return false;
}