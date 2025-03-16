(function() {
        var version = '2.9.0' || 'unknown';
        try {
            newrelic.addRelease('homepage', version);
            newrelic.setCustomAttribute('packageVersion', version);
            if(typeof window._GLID === 'string') {
                newrelic.setCustomAttribute('glid', window._GLID);
            }
            
                newrelic.setCustomAttribute('ck.fers.traceid', 'c91ec5a0-cc9a-4f1a-b250-7065ff91a15d')
            
            
                newrelic.setCustomAttribute('ck.fers.environment', 'production')
            
            
                
                
                    newrelic.setCustomAttribute('ck.fers.platform', 'Web')
                
                
                    newrelic.setCustomAttribute('ck.fers.osType', '')
                
            
            
                newrelic.setCustomAttribute('ck.fers.streamingEnabled', false)
            
            
            
                newrelic.setCustomAttribute('ck.fers.authStatus', 'unauthwithoutcookie')
            
            
            window.addEventListener('unhandledrejection', function (e) {
                newrelic.noticeError(e.reason, { reportSource: 'unhandledrejection' })
            })
        } catch (e) { /* Fail silently */ }
    })();