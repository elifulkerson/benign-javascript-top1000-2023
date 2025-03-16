((counterHostname) => {
        window.MSCounter = {
            counterHostname: counterHostname
        };
        window.mscounterCallbacks = window.mscounterCallbacks || [];
        window.mscounterCallbacks.push(() => {
            msCounterExampleCom = new MSCounter.counter({
                'account': 'rbc_ru',
                'tmsec': 'rbc_ru',
                'cat_id': 147,
                'media': encodeURIComponent('РБК')
            });
        });

        const newScript = document.createElement('script');
        newScript.async = true;
        newScript.src = `${counterHostname}/ncc/counter.js`;

        const referenceNode = document.querySelector('script');
        if (referenceNode) {
            referenceNode.parentNode.insertBefore(newScript, referenceNode);
        } else {
            document.firstElementChild.appendChild(newScript);
        }
    })('https://tns-counter.ru/');