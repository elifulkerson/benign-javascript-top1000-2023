var signData = {
        "koc": {
            "name": "Ko\u00e7",
            "date": "21 Mart - 19 Nisan",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/koc-burcu-gunluk-yorumu.html"
        },
        "boga": {
            "name": "Bo\u011fa",
            "date": "20 Nisan - 20 May\u0131s",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/boga-burcu-gunluk-yorumu.html"
        },
        "ikizler": {
            "name": "\u0130kizler",
            "date": "21 May\u0131s - 21 Haziran",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/ikizler-burcu-gunluk-yorumu.html"
        },
        "yengec": {
            "name": "Yenge\u00e7",
            "date": "22 Haziran - 22 Temmuz",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/yengec-burcu-gunluk-yorumu.html"
        },
        "aslan": {
            "name": "Aslan",
            "date": "23 Temmuz - 22 A\u011fustos",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/aslan-burcu-gunluk-yorumu.html"
        },
        "basak": {
            "name": "Ba\u015fak",
            "date": "23 A\u011fustos - 22 Eyl\u00fcl",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/basak-burcu-gunluk-yorumu.html"
        },
        "terazi": {
            "name": "Terazi",
            "date": "23 Eyl\u00fcl - 22 Ekim",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/terazi-burcu-gunluk-yorumu.html"
        },
        "akrep": {
            "name": "Akrep",
            "date": "23 Ekim - 21 Kas\u0131m",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/akrep-burcu-gunluk-yorumu.html"
        },
        "yay": {
            "name": "Yay",
            "date": "22 Kas\u0131m - 21 Aral\u0131k",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/yay-burcu-gunluk-yorumu.html"
        },
        "oglak": {
            "name": "O\u011flak",
            "date": "22 Aral\u0131k - 19 Ocak",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/oglak-burcu-gunluk-yorumu.html"
        },
        "kova": {
            "name": "Kova",
            "date": "20 Ocak - 18 \u015eubat",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/kova-burcu-gunluk-yorumu.html"
        },
        "balik": {
            "name": "Bal\u0131k",
            "date": "19 \u015eubat - 20 Mart",
            "url": "https:\/\/www.mynet.com\/kadin\/burclar-astroloji\/balik-burcu-gunluk-yorumu.html"
        }
    };
    var mySigns = {
        last_id: 'sign1', toggle: function (id) {
            window.location.href = signData[id].url;
        }
    }