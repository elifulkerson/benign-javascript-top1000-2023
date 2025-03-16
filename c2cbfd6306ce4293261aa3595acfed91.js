(function(){
                            const colorScheme = window.localStorage.getItem('goalColorScheme');

                            if (!colorScheme) {
                                window.localStorage.setItem('goalColorScheme', 'dark');
                            }

                            document.documentElement.setAttribute('theme', colorScheme || 'dark');
                        })();