// Load ToolSet hardcoded instead of from file
        /**
         * ToolSet (Investing Lib for DFP)
         */
        (()=>{
            let lcl = console.log,
                defineSlot = ({ defineSlot, sizes, adSlotDivID, middleDefinition, collapseDiv }, slotHolder) => {
                    if (!slotHolder.slots) {
                        slotHolder.slots = {};
                    }
                    if (collapseDiv && slot) {
                        slot.setCollapseEmptyDiv(...collapseDiv);
                    }
                    if (middleDefinition && slot) {
                        slot.defineSizeMapping(middleDefinition.reduce((acc, item) => acc.addSize(...item), window.googletag.sizeMapping()).build());
                    }
                                            if(!window.headerBidding) {
                            slot.setTargeting('refresh_counter', '0');
                        }
                                        slotHolder.slots[defineSlot] = slot;

                    window.googletag.pubads().addEventListener('slotRenderEnded',
                        function(event) {
                            var element = document.getElementById(event.slot.getSlotElementId());
                            element.style.backgroundColor = null;
                        });
                },
                displaySlot = (containerId) => {
                    window.dfpSlots = window.dfpSlots || [];
                    window.dfpSlotFlag = window.dfpSlotFlag || [];
                    if(typeof window.dfpFlag !== 'undefined') {
                        window.googletag.cmd.push(() => window.googletag.display(containerId))
                    }
                    else {
                        window.dfpSlotFlag[containerId] = setInterval(() => {
                            if( typeof window.dfpFlag !== 'undefined') {
                                window.googletag.cmd.push(() => window.googletag.display(containerId))
                                clearInterval(window.dfpSlotFlag[containerId]);
                            }
                        }, 50);
                    }
                };


            window._ = {
                ADVERTISEMENT_HEIGHT: 25,
                MIN_AD_HEIGHT_CLOSE_BUTTON: 200,
                each: (obj, iterator) => {
                    if (typeof(obj) === 'object') {
                        for (let key in obj) {
                            iterator(obj[key], key);
                        }
                    } else {
                        obj.forEach(iterator);
                    }
                },
                setTargeting: (key, value) => {
                    window.googletag.pubads().setTargeting(key, value);
                },
                defineSlotPB: (settings) => defineSlot(settings, window.pbjs), // Both of these methods must be called
                defineSlot: (settings) => defineSlot(settings, window.googletag), // when globals are already available
                displaySlot,
                manageAd: (event) => {
                    if(_.isShowAdvertisementPrefix(event)){
                        _.showAdvertisementPrefix(event);
                    }
                    _.resizeContainer(event);
                    if(_.isShowCloseButton(event)){
                        _.showCloseElement(event);
                    }
                    if(event.slot.getSlotElementId() === 'div-gpt-ad-000000001-0' && !event.isEmpty){
                        document.querySelector(".js-sticky-footer-close").classList.remove("displayNoneImp");
                    }
                    //TODO: we need to find a better solution (use adunits.phpparent attrs) for sepcific ads
                    if (event.slot.getSlotElementId() === "div-gpt-ad-1541684394813-0") {
                        let buySellDiv = document.querySelector('.overViewBox .buySellDiv');
                        let hasVideoEl = document.querySelector('.overViewBox .has-video');
                        if (event.isEmpty) {
                            if(buySellDiv) {
                                buySellDiv.classList.add("displayNone");
                            }
                            if(hasVideoEl) {
                                hasVideoEl.classList.add('no-ad-loaded');
                            }
                        } else {
                            if(buySellDiv) {
                                buySellDiv.classList.remove('displayNone');
                            }
                            if(hasVideoEl) {
                                hasVideoEl.classList.remove('no-ad-loaded');
                            }
                        }
                    }
                    //remove adFree sales popup if no DFP content
                    if(event.slot.getSlotElementId() === 'dfpWrapper' && event.isEmpty){
                        document.querySelector('#adFreeSalePopup').remove();
                    }
                },
                showCloseElement: (event) => {
                    document.getElementById(event.slot.getSlotElementId()).nextElementSibling.classList.remove('opacityNone');
                },
                showAdvertisementPrefix: (event) => {
                    let dfpElement 			 = document.getElementById(event.slot.getSlotElementId());
                    let advertisementDiv = _.createAdvertisementPrefix(dfpElement.getAttribute('advertisementText'));
                    dfpElement.prepend(advertisementDiv);
                },
                createAdvertisementPrefix: (text) => {
                    let advertisementDiv     		= document.createElement('div');
                    let advertisementText 			= document.createElement('span');
                    advertisementDiv.className 		= "advertisement-header";
                    advertisementText.className 	= "text";
                    advertisementText.textContent 	= text;
                    advertisementDiv.append(advertisementText);
                    return advertisementDiv;
                },
                resizeContainer: (event) => {
                    if(event.isEmpty) {
                        return;
                    }
                    let el = document.getElementById(event.slot.getSlotElementId());
                    console.log('full event');
                    console.log(JSON.stringify(event));
					if(event.slot.getSlotElementId().includes("Billboard_Default")) {
						return;
					}
                    if(!event.isEmpty && parseInt(el.getAttribute('resize'))){
                        let advertisementHeight = 0;
                        if (_.isShowAdvertisementPrefix(event)) {
                            el.querySelector('.advertisement-header').style.width = event.size[0];
                            advertisementHeight = _.ADVERTISEMENT_HEIGHT;
                        }

                        // Sometimes, prebid send us size of [1,1] for the billboard, so we get the height of the banner manually from the div generated from the child (google div).
                        let billboardPrebidException = (event.slot.getSlotElementId().includes("Billboard_Default") && event.size[1] === 1 && el.childNodes[3].clientHeight > 1);
                        if(billboardPrebidException && el.style.height === "276px") { // if we got the bug but, we have the big base size, we stay like this.
                            console.log('bug of prebid is suppose to happen NOW')
                            return;
                        }
                        let newHeight = (billboardPrebidException) ? el.childNodes[3].clientHeight : event.size[1];
                        console.log('NEW HEIGHT');
                        console.log(event.size[1] === 1 && billboardPrebidException);
                        console.log('new size: '+ newHeight);
                        el.style.height = newHeight + advertisementHeight + 1 + 'px';
                        if (hasSomeParentTheClass(el, 'wideTopBanner')) {
                            let parents = document.querySelectorAll('.midHeader .wideTopBanner');
                            let parents_array = [...parents]; // convert to array
                            parents_array.forEach(div => {div.style.height = 'auto';});
                        }
                    }
                },
                isFu: obj => typeof(obj) === 'function',
                attachEvents: () => {
                    window.googletag.pubads().addEventListener('slotRenderEnded', (event) => {_.manageAd(event)});
                    let el = document.querySelector('.dfpCloseBtn');
                    if(el !== null) {
                        el.addEventListener('click', (event) => {
                            $(event.target).parent().hide();
                        });
                    }

                    let stickyEl = document.querySelector('.js-sticky-footer-close');
                    if(stickyEl !== null) {
                        stickyEl.addEventListener('click', (event) => {document.getElementById('sticky_footer').remove();});
                    }
                },
                isShowCloseButton: event => {

                    return !event.isEmpty && parseInt(document.getElementById(event.slot.getSlotElementId()).getAttribute('closeButton')) &&
                        event.size != null && event.size.length > 1 && event.size[1] >= _.MIN_AD_HEIGHT_CLOSE_BUTTON;
                },
                isShowAdvertisementPrefix: event => {

                    let advertisementText = document.getElementById(event.slot.getSlotElementId()).getAttribute('advertisementText');
                    return !event.isEmpty && (typeof advertisementText !== typeof undefined && advertisementText);
                },
            }

            window.getCookie = function (cname) {
                var name = cname + "=";
                var ca=document.cookie.split(";");
                for (var i=0; i<ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1);
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            }
            window.hasSomeParentTheClass = function (element, classname) {
                if (element.className.split(' ').indexOf(classname)>=0) return true;
                return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
            }
        })();