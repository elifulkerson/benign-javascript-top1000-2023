function getCookiesStartingWith(cname) {

                let decodedCookie = decodeURIComponent(document.cookie);

                return decodedCookie.split(';')
                    .map((d) => d.trim())
                    .filter((d) => d.substring(0, cname.length) === cname);
            }

            function isCookiePresent(cname) {

                let cookies = getCookiesStartingWith(cname);

                return (cookies.length > 0);
            }

            let isFirstView = !isCookiePresent("_ga_");
            // Don't forget to remove true parameter on ga4Params

            let ga4ParamsObject = JSON.parse(`{"post_id":"Non-Article","article_template":"","browser_user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko\/20100101 Firefox\/21.0","author":"Non-Article","jr_editor":"Non-Article","sr_editor":"Non-Article","primary_category":"Non-Article","tags":"","payment_category":"Non-Article","content_type":"Non-Article","intent":"Non-Article","network_category":"Non-Article","is_amp_traffic":false,"template":"home","is_ad_block":false,"classification":"","is_subscribed_premium":false,"subscription_plan":"","ip_address":"70.163.140.175","date_published":"","date_republished":"","brand_segment":null,"video_picker":"none"}`);
            ga4ParamsObject.first_view = isFirstView;

            let refererUrl = '';
            ga4ParamsObject.first_visit = !(refererUrl.includes('www.howtogeek.com'));

                        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PVR2ZX9X91', ga4ParamsObject);