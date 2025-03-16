var dataLayer = {"visitor":{"ipAddress":"70.163.140.175","isMachineIp":false,"isForeignIp":false,"sectionLayout":"Frontpage_Redesign","pbSectionLayout":"Frontpage_Redesign","asEnabled":false,"confiant":1,"noads":0,"isRegistrationConversion":false,"registrationConversion":null,"immediateSource":"direct||","layout":"Redesign","uncookiedUser":true,"sessionCount":1,"classicExperienceSegment":null,"userId":0,"username":"Unregistered","isLoggedIn":"No","isStaff":"No","status":"Anonymous","verified":"No","daysRegistered":null,"joinDate":null,"timeSpent":null,"registrationActionSource":null,"emailHashes":null,"loyalty":"no","abTestInfo":[],"dealAlertConversion":false,"appReferrer":null},"reporting":{"clientID":"e39690746bde11eeb52af6836995d55b","sessionID":"e3968a5c6bde11eeb52af6836995d55b"},"traffic":{"trueReferrer":null,"subSection1":"P1","subSection2":null,"subSection3":null,"subSection4":null,"corporateDomain":"slickdeals.net","deviceSegment":"desktop","clientHeaders":[],"cookieDomain":".slickdeals.net"},"page":{"rml":null,"pageName":"Frontpage:P1","section":"Frontpage","type":"Frontpage Deals","analyticsTitle":null,"template":null,"publishedDate":null,"pageGroup":"Frontpage","layout":"Redesign","nps":null},"btt":{"AbTestingSegment":null},"microSite":"Slickdeals","frontpage":{"layout":"grid"},"build":"20231012-173327-PDT-6b7b3475ce8","abTestEventData":null,"gdpr":{"isEu":false,"showPrompt":false},"cdp":{"blueshift_id":"13779bc333ac34fac08a37c930c61e97"}};

    // Copy the tests from dataLayer.visitor.ABTestInfo to SD.ABTest.data
    if (typeof dataLayer.visitor !== 'undefined'
        && typeof dataLayer.visitor.abTestInfo !== 'undefined'
        && typeof SD !== 'undefined'
        && typeof SD.ABTest !== 'undefined'
        && typeof SD.ABTest.data !== 'undefined'
    )
    {
        for (prop in dataLayer.visitor.abTestInfo)
        {
            var abTestDetails = dataLayer.visitor.abTestInfo[prop];

            if (abTestDetails.hasOwnProperty('testName') && abTestDetails.hasOwnProperty('variantName'))
            {
                var abTestDataKey = 'SD_Test: ' + dataLayer.visitor.abTestInfo[prop].testName;

                SD.ABTest.data[abTestDataKey] = dataLayer.visitor.abTestInfo[prop].variantName;
            }
        }
    }

    dataLayer.processadb = function ()
    {
        var f = document.getElementById('check2');
        var fs;
        if (window.getComputedStyle)
        {
            fs = window.getComputedStyle(f);
        }

        var a = function (v,d,c)
        {
            c = c || 0;
            var e = document.getElementById(d);
            if (fs && fs.display != 'none')
            {
                var es = window.getComputedStyle(e);
                dataLayer.visitor[v] = es.display == 'none' ? 'Yes' : 'No';
            }
            else if (window.getComputedStyle && c < 100) {
                dataLayer.visitor[v] = 'Unknown';
                window.setTimeout(function () { fs = window.getComputedStyle(f); a(v, d, c + 1); }, 10);
            }
            else
            {
                dataLayer.visitor[v] = e == null || f.offsetParent == null ? 'Unknown' : e.offsetParent == null ? 'Yes' : 'No';
                if (f.offsetParent == null && c < 100)
                {
                    window.setTimeout(function () { a(v, d, c + 1); }, 10);
                }
            }
        };

        a('ab', 'Ad-Container');
    };

    (function(){
    'use strict';

    if (typeof localStorage !== 'object')
    {
        return;
    }

    const params = location.search
        .slice(1)
        .split('&')
        .map(p => p.split('='))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    const storageKey = 'utmSource';

    if (typeof params['utm_source'] !== 'undefined')
    {
        localStorage.setItem(storageKey, JSON.stringify({
            sessionID: dataLayer.reporting.sessionID,
            value:  params['utm_source']
        }));
    }

    const utmSourceJson = localStorage.getItem('utmSource');

    if (utmSourceJson === null)
    {
        return;
    }

    const utmSourceData = JSON.parse(utmSourceJson);

    if (utmSourceData.sessionID === dataLayer.reporting.sessionID)
    {
        dataLayer.visitor.utmSource = utmSourceData.value;
    }
    else
    {
        localStorage.removeItem(storageKey);
    }
})();


    // Pass dataLayer to Google Tag Manager
    var gtmDl = [dataLayer];