function waitForBundles(bundles, alias, callback, listener) {
        window.executed = window.executed || {};
        if (window.executed[alias]) return;

        if (bundles.every(function(bundle) { return window.executed[bundle]; })) {
            listener && document.removeEventListener('bundle-loaded', listener);
            callback();
            window.executed[alias] = true;
            document.dispatchEvent(new Event('bundle-loaded'));
        } else if (!listener) {
            const func = function() { waitForBundles(bundles, alias, callback, func); };
            document.addEventListener('bundle-loaded', func);
        }
    }

    function atComponentInserted(params) {
        var scriptElement = document.querySelector("#" + params.scriptId);
        var setLoadedClass = function() {
            scriptElement.classList.add('loaded');
            scriptElement.dispatchEvent(new Event('loaded', { bubbles: true }));
            document.dispatchEvent(new Event('at-rendered'));
        }

        scriptElement.classList.add('executed');
        fetch(params.path)
            .then(function(response) {
                return response.text()
            })
            .then(function (text) {
                var div = document.createElement('div');

                div.innerHTML = text.trim();

                if (document.documentElement.dir === 'rtl') {
                    Array.from(div.querySelectorAll('link[href$=".css"]')).forEach(link => {
                        if (link.href.indexOf('.rtl.') === -1) {
                            link.href = link.href.slice(0, -13) + '.rtl.' + link.href.slice(-12);
                        }
                    });
                }

                scriptElement.parentElement.insertAdjacentElement("afterend", div.querySelector('.at-container'));

                //if inserted content contains decorator's inline scripts - evaluate each script manually
                scriptElement.parentElement.nextElementSibling.querySelectorAll('script.use-script-element').forEach(scriptEl => {
                    scriptEl.classList.remove('use-script-element');
                    Function(scriptEl.innerHTML).call(scriptEl);
                });
                setLoadedClass();
            })
            .catch(function() {
                console.log('Error loading: ', params.path);
                setLoadedClass();
            });
    }