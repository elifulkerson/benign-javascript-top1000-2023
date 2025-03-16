function sendInteractiveEvent(category, label) {
        gtag("event", "custom_click", {                
            'event_category': category,
            'event_action': "click",
            'event_label': label
        });
    }

    var eventItems = null || [];
    document.querySelector("html").addEventListener("click", function(e) {
        // https://github.com/aleemb/dawn.com/issues/1165
        if (window.Element && Element.prototype.closest) {
            var target = e.target;
            var eventLabel =
                typeof target.href !== "undefined" &&
                !target.href.startsWith("javascript:")
                    ? target.href
                    : document.location.href;

            for (i = 0; i < eventItems.length; i++) {
                if (target.matches(eventItems[i].selector + ', ' + eventItems[i].selector + ' *')) {
                    sendInteractiveEvent(eventItems[i].parent, eventLabel);
                    break;
                }
            }
        }
    });

    for (i = 0; i < eventItems.length; i++) {
        if (eventItems[i].parent == 'audio') {
            const audioPlayer = document.getElementById(eventItems[i].selector);
            audioPlayer.addEventListener("play", (e) => sendInteractiveEvent('audio', e.type), false);
            audioPlayer.addEventListener("pause", (e) => sendInteractiveEvent('audio', e.type), false);
            audioPlayer.addEventListener("ended", (e) => sendInteractiveEvent('audio', e.type), false);
        }
    }