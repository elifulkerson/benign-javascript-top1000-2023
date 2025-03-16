var customActions = {
        SaveClicked: 'save_event',
    };
    var branchMedatata = { metadata : {} };
    //Adding user authenticated metatag

    (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.defer=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(" "), 0);
        branch.init('key_live_epYrpbv3NngOvWj47OM81jmgCFkeYUlx' , branchMedatata, function(err, data) {branch.addListener(branchListener);});
        
    function branchListener(eventName, data) {

        var eventsToTrack = [
            'didShowJourney',
            'didClickJourneyCTA',
            'didClickJourneyClose',
        ]; // List of events to track

        if (eventName && data && data.journey_link_data && eventsToTrack.includes(eventName)){
            var journeyName = data.journey_link_data.journey_name + ' - ' + data.journey_link_data.view_name +' - ' + data.journey_link_data.journey_id;
            trackEventBranchIO(eventName, journeyName);    
        }
    }

    function trackEventBranchIO(eventName, journeyName){

        if(window && window.dataLayer){
            window.dataLayer.push({ 
            eventName, eventData: { journeyName }, 
            // Required:
            event: "track", 
            sendToHeap: true 
            });
        
        };
    }

    function addBranchIOMetatags(
        name,
        content,
        extraData = null,
    ){
        
        var metadata = {
            [name]: content,
            custom_action: customActions[name] ? customActions[name] : name,
        };

        //Keep userAuthenticated metadata

        //Adding metadata
        addMetadata(metadata);

        //Add extra data
        extraData && addMetadata(extraData);

        branch.track('pageview');        
    }   
    
   function addMetadata(branchData){
        if (document) {
            Object.entries(branchData).forEach(([key, value]) => {
                const meta = document.createElement('meta');
                meta.content = value;
                meta.name = 'branch:deeplink:' + key;
                document.head.appendChild(meta);
            });
        }
    }