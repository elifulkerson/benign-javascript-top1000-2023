$(document).on('click', '.yuk-nulis', function() {
						if (isKompasianer) {
							if (!isActivity) { // check user activity
								show_activity(); // show user activity
								return false;
							}
						}
						return true;
					});

					var base_url = "https://www.kompasiana.com/";
					var ajax_loader = "https://assets-a1.kompasiana.com/statics/2018_kompasiana/desktop/images/loader-small.svg";
					var ajax_loader_horizontal = "https://assets-a1.kompasiana.com/statics/2018_kompasiana/desktop/images/loader.svg";
					var notifAjax = false;

					$(document).ready(function() {
						size = parseInt($(".panel-body").css("font-size")), line = parseInt($(".panel-body").css("line-height")), $("#big").on("click", function() {
							size += 2, line += 5, $(".panel-body").css({
								"font-size": size + "px",
								"line-height": line + "px"
							}), size <= 26 ? $(".panel-body").css({
								"font-size": size + "px",
								"line-height": line + "px"
							}) : (size = 26, line = 51, $(".panel-body").css({
								"font-size": size + "px",
								"line-height": line + "px"
							}))
						}), $("#small").on("click", function() {
							size -= 2, line -= 5, $(".panel-body").css({
								"font-size": size + "px",
								"line-height": line + "px"
							}), size >= 12 ? $(".panel-body").css({
								"font-size": size + "px",
								"line-height": line + "px"
							}) : (size = 12, line = 16, $(".panel-body").css({
								"font-size": size + "px",
								"line-height": line + "px"
							}))
						})
					});

					$(document).on('click', '#reactivate', function() {
						if (confirm('Anda akan mereaktivasi akun. Lanjutkan?')) {
							$.ajax({
								type: "POST",
								url: "/ajax/reactivate",
								data: data,
								beforeSend: function() {
									$('#reactivate').hide(); // hide button
								},
								success: function(response) {
									var res = $.parseJSON(response);
									if (res.status == 1) {
										$('#reactivate').after('<p style="color: green">' + res.message + '</p>');
										$('#reactivate').remove(); // show button
										// setTimeout(function(){ window.location.href = 'https://www.kompasiana.com/'; }, 5000);
									} else {
										$('#reactivate').after('<p style="color: red">' + res.message + '</p>');
										$('#reactivate').show(); // show button
									}
								},
								error: function(xhr) {
									console.log(xhr);
								}
							});
						}
					});

					function redirectLogin() {
						window.location = 'https://account.kompasiana.com/login/a29tcGFzaWFuYQ==/aHR0cHM6Ly93d3cua29tcGFzaWFuYS5jb20v';
					}