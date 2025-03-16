if(!localStorage.getItem('esx-splash') || (localStorage.getItem('esx-splash') && (new Date().getTime() - localStorage.getItem('esx-splash')) > 10800000)) {
        let splashScroll = false;
        document.addEventListener('DOMContentLoaded', function () {
            window.addEventListener('scroll', function () {
                if(splashScroll) return;
                if (window.scrollY > 100) {
                    splashModal('esx-splash-1', 'esx-splash');
                    splashScroll = true;
                }
            });
        });
    }