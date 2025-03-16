var videoContainer = document.querySelector('.video-container-col');
    var videoContainerOffsetTop = videoContainer.offsetTop;
    var videoContainerHeight = videoContainer.clientHeight;
    var isVideoPlay = false;
    var isVideoPause = false;

    var observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            if (!isVideoPlay) {
                isVideoPlay = true;
                window.refreshDisabled = true;
                document.querySelector('#mynetVideoEmbed').src = document.querySelector('#mynetVideoEmbed').getAttribute('data-src') + "?trackingWidget=homeVideoWidget&autoplay=1&volume=0&publisher=10";
            }

            if (isVideoPause) {
                iframeVideoSetPlay();
                isVideoPause = false;
            }
            return;
        }

        if (isVideoPlay) {
            iframeVideoSetPause();
            isVideoPause = true;
        }
        return;
    }, {root: null, threshold: 0.1});

    observer.observe(videoContainer);

    var videoListItems = document.querySelectorAll('.video-list-items .list-item');
    for (var i = 0; i < videoListItems.length; i++) {
        videoListItems[i].addEventListener('click', function () {
            var videoUrl = this.getAttribute('data-src') + '?trackingWidget=homeVideoWidget&autoplay=1&volume=0&publisher=10';
            var videoTitle = this.querySelector('.item-title h4').innerText;
            var videoCategory = this.getAttribute('data-category');

            document.querySelector('#mynetVideoEmbed').src = videoUrl;
            document.querySelector('.video-info-content h3').innerHTML = videoTitle;
            document.querySelector('.video-info-content span.category').innerHTML = videoCategory;
            /*if (window.innerWidth < 575) {
                $('html,body').animate({scrollTop: (videoContainerOffsetTop - 60)}, 'fast');
            }*/
        });
    }

    function iframeVideoSetPause() {
        var iframe = document.querySelector('#mynetVideoEmbed');
        if (iframe.contentDocument !== null) {
            iframe.contentDocument.body.querySelector('#nokta-player video').pause();
        }
    }

    function iframeVideoSetPlay() {
        var iframe = document.querySelector('#mynetVideoEmbed');
        if (iframe.contentDocument !== null) {
            iframe.contentDocument.body.querySelector('#nokta-player video').play();
        }
    }