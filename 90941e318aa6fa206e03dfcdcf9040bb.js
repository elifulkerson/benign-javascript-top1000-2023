var hasFirstTap = false;
    (function () {
        function onFirstTap () {
            hasFirstTap = true
            document.body.removeEventListener('touchstart', onFirstTap)
        }

        document.body.addEventListener('touchstart', onFirstTap)
    })()