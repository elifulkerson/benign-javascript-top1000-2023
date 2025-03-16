function setCookieVer(cname, cvalue, hours) {
        return new Promise(resolve => {
            var d = new Date();
            d.setTime(d.getTime() + hours * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.kompas.com;path=/;secure;SameSite=None";
            resolve(true);
        });
    }
    
    function getCookieVer(cname) {
        return new Promise(resolve => {
            var name = cname + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    resolve(c.substring(name.length, c.length));
                }
            }
            resolve("");
        });

    }
    
    async function verification_reset(){
        var kmps_usrid = await getCookieVer("kmps_usrid");
        var verification_kmps_usrid = await getCookieVer("verification_kmps_usrid");
        if(document.cookie.indexOf('verification=') != -1 && kmps_usrid != verification_kmps_usrid){
            setCookieVer('verification_counter', 1, 0);
            setCookieVer('verification', 1, 0);
            setCookieVer('verification_kmps_usrid', 1, 0);
        }
        if(document.cookie.indexOf('verification_kmps_usrid=')==-1){
            setCookieVer('verification_kmps_usrid', kmps_usrid, 672);
        }
    }
    // verification_reset()

    async function verifyPopup(){
        var kmp_uid = await getCookieVer("kmp_uid");
        var lgn_w = await getCookieVer("lgn_w");
        if(kmp_uid){
            var settings = {
                "url": "https://apis.kompas.com/api/sso_new/user/detail?token="+kmp_uid+"&loginwith="+lgn_w,
                "method": "GET",
                "timeout": 0,
            };
            $.ajax(settings).done(function (response) {
                var status      = response['status'];
                var gender      = response['user']['gender'];
                var birthdate   = response['user']['birthdate'];
                var phone_2     = response['user']['phone_2'];
                var email       = response['user']['email'];
                var age         = response['user']['age'];
                if(document.cookie.indexOf('verification=') == -1){
                    if(status == true && (gender === "" || birthdate === "" || phone_2 === "" || typeof gender == 'undefined' || typeof birthdate == 'undefined' || typeof phone_2 == 'undefined')) {
                        document.getElementById('kgmModal').classList.remove('-hide');
                    }else{
                        setCookieVer('verification', 1, 672);
                    }
                    $(".kgmModal-id").html(email);
                }

                if(lgn_w != 'myvalue'){
                    restrictedContent(birthdate, age);
                }else{
                    document.body.classList.remove("-restricted");
                }
                
            });

        }else{
            if(getMeta('content_sensi') == '1'){
                document.getElementsByClassName('restricted-lead')[0].innerHTML = '<p>Masuk dan konfirmasi usia untuk melihat konten</p>'
                document.getElementsByClassName('restricted-link')[0].innerHTML = 'Login untuk Akses';
                document.getElementsByClassName('restricted-link')[0].setAttribute('href','https://account.kompas.com/login/a29tcGFz/aHR0cHM6Ly93d3cua29tcGFzLmNvbS8/bGdudmlhPWtvbnRlbnNlbnNpdGlm?source=kompas_com&medium=kontensensitif');
                document.getElementById('restricted').style.display='';
            }
        }
    }
    if(getMeta('content_category') == 'Global'){
        if(document.cookie.indexOf('acceptCookie=') != -1){
            verifyPopup();
        }
    }else{
        verifyPopup();
    }
    
    async function checkCookieVer() { 
        var verification_counter = await getCookieVer('verification_counter');
        if (verification_counter == "") {            
            setCookieVer('verification_counter', 1, 8760);
        }else{
            setCookieVer('verification_counter', parseInt(verification_counter)+1, 8760);
        }

        if (verification_counter == '') {
            setCookieVer('verification', 1, 2);
        } else if (verification_counter == 1) {
            setCookieVer('verification', 1, 24);
        } else if (verification_counter == 2) {
            setCookieVer('verification', 1, 168);
        } else {
            setCookieVer('verification', 1, 672);
        }
        
        document.getElementById('kgmModal').classList.add('-hide');
    }

    async function doVerification() { 
        window.location.href = "https://account.kompas.com/verify_data?source=kompascom&medium=verifikasiakun&vid="+await getCookieVer("kmp_uid")+"&rurl="+btoa(window.location.href)+"";
    }

    function getMeta(metaName) {
        const metas = document.getElementsByTagName('meta');
        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
            }
        }
        return '';
    }

    function restrictedContent(birthdate, age){
        if(getMeta('content_sensi') == '1'){

            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            var lgnvia = params.lgnvia;

            if((birthdate === "" || typeof birthdate == 'undefined') && lgnvia == 'kontensensitif'){
                document.getElementById('kgmModal').classList.add('-hide');
                window.top.location.href = 'https://account.kompas.com/profile_setting?kontensensitif&source=kompas_com&medium=kontensensitif&kurl=aHR0cHM6Ly93d3cua29tcGFzLmNvbS8='
            }else if((birthdate === "" || typeof birthdate == 'undefined')){
                document.getElementById('kgmModal').classList.add('-hide');
                document.getElementsByClassName('restricted-lead')[0].innerHTML = '<p>Untuk melihat konten, konfirmasi usiamu</p>'
                document.getElementsByClassName('restricted-link')[0].innerHTML = 'Lengkapi Profil';
                document.getElementsByClassName('restricted-link')[0].setAttribute('href','https://account.kompas.com/profile_setting?kontensensitif&source=kompas_com&medium=kontensensitif&kurl=aHR0cHM6Ly93d3cua29tcGFzLmNvbS8=');
                document.getElementById('restricted').style.display='';
            }else if(age < 18){
                document.getElementById('kgmModal').classList.add('-hide');
                document.getElementsByClassName('restricted-lead')[0].innerHTML = '<p>Usiamu belum sesuai untuk melihat konten ini</p>'
                document.getElementsByClassName('restricted-link')[0].innerHTML = 'Lihat Artikel Lainnya';
                document.getElementsByClassName('restricted-link')[0].setAttribute('href','https://www.kompas.com');
                document.getElementsByClassName('restricted-link')[0].classList.add("restricted-link-text");
                document.getElementById('restricted').style.display='';
            }else{
                document.body.classList.remove("-restricted");
            }
        }
    }

    if(getMeta('content_sensi') == '1' && document.cookie.indexOf('kmp_uid=')==-1){
        document.getElementsByClassName('restricted-lead')[0].innerHTML = '<p>Masuk dan konfirmasi usia untuk melihat konten</p>'
        document.getElementsByClassName('restricted-link')[0].innerHTML = 'Login untuk Akses';
        document.getElementsByClassName('restricted-link')[0].setAttribute('href','https://account.kompas.com/login/a29tcGFz/aHR0cHM6Ly93d3cua29tcGFzLmNvbS8/bGdudmlhPWtvbnRlbnNlbnNpdGlm?source=kompas_com&medium=kontensensitif');
        document.getElementById('restricted').style.display='';
    }