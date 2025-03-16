$(function () {
        $('#agreement-box .agree-btn').click(function () {
            $('.gdpr-agreement-box').hide();
            var account = "" || 'is_guest';
            $.cookie("uuzu_GDPR", account, {
                expires: 1700025903,
                path: '/',
                domain: '.gtarcade.com'
            });
        });
    })