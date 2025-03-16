window.sliceComponents = window.sliceComponents || {};

    externalsScriptLoaded.then(() => {
        window.reliableDOMContentLoaded.then(() => {
            var componentContainer = document.querySelector("#slice-container-regionRedirectBanner");

            if (componentContainer) {
                var data = {"currentEdition":"US","translations":[{"translatedText":"Looks like you're in the US! Visit TechRadar's <a href=\"https:\/\/www.techradar.com\"> US edition<\/a> for content related to your region.","locale":"US"},{"translatedText":"\"Parece que est\u00e1s en M\u00e9xico. Entra en la <a href=\"https:\/\/global.techradar.com\/es-mx\">Edici\u00f3n M\u00e9xico<\/a> de TechRadar para acceder a los contenidos de tu regi\u00f3n.\" ","locale":"MX"},{"translatedText":"Looks like you're in SG! Visit TechRadar's <a href=\"https:\/\/www.techradar.com\/sg\"> SG edition<\/a> for content related to your region.","locale":"SG"},{"translatedText":"Det ser ud som om du er i Danmark! Visit TechRadar's <a href=\"https:\/\/global.techradar.com\/da-dk\" style=\"color: #4B8EE7; text-decoration: none;\"> DK edition<\/a> for at se indhold fra din egen region.","locale":"DK"},{"translatedText":"Sijaintisi n\u00e4ytt\u00e4isi olevan Suomi. P\u00e4\u00e4set lukemaan paikallisia sis\u00e4lt\u00f6j\u00e4 siirtym\u00e4ll\u00e4 sivulle TechRadar's <a href=\"https:\/\/global.techradar.com\/fi-fi\" style=\"color: #4B8EE7; text-decoration: none;\"> FI<\/a>.","locale":"FI"},{"translatedText":"Det ser ut som om du befinner deg i Norge! Bes\u00f8k TechRadar's <a href=\"https:\/\/global.techradar.com\/no-no\"> NO edition<\/a> for mer lokalt innhold.","locale":"NO"},{"translatedText":"Det verkar som om du \u00e4r i Sverige! Bes\u00f6k TechRadar <a href=\"https:\/\/global.techradar.com\/sv-se\" style=\"color: #4B8EE7; text-decoration: none;\">SE<\/a> f\u00f6r att l\u00e4sa inneh\u00e5ll fr\u00e5n din region.","locale":"SE"},{"translatedText":"Looks like you're in the UK! Visit TechRadar's <a href=\"https:\/\/www.techradar.com\/uk\"> UK edition<\/a> for content related to your region.","locale":"GB"},{"translatedText":"Sembra che tu sia in Italia! Visita <a href=\"https:\/\/global.techradar.com\/it-it\">TechRadar italia<\/a> per gli articoli del tuo Paese.","locale":"IT"},{"translatedText":"Het lijkt erop dat je in Nederland bent! Bezoek TechRadars <a href=\"https:\/\/global.techradar.com\/nl-nl\"> NL versie<\/a> voor content over je regio.","locale":"NL"},{"translatedText":"Het lijkt erop dat je in Belgium bent! Bezoek TechRadars <a href=\"https:\/\/global.techradar.com\/nl-be\"> BE versie<\/a> voor content over je regio.","locale":"BE"},{"translatedText":"Il semblerait que vous \u00eates en France ! Visitez TechRadar's <a href=\"https:\/\/global.techradar.com\/fr-fr\"> FR edition<\/a> pour acc\u00e9der aux contenus de votre pays.","locale":"FR"},{"translatedText":"Bist du aus Deutschland? Dann besuche TechRadar's <a href=\"https:\/\/global.techradar.com\/de-de\"> DE edition<\/a> um News aus deiner Region zu lesen.","locale":"DE"},{"translatedText":"Parece que est\u00e1s en Espa\u00f1a! Visita TechRadar <a href=\"https:\/\/global.techradar.com\/es-es\"> ES edition<\/a> para ver contenido relacionado con tu regi\u00f3n.","locale":"ES"},{"translatedText":"Looks like you're in Australia! Visit TechRadar's <a href=\"https:\/\/www.techradar.com\/au\"> Australian edition<\/a> for content related to your region.","locale":"AU"},{"translatedText":"Looks like you're in New Zealand! Visit TechRadar's <a href=\"https:\/\/www.techradar.com\/nz\"> NZ edition<\/a> for content related to your region.","locale":"NZ"}]};

                var triggerHydrate = function() {
                    window.sliceComponents.regionRedirectBanner.hydrate(data, componentContainer);
                }

                var triggerScriptLoadThenHydrate = function() {
                    if (window.sliceComponents.regionRedirectBanner === undefined) {
                        var script = document.createElement('script');
                        script.src = 'https://slice.vanilla.futurecdn.net/12-7-7/js/regionRedirectBanner.js';
                        script.async = true;
                        script.id = 'vanilla-slice-regionRedirectBanner-component-script';

                        script.onload = () => {
                            window.sliceComponents.regionRedirectBanner = regionRedirectBanner;
                            triggerHydrate();
                        };
                        document.head.append(script);
                    } else {
                        triggerHydrate();
                    }
                }

                if (window.lazyObserveElement) {
                    window.lazyObserveElement(componentContainer, triggerScriptLoadThenHydrate, 1500);
                } else {
                    console.log('Could not lazy load slice JS for regionRedirectBanner')
                }
            }
        }).catch(err => console.log('Hydration Script has failed for regionRedirectBanner Slice', err));
    }).catch(err => console.log('Externals script failed to load', err));