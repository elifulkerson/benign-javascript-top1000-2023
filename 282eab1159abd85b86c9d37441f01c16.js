function retry(isDone, next) {
    var current_trial = 0, max_retry = 50, interval = 10, is_timeout = false;
    var id = window.setInterval(
        function() {
            if (isDone()) {
                window.clearInterval(id);
                next(is_timeout);
            }
            if (current_trial++ > max_retry) {
                window.clearInterval(id);
                is_timeout = true;
                next(is_timeout);
            }
        },
        10
    );
}

function isIE10OrLater(user_agent) {
    var ua = user_agent.toLowerCase();
    if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
        return false;
    }
    var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
    if (match && parseInt(match[1], 10) >= 10) {
        return true;
    }
    // MS Edge Detection from this gist: https://gist.github.com/cou929/7973956
    var edge = /edge/.exec(ua); 
    if (edge && edge[0] == "edge") { 
        return true; 
    }
    return false;
}

    function detectPrivateMode(callback) {
        var is_private;

        if (window.webkitRequestFileSystem) {
            window.webkitRequestFileSystem(
                window.TEMPORARY, 1,
                function() {
                    is_private = false;
                },
                function(e) {
                    console.log(e);
                    is_private = true;
                }
            );
        } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
            var db;
            try {
                db = window.indexedDB.open('test');
            } catch(e) {
                is_private = true;
            }

            if (typeof is_private === 'undefined') {
                retry(
                    function isDone() {
                        return db.readyState === 'done' ? true : false;
                    },
                    function next(is_timeout) {
                        if (!is_timeout) {
                            is_private = db.result ? false : true;
                        }
                    }
                );
            }
        } else if (isIE10OrLater(window.navigator.userAgent)) {
            is_private = false;
            try {
                if (!window.indexedDB) {
                    is_private = true;
                }                 
            } catch (e) {
                is_private = true;
            }
        } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {

            // One-off check for weird sports 2.0 polyfill
            // This also impacts iOS Firefox and Chrome (newer versions), apparently
            // @see bglobe-js/containers/App.js:116
            if (window.safariIncognito) {
                is_private = true;
            } else {
                        try {
                           window.openDatabase(null, null, null, null);
                        } catch (e) {
                           is_private = true;
                        }

                try {
                    window.localStorage.setItem('test', 1);
                } catch(e) {
                    is_private = true;
                }
            } 

            if (typeof is_private === 'undefined') {
                is_private = false;
                window.localStorage.removeItem('test');
            }
        }



        retry(
            function isDone() {
                return typeof is_private !== 'undefined' ? true : false;
            },
            function next(is_timeout) {
                callback(is_private);
            }
        );
    }


function setCookieMer(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookieMer(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
if (getCookieMer('RDB')) {
        var img = document.createElement('img');
        img.src = 'https://digital.elmercurio.com/pixRDB-'+getCookieMer('RDB')+'.png';
        document.body.appendChild(img);
        var imgRDBLS = document.createElement('img');
        imgRDBLS.src = 'https://digital.lasegunda.com/pixRDB-'+getCookieMer('RDB')+'.png';
        document.body.appendChild(imgRDBLS);
}
if (getCookieMer('c_user_i')) {
        var imgCUI = document.createElement('img');
        imgCUI.src = 'https://digital.elmercurio.com/pixCUI-'+getCookieMer('c_user_i')+'.png';
        document.body.appendChild(imgCUI);
        var imgCUILS = document.createElement('img');
        imgCUILS.src = 'https://digital.lasegunda.com/pixCUI-'+getCookieMer('c_user_i')+'.png';
        document.body.appendChild(imgCUILS);
        var imgCUIG = document.createElement('img');
        imgCUIG.src = 'https://www.guioteca.com/pixCUI-'+getCookieMer('c_user_i')+'.png';
        document.body.appendChild(imgCUIG);
}
if (getCookieMer('msg')) {
        var img2 = document.createElement('img');
        img2.src = 'https://digital.elmercurio.com/pixMsg-'+getCookieMer('msg')+'.png';
        document.body.appendChild(img2);
}
if (getCookieMer('rt_uuid')) {
        var img3 = document.createElement('img');
        img3.src = 'https://digital.elmercurio.com/pixRT-'+getCookieMer('rt_uuid')+'.png';
        document.body.appendChild(img3);
}

var Dominio = '';
if(document.domain){
	Dominio = document.domain.toLowerCase().replace("www","").replace("apps","").replace("emol50.gen","");
}else{ Dominio = '.emol.com'; }

var template_thanks = ' \
		<div id="modal_poll_box"> \
		  <form id="modal_poll_form"> \
            <a class="close" href="#" onclick="closeModalCon(); return false;">&#215;</a> \
		    <div class="box title"> \
		      <h2>&iexcl;Gracias por tu ayuda!</h2> \
		      <p>Porque tu opini&oacute;n nos importa y queremos darte lo mejor en noticias</p> \
		    </div> \
		    <div class="box buttons"> \
		      <input type="button" value="CERRAR" onclick="closeModalCon(); return false;"/> \
		    </div> \
		  </form> \
		</div>';

var template_form = ' \
		<div id="modal_poll_box"> \
          <form id="modal_poll_form" action="#" method="GET"  > \
            <div id="top_Modal_ayuda"> \
              <div class="Logo_emol_ayuda"><img src="https://apps.emol.com/apps/modal_emol/Logo_emol_ayuda.jpg" alt="Emol" /></div> \
              <div class="Cerrar_modal_ayuda"><a href="#" onclick="closeModal(); return false;"><img src="https://apps.emol.com/apps/modal_emol/btn-cerrar.gif" alt="Cerrar" /></a></div> \
            </div> \
            <div id="Content_info_ayuda"> \
              <h1 class="title_info_ayuda">Necesitamos de tu ayuda</h1> \
              <p class="bajada_info_ayuda">Queremos mejorar y nos interesa tu opini&oacute;n, te tomar&aacute; s&oacute;lo un momento.</p> \
            </div> \
            <h2 class="pregunta_info_ayuda">&iquest;Cu&aacute;l es el tema que m&aacute;s te gusta leer en EMOL?</h2> \
            <div class="content_input_ayuda"> \
              <select name="section" class="select big" id="section" > \
                <option selected value="">Elige el &aacute;rea que m&aacute;s te interesa</option> \
                <option value="nacional">Noticias de Chile</option> \
                <option value="internacional">Noticias del mundo</option> \
                <option value="economia">Econom&iacute;a</option> \
                <option value="deportes">Deportes</option> \
                <option value="cultura">Espect&aacute;culos</option> \
                <option value="tecnologia">Tecnolog&iacute;a</option> \
                <option value="tendencias">Tendencias y Vida Sana</option> \
                <option value="autos">Autos</option> \
              </select> \
            </div> \
            <h2 class="pregunta_info_ayuda">Cu&eacute;ntanos sobre ti</h2> \
            <div class="content_input_ayuda" style="border-right:none;"> \
              <p>Eres:</p> \
              <input type="radio" name="gender" id="gender_m" value="M" /> \
              <label for="gender_m">Hombre</label> \
              <input type="radio" name="gender" id="gender_f" value="F" /> \
              <label for="gender_f">Mujer</label> \
              <div class="cont_edad">\
              <p>Edad</p> \
              <input type="text" value="" name="age" id="age"/> \
              </div>\
            </div> \
            <div class="content_input_ayuda" style="border-right:none;"> \
              <p>Eres suscriptor de El Mercurio:</p> \
              <div class="cont_edad">\
              <input type="radio" name="suscriptor" id="suscriptor_y" value="Y" /> \
              <label for="suscriptor_y">Si</label> \
              <input type="radio" name="suscriptor" id="suscriptor_n" value="N" /> \
              <label for="suscriptor_n">No</label> \
              </div>\
            </div> \
            <div class="content_input_ayuda bts_enviar" style="border-right:none; margin-bottom:0px;"> \
              <input type="submit" value="Enviar" /> \
              <p class="saltar_encuestra"><a href="#" onclick="closeModal(); return false;">No gracias, no quiero participar en este momento</a></p> \
            </div> \
          </form> \
        </div>';


var COOKIE_NAME = 'survey_v1';
var COOKIE_NAME_B = 'cae_v1';

function closeModal() {
	var box = document.getElementById('poll_box');
	box.parentNode.removeChild(box);
	CookieSurvey.setItemSurvey(COOKIE_NAME, '1', 86400 * 30, '/', Dominio);
}

function closeModalCon() {
	var box = document.getElementById('poll_box');
	box.parentNode.removeChild(box);
	if(!CookieSurvey.getItemSurvey(COOKIE_NAME)){
		CookieSurvey.setItemSurvey(COOKIE_NAME, '1', 86400 * 30, '/', Dominio);
	}
}


function showModal() {
	CookieSurvey.setItemSurvey(COOKIE_NAME, '1', 86400 * 2, '/', Dominio);

	//style
	var sheet = document.createElement('link');
	sheet.rel = 'stylesheet';
	sheet.href = 'https://apps.emol.com/apps/modal_emol/poll_style.css';

	//modal
	var container = document.createElement('div');
	container.id = 'poll_box';
	container.innerHTML = template_form;

	//inject  
	document.getElementsByTagName('head')[0].appendChild(sheet);
	document.getElementsByTagName('body')[0].appendChild(container);


	//clicks on overlay area
	jQuery(container).bind('click', function(e) {
		if(e.target != container) return;
		closeModal();
		return false;
	})

	var pollForm = document.getElementById("modal_poll_form")
	  , section = document.getElementById("section")
	  , age = document.getElementById("age")
	  , gender = document.getElementsByName("gender")
	  , gender_container = document.getElementById("gender");

	pollForm.onsubmit = function() {
		//console.log("on submit");

		if( section.value != '') { }
		else { section.style.background = '#ffabab'; section.focus(); return false;}
			
		// Check gender
		var gender_value = false;
		if(document.getElementById('gender_m').checked) {
			gender_value = 'M';
		}

		if(document.getElementById('gender_f').checked) {
			gender_value = 'F';
		}
		
		if (!gender_value) {
		  gender_container.style.background = '#ffabab'; 
		  gender[0].focus(); return false; 
		}

		// Check suscriptor
		var suscriptor_value = false;
		if(document.getElementById('suscriptor_y').checked) {
			suscriptor_value = 'Y';
		}

		if(document.getElementById('suscriptor_n').checked) {
			suscriptor_value = 'N';
		}

		if (!suscriptor_value) {
			suscriptor_value='N';
		}

		// Check Age
		var age_value = 0;
		if (age != '' && /^[0-9]+$/.test(age.value) && parseInt(age.value) <= 125) {
			age_value = age.value;
		}else { 
			age.style.background = '#ffabab'; age.focus(); return false; 
		}

		var data = {
		 'section': section.value,
		 'gender': gender_value,
		 'age': age_value,
		 'subscriber': suscriptor_value
		};
		
		if(!CookieSurvey.getItemSurvey(COOKIE_NAME_B)){
			CookieSurvey.setItemSurvey(COOKIE_NAME_B, data.gender+'|'+data.age, 86400 * 365, '/', Dominio);
		}
		
		var request = $.getJSON("https://apps.emol.com/apps/modal_emol/save.php?v=2&callback=?", data, function(result) {
		  container.innerHTML = template_thanks;
		  var segundos = (86400 * 180);
		  CookieSurvey.setItemSurvey(COOKIE_NAME, '1',segundos, '/', Dominio);
		});

		return false;
	}
}

jQuery(window).bind('load', function() {
	if(CookieSurvey.getItemSurvey(COOKIE_NAME))
		return;

	// if(/emol.cl/.test(document.location.href))
		// return;  

	//var random = Math.round(Math.random() * 5)
	
	//if (random == 2) {  
	// flira. se desactiva encuesta22 mar19 if (true) { 
	if (false) { 
	//if (true)  {

		detectPrivateMode(function(result){console.log("private mode:"+result);
                         if (result) {
				 console.log ("modo de navegaciÃ³n privada");
			} else {
				showModal();
			}
                        });

	//	setTimeout(function() {
	//		try {
	//			localStorage.test = 2;
	//			showModal();
	//		} catch (e) {
	//			console.log('You are in Privacy Mode\nPlease deactivate Privacy Mode and then reload the page.');
	//		}
	//	}, 5000)
	}   
});

var CookieSurvey = {
    getItemSurvey: function (name) {
        var pattern = new RegExp(name + '=([^;]+)'),
            matches = document.cookie.match(pattern);
    
        return (matches !== null) ? matches[1] : false;        
    },    
    setItemSurvey: function (name, value, seconds, path, domain) {
        var params = [];
        expires = new Date();
        var setTiempoVal = (expires.getTime() + (seconds * 1000));
        expires.setTime( setTiempoVal );
        params.push(name + '=' + encodeURIComponent(value));
        params.push('expires=' + expires.toGMTString());
                
        if(path){
			params.push('path=' + path);
		}
		if(domain){
			params.push('domain=' + domain); 
		} 
        
        document.cookie = params.join('; ');
    }
};
