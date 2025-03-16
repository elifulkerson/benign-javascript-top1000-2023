$(document).ready(function() {
					$('.show_small_icon').each(function() {
						var split_data = $(this).attr("id").split('show_small_icon_');
						var take_data = split_data[1].split('_');
						get_small_icons(take_data[0],take_data[1]);
					});
                });

				function get_small_icons(post_data,user_data){
					var html_icons =`
					<div class="timeline__ribbon" title="Tambahkan ke Favorit" id="button_` + post_data + `">
						<div id="` + post_data + `_load-image-favorit" style="font-size:14px; color:grey;"></div>
						<a href="javascript:void(0)"  id="` + post_data + `_favorit" onclick="new_favorit('` + post_data + `')">+</a>
					</div>
					<div class="timeline__flag postRibbon" title="Report">
						<a href="javascript:void(0);" class="timeline__flag_report -reportChoose"></a>
						<div class="reportbtnMenu">
							<div class="reportbtnMenu__item -reportKonten btnReportKonten postRibbon" data-post="` + post_data + `">Laporkan Konten</div>
							<div class="reportbtnMenu__item -reportAkun btnReportAkun postRibbon" data-user="` + user_data + `">Laporkan Akun</div>
						</div>
					</div>
					`;
					$('#show_small_icon_' + post_data + '_' + user_data).html(html_icons);
                }