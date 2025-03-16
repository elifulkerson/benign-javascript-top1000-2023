// The javascript bits of Universal Auth
var UniversalAuth = function () {
    // Because of races around joining a Team, a universl auth session can be interrupted
    //   by the user now needing to delegate their session creation to the CFZ
    // 
    // The server will notice and indicate this with a special pixel response
    //   at which point the script should re-run from the start (making a new request, 
    //   etc.).
    //
    // This controls the maximum number of times, for a single page load, we will try and
    //   restart universal auth.  In theory, 1 is sufficient for all purposes... but we'll
    //   see.
    var RETRIES_REMAINING = 1;

    return {
        performAuth: function () {
            if (!UniversalAuth.enabled()) return;

            var hasAuthed = $.cookie('uauth');
            if (hasAuthed == null) return;

            $.post(
                '/users/login/universal/request',
                function (data, text, req) {
                    $.each(data, function (arrayId, group) {
                        var url = '//' + group.Host + '/users/login/universal.gif?authToken=' + encodeURIComponent(group.Token) + '&nonce=' + encodeURIComponent(group.Nonce);
                        $(document).ready(function () {
                            var $img = $('<img/>').attr({
                                style: 'display:none',
                                src: url,
                                'crossOrigin': 'use-credentials'  // needed for CORS
                            });

                            $img.one('load', function () {
                                var w = $img[0].width;
                                var h = $img[0].height;

                                // signals that we should retry
                                if (w == 2 && h == 2 && RETRIES_REMAINING > 0) {
                                    RETRIES_REMAINING--;

                                    var existingCookie = $.cookie('uauth');

                                    // if we've already requested a retry, don't re-reset the cookie
                                    if (!existingCookie) {
                                        var now = new Date();
                                        var expiration = new Date(now.getTime() + 5 * 60 * 1000);
                                        $.cookie('uauth', 'true', { path: '/', domain: document.domain, expires: expiration });
                                        setTimeout(
                                            function () { UniversalAuth.performAuth(); },
                                            10
                                        );
                                    }
                                }
                            });

                            $('#footer').append($img);
                        });
                    });
                },
                'json');

            // remove this cookie            
            $.cookie('uauth', null, { path: '/', domain: document.domain });
        },

        enabled: function () {
            return true;
        }
    };
}();