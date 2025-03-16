!function (a9, a, p, s, t, A, g) { if (a[a9]) return; function q(c, r) { a[a9]._Q.push([c, r]) } a[a9] = { init: function () { q("i", arguments) }, fetchBids: function () { q("f", arguments) }, setDisplayBids: function () { }, targetingKeys: function () { return [] }, _Q: [] }; A = p.createElement(s); A.async = !0; A.src = t; g = p.getElementsByTagName(s)[0]; g.parentNode.insertBefore(A, g) }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");


        apstag.init({
            pubID: '5d5467fe-bc8c-4335-993a-e0314547592e', //enter your pub ID here as shown above, it must within quotes
            adServer: 'googletag'
        });

        // APS request
        apstag.fetchBids({
                slots: [{
                    slotID: 'adslot728x90ATF',
                    slotName: '/1068322/NDTV_Homepage_728x90_ATF',
                    sizes: [[728, 90], [970, 90]],
                },

                {
                    slotID: 'adslot300x250ATF',
                    slotName: '1068322/NDTV_Homepage_300x250_ATF',
                    sizes: [300, 250],
                },

                {
                    slotID: 'adslot728x90BTF',
                    slotName: '/1068322/NDTV_News_Homepage_728x90_BTF',
                    sizes: [[728, 90], [970, 90], [970, 250]],
                },

                {
                    slotID: 'adslot300x250BTF',
                    slotName: '/1068322/NDTV_News_Homepage_300x250_BTF',
                    sizes: [300, 250],
                }],



            timeout: 1000 // Make Sure this timeout is less than or equal to OpenWrap TimeOut
        }, function (bids) {
            googletag.cmd.push(function () {
                apstag.setDisplayBids();
                PWT.a9_BidsReceived = true;
                initAdserver(false);
            });
        });