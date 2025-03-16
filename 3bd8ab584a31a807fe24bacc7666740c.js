function gameScheduleCounter(){
						var eDate = '2023-10-17 00:00:00';
						eDate = (eDate && eDate != '0000-00-00 00:00:00') ? new Date(eDate.replace(' ', 'T') + '+09:00') : new Date();
						var dday = eDate.getTime();
						setInterval(function(){
							var now = new Date();
							var distance = dday - now;
							var d = Math.floor(distance / (1000 * 60 * 60 * 24));
							var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
							var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
							var s = Math.floor((distance % (1000 * 60)) / 1000);

							s = (s <= 0) ? '00' : ((s < 10) ? '0'+s : s);
							m = (m <= 0) ? '00' : ((m < 10) ? '0'+m : m);
							h = (h <= 0) ? '00' : ((h < 10) ? '0'+h : h);
							d = (d <= 0) ? '00' : ((d < 10) ? '0'+d : d);

							$("[data-title='Days']").text(d);
							$("[data-title='Hours']").text(h);
							$("[data-title='Min']").text(m);
							$("[data-title='Sec']").text(s);
						}, 1000);
					}
					gameScheduleCounter();