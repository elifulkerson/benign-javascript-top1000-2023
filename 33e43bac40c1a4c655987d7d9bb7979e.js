window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());
    let event_params = {};
    let user_properties = {};
    if (window.pixiv) {
        if (pixiv.user && pixiv.user.loggedIn) {
            event_params['login'] = 'yes';
            user_properties['plan'] =  pixiv.user.premium ? 'premium' : 'normal';
            user_properties['gender'] = pixiv.user.gender;
            user_properties['user_id'] = pixiv.user.id;
            user_properties['illustup_flg'] = pixiv.user.illustup_flg ? 'uploaded' : 'not_uploaded';
        } else {
            event_params['login'] = 'no';
        }

    event_params['first_visit_datetime_pc'] = "2023-10-16 13:39:53";
        (function() {
            // クッキーあれば、一回でもログインした人とみなす
            if (pixiv.user && window.colon && colon.storage) {
                var cookie_name = 'login_ever';

                if (colon.storage.cookie(cookie_name)) {// 一度でもログインしたことある
                    event_params['login ever'] = 'yes'

                } else if (pixiv.user.loggedIn) { // ログインしてる
                    colon.storage.cookie(cookie_name, 'yes', {
                        expires: 1000 * 60 * 60 * 24 * 365 * 5, // 5 years
                        domain: location.hostname
                    });
                    event_params['login ever'] = 'yes';
                } else { // ログインしたこと無いし、ログインしてもない
                    event_params['login ever'] = 'no';
                }

                
                var p_ab_id = colon.storage.cookie('p_ab_id');
                var p_ab_id_2 = colon.storage.cookie('p_ab_id_2');
                event_params['p_ab_id'] = p_ab_id;
                event_params['p_ab_id_2'] = p_ab_id_2;

                var p_ab_d_id = colon.storage.cookie('p_ab_d_id');
                event_params['p_ab_d_id'] = p_ab_d_id;
            }
        } ())

        event_params['lang'] = "ja";
    }
    event_params['default_service_is_touch'] = 'no';gtag('set', 'user_properties', {...user_properties});gtag('config', 'G-75BBYNYN9J', {...event_params});