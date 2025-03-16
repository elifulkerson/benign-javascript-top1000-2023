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
var PREBID_TIMEOUT=2000;
var FAILSAFE_TIMEOUT=3000;
var adUnits=[ {
    code:"div-gpt-ad-head-banner",
    ortb2Imp: {
        ext: {
            gpid: "1000008-NWLWyObWvy",
        data: {
                pbadslot: "1000008-NWLWyObWvy"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [[970, 90], [970, 250], [728, 90] ],
        }
        ,
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_970x90_Prebid@970x90"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_970x250_Prebid@970x250"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[970, 90]
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000008-NWLWyObWvy"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[970, 250]
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder:"triplelift",
        params: {
            inventoryCode: "kg_grid_dekstop_970x250"
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 434066,
        zoneId: 2484252
        }
    }
    ,
    {
        bidder:"smartadserver",
        params: {
            networkId: "3727", siteId:"363584", pageId:"1293733", formatId:"96602", domain:"https://prg8.smartadserver.com"
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "gumgum", params: { zone: "jhydyfd4", slot: 986511 } },
    { bidder: "gumgum", params: { zone: "jhydyfd4", slot: 986512 } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-gpt-ad-giant",
    ortb2Imp: {
        ext: {
            gpid: "1000008-NHOvoGJWmj",
        data: {
                pbadslot: "1000008-NHOvoGJWmj"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [300, 600]
        }
    }
    ,
    bids:[ {
        bidder:"triplelift",
        params: {
            inventoryCode: "kg_grid_article_dekstop_rhs"
        }
    }
    ,
        {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_300x600_Prebid_1@300x600"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9QmzOp"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[300, 600]
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000008-NHOvoGJWmj"
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 434066,
        zoneId: 2484254
        }
    }
    ,
        {
        bidder:"smartadserver",
        params: {
            networkId: "3727", siteId:"363584", pageId:"1293733", formatId:"93799", domain:"https://prg8.smartadserver.com"
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "gumgum", params: { zone: "jhydyfd5", slot: 986513 } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-gpt-ad-MR3",
    ortb2Imp: {
        ext: {
            gpid: "1000008-NHOvoGJWmj",
        data: {
                pbadslot: "1000008-NHOvoGJWmj"
            }
        }
    },
    mediaTypes: {
        video: {
            context: "outstream", playerSize:[300, 250]
        }
    }
    ,
    bids:[ 
    {
    bidder:"ix",
    params: {
    siteId: 729196,
    size:[300, 250],
    video: {
        api: [2],
        protocols : [2,3,5,6],
        minduration: 5,
        maxduration: 30,
        mimes: [
        'video/mp4',
        'application/javascript'
        ],
        placement: 4

        }
            }
            },
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 434066,
        zoneId: 2484256
        }
    },
    ],
}

,
    {
    code:"div-gpt-ad-MR3",
    ortb2Imp: {
        ext: {
            gpid: "1000008-QirJyqLx8n",
        data: {
                pbadslot: "1000008-QirJyqLx8n"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [300, 250]
        }
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_300x250_Prebid_1@300x250"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9Qm9Op"
        }
    }
    ,
        {
        bidder:"innity",
        params: {
            pub: 394, zone:69191
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000008-QirJyqLx8n"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[300, 250]
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder:"triplelift",
        params: {
            inventoryCode: "kg_grid_article_desktop_mid"
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 434066,
        zoneId: 2484256
        }
    }
    ,
        {
        bidder:"smartadserver",
        params: {
            networkId: "3727", siteId:"363584", pageId:"1293733", formatId:"93800", domain:"https://prg8.smartadserver.com"
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "gumgum", params: { zone: "jhydyfd6", slot: 986514 } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-gpt-ad-bottom-frame",
    ortb2Imp: {
        ext: {
            gpid: "1000008-ZBJAJBlyov",
        data: {
                pbadslot: "1000008-ZBJAJBlyov"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [[468, 60], [1100, 50], ],
        }
        ,
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_468x60_Prebid@468x60"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[468, 60]
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000008-ZBJAJBlyov"
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 478070,
        zoneId: 2838694
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[1100, 50]
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "gumgum", params: { zone: "jhydyfd9", slot: 986517 } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-Inside-MediumRectangle",
    ortb2Imp: {
        ext: {
            gpid: "1000008-8Gx0uGNfI9",
        data: {
                pbadslot: "1000008-8Gx0uGNfI9"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [[300, 250], [300, 100], ],
        }
        ,
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9Qm9Op"
        }
    }
    ,
        {
        bidder:"triplelift",
        params: {
            inventoryCode: "kg_grid_article_desktop_mid"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_300x250_Prebid_2@300x250"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[300, 250]
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165929, pageId:151690
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000008-8Gx0uGNfI9"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[300, 100]
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 478046,
        zoneId: 2838664
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "gumgum", params: { zone: "jhydyfd10", slot: 986518 } },
    { bidder: "gumgum", params: { zone: "jhydyfd10", slot: 986519 } },
    { bidder: "pxyz", params: { placementId: 19039991 } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-gpt-ad-below-comment",
    ortb2Imp: {
        ext: {
            gpid: "1000216-aVeoMXNNJJ",
        data: {
                pbadslot: "1000216-aVeoMXNNJJ"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [300, 250]
        }
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9Qm9Op"
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000216-aVeoMXNNJJ"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[300, 250]
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
     { bidder: "gumgum", params: { zone: "jhydyfd11", slot: 986520 } },
     { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-gpt-ad-below-photo",
    ortb2Imp: {
        ext: {
            gpid: "1000008-MYNA0jwN7q",
        data: {
                pbadslot: "1000008-MYNA0jwN7q"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [[728, 90], [468, 60], ],
        }
        ,
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9QHFOp"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_728x90_Prebid@728x90"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[728, 90]
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[468, 60]
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000008-MYNA0jwN7q"
        }
    }
    ,
        {
        bidder:"innity",
        params: {
            pub: 394, zone:93830
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder:"triplelift",
        params: {
            inventoryCode: "kg_grid_desktop_StandardDisplay"
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 434066,
        zoneId: 2484260
        }
    }
    ,
        {
        bidder:"smartadserver",
        params: {
            networkId: "3727", siteId:"363584", pageId:"1293733", formatId:"96685", domain:"https://prg8.smartadserver.com"
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "gumgum", params: { zone: "jhydyfd7", slot: 986515 } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-gpt-ad-skin-left",
    ortb2Imp: {
        ext: {
            gpid: "1000216-jBak2JQALF",
        data: {
                pbadslot: "1000216-jBak2JQALF"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [[100, 550], [120, 600], [100, 650], ],
        }
        ,
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_120x600_Prebid_2@120x600"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9oWzOp"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[100, 550]
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[120, 600]
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[100, 650]
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 478074,
        zoneId: 2838700
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000216-jBak2JQALF"
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-gpt-ad-skin-right",
    ortb2Imp: {
        ext: {
            gpid: "1000216-m7CLREQurl",
        data: {
                pbadslot: "1000216-m7CLREQurl"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [[100, 550], [120, 600], [100, 650], ],
        }
        ,
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_120x600_Prebid_3@120x600"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9oWzOp"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[100, 550]
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[120, 600]
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[100, 650]
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 478076,
        zoneId: 2838702
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000216-m7CLREQurl"
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
    {
    code:"div-gpt-ad-skyscrapper",
    ortb2Imp: {
        ext: {
            gpid: "1000008-MU7BJU1JwB",
        data: {
                pbadslot: "1000008-MU7BJU1JwB"
            }
        }
    },
    mediaTypes: {
        banner: {
            sizes: [[160, 600], [120, 600], ],
        }
        ,
    }
    ,
    bids:[ {
        bidder:"criteo",
        params: {
            networkId: 4168
        }
    }
    ,
        {
        bidder:"criteorn",
        params: {
            networkId: "4363"
        }
    }
    ,
        {
        bidder:"openx",
        params: {
            unit: "540800968", delDomain:"kompascybermedia-d.openx.net"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_160x600_Prebid@160x600"
        }
    }
    ,
        {
        bidder:"pubmatic",
        params: {
            publisherId: "156479", adSlot:"Grid_Desktop_120x600_Prebid_1@120x600"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9oW9Op"
        }
    }
    ,
        {
        bidder:"appier",
        params: {
            hzid: "Wt9oWzOp"
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[120, 600]
        }
    }
    ,
        {
        bidder:"jixie",
        params: {
            unit: "1000008-MU7BJU1JwB"
        }
    }
    ,
        {
        bidder:"teads",
        params: {
            placementId: 165926, pageId:151687
        }
    }
    ,
        {
        bidder:"ix",
        params: {
            siteId: "450353", size:[120, 600]
        }
    }
    ,
        {
        bidder:"triplelift",
        params: {
            inventoryCode: "kg_grid_desktop_StandardDisplay"
        }
    }
    ,
        {
        bidder: "rubicon",
        params: {
        accountId: 11834,
        siteId: 434066,
        zoneId: 2484262
        }
    }
    ,
        {
        bidder:"smartadserver",
        params: {
            networkId: "3727", siteId:"363584", pageId:"1293733", formatId:"96680", domain:"https://prg8.smartadserver.com"
        }
    }
    ,
    { bidder: "rtbhouse", params: { region: 'prebid-asia', publisherId: '0mFVRF3PIcI4RN9I4mxm' } },
    { bidder: "gumgum", params: { zone: "jhydyfd8", slot: 986516 } },
    { bidder: "yandex", params:{ pageId: 2392255, impId: 1, cur: "USD" }},
    ],
}

,
];
var pbjs=pbjs|| {}

;
pbjs.que=pbjs.que||[];