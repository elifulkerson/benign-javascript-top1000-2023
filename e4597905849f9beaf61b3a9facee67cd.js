var googletag=googletag|| {}

;
googletag.cmd=googletag.cmd||[];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad()
}

);
pbjs.que.push(function() {
    pbjs.aliasBidder("criteo", "criteorn");
   pbjs.setConfig({ 
        enableSendAllBids: !0, 
        priceGranularity: "high", 
        userSync: { userIds: [{ name: "uid2" }, { name: "unifiedId", value: { tdid: uuid__ } }]},
        jixie: { onTimeoutUrl: "https://hbtra.jixie.io/sync/hb?" },
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
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids( {
        bidsBackHandler: sendAdserverRequest, timeout:PREBID_TIMEOUT
    }
    )
}

);
function sendAdserverRequest() {
    if(pbjs.adserverRequestSent)return;
    pbjs.adserverRequestSent= !0;
    googletag.cmd.push(function() {
        pbjs.que.push(function() {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh()
        }
        )
    }
    )
}

setTimeout(function() {
    sendAdserverRequest()
}

, FAILSAFE_TIMEOUT);