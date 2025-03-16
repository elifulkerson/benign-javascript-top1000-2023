var COOKIE_EXPIRATION_DATE = 30 * 24 * 60 * 60; // 30 days
        jQuery(document).ready(function () {
            function getGenderPreference(gender){
                switch (gender){
                    case 'female':
                        return 'uyvv9Z';
                    case 'male':
                        return 'cNXv44';
                    case 'shemale':
                        return '4GkfR6';
                    case 'couple':
                        return 'MHEYRS';
                    case 'all':
                        return 'gt15L2';
                    default:
                        return 'uyvv9Z';
                }
            }
            jQuery('.genderPrefLinks').on('click', function (e) {
                e.preventDefault();

                var genderLink = e.target;
                if (Cam4User.userName === '') {
                    // set a cookie
                    var cookieString = getGenderPreference(genderLink.dataset.gender);
                    Cam4Cookies.setCookie('cam4-CONTENT', cookieString, DateTimes.thirtyDays,  '/', '', '');
                    window.location = e.target.href;
                } else {
                    jQuery.ajax({
                        type: 'POST',
                        url: '/rest/v1.0/directory-gender-preference/' + encodeURIComponent(Cam4User.userName) + '?gender=' + genderLink.dataset.gender,
                        contentType: "application/x-www-form-urlencoded; charset=utf-8",
                        success: function () {
                            window.location = e.target.href;
                        },
                        error: function (err) {
                            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                            window.location = e.target.href;
                        }
                    });
                }
            })
        });