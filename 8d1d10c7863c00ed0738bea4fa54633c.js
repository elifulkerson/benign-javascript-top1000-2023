function prepareClickMap() {
            window.history.scrollRestoration="auto";
            window.Inpl = window.Inpl || {};
            window.Inpl.Video = window.Inpl.Video || {};
            window.Inpl.adsDisabled = "1";
            if (window.Inpl.Video.currentPlaying) {
                window.Inpl.Video.currentPlaying.pause();
            }
            window.Inpl.Video.autoplayDisabled = true;
            window.localStorage.setItem('stop_autorefresh', 'true');
            document.querySelectorAll('.item.tile.hidden').forEach(function (el) {
                el.classList.remove('hidden')
                el.style.display = 'block';
            })
            window.clickMapLoaded = true;
        }
        try {
            if(sessionStorage.getItem('clickmap-ui-active') === 'true') {
                prepareClickMap();
            }
        } catch (e){
            console.log('brak dostępu co sessionStorage')
        }
        window.addEventListener('clickmap-ui-active', function () {
            prepareClickMap();
        });