function getCookieUid(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);} if(c.indexOf(name)==0){return c.substring(name.length,c.length);}} return"";}
    var uuid__=getCookieUid("_jxtdid");
window.getUid2AdvertisingToken = async () => {
    var id;
    if (typeof window.jxGetUid2 == 'function') {
        id = await window.jxGetUid2();
    } else {
        id = getCookieUid('__uid2_advertising_token', null);
    }
    return id;
}
    var PREBID_TIMEOUT = 2000;
    var FAILSAFE_TIMEOUT = 3000;
    var HB_TIMEOUT = 2000;
    var adUnits = [
            {
                code: "div-gpt-ad-head-banner",
                ortb2Imp: {
                ext: {
                gpid: "1000048-V9NKpy1WvH",
                data: {
                pbadslot: "1000048-V9NKpy1WvH"
                        }
                    }
                },
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 90],
                            [970, 250],
                        ],
                    },
                },
                bids: [
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_970x90_1@970x90" } },
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_970x250_1@970x250" } },
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_728x90_1@728x90" } },
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "openx", params: { unit: "540800965", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "appier", params: { hzid: "Wt9imzOp" } },
                    { bidder: "ix", params: { siteId: "450354", size: [970, 250] } },
                    { bidder: "ix", params: { siteId: "450354", size: [970, 90] } },
                    { bidder: "r2b2", params: { d: "bolasport.com", g: "hb", p: "970x250", m: 0 } },
                    { bidder:"triplelift", params: { inventoryCode: "kg_bolasport_desktop_970x250" } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 434078, zoneId: 2484300 } },
                    { bidder: "smartadserver", params: { networkId: "3727", siteId: "363588", pageId: "1293737", formatId: "96602", domain: "https://prg8.smartadserver.com" } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000048-V9NKpy1WvH" } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986601 } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986602 } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986603 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                ],
            },
            {
                code: "div-gpt-ad-MR3",
                ortb2Imp: {
                ext: {
                gpid: "1000048-UBLJI1wkIv",
                data: {
                pbadslot: "1000048-UBLJI1wkIv"
                        }
                    }
                },
                mediaTypes: { video: { context: "outstream", playerSize: [300, 250] } },
                bids: [
                    
                { bidder: "rubicon", params: { accountId: 11834, siteId: 434078, zoneId: 2484302 } },
                    ],
            },
            {
                code: "div-gpt-ad-MR3",
                ortb2Imp: {
                ext: {
                gpid: "1000048-UBLJI1wkIv",
                data: {
                pbadslot: "1000048-UBLJI1wkIv"
                        }
                    }
                },
                mediaTypes: { banner: { sizes: [[300, 250]] } },
                bids: [
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_300x250_2@300x250" } },
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "openx", params: { unit: "540800965", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "appier", params: { hzid: "Wt9iHIOp" } },
                    { bidder: "ix", params: { siteId: "450354", size: [300, 250] } },
                    { bidder: "innity", params: { pub: 394, zone: 95362 } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 434078, zoneId: 2484302 } },
                    { bidder:"triplelift", params: { inventoryCode: "kg_bolasport_desktop_300x250" } },
                    { bidder: "smartadserver", params: { networkId: "3727", siteId: "363588", pageId: "1293737", formatId: "93800", domain: "https://prg8.smartadserver.com" } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000048-UBLJI1wkIv" } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986604 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                ],
            },
            {
                code: "div-gpt-ad-giant",
                ortb2Imp: {
                ext: {
                gpid: "1000048-BRMxW5vrdp",
                data: {
                pbadslot: "1000048-BRMxW5vrdp"
                        }
                    }
                },
                mediaTypes: { banner: { sizes: [[300, 600]] } },
                bids: [
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_300x600_1@300x600" } },
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "openx", params: { unit: "540800965", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "appier", params: { hzid: "Wt9iHFOp" } },
                    { bidder: "ix", params: { siteId: "450354", size: [300, 600] } },
                    { bidder: "r2b2", params: { d: "bolasport.com", g: "hb", p: "300x600_1", m: 0 } },
                    { bidder:"triplelift", params: { inventoryCode: "kg_bolasport_desktop_300x600" } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 434078, zoneId: 2484304 } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder: "smartadserver", params: { networkId: "3727", siteId: "363588", pageId: "1293737", formatId: "93799", domain: "https://prg8.smartadserver.com" } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000048-BRMxW5vrdp" } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986605 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                ],
            },
            {
                code: "div-gpt-ad-giant2",
                ortb2Imp: {
                ext: {
                gpid: "1000216-va6JNLfw0U",
                data: {
                pbadslot: "1000216-va6JNLfw0U"
                        }
                    }
                },
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [300, 600],
                        ],
                    },
                },
                bids: [
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "openx", params: { unit: "540800965", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "ix", params: { siteId: "450354", size: [300, 250] } },
                    { bidder: "innity", params: { pub: 394, zone: 95362 } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder:"triplelift", params: { inventoryCode: "kg_bolasport_desktop_300x600_2" } },
                    { bidder: "r2b2", params: { d: "bolasport.com", g: "hb", p: "300x600_2", m: 0 } },
                    { bidder: "ix", params: { siteId: "450354", size: [300, 600] } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 434078, zoneId: 2484306 } },
                    { bidder: "smartadserver", params: { networkId: "3727", siteId: "363588", pageId: "1293737", formatId: "96604", domain: "https://prg8.smartadserver.com" } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000216-va6JNLfw0U" } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986606 } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986607 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                ],
            },
            {
                code: "div-gpt-ad-skin-left",
                ortb2Imp: {
                ext: {
                gpid: "1000216-2yFIBzUabR",
                data: {
                pbadslot: "1000216-2yFIBzUabR"
                        }
                    }
                },
                mediaTypes: {
                    banner: {
                        sizes: [
                            [100, 550],
                            [100, 650],
                            [120, 600],
                        ],
                    },
                },
                bids: [
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "openx", params: { unit: "540800965", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "ix", params: { siteId: "450354", size: [100, 550] } },
                    { bidder: "ix", params: { siteId: "980367", size: [100, 650] } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder: "ix", params: { siteId: "980367", size: [120, 600] } },
                    { bidder: "smartadserver", params: { networkId: "3727", siteId: "363588", pageId: "1293737", formatId: "96680", domain: "https://prg8.smartadserver.com" } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000216-2yFIBzUabR" } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 478040, zoneId: 2838658 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_Desktop_div-gpt-ad-skin-left" } },
                ],
            },
            {
                code: "div-gpt-ad-skin-right",
                ortb2Imp: {
                ext: {
                gpid: "1000216-FpPifNUy6u",
                data: {
                pbadslot: "1000216-FpPifNUy6u"
                        }
                    }
                },
                mediaTypes: {
                    banner: {
                        sizes: [
                            [100, 550],
                            [100, 650],
                            [120, 600],
                        ],
                    },
                },
                bids: [
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "openx", params: { unit: "540800965", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "ix", params: { siteId: "450354", size: [100, 550] } },
                    { bidder: "ix", params: { siteId: "980367", size: [100, 650] } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder: "ix", params: { siteId: "980367", size: [120, 600] } },
                    { bidder: "smartadserver", params: { networkId: "3727", siteId: "363588", pageId: "1293737", formatId: "96680", domain: "https://prg8.smartadserver.com" } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000216-FpPifNUy6u" } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 478042, zoneId: 2838660 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_Desktop_div-gpt-ad-skin-right" } },
                ],
            },
            {
                code: "div-gpt-ad-bottom-frame",
                ortb2Imp: {
                ext: {
                gpid: "1000048-LXxvBVEY9f",
                data: {
                pbadslot: "1000048-LXxvBVEY9f"
                        }
                    }
                },
                mediaTypes: {
                    banner: {
                        sizes: [
                            [468, 60],
                            [1100, 50],
                        ],
                    },
                },
                bids: [
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "openx", params: { unit: "540800965", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "ix", params: { siteId: "450354", size: [468, 60] } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder: "ix", params: { siteId: "450354", size: [1100, 50] } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000048-LXxvBVEY9f" } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 478038, zoneId: 2838656 } },
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_Desktop_div-gpt-ad-bottom-frame" } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986609 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                ],
            },
            {
                code: "div-gpt-ad-below-photo",
                ortb2Imp: {
                ext: {
                gpid: "1000048-YvBvUdynFT",
                data: {
                pbadslot: "1000048-YvBvUdynFT"
                        }
                    }
                },
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [468, 60],
                        ],
                    },
                },
                bids: [
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "ix", params: { siteId: "450354", size: [728, 90] } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder: "innity", params: { pub: 394, zone: 95361 } },
                    { bidder:"triplelift", params: { inventoryCode: "kg_bolasport_desktop_StandardDisplay" } },
                    { bidder: "ix", params: { siteId: "450354", size: [468, 60] } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000048-YvBvUdynFT" } },
                    { bidder: "openx", params: { unit: "559086500", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 478026, zoneId: 2838642 } },
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_Desktop_div-gpt-ad-below-photo" } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986610 } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986611 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                ],
            },
            {
                code: "div-gpt-ad-skyscrapper",
                ortb2Imp: {
                ext: {
                gpid: "1000048-QBzmwjIyKo",
                data: {
                pbadslot: "1000048-QBzmwjIyKo"
                        }
                    }
                },
                mediaTypes: {
                    banner: {
                        sizes: [
                            [160, 600],
                            [120, 600],
                        ],
                    },
                },
                bids: [
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_120x600_1@120x600" } },
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_160x600_1@160x600" } },
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "r2b2", params: { d: "bolasport.com", g: "hb", p: "160x600", m: 0 } },
                    { bidder: "appier", params: { hzid: "Wt9im9Op" } },
                    { bidder: "teads", params: { placementId: 165911, pageId: 151672 } },
                    { bidder: "ix", params: { siteId: "450354", size: [160, 600] } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 434078, zoneId: 2484308 } },
                    { bidder:"triplelift", params: { inventoryCode: "kg_bolasport_desktop_StandardDisplay" } },
                    { bidder: "ix", params: { siteId: "450354", size: [120, 600] } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000048-QBzmwjIyKo" } },
                    { bidder: "openx", params: { unit: "559086505", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986608 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                ],
            },
            {
                code: "div-Inside-MediumRectangle",
                ortb2Imp: {
                ext: {
                gpid: "1000048-xpuhAlOrM6",
                data: {
                pbadslot: "1000048-xpuhAlOrM6"
                        }
                    }
                },
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [300, 100],
                            [1, 1],
                            [360, 180],
                        ],
                    },
                },
                bids: [
                    { bidder: "pubmatic", params: { publisherId: "156479", adSlot: "Bolasport_300x250_1@300x250" } },
                    { bidder: "criteo", params: { networkId: 4168 } },
                    { bidder: "criteorn", params: { networkId: "4363" } },
                    { bidder: "appier", params: { hzid: "Wt9iHIOp" } },
                    { bidder: "ix", params: { siteId: "450354", size: [300, 250] } },
                    { bidder: "ix", params: { siteId: "450354", size: [300, 100] } },
                    { bidder: "ix", params: { siteId: "450354", size: [1, 1] } },
                    { bidder: "teads", params: { placementId: 165914, pageId: 151675 } },
                    { bidder: "r2b2", params: { d: "bolasport.com", g: "hb", p: "300x250", m: 0 } },
                    { bidder:"triplelift", params: { inventoryCode: "kg_bolasport_desktop_300x250" } },
                    { bidder: "innity", params: { pub: 394, zone: 95362 } },
                    { bidder: "ix", params: { siteId: "450354", size: [360, 180] } },
                    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
                    { bidder: "jixie", params: { unit: "1000048-xpuhAlOrM6" } },
                    { bidder: "rubicon", params: { accountId: 11834, siteId: 478036, zoneId: 2838654 } },
                    { bidder: "openx", params: { unit: "559086501", delDomain: "kompascybermedia-d.openx.net" } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986612 } },
                    { bidder: "gumgum", params: { zone: "bgilerhq", slot: 986613 } },
                    { bidder: "pxyz", params: { placementId: 19040026 } },
                    { bidder: "yandex", params:{ pageId: 2392258, impId: 1, cur: "USD" }},
                ],
            },
        ],
        gptadslots = [],
        googletag = googletag || {};
    (googletag.cmd = googletag.cmd || []),
        googletag.cmd.push(function () {
            googletag.pubads().disableInitialLoad();
        });
    var pbjs = pbjs || {};
    function initAdserver() {
        pbjs.initAdserverSet ||
            ((pbjs.initAdserverSet = !0),
            googletag.cmd.push(function () {
                pbjs.que.push(function () {
                    pbjs.setTargetingForGPTAsync(), googletag.pubads().refresh();
                });
            }));
    }
    (pbjs.que = pbjs.que || []),
        pbjs.que.push(function () {
            
                pbjs.aliasBidder("criteo", "criteorn");
        pbjs.setConfig({enableSendAllBids:true,priceGranularity: "high", userSync:{userIds:[{name:"uid2"},{name:"unifiedId",value:{tdid:uuid__}}]},
        floors: {
            enforcement: {
                enforceJS: true,
                enforcePBS: true,
                floorDeals: true
            },
            floorMin: 0.17,
        data: {
            currency: "USD",
            modelVersion: "v1.1",
            schema: { fields: ["adUnitCode", "mediaType", "size"] },
            values: {
            "*|*|*": 0.17
            },
        },
    },
    currency: {
    "adServerCurrency": "USD"
    }
        });
        pbjs.bidderSettings = {standard: {storageAllowed: true}};
        pbjs.addAdUnits(adUnits), pbjs.requestBids({ bidsBackHandler: initAdserver, timeout: PREBID_TIMEOUT });
        }),
        setTimeout(function () {
            initAdserver();
        }, FAILSAFE_TIMEOUT);