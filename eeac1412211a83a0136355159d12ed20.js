getHotSearch();

										function getHotSearch() {
											$.ajax({
												type: "GET",
												url: '//a.sina.cn/s/api/hotTopic/search?from=pc&plat=travel&sort=hot&position=sinapc',
												dataType: "json",
												success: function (data, status, xhr) {
													if(data.code==1000){
														var data = data.data.list;
														var html='';
														for (var i = 0; i < data.length; i++) {
															if (i >= 4) {
																break;
															}
															html += '<li>'+
																		'<a href="'+data[i].wap_url+'?c=spr_auto_trackid_83b56bedfaeadd1e" target="_blank">'+data[i].title+'</a>'+
																	'</li>'
														}
														$('#travelhot_resou').html(html);
													}
												}
											})
										}


										function resetNum(num){
											if(parseInt(num) > 10000){
												return (parseInt(num)/10000).toFixed(2)+'w'
											} else {
												return num
											}
										}