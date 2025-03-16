(function (w, d, c) {
    (w[c] = w[c] || []).push(function() {
        var options = {
            project: 1111412,
            user_id: null,
            custom_vars: {
              uid: ''
            },
            attributes_dataset: [
              'changer'
            ],
            pub_scope: '.livejournal.com'
        };
        try {
            w.top100Counter = new top100(options);
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src =
        (d.location.protocol == "https:" ? "https:" : "http:") +
        "//st.top100.ru/top100/top100.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(window, document, "_top100q");