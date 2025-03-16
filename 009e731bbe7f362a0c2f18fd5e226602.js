(function ab(){
            function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            }
            function setCookie(cname, cvalue) {
                const d = new Date('2023-05-15');
                let expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
            function testDraw() {
                var draw = Math.floor(Math.random() * 10);
                var new_a = '1_1';
                var new_b = '1_2';
                if(draw < 7) {
                    return new_a
                }
                return new_b
            }
            try{
                if(!getCookie('test_ab')) {
                    var site_ver = testDraw();
                    setCookie('test_ab', site_ver);
                    if(localStorage.getItem('test_ab')) {
                        var testArr = localStorage.getItem('test_ab').split(',');
                        testArr.push(site_ver + '-' + Date.now());
                        localStorage.setItem('test_ab', testArr.join(','));
                    } else {
                        localStorage.setItem('test_ab', site_ver + '-' + Date.now());
                    }
                    localStorage.getItem('test_ab')
                    if(getCookie('test_ab')) {
                        Inpl.gemiusOff=true;
                        location.reload();
                    }
                } else if(getCookie('test_ab') === '1_0') {
                    var site_ver = testDraw();
                    setCookie('test_ab', site_ver);
                    if(localStorage.getItem('test_ab')) {
                        var testArr = localStorage.getItem('test_ab').split(',');
                        testArr.push(site_ver + '-' + Date.now());
                        localStorage.setItem('test_ab', testArr.join(','));
                    } else {
                        localStorage.setItem('test_ab', site_ver + '-' + Date.now());
                    }
                    localStorage.getItem('test_ab')
                    if(getCookie('test_ab')) {
                        Inpl.gemiusOff=true;
                        location.reload();
                    }
                } else if(getCookie('test_ab') === '1_1' || getCookie('test_ab') === '1_2' ) {
                    setCookie('test_ab', getCookie('test_ab'));
                }
                __iwa = __iwa || [];
                __iwa.push(["setCustomVar", "test_ab", getCookie('test_ab'), "page"]);

            } catch (e) {
                console.log('Brak dostępu do local storage lub cookie');
            }
        })()