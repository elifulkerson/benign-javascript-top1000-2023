RA.config.set('appPushDomain', 'https://app.rbc.ru/');
        RA.config.set('apnPushDomen', 'https://app.rbc.ru');
        RA.config.set('apnWebsitePushId', 'web.ru.rbc.top');
        RA.config.set('messagingSenderId', '644988820153');
        RA.config.set('user.region', 'world');
        RA.config.set('layout.mainMenuHeight', 45);
        RA.config.set('newsfeed.loadTabNick', 'rbcnews.uploaded');
        RA.config.set('newsfeed.removeHiddingNews', true);
        RA.config.set('project', 'rbc');
        RA.config.set('pagename', 'index');
        RA.config.set('projectUrl', 'https://www.rbc.ru');
        RA.config.set('visitedPagesEnabled', true);

        try {
            RA.config.set('criticalPlacements', JSON.parse('{    "mtsOnbordingAida": {      "enabled": false,      "showCount": 5,      "blockUrl": "http://mts-marketolog.rbc.ru/?utm_source=rbc&utm_medium=banner&utm_campaign=rbc_banner_floorad_1&erid=Pb3XmBtzt74NLb5PG7ECU7KVXCJ1uNwHRCsQear",      "buttonUrl": "http://mts-marketolog.rbc.ru/?utm_source=rbc&utm_medium=banner&utm_campaign=rbc_banner_floorad_1&erid=Pb3XmBtzt74NLb5PG7ECU7KVXCJ1uNwHRCsQear",      "disableDate": "2022-12-31 11:00"    }  } '));
        }
        catch (e) {
            console.log('Critical placements error: ', e);
        }

                    RA.config.set('abtest', '10.4E');
        
         RA.config.set('pollPopup.shouldRun', true);
 RA.config.set('pollPopupMobile.shouldRun', false);
        RA.config.set('counters.ga.useHtmlParams', true);