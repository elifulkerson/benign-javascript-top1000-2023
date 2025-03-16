userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('sectiondivsticky'); });
    }});