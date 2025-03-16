function OptanonWrapper() {
    NPR_OptanonWrapper = true;
    document.dispatchEvent(new CustomEvent('npr:DataConsentAvailable'));
    
    OneTrust.OnConsentChanged(function() {
        document.dispatchEvent(new CustomEvent('npr:DataConsentChanged'));
    });
 }