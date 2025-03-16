window.ab_test_ver = 'a';
        try{
            var Inpl = Inpl || {};
            if(localStorage.getItem('autorefresh') === 'true'){
                var __iwa = __iwa || [];
                __iwa.push(["setCustomVar","autorefresh","true","page"]);
                Inpl.gemiusOff=true;
                localStorage.setItem('stop_autorefresh', 'false');
                localStorage.setItem('autorefresh', 'false');
            } else {
                Inpl.gemiusOff = false;
            }
            if(localStorage.getItem('stop_autorefresh') === 'true'){
                localStorage.setItem('stop_autorefresh', 'false');
            }
        } catch (e) {
            console.log('Brak dostępu do local storage');
        }