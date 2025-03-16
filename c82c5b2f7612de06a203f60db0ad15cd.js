function OptanonWrapper() {
    // Get initial OnetrustActiveGroups ids

    if(typeof OptanonWrapperCount == "undefined"){
        otGetInitialGrps();
    }
 
    //Delete cookies
    otDeleteCookie(otIniGrps);
 
    // Assign OnetrustActiveGroups to custom variable
    function otGetInitialGrps(){
        OptanonWrapperCount = '';
        otIniGrps =  OnetrustActiveGroups;
        console.log("otGetInitialGrps", otIniGrps)
    }
 
    function otDeleteCookie(iniOptGrpId)
    {
        var otDomainGrps = JSON.parse(JSON.stringify(Optanon.GetDomainData().Groups));
        var otDeletedGrpIds = otGetInactiveId(iniOptGrpId, OnetrustActiveGroups);
        if(otDeletedGrpIds.length != 0 && otDomainGrps.length !=0){
            for(var i=0; i < otDomainGrps.length; i++){
                //Check if CustomGroupId matches
               if(otDomainGrps[i]['CustomGroupId'] != '' && otDeletedGrpIds.includes(otDomainGrps[i]['CustomGroupId'])){
                    for(var j=0; j < otDomainGrps[i]['Cookies'].length; j++){
                        console.log("otDeleteCookie",otDomainGrps[i]['Cookies'][j]['Name'])
                        //Delete cookie
                        eraseCookie(otDomainGrps[i]['Cookies'][j]['Name']);
                    }
                }
 
                //Check if Hostid matches
                if(otDomainGrps[i]['Hosts'].length != 0){
                    for(var j=0; j < otDomainGrps[i]['Hosts'].length; j++){
                        //Check if HostId presents in the deleted list and cookie array is not blank
                        if(otDeletedGrpIds.includes(otDomainGrps[i]['Hosts'][j]['HostId']) && otDomainGrps[i]['Hosts'][j]['Cookies'].length !=0){
                            for(var k=0; k < otDomainGrps[i]['Hosts'][j]['Cookies'].length; k++){
                                //Delete cookie
                                eraseCookie(otDomainGrps[i]['Hosts'][j]['Cookies'][k]['Name']);
                            }
                        }
                    }
                }
 
            }
        }
        otGetInitialGrps(); //Reassign new group ids
    }
 
    //Get inactive ids
    function otGetInactiveId(customIniId, otActiveGrp){
        //Initial OnetrustActiveGroups
        // console.log("otGetInactiveId",customIniId)
        customIniId = customIniId.split(",");
        customIniId = customIniId.filter(Boolean);
 
        //After action OnetrustActiveGroups
        otActiveGrp = otActiveGrp.split(",");
        otActiveGrp = otActiveGrp.filter(Boolean);
 
        var result=[];
        for (var i=0; i < customIniId.length; i++){
            if ( otActiveGrp.indexOf(customIniId[i]) <= -1 ){
                result.push(customIniId[i]);
            }
        }
        return result;
    }
 
    //Delete cookie
    function eraseCookie(name) {
        //Delete root path cookies
        domainName = window.location.hostname;
      
        document.cookie = name+'=; Max-Age=-99999999; Path=/;Domain='+ domainName;
        document.cookie = name+'=; Max-Age=-99999999; Path=/;';
        document.cookie = name+'=; Max-Age=-99999999; Path=/;Domain=.bitly.net';
        document.cookie = name+'=; Max-Age=-99999999; Path=/;Domain=.bitly.com';
        
        //Delete LSO incase LSO being used, cna be commented out.
        localStorage.removeItem(name);
 
        //Check for the current path of the page
        pathArray = window.location.pathname.split('/');
        //Loop through path hierarchy and delete potential cookies at each path.
        for (var i=0; i < pathArray.length; i++){
            if (pathArray[i]){
                //Build the path string from the Path Array e.g /site/login
                var currentPath = pathArray.slice(0,i+1).join('/');
                document.cookie = name+'=; Max-Age=-99999999; Path=' + currentPath + ';Domain='+ domainName;
                document.cookie = name+'=; Max-Age=-99999999; Path=' + currentPath + ';';
                //Maybe path has a trailing slash!
                document.cookie = name+'=; Max-Age=-99999999; Path=' + currentPath + '/;Domain='+ domainName;
                document.cookie = name+'=; Max-Age=-99999999; Path=' + currentPath + '/;';

                
            }
        }

        // looks for cookie names with wildcard or placeceholder characters
        if(name.includes('*') || name.includes('xxxx')){
            //console.log('wildcard cookie ' + name); 
            
            wildname = name.replace('*','');

            if(name.includes('xxxx')){
                wildname = wildname.replaceAll('x','');
            }

            var keyValuePairs = document.cookie.split(/; */);
            for(var i = 0; i < keyValuePairs.length; i++) {
                var cookiename = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
                var value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1);
            
                if(cookiename.includes(wildname)) {

                document.cookie = cookiename+'=; Max-Age=-99999999; Path=/;Domain='+ domainName;
                document.cookie = cookiename+'=; Max-Age=-99999999; Path=/;';
                document.cookie = cookiename+'=; Max-Age=-99999999; Path=/;Domain=.bitly.net';
                document.cookie = cookiename+'=; Max-Age=-99999999; Path=/;Domain=.bitly.com';

                }

            }


        }
 
    }
}


