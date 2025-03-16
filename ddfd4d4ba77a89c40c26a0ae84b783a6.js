var player_locale = {
                    
                        "LIVE": "LIVE",
                        "Play Video": "Play video",
                        "Play": "Play",
                        "Pause": "Pause",
                        "Current Time": "Current time",
                        "Duration Time": "Duration",
                        "Remaining Time": "The remaining time",
                        "Stream Type": "Streaming-Format",
                        "Loaded": "Loaded",
                        "Progress": "Progress",
                        "Fullscreen": "Full screen mode",
                        "Non-Fullscreen": "Exit from full screen mode",
                        "Mute": "No sound",
                        "Unmute": "With sound",
                        "Playback Rate": "Playback speed",
                        "Close Modal Dialog": "Close",
                        "Close": "Close",
                        "Download": "Download",
                        "Subscribe": "Subscribe",
                        "More": "Watch all episodes",
                        "About": "In this episode",
                        "You aborted the media playback": "You stopped video playback",
                        "A network error caused the media download to fail part-way.": "A network error caused a crash while downloading the video",
                        "The media could not be loaded, either because the server or network failed or because the format is not supported.": "Unable to download video due to network or server failure, or the format is not supported",
                        "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "Video playback has been paused due to failure or because the video uses features not supported by your browser",
                        "No compatible source was found for this media.": "There are no compatible sources for this video",
                        "The media is encrypted and we do not have the keys to decrypt it.": "The video is encrypted and we have no decryption keys",
                        "Download video": "Download video",
                        "Link": "Link",
                        "Copy Link": "Copy Link",
                        "Get Code": "Get Code",
                        "Views": "Views",
                        "Repeat": "Repeat"
                };
            
            if ( document.querySelectorAll('.video-js').length && !window.videojs ) {
                loadJS("https://cdn1.img.sputnikglobe.com/min/js/dist/videoplayer.js?933f20977", function() {
                    
                        videojs.addLanguage("en", player_locale);
                    
                });
            }