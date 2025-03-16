window.sliceComponents = window.sliceComponents || {};

    externalsScriptLoaded.then(() => {
        window.reliableDOMContentLoaded.then(() => {
            var componentContainer = document.querySelector("#slice-container-popularBoxSecondary");

            if (componentContainer) {
                var data = {"tabs":[{"tabName":"Most Read","articles":[{"href":"\/team-fortress-2-community-loses-it-decides-to-meme-a-character-into-existence-through-the-power-of-mass-gaslighting-while-valve-focuses-on-counter-strike\/","heading":"Team Fortress 2 community loses it, decides to 'meme a character into existence through the power of mass gaslighting' while Valve focuses on Counter-Strike","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/siR6oSPh2e5FTXSgdBBWQD.jpg","alt":"An ugly remodel of the Scout from TF2, resembling a biker.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/electronic-arts-celebrates-the-modern-warfare-3-beta-by-making-battlefield-2042-free-to-play-this-weekend\/","heading":"Electronic Arts celebrates the Modern Warfare 3 beta by making Battlefield 2042 free to play this weekend","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/kYr7rkPWw93nCqGem2vpse.jpg","alt":"And don't forget: Battlefield 2042 is really good now.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/dead-island-2-trades-zombie-fiction-for-the-everyday-reality-of-silicon-valley-by-adding-a-billionaires-secret-techno-death-cult-in-its-first-expansion\/","heading":"Dead Island 2 trades zombie fiction for the everyday reality of Silicon Valley by adding a 'billionaire's secret techno-death cult' in its first expansion","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/MDLRzi3gUi3k3MdYZd3xZT.jpg","alt":"Dead Island 2: Haus concept art","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/wow-classic-hardcore-squad-clutches-a-world-first-clear-of-naxxramasafter-the-heroic-sacrifice-of-their-guild-leader\/","heading":"WoW Classic Hardcore squad clutches a world-first clear of Naxxramas\u2014after the heroic sacrifice of their guild leader","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/82QmiYRuttvm6H5YsMrAs3.png","alt":"A heroic raid leader, slain in a World of Wacraft Classic raid, lies dead in the centre of the arena while their guildmates pay tribute on the throne of Kel'thuzad.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/no-amount-of-gpu-refreshes-are-going-to-fix-my-disappointment-in-the-current-generation-and-i-say-that-as-someone-who-actually-bought-an-rtx-4070-ti\/","heading":"No amount of GPU refreshes are going to fix my disappointment in the current generation. And I say that as someone who actually bought an RTX 4070 Ti","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/JTZLoWEJDnxFUNZDZ4gbV4.jpg","alt":"Selection of graphics cards on a multicoloured background","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}}]},{"tabName":"Most Shared","articles":[{"href":"\/electronic-arts-celebrates-the-modern-warfare-3-beta-by-making-battlefield-2042-free-to-play-this-weekend\/","heading":"Electronic Arts celebrates the Modern Warfare 3 beta by making Battlefield 2042 free to play this weekend","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/kYr7rkPWw93nCqGem2vpse.jpg","alt":"And don't forget: Battlefield 2042 is really good now.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/dead-island-2-trades-zombie-fiction-for-the-everyday-reality-of-silicon-valley-by-adding-a-billionaires-secret-techno-death-cult-in-its-first-expansion\/","heading":"Dead Island 2 trades zombie fiction for the everyday reality of Silicon Valley by adding a 'billionaire's secret techno-death cult' in its first expansion","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/MDLRzi3gUi3k3MdYZd3xZT.jpg","alt":"Dead Island 2: Haus concept art","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/heroes-of-might-and-magic-3-is-having-a-crossover-with-world-of-warships-for-some-reason\/","heading":"Heroes of Might and Magic 3 is having a crossover with World of Warships for some reason","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/bJS7AmxaVfyDUprjiossTE.jpg","alt":"I'm just as confused as you.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/wow-classic-hardcore-squad-clutches-a-world-first-clear-of-naxxramasafter-the-heroic-sacrifice-of-their-guild-leader\/","heading":"WoW Classic Hardcore squad clutches a world-first clear of Naxxramas\u2014after the heroic sacrifice of their guild leader","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/82QmiYRuttvm6H5YsMrAs3.png","alt":"A heroic raid leader, slain in a World of Wacraft Classic raid, lies dead in the centre of the arena while their guildmates pay tribute on the throne of Kel'thuzad.","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}},{"href":"\/starfield-players-uncover-some-of-the-best-xp-farms-in-the-game-through-obliterating-cosmic-wildlife-even-in-a-video-game-this-feels-wrong\/","heading":"Starfield players uncover some of the best XP farms in the game through obliterating cosmic wildlife: 'even in a video game this feels wrong'","image":{"src":"https:\/\/cdn.mos.cms.futurecdn.net\/CEqarM6Q3aVXGxMDYG5JVe.jpg","alt":"Alien planet","fullscreen":false,"lazyLoading":true,"addSEOMetaData":false,"eager":false}}]}]};

                var triggerHydrate = function() {
                    window.sliceComponents.popularBox.hydrate(data, componentContainer);
                }

                var triggerScriptLoadThenHydrate = function() {
                    if (window.sliceComponents.popularBox === undefined) {
                        var script = document.createElement('script');
                        script.src = 'https://slice.vanilla.futurecdn.net/12-7-7/js/popularBox.js';
                        script.async = true;
                        script.id = 'vanilla-slice-popularBoxSecondary-component-script';

                        script.onload = () => {
                            window.sliceComponents.popularBox = popularBox;
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
                    console.log('Could not lazy load slice JS for popularBoxSecondary')
                }
            }
        }).catch(err => console.log('Hydration Script has failed for popularBoxSecondary Slice', err));
    }).catch(err => console.log('Externals script failed to load', err));