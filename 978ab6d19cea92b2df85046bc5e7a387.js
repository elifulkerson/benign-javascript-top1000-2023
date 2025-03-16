var kompas_id = ("; "+document.cookie).split("; kmps_usrid=").pop().split(";").shift();
    var random_interval = gen_random_interval();

            var base_url = "https://play.kompas.com/";
    
    if (kompas_id) {
        gen_loyalty();
    }

    function gen_loyalty() {
        let participant_loyalty = get_cookie('participant_loyalty');
        if (participant_loyalty.indexOf('404_')>-1 && participant_loyalty.indexOf(kompas_id)>-1) {
            return ""
        } else if (kompas_id == participant_loyalty) {
            document.querySelector('#loyalty_koin').style.display = 'block'
            return action_activity_flag();
        }
        
        return participant_exists().then(function(data) {
            if (data) {
                document.querySelector('#loyalty_koin').style.display = 'block'
                return action_activity_flag();
            } else {
                document.querySelector('#loyalty_koin').style.display = 'none'
            }
        })
    }

    function action_activity_flag() {
            }

    async function participant_exists() {
        const response = await fetch(`${base_url}api/loyalty/participant?exists=${kompas_id}`, {
            method: 'GET'
        });
        const participant = await response.json();

        if (participant.status) {
            set_cookie('participant_loyalty', kompas_id, 8760) // 1 year  
            return true;
        } else {                        
            set_cookie('participant_loyalty', '404_'+kompas_id, 8760) // 1 year
            return false;
        }
    }

    function gen_activity_flag() {
        var url = window.location.pathname;
        var path = url.split('/')
        if (path[1] == 'read') {
            return path[2]+'/'+path[3]+'/'+path[4]+'/'+path[5];
        } else if (path[1] != 'read') {
            return path[3]+'/'+path[4]+'/'+path[5]+'/'+path[6];
        }

        return "";
    }

    function set_cookie(name,value,hour) {
        var expires = "";
        if (hour) {
            var date = new Date();
            date.setTime(date.getTime() + (hour*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + ";" + expires + ";domain=.kompas.com;path=/;secure;SameSite=None";
    }

    function get_cookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    document.querySelector('#loyalty_koin').addEventListener('click', function() {
        set_cookie('lagging_badge_click', random_interval, random_interval);
    })

    function active_badge(active) {
        if (!active) {
            desk_badge_koin = document.querySelector('.loyalty__link__badge')
            if (desk_badge_koin) {
                desk_badge_koin.classList.remove('active')
            }
            mob_badge_koin  = document.querySelector('.icon-koin-badge');
            if (mob_badge_koin) {
                mob_badge_koin.style.display = 'none'
            }
        } else {
            desk_badge_koin = document.querySelector('.loyalty__link__badge')
            if (desk_badge_koin) {
                desk_badge_koin.classList.add('active') 
            }       
            mob_badge_koin = document.querySelector('.icon-koin-badge');
            if (mob_badge_koin) {
                mob_badge_koin.style.display = 'block'
            }
        }
    }

    function gen_random_interval() {
        var min = 60;
        var max = 600;
        return Math.floor(Math.random()*(max - min)) + min;
    }

    function set_cookie_badge_expired() {
        set_cookie('lagging_badge_expired', random_interval, random_interval);
    }

    function check_badge_koin() {
        var lagging_badge_click = get_cookie('lagging_badge_click');
        var lagging_badge_expired = get_cookie('lagging_badge_expired');
        if (lagging_badge_expired) {
            if (lagging_badge_click) {
                active_badge(false);
            }
            setTimeout(function() {
                active_badge(true);
            }, lagging_badge_expired * 1000);
        } else if (lagging_badge_click) {
            active_badge(false);
            setTimeout(check_badge_koin, random_interval*1000);
        } else {
            setTimeout(check_badge_koin, random_interval*1000);
        }
    }
    check_badge_koin()

    if (window.location.href.indexOf('loyalty') > -1) {
        set_cookie('lagging_badge_click', random_interval, random_interval);
        active_badge(false);
    }