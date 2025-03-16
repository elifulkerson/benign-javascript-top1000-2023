var dcEl = "pneuy3jthfkl";
            var rtaUrl = 'https://cdn1-smallimg.phncdn.com/50d75407e5758e6ertk1735e21215f08bb6d/rta-1.gif';
    if (typeof page_params.holiday_promo === 'undefined') {
        rtaUrl = 'https://cdn1-smallimg.phncdn.com/50d75407e5758e6ertk2735e21215f08bb6d/rta-2.gif';// Detection code removed: RED-7493
        // Qr code message
        document.querySelector('#js-interactiveMessage') && RT_Utils.removeClass(document.querySelector('#js-interactiveMessage'), 'displayNone');
    }
    if (document.getElementById('RTAImage')) {
        document.getElementById('RTAImage').setAttribute('data-src', rtaUrl + '?v=61faf6fac9c8ca4be984b5b105d43708c78c76aa');
    }