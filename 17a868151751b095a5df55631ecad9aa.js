$(document).ready(function() {
				$(document.body).on('touchmove', onScroll_do_sidebar); // for mobile
				$(window).bind('scroll', onScroll_do_sidebar);
			});

			function onScroll_do_sidebar(){ 
				if ($("#populer-rekom-base").length > 0) {
					if ($(window).scrollTop() >= $("#populer-rekom-base").position().top) {
						// remove div
						$('#populer-rekom-base').remove();
						get_populer_rekom()
					}
				}

				if ($("#trending-base").length > 0) {
					if ($(window).scrollTop() >= $("#trending-base").position().top) {
						// remove div
						$('#trending-base').remove();
						get_other_sidebar()
					}
				}

				if ($("#cerita-pemilih-base").length > 0) {
					if ($(window).scrollTop() >= $("#cerita-pemilih-base").position().top) {
						// remove div
						$('#cerita-pemilih-base').remove();
						get_cerita_pemilih()
					}
				}

				if ($("#topik-pilihan-base").length > 0) {
					if ($(window).scrollTop() >= $("#topik-pilihan-base").position().top) {
						// remove div
						$('#topik-pilihan-base').remove();
						get_topik_pilihan()
					}
				}

				if ($("#series-pilihan-base").length > 0) {
					if ($(window).scrollTop() >= $("#series-pilihan-base").position().top) {
						// remove div
						$('#series-pilihan-base').remove();
						get_series_pilihan()
					}
				}

				if ($("#isu-terkini-base").length > 0) {
					if ($(window).scrollTop() >= $("#isu-terkini-base").position().top) {
						// remove div
						$('#isu-terkini-base').remove();
						get_isu_terkini()
					}
				}

				if ($("#kompasiana-arena-base").length > 0) {
					if ($(window).scrollTop() >= $("#kompasiana-arena-base").position().top) {
						// remove div
						$('#kompasiana-arena-base').remove();
						get_arena()
					}
				}

				if ($("#tren-pekan-base").length > 0) {
					if ($(window).scrollTop() >= $("#tren-pekan-base").position().top) {
						// remove div
						$('#tren-pekan-base').remove();
						get_tren_pekan()
					}
				}

				if ($("#sorot_div_base").length > 0) {
					if ($(window).scrollTop() >= $("#sorot_div_base").position().top) {
						$('#sorot_div_base').remove();
						get_sorot();
					}
				}

				if ($("#komunitas_pilihan_base").length > 0) {
                    if ($(window).scrollTop() >= $("#komunitas_pilihan_base").position().top) {
                        $('#komunitas_pilihan_base').remove();
                        get_komunitas_pilihan();
                    }
                }
			}

			var load_get_sorot = false;
			function get_sorot(){
				if (load_get_sorot == false) {
					load_get_sorot = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_sorot",
						success: function(res) {
							data = JSON.parse(res);
							$('#sorot_div').after(data['sorot']);
							$('#sorot_div').remove();
							
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_populer_rekom = false;
			function get_populer_rekom(){
				if (load_get_populer_rekom == false) {
					load_get_populer_rekom = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_popular_rekom",
						data: {view_data: location.pathname.substring(1), view_type: 'desktop'},
						success: function(res) {
							data = JSON.parse(res);
							$('#populer_rekom').html(data);
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_cerita_pemilih = false;
			function get_cerita_pemilih(){
				if (load_get_cerita_pemilih == false) {
					load_get_cerita_pemilih = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_cerita_pemilih",
						data: {show: 'y'},
						success: function(res) {
							data = JSON.parse(res);
							
							$('#cerita-pemilih-body').html(data);
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_topik_pilihan = false;
			function get_topik_pilihan(){
				if (load_get_topik_pilihan == false) {
					load_get_topik_pilihan = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_topik_pilihan",
						data: {show: 'y'},
						success: function(res) {
							data = JSON.parse(res);
							
							$('#topik-pilihan-body').html(data);
							$('#topilslide').slick({infinite: true,speed: 300,slidesToShow: 3,slidesToScroll: 3,centerMode: false,arrow: true,dots: false,cssEase: 'linear',variableWidth: true});
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_series_pilihan = false;
			function get_series_pilihan(){
				if (load_get_series_pilihan == false) {
					load_get_series_pilihan = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_series_pilihan",
						data: {show: 'y'},
						success: function(res) {
							data = JSON.parse(res);
							
							$('#series-pilihan-body').html(data);
							$("#naraslide").slick({infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,centerMode:!1,arrow:!0,dots:!1,cssEase:"linear"});
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_isu_terkini = false;
			function get_isu_terkini(){
				if (load_get_isu_terkini == false) {
					load_get_isu_terkini = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_isu_terkini",
						data: {show: 'y'},
						success: function(res) {
							data = JSON.parse(res);
							
							$('#isu-terkini-body').html(data);
							$(".hs__widget").slick({infinite:!1,speed:300,slidesToShow:3,centerMode:!1,arrow:!0,dots:!0});
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_arena = false;
			function get_arena(){
				if (load_get_arena == false) {
					load_get_arena = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_arena",
						data: {read: ""},
						success: function(res) {
							data = JSON.parse(res);
							if(data){
								$('#kompasiana-arena-body').html(data);
								$.getScript('https://assets-a1.kompasiana.com/statics/2019_kompasiana/desktop/js/kuis.min.js?v=412', function() {});
							}else{
															}
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_tren_pekan = false;
			function get_tren_pekan(){
				if (load_get_tren_pekan == false) {
					load_get_tren_pekan = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_tren_pekan",
						data: {show: 'y'},
						success: function(res) {
							data = JSON.parse(res);
							
							$('#tren-pekan-body').html(data);
							$(".hs__widget_tren").slick({infinite:!1,speed:300,slidesToShow:3,centerMode:!1,arrow:!0,dots:!0});
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_other_sidebar = false;
			function get_other_sidebar(){
				if (load_get_other_sidebar == false) {
					load_get_other_sidebar = true;
					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_others_sidebar",
						data: {view_data: 'trending', view_type: 'desktop'},
						success: function(res) {
							data = JSON.parse(res);
							
							$('#trending_place').html(data);
						},
						error : function(e) {
							console.log(e);
						}
					});

					$.ajax({
						type: "GET",
						url: "https://www.kompasiana.com/xajax/get_others_sidebar",
						data: {view_data: 'terbaru', view_type: 'desktop'},
						success: function(res) {
							data = JSON.parse(res);
							
							$('#terbaru_place').html(data);
						},
						error : function(e) {
							console.log(e);
						}
					});
				}
			}

			var load_get_komunitas = false;
            function get_komunitas_pilihan(){
                if (load_get_komunitas == false) {
                    load_get_komunitas = true;
                    $.ajax({
                        type: "GET",
                        url: "https://www.kompasiana.com/xajax/get_komunitas_pilihan",
                        success: function(res) {
                            data = JSON.parse(res);
                            $('#komunitas_pilihan').after(data['komunitas_pilihan']);
                            $('#komunitas_pilihan').remove();
                            
                        },
                        error : function(e) {
                            console.log(e);
                        }
                    });
                }
            }

							//premium
				var autonext = false;
				autonext = getCookie('autonext') != "" ? getCookie('autonext') : false;
	            $(".-popuppremium2").on("click", function () {
	            	if (!autonext) {
	            		$(".popupPremium2").toggleClass("active");
	            		setCookie('autonext', true, 3);
	            	}
	            });
	            $(".-poppremium2Close").on("click", function () {
	                $(".popupPremium2").hide();
	            });