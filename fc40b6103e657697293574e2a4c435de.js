class MDKPWA{
        constructor(){
            this.init();
        }

        async init(){
            this.worker = {};
            this.registerWorker();
        }

        async registerWorker(){
            if(typeof navigator !== 'object' || typeof navigator.serviceWorker !== 'object' || typeof navigator.serviceWorker.register !== 'function'){
                console.warn('[ServiceWorker]','ServiceWorker unavailable!');
                return;
            }
            try {
                this.worker = navigator.serviceWorker;
                await this.worker.register('/serviceworker.js');
            } catch (error) {
                console.warn('ServiceWorker registration failed!',error);
            }
        }
    }

    window.addEventListener('load', function(){
        if(!window.kly){return;}
        window.kly.pwa = new MDKPWA();
    });