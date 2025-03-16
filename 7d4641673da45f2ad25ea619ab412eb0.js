var _gaq = _gaq || [];

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
    _gaq.push(['_setAccount', 'UA-1830249-3']);_gaq.push(['_setDomainName', 'pixiv.net']);
    if (window.pixiv) {
        if (pixiv.user && pixiv.user.loggedIn) {
            _gaq.push(['_setCustomVar', 1, 'login', 'yes', 3]);
            _gaq.push(['_setCustomVar', 3, 'plan', pixiv.user.premium ? 'premium' : 'normal', 1]);
            _gaq.push(['_setCustomVar', 5, 'gender', pixiv.user.gender, 1]);
            _gaq.push(['_setCustomVar', 6, 'user_id', pixiv.user.id, 1]);
            _gaq.push(['_setCustomVar', 12, 'illustup_flg', pixiv.user.illustup_flg ? 'uploaded' : 'not_uploaded', 3]);
            _gaq.push(['_setCustomVar', 13, 'user_id_per_pv', pixiv.user.id, 3]);
        } else {
            _gaq.push(['_setCustomVar', 1, 'login', 'no', 3]);
        }

        _gaq.push(['_setCustomVar', 25, 'first_visit_datetime_pc', "2023-10-16 13:39:53", 3]);

        (function() {
            // クッキーあれば、一回でもログインした人とみなす
            if (pixiv.user && window.colon && colon.storage) {
                var cookie_name = 'login_ever';

                if (colon.storage.cookie(cookie_name)) {// 一度でもログインしたことある
                    _gaq.push(['_setCustomVar', 2, 'login ever', 'yes', 1]);

                } else if (pixiv.user.loggedIn) { // ログインしてる
                    colon.storage.cookie(cookie_name, 'yes', {
                        expires: 1000 * 60 * 60 * 24 * 365 * 5, // 5 years
                        domain: location.hostname
                    });
                    _gaq.push(['_setCustomVar', 2, 'login ever', 'yes', 1]);

                } else { // ログインしたこと無いし、ログインしてもない
                    _gaq.push(['_setCustomVar', 2, 'login ever', 'no', 1]);
                }

                
                var p_ab_id = colon.storage.cookie('p_ab_id');
                var p_ab_id_2 = colon.storage.cookie('p_ab_id_2');
                _gaq.push(['_setCustomVar', 9, 'p_ab_id', p_ab_id, 1]);
                _gaq.push(['_setCustomVar', 10, 'p_ab_id_2', p_ab_id_2, 1]);

                var p_ab_d_id = colon.storage.cookie('p_ab_d_id');
                _gaq.push(['_setCustomVar', 27, 'p_ab_d_id', p_ab_d_id, 3]);
            }
        } ())

        _gaq.push(['_setCustomVar', 11, 'lang', "ja", 1]);
    }
    _gaq.push(['_setCustomVar', 29, 'default_service_is_touch', 'no', 3]);
        _gaq.push(['_setSiteSpeedSampleRate', 20]);
    _gaq.push(['_trackPageview']);