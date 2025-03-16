var Cam4User = {
       htmlStates: ['javascriptUtils_jsp'],  
       cameraData : {     
           resolutionStr : 'Normal'
       },
        userFeatures : {},
        showSafeClick: false,
        stealthModeValue: '',
        hasProfileImages: false,
        hasFanClubImages: false
   };
   


if(typeof jQuery !== 'undefined') {
    var $j = $j ? $j : jQuery.noConflict();
}


var Cam4Processors = {
    links: {
        '5': {
            'processorName': 'EpochCC',
            'url': 'https://epoch.com/billing_support'
        },
        '10': {
            'processorName': 'EpochOneClickCC',
            'url': 'https://epoch.com/billing_support'
        },
        '21': {
            'processorName': 'BlueSnap',
            'url': 'http://granity.net/contact/'
        }
    }
};