window.config = {
    "devsite": true,
    "devmode": true, //@todo Caner
    "push": { //push notification
        "max": 3,
        "playsound": true,
        "sound": "/assets/sounds/notif.mp3",
    },
    "site": {
        "url": "https://www.ensonhaber.com/",
        "feedbackurl": "https://destek.ensonhaber.com/",
        "titlesuffix": "— Ensonhaber" // {Page Title Lorem Ipsum} - Ensonhaber
    },
    "reloadhome": {
        "enabled": false, // @todo true
        "timeout": 160000 // MS  2.5 minutes
    },
    "cdn": "https://icdn.ensonhaber.com/",
    "fullmenu": {
        "url": "/assets/html/fullmenu.html",
        "weatherurl": "https://api-stg.ensonhaber.com/data/havadurumu", // /istanbul.json
        "currencyurl": "https://api-stg.ensonhaber.com/data/doviz.json"
    },
    "search": {
        "formurl": "/assets/html/searchbox.html",
        "url": "/dynamic/searchresults.php",
        "limit": 20,
        "placeholder": "Haber Arama..."
    },
    "weather": {
        "icondir": "/assets/img/svg/weather/set1/fill"
    },
    "userleavemsg": false,
    "stickyads": {
        "show": true,
        "minscreen": 1570,
        "url": "/dynamic/sticky.ads.php"
    },
    "video": {
        "ad": {
            "show": true,
            "skippable": true,
            "ontime": 20, // Seconds
            "duration": 10, // Seconds
        },
    },
    "sondakika": {
        "url": "/dynamic/lastminute.php"
    },
    "detail": {
        "url": "/dynamic/news.php"
    },
    "loginmodal": {
        "url": "/assets/html/loginmodal.html"
    },
    "verifiedmodal": {
        "url": "/assets/html/verifiedmodal.html"
    },
    "topadbar": {
        "show": true,
        "sticky": true,
        "stickyduration": 4000, // msecs
    },
    "ad": {
        "url": "/dynamic/ad.php"
    },
    "trending": {
        "title": "Trend Haberler",
        "url": "https://api-stg.ensonhaber.com/data/ilginizi-cekebilir.json",
        "moreurl": "https://ensonhaber.com",
        "limit": 10
    },
    "gununmansetleri": {
        "title": "Günün Manşetleri",
        "url": "https://api-stg.ensonhaber.com/api/v3/topheadline.json",
        "limit": 20
    },
    "hotnews": {
        "url": "https://api-stg.ensonhaber.com/api/v2/related/",
        "limit": 4
    },
    "ilginizicekebilir": {
        "url": "https://api-stg.ensonhaber.com/data/ilginizi-cekebilir.json",
    },
    "relatednews": {
        "url": "https://api-stg.ensonhaber.com/data/ilginizi-cekebilir.json",
        "limit": 3
    },
    "user": {
        "host": "https://user.ensonhaber.com",
        "detailsurl": "https://www.ensonhaber.com/api/uye/",
        "login": {
            "mail": {
                "url": "https://www.ensonhaber.com/api/uye/?i=100" //&m=mail@mail.com&p=123
            },
            "gsm": {
                "url": "https://www.ensonhaber.com/api/uye/?i=1", //&num=5555555555
                "verifyurl": "https://www.ensonhaber.com/api/uye/?i=1", //&num=5555555555&verify_code=666666
                "smsretry": 1, //mins
            }
        },
        "register": {
            "mail": {
                "url": "https://www.ensonhaber.com/api/uye/?i=2", //&m=mail@mail.com&p=123
                "verifyurl": "https://www.ensonhaber.com/api/uye/?i=2", //&m=mail@mail.com&p=123&verify_code=666666"
            },
            "gsm": {
                "url": "https://www.ensonhaber.com/api/uye/?i=1", //&num=5555555555
                "verifyurl": "https://www.ensonhaber.com/api/uye/?i=1", //&num=5555555555&verify_code=666666
            },
        },
        "paymentpackage": "https://api-stg.ensonhaber.com/api/v2/premiumpackages",
    },
    "comments": {
        "url": "https://comment.ensonhaber.com/v2/esh/comments/{newsid}/{sortby}/{page}",
        "submiturl": "https://comment.ensonhaber.com/v1/submit",
        "maxlength": 500,
        "limit": 5,
        "html": 0,
        "emoji": {
            "url": "/assets/html/emojis.json",
            "cats": {
                "smileys_people": "İfadeler ve İnsanlar",
                "animals_nature": "Hayvanlar ve Doğa",
                "travel_places": "Gezi ve Mekanlar",
                "activities": "Etkinlikler",
                "symbols": "Semboller",
                "objects": "Nesneler",
                "flags": "Bayraklar"
            },
        },
        "avatarsurl": "/dynamic/avatars",
        "posturl": "https://api.ensonhaber.net/esh/yorumgonder",
        "likeurl": "https://comment.ensonhaber.com/v1/like",
        "defaultavatar": "/assets/img/avatar/unknown.jpg",
        "verifiedtitle": "Doğrulanmış Hesap",
        "diamondtitle": "Sıkı Hayran",
    },
    "timeline": false, //timeline widget,
    "datename": {
        "day": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        "dayshort": ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cts"],
        "month": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        "monthshort": ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"]
    },
    "cities": {
        "adana": "Adana",
        "adiyaman": "Adıyaman",
        "afyon": "Afyon",
        "agri": "Ağrı",
        "aksaray": "Aksaray",
        "amasya": "Amasya",
        "ankara": "Ankara",
        "antalya": "Antalya",
        "ardahan": "Ardahan",
        "artvin": "Artvin",
        "aydin": "Aydın",
        "balikesir": "Balıkesir",
        "bartin": "Bartın",
        "batman": "Batman",
        "bayburt": "Bayburt",
        "bilecik": "Bilecik",
        "bingol": "Bingöl",
        "bitlis": "Bitlis",
        "bolu": "Bolu",
        "burdur": "Burdur",
        "bursa": "Bursa",
        "canakkale": "Çanakkale",
        "cankiri": "Çankırı",
        "corum": "Çorum",
        "denizli": "Denizli",
        "diyarbakir": "Diyarbakır",
        "duzce": "Düzce",
        "edirne": "Edirne",
        "elazig": "Elazığ",
        "erzincan": "Erzincan",
        "erzurum": "Erzurum",
        "eskisehir": "Eskişehir",
        "gaziantep": "Gaziantep",
        "giresun": "Giresun",
        "gumushane": "Gümüşhane",
        "hakkari": "Hakkari",
        "hatay": "Hatay",
        "igdir": "Iğdır",
        "isparta": "Isparta",
        "istanbul": "İstanbul",
        "izmir": "İzmir",
        "kahramanmaras": "Kahramanmaraş",
        "karabuk": "Karabük",
        "karaman": "Karaman",
        "kars": "Kars",
        "kastamonu": "Kastamonu",
        "kayseri": "Kayseri",
        "kirikkale": "Kırıkkale",
        "kirklareli": "Kırklareli",
        "kirsehir": "Kırşehir",
        "kilis": "Kilis",
        "kocaeli": "Kocaeli",
        "konya": "Konya",
        "kutahya": "Kütahya",
        "malatya": "Malatya",
        "manisa": "Manisa",
        "mardin": "Mardin",
        "mersin": "Mersin",
        "mugla": "Muğla",
        "mus": "Muş",
        "nevsehir": "Nevşehir",
        "nigde": "Niğde",
        "ordu": "Ordu",
        "osmaniye": "Osmaniye",
        "rize": "Rize",
        "sakarya": "Sakarya",
        "samsun": "Samsun",
        "siirt": "Siirt",
        "sinop": "Sinop",
        "sivas": "Sivas",
        "sanliurfa": "Şanlıurfa",
        "sirnak": "Şırnak",
        "tekirdag": "Tekirdağ",
        "tokat": "Tokat",
        "trabzon": "Trabzon",
        "tunceli": "Tunceli",
        "usak": "Uşak",
        "van": "Van",
        "yalova": "Yalova",
        "yozgat": "Yozgat",
        "zonguldak": "Zonguldak"
    },
    "tparty": {
        "google_client_id": "919899727968-f4g4bn9386dvsfhj81c6ida9p59r1oh7.apps.googleusercontent.com",
    },
    "api_related_category": ['gundem', 'kralspor', 'ekonomi', 'magazin', 'teknoloji', 'saglik', 'medya', 'yasam'],
    "populerhaberlerurl": "https://api-stg.ensonhaber.com/api/v2/populerhaberler2"
};


window.config.devsite = window.location.hostname == "www.ensonhaber.com" ? false : true;
window.config.reloadhome.enabled = window.config.devsite ? false : true;
