AdsServicePosition["RR-MULTI_ATF"] = {
                        alias:  '93484750',
                        sizes: "RR"
                    };
                    AdsClientPosition["RR-MULTI_ATF"] = {
                        
                        safeFrame:{
                           features: {
                              expandPush: {
                                enabled: true
                              },
                              resize: {
                                enabled: true
                              }
                           }
                        },
                        targetElement: 'RR-MULTI_ATF' 
                        ,rotation: { enabled: true }
                    };
                    JacCallbacks["RR-MULTI_ATF"] = {
        "600": function() {
            let parentContainer = document.getElementById("RR-MULTI_ATF");
            let firstCard = parentContainer.parentElement.nextElementSibling;
            firstCard.setAttribute('style', 'display: none;');
        },
        "1050": function() {
            let parentContainer = document.getElementById("RR-MULTI_ATF");
            let firstCard = parentContainer.parentElement.nextElementSibling;
            let secondCard = firstCard.nextElementSibling;
            firstCard.setAttribute('style', 'display: none;');
            secondCard.setAttribute('style', 'display: none;');
        }
    };