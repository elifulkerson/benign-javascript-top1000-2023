jwplayer("video-player").setup({
                //"ga": {},
                //"nextUpDisplay": "false",
                //"cast": {},
                "playbackRateControls": "true",
                "timeSliderAbove": "true",
                "width": "100%",
                "aspectratio": "16:9",
                "skin":
                {
                    "active": "#E20022",
                    //"inactive": "white",
                    "controlbar": {
                        "iconsActive": "#f00",
                        "icons": "#fff"
                    },
                    "timeslider": {
                        "progress": "#f00"
                    },
                    "menus": {
                        "textActive": "#f00"
                    }
                },
                    
                    "qualityLabels": { "1": "1080p", "2": "720p", "3": "480p", "4": "360p", "5": "240p", "6": "144p",  },
                    
                "playlist": [{
                    "image": "https://s38.namasha.com/images/preview/7430408167-640x360.jpg",
                    "sources": [
                                    
                                    {
                                        "file": "https://s38.namasha.com/dash/7430408167/Manifest.mpd",
                                        "type": "dash"
                                    },
                                    
                    ],

                }],

                    
                        "dash": "shaka",
                    


                "plugins": {
                    "https://static.namasha.com/content/player8.11.10/time.js": {
                        text: "09:42"
                    }
                }
            });

                
                var isPlayed = false;
                jwplayer('video-player').on('play', function () {
                    if (!isPlayed) {
                        isPlayed = true;
                        $.post('https://stats.namasha.com/visit?id=7430408167');
                    }
                });
                

            //fix fullscreen
            jwplayer('video-player').on('fullscreen', function() {
                var isPlayerFullscreen = jwplayer('video-player').getFullscreen();
                if (isPlayerFullscreen) {
                    playerClasses = $('#video-player').attr('class');
                }
                else {
                    setTimeout(function () {
                        $('#video-player').removeClass('jw-flag-fullscreen');
                        $('#video-player').attr('class', playerClasses);
                    }, 100);
                }
            });