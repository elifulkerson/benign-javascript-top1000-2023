const consentAge = 18;
    const cookies = document.cookie.split(';');
    let hasPidCoppa = false;
    let isLoggedIn = false;

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('pid=')) {
            const pidValue = cookie.substring(4);
            isLoggedIn = pidValue.charAt(0).toLowerCase() === 'l';
        }
        if (cookie.startsWith('pid_coppa=')) {
            hasPidCoppa = true;
        }
    }

    function getCookie(name) {
        const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    function getAge() {
        const cookie = getCookie('pid_coppa');
        if (cookie) {
            const decodedCookie = atob(cookie);
            const splitCookie = decodedCookie.split('@');
            if (splitCookie.length > 1) {
                return splitCookie[1];
            }
        }
        return 99;
    }

    if (isLoggedIn && !hasPidCoppa) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/user/age/');
        xhr.setRequestHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
        xhr.setRequestHeader('Pragma', 'no-cache');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                hasPidCoppa = document.cookie.indexOf('pid_coppa') >= 0;
            }
        };
        xhr.onerror = function() {
            console.log('getUserAgeAction functionality Error...');
        };
        xhr.send();
    }
    // CBSOptanon Bootstrap Code.
    (function(a){
        const w=window,b='cbsoptanon',q='cmd',r='config';
        w[b] = w[b] ? w[b] : {};
        w[b][q] = w[b][q] ? w[b][q] : [];
        w[b][r] = w[b][r] ? w[b][r] : [];
        a.forEach(function(z){
            w[b][z] = w[b][z] || function(){
                var c=arguments;
                w[b][q].push(function(){
                    w[b][z].apply(w[b],c);
                })
            }
        });
    })(["onIframesReady","onFormsReady","onScriptsReady","onAdsReady"]);

    // Code needed for ads / BidBarrel to work right.
    window.cbsoptanon.config.push({
        enableServices: false,
        setNpaOnConsentChange: true,
        tfcd: hasPidCoppa ? getAge() < consentAge : false,
    });
    window.cbsoptanon.onIframesReady(function(_cbsoptanon) {
        _cbsoptanon.tags.load('IFRAME');
    });