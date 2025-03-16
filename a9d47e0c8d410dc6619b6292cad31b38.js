function CambiarTab(iddiv, sndErr){

        //modal-migrar reset
        $("#inicio").show();
        $("#migrar").hide();
        //modal-migrar reset

        console.log(sndErr);
        //http://emol50.gen.emol.cl/Registro/Exito.aspx?sndErr=true

		
		/*if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
			window.location.replace("https://pram.elmercurio.com/mobile/Login.aspx?ApplicationName=EMOL&SSOTargetUrl=https://www.emol.com/Registro/Exito.aspx");			
		}else{*/
		
			var isDetalle = "False";
			var divNew = document.getElementById('divNewAccount');
			var divLog = document.getElementById('divLogin');
			var aNew = document.getElementById('linkNewAccount');
			var aLog = document.getElementById('linkLogin');
			var urlLoginErr = "";

			if (sndErr != undefined) {
				urlLoginErr = "https://pram.elmercurio.com/mobile/Login.aspx?ApplicationName=EMOL&SSOTargetUrl=https://www.emol.com/Registro/Exito.aspx?sndErr=true";		    

			}
			else {
				urlLoginErr = "https://pram.elmercurio.com/mobile/Login.aspx?ApplicationName=EMOL&SSOTargetUrl=https://www.emol.com/Registro/Exito.aspx";		    
			}
			switch (iddiv) {
				case 'divNewAccount':
					aNew.className += " activo";
					aLog.classList.remove("activo");
					divNew.style.display = "block";
					divLog.style.display = "none";
					divNewAccount.innerHTML = "Registrate con tu correo electrónico<iframe width=\"100%\" name=\"iPram\" scrolling=\"no\" height=\"340\" src=\"https://pram.elmercurio.com/mobile/Registro.aspx?ApplicationName=EMOL&SSOTargetUrl=https://www.emol.com/Registro/ExitoRegistro.aspx\" frameborder=\"0\" allowfullscreen></iframe>";
					divNewAccount.classList.add("content_pram_new_account");

					break;
				case 'divLogin':
					aLog.className += " activo";
					aNew.classList.remove("activo");
					divLog.style.display = "block";
					divNew.style.display = "none";
					

					if (isDetalle == "True") {
					    document.getElementById('login_contenedor_fb').innerHTML = " o inicia sesión con Facebook <div class='btn_loginfb' onclick='try{getLoginEmol()}catch(error){};FB.login(function(response){try{if(response.status== \"connected\"){location.reload();}}catch(error){}});'><i class='fa fa-facebook-square fblogin_icon'></i> Iniciar sesión</div>";
						FB.init({
							appId: '316568105042097',
							//channelURL: 'http://www.emol.com/include/channel.html',
							status: true,
							xfbml: true,
							cookie: false,
							oauth: true,
							version: 'v2.9'
						});
					}
					else {

						//divLogin.innerHTML = "Ingresa con tu correo electrónico y contraseña <iframe width=\"100%\" name=\"iPram\" scrolling=\"no\" height=\"315\" src=\"" + urlLoginErr + "\" frameborder=\"0\" allowfullscreen></iframe>";
					}
					divLogin.classList.add("content_pram_account");

					break;
				default:
					aNew.className += " activo";
					aLog.classList.remove("activo");
					divNew.style.display = "block";
					divLog.style.display = "none";
					break;

			}
		//}
    }
	
	$('#Content_txtUsername').on('keyup',function(e) { 
		if (e.keyCode == 13) { 
			console.log('press 13');
			$('#Content_txtPass').focus(); 
		} 
	});
	
	$('#Content_txtPass').on('keyup',function(e) { 
		if (e.keyCode == 13) { 
			LoginEmolPram();
		} 
	});
	
		
	$('#Content_txtUsername_recover').on('keyup',function(e) { 
		if (e.keyCode == 13){
			RecoverEmolPram();
		} 
	});
	
	
	function LoginEmolPram(){
		$('.pram_error_small').html('');
		var email = $("#Content_txtUsername").val();
		var pass = $("#Content_txtPass").val();
		
		var isANumber = isNaN(email) === false;
		if(isANumber && email != ''){
			var b = "-";
			var position = email.length -1;
			email = [email.slice(0, position), b, email.slice(position)].join('');
			$("#Content_txtUsername").val(email);
		}
		if($("#Content_txtUsername").val()  == '' || $("#Content_txtPass").val()  == '' ){
			$('.pram_error_small').show();
			$('.pram_error_small').html('<i class="fa fa-times"></i> Debe completar todos los datos');
		}else{
			$("#button_login_pram").addClass('disabled','disabled');
			$("#button_login_pram").removeAttr('onclick'); 
			var dt = {action:"myId", login:email, password:pass}
			$.ajax({
				url: urlComments,
				dataType: "json",
				data: dt,
				method: "GET",
				cache: false			
			}).done(function (response){
				try {
					if(response["disabled"]){
						$(".close").click();
						setCookie('c_user_l', response["originalAuth"], 360);
						if($("#emol_disable_user").length == 0) {
						    $('body').append('<div class="emol_modal"><div class="modal fade" id="emol_disable_user" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered" role="document"> <div class="modal-content"><div class="modal-header"> <span> <img alt="logosocial" title="logosocial" src="https://static.emol.cl/emol50/img/logo_txt_esocial.png"></span><span class="close" data-dismiss="modal"><i class="fa fa-times"></i></span></div><div class="modal-body"><div class="cont_nocuenta"><span class="txt_nocuenta"><i class="fa fa-exclamation-circle"></i> Esta cuenta fue eliminada</span>Si deseas participar en Emol Social debes ingresar con otro usuario.</div></div><div class="modal-footer"></div></div></div></div></div>');
						}
						$('#emol_disable_user').modal('show');
						
						logoutEmol();						
					}else{	
					
						if (response["token"] != undefined && response["token"] != ''){

							cmtData.accessToken = response["token"];
							cmtData.authType = 'emol';
							cmtData.id = response["id"];
							
							setCookie('SSTES', response["token"], 720);
							setCookie('c_user_i', response["id"], 360);
							setCookie('c_user_l', response["originalAuth"], 360);
							
							CommentsApi.imgPerfil();
							
							$('#divLogin').html('<div class="cont_login_content_left_exito"><div class="cont_cuenta_exito_movil"><img class="" alt="iconexito" title="iconexito" src="https://static.emol.cl/emol50/img/icon_exito.jpg"><h3>Estás logueado</h3></div><div class="cont_comienza"><span class="comments_count_login"></span><h3>ya puedes comentar</h3></div></div>');
							
							
						}else{
								
							$('.pram_error_small').show();
							$('.pram_error_small').html(response);
						}
					
					}
					
				}catch(error){
					$('.pram_error_small').show();
					$('.pram_error_small').html('Información incorrecta');
				}	
			}).fail(function(jqXHR, textStatus, error) {
				$('.pram_error_small').show();
				$('.pram_error_small').html('Información incorrecta');
			});
			setTimeout(function(){ 
				$("#button_login_pram").removeClass('disabled'); 
				$("#button_login_pram").attr( "onclick", 'LoginEmolPram();' )
			}, 10000);
		}
	}

	function FormRecoverPram(){
		$('.textbox_recover').html('');
		$("#Content_txtUsername_recover").val('');
		document.getElementById("recover_contenedor").style.display = "block";
		document.getElementById("login_contenedor").style.display = "none";
		document.getElementById("login_contenedor_fb").style.display = "none";
	}
	
	function FormLoginPram(){
		$('.pram_error_small').html('');
		var isDetalle = "False";
		$("#Content_txtUsername").val('');
		$("#Content_txtPass").val('');
		document.getElementById("recover_contenedor").style.display = "none";
		document.getElementById("login_contenedor").style.display = "block";
		if (isDetalle == "True") {
			document.getElementById("login_contenedor_fb").style.display = "block";
		}else{
			document.getElementById("login_contenedor_fb").style.display = "none";
		}
	}
	
	function RecoverEmolPram(){
		$('.textbox_recover').html('');
		$("#button_recover_pram").addClass('disabled','disabled');
		$("#button_recover_pram").removeAttr('onclick'); 
		var email = $("#Content_txtUsername_recover").val();
		var dt = {action:"recoverPassword", login:email}
		$.ajax({
			url: urlComments,
			data: dt,
			method: "GET",
			async:false,
			cache: false			
		}).done(function (response){
		    try {
		        if (String(response) == "ERROR\n" || String(response) == "") {
		            $('.textbox_recover').html('Verifique que su correo este escrito correctamente');
		        } else {
		            $('.textbox_recover').html('Se ha enviado un correo a ' + response + ' para que recupere su contraseña.');
		        }
			}catch(error){
				console.log('Error - '+ error);
			}
		}).fail(function(jqXHR, textStatus, error) {
			$('.textbox_recover').html('Verifique que su correo este bien escrito');
		});
		setTimeout(function(){ 
			$("#button_recover_pram").removeClass('disabled'); 
			$("#button_recover_pram").attr( "onclick", 'RecoverEmolPram();' )
		}, 10000);
	}