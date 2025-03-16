(function(){
        function sendSoj(){
            

            var fixReferer = '',
                curReferer = document.referrer,
                site = 'anjuke',
                CustomParams = '{}',
                ExposureParams = '{}',
                st =  new J.logger.Tracker();
            st.setSite(site);
            st.setPage("Ershou_Web_Home_NationalHomePage");
            st.setPageName("Ershou_Web_Home_NationalHomePage");
            st.setReferrer(curReferer ? curReferer : fixReferer);
            st.setNGuid("aQQ_ajkguid");
            st.setNUid("ajk_member_id");
            st.setCustomParam(CustomParams);
            st.setEp(ExposureParams);
            try{
                st.track();
            }catch(err){
                J.logger.log('sendSojError',err);
            }
        }
        sendSoj();
    }());
    // 58 统计 不要cp、sc参数
    (function(){

        try{
            var fixReferer = '',
                curReferer = document.referrer,
                site = 'anjuke',
                st = new SiteTracker();
                st.setSite(site);
                st.setPage("Ershou_Web_Home_NationalHomePage");
                st.setPageName("Ershou_Web_Home_NationalHomePage");
                st.setReferer(curReferer ? curReferer : fixReferer);
                st.buildParams();
            var _trackUrl = st.getParams();
                delete _trackUrl.sc;
                delete _trackUrl.cp;
            window._trackURL = JSON.stringify(_trackUrl);

            function loadTrackjs(){
                 var s = document.createElement('script');
                 s.type = 'text/javascript';
                 s.async = true;
                 s.src = '//tracklog.58.com/referrer_anjuke_pc.js?_=' + Math.random();
                 var b = document.body;
                 s.onload = function () {
                    st.setSite(site+'-npv');
                    st.setPage("Ershou_Web_Home_NationalHomePage"+"_tracklog");
                    st.setPageName("Ershou_Web_Home_NationalHomePage"+"_tracklog");
                    st.track();
                 }
                 s.onerror = function () {
                     st.setSite(site+'-npv');
                     st.setPage("Ershou_Web_Home_NationalHomePage"+"_tracklog_error");
                     st.setPageName("Ershou_Web_Home_NationalHomePage"+"_tracklog_error");
                     st.track();
                 }
                 b.appendChild(s);
            }
            setTimeout(function(){loadTrackjs()},0);
        }catch(e){
        }
    })();