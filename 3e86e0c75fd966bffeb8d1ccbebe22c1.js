var GL = {
    'homeUrl': 'https:' != document.location.protocol ? 'http://usa.banggood.com/' : 'https://usa.banggood.com/',   	'limitUrl': 'https://trans.banggood.com/forwards/',
    'withLangHomeUrl': 'https://usa.banggood.com/',     'lang': 'en-GB',           'isWwwpre': '',
    'runEnv': 'online',
    'showGoogleTranslate': '1',
    'isPageReverse': "0",        'emptyImg': '/templates/black/web/dev/static/img/empty.gif',      'isReqRecKey': "1",       'comName': 'index',            'search': {          'rec': "",
        'def': "Enter product keywords",
        'act': "",
        'cur': "Enter product keywords",
        'del': "Delete",
        'history': "Clear history",
        'recent': "Recent searches",
        'hot': "Hot Searches:"
    },
    'is_ordinary_user': "0",  
    'language': {          LJ_ASK_18_TITLE: "Are you over 18?",
        LJ_ASK_18_TXT: "This section of our website contains adult content, please answer the following questions before you access to this area.",
        LJ_ASK_18_YES: "Yes",
        LJ_ASK_18_NO: "Not yet",
        LJ_IS_MARRIED: "I have been married.",
        LJ_IS_MARRIED_TXT: "This section of our website contains adult content, please answer the following questions before you access to this area.",
        LJ_FOR_MORE_EXCLUSIVE_OFFERS_BY: "For more exclusive offers by",
        LJ_CLICKING_HERE: "clicking here",
        LP_CANCEL: "Cancel",
        LP_YES: "Yes",
        LP_NO: "No",
        LP_U_HAVE_SELECTED_NO_ITEMS: "You have selected no items !",
        LP_TRACKING_NUMBER_NO: "No tracking",
        LA_COOKIE_DISABLE_TIPS: "The cookie has been closed. We use cookies to provides you with a customized, responsive,and a personalized experience,if you continue to use our website, we will assume that you agree to us using cookies in accordance with cookie atatement. Please open the cookie and refresh the page.",
				LA_NOT_YOU: "Not you?",
		LA_PC_SUBSCRIBE_WHATSAPP_BTN: "Subscribe",
		LA_WHATSAPP_ALERT_DESC4: "Please enter a valid phone number.",
		LA_CHOOSE_COUNTRY_TIP: "Please choose your Country/Region.",
		LA_SIDE_WA_CYEXH: "Claim You Exclusive Coupons Here",
		LA_SIDE_WA_STYWA: "Send To Your WhatsApp",
		LA_SIDE_WA_EC: "Exclusive Coupons",
		LA_SIDE_WA_OS: "Order Status",
		LA_SIDE_WA_PR: "Price Drop Reminder",
		LA_SIDE_WA_WA: "WhatsApp",

    },

    'ship_lang_usa': {
        LC_SHIPMENT_IPA_IPA:"IPA international Mail",
    },

    'ship_lang_uk': {
        LC_SHIPMENT_UK_B2C_EU :"B2C Europe",
        LC_SHIPMENT_UKPLI_UKPLI :"PLI International Mail",
        LC_SHIPMENT_ROYAL3_ROYAL3 :"Uk Standard International Shipping",
        LC_SHIPMENT_UKDHLGM_UKDHLGM :"DHL Global Mail",
        LC_SHIPMENT_ROYAL5_ROYAL5 :"Royal Mail Second Class",
        LC_SHIPMENT_ROYAL1_ROYAL1 :"UK Standard Shipping"
    },
    'G_SWITCH_CONFIG': "switch config",       'errList': [],
    'version': "202309081600",
    'cssDomain': "//s.staticbg.com",
    'jsDomain': "//s.staticbg.com",
    'fbCapiJson': null,       'tikTokPixel': null,       'kwaiPixel': null,   	'currentLang':"en-GB",//当前语言
    isCartPage : '',
    addressBookLang: {
        name: 'Please enter %s characters instead of Arabic numerals',
        namelang: 'Please enter %s characters in %d instead of Arabic numerals',
        telephone: 'Please enter a %m digit telephone number',
        telephonelang: 'Please enter a %m digit telephone number that starts with the number %p',
        address: 'Please enter %s characters that include %i',
        addresslang: 'Please enter %s characters in %d that include %i',
        city: 'Please enter %s characters',
        citylang: 'Please enter %s characters in %d',
        postcode: 'Please enter %s characters',
        postcodeSuch: 'Please enter %s characters, such as %b-%a',
        sensitiveWords: 'Please exclude %d',
        lang: {
					en: "English",
					es: "Español",
					pt: "Português",
					ru: "Русский",
					fr: "Français",
					it: "Italiano",
					de: "Deutsch",
					jp: "日本語",
					nl: "Nederlands",
					tr: "Türkçe",
					kr: "한국어",
					ar: "العربية",
					th: "ไทย",
					sv: "Svenska",
					no: "norsk Språk",
					id: "bahasa indonesia",
					da: "dansk",
					cs: "čeština",
					hi: "हिन्दी",
					pl: "język polski",
					iw: "עברית",
					vn: "Tiếng việt",
					el: "Ελληνικά",
					hu: "Magyar",
					sk: "slovenský jazyk"
				}
    }
};

window.addEventListener && window.addEventListener('error', function(ev) {
    GL.errList.push(ev)
}, true)



if (window.top.window.location.host == 'bi.banggood.com') {
    document.domain = 'banggood.com'
}
if (document.domain.indexOf('banggood') < 0) {
	window.location.href = 'https://www.banggood.com'
}