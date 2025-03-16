function show_activity() {
						$("#activity_popup").addClass('active');
						$("#activity_popup").css({'display': 'block'});
					}


					if ($('div.timeline--event__item').length==0) {
						$('.timeline--event').hide();
					}

					var isKompasianer = "";
					var isActivity = "";
					var pagePosition = $('.page_position').data('position');
					var shortUrl = $('.page_position').data('profile');
					var menu = $('.page_position').data('menu');
					var postId = $('#id_post').data('id');
					var read = $('.page_position').data('read');
					var channel = $('.page_position').data('channel');
					var setPage = 'home';
					var page_id = 'home';
					var currentState = location.pathname.substring(1);

					$.ajax({
						type: "POST",
						url: "https://www.kompasiana.com/ajax/get_user",
						data: {
							page: pagePosition,
							short_url: shortUrl,
							menu: menu,
							postId: postId,
							read: read,
							channel: channel
						},
						success: function(res) {
							data = JSON.parse(res);
							isKompasianer = data['isKompasianer'];
							isActivity = data['isActivity'];
							isAgreement = data['isAgreement'];
							isGrup = data['isGrup'];
							isInterest = data['isInterest'];
							$("#header_detail").after(data['header']);
							$("#header_detail").remove();
							$('#banner_register').after(data['banner_register']);
							$('#banner_register').remove();
							$('#channel_pilihan').html(data['sidebar']);
							$('#activity_popup').html(data['activity']);
							$('#banner_welcome').after(data['banner_welcome']);
							$('#banner_welcome').remove();
							
							if (pagePosition == 'profile') {
								$('#profile_cover').html(data['profile']);
								$('#profile_navbar').html(data['navbar']);
							} else if (pagePosition == 'read') {
								$('#follow_read').html(data['follow_read']);
								// $('#post-counter').html(data['count_pv']);
								$('#button_footer_read').html(data['button_footer_read']);
							}

												if (isKompasianer == true && isAgreement == false) {
							setTimeout(function() {
								window.location.replace("https://www.kompasiana.com/snk");
							}, 5000);
						}

						
						},
						error: function(e) {
							console.log(e);
						}
					});