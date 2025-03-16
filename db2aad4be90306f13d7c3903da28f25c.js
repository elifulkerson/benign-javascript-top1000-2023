var bodyElement = document.body;
    var clickElements= document.querySelectorAll('.my-menu-toggle, .all-menu');
    var presitial= document.querySelector('#prestitial_oop');

    for(var i = 0; i < clickElements.length; i++) {
        clickElements[i].addEventListener('click', function (event) {
            event.preventDefault();
            if (document.querySelector('link#my_open_menu_icon_css') === null) {
                var linkElement = document.createElement('LINK');
                linkElement.setAttribute('rel', 'stylesheet');
                linkElement.setAttribute('id', 'my_open_menu_icon_css');
                linkElement.setAttribute('type', 'text/css');
                linkElement.setAttribute('href', MYNET_MAIN_GLOBAL.my_open_menu_icon_css);

                document.head.appendChild(linkElement);
            }

            if(bodyElement.classList.toString().indexOf('open') > -1) {
                bodyElement.classList.remove('open');
                if(presitial) {
                    presitial.style.zIndex= '999999';
                }
            } else {
                bodyElement.classList.add('open');
                if(presitial) {
                    presitial.style.zIndex= '-1';
                }
            }

            var wHeight = window.innerHeight;
            var openMenuFtr = document.querySelector('.my-open-footer-box').clientHeight;
            var openMenuBox = wHeight - openMenuFtr - 100;
            document.querySelector('.my-open-menu-box').style.maxHeight = openMenuBox + 'px';
        });
    }

    document.querySelector('.my-overlay').addEventListener('click', function (event) {
        event.preventDefault();
        bodyElement.classList.remove("open");
        if(presitial) {
            presitial.style.zIndex= '999999';
        }
    });

    document.querySelector('#sana-ozel-btn').addEventListener('click', function () {
        bodyElement.classList.toString().indexOf('so-active') > -1 ? bodyElement.classList.remove('so-active') : bodyElement.classList.add('so-active');
        if (bodyElement.classList.toString().indexOf("so-active") > -1) {
            setEvent('webSanaOzel', 'Click', 'Sana Özel Button');
            localStorageStatusManagement.setLSUpdate("SOC");
            if(presitial && presitial.clientHeight > 0) {
                document.querySelector('.sana-ozel-container').style.top= '110px';
            }
        }
    });
    function setEvent(c, a, l) {
        dataLayer.push({ 'event': 'gap-event', 'eventCategory': c, 'eventAction': a, 'eventLabel': l });
    }