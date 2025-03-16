splashRadar('all', 1);

						imagesPreloader.load();
						callbackQuery.loaded();

						(function(){
							if (!mr.scriptLoaded){
								return;
							}

							if (percent(mr.LF1Percent)){
								new Image().src = '//lf1.mail.ru/?zero=1&' + (new Date()).getTime() + Math.random();
							}
						})();