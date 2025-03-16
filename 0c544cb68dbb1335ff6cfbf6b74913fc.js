var oldsiz = 0, olduoocut = false;
			
						
			function check_uo_wide(){
				try {
					var cont01 = document.getElementsByClassName("hp_flash-news");
					if (typeof cont01[0] !== 'undefined'){
						var siz = cont01[0].getBoundingClientRect().width;
						var tit01 = document.getElementsByClassName("hp_flash-news__tit");
						if (typeof tit01[0] !== 'undefined') siz = siz - tit01[0].getBoundingClientRect().width;
						var cont = document.getElementsByClassName("hp_flash-news__txt");
						var txt = cont[0].getElementsByTagName("span");
						var uoocut = false;
						var txtwid =  txt[0].getBoundingClientRect().width;
						if ((txtwid+30 > siz)&&(txt[0].innerHTML.length >= 60)) uoocut = true;
						if ((siz != oldsiz)||(olduoocut != uoocut)) {
							console.log("*** UOO ",siz, uoocut, txtwid);
							oldsiz = siz;
							olduoocut = uoocut;
							var secs=5+(txtwid*0.018);
							document.getElementById('uowidestyle').innerHTML="@keyframes roller2{0%,to{-webkit-transform:translate3d("+siz+"px,0,0);transform:translate3d("+siz+"px,0,0);opacity:1}97%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:1}98%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}99%{-webkit-transform:translate3d("+siz+"px,0,0);transform:translate3d("+siz+"px,0,0);opacity:0}}body.uo-wide .hp_roller-txt {animation: roller2 "+secs+"s linear infinite;}";
							if (uoocut){
								if (!document.body.classList.contains('uo-wide')) document.body.classList.add('uo-wide');
							} else {
								if (document.body.classList.contains('uo-wide')) document.body.classList.remove('uo-wide');
							}
						}
						setTimeout(check_uo_wide, 2000);
					}
				} catch (e) {}
			}
			if (!window.document.documentMode) check_uo_wide();