if (Splash.data.projects.moymir.type == 'gallery') {
						mr.id('myPopularFotoSmall').innerHTML = Splash.tpl.postload.gallery(Splash.data.projects.moymir);
						mr.id('myPopularFotoBig').innerHTML = Splash.tpl.postload.gallery(mr.extend(Splash.data.projects.moymir, {
							size: 'Large'
						}));
					} else {
						mr.id('social__media__figure').innerHTML = Splash.tpl.postload.games(Splash.data.projects.moymir);
					}