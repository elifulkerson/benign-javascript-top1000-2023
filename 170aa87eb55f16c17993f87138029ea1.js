(function(){
            function defineScript ({ src, async, defer }) {
                return new Promise((resolve, reject) => {
                    const tag = document.createElement('script');

                    tag.type = 'text/javascript';
                    tag.src = src;

                    tag.async = !!async;

                    if(defer){
                        tag.defer = true;
                    }

                    tag.onload = resolve;
                    tag.onerror = reject;

                    document.head.appendChild(tag);
                });
            }

            window.foxState = {
                loaded: null,
            };
            defineScript({
                src: '//s.rbk.ru/v2_rbcbanners_static/rbcbanners-2.1.44/fox/build/app.js',
                                defer: true,
                            }).then(function(){
                window.foxState.loaded = true;
                document.dispatchEvent(new CustomEvent('foxLoaded'));
            }).catch(function(){
                const errorType = 'loaderError';
                document.dispatchEvent(new CustomEvent('foxError', {
                    detail: {
                        type: errorType,
                    },
                }));
                window.foxState.foxError = errorType;
                window.foxState.loaded = false;
            });
        })();