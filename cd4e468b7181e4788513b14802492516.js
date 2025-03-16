var VIEW_TEMPLATE = 'generic';
    var URL_RESOURCE_KEYWORDS = 'free-photos-vectors';
    var URL_CATEGORY = 'free-vectors';
    var URL_PREMIUM_COLLECTIONS = 'premium-collections';
    var ACCOUNTS_BASE_URL = 'https://www.freepik.com/profile/';
    var ACCOUNTS_API_KEY = 'aHR0cHM6Ly93d3cuZnJlZXBpay5jbw==';
    var GOOGLE_ANALYTICS_ID = 'UA-19303147-22';
    var NUM_RELATED_RESOURCES = 40;
    var NUM_SPONSOR_RESOURCES = 40;
    var URL_STATIC_IMG = "https://freepik.cdnpk.net/img/";
    var BASE_URL = 'https://www.freepik.com/';
    var AUTHOR_URL = 'https://www.freepik.com/author/';
    var POPULAR_URL = 'https://www.freepik.com/popular/';
    var GIDP_ONE_TAP_LOGIN_URL = 'https://id-api.freepikcompany.com/v2/login/google-one-tap?client_id=freepik&lang=en';
    var LOGIN_URL = 'https://id.freepikcompany.com/v2/log-in?client_id=freepik&lang=en';
    var LOGOUT_URL = 'https://www.freepik.com/oauth-logout';
    var REGISTER_URL = 'https://id.freepikcompany.com/v2/sign-up?client_id=freepik&lang=en';
    var DOMAIN_FP = BASE_URL.replace(/(^\w+:|^)\/\//, '').replace(/\/+$/, '');
    var TRACKER_URL = 'https://www.freepik.com/';
    var REDIRECT_URL = 'https://www.freepik.com/redirect/';
    var SPONSOR_BASE_URL = 'https://fpedge.cdnpk.net/';
    var LANGUAGE = 'en';
    var LANGUAGE_NAME = 'english';
    var NUM_RESOURCES = '83917597';
    var NUM_RESOURCES_SELECTION = '4182888';
    var NUM_RESOURCES_PREMIUM = '71977680';
    var RE_CAPTCHA_KEY_INVISIBLE = '6LdvWJ8gAAAAAAXyyM14R9ry2XGaseLJI014nJo_';
    var CRITEO_ACCOUNT_ID = '54019';
    var OPTIMAL_BROWSER = false;
    var IS_MOBILE = false;
    var DEVICE_FAQS_URL = 'https:https://support.freepik.com/hc/en-us/articles/4402183658642-How-can-I-reset-my-devices';
    var URL_FREEPIK_EDITOR = 'https://wepik.com/api/redirector/';
    var URL_FREEPIK_WEPIK_ALL_PHOTOS = 'https://www.freepik.com/photo-editor/new-artboard';
    var URL_FREEPIK_MOCKUP_EDITOR = 'https://www.freepik.com/mockup-editor';
    var URL_FREEPIK_STORIES = 'https://stories.freepiklabs.com/api/redirector/';
    var SPONSOR_URL_IMPRESS = '';
    var DETAIL_WIDTHS = [360,740,826,900,996,1060,1380,1480,1800,2000];
    var IS_PREMIUM_USER = false;
    var CSRF_TOKEN = 'aa35d001780cbdae6229ba357b6b6db2';
    var USER_TYPE = 'anonymous';
    var USER_COUNTRY_CODE = 'US';
    var USER_COUNTRY_CODE_ISO_3 = 'USA';
    var USER_CURRENCY = 'USD';
    var LOGGED_BY_OAUTH = '';
    var USER_PRICE_MONTHLY = '24 USD';
    var USER_PRICE_YEARLY = '144 USD';
    var USER_PRICE_YEARLY_BY_MONTH = '12 USD';
    var IMG_ZOOM_STRIP = 40;
    var HOW_EDIT_URL = {
        psd: 'https://support.freepik.com/s/article/How-to-edit-a-PSD-file?language=en_US',
        vector: 'https://support.freepik.com/hc/en-us/articles/203578042-How-to-edit-a-vector-file-from-Freepik-',
        icon: 'https://support.freepik.com/hc/en-us/articles/203578042-How-to-edit-a-vector-file-from-Freepik-',
        photo: 'https://support.freepik.com/hc/en-us/articles/360024473313-How-to-edit-a-JPG',
    }
    var PRICING_URL = 'https://www.freepik.com/pricing';
    var MY_SUBSCRIPTIONS_URL = 'https://www.freepik.com/profile/my_subscriptions';
    var SUPPORT_URL = 'https://support.freepik.com/hc/en-us';
    var FLATICON_URL = 'https://www.flaticon.com/';
    var HOW_ATTRIBUTE_AUTHOR_URL = 'https://support.freepik.com/hc/en-us/articles/208976585-Attribution-How-when-and-where-';
    var PREMIUM_LICENSE_URL = 'https://www.freepikcompany.com/legal#nav-freepik-license';
    var STANDARD_LICENSE_URL = 'https://www.freepikcompany.com/legal#nav-freepik-license';
    var APP_RELEASE = '6d706d0e7e7dcdcae1a5e671af7fab98e7bb2d06';
    var THUMBNAIL_SIZE_BIG = 626;
    var THUMBNAIL_SIZE_SMALL = 338;
    var SLIDER_RESOURCES_SERIE_LENGTH_MIN = 7;
    var SLIDER_RESOURCES_DEFAULT_LENGTH_MIN = 10;
    var SPONSOR_SHOW_ADOBESTOCK_PERCENT = 100;
    var FEATURE_ABANDONED_CART_DISABLED = true;
    var FEATURE_AD_MANAGER = true;
    var FEATURE_AD_MANAGER_ATTRIBUTE = false;
    var FEATURE_AD_MANAGER_DOWNLOADBOX_BY_COUNTRY = false;
    var FEATURE_ADD_TAG_REMOVE_ADS_BY_COUNTRY = true;
    var FEATURE_ADOBE_AUTOPROMO = true;
    var FEATURE_AI_IMAGE_FREEPIK_BY_COUNTRY = true;
    var FEATURE_AI_VERTICAL_BY_LANGUAGE = true;
    var FEATURE_ICONS_VERTICAL_BY_LANGUAGE = true;
    var FEATURE_BLOCK_DOWNLOAD_TOO_MANY_IPS = true;
    var FEATURE_CHECK_RECAPTCHA_STATUS_BY_COUNTRY = false;
    var FEATURE_COLLECTION_HEADER_BUTTON_BY_COUNTRY = true;
    var FEATURE_CUSTOMIZE_TEXT_SEARCHBOX = false;
    var FEATURE_DEVICE_MANAGER = true;
    var FEATURE_DISABLE_ADOBE_AUTOPROMO_BY_COUNTRY = false;
    var FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY = true;
    var FEATURE_DISABLE_ADS = false;
    var FEATURE_DISABLE_AFFILIATE_404_BY_COUNTRY = false;
    var FEATURE_DISABLE_AFFILIATE_BY_COUNTRY = false;
    var FEATURE_DISABLE_INFO_RESOURCES = true;
    var FEATURE_DOWNLOAD_FILE_TYPES = true;
    var FEATURE_DOWNLOAD_FROM_THUMBNAIL_BY_COUNTRY = true;
    var FEATURE_ENABLE_GAM_BANNERS = true;
    var FEATURE_ENABLE_SEARCH_IMPRESSIONS = false;
    var FEATURE_ENABLE_SSEO = true;
    var FEATURE_FETCHPRIORITY_HIGH = true;
    var FEATURE_FILTER_COLOR_MULTIPLE = false;
    var FEATURE_FILTER_AI = true;
    var FEATURE_FIXED_FIRST_POSITIONS = true;
    var FEATURE_FULLWIDTH_RESOURCES = true;
    var FEATURE_HIDE_SPONSOR_VISIBILITY = true;
    var FEATURE_IMAGE_SEARCH_BY_COUNTRY = true;
    var FEATURE_HOME_AUTOPROMO = false;
    var FEATURE_LANDING_TAG_PHOTO_TITLE = true;
    var FEATURE_LANDINGS_PAID_BY_LANGUAGE = false;
    var FEATURE_MONTHLY_DOWNLOAD_LIMIT_BY_COUNTRY = false;
    var FEATURE_MOVE_EDIT_BUTTON = false;
    var FEATURE_NEW_CANCEL_RENEWAL = true;
    var FEATURE_NEW_COPIES_COLLECTIONS_BY_COUNTRY = true;
    var FEATURE_NEW_LANDING_PRICING = true;
    var FEATURE_NOTIFICATION_80_DOWNLOADS = true;
    var FEATURE_MOCKUP_EDITOR_BUTTON = false;
    var FEATURE_OAUTH_ORIGIN_PARAM = true;
    var FEATURE_OBFUSCATE_LINKS = true;
    var FEATURE_OBFUSCATE_LINKS_DETAIL_VIEW = true;
    var FEATURE_OTHERLEVELS_ENABLED = true;
    var FEATURE_OTHERLEVELS_INBOX_TOOLTIP = true;
    var FEATURE_PAUSE_SUBSCRIPTION_V2 = true;
    var FEATURE_RECAPTCHA_ENABLED = true;
    var FEATURE_REDUCE_404_RESULTS_REMOVING_LAST_PARAM = true;
    var FEATURE_SHOW_3D_MODELS_BY_LANGUAGE = true;
    var FEATURE_SHOW_ADOBE_EXPRESS_STOCKBANNER_BY_COUNTRY = false;
    var FEATURE_SHOW_ADOBE_EXPRESS_APIBANNER_BY_COUNTRY = false;
    var FEATURE_SHOW_LINK_B2B_LANDING = true;
    var FEATURE_SHOW_NATIVE_ADVERTISING_BY_LANGUAGE = false;
    var FEATURE_SHOW_PAYMENT_UPDATE = true;
    var FEATURE_SPONSOR_SHUTTERSTOCK = Math.random() < 0.5;
    var FEATURE_SPONSOR_SQUARESPACE = false;
    var FEATURE_TOP_BANNER_BY_COUNTRY = false;
    var FEATURE_USER_PERSONA_MODAL_BY_LANGUAGE = true;
    var FEATURE_UX_REVIEW = true;
    var FEATURE_VERTICAL_GRID_BY_LANGUAGE = true;
    var FEATURE_WEB_TO_LEAD_PRICING_FORM = true;
    var FEATURE_GA4_EVENTS_FROM_BACKEND = true;
    var TRACKING_SEARCH = '';
    var FLATICON_AUTHOR_ID = '318';
    var FREEPIK_AUTHOR_ID = '23';
    var MAX_OCURR_NOTIF_MOCKUP_BAKER_PLUGIN = 3;
    var FIXED_RESOURCES_IN_RESULTS = 5;
    var DEVICE_EXPIRATION = 1800000;
    var MOCKUP_EDITOR_IDS = [49217128];
    var FEATURE_POPUP_REBRANDING = false;
    var COLLECTION_COUNT = 0;
    var COLLECTION_LIMIT = 500;

    var ESSENTIAL_USER_TYPE = 0;
    var ESSENTIAL_COUNTRY = 0;
    var SHOW_CC_BANNER = false;

    var ADOBE_MODAL_PROBABILITIES = [0, 0, 0.1, 0.5, 1];
    var MONTHLY_DOWNLOAD_LIMIT_NOTICE_DATE = 1657144800;
    var DOWNLOAD_LIMIT_FREE = 10;
    var DOWNLOAD_LIMIT_FREE_MONTHLY = 20;
    var SUPPORT_RESOURCES_FAQ_URL = 'https://support.freepik.com/hc/en-us/articles/202567722-How-many-resources-can-I-download-';
    var SUPPORT_RESOURCES_FAQ_URL_MONTHLY = 'https://support.freepik.com/hc/en-us/articles/4414508532882';
    var LAZY_LOADING_THRESHOLD_PX = 1750;

    var RecaptchaDownloads;
    var optimizeTests = [];

    var PLACEHOLDER_SEARCHTEXT = 'Search all resources';

    var CATEGORY_LANDING_PROMO = '{}';
    var PALETTE_COLORS = '{}';

    var BASE64_SEARCH_BY_IMAGE = '';
    var KEYWORD_SEARCH_BY_IMAGE = '';

        var TOP_SEARCH_TERMS = [
        'background',
        'logo',
        'business card',
        'infography',
        'banner',
        'pattern',
        'flyer',
        'abstract background'
    ];

    
    function randomAvatar(name) {
        if ('function' === typeof randomAvatarMethod && name) {
            return randomAvatarMethod(name);
        }

        return 'https://freepik.cdnpk.net/img/avatars/01.svg';
    }

    var MAX_WIDTH_RESOURCE = 0;
    var DISABLE_ANONYMOUS_DOWNLOADS = false;

    // StockBanner Adobe settings
    var stockBannerImage = '';
    var stockBannerUrl = '';
    var stockBannerPixelVariation = '';
    var stockBannerPixelAffiliate = '';
    var bannerAffiliate = [];
    var urlPopupAffiliate = '';