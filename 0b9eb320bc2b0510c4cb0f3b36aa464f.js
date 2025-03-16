/*
 * Dependency explanation:
 * 1. Load bombora library and set sessionStorage data.
 * 2. Load Visitor API library first 'visitor_api'.
 * 3. Load Visitor API library initialization in parallel with the library 'visitor_api_init'.
 * 4. Trigger the function invocation 'initVisitorId' after the libraries has been loaded.
 * 5. Load Adobe Target library 'at'.
 * 6. Load Adobe target callback 'at_callback'.
 * 7. Trigger the function invocation 'adobeTargetCallback' after the libraries has been loaded.
 */

(function (w, p, s) {
    // Check storage support for bombora and personalization.
    if (!w.sessionStorage) {
        throw new Error("Session storage not supported");
    }

    let isDbPromiseResolved = false;
    let isCpiPromiseResolved = false;
    function setResolvedValue(type, val) {
        switch (type) {
            case 'db':
                isDbPromiseResolved = val;
                break;
            case 'cpi':
                isCpiPromiseResolved = val;
                break;
        }
    }

    function remoteDataFetch(url, type, storageKey) {
        return new Promise(function (resolve, reject) {
            // Check if sessionStorage is already set.
            if (sessionStorage.getItem(storageKey) === null) {
                fetch(url)
                    .then(function (response) {
                        if (!response.ok) {
                            setResolvedValue(type, true);
                            throw new Error("HTTP error, status = " + response.status);
                        }
                        return response.json();
                    })
                    .then(function (json) {
                        // Store the data.
                        sessionStorage.setItem(storageKey, JSON.stringify(json));
                        setResolvedValue(type, true);
                        resolve();
                    })
                    .catch(function (error) {
                        // In case DB fails for any reason, continue to load the rest of functionality.
                        console.error(error.message);
                        setResolvedValue(type, true);
                        resolve();
                    });
            } else {
                // Get data from storage.
                setResolvedValue(type, true);
                resolve();
            }
        })
    }

    // Uses function from bombora script to set data in session storage.
    function setBomboraData() {
        if (typeof _bmb !== 'undefined' && _bmb) {
            _bmb('vi', function (data) {
                if (data != null) {
                    sessionStorage.setItem('bombora', JSON.stringify(data));
                    setResolvedValue('db', true);
                } else {
                    console.info('Bombora returns no data: ', performance.now(), data);
                }
            });
        }
    }

    function personalizationDataFetch() {
        var bvid = Cookies.get('box_visitor_id');
        if (!s.cpi_enabled || !s.cpi_endpoint || !bvid) {
            setResolvedValue('cpi', true);
            return;
        }
        var url = s.cpi_endpoint + encodeURIComponent(bvid);
        return remoteDataFetch(url, 'cpi', 'pdForTarget');
    }

    // Bombora needs to provide visitor data to Adobe and Segment before they load.
    let visitorScripts = [p.bombora_lib, p.visitor_api, p.visitor_api_init];

    // Check to see if bombora has already been set in session storage.
    let isBomboraDataSet = false
    if (sessionStorage.getItem('bombora')) {
        setResolvedValue('db', true);
        isBomboraDataSet = true;

        // Since Bombora data is already set, we can skip loading the library.
        visitorScripts = [p.visitor_api, p.visitor_api_init];
    }

    if (w.fetch) {
        fetchInject(
            [p.at_callback],
            fetchInject(
                visitorScripts,
                personalizationDataFetch()
            ).then(() => {
                if (!isBomboraDataSet) {
                    setBomboraData();
                }
                const allowedWaitingTime = s.max_wait_time;
                var currentWaitingTime = 0;
                var atInterval = setInterval(() => {
                    if ((isDbPromiseResolved && isCpiPromiseResolved) || currentWaitingTime >= allowedWaitingTime) {
                        clearInterval(atInterval);
                        initVisitorId();
                        fetchInject(
                            [p.at]
                        ).then(() => {
                            adobeTargetCallback();
                        });
                    }
                    currentWaitingTime += 50;
                }, 50);
            })
        );
    }
})(window, boxAdobeTargetScriptPath, boxAdobeTargetApiSettings)