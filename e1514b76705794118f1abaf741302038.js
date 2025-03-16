window.sliceComponents = window.sliceComponents || {};

    externalsScriptLoaded.then(() => {
        window.reliableDOMContentLoaded.then(() => {
            var componentContainer = document.querySelector("#slice-container-localeSelector");

            if (componentContainer) {
                var data = {"defaultEdition":"US","trailingSlash":true,"dropdownPosition":"default","l10ns":[{"continentName":"","countries":[{"name":"UK","link":"https:\/\/www.pcgamer.com\/uk\/","aliasOf":"GB","visitingFrom":"the UK","editionName":"UK","global":false,"hideFlag":false,"isDefault":false,"displayLabel":"UK Edition","locale":"GB","image":{"src":"https:\/\/vanilla.futurecdn.net\/pcgamer\/media\/shared\/img\/flags\/nosize\/GB.svg","alt":"flag of UK","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false,"removeNativeWidthRestriction":false,"dataBordeauxImageCheckAttr":false,"noCredit":false},"homepage":"https:\/\/www.pcgamer.com\/uk\/"},{"name":"US","link":"https:\/\/www.pcgamer.com\/","aliasOf":"US","visitingFrom":"the US","editionName":"US","global":false,"hideFlag":false,"isDefault":true,"displayLabel":"US Edition","locale":"US","image":{"src":"https:\/\/vanilla.futurecdn.net\/pcgamer\/media\/shared\/img\/flags\/nosize\/US.svg","alt":"flag of US","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false,"removeNativeWidthRestriction":false,"dataBordeauxImageCheckAttr":false,"noCredit":false},"homepage":"https:\/\/www.pcgamer.com\/"},{"name":"Canada","link":"https:\/\/www.pcgamer.com\/","aliasOf":"US","visitingFrom":"Canada","editionName":"Canadian","global":false,"hideFlag":false,"isDefault":false,"displayLabel":"CA Edition","locale":"CA","image":{"src":"https:\/\/vanilla.futurecdn.net\/pcgamer\/media\/shared\/img\/flags\/nosize\/CA.svg","alt":"flag of Canada","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false,"removeNativeWidthRestriction":false,"dataBordeauxImageCheckAttr":false,"noCredit":false},"homepage":"https:\/\/www.pcgamer.com\/"},{"name":"Australia","link":"https:\/\/www.pcgamer.com\/au\/","aliasOf":"AU","visitingFrom":"Australia","editionName":"Australian","global":false,"hideFlag":false,"isDefault":false,"displayLabel":"AU Edition","locale":"AU","image":{"src":"https:\/\/vanilla.futurecdn.net\/pcgamer\/media\/shared\/img\/flags\/nosize\/AU.svg","alt":"flag of Australia","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false,"removeNativeWidthRestriction":false,"dataBordeauxImageCheckAttr":false,"noCredit":false},"homepage":"https:\/\/www.pcgamer.com\/au\/"}]}]};

                var triggerHydrate = function() {
                    window.sliceComponents.localeSelector.hydrate(data, componentContainer);
                }

                var triggerScriptLoadThenHydrate = function() {
                    if (window.sliceComponents.localeSelector === undefined) {
                        var script = document.createElement('script');
                        script.src = 'https://slice.vanilla.futurecdn.net/12-7-7/js/localeSelector.js';
                        script.async = true;
                        script.id = 'vanilla-slice-localeSelector-component-script';

                        script.onload = () => {
                            window.sliceComponents.localeSelector = localeSelector;
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
                    console.log('Could not lazy load slice JS for localeSelector')
                }
            }
        }).catch(err => console.log('Hydration Script has failed for localeSelector Slice', err));
    }).catch(err => console.log('Externals script failed to load', err));