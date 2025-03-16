var button = document.querySelectorAll('.iubenda-embed');
                    for (var i = 0; i < button.length; i++){
                        button[i].addEventListener('click', function() {
                            var waitForIframe = setInterval(function() {
                                var iframe = document.querySelector('#iubenda-pp-content iframe');
                                if (iframe) {
                                    iframe.setAttribute('scrolling', 'yes');
                                    clearInterval(waitForIframe);
                                }
                            }, 50);
                        });
                    }