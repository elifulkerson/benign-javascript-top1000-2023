let consentDataString=Cookies.get('euconsent-v2');if(!consentDataString){consentDataString=Cookies.get('euconsent')}
let usPrivacy=Cookies.get('usprivacy');let apstagConfig={pubID:'3053',adServer:'googletag',bidTimeout:2000,deals:!0,gdpr:{}}
if(consentDataString){apstagConfig.gdpr.enabled=!0;apstagConfig.gdpr.consent=consentDataString}else{apstagConfig.gdpr.cmpTimeout=200}
if(usPrivacy){apstagConfig.us_privacy=usPrivacy}
apstag.init(apstagConfig)