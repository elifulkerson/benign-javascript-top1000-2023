/*<![CDATA[*/
        if (impressions.length > 0) {
            var length = Math.ceil(impressions.length / 20);

            for(var i=0; i < length; i++){
                var arr = impressions.slice(i*20, (i*20) + 20);
                dataLayer.push({'event':'impCompleted','ecommerce': { 'impressions' : arr } });
            }
        }
        /*]]>*/