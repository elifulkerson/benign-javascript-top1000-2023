!function(n,t,c,e,u){function r(n){try{f=n(u)}catch(n){return h=n,void i(p,n)}i(s,f)}function i(n,t){for(var c=0;c<n.length;c++)d(n[c],t);
    }function o(n,t){return n&&(f?d(n,f):s.push(n)),t&&(h?d(t,h):p.push(t)),l}function a(n){return o(!1,n)}function d(t,c){
        n.setTimeout(function(){t(c)},0)}var f,h,s=[],p=[],l={then:o,catch:a,_setup:r};n[e]=l;var v=t.createElement("script");
        v.src=c,v.async=!0,v.id="_uasdk",v.rel=e,t.head.appendChild(v)}(window,document,'https://web-sdk.urbanairship.com/notify/v1/ua-sdk.min.js',
            'UA', {
                appKey: 'WiDAeZDyRNidHGc7D5IHjA',
                token: 'MTpXaURBZVpEeVJOaWRIR2M3RDVJSGpBOnItVXFYemQ3dUNoMDVlVHZIU2xvSU03dWlnTmU3aGU3bU9hcnB2NFhZM0E',
                vapidPublicKey: 'BKSj0ZE2y9fG6FJReRddKO-br-U0nsVnUysX9W-LGHOZt686q6AGix60bv-j97x6lLtAMc6I6cM6X7nCSsiIVqA=',
                workerUrl: '/js/push-worker.js',
            });
    $(document).ready(function() {

        var visitcount = getCookie("visitcountdotcom");
        var domainName = window.location.hostname;
       // console.log(domainName);
        if (visitcount) {
            var visitcount=parseInt(visitcount)+1;
            setCookie("visitcountdotcom", visitcount, 100);
        } else {
            visitcount = 1;
            setCookie("visitcountdotcom", visitcount, 100);
        }
        var width = $(window).width();
        function showAlertbox(){
            UA.then(function(sdk) {
                if(sdk.channel==null){
                    if (document.cookie && document.cookie.indexOf('notnowcountdotcom') != -1) {
                    } else {
                        if(visitcount >3){
                            if(visitcount >3){
                                if (Notification.permission === 'granted') {
                                    //do something
                                }
                                else if (Notification.permission === 'default') {
                                    if (document.cookie && document.cookie.indexOf('attemptcountdotcom') != -1) {
                                        //do something
                                    }
                                    else{

                                        $(".outer_push").css("display","block");
                                        document.getElementById('register').addEventListener('click', function(){
                                            $(".outer_push").css("display","none");
                                            sdk.register(); // Returns Channel object

                                            var attemptcount = getCookie("attemptcountdotcom");
                                            if (attemptcount) {
                                                var attemptcount=parseInt(attemptcount)+1;
                                                setCookie("attemptcountdotcom", attemptcount, 100);
                                            } else {
                                                attemptcount = 1;
                                                setCookie("attemptcountdotcom", attemptcount, 100);
                                            }

                                        });
                                    }

                                }

                            }
                        }
                    }
                }

                document.getElementById('notregister').addEventListener('click', function(){
                    $(".outer_push").css("display","none");
                    var notnowcount = getCookie("notnowcountdotcom");
                    if (notnowcount) {
                        var notnowcount=parseInt(notnowcount)+1;
                        setCookie("notnowcountdotcom", notnowcount, 3);
                    } else {
                        notnowcount = 1;
                        setCookie("notnowcountdotcom", notnowcount, 3);
                    }
                });
            });
        }
        const myTimeout = setTimeout(showAlertbox, 5000);
        function setCookie(name,value,days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/" + "; domain=.mathrubhumi.com";
        }
        function getCookie(name) {
            var nameEQ = name + "=";
            //var domainEQ= "domain=." + domainName; && (c.indexOf(domainEQ) == 0)
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if ((c.indexOf(nameEQ) == 0)) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }
        function eraseCookie(name) {
            document.cookie = name+'=; Max-Age=-99999999;';
          console.log("ërased " + name)
        }
        eraseCookie("userId");
    });