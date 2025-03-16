M.state.app.counters.ga.push('UA-12105830-1')
    var settings = {"anonymizeIp":false,"forceSSL":true,"transport":"beacon","dataSource":"desktop.weather"}
        settings.page = location.pathname
    settings.location = location.href
    ga('create', {"trackingId":"UA-12105830-1","cookieDomain":"auto","siteSpeedSampleRate":100,"alwaysSendReferrer":true,"allowLinker":true})
    ga('set', settings)
    ga('send', 'pageview')