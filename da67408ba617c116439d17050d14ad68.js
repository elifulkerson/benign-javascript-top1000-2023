/**
 * IOL Analytics site data
 */
window.iol_analytics_tracking_conf = window.iol_analytics_tracking_conf || {};
iol_analytics_tracking_conf.engine = {
    "webtrekk": {
        "send": true
    },
    "comscore": {
        "send": true
    }
};
iol_analytics_tracking_conf.driverConf = {
    "optimizeTrackingParams": true,
    "searchParamsToRemove": [
        {
            "name": "ssonc"
        },
        {
            "name": "lib_sso"
        },
        {
            "name": "LIB_SSO"
        },
        {
            "name": "LIB_TK"
        }
    ]
};
iol_analytics_tracking_conf.rules = {
    "defaultPn": "libero.web.homepage.hp",
    "site": "libero",
    "version": "20210518151422",
    "pn": [
        {
            "t": "js",
            "n": "errors.libero",
            "v": "^(4|5)\\d\\d$",
            "id": "iol_analytics_tracking_conf.error"
        },
        {
            "t": "js",
            "n": "errors.libero",
            "v": "^(4|5)\\d\\d$",
            "id": "libero_comscore_error"
        },
        {
            "t": "js",
            "n": "errors.libero",
            "v": "^(4|5)\\d\\d$",
            "id": "iol_tracking_error"
        },
        {
            "t": "path",
            "n": "libero.web.servizi.annunci.others",
            "v": "^\\/annunci\\/"
        },
        {
            "t": "path",
            "n": "libero.web.homepage.servizi",
            "v": "^\\/+servizi\\/?"
        },
        {
            "t": "path",
            "n": "libero.web.homepage.jumbomail",
            "v": "^\\/+jumbomail\\/?"
        },
        {
            "t": "path",
            "n": "libero.web.homepage.temicaldi",
            "v": "^\\/temicaldi"
        },
        {
            "t": "path",
            "n": "libero.web.homepage.socialnews",
            "v": "^\\/socialnews"
        },
        {
            "t": "path",
            "n": "libero.web.homepage.sceltiperte",
            "v": "^\\/sceltiperte"
        },
        {
            "t": "path",
            "n": "libero.web.homepage.hp",
            "v": "^(\\/+|\\/+index\\.phtml)?$",
            "adblock": true
        }
    ]
};