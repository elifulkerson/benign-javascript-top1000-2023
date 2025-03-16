document.addEventListener('DOMContentLoaded', function() {
        [].forEach.call(
            // the slash literal in this href will be encoded as %2F if
            // we're already passing through events/redirect
            document.querySelectorAll('.navi a[href="/tax"]'),
            function(el) {
                el.addEventListener(
                    'click',
                    function(e) {
                        e.preventDefault();
                        window.location = '/events/redirect/external?eventcode=TaxNavClick&returnurl=' + encodeURIComponent(el.href);
                    },
                    false
                );
            }
        );
    });