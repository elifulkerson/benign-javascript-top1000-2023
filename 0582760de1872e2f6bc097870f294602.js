(function (contextPageVars) {
    const { sitePageVars = {} } = window;

    Object.keys(contextPageVars).forEach((key) => {
        sitePageVars[key] = Object.assign(sitePageVars[key] || {}, contextPageVars[key]);
    });

    window.sitePageVars = sitePageVars;
})({
    "user": {
        "deviceType": "desktop",
        "userRegion": "us",
        "userId": "0",
        "userState": "not authenticated",
        "userType": "anon",
        "testName": "",
        "testGroup": "",
        "testVersion": "",
        "abTestLabel": "not in test",
        "dartAbTestLabel": "",
        "thisIp": "47.254.30.243",
        "theme": "gamespot_white"
    }
});



window.utag_data = Object.assign(window.utag_data || {}, {
    "deviceType": "desktop",
    "siteEdition": "us",
    "userId": "0",
    "userState": "not authenticated",
    "userType": "anon",
    "testName": "",
    "testGroup": "",
    "testVersion": "",
    "theme": "gamespot_white",
    "_test": "not in test"
});