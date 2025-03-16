window.WcpConsent &&
    WcpConsent.init(
        'en-us',
        "cookie-banner",
        function (err, _siteConsent) {
            if (!err) {
                siteConsent = _siteConsent; //siteConsent is used to get the current consent

            }
        }, onConsentChanged
    );
function onConsentChanged(categoryPreferences) {
    if ( siteConsent.isConsentRequired === true && siteConsent.getConsent().Analytics === true){
        loadAdobeTarget();
    }
}
function loadAdobeTarget(){
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    //Assigning the value generated from PHP
    script.src = adobe_at_config_js;
    //Executing synchronously.
    script.async = false;
    head.appendChild(script);

    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    //Assigning the value generated from PHP
    script.src = adobe_at_js;
    //Executing synchronously.
    script.async = false;
    head.appendChild(script);
}