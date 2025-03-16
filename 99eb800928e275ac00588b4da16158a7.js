window.WeizenBockCompatible = {

                getTypeReader: function(user) {
                    if (!user ) {
                        return 'anonimo';
                    }
                    if(user.subscriptionStatus == "subscribed"){
                        return 'paywall';
                    }
                    else{
                        return 'loginwall';
                    }
                },
                getPaywallShock: function() {
                    const cookie = document.cookie.replace(/(?:(?:^|.*;s*)paywall-choques*=s*([^;]*).*$)|^.*$/, "$1");
                    if (cookie != "undefined" || cookie != "" ) {
                        return cookie;
                    }
                    else{
                        return 0;
                    }
                },
                getSubscriptionType: function(defaultValue) {
                    return defaultValue;
                },
                getFingerprint: function() {
                    const cookie = document.cookie.replace(/(?:(?:^|.*;s*)wbfp2s*=s*([^;]*).*$)|^.*$/, "$1");
                    if( typeof cookie != "undefined" && cookie != "") {
                        return cookie;
                    }
                    return "C0D7464FFE10BB49089C31A46A1345856FDB6A0BA4C";
                },
                getAge: function(dateString) {
                    if(!dateString){
                        return "";
                    }
                    var today = new Date();
                    var birthDate = new Date(dateString);
                    var age = today.getFullYear() - birthDate.getFullYear();
                    var m = today.getMonth() - birthDate.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }
                    return age;
                },
                getSubscriptionStatus: function(user) {
                    if(!user)
                        return "0";
                    return (user.subscriptionStatus == "subscribed") ? "2" : "1";
                },
                getDateBirth: function (value){
                    if (value) {
                        return value.substring(0,4);
                    }
                    return 0;
                },
                getReferrer: function () {
                    if ( document.referrer.length == 0) {
                        return "";
                    }
                    var referrer = document.referrer.split('/')[2];
                    return referrer.replace(/./g,"_");
                },
                getGen: function (gen){
                    if (gen) {
                        return gen;
                    }
                    return "";
                },
                getCookieConsent: function (){
                    const cookie = document.cookie.replace(/(?:(?:^|.*;s*)cookieconsent_statuss*=s*([^;]*).*$)|^.*$/, "$1");
                    let GDPRv;
                    if(cookie){
                        GDPRv = cookie == "undefined" || cookie == "" ? "-2" 
                        : cookie == "deny" ? "0" 
                        : cookie == "allow" ?? "1";
                        return GDPRv;
                    }
                    return false;
                },
                getPaywallCount: function(){
                    var kws_count = 0;
                    const cookie = document.cookie.replace(/(?:(?:^|.*;s*)apw_aac_CLARIN_Ds*=s*([^;]*).*$)|^.*$/, "$1");
                    if (cookie != "undefined" && cookie != "" ) {
                        kws_count = cookie.split('.')[2];
                    }
                    return kws_count;
                }, 
                getStatusSw: function() {
                    return (this.getPaywallCount() > 10 && this.getPaywallCount() <= 20) ? 'si' : 'no';
                },
            };
            
            window.WAuth = {
                getUserSync: function(){
                    return getAll()
                }
            }
            
            function getAll(){
                var data = window.localStorage.getItem("wads_userProfile");
                if (data === null) {
                    return null;
                }
                
                data = JSON.parse(data);
                
                if (data.value != undefined) {
                    data = data.value;
                }
                return data;
            }