var languageCode = document.getElementsByName('languageCode')[0].content;
        var countryCode = document.getElementsByName('countryCode')[0].content;
        var focusArea = document.getElementsByName('focusArea')[0].content;
        /* Define digital data object based on _appInfo object */
        window.digitalData = {
            page: {
                category: {
                    primaryCategory: '',
                },
                pageInfo: {
                    language: languageCode + '-' + countryCode,
                    ibm: {
                        siteID: 'MarketingAEM',
                        country: countryCode,
                        messaging: {
                            routing: {
                                focusArea: focusArea,
                                languageCode: languageCode,
                                regionCode: countryCode
                            },
                            translation: {
                                languageCode: languageCode,
                                regionCode: countryCode
                            }
                        },
                        sections: 0,
                        patterns: 0
                    }
                }
            }
        };