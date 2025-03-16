$(document).on('click', '.postRibbon', function(e){
						if (!isKompasianer) {
							$('.reportbtnMenu').hide();
							$('.reportpopup').hide();
							alert('Anda harus login terlebih dahulu!');
							redirectLogin();
							return;
						}
					});

					$(document).on('click', '.btnReportKonten', function(e){
						$('#word_alasan').text('Alasan');
						$('#laporkan-text-new').attr("placeholder", "Tulis Alasan Anda ...");
						$('#laporkan-text-new').val("");
						$('input[name="radio_reason"]:checked').removeAttr("checked");
						$('#listChoiceReasonKonten').show();
						$('#listChoiceReasonUser').hide();
						$('#laporkan-submit-new').attr('data-post',$(this).attr('data-post'));
						$('#laporkan-submit-new').attr('data-type', 'konten');
						$('.-reportlanjut').removeClass('active');
					});

					$(document).on('click', '.btnReportAkun', function(e){
						$('#word_alasan').text('Sertakan Bukti');
						$('#laporkan-text-new').attr("placeholder", "Masukkan link konten spam, hate speech, atau bukti lain.");
						$('#laporkan-text-new').val("");
						$('input[name="radio_reason"]:checked').removeAttr("checked");
						$('#listChoiceReasonKonten').hide();
						$('#listChoiceReasonUser').show();
						$('#laporkan-submit-new').attr('data-user',$(this).attr('data-user'));
						$('#laporkan-submit-new').attr('data-type', 'akun');
						$('.-reportlanjut').removeClass('active');
					});

					$(document).on('click', '#laporkan-submit-new', function(e) {
						$('#msgreport').html('')
						if ( $('input[name="radio_reason"]:checked').attr('data-reason') == '' || $('input[name="radio_reason"]:checked').attr('data-reason') == null ) {
							alert("Pilih terlebih dahulu alasan anda.");
							$(".reportpopupMessage").hide();
							$('.reportpopup').show();
						} else {
							var text = $('#laporkan-text-new').val();
							var reason = $('input[name="radio_reason"]:checked').attr('data-reason');

							if($(this).attr('data-type') == 'konten'){
								var postId = $(this).attr('data-post');
								var data = {post_id: postId, text: text, reason: reason}
							}else{
								var channelIssuedId = $(this).attr('data-user');
								var data = {channel_issued_id: channelIssuedId, text: text, reason: reason}
							}
							
							var holder = $("#holder-tools");
							$("#laporkan-loading").show();
							$("#laporkan-submit-new").hide();
							$(".reportpopupMessage").hide();
							$.ajax({
								type:"POST",
								url :"/ajax/issued_post",
								data : data,
								dataType:"json",
								success: function(res) {
									$("#laporkan-loading").hide();
									$('.reportpopup').hide();
									$("#laporkan-submit-new").show();
									if(res.error !== undefined){
										$('#msgreport').html(res.error)
									}else{
										$('#msgreport').html(res.msg)
									}
									$(".reportpopupMessage").show();
								}
							});
						}
					});

					function new_favorit_narativ(narativId){
						if (!isKompasianer) {
							alert('Anda harus login terlebih dahulu!');
							redirectLogin();
							return;
						} else {
							var img = ajax_loader;
							$('#msgreport').html("Loading...")
							$(".reportpopupMessage").show();
							$("#"+narativId+"_favorit").hide();
							$.ajax({
								type:"POST",
								url :"/ajax/favorite_narativ",
								data : {narativId: narativId},
								dataType:"json",
								success: function(response) {
									$('#msgreport').html(response.message);
									$(".reportpopupMessage").show();
									$("#"+narativId+"_favorit").show();

									// unfavorit
									$("#"+narativId+"_favorit").parent().addClass('-marked');
									document.getElementById(narativId+"_favorit").setAttribute("onclick","new_unfavorit_narativ('"+narativId+"')");
									document.getElementById(narativId+"_favorit").setAttribute("id",narativId+"_unfavorit");
								}
							});
						}
					}

					function new_unfavorit_narativ(narativId){
						if (!isKompasianer) {
							alert('Anda harus login terlebih dahulu!');
							redirectLogin();
							return;
						} else {
							var img = ajax_loader;
							$('#msgreport').html("Loading...")
							$(".reportpopupMessage").show();
							$("#"+narativId+"_favorit").hide();
							$.ajax({
								type:"POST",
								url :"/ajax/favorite_narativ",
								data : {narativId: narativId, status:'remove'},
								dataType:"json",
								success: function(response) {
									$('#msgreport').html(response.message);
									$(".reportpopupMessage").show();
									$("#"+narativId+"_unfavorit").show();

									// favorit
									$("#"+narativId+"_favorit").parent().removeClass('-marked');
									document.getElementById(narativId+"_unfavorit").setAttribute("onclick","new_favorit_narativ('"+narativId+"')");
									document.getElementById(narativId+"_unfavorit").setAttribute("id",narativId+"_favorit");
								}
							});
						}
					}

					function new_favorit(post_id){

						if (!isKompasianer) {
							alert('Anda harus login terlebih dahulu!');
							redirectLogin();
							return;
						} else {
							var img = ajax_loader;
							$("#"+post_id+"_load-image-favorit").html("Loading...").show();
							$("#"+post_id+"_favorit").hide();
							$.ajax({
								type:"POST",
								url :"/ajax/favorite_artikel",
								data : {post_id: post_id},
								dataType:"json",
								success: function(response) {
									$("#"+post_id+"_load-image-favorit").hide();
									$('#msgreport').html(response.message);
									$(".reportpopupMessage").show();
									$("#"+post_id+"_favorit").show();


									// unfavorit
									$("#"+post_id+"_favorit").parent().addClass('-marked');
									document.getElementById(post_id+"_favorit").setAttribute("onclick","newun_favorit('"+response.post_id+"','"+response.favorita_id+"')");
                    				document.getElementById(post_id+"_favorit").setAttribute("id",post_id+"_unfavorit");

								}
							});
						}
					}

					// newun_favorit
					function newun_favorit(post_id, favorit_id){
						if (!isKompasianer) {
							alert('Anda harus login terlebih dahulu!');
							redirectLogin();
							return;
						} else {
							var img = ajax_loader;
							$("#"+post_id+"_load-image-favorit").html("Loading...").show();
							$("#"+post_id+"_unfavorit").hide();
							$.ajax({
								type:"POST",
								url :"/ajax/un_favorite_artikel",
								data : {post_id: post_id, favorit_id: favorit_id},
								dataType:"json",
								success: function(response) {
									$("#"+post_id+"_load-image-favorit").hide();
									$('#msgreport').html(response.message);
									$(".reportpopupMessage").show();
									$("#"+post_id+"_unfavorit").show();

									// favorit
									$("#"+post_id+"_unfavorit").parent().removeClass('-marked');
									document.getElementById(post_id+"_unfavorit").setAttribute("onclick","new_favorit('"+post_id+"')");
									document.getElementById(post_id+"_unfavorit").setAttribute("id",post_id+"_favorit");
								}
							});
						}
					}

					function close_msg(){
						$(".reportpopupMessage").hide();
					}

					$('.reportpopupContent').click(function() {
						if($('input[type="radio"]').is(':checked')) { 
							$('.-reportlanjut').addClass('active');
						}
					});

					$(document).on('click', '#send-article', function(e){
				        e.preventDefault();
				        var $t = $(this);
				        var tags = $(this).data('tags');
				        var channel = $(this).data('channel');

				        if(!isKompasianer)
				        {
				            alert("Anda harus login / mendaftar sebagai Kompasianer terlebih dahulu.");
				            redirectLogin();
				            return false;
				        }

				        $.redirect(base_url+channel+'/dashboard/write', {tags_topic : tags});
				    });