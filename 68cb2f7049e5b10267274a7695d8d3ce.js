function initExperiment(ExperimentID, callback){if (!ExperimentID){return callback(null);}var r=false; var s=document.createElement('script'); s.type='text/javascript'; s.src='//www.google-analytics.com/cx/api.js?experiment='+ExperimentID; s.onload=function(){if (!r && (!this.readyState || this.readyState=='complete')){r=true; callback(cxApi.chooseVariation());}else{callback(null)}}; s.onerror=function(){callback(null)}; var t=document.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t);}
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-52179504-1', 'alodokter.com');
        ga('require', 'displayfeatures');

        window.GAPageType = 'General';

        initExperiment(window.ExperimentID, function(variation) {
            if (variation !== null) {
                window.ExperimentReady = true;
                window.ExperimentVariation = variation;
                ga('set', 'expId', window.ExperimentID);
                ga('set', 'expVar', window.ExperimentVariation);
            }
            ga('send', 'pageview');
            ga('send', 'event', 'Scroll Depth', GAPageType, '0%');
        });