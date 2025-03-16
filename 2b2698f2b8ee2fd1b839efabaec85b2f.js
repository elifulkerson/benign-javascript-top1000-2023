var trackOutboundLink = function(url) {
        ga('send', 'event', 'outbound', 'click', url, {
            'transport': 'beacon',
            'hitCallback': function(){return true;}
        });
    }