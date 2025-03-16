!function(define, undefined) {
    define(function() {
        "use strict";
        var isArray, impl = {
            mobileDetectRules: {
                phones: {
                    iPhone: "\\biPhone\\b|\\biPod\\b",
                    BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                    HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                    Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                    Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                    Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
                    LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)",
                    Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                    Asus: "Asus.*Galaxy|PadFone.*Mobile",
                    NokiaLumia: "Lumia [0-9]{3,4}",
                    Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    Palm: "PalmSource|Palm",
                    Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                    iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                    Alcatel: "Alcatel",
                    Nintendo: "Nintendo (3DS|Switch)",
                    Amoi: "Amoi",
                    INQ: "INQ",
                    GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                },
                tablets: {
                    iPad: "iPad|iPad.*Mobile",
                    NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                    GoogleTablet: "Android.*Pixel C",
                    SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708",
                    Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                    SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                    HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                    AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                    BlackBerryTablet: "PlayBook|RIM Tablet",
                    HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                    MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                    ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                    FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                    LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F",
                    DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                    YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                    IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                    IRUTablet: "M702pro",
                    MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                    AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    NokiaLumiaTablet: "Lumia 2520",
                    SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                    PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                    CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                    MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                    SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    FlyTablet: "IQ310|Fly Vision",
                    bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                    HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09",
                    NecTablet: "\\bN-06D|\\bN-08D",
                    PantechTablet: "Pantech.*P4100",
                    BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                    VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                    PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    NabiTablet: "Android.*\\bNabi",
                    KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    PlaystationTablet: "Playstation.*(Portable|Vita)",
                    TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                    PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: "Android.*\\bG1\\b",
                    MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                    PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                    HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    DPSTablet: "DPS Dream 9|DPS Dual 7",
                    VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                    StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                    EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    iMobileTablet: "i-mobile i-note",
                    TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                    AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    AMPETablet: "Android.* A78 ",
                    SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    TecnoTablet: "TECNO P9|TECNO DP8D",
                    JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    FX2Tablet: "FX2 PAD7|FX2 PAD10",
                    XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                    OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                    CaptivaTablet: "CAPTIVA PAD",
                    IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                    OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                    JaytechTablet: "TPC-PA762",
                    BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                    DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                    EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                    LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                    AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                    MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                    CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                    WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                    MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                    MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                    NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                    NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                    LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                    UbislateTablet: "UbiSlate[\\s]?7C",
                    PocketBookTablet: "Pocketbook",
                    KocasoTablet: "\\b(TB-1207)\\b",
                    HisenseTablet: "\\b(F5281|E2371)\\b",
                    Hudl: "Hudl HT7S3|Hudl 2",
                    TelstraTablet: "T-Hub2",
                    GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
                },
                oss: {
                    AndroidOS: "Android",
                    BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                    PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                    WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                    iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                    MeeGoOS: "MeeGo",
                    MaemoOS: "Maemo",
                    JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                    webOS: "webOS|hpwOS",
                    badaOS: "\\bBada\\b",
                    BREWOS: "BREW"
                },
                uas: {
                    Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                    Dolfin: "\\bDolfin\\b",
                    Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                    Skyfire: "Skyfire",
                    Edge: "Mobile Safari/[.0-9]* Edge",
                    IE: "IEMobile|MSIEMobile",
                    Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                    Bolt: "bolt",
                    TeaShark: "teashark",
                    Blazer: "Blazer",
                    Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                    UCBrowser: "UC.*Browser|UCWEB",
                    baiduboxapp: "baiduboxapp",
                    baidubrowser: "baidubrowser",
                    DiigoBrowser: "DiigoBrowser",
                    Puffin: "Puffin",
                    Mercury: "\\bMercury\\b",
                    ObigoBrowser: "Obigo",
                    NetFront: "NF-Browser",
                    GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
                },
                props: {
                    Mobile: "Mobile/[VER]",
                    Build: "Build/[VER]",
                    Version: "Version/[VER]",
                    VendorID: "VendorID/[VER]",
                    iPad: "iPad.*CPU[a-z ]+[VER]",
                    iPhone: "iPhone.*CPU[a-z ]+[VER]",
                    iPod: "iPod.*CPU[a-z ]+[VER]",
                    Kindle: "Kindle/[VER]",
                    Chrome: [ "Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]" ],
                    Coast: [ "Coast/[VER]" ],
                    Dolfin: "Dolfin/[VER]",
                    Firefox: [ "Firefox/[VER]", "FxiOS/[VER]" ],
                    Fennec: "Fennec/[VER]",
                    Edge: "Edge/[VER]",
                    IE: [ "IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]" ],
                    NetFront: "NetFront/[VER]",
                    NokiaBrowser: "NokiaBrowser/[VER]",
                    Opera: [ " OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]" ],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    UCBrowser: [ "UCWEB[VER]", "UC.*Browser/[VER]" ],
                    MQQBrowser: "MQQBrowser/[VER]",
                    MicroMessenger: "MicroMessenger/[VER]",
                    baiduboxapp: "baiduboxapp/[VER]",
                    baidubrowser: "baidubrowser/[VER]",
                    SamsungBrowser: "SamsungBrowser/[VER]",
                    Iron: "Iron/[VER]",
                    Safari: [ "Version/[VER]", "Safari/[VER]" ],
                    Skyfire: "Skyfire/[VER]",
                    Tizen: "Tizen/[VER]",
                    Webkit: "webkit[ /][VER]",
                    PaleMoon: "PaleMoon/[VER]",
                    Gecko: "Gecko/[VER]",
                    Trident: "Trident/[VER]",
                    Presto: "Presto/[VER]",
                    Goanna: "Goanna/[VER]",
                    iOS: " \\bi?OS\\b [VER][ ;]{1}",
                    Android: "Android [VER]",
                    BlackBerry: [ "BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]" ],
                    BREW: "BREW [VER]",
                    Java: "Java/[VER]",
                    "Windows Phone OS": [ "Windows Phone OS [VER]", "Windows Phone [VER]" ],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    Symbian: [ "SymbianOS/[VER]", "Symbian/[VER]" ],
                    webOS: [ "webOS/[VER]", "hpwOS/[VER];" ]
                },
                utils: {
                    Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                    MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                    DesktopMode: "WPDesktop",
                    TV: "SonyDTV|HbbTV",
                    WebKit: "(webkit)[ /]([\\w.]+)",
                    Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                    Watch: "SM-V700"
                }
            },
            detectMobileBrowsers: {
                fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                tabletPattern: /android|ipad|playbook|silk/i
            }
        }, hasOwnProp = Object.prototype.hasOwnProperty;
        function equalIC(a, b) {
            return null != a && null != b && a.toLowerCase() === b.toLowerCase();
        }
        function containsIC(array, value) {
            var valueLC, i, len = array.length;
            if (!len || !value) return !1;
            for (valueLC = value.toLowerCase(), i = 0; i < len; ++i) if (valueLC === array[i].toLowerCase()) return !0;
            return !1;
        }
        function convertPropsToRegExp(object) {
            for (var key in object) hasOwnProp.call(object, key) && (object[key] = new RegExp(object[key], "i"));
        }
        function MobileDetect(userAgent, maxPhoneWidth) {
            this.ua = function(userAgent) {
                return (userAgent || "").substr(0, 500);
            }(userAgent), this._cache = {}, this.maxPhoneWidth = maxPhoneWidth || 600;
        }
        return impl.FALLBACK_PHONE = "UnknownPhone", impl.FALLBACK_TABLET = "UnknownTablet",
        impl.FALLBACK_MOBILE = "UnknownMobile", isArray = "isArray" in Array ? Array.isArray : function(value) {
            return "[object Array]" === Object.prototype.toString.call(value);
        }, function() {
            var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
            for (key in mobileDetectRules.props) if (hasOwnProp.call(mobileDetectRules.props, key)) {
                for (values = mobileDetectRules.props[key], isArray(values) || (values = [ values ]),
                len = values.length, i = 0; i < len; ++i) 0 <= (verPos = (value = values[i]).indexOf("[VER]")) && (value = value.substring(0, verPos) + "([\\w._\\+]+)" + value.substring(verPos + 5)),
                values[i] = new RegExp(value, "i");
                mobileDetectRules.props[key] = values;
            }
            convertPropsToRegExp(mobileDetectRules.oss), convertPropsToRegExp(mobileDetectRules.phones),
            convertPropsToRegExp(mobileDetectRules.tablets), convertPropsToRegExp(mobileDetectRules.uas),
            convertPropsToRegExp(mobileDetectRules.utils), mobileDetectRules.oss0 = {
                WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
                WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
            };
        }(), impl.findMatch = function(rules, userAgent) {
            for (var key in rules) if (hasOwnProp.call(rules, key) && rules[key].test(userAgent)) return key;
            return null;
        }, impl.findMatches = function(rules, userAgent) {
            var result = [];
            for (var key in rules) hasOwnProp.call(rules, key) && rules[key].test(userAgent) && result.push(key);
            return result;
        }, impl.getVersionStr = function(propertyName, userAgent) {
            var patterns, i, len, match, props = impl.mobileDetectRules.props;
            if (hasOwnProp.call(props, propertyName)) for (len = (patterns = props[propertyName]).length,
            i = 0; i < len; ++i) if (null !== (match = patterns[i].exec(userAgent))) return match[1];
            return null;
        }, impl.getVersion = function(propertyName, userAgent) {
            var version = impl.getVersionStr(propertyName, userAgent);
            return version ? impl.prepareVersionNo(version) : NaN;
        }, impl.prepareVersionNo = function(version) {
            var numbers;
            return 1 === (numbers = version.split(/[a-z._ \/\-]/i)).length && (version = numbers[0]),
            1 < numbers.length && (version = numbers[0] + ".", numbers.shift(), version += numbers.join("")),
            Number(version);
        }, impl.isMobileFallback = function(userAgent) {
            return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
        }, impl.isTabletFallback = function(userAgent) {
            return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
        }, impl.prepareDetectionCache = function(cache, userAgent, maxPhoneWidth) {
            if (void 0 === cache.mobile) {
                var phone, tablet, phoneSized;
                if (tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent)) return cache.mobile = cache.tablet = tablet,
                void (cache.phone = null);
                if (phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent)) return cache.mobile = cache.phone = phone,
                void (cache.tablet = null);
                impl.isMobileFallback(userAgent) ? void 0 === (phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth)) ? (cache.mobile = impl.FALLBACK_MOBILE,
                cache.tablet = cache.phone = null) : phoneSized ? (cache.mobile = cache.phone = impl.FALLBACK_PHONE,
                cache.tablet = null) : (cache.mobile = cache.tablet = impl.FALLBACK_TABLET, cache.phone = null) : impl.isTabletFallback(userAgent) ? (cache.mobile = cache.tablet = impl.FALLBACK_TABLET,
                cache.phone = null) : cache.mobile = cache.tablet = cache.phone = null;
            }
        }, impl.mobileGrade = function(t) {
            var $isMobile = null !== t.mobile();
            return t.os("iOS") && 4.3 <= t.version("iPad") || t.os("iOS") && 3.1 <= t.version("iPhone") || t.os("iOS") && 3.1 <= t.version("iPod") || 2.1 < t.version("Android") && t.is("Webkit") || 7 <= t.version("Windows Phone OS") || t.is("BlackBerry") && 6 <= t.version("BlackBerry") || t.match("Playbook.*Tablet") || 1.4 <= t.version("webOS") && t.match("Palm|Pre|Pixi") || t.match("hp.*TouchPad") || t.is("Firefox") && 12 <= t.version("Firefox") || t.is("Chrome") && t.is("AndroidOS") && 4 <= t.version("Android") || t.is("Skyfire") && 4.1 <= t.version("Skyfire") && t.is("AndroidOS") && 2.3 <= t.version("Android") || t.is("Opera") && 11 < t.version("Opera Mobi") && t.is("AndroidOS") || t.is("MeeGoOS") || t.is("Tizen") || t.is("Dolfin") && 2 <= t.version("Bada") || (t.is("UC Browser") || t.is("Dolfin")) && 2.3 <= t.version("Android") || t.match("Kindle Fire") || t.is("Kindle") && 3 <= t.version("Kindle") || t.is("AndroidOS") && t.is("NookTablet") || 11 <= t.version("Chrome") && !$isMobile || 5 <= t.version("Safari") && !$isMobile || 4 <= t.version("Firefox") && !$isMobile || 7 <= t.version("MSIE") && !$isMobile || 10 <= t.version("Opera") && !$isMobile ? "A" : t.os("iOS") && t.version("iPad") < 4.3 || t.os("iOS") && t.version("iPhone") < 3.1 || t.os("iOS") && t.version("iPod") < 3.1 || t.is("Blackberry") && 5 <= t.version("BlackBerry") && t.version("BlackBerry") < 6 || 5 <= t.version("Opera Mini") && t.version("Opera Mini") <= 6.5 && (2.3 <= t.version("Android") || t.is("iOS")) || t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || 11 <= t.version("Opera Mobi") && t.is("SymbianOS") ? "B" : (t.version("BlackBerry") < 5 || t.match("MSIEMobile|Windows CE.*Mobile") || t.version("Windows Mobile"),
            "C");
        }, impl.detectOS = function(ua) {
            return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
        }, impl.getDeviceSmallerSide = function() {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
        }, MobileDetect.prototype = {
            constructor: MobileDetect,
            mobile: function() {
                return impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
            },
            phone: function() {
                return impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
            },
            tablet: function() {
                return impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
            },
            userAgent: function() {
                return void 0 === this._cache.userAgent && (this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua)),
                this._cache.userAgent;
            },
            userAgents: function() {
                return void 0 === this._cache.userAgents && (this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua)),
                this._cache.userAgents;
            },
            os: function() {
                return void 0 === this._cache.os && (this._cache.os = impl.detectOS(this.ua)), this._cache.os;
            },
            version: function(key) {
                return impl.getVersion(key, this.ua);
            },
            versionStr: function(key) {
                return impl.getVersionStr(key, this.ua);
            },
            is: function(key) {
                return containsIC(this.userAgents(), key) || equalIC(key, this.os()) || equalIC(key, this.phone()) || equalIC(key, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
            },
            match: function(pattern) {
                return pattern instanceof RegExp || (pattern = new RegExp(pattern, "i")), pattern.test(this.ua);
            },
            isPhoneSized: function(maxPhoneWidth) {
                return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
            },
            mobileGrade: function() {
                return void 0 === this._cache.grade && (this._cache.grade = impl.mobileGrade(this)),
                this._cache.grade;
            }
        }, MobileDetect.isPhoneSized = "undefined" != typeof window && window.screen ? function(maxPhoneWidth) {
            return maxPhoneWidth < 0 ? void 0 : impl.getDeviceSmallerSide() <= maxPhoneWidth;
        } : function() {}, MobileDetect._impl = impl, MobileDetect.version = "1.4.2 2018-06-10",
        MobileDetect;
    });
}(function(undefined) {
    if ("undefined" != typeof module && module.exports) return function(factory) {
        module.exports = factory();
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function(factory) {
        window.MobileDetect = factory();
    };
    throw new Error("unknown environment");
}()), function(f) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = f(); else if ("function" == typeof define && define.amd) define([], f); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).DMVAST = f();
    }
}(function() {
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = "function" == typeof require && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n || e);
                }, l, l.exports, e, t, n, r);
            }
            return n[o].exports;
        }
        for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
        return s;
    }({
        1: [ function(require, module, exports) {
            function EventEmitter() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
            }
            function isFunction(arg) {
                return "function" == typeof arg;
            }
            function isObject(arg) {
                return "object" == typeof arg && null !== arg;
            }
            function isUndefined(arg) {
                return void 0 === arg;
            }
            ((module.exports = EventEmitter).EventEmitter = EventEmitter).prototype._events = void 0,
            EventEmitter.prototype._maxListeners = void 0, EventEmitter.defaultMaxListeners = 10,
            EventEmitter.prototype.setMaxListeners = function(n) {
                if ("number" != typeof n || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
                return this._maxListeners = n, this;
            }, EventEmitter.prototype.emit = function(type) {
                var er, handler, len, args, i, listeners;
                if (this._events || (this._events = {}), "error" === type && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
                    if ((er = arguments[1]) instanceof Error) throw er;
                    var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
                    throw err.context = er, err;
                }
                if (isUndefined(handler = this._events[type])) return !1;
                if (isFunction(handler)) switch (arguments.length) {
                  case 1:
                    handler.call(this);
                    break;

                  case 2:
                    handler.call(this, arguments[1]);
                    break;

                  case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;

                  default:
                    args = Array.prototype.slice.call(arguments, 1), handler.apply(this, args);
                } else if (isObject(handler)) for (args = Array.prototype.slice.call(arguments, 1),
                len = (listeners = handler.slice()).length, i = 0; i < len; i++) listeners[i].apply(this, args);
                return !0;
            }, EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(type, listener) {
                var m;
                if (!isFunction(listener)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener),
                this._events[type] ? isObject(this._events[type]) ? this._events[type].push(listener) : this._events[type] = [ this._events[type], listener ] : this._events[type] = listener,
                isObject(this._events[type]) && !this._events[type].warned && (m = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners) && 0 < m && this._events[type].length > m && (this._events[type].warned = !0,
                console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length),
                "function" == typeof console.trace && console.trace()), this;
            }, EventEmitter.prototype.once = function(type, listener) {
                if (!isFunction(listener)) throw TypeError("listener must be a function");
                var fired = !1;
                function g() {
                    this.removeListener(type, g), fired || (fired = !0, listener.apply(this, arguments));
                }
                return g.listener = listener, this.on(type, g), this;
            }, EventEmitter.prototype.removeListener = function(type, listener) {
                var list, position, length, i;
                if (!isFunction(listener)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[type]) return this;
                if (length = (list = this._events[type]).length, position = -1, list === listener || isFunction(list.listener) && list.listener === listener) delete this._events[type],
                this._events.removeListener && this.emit("removeListener", type, listener); else if (isObject(list)) {
                    for (i = length; 0 < i--; ) if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                        position = i;
                        break;
                    }
                    if (position < 0) return this;
                    1 === list.length ? (list.length = 0, delete this._events[type]) : list.splice(position, 1),
                    this._events.removeListener && this.emit("removeListener", type, listener);
                }
                return this;
            }, EventEmitter.prototype.removeAllListeners = function(type) {
                var key, listeners;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[type] && delete this._events[type],
                this;
                if (0 === arguments.length) {
                    for (key in this._events) "removeListener" !== key && this.removeAllListeners(key);
                    return this.removeAllListeners("removeListener"), this._events = {}, this;
                }
                if (isFunction(listeners = this._events[type])) this.removeListener(type, listeners); else if (listeners) for (;listeners.length; ) this.removeListener(type, listeners[listeners.length - 1]);
                return delete this._events[type], this;
            }, EventEmitter.prototype.listeners = function(type) {
                return this._events && this._events[type] ? isFunction(this._events[type]) ? [ this._events[type] ] : this._events[type].slice() : [];
            }, EventEmitter.prototype.listenerCount = function(type) {
                if (this._events) {
                    var evlistener = this._events[type];
                    if (isFunction(evlistener)) return 1;
                    if (evlistener) return evlistener.length;
                }
                return 0;
            }, EventEmitter.listenerCount = function(emitter, type) {
                return emitter.listenerCount(type);
            };
        }, {} ],
        2: [ function(require, module, exports) {
            var VASTAd;
            VASTAd = function() {
                this.id = null, this.sequence = null, this.system = null, this.title = null, this.description = null,
                this.advertiser = null, this.pricing = null, this.survey = null, this.errorURLTemplates = [],
                this.impressionURLTemplates = [], this.creatives = [], this.extensions = [];
            }, module.exports = VASTAd;
        }, {} ],
        3: [ function(require, module, exports) {
            var VASTClient, VASTParser, VASTUtil;
            VASTParser = require("./parser"), VASTUtil = require("./util"), VASTClient = function() {
                function VASTClient() {}
                var defineProperty, storage;
                return VASTClient.cappingFreeLunch = 0, VASTClient.cappingMinimumTimeInterval = 0,
                VASTClient.options = {
                    withCredentials: !1,
                    timeout: 0
                }, VASTClient.get = function(url, opts, cb) {
                    var extend, now, options, timeSinceLastCall;
                    if (now = +new Date(), extend = exports.extend = function(object, properties) {
                        var key, val;
                        for (key in properties) val = properties[key], object[key] = val;
                        return object;
                    }, cb || ("function" == typeof opts && (cb = opts), options = {}), options = extend(this.options, opts),
                    this.totalCallsTimeout < now ? (this.totalCalls = 1, this.totalCallsTimeout = now + 36e5) : this.totalCalls++,
                    !(this.cappingFreeLunch >= this.totalCalls)) {
                        if ((timeSinceLastCall = now - this.lastSuccessfullAd) < 0) this.lastSuccessfullAd = 0; else if (timeSinceLastCall < this.cappingMinimumTimeInterval) return void cb(null, new Error("VAST call canceled – (" + this.cappingMinimumTimeInterval + ")ms minimum interval reached"));
                        return VASTParser.parse(url, options, function(response, err) {
                            return cb(response, err);
                        });
                    }
                    cb(null, new Error("VAST call canceled – FreeLunch capping not reached yet " + this.totalCalls + "/" + this.cappingFreeLunch));
                }, storage = VASTUtil.storage, defineProperty = Object.defineProperty, [ "lastSuccessfullAd", "totalCalls", "totalCallsTimeout" ].forEach(function(property) {
                    defineProperty(VASTClient, property, {
                        get: function() {
                            return storage.getItem(property);
                        },
                        set: function(value) {
                            return storage.setItem(property, value);
                        },
                        configurable: !1,
                        enumerable: !0
                    });
                }), null == VASTClient.lastSuccessfullAd && (VASTClient.lastSuccessfullAd = 0),
                null == VASTClient.totalCalls && (VASTClient.totalCalls = 0), null == VASTClient.totalCallsTimeout && (VASTClient.totalCallsTimeout = 0),
                VASTClient;
            }(), module.exports = VASTClient;
        }, {
            "./parser": 12,
            "./util": 18
        } ],
        4: [ function(require, module, exports) {
            var VASTCompanionAd;
            VASTCompanionAd = function() {
                this.id = null, this.width = 0, this.height = 0, this.type = null, this.staticResource = null,
                this.htmlResource = null, this.iframeResource = null, this.altText = null, this.companionClickThroughURLTemplate = null,
                this.companionClickTrackingURLTemplates = [], this.trackingEvents = {};
            }, module.exports = VASTCompanionAd;
        }, {} ],
        5: [ function(require, module, exports) {
            var VASTCreative, VASTCreativeCompanion, VASTCreativeLinear, VASTCreativeNonLinear, extend = function(child, parent) {
                for (var key in parent) hasProp.call(parent, key) && (child[key] = parent[key]);
                function ctor() {
                    this.constructor = child;
                }
                return ctor.prototype = parent.prototype, child.prototype = new ctor(), child.__super__ = parent.prototype,
                child;
            }, hasProp = {}.hasOwnProperty;
            VASTCreative = function(creativeAttributes) {
                null == creativeAttributes && (creativeAttributes = {}), this.id = creativeAttributes.id || null,
                this.adId = creativeAttributes.adId || null, this.sequence = creativeAttributes.sequence || null,
                this.apiFramework = creativeAttributes.apiFramework || null, this.trackingEvents = {};
            }, VASTCreativeLinear = function(superClass) {
                function VASTCreativeLinear() {
                    VASTCreativeLinear.__super__.constructor.apply(this, arguments), this.type = "linear",
                    this.duration = 0, this.skipDelay = null, this.mediaFiles = [], this.videoClickThroughURLTemplate = null,
                    this.videoClickTrackingURLTemplates = [], this.videoCustomClickURLTemplates = [],
                    this.adParameters = null, this.icons = [];
                }
                return extend(VASTCreativeLinear, VASTCreative), VASTCreativeLinear;
            }(), VASTCreativeNonLinear = function(superClass) {
                function VASTCreativeNonLinear() {
                    VASTCreativeNonLinear.__super__.constructor.apply(this, arguments), this.type = "nonlinear",
                    this.variations = [];
                }
                return extend(VASTCreativeNonLinear, VASTCreative), VASTCreativeNonLinear;
            }(), VASTCreativeCompanion = function(superClass) {
                function VASTCreativeCompanion() {
                    VASTCreativeCompanion.__super__.constructor.apply(this, arguments), this.type = "companion",
                    this.variations = [];
                }
                return extend(VASTCreativeCompanion, VASTCreative), VASTCreativeCompanion;
            }(), module.exports = {
                VASTCreativeLinear: VASTCreativeLinear,
                VASTCreativeNonLinear: VASTCreativeNonLinear,
                VASTCreativeCompanion: VASTCreativeCompanion
            };
        }, {} ],
        6: [ function(require, module, exports) {
            var VASTAdExtension;
            VASTAdExtension = function() {
                this.attributes = {}, this.children = [];
            }, module.exports = VASTAdExtension;
        }, {} ],
        7: [ function(require, module, exports) {
            var VASTAdExtensionChild;
            VASTAdExtensionChild = function() {
                this.name = null, this.value = null, this.attributes = {};
            }, module.exports = VASTAdExtensionChild;
        }, {} ],
        8: [ function(require, module, exports) {
            var VASTIcon;
            VASTIcon = function() {
                this.program = null, this.height = 0, this.width = 0, this.xPosition = 0, this.yPosition = 0,
                this.apiFramework = null, this.offset = null, this.duration = 0, this.type = null,
                this.staticResource = null, this.htmlResource = null, this.iframeResource = null,
                this.iconClickThroughURLTemplate = null, this.iconClickTrackingURLTemplates = [],
                this.iconViewTrackingURLTemplate = null;
            }, module.exports = VASTIcon;
        }, {} ],
        9: [ function(require, module, exports) {
            module.exports = {
                client: require("./client"),
                tracker: require("./tracker"),
                parser: require("./parser"),
                util: require("./util")
            };
        }, {
            "./client": 3,
            "./parser": 12,
            "./tracker": 14,
            "./util": 18
        } ],
        10: [ function(require, module, exports) {
            var VASTMediaFile;
            VASTMediaFile = function() {
                this.id = null, this.fileURL = null, this.deliveryType = "progressive", this.mimeType = null,
                this.codec = null, this.bitrate = 0, this.minBitrate = 0, this.maxBitrate = 0, this.width = 0,
                this.height = 0, this.apiFramework = null, this.scalable = null, this.maintainAspectRatio = null;
            }, module.exports = VASTMediaFile;
        }, {} ],
        11: [ function(require, module, exports) {
            var VASTNonLinear;
            VASTNonLinear = function() {
                this.id = null, this.width = 0, this.height = 0, this.expandedWidth = 0, this.expandedHeight = 0,
                this.scalable = !0, this.maintainAspectRatio = !0, this.minSuggestedDuration = 0,
                this.apiFramework = "static", this.type = null, this.staticResource = null, this.htmlResource = null,
                this.iframeResource = null, this.nonlinearClickThroughURLTemplate = null, this.nonlinearClickTrackingURLTemplates = [],
                this.adParameters = null;
            }, module.exports = VASTNonLinear;
        }, {} ],
        12: [ function(require, module, exports) {
            var EventEmitter, URLHandler, VASTAd, VASTAdExtension, VASTAdExtensionChild, VASTCompanionAd, VASTCreativeCompanion, VASTCreativeLinear, VASTCreativeNonLinear, VASTIcon, VASTMediaFile, VASTNonLinear, VASTParser, VASTResponse, VASTUtil, indexOf = [].indexOf || function(item) {
                for (var i = 0, l = this.length; i < l; i++) if (i in this && this[i] === item) return i;
                return -1;
            };
            URLHandler = require("./urlhandler"), VASTResponse = require("./response"), VASTAd = require("./ad"),
            VASTAdExtension = require("./extension"), VASTAdExtensionChild = require("./extensionchild"),
            VASTUtil = require("./util"), VASTCreativeLinear = require("./creative").VASTCreativeLinear,
            VASTCreativeCompanion = require("./creative").VASTCreativeCompanion, VASTCreativeNonLinear = require("./creative").VASTCreativeNonLinear,
            VASTMediaFile = require("./mediafile"), VASTIcon = require("./icon"), VASTCompanionAd = require("./companionad"),
            VASTNonLinear = require("./nonlinear"), EventEmitter = require("events").EventEmitter,
            VASTParser = function() {
                var URLTemplateFilters;
                function VASTParser() {}
                return URLTemplateFilters = [], VASTParser.addURLTemplateFilter = function(func) {
                    "function" == typeof func && URLTemplateFilters.push(func);
                }, VASTParser.removeURLTemplateFilter = function() {
                    return URLTemplateFilters.pop();
                }, VASTParser.countURLTemplateFilters = function() {
                    return URLTemplateFilters.length;
                }, VASTParser.clearUrlTemplateFilters = function() {
                    return URLTemplateFilters = [];
                }, VASTParser.parse = function(url, options, cb) {
                    return cb || ("function" == typeof options && (cb = options), options = {}), this._parse(url, null, options, function(err, response) {
                        return cb(response, err);
                    });
                }, VASTParser.load = function(xml, options, cb) {
                    return cb || ("function" == typeof options && (cb = options), options = {}), this.parseXmlDocument(null, [], options, xml, cb);
                }, VASTParser.vent = new EventEmitter(), VASTParser.track = function(templates, errorCode) {
                    return this.vent.emit("VAST-error", errorCode), VASTUtil.track(templates, errorCode);
                }, VASTParser.on = function(eventName, cb) {
                    return this.vent.on(eventName, cb);
                }, VASTParser.once = function(eventName, cb) {
                    return this.vent.once(eventName, cb);
                }, VASTParser.off = function(eventName, cb) {
                    return this.vent.removeListener(eventName, cb);
                }, VASTParser._parse = function(url, parentURLs, options, cb) {
                    var filter, i, len, _this;
                    for (cb || ("function" == typeof options && (cb = options), options = {}), i = 0,
                    len = URLTemplateFilters.length; i < len; i++) filter = URLTemplateFilters[i], url = filter(url);
                    return null == parentURLs && (parentURLs = []), parentURLs.push(url), URLHandler.get(url, options, (_this = this,
                    function(err, xml) {
                        return null != err ? cb(err) : _this.parseXmlDocument(url, parentURLs, options, xml, cb);
                    }));
                }, VASTParser.parseXmlDocument = function(url, parentURLs, options, xml, cb) {
                    var ad, complete, i, j, len, len1, loopIndex, node, ref, ref1, response;
                    if (response = new VASTResponse(), null == (null != xml ? xml.documentElement : void 0) || "VAST" !== xml.documentElement.nodeName) return cb({
                        error: 4,
                        error_code: "AD_NO",
                        msg: "Invalid VAST XMLDocument"
                    });
                    for (i = 0, len = (ref = xml.documentElement.childNodes).length; i < len; i++) "Error" === (node = ref[i]).nodeName && response.errorURLTemplates.push(VASTParser.parseNodeText(node));
                    for (j = 0, len1 = (ref1 = xml.documentElement.childNodes).length; j < len1; j++) "Ad" === (node = ref1[j]).nodeName && (null != (ad = VASTParser.parseAdElement(node)) ? response.ads.push(ad) : VASTParser.track(response.errorURLTemplates, {
                        ERRORCODE: 101
                    }));
                    for (complete = function(error, errorAlreadyRaised) {
                        var k, len2, noCreatives, ref2;
                        if (null == error && (error = null), null == errorAlreadyRaised && (errorAlreadyRaised = !1),
                        response) {
                            for (noCreatives = !0, k = 0, len2 = (ref2 = response.ads).length; k < len2; k++) {
                                if (null != (ad = ref2[k]).nextWrapperURL) return;
                                0 < ad.creatives.length && (noCreatives = !1);
                            }
                            return noCreatives && (errorAlreadyRaised || VASTParser.track(response.errorURLTemplates, {
                                ERRORCODE: 303
                            })), 0 === response.ads.length && (response = null, error = new Error("No ads: no valid <inline> has been found")),
                            cb(error, response);
                        }
                    }, loopIndex = response.ads.length; loopIndex--; ) null != (ad = response.ads[loopIndex]).nextWrapperURL && function(ad) {
                        var ref2;
                        parentURLs.length > (null !== options.wrapperLimit ? options.wrapperLimit : 9) || (ref2 = ad.nextWrapperURL,
                        0 <= indexOf.call(parentURLs, ref2)) ? (VASTParser.track(ad.errorURLTemplates, {
                            ERRORCODE: 302
                        }), response.ads.splice(response.ads.indexOf(ad), 1), complete(new Error("Wrapper limit reached, as defined by the video player"))) : (null != url && (ad.nextWrapperURL = VASTParser.resolveVastAdTagURI(ad.nextWrapperURL, url)),
                        VASTParser._parse(ad.nextWrapperURL, parentURLs, options, function(err, wrappedResponse) {
                            var errorAlreadyRaised, index, k, len2, ref3, wrappedAd;
                            if (errorAlreadyRaised = !1, null != err) VASTParser.track(ad.errorURLTemplates, {
                                ERRORCODE: 301
                            }), response.ads.splice(response.ads.indexOf(ad), 1), errorAlreadyRaised = !0; else if (null == wrappedResponse) VASTParser.track(ad.errorURLTemplates, {
                                ERRORCODE: 303
                            }), response.ads.splice(response.ads.indexOf(ad), 1), errorAlreadyRaised = !0; else for (response.errorURLTemplates = response.errorURLTemplates.concat(wrappedResponse.errorURLTemplates),
                            index = response.ads.indexOf(ad), response.ads.splice(index, 1), k = 0, len2 = (ref3 = wrappedResponse.ads).length; k < len2; k++) wrappedAd = ref3[k],
                            VASTParser.mergeWrapperAdData(wrappedAd, ad), response.ads.splice(++index, 0, wrappedAd);
                            return delete ad.nextWrapperURL, complete(err, errorAlreadyRaised);
                        }));
                    }(ad);
                    return complete();
                }, VASTParser.resolveVastAdTagURI = function(vastAdTagUrl, originalUrl) {
                    return 0 === vastAdTagUrl.indexOf("//") ? "" + location.protocol + vastAdTagUrl : -1 === vastAdTagUrl.indexOf("://") ? originalUrl.slice(0, originalUrl.lastIndexOf("/")) + "/" + vastAdTagUrl : vastAdTagUrl;
                }, VASTParser.mergeWrapperAdData = function(wrappedAd, ad) {
                    var base, creative, eventName, i, j, k, l, len, len1, len2, len3, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, results, urls;
                    for (wrappedAd.errorURLTemplates = ad.errorURLTemplates.concat(wrappedAd.errorURLTemplates),
                    wrappedAd.impressionURLTemplates = ad.impressionURLTemplates.concat(wrappedAd.impressionURLTemplates),
                    wrappedAd.extensions = ad.extensions.concat(wrappedAd.extensions), i = 0, len = (ref = wrappedAd.creatives).length; i < len; i++) if (creative = ref[i],
                    null != (null != (ref1 = ad.trackingEvents) ? ref1[creative.type] : void 0)) for (eventName in ref2 = ad.trackingEvents[creative.type]) urls = ref2[eventName],
                    (base = creative.trackingEvents)[eventName] || (base[eventName] = []), creative.trackingEvents[eventName] = creative.trackingEvents[eventName].concat(urls);
                    if (null != (ref3 = ad.videoClickTrackingURLTemplates) ? ref3.length : void 0) for (j = 0,
                    len1 = (ref4 = wrappedAd.creatives).length; j < len1; j++) "linear" === (creative = ref4[j]).type && (creative.videoClickTrackingURLTemplates = creative.videoClickTrackingURLTemplates.concat(ad.videoClickTrackingURLTemplates));
                    if (null != (ref5 = ad.videoCustomClickURLTemplates) ? ref5.length : void 0) for (k = 0,
                    len2 = (ref6 = wrappedAd.creatives).length; k < len2; k++) "linear" === (creative = ref6[k]).type && (creative.videoCustomClickURLTemplates = creative.videoCustomClickURLTemplates.concat(ad.videoCustomClickURLTemplates));
                    if (null != ad.videoClickThroughURLTemplate) {
                        for (results = [], l = 0, len3 = (ref7 = wrappedAd.creatives).length; l < len3; l++) "linear" === (creative = ref7[l]).type && null == creative.videoClickThroughURLTemplate ? results.push(creative.videoClickThroughURLTemplate = ad.videoClickThroughURLTemplate) : results.push(void 0);
                        return results;
                    }
                }, VASTParser.childByName = function(node, name) {
                    var child, i, len, ref;
                    for (i = 0, len = (ref = node.childNodes).length; i < len; i++) if ((child = ref[i]).nodeName === name) return child;
                }, VASTParser.childsByName = function(node, name) {
                    var child, childs, i, len, ref;
                    for (childs = [], i = 0, len = (ref = node.childNodes).length; i < len; i++) (child = ref[i]).nodeName === name && childs.push(child);
                    return childs;
                }, VASTParser.parseAdElement = function(adElement) {
                    var adTypeElement, i, len, ref, ref1;
                    for (i = 0, len = (ref = adElement.childNodes).length; i < len; i++) if ("Wrapper" === (ref1 = (adTypeElement = ref[i]).nodeName) || "InLine" === ref1) {
                        if (this.copyNodeAttribute("id", adElement, adTypeElement), this.copyNodeAttribute("sequence", adElement, adTypeElement),
                        "Wrapper" === adTypeElement.nodeName) return this.parseWrapperElement(adTypeElement);
                        if ("InLine" === adTypeElement.nodeName) return this.parseInLineElement(adTypeElement);
                    }
                }, VASTParser.parseWrapperElement = function(wrapperElement) {
                    var ad, base, base1, eventName, i, item, j, k, l, len, len1, len2, len3, name1, ref, ref1, ref2, ref3, ref4, url, urls, wrapperCreativeElement, wrapperURLElement;
                    for (ad = this.parseInLineElement(wrapperElement), null != (wrapperURLElement = this.childByName(wrapperElement, "VASTAdTagURI")) ? ad.nextWrapperURL = this.parseNodeText(wrapperURLElement) : null != (wrapperURLElement = this.childByName(wrapperElement, "VASTAdTagURL")) && (ad.nextWrapperURL = this.parseNodeText(this.childByName(wrapperURLElement, "URL"))),
                    i = 0, len = (ref = ad.creatives).length; i < len; i++) if ("linear" === (ref1 = (wrapperCreativeElement = ref[i]).type) || "nonlinear" === ref1) {
                        if (null != wrapperCreativeElement.trackingEvents) for (eventName in ad.trackingEvents || (ad.trackingEvents = {}),
                        (base = ad.trackingEvents)[name1 = wrapperCreativeElement.type] || (base[name1] = {}),
                        ref2 = wrapperCreativeElement.trackingEvents) for (urls = ref2[eventName], (base1 = ad.trackingEvents[wrapperCreativeElement.type])[eventName] || (base1[eventName] = []),
                        j = 0, len1 = urls.length; j < len1; j++) url = urls[j], ad.trackingEvents[wrapperCreativeElement.type][eventName].push(url);
                        if (null != wrapperCreativeElement.videoClickTrackingURLTemplates) for (ad.videoClickTrackingURLTemplates || (ad.videoClickTrackingURLTemplates = []),
                        k = 0, len2 = (ref3 = wrapperCreativeElement.videoClickTrackingURLTemplates).length; k < len2; k++) item = ref3[k],
                        ad.videoClickTrackingURLTemplates.push(item);
                        if (null != wrapperCreativeElement.videoClickThroughURLTemplate && (ad.videoClickThroughURLTemplate = wrapperCreativeElement.videoClickThroughURLTemplate),
                        null != wrapperCreativeElement.videoCustomClickURLTemplates) for (ad.videoCustomClickURLTemplates || (ad.videoCustomClickURLTemplates = []),
                        l = 0, len3 = (ref4 = wrapperCreativeElement.videoCustomClickURLTemplates).length; l < len3; l++) item = ref4[l],
                        ad.videoCustomClickURLTemplates.push(item);
                    }
                    if (null != ad.nextWrapperURL) return ad;
                }, VASTParser.parseInLineElement = function(inLineElement) {
                    var ad, creative, creativeAttributes, creativeElement, creativeTypeElement, i, j, k, len, len1, len2, node, ref, ref1, ref2;
                    for ((ad = new VASTAd()).id = inLineElement.getAttribute("id") || null, ad.sequence = inLineElement.getAttribute("sequence") || null,
                    i = 0, len = (ref = inLineElement.childNodes).length; i < len; i++) switch ((node = ref[i]).nodeName) {
                      case "Error":
                        ad.errorURLTemplates.push(this.parseNodeText(node));
                        break;

                      case "Impression":
                        ad.impressionURLTemplates.push(this.parseNodeText(node));
                        break;

                      case "Creatives":
                        for (j = 0, len1 = (ref1 = this.childsByName(node, "Creative")).length; j < len1; j++) for (creativeAttributes = {
                            id: (creativeElement = ref1[j]).getAttribute("id") || null,
                            adId: this.parseCreativeAdIdAttribute(creativeElement),
                            sequence: creativeElement.getAttribute("sequence") || null,
                            apiFramework: creativeElement.getAttribute("apiFramework") || null
                        }, k = 0, len2 = (ref2 = creativeElement.childNodes).length; k < len2; k++) switch ((creativeTypeElement = ref2[k]).nodeName) {
                          case "Linear":
                            (creative = this.parseCreativeLinearElement(creativeTypeElement, creativeAttributes)) && ad.creatives.push(creative);
                            break;

                          case "NonLinearAds":
                            (creative = this.parseNonLinear(creativeTypeElement, creativeAttributes)) && ad.creatives.push(creative);
                            break;

                          case "CompanionAds":
                            (creative = this.parseCompanionAd(creativeTypeElement, creativeAttributes)) && ad.creatives.push(creative);
                        }
                        break;

                      case "Extensions":
                        this.parseExtension(ad.extensions, this.childsByName(node, "Extension"));
                        break;

                      case "AdSystem":
                        ad.system = {
                            value: this.parseNodeText(node),
                            version: node.getAttribute("version") || null
                        };
                        break;

                      case "AdTitle":
                        ad.title = this.parseNodeText(node);
                        break;

                      case "Description":
                        ad.description = this.parseNodeText(node);
                        break;

                      case "Advertiser":
                        ad.advertiser = this.parseNodeText(node);
                        break;

                      case "Pricing":
                        ad.pricing = {
                            value: this.parseNodeText(node),
                            model: node.getAttribute("model") || null,
                            currency: node.getAttribute("currency") || null
                        };
                        break;

                      case "Survey":
                        ad.survey = this.parseNodeText(node);
                    }
                    return ad;
                }, VASTParser.parseExtension = function(collection, extensions) {
                    var childNode, ext, extChild, extChildNodeAttr, extNode, extNodeAttr, i, j, k, l, len, len1, len2, len3, ref, ref1, ref2, results, txt;
                    for (results = [], i = 0, len = extensions.length; i < len; i++) {
                        if (extNode = extensions[i], ext = new VASTAdExtension(), extNode.attributes) for (j = 0,
                        len1 = (ref = extNode.attributes).length; j < len1; j++) extNodeAttr = ref[j], ext.attributes[extNodeAttr.nodeName] = extNodeAttr.nodeValue;
                        for (k = 0, len2 = (ref1 = extNode.childNodes).length; k < len2; k++) if (childNode = ref1[k],
                        txt = this.parseNodeText(childNode), "#comment" !== childNode.nodeName && "" !== txt) {
                            if ((extChild = new VASTAdExtensionChild()).name = childNode.nodeName, extChild.value = txt,
                            childNode.attributes) for (l = 0, len3 = (ref2 = childNode.attributes).length; l < len3; l++) extChildNodeAttr = ref2[l],
                            extChild.attributes[extChildNodeAttr.nodeName] = extChildNodeAttr.nodeValue;
                            ext.children.push(extChild);
                        }
                        results.push(collection.push(ext));
                    }
                    return results;
                }, VASTParser.parseCreativeLinearElement = function(creativeElement, creativeAttributes) {
                    var adParamsElement, base, clickTrackingElement, creative, customClickElement, eventName, htmlElement, i, icon, iconClickTrackingElement, iconClicksElement, iconElement, iconsElement, iframeElement, j, k, l, len, len1, len10, len2, len3, len4, len5, len6, len7, len8, len9, m, maintainAspectRatio, mediaFile, mediaFileElement, mediaFilesElement, n, o, offset, p, percent, q, r, ref, ref1, ref10, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, s, scalable, skipOffset, staticElement, trackingElement, trackingEventsElement, trackingURLTemplate, videoClicksElement;
                    if ((creative = new VASTCreativeLinear(creativeAttributes)).duration = this.parseDuration(this.parseNodeText(this.childByName(creativeElement, "Duration"))),
                    -1 === creative.duration && "Wrapper" !== creativeElement.parentNode.parentNode.parentNode.nodeName) return null;
                    if (null == (skipOffset = creativeElement.getAttribute("skipoffset")) ? creative.skipDelay = null : "%" === skipOffset.charAt(skipOffset.length - 1) ? (percent = parseInt(skipOffset, 10),
                    creative.skipDelay = creative.duration * (percent / 100)) : creative.skipDelay = this.parseDuration(skipOffset),
                    null != (videoClicksElement = this.childByName(creativeElement, "VideoClicks"))) {
                        for (creative.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(videoClicksElement, "ClickThrough")),
                        i = 0, len = (ref = this.childsByName(videoClicksElement, "ClickTracking")).length; i < len; i++) clickTrackingElement = ref[i],
                        creative.videoClickTrackingURLTemplates.push(this.parseNodeText(clickTrackingElement));
                        for (j = 0, len1 = (ref1 = this.childsByName(videoClicksElement, "CustomClick")).length; j < len1; j++) customClickElement = ref1[j],
                        creative.videoCustomClickURLTemplates.push(this.parseNodeText(customClickElement));
                    }
                    for (null != (adParamsElement = this.childByName(creativeElement, "AdParameters")) && (creative.adParameters = this.parseNodeText(adParamsElement)),
                    k = 0, len2 = (ref2 = this.childsByName(creativeElement, "TrackingEvents")).length; k < len2; k++) for (trackingEventsElement = ref2[k],
                    l = 0, len3 = (ref3 = this.childsByName(trackingEventsElement, "Tracking")).length; l < len3; l++) if (eventName = (trackingElement = ref3[l]).getAttribute("event"),
                    trackingURLTemplate = this.parseNodeText(trackingElement), null != eventName && null != trackingURLTemplate) {
                        if ("progress" === eventName) {
                            if (!(offset = trackingElement.getAttribute("offset"))) continue;
                            eventName = "%" === offset.charAt(offset.length - 1) ? "progress-" + offset : "progress-" + Math.round(this.parseDuration(offset));
                        }
                        null == (base = creative.trackingEvents)[eventName] && (base[eventName] = []), creative.trackingEvents[eventName].push(trackingURLTemplate);
                    }
                    for (m = 0, len4 = (ref4 = this.childsByName(creativeElement, "MediaFiles")).length; m < len4; m++) for (mediaFilesElement = ref4[m],
                    n = 0, len5 = (ref5 = this.childsByName(mediaFilesElement, "MediaFile")).length; n < len5; n++) mediaFileElement = ref5[n],
                    (mediaFile = new VASTMediaFile()).id = mediaFileElement.getAttribute("id"), mediaFile.fileURL = this.parseNodeText(mediaFileElement),
                    mediaFile.deliveryType = mediaFileElement.getAttribute("delivery"), mediaFile.codec = mediaFileElement.getAttribute("codec"),
                    mediaFile.mimeType = mediaFileElement.getAttribute("type"), mediaFile.apiFramework = mediaFileElement.getAttribute("apiFramework"),
                    mediaFile.bitrate = parseInt(mediaFileElement.getAttribute("bitrate") || 0), mediaFile.minBitrate = parseInt(mediaFileElement.getAttribute("minBitrate") || 0),
                    mediaFile.maxBitrate = parseInt(mediaFileElement.getAttribute("maxBitrate") || 0),
                    mediaFile.width = parseInt(mediaFileElement.getAttribute("width") || 0), mediaFile.height = parseInt(mediaFileElement.getAttribute("height") || 0),
                    (scalable = mediaFileElement.getAttribute("scalable")) && "string" == typeof scalable && ("true" === (scalable = scalable.toLowerCase()) ? mediaFile.scalable = !0 : "false" === scalable && (mediaFile.scalable = !1)),
                    (maintainAspectRatio = mediaFileElement.getAttribute("maintainAspectRatio")) && "string" == typeof maintainAspectRatio && ("true" === (maintainAspectRatio = maintainAspectRatio.toLowerCase()) ? mediaFile.maintainAspectRatio = !0 : "false" === maintainAspectRatio && (mediaFile.maintainAspectRatio = !1)),
                    creative.mediaFiles.push(mediaFile);
                    if (null != (iconsElement = this.childByName(creativeElement, "Icons"))) for (o = 0,
                    len6 = (ref6 = this.childsByName(iconsElement, "Icon")).length; o < len6; o++) {
                        for (iconElement = ref6[o], (icon = new VASTIcon()).program = iconElement.getAttribute("program"),
                        icon.height = parseInt(iconElement.getAttribute("height") || 0), icon.width = parseInt(iconElement.getAttribute("width") || 0),
                        icon.xPosition = this.parseXPosition(iconElement.getAttribute("xPosition")), icon.yPosition = this.parseYPosition(iconElement.getAttribute("yPosition")),
                        icon.apiFramework = iconElement.getAttribute("apiFramework"), icon.offset = this.parseDuration(iconElement.getAttribute("offset")),
                        icon.duration = this.parseDuration(iconElement.getAttribute("duration")), p = 0,
                        len7 = (ref7 = this.childsByName(iconElement, "HTMLResource")).length; p < len7; p++) htmlElement = ref7[p],
                        icon.type = htmlElement.getAttribute("creativeType") || "text/html", icon.htmlResource = this.parseNodeText(htmlElement);
                        for (q = 0, len8 = (ref8 = this.childsByName(iconElement, "IFrameResource")).length; q < len8; q++) iframeElement = ref8[q],
                        icon.type = iframeElement.getAttribute("creativeType") || 0, icon.iframeResource = this.parseNodeText(iframeElement);
                        for (r = 0, len9 = (ref9 = this.childsByName(iconElement, "StaticResource")).length; r < len9; r++) staticElement = ref9[r],
                        icon.type = staticElement.getAttribute("creativeType") || 0, icon.staticResource = this.parseNodeText(staticElement);
                        if (null != (iconClicksElement = this.childByName(iconElement, "IconClicks"))) for (icon.iconClickThroughURLTemplate = this.parseNodeText(this.childByName(iconClicksElement, "IconClickThrough")),
                        s = 0, len10 = (ref10 = this.childsByName(iconClicksElement, "IconClickTracking")).length; s < len10; s++) iconClickTrackingElement = ref10[s],
                        icon.iconClickTrackingURLTemplates.push(this.parseNodeText(iconClickTrackingElement));
                        icon.iconViewTrackingURLTemplate = this.parseNodeText(this.childByName(iconElement, "IconViewTracking")),
                        creative.icons.push(icon);
                    }
                    return creative;
                }, VASTParser.parseNonLinear = function(creativeElement, creativeAttributes) {
                    var adParamsElement, base, clickTrackingElement, creative, eventName, htmlElement, i, iframeElement, j, k, l, len, len1, len2, len3, len4, len5, len6, m, n, nonlinearAd, nonlinearResource, o, ref, ref1, ref2, ref3, ref4, ref5, ref6, staticElement, trackingElement, trackingEventsElement, trackingURLTemplate;
                    for (creative = new VASTCreativeNonLinear(creativeAttributes), i = 0, len = (ref = this.childsByName(creativeElement, "TrackingEvents")).length; i < len; i++) for (trackingEventsElement = ref[i],
                    j = 0, len1 = (ref1 = this.childsByName(trackingEventsElement, "Tracking")).length; j < len1; j++) eventName = (trackingElement = ref1[j]).getAttribute("event"),
                    trackingURLTemplate = this.parseNodeText(trackingElement), null != eventName && null != trackingURLTemplate && (null == (base = creative.trackingEvents)[eventName] && (base[eventName] = []),
                    creative.trackingEvents[eventName].push(trackingURLTemplate));
                    for (k = 0, len2 = (ref2 = this.childsByName(creativeElement, "NonLinear")).length; k < len2; k++) {
                        for (nonlinearResource = ref2[k], (nonlinearAd = new VASTNonLinear()).id = nonlinearResource.getAttribute("id") || null,
                        nonlinearAd.width = nonlinearResource.getAttribute("width"), nonlinearAd.height = nonlinearResource.getAttribute("height"),
                        nonlinearAd.expandedWidth = nonlinearResource.getAttribute("expandedWidth"), nonlinearAd.expandedHeight = nonlinearResource.getAttribute("expandedHeight"),
                        nonlinearAd.scalable = this.parseBoolean(nonlinearResource.getAttribute("scalable")),
                        nonlinearAd.maintainAspectRatio = this.parseBoolean(nonlinearResource.getAttribute("maintainAspectRatio")),
                        nonlinearAd.minSuggestedDuration = this.parseDuration(nonlinearResource.getAttribute("minSuggestedDuration")),
                        nonlinearAd.apiFramework = nonlinearResource.getAttribute("apiFramework"), l = 0,
                        len3 = (ref3 = this.childsByName(nonlinearResource, "HTMLResource")).length; l < len3; l++) htmlElement = ref3[l],
                        nonlinearAd.type = htmlElement.getAttribute("creativeType") || "text/html", nonlinearAd.htmlResource = this.parseNodeText(htmlElement);
                        for (m = 0, len4 = (ref4 = this.childsByName(nonlinearResource, "IFrameResource")).length; m < len4; m++) iframeElement = ref4[m],
                        nonlinearAd.type = iframeElement.getAttribute("creativeType") || 0, nonlinearAd.iframeResource = this.parseNodeText(iframeElement);
                        for (n = 0, len5 = (ref5 = this.childsByName(nonlinearResource, "StaticResource")).length; n < len5; n++) staticElement = ref5[n],
                        nonlinearAd.type = staticElement.getAttribute("creativeType") || 0, nonlinearAd.staticResource = this.parseNodeText(staticElement);
                        for (null != (adParamsElement = this.childByName(nonlinearResource, "AdParameters")) && (nonlinearAd.adParameters = this.parseNodeText(adParamsElement)),
                        nonlinearAd.nonlinearClickThroughURLTemplate = this.parseNodeText(this.childByName(nonlinearResource, "NonLinearClickThrough")),
                        o = 0, len6 = (ref6 = this.childsByName(nonlinearResource, "NonLinearClickTracking")).length; o < len6; o++) clickTrackingElement = ref6[o],
                        nonlinearAd.nonlinearClickTrackingURLTemplates.push(this.parseNodeText(clickTrackingElement));
                        creative.variations.push(nonlinearAd);
                    }
                    return creative;
                }, VASTParser.parseCompanionAd = function(creativeElement, creativeAttributes) {
                    var base, child, clickTrackingElement, companionAd, companionResource, creative, eventName, htmlElement, i, iframeElement, j, k, l, len, len1, len2, len3, len4, len5, len6, len7, m, n, o, p, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, staticElement, trackingElement, trackingEventsElement, trackingURLTemplate;
                    for (creative = new VASTCreativeCompanion(creativeAttributes), i = 0, len = (ref = this.childsByName(creativeElement, "Companion")).length; i < len; i++) {
                        for (companionResource = ref[i], (companionAd = new VASTCompanionAd()).id = companionResource.getAttribute("id") || null,
                        companionAd.width = companionResource.getAttribute("width"), companionAd.height = companionResource.getAttribute("height"),
                        companionAd.companionClickTrackingURLTemplates = [], j = 0, len1 = (ref1 = this.childsByName(companionResource, "HTMLResource")).length; j < len1; j++) htmlElement = ref1[j],
                        companionAd.type = htmlElement.getAttribute("creativeType") || "text/html", companionAd.htmlResource = this.parseNodeText(htmlElement);
                        for (k = 0, len2 = (ref2 = this.childsByName(companionResource, "IFrameResource")).length; k < len2; k++) iframeElement = ref2[k],
                        companionAd.type = iframeElement.getAttribute("creativeType") || 0, companionAd.iframeResource = this.parseNodeText(iframeElement);
                        for (l = 0, len3 = (ref3 = this.childsByName(companionResource, "StaticResource")).length; l < len3; l++) {
                            for (staticElement = ref3[l], companionAd.type = staticElement.getAttribute("creativeType") || 0,
                            m = 0, len4 = (ref4 = this.childsByName(companionResource, "AltText")).length; m < len4; m++) child = ref4[m],
                            companionAd.altText = this.parseNodeText(child);
                            companionAd.staticResource = this.parseNodeText(staticElement);
                        }
                        for (n = 0, len5 = (ref5 = this.childsByName(companionResource, "TrackingEvents")).length; n < len5; n++) for (trackingEventsElement = ref5[n],
                        o = 0, len6 = (ref6 = this.childsByName(trackingEventsElement, "Tracking")).length; o < len6; o++) eventName = (trackingElement = ref6[o]).getAttribute("event"),
                        trackingURLTemplate = this.parseNodeText(trackingElement), null != eventName && null != trackingURLTemplate && (null == (base = companionAd.trackingEvents)[eventName] && (base[eventName] = []),
                        companionAd.trackingEvents[eventName].push(trackingURLTemplate));
                        for (p = 0, len7 = (ref7 = this.childsByName(companionResource, "CompanionClickTracking")).length; p < len7; p++) clickTrackingElement = ref7[p],
                        companionAd.companionClickTrackingURLTemplates.push(this.parseNodeText(clickTrackingElement));
                        companionAd.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(companionResource, "CompanionClickThrough")),
                        companionAd.companionClickTrackingURLTemplate = this.parseNodeText(this.childByName(companionResource, "CompanionClickTracking")),
                        creative.variations.push(companionAd);
                    }
                    return creative;
                }, VASTParser.parseDuration = function(durationString) {
                    var durationComponents, hours, minutes, seconds, secondsAndMS;
                    return null == durationString ? -1 : VASTUtil.isNumeric(durationString) ? parseInt(durationString) : 3 !== (durationComponents = durationString.split(":")).length ? -1 : (secondsAndMS = durationComponents[2].split("."),
                    seconds = parseInt(secondsAndMS[0]), 2 === secondsAndMS.length && (seconds += parseFloat("0." + secondsAndMS[1])),
                    minutes = parseInt(60 * durationComponents[1]), hours = parseInt(60 * durationComponents[0] * 60),
                    isNaN(hours) || isNaN(minutes) || isNaN(seconds) || 3600 < minutes || 60 < seconds ? -1 : hours + minutes + seconds);
                }, VASTParser.parseXPosition = function(xPosition) {
                    return "left" === xPosition || "right" === xPosition ? xPosition : parseInt(xPosition || 0);
                }, VASTParser.parseYPosition = function(yPosition) {
                    return "top" === yPosition || "bottom" === yPosition ? yPosition : parseInt(yPosition || 0);
                }, VASTParser.parseBoolean = function(booleanString) {
                    return "true" === booleanString || "TRUE" === booleanString || "1" === booleanString;
                }, VASTParser.parseNodeText = function(node) {
                    return node && (node.textContent || node.text || "").trim();
                }, VASTParser.copyNodeAttribute = function(attributeName, nodeSource, nodeDestination) {
                    var attributeValue;
                    if (attributeValue = nodeSource.getAttribute(attributeName)) return nodeDestination.setAttribute(attributeName, attributeValue);
                }, VASTParser.parseCreativeAdIdAttribute = function(creativeElement) {
                    return creativeElement.getAttribute("AdID") || creativeElement.getAttribute("adID") || creativeElement.getAttribute("adId") || null;
                }, VASTParser;
            }(), module.exports = VASTParser;
        }, {
            "./ad": 2,
            "./companionad": 4,
            "./creative": 5,
            "./extension": 6,
            "./extensionchild": 7,
            "./icon": 8,
            "./mediafile": 10,
            "./nonlinear": 11,
            "./response": 13,
            "./urlhandler": 15,
            "./util": 18,
            events: 1
        } ],
        13: [ function(require, module, exports) {
            var VASTResponse;
            VASTResponse = function() {
                this.ads = [], this.errorURLTemplates = [];
            }, module.exports = VASTResponse;
        }, {} ],
        14: [ function(require, module, exports) {
            var EventEmitter, VASTClient, VASTCompanionAd, VASTCreativeLinear, VASTNonLinear, VASTTracker, VASTUtil, hasProp = {}.hasOwnProperty;
            VASTClient = require("./client"), VASTUtil = require("./util"), VASTCreativeLinear = require("./creative").VASTCreativeLinear,
            VASTNonLinear = require("./nonlinear"), VASTCompanionAd = require("./companionad"),
            EventEmitter = require("events").EventEmitter, VASTTracker = function(superClass) {
                function VASTTracker(ad, creative, variation) {
                    var eventName, events, ref;
                    for (eventName in this.ad = ad, this.creative = creative, this.variation = null != variation ? variation : null,
                    this.muted = !1, this.impressed = !1, this.skipable = !1, this.skipDelayDefault = -1,
                    this.trackingEvents = {}, this.emitAlwaysEvents = [ "creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close" ],
                    ref = this.creative.trackingEvents) events = ref[eventName], this.trackingEvents[eventName] = events.slice(0);
                    this.creative instanceof VASTCreativeLinear ? (this.setDuration(this.creative.duration),
                    this.skipDelay = this.creative.skipDelay, this.linear = !0, this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate,
                    this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates) : (this.skipDelay = -1,
                    this.linear = !1, this.variation && (this.variation instanceof VASTNonLinear ? (this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate,
                    this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates) : this.variation instanceof VASTCompanionAd && (this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate,
                    this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates))),
                    this.on("start", function() {
                        VASTClient.lastSuccessfullAd = +new Date();
                    });
                }
                return function(child, parent) {
                    for (var key in parent) hasProp.call(parent, key) && (child[key] = parent[key]);
                    function ctor() {
                        this.constructor = child;
                    }
                    ctor.prototype = parent.prototype, child.prototype = new ctor(), child.__super__ = parent.prototype;
                }(VASTTracker, EventEmitter), VASTTracker.off = function(eventName, cb) {
                    return this.removeListener(eventName, cb);
                }, VASTTracker.prototype.setDuration = function(duration) {
                    return this.assetDuration = duration, this.quartiles = {
                        firstQuartile: Math.round(25 * this.assetDuration) / 100,
                        midpoint: Math.round(50 * this.assetDuration) / 100,
                        thirdQuartile: Math.round(75 * this.assetDuration) / 100
                    };
                }, VASTTracker.prototype.setProgress = function(progress) {
                    var eventName, events, i, len, percent, quartile, ref, skipDelay, time;
                    if (-1 === (skipDelay = null === this.skipDelay ? this.skipDelayDefault : this.skipDelay) || this.skipable || (progress < skipDelay ? this.emit("skip-countdown", skipDelay - progress) : (this.skipable = !0,
                    this.emit("skip-countdown", 0))), this.linear && 0 < this.assetDuration) {
                        if (events = [], 0 < progress) for (quartile in events.push("start"), percent = Math.round(progress / this.assetDuration * 100),
                        events.push("progress-" + percent + "%"), events.push("progress-" + Math.round(progress)),
                        ref = this.quartiles) (time = ref[quartile]) <= progress && progress <= time + 1 && events.push(quartile);
                        for (i = 0, len = events.length; i < len; i++) eventName = events[i], this.track(eventName, !0);
                        progress < this.progress && this.track("rewind");
                    }
                    return this.progress = progress;
                }, VASTTracker.prototype.setMuted = function(muted) {
                    return this.muted !== muted && this.track(muted ? "mute" : "unmute"), this.muted = muted;
                }, VASTTracker.prototype.setPaused = function(paused) {
                    return this.paused !== paused && this.track(paused ? "pause" : "resume"), this.paused = paused;
                }, VASTTracker.prototype.setFullscreen = function(fullscreen) {
                    return this.fullscreen !== fullscreen && this.track(fullscreen ? "fullscreen" : "exitFullscreen"),
                    this.fullscreen = fullscreen;
                }, VASTTracker.prototype.setExpand = function(expanded) {
                    return this.expanded !== expanded && this.track(expanded ? "expand" : "collapse"),
                    this.expanded = expanded;
                }, VASTTracker.prototype.setSkipDelay = function(duration) {
                    if ("number" == typeof duration) return this.skipDelay = duration;
                }, VASTTracker.prototype.load = function() {
                    if (!this.impressed) return this.impressed = !0, this.trackURLs(this.ad.impressionURLTemplates),
                    this.track("creativeView");
                }, VASTTracker.prototype.errorWithCode = function(errorCode) {
                    return this.trackURLs(this.ad.errorURLTemplates, {
                        ERRORCODE: errorCode
                    });
                }, VASTTracker.prototype.complete = function() {
                    return this.track("complete");
                }, VASTTracker.prototype.close = function() {
                    return this.track(this.linear ? "closeLinear" : "close");
                }, VASTTracker.prototype.stop = function() {}, VASTTracker.prototype.skip = function() {
                    return this.track("skip"), this.trackingEvents = [];
                }, VASTTracker.prototype.click = function() {
                    var clickThroughURL, ref, variables;
                    if ((null != (ref = this.clickTrackingURLTemplates) ? ref.length : void 0) && this.trackURLs(this.clickTrackingURLTemplates),
                    null != this.clickThroughURLTemplate) return this.linear && (variables = {
                        CONTENTPLAYHEAD: this.progressFormated()
                    }), clickThroughURL = VASTUtil.resolveURLTemplates([ this.clickThroughURLTemplate ], variables)[0],
                    this.emit("clickthrough", clickThroughURL);
                }, VASTTracker.prototype.track = function(eventName, once) {
                    var idx, trackingURLTemplates;
                    null == once && (once = !1), "closeLinear" === eventName && null == this.trackingEvents[eventName] && null != this.trackingEvents.close && (eventName = "close"),
                    trackingURLTemplates = this.trackingEvents[eventName], idx = this.emitAlwaysEvents.indexOf(eventName),
                    null != trackingURLTemplates ? (this.emit(eventName, ""), this.trackURLs(trackingURLTemplates)) : -1 !== idx && this.emit(eventName, ""),
                    !0 === once && (delete this.trackingEvents[eventName], -1 < idx && this.emitAlwaysEvents.splice(idx, 1));
                }, VASTTracker.prototype.trackURLs = function(URLTemplates, variables) {
                    var ref;
                    return null == variables && (variables = {}), this.linear && (null != (null != (ref = this.creative.mediaFiles[0]) ? ref.fileURL : void 0) && (variables.ASSETURI = this.creative.mediaFiles[0].fileURL),
                    variables.CONTENTPLAYHEAD = this.progressFormated()), VASTUtil.track(URLTemplates, variables);
                }, VASTTracker.prototype.progressFormated = function() {
                    var h, m, s, seconds;
                    return (h = (seconds = parseInt(this.progress)) / 3600).length < 2 && (h = "0" + h),
                    (m = seconds / 60 % 60).length < 2 && (m = "0" + m), (s = seconds % 60).length < 2 && (s = "0" + m),
                    h + ":" + m + ":" + s + "." + parseInt(100 * (this.progress - seconds));
                }, VASTTracker;
            }(), module.exports = VASTTracker;
        }, {
            "./client": 3,
            "./companionad": 4,
            "./creative": 5,
            "./nonlinear": 11,
            "./util": 18,
            events: 1
        } ],
        15: [ function(require, module, exports) {
            var URLHandler, flash, xhr;
            xhr = require("./urlhandlers/xmlhttprequest"), flash = require("./urlhandlers/flash"),
            URLHandler = function() {
                function URLHandler() {}
                return URLHandler.get = function(url, options, cb) {
                    var ref, response;
                    return cb || ("function" == typeof options && (cb = options), options = {}), null != options.response ? (response = options.response,
                    delete options.response, cb(null, response)) : (null != (ref = options.urlhandler) ? ref.supported() : void 0) ? options.urlhandler.get(url, options, cb) : "undefined" == typeof window || null === window ? require("./urlhandlers/node").get(url, options, cb) : xhr.supported() ? xhr.get(url, options, cb) : flash.supported() ? flash.get(url, options, cb) : cb(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"));
                }, URLHandler;
            }(), module.exports = URLHandler;
        }, {
            "./urlhandlers/flash": 16,
            "./urlhandlers/xmlhttprequest": 17
        } ],
        16: [ function(require, module, exports) {
            var FlashURLHandler;
            FlashURLHandler = function() {
                function FlashURLHandler() {}
                return FlashURLHandler.xdr = function() {
                    var xdr;
                    return window.XDomainRequest && (xdr = new XDomainRequest()), xdr;
                }, FlashURLHandler.supported = function() {
                    return !!this.xdr();
                }, FlashURLHandler.get = function(url, options, cb) {
                    var xdr, xmlDocument;
                    return (xmlDocument = "function" == typeof window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) ? (xmlDocument.async = !1,
                    (xdr = this.xdr()).open("GET", url), xdr.timeout = options.timeout || 0, xdr.withCredentials = options.withCredentials || !1,
                    xdr.send(), xdr.onprogress = function() {}, xdr.onload = function() {
                        return xmlDocument.loadXML(xdr.responseText), cb(null, xmlDocument);
                    }) : cb(new Error("FlashURLHandler: Microsoft.XMLDOM format not supported"));
                }, FlashURLHandler;
            }(), module.exports = FlashURLHandler;
        }, {} ],
        17: [ function(require, module, exports) {
            var XHRURLHandler;
            XHRURLHandler = function() {
                function XHRURLHandler() {}
                return XHRURLHandler.xhr = function() {
                    var xhr;
                    if ("withCredentials" in (xhr = new window.XMLHttpRequest())) return xhr;
                }, XHRURLHandler.supported = function() {
                    return !!this.xhr();
                }, XHRURLHandler.get = function(url, options, cb) {
                    var xhr;
                    if ("https:" === window.location.protocol && 0 === url.indexOf("http://")) return cb(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
                    try {
                        return (xhr = this.xhr()).open("GET", url), xhr.timeout = options.timeout || 0,
                        xhr.withCredentials = options.withCredentials || !1, xhr.overrideMimeType && xhr.overrideMimeType("text/xml"),
                        xhr.onreadystatechange = function() {
                            if (4 === xhr.readyState) return 200 === xhr.status ? cb(null, xhr.responseXML) : cb({
                                error: 3,
                                error_code: "ERROR_URL",
                                msg: "XHRURLHandler: " + xhr.statusText
                            });
                        }, xhr.send();
                    } catch (error) {
                        return cb({
                            error: 3,
                            error_code: "ERROR_URL",
                            msg: "XHRURLHandler: " + xhr.statusText
                        });
                    }
                }, XHRURLHandler;
            }(), module.exports = XHRURLHandler;
        }, {} ],
        18: [ function(require, module, exports) {
            var VASTUtil;
            VASTUtil = function() {
                function VASTUtil() {}
                return VASTUtil.track = function(URLTemplates, variables) {
                    var URL, URLs, i, j, len, results;
                    for (results = [], j = 0, len = (URLs = this.resolveURLTemplates(URLTemplates, variables)).length; j < len; j++) URL = URLs[j],
                    "undefined" != typeof window && null !== window && (i = new Image(), results.push(i.src = URL));
                    return results;
                }, VASTUtil.resolveURLTemplates = function(URLTemplates, variables) {
                    var URLs, j, key, len, macro1, macro2, resolveURL, value;
                    for (null == variables && (variables = {}), URLs = [], null != variables.ASSETURI && (variables.ASSETURI = this.encodeURIComponentRFC3986(variables.ASSETURI)),
                    null != variables.CONTENTPLAYHEAD && (variables.CONTENTPLAYHEAD = this.encodeURIComponentRFC3986(variables.CONTENTPLAYHEAD)),
                    null == variables.ERRORCODE || /^[0-9]{3}$/.test(variables.ERRORCODE) || (variables.ERRORCODE = 900),
                    variables.CACHEBUSTING = this.leftpad(Math.round(1e8 * Math.random()).toString()),
                    variables.TIMESTAMP = this.encodeURIComponentRFC3986(new Date().toISOString()),
                    variables.RANDOM = variables.random = variables.CACHEBUSTING, j = 0, len = URLTemplates.length; j < len; j++) if (resolveURL = URLTemplates[j]) {
                        for (key in variables) value = variables[key], macro1 = "[" + key + "]", macro2 = "%%" + key + "%%",
                        resolveURL = (resolveURL = resolveURL.replace(macro1, value)).replace(macro2, value);
                        URLs.push(resolveURL);
                    }
                    return URLs;
                }, VASTUtil.encodeURIComponentRFC3986 = function(str) {
                    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
                        return "%" + c.charCodeAt(0).toString(16);
                    });
                }, VASTUtil.leftpad = function(str) {
                    return str.length < 8 ? function() {
                        var j, ref, results;
                        for (results = [], j = 0, ref = 8 - str.length; 0 <= ref ? j < ref : ref < j; 0 <= ref ? j++ : j--) results.push("0");
                        return results;
                    }().join("") + str : str;
                }, VASTUtil.storage = function() {
                    var data, storage;
                    try {
                        storage = "undefined" != typeof window && null !== window ? window.localStorage || window.sessionStorage : null;
                    } catch (error) {
                        error, storage = null;
                    }
                    return (null == storage || function(store) {
                        try {
                            if ("__VASTUtil__", store.setItem("__VASTUtil__", "__VASTUtil__"), "__VASTUtil__" !== store.getItem("__VASTUtil__")) return !0;
                        } catch (error) {
                            return error, !0;
                        }
                        return !1;
                    }(storage)) && (data = {}, storage = {
                        length: 0,
                        getItem: function(key) {
                            return data[key];
                        },
                        setItem: function(key, value) {
                            data[key] = value, this.length = Object.keys(data).length;
                        },
                        removeItem: function(key) {
                            delete data[key], this.length = Object.keys(data).length;
                        },
                        clear: function() {
                            data = {}, this.length = 0;
                        }
                    }), storage;
                }(), VASTUtil.isNumeric = function(n) {
                    return !isNaN(parseFloat(n)) && isFinite(n);
                }, VASTUtil;
            }(), module.exports = VASTUtil;
        }, {} ]
    }, {}, [ 9 ])(9);
}), function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : global.videojs = factory();
}(this, function() {
    var version = "6.7.3", commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function createCommonjsModule(fn, module) {
        return fn(module = {
            exports: {}
        }, module.exports), module.exports;
    }
    var doccy, window_1 = "undefined" != typeof window ? window : void 0 !== commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : {}, empty = {}, empty$1 = (Object.freeze || Object)({
        default: empty
    }), minDoc = empty$1 && empty || empty$1, topLevel = void 0 !== commonjsGlobal ? commonjsGlobal : "undefined" != typeof window ? window : {};
    "undefined" != typeof document ? doccy = document : (doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"]) || (doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"] = minDoc);
    var match, document_1 = doccy, USER_AGENT = window_1.navigator && window_1.navigator.userAgent || "", webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT), appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null, IS_IPAD = /iPad/i.test(USER_AGENT), IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD, IS_IPOD = /iPod/i.test(USER_AGENT), IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD, IOS_VERSION = (match = USER_AGENT.match(/OS (\d+)_/i)) && match[1] ? match[1] : null, IS_ANDROID = /Android/i.test(USER_AGENT), ANDROID_VERSION = function() {
        var match = USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!match) return null;
        var major = match[1] && parseFloat(match[1]), minor = match[2] && parseFloat(match[2]);
        return major && minor ? parseFloat(match[1] + "." + match[2]) : major || null;
    }(), IS_OLD_ANDROID = IS_ANDROID && /webkit/i.test(USER_AGENT) && ANDROID_VERSION < 2.3, IS_NATIVE_ANDROID = IS_ANDROID && ANDROID_VERSION < 5 && appleWebkitVersion < 537, IS_FIREFOX = /Firefox/i.test(USER_AGENT), IS_EDGE = /Edge/i.test(USER_AGENT), IS_CHROME = !IS_EDGE && /Chrome/i.test(USER_AGENT), CHROME_VERSION = function() {
        var match = USER_AGENT.match(/Chrome\/(\d+)/);
        return match && match[1] ? parseFloat(match[1]) : null;
    }(), IS_IE8 = /MSIE\s8\.0/.test(USER_AGENT), IE_VERSION = function() {
        var result = /MSIE\s(\d+)\.\d/.exec(USER_AGENT), version = result && parseFloat(result[1]);
        return !version && /Trident\/7.0/i.test(USER_AGENT) && /rv:11.0/.test(USER_AGENT) && (version = 11),
        version;
    }(), IS_SAFARI = /Safari/i.test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE, IS_ANY_SAFARI = IS_SAFARI || IS_IOS, TOUCH_ENABLED = isReal() && ("ontouchstart" in window_1 || window_1.DocumentTouch && window_1.document instanceof window_1.DocumentTouch), BACKGROUND_SIZE_SUPPORTED = isReal() && "backgroundSize" in window_1.document.createElement("video").style, browser = (Object.freeze || Object)({
        IS_IPAD: IS_IPAD,
        IS_IPHONE: IS_IPHONE,
        IS_IPOD: IS_IPOD,
        IS_IOS: IS_IOS,
        IOS_VERSION: IOS_VERSION,
        IS_ANDROID: IS_ANDROID,
        ANDROID_VERSION: ANDROID_VERSION,
        IS_OLD_ANDROID: IS_OLD_ANDROID,
        IS_NATIVE_ANDROID: IS_NATIVE_ANDROID,
        IS_FIREFOX: IS_FIREFOX,
        IS_EDGE: IS_EDGE,
        IS_CHROME: IS_CHROME,
        CHROME_VERSION: CHROME_VERSION,
        IS_IE8: IS_IE8,
        IE_VERSION: IE_VERSION,
        IS_SAFARI: IS_SAFARI,
        IS_ANY_SAFARI: IS_ANY_SAFARI,
        TOUCH_ENABLED: TOUCH_ENABLED,
        BACKGROUND_SIZE_SUPPORTED: BACKGROUND_SIZE_SUPPORTED
    }), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }, inherits = function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }, possibleConstructorReturn = function(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }, taggedTemplateLiteralLoose = function(strings, raw) {
        return strings.raw = raw, strings;
    }, toString = Object.prototype.toString, keys = function(object) {
        return isObject(object) ? Object.keys(object) : [];
    };
    function each(object, fn) {
        keys(object).forEach(function(key) {
            return fn(object[key], key);
        });
    }
    function assign(target) {
        for (var _len = arguments.length, sources = Array(1 < _len ? _len - 1 : 0), _key = 1; _key < _len; _key++) sources[_key - 1] = arguments[_key];
        return Object.assign ? Object.assign.apply(Object, [ target ].concat(sources)) : (sources.forEach(function(source) {
            source && each(source, function(value, key) {
                target[key] = value;
            });
        }), target);
    }
    function isObject(value) {
        return !!value && "object" === (void 0 === value ? "undefined" : _typeof(value));
    }
    function isPlain(value) {
        return isObject(value) && "[object Object]" === toString.call(value) && value.constructor === Object;
    }
    var log = void 0, level = "info", history = [], logByType = function(type, args) {
        var stringify = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !!IE_VERSION && IE_VERSION < 11, lvl = log.levels[level], lvlRegExp = new RegExp("^(" + lvl + ")$");
        if ("log" !== type && args.unshift(type.toUpperCase() + ":"), history && history.push([].concat(args)),
        args.unshift("VIDEOJS:"), window_1.console) {
            var fn = window_1.console[type];
            fn || "debug" !== type || (fn = window_1.console.info || window_1.console.log),
            fn && lvl && lvlRegExp.test(type) && (stringify && (args = args.map(function(a) {
                if (isObject(a) || Array.isArray(a)) try {
                    return JSON.stringify(a);
                } catch (x) {
                    return String(a);
                }
                return String(a);
            }).join(" ")), fn.apply ? fn[Array.isArray(args) ? "apply" : "call"](window_1.console, args) : fn(args));
        }
    };
    (log = function() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        logByType("log", args);
    }).levels = {
        all: "debug|log|warn|error",
        off: "",
        debug: "debug|log|warn|error",
        info: "log|warn|error",
        warn: "warn|error",
        error: "error",
        DEFAULT: level
    }, log.level = function(lvl) {
        if ("string" == typeof lvl) {
            if (!log.levels.hasOwnProperty(lvl)) throw new Error('"' + lvl + '" in not a valid log level');
            level = lvl;
        }
        return level;
    }, log.history = function() {
        return history ? [].concat(history) : [];
    }, log.history.clear = function() {
        history && (history.length = 0);
    }, log.history.disable = function() {
        null !== history && (history.length = 0, history = null);
    }, log.history.enable = function() {
        null === history && (history = []);
    }, log.error = function() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
        return logByType("error", args);
    }, log.warn = function() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
        return logByType("warn", args);
    }, log.debug = function() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
        return logByType("debug", args);
    };
    var log$1 = log;
    function clean(s) {
        return s.replace(/\n\r?\s*/g, "");
    }
    var tsml = function(sa) {
        for (var s = "", i = 0; i < arguments.length; i++) s += clean(sa[i]) + (arguments[i + 1] || "");
        return s;
    };
    function computedStyle(el, prop) {
        if (!el || !prop) return "";
        if ("function" == typeof window_1.getComputedStyle) {
            var cs = window_1.getComputedStyle(el);
            return cs ? cs[prop] : "";
        }
        return el.currentStyle[prop] || "";
    }
    var _templateObject = taggedTemplateLiteralLoose([ "Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "." ], [ "Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "." ]);
    function isNonBlankString(str) {
        return "string" == typeof str && /\S/.test(str);
    }
    function throwIfWhitespace(str) {
        if (/\s/.test(str)) throw new Error("class has illegal whitespace characters");
    }
    function isReal() {
        return document_1 === window_1.document && void 0 !== document_1.createElement;
    }
    function isEl(value) {
        return isObject(value) && 1 === value.nodeType;
    }
    function isInFrame() {
        try {
            return window_1.parent !== window_1.self;
        } catch (x) {
            return !0;
        }
    }
    function createQuerier(method) {
        return function(selector, context) {
            if (!isNonBlankString(selector)) return document_1[method](null);
            isNonBlankString(context) && (context = document_1.querySelector(context));
            var ctx = isEl(context) ? context : document_1;
            return ctx[method] && ctx[method](selector);
        };
    }
    function createEl() {
        var tagName = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "div", properties = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, attributes = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, content = arguments[3], el = document_1.createElement(tagName);
        return Object.getOwnPropertyNames(properties).forEach(function(propName) {
            var val = properties[propName];
            -1 !== propName.indexOf("aria-") || "role" === propName || "type" === propName ? (log$1.warn(tsml(_templateObject, propName, val)),
            el.setAttribute(propName, val)) : "textContent" === propName ? textContent(el, val) : el[propName] = val;
        }), Object.getOwnPropertyNames(attributes).forEach(function(attrName) {
            el.setAttribute(attrName, attributes[attrName]);
        }), content && appendContent(el, content), el;
    }
    function textContent(el, text) {
        return void 0 === el.textContent ? el.innerText = text : el.textContent = text,
        el;
    }
    function prependTo(child, parent) {
        parent.firstChild ? parent.insertBefore(child, parent.firstChild) : parent.appendChild(child);
    }
    function hasClass(element, classToCheck) {
        return throwIfWhitespace(classToCheck), element.classList ? element.classList.contains(classToCheck) : (className = classToCheck,
        new RegExp("(^|\\s)" + className + "($|\\s)")).test(element.className);
        var className;
    }
    function addClass(element, classToAdd) {
        return element.classList ? element.classList.add(classToAdd) : hasClass(element, classToAdd) || (element.className = (element.className + " " + classToAdd).trim()),
        element;
    }
    function removeClass(element, classToRemove) {
        return element.classList ? element.classList.remove(classToRemove) : (throwIfWhitespace(classToRemove),
        element.className = element.className.split(/\s+/).filter(function(c) {
            return c !== classToRemove;
        }).join(" ")), element;
    }
    function toggleClass(element, classToToggle, predicate) {
        var has = hasClass(element, classToToggle);
        if ("function" == typeof predicate && (predicate = predicate(element, classToToggle)),
        "boolean" != typeof predicate && (predicate = !has), predicate !== has) return predicate ? addClass(element, classToToggle) : removeClass(element, classToToggle),
        element;
    }
    function setAttributes(el, attributes) {
        Object.getOwnPropertyNames(attributes).forEach(function(attrName) {
            var attrValue = attributes[attrName];
            null == attrValue || !1 === attrValue ? el.removeAttribute(attrName) : el.setAttribute(attrName, !0 === attrValue ? "" : attrValue);
        });
    }
    function getAttributes(tag) {
        var obj = {}, knownBooleans = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
        if (tag && tag.attributes && 0 < tag.attributes.length) for (var attrs = tag.attributes, i = attrs.length - 1; 0 <= i; i--) {
            var attrName = attrs[i].name, attrVal = attrs[i].value;
            "boolean" != typeof tag[attrName] && -1 === knownBooleans.indexOf("," + attrName + ",") || (attrVal = null !== attrVal),
            obj[attrName] = attrVal;
        }
        return obj;
    }
    function getAttribute(el, attribute) {
        return el.getAttribute(attribute);
    }
    function setAttribute(el, attribute, value) {
        el.setAttribute(attribute, value);
    }
    function removeAttribute(el, attribute) {
        el.removeAttribute(attribute);
    }
    function blockTextSelection() {
        document_1.body.focus(), document_1.onselectstart = function() {
            return !1;
        };
    }
    function unblockTextSelection() {
        document_1.onselectstart = function() {
            return !0;
        };
    }
    function getBoundingClientRect(el) {
        if (el && el.getBoundingClientRect && el.parentNode) {
            var rect = el.getBoundingClientRect(), result = {};
            return [ "bottom", "height", "left", "right", "top", "width" ].forEach(function(k) {
                void 0 !== rect[k] && (result[k] = rect[k]);
            }), result.height || (result.height = parseFloat(computedStyle(el, "height"))),
            result.width || (result.width = parseFloat(computedStyle(el, "width"))), result;
        }
    }
    function findPosition(el) {
        var box = void 0;
        if (el.getBoundingClientRect && el.parentNode && (box = el.getBoundingClientRect()),
        !box) return {
            left: 0,
            top: 0
        };
        var docEl = document_1.documentElement, body = document_1.body, clientLeft = docEl.clientLeft || body.clientLeft || 0, scrollLeft = window_1.pageXOffset || body.scrollLeft, left = box.left + scrollLeft - clientLeft, clientTop = docEl.clientTop || body.clientTop || 0, scrollTop = window_1.pageYOffset || body.scrollTop, top = box.top + scrollTop - clientTop;
        return {
            left: Math.round(left),
            top: Math.round(top)
        };
    }
    function getPointerPosition(el, event) {
        var position = {}, box = findPosition(el), boxW = el.offsetWidth, boxH = el.offsetHeight, boxY = box.top, boxX = box.left, pageY = event.pageY, pageX = event.pageX;
        return event.changedTouches && (pageX = event.changedTouches[0].pageX, pageY = event.changedTouches[0].pageY),
        position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH)), position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW)),
        position;
    }
    function isTextNode(value) {
        return isObject(value) && 3 === value.nodeType;
    }
    function emptyEl(el) {
        for (;el.firstChild; ) el.removeChild(el.firstChild);
        return el;
    }
    function normalizeContent(content) {
        return "function" == typeof content && (content = content()), (Array.isArray(content) ? content : [ content ]).map(function(value) {
            return "function" == typeof value && (value = value()), isEl(value) || isTextNode(value) ? value : "string" == typeof value && /\S/.test(value) ? document_1.createTextNode(value) : void 0;
        }).filter(function(value) {
            return value;
        });
    }
    function appendContent(el, content) {
        return normalizeContent(content).forEach(function(node) {
            return el.appendChild(node);
        }), el;
    }
    function insertContent(el, content) {
        return appendContent(emptyEl(el), content);
    }
    function isSingleLeftClick(event) {
        return void 0 === event.button && void 0 === event.buttons || (0 === event.button && void 0 === event.buttons || (9 === IE_VERSION || 0 === event.button && 1 === event.buttons));
    }
    var $ = createQuerier("querySelector"), $$ = createQuerier("querySelectorAll"), Dom = (Object.freeze || Object)({
        isReal: isReal,
        isEl: isEl,
        isInFrame: isInFrame,
        createEl: createEl,
        textContent: textContent,
        prependTo: prependTo,
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        setAttributes: setAttributes,
        getAttributes: getAttributes,
        getAttribute: getAttribute,
        setAttribute: setAttribute,
        removeAttribute: removeAttribute,
        blockTextSelection: blockTextSelection,
        unblockTextSelection: unblockTextSelection,
        getBoundingClientRect: getBoundingClientRect,
        findPosition: findPosition,
        getPointerPosition: getPointerPosition,
        isTextNode: isTextNode,
        emptyEl: emptyEl,
        normalizeContent: normalizeContent,
        appendContent: appendContent,
        insertContent: insertContent,
        isSingleLeftClick: isSingleLeftClick,
        $: $,
        $$: $$
    }), _guid = 1;
    function newGUID() {
        return _guid++;
    }
    var elData = {}, elIdAttr = "vdata" + new Date().getTime();
    function getData(el) {
        var id = el[elIdAttr];
        return id || (id = el[elIdAttr] = newGUID()), elData[id] || (elData[id] = {}), elData[id];
    }
    function hasData(el) {
        var id = el[elIdAttr];
        return !!id && !!Object.getOwnPropertyNames(elData[id]).length;
    }
    function removeData(el) {
        var id = el[elIdAttr];
        if (id) {
            delete elData[id];
            try {
                delete el[elIdAttr];
            } catch (e) {
                el.removeAttribute ? el.removeAttribute(elIdAttr) : el[elIdAttr] = null;
            }
        }
    }
    function _cleanUpEvents(elem, type) {
        var data = getData(elem);
        0 === data.handlers[type].length && (delete data.handlers[type], elem.removeEventListener ? elem.removeEventListener(type, data.dispatcher, !1) : elem.detachEvent && elem.detachEvent("on" + type, data.dispatcher)),
        Object.getOwnPropertyNames(data.handlers).length <= 0 && (delete data.handlers,
        delete data.dispatcher, delete data.disabled), 0 === Object.getOwnPropertyNames(data).length && removeData(elem);
    }
    function _handleMultipleEvents(fn, elem, types, callback) {
        types.forEach(function(type) {
            fn(elem, type, callback);
        });
    }
    function fixEvent(event) {
        function returnTrue() {
            return !0;
        }
        function returnFalse() {
            return !1;
        }
        if (!event || !event.isPropagationStopped) {
            var old = event || window_1.event;
            for (var key in event = {}, old) "layerX" !== key && "layerY" !== key && "keyLocation" !== key && "webkitMovementX" !== key && "webkitMovementY" !== key && ("returnValue" === key && old.preventDefault || (event[key] = old[key]));
            if (event.target || (event.target = event.srcElement || document_1), event.relatedTarget || (event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement),
            event.preventDefault = function() {
                old.preventDefault && old.preventDefault(), event.returnValue = !1, old.returnValue = !1,
                event.defaultPrevented = !0;
            }, event.defaultPrevented = !1, event.stopPropagation = function() {
                old.stopPropagation && old.stopPropagation(), event.cancelBubble = !0, old.cancelBubble = !0,
                event.isPropagationStopped = returnTrue;
            }, event.isPropagationStopped = returnFalse, event.stopImmediatePropagation = function() {
                old.stopImmediatePropagation && old.stopImmediatePropagation(), event.isImmediatePropagationStopped = returnTrue,
                event.stopPropagation();
            }, event.isImmediatePropagationStopped = returnFalse, null !== event.clientX && void 0 !== event.clientX) {
                var doc = document_1.documentElement, body = document_1.body;
                event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0),
                event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            }
            event.which = event.charCode || event.keyCode, null !== event.button && void 0 !== event.button && (event.button = 1 & event.button ? 0 : 4 & event.button ? 1 : 2 & event.button ? 2 : 0);
        }
        return event;
    }
    var _supportsPassive = !1;
    !function() {
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    _supportsPassive = !0;
                }
            });
            window_1.addEventListener("test", null, opts), window_1.removeEventListener("test", null, opts);
        } catch (e) {}
    }();
    var passiveEvents = [ "touchstart", "touchmove" ];
    function on(elem, type, fn) {
        if (Array.isArray(type)) return _handleMultipleEvents(on, elem, type, fn);
        var data = getData(elem);
        if (data.handlers || (data.handlers = {}), data.handlers[type] || (data.handlers[type] = []),
        fn.guid || (fn.guid = newGUID()), data.handlers[type].push(fn), data.dispatcher || (data.disabled = !1,
        data.dispatcher = function(event, hash) {
            if (!data.disabled) {
                event = fixEvent(event);
                var handlers = data.handlers[event.type];
                if (handlers) for (var handlersCopy = handlers.slice(0), m = 0, n = handlersCopy.length; m < n && !event.isImmediatePropagationStopped(); m++) try {
                    handlersCopy[m].call(elem, event, hash);
                } catch (e) {
                    log$1.error(e);
                }
            }
        }), 1 === data.handlers[type].length) if (elem.addEventListener) {
            var options = !1;
            _supportsPassive && -1 < passiveEvents.indexOf(type) && (options = {
                passive: !0
            }), elem.addEventListener(type, data.dispatcher, options);
        } else elem.attachEvent && elem.attachEvent("on" + type, data.dispatcher);
    }
    function off(elem, type, fn) {
        if (hasData(elem)) {
            var data = getData(elem);
            if (data.handlers) {
                if (Array.isArray(type)) return _handleMultipleEvents(off, elem, type, fn);
                var removeType = function(el, t) {
                    data.handlers[t] = [], _cleanUpEvents(el, t);
                };
                if (void 0 !== type) {
                    var handlers = data.handlers[type];
                    if (handlers) if (fn) {
                        if (fn.guid) for (var n = 0; n < handlers.length; n++) handlers[n].guid === fn.guid && handlers.splice(n--, 1);
                        _cleanUpEvents(elem, type);
                    } else removeType(elem, type);
                } else for (var t in data.handlers) Object.prototype.hasOwnProperty.call(data.handlers || {}, t) && removeType(elem, t);
            }
        }
    }
    function trigger(elem, event, hash) {
        var elemData = hasData(elem) ? getData(elem) : {}, parent = elem.parentNode || elem.ownerDocument;
        if ("string" == typeof event && (event = {
            type: event,
            target: elem
        }), event = fixEvent(event), elemData.dispatcher && elemData.dispatcher.call(elem, event, hash),
        parent && !event.isPropagationStopped() && !0 === event.bubbles) trigger.call(null, parent, event, hash); else if (!parent && !event.defaultPrevented) {
            var targetData = getData(event.target);
            event.target[event.type] && (targetData.disabled = !0, "function" == typeof event.target[event.type] && event.target[event.type](),
            targetData.disabled = !1);
        }
        return !event.defaultPrevented;
    }
    function one(elem, type, fn) {
        if (Array.isArray(type)) return _handleMultipleEvents(one, elem, type, fn);
        var func = function func() {
            off(elem, type, func), fn.apply(this, arguments);
        };
        func.guid = fn.guid = fn.guid || newGUID(), on(elem, type, func);
    }
    var Events = (Object.freeze || Object)({
        fixEvent: fixEvent,
        on: on,
        off: off,
        trigger: trigger,
        one: one
    }), _windowLoaded = !1, videojs$2 = void 0, autoSetup = function() {
        if (isReal()) {
            var vids = document_1.getElementsByTagName("video"), audios = document_1.getElementsByTagName("audio"), divs = document_1.getElementsByTagName("video-js"), mediaEls = [];
            if (vids && 0 < vids.length) for (var i = 0, e = vids.length; i < e; i++) mediaEls.push(vids[i]);
            if (audios && 0 < audios.length) for (var _i = 0, _e = audios.length; _i < _e; _i++) mediaEls.push(audios[_i]);
            if (divs && 0 < divs.length) for (var _i2 = 0, _e2 = divs.length; _i2 < _e2; _i2++) mediaEls.push(divs[_i2]);
            if (mediaEls && 0 < mediaEls.length) for (var _i3 = 0, _e3 = mediaEls.length; _i3 < _e3; _i3++) {
                var mediaEl = mediaEls[_i3];
                if (!mediaEl || !mediaEl.getAttribute) {
                    autoSetupTimeout(1);
                    break;
                }
                void 0 === mediaEl.player && null !== mediaEl.getAttribute("data-setup") && videojs$2(mediaEl);
            } else _windowLoaded || autoSetupTimeout(1);
        }
    };
    function autoSetupTimeout(wait, vjs) {
        vjs && (videojs$2 = vjs), window_1.setTimeout(autoSetup, wait);
    }
    isReal() && "complete" === document_1.readyState ? _windowLoaded = !0 : one(window_1, "load", function() {
        _windowLoaded = !0;
    });
    var createStyleElement = function(className) {
        var style = document_1.createElement("style");
        return style.className = className, style;
    }, setTextContent = function(el, content) {
        el.styleSheet ? el.styleSheet.cssText = content : el.textContent = content;
    }, bind = function(context, fn, uid) {
        fn.guid || (fn.guid = newGUID());
        var bound = function() {
            return fn.apply(context, arguments);
        };
        return bound.guid = uid ? uid + "_" + fn.guid : fn.guid, bound;
    }, throttle = function(fn, wait) {
        var last = Date.now();
        return function() {
            var now = Date.now();
            wait <= now - last && (fn.apply(void 0, arguments), last = now);
        };
    }, debounce = function(func, wait, immediate) {
        var context = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : window_1, timeout = void 0;
        return function() {
            var self = this, args = arguments, _later = function() {
                _later = timeout = null, immediate || func.apply(self, args);
            };
            !timeout && immediate && func.apply(self, args), context.clearTimeout(timeout),
            timeout = context.setTimeout(_later, wait);
        };
    }, EventTarget = function() {};
    EventTarget.prototype.allowedEvents_ = {}, EventTarget.prototype.addEventListener = EventTarget.prototype.on = function(type, fn) {
        var ael = this.addEventListener;
        this.addEventListener = function() {}, on(this, type, fn), this.addEventListener = ael;
    }, EventTarget.prototype.removeEventListener = EventTarget.prototype.off = function(type, fn) {
        off(this, type, fn);
    }, EventTarget.prototype.one = function(type, fn) {
        var ael = this.addEventListener;
        this.addEventListener = function() {}, one(this, type, fn), this.addEventListener = ael;
    }, EventTarget.prototype.dispatchEvent = EventTarget.prototype.trigger = function(event) {
        var type = event.type || event;
        "string" == typeof event && (event = {
            type: type
        }), event = fixEvent(event), this.allowedEvents_[type] && this["on" + type] && this["on" + type](event),
        trigger(this, event);
    };
    var isEvented = function(object) {
        return object instanceof EventTarget || !!object.eventBusEl_ && [ "on", "one", "off", "trigger" ].every(function(k) {
            return "function" == typeof object[k];
        });
    }, isValidEventType = function(type) {
        return "string" == typeof type && /\S/.test(type) || Array.isArray(type) && !!type.length;
    }, validateTarget = function(target) {
        if (!target.nodeName && !isEvented(target)) throw new Error("Invalid target; must be a DOM node or evented object.");
    }, validateEventType = function(type) {
        if (!isValidEventType(type)) throw new Error("Invalid event type; must be a non-empty string or array.");
    }, validateListener = function(listener) {
        if ("function" != typeof listener) throw new Error("Invalid listener; must be a function.");
    }, normalizeListenArgs = function(self, args) {
        var isTargetingSelf = args.length < 3 || args[0] === self || args[0] === self.eventBusEl_, target = void 0, type = void 0, listener = void 0;
        return isTargetingSelf ? (target = self.eventBusEl_, 3 <= args.length && args.shift(),
        type = args[0], listener = args[1]) : (target = args[0], type = args[1], listener = args[2]),
        validateTarget(target), validateEventType(type), validateListener(listener), {
            isTargetingSelf: isTargetingSelf,
            target: target,
            type: type,
            listener: listener = bind(self, listener)
        };
    }, listen = function(target, method, type, listener) {
        validateTarget(target), target.nodeName ? Events[method](target, type, listener) : target[method](type, listener);
    }, EventedMixin = {
        on: function() {
            for (var _this = this, _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            var _normalizeListenArgs = normalizeListenArgs(this, args), isTargetingSelf = _normalizeListenArgs.isTargetingSelf, target = _normalizeListenArgs.target, type = _normalizeListenArgs.type, listener = _normalizeListenArgs.listener;
            if (listen(target, "on", type, listener), !isTargetingSelf) {
                var removeListenerOnDispose = function() {
                    return _this.off(target, type, listener);
                };
                removeListenerOnDispose.guid = listener.guid;
                var removeRemoverOnTargetDispose = function() {
                    return _this.off("dispose", removeListenerOnDispose);
                };
                removeRemoverOnTargetDispose.guid = listener.guid, listen(this, "on", "dispose", removeListenerOnDispose),
                listen(target, "on", "dispose", removeRemoverOnTargetDispose);
            }
        },
        one: function() {
            for (var _this2 = this, _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
            var _normalizeListenArgs2 = normalizeListenArgs(this, args), isTargetingSelf = _normalizeListenArgs2.isTargetingSelf, target = _normalizeListenArgs2.target, type = _normalizeListenArgs2.type, listener = _normalizeListenArgs2.listener;
            if (isTargetingSelf) listen(target, "one", type, listener); else {
                var wrapper = function wrapper() {
                    for (var _len3 = arguments.length, largs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) largs[_key3] = arguments[_key3];
                    _this2.off(target, type, wrapper), listener.apply(null, largs);
                };
                wrapper.guid = listener.guid, listen(target, "one", type, wrapper);
            }
        },
        off: function(targetOrType, typeOrListener, listener) {
            if (!targetOrType || isValidEventType(targetOrType)) off(this.eventBusEl_, targetOrType, typeOrListener); else {
                var target = targetOrType, type = typeOrListener;
                validateTarget(target), validateEventType(type), validateListener(listener), listener = bind(this, listener),
                this.off("dispose", listener), target.nodeName ? (off(target, type, listener), off(target, "dispose", listener)) : isEvented(target) && (target.off(type, listener),
                target.off("dispose", listener));
            }
        },
        trigger: function(event, hash) {
            return trigger(this.eventBusEl_, event, hash);
        }
    };
    function evented(target) {
        var eventBusKey = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).eventBusKey;
        if (eventBusKey) {
            if (!target[eventBusKey].nodeName) throw new Error('The eventBusKey "' + eventBusKey + '" does not refer to an element.');
            target.eventBusEl_ = target[eventBusKey];
        } else target.eventBusEl_ = createEl("span", {
            className: "vjs-event-bus"
        });
        return assign(target, EventedMixin), target.on("dispose", function() {
            target.off(), window_1.setTimeout(function() {
                target.eventBusEl_ = null;
            }, 0);
        }), target;
    }
    var StatefulMixin = {
        state: {},
        setState: function(stateUpdates) {
            var _this = this;
            "function" == typeof stateUpdates && (stateUpdates = stateUpdates());
            var changes = void 0;
            return each(stateUpdates, function(value, key) {
                _this.state[key] !== value && ((changes = changes || {})[key] = {
                    from: _this.state[key],
                    to: value
                }), _this.state[key] = value;
            }), changes && isEvented(this) && this.trigger({
                changes: changes,
                type: "statechanged"
            }), changes;
        }
    };
    function stateful(target, defaultState) {
        return assign(target, StatefulMixin), target.state = assign({}, target.state, defaultState),
        "function" == typeof target.handleStateChanged && isEvented(target) && target.on("statechanged", target.handleStateChanged),
        target;
    }
    function toTitleCase(string) {
        return "string" != typeof string ? string : string.charAt(0).toUpperCase() + string.slice(1);
    }
    function mergeOptions() {
        for (var result = {}, _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) sources[_key] = arguments[_key];
        return sources.forEach(function(source) {
            source && each(source, function(value, key) {
                isPlain(value) ? (isPlain(result[key]) || (result[key] = {}), result[key] = mergeOptions(result[key], value)) : result[key] = value;
            });
        }), result;
    }
    var Component = function() {
        function Component(player, options, ready) {
            if (classCallCheck(this, Component), !player && this.play ? this.player_ = player = this : this.player_ = player,
            this.options_ = mergeOptions({}, this.options_), options = this.options_ = mergeOptions(this.options_, options),
            this.id_ = options.id || options.el && options.el.id, !this.id_) {
                var id = player && player.id && player.id() || "no_player";
                this.id_ = id + "_component_" + newGUID();
            }
            this.name_ = options.name || null, options.el ? this.el_ = options.el : !1 !== options.createEl && (this.el_ = this.createEl()),
            !1 !== options.evented && evented(this, {
                eventBusKey: this.el_ ? "el_" : null
            }), stateful(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {},
            !(this.childNameIndex_ = {}) !== options.initChildren && this.initChildren(), this.ready(ready),
            !1 !== options.reportTouchActivity && this.enableTouchActivity();
        }
        return Component.prototype.dispose = function() {
            if (this.trigger({
                type: "dispose",
                bubbles: !1
            }), this.children_) for (var i = this.children_.length - 1; 0 <= i; i--) this.children_[i].dispose && this.children_[i].dispose();
            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_),
            removeData(this.el_), this.el_ = null), this.player_ = null;
        }, Component.prototype.player = function() {
            return this.player_;
        }, Component.prototype.options = function(obj) {
            return log$1.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),
            obj && (this.options_ = mergeOptions(this.options_, obj)), this.options_;
        }, Component.prototype.el = function() {
            return this.el_;
        }, Component.prototype.createEl = function(tagName, properties, attributes) {
            return createEl(tagName, properties, attributes);
        }, Component.prototype.localize = function(string, tokens) {
            var defaultValue = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : string, code = this.player_.language && this.player_.language(), languages = this.player_.languages && this.player_.languages(), language = languages && languages[code], primaryCode = code && code.split("-")[0], primaryLang = languages && languages[primaryCode], localizedString = defaultValue;
            return language && language[string] ? localizedString = language[string] : primaryLang && primaryLang[string] && (localizedString = primaryLang[string]),
            tokens && (localizedString = localizedString.replace(/\{(\d+)\}/g, function(match, index) {
                var value = tokens[index - 1], ret = value;
                return void 0 === value && (ret = match), ret;
            })), localizedString;
        }, Component.prototype.contentEl = function() {
            return this.contentEl_ || this.el_;
        }, Component.prototype.id = function() {
            return this.id_;
        }, Component.prototype.name = function() {
            return this.name_;
        }, Component.prototype.children = function() {
            return this.children_;
        }, Component.prototype.getChildById = function(id) {
            return this.childIndex_[id];
        }, Component.prototype.getChild = function(name) {
            if (name) return name = toTitleCase(name), this.childNameIndex_[name];
        }, Component.prototype.addChild = function(child) {
            var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, index = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.children_.length, component = void 0, componentName = void 0;
            if ("string" == typeof child) {
                componentName = toTitleCase(child);
                var componentClassName = options.componentClass || componentName;
                options.name = componentName;
                var ComponentClass = Component.getComponent(componentClassName);
                if (!ComponentClass) throw new Error("Component " + componentClassName + " does not exist");
                if ("function" != typeof ComponentClass) return null;
                component = new ComponentClass(this.player_ || this, options);
            } else component = child;
            if (this.children_.splice(index, 0, component), "function" == typeof component.id && (this.childIndex_[component.id()] = component),
            (componentName = componentName || component.name && toTitleCase(component.name())) && (this.childNameIndex_[componentName] = component),
            "function" == typeof component.el && component.el()) {
                var refNode = this.contentEl().children[index] || null;
                this.contentEl().insertBefore(component.el(), refNode);
            }
            return component;
        }, Component.prototype.removeChild = function(component) {
            if ("string" == typeof component && (component = this.getChild(component)), component && this.children_) {
                for (var childFound = !1, i = this.children_.length - 1; 0 <= i; i--) if (this.children_[i] === component) {
                    childFound = !0, this.children_.splice(i, 1);
                    break;
                }
                if (childFound) {
                    this.childIndex_[component.id()] = null, this.childNameIndex_[component.name()] = null;
                    var compEl = component.el();
                    compEl && compEl.parentNode === this.contentEl() && this.contentEl().removeChild(component.el());
                }
            }
        }, Component.prototype.initChildren = function() {
            var _this = this, children = this.options_.children;
            if (children) {
                var parentOptions = this.options_, workingChildren = void 0, Tech = Component.getComponent("Tech");
                (workingChildren = Array.isArray(children) ? children : Object.keys(children)).concat(Object.keys(this.options_).filter(function(child) {
                    return !workingChildren.some(function(wchild) {
                        return "string" == typeof wchild ? child === wchild : child === wchild.name;
                    });
                })).map(function(child) {
                    var name = void 0, opts = void 0;
                    return "string" == typeof child ? opts = children[name = child] || _this.options_[name] || {} : (name = child.name,
                    opts = child), {
                        name: name,
                        opts: opts
                    };
                }).filter(function(child) {
                    var c = Component.getComponent(child.opts.componentClass || toTitleCase(child.name));
                    return c && !Tech.isTech(c);
                }).forEach(function(child) {
                    var name = child.name, opts = child.opts;
                    if (void 0 !== parentOptions[name] && (opts = parentOptions[name]), !1 !== opts) {
                        !0 === opts && (opts = {}), opts.playerOptions = _this.options_.playerOptions;
                        var newChild = _this.addChild(name, opts);
                        newChild && (_this[name] = newChild);
                    }
                });
            }
        }, Component.prototype.buildCSSClass = function() {
            return "";
        }, Component.prototype.ready = function(fn) {
            var sync = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            if (fn) return this.isReady_ ? void (sync ? fn.call(this) : this.setTimeout(fn, 1)) : (this.readyQueue_ = this.readyQueue_ || [],
            void this.readyQueue_.push(fn));
        }, Component.prototype.triggerReady = function() {
            this.isReady_ = !0, this.setTimeout(function() {
                var readyQueue = this.readyQueue_;
                this.readyQueue_ = [], readyQueue && 0 < readyQueue.length && readyQueue.forEach(function(fn) {
                    fn.call(this);
                }, this), this.trigger("ready");
            }, 1);
        }, Component.prototype.$ = function(selector, context) {
            return $(selector, context || this.contentEl());
        }, Component.prototype.$$ = function(selector, context) {
            return $$(selector, context || this.contentEl());
        }, Component.prototype.hasClass = function(classToCheck) {
            return hasClass(this.el_, classToCheck);
        }, Component.prototype.addClass = function(classToAdd) {
            addClass(this.el_, classToAdd);
        }, Component.prototype.removeClass = function(classToRemove) {
            removeClass(this.el_, classToRemove);
        }, Component.prototype.toggleClass = function(classToToggle, predicate) {
            toggleClass(this.el_, classToToggle, predicate);
        }, Component.prototype.show = function() {
            this.removeClass("vjs-hidden");
        }, Component.prototype.hide = function() {
            this.addClass("vjs-hidden");
        }, Component.prototype.lockShowing = function() {
            this.addClass("vjs-lock-showing");
        }, Component.prototype.unlockShowing = function() {
            this.removeClass("vjs-lock-showing");
        }, Component.prototype.getAttribute = function(attribute) {
            return getAttribute(this.el_, attribute);
        }, Component.prototype.setAttribute = function(attribute, value) {
            setAttribute(this.el_, attribute, value);
        }, Component.prototype.removeAttribute = function(attribute) {
            removeAttribute(this.el_, attribute);
        }, Component.prototype.width = function(num, skipListeners) {
            return this.dimension("width", num, skipListeners);
        }, Component.prototype.height = function(num, skipListeners) {
            return this.dimension("height", num, skipListeners);
        }, Component.prototype.dimensions = function(width, height) {
            this.width(width, !0), this.height(height);
        }, Component.prototype.dimension = function(widthOrHeight, num, skipListeners) {
            if (void 0 !== num) return null !== num && num == num || (num = 0), -1 !== ("" + num).indexOf("%") || -1 !== ("" + num).indexOf("px") ? this.el_.style[widthOrHeight] = num : this.el_.style[widthOrHeight] = "auto" === num ? "" : num + "px",
            void (skipListeners || this.trigger("componentresize"));
            if (!this.el_) return 0;
            var val = this.el_.style[widthOrHeight], pxIndex = val.indexOf("px");
            return -1 !== pxIndex ? parseInt(val.slice(0, pxIndex), 10) : parseInt(this.el_["offset" + toTitleCase(widthOrHeight)], 10);
        }, Component.prototype.currentDimension = function(widthOrHeight) {
            var computedWidthOrHeight = 0;
            if ("width" !== widthOrHeight && "height" !== widthOrHeight) throw new Error("currentDimension only accepts width or height value");
            if ("function" == typeof window_1.getComputedStyle) {
                var computedStyle = window_1.getComputedStyle(this.el_);
                computedWidthOrHeight = computedStyle.getPropertyValue(widthOrHeight) || computedStyle[widthOrHeight];
            }
            if (0 === (computedWidthOrHeight = parseFloat(computedWidthOrHeight))) {
                var rule = "offset" + toTitleCase(widthOrHeight);
                computedWidthOrHeight = this.el_[rule];
            }
            return computedWidthOrHeight;
        }, Component.prototype.currentDimensions = function() {
            return {
                width: this.currentDimension("width"),
                height: this.currentDimension("height")
            };
        }, Component.prototype.currentWidth = function() {
            return this.currentDimension("width");
        }, Component.prototype.currentHeight = function() {
            return this.currentDimension("height");
        }, Component.prototype.focus = function() {
            this.el_.focus();
        }, Component.prototype.blur = function() {
            this.el_.blur();
        }, Component.prototype.emitTapEvents = function() {
            var touchStart = 0, firstTouch = null, couldBeTap = void 0;
            this.on("touchstart", function(event) {
                1 === event.touches.length && (firstTouch = {
                    pageX: event.touches[0].pageX,
                    pageY: event.touches[0].pageY
                }, touchStart = new Date().getTime(), couldBeTap = !0);
            }), this.on("touchmove", function(event) {
                if (1 < event.touches.length) couldBeTap = !1; else if (firstTouch) {
                    var xdiff = event.touches[0].pageX - firstTouch.pageX, ydiff = event.touches[0].pageY - firstTouch.pageY;
                    10 < Math.sqrt(xdiff * xdiff + ydiff * ydiff) && (couldBeTap = !1);
                }
            });
            var noTap = function() {
                couldBeTap = !1;
            };
            this.on("touchleave", noTap), this.on("touchcancel", noTap), this.on("touchend", function(event) {
                !(firstTouch = null) === couldBeTap && (new Date().getTime() - touchStart < 200 && (event.preventDefault(),
                this.trigger("tap")));
            });
        }, Component.prototype.enableTouchActivity = function() {
            if (this.player() && this.player().reportUserActivity) {
                var report = bind(this.player(), this.player().reportUserActivity), touchHolding = void 0;
                this.on("touchstart", function() {
                    report(), this.clearInterval(touchHolding), touchHolding = this.setInterval(report, 250);
                });
                var touchEnd = function(event) {
                    report(), this.clearInterval(touchHolding);
                };
                this.on("touchmove", report), this.on("touchend", touchEnd), this.on("touchcancel", touchEnd);
            }
        }, Component.prototype.setTimeout = function(fn, timeout) {
            var _this2 = this;
            fn = bind(this, fn);
            var timeoutId = window_1.setTimeout(fn, timeout), disposeFn = function() {
                return _this2.clearTimeout(timeoutId);
            };
            return disposeFn.guid = "vjs-timeout-" + timeoutId, this.on("dispose", disposeFn),
            timeoutId;
        }, Component.prototype.clearTimeout = function(timeoutId) {
            window_1.clearTimeout(timeoutId);
            var disposeFn = function() {};
            return disposeFn.guid = "vjs-timeout-" + timeoutId, this.off("dispose", disposeFn),
            timeoutId;
        }, Component.prototype.setInterval = function(fn, interval) {
            var _this3 = this;
            fn = bind(this, fn);
            var intervalId = window_1.setInterval(fn, interval), disposeFn = function() {
                return _this3.clearInterval(intervalId);
            };
            return disposeFn.guid = "vjs-interval-" + intervalId, this.on("dispose", disposeFn),
            intervalId;
        }, Component.prototype.clearInterval = function(intervalId) {
            window_1.clearInterval(intervalId);
            var disposeFn = function() {};
            return disposeFn.guid = "vjs-interval-" + intervalId, this.off("dispose", disposeFn),
            intervalId;
        }, Component.prototype.requestAnimationFrame = function(fn) {
            var _this4 = this;
            if (this.supportsRaf_) {
                fn = bind(this, fn);
                var id = window_1.requestAnimationFrame(fn), disposeFn = function() {
                    return _this4.cancelAnimationFrame(id);
                };
                return disposeFn.guid = "vjs-raf-" + id, this.on("dispose", disposeFn), id;
            }
            return this.setTimeout(fn, 1e3 / 60);
        }, Component.prototype.cancelAnimationFrame = function(id) {
            if (this.supportsRaf_) {
                window_1.cancelAnimationFrame(id);
                var disposeFn = function() {};
                return disposeFn.guid = "vjs-raf-" + id, this.off("dispose", disposeFn), id;
            }
            return this.clearTimeout(id);
        }, Component.registerComponent = function(name, ComponentToRegister) {
            if ("string" != typeof name || !name) throw new Error('Illegal component name, "' + name + '"; must be a non-empty string.');
            var Tech = Component.getComponent("Tech"), isTech = Tech && Tech.isTech(ComponentToRegister), isComp = Component === ComponentToRegister || Component.prototype.isPrototypeOf(ComponentToRegister.prototype);
            if (isTech || !isComp) {
                var reason = void 0;
                throw reason = isTech ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass",
                new Error('Illegal component, "' + name + '"; ' + reason + ".");
            }
            name = toTitleCase(name), Component.components_ || (Component.components_ = {});
            var Player = Component.getComponent("Player");
            if ("Player" === name && Player && Player.players) {
                var players = Player.players, playerNames = Object.keys(players);
                if (players && 0 < playerNames.length && playerNames.map(function(pname) {
                    return players[pname];
                }).every(Boolean)) throw new Error("Can not register Player component after player has been created.");
            }
            return Component.components_[name] = ComponentToRegister;
        }, Component.getComponent = function(name) {
            if (name) return name = toTitleCase(name), Component.components_ && Component.components_[name] ? Component.components_[name] : void 0;
        }, Component;
    }();
    function getRange(fnName, valueIndex, ranges, rangeIndex) {
        return function(fnName, index, maxIndex) {
            if ("number" != typeof index || index < 0 || maxIndex < index) throw new Error("Failed to execute '" + fnName + "' on 'TimeRanges': The index provided (" + index + ") is non-numeric or out of bounds (0-" + maxIndex + ").");
        }(fnName, rangeIndex, ranges.length - 1), ranges[rangeIndex][valueIndex];
    }
    function createTimeRangesObj(ranges) {
        return void 0 === ranges || 0 === ranges.length ? {
            length: 0,
            start: function() {
                throw new Error("This TimeRanges object is empty");
            },
            end: function() {
                throw new Error("This TimeRanges object is empty");
            }
        } : {
            length: ranges.length,
            start: getRange.bind(null, "start", 0, ranges),
            end: getRange.bind(null, "end", 1, ranges)
        };
    }
    function createTimeRanges(start, end) {
        return Array.isArray(start) ? createTimeRangesObj(start) : void 0 === start || void 0 === end ? createTimeRangesObj() : createTimeRangesObj([ [ start, end ] ]);
    }
    function bufferedPercent(buffered, duration) {
        var bufferedDuration = 0, start = void 0, end = void 0;
        if (!duration) return 0;
        buffered && buffered.length || (buffered = createTimeRanges(0, 0));
        for (var i = 0; i < buffered.length; i++) start = buffered.start(i), duration < (end = buffered.end(i)) && (end = duration),
        bufferedDuration += end - start;
        return bufferedDuration / duration;
    }
    Component.prototype.supportsRaf_ = "function" == typeof window_1.requestAnimationFrame && "function" == typeof window_1.cancelAnimationFrame,
    Component.registerComponent("Component", Component);
    for (var FullscreenApi = {}, apiMap = [ [ "requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror" ], [ "webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror" ], [ "msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError" ] ], specApi = apiMap[0], browserApi = void 0, i = 0; i < apiMap.length; i++) if (apiMap[i][1] in document_1) {
        browserApi = apiMap[i];
        break;
    }
    if (browserApi) for (var _i = 0; _i < browserApi.length; _i++) FullscreenApi[specApi[_i]] = browserApi[_i];
    function MediaError(value) {
        if (value instanceof MediaError) return value;
        "number" == typeof value ? this.code = value : "string" == typeof value ? this.message = value : isObject(value) && ("number" == typeof value.code && (this.code = value.code),
        assign(this, value)), this.message || (this.message = MediaError.defaultMessages[this.code] || "");
    }
    MediaError.prototype.code = 0, MediaError.prototype.message = "", MediaError.prototype.status = null,
    MediaError.errorTypes = [ "MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED" ],
    MediaError.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var errNum = 0; errNum < MediaError.errorTypes.length; errNum++) MediaError[MediaError.errorTypes[errNum]] = errNum,
    MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
    var tuple = function(obj, reviver) {
        var json, error = null;
        try {
            json = JSON.parse(obj, reviver);
        } catch (err) {
            error = err;
        }
        return [ error, json ];
    };
    function isPromise(value) {
        return null != value && "function" == typeof value.then;
    }
    function silencePromise(value) {
        isPromise(value) && value.then(null, function(e) {});
    }
    var trackToJson_ = function(track) {
        return [ "kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src" ].reduce(function(acc, prop, i) {
            return track[prop] && (acc[prop] = track[prop]), acc;
        }, {
            cues: track.cues && Array.prototype.map.call(track.cues, function(cue) {
                return {
                    startTime: cue.startTime,
                    endTime: cue.endTime,
                    text: cue.text,
                    id: cue.id
                };
            })
        });
    }, textTrackConverter_textTracksToJson = function(tech) {
        var trackEls = tech.$$("track"), trackObjs = Array.prototype.map.call(trackEls, function(t) {
            return t.track;
        });
        return Array.prototype.map.call(trackEls, function(trackEl) {
            var json = trackToJson_(trackEl.track);
            return trackEl.src && (json.src = trackEl.src), json;
        }).concat(Array.prototype.filter.call(tech.textTracks(), function(track) {
            return -1 === trackObjs.indexOf(track);
        }).map(trackToJson_));
    }, textTrackConverter_jsonToTextTracks = function(json, tech) {
        return json.forEach(function(track) {
            var addedTrack = tech.addRemoteTextTrack(track).track;
            !track.src && track.cues && track.cues.forEach(function(cue) {
                return addedTrack.addCue(cue);
            });
        }), tech.textTracks();
    }, MODAL_CLASS_NAME = "vjs-modal-dialog", ModalDialog = function(_Component) {
        function ModalDialog(player, options) {
            classCallCheck(this, ModalDialog);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return _this.opened_ = _this.hasBeenOpened_ = _this.hasBeenFilled_ = !1, _this.closeable(!_this.options_.uncloseable),
            _this.content(_this.options_.content), _this.contentEl_ = createEl("div", {
                className: MODAL_CLASS_NAME + "-content"
            }, {
                role: "document"
            }), _this.descEl_ = createEl("p", {
                className: MODAL_CLASS_NAME + "-description vjs-control-text",
                id: _this.el().getAttribute("aria-describedby")
            }), textContent(_this.descEl_, _this.description()), _this.el_.appendChild(_this.descEl_),
            _this.el_.appendChild(_this.contentEl_), _this;
        }
        return inherits(ModalDialog, _Component), ModalDialog.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
                tabIndex: -1
            }, {
                "aria-describedby": this.id() + "_description",
                "aria-hidden": "true",
                "aria-label": this.label(),
                role: "dialog"
            });
        }, ModalDialog.prototype.dispose = function() {
            this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, _Component.prototype.dispose.call(this);
        }, ModalDialog.prototype.buildCSSClass = function() {
            return MODAL_CLASS_NAME + " vjs-hidden " + _Component.prototype.buildCSSClass.call(this);
        }, ModalDialog.prototype.handleKeyPress = function(e) {
            27 === e.which && this.closeable() && this.close();
        }, ModalDialog.prototype.label = function() {
            return this.localize(this.options_.label || "Modal Window");
        }, ModalDialog.prototype.description = function() {
            var desc = this.options_.description || this.localize("This is a modal window.");
            return this.closeable() && (desc += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),
            desc;
        }, ModalDialog.prototype.open = function() {
            if (!this.opened_) {
                var player = this.player();
                this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(),
                this.wasPlaying_ = !player.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && player.pause(),
                this.closeable() && this.on(this.el_.ownerDocument, "keydown", bind(this, this.handleKeyPress)),
                this.hadControls_ = player.controls(), player.controls(!1), this.show(), this.conditionalFocus_(),
                this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0;
            }
        }, ModalDialog.prototype.opened = function(value) {
            return "boolean" == typeof value && this[value ? "open" : "close"](), this.opened_;
        }, ModalDialog.prototype.close = function() {
            if (this.opened_) {
                var player = this.player();
                this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && player.play(),
                this.closeable() && this.off(this.el_.ownerDocument, "keydown", bind(this, this.handleKeyPress)),
                this.hadControls_ && player.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"),
                this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose();
            }
        }, ModalDialog.prototype.closeable = function(value) {
            if ("boolean" == typeof value) {
                var closeable = this.closeable_ = !!value, close = this.getChild("closeButton");
                if (closeable && !close) {
                    var temp = this.contentEl_;
                    this.contentEl_ = this.el_, close = this.addChild("closeButton", {
                        controlText: "Close Modal Dialog"
                    }), this.contentEl_ = temp, this.on(close, "close", this.close);
                }
                !closeable && close && (this.off(close, "close", this.close), this.removeChild(close),
                close.dispose());
            }
            return this.closeable_;
        }, ModalDialog.prototype.fill = function() {
            this.fillWith(this.content());
        }, ModalDialog.prototype.fillWith = function(content) {
            var contentEl = this.contentEl(), parentEl = contentEl.parentNode, nextSiblingEl = contentEl.nextSibling;
            this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, parentEl.removeChild(contentEl),
            this.empty(), insertContent(contentEl, content), this.trigger("modalfill"), nextSiblingEl ? parentEl.insertBefore(contentEl, nextSiblingEl) : parentEl.appendChild(contentEl);
            var closeButton = this.getChild("closeButton");
            closeButton && parentEl.appendChild(closeButton.el_);
        }, ModalDialog.prototype.empty = function() {
            this.trigger("beforemodalempty"), emptyEl(this.contentEl()), this.trigger("modalempty");
        }, ModalDialog.prototype.content = function(value) {
            return void 0 !== value && (this.content_ = value), this.content_;
        }, ModalDialog.prototype.conditionalFocus_ = function() {
            var activeEl = document_1.activeElement, playerEl = this.player_.el_;
            this.previouslyActiveEl_ = null, (playerEl.contains(activeEl) || playerEl === activeEl) && (this.previouslyActiveEl_ = activeEl,
            this.focus(), this.on(document_1, "keydown", this.handleKeyDown));
        }, ModalDialog.prototype.conditionalBlur_ = function() {
            this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null),
            this.off(document_1, "keydown", this.handleKeyDown);
        }, ModalDialog.prototype.handleKeyDown = function(event) {
            if (9 === event.which) {
                for (var focusableEls = this.focusableEls_(), activeEl = this.el_.querySelector(":focus"), focusIndex = void 0, i = 0; i < focusableEls.length; i++) if (activeEl === focusableEls[i]) {
                    focusIndex = i;
                    break;
                }
                document_1.activeElement === this.el_ && (focusIndex = 0), event.shiftKey && 0 === focusIndex ? (focusableEls[focusableEls.length - 1].focus(),
                event.preventDefault()) : event.shiftKey || focusIndex !== focusableEls.length - 1 || (focusableEls[0].focus(),
                event.preventDefault());
            }
        }, ModalDialog.prototype.focusableEls_ = function() {
            var allChildren = this.el_.querySelectorAll("*");
            return Array.prototype.filter.call(allChildren, function(child) {
                return (child instanceof window_1.HTMLAnchorElement || child instanceof window_1.HTMLAreaElement) && child.hasAttribute("href") || (child instanceof window_1.HTMLInputElement || child instanceof window_1.HTMLSelectElement || child instanceof window_1.HTMLTextAreaElement || child instanceof window_1.HTMLButtonElement) && !child.hasAttribute("disabled") || child instanceof window_1.HTMLIFrameElement || child instanceof window_1.HTMLObjectElement || child instanceof window_1.HTMLEmbedElement || child.hasAttribute("tabindex") && -1 !== child.getAttribute("tabindex") || child.hasAttribute("contenteditable");
            });
        }, ModalDialog;
    }(Component);
    ModalDialog.prototype.options_ = {
        pauseOnOpen: !0,
        temporary: !0
    }, Component.registerComponent("ModalDialog", ModalDialog);
    var TrackList = function(_EventTarget) {
        function TrackList() {
            var tracks = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], list = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            classCallCheck(this, TrackList);
            var _this = possibleConstructorReturn(this, _EventTarget.call(this));
            if (!list && (list = _this, IS_IE8)) for (var prop in list = document_1.createElement("custom"),
            TrackList.prototype) "constructor" !== prop && (list[prop] = TrackList.prototype[prop]);
            list.tracks_ = [], Object.defineProperty(list, "length", {
                get: function() {
                    return this.tracks_.length;
                }
            });
            for (var i = 0; i < tracks.length; i++) list.addTrack(tracks[i]);
            return possibleConstructorReturn(_this, list);
        }
        return inherits(TrackList, _EventTarget), TrackList.prototype.addTrack = function(track) {
            var index = this.tracks_.length;
            "" + index in this || Object.defineProperty(this, index, {
                get: function() {
                    return this.tracks_[index];
                }
            }), -1 === this.tracks_.indexOf(track) && (this.tracks_.push(track), this.trigger({
                track: track,
                type: "addtrack"
            }));
        }, TrackList.prototype.removeTrack = function(rtrack) {
            for (var track = void 0, i = 0, l = this.length; i < l; i++) if (this[i] === rtrack) {
                (track = this[i]).off && track.off(), this.tracks_.splice(i, 1);
                break;
            }
            track && this.trigger({
                track: track,
                type: "removetrack"
            });
        }, TrackList.prototype.getTrackById = function(id) {
            for (var result = null, i = 0, l = this.length; i < l; i++) {
                var track = this[i];
                if (track.id === id) {
                    result = track;
                    break;
                }
            }
            return result;
        }, TrackList;
    }(EventTarget);
    for (var event in TrackList.prototype.allowedEvents_ = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    }, TrackList.prototype.allowedEvents_) TrackList.prototype["on" + event] = null;
    var disableOthers = function(list, track) {
        for (var i = 0; i < list.length; i++) Object.keys(list[i]).length && track.id !== list[i].id && (list[i].enabled = !1);
    }, AudioTrackList = function(_TrackList) {
        function AudioTrackList() {
            var _this, tracks = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            classCallCheck(this, AudioTrackList);
            for (var list = void 0, i = tracks.length - 1; 0 <= i; i--) if (tracks[i].enabled) {
                disableOthers(tracks, tracks[i]);
                break;
            }
            if (IS_IE8) {
                for (var prop in list = document_1.createElement("custom"), TrackList.prototype) "constructor" !== prop && (list[prop] = TrackList.prototype[prop]);
                for (var _prop in AudioTrackList.prototype) "constructor" !== _prop && (list[_prop] = AudioTrackList.prototype[_prop]);
            }
            return (list = _this = possibleConstructorReturn(this, _TrackList.call(this, tracks, list))).changing_ = !1,
            possibleConstructorReturn(_this, list);
        }
        return inherits(AudioTrackList, _TrackList), AudioTrackList.prototype.addTrack = function(track) {
            var _this2 = this;
            track.enabled && disableOthers(this, track), _TrackList.prototype.addTrack.call(this, track),
            track.addEventListener && track.addEventListener("enabledchange", function() {
                _this2.changing_ || (_this2.changing_ = !0, disableOthers(_this2, track), _this2.changing_ = !1,
                _this2.trigger("change"));
            });
        }, AudioTrackList;
    }(TrackList), disableOthers$1 = function(list, track) {
        for (var i = 0; i < list.length; i++) Object.keys(list[i]).length && track.id !== list[i].id && (list[i].selected = !1);
    }, VideoTrackList = function(_TrackList) {
        function VideoTrackList() {
            var _this, tracks = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            classCallCheck(this, VideoTrackList);
            for (var list = void 0, i = tracks.length - 1; 0 <= i; i--) if (tracks[i].selected) {
                disableOthers$1(tracks, tracks[i]);
                break;
            }
            if (IS_IE8) {
                for (var prop in list = document_1.createElement("custom"), TrackList.prototype) "constructor" !== prop && (list[prop] = TrackList.prototype[prop]);
                for (var _prop in VideoTrackList.prototype) "constructor" !== _prop && (list[_prop] = VideoTrackList.prototype[_prop]);
            }
            return (list = _this = possibleConstructorReturn(this, _TrackList.call(this, tracks, list))).changing_ = !1,
            Object.defineProperty(list, "selectedIndex", {
                get: function() {
                    for (var _i = 0; _i < this.length; _i++) if (this[_i].selected) return _i;
                    return -1;
                },
                set: function() {}
            }), possibleConstructorReturn(_this, list);
        }
        return inherits(VideoTrackList, _TrackList), VideoTrackList.prototype.addTrack = function(track) {
            var _this2 = this;
            track.selected && disableOthers$1(this, track), _TrackList.prototype.addTrack.call(this, track),
            track.addEventListener && track.addEventListener("selectedchange", function() {
                _this2.changing_ || (_this2.changing_ = !0, disableOthers$1(_this2, track), _this2.changing_ = !1,
                _this2.trigger("change"));
            });
        }, VideoTrackList;
    }(TrackList), TextTrackList = function(_TrackList) {
        function TextTrackList() {
            var _this, tracks = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            classCallCheck(this, TextTrackList);
            var list = void 0;
            if (IS_IE8) {
                for (var prop in list = document_1.createElement("custom"), TrackList.prototype) "constructor" !== prop && (list[prop] = TrackList.prototype[prop]);
                for (var _prop in TextTrackList.prototype) "constructor" !== _prop && (list[_prop] = TextTrackList.prototype[_prop]);
            }
            return _this = possibleConstructorReturn(this, _TrackList.call(this, tracks, list)),
            possibleConstructorReturn(list = _this, list);
        }
        return inherits(TextTrackList, _TrackList), TextTrackList.prototype.addTrack = function(track) {
            _TrackList.prototype.addTrack.call(this, track), track.addEventListener("modechange", bind(this, function() {
                this.trigger("change");
            }));
            -1 === [ "metadata", "chapters" ].indexOf(track.kind) && track.addEventListener("modechange", bind(this, function() {
                this.trigger("selectedlanguagechange");
            }));
        }, TextTrackList;
    }(TrackList), HtmlTrackElementList = function() {
        function HtmlTrackElementList() {
            var trackElements = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            classCallCheck(this, HtmlTrackElementList);
            var list = this;
            if (IS_IE8) for (var prop in list = document_1.createElement("custom"), HtmlTrackElementList.prototype) "constructor" !== prop && (list[prop] = HtmlTrackElementList.prototype[prop]);
            list.trackElements_ = [], Object.defineProperty(list, "length", {
                get: function() {
                    return this.trackElements_.length;
                }
            });
            for (var i = 0, length = trackElements.length; i < length; i++) list.addTrackElement_(trackElements[i]);
            if (IS_IE8) return list;
        }
        return HtmlTrackElementList.prototype.addTrackElement_ = function(trackElement) {
            var index = this.trackElements_.length;
            "" + index in this || Object.defineProperty(this, index, {
                get: function() {
                    return this.trackElements_[index];
                }
            }), -1 === this.trackElements_.indexOf(trackElement) && this.trackElements_.push(trackElement);
        }, HtmlTrackElementList.prototype.getTrackElementByTrack_ = function(track) {
            for (var trackElement_ = void 0, i = 0, length = this.trackElements_.length; i < length; i++) if (track === this.trackElements_[i].track) {
                trackElement_ = this.trackElements_[i];
                break;
            }
            return trackElement_;
        }, HtmlTrackElementList.prototype.removeTrackElement_ = function(trackElement) {
            for (var i = 0, length = this.trackElements_.length; i < length; i++) if (trackElement === this.trackElements_[i]) {
                this.trackElements_.splice(i, 1);
                break;
            }
        }, HtmlTrackElementList;
    }(), TextTrackCueList = function() {
        function TextTrackCueList(cues) {
            classCallCheck(this, TextTrackCueList);
            var list = this;
            if (IS_IE8) for (var prop in list = document_1.createElement("custom"), TextTrackCueList.prototype) "constructor" !== prop && (list[prop] = TextTrackCueList.prototype[prop]);
            if (TextTrackCueList.prototype.setCues_.call(list, cues), Object.defineProperty(list, "length", {
                get: function() {
                    return this.length_;
                }
            }), IS_IE8) return list;
        }
        return TextTrackCueList.prototype.setCues_ = function(cues) {
            var oldLength = this.length || 0, i = 0, l = cues.length;
            this.cues_ = cues, this.length_ = cues.length;
            var defineProp = function(index) {
                "" + index in this || Object.defineProperty(this, "" + index, {
                    get: function() {
                        return this.cues_[index];
                    }
                });
            };
            if (oldLength < l) for (i = oldLength; i < l; i++) defineProp.call(this, i);
        }, TextTrackCueList.prototype.getCueById = function(id) {
            for (var result = null, i = 0, l = this.length; i < l; i++) {
                var cue = this[i];
                if (cue.id === id) {
                    result = cue;
                    break;
                }
            }
            return result;
        }, TextTrackCueList;
    }(), VideoTrackKind = {
        alternative: "alternative",
        captions: "captions",
        main: "main",
        sign: "sign",
        subtitles: "subtitles",
        commentary: "commentary"
    }, AudioTrackKind = {
        alternative: "alternative",
        descriptions: "descriptions",
        main: "main",
        "main-desc": "main-desc",
        translation: "translation",
        commentary: "commentary"
    }, TextTrackKind = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    }, TextTrackMode = {
        disabled: "disabled",
        hidden: "hidden",
        showing: "showing"
    }, Track = function(_EventTarget) {
        function Track() {
            var options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            classCallCheck(this, Track);
            var _this = possibleConstructorReturn(this, _EventTarget.call(this)), track = _this;
            if (IS_IE8) for (var prop in track = document_1.createElement("custom"), Track.prototype) "constructor" !== prop && (track[prop] = Track.prototype[prop]);
            var trackProps = {
                id: options.id || "vjs_track_" + newGUID(),
                kind: options.kind || "",
                label: options.label || "",
                language: options.language || ""
            }, _loop = function(key) {
                Object.defineProperty(track, key, {
                    get: function() {
                        return trackProps[key];
                    },
                    set: function() {}
                });
            };
            for (var key in trackProps) _loop(key);
            return possibleConstructorReturn(_this, track);
        }
        return inherits(Track, _EventTarget), Track;
    }(EventTarget), parseUrl = function(url) {
        var props = [ "protocol", "hostname", "port", "pathname", "search", "hash", "host" ], a = document_1.createElement("a");
        a.href = url;
        var addToBody = "" === a.host && "file:" !== a.protocol, div = void 0;
        addToBody && ((div = document_1.createElement("div")).innerHTML = '<a href="' + url + '"></a>',
        a = div.firstChild, div.setAttribute("style", "display:none; position:absolute;"),
        document_1.body.appendChild(div));
        for (var details = {}, i = 0; i < props.length; i++) details[props[i]] = a[props[i]];
        return "http:" === details.protocol && (details.host = details.host.replace(/:80$/, "")),
        "https:" === details.protocol && (details.host = details.host.replace(/:443$/, "")),
        details.protocol || (details.protocol = window_1.location.protocol), addToBody && document_1.body.removeChild(div),
        details;
    }, getFileExtension = function(path) {
        if ("string" == typeof path) {
            var pathParts = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(path);
            if (pathParts) return pathParts.pop().toLowerCase();
        }
        return "";
    }, isCrossOrigin = function(url) {
        var winLoc = window_1.location, urlInfo = parseUrl(url);
        return (":" === urlInfo.protocol ? winLoc.protocol : urlInfo.protocol) + urlInfo.host !== winLoc.protocol + winLoc.host;
    }, Url = (Object.freeze || Object)({
        parseUrl: parseUrl,
        getAbsoluteURL: function(url) {
            if (!url.match(/^https?:\/\//)) {
                var div = document_1.createElement("div");
                div.innerHTML = '<a href="' + url + '">x</a>', url = div.firstChild.href;
            }
            return url;
        },
        getFileExtension: getFileExtension,
        isCrossOrigin: isCrossOrigin
    }), isFunction_1 = function(fn) {
        var string = toString$1.call(fn);
        return "[object Function]" === string || "function" == typeof fn && "[object RegExp]" !== string || "undefined" != typeof window && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
    }, toString$1 = Object.prototype.toString;
    var trim_1 = createCommonjsModule(function(module, exports) {
        (exports = module.exports = function(str) {
            return str.replace(/^\s*|\s*$/g, "");
        }).left = function(str) {
            return str.replace(/^\s*/, "");
        }, exports.right = function(str) {
            return str.replace(/\s*$/, "");
        };
    }), forEach_1 = function(list, iterator, context) {
        if (!isFunction_1(iterator)) throw new TypeError("iterator must be a function");
        arguments.length < 3 && (context = this);
        "[object Array]" === toString$2.call(list) ? function(array, iterator, context) {
            for (var i = 0, len = array.length; i < len; i++) hasOwnProperty.call(array, i) && iterator.call(context, array[i], i, array);
        }(list, iterator, context) : "string" == typeof list ? function(string, iterator, context) {
            for (var i = 0, len = string.length; i < len; i++) iterator.call(context, string.charAt(i), i, string);
        }(list, iterator, context) : function(object, iterator, context) {
            for (var k in object) hasOwnProperty.call(object, k) && iterator.call(context, object[k], k, object);
        }(list, iterator, context);
    }, toString$2 = Object.prototype.toString, hasOwnProperty = Object.prototype.hasOwnProperty;
    var parseHeaders = function(headers) {
        if (!headers) return {};
        var result = {};
        return forEach_1(trim_1(headers).split("\n"), function(row) {
            var arg, index = row.indexOf(":"), key = trim_1(row.slice(0, index)).toLowerCase(), value = trim_1(row.slice(index + 1));
            void 0 === result[key] ? result[key] = value : (arg = result[key], "[object Array]" === Object.prototype.toString.call(arg) ? result[key].push(value) : result[key] = [ result[key], value ]);
        }), result;
    }, immutable = function() {
        for (var target = {}, i = 0; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) hasOwnProperty$1.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, hasOwnProperty$1 = Object.prototype.hasOwnProperty;
    var xhr = createXHR;
    function initParams(uri, options, callback) {
        var params = uri;
        return isFunction_1(options) ? (callback = options, "string" == typeof uri && (params = {
            uri: uri
        })) : params = immutable(options, {
            uri: uri
        }), params.callback = callback, params;
    }
    function createXHR(uri, options, callback) {
        return _createXHR(options = initParams(uri, options, callback));
    }
    function _createXHR(options) {
        if (void 0 === options.callback) throw new Error("callback argument missing");
        var called = !1, callback = function(err, response, body) {
            called || (called = !0, options.callback(err, response, body));
        };
        function errorFunc(evt) {
            return clearTimeout(timeoutTimer), evt instanceof Error || (evt = new Error("" + (evt || "Unknown XMLHttpRequest Error"))),
            evt.statusCode = 0, callback(evt, failureResponse);
        }
        function loadFunc() {
            if (!aborted) {
                var status;
                clearTimeout(timeoutTimer), status = options.useXDR && void 0 === xhr.status ? 200 : 1223 === xhr.status ? 204 : xhr.status;
                var response = failureResponse, err = null;
                return 0 !== status ? (response = {
                    body: function() {
                        var body = void 0;
                        if (body = xhr.response ? xhr.response : xhr.responseText || function(xhr) {
                            if ("document" === xhr.responseType) return xhr.responseXML;
                            var firefoxBugTakenEffect = xhr.responseXML && "parsererror" === xhr.responseXML.documentElement.nodeName;
                            return "" !== xhr.responseType || firefoxBugTakenEffect ? null : xhr.responseXML;
                        }(xhr), isJson) try {
                            body = JSON.parse(body);
                        } catch (e) {}
                        return body;
                    }(),
                    statusCode: status,
                    method: method,
                    headers: {},
                    url: uri,
                    rawRequest: xhr
                }, xhr.getAllResponseHeaders && (response.headers = parseHeaders(xhr.getAllResponseHeaders()))) : err = new Error("Internal XMLHttpRequest Error"),
                callback(err, response, response.body);
            }
        }
        var key, aborted, xhr = options.xhr || null;
        xhr || (xhr = options.cors || options.useXDR ? new createXHR.XDomainRequest() : new createXHR.XMLHttpRequest());
        var timeoutTimer, uri = xhr.url = options.uri || options.url, method = xhr.method = options.method || "GET", body = options.body || options.data, headers = xhr.headers = options.headers || {}, sync = !!options.sync, isJson = !1, failureResponse = {
            body: void 0,
            headers: {},
            statusCode: 0,
            method: method,
            url: uri,
            rawRequest: xhr
        };
        if ("json" in options && !1 !== options.json && (isJson = !0, headers.accept || headers.Accept || (headers.Accept = "application/json"),
        "GET" !== method && "HEAD" !== method && (headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json"),
        body = JSON.stringify(!0 === options.json ? body : options.json))), xhr.onreadystatechange = function() {
            4 === xhr.readyState && setTimeout(loadFunc, 0);
        }, xhr.onload = loadFunc, xhr.onerror = errorFunc, xhr.onprogress = function() {},
        xhr.onabort = function() {
            aborted = !0;
        }, xhr.ontimeout = errorFunc, xhr.open(method, uri, !sync, options.username, options.password),
        sync || (xhr.withCredentials = !!options.withCredentials), !sync && 0 < options.timeout && (timeoutTimer = setTimeout(function() {
            if (!aborted) {
                aborted = !0, xhr.abort("timeout");
                var e = new Error("XMLHttpRequest timeout");
                e.code = "ETIMEDOUT", errorFunc(e);
            }
        }, options.timeout)), xhr.setRequestHeader) for (key in headers) headers.hasOwnProperty(key) && xhr.setRequestHeader(key, headers[key]); else if (options.headers && !function(obj) {
            for (var i in obj) if (obj.hasOwnProperty(i)) return !1;
            return !0;
        }(options.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in options && (xhr.responseType = options.responseType), "beforeSend" in options && "function" == typeof options.beforeSend && options.beforeSend(xhr),
        xhr.send(body || null), xhr;
    }
    createXHR.XMLHttpRequest = window_1.XMLHttpRequest || function() {}, createXHR.XDomainRequest = "withCredentials" in new createXHR.XMLHttpRequest() ? createXHR.XMLHttpRequest : window_1.XDomainRequest,
    function(array, iterator) {
        for (var i = 0; i < array.length; i++) iterator(array[i]);
    }([ "get", "put", "post", "patch", "head", "delete" ], function(method) {
        createXHR["delete" === method ? "del" : method] = function(uri, options, callback) {
            return (options = initParams(uri, options, callback)).method = method.toUpperCase(),
            _createXHR(options);
        };
    });
    var parseCues = function(srcContent, track) {
        var parser = new window_1.WebVTT.Parser(window_1, window_1.vttjs, window_1.WebVTT.StringDecoder()), errors = [];
        parser.oncue = function(cue) {
            track.addCue(cue);
        }, parser.onparsingerror = function(error) {
            errors.push(error);
        }, parser.onflush = function() {
            track.trigger({
                type: "loadeddata",
                target: track
            });
        }, parser.parse(srcContent), 0 < errors.length && (window_1.console && window_1.console.groupCollapsed && window_1.console.groupCollapsed("Text Track parsing errors for " + track.src),
        errors.forEach(function(error) {
            return log$1.error(error);
        }), window_1.console && window_1.console.groupEnd && window_1.console.groupEnd()),
        parser.flush();
    }, loadTrack = function(src, track) {
        var opts = {
            uri: src
        }, crossOrigin = isCrossOrigin(src);
        crossOrigin && (opts.cors = crossOrigin), xhr(opts, bind(this, function(err, response, responseBody) {
            if (err) return log$1.error(err, response);
            if (track.loaded_ = !0, "function" != typeof window_1.WebVTT) {
                if (track.tech_) {
                    var loadHandler = function() {
                        return parseCues(responseBody, track);
                    };
                    track.tech_.on("vttjsloaded", loadHandler), track.tech_.on("vttjserror", function() {
                        log$1.error("vttjs failed to load, stopping trying to process " + track.src), track.tech_.off("vttjsloaded", loadHandler);
                    });
                }
            } else parseCues(responseBody, track);
        }));
    }, TextTrack = function(_Track) {
        function TextTrack() {
            var _this, options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            if (classCallCheck(this, TextTrack), !options.tech) throw new Error("A tech was not provided.");
            var settings = mergeOptions(options, {
                kind: TextTrackKind[options.kind] || "subtitles",
                language: options.language || options.srclang || ""
            }), mode = TextTrackMode[settings.mode] || "disabled", default_ = settings.default;
            "metadata" !== settings.kind && "chapters" !== settings.kind || (mode = "hidden");
            var tt = _this = possibleConstructorReturn(this, _Track.call(this, settings));
            if (tt.tech_ = settings.tech, IS_IE8) for (var prop in TextTrack.prototype) "constructor" !== prop && (tt[prop] = TextTrack.prototype[prop]);
            tt.cues_ = [], tt.activeCues_ = [];
            var cues = new TextTrackCueList(tt.cues_), activeCues = new TextTrackCueList(tt.activeCues_), changed = !1, timeupdateHandler = bind(tt, function() {
                this.activeCues, changed && (this.trigger("cuechange"), changed = !1);
            });
            return "disabled" !== mode && tt.tech_.ready(function() {
                tt.tech_.on("timeupdate", timeupdateHandler);
            }, !0), Object.defineProperty(tt, "default", {
                get: function() {
                    return default_;
                },
                set: function() {}
            }), Object.defineProperty(tt, "mode", {
                get: function() {
                    return mode;
                },
                set: function(newMode) {
                    var _this2 = this;
                    TextTrackMode[newMode] && ("showing" === (mode = newMode) && this.tech_.ready(function() {
                        _this2.tech_.on("timeupdate", timeupdateHandler);
                    }, !0), this.trigger("modechange"));
                }
            }), Object.defineProperty(tt, "cues", {
                get: function() {
                    return this.loaded_ ? cues : null;
                },
                set: function() {}
            }), Object.defineProperty(tt, "activeCues", {
                get: function() {
                    if (!this.loaded_) return null;
                    if (0 === this.cues.length) return activeCues;
                    for (var ct = this.tech_.currentTime(), active = [], i = 0, l = this.cues.length; i < l; i++) {
                        var cue = this.cues[i];
                        cue.startTime <= ct && cue.endTime >= ct ? active.push(cue) : cue.startTime === cue.endTime && cue.startTime <= ct && cue.startTime + .5 >= ct && active.push(cue);
                    }
                    if (changed = !1, active.length !== this.activeCues_.length) changed = !0; else for (var _i = 0; _i < active.length; _i++) -1 === this.activeCues_.indexOf(active[_i]) && (changed = !0);
                    return this.activeCues_ = active, activeCues.setCues_(this.activeCues_), activeCues;
                },
                set: function() {}
            }), settings.src ? (tt.src = settings.src, loadTrack(settings.src, tt)) : tt.loaded_ = !0,
            possibleConstructorReturn(_this, tt);
        }
        return inherits(TextTrack, _Track), TextTrack.prototype.addCue = function(originalCue) {
            var cue = originalCue;
            if (window_1.vttjs && !(originalCue instanceof window_1.vttjs.VTTCue)) {
                for (var prop in cue = new window_1.vttjs.VTTCue(originalCue.startTime, originalCue.endTime, originalCue.text),
                originalCue) prop in cue || (cue[prop] = originalCue[prop]);
                cue.id = originalCue.id, cue.originalCue_ = originalCue;
            }
            for (var tracks = this.tech_.textTracks(), i = 0; i < tracks.length; i++) tracks[i] !== this && tracks[i].removeCue(cue);
            this.cues_.push(cue), this.cues.setCues_(this.cues_);
        }, TextTrack.prototype.removeCue = function(_removeCue) {
            for (var i = this.cues_.length; i--; ) {
                var cue = this.cues_[i];
                if (cue === _removeCue || cue.originalCue_ && cue.originalCue_ === _removeCue) {
                    this.cues_.splice(i, 1), this.cues.setCues_(this.cues_);
                    break;
                }
            }
        }, TextTrack;
    }(Track);
    TextTrack.prototype.allowedEvents_ = {
        cuechange: "cuechange"
    };
    var AudioTrack = function(_Track) {
        function AudioTrack() {
            var _this, options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            classCallCheck(this, AudioTrack);
            var settings = mergeOptions(options, {
                kind: AudioTrackKind[options.kind] || ""
            }), track = _this = possibleConstructorReturn(this, _Track.call(this, settings)), enabled = !1;
            if (IS_IE8) for (var prop in AudioTrack.prototype) "constructor" !== prop && (track[prop] = AudioTrack.prototype[prop]);
            return Object.defineProperty(track, "enabled", {
                get: function() {
                    return enabled;
                },
                set: function(newEnabled) {
                    "boolean" == typeof newEnabled && newEnabled !== enabled && (enabled = newEnabled,
                    this.trigger("enabledchange"));
                }
            }), settings.enabled && (track.enabled = settings.enabled), track.loaded_ = !0,
            possibleConstructorReturn(_this, track);
        }
        return inherits(AudioTrack, _Track), AudioTrack;
    }(Track), VideoTrack = function(_Track) {
        function VideoTrack() {
            var _this, options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            classCallCheck(this, VideoTrack);
            var settings = mergeOptions(options, {
                kind: VideoTrackKind[options.kind] || ""
            }), track = _this = possibleConstructorReturn(this, _Track.call(this, settings)), selected = !1;
            if (IS_IE8) for (var prop in VideoTrack.prototype) "constructor" !== prop && (track[prop] = VideoTrack.prototype[prop]);
            return Object.defineProperty(track, "selected", {
                get: function() {
                    return selected;
                },
                set: function(newSelected) {
                    "boolean" == typeof newSelected && newSelected !== selected && (selected = newSelected,
                    this.trigger("selectedchange"));
                }
            }), settings.selected && (track.selected = settings.selected), possibleConstructorReturn(_this, track);
        }
        return inherits(VideoTrack, _Track), VideoTrack;
    }(Track), NONE = 0, LOADED = 2, HTMLTrackElement = function(_EventTarget) {
        function HTMLTrackElement() {
            var options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            classCallCheck(this, HTMLTrackElement);
            var _this = possibleConstructorReturn(this, _EventTarget.call(this)), readyState = void 0, trackElement = _this;
            if (IS_IE8) for (var prop in trackElement = document_1.createElement("custom"),
            HTMLTrackElement.prototype) "constructor" !== prop && (trackElement[prop] = HTMLTrackElement.prototype[prop]);
            var track = new TextTrack(options);
            return trackElement.kind = track.kind, trackElement.src = track.src, trackElement.srclang = track.language,
            trackElement.label = track.label, trackElement.default = track.default, Object.defineProperty(trackElement, "readyState", {
                get: function() {
                    return readyState;
                }
            }), Object.defineProperty(trackElement, "track", {
                get: function() {
                    return track;
                }
            }), readyState = NONE, track.addEventListener("loadeddata", function() {
                readyState = LOADED, trackElement.trigger({
                    type: "load",
                    target: trackElement
                });
            }), IS_IE8 ? possibleConstructorReturn(_this, trackElement) : _this;
        }
        return inherits(HTMLTrackElement, _EventTarget), HTMLTrackElement;
    }(EventTarget);
    HTMLTrackElement.prototype.allowedEvents_ = {
        load: "load"
    }, HTMLTrackElement.NONE = NONE, HTMLTrackElement.LOADING = 1, HTMLTrackElement.LOADED = LOADED,
    HTMLTrackElement.ERROR = 3;
    var NORMAL = {
        audio: {
            ListClass: AudioTrackList,
            TrackClass: AudioTrack,
            capitalName: "Audio"
        },
        video: {
            ListClass: VideoTrackList,
            TrackClass: VideoTrack,
            capitalName: "Video"
        },
        text: {
            ListClass: TextTrackList,
            TrackClass: TextTrack,
            capitalName: "Text"
        }
    };
    Object.keys(NORMAL).forEach(function(type) {
        NORMAL[type].getterName = type + "Tracks", NORMAL[type].privateName = type + "Tracks_";
    });
    var REMOTE = {
        remoteText: {
            ListClass: TextTrackList,
            TrackClass: TextTrack,
            capitalName: "RemoteText",
            getterName: "remoteTextTracks",
            privateName: "remoteTextTracks_"
        },
        remoteTextEl: {
            ListClass: HtmlTrackElementList,
            TrackClass: HTMLTrackElement,
            capitalName: "RemoteTextTrackEls",
            getterName: "remoteTextTrackEls",
            privateName: "remoteTextTrackEls_"
        }
    }, ALL = mergeOptions(NORMAL, REMOTE);
    REMOTE.names = Object.keys(REMOTE), NORMAL.names = Object.keys(NORMAL), ALL.names = [].concat(REMOTE.names).concat(NORMAL.names);
    var _objCreate = Object.create || function() {
        function F() {}
        return function(o) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return F.prototype = o, new F();
        };
    }();
    function ParsingError(errorData, message) {
        this.name = "ParsingError", this.code = errorData.code, this.message = message || errorData.message;
    }
    function parseTimeStamp(input) {
        function computeSeconds(h, m, s, f) {
            return 3600 * (0 | h) + 60 * (0 | m) + (0 | s) + (0 | f) / 1e3;
        }
        var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return m ? m[3] ? computeSeconds(m[1], m[2], m[3].replace(":", ""), m[4]) : 59 < m[1] ? computeSeconds(m[1], m[2], 0, m[4]) : computeSeconds(0, m[1], m[2], m[4]) : null;
    }
    function Settings() {
        this.values = _objCreate(null);
    }
    function parseOptions(input, callback, keyValueDelim, groupDelim) {
        var groups = groupDelim ? input.split(groupDelim) : [ input ];
        for (var i in groups) if ("string" == typeof groups[i]) {
            var kv = groups[i].split(keyValueDelim);
            if (2 === kv.length) callback(kv[0], kv[1]);
        }
    }
    function parseCue(input, cue, regionList) {
        var oInput = input;
        function consumeTimeStamp() {
            var ts = parseTimeStamp(input);
            if (null === ts) throw new ParsingError(ParsingError.Errors.BadTimeStamp, "Malformed timestamp: " + oInput);
            return input = input.replace(/^[^\sa-zA-Z-]+/, ""), ts;
        }
        function skipWhitespace() {
            input = input.replace(/^\s+/, "");
        }
        if (skipWhitespace(), cue.startTime = consumeTimeStamp(), skipWhitespace(), "--\x3e" !== input.substr(0, 3)) throw new ParsingError(ParsingError.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + oInput);
        input = input.substr(3), skipWhitespace(), cue.endTime = consumeTimeStamp(), skipWhitespace(),
        function(input, cue) {
            var settings = new Settings();
            parseOptions(input, function(k, v) {
                switch (k) {
                  case "region":
                    for (var i = regionList.length - 1; 0 <= i; i--) if (regionList[i].id === v) {
                        settings.set(k, regionList[i].region);
                        break;
                    }
                    break;

                  case "vertical":
                    settings.alt(k, v, [ "rl", "lr" ]);
                    break;

                  case "line":
                    var vals = v.split(","), vals0 = vals[0];
                    settings.integer(k, vals0), settings.percent(k, vals0) && settings.set("snapToLines", !1),
                    settings.alt(k, vals0, [ "auto" ]), 2 === vals.length && settings.alt("lineAlign", vals[1], [ "start", "middle", "end" ]);
                    break;

                  case "position":
                    vals = v.split(","), settings.percent(k, vals[0]), 2 === vals.length && settings.alt("positionAlign", vals[1], [ "start", "middle", "end" ]);
                    break;

                  case "size":
                    settings.percent(k, v);
                    break;

                  case "align":
                    settings.alt(k, v, [ "start", "middle", "end", "left", "right" ]);
                }
            }, /:/, /\s/), cue.region = settings.get("region", null), cue.vertical = settings.get("vertical", ""),
            cue.line = settings.get("line", "auto"), cue.lineAlign = settings.get("lineAlign", "start"),
            cue.snapToLines = settings.get("snapToLines", !0), cue.size = settings.get("size", 100),
            cue.align = settings.get("align", "middle"), cue.position = settings.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, cue.align), cue.positionAlign = settings.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, cue.align);
        }(input, cue);
    }
    ((ParsingError.prototype = _objCreate(Error.prototype)).constructor = ParsingError).Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, Settings.prototype = {
        set: function(k, v) {
            this.get(k) || "" === v || (this.values[k] = v);
        },
        get: function(k, dflt, defaultKey) {
            return defaultKey ? this.has(k) ? this.values[k] : dflt[defaultKey] : this.has(k) ? this.values[k] : dflt;
        },
        has: function(k) {
            return k in this.values;
        },
        alt: function(k, v, a) {
            for (var n = 0; n < a.length; ++n) if (v === a[n]) {
                this.set(k, v);
                break;
            }
        },
        integer: function(k, v) {
            /^-?\d+$/.test(v) && this.set(k, parseInt(v, 10));
        },
        percent: function(k, v) {
            return !!(v.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (v = parseFloat(v)) && v <= 100) && (this.set(k, v),
            !0);
        }
    };
    var ESCAPE = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&lrm;": "‎",
        "&rlm;": "‏",
        "&nbsp;": " "
    }, TAG_NAME = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span"
    }, TAG_ANNOTATION = {
        v: "title",
        lang: "lang"
    }, NEEDS_PARENT = {
        rt: "ruby"
    };
    function parseContent(window, input) {
        function nextToken() {
            if (!input) return null;
            var result, m = input.match(/^([^<]*)(<[^>]+>?)?/);
            return result = m[1] ? m[1] : m[2], input = input.substr(result.length), result;
        }
        function unescape1(e) {
            return ESCAPE[e];
        }
        function unescape(s) {
            for (;m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/); ) s = s.replace(m[0], unescape1);
            return s;
        }
        function shouldAdd(current, element) {
            return !NEEDS_PARENT[element.localName] || NEEDS_PARENT[element.localName] === current.localName;
        }
        function createElement(type, annotation) {
            var tagName = TAG_NAME[type];
            if (!tagName) return null;
            var element = window.document.createElement(tagName);
            element.localName = tagName;
            var name = TAG_ANNOTATION[type];
            return name && annotation && (element[name] = annotation.trim()), element;
        }
        for (var t, rootDiv = window.document.createElement("div"), current = rootDiv, tagStack = []; null !== (t = nextToken()); ) if ("<" !== t[0]) current.appendChild(window.document.createTextNode(unescape(t))); else {
            if ("/" === t[1]) {
                tagStack.length && tagStack[tagStack.length - 1] === t.substr(2).replace(">", "") && (tagStack.pop(),
                current = current.parentNode);
                continue;
            }
            var node, ts = parseTimeStamp(t.substr(1, t.length - 2));
            if (ts) {
                node = window.document.createProcessingInstruction("timestamp", ts), current.appendChild(node);
                continue;
            }
            var m = t.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
            if (!m) continue;
            if (!(node = createElement(m[1], m[3]))) continue;
            if (!shouldAdd(current, node)) continue;
            m[2] && (node.className = m[2].substr(1).replace(".", " ")), tagStack.push(m[1]),
            current.appendChild(node), current = node;
        }
        return rootDiv;
    }
    var strongRTLRanges = [ [ 1470, 1470 ], [ 1472, 1472 ], [ 1475, 1475 ], [ 1478, 1478 ], [ 1488, 1514 ], [ 1520, 1524 ], [ 1544, 1544 ], [ 1547, 1547 ], [ 1549, 1549 ], [ 1563, 1563 ], [ 1566, 1610 ], [ 1645, 1647 ], [ 1649, 1749 ], [ 1765, 1766 ], [ 1774, 1775 ], [ 1786, 1805 ], [ 1807, 1808 ], [ 1810, 1839 ], [ 1869, 1957 ], [ 1969, 1969 ], [ 1984, 2026 ], [ 2036, 2037 ], [ 2042, 2042 ], [ 2048, 2069 ], [ 2074, 2074 ], [ 2084, 2084 ], [ 2088, 2088 ], [ 2096, 2110 ], [ 2112, 2136 ], [ 2142, 2142 ], [ 2208, 2208 ], [ 2210, 2220 ], [ 8207, 8207 ], [ 64285, 64285 ], [ 64287, 64296 ], [ 64298, 64310 ], [ 64312, 64316 ], [ 64318, 64318 ], [ 64320, 64321 ], [ 64323, 64324 ], [ 64326, 64449 ], [ 64467, 64829 ], [ 64848, 64911 ], [ 64914, 64967 ], [ 65008, 65020 ], [ 65136, 65140 ], [ 65142, 65276 ], [ 67584, 67589 ], [ 67592, 67592 ], [ 67594, 67637 ], [ 67639, 67640 ], [ 67644, 67644 ], [ 67647, 67669 ], [ 67671, 67679 ], [ 67840, 67867 ], [ 67872, 67897 ], [ 67903, 67903 ], [ 67968, 68023 ], [ 68030, 68031 ], [ 68096, 68096 ], [ 68112, 68115 ], [ 68117, 68119 ], [ 68121, 68147 ], [ 68160, 68167 ], [ 68176, 68184 ], [ 68192, 68223 ], [ 68352, 68405 ], [ 68416, 68437 ], [ 68440, 68466 ], [ 68472, 68479 ], [ 68608, 68680 ], [ 126464, 126467 ], [ 126469, 126495 ], [ 126497, 126498 ], [ 126500, 126500 ], [ 126503, 126503 ], [ 126505, 126514 ], [ 126516, 126519 ], [ 126521, 126521 ], [ 126523, 126523 ], [ 126530, 126530 ], [ 126535, 126535 ], [ 126537, 126537 ], [ 126539, 126539 ], [ 126541, 126543 ], [ 126545, 126546 ], [ 126548, 126548 ], [ 126551, 126551 ], [ 126553, 126553 ], [ 126555, 126555 ], [ 126557, 126557 ], [ 126559, 126559 ], [ 126561, 126562 ], [ 126564, 126564 ], [ 126567, 126570 ], [ 126572, 126578 ], [ 126580, 126583 ], [ 126585, 126588 ], [ 126590, 126590 ], [ 126592, 126601 ], [ 126603, 126619 ], [ 126625, 126627 ], [ 126629, 126633 ], [ 126635, 126651 ], [ 1114109, 1114109 ] ];
    function isStrongRTLChar(charCode) {
        for (var i = 0; i < strongRTLRanges.length; i++) {
            var currentRange = strongRTLRanges[i];
            if (charCode >= currentRange[0] && charCode <= currentRange[1]) return !0;
        }
        return !1;
    }
    function StyleBox() {}
    function CueStyleBox(window, cue, styleOptions) {
        var isIE8 = /MSIE\s8\.0/.test(navigator.userAgent), color = "rgba(255, 255, 255, 1)", backgroundColor = "rgba(0, 0, 0, 0.8)";
        isIE8 && (color = "rgb(255, 255, 255)", backgroundColor = "rgb(0, 0, 0)"), StyleBox.call(this),
        this.cue = cue, this.cueDiv = parseContent(window, cue.text);
        var styles = {
            color: color,
            backgroundColor: backgroundColor,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        isIE8 || (styles.writingMode = "" === cue.vertical ? "horizontal-tb" : "lr" === cue.vertical ? "vertical-lr" : "vertical-rl",
        styles.unicodeBidi = "plaintext"), this.applyStyles(styles, this.cueDiv), this.div = window.document.createElement("div"),
        styles = {
            textAlign: "middle" === cue.align ? "center" : cue.align,
            font: styleOptions.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, isIE8 || (styles.direction = function(cueDiv) {
            var nodeStack = [], text = "";
            if (!cueDiv || !cueDiv.childNodes) return "ltr";
            function pushNodes(nodeStack, node) {
                for (var i = node.childNodes.length - 1; 0 <= i; i--) nodeStack.push(node.childNodes[i]);
            }
            function nextTextNode(nodeStack) {
                if (!nodeStack || !nodeStack.length) return null;
                var node = nodeStack.pop(), text = node.textContent || node.innerText;
                if (text) {
                    var m = text.match(/^.*(\n|\r)/);
                    return m ? m[nodeStack.length = 0] : text;
                }
                return "ruby" === node.tagName ? nextTextNode(nodeStack) : node.childNodes ? (pushNodes(nodeStack, node),
                nextTextNode(nodeStack)) : void 0;
            }
            for (pushNodes(nodeStack, cueDiv); text = nextTextNode(nodeStack); ) for (var i = 0; i < text.length; i++) if (isStrongRTLChar(text.charCodeAt(i))) return "rtl";
            return "ltr";
        }(this.cueDiv), styles.writingMode = "" === cue.vertical ? "horizontal-tb" : "lr" === cue.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"),
        this.applyStyles(styles), this.div.appendChild(this.cueDiv);
        var textPos = 0;
        switch (cue.positionAlign) {
          case "start":
            textPos = cue.position;
            break;

          case "middle":
            textPos = cue.position - cue.size / 2;
            break;

          case "end":
            textPos = cue.position - cue.size;
        }
        "" === cue.vertical ? this.applyStyles({
            left: this.formatStyle(textPos, "%"),
            width: this.formatStyle(cue.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(textPos, "%"),
            height: this.formatStyle(cue.size, "%")
        }), this.move = function(box) {
            this.applyStyles({
                top: this.formatStyle(box.top, "px"),
                bottom: this.formatStyle(box.bottom, "px"),
                left: this.formatStyle(box.left, "px"),
                right: this.formatStyle(box.right, "px"),
                height: this.formatStyle(box.height, "px"),
                width: this.formatStyle(box.width, "px")
            });
        };
    }
    function BoxPosition(obj) {
        var lh, height, width, top, isIE8 = /MSIE\s8\.0/.test(navigator.userAgent);
        if (obj.div) {
            height = obj.div.offsetHeight, width = obj.div.offsetWidth, top = obj.div.offsetTop;
            var rects = (rects = obj.div.childNodes) && (rects = rects[0]) && rects.getClientRects && rects.getClientRects();
            obj = obj.div.getBoundingClientRect(), lh = rects ? Math.max(rects[0] && rects[0].height || 0, obj.height / rects.length) : 0;
        }
        this.left = obj.left, this.right = obj.right, this.top = obj.top || top, this.height = obj.height || height,
        this.bottom = obj.bottom || top + (obj.height || height), this.width = obj.width || width,
        this.lineHeight = void 0 !== lh ? lh : obj.lineHeight, isIE8 && !this.lineHeight && (this.lineHeight = 13);
    }
    function moveBoxToLinePosition(window, styleBox, containerBox, boxPositions) {
        var boxPosition = new BoxPosition(styleBox), cue = styleBox.cue, linePos = function(cue) {
            if ("number" == typeof cue.line && (cue.snapToLines || 0 <= cue.line && cue.line <= 100)) return cue.line;
            if (!cue.track || !cue.track.textTrackList || !cue.track.textTrackList.mediaElement) return -1;
            for (var track = cue.track, trackList = track.textTrackList, count = 0, i = 0; i < trackList.length && trackList[i] !== track; i++) "showing" === trackList[i].mode && count++;
            return -1 * ++count;
        }(cue), axis = [];
        if (cue.snapToLines) {
            var size;
            switch (cue.vertical) {
              case "":
                axis = [ "+y", "-y" ], size = "height";
                break;

              case "rl":
                axis = [ "+x", "-x" ], size = "width";
                break;

              case "lr":
                axis = [ "-x", "+x" ], size = "width";
            }
            var step = boxPosition.lineHeight, position = step * Math.round(linePos), maxPosition = containerBox[size] + step, initialAxis = axis[0];
            Math.abs(position) > maxPosition && (position = position < 0 ? -1 : 1, position *= Math.ceil(maxPosition / step) * step),
            linePos < 0 && (position += "" === cue.vertical ? containerBox.height : containerBox.width,
            axis = axis.reverse()), boxPosition.move(initialAxis, position);
        } else {
            var calculatedPercentage = boxPosition.lineHeight / containerBox.height * 100;
            switch (cue.lineAlign) {
              case "middle":
                linePos -= calculatedPercentage / 2;
                break;

              case "end":
                linePos -= calculatedPercentage;
            }
            switch (cue.vertical) {
              case "":
                styleBox.applyStyles({
                    top: styleBox.formatStyle(linePos, "%")
                });
                break;

              case "rl":
                styleBox.applyStyles({
                    left: styleBox.formatStyle(linePos, "%")
                });
                break;

              case "lr":
                styleBox.applyStyles({
                    right: styleBox.formatStyle(linePos, "%")
                });
            }
            axis = [ "+y", "-x", "+x", "-y" ], boxPosition = new BoxPosition(styleBox);
        }
        var bestPosition = function(b, axis) {
            for (var bestPosition, specifiedPosition = new BoxPosition(b), percentage = 1, i = 0; i < axis.length; i++) {
                for (;b.overlapsOppositeAxis(containerBox, axis[i]) || b.within(containerBox) && b.overlapsAny(boxPositions); ) b.move(axis[i]);
                if (b.within(containerBox)) return b;
                var p = b.intersectPercentage(containerBox);
                p < percentage && (bestPosition = new BoxPosition(b), percentage = p), b = new BoxPosition(specifiedPosition);
            }
            return bestPosition || specifiedPosition;
        }(boxPosition, axis);
        styleBox.move(bestPosition.toCSSCompatValues(containerBox));
    }
    function WebVTT$1() {}
    StyleBox.prototype.applyStyles = function(styles, div) {
        for (var prop in div = div || this.div, styles) styles.hasOwnProperty(prop) && (div.style[prop] = styles[prop]);
    }, StyleBox.prototype.formatStyle = function(val, unit) {
        return 0 === val ? 0 : val + unit;
    }, (CueStyleBox.prototype = _objCreate(StyleBox.prototype)).constructor = CueStyleBox,
    BoxPosition.prototype.move = function(axis, toMove) {
        switch (toMove = void 0 !== toMove ? toMove : this.lineHeight, axis) {
          case "+x":
            this.left += toMove, this.right += toMove;
            break;

          case "-x":
            this.left -= toMove, this.right -= toMove;
            break;

          case "+y":
            this.top += toMove, this.bottom += toMove;
            break;

          case "-y":
            this.top -= toMove, this.bottom -= toMove;
        }
    }, BoxPosition.prototype.overlaps = function(b2) {
        return this.left < b2.right && this.right > b2.left && this.top < b2.bottom && this.bottom > b2.top;
    }, BoxPosition.prototype.overlapsAny = function(boxes) {
        for (var i = 0; i < boxes.length; i++) if (this.overlaps(boxes[i])) return !0;
        return !1;
    }, BoxPosition.prototype.within = function(container) {
        return this.top >= container.top && this.bottom <= container.bottom && this.left >= container.left && this.right <= container.right;
    }, BoxPosition.prototype.overlapsOppositeAxis = function(container, axis) {
        switch (axis) {
          case "+x":
            return this.left < container.left;

          case "-x":
            return this.right > container.right;

          case "+y":
            return this.top < container.top;

          case "-y":
            return this.bottom > container.bottom;
        }
    }, BoxPosition.prototype.intersectPercentage = function(b2) {
        return Math.max(0, Math.min(this.right, b2.right) - Math.max(this.left, b2.left)) * Math.max(0, Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)) / (this.height * this.width);
    }, BoxPosition.prototype.toCSSCompatValues = function(reference) {
        return {
            top: this.top - reference.top,
            bottom: reference.bottom - this.bottom,
            left: this.left - reference.left,
            right: reference.right - this.right,
            height: this.height,
            width: this.width
        };
    }, BoxPosition.getSimpleBoxPosition = function(obj) {
        var height = obj.div ? obj.div.offsetHeight : obj.tagName ? obj.offsetHeight : 0, width = obj.div ? obj.div.offsetWidth : obj.tagName ? obj.offsetWidth : 0, top = obj.div ? obj.div.offsetTop : obj.tagName ? obj.offsetTop : 0;
        return {
            left: (obj = obj.div ? obj.div.getBoundingClientRect() : obj.tagName ? obj.getBoundingClientRect() : obj).left,
            right: obj.right,
            top: obj.top || top,
            height: obj.height || height,
            bottom: obj.bottom || top + (obj.height || height),
            width: obj.width || width
        };
    }, WebVTT$1.StringDecoder = function() {
        return {
            decode: function(data) {
                if (!data) return "";
                if ("string" != typeof data) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(data));
            }
        };
    }, WebVTT$1.convertCueToDOMTree = function(window, cuetext) {
        return window && cuetext ? parseContent(window, cuetext) : null;
    };
    WebVTT$1.processCues = function(window, cues, overlay) {
        if (!window || !cues || !overlay) return null;
        for (;overlay.firstChild; ) overlay.removeChild(overlay.firstChild);
        var paddedOverlay = window.document.createElement("div");
        if (paddedOverlay.style.position = "absolute", paddedOverlay.style.left = "0", paddedOverlay.style.right = "0",
        paddedOverlay.style.top = "0", paddedOverlay.style.bottom = "0", paddedOverlay.style.margin = "1.5%",
        overlay.appendChild(paddedOverlay), function(cues) {
            for (var i = 0; i < cues.length; i++) if (cues[i].hasBeenReset || !cues[i].displayState) return !0;
            return !1;
        }(cues)) {
            var boxPositions = [], containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay), styleOptions = {
                font: Math.round(.05 * containerBox.height * 100) / 100 + "px sans-serif"
            };
            !function() {
                for (var styleBox, cue, i = 0; i < cues.length; i++) cue = cues[i], styleBox = new CueStyleBox(window, cue, styleOptions),
                paddedOverlay.appendChild(styleBox.div), moveBoxToLinePosition(0, styleBox, containerBox, boxPositions),
                cue.displayState = styleBox.div, boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
            }();
        } else for (var i = 0; i < cues.length; i++) paddedOverlay.appendChild(cues[i].displayState);
    }, (WebVTT$1.Parser = function(window, vttjs, decoder) {
        decoder || (decoder = vttjs, vttjs = {}), vttjs || (vttjs = {}), this.window = window,
        this.vttjs = vttjs, this.state = "INITIAL", this.buffer = "", this.decoder = decoder || new TextDecoder("utf8"),
        this.regionList = [];
    }).prototype = {
        reportOrThrowError: function(e) {
            if (!(e instanceof ParsingError)) throw e;
            this.onparsingerror && this.onparsingerror(e);
        },
        parse: function(data) {
            var self = this;
            function collectNextLine() {
                for (var buffer = self.buffer, pos = 0; pos < buffer.length && "\r" !== buffer[pos] && "\n" !== buffer[pos]; ) ++pos;
                var line = buffer.substr(0, pos);
                return "\r" === buffer[pos] && ++pos, "\n" === buffer[pos] && ++pos, self.buffer = buffer.substr(pos),
                line;
            }
            function parseHeader(input) {
                input.match(/X-TIMESTAMP-MAP/) ? parseOptions(input, function(k, v) {
                    switch (k) {
                      case "X-TIMESTAMP-MAP":
                        input = v, settings = new Settings(), parseOptions(input, function(k, v) {
                            switch (k) {
                              case "MPEGT":
                                settings.integer(k + "S", v);
                                break;

                              case "LOCA":
                                settings.set(k + "L", parseTimeStamp(v));
                            }
                        }, /[^\d]:/, /,/), self.ontimestampmap && self.ontimestampmap({
                            MPEGTS: settings.get("MPEGTS"),
                            LOCAL: settings.get("LOCAL")
                        });
                    }
                    var input, settings;
                }, /=/) : parseOptions(input, function(k, v) {
                    switch (k) {
                      case "Region":
                        !function(input) {
                            var settings = new Settings();
                            if (parseOptions(input, function(k, v) {
                                switch (k) {
                                  case "id":
                                    settings.set(k, v);
                                    break;

                                  case "width":
                                    settings.percent(k, v);
                                    break;

                                  case "lines":
                                    settings.integer(k, v);
                                    break;

                                  case "regionanchor":
                                  case "viewportanchor":
                                    var xy = v.split(",");
                                    if (2 !== xy.length) break;
                                    var anchor = new Settings();
                                    if (anchor.percent("x", xy[0]), anchor.percent("y", xy[1]), !anchor.has("x") || !anchor.has("y")) break;
                                    settings.set(k + "X", anchor.get("x")), settings.set(k + "Y", anchor.get("y"));
                                    break;

                                  case "scroll":
                                    settings.alt(k, v, [ "up" ]);
                                }
                            }, /=/, /\s/), settings.has("id")) {
                                var region = new (self.vttjs.VTTRegion || self.window.VTTRegion)();
                                region.width = settings.get("width", 100), region.lines = settings.get("lines", 3),
                                region.regionAnchorX = settings.get("regionanchorX", 0), region.regionAnchorY = settings.get("regionanchorY", 100),
                                region.viewportAnchorX = settings.get("viewportanchorX", 0), region.viewportAnchorY = settings.get("viewportanchorY", 100),
                                region.scroll = settings.get("scroll", ""), self.onregion && self.onregion(region),
                                self.regionList.push({
                                    id: settings.get("id"),
                                    region: region
                                });
                            }
                        }(v);
                    }
                }, /:/);
            }
            data && (self.buffer += self.decoder.decode(data, {
                stream: !0
            }));
            try {
                var line;
                if ("INITIAL" === self.state) {
                    if (!/\r\n|\n/.test(self.buffer)) return this;
                    var m = (line = collectNextLine()).match(/^WEBVTT([ \t].*)?$/);
                    if (!m || !m[0]) throw new ParsingError(ParsingError.Errors.BadSignature);
                    self.state = "HEADER";
                }
                for (var alreadyCollectedLine = !1; self.buffer; ) {
                    if (!/\r\n|\n/.test(self.buffer)) return this;
                    switch (alreadyCollectedLine ? alreadyCollectedLine = !1 : line = collectNextLine(),
                    self.state) {
                      case "HEADER":
                        /:/.test(line) ? parseHeader(line) : line || (self.state = "ID");
                        continue;

                      case "NOTE":
                        line || (self.state = "ID");
                        continue;

                      case "ID":
                        if (/^NOTE($|[ \t])/.test(line)) {
                            self.state = "NOTE";
                            break;
                        }
                        if (!line) continue;
                        if (self.cue = new (self.vttjs.VTTCue || self.window.VTTCue)(0, 0, ""), self.state = "CUE",
                        -1 === line.indexOf("--\x3e")) {
                            self.cue.id = line;
                            continue;
                        }

                      case "CUE":
                        try {
                            parseCue(line, self.cue, self.regionList);
                        } catch (e) {
                            self.reportOrThrowError(e), self.cue = null, self.state = "BADCUE";
                            continue;
                        }
                        self.state = "CUETEXT";
                        continue;

                      case "CUETEXT":
                        var hasSubstring = -1 !== line.indexOf("--\x3e");
                        if (!line || hasSubstring && (alreadyCollectedLine = !0)) {
                            self.oncue && self.oncue(self.cue), self.cue = null, self.state = "ID";
                            continue;
                        }
                        self.cue.text && (self.cue.text += "\n"), self.cue.text += line;
                        continue;

                      case "BADCUE":
                        line || (self.state = "ID");
                        continue;
                    }
                }
            } catch (e) {
                self.reportOrThrowError(e), "CUETEXT" === self.state && self.cue && self.oncue && self.oncue(self.cue),
                self.cue = null, self.state = "INITIAL" === self.state ? "BADWEBVTT" : "BADCUE";
            }
            return this;
        },
        flush: function() {
            var self = this;
            try {
                if (self.buffer += self.decoder.decode(), (self.cue || "HEADER" === self.state) && (self.buffer += "\n\n",
                self.parse()), "INITIAL" === self.state) throw new ParsingError(ParsingError.Errors.BadSignature);
            } catch (e) {
                self.reportOrThrowError(e);
            }
            return self.onflush && self.onflush(), this;
        }
    };
    var vtt$1 = WebVTT$1, autoKeyword = "auto", directionSetting = {
        "": !0,
        lr: !0,
        rl: !0
    }, alignSetting = {
        start: !0,
        middle: !0,
        end: !0,
        left: !0,
        right: !0
    };
    function findAlignSetting(value) {
        return "string" == typeof value && (!!alignSetting[value.toLowerCase()] && value.toLowerCase());
    }
    function extend$1(obj) {
        for (var i = 1; i < arguments.length; i++) {
            var cobj = arguments[i];
            for (var p in cobj) obj[p] = cobj[p];
        }
        return obj;
    }
    function VTTCue(startTime, endTime, text) {
        var cue = this, isIE8 = /MSIE\s8\.0/.test(navigator.userAgent), baseObj = {};
        isIE8 ? cue = document.createElement("custom") : baseObj.enumerable = !0, cue.hasBeenReset = !1;
        var _id = "", _pauseOnExit = !1, _startTime = startTime, _endTime = endTime, _text = text, _region = null, _vertical = "", _snapToLines = !0, _line = "auto", _lineAlign = "start", _position = 50, _positionAlign = "middle", _size = 50, _align = "middle";
        if (Object.defineProperty(cue, "id", extend$1({}, baseObj, {
            get: function() {
                return _id;
            },
            set: function(value) {
                _id = "" + value;
            }
        })), Object.defineProperty(cue, "pauseOnExit", extend$1({}, baseObj, {
            get: function() {
                return _pauseOnExit;
            },
            set: function(value) {
                _pauseOnExit = !!value;
            }
        })), Object.defineProperty(cue, "startTime", extend$1({}, baseObj, {
            get: function() {
                return _startTime;
            },
            set: function(value) {
                if ("number" != typeof value) throw new TypeError("Start time must be set to a number.");
                _startTime = value, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "endTime", extend$1({}, baseObj, {
            get: function() {
                return _endTime;
            },
            set: function(value) {
                if ("number" != typeof value) throw new TypeError("End time must be set to a number.");
                _endTime = value, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "text", extend$1({}, baseObj, {
            get: function() {
                return _text;
            },
            set: function(value) {
                _text = "" + value, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "region", extend$1({}, baseObj, {
            get: function() {
                return _region;
            },
            set: function(value) {
                _region = value, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "vertical", extend$1({}, baseObj, {
            get: function() {
                return _vertical;
            },
            set: function(value) {
                var setting = function(value) {
                    return "string" == typeof value && !!directionSetting[value.toLowerCase()] && value.toLowerCase();
                }(value);
                if (!1 === setting) throw new SyntaxError("An invalid or illegal string was specified.");
                _vertical = setting, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "snapToLines", extend$1({}, baseObj, {
            get: function() {
                return _snapToLines;
            },
            set: function(value) {
                _snapToLines = !!value, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "line", extend$1({}, baseObj, {
            get: function() {
                return _line;
            },
            set: function(value) {
                if ("number" != typeof value && value !== autoKeyword) throw new SyntaxError("An invalid number or illegal string was specified.");
                _line = value, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "lineAlign", extend$1({}, baseObj, {
            get: function() {
                return _lineAlign;
            },
            set: function(value) {
                var setting = findAlignSetting(value);
                if (!setting) throw new SyntaxError("An invalid or illegal string was specified.");
                _lineAlign = setting, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "position", extend$1({}, baseObj, {
            get: function() {
                return _position;
            },
            set: function(value) {
                if (value < 0 || 100 < value) throw new Error("Position must be between 0 and 100.");
                _position = value, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "positionAlign", extend$1({}, baseObj, {
            get: function() {
                return _positionAlign;
            },
            set: function(value) {
                var setting = findAlignSetting(value);
                if (!setting) throw new SyntaxError("An invalid or illegal string was specified.");
                _positionAlign = setting, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "size", extend$1({}, baseObj, {
            get: function() {
                return _size;
            },
            set: function(value) {
                if (value < 0 || 100 < value) throw new Error("Size must be between 0 and 100.");
                _size = value, this.hasBeenReset = !0;
            }
        })), Object.defineProperty(cue, "align", extend$1({}, baseObj, {
            get: function() {
                return _align;
            },
            set: function(value) {
                var setting = findAlignSetting(value);
                if (!setting) throw new SyntaxError("An invalid or illegal string was specified.");
                _align = setting, this.hasBeenReset = !0;
            }
        })), cue.displayState = void 0, isIE8) return cue;
    }
    VTTCue.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text);
    };
    var vttcue = VTTCue, scrollSetting = {
        "": !0,
        up: !0
    };
    function isValidPercentValue(value) {
        return "number" == typeof value && 0 <= value && value <= 100;
    }
    var vttregion = function() {
        var _width = 100, _lines = 3, _regionAnchorX = 0, _regionAnchorY = 100, _viewportAnchorX = 0, _viewportAnchorY = 100, _scroll = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return _width;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) throw new Error("Width must be between 0 and 100.");
                    _width = value;
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return _lines;
                },
                set: function(value) {
                    if ("number" != typeof value) throw new TypeError("Lines must be set to a number.");
                    _lines = value;
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return _regionAnchorY;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    _regionAnchorY = value;
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return _regionAnchorX;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    _regionAnchorX = value;
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return _viewportAnchorY;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    _viewportAnchorY = value;
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return _viewportAnchorX;
                },
                set: function(value) {
                    if (!isValidPercentValue(value)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    _viewportAnchorX = value;
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return _scroll;
                },
                set: function(value) {
                    var setting = function(value) {
                        return "string" == typeof value && !!scrollSetting[value.toLowerCase()] && value.toLowerCase();
                    }(value);
                    if (!1 === setting) throw new SyntaxError("An invalid or illegal string was specified.");
                    _scroll = setting;
                }
            }
        });
    }, browserIndex = createCommonjsModule(function(module) {
        var vttjs = module.exports = {
            WebVTT: vtt$1,
            VTTCue: vttcue,
            VTTRegion: vttregion
        };
        window_1.vttjs = vttjs, window_1.WebVTT = vttjs.WebVTT;
        var cueShim = vttjs.VTTCue, regionShim = vttjs.VTTRegion, nativeVTTCue = window_1.VTTCue, nativeVTTRegion = window_1.VTTRegion;
        vttjs.shim = function() {
            window_1.VTTCue = cueShim, window_1.VTTRegion = regionShim;
        }, vttjs.restore = function() {
            window_1.VTTCue = nativeVTTCue, window_1.VTTRegion = nativeVTTRegion;
        }, window_1.VTTCue || vttjs.shim();
    });
    var Tech = function(_Component) {
        function Tech() {
            var options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, ready = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {};
            classCallCheck(this, Tech), options.reportTouchActivity = !1;
            var _this = possibleConstructorReturn(this, _Component.call(this, null, options, ready));
            return _this.hasStarted_ = !1, _this.on("playing", function() {
                this.hasStarted_ = !0;
            }), _this.on("loadstart", function() {
                this.hasStarted_ = !1;
            }), ALL.names.forEach(function(name) {
                var props = ALL[name];
                options && options[props.getterName] && (_this[props.privateName] = options[props.getterName]);
            }), _this.featuresProgressEvents || _this.manualProgressOn(), _this.featuresTimeupdateEvents || _this.manualTimeUpdatesOn(),
            [ "Text", "Audio", "Video" ].forEach(function(track) {
                !1 === options["native" + track + "Tracks"] && (_this["featuresNative" + track + "Tracks"] = !1);
            }), !1 === options.nativeCaptions || !1 === options.nativeTextTracks ? _this.featuresNativeTextTracks = !1 : !0 !== options.nativeCaptions && !0 !== options.nativeTextTracks || (_this.featuresNativeTextTracks = !0),
            _this.featuresNativeTextTracks || _this.emulateTextTracks(), _this.autoRemoteTextTracks_ = new ALL.text.ListClass(),
            _this.initTrackListeners(), options.nativeControlsForTouch || _this.emitTapEvents(),
            _this.constructor && (_this.name_ = _this.constructor.name || "Unknown Tech"), _this;
        }
        return inherits(Tech, _Component), Tech.prototype.manualProgressOn = function() {
            this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress);
        }, Tech.prototype.manualProgressOff = function() {
            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange);
        }, Tech.prototype.trackProgress = function(event) {
            this.stopTrackingProgress(), this.progressInterval = this.setInterval(bind(this, function() {
                var numBufferedPercent = this.bufferedPercent();
                this.bufferedPercent_ !== numBufferedPercent && this.trigger("progress"), 1 === (this.bufferedPercent_ = numBufferedPercent) && this.stopTrackingProgress();
            }), 500);
        }, Tech.prototype.onDurationChange = function(event) {
            this.duration_ = this.duration();
        }, Tech.prototype.buffered = function() {
            return createTimeRanges(0, 0);
        }, Tech.prototype.bufferedPercent = function() {
            return bufferedPercent(this.buffered(), this.duration_);
        }, Tech.prototype.stopTrackingProgress = function() {
            this.clearInterval(this.progressInterval);
        }, Tech.prototype.manualTimeUpdatesOn = function() {
            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime);
        }, Tech.prototype.manualTimeUpdatesOff = function() {
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime),
            this.off("pause", this.stopTrackingCurrentTime);
        }, Tech.prototype.trackCurrentTime = function() {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                });
            }, 250);
        }, Tech.prototype.stopTrackingCurrentTime = function() {
            this.clearInterval(this.currentTimeInterval), this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            });
        }, Tech.prototype.dispose = function() {
            this.clearTracks(NORMAL.names), this.manualProgress && this.manualProgressOff(),
            this.manualTimeUpdates && this.manualTimeUpdatesOff(), _Component.prototype.dispose.call(this);
        }, Tech.prototype.clearTracks = function(types) {
            var _this2 = this;
            (types = [].concat(types)).forEach(function(type) {
                for (var list = _this2[type + "Tracks"]() || [], i = list.length; i--; ) {
                    var track = list[i];
                    "text" === type && _this2.removeRemoteTextTrack(track), list.removeTrack(track);
                }
            });
        }, Tech.prototype.cleanupAutoTextTracks = function() {
            for (var list = this.autoRemoteTextTracks_ || [], i = list.length; i--; ) {
                var track = list[i];
                this.removeRemoteTextTrack(track);
            }
        }, Tech.prototype.reset = function() {}, Tech.prototype.error = function(err) {
            return void 0 !== err && (this.error_ = new MediaError(err), this.trigger("error")),
            this.error_;
        }, Tech.prototype.played = function() {
            return this.hasStarted_ ? createTimeRanges(0, 0) : createTimeRanges();
        }, Tech.prototype.setCurrentTime = function() {
            this.manualTimeUpdates && this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            });
        }, Tech.prototype.initTrackListeners = function() {
            var _this3 = this;
            NORMAL.names.forEach(function(name) {
                var props = NORMAL[name], trackListChanges = function() {
                    _this3.trigger(name + "trackchange");
                }, tracks = _this3[props.getterName]();
                tracks.addEventListener("removetrack", trackListChanges), tracks.addEventListener("addtrack", trackListChanges),
                _this3.on("dispose", function() {
                    tracks.removeEventListener("removetrack", trackListChanges), tracks.removeEventListener("addtrack", trackListChanges);
                });
            });
        }, Tech.prototype.addWebVttScript_ = function() {
            var _this4 = this;
            if (!window_1.WebVTT) if (document_1.body.contains(this.el())) {
                if (!this.options_["vtt.js"] && isPlain(browserIndex) && 0 < Object.keys(browserIndex).length) return void this.trigger("vttjsloaded");
                var script = document_1.createElement("script");
                script.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js",
                script.onload = function() {
                    _this4.trigger("vttjsloaded");
                }, script.onerror = function() {
                    _this4.trigger("vttjserror");
                }, this.on("dispose", function() {
                    script.onload = null, script.onerror = null;
                }), window_1.WebVTT = !0, this.el().parentNode.appendChild(script);
            } else this.ready(this.addWebVttScript_);
        }, Tech.prototype.emulateTextTracks = function() {
            var _this5 = this, tracks = this.textTracks(), remoteTracks = this.remoteTextTracks(), handleAddTrack = function(e) {
                return tracks.addTrack(e.track);
            }, handleRemoveTrack = function(e) {
                return tracks.removeTrack(e.track);
            };
            remoteTracks.on("addtrack", handleAddTrack), remoteTracks.on("removetrack", handleRemoveTrack),
            this.addWebVttScript_();
            var updateDisplay = function() {
                return _this5.trigger("texttrackchange");
            }, textTracksChanges = function() {
                updateDisplay();
                for (var i = 0; i < tracks.length; i++) {
                    var track = tracks[i];
                    track.removeEventListener("cuechange", updateDisplay), "showing" === track.mode && track.addEventListener("cuechange", updateDisplay);
                }
            };
            textTracksChanges(), tracks.addEventListener("change", textTracksChanges), tracks.addEventListener("addtrack", textTracksChanges),
            tracks.addEventListener("removetrack", textTracksChanges), this.on("dispose", function() {
                remoteTracks.off("addtrack", handleAddTrack), remoteTracks.off("removetrack", handleRemoveTrack),
                tracks.removeEventListener("change", textTracksChanges), tracks.removeEventListener("addtrack", textTracksChanges),
                tracks.removeEventListener("removetrack", textTracksChanges);
                for (var i = 0; i < tracks.length; i++) {
                    tracks[i].removeEventListener("cuechange", updateDisplay);
                }
            });
        }, Tech.prototype.addTextTrack = function(kind, label, language) {
            if (!kind) throw new Error("TextTrack kind is required but was not provided");
            return function(self, kind, label, language) {
                var options = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, tracks = self.textTracks();
                options.kind = kind, label && (options.label = label), language && (options.language = language),
                options.tech = self;
                var track = new ALL.text.TrackClass(options);
                return tracks.addTrack(track), track;
            }(this, kind, label, language);
        }, Tech.prototype.createRemoteTextTrack = function(options) {
            var track = mergeOptions(options, {
                tech: this
            });
            return new REMOTE.remoteTextEl.TrackClass(track);
        }, Tech.prototype.addRemoteTextTrack = function() {
            var _this6 = this, options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, manualCleanup = arguments[1], htmlTrackElement = this.createRemoteTextTrack(options);
            return !0 !== manualCleanup && !1 !== manualCleanup && (log$1.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),
            manualCleanup = !0), this.remoteTextTrackEls().addTrackElement_(htmlTrackElement),
            this.remoteTextTracks().addTrack(htmlTrackElement.track), !0 !== manualCleanup && this.ready(function() {
                return _this6.autoRemoteTextTracks_.addTrack(htmlTrackElement.track);
            }), htmlTrackElement;
        }, Tech.prototype.removeRemoteTextTrack = function(track) {
            var trackElement = this.remoteTextTrackEls().getTrackElementByTrack_(track);
            this.remoteTextTrackEls().removeTrackElement_(trackElement), this.remoteTextTracks().removeTrack(track),
            this.autoRemoteTextTracks_.removeTrack(track);
        }, Tech.prototype.getVideoPlaybackQuality = function() {
            return {};
        }, Tech.prototype.setPoster = function() {}, Tech.prototype.playsinline = function() {},
        Tech.prototype.setPlaysinline = function() {}, Tech.prototype.canPlayType = function() {
            return "";
        }, Tech.canPlayType = function() {
            return "";
        }, Tech.canPlaySource = function(srcObj, options) {
            return Tech.canPlayType(srcObj.type);
        }, Tech.isTech = function(component) {
            return component.prototype instanceof Tech || component instanceof Tech || component === Tech;
        }, Tech.registerTech = function(name, tech) {
            if (Tech.techs_ || (Tech.techs_ = {}), !Tech.isTech(tech)) throw new Error("Tech " + name + " must be a Tech");
            if (!Tech.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
            if (!Tech.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
            return name = toTitleCase(name), Tech.techs_[name] = tech, "Tech" !== name && Tech.defaultTechOrder_.push(name),
            tech;
        }, Tech.getTech = function(name) {
            if (name) return name = toTitleCase(name), Tech.techs_ && Tech.techs_[name] ? Tech.techs_[name] : window_1 && window_1.videojs && window_1.videojs[name] ? (log$1.warn("The " + name + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),
            window_1.videojs[name]) : void 0;
        }, Tech;
    }(Component);
    ALL.names.forEach(function(name) {
        var props = ALL[name];
        Tech.prototype[props.getterName] = function() {
            return this[props.privateName] = this[props.privateName] || new props.ListClass(),
            this[props.privateName];
        };
    }), Tech.prototype.featuresVolumeControl = !0, Tech.prototype.featuresFullscreenResize = !1,
    Tech.prototype.featuresPlaybackRate = !1, Tech.prototype.featuresProgressEvents = !1,
    Tech.prototype.featuresTimeupdateEvents = !1, Tech.prototype.featuresNativeTextTracks = !1,
    Tech.withSourceHandlers = function(_Tech) {
        _Tech.registerSourceHandler = function(handler, index) {
            var handlers = _Tech.sourceHandlers;
            handlers || (handlers = _Tech.sourceHandlers = []), void 0 === index && (index = handlers.length),
            handlers.splice(index, 0, handler);
        }, _Tech.canPlayType = function(type) {
            for (var handlers = _Tech.sourceHandlers || [], can = void 0, i = 0; i < handlers.length; i++) if (can = handlers[i].canPlayType(type)) return can;
            return "";
        }, _Tech.selectSourceHandler = function(source, options) {
            for (var handlers = _Tech.sourceHandlers || [], i = 0; i < handlers.length; i++) if (handlers[i].canHandleSource(source, options)) return handlers[i];
            return null;
        }, _Tech.canPlaySource = function(srcObj, options) {
            var sh = _Tech.selectSourceHandler(srcObj, options);
            return sh ? sh.canHandleSource(srcObj, options) : "";
        };
        [ "seekable", "duration" ].forEach(function(fnName) {
            var originalFn = this[fnName];
            "function" == typeof originalFn && (this[fnName] = function() {
                return this.sourceHandler_ && this.sourceHandler_[fnName] ? this.sourceHandler_[fnName].apply(this.sourceHandler_, arguments) : originalFn.apply(this, arguments);
            });
        }, _Tech.prototype), _Tech.prototype.setSource = function(source) {
            var sh = _Tech.selectSourceHandler(source, this.options_);
            sh || (_Tech.nativeSourceHandler ? sh = _Tech.nativeSourceHandler : log$1.error("No source hander found for the current source.")),
            this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), sh !== _Tech.nativeSourceHandler && (this.currentSource_ = source),
            this.sourceHandler_ = sh.handleSource(source, this, this.options_), this.on("dispose", this.disposeSourceHandler);
        }, _Tech.prototype.disposeSourceHandler = function() {
            this.currentSource_ && (this.clearTracks([ "audio", "video" ]), this.currentSource_ = null),
            this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(),
            this.sourceHandler_ = null);
        };
    }, Component.registerComponent("Tech", Tech), Tech.registerTech("Tech", Tech), Tech.defaultTechOrder_ = [];
    var middlewares = {}, middlewareInstances = {}, TERMINATOR = {};
    function setSource(player, src, next) {
        player.setTimeout(function() {
            return function setSourceHelper() {
                var src = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                var middleware = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                var next = arguments[2];
                var player = arguments[3];
                var acc = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [];
                var lastRun = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                var mwFactory = middleware[0], mwrest = middleware.slice(1);
                if ("string" == typeof mwFactory) setSourceHelper(src, middlewares[mwFactory], next, player, acc, lastRun); else if (mwFactory) {
                    var mw = function(player, mwFactory) {
                        var mws = middlewareInstances[player.id()], mw = null;
                        if (null == mws) return mw = mwFactory(player), middlewareInstances[player.id()] = [ [ mwFactory, mw ] ],
                        mw;
                        for (var i = 0; i < mws.length; i++) {
                            var _mws$i = mws[i], mwf = _mws$i[0], mwi = _mws$i[1];
                            mwf === mwFactory && (mw = mwi);
                        }
                        null === mw && (mw = mwFactory(player), mws.push([ mwFactory, mw ]));
                        return mw;
                    }(player, mwFactory);
                    mw.setSource(assign({}, src), function(err, _src) {
                        if (err) return setSourceHelper(src, mwrest, next, player, acc, lastRun);
                        acc.push(mw), setSourceHelper(_src, src.type === _src.type ? mwrest : middlewares[_src.type], next, player, acc, lastRun);
                    });
                } else mwrest.length ? setSourceHelper(src, mwrest, next, player, acc, lastRun) : lastRun ? next(src, acc) : setSourceHelper(src, middlewares["*"], next, player, acc, !0);
            }(src, middlewares[src.type], next, player);
        }, 1);
    }
    function mediate(middleware, tech, method) {
        var arg = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, callMethod = "call" + toTitleCase(method), middlewareValue = middleware.reduce(middlewareIterator(callMethod), arg), terminated = middlewareValue === TERMINATOR, returnValue = terminated ? null : tech[method](middlewareValue);
        return function(mws, method, value, terminated) {
            for (var i = mws.length - 1; 0 <= i; i--) {
                var mw = mws[i];
                mw[method] && mw[method](terminated, value);
            }
        }(middleware, method, returnValue, terminated), returnValue;
    }
    var allowedGetters = {
        buffered: 1,
        currentTime: 1,
        duration: 1,
        seekable: 1,
        played: 1,
        paused: 1
    }, allowedSetters = {
        setCurrentTime: 1
    }, allowedMediators = {
        play: 1,
        pause: 1
    };
    function middlewareIterator(method) {
        return function(value, mw) {
            return value === TERMINATOR ? TERMINATOR : mw[method] ? mw[method](value) : value;
        };
    }
    var MediaLoader = function(_Component) {
        function MediaLoader(player, options, ready) {
            classCallCheck(this, MediaLoader);
            var options_ = mergeOptions({
                createEl: !1
            }, options), _this = possibleConstructorReturn(this, _Component.call(this, player, options_, ready));
            if (options.playerOptions.sources && 0 !== options.playerOptions.sources.length) player.src(options.playerOptions.sources); else for (var i = 0, j = options.playerOptions.techOrder; i < j.length; i++) {
                var techName = toTitleCase(j[i]), tech = Tech.getTech(techName);
                if (techName || (tech = Component.getComponent(techName)), tech && tech.isSupported()) {
                    player.loadTech_(techName);
                    break;
                }
            }
            return _this;
        }
        return inherits(MediaLoader, _Component), MediaLoader;
    }(Component);
    Component.registerComponent("MediaLoader", MediaLoader);
    var ClickableComponent = function(_Component) {
        function ClickableComponent(player, options) {
            classCallCheck(this, ClickableComponent);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return _this.emitTapEvents(), _this.enable(), _this;
        }
        return inherits(ClickableComponent, _Component), ClickableComponent.prototype.createEl = function() {
            var tag = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "div", props = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, attributes = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            props = assign({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            }, props), "button" === tag && log$1.error("Creating a ClickableComponent with an HTML element of " + tag + " is not supported; use a Button instead."),
            attributes = assign({
                role: "button",
                "aria-live": "polite"
            }, attributes), this.tabIndex_ = props.tabIndex;
            var el = _Component.prototype.createEl.call(this, tag, props, attributes);
            return this.createControlTextEl(el), el;
        }, ClickableComponent.prototype.dispose = function() {
            this.controlTextEl_ = null, _Component.prototype.dispose.call(this);
        }, ClickableComponent.prototype.createControlTextEl = function(el) {
            return this.controlTextEl_ = createEl("span", {
                className: "vjs-control-text"
            }), el && el.appendChild(this.controlTextEl_), this.controlText(this.controlText_, el),
            this.controlTextEl_;
        }, ClickableComponent.prototype.controlText = function(text) {
            var el = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.el();
            if (void 0 === text) return this.controlText_ || "Need Text";
            var localizedText = this.localize(text);
            this.controlText_ = text, textContent(this.controlTextEl_, localizedText), this.nonIconControl || el.setAttribute("title", localizedText);
        }, ClickableComponent.prototype.buildCSSClass = function() {
            return "vjs-control vjs-button " + _Component.prototype.buildCSSClass.call(this);
        }, ClickableComponent.prototype.enable = function() {
            this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"),
            void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_),
            this.on([ "tap", "click" ], this.handleClick), this.on("focus", this.handleFocus),
            this.on("blur", this.handleBlur));
        }, ClickableComponent.prototype.disable = function() {
            this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"),
            void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off([ "tap", "click" ], this.handleClick),
            this.off("focus", this.handleFocus), this.off("blur", this.handleBlur);
        }, ClickableComponent.prototype.handleClick = function(event) {}, ClickableComponent.prototype.handleFocus = function(event) {
            on(document_1, "keydown", bind(this, this.handleKeyPress));
        }, ClickableComponent.prototype.handleKeyPress = function(event) {
            32 === event.which || 13 === event.which ? (event.preventDefault(), this.trigger("click")) : _Component.prototype.handleKeyPress && _Component.prototype.handleKeyPress.call(this, event);
        }, ClickableComponent.prototype.handleBlur = function(event) {
            off(document_1, "keydown", bind(this, this.handleKeyPress));
        }, ClickableComponent;
    }(Component);
    Component.registerComponent("ClickableComponent", ClickableComponent);
    var PosterImage = function(_ClickableComponent) {
        function PosterImage(player, options) {
            classCallCheck(this, PosterImage);
            var _this = possibleConstructorReturn(this, _ClickableComponent.call(this, player, options));
            return _this.update(), player.on("posterchange", bind(_this, _this.update)), _this;
        }
        return inherits(PosterImage, _ClickableComponent), PosterImage.prototype.dispose = function() {
            this.player().off("posterchange", this.update), _ClickableComponent.prototype.dispose.call(this);
        }, PosterImage.prototype.createEl = function() {
            var el = createEl("div", {
                className: "vjs-poster",
                tabIndex: -1
            });
            return BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = createEl("img"), el.appendChild(this.fallbackImg_)),
            el;
        }, PosterImage.prototype.update = function(event) {
            var url = this.player().poster();
            this.setSrc(url), url ? this.show() : this.hide();
        }, PosterImage.prototype.setSrc = function(url) {
            if (this.fallbackImg_) this.fallbackImg_.src = url; else {
                var backgroundImage = "";
                url && (backgroundImage = 'url("' + url + '")'), this.el_.style.backgroundImage = backgroundImage;
            }
        }, PosterImage.prototype.handleClick = function(event) {
            this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause());
        }, PosterImage;
    }(ClickableComponent);
    Component.registerComponent("PosterImage", PosterImage);
    var fontMap = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };
    function constructColor(color, opacity) {
        return "rgba(" + parseInt(color[1] + color[1], 16) + "," + parseInt(color[2] + color[2], 16) + "," + parseInt(color[3] + color[3], 16) + "," + opacity + ")";
    }
    function tryUpdateStyle(el, style, rule) {
        try {
            el.style[style] = rule;
        } catch (e) {
            return;
        }
    }
    var TextTrackDisplay = function(_Component) {
        function TextTrackDisplay(player, options, ready) {
            classCallCheck(this, TextTrackDisplay);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options, ready));
            return player.on("loadstart", bind(_this, _this.toggleDisplay)), player.on("texttrackchange", bind(_this, _this.updateDisplay)),
            player.on("loadstart", bind(_this, _this.preselectTrack)), player.ready(bind(_this, function() {
                if (player.tech_ && player.tech_.featuresNativeTextTracks) this.hide(); else {
                    player.on("fullscreenchange", bind(this, this.updateDisplay));
                    for (var tracks = this.options_.playerOptions.tracks || [], i = 0; i < tracks.length; i++) this.player_.addRemoteTextTrack(tracks[i], !0);
                    this.preselectTrack();
                }
            })), _this;
        }
        return inherits(TextTrackDisplay, _Component), TextTrackDisplay.prototype.preselectTrack = function() {
            for (var modes = {
                captions: 1,
                subtitles: 1
            }, trackList = this.player_.textTracks(), userPref = this.player_.cache_.selectedLanguage, firstDesc = void 0, firstCaptions = void 0, preferredTrack = void 0, i = 0; i < trackList.length; i++) {
                var track = trackList[i];
                userPref && userPref.enabled && userPref.language === track.language ? track.kind === userPref.kind ? preferredTrack = track : preferredTrack || (preferredTrack = track) : userPref && !userPref.enabled ? firstCaptions = firstDesc = preferredTrack = null : track.default && ("descriptions" !== track.kind || firstDesc ? track.kind in modes && !firstCaptions && (firstCaptions = track) : firstDesc = track);
            }
            preferredTrack ? preferredTrack.mode = "showing" : firstCaptions ? firstCaptions.mode = "showing" : firstDesc && (firstDesc.mode = "showing");
        }, TextTrackDisplay.prototype.toggleDisplay = function() {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show();
        }, TextTrackDisplay.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-text-track-display"
            }, {
                "aria-live": "off",
                "aria-atomic": "true"
            });
        }, TextTrackDisplay.prototype.clearDisplay = function() {
            "function" == typeof window_1.WebVTT && window_1.WebVTT.processCues(window_1, [], this.el_);
        }, TextTrackDisplay.prototype.updateDisplay = function() {
            var tracks = this.player_.textTracks();
            this.clearDisplay();
            for (var descriptionsTrack = null, captionsSubtitlesTrack = null, i = tracks.length; i--; ) {
                var track = tracks[i];
                "showing" === track.mode && ("descriptions" === track.kind ? descriptionsTrack = track : captionsSubtitlesTrack = track);
            }
            captionsSubtitlesTrack ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"),
            this.updateForTrack(captionsSubtitlesTrack)) : descriptionsTrack && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"),
            this.updateForTrack(descriptionsTrack));
        }, TextTrackDisplay.prototype.updateForTrack = function(track) {
            if ("function" == typeof window_1.WebVTT && track.activeCues) {
                for (var overrides = this.player_.textTrackSettings.getValues(), cues = [], _i = 0; _i < track.activeCues.length; _i++) cues.push(track.activeCues[_i]);
                window_1.WebVTT.processCues(window_1, cues, this.el_);
                for (var i = cues.length; i--; ) {
                    var cue = cues[i];
                    if (cue) {
                        var cueDiv = cue.displayState;
                        if (overrides.color && (cueDiv.firstChild.style.color = overrides.color), overrides.textOpacity && tryUpdateStyle(cueDiv.firstChild, "color", constructColor(overrides.color || "#fff", overrides.textOpacity)),
                        overrides.backgroundColor && (cueDiv.firstChild.style.backgroundColor = overrides.backgroundColor),
                        overrides.backgroundOpacity && tryUpdateStyle(cueDiv.firstChild, "backgroundColor", constructColor(overrides.backgroundColor || "#000", overrides.backgroundOpacity)),
                        overrides.windowColor && (overrides.windowOpacity ? tryUpdateStyle(cueDiv, "backgroundColor", constructColor(overrides.windowColor, overrides.windowOpacity)) : cueDiv.style.backgroundColor = overrides.windowColor),
                        overrides.edgeStyle && ("dropshadow" === overrides.edgeStyle ? cueDiv.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === overrides.edgeStyle ? cueDiv.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === overrides.edgeStyle ? cueDiv.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === overrides.edgeStyle && (cueDiv.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),
                        overrides.fontPercent && 1 !== overrides.fontPercent) {
                            var fontSize = window_1.parseFloat(cueDiv.style.fontSize);
                            cueDiv.style.fontSize = fontSize * overrides.fontPercent + "px", cueDiv.style.height = "auto",
                            cueDiv.style.top = "auto", cueDiv.style.bottom = "2px";
                        }
                        overrides.fontFamily && "default" !== overrides.fontFamily && ("small-caps" === overrides.fontFamily ? cueDiv.firstChild.style.fontVariant = "small-caps" : cueDiv.firstChild.style.fontFamily = fontMap[overrides.fontFamily]);
                    }
                }
            }
        }, TextTrackDisplay;
    }(Component);
    Component.registerComponent("TextTrackDisplay", TextTrackDisplay);
    var LoadingSpinner = function(_Component) {
        function LoadingSpinner() {
            return classCallCheck(this, LoadingSpinner), possibleConstructorReturn(this, _Component.apply(this, arguments));
        }
        return inherits(LoadingSpinner, _Component), LoadingSpinner.prototype.createEl = function() {
            var isAudio = this.player_.isAudio(), playerType = this.localize(isAudio ? "Audio Player" : "Video Player"), controlText = createEl("span", {
                className: "vjs-control-text",
                innerHTML: this.localize("{1} is loading.", [ playerType ])
            }), el = _Component.prototype.createEl.call(this, "div", {
                className: "vjs-loading-spinner",
                dir: "ltr"
            });
            return el.appendChild(controlText), el;
        }, LoadingSpinner;
    }(Component);
    Component.registerComponent("LoadingSpinner", LoadingSpinner);
    var Button = function(_ClickableComponent) {
        function Button() {
            return classCallCheck(this, Button), possibleConstructorReturn(this, _ClickableComponent.apply(this, arguments));
        }
        return inherits(Button, _ClickableComponent), Button.prototype.createEl = function(tag) {
            var props = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, attributes = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            props = assign({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            }, props), attributes = assign({
                type: "button",
                "aria-live": "polite"
            }, attributes);
            var el = Component.prototype.createEl.call(this, "button", props, attributes);
            return this.createControlTextEl(el), el;
        }, Button.prototype.addChild = function(child) {
            var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, className = this.constructor.name;
            return log$1.warn("Adding an actionable (user controllable) child to a Button (" + className + ") is not supported; use a ClickableComponent instead."),
            Component.prototype.addChild.call(this, child, options);
        }, Button.prototype.enable = function() {
            _ClickableComponent.prototype.enable.call(this), this.el_.removeAttribute("disabled");
        }, Button.prototype.disable = function() {
            _ClickableComponent.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled");
        }, Button.prototype.handleKeyPress = function(event) {
            32 !== event.which && 13 !== event.which && _ClickableComponent.prototype.handleKeyPress.call(this, event);
        }, Button;
    }(ClickableComponent);
    Component.registerComponent("Button", Button);
    var BigPlayButton = function(_Button) {
        function BigPlayButton(player, options) {
            classCallCheck(this, BigPlayButton);
            var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
            return _this.mouseused_ = !1, _this.on("mousedown", _this.handleMouseDown), _this;
        }
        return inherits(BigPlayButton, _Button), BigPlayButton.prototype.buildCSSClass = function() {
            return "vjs-big-play-button";
        }, BigPlayButton.prototype.handleClick = function(event) {
            var playPromise = this.player_.play();
            if (!(this.mouseused_ && event.clientX && event.clientY)) {
                var cb = this.player_.getChild("controlBar"), playToggle = cb && cb.getChild("playToggle");
                if (playToggle) {
                    var playFocus = function() {
                        return playToggle.focus();
                    };
                    isPromise(playPromise) ? playPromise.then(playFocus, function() {}) : this.setTimeout(playFocus, 1);
                } else this.player_.focus();
            }
        }, BigPlayButton.prototype.handleKeyPress = function(event) {
            this.mouseused_ = !1, _Button.prototype.handleKeyPress.call(this, event);
        }, BigPlayButton.prototype.handleMouseDown = function(event) {
            this.mouseused_ = !0;
        }, BigPlayButton;
    }(Button);
    BigPlayButton.prototype.controlText_ = "Play Video", Component.registerComponent("BigPlayButton", BigPlayButton);
    var CloseButton = function(_Button) {
        function CloseButton(player, options) {
            classCallCheck(this, CloseButton);
            var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
            return _this.controlText(options && options.controlText || _this.localize("Close")),
            _this;
        }
        return inherits(CloseButton, _Button), CloseButton.prototype.buildCSSClass = function() {
            return "vjs-close-button " + _Button.prototype.buildCSSClass.call(this);
        }, CloseButton.prototype.handleClick = function(event) {
            this.trigger({
                type: "close",
                bubbles: !1
            });
        }, CloseButton;
    }(Button);
    Component.registerComponent("CloseButton", CloseButton);
    var PlayToggle = function(_Button) {
        function PlayToggle(player, options) {
            classCallCheck(this, PlayToggle);
            var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
            return _this.on(player, "play", _this.handlePlay), _this.on(player, "pause", _this.handlePause),
            _this.on(player, "ended", _this.handleEnded), _this;
        }
        return inherits(PlayToggle, _Button), PlayToggle.prototype.buildCSSClass = function() {
            return "vjs-play-control " + _Button.prototype.buildCSSClass.call(this);
        }, PlayToggle.prototype.handleClick = function(event) {
            this.player_.paused() ? this.player_.play() : this.player_.pause();
        }, PlayToggle.prototype.handleSeeked = function(event) {
            this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(event) : this.handlePlay(event);
        }, PlayToggle.prototype.handlePlay = function(event) {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"),
            this.controlText("Pause");
        }, PlayToggle.prototype.handlePause = function(event) {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play");
        }, PlayToggle.prototype.handleEnded = function(event) {
            this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"),
            this.one(this.player_, "seeked", this.handleSeeked);
        }, PlayToggle;
    }(Button);
    function formatTime(seconds) {
        var guide = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : seconds;
        seconds = seconds < 0 ? 0 : seconds;
        var s = Math.floor(seconds % 60), m = Math.floor(seconds / 60 % 60), h = Math.floor(seconds / 3600), gm = Math.floor(guide / 60 % 60), gh = Math.floor(guide / 3600);
        return (isNaN(seconds) || seconds === 1 / 0) && (h = m = s = "-"), (h = 0 < h || 0 < gh ? h + ":" : "") + (m = ((h || 10 <= gm) && m < 10 ? "0" + m : m) + ":") + (s = s < 10 ? "0" + s : s);
    }
    PlayToggle.prototype.controlText_ = "Play", Component.registerComponent("PlayToggle", PlayToggle);
    var TimeDisplay = function(_Component) {
        function TimeDisplay(player, options) {
            classCallCheck(this, TimeDisplay);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return _this.throttledUpdateContent = throttle(bind(_this, _this.updateContent), 25),
            _this.on(player, "timeupdate", _this.throttledUpdateContent), _this;
        }
        return inherits(TimeDisplay, _Component), TimeDisplay.prototype.createEl = function(plainName) {
            var className = this.buildCSSClass(), el = _Component.prototype.createEl.call(this, "div", {
                className: className + " vjs-time-control vjs-control"
            });
            return this.contentEl_ = createEl("div", {
                className: className + "-display"
            }, {
                "aria-live": "off"
            }, createEl("span", {
                className: "vjs-control-text",
                textContent: this.localize(this.controlText_)
            })), this.updateTextNode_(), el.appendChild(this.contentEl_), el;
        }, TimeDisplay.prototype.dispose = function() {
            this.contentEl_ = null, this.textNode_ = null, _Component.prototype.dispose.call(this);
        }, TimeDisplay.prototype.updateTextNode_ = function() {
            if (this.contentEl_) {
                for (;this.contentEl_.firstChild; ) this.contentEl_.removeChild(this.contentEl_.firstChild);
                this.textNode_ = document_1.createTextNode(this.formattedTime_ || "0:00"), this.contentEl_.appendChild(this.textNode_);
            }
        }, TimeDisplay.prototype.formatTime_ = function(time) {
            return formatTime(time);
        }, TimeDisplay.prototype.updateFormattedTime_ = function(time) {
            var formattedTime = this.formatTime_(time);
            formattedTime !== this.formattedTime_ && (this.formattedTime_ = formattedTime, this.requestAnimationFrame(this.updateTextNode_));
        }, TimeDisplay.prototype.updateContent = function(event) {}, TimeDisplay;
    }(Component);
    TimeDisplay.prototype.controlText_ = "Time", Component.registerComponent("TimeDisplay", TimeDisplay);
    var CurrentTimeDisplay = function(_TimeDisplay) {
        function CurrentTimeDisplay(player, options) {
            classCallCheck(this, CurrentTimeDisplay);
            var _this = possibleConstructorReturn(this, _TimeDisplay.call(this, player, options));
            return _this.on(player, "ended", _this.handleEnded), _this;
        }
        return inherits(CurrentTimeDisplay, _TimeDisplay), CurrentTimeDisplay.prototype.buildCSSClass = function() {
            return "vjs-current-time";
        }, CurrentTimeDisplay.prototype.updateContent = function(event) {
            var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.updateFormattedTime_(time);
        }, CurrentTimeDisplay.prototype.handleEnded = function(event) {
            this.player_.duration() && this.updateFormattedTime_(this.player_.duration());
        }, CurrentTimeDisplay;
    }(TimeDisplay);
    CurrentTimeDisplay.prototype.controlText_ = "Current Time", Component.registerComponent("CurrentTimeDisplay", CurrentTimeDisplay);
    var DurationDisplay = function(_TimeDisplay) {
        function DurationDisplay(player, options) {
            classCallCheck(this, DurationDisplay);
            var _this = possibleConstructorReturn(this, _TimeDisplay.call(this, player, options));
            return _this.on(player, "durationchange", _this.updateContent), _this.on(player, "loadedmetadata", _this.throttledUpdateContent),
            _this;
        }
        return inherits(DurationDisplay, _TimeDisplay), DurationDisplay.prototype.buildCSSClass = function() {
            return "vjs-duration";
        }, DurationDisplay.prototype.updateContent = function(event) {
            var duration = this.player_.duration();
            duration && this.duration_ !== duration && (this.duration_ = duration, this.updateFormattedTime_(duration));
        }, DurationDisplay;
    }(TimeDisplay);
    DurationDisplay.prototype.controlText_ = "Duration Time", Component.registerComponent("DurationDisplay", DurationDisplay);
    var TimeDivider = function(_Component) {
        function TimeDivider() {
            return classCallCheck(this, TimeDivider), possibleConstructorReturn(this, _Component.apply(this, arguments));
        }
        return inherits(TimeDivider, _Component), TimeDivider.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            });
        }, TimeDivider;
    }(Component);
    Component.registerComponent("TimeDivider", TimeDivider);
    var RemainingTimeDisplay = function(_TimeDisplay) {
        function RemainingTimeDisplay(player, options) {
            classCallCheck(this, RemainingTimeDisplay);
            var _this = possibleConstructorReturn(this, _TimeDisplay.call(this, player, options));
            return _this.on(player, "durationchange", _this.throttledUpdateContent), _this.on(player, "ended", _this.handleEnded),
            _this;
        }
        return inherits(RemainingTimeDisplay, _TimeDisplay), RemainingTimeDisplay.prototype.buildCSSClass = function() {
            return "vjs-remaining-time";
        }, RemainingTimeDisplay.prototype.formatTime_ = function(time) {
            return "-" + _TimeDisplay.prototype.formatTime_.call(this, time);
        }, RemainingTimeDisplay.prototype.updateContent = function(event) {
            this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()));
        }, RemainingTimeDisplay.prototype.handleEnded = function(event) {
            this.player_.duration() && this.updateFormattedTime_(0);
        }, RemainingTimeDisplay;
    }(TimeDisplay);
    RemainingTimeDisplay.prototype.controlText_ = "Remaining Time", Component.registerComponent("RemainingTimeDisplay", RemainingTimeDisplay);
    var LiveDisplay = function(_Component) {
        function LiveDisplay(player, options) {
            classCallCheck(this, LiveDisplay);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return _this.updateShowing(), _this.on(_this.player(), "durationchange", _this.updateShowing),
            _this;
        }
        return inherits(LiveDisplay, _Component), LiveDisplay.prototype.createEl = function() {
            var el = _Component.prototype.createEl.call(this, "div", {
                className: "vjs-live-control vjs-control"
            });
            return this.contentEl_ = createEl("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
            }, {
                "aria-live": "off"
            }), el.appendChild(this.contentEl_), el;
        }, LiveDisplay.prototype.dispose = function() {
            this.contentEl_ = null, _Component.prototype.dispose.call(this);
        }, LiveDisplay.prototype.updateShowing = function(event) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide();
        }, LiveDisplay;
    }(Component);
    Component.registerComponent("LiveDisplay", LiveDisplay);
    var Slider = function(_Component) {
        function Slider(player, options) {
            classCallCheck(this, Slider);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return _this.bar = _this.getChild(_this.options_.barName), _this.vertical(!!_this.options_.vertical),
            _this.enable(), _this;
        }
        return inherits(Slider, _Component), Slider.prototype.enabled = function() {
            return this.enabled_;
        }, Slider.prototype.enable = function() {
            this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown),
            this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick),
            this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update),
            this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0);
        }, Slider.prototype.disable = function() {
            if (this.enabled()) {
                var doc = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown),
                this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick),
                this.off(this.player_, "controlsvisible", this.update), this.off(doc, "mousemove", this.handleMouseMove),
                this.off(doc, "mouseup", this.handleMouseUp), this.off(doc, "touchmove", this.handleMouseMove),
                this.off(doc, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"),
                this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
                this.enabled_ = !1;
            }
        }, Slider.prototype.createEl = function(type) {
            var props = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, attributes = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            return props.className = props.className + " vjs-slider", props = assign({
                tabIndex: 0
            }, props), attributes = assign({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, attributes), _Component.prototype.createEl.call(this, type, props, attributes);
        }, Slider.prototype.handleMouseDown = function(event) {
            var doc = this.bar.el_.ownerDocument;
            event.preventDefault(), blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"),
            this.on(doc, "mousemove", this.handleMouseMove), this.on(doc, "mouseup", this.handleMouseUp),
            this.on(doc, "touchmove", this.handleMouseMove), this.on(doc, "touchend", this.handleMouseUp),
            this.handleMouseMove(event);
        }, Slider.prototype.handleMouseMove = function(event) {}, Slider.prototype.handleMouseUp = function() {
            var doc = this.bar.el_.ownerDocument;
            unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"),
            this.off(doc, "mousemove", this.handleMouseMove), this.off(doc, "mouseup", this.handleMouseUp),
            this.off(doc, "touchmove", this.handleMouseMove), this.off(doc, "touchend", this.handleMouseUp),
            this.update();
        }, Slider.prototype.update = function() {
            if (this.el_) {
                var progress = this.getPercent(), bar = this.bar;
                if (bar) {
                    ("number" != typeof progress || progress != progress || progress < 0 || progress === 1 / 0) && (progress = 0);
                    var percentage = (100 * progress).toFixed(2) + "%", style = bar.el().style;
                    return this.vertical() ? style.height = percentage : style.width = percentage, progress;
                }
            }
        }, Slider.prototype.calculateDistance = function(event) {
            var position = getPointerPosition(this.el_, event);
            return this.vertical() ? position.y : position.x;
        }, Slider.prototype.handleFocus = function() {
            this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress);
        }, Slider.prototype.handleKeyPress = function(event) {
            37 === event.which || 40 === event.which ? (event.preventDefault(), this.stepBack()) : 38 !== event.which && 39 !== event.which || (event.preventDefault(),
            this.stepForward());
        }, Slider.prototype.handleBlur = function() {
            this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress);
        }, Slider.prototype.handleClick = function(event) {
            event.stopImmediatePropagation(), event.preventDefault();
        }, Slider.prototype.vertical = function(bool) {
            if (void 0 === bool) return this.vertical_ || !1;
            this.vertical_ = !!bool, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal");
        }, Slider;
    }(Component);
    Component.registerComponent("Slider", Slider);
    var LoadProgressBar = function(_Component) {
        function LoadProgressBar(player, options) {
            classCallCheck(this, LoadProgressBar);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return _this.partEls_ = [], _this.on(player, "progress", _this.update), _this;
        }
        return inherits(LoadProgressBar, _Component), LoadProgressBar.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
            });
        }, LoadProgressBar.prototype.dispose = function() {
            this.partEls_ = null, _Component.prototype.dispose.call(this);
        }, LoadProgressBar.prototype.update = function(event) {
            var buffered = this.player_.buffered(), duration = this.player_.duration(), bufferedEnd = this.player_.bufferedEnd(), children = this.partEls_, percentify = function(time, end) {
                var percent = time / end || 0;
                return 100 * (1 <= percent ? 1 : percent) + "%";
            };
            this.el_.style.width = percentify(bufferedEnd, duration);
            for (var i = 0; i < buffered.length; i++) {
                var start = buffered.start(i), end = buffered.end(i), part = children[i];
                part || (part = this.el_.appendChild(createEl()), children[i] = part), part.style.left = percentify(start, bufferedEnd),
                part.style.width = percentify(end - start, bufferedEnd);
            }
            for (var _i = children.length; _i > buffered.length; _i--) this.el_.removeChild(children[_i - 1]);
            children.length = buffered.length;
        }, LoadProgressBar;
    }(Component);
    Component.registerComponent("LoadProgressBar", LoadProgressBar);
    var TimeTooltip = function(_Component) {
        function TimeTooltip() {
            return classCallCheck(this, TimeTooltip), possibleConstructorReturn(this, _Component.apply(this, arguments));
        }
        return inherits(TimeTooltip, _Component), TimeTooltip.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-time-tooltip"
            });
        }, TimeTooltip.prototype.update = function(seekBarRect, seekBarPoint, content) {
            var tooltipRect = getBoundingClientRect(this.el_), playerRect = getBoundingClientRect(this.player_.el()), seekBarPointPx = seekBarRect.width * seekBarPoint;
            if (playerRect && tooltipRect) {
                var spaceLeftOfPoint = seekBarRect.left - playerRect.left + seekBarPointPx, spaceRightOfPoint = seekBarRect.width - seekBarPointPx + (playerRect.right - seekBarRect.right), pullTooltipBy = tooltipRect.width / 2;
                spaceLeftOfPoint < pullTooltipBy ? pullTooltipBy += pullTooltipBy - spaceLeftOfPoint : spaceRightOfPoint < pullTooltipBy && (pullTooltipBy = spaceRightOfPoint),
                pullTooltipBy < 0 ? pullTooltipBy = 0 : pullTooltipBy > tooltipRect.width && (pullTooltipBy = tooltipRect.width),
                this.el_.style.right = "-" + pullTooltipBy + "px", textContent(this.el_, content);
            }
        }, TimeTooltip;
    }(Component);
    Component.registerComponent("TimeTooltip", TimeTooltip);
    var PlayProgressBar = function(_Component) {
        function PlayProgressBar() {
            return classCallCheck(this, PlayProgressBar), possibleConstructorReturn(this, _Component.apply(this, arguments));
        }
        return inherits(PlayProgressBar, _Component), PlayProgressBar.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
            });
        }, PlayProgressBar.prototype.update = function(seekBarRect, seekBarPoint) {
            var _this2 = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() {
                var content = formatTime(_this2.player_.scrubbing() ? _this2.player_.getCache().currentTime : _this2.player_.currentTime(), _this2.player_.duration()), timeTooltip = _this2.getChild("timeTooltip");
                timeTooltip && timeTooltip.update(seekBarRect, seekBarPoint, content);
            });
        }, PlayProgressBar;
    }(Component);
    PlayProgressBar.prototype.options_ = {
        children: []
    }, IE_VERSION && !(8 < IE_VERSION) || IS_IOS || IS_ANDROID || PlayProgressBar.prototype.options_.children.push("timeTooltip"),
    Component.registerComponent("PlayProgressBar", PlayProgressBar);
    var MouseTimeDisplay = function(_Component) {
        function MouseTimeDisplay(player, options) {
            classCallCheck(this, MouseTimeDisplay);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return _this.update = throttle(bind(_this, _this.update), 25), _this;
        }
        return inherits(MouseTimeDisplay, _Component), MouseTimeDisplay.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-mouse-display"
            });
        }, MouseTimeDisplay.prototype.update = function(seekBarRect, seekBarPoint) {
            var _this2 = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() {
                var duration = _this2.player_.duration(), content = formatTime(seekBarPoint * duration, duration);
                _this2.el_.style.left = seekBarRect.width * seekBarPoint + "px", _this2.getChild("timeTooltip").update(seekBarRect, seekBarPoint, content);
            });
        }, MouseTimeDisplay;
    }(Component);
    MouseTimeDisplay.prototype.options_ = {
        children: [ "timeTooltip" ]
    }, Component.registerComponent("MouseTimeDisplay", MouseTimeDisplay);
    var UPDATE_REFRESH_INTERVAL = 30, SeekBar = function(_Slider) {
        function SeekBar(player, options) {
            classCallCheck(this, SeekBar);
            var _this = possibleConstructorReturn(this, _Slider.call(this, player, options));
            return _this.update = throttle(bind(_this, _this.update), UPDATE_REFRESH_INTERVAL),
            _this.on(player, "timeupdate", _this.update), _this.on(player, "ended", _this.handleEnded),
            _this.updateInterval = null, _this.on(player, [ "playing" ], function() {
                _this.clearInterval(_this.updateInterval), _this.updateInterval = _this.setInterval(function() {
                    _this.requestAnimationFrame(function() {
                        _this.update();
                    });
                }, UPDATE_REFRESH_INTERVAL);
            }), _this.on(player, [ "ended", "pause", "waiting" ], function() {
                _this.clearInterval(_this.updateInterval);
            }), _this.on(player, [ "timeupdate", "ended" ], _this.update), _this;
        }
        return inherits(SeekBar, _Slider), SeekBar.prototype.createEl = function() {
            return _Slider.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder"
            }, {
                "aria-label": this.localize("Progress Bar")
            });
        }, SeekBar.prototype.update_ = function(currentTime, percent) {
            var duration = this.player_.duration();
            this.el_.setAttribute("aria-valuenow", (100 * percent).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [ formatTime(currentTime, duration), formatTime(duration, duration) ], "{1} of {2}")),
            this.bar.update(getBoundingClientRect(this.el_), percent);
        }, SeekBar.prototype.update = function(event) {
            var percent = _Slider.prototype.update.call(this);
            return this.update_(this.getCurrentTime_(), percent), percent;
        }, SeekBar.prototype.getCurrentTime_ = function() {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
        }, SeekBar.prototype.handleEnded = function(event) {
            this.update_(this.player_.duration(), 1);
        }, SeekBar.prototype.getPercent = function() {
            var percent = this.getCurrentTime_() / this.player_.duration();
            return 1 <= percent ? 1 : percent;
        }, SeekBar.prototype.handleMouseDown = function(event) {
            isSingleLeftClick(event) && (event.stopPropagation(), this.player_.scrubbing(!0),
            this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), _Slider.prototype.handleMouseDown.call(this, event));
        }, SeekBar.prototype.handleMouseMove = function(event) {
            if (isSingleLeftClick(event)) {
                var newTime = this.calculateDistance(event) * this.player_.duration();
                newTime === this.player_.duration() && (newTime -= .1), this.player_.currentTime(newTime);
            }
        }, SeekBar.prototype.enable = function() {
            _Slider.prototype.enable.call(this);
            var mouseTimeDisplay = this.getChild("mouseTimeDisplay");
            mouseTimeDisplay && mouseTimeDisplay.show();
        }, SeekBar.prototype.disable = function() {
            _Slider.prototype.disable.call(this);
            var mouseTimeDisplay = this.getChild("mouseTimeDisplay");
            mouseTimeDisplay && mouseTimeDisplay.hide();
        }, SeekBar.prototype.handleMouseUp = function(event) {
            _Slider.prototype.handleMouseUp.call(this, event), event && event.stopPropagation(),
            this.player_.scrubbing(!1), this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }), this.videoWasPlaying && silencePromise(this.player_.play());
        }, SeekBar.prototype.stepForward = function() {
            this.player_.currentTime(this.player_.currentTime() + 5);
        }, SeekBar.prototype.stepBack = function() {
            this.player_.currentTime(this.player_.currentTime() - 5);
        }, SeekBar.prototype.handleAction = function(event) {
            this.player_.paused() ? this.player_.play() : this.player_.pause();
        }, SeekBar.prototype.handleKeyPress = function(event) {
            32 === event.which || 13 === event.which ? (event.preventDefault(), this.handleAction(event)) : _Slider.prototype.handleKeyPress && _Slider.prototype.handleKeyPress.call(this, event);
        }, SeekBar;
    }(Slider);
    SeekBar.prototype.options_ = {
        children: [ "loadProgressBar", "playProgressBar" ],
        barName: "playProgressBar"
    }, IE_VERSION && !(8 < IE_VERSION) || IS_IOS || IS_ANDROID || SeekBar.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"),
    SeekBar.prototype.playerEvent = "timeupdate", Component.registerComponent("SeekBar", SeekBar);
    var ProgressControl = function(_Component) {
        function ProgressControl(player, options) {
            classCallCheck(this, ProgressControl);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return _this.handleMouseMove = throttle(bind(_this, _this.handleMouseMove), 25),
            _this.throttledHandleMouseSeek = throttle(bind(_this, _this.handleMouseSeek), 25),
            _this.enable(), _this;
        }
        return inherits(ProgressControl, _Component), ProgressControl.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            });
        }, ProgressControl.prototype.handleMouseMove = function(event) {
            var seekBar = this.getChild("seekBar");
            if (seekBar) {
                var mouseTimeDisplay = seekBar.getChild("mouseTimeDisplay"), seekBarEl = seekBar.el(), seekBarRect = getBoundingClientRect(seekBarEl), seekBarPoint = getPointerPosition(seekBarEl, event).x;
                1 < seekBarPoint ? seekBarPoint = 1 : seekBarPoint < 0 && (seekBarPoint = 0), mouseTimeDisplay && mouseTimeDisplay.update(seekBarRect, seekBarPoint);
            }
        }, ProgressControl.prototype.handleMouseSeek = function(event) {
            var seekBar = this.getChild("seekBar");
            seekBar && seekBar.handleMouseMove(event);
        }, ProgressControl.prototype.enabled = function() {
            return this.enabled_;
        }, ProgressControl.prototype.disable = function() {
            this.children().forEach(function(child) {
                return child.disable && child.disable();
            }), this.enabled() && (this.off([ "mousedown", "touchstart" ], this.handleMouseDown),
            this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"),
            this.enabled_ = !1);
        }, ProgressControl.prototype.enable = function() {
            this.children().forEach(function(child) {
                return child.enable && child.enable();
            }), this.enabled() || (this.on([ "mousedown", "touchstart" ], this.handleMouseDown),
            this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"),
            this.enabled_ = !0);
        }, ProgressControl.prototype.handleMouseDown = function(event) {
            var doc = this.el_.ownerDocument, seekBar = this.getChild("seekBar");
            seekBar && seekBar.handleMouseDown(event), this.on(doc, "mousemove", this.throttledHandleMouseSeek),
            this.on(doc, "touchmove", this.throttledHandleMouseSeek), this.on(doc, "mouseup", this.handleMouseUp),
            this.on(doc, "touchend", this.handleMouseUp);
        }, ProgressControl.prototype.handleMouseUp = function(event) {
            var doc = this.el_.ownerDocument, seekBar = this.getChild("seekBar");
            seekBar && seekBar.handleMouseUp(event), this.off(doc, "mousemove", this.throttledHandleMouseSeek),
            this.off(doc, "touchmove", this.throttledHandleMouseSeek), this.off(doc, "mouseup", this.handleMouseUp),
            this.off(doc, "touchend", this.handleMouseUp);
        }, ProgressControl;
    }(Component);
    ProgressControl.prototype.options_ = {
        children: [ "seekBar" ]
    }, Component.registerComponent("ProgressControl", ProgressControl);
    var FullscreenToggle = function(_Button) {
        function FullscreenToggle(player, options) {
            classCallCheck(this, FullscreenToggle);
            var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
            return _this.on(player, "fullscreenchange", _this.handleFullscreenChange), _this;
        }
        return inherits(FullscreenToggle, _Button), FullscreenToggle.prototype.buildCSSClass = function() {
            return "vjs-fullscreen-control " + _Button.prototype.buildCSSClass.call(this);
        }, FullscreenToggle.prototype.handleFullscreenChange = function(event) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen");
        }, FullscreenToggle.prototype.handleClick = function(event) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen();
        }, FullscreenToggle;
    }(Button);
    FullscreenToggle.prototype.controlText_ = "Fullscreen", Component.registerComponent("FullscreenToggle", FullscreenToggle);
    var checkVolumeSupport = function(self, player) {
        player.tech_ && !player.tech_.featuresVolumeControl && self.addClass("vjs-hidden"),
        self.on(player, "loadstart", function() {
            player.tech_.featuresVolumeControl ? self.removeClass("vjs-hidden") : self.addClass("vjs-hidden");
        });
    }, VolumeLevel = function(_Component) {
        function VolumeLevel() {
            return classCallCheck(this, VolumeLevel), possibleConstructorReturn(this, _Component.apply(this, arguments));
        }
        return inherits(VolumeLevel, _Component), VolumeLevel.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            });
        }, VolumeLevel;
    }(Component);
    Component.registerComponent("VolumeLevel", VolumeLevel);
    var VolumeBar = function(_Slider) {
        function VolumeBar(player, options) {
            classCallCheck(this, VolumeBar);
            var _this = possibleConstructorReturn(this, _Slider.call(this, player, options));
            return _this.on("slideractive", _this.updateLastVolume_), _this.on(player, "volumechange", _this.updateARIAAttributes),
            player.ready(function() {
                return _this.updateARIAAttributes();
            }), _this;
        }
        return inherits(VolumeBar, _Slider), VolumeBar.prototype.createEl = function() {
            return _Slider.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar vjs-slider-bar"
            }, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            });
        }, VolumeBar.prototype.handleMouseDown = function(event) {
            isSingleLeftClick(event) && _Slider.prototype.handleMouseDown.call(this, event);
        }, VolumeBar.prototype.handleMouseMove = function(event) {
            isSingleLeftClick(event) && (this.checkMuted(), this.player_.volume(this.calculateDistance(event)));
        }, VolumeBar.prototype.checkMuted = function() {
            this.player_.muted() && this.player_.muted(!1);
        }, VolumeBar.prototype.getPercent = function() {
            return this.player_.muted() ? 0 : this.player_.volume();
        }, VolumeBar.prototype.stepForward = function() {
            this.checkMuted(), this.player_.volume(this.player_.volume() + .1);
        }, VolumeBar.prototype.stepBack = function() {
            this.checkMuted(), this.player_.volume(this.player_.volume() - .1);
        }, VolumeBar.prototype.updateARIAAttributes = function(event) {
            var ariaValue = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", ariaValue), this.el_.setAttribute("aria-valuetext", ariaValue + "%");
        }, VolumeBar.prototype.volumeAsPercentage_ = function() {
            return Math.round(100 * this.player_.volume());
        }, VolumeBar.prototype.updateLastVolume_ = function() {
            var _this2 = this, volumeBeforeDrag = this.player_.volume();
            this.one("sliderinactive", function() {
                0 === _this2.player_.volume() && _this2.player_.lastVolume_(volumeBeforeDrag);
            });
        }, VolumeBar;
    }(Slider);
    VolumeBar.prototype.options_ = {
        children: [ "volumeLevel" ],
        barName: "volumeLevel"
    }, VolumeBar.prototype.playerEvent = "volumechange", Component.registerComponent("VolumeBar", VolumeBar);
    var VolumeControl = function(_Component) {
        function VolumeControl(player) {
            var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            classCallCheck(this, VolumeControl), options.vertical = options.vertical || !1,
            (void 0 === options.volumeBar || isPlain(options.volumeBar)) && (options.volumeBar = options.volumeBar || {},
            options.volumeBar.vertical = options.vertical);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return checkVolumeSupport(_this, player), _this.throttledHandleMouseMove = throttle(bind(_this, _this.handleMouseMove), 25),
            _this.on("mousedown", _this.handleMouseDown), _this.on("touchstart", _this.handleMouseDown),
            _this.on(_this.volumeBar, [ "focus", "slideractive" ], function() {
                _this.volumeBar.addClass("vjs-slider-active"), _this.addClass("vjs-slider-active"),
                _this.trigger("slideractive");
            }), _this.on(_this.volumeBar, [ "blur", "sliderinactive" ], function() {
                _this.volumeBar.removeClass("vjs-slider-active"), _this.removeClass("vjs-slider-active"),
                _this.trigger("sliderinactive");
            }), _this;
        }
        return inherits(VolumeControl, _Component), VolumeControl.prototype.createEl = function() {
            var orientationClass = "vjs-volume-horizontal";
            return this.options_.vertical && (orientationClass = "vjs-volume-vertical"), _Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control " + orientationClass
            });
        }, VolumeControl.prototype.handleMouseDown = function(event) {
            var doc = this.el_.ownerDocument;
            this.on(doc, "mousemove", this.throttledHandleMouseMove), this.on(doc, "touchmove", this.throttledHandleMouseMove),
            this.on(doc, "mouseup", this.handleMouseUp), this.on(doc, "touchend", this.handleMouseUp);
        }, VolumeControl.prototype.handleMouseUp = function(event) {
            var doc = this.el_.ownerDocument;
            this.off(doc, "mousemove", this.throttledHandleMouseMove), this.off(doc, "touchmove", this.throttledHandleMouseMove),
            this.off(doc, "mouseup", this.handleMouseUp), this.off(doc, "touchend", this.handleMouseUp);
        }, VolumeControl.prototype.handleMouseMove = function(event) {
            this.volumeBar.handleMouseMove(event);
        }, VolumeControl;
    }(Component);
    VolumeControl.prototype.options_ = {
        children: [ "volumeBar" ]
    }, Component.registerComponent("VolumeControl", VolumeControl);
    var MuteToggle = function(_Button) {
        function MuteToggle(player, options) {
            classCallCheck(this, MuteToggle);
            var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
            return checkVolumeSupport(_this, player), _this.on(player, [ "loadstart", "volumechange" ], _this.update),
            _this;
        }
        return inherits(MuteToggle, _Button), MuteToggle.prototype.buildCSSClass = function() {
            return "vjs-mute-control " + _Button.prototype.buildCSSClass.call(this);
        }, MuteToggle.prototype.handleClick = function(event) {
            var vol = this.player_.volume(), lastVolume = this.player_.lastVolume_();
            if (0 === vol) {
                var volumeToSet = lastVolume < .1 ? .1 : lastVolume;
                this.player_.volume(volumeToSet), this.player_.muted(!1);
            } else this.player_.muted(!this.player_.muted());
        }, MuteToggle.prototype.update = function(event) {
            this.updateIcon_(), this.updateControlText_();
        }, MuteToggle.prototype.updateIcon_ = function() {
            var vol = this.player_.volume(), level = 3;
            0 === vol || this.player_.muted() ? level = 0 : vol < .33 ? level = 1 : vol < .67 && (level = 2);
            for (var i = 0; i < 4; i++) removeClass(this.el_, "vjs-vol-" + i);
            addClass(this.el_, "vjs-vol-" + level);
        }, MuteToggle.prototype.updateControlText_ = function() {
            var text = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
            this.controlText() !== text && this.controlText(text);
        }, MuteToggle;
    }(Button);
    MuteToggle.prototype.controlText_ = "Mute", Component.registerComponent("MuteToggle", MuteToggle);
    var VolumePanel = function(_Component) {
        function VolumePanel(player) {
            var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            classCallCheck(this, VolumePanel), void 0 !== options.inline ? options.inline = options.inline : options.inline = !0,
            (void 0 === options.volumeControl || isPlain(options.volumeControl)) && (options.volumeControl = options.volumeControl || {},
            options.volumeControl.vertical = !options.inline);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return checkVolumeSupport(_this, player), _this.on(_this.volumeControl, [ "slideractive" ], _this.sliderActive_),
            _this.on(_this.volumeControl, [ "sliderinactive" ], _this.sliderInactive_), _this;
        }
        return inherits(VolumePanel, _Component), VolumePanel.prototype.sliderActive_ = function() {
            this.addClass("vjs-slider-active");
        }, VolumePanel.prototype.sliderInactive_ = function() {
            this.removeClass("vjs-slider-active");
        }, VolumePanel.prototype.createEl = function() {
            var orientationClass = "vjs-volume-panel-horizontal";
            return this.options_.inline || (orientationClass = "vjs-volume-panel-vertical"),
            _Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-panel vjs-control " + orientationClass
            });
        }, VolumePanel;
    }(Component);
    VolumePanel.prototype.options_ = {
        children: [ "muteToggle", "volumeControl" ]
    }, Component.registerComponent("VolumePanel", VolumePanel);
    var Menu = function(_Component) {
        function Menu(player, options) {
            classCallCheck(this, Menu);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            return options && (_this.menuButton_ = options.menuButton), _this.focusedChild_ = -1,
            _this.on("keydown", _this.handleKeyPress), _this;
        }
        return inherits(Menu, _Component), Menu.prototype.addItem = function(component) {
            this.addChild(component), component.on("click", bind(this, function(event) {
                this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== component.name() && this.menuButton_.focus());
            }));
        }, Menu.prototype.createEl = function() {
            var contentElType = this.options_.contentElType || "ul";
            this.contentEl_ = createEl(contentElType, {
                className: "vjs-menu-content"
            }), this.contentEl_.setAttribute("role", "menu");
            var el = _Component.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu"
            });
            return el.appendChild(this.contentEl_), on(el, "click", function(event) {
                event.preventDefault(), event.stopImmediatePropagation();
            }), el;
        }, Menu.prototype.dispose = function() {
            this.contentEl_ = null, _Component.prototype.dispose.call(this);
        }, Menu.prototype.handleKeyPress = function(event) {
            37 === event.which || 40 === event.which ? (event.preventDefault(), this.stepForward()) : 38 !== event.which && 39 !== event.which || (event.preventDefault(),
            this.stepBack());
        }, Menu.prototype.stepForward = function() {
            var stepChild = 0;
            void 0 !== this.focusedChild_ && (stepChild = this.focusedChild_ + 1), this.focus(stepChild);
        }, Menu.prototype.stepBack = function() {
            var stepChild = 0;
            void 0 !== this.focusedChild_ && (stepChild = this.focusedChild_ - 1), this.focus(stepChild);
        }, Menu.prototype.focus = function() {
            var item = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, children = this.children().slice();
            children.length && children[0].className && /vjs-menu-title/.test(children[0].className) && children.shift(),
            0 < children.length && (item < 0 ? item = 0 : item >= children.length && (item = children.length - 1),
            children[this.focusedChild_ = item].el_.focus());
        }, Menu;
    }(Component);
    Component.registerComponent("Menu", Menu);
    var MenuButton = function(_Component) {
        function MenuButton(player) {
            var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            classCallCheck(this, MenuButton);
            var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
            _this.menuButton_ = new Button(player, options), _this.menuButton_.controlText(_this.controlText_),
            _this.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var buttonClass = Button.prototype.buildCSSClass();
            return _this.menuButton_.el_.className = _this.buildCSSClass() + " " + buttonClass,
            _this.menuButton_.removeClass("vjs-control"), _this.addChild(_this.menuButton_),
            _this.update(), _this.enabled_ = !0, _this.on(_this.menuButton_, "tap", _this.handleClick),
            _this.on(_this.menuButton_, "click", _this.handleClick), _this.on(_this.menuButton_, "focus", _this.handleFocus),
            _this.on(_this.menuButton_, "blur", _this.handleBlur), _this.on("keydown", _this.handleSubmenuKeyPress),
            _this;
        }
        return inherits(MenuButton, _Component), MenuButton.prototype.update = function() {
            var menu = this.createMenu();
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = menu,
            this.addChild(menu), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"),
            this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show();
        }, MenuButton.prototype.createMenu = function() {
            var menu = new Menu(this.player_, {
                menuButton: this
            });
            if (this.hideThreshold_ = 0, this.options_.title) {
                var title = createEl("li", {
                    className: "vjs-menu-title",
                    innerHTML: toTitleCase(this.options_.title),
                    tabIndex: -1
                });
                this.hideThreshold_ += 1, menu.children_.unshift(title), prependTo(title, menu.contentEl());
            }
            if (this.items = this.createItems(), this.items) for (var i = 0; i < this.items.length; i++) menu.addItem(this.items[i]);
            return menu;
        }, MenuButton.prototype.createItems = function() {}, MenuButton.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: this.buildWrapperCSSClass()
            }, {});
        }, MenuButton.prototype.buildWrapperCSSClass = function() {
            var menuButtonClass = "vjs-menu-button";
            return !0 === this.options_.inline ? menuButtonClass += "-inline" : menuButtonClass += "-popup",
            "vjs-menu-button " + menuButtonClass + " " + Button.prototype.buildCSSClass() + " " + _Component.prototype.buildCSSClass.call(this);
        }, MenuButton.prototype.buildCSSClass = function() {
            var menuButtonClass = "vjs-menu-button";
            return !0 === this.options_.inline ? menuButtonClass += "-inline" : menuButtonClass += "-popup",
            "vjs-menu-button " + menuButtonClass + " " + _Component.prototype.buildCSSClass.call(this);
        }, MenuButton.prototype.controlText = function(text) {
            var el = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
            return this.menuButton_.controlText(text, el);
        }, MenuButton.prototype.handleClick = function(event) {
            this.one(this.menu.contentEl(), "mouseleave", bind(this, function(e) {
                this.unpressButton(), this.el_.blur();
            })), this.buttonPressed_ ? this.unpressButton() : this.pressButton();
        }, MenuButton.prototype.focus = function() {
            this.menuButton_.focus();
        }, MenuButton.prototype.blur = function() {
            this.menuButton_.blur();
        }, MenuButton.prototype.handleFocus = function() {
            on(document_1, "keydown", bind(this, this.handleKeyPress));
        }, MenuButton.prototype.handleBlur = function() {
            off(document_1, "keydown", bind(this, this.handleKeyPress));
        }, MenuButton.prototype.handleKeyPress = function(event) {
            27 === event.which || 9 === event.which ? (this.buttonPressed_ && this.unpressButton(),
            9 !== event.which && (event.preventDefault(), this.menuButton_.el_.focus())) : 38 !== event.which && 40 !== event.which || this.buttonPressed_ || (this.pressButton(),
            event.preventDefault());
        }, MenuButton.prototype.handleSubmenuKeyPress = function(event) {
            27 !== event.which && 9 !== event.which || (this.buttonPressed_ && this.unpressButton(),
            9 !== event.which && (event.preventDefault(), this.menuButton_.el_.focus()));
        }, MenuButton.prototype.pressButton = function() {
            if (this.enabled_) {
                if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"),
                IS_IOS && isInFrame()) return;
                this.menu.focus();
            }
        }, MenuButton.prototype.unpressButton = function() {
            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"));
        }, MenuButton.prototype.disable = function() {
            this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable();
        }, MenuButton.prototype.enable = function() {
            this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable();
        }, MenuButton;
    }(Component);
    Component.registerComponent("MenuButton", MenuButton);
    var TrackButton = function(_MenuButton) {
        function TrackButton(player, options) {
            classCallCheck(this, TrackButton);
            var tracks = options.tracks, _this = possibleConstructorReturn(this, _MenuButton.call(this, player, options));
            if (_this.items.length <= 1 && _this.hide(), !tracks) return possibleConstructorReturn(_this);
            var updateHandler = bind(_this, _this.update);
            return tracks.addEventListener("removetrack", updateHandler), tracks.addEventListener("addtrack", updateHandler),
            _this.player_.on("ready", updateHandler), _this.player_.on("dispose", function() {
                tracks.removeEventListener("removetrack", updateHandler), tracks.removeEventListener("addtrack", updateHandler);
            }), _this;
        }
        return inherits(TrackButton, _MenuButton), TrackButton;
    }(MenuButton);
    Component.registerComponent("TrackButton", TrackButton);
    var MenuItem = function(_ClickableComponent) {
        function MenuItem(player, options) {
            classCallCheck(this, MenuItem);
            var _this = possibleConstructorReturn(this, _ClickableComponent.call(this, player, options));
            return _this.selectable = options.selectable, _this.isSelected_ = options.selected || !1,
            _this.selected(_this.isSelected_), _this.selectable ? _this.el_.setAttribute("role", "menuitemcheckbox") : _this.el_.setAttribute("role", "menuitem"),
            _this;
        }
        return inherits(MenuItem, _ClickableComponent), MenuItem.prototype.createEl = function(type, props, attrs) {
            return this.nonIconControl = !0, _ClickableComponent.prototype.createEl.call(this, "li", assign({
                className: "vjs-menu-item",
                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                tabIndex: -1
            }, props), attrs);
        }, MenuItem.prototype.handleClick = function(event) {
            this.selected(!0);
        }, MenuItem.prototype.selected = function(_selected) {
            this.selectable && (_selected ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"),
            this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"),
            this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1));
        }, MenuItem;
    }(ClickableComponent);
    Component.registerComponent("MenuItem", MenuItem);
    var TextTrackMenuItem = function(_MenuItem) {
        function TextTrackMenuItem(player, options) {
            classCallCheck(this, TextTrackMenuItem);
            var track = options.track, tracks = player.textTracks();
            options.label = track.label || track.language || "Unknown", options.selected = "showing" === track.mode;
            var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
            _this.track = track;
            var changeHandler = function() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                _this.handleTracksChange.apply(_this, args);
            }, selectedLanguageChangeHandler = function() {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                _this.handleSelectedLanguageChange.apply(_this, args);
            };
            if (player.on([ "loadstart", "texttrackchange" ], changeHandler), tracks.addEventListener("change", changeHandler),
            tracks.addEventListener("selectedlanguagechange", selectedLanguageChangeHandler),
            _this.on("dispose", function() {
                player.off([ "loadstart", "texttrackchange" ], changeHandler), tracks.removeEventListener("change", changeHandler),
                tracks.removeEventListener("selectedlanguagechange", selectedLanguageChangeHandler);
            }), void 0 === tracks.onchange) {
                var event = void 0;
                _this.on([ "tap", "click" ], function() {
                    if ("object" !== _typeof(window_1.Event)) try {
                        event = new window_1.Event("change");
                    } catch (err) {}
                    event || (event = document_1.createEvent("Event")).initEvent("change", !0, !0),
                    tracks.dispatchEvent(event);
                });
            }
            return _this.handleTracksChange(), _this;
        }
        return inherits(TextTrackMenuItem, _MenuItem), TextTrackMenuItem.prototype.handleClick = function(event) {
            var kind = this.track.kind, kinds = this.track.kinds, tracks = this.player_.textTracks();
            if (kinds || (kinds = [ kind ]), _MenuItem.prototype.handleClick.call(this, event),
            tracks) for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                track === this.track && -1 < kinds.indexOf(track.kind) ? "showing" !== track.mode && (track.mode = "showing") : "disabled" !== track.mode && (track.mode = "disabled");
            }
        }, TextTrackMenuItem.prototype.handleTracksChange = function(event) {
            var shouldBeSelected = "showing" === this.track.mode;
            shouldBeSelected !== this.isSelected_ && this.selected(shouldBeSelected);
        }, TextTrackMenuItem.prototype.handleSelectedLanguageChange = function(event) {
            if ("showing" === this.track.mode) {
                var selectedLanguage = this.player_.cache_.selectedLanguage;
                if (selectedLanguage && selectedLanguage.enabled && selectedLanguage.language === this.track.language && selectedLanguage.kind !== this.track.kind) return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                };
            }
        }, TextTrackMenuItem.prototype.dispose = function() {
            this.track = null, _MenuItem.prototype.dispose.call(this);
        }, TextTrackMenuItem;
    }(MenuItem);
    Component.registerComponent("TextTrackMenuItem", TextTrackMenuItem);
    var OffTextTrackMenuItem = function(_TextTrackMenuItem) {
        function OffTextTrackMenuItem(player, options) {
            return classCallCheck(this, OffTextTrackMenuItem), options.track = {
                player: player,
                kind: options.kind,
                kinds: options.kinds,
                default: !1,
                mode: "disabled"
            }, options.kinds || (options.kinds = [ options.kind ]), options.label ? options.track.label = options.label : options.track.label = options.kinds.join(" and ") + " off",
            options.selectable = !0, possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));
        }
        return inherits(OffTextTrackMenuItem, _TextTrackMenuItem), OffTextTrackMenuItem.prototype.handleTracksChange = function(event) {
            for (var tracks = this.player().textTracks(), shouldBeSelected = !0, i = 0, l = tracks.length; i < l; i++) {
                var track = tracks[i];
                if (-1 < this.options_.kinds.indexOf(track.kind) && "showing" === track.mode) {
                    shouldBeSelected = !1;
                    break;
                }
            }
            shouldBeSelected !== this.isSelected_ && this.selected(shouldBeSelected);
        }, OffTextTrackMenuItem.prototype.handleSelectedLanguageChange = function(event) {
            for (var tracks = this.player().textTracks(), allHidden = !0, i = 0, l = tracks.length; i < l; i++) {
                var track = tracks[i];
                if (-1 < [ "captions", "descriptions", "subtitles" ].indexOf(track.kind) && "showing" === track.mode) {
                    allHidden = !1;
                    break;
                }
            }
            allHidden && (this.player_.cache_.selectedLanguage = {
                enabled: !1
            });
        }, OffTextTrackMenuItem;
    }(TextTrackMenuItem);
    Component.registerComponent("OffTextTrackMenuItem", OffTextTrackMenuItem);
    var TextTrackButton = function(_TrackButton) {
        function TextTrackButton(player) {
            var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return classCallCheck(this, TextTrackButton), options.tracks = player.textTracks(),
            possibleConstructorReturn(this, _TrackButton.call(this, player, options));
        }
        return inherits(TextTrackButton, _TrackButton), TextTrackButton.prototype.createItems = function() {
            var items = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], TrackMenuItem = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : TextTrackMenuItem, label = void 0;
            this.label_ && (label = this.label_ + " off"), items.push(new OffTextTrackMenuItem(this.player_, {
                kinds: this.kinds_,
                kind: this.kind_,
                label: label
            })), this.hideThreshold_ += 1;
            var tracks = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [ this.kind_ ]);
            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                if (-1 < this.kinds_.indexOf(track.kind)) {
                    var item = new TrackMenuItem(this.player_, {
                        track: track,
                        selectable: !0
                    });
                    item.addClass("vjs-" + track.kind + "-menu-item"), items.push(item);
                }
            }
            return items;
        }, TextTrackButton;
    }(TrackButton);
    Component.registerComponent("TextTrackButton", TextTrackButton);
    var ChaptersTrackMenuItem = function(_MenuItem) {
        function ChaptersTrackMenuItem(player, options) {
            classCallCheck(this, ChaptersTrackMenuItem);
            var track = options.track, cue = options.cue, currentTime = player.currentTime();
            options.selectable = !0, options.label = cue.text, options.selected = cue.startTime <= currentTime && currentTime < cue.endTime;
            var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
            return _this.track = track, _this.cue = cue, track.addEventListener("cuechange", bind(_this, _this.update)),
            _this;
        }
        return inherits(ChaptersTrackMenuItem, _MenuItem), ChaptersTrackMenuItem.prototype.handleClick = function(event) {
            _MenuItem.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime),
            this.update(this.cue.startTime);
        }, ChaptersTrackMenuItem.prototype.update = function(event) {
            var cue = this.cue, currentTime = this.player_.currentTime();
            this.selected(cue.startTime <= currentTime && currentTime < cue.endTime);
        }, ChaptersTrackMenuItem;
    }(MenuItem);
    Component.registerComponent("ChaptersTrackMenuItem", ChaptersTrackMenuItem);
    var ChaptersButton = function(_TextTrackButton) {
        function ChaptersButton(player, options, ready) {
            return classCallCheck(this, ChaptersButton), possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
        }
        return inherits(ChaptersButton, _TextTrackButton), ChaptersButton.prototype.buildCSSClass = function() {
            return "vjs-chapters-button " + _TextTrackButton.prototype.buildCSSClass.call(this);
        }, ChaptersButton.prototype.buildWrapperCSSClass = function() {
            return "vjs-chapters-button " + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
        }, ChaptersButton.prototype.update = function(event) {
            this.track_ && (!event || "addtrack" !== event.type && "removetrack" !== event.type) || this.setTrack(this.findChaptersTrack()),
            _TextTrackButton.prototype.update.call(this);
        }, ChaptersButton.prototype.setTrack = function(track) {
            if (this.track_ !== track) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                    var remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    remoteTextTrackEl && remoteTextTrackEl.removeEventListener("load", this.updateHandler_),
                    this.track_ = null;
                }
                if (this.track_ = track, this.track_) {
                    this.track_.mode = "hidden";
                    var _remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    _remoteTextTrackEl && _remoteTextTrackEl.addEventListener("load", this.updateHandler_);
                }
            }
        }, ChaptersButton.prototype.findChaptersTrack = function() {
            for (var tracks = this.player_.textTracks() || [], i = tracks.length - 1; 0 <= i; i--) {
                var track = tracks[i];
                if (track.kind === this.kind_) return track;
            }
        }, ChaptersButton.prototype.getMenuCaption = function() {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(toTitleCase(this.kind_));
        }, ChaptersButton.prototype.createMenu = function() {
            return this.options_.title = this.getMenuCaption(), _TextTrackButton.prototype.createMenu.call(this);
        }, ChaptersButton.prototype.createItems = function() {
            var items = [];
            if (!this.track_) return items;
            var cues = this.track_.cues;
            if (!cues) return items;
            for (var i = 0, l = cues.length; i < l; i++) {
                var cue = cues[i], mi = new ChaptersTrackMenuItem(this.player_, {
                    track: this.track_,
                    cue: cue
                });
                items.push(mi);
            }
            return items;
        }, ChaptersButton;
    }(TextTrackButton);
    ChaptersButton.prototype.kind_ = "chapters", ChaptersButton.prototype.controlText_ = "Chapters",
    Component.registerComponent("ChaptersButton", ChaptersButton);
    var DescriptionsButton = function(_TextTrackButton) {
        function DescriptionsButton(player, options, ready) {
            classCallCheck(this, DescriptionsButton);
            var _this = possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready)), tracks = player.textTracks(), changeHandler = bind(_this, _this.handleTracksChange);
            return tracks.addEventListener("change", changeHandler), _this.on("dispose", function() {
                tracks.removeEventListener("change", changeHandler);
            }), _this;
        }
        return inherits(DescriptionsButton, _TextTrackButton), DescriptionsButton.prototype.handleTracksChange = function(event) {
            for (var tracks = this.player().textTracks(), disabled = !1, i = 0, l = tracks.length; i < l; i++) {
                var track = tracks[i];
                if (track.kind !== this.kind_ && "showing" === track.mode) {
                    disabled = !0;
                    break;
                }
            }
            disabled ? this.disable() : this.enable();
        }, DescriptionsButton.prototype.buildCSSClass = function() {
            return "vjs-descriptions-button " + _TextTrackButton.prototype.buildCSSClass.call(this);
        }, DescriptionsButton.prototype.buildWrapperCSSClass = function() {
            return "vjs-descriptions-button " + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
        }, DescriptionsButton;
    }(TextTrackButton);
    DescriptionsButton.prototype.kind_ = "descriptions", DescriptionsButton.prototype.controlText_ = "Descriptions",
    Component.registerComponent("DescriptionsButton", DescriptionsButton);
    var SubtitlesButton = function(_TextTrackButton) {
        function SubtitlesButton(player, options, ready) {
            return classCallCheck(this, SubtitlesButton), possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
        }
        return inherits(SubtitlesButton, _TextTrackButton), SubtitlesButton.prototype.buildCSSClass = function() {
            return "vjs-subtitles-button " + _TextTrackButton.prototype.buildCSSClass.call(this);
        }, SubtitlesButton.prototype.buildWrapperCSSClass = function() {
            return "vjs-subtitles-button " + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
        }, SubtitlesButton;
    }(TextTrackButton);
    SubtitlesButton.prototype.kind_ = "subtitles", SubtitlesButton.prototype.controlText_ = "Subtitles",
    Component.registerComponent("SubtitlesButton", SubtitlesButton);
    var CaptionSettingsMenuItem = function(_TextTrackMenuItem) {
        function CaptionSettingsMenuItem(player, options) {
            classCallCheck(this, CaptionSettingsMenuItem), options.track = {
                player: player,
                kind: options.kind,
                label: options.kind + " settings",
                selectable: !1,
                default: !1,
                mode: "disabled"
            }, options.selectable = !1, options.name = "CaptionSettingsMenuItem";
            var _this = possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));
            return _this.addClass("vjs-texttrack-settings"), _this.controlText(", opens " + options.kind + " settings dialog"),
            _this;
        }
        return inherits(CaptionSettingsMenuItem, _TextTrackMenuItem), CaptionSettingsMenuItem.prototype.handleClick = function(event) {
            this.player().getChild("textTrackSettings").open();
        }, CaptionSettingsMenuItem;
    }(TextTrackMenuItem);
    Component.registerComponent("CaptionSettingsMenuItem", CaptionSettingsMenuItem);
    var CaptionsButton = function(_TextTrackButton) {
        function CaptionsButton(player, options, ready) {
            return classCallCheck(this, CaptionsButton), possibleConstructorReturn(this, _TextTrackButton.call(this, player, options, ready));
        }
        return inherits(CaptionsButton, _TextTrackButton), CaptionsButton.prototype.buildCSSClass = function() {
            return "vjs-captions-button " + _TextTrackButton.prototype.buildCSSClass.call(this);
        }, CaptionsButton.prototype.buildWrapperCSSClass = function() {
            return "vjs-captions-button " + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
        }, CaptionsButton.prototype.createItems = function() {
            var items = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (items.push(new CaptionSettingsMenuItem(this.player_, {
                kind: this.kind_
            })), this.hideThreshold_ += 1), _TextTrackButton.prototype.createItems.call(this, items);
        }, CaptionsButton;
    }(TextTrackButton);
    CaptionsButton.prototype.kind_ = "captions", CaptionsButton.prototype.controlText_ = "Captions",
    Component.registerComponent("CaptionsButton", CaptionsButton);
    var SubsCapsMenuItem = function(_TextTrackMenuItem) {
        function SubsCapsMenuItem() {
            return classCallCheck(this, SubsCapsMenuItem), possibleConstructorReturn(this, _TextTrackMenuItem.apply(this, arguments));
        }
        return inherits(SubsCapsMenuItem, _TextTrackMenuItem), SubsCapsMenuItem.prototype.createEl = function(type, props, attrs) {
            var innerHTML = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (innerHTML += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "),
            innerHTML += "</span>", _TextTrackMenuItem.prototype.createEl.call(this, type, assign({
                innerHTML: innerHTML
            }, props), attrs);
        }, SubsCapsMenuItem;
    }(TextTrackMenuItem);
    Component.registerComponent("SubsCapsMenuItem", SubsCapsMenuItem);
    var SubsCapsButton = function(_TextTrackButton) {
        function SubsCapsButton(player) {
            var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            classCallCheck(this, SubsCapsButton);
            var _this = possibleConstructorReturn(this, _TextTrackButton.call(this, player, options));
            return _this.label_ = "subtitles", -1 < [ "en", "en-us", "en-ca", "fr-ca" ].indexOf(_this.player_.language_) && (_this.label_ = "captions"),
            _this.menuButton_.controlText(toTitleCase(_this.label_)), _this;
        }
        return inherits(SubsCapsButton, _TextTrackButton), SubsCapsButton.prototype.buildCSSClass = function() {
            return "vjs-subs-caps-button " + _TextTrackButton.prototype.buildCSSClass.call(this);
        }, SubsCapsButton.prototype.buildWrapperCSSClass = function() {
            return "vjs-subs-caps-button " + _TextTrackButton.prototype.buildWrapperCSSClass.call(this);
        }, SubsCapsButton.prototype.createItems = function() {
            var items = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || (items.push(new CaptionSettingsMenuItem(this.player_, {
                kind: this.label_
            })), this.hideThreshold_ += 1), items = _TextTrackButton.prototype.createItems.call(this, items, SubsCapsMenuItem);
        }, SubsCapsButton;
    }(TextTrackButton);
    SubsCapsButton.prototype.kinds_ = [ "captions", "subtitles" ], SubsCapsButton.prototype.controlText_ = "Subtitles",
    Component.registerComponent("SubsCapsButton", SubsCapsButton);
    var AudioTrackMenuItem = function(_MenuItem) {
        function AudioTrackMenuItem(player, options) {
            classCallCheck(this, AudioTrackMenuItem);
            var track = options.track, tracks = player.audioTracks();
            options.label = track.label || track.language || "Unknown", options.selected = track.enabled;
            var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
            _this.track = track;
            var changeHandler = function() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                _this.handleTracksChange.apply(_this, args);
            };
            return tracks.addEventListener("change", changeHandler), _this.on("dispose", function() {
                tracks.removeEventListener("change", changeHandler);
            }), _this;
        }
        return inherits(AudioTrackMenuItem, _MenuItem), AudioTrackMenuItem.prototype.handleClick = function(event) {
            var tracks = this.player_.audioTracks();
            _MenuItem.prototype.handleClick.call(this, event);
            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                track.enabled = track === this.track;
            }
        }, AudioTrackMenuItem.prototype.handleTracksChange = function(event) {
            this.selected(this.track.enabled);
        }, AudioTrackMenuItem;
    }(MenuItem);
    Component.registerComponent("AudioTrackMenuItem", AudioTrackMenuItem);
    var AudioTrackButton = function(_TrackButton) {
        function AudioTrackButton(player) {
            var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return classCallCheck(this, AudioTrackButton), options.tracks = player.audioTracks(),
            possibleConstructorReturn(this, _TrackButton.call(this, player, options));
        }
        return inherits(AudioTrackButton, _TrackButton), AudioTrackButton.prototype.buildCSSClass = function() {
            return "vjs-audio-button " + _TrackButton.prototype.buildCSSClass.call(this);
        }, AudioTrackButton.prototype.buildWrapperCSSClass = function() {
            return "vjs-audio-button " + _TrackButton.prototype.buildWrapperCSSClass.call(this);
        }, AudioTrackButton.prototype.createItems = function() {
            var items = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            this.hideThreshold_ = 1;
            for (var tracks = this.player_.audioTracks(), i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                items.push(new AudioTrackMenuItem(this.player_, {
                    track: track,
                    selectable: !0
                }));
            }
            return items;
        }, AudioTrackButton;
    }(TrackButton);
    AudioTrackButton.prototype.controlText_ = "Audio Track", Component.registerComponent("AudioTrackButton", AudioTrackButton);
    var PlaybackRateMenuItem = function(_MenuItem) {
        function PlaybackRateMenuItem(player, options) {
            classCallCheck(this, PlaybackRateMenuItem);
            var label = options.rate, rate = parseFloat(label, 10);
            options.label = label, options.selected = 1 === rate, options.selectable = !0;
            var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
            return _this.label = label, _this.rate = rate, _this.on(player, "ratechange", _this.update),
            _this;
        }
        return inherits(PlaybackRateMenuItem, _MenuItem), PlaybackRateMenuItem.prototype.handleClick = function(event) {
            _MenuItem.prototype.handleClick.call(this), this.player().playbackRate(this.rate);
        }, PlaybackRateMenuItem.prototype.update = function(event) {
            this.selected(this.player().playbackRate() === this.rate);
        }, PlaybackRateMenuItem;
    }(MenuItem);
    PlaybackRateMenuItem.prototype.contentElType = "button", Component.registerComponent("PlaybackRateMenuItem", PlaybackRateMenuItem);
    var PlaybackRateMenuButton = function(_MenuButton) {
        function PlaybackRateMenuButton(player, options) {
            classCallCheck(this, PlaybackRateMenuButton);
            var _this = possibleConstructorReturn(this, _MenuButton.call(this, player, options));
            return _this.updateVisibility(), _this.updateLabel(), _this.on(player, "loadstart", _this.updateVisibility),
            _this.on(player, "ratechange", _this.updateLabel), _this;
        }
        return inherits(PlaybackRateMenuButton, _MenuButton), PlaybackRateMenuButton.prototype.createEl = function() {
            var el = _MenuButton.prototype.createEl.call(this);
            return this.labelEl_ = createEl("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }), el.appendChild(this.labelEl_), el;
        }, PlaybackRateMenuButton.prototype.dispose = function() {
            this.labelEl_ = null, _MenuButton.prototype.dispose.call(this);
        }, PlaybackRateMenuButton.prototype.buildCSSClass = function() {
            return "vjs-playback-rate " + _MenuButton.prototype.buildCSSClass.call(this);
        }, PlaybackRateMenuButton.prototype.buildWrapperCSSClass = function() {
            return "vjs-playback-rate " + _MenuButton.prototype.buildWrapperCSSClass.call(this);
        }, PlaybackRateMenuButton.prototype.createMenu = function() {
            var menu = new Menu(this.player()), rates = this.playbackRates();
            if (rates) for (var i = rates.length - 1; 0 <= i; i--) menu.addChild(new PlaybackRateMenuItem(this.player(), {
                rate: rates[i] + "x"
            }));
            return menu;
        }, PlaybackRateMenuButton.prototype.updateARIAAttributes = function() {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate());
        }, PlaybackRateMenuButton.prototype.handleClick = function(event) {
            for (var currentRate = this.player().playbackRate(), rates = this.playbackRates(), newRate = rates[0], i = 0; i < rates.length; i++) if (rates[i] > currentRate) {
                newRate = rates[i];
                break;
            }
            this.player().playbackRate(newRate);
        }, PlaybackRateMenuButton.prototype.playbackRates = function() {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates;
        }, PlaybackRateMenuButton.prototype.playbackRateSupported = function() {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length;
        }, PlaybackRateMenuButton.prototype.updateVisibility = function(event) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden");
        }, PlaybackRateMenuButton.prototype.updateLabel = function(event) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x");
        }, PlaybackRateMenuButton;
    }(MenuButton);
    PlaybackRateMenuButton.prototype.controlText_ = "Playback Rate", Component.registerComponent("PlaybackRateMenuButton", PlaybackRateMenuButton);
    var Spacer = function(_Component) {
        function Spacer() {
            return classCallCheck(this, Spacer), possibleConstructorReturn(this, _Component.apply(this, arguments));
        }
        return inherits(Spacer, _Component), Spacer.prototype.buildCSSClass = function() {
            return "vjs-spacer " + _Component.prototype.buildCSSClass.call(this);
        }, Spacer.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass()
            });
        }, Spacer;
    }(Component);
    Component.registerComponent("Spacer", Spacer);
    var CustomControlSpacer = function(_Spacer) {
        function CustomControlSpacer() {
            return classCallCheck(this, CustomControlSpacer), possibleConstructorReturn(this, _Spacer.apply(this, arguments));
        }
        return inherits(CustomControlSpacer, _Spacer), CustomControlSpacer.prototype.buildCSSClass = function() {
            return "vjs-custom-control-spacer " + _Spacer.prototype.buildCSSClass.call(this);
        }, CustomControlSpacer.prototype.createEl = function() {
            var el = _Spacer.prototype.createEl.call(this, {
                className: this.buildCSSClass()
            });
            return el.innerHTML = " ", el;
        }, CustomControlSpacer;
    }(Spacer);
    Component.registerComponent("CustomControlSpacer", CustomControlSpacer);
    var ControlBar = function(_Component) {
        function ControlBar() {
            return classCallCheck(this, ControlBar), possibleConstructorReturn(this, _Component.apply(this, arguments));
        }
        return inherits(ControlBar, _Component), ControlBar.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-control-bar",
                dir: "ltr"
            }, {
                role: "group"
            });
        }, ControlBar;
    }(Component);
    ControlBar.prototype.options_ = {
        children: [ "playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle" ]
    }, Component.registerComponent("ControlBar", ControlBar);
    var ErrorDisplay = function(_ModalDialog) {
        function ErrorDisplay(player, options) {
            classCallCheck(this, ErrorDisplay);
            var _this = possibleConstructorReturn(this, _ModalDialog.call(this, player, options));
            return _this.on(player, "error", _this.open), _this;
        }
        return inherits(ErrorDisplay, _ModalDialog), ErrorDisplay.prototype.buildCSSClass = function() {
            return "vjs-error-display " + _ModalDialog.prototype.buildCSSClass.call(this);
        }, ErrorDisplay.prototype.content = function() {
            var error = this.player().error();
            return error ? this.localize(error.message) : "";
        }, ErrorDisplay;
    }(ModalDialog);
    ErrorDisplay.prototype.options_ = mergeOptions(ModalDialog.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }), Component.registerComponent("ErrorDisplay", ErrorDisplay);
    var COLOR_BLACK = [ "#000", "Black" ], COLOR_BLUE = [ "#00F", "Blue" ], COLOR_CYAN = [ "#0FF", "Cyan" ], COLOR_GREEN = [ "#0F0", "Green" ], COLOR_MAGENTA = [ "#F0F", "Magenta" ], COLOR_RED = [ "#F00", "Red" ], COLOR_WHITE = [ "#FFF", "White" ], COLOR_YELLOW = [ "#FF0", "Yellow" ], OPACITY_OPAQUE = [ "1", "Opaque" ], OPACITY_SEMI = [ "0.5", "Semi-Transparent" ], OPACITY_TRANS = [ "0", "Transparent" ], selectConfigs = {
        backgroundColor: {
            selector: ".vjs-bg-color > select",
            id: "captions-background-color-%s",
            label: "Color",
            options: [ COLOR_BLACK, COLOR_WHITE, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN ]
        },
        backgroundOpacity: {
            selector: ".vjs-bg-opacity > select",
            id: "captions-background-opacity-%s",
            label: "Transparency",
            options: [ OPACITY_OPAQUE, OPACITY_SEMI, OPACITY_TRANS ]
        },
        color: {
            selector: ".vjs-fg-color > select",
            id: "captions-foreground-color-%s",
            label: "Color",
            options: [ COLOR_WHITE, COLOR_BLACK, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN ]
        },
        edgeStyle: {
            selector: ".vjs-edge-style > select",
            id: "%s",
            label: "Text Edge Style",
            options: [ [ "none", "None" ], [ "raised", "Raised" ], [ "depressed", "Depressed" ], [ "uniform", "Uniform" ], [ "dropshadow", "Dropshadow" ] ]
        },
        fontFamily: {
            selector: ".vjs-font-family > select",
            id: "captions-font-family-%s",
            label: "Font Family",
            options: [ [ "proportionalSansSerif", "Proportional Sans-Serif" ], [ "monospaceSansSerif", "Monospace Sans-Serif" ], [ "proportionalSerif", "Proportional Serif" ], [ "monospaceSerif", "Monospace Serif" ], [ "casual", "Casual" ], [ "script", "Script" ], [ "small-caps", "Small Caps" ] ]
        },
        fontPercent: {
            selector: ".vjs-font-percent > select",
            id: "captions-font-size-%s",
            label: "Font Size",
            options: [ [ "0.50", "50%" ], [ "0.75", "75%" ], [ "1.00", "100%" ], [ "1.25", "125%" ], [ "1.50", "150%" ], [ "1.75", "175%" ], [ "2.00", "200%" ], [ "3.00", "300%" ], [ "4.00", "400%" ] ],
            default: 2,
            parser: function(v) {
                return "1.00" === v ? null : Number(v);
            }
        },
        textOpacity: {
            selector: ".vjs-text-opacity > select",
            id: "captions-foreground-opacity-%s",
            label: "Transparency",
            options: [ OPACITY_OPAQUE, OPACITY_SEMI ]
        },
        windowColor: {
            selector: ".vjs-window-color > select",
            id: "captions-window-color-%s",
            label: "Color"
        },
        windowOpacity: {
            selector: ".vjs-window-opacity > select",
            id: "captions-window-opacity-%s",
            label: "Transparency",
            options: [ OPACITY_TRANS, OPACITY_SEMI, OPACITY_OPAQUE ]
        }
    };
    function parseOptionValue(value, parser) {
        if (parser && (value = parser(value)), value && "none" !== value) return value;
    }
    selectConfigs.windowColor.options = selectConfigs.backgroundColor.options;
    var TextTrackSettings = function(_ModalDialog) {
        function TextTrackSettings(player, options) {
            classCallCheck(this, TextTrackSettings), options.temporary = !1;
            var _this = possibleConstructorReturn(this, _ModalDialog.call(this, player, options));
            return _this.updateDisplay = bind(_this, _this.updateDisplay), _this.fill(), _this.hasBeenOpened_ = _this.hasBeenFilled_ = !0,
            _this.endDialog = createEl("p", {
                className: "vjs-control-text",
                textContent: _this.localize("End of dialog window.")
            }), _this.el().appendChild(_this.endDialog), _this.setDefaults(), void 0 === options.persistTextTrackSettings && (_this.options_.persistTextTrackSettings = _this.options_.playerOptions.persistTextTrackSettings),
            _this.on(_this.$(".vjs-done-button"), "click", function() {
                _this.saveSettings(), _this.close();
            }), _this.on(_this.$(".vjs-default-button"), "click", function() {
                _this.setDefaults(), _this.updateDisplay();
            }), each(selectConfigs, function(config) {
                _this.on(_this.$(config.selector), "change", _this.updateDisplay);
            }), _this.options_.persistTextTrackSettings && _this.restoreSettings(), _this;
        }
        return inherits(TextTrackSettings, _ModalDialog), TextTrackSettings.prototype.dispose = function() {
            this.endDialog = null, _ModalDialog.prototype.dispose.call(this);
        }, TextTrackSettings.prototype.createElSelect_ = function(key) {
            var _this2 = this, legendId = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "", type = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "label", config = selectConfigs[key], id = config.id.replace("%s", this.id_);
            return [ "<" + type + ' id="' + id + '" class="' + ("label" === type ? "vjs-label" : "") + '">', this.localize(config.label), "</" + type + ">", '<select aria-labelledby="' + ("" !== legendId ? legendId + " " : "") + id + '">' ].concat(config.options.map(function(o) {
                var optionId = id + "-" + o[1];
                return [ '<option id="' + optionId + '" value="' + o[0] + '" ', 'aria-labelledby="' + ("" !== legendId ? legendId + " " : "") + id + " " + optionId + '">', _this2.localize(o[1]), "</option>" ].join("");
            })).concat("</select>").join("");
        }, TextTrackSettings.prototype.createElFgColor_ = function() {
            var legendId = "captions-text-legend-" + this.id_;
            return [ '<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", legendId), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", legendId), "</span>", "</fieldset>" ].join("");
        }, TextTrackSettings.prototype.createElBgColor_ = function() {
            var legendId = "captions-background-" + this.id_;
            return [ '<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", legendId), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", legendId), "</span>", "</fieldset>" ].join("");
        }, TextTrackSettings.prototype.createElWinColor_ = function() {
            var legendId = "captions-window-" + this.id_;
            return [ '<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + legendId + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", legendId), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", legendId), "</span>", "</fieldset>" ].join("");
        }, TextTrackSettings.prototype.createElColors_ = function() {
            return createEl("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [ this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_() ].join("")
            });
        }, TextTrackSettings.prototype.createElFont_ = function() {
            return createEl("div", {
                className: "vjs-track-settings-font",
                innerHTML: [ '<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>" ].join("")
            });
        }, TextTrackSettings.prototype.createElControls_ = function() {
            var defaultsDescription = this.localize("restore all settings to the default values");
            return createEl("div", {
                className: "vjs-track-settings-controls",
                innerHTML: [ '<button class="vjs-default-button" title="' + defaultsDescription + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + defaultsDescription + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>" ].join("")
            });
        }, TextTrackSettings.prototype.content = function() {
            return [ this.createElColors_(), this.createElFont_(), this.createElControls_() ];
        }, TextTrackSettings.prototype.label = function() {
            return this.localize("Caption Settings Dialog");
        }, TextTrackSettings.prototype.description = function() {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.");
        }, TextTrackSettings.prototype.buildCSSClass = function() {
            return _ModalDialog.prototype.buildCSSClass.call(this) + " vjs-text-track-settings";
        }, TextTrackSettings.prototype.getValues = function() {
            var _this3 = this;
            return function(object, fn) {
                var initial = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                return keys(object).reduce(function(accum, key) {
                    return fn(accum, object[key], key);
                }, initial);
            }(selectConfigs, function(accum, config, key) {
                var el, parser, value = (el = _this3.$(config.selector), parser = config.parser,
                parseOptionValue(el.options[el.options.selectedIndex].value, parser));
                return void 0 !== value && (accum[key] = value), accum;
            }, {});
        }, TextTrackSettings.prototype.setValues = function(values) {
            var _this4 = this;
            each(selectConfigs, function(config, key) {
                !function(el, value, parser) {
                    if (value) for (var i = 0; i < el.options.length; i++) if (parseOptionValue(el.options[i].value, parser) === value) {
                        el.selectedIndex = i;
                        break;
                    }
                }(_this4.$(config.selector), values[key], config.parser);
            });
        }, TextTrackSettings.prototype.setDefaults = function() {
            var _this5 = this;
            each(selectConfigs, function(config) {
                var index = config.hasOwnProperty("default") ? config.default : 0;
                _this5.$(config.selector).selectedIndex = index;
            });
        }, TextTrackSettings.prototype.restoreSettings = function() {
            var values = void 0;
            try {
                values = JSON.parse(window_1.localStorage.getItem("vjs-text-track-settings"));
            } catch (err) {
                log$1.warn(err);
            }
            values && this.setValues(values);
        }, TextTrackSettings.prototype.saveSettings = function() {
            if (this.options_.persistTextTrackSettings) {
                var values = this.getValues();
                try {
                    Object.keys(values).length ? window_1.localStorage.setItem("vjs-text-track-settings", JSON.stringify(values)) : window_1.localStorage.removeItem("vjs-text-track-settings");
                } catch (err) {
                    log$1.warn(err);
                }
            }
        }, TextTrackSettings.prototype.updateDisplay = function() {
            var ttDisplay = this.player_.getChild("textTrackDisplay");
            ttDisplay && ttDisplay.updateDisplay();
        }, TextTrackSettings.prototype.conditionalBlur_ = function() {
            this.previouslyActiveEl_ = null, this.off(document_1, "keydown", this.handleKeyDown);
            var cb = this.player_.controlBar, subsCapsBtn = cb && cb.subsCapsButton, ccBtn = cb && cb.captionsButton;
            subsCapsBtn ? subsCapsBtn.focus() : ccBtn && ccBtn.focus();
        }, TextTrackSettings;
    }(ModalDialog);
    Component.registerComponent("TextTrackSettings", TextTrackSettings);
    var ResizeManager = function(_Component) {
        function ResizeManager(player, options) {
            classCallCheck(this, ResizeManager);
            var RESIZE_OBSERVER_AVAILABLE = options.ResizeObserver || window_1.ResizeObserver;
            null === options.ResizeObserver && (RESIZE_OBSERVER_AVAILABLE = !1);
            var options_ = mergeOptions({
                createEl: !RESIZE_OBSERVER_AVAILABLE
            }, options), _this = possibleConstructorReturn(this, _Component.call(this, player, options_));
            return _this.ResizeObserver = options.ResizeObserver || window_1.ResizeObserver,
            _this.loadListener_ = null, _this.resizeObserver_ = null, _this.debouncedHandler_ = debounce(function() {
                _this.resizeHandler();
            }, 100, !1, player), RESIZE_OBSERVER_AVAILABLE ? (_this.resizeObserver_ = new _this.ResizeObserver(_this.debouncedHandler_),
            _this.resizeObserver_.observe(player.el())) : (_this.loadListener_ = function() {
                _this.el_.contentWindow && on(_this.el_.contentWindow, "resize", _this.debouncedHandler_),
                _this.off("load", _this.loadListener_);
            }, _this.on("load", _this.loadListener_)), _this;
        }
        return inherits(ResizeManager, _Component), ResizeManager.prototype.createEl = function() {
            return _Component.prototype.createEl.call(this, "iframe", {
                className: "vjs-resize-manager"
            });
        }, ResizeManager.prototype.resizeHandler = function() {
            this.player_.trigger("playerresize");
        }, ResizeManager.prototype.dispose = function() {
            this.resizeObserver_ && (this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()),
            this.el_ && this.el_.contentWindow && off(this.el_.contentWindow, "resize", this.debouncedHandler_),
            this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null,
            this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null;
        }, ResizeManager;
    }(Component);
    Component.registerComponent("ResizeManager", ResizeManager);
    var _templateObject$2 = taggedTemplateLiteralLoose([ "Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading." ], [ "Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading." ]), Html5 = function(_Tech) {
        function Html5(options, ready) {
            classCallCheck(this, Html5);
            var _this = possibleConstructorReturn(this, _Tech.call(this, options, ready)), source = options.source, crossoriginTracks = !1;
            if (source && (_this.el_.currentSrc !== source.src || options.tag && 3 === options.tag.initNetworkState_) ? _this.setSource(source) : _this.handleLateInit_(_this.el_),
            _this.el_.hasChildNodes()) {
                for (var nodes = _this.el_.childNodes, nodesLength = nodes.length, removeNodes = []; nodesLength--; ) {
                    var node = nodes[nodesLength];
                    "track" === node.nodeName.toLowerCase() && (_this.featuresNativeTextTracks ? (_this.remoteTextTrackEls().addTrackElement_(node),
                    _this.remoteTextTracks().addTrack(node.track), _this.textTracks().addTrack(node.track),
                    crossoriginTracks || _this.el_.hasAttribute("crossorigin") || !isCrossOrigin(node.src) || (crossoriginTracks = !0)) : removeNodes.push(node));
                }
                for (var i = 0; i < removeNodes.length; i++) _this.el_.removeChild(removeNodes[i]);
            }
            return _this.proxyNativeTracks_(), _this.featuresNativeTextTracks && crossoriginTracks && log$1.warn(tsml(_templateObject$2)),
            _this.restoreMetadataTracksInIOSNativePlayer_(), (TOUCH_ENABLED || IS_IPHONE || IS_NATIVE_ANDROID) && !0 === options.nativeControlsForTouch && _this.setControls(!0),
            _this.proxyWebkitFullscreen_(), _this.triggerReady(), _this;
        }
        return inherits(Html5, _Tech), Html5.prototype.dispose = function() {
            Html5.disposeMediaElement(this.el_), this.options_ = null, _Tech.prototype.dispose.call(this);
        }, Html5.prototype.restoreMetadataTracksInIOSNativePlayer_ = function() {
            var textTracks = this.textTracks(), metadataTracksPreFullscreenState = void 0, takeMetadataTrackSnapshot = function() {
                metadataTracksPreFullscreenState = [];
                for (var i = 0; i < textTracks.length; i++) {
                    var track = textTracks[i];
                    "metadata" === track.kind && metadataTracksPreFullscreenState.push({
                        track: track,
                        storedMode: track.mode
                    });
                }
            };
            takeMetadataTrackSnapshot(), textTracks.addEventListener("change", takeMetadataTrackSnapshot),
            this.on("dispose", function() {
                return textTracks.removeEventListener("change", takeMetadataTrackSnapshot);
            });
            var restoreTrackMode = function restoreTrackMode() {
                for (var i = 0; i < metadataTracksPreFullscreenState.length; i++) {
                    var storedTrack = metadataTracksPreFullscreenState[i];
                    "disabled" === storedTrack.track.mode && storedTrack.track.mode !== storedTrack.storedMode && (storedTrack.track.mode = storedTrack.storedMode);
                }
                textTracks.removeEventListener("change", restoreTrackMode);
            };
            this.on("webkitbeginfullscreen", function() {
                textTracks.removeEventListener("change", takeMetadataTrackSnapshot), textTracks.removeEventListener("change", restoreTrackMode),
                textTracks.addEventListener("change", restoreTrackMode);
            }), this.on("webkitendfullscreen", function() {
                textTracks.removeEventListener("change", takeMetadataTrackSnapshot), textTracks.addEventListener("change", takeMetadataTrackSnapshot),
                textTracks.removeEventListener("change", restoreTrackMode);
            });
        }, Html5.prototype.proxyNativeTracks_ = function() {
            var _this2 = this;
            NORMAL.names.forEach(function(name) {
                var props = NORMAL[name], elTracks = _this2.el()[props.getterName], techTracks = _this2[props.getterName]();
                if (_this2["featuresNative" + props.capitalName + "Tracks"] && elTracks && elTracks.addEventListener) {
                    var listeners = {
                        change: function(e) {
                            techTracks.trigger({
                                type: "change",
                                target: techTracks,
                                currentTarget: techTracks,
                                srcElement: techTracks
                            });
                        },
                        addtrack: function(e) {
                            techTracks.addTrack(e.track);
                        },
                        removetrack: function(e) {
                            techTracks.removeTrack(e.track);
                        }
                    }, removeOldTracks = function() {
                        for (var removeTracks = [], i = 0; i < techTracks.length; i++) {
                            for (var found = !1, j = 0; j < elTracks.length; j++) if (elTracks[j] === techTracks[i]) {
                                found = !0;
                                break;
                            }
                            found || removeTracks.push(techTracks[i]);
                        }
                        for (;removeTracks.length; ) techTracks.removeTrack(removeTracks.shift());
                    };
                    Object.keys(listeners).forEach(function(eventName) {
                        var listener = listeners[eventName];
                        elTracks.addEventListener(eventName, listener), _this2.on("dispose", function(e) {
                            return elTracks.removeEventListener(eventName, listener);
                        });
                    }), _this2.on("loadstart", removeOldTracks), _this2.on("dispose", function(e) {
                        return _this2.off("loadstart", removeOldTracks);
                    });
                }
            });
        }, Html5.prototype.createEl = function() {
            var el = this.options_.tag;
            if (!el || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                if (el) {
                    var clone = el.cloneNode(!0);
                    el.parentNode && el.parentNode.insertBefore(clone, el), Html5.disposeMediaElement(el),
                    el = clone;
                } else {
                    el = document_1.createElement("video");
                    var attributes = mergeOptions({}, this.options_.tag && getAttributes(this.options_.tag));
                    TOUCH_ENABLED && !0 === this.options_.nativeControlsForTouch || delete attributes.controls,
                    setAttributes(el, assign(attributes, {
                        id: this.options_.techId,
                        class: "vjs-tech"
                    }));
                }
                el.playerId = this.options_.playerId;
            }
            void 0 !== this.options_.preload && setAttribute(el, "preload", this.options_.preload);
            for (var settingsAttrs = [ "loop", "muted", "playsinline", "autoplay" ], i = 0; i < settingsAttrs.length; i++) {
                var attr = settingsAttrs[i], value = this.options_[attr];
                void 0 !== value && (value ? setAttribute(el, attr, attr) : removeAttribute(el, attr),
                el[attr] = value);
            }
            return el;
        }, Html5.prototype.handleLateInit_ = function(el) {
            if (0 !== el.networkState && 3 !== el.networkState) {
                if (0 === el.readyState) {
                    var loadstartFired = !1, setLoadstartFired = function() {
                        loadstartFired = !0;
                    };
                    this.on("loadstart", setLoadstartFired);
                    var triggerLoadstart = function() {
                        loadstartFired || this.trigger("loadstart");
                    };
                    return this.on("loadedmetadata", triggerLoadstart), void this.ready(function() {
                        this.off("loadstart", setLoadstartFired), this.off("loadedmetadata", triggerLoadstart),
                        loadstartFired || this.trigger("loadstart");
                    });
                }
                var eventsToTrigger = [ "loadstart" ];
                eventsToTrigger.push("loadedmetadata"), 2 <= el.readyState && eventsToTrigger.push("loadeddata"),
                3 <= el.readyState && eventsToTrigger.push("canplay"), 4 <= el.readyState && eventsToTrigger.push("canplaythrough"),
                this.ready(function() {
                    eventsToTrigger.forEach(function(type) {
                        this.trigger(type);
                    }, this);
                });
            }
        }, Html5.prototype.setCurrentTime = function(seconds) {
            try {
                this.el_.currentTime = seconds;
            } catch (e) {
                log$1(e, "Video is not ready. (Video.js)");
            }
        }, Html5.prototype.duration = function() {
            var _this3 = this;
            if (this.el_.duration === 1 / 0 && IS_ANDROID && IS_CHROME && 0 === this.el_.currentTime) {
                return this.on("timeupdate", function checkProgress() {
                    0 < _this3.el_.currentTime && (_this3.el_.duration === 1 / 0 && _this3.trigger("durationchange"),
                    _this3.off("timeupdate", checkProgress));
                }), NaN;
            }
            return this.el_.duration || NaN;
        }, Html5.prototype.width = function() {
            return this.el_.offsetWidth;
        }, Html5.prototype.height = function() {
            return this.el_.offsetHeight;
        }, Html5.prototype.proxyWebkitFullscreen_ = function() {
            var _this4 = this;
            if ("webkitDisplayingFullscreen" in this.el_) {
                var endFn = function() {
                    this.trigger("fullscreenchange", {
                        isFullscreen: !1
                    });
                }, beginFn = function() {
                    "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", endFn),
                    this.trigger("fullscreenchange", {
                        isFullscreen: !0
                    }));
                };
                this.on("webkitbeginfullscreen", beginFn), this.on("dispose", function() {
                    _this4.off("webkitbeginfullscreen", beginFn), _this4.off("webkitendfullscreen", endFn);
                });
            }
        }, Html5.prototype.supportsFullScreen = function() {
            if ("function" == typeof this.el_.webkitEnterFullScreen) {
                var userAgent = window_1.navigator && window_1.navigator.userAgent || "";
                if (/Android/.test(userAgent) || !/Chrome|Mac OS X 10.5/.test(userAgent)) return !0;
            }
            return !1;
        }, Html5.prototype.enterFullScreen = function() {
            var video = this.el_;
            video.paused && video.networkState <= video.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                video.pause(), video.webkitEnterFullScreen();
            }, 0)) : video.webkitEnterFullScreen();
        }, Html5.prototype.exitFullScreen = function() {
            this.el_.webkitExitFullScreen();
        }, Html5.prototype.src = function(_src) {
            if (void 0 === _src) return this.el_.src;
            this.setSrc(_src);
        }, Html5.prototype.reset = function() {
            Html5.resetMediaElement(this.el_);
        }, Html5.prototype.currentSrc = function() {
            return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc;
        }, Html5.prototype.setControls = function(val) {
            this.el_.controls = !!val;
        }, Html5.prototype.addTextTrack = function(kind, label, language) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(kind, label, language) : _Tech.prototype.addTextTrack.call(this, kind, label, language);
        }, Html5.prototype.createRemoteTextTrack = function(options) {
            if (!this.featuresNativeTextTracks) return _Tech.prototype.createRemoteTextTrack.call(this, options);
            var htmlTrackElement = document_1.createElement("track");
            return options.kind && (htmlTrackElement.kind = options.kind), options.label && (htmlTrackElement.label = options.label),
            (options.language || options.srclang) && (htmlTrackElement.srclang = options.language || options.srclang),
            options.default && (htmlTrackElement.default = options.default), options.id && (htmlTrackElement.id = options.id),
            options.src && (htmlTrackElement.src = options.src), htmlTrackElement;
        }, Html5.prototype.addRemoteTextTrack = function(options, manualCleanup) {
            var htmlTrackElement = _Tech.prototype.addRemoteTextTrack.call(this, options, manualCleanup);
            return this.featuresNativeTextTracks && this.el().appendChild(htmlTrackElement),
            htmlTrackElement;
        }, Html5.prototype.removeRemoteTextTrack = function(track) {
            if (_Tech.prototype.removeRemoteTextTrack.call(this, track), this.featuresNativeTextTracks) for (var tracks = this.$$("track"), i = tracks.length; i--; ) track !== tracks[i] && track !== tracks[i].track || this.el().removeChild(tracks[i]);
        }, Html5.prototype.getVideoPlaybackQuality = function() {
            if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
            var videoPlaybackQuality = {};
            return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (videoPlaybackQuality.droppedVideoFrames = this.el().webkitDroppedFrameCount,
            videoPlaybackQuality.totalVideoFrames = this.el().webkitDecodedFrameCount), window_1.performance && "function" == typeof window_1.performance.now ? videoPlaybackQuality.creationTime = window_1.performance.now() : window_1.performance && window_1.performance.timing && "number" == typeof window_1.performance.timing.navigationStart && (videoPlaybackQuality.creationTime = window_1.Date.now() - window_1.performance.timing.navigationStart),
            videoPlaybackQuality;
        }, Html5;
    }(Tech);
    if (isReal()) {
        Html5.TEST_VID = document_1.createElement("video");
        var track = document_1.createElement("track");
        track.kind = "captions", track.srclang = "en", track.label = "English", Html5.TEST_VID.appendChild(track);
    }
    Html5.isSupported = function() {
        try {
            Html5.TEST_VID.volume = .5;
        } catch (e) {
            return !1;
        }
        return !(!Html5.TEST_VID || !Html5.TEST_VID.canPlayType);
    }, Html5.canPlayType = function(type) {
        return Html5.TEST_VID.canPlayType(type);
    }, Html5.canPlaySource = function(srcObj, options) {
        return Html5.canPlayType(srcObj.type);
    }, Html5.canControlVolume = function() {
        try {
            var volume = Html5.TEST_VID.volume;
            return Html5.TEST_VID.volume = volume / 2 + .1, volume !== Html5.TEST_VID.volume;
        } catch (e) {
            return !1;
        }
    }, Html5.canControlPlaybackRate = function() {
        if (IS_ANDROID && IS_CHROME && CHROME_VERSION < 58) return !1;
        try {
            var playbackRate = Html5.TEST_VID.playbackRate;
            return Html5.TEST_VID.playbackRate = playbackRate / 2 + .1, playbackRate !== Html5.TEST_VID.playbackRate;
        } catch (e) {
            return !1;
        }
    }, Html5.supportsNativeTextTracks = function() {
        return IS_ANY_SAFARI;
    }, Html5.supportsNativeVideoTracks = function() {
        return !(!Html5.TEST_VID || !Html5.TEST_VID.videoTracks);
    }, Html5.supportsNativeAudioTracks = function() {
        return !(!Html5.TEST_VID || !Html5.TEST_VID.audioTracks);
    }, Html5.Events = [ "loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange" ],
    Html5.prototype.featuresVolumeControl = Html5.canControlVolume(), Html5.prototype.featuresPlaybackRate = Html5.canControlPlaybackRate(),
    Html5.prototype.movingMediaElementInDOM = !IS_IOS, Html5.prototype.featuresFullscreenResize = !0,
    Html5.prototype.featuresProgressEvents = !0, Html5.prototype.featuresTimeupdateEvents = !0,
    Html5.prototype.featuresNativeTextTracks = Html5.supportsNativeTextTracks(), Html5.prototype.featuresNativeVideoTracks = Html5.supportsNativeVideoTracks(),
    Html5.prototype.featuresNativeAudioTracks = Html5.supportsNativeAudioTracks();
    var canPlayType = Html5.TEST_VID && Html5.TEST_VID.constructor.prototype.canPlayType, mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, mp4RE = /^video\/mp4/i;
    Html5.patchCanPlayType = function() {
        4 <= ANDROID_VERSION && !IS_FIREFOX && !IS_CHROME ? Html5.TEST_VID.constructor.prototype.canPlayType = function(type) {
            return type && mpegurlRE.test(type) ? "maybe" : canPlayType.call(this, type);
        } : IS_OLD_ANDROID && (Html5.TEST_VID.constructor.prototype.canPlayType = function(type) {
            return type && mp4RE.test(type) ? "maybe" : canPlayType.call(this, type);
        });
    }, Html5.unpatchCanPlayType = function() {
        var r = Html5.TEST_VID.constructor.prototype.canPlayType;
        return Html5.TEST_VID.constructor.prototype.canPlayType = canPlayType, r;
    }, Html5.patchCanPlayType(), Html5.disposeMediaElement = function(el) {
        if (el) {
            for (el.parentNode && el.parentNode.removeChild(el); el.hasChildNodes(); ) el.removeChild(el.firstChild);
            el.removeAttribute("src"), "function" == typeof el.load && function() {
                try {
                    el.load();
                } catch (e) {}
            }();
        }
    }, Html5.resetMediaElement = function(el) {
        if (el) {
            for (var sources = el.querySelectorAll("source"), i = sources.length; i--; ) el.removeChild(sources[i]);
            el.removeAttribute("src"), "function" == typeof el.load && function() {
                try {
                    el.load();
                } catch (e) {}
            }();
        }
    }, [ "muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline" ].forEach(function(prop) {
        Html5.prototype[prop] = function() {
            return this.el_[prop] || this.el_.hasAttribute(prop);
        };
    }), [ "muted", "defaultMuted", "autoplay", "loop", "playsinline" ].forEach(function(prop) {
        Html5.prototype["set" + toTitleCase(prop)] = function(v) {
            (this.el_[prop] = v) ? this.el_.setAttribute(prop, prop) : this.el_.removeAttribute(prop);
        };
    }), [ "paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight" ].forEach(function(prop) {
        Html5.prototype[prop] = function() {
            return this.el_[prop];
        };
    }), [ "volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate" ].forEach(function(prop) {
        Html5.prototype["set" + toTitleCase(prop)] = function(v) {
            this.el_[prop] = v;
        };
    }), [ "pause", "load", "play" ].forEach(function(prop) {
        Html5.prototype[prop] = function() {
            return this.el_[prop]();
        };
    }), Tech.withSourceHandlers(Html5), Html5.nativeSourceHandler = {}, Html5.nativeSourceHandler.canPlayType = function(type) {
        try {
            return Html5.TEST_VID.canPlayType(type);
        } catch (e) {
            return "";
        }
    }, Html5.nativeSourceHandler.canHandleSource = function(source, options) {
        if (source.type) return Html5.nativeSourceHandler.canPlayType(source.type);
        if (source.src) {
            var ext = getFileExtension(source.src);
            return Html5.nativeSourceHandler.canPlayType("video/" + ext);
        }
        return "";
    }, Html5.nativeSourceHandler.handleSource = function(source, tech, options) {
        tech.setSrc(source.src);
    }, Html5.nativeSourceHandler.dispose = function() {}, Html5.registerSourceHandler(Html5.nativeSourceHandler),
    Tech.registerTech("Html5", Html5);
    var _templateObject$1 = taggedTemplateLiteralLoose([ "\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      " ], [ "\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      " ]), TECH_EVENTS_RETRIGGER = [ "progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "resize", "volumechange", "texttrackchange" ], Player = function(_Component) {
        function Player(tag, options, ready) {
            if (classCallCheck(this, Player), tag.id = tag.id || "vjs_video_" + newGUID(), (options = assign(Player.getTagSettings(tag), options)).initChildren = !1,
            options.createEl = !1, options.evented = !1, options.reportTouchActivity = !1, !options.language) if ("function" == typeof tag.closest) {
                var closest = tag.closest("[lang]");
                closest && closest.getAttribute && (options.language = closest.getAttribute("lang"));
            } else for (var element = tag; element && 1 === element.nodeType; ) {
                if (getAttributes(element).hasOwnProperty("lang")) {
                    options.language = element.getAttribute("lang");
                    break;
                }
                element = element.parentNode;
            }
            var _this = possibleConstructorReturn(this, _Component.call(this, null, options, ready));
            if (_this.isReady_ = !1, _this.hasStarted_ = !1, _this.userActive_ = !1, !_this.options_ || !_this.options_.techOrder || !_this.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
            if (_this.tag = tag, _this.tagAttributes = tag && getAttributes(tag), _this.language(_this.options_.language),
            options.languages) {
                var languagesToLower = {};
                Object.getOwnPropertyNames(options.languages).forEach(function(name$$1) {
                    languagesToLower[name$$1.toLowerCase()] = options.languages[name$$1];
                }), _this.languages_ = languagesToLower;
            } else _this.languages_ = Player.prototype.options_.languages;
            _this.cache_ = {}, _this.poster_ = options.poster || "", _this.controls_ = !!options.controls,
            _this.cache_.lastVolume = 1, tag.controls = !1, tag.removeAttribute("controls"),
            _this.scrubbing_ = !1, _this.el_ = _this.createEl(), evented(_this, {
                eventBusKey: "el_"
            });
            var playerOptionsCopy = mergeOptions(_this.options_);
            if (options.plugins) {
                var plugins = options.plugins;
                Object.keys(plugins).forEach(function(name$$1) {
                    if ("function" != typeof this[name$$1]) throw new Error('plugin "' + name$$1 + '" does not exist');
                    this[name$$1](plugins[name$$1]);
                }, _this);
            }
            _this.options_.playerOptions = playerOptionsCopy, _this.middleware_ = [], _this.initChildren(),
            _this.isAudio("audio" === tag.nodeName.toLowerCase()), _this.controls() ? _this.addClass("vjs-controls-enabled") : _this.addClass("vjs-controls-disabled"),
            _this.el_.setAttribute("role", "region"), _this.isAudio() ? _this.el_.setAttribute("aria-label", _this.localize("Audio Player")) : _this.el_.setAttribute("aria-label", _this.localize("Video Player")),
            _this.isAudio() && _this.addClass("vjs-audio"), _this.flexNotSupported_() && _this.addClass("vjs-no-flex"),
            IS_IOS || _this.addClass("vjs-workinghover"), Player.players[_this.id_] = _this;
            var majorVersion = version.split(".")[0];
            return _this.addClass("vjs-v" + majorVersion), _this.userActive(!0), _this.reportUserActivity(),
            _this.listenForUserActivity_(), _this.on("fullscreenchange", _this.handleFullscreenChange_),
            _this.on("stageclick", _this.handleStageClick_), _this.changingSrc_ = !1, _this.playWaitingForReady_ = !1,
            _this.playOnLoadstart_ = null, _this.forceAutoplayInChrome_(), _this;
        }
        return inherits(Player, _Component), Player.prototype.dispose = function() {
            this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_),
            this.styleEl_ = null), Player.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null),
            this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(),
            this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null),
            middlewareInstances[this.id()] = null, _Component.prototype.dispose.call(this);
        }, Player.prototype.createEl = function() {
            var tag = this.tag, el = void 0, playerElIngest = this.playerElIngest_ = tag.parentNode && tag.parentNode.hasAttribute && tag.parentNode.hasAttribute("data-vjs-player"), divEmbed = "video-js" === this.tag.tagName.toLowerCase();
            playerElIngest ? el = this.el_ = tag.parentNode : divEmbed || (el = this.el_ = _Component.prototype.createEl.call(this, "div"));
            var attrs = getAttributes(tag);
            if (divEmbed) {
                for (el = this.el_ = tag, tag = this.tag = document_1.createElement("video"); el.children.length; ) tag.appendChild(el.firstChild);
                hasClass(el, "video-js") || addClass(el, "video-js"), el.appendChild(tag), playerElIngest = this.playerElIngest_ = el;
            }
            if (tag.setAttribute("tabindex", "-1"), tag.removeAttribute("width"), tag.removeAttribute("height"),
            Object.getOwnPropertyNames(attrs).forEach(function(attr) {
                "class" === attr ? (el.className += " " + attrs[attr], divEmbed && (tag.className += " " + attrs[attr])) : (el.setAttribute(attr, attrs[attr]),
                divEmbed && tag.setAttribute(attr, attrs[attr]));
            }), tag.playerId = tag.id, tag.id += "_html5_api", tag.className = "vjs-tech", tag.player = el.player = this,
            this.addClass("vjs-paused"), !0 !== window_1.VIDEOJS_NO_DYNAMIC_STYLE) {
                this.styleEl_ = createStyleElement("vjs-styles-dimensions");
                var defaultsStyleEl = $(".vjs-styles-defaults"), head = $("head");
                head.insertBefore(this.styleEl_, defaultsStyleEl ? defaultsStyleEl.nextSibling : head.firstChild);
            }
            this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid),
            this.aspectRatio(this.options_.aspectRatio);
            for (var links = tag.getElementsByTagName("a"), i = 0; i < links.length; i++) {
                var linkEl = links.item(i);
                addClass(linkEl, "vjs-hidden"), linkEl.setAttribute("hidden", "hidden");
            }
            return tag.initNetworkState_ = tag.networkState, tag.parentNode && !playerElIngest && tag.parentNode.insertBefore(el, tag),
            prependTo(tag, el), this.children_.unshift(tag), this.el_.setAttribute("lang", this.language_),
            this.el_ = el;
        }, Player.prototype.width = function(value) {
            return this.dimension("width", value);
        }, Player.prototype.height = function(value) {
            return this.dimension("height", value);
        }, Player.prototype.dimension = function(_dimension, value) {
            var privDimension = _dimension + "_";
            if (void 0 === value) return this[privDimension] || 0;
            if ("" === value) return this[privDimension] = void 0, void this.updateStyleEl_();
            var parsedVal = parseFloat(value);
            isNaN(parsedVal) ? log$1.error('Improper value "' + value + '" supplied for for ' + _dimension) : (this[privDimension] = parsedVal,
            this.updateStyleEl_());
        }, Player.prototype.fluid = function(bool) {
            if (void 0 === bool) return !!this.fluid_;
            this.fluid_ = !!bool, bool ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"),
            this.updateStyleEl_();
        }, Player.prototype.aspectRatio = function(ratio) {
            if (void 0 === ratio) return this.aspectRatio_;
            if (!/^\d+\:\d+$/.test(ratio)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
            this.aspectRatio_ = ratio, this.fluid(!0), this.updateStyleEl_();
        }, Player.prototype.updateStyleEl_ = function() {
            if (!0 !== window_1.VIDEOJS_NO_DYNAMIC_STYLE) {
                var width = void 0, height = void 0, idClass = void 0, ratioParts = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"), ratioMultiplier = ratioParts[1] / ratioParts[0];
                width = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / ratioMultiplier : this.videoWidth() || 300,
                height = void 0 !== this.height_ ? this.height_ : width * ratioMultiplier, idClass = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions",
                this.addClass(idClass), setTextContent(this.styleEl_, "\n      ." + idClass + " {\n        width: " + width + "px;\n        height: " + height + "px;\n      }\n\n      ." + idClass + ".vjs-fluid {\n        padding-top: " + 100 * ratioMultiplier + "%;\n      }\n    ");
            } else {
                var _width = "number" == typeof this.width_ ? this.width_ : this.options_.width, _height = "number" == typeof this.height_ ? this.height_ : this.options_.height, techEl = this.tech_ && this.tech_.el();
                techEl && (0 <= _width && (techEl.width = _width), 0 <= _height && (techEl.height = _height));
            }
        }, Player.prototype.loadTech_ = function(techName, source) {
            var _this2 = this;
            this.tech_ && this.unloadTech_();
            var titleTechName = toTitleCase(techName), camelTechName = techName.charAt(0).toLowerCase() + techName.slice(1);
            "Html5" !== titleTechName && this.tag && (Tech.getTech("Html5").disposeMediaElement(this.tag),
            this.tag.player = null, this.tag = null), this.techName_ = titleTechName, this.isReady_ = !1;
            var techOptions = {
                source: source,
                nativeControlsForTouch: this.options_.nativeControlsForTouch,
                playerId: this.id(),
                techId: this.id() + "_" + titleTechName + "_api",
                autoplay: this.options_.autoplay,
                playsinline: this.options_.playsinline,
                preload: this.options_.preload,
                loop: this.options_.loop,
                muted: this.options_.muted,
                poster: this.poster(),
                language: this.language(),
                playerElIngest: this.playerElIngest_ || !1,
                "vtt.js": this.options_["vtt.js"]
            };
            ALL.names.forEach(function(name$$1) {
                var props = ALL[name$$1];
                techOptions[props.getterName] = _this2[props.privateName];
            }), assign(techOptions, this.options_[titleTechName]), assign(techOptions, this.options_[camelTechName]),
            assign(techOptions, this.options_[techName.toLowerCase()]), this.tag && (techOptions.tag = this.tag),
            source && source.src === this.cache_.src && 0 < this.cache_.currentTime && (techOptions.startTime = this.cache_.currentTime);
            var TechClass = Tech.getTech(techName);
            if (!TechClass) throw new Error("No Tech named '" + titleTechName + "' exists! '" + titleTechName + "' should be registered using videojs.registerTech()'");
            this.tech_ = new TechClass(techOptions), this.tech_.ready(bind(this, this.handleTechReady_), !0),
            textTrackConverter_jsonToTextTracks(this.textTracksJson_ || [], this.tech_), TECH_EVENTS_RETRIGGER.forEach(function(event) {
                _this2.on(_this2.tech_, event, _this2["handleTech" + toTitleCase(event) + "_"]);
            }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_),
            this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_),
            this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_),
            this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_),
            this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_),
            this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_),
            this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_),
            this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_),
            this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")),
            this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
            this.tech_.el().parentNode === this.el() || "Html5" === titleTechName && this.tag || prependTo(this.tech_.el(), this.el()),
            this.tag && (this.tag.player = null, this.tag = null);
        }, Player.prototype.unloadTech_ = function() {
            var _this3 = this;
            ALL.names.forEach(function(name$$1) {
                var props = ALL[name$$1];
                _this3[props.privateName] = _this3[props.getterName]();
            }), this.textTracksJson_ = textTrackConverter_textTracksToJson(this.tech_), this.isReady_ = !1,
            this.tech_.dispose(), this.tech_ = !1;
        }, Player.prototype.tech = function(safety) {
            return void 0 === safety && log$1.warn(tsml(_templateObject$1)), this.tech_;
        }, Player.prototype.addTechControlsListeners_ = function() {
            this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_),
            this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_),
            this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_);
        }, Player.prototype.removeTechControlsListeners_ = function() {
            this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_),
            this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_),
            this.off(this.tech_, "mousedown", this.handleTechClick_);
        }, Player.prototype.handleTechReady_ = function() {
            if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume),
            this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
                delete this.tag.poster;
            } catch (e) {
                log$1("deleting tag.poster throws in some browsers", e);
            }
        }, Player.prototype.handleTechLoadStart_ = function() {
            this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null),
            this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"),
            this.trigger("firstplay"));
        }, Player.prototype.hasStarted = function(request) {
            if (void 0 === request) return this.hasStarted_;
            request !== this.hasStarted_ && (this.hasStarted_ = request, this.hasStarted_ ? (this.addClass("vjs-has-started"),
            this.trigger("firstplay")) : this.removeClass("vjs-has-started"));
        }, Player.prototype.handleTechPlay_ = function() {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"),
            this.hasStarted(!0), this.trigger("play");
        }, Player.prototype.handleTechWaiting_ = function() {
            var _this4 = this;
            this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function() {
                return _this4.removeClass("vjs-waiting");
            });
        }, Player.prototype.handleTechCanPlay_ = function() {
            this.removeClass("vjs-waiting"), this.trigger("canplay");
        }, Player.prototype.handleTechCanPlayThrough_ = function() {
            this.removeClass("vjs-waiting"), this.trigger("canplaythrough");
        }, Player.prototype.handleTechPlaying_ = function() {
            this.removeClass("vjs-waiting"), this.trigger("playing");
        }, Player.prototype.handleTechSeeking_ = function() {
            this.addClass("vjs-seeking"), this.trigger("seeking");
        }, Player.prototype.handleTechSeeked_ = function() {
            this.removeClass("vjs-seeking"), this.trigger("seeked");
        }, Player.prototype.handleTechFirstPlay_ = function() {
            this.options_.starttime && (log$1.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),
            this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay");
        }, Player.prototype.handleTechPause_ = function() {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause");
        }, Player.prototype.handleTechEnded_ = function() {
            this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(),
            this.trigger("ended");
        }, Player.prototype.handleTechDurationChange_ = function() {
            this.duration(this.techGet_("duration"));
        }, Player.prototype.handleTechClick_ = function(event) {}, Player.prototype.handleTechTap_ = function() {
            this.userActive(!this.userActive());
        }, Player.prototype.handleTechTouchStart_ = function() {
            this.userWasActive = this.userActive();
        }, Player.prototype.handleTechTouchMove_ = function() {
            this.userWasActive && this.reportUserActivity();
        }, Player.prototype.handleTechTouchEnd_ = function(event) {
            event.preventDefault();
        }, Player.prototype.handleFullscreenChange_ = function() {
            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen");
        }, Player.prototype.handleStageClick_ = function() {
            this.reportUserActivity();
        }, Player.prototype.handleTechFullscreenChange_ = function(event, data) {
            data && this.isFullscreen(data.isFullscreen), this.trigger("fullscreenchange");
        }, Player.prototype.handleTechError_ = function() {
            var error = this.tech_.error();
            this.error(error);
        }, Player.prototype.handleTechTextData_ = function() {
            var data = null;
            1 < arguments.length && (data = arguments[1]), this.trigger("textdata", data);
        }, Player.prototype.getCache = function() {
            return this.cache_;
        }, Player.prototype.techCall_ = function(method, arg) {
            this.ready(function() {
                if (method in allowedSetters) return function(middleware, tech, method, arg) {
                    return tech[method](middleware.reduce(middlewareIterator(method), arg));
                }(this.middleware_, this.tech_, method, arg);
                if (method in allowedMediators) return mediate(this.middleware_, this.tech_, method, arg);
                try {
                    this.tech_ && this.tech_[method](arg);
                } catch (e) {
                    throw log$1(e), e;
                }
            }, !0);
        }, Player.prototype.techGet_ = function(method) {
            if (this.tech_ && this.tech_.isReady_) {
                if (method in allowedGetters) return function(middleware, tech, method) {
                    return middleware.reduceRight(middlewareIterator(method), tech[method]());
                }(this.middleware_, this.tech_, method);
                if (method in allowedMediators) return mediate(this.middleware_, this.tech_, method);
                try {
                    return this.tech_[method]();
                } catch (e) {
                    if (void 0 === this.tech_[method]) throw log$1("Video.js: " + method + " method not defined for " + this.techName_ + " playback technology.", e),
                    e;
                    if ("TypeError" === e.name) throw log$1("Video.js: " + method + " unavailable on " + this.techName_ + " playback technology element.", e),
                    this.tech_.isReady_ = !1, e;
                    throw log$1(e), e;
                }
            }
        }, Player.prototype.play = function() {
            var _this5 = this;
            if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
                if (!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_("play");
                this.playOnLoadstart_ = function() {
                    _this5.playOnLoadstart_ = null, silencePromise(_this5.play());
                }, this.one("loadstart", this.playOnLoadstart_);
            } else {
                if (this.playWaitingForReady_) return;
                this.playWaitingForReady_ = !0, this.ready(function() {
                    _this5.playWaitingForReady_ = !1, silencePromise(_this5.play());
                });
            }
        }, Player.prototype.pause = function() {
            this.techCall_("pause");
        }, Player.prototype.paused = function() {
            return !1 !== this.techGet_("paused");
        }, Player.prototype.played = function() {
            return this.techGet_("played") || createTimeRanges(0, 0);
        }, Player.prototype.scrubbing = function(isScrubbing) {
            if (void 0 === isScrubbing) return this.scrubbing_;
            this.scrubbing_ = !!isScrubbing, isScrubbing ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing");
        }, Player.prototype.currentTime = function(seconds) {
            return void 0 !== seconds ? (seconds < 0 && (seconds = 0), void this.techCall_("setCurrentTime", seconds)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0,
            this.cache_.currentTime);
        }, Player.prototype.duration = function(seconds) {
            if (void 0 === seconds) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
            (seconds = parseFloat(seconds)) < 0 && (seconds = 1 / 0), seconds !== this.cache_.duration && ((this.cache_.duration = seconds) === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"),
            this.trigger("durationchange"));
        }, Player.prototype.remainingTime = function() {
            return this.duration() - this.currentTime();
        }, Player.prototype.remainingTimeDisplay = function() {
            return Math.floor(this.duration()) - Math.floor(this.currentTime());
        }, Player.prototype.buffered = function() {
            var buffered = this.techGet_("buffered");
            return buffered && buffered.length || (buffered = createTimeRanges(0, 0)), buffered;
        }, Player.prototype.bufferedPercent = function() {
            return bufferedPercent(this.buffered(), this.duration());
        }, Player.prototype.bufferedEnd = function() {
            var buffered = this.buffered(), duration = this.duration(), end = buffered.end(buffered.length - 1);
            return duration < end && (end = duration), end;
        }, Player.prototype.volume = function(percentAsDecimal) {
            var vol = void 0;
            return void 0 !== percentAsDecimal ? (vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))),
            this.cache_.volume = vol, this.techCall_("setVolume", vol), void (0 < vol && this.lastVolume_(vol))) : (vol = parseFloat(this.techGet_("volume")),
            isNaN(vol) ? 1 : vol);
        }, Player.prototype.muted = function(_muted) {
            if (void 0 === _muted) return this.techGet_("muted") || !1;
            this.techCall_("setMuted", _muted);
        }, Player.prototype.defaultMuted = function(_defaultMuted) {
            return void 0 !== _defaultMuted ? this.techCall_("setDefaultMuted", _defaultMuted) : this.techGet_("defaultMuted") || !1;
        }, Player.prototype.lastVolume_ = function(percentAsDecimal) {
            if (void 0 === percentAsDecimal || 0 === percentAsDecimal) return this.cache_.lastVolume;
            this.cache_.lastVolume = percentAsDecimal;
        }, Player.prototype.supportsFullScreen = function() {
            return this.techGet_("supportsFullScreen") || !1;
        }, Player.prototype.isFullscreen = function(isFS) {
            if (void 0 === isFS) return !!this.isFullscreen_;
            this.isFullscreen_ = !!isFS;
        }, Player.prototype.requestFullscreen = function() {
            var fsApi = FullscreenApi;
            this.isFullscreen(!0), fsApi.requestFullscreen ? (on(document_1, fsApi.fullscreenchange, bind(this, function documentFullscreenChange(e) {
                this.isFullscreen(document_1[fsApi.fullscreenElement]), !1 === this.isFullscreen() && off(document_1, fsApi.fullscreenchange, documentFullscreenChange),
                this.trigger("fullscreenchange");
            })), this.el_[fsApi.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(),
            this.trigger("fullscreenchange"));
        }, Player.prototype.exitFullscreen = function() {
            var fsApi = FullscreenApi;
            this.isFullscreen(!1), fsApi.requestFullscreen ? document_1[fsApi.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(),
            this.trigger("fullscreenchange"));
        }, Player.prototype.enterFullWindow = function() {
            this.isFullWindow = !0, this.docOrigOverflow = document_1.documentElement.style.overflow,
            on(document_1, "keydown", bind(this, this.fullWindowOnEscKey)), document_1.documentElement.style.overflow = "hidden",
            addClass(document_1.body, "vjs-full-window"), this.trigger("enterFullWindow");
        }, Player.prototype.fullWindowOnEscKey = function(event) {
            27 === event.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow());
        }, Player.prototype.exitFullWindow = function() {
            this.isFullWindow = !1, off(document_1, "keydown", this.fullWindowOnEscKey), document_1.documentElement.style.overflow = this.docOrigOverflow,
            removeClass(document_1.body, "vjs-full-window"), this.trigger("exitFullWindow");
        }, Player.prototype.canPlayType = function(type) {
            for (var can = void 0, i = 0, j = this.options_.techOrder; i < j.length; i++) {
                var techName = j[i], tech = Tech.getTech(techName);
                if (tech || (tech = Component.getComponent(techName)), tech) {
                    if (tech.isSupported() && (can = tech.canPlayType(type))) return can;
                } else log$1.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
            }
            return "";
        }, Player.prototype.selectSource = function(sources) {
            var fn, _this6 = this, techs = this.options_.techOrder.map(function(techName) {
                return [ techName, Tech.getTech(techName) ];
            }).filter(function(_ref) {
                var techName = _ref[0], tech = _ref[1];
                return tech ? tech.isSupported() : (log$1.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.'),
                !1);
            }), findFirstPassingTechSourcePair = function(outerArray, innerArray, tester) {
                var found = void 0;
                return outerArray.some(function(outerChoice) {
                    return innerArray.some(function(innerChoice) {
                        if (found = tester(outerChoice, innerChoice)) return !0;
                    });
                }), found;
            }, finder = function(_ref2, source) {
                var techName = _ref2[0];
                if (_ref2[1].canPlaySource(source, _this6.options_[techName.toLowerCase()])) return {
                    source: source,
                    tech: techName
                };
            };
            return (this.options_.sourceOrder ? findFirstPassingTechSourcePair(sources, techs, (fn = finder,
            function(a, b) {
                return fn(b, a);
            })) : findFirstPassingTechSourcePair(techs, sources, finder)) || !1;
        }, Player.prototype.src = function(source) {
            var _this7 = this;
            if (void 0 === source) return this.cache_.src || "";
            var sources = function filterSource(src) {
                if (Array.isArray(src)) {
                    var newsrc = [];
                    src.forEach(function(srcobj) {
                        srcobj = filterSource(srcobj), Array.isArray(srcobj) ? newsrc = newsrc.concat(srcobj) : isObject(srcobj) && newsrc.push(srcobj);
                    }), src = newsrc;
                } else src = "string" == typeof src && src.trim() ? [ {
                    src: src
                } ] : isObject(src) && "string" == typeof src.src && src.src && src.src.trim() ? [ src ] : [];
                return src;
            }(source);
            sources.length ? (this.cache_.sources = sources, this.changingSrc_ = !0, this.cache_.source = sources[0],
            setSource(this, sources[0], function(middlewareSource, mws) {
                var middleware, tech;
                if (_this7.middleware_ = mws, _this7.src_(middlewareSource)) return 1 < sources.length ? _this7.src(sources.slice(1)) : (_this7.setTimeout(function() {
                    this.error({
                        code: 4,
                        message: this.localize(this.options_.notSupportedMessage)
                    });
                }, 0), void _this7.triggerReady());
                _this7.changingSrc_ = !1, _this7.cache_.src = middlewareSource.src, middleware = mws,
                tech = _this7.tech_, middleware.forEach(function(mw) {
                    return mw.setTech && mw.setTech(tech);
                });
            })) : this.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.localize(this.options_.notSupportedMessage)
                });
            }, 0);
        }, Player.prototype.src_ = function(source) {
            var str1, str2, sourceTech = this.selectSource([ source ]);
            return !sourceTech || (str1 = sourceTech.tech, str2 = this.techName_, toTitleCase(str1) !== toTitleCase(str2) ? (this.changingSrc_ = !0,
            this.loadTech_(sourceTech.tech, sourceTech.source)) : this.ready(function() {
                this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", source) : this.techCall_("src", source.src),
                "auto" === this.options_.preload && this.load();
            }, !0), !1);
        }, Player.prototype.load = function() {
            this.techCall_("load");
        }, Player.prototype.reset = function() {
            this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset");
        }, Player.prototype.currentSources = function() {
            var source = this.currentSource(), sources = [];
            return 0 !== Object.keys(source).length && sources.push(source), this.cache_.sources || sources;
        }, Player.prototype.currentSource = function() {
            return this.cache_.source || {};
        }, Player.prototype.currentSrc = function() {
            return this.currentSource() && this.currentSource().src || "";
        }, Player.prototype.currentType = function() {
            return this.currentSource() && this.currentSource().type || "";
        }, Player.prototype.preload = function(value) {
            return void 0 !== value ? (this.techCall_("setPreload", value), void (this.options_.preload = value)) : this.techGet_("preload");
        }, Player.prototype.autoplay = function(value) {
            return void 0 !== value ? (this.techCall_("setAutoplay", value), this.options_.autoplay = value,
            void this.ready(this.forceAutoplayInChrome_)) : this.techGet_("autoplay", value);
        }, Player.prototype.forceAutoplayInChrome_ = function() {
            this.paused() && (this.autoplay() || this.options_.autoplay) && IS_CHROME && !IS_ANDROID && this.play();
        }, Player.prototype.playsinline = function(value) {
            return void 0 !== value ? (this.techCall_("setPlaysinline", value), this.options_.playsinline = value,
            this) : this.techGet_("playsinline");
        }, Player.prototype.loop = function(value) {
            return void 0 !== value ? (this.techCall_("setLoop", value), void (this.options_.loop = value)) : this.techGet_("loop");
        }, Player.prototype.poster = function(src) {
            if (void 0 === src) return this.poster_;
            src || (src = ""), this.poster_ = src, this.techCall_("setPoster", src), this.trigger("posterchange");
        }, Player.prototype.handleTechPosterChange_ = function() {
            !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "",
            this.trigger("posterchange"));
        }, Player.prototype.controls = function(bool) {
            if (void 0 === bool) return !!this.controls_;
            bool = !!bool, this.controls_ !== bool && (this.controls_ = bool, this.usingNativeControls() && this.techCall_("setControls", bool),
            this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"),
            this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"),
            this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()));
        }, Player.prototype.usingNativeControls = function(bool) {
            if (void 0 === bool) return !!this.usingNativeControls_;
            bool = !!bool, this.usingNativeControls_ !== bool && (this.usingNativeControls_ = bool,
            this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"),
            this.trigger("usingcustomcontrols")));
        }, Player.prototype.error = function(err) {
            return void 0 === err ? this.error_ || null : null === err ? (this.error_ = err,
            this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new MediaError(err),
            this.addClass("vjs-error"), log$1.error("(CODE:" + this.error_.code + " " + MediaError.errorTypes[this.error_.code] + ")", this.error_.message, this.error_),
            void this.trigger("error"));
        }, Player.prototype.reportUserActivity = function(event) {
            this.userActivity_ = !0;
        }, Player.prototype.userActive = function(bool) {
            if (void 0 === bool) return this.userActive_;
            if ((bool = !!bool) !== this.userActive_) {
                if (this.userActive_ = bool, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"),
                this.addClass("vjs-user-active"), void this.trigger("useractive");
                this.tech_ && this.tech_.one("mousemove", function(e) {
                    e.stopPropagation(), e.preventDefault();
                }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"),
                this.trigger("userinactive");
            }
        }, Player.prototype.listenForUserActivity_ = function() {
            var mouseInProgress = void 0, lastMoveX = void 0, lastMoveY = void 0, handleActivity = bind(this, this.reportUserActivity);
            this.on("mousedown", function() {
                handleActivity(), this.clearInterval(mouseInProgress), mouseInProgress = this.setInterval(handleActivity, 250);
            }), this.on("mousemove", function(e) {
                e.screenX === lastMoveX && e.screenY === lastMoveY || (lastMoveX = e.screenX, lastMoveY = e.screenY,
                handleActivity());
            }), this.on("mouseup", function(event) {
                handleActivity(), this.clearInterval(mouseInProgress);
            }), this.on("keydown", handleActivity), this.on("keyup", handleActivity);
            var inactivityTimeout = void 0;
            this.setInterval(function() {
                if (this.userActivity_) {
                    this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(inactivityTimeout);
                    var timeout = this.options_.inactivityTimeout;
                    timeout <= 0 || (inactivityTimeout = this.setTimeout(function() {
                        this.userActivity_ || this.userActive(!1);
                    }, timeout));
                }
            }, 250);
        }, Player.prototype.playbackRate = function(rate) {
            if (void 0 === rate) return this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1;
            this.techCall_("setPlaybackRate", rate);
        }, Player.prototype.defaultPlaybackRate = function(rate) {
            return void 0 !== rate ? this.techCall_("setDefaultPlaybackRate", rate) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1;
        }, Player.prototype.isAudio = function(bool) {
            if (void 0 === bool) return !!this.isAudio_;
            this.isAudio_ = !!bool;
        }, Player.prototype.addTextTrack = function(kind, label, language) {
            if (this.tech_) return this.tech_.addTextTrack(kind, label, language);
        }, Player.prototype.addRemoteTextTrack = function(options, manualCleanup) {
            if (this.tech_) return this.tech_.addRemoteTextTrack(options, manualCleanup);
        }, Player.prototype.removeRemoteTextTrack = function() {
            var _ref3$track = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).track, track = void 0 === _ref3$track ? arguments[0] : _ref3$track;
            if (this.tech_) return this.tech_.removeRemoteTextTrack(track);
        }, Player.prototype.getVideoPlaybackQuality = function() {
            return this.techGet_("getVideoPlaybackQuality");
        }, Player.prototype.videoWidth = function() {
            return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
        }, Player.prototype.videoHeight = function() {
            return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
        }, Player.prototype.language = function(code) {
            if (void 0 === code) return this.language_;
            this.language_ = String(code).toLowerCase();
        }, Player.prototype.languages = function() {
            return mergeOptions(Player.prototype.options_.languages, this.languages_);
        }, Player.prototype.toJSON = function() {
            var options = mergeOptions(this.options_), tracks = options.tracks;
            options.tracks = [];
            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                (track = mergeOptions(track)).player = void 0, options.tracks[i] = track;
            }
            return options;
        }, Player.prototype.createModal = function(content, options) {
            var _this8 = this;
            (options = options || {}).content = content || "";
            var modal = new ModalDialog(this, options);
            return this.addChild(modal), modal.on("dispose", function() {
                _this8.removeChild(modal);
            }), modal.open(), modal;
        }, Player.getTagSettings = function(tag) {
            var baseOptions = {
                sources: [],
                tracks: []
            }, tagOptions = getAttributes(tag), dataSetup = tagOptions["data-setup"];
            if (hasClass(tag, "vjs-fluid") && (tagOptions.fluid = !0), null !== dataSetup) {
                var _safeParseTuple = tuple(dataSetup || "{}"), err = _safeParseTuple[0], data = _safeParseTuple[1];
                err && log$1.error(err), assign(tagOptions, data);
            }
            if (assign(baseOptions, tagOptions), tag.hasChildNodes()) for (var children = tag.childNodes, i = 0, j = children.length; i < j; i++) {
                var child = children[i], childName = child.nodeName.toLowerCase();
                "source" === childName ? baseOptions.sources.push(getAttributes(child)) : "track" === childName && baseOptions.tracks.push(getAttributes(child));
            }
            return baseOptions;
        }, Player.prototype.flexNotSupported_ = function() {
            var elem = document_1.createElement("i");
            return !("flexBasis" in elem.style || "webkitFlexBasis" in elem.style || "mozFlexBasis" in elem.style || "msFlexBasis" in elem.style || "msFlexOrder" in elem.style);
        }, Player;
    }(Component);
    ALL.names.forEach(function(name$$1) {
        var props = ALL[name$$1];
        Player.prototype[props.getterName] = function() {
            return this.tech_ ? this.tech_[props.getterName]() : (this[props.privateName] = this[props.privateName] || new props.ListClass(),
            this[props.privateName]);
        };
    }), Player.players = {};
    var navigator$1 = window_1.navigator;
    Player.prototype.options_ = {
        techOrder: Tech.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        children: [ "mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings" ],
        language: navigator$1 && (navigator$1.languages && navigator$1.languages[0] || navigator$1.userLanguage || navigator$1.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media."
    }, IS_IE8 || Player.prototype.options_.children.push("resizeManager"), [ "ended", "seeking", "seekable", "networkState", "readyState" ].forEach(function(fn) {
        Player.prototype[fn] = function() {
            return this.techGet_(fn);
        };
    }), TECH_EVENTS_RETRIGGER.forEach(function(event) {
        Player.prototype["handleTech" + toTitleCase(event) + "_"] = function() {
            return this.trigger(event);
        };
    }), Component.registerComponent("Player", Player);
    var pluginStorage = {}, pluginExists = function(name) {
        return pluginStorage.hasOwnProperty(name);
    }, getPlugin = function(name) {
        return pluginExists(name) ? pluginStorage[name] : void 0;
    }, markPluginAsActive = function(player, name) {
        player.activePlugins_ = player.activePlugins_ || {}, player.activePlugins_[name] = !0;
    }, triggerSetupEvent = function(player, hash, before) {
        var eventName = (before ? "before" : "") + "pluginsetup";
        player.trigger(eventName, hash), player.trigger(eventName + ":" + hash.name, hash);
    }, createPluginFactory = function(name, PluginSubClass) {
        return PluginSubClass.prototype.name = name, function() {
            triggerSetupEvent(this, {
                name: name,
                plugin: PluginSubClass,
                instance: null
            }, !0);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            var instance = new (Function.prototype.bind.apply(PluginSubClass, [ null ].concat([ this ].concat(args))))();
            return this[name] = function() {
                return instance;
            }, triggerSetupEvent(this, instance.getEventHash()), instance;
        };
    }, Plugin = function() {
        function Plugin(player) {
            if (classCallCheck(this, Plugin), this.constructor === Plugin) throw new Error("Plugin must be sub-classed; not directly instantiated.");
            this.player = player, evented(this), delete this.trigger, stateful(this, this.constructor.defaultState),
            markPluginAsActive(player, this.name), this.dispose = bind(this, this.dispose),
            player.on("dispose", this.dispose);
        }
        return Plugin.prototype.version = function() {
            return this.constructor.VERSION;
        }, Plugin.prototype.getEventHash = function() {
            var hash = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return hash.name = this.name, hash.plugin = this.constructor, hash.instance = this,
            hash;
        }, Plugin.prototype.trigger = function(event) {
            var hash = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return trigger(this.eventBusEl_, event, this.getEventHash(hash));
        }, Plugin.prototype.handleStateChanged = function(e) {}, Plugin.prototype.dispose = function() {
            var name = this.name, player = this.player;
            this.trigger("dispose"), this.off(), player.off("dispose", this.dispose), player.activePlugins_[name] = !1,
            this.player = this.state = null, player[name] = createPluginFactory(name, pluginStorage[name]);
        }, Plugin.isBasic = function(plugin) {
            var p = "string" == typeof plugin ? getPlugin(plugin) : plugin;
            return "function" == typeof p && !Plugin.prototype.isPrototypeOf(p.prototype);
        }, Plugin.registerPlugin = function(name, plugin) {
            if ("string" != typeof name) throw new Error('Illegal plugin name, "' + name + '", must be a string, was ' + (void 0 === name ? "undefined" : _typeof(name)) + ".");
            if (pluginExists(name)) log$1.warn('A plugin named "' + name + '" already exists. You may want to avoid re-registering plugins!'); else if (Player.prototype.hasOwnProperty(name)) throw new Error('Illegal plugin name, "' + name + '", cannot share a name with an existing player method!');
            if ("function" != typeof plugin) throw new Error('Illegal plugin for "' + name + '", must be a function, was ' + (void 0 === plugin ? "undefined" : _typeof(plugin)) + ".");
            return pluginStorage[name] = plugin, "plugin" !== name && (Plugin.isBasic(plugin) ? Player.prototype[name] = function(name, plugin) {
                var basicPluginWrapper = function() {
                    triggerSetupEvent(this, {
                        name: name,
                        plugin: plugin,
                        instance: null
                    }, !0);
                    var instance = plugin.apply(this, arguments);
                    return markPluginAsActive(this, name), triggerSetupEvent(this, {
                        name: name,
                        plugin: plugin,
                        instance: instance
                    }), instance;
                };
                return Object.keys(plugin).forEach(function(prop) {
                    basicPluginWrapper[prop] = plugin[prop];
                }), basicPluginWrapper;
            }(name, plugin) : Player.prototype[name] = createPluginFactory(name, plugin)), plugin;
        }, Plugin.deregisterPlugin = function(name) {
            if ("plugin" === name) throw new Error("Cannot de-register base plugin.");
            pluginExists(name) && (delete pluginStorage[name], delete Player.prototype[name]);
        }, Plugin.getPlugins = function() {
            var names = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Object.keys(pluginStorage), result = void 0;
            return names.forEach(function(name) {
                var plugin = getPlugin(name);
                plugin && ((result = result || {})[name] = plugin);
            }), result;
        }, Plugin.getPluginVersion = function(name) {
            var plugin = getPlugin(name);
            return plugin && plugin.VERSION || "";
        }, Plugin;
    }();
    Plugin.getPlugin = getPlugin, Plugin.BASE_PLUGIN_NAME = "plugin", Plugin.registerPlugin("plugin", Plugin),
    Player.prototype.usingPlugin = function(name) {
        return !!this.activePlugins_ && !0 === this.activePlugins_[name];
    }, Player.prototype.hasPlugin = function(name) {
        return !!pluginExists(name);
    };
    "undefined" == typeof HTMLVideoElement && isReal() && (document_1.createElement("video"),
    document_1.createElement("audio"), document_1.createElement("track"), document_1.createElement("video-js"));
    var normalizeId = function(id) {
        return 0 === id.indexOf("#") ? id.slice(1) : id;
    };
    function videojs(id, options, ready) {
        var player = videojs.getPlayer(id);
        if (player) return options && log$1.warn('Player "' + id + '" is already initialised. Options will not be applied.'),
        ready && player.ready(ready), player;
        var el = "string" == typeof id ? $("#" + normalizeId(id)) : id;
        if (!isEl(el)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        document_1.body.contains(el) || log$1.warn("The element supplied is not included in the DOM"),
        options = options || {}, videojs.hooks("beforesetup").forEach(function(hookFunction) {
            var opts = hookFunction(el, mergeOptions(options));
            isObject(opts) && !Array.isArray(opts) ? options = mergeOptions(options, opts) : log$1.error("please return an object in beforesetup hooks");
        });
        var PlayerComponent = Component.getComponent("Player");
        return player = new PlayerComponent(el, options, ready), videojs.hooks("setup").forEach(function(hookFunction) {
            return hookFunction(player);
        }), player;
    }
    if (videojs.hooks_ = {}, videojs.hooks = function(type, fn) {
        return videojs.hooks_[type] = videojs.hooks_[type] || [], fn && (videojs.hooks_[type] = videojs.hooks_[type].concat(fn)),
        videojs.hooks_[type];
    }, videojs.hook = function(type, fn) {
        videojs.hooks(type, fn);
    }, videojs.hookOnce = function(type, fn) {
        videojs.hooks(type, [].concat(fn).map(function(original) {
            return function wrapper() {
                return videojs.removeHook(type, wrapper), original.apply(void 0, arguments);
            };
        }));
    }, videojs.removeHook = function(type, fn) {
        var index = videojs.hooks(type).indexOf(fn);
        return !(index <= -1) && (videojs.hooks_[type] = videojs.hooks_[type].slice(), videojs.hooks_[type].splice(index, 1),
        !0);
    }, !0 !== window_1.VIDEOJS_NO_DYNAMIC_STYLE && isReal()) {
        var style = $(".vjs-styles-defaults");
        if (!style) {
            style = createStyleElement("vjs-styles-defaults");
            var head = $("head");
            head && head.insertBefore(style, head.firstChild), setTextContent(style, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ");
        }
    }
    return autoSetupTimeout(1, videojs), videojs.VERSION = version, videojs.options = Player.prototype.options_,
    videojs.getPlayers = function() {
        return Player.players;
    }, videojs.getPlayer = function(id) {
        var players = Player.players, tag = void 0;
        if ("string" == typeof id) {
            var nId = normalizeId(id), player = players[nId];
            if (player) return player;
            tag = $("#" + nId);
        } else tag = id;
        if (isEl(tag)) {
            var _tag = tag, _player = _tag.player, playerId = _tag.playerId;
            if (_player || players[playerId]) return _player || players[playerId];
        }
    }, videojs.getAllPlayers = function() {
        return Object.keys(Player.players).map(function(k) {
            return Player.players[k];
        }).filter(Boolean);
    }, videojs.players = Player.players, videojs.getComponent = Component.getComponent,
    videojs.registerComponent = function(name$$1, comp) {
        Tech.isTech(comp) && log$1.warn("The " + name$$1 + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),
        Component.registerComponent.call(Component, name$$1, comp);
    }, videojs.getTech = Tech.getTech, videojs.registerTech = Tech.registerTech, videojs.use = function(type, middleware) {
        middlewares[type] = middlewares[type] || [], middlewares[type].push(middleware);
    }, !IS_IE8 && Object.defineProperty ? (Object.defineProperty(videojs, "middleware", {
        value: {},
        writeable: !1,
        enumerable: !0
    }), Object.defineProperty(videojs.middleware, "TERMINATOR", {
        value: TERMINATOR,
        writeable: !1,
        enumerable: !0
    })) : videojs.middleware = {
        TERMINATOR: TERMINATOR
    }, videojs.browser = browser, videojs.TOUCH_ENABLED = TOUCH_ENABLED, videojs.extend = function(superClass) {
        var subClassMethods = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, subClass = function() {
            superClass.apply(this, arguments);
        }, methods = {};
        for (var name in "object" === (void 0 === subClassMethods ? "undefined" : _typeof(subClassMethods)) ? (subClassMethods.constructor !== Object.prototype.constructor && (subClass = subClassMethods.constructor),
        methods = subClassMethods) : "function" == typeof subClassMethods && (subClass = subClassMethods),
        function(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (subClass.super_ = superClass);
        }(subClass, superClass), methods) methods.hasOwnProperty(name) && (subClass.prototype[name] = methods[name]);
        return subClass;
    }, videojs.mergeOptions = mergeOptions, videojs.bind = bind, videojs.registerPlugin = Plugin.registerPlugin,
    videojs.plugin = function(name$$1, plugin) {
        return log$1.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),
        Plugin.registerPlugin(name$$1, plugin);
    }, videojs.getPlugins = Plugin.getPlugins, videojs.getPlugin = Plugin.getPlugin,
    videojs.getPluginVersion = Plugin.getPluginVersion, videojs.addLanguage = function(code, data) {
        var _mergeOptions;
        return code = ("" + code).toLowerCase(), videojs.options.languages = mergeOptions(videojs.options.languages, ((_mergeOptions = {})[code] = data,
        _mergeOptions)), videojs.options.languages[code];
    }, videojs.log = log$1, videojs.createTimeRange = videojs.createTimeRanges = createTimeRanges,
    videojs.formatTime = formatTime, videojs.parseUrl = parseUrl, videojs.isCrossOrigin = isCrossOrigin,
    videojs.EventTarget = EventTarget, videojs.on = on, videojs.one = one, videojs.off = off,
    videojs.trigger = trigger, videojs.xhr = xhr, videojs.TextTrack = TextTrack, videojs.AudioTrack = AudioTrack,
    videojs.VideoTrack = VideoTrack, [ "isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent" ].forEach(function(k) {
        videojs[k] = function() {
            return log$1.warn("videojs." + k + "() is deprecated; use videojs.dom." + k + "() instead"),
            Dom[k].apply(null, arguments);
        };
    }), videojs.computedStyle = computedStyle, videojs.dom = Dom, videojs.url = Url,
    videojs;
}), function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory(require("video.js")) : "function" == typeof define && define.amd ? define([ "video.js" ], factory) : global.videojsResponsiveControls = factory(global.videojs);
}(this, function(videojs) {
    "use strict";
    function createCommonjsModule(fn, module) {
        return fn(module = {
            exports: {}
        }, module.exports), module.exports;
    }
    videojs = "default" in videojs ? videojs.default : videojs;
    var collectionUtils = createCommonjsModule(function(module) {
        (module.exports = {}).forEach = function(collection, callback) {
            for (var i = 0; i < collection.length; i++) {
                var result = callback(collection[i]);
                if (result) return result;
            }
        };
    }), browserDetector = createCommonjsModule(function(module) {
        var detector = module.exports = {};
        detector.isIE = function(version) {
            return (-1 !== (agent = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 !== agent.indexOf("trident") || -1 !== agent.indexOf(" edge/")) && (!version || version === function() {
                for (var v = 3, div = document.createElement("div"), all = div.getElementsByTagName("i"); div.innerHTML = "\x3c!--[if gt IE " + ++v + "]><i></i><![endif]--\x3e",
                all[0]; ) ;
                return 4 < v ? v : void 0;
            }());
            var agent;
        }, detector.isLegacyOpera = function() {
            return !!window.opera;
        };
    }), utils_1 = createCommonjsModule(function(module) {
        (module.exports = {}).getOption = function(options, name, defaultValue) {
            var value = options[name];
            if (null == value && void 0 !== defaultValue) return defaultValue;
            return value;
        };
    }), batchProcessor = function(options) {
        var reporter = (options = options || {}).reporter, asyncProcess = utils_1.getOption(options, "async", !0), autoProcess = utils_1.getOption(options, "auto", !0);
        autoProcess && !asyncProcess && (reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),
        asyncProcess = !0);
        var asyncFrameHandler, batch = Batch(), isProcessing = !1;
        function processBatch() {
            for (isProcessing = !0; batch.size(); ) {
                var processingBatch = batch;
                batch = Batch(), processingBatch.process();
            }
            isProcessing = !1;
        }
        function processBatchAsync() {
            var fn;
            fn = processBatch, asyncFrameHandler = setTimeout(fn, 0);
        }
        return {
            add: function(level, fn) {
                !isProcessing && autoProcess && asyncProcess && 0 === batch.size() && processBatchAsync(),
                batch.add(level, fn);
            },
            force: function(localAsyncProcess) {
                isProcessing || (void 0 === localAsyncProcess && (localAsyncProcess = asyncProcess),
                asyncFrameHandler && (clearTimeout(asyncFrameHandler), asyncFrameHandler = null),
                localAsyncProcess ? processBatchAsync() : processBatch());
            }
        };
    };
    function Batch() {
        var batch = {}, size = 0, topLevel = 0, bottomLevel = 0;
        return {
            add: function(level, fn) {
                fn || (fn = level, level = 0), topLevel < level ? topLevel = level : level < bottomLevel && (bottomLevel = level),
                batch[level] || (batch[level] = []), batch[level].push(fn), size++;
            },
            process: function() {
                for (var level = bottomLevel; level <= topLevel; level++) for (var fns = batch[level], i = 0; i < fns.length; i++) (0,
                fns[i])();
            },
            size: function() {
                return size;
            }
        };
    }
    var prop = "_erd";
    function getState(element) {
        return element[prop];
    }
    var stateHandler = {
        initState: function(element) {
            return element[prop] = {}, getState(element);
        },
        getState: getState,
        cleanState: function(element) {
            delete element[prop];
        }
    }, forEach$1 = collectionUtils.forEach, scroll = function(options) {
        var reporter = (options = options || {}).reporter, batchProcessor = options.batchProcessor, getState = options.stateHandler.getState, idHandler = (options.stateHandler.hasState,
        options.idHandler);
        if (!batchProcessor) throw new Error("Missing required dependency: batchProcessor");
        if (!reporter) throw new Error("Missing required dependency: reporter.");
        var scrollbarSizes = function() {
            var child = document.createElement("div");
            child.style.cssText = "position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";
            var container = document.createElement("div");
            container.style.cssText = "position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",
            container.appendChild(child), document.body.insertBefore(container, document.body.firstChild);
            var widthSize = 500 - container.clientWidth, heightSize = 500 - container.clientHeight;
            return document.body.removeChild(container), {
                width: widthSize,
                height: heightSize
            };
        }(), detectionContainerClass = "erd_scroll_detection_container";
        function addEvent(el, name, cb) {
            if (el.addEventListener) el.addEventListener(name, cb); else {
                if (!el.attachEvent) return reporter.error("[scroll] Don't know how to add event listeners.");
                el.attachEvent("on" + name, cb);
            }
        }
        function removeEvent(el, name, cb) {
            if (el.removeEventListener) el.removeEventListener(name, cb); else {
                if (!el.detachEvent) return reporter.error("[scroll] Don't know how to remove event listeners.");
                el.detachEvent("on" + name, cb);
            }
        }
        function getExpandElement(element) {
            return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
        }
        function getShrinkElement(element) {
            return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
        }
        return function(styleId, containerClass) {
            if (!document.getElementById(styleId)) {
                var containerAnimationClass = containerClass + "_animation", containerAnimationActiveClass = containerClass + "_animation_active", style = "/* Created by the element-resize-detector library. */\n";
                style += "." + containerClass + " > div::-webkit-scrollbar { display: none; }\n\n",
                style += "." + containerAnimationActiveClass + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + containerAnimationClass + "; animation-name: " + containerAnimationClass + "; }\n",
                style += "@-webkit-keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",
                function(style, method) {
                    method = method || function(element) {
                        document.head.appendChild(element);
                    };
                    var styleElement = document.createElement("style");
                    styleElement.innerHTML = style, styleElement.id = styleId, method(styleElement);
                }(style += "@keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }");
            }
        }("erd_scroll_detection_scrollbar_style", detectionContainerClass), {
            makeDetectable: function(options, element, callback) {
                function debug() {
                    if (options.debug) {
                        var args = Array.prototype.slice.call(arguments);
                        if (args.unshift(idHandler.get(element), "Scroll: "), reporter.log.apply) reporter.log.apply(null, args); else for (var i = 0; i < args.length; i++) reporter.log(args[i]);
                    }
                }
                function isUnrendered(element) {
                    var container = getState(element).container.childNodes[0], style = getComputedStyle(container);
                    return !style.width || -1 === style.width.indexOf("px");
                }
                function getStyle() {
                    var elementStyle = getComputedStyle(element), style = {};
                    return style.position = elementStyle.position, style.width = element.offsetWidth,
                    style.height = element.offsetHeight, style.top = elementStyle.top, style.right = elementStyle.right,
                    style.bottom = elementStyle.bottom, style.left = elementStyle.left, style.widthCSS = elementStyle.width,
                    style.heightCSS = elementStyle.height, style;
                }
                function storeStyle() {
                    if (debug("storeStyle invoked."), getState(element)) {
                        var style = getStyle();
                        getState(element).style = style;
                    } else debug("Aborting because element has been uninstalled");
                }
                function storeCurrentSize(element, width, height) {
                    getState(element).lastWidth = width, getState(element).lastHeight = height;
                }
                function getWidthOffset() {
                    return 2 * scrollbarSizes.width + 1;
                }
                function getHeightOffset() {
                    return 2 * scrollbarSizes.height + 1;
                }
                function getExpandWidth(width) {
                    return width + 10 + getWidthOffset();
                }
                function getExpandHeight(height) {
                    return height + 10 + getHeightOffset();
                }
                function positionScrollbars(element, width, height) {
                    var expand = getExpandElement(element), shrink = getShrinkElement(element), expandWidth = getExpandWidth(width), expandHeight = getExpandHeight(height), shrinkWidth = function(width) {
                        return 2 * width + getWidthOffset();
                    }(width), shrinkHeight = function(height) {
                        return 2 * height + getHeightOffset();
                    }(height);
                    expand.scrollLeft = expandWidth, expand.scrollTop = expandHeight, shrink.scrollLeft = shrinkWidth,
                    shrink.scrollTop = shrinkHeight;
                }
                function injectContainerElement() {
                    var container = getState(element).container;
                    if (!container) {
                        (container = document.createElement("div")).className = detectionContainerClass,
                        container.style.cssText = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",
                        function(element) {
                            element.className += " " + detectionContainerClass + "_animation_active";
                        }(getState(element).container = container), element.appendChild(container);
                        var onAnimationStart = function() {
                            getState(element).onRendered && getState(element).onRendered();
                        };
                        addEvent(container, "animationstart", onAnimationStart), getState(element).onAnimationStart = onAnimationStart;
                    }
                    return container;
                }
                function injectScrollElements() {
                    if (debug("Injecting elements"), getState(element)) {
                        !function() {
                            var style = getState(element).style;
                            if ("static" === style.position) {
                                element.style.position = "relative";
                                var removeRelativeStyles = function(reporter, element, style, property) {
                                    var value = style[property];
                                    "auto" !== value && "0" !== function(value) {
                                        return value.replace(/[^-\d\.]/g, "");
                                    }(value) && (reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element),
                                    element.style[property] = 0);
                                };
                                removeRelativeStyles(reporter, element, style, "top"), removeRelativeStyles(reporter, element, style, "right"),
                                removeRelativeStyles(reporter, element, style, "bottom"), removeRelativeStyles(reporter, element, style, "left");
                            }
                        }();
                        var rootContainer = getState(element).container;
                        rootContainer || (rootContainer = injectContainerElement());
                        var left, top, bottom, right, scrollbarWidth = scrollbarSizes.width, scrollbarHeight = scrollbarSizes.height, containerStyle = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; left: " + (left = (left = -(1 + scrollbarWidth)) ? left + "px" : "0") + "; top: " + (top = (top = -(1 + scrollbarHeight)) ? top + "px" : "0") + "; right: " + (right = (right = -scrollbarWidth) ? right + "px" : "0") + "; bottom: " + (bottom = (bottom = -scrollbarHeight) ? bottom + "px" : "0") + ";", containerContainer = document.createElement("div"), container = document.createElement("div"), expand = document.createElement("div"), expandChild = document.createElement("div"), shrink = document.createElement("div"), shrinkChild = document.createElement("div");
                        containerContainer.dir = "ltr", containerContainer.style.cssText = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",
                        containerContainer.className = detectionContainerClass, container.className = detectionContainerClass,
                        container.style.cssText = containerStyle, expand.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",
                        expandChild.style.cssText = "position: absolute; left: 0; top: 0;", shrink.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",
                        shrinkChild.style.cssText = "position: absolute; width: 200%; height: 200%;", expand.appendChild(expandChild),
                        shrink.appendChild(shrinkChild), container.appendChild(expand), container.appendChild(shrink),
                        containerContainer.appendChild(container), rootContainer.appendChild(containerContainer),
                        addEvent(expand, "scroll", onExpandScroll), addEvent(shrink, "scroll", onShrinkScroll),
                        getState(element).onExpandScroll = onExpandScroll, getState(element).onShrinkScroll = onShrinkScroll;
                    } else debug("Aborting because element has been uninstalled");
                    function onExpandScroll() {
                        getState(element).onExpand && getState(element).onExpand();
                    }
                    function onShrinkScroll() {
                        getState(element).onShrink && getState(element).onShrink();
                    }
                }
                function registerListenersAndPositionElements() {
                    function updateChildSizes(element, width, height) {
                        var expandChild = function(element) {
                            return getExpandElement(element).childNodes[0];
                        }(element), expandWidth = getExpandWidth(width), expandHeight = getExpandHeight(height);
                        expandChild.style.width = expandWidth + "px", expandChild.style.height = expandHeight + "px";
                    }
                    function updateDetectorElements(done) {
                        var width = element.offsetWidth, height = element.offsetHeight;
                        debug("Storing current size", width, height), storeCurrentSize(element, width, height),
                        batchProcessor.add(0, function() {
                            if (getState(element)) if (areElementsInjected()) {
                                if (options.debug) {
                                    var w = element.offsetWidth, h = element.offsetHeight;
                                    w === width && h === height || reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                                }
                                updateChildSizes(element, width, height);
                            } else debug("Aborting because element container has not been initialized"); else debug("Aborting because element has been uninstalled");
                        }), batchProcessor.add(1, function() {
                            getState(element) ? areElementsInjected() ? positionScrollbars(element, width, height) : debug("Aborting because element container has not been initialized") : debug("Aborting because element has been uninstalled");
                        }), done && batchProcessor.add(2, function() {
                            getState(element) ? areElementsInjected() ? done() : debug("Aborting because element container has not been initialized") : debug("Aborting because element has been uninstalled");
                        });
                    }
                    function areElementsInjected() {
                        return !!getState(element).container;
                    }
                    function notifyListenersIfNeeded() {
                        debug("notifyListenersIfNeeded invoked");
                        var state = getState(element);
                        return void 0 === getState(element).lastNotifiedWidth && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height ? debug("Not notifying: Size is the same as the start size, and there has been no notification yet.") : state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight ? debug("Not notifying: Size already notified") : (debug("Current size not notified, notifying..."),
                        state.lastNotifiedWidth = state.lastWidth, state.lastNotifiedHeight = state.lastHeight,
                        void forEach$1(getState(element).listeners, function(listener) {
                            listener(element);
                        }));
                    }
                    function handleScroll() {
                        if (debug("Scroll detected."), isUnrendered(element)) debug("Scroll event fired while unrendered. Ignoring..."); else {
                            var width = element.offsetWidth, height = element.offsetHeight;
                            width !== element.lastWidth || height !== element.lastHeight ? (debug("Element size changed."),
                            updateDetectorElements(notifyListenersIfNeeded)) : debug("Element size has not changed (" + width + "x" + height + ").");
                        }
                    }
                    if (debug("registerListenersAndPositionElements invoked."), getState(element)) {
                        getState(element).onRendered = function() {
                            if (debug("startanimation triggered."), isUnrendered(element)) debug("Ignoring since element is still unrendered..."); else {
                                debug("Element rendered.");
                                var expand = getExpandElement(element), shrink = getShrinkElement(element);
                                0 !== expand.scrollLeft && 0 !== expand.scrollTop && 0 !== shrink.scrollLeft && 0 !== shrink.scrollTop || (debug("Scrollbars out of sync. Updating detector elements..."),
                                updateDetectorElements(notifyListenersIfNeeded));
                            }
                        }, getState(element).onExpand = handleScroll, getState(element).onShrink = handleScroll;
                        var style = getState(element).style;
                        updateChildSizes(element, style.width, style.height);
                    } else debug("Aborting because element has been uninstalled");
                }
                function finalizeDomMutation() {
                    if (debug("finalizeDomMutation invoked."), getState(element)) {
                        var style = getState(element).style;
                        storeCurrentSize(element, style.width, style.height), positionScrollbars(element, style.width, style.height);
                    } else debug("Aborting because element has been uninstalled");
                }
                function ready() {
                    callback(element);
                }
                function install() {
                    var style;
                    debug("Installing..."), getState(element).listeners = [], style = getStyle(), getState(element).startSize = {
                        width: style.width,
                        height: style.height
                    }, debug("Element start size", getState(element).startSize), batchProcessor.add(0, storeStyle),
                    batchProcessor.add(1, injectScrollElements), batchProcessor.add(2, registerListenersAndPositionElements),
                    batchProcessor.add(3, finalizeDomMutation), batchProcessor.add(4, ready);
                }
                callback || (callback = element, element = options, options = null), options = options || {},
                debug("Making detectable..."), function(element) {
                    return !function(element) {
                        return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
                    }(element) || null === getComputedStyle(element);
                }(element) ? (debug("Element is detached"), injectContainerElement(), debug("Waiting until element is attached..."),
                getState(element).onRendered = function() {
                    debug("Element is now attached"), install();
                }) : install();
            },
            addListener: function(element, listener) {
                if (!getState(element).listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
                getState(element).listeners.push(listener);
            },
            uninstall: function(element) {
                var state = getState(element);
                state && (state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll),
                state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll),
                state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart),
                state.container && element.removeChild(state.container));
            }
        };
    }, forEach = collectionUtils.forEach;
    function isCollection(obj) {
        return Array.isArray(obj) || void 0 !== obj.length;
    }
    function toArray(collection) {
        if (Array.isArray(collection)) return collection;
        var array = [];
        return forEach(collection, function(obj) {
            array.push(obj);
        }), array;
    }
    function isElement(obj) {
        return obj && 1 === obj.nodeType;
    }
    var elementResizeDetector = function(options) {
        var idHandler$$1, idCount;
        if ((options = options || {}).idHandler) idHandler$$1 = {
            get: function(element) {
                return options.idHandler.get(element, !0);
            },
            set: options.idHandler.set
        }; else {
            var defaultIdHandler = function(options) {
                var idGenerator = options.idGenerator, getState = options.stateHandler.getState;
                return {
                    get: function(element) {
                        var state = getState(element);
                        return state && void 0 !== state.id ? state.id : null;
                    },
                    set: function(element) {
                        var state = getState(element);
                        if (!state) throw new Error("setId required the element to have a resize detection state.");
                        var id = idGenerator.generate();
                        return state.id = id;
                    }
                };
            }({
                idGenerator: (idCount = 1, {
                    generate: function() {
                        return idCount++;
                    }
                }),
                stateHandler: stateHandler
            });
            idHandler$$1 = defaultIdHandler;
        }
        var reporter$$1 = options.reporter;
        reporter$$1 || (reporter$$1 = function(quiet) {
            function noop() {}
            var reporter = {
                log: noop,
                warn: noop,
                error: noop
            };
            if (!quiet && window.console) {
                var attachFunction = function(reporter, name) {
                    reporter[name] = function() {
                        var f = console[name];
                        if (f.apply) f.apply(console, arguments); else for (var i = 0; i < arguments.length; i++) f(arguments[i]);
                    };
                };
                attachFunction(reporter, "log"), attachFunction(reporter, "warn"), attachFunction(reporter, "error");
            }
            return reporter;
        }(!1 === reporter$$1));
        var batchProcessor$$1 = getOption(options, "batchProcessor", batchProcessor({
            reporter: reporter$$1
        })), globalOptions = {};
        globalOptions.callOnAdd = !!getOption(options, "callOnAdd", !0), globalOptions.debug = !!getOption(options, "debug", !1);
        var detectionStrategy, eventListenerHandler = function(idHandler) {
            var eventListeners = {};
            function getListeners(element) {
                var id = idHandler.get(element);
                return void 0 === id ? [] : eventListeners[id] || [];
            }
            return {
                get: getListeners,
                add: function(element, listener) {
                    var id = idHandler.get(element);
                    eventListeners[id] || (eventListeners[id] = []), eventListeners[id].push(listener);
                },
                removeListener: function(element, listener) {
                    for (var listeners = getListeners(element), i = 0, len = listeners.length; i < len; ++i) if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        break;
                    }
                },
                removeAllListeners: function(element) {
                    var listeners = getListeners(element);
                    listeners && (listeners.length = 0);
                }
            };
        }(idHandler$$1), elementUtils$$1 = function(options) {
            var getState = options.stateHandler.getState;
            return {
                isDetectable: function(element) {
                    var state = getState(element);
                    return state && !!state.isDetectable;
                },
                markAsDetectable: function(element) {
                    getState(element).isDetectable = !0;
                },
                isBusy: function(element) {
                    return !!getState(element).busy;
                },
                markBusy: function(element, busy) {
                    getState(element).busy = !!busy;
                }
            };
        }({
            stateHandler: stateHandler
        }), desiredStrategy = getOption(options, "strategy", "object"), strategyOptions = {
            reporter: reporter$$1,
            batchProcessor: batchProcessor$$1,
            stateHandler: stateHandler,
            idHandler: idHandler$$1
        };
        if ("scroll" === desiredStrategy && (browserDetector.isLegacyOpera() ? (reporter$$1.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),
        desiredStrategy = "object") : browserDetector.isIE(9) && (reporter$$1.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),
        desiredStrategy = "object")), "scroll" === desiredStrategy) detectionStrategy = scroll(strategyOptions); else {
            if ("object" !== desiredStrategy) throw new Error("Invalid strategy name: " + desiredStrategy);
            detectionStrategy = function(options) {
                var reporter = (options = options || {}).reporter, batchProcessor = options.batchProcessor, getState = options.stateHandler.getState;
                if (!reporter) throw new Error("Missing required dependency: reporter.");
                function getObject(element) {
                    return getState(element).object;
                }
                return {
                    makeDetectable: function(options, element, callback) {
                        callback || (callback = element, element = options, options = null), (options = options || {}).debug,
                        browserDetector.isIE(8) ? callback(element) : function(element, callback) {
                            var OBJECT_STYLE = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;", positionCheckPerformed = !1, style = window.getComputedStyle(element), width = element.offsetWidth, height = element.offsetHeight;
                            function mutateDom() {
                                function alterPositionStyles() {
                                    if ("static" === style.position) {
                                        element.style.position = "relative";
                                        var removeRelativeStyles = function(reporter, element, style, property) {
                                            var value = style[property];
                                            "auto" !== value && "0" !== function(value) {
                                                return value.replace(/[^-\d\.]/g, "");
                                            }(value) && (reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element),
                                            element.style[property] = 0);
                                        };
                                        removeRelativeStyles(reporter, element, style, "top"), removeRelativeStyles(reporter, element, style, "right"),
                                        removeRelativeStyles(reporter, element, style, "bottom"), removeRelativeStyles(reporter, element, style, "left");
                                    }
                                }
                                "" !== style.position && (alterPositionStyles(), positionCheckPerformed = !0);
                                var object = document.createElement("object");
                                object.style.cssText = OBJECT_STYLE, object.tabIndex = -1, object.type = "text/html",
                                object.onload = function() {
                                    positionCheckPerformed || alterPositionStyles(), function getDocument(element, callback) {
                                        element.contentDocument ? callback(element.contentDocument) : setTimeout(function() {
                                            getDocument(element, callback);
                                        }, 100);
                                    }(this, function(objectDocument) {
                                        callback(element);
                                    });
                                }, browserDetector.isIE() || (object.data = "about:blank"), element.appendChild(object),
                                getState(element).object = object, browserDetector.isIE() && (object.data = "about:blank");
                            }
                            getState(element).startSize = {
                                width: width,
                                height: height
                            }, batchProcessor ? batchProcessor.add(mutateDom) : mutateDom();
                        }(element, callback);
                    },
                    addListener: function(element, listener) {
                        if (!getObject(element)) throw new Error("Element is not detectable by this strategy.");
                        function listenerProxy() {
                            listener(element);
                        }
                        browserDetector.isIE(8) ? (getState(element).object = {
                            proxy: listenerProxy
                        }, element.attachEvent("onresize", listenerProxy)) : getObject(element).contentDocument.defaultView.addEventListener("resize", listenerProxy);
                    },
                    uninstall: function(element) {
                        browserDetector.isIE(8) ? element.detachEvent("onresize", getState(element).object.proxy) : element.removeChild(getObject(element)),
                        delete getState(element).object;
                    }
                };
            }(strategyOptions);
        }
        var onReadyCallbacks = {};
        return {
            listenTo: function(options, elements, listener) {
                function onResizeCallback(element) {
                    var listeners = eventListenerHandler.get(element);
                    forEach(listeners, function(listener) {
                        listener(element);
                    });
                }
                function addListener(callOnAdd, element, listener) {
                    eventListenerHandler.add(element, listener), callOnAdd && listener(element);
                }
                if (listener || (listener = elements, elements = options, options = {}), !elements) throw new Error("At least one element required.");
                if (!listener) throw new Error("Listener required.");
                if (isElement(elements)) elements = [ elements ]; else {
                    if (!isCollection(elements)) return reporter$$1.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                    elements = toArray(elements);
                }
                var elementsReady = 0, callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd), onReadyCallback = getOption(options, "onReady", function() {}), debug = getOption(options, "debug", globalOptions.debug);
                forEach(elements, function(element) {
                    stateHandler.getState(element) || (stateHandler.initState(element), idHandler$$1.set(element));
                    var id = idHandler$$1.get(element);
                    if (debug && reporter$$1.log("Attaching listener to element", id, element), !elementUtils$$1.isDetectable(element)) return debug && reporter$$1.log(id, "Not detectable."),
                    elementUtils$$1.isBusy(element) ? (debug && reporter$$1.log(id, "System busy making it detectable"),
                    addListener(callOnAdd, element, listener), onReadyCallbacks[id] = onReadyCallbacks[id] || [],
                    void onReadyCallbacks[id].push(function() {
                        ++elementsReady === elements.length && onReadyCallback();
                    })) : (debug && reporter$$1.log(id, "Making detectable..."), elementUtils$$1.markBusy(element, !0),
                    detectionStrategy.makeDetectable({
                        debug: debug
                    }, element, function(element) {
                        if (debug && reporter$$1.log(id, "onElementDetectable"), stateHandler.getState(element)) {
                            elementUtils$$1.markAsDetectable(element), elementUtils$$1.markBusy(element, !1),
                            detectionStrategy.addListener(element, onResizeCallback), addListener(callOnAdd, element, listener);
                            var state = stateHandler.getState(element);
                            if (state && state.startSize) {
                                var width = element.offsetWidth, height = element.offsetHeight;
                                state.startSize.width === width && state.startSize.height === height || onResizeCallback(element);
                            }
                            onReadyCallbacks[id] && forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        } else debug && reporter$$1.log(id, "Element uninstalled before being detectable.");
                        delete onReadyCallbacks[id], ++elementsReady === elements.length && onReadyCallback();
                    }));
                    debug && reporter$$1.log(id, "Already detecable, adding listener."), addListener(callOnAdd, element, listener),
                    elementsReady++;
                }), elementsReady === elements.length && onReadyCallback();
            },
            removeListener: eventListenerHandler.removeListener,
            removeAllListeners: eventListenerHandler.removeAllListeners,
            uninstall: function(elements) {
                if (!elements) return reporter$$1.error("At least one element is required.");
                if (isElement(elements)) elements = [ elements ]; else {
                    if (!isCollection(elements)) return reporter$$1.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                    elements = toArray(elements);
                }
                forEach(elements, function(element) {
                    eventListenerHandler.removeAllListeners(element), detectionStrategy.uninstall(element),
                    stateHandler.cleanState(element);
                });
            }
        };
    };
    function getOption(options, name, defaultValue) {
        var value = options[name];
        return null == value && void 0 !== defaultValue ? defaultValue : value;
    }
    var toStr$2 = Object.prototype.toString, isArguments = function(value) {
        var str = toStr$2.call(value), isArgs = "[object Arguments]" === str;
        return isArgs || (isArgs = "[object Array]" !== str && null !== value && "object" == typeof value && "number" == typeof value.length && 0 <= value.length && "[object Function]" === toStr$2.call(value.callee)),
        isArgs;
    }, has = Object.prototype.hasOwnProperty, toStr$1 = Object.prototype.toString, slice = Array.prototype.slice, isEnumerable = Object.prototype.propertyIsEnumerable, hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, "toString"), hasProtoEnumBug = isEnumerable.call(function() {}, "prototype"), dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    }, excludedKeys = {
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
    }, hasAutomationEqualityBug = function() {
        if ("undefined" == typeof window) return !1;
        for (var k in window) try {
            if (!excludedKeys["$" + k] && has.call(window, k) && null !== window[k] && "object" == typeof window[k]) try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return !0;
            }
        } catch (e) {
            return !0;
        }
        return !1;
    }(), keysShim = function(object) {
        var isObject = null !== object && "object" == typeof object, isFunction = "[object Function]" === toStr$1.call(object), isArguments$$1 = isArguments(object), isString = isObject && "[object String]" === toStr$1.call(object), theKeys = [];
        if (!isObject && !isFunction && !isArguments$$1) throw new TypeError("Object.keys called on a non-object");
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && 0 < object.length && !has.call(object, 0)) for (var i = 0; i < object.length; ++i) theKeys.push(String(i));
        if (isArguments$$1 && 0 < object.length) for (var j = 0; j < object.length; ++j) theKeys.push(String(j)); else for (var name in object) skipProto && "prototype" === name || !has.call(object, name) || theKeys.push(String(name));
        if (hasDontEnumBug) for (var skipConstructor = function(o) {
            if ("undefined" == typeof window || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
            try {
                return equalsConstructorPrototype(o);
            } catch (e) {
                return !1;
            }
        }(object), k = 0; k < dontEnums.length; ++k) skipConstructor && "constructor" === dontEnums[k] || !has.call(object, dontEnums[k]) || theKeys.push(dontEnums[k]);
        return theKeys;
    };
    keysShim.shim = function() {
        if (Object.keys) {
            if (!function() {
                return 2 === (Object.keys(arguments) || "").length;
            }(1, 2)) {
                var originalKeys = Object.keys;
                Object.keys = function(object) {
                    return isArguments(object) ? originalKeys(slice.call(object)) : originalKeys(object);
                };
            }
        } else Object.keys = keysShim;
        return Object.keys || keysShim;
    };
    var index$3 = keysShim, hasOwn = Object.prototype.hasOwnProperty, toString = Object.prototype.toString, hasSymbols = "function" == typeof Symbol && "symbol" == typeof Symbol(), toStr = Object.prototype.toString, supportsDescriptors = Object.defineProperty && function() {
        var obj = {};
        try {
            for (var _ in Object.defineProperty(obj, "x", {
                enumerable: !1,
                value: obj
            }), obj) return !1;
            return obj.x === obj;
        } catch (e) {
            return !1;
        }
    }(), defineProperty = function(object, name, value, predicate) {
        var fn;
        name in object && ("function" != typeof (fn = predicate) || "[object Function]" !== toStr.call(fn) || !predicate()) || (supportsDescriptors ? Object.defineProperty(object, name, {
            configurable: !0,
            enumerable: !1,
            value: value,
            writable: !0
        }) : object[name] = value);
    }, defineProperties = function(object, map) {
        var predicates = 2 < arguments.length ? arguments[2] : {}, props = index$3(map);
        hasSymbols && (props = props.concat(Object.getOwnPropertySymbols(map))), function(obj, fn, ctx) {
            if ("[object Function]" !== toString.call(fn)) throw new TypeError("iterator must be a function");
            var l = obj.length;
            if (l === +l) for (var i = 0; i < l; i++) fn.call(ctx, obj[i], i, obj); else for (var k in obj) hasOwn.call(obj, k) && fn.call(ctx, obj[k], k, obj);
        }(props, function(name) {
            defineProperty(object, name, map[name], predicates[name]);
        });
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    var index$1 = defineProperties, _isNaN = Number.isNaN || function(a) {
        return a != a;
    }, $isNaN = Number.isNaN || function(a) {
        return a != a;
    }, _isFinite = Number.isFinite || function(x) {
        return "number" == typeof x && !$isNaN(x) && x !== 1 / 0 && x !== -1 / 0;
    }, has$1 = Object.prototype.hasOwnProperty, assign = Object.assign || function(target, source) {
        for (var key in source) has$1.call(source, key) && (target[key] = source[key]);
        return target;
    }, sign = function(number) {
        return 0 <= number ? 1 : -1;
    }, mod = function(number, modulo) {
        var remain = number % modulo;
        return Math.floor(0 <= remain ? remain : remain + modulo);
    }, isPrimitive = function(value) {
        return null === value || "function" != typeof value && "object" != typeof value;
    }, isPrimitive$2 = function(value) {
        return null === value || "function" != typeof value && "object" != typeof value;
    }, fnToStr = Function.prototype.toString, constructorRegex = /^\s*class /, isES6ClassFn = function(value) {
        try {
            var spaceStripped = fnToStr.call(value).replace(/\/\/.*\n/g, "").replace(/\/\*[.\s\S]*\*\//g, "").replace(/\n/gm, " ").replace(/ {2}/g, " ");
            return constructorRegex.test(spaceStripped);
        } catch (e) {
            return !1;
        }
    }, toStr$4 = Object.prototype.toString, hasToStringTag = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, index$7 = function(value) {
        if (!value) return !1;
        if ("function" != typeof value && "object" != typeof value) return !1;
        if (hasToStringTag) return function(value) {
            try {
                return !isES6ClassFn(value) && (fnToStr.call(value), !0);
            } catch (e) {
                return !1;
            }
        }(value);
        if (isES6ClassFn(value)) return !1;
        var strClass = toStr$4.call(value);
        return "[object Function]" === strClass || "[object GeneratorFunction]" === strClass;
    }, getDay = Date.prototype.getDay, toStr$5 = Object.prototype.toString, hasToStringTag$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, index$9 = function(value) {
        return "object" == typeof value && null !== value && (hasToStringTag$1 ? function(value) {
            try {
                return getDay.call(value), !0;
            } catch (e) {
                return !1;
            }
        }(value) : "[object Date]" === toStr$5.call(value));
    }, index$11 = createCommonjsModule(function(module) {
        var toStr = Object.prototype.toString;
        if ("function" == typeof Symbol && "symbol" == typeof Symbol()) {
            var symToStr = Symbol.prototype.toString, symStringRegex = /^Symbol\(.*\)$/;
            module.exports = function(value) {
                if ("symbol" == typeof value) return !0;
                if ("[object Symbol]" !== toStr.call(value)) return !1;
                try {
                    return function(value) {
                        return "symbol" == typeof value.valueOf() && symStringRegex.test(symToStr.call(value));
                    }(value);
                } catch (e) {
                    return !1;
                }
            };
        } else module.exports = function(value) {
            return !1;
        };
    }), hasSymbols$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator, es6$2 = function(input, PreferredType) {
        if (isPrimitive$2(input)) return input;
        var exoticToPrim, hint = "default";
        if (1 < arguments.length && (PreferredType === String ? hint = "string" : PreferredType === Number && (hint = "number")),
        hasSymbols$2 && (Symbol.toPrimitive ? exoticToPrim = function(O, P) {
            var func = O[P];
            if (null != func) {
                if (!index$7(func)) throw new TypeError(func + " returned for property " + P + " of object " + O + " is not a function");
                return func;
            }
        }(input, Symbol.toPrimitive) : index$11(input) && (exoticToPrim = Symbol.prototype.valueOf)),
        void 0 !== exoticToPrim) {
            var result = exoticToPrim.call(input, hint);
            if (isPrimitive$2(result)) return result;
            throw new TypeError("unable to convert exotic object to primitive");
        }
        return "default" === hint && (index$9(input) || index$11(input)) && (hint = "string"),
        function(O, hint) {
            if (null == O) throw new TypeError("Cannot call method on " + O);
            if ("string" != typeof hint || "number" !== hint && "string" !== hint) throw new TypeError('hint must be "string" or "number"');
            var method, result, i, methodNames = "string" === hint ? [ "toString", "valueOf" ] : [ "valueOf", "toString" ];
            for (i = 0; i < methodNames.length; ++i) if (method = O[methodNames[i]], index$7(method) && (result = method.call(O),
            isPrimitive$2(result))) return result;
            throw new TypeError("No default value");
        }(input, "default" === hint ? "number" : hint);
    }, slice$1 = Array.prototype.slice, toStr$6 = Object.prototype.toString, index$13 = Function.prototype.bind || function(that) {
        var target = this;
        if ("function" != typeof target || "[object Function]" !== toStr$6.call(target)) throw new TypeError("Function.prototype.bind called on incompatible " + target);
        for (var bound, args = slice$1.call(arguments, 1), boundLength = Math.max(0, target.length - args.length), boundArgs = [], i = 0; i < boundLength; i++) boundArgs.push("$" + i);
        if (bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(function() {
            if (this instanceof bound) {
                var result = target.apply(this, args.concat(slice$1.call(arguments)));
                return Object(result) === result ? result : this;
            }
            return target.apply(that, args.concat(slice$1.call(arguments)));
        }), target.prototype) {
            var Empty = function() {};
            Empty.prototype = target.prototype, bound.prototype = new Empty(), Empty.prototype = null;
        }
        return bound;
    }, toStr$7 = Object.prototype.toString, ES5internalSlots___DefaultValue__ = function(O, hint) {
        var actualHint = hint || ("[object Date]" === toStr$7.call(O) ? String : Number);
        if (actualHint === String || actualHint === Number) {
            var value, i, methods = actualHint === String ? [ "toString", "valueOf" ] : [ "valueOf", "toString" ];
            for (i = 0; i < methods.length; ++i) if (index$7(O[methods[i]]) && (value = O[methods[i]](),
            isPrimitive$2(value))) return value;
            throw new TypeError("No default value");
        }
        throw new TypeError("invalid [[DefaultValue]] hint supplied");
    }, es5 = {
        ToPrimitive: function(input, PreferredType) {
            return isPrimitive$2(input) ? input : ES5internalSlots___DefaultValue__(input, PreferredType);
        },
        ToBoolean: function(value) {
            return Boolean(value);
        },
        ToNumber: function(value) {
            return Number(value);
        },
        ToInteger: function(value) {
            var number = this.ToNumber(value);
            return _isNaN(number) ? 0 : 0 !== number && _isFinite(number) ? sign(number) * Math.floor(Math.abs(number)) : number;
        },
        ToInt32: function(x) {
            return this.ToNumber(x) >> 0;
        },
        ToUint32: function(x) {
            return this.ToNumber(x) >>> 0;
        },
        ToUint16: function(value) {
            var number = this.ToNumber(value);
            if (_isNaN(number) || 0 === number || !_isFinite(number)) return 0;
            var posInt = sign(number) * Math.floor(Math.abs(number));
            return mod(posInt, 65536);
        },
        ToString: function(value) {
            return String(value);
        },
        ToObject: function(value) {
            return this.CheckObjectCoercible(value), Object(value);
        },
        CheckObjectCoercible: function(value, optMessage) {
            if (null == value) throw new TypeError(optMessage || "Cannot call method on " + value);
            return value;
        },
        IsCallable: index$7,
        SameValue: function(x, y) {
            return x === y ? 0 !== x || 1 / x == 1 / y : _isNaN(x) && _isNaN(y);
        },
        Type: function(x) {
            return null === x ? "Null" : void 0 === x ? "Undefined" : "function" == typeof x || "object" == typeof x ? "Object" : "number" == typeof x ? "Number" : "boolean" == typeof x ? "Boolean" : "string" == typeof x ? "String" : void 0;
        }
    }, index$17 = index$13.call(Function.call, Object.prototype.hasOwnProperty), regexExec = RegExp.prototype.exec, gOPD = Object.getOwnPropertyDescriptor, toStr$8 = Object.prototype.toString, hasToStringTag$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, index$15 = function(value) {
        if (!value || "object" != typeof value) return !1;
        if (!hasToStringTag$2) return "[object RegExp]" === toStr$8.call(value);
        var descriptor = gOPD(value, "lastIndex");
        return !(!descriptor || !index$17(descriptor, "value")) && function(value) {
            try {
                var lastIndex = value.lastIndex;
                return value.lastIndex = 0, regexExec.call(value), !0;
            } catch (e) {
                return !1;
            } finally {
                value.lastIndex = lastIndex;
            }
        }(value);
    }, toStr$3 = Object.prototype.toString, hasSymbols$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator, symbolToStr = hasSymbols$1 ? Symbol.prototype.toString : toStr$3, MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1, parseInteger = parseInt, strSlice = index$13.call(Function.call, String.prototype.slice), isBinary = index$13.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i), isOctal = index$13.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i), nonWS = [ "", "​", "￾" ].join(""), nonWSregex = new RegExp("[" + nonWS + "]", "g"), hasNonWS = index$13.call(Function.call, RegExp.prototype.test, nonWSregex), isInvalidHexLiteral = index$13.call(Function.call, RegExp.prototype.test, /^[-+]0x[0-9a-f]+$/i), ws = [ "\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff" ].join(""), trimRegex = new RegExp("(^[" + ws + "]+)|([" + ws + "]+$)", "g"), replace = index$13.call(Function.call, String.prototype.replace), ES6 = assign(assign({}, es5), {
        Call: function(F, V) {
            var args = 2 < arguments.length ? arguments[2] : [];
            if (!this.IsCallable(F)) throw new TypeError(F + " is not a function");
            return F.apply(V, args);
        },
        ToPrimitive: es6$2,
        ToNumber: function(argument) {
            var value = isPrimitive(argument) ? argument : es6$2(argument, "number");
            if ("symbol" == typeof value) throw new TypeError("Cannot convert a Symbol value to a number");
            if ("string" == typeof value) {
                if (isBinary(value)) return this.ToNumber(parseInteger(strSlice(value, 2), 2));
                if (isOctal(value)) return this.ToNumber(parseInteger(strSlice(value, 2), 8));
                if (hasNonWS(value) || isInvalidHexLiteral(value)) return NaN;
                var trimmed = function(value) {
                    return replace(value, trimRegex, "");
                }(value);
                if (trimmed !== value) return this.ToNumber(trimmed);
            }
            return Number(value);
        },
        ToInt16: function(argument) {
            var int16bit = this.ToUint16(argument);
            return 32768 <= int16bit ? int16bit - 65536 : int16bit;
        },
        ToInt8: function(argument) {
            var int8bit = this.ToUint8(argument);
            return 128 <= int8bit ? int8bit - 256 : int8bit;
        },
        ToUint8: function(argument) {
            var number = this.ToNumber(argument);
            if (_isNaN(number) || 0 === number || !_isFinite(number)) return 0;
            var posInt = sign(number) * Math.floor(Math.abs(number));
            return mod(posInt, 256);
        },
        ToUint8Clamp: function(argument) {
            var number = this.ToNumber(argument);
            if (_isNaN(number) || number <= 0) return 0;
            if (255 <= number) return 255;
            var f = Math.floor(argument);
            return f + .5 < number ? f + 1 : number < f + .5 ? f : f % 2 != 0 ? f + 1 : f;
        },
        ToString: function(argument) {
            if ("symbol" == typeof argument) throw new TypeError("Cannot convert a Symbol value to a string");
            return String(argument);
        },
        ToObject: function(value) {
            return this.RequireObjectCoercible(value), Object(value);
        },
        ToPropertyKey: function(argument) {
            var key = this.ToPrimitive(argument, String);
            return "symbol" == typeof key ? symbolToStr.call(key) : this.ToString(key);
        },
        ToLength: function(argument) {
            var len = this.ToInteger(argument);
            return len <= 0 ? 0 : MAX_SAFE_INTEGER < len ? MAX_SAFE_INTEGER : len;
        },
        CanonicalNumericIndexString: function(argument) {
            if ("[object String]" !== toStr$3.call(argument)) throw new TypeError("must be a string");
            if ("-0" === argument) return -0;
            var n = this.ToNumber(argument);
            return this.SameValue(this.ToString(n), argument) ? n : void 0;
        },
        RequireObjectCoercible: es5.CheckObjectCoercible,
        IsArray: Array.isArray || function(argument) {
            return "[object Array]" === toStr$3.call(argument);
        },
        IsConstructor: function(argument) {
            return "function" == typeof argument && !!argument.prototype;
        },
        IsExtensible: function(obj) {
            return !Object.preventExtensions || !isPrimitive(obj) && Object.isExtensible(obj);
        },
        IsInteger: function(argument) {
            if ("number" != typeof argument || _isNaN(argument) || !_isFinite(argument)) return !1;
            var abs = Math.abs(argument);
            return Math.floor(abs) === abs;
        },
        IsPropertyKey: function(argument) {
            return "string" == typeof argument || "symbol" == typeof argument;
        },
        IsRegExp: function(argument) {
            if (!argument || "object" != typeof argument) return !1;
            if (hasSymbols$1) {
                var isRegExp = argument[Symbol.match];
                if (void 0 !== isRegExp) return es5.ToBoolean(isRegExp);
            }
            return index$15(argument);
        },
        SameValueZero: function(x, y) {
            return x === y || _isNaN(x) && _isNaN(y);
        },
        GetV: function(V, P) {
            if (!this.IsPropertyKey(P)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
            return this.ToObject(V)[P];
        },
        GetMethod: function(O, P) {
            if (!this.IsPropertyKey(P)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
            var func = this.GetV(O, P);
            if (null != func) {
                if (!this.IsCallable(func)) throw new TypeError(P + "is not a function");
                return func;
            }
        },
        Get: function(O, P) {
            if ("Object" !== this.Type(O)) throw new TypeError("Assertion failed: Type(O) is not Object");
            if (!this.IsPropertyKey(P)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
            return O[P];
        },
        Type: function(x) {
            return "symbol" == typeof x ? "Symbol" : es5.Type(x);
        },
        SpeciesConstructor: function(O, defaultConstructor) {
            if ("Object" !== this.Type(O)) throw new TypeError("Assertion failed: Type(O) is not Object");
            var C = O.constructor;
            if (void 0 === C) return defaultConstructor;
            if ("Object" !== this.Type(C)) throw new TypeError("O.constructor is not an Object");
            var S = hasSymbols$1 && Symbol.species ? C[Symbol.species] : void 0;
            if (null == S) return defaultConstructor;
            if (this.IsConstructor(S)) return S;
            throw new TypeError("no constructor found");
        }
    });
    delete ES6.CheckObjectCoercible;
    var es7 = assign(ES6, {
        SameValueNonNumber: function(x, y) {
            if ("number" == typeof x || typeof x != typeof y) throw new TypeError("SameValueNonNumber requires two non-number values of the same type.");
            return this.SameValue(x, y);
        }
    }), isEnumerable$1 = index$13.call(Function.call, Object.prototype.propertyIsEnumerable), implementation = function(O) {
        var obj = es7.RequireObjectCoercible(O), entrys = [];
        for (var key in obj) index$17(obj, key) && isEnumerable$1(obj, key) && entrys.push([ key, obj[key] ]);
        return entrys;
    }, polyfill$1 = function() {
        return "function" == typeof Object.entries ? Object.entries : implementation;
    }, polyfill = polyfill$1();
    index$1(polyfill, {
        getPolyfill: polyfill$1,
        implementation: implementation,
        shim: function() {
            var polyfill = polyfill$1();
            return index$1(Object, {
                entries: polyfill
            }, {
                entries: function() {
                    return Object.entries !== polyfill;
                }
            }), polyfill;
        }
    });
    var index = polyfill, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, defaults = {
        sizes: {
            mini: 450,
            small: 600
        },
        controls: {
            currentTimeDisplay: {
                mini: !1
            },
            timeDivider: {
                mini: !1
            },
            durationDisplay: {
                mini: !1
            },
            remainingTimeDisplay: {
                mini: !1,
                small: !1
            },
            captionsButton: {
                mini: !1
            }
        }
    }, registerPlugin = videojs.registerPlugin || videojs.plugin, ascending = function(previousSize, nextSize) {
        return previousSize[1] - nextSize[1];
    }, getPlayerSize = function(player, sizes) {
        var breakpoints = function(playerSize, sizes) {
            return Object.entries || index.shim(), Object.entries(sizes).sort(ascending).filter(function(size) {
                return size[1] >= playerSize;
            });
        }(player.el().clientWidth, sizes);
        return breakpoints[0] ? breakpoints[0][0] : "default";
    }, set = function(player, control, setting) {
        var target = function(setting) {
            return void 0 === setting || !!setting;
        }(setting);
        return function(player, control) {
            return "object" === _typeof(player.controlBar[control]);
        }(player, control) ? function(player, control, show) {
            var target = player.controlBar[control];
            return show ? target.show() : target.hide();
        }(player, control, target) : function(player, className, show) {
            var target = player.el().querySelectorAll("." + className);
            if (0 !== target.length) return show ? target[0].classList.remove("vjs-hidden") : target[0].classList.add("vjs-hidden");
        }(player, control, target);
    }, responsiveControls = function(userSettings) {
        var _this = this, settings = {
            sizes: function(settings, defaultSettings) {
                return settings && settings.sizes ? settings.sizes : defaultSettings.sizes;
            }(userSettings, defaults),
            controls: function(settings, defaultSettings) {
                return settings && settings.controls ? videojs.mergeOptions(defaultSettings.controls, settings.controls) : defaultSettings.controls;
            }(userSettings, defaults)
        };
        this.addClass("vjs-responsive-controls"), this.resizeDetector = this.resizeDetector || elementResizeDetector({
            strategy: "scroll"
        }), this.resizeDetector.listenTo(this.el(), function() {
            return function(player, _ref) {
                var sizes = _ref.sizes, controls = _ref.controls, size = getPlayerSize(player, sizes);
                for (var control in controls) {
                    var setting = controls[control][size];
                    set(player, control, setting);
                }
            }(_this, settings);
        });
    };
    return registerPlugin("responsiveControls", responsiveControls), responsiveControls.VERSION = "1.0.1",
    responsiveControls;
}), function() {
    var mimsi = "";
    mimsi = "&a1_p=";
    var getCookie = function(name) {
        var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        return value ? value[2] : null;
    };
    function track(URL) {
        var img = new Image();
        return img.src = URL, img;
    }
    function hmsToSecondsOnly(str) {
        for (var p = str.split(":"), s = 0, m = 1; 0 < p.length; ) s += m * parseInt(p.pop(), 10),
        m *= 60;
        return s;
    }
    null == getCookie("M_SID") ? mimsi += "0000000000000000000000000000000000000000000000000000000000000000" : mimsi += getCookie("M_SID"),
    null == getCookie("M_ID") ? mimsi += "" : mimsi += btoa(getCookie("M_ID")), window.A1_VAST = function(__name) {
        this.name = __name, this.parser = {
            vastXML: null,
            AdTitle: null,
            MediaFiles: null,
            Impression: null,
            impressionFired: !1,
            TrackingEvents: null,
            VideoClicks: null,
            CreativeExtensions: null,
            Duration: null,
            ControlPlayer: null,
            Companion: null,
            CompanionAds: null,
            load: function(vastUrl, callback) {
                __self = this, $.ajax({
                    type: "GET",
                    url: vastUrl,
                    cache: !1,
                    dataType: "text",
                    complete: function(res) {
                        console.log("res.status", res.status), 200 !== res.status && (404 === res.status ? callback(null, {
                            error: 3,
                            error_code: "ERROR_URL",
                            msg: "ajax 404 Error"
                        }) : callback(null, {
                            error: 1,
                            error_code: "ERROR",
                            msg: "ajax " + res.status + " Error"
                        }));
                    },
                    success: function(res) {
                        var xml;
                        try {
                            xml = $.parseXML(res);
                        } catch (e) {
                            return void callback(null, {
                                error: 4,
                                error_code: "AD_NO",
                                msg: "Invalid VAST XMLDocument"
                            });
                        }
                        if (null != (null != xml ? xml.documentElement : void 0) && "VAST" === xml.documentElement.nodeName) {
                            __self.vastXML = xml, __self.Impression = $(xml).find("Impression"), __self.TrackingEvents = $(xml).find("TrackingEvents"),
                            __self.VideoClicks = $(xml).find("VideoClicks"), __self.MediaFiles = $(xml).find("MediaFiles"),
                            __self.CreativeExtensions = $(xml).find("CreativeExtensions"), __self.ControlPlayer = $(xml).find("ControlPlayer"),
                            __self.Companion = $(xml).find("Companion"), __self.CompanionAds = $(xml).find("CompanionAds"),
                            __self.AdTitle = $(xml).find("AdTitle").text();
                            var match, durationInMs, secStr, minStr, hourStr;
                            (match = $(xml).find("Duration").text().match(/(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/)) && (hourStr = match[1],
                            durationInMs = 60 * parseInt(hourStr, 10) * 60 * 1e3 + (minStr = match[2], 60 * parseInt(minStr, 10) * 1e3) + (secStr = match[3],
                            1e3 * parseInt(secStr, 10)) + parseInt(match[5] || 0)), __self.Duration = isNaN(durationInMs) ? null : durationInMs,
                            callback(this, null);
                        } else callback(null, {
                            error: 4,
                            error_code: "AD_NO",
                            msg: "Invalid VAST XMLDocument"
                        });
                    },
                    error: function() {}
                });
            },
            getVideoUrl: function() {
                return this.MediaFiles.find("MediaFile").text();
            },
            getVideoType: function() {
                return this.MediaFiles.find("MediaFile").attr("type");
            },
            getPosterUrl: function() {
                return this.ControlPlayer.find("PosterUrl").text();
            },
            getClickOption: function() {
                return this.ControlPlayer.find("ClickOption").text();
            },
            getLargeAdNextHour: function() {
                return this.ControlPlayer.find("LargeAdNextHour").text();
            },
            getProgressbarMove: function() {
                return this.ControlPlayer.find("ProgressbarMove").text();
            },
            getSoundAutoOn: function() {
                return this.ControlPlayer.find("SoundAutoOn").text();
            },
            getSoundValue: function() {
                return this.ControlPlayer.find("SoundValue").text();
            },
            getExpandWidthSizeValue: function() {
                return this.ControlPlayer.find("ExpandWidthSize").text();
            },
            getTerms: function() {
                return {
                    link: this.ControlPlayer.find("TermsLink").text(),
                    visible: !this.ControlPlayer.find("TermsVisible").text() || "N" !== this.ControlPlayer.find("TermsVisible").text()
                };
            },
            getVideoClicks: function() {
                return {
                    link: this.VideoClicks.find("ClickThrough").text(),
                    tracking: this.VideoClicks.find("ClickTracking").text()
                };
            },
            getActionButton: function() {
                return {
                    text: this.ControlPlayer.find("ActionButtonText").text(),
                    size: this.ControlPlayer.find("ActionButtonTextSize").text() ? parseInt(this.ControlPlayer.find("ActionButtonTextSize").text()) : 10,
                    position: this.ControlPlayer.find("ActionButtonPosition").text() ? this.ControlPlayer.find("ActionButtonPosition").text() : 4,
                    visible: !this.ControlPlayer.find("ActionButtonVisible").text() || "N" !== this.ControlPlayer.find("ActionButtonVisible").text()
                };
            },
            getTime: function() {
                return {
                    position: this.ControlPlayer.find("TimePosition").text() ? this.ControlPlayer.find("TimePosition").text() : 3,
                    visible: !this.ControlPlayer.find("TimeVisible").text() || "N" !== this.ControlPlayer.find("TimeVisible").text()
                };
            },
            getViewPlay: function() {
                return this.ControlPlayer.find("ViewPlay").text();
            },
            fireImpression: function() {
                if (!a1platform.impressionFired) {
                    var impression = this.Impression.text();
                    impression && "" != impression && track(impression + mimsi), a1platform.impressionFired = !0;
                }
            },
            fireTrackingEvent: function(videoCurrentTime) {
                var currentTime = Math.floor(videoCurrentTime);
                if (0 == currentTime) {
                    var startUrl = this.TrackingEvents.find('Tracking[event="start"]').text();
                    startUrl && "" != startUrl && track(startUrl + mimsi);
                }
                if (currentTime == Math.floor(this.Duration / 1e3 / 4)) {
                    var firstQuartileUrl = this.TrackingEvents.find('Tracking[event="firstQuartile"]').text();
                    firstQuartileUrl && "" != firstQuartileUrl && track(firstQuartileUrl + mimsi);
                }
                if (currentTime == Math.floor(this.Duration / 1e3 / 2)) {
                    var midpointUrl = this.TrackingEvents.find('Tracking[event="midpoint"]').text();
                    midpointUrl && "" != midpointUrl && track(midpointUrl + mimsi);
                }
                if (currentTime == Math.floor(this.Duration / 1e3 * 3 / 4)) {
                    var thirdQuartileUrl = this.TrackingEvents.find('Tracking[event="thirdQuartile"]').text();
                    thirdQuartileUrl && "" != thirdQuartileUrl && track(thirdQuartileUrl + mimsi);
                }
                var progress = this.TrackingEvents.find('Tracking[event="progress"]');
                for (i = 0; i < progress.length; i++) -1 == progress.eq(i).attr("offset").toUpperCase().indexOf("V") && currentTime == hmsToSecondsOnly(progress.eq(i).attr("offset")) && track(progress.eq(i).text() + mimsi);
            },
            fireTrackingEventSkip: function() {
                var skipUrl = this.TrackingEvents.find('Tracking[event="skip"]').text();
                skipUrl && "" != skipUrl && track(skipUrl + mimsi);
            },
            fireTrackingEventComplete: function() {
                var completeUrl = this.TrackingEvents.find('Tracking[event="complete"]').text();
                completeUrl && "" != completeUrl && track(completeUrl + mimsi);
            }
        };
    };
}(), function() {
    var md = new MobileDetect(window.navigator.userAgent);
    window.a1platform = {
        mobile: md.mobile(),
        iframeMode: !1,
        isSafari: navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && navigator.userAgent && !navigator.userAgent.match("CriOS")
    }, window.addEventListener("message", function(event) {
        if (event.data && event.data.name) switch (event.data.name) {
          case "a1CreateVideoBannerLargeAd":
            var params = event.data.params;
            a1CreateVideoBannerLargeAd(params.button, params.url, params.cb);
            break;

          case "comAdBBSSubjectPlay":
            window.videoPlayer.player.play(), $("button.__a1-mouse-over-counter-action").removeClass("__a1-active");
        }
    }), window.a1platform.createAd = function(target, url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            if (res) switch (console.log("VAST_PARSER.AdTitle", VAST_PARSER.AdTitle), VAST_PARSER.AdTitle) {
              case "A1_VideoRectangle":
                $('<div id="__A1RectangleBanner" class="__a1-rectangle-banner"></div>').appendTo(target),
                window.a1CreateRectangleAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoTopBanner":
                $('<div id="__A1TopBanner" class="__a1-top-banner"></div>').appendTo(target), window.a1CreateVideoBannerTopAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoExtendedBanner":
                $('<div id="__A1VideoBanner" class="__a1-video-banner"></div>').appendTo(target),
                window.a1CreateVideoBannerAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoExtendedBanner_if":
                $('<div id="__A1VideoBanner" class="__a1-video-banner"></div>').appendTo(target),
                window.a1CreateVideoBannerIfAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoExtendedBanner_if_board":
                $('<div id="__A1VideoBanner_board" class="__a1-video-banner"></div>').appendTo(target),
                window.a1CreateVideoBannerIfBAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoBounce":
                $('<div id="__A1BounceBanner" class="__a1-bounce-banner"></div>').appendTo(target),
                window.a1CreateBounceAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoInBanner":
                $('<div id="__A1InBanner" class="__a1-in-banner"></div>').appendTo(target), window.a1CreateInBannerAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoBigInBanner":
                $('<div id="__A1BigInBanner" class="__a1-big-in-banner"></div>').appendTo(target),
                window.a1CreateBigInBannerAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoInFeed":
                $('<div id="__A1InfeedBanner" class="__a1-infeed-banner"></div>').appendTo(target),
                window.a1CreateInfeedAdWithVast(VAST_PARSER);
                break;

              case "A1_VideoExpandBanner":
                $('<div id="__A1VideoExpandBanner" class="__a1-video-e-banner"></div>').appendTo(target),
                window.a1CreateVideoBannerExpandAdWithVast(VAST_PARSER);
                break;

              case "A1_ClickMobileBanner":
                $('<div id="__A1ClickMobileBanner" class="__a1-video-cm-banner"></div>').appendTo(target),
                window.a1CreateClickMobileBannerAdWithVast(VAST_PARSER);
            } else cb(res, error);
        });
    }, window.a1platform.createRectangleAd = function(target, url, cb) {
        $('<div id="__A1RectangleBanner" class="__a1-rectangle-banner"></div>').appendTo(target),
        window.a1CreateRectangleAd(url, cb);
    }, window.a1platform.createVideoBannerTopAd = function(target, url, cb) {
        $('<div id="__A1TopBanner" class="__a1-top-banner"></div>').appendTo(target), window.a1CreateVideoBannerTopAd(url, cb);
    }, window.a1platform.createVideoBannerAd = function(target, url, cb) {
        $('<div id="__A1VideoBanner" class="__a1-video-banner"></div>').appendTo(target),
        window.a1CreateVideoBannerAd(url, cb);
    }, window.a1platform.createVideoBannerIfAd = function(target, url, cb) {
        $('<div id="__A1VideoBanner" class="__a1-video-banner"></div>').appendTo(target),
        window.a1CreateVideoBannerIfAd(url, cb);
    }, window.a1platform.createVideoBannerIfBAd = function(target, url, cb) {
        $('<div id="__A1VideoBanner_board" class="__a1-video-banner"></div>').appendTo(target),
        window.a1CreateVideoBannerIfBAd(url, cb);
    }, window.a1platform.createBounceAd = function(target, url, cb) {
        $('<div id="__A1BounceBanner" class="__a1-bounce-banner"></div>').appendTo(target),
        window.a1CreateBounceAd(url, cb);
    }, window.a1platform.createInBannerAd = function(target, url, cb) {
        $('<div id="__A1InBanner" class="__a1-in-banner"></div>').appendTo(target), window.a1CreateInBannerAd(url, cb);
    }, window.a1platform.createBigInBannerAd = function(target, url, cb) {
        $('<div id="__A1BigInBanner" class="__a1-big-in-banner"></div>').appendTo(target),
        window.a1CreateBigInBannerAd(url, cb);
    }, window.a1platform.createInfeedAd = function(target, url, cb) {
        $('<div id="__A1InfeedBanner" class="__a1-infeed-banner"></div>').appendTo(target),
        window.a1CreateInfeedAd(url, cb);
    }, window.a1platform.createVideoBannerExpandAd = function(target, url, cb) {
        $('<div id="__A1VideoExpandBanner" class="__a1-video-e-banner"></div>').appendTo(target),
        window.a1CreateVideoBannerExpandAd(url, cb);
    }, window.a1platform.initIframeAdController = function(target, domain, controller) {
        var iframe = $('<iframe src="' + domain + controller + '" style="position:fixed;opacity: 0;visibility: hidden; z-index: -1; width:0;height:0;" name="__a1_iframe_ad_controller"></iframe>').appendTo(target);
        iframe.on("load", function() {
            $(window).trigger("scroll");
        }), $(window).on("load", function() {
            $(window).trigger("scroll");
        }), $(window).on("scroll", function() {
            if (console.log("__a1_iframe_ad_controller", __a1_iframe_ad_controller), __a1_iframe_ad_controller && __a1_iframe_ad_controller.window) {
                var message = {
                    scroll_top: $(window).scrollTop(),
                    window_height: $(window).innerHeight(),
                    video_container_offset_top: $(target).offset().top,
                    video_container_height: $(target).height()
                };
                console.log("message", message), __a1_iframe_ad_controller.postMessage(message, domain);
            }
        }), iframe.on("load", function() {
            $(window).trigger("scroll");
        });
    };
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, parentEl = $("#__A1RectangleBanner"), bannerContainer = $('<div class="__a1-rectangle-banner-container"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-rectangle-banner-video-container __a1-rectangle-player"></div>').appendTo(bannerContainer), posterUrl = VAST_PARSER.getPosterUrl(), poster = $('<a href="#" class="__a1-poster __a1-active"><img src="' + posterUrl + '"></a>').prependTo(bannerContainer);
        poster.css({
            "background-image": "url(" + posterUrl + ")"
        });
        var soundAutoOn = VAST_PARSER.ControlPlayer.find("SoundAutoOn").text(), repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0, videoClicks = VAST_PARSER.getVideoClicks(), termsLink = VAST_PARSER.getTerms(), actionButton = VAST_PARSER.getActionButton();
        termsLink.visible && $('<a class="__a1-banner-terms-link">A1</a>').attr("href", termsLink.link).attr("target", "_blank").appendTo(bannerContainer),
        actionButton.visible && $('<a class="__a1-banner-action-button"></a>').attr("href", videoClicks.link).attr("target", "_blank").css({
            "font-size": actionButton.size + "px"
        }).html(actionButton.text).appendTo(bannerContainer);
        var iconPosition = VAST_PARSER.ControlPlayer.find("IconPosition").text();
        bannerContainer.addClass("__a1-pos-" + iconPosition);
        var firstPlay = !1, checkScroll = !0, isVideoPlaying = !1, videoCreated = !1;
        var checkAutoPlay = VAST_PARSER.ControlPlayer.find("AutoPlay").text(), getViewPlay = VAST_PARSER.getViewPlay();
        getViewPlay = parseInt(getViewPlay), window.a1RectanglePlayerScrolled = function(scrollTop, windowHeight, videoContainerOffsetTop, videoContainerHeight) {
            if (scrollTop = parseInt(scrollTop), 0 != checkScroll) if (scrollTop = parseFloat(scrollTop),
            windowHeight = parseFloat(windowHeight), videoContainerOffsetTop = parseFloat(videoContainerOffsetTop),
            videoContainerHeight = parseFloat(videoContainerHeight), 0 == isVideoPlaying) {
                if (videoContainerOffsetTop - windowHeight + videoContainerHeight * getViewPlay / 100 <= scrollTop && scrollTop <= videoContainerOffsetTop + videoContainerHeight * getViewPlay / 100) if (videoPlayer) {
                    if (0 == firstPlay && "N" == checkAutoPlay) return;
                    videoPlayer.play();
                } else !function() {
                    if (!videoCreated) {
                        videoCreated = !0;
                        var videoPlayerEl = $('<video id="videoPlayer" playsInline class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="100%" height="100%"></video>').appendTo(videoContainer);
                        ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoPlayerEl.attr("muted", !0),
                        0 == repeatLimit && videoPlayerEl.attr("loop", !0);
                        var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), soundValue = (VAST_PARSER.getProgressbarMove(),
                        VAST_PARSER.getSoundValue()), playerSize = VAST_PARSER.ControlPlayer.find("PlayerSize").text();
                        null != playerSize && null != playerSize && "" != playerSize || (playerSize = "300,250");
                        var playerSizes = playerSize.split(",");
                        parentEl.css({
                            width: playerSizes[0],
                            height: playerSizes[1]
                        }), videojs(videoPlayerEl[0], {
                            controls: !0,
                            autoplay: !1,
                            preload: "auto",
                            fluid: !0,
                            class: "video-js vjs-default-skin",
                            sources: {
                                type: videoType,
                                src: videoUrl
                            }
                        }).ready(function() {
                            videoPlayer = this;
                            var videoClicks = VAST_PARSER.VideoClicks;
                            if (2 == VAST_PARSER.ControlPlayer.find("PlayerClick").text() && videoClicks) {
                                var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                                poster.attr({
                                    href: clickThrough,
                                    target: "_blank"
                                }).on("click", function(e) {
                                    if (videoPlayer.paused()) return e.preventDefault(), videoPlayer.play(), !1;
                                    $.get(clickTracking), videoPlayer.pause(), checkScroll = !1;
                                });
                            } else poster.on("click", function(e) {
                                e.preventDefault(), videoPlayer.paused() ? videoPlayer.play() : (videoPlayer.pause(),
                                checkScroll = !1);
                            });
                            function onLoadedMetadata() {
                                console.log("loadedmetadata");
                                var timeAsset = VAST_PARSER.getTime();
                                if (timeAsset.visible) {
                                    var duration = videoPlayer.duration();
                                    duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                                    var timer = $('<div class="__a1-video-control-timer __a1-active"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset.position).appendTo(bannerContainer);
                                    function updateTimer(time) {
                                        time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                                        (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                                        var timeStr = time + "초";
                                        $(".__a1-time", timer).html(timeStr);
                                    }
                                    updateTimer(duration), setInterval(function() {
                                        updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                                    }, 1e3 / 24);
                                }
                                window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                                $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden"));
                            }
                            $(".vjs-progress-control", bannerContainer).remove(), $(".vjs-big-play-button", bannerContainer).remove(),
                            $(".vjs-fullscreen-control", bannerContainer).remove(), $(".vjs-volume-control", bannerContainer).remove(),
                            window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                            $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden")), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                            videoPlayer.responsiveControls({
                                controls: {
                                    remainingTimeDisplay: {
                                        mini: !1,
                                        small: !1
                                    },
                                    "vjs-resolution-button": {
                                        mini: !1
                                    },
                                    "vjs-language-container": {
                                        mini: !1
                                    }
                                }
                            }), videoPlayer.on("play", function(e) {
                                console.log(e), firstPlay || ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari ? videoPlayer.volume(0) : videoPlayer.volume(soundValue / 100),
                                VAST_PARSER.fireImpression()), firstPlay = !0, videoPlayer.controlBar.show(), videoPlayer.controlBar.volumePanel.show(),
                                videoPlayer.controlBar.volumePanel.volumeControl.show(), videoPlayer.controlBar.volumePanel.muteToggle.show(),
                                poster.removeClass("__a1-active");
                            }), videoPlayer.on("playing", function(e) {
                                $(".__a1-video-control-timer").addClass("__a1-active"), isVideoPlaying = checkScroll = !0;
                            }), videoPlayer.on("pause", function(e) {}), videoPlayer.on("ended", function(e) {
                                videoPlayCount++, 0 < repeatLimit && repeatLimit <= videoPlayCount ? (videoContainer.removeClass("__a1-active"),
                                videoPlayer.pause(), checkScroll = !1) : videoPlayer.play();
                            }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                                if (0 < videoPlayer.currentTime()) {
                                    var currentTime = Math.floor(videoPlayer.currentTime());
                                    currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                                    videoPlayer.prevCurrentTime = currentTime);
                                }
                            }), videoPlayer.on("useractive", function(e) {
                                console.log(e);
                            }), videoPlayer.on("userinactive", function(e) {
                                console.log(e);
                            }), videoPlayer.on("ended", function(e) {
                                console.log(e), VAST_PARSER.fireTrackingEventComplete();
                            }), window.a1platform.iframeMode && window.a1CheckScrollByLocalStorage(), $(window).trigger("scroll"),
                            bannerContainer.addClass("__a1-loaded"), $(".__a1-poster", bannerContainer).insertAfter($("video", bannerContainer));
                        });
                    }
                }();
            } else (scrollTop < videoContainerOffsetTop - windowHeight + videoContainerHeight * getViewPlay / 100 || videoContainerOffsetTop + videoContainerHeight * getViewPlay / 100 < scrollTop) && videoPlayer && (isVideoPlaying = !1,
            videoPlayer.pause(), console.log("videoPaused"));
        }, window.a1platform.iframeMode ? (window.addEventListener("storage", function(e) {
            window.a1CheckScrollByLocalStorage();
        }), window.a1CheckScrollByLocalStorage = function() {
            var scrollTop = localStorage.getItem("__a1_scroll_top"), windowHeight = localStorage.getItem("__a1_window_height"), videoContainerOffsetTop = localStorage.getItem("__a1_video_container_offset_top"), videoContainerHeight = localStorage.getItem("__a1_video_container_height");
            window.a1RectanglePlayerScrolled(scrollTop, windowHeight, videoContainerOffsetTop, videoContainerHeight),
            console.log("a1RectanglePlayerScrolled", scrollTop, windowHeight, videoContainerOffsetTop, videoContainerHeight);
        }, window.a1CheckScrollByLocalStorage()) : $(window).on("scroll", function() {
            var scrollTop = $(window).scrollTop(), windowHeight = $(window).innerHeight(), videoContainerOffsetTop = videoContainer.offset().top, videoContainerHeight = videoContainer.height();
            window.a1RectanglePlayerScrolled(scrollTop, windowHeight, videoContainerOffsetTop, videoContainerHeight);
        }).trigger("scroll");
    }
    window.a1CreateRectangleAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Rectangle Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res ? createAd(VAST_PARSER) : cb(res, error);
        });
    }, window.a1CreateRectangleAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, videoEl, parentEl = $("#__A1VideoBanner"), controlPlayerInfo = VAST_PARSER.ControlPlayer, videoBanner = $('<div class="__a1-video-banner-container"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-video-banner-video-container"></div>').appendTo(videoBanner), videoWrapper = $('<div class="__a1-video-banner-video-wrapper"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image"></div>').appendTo(videoContainer);
        !function() {
            videoEl = $('<video id="videoPlayer" playsInline muted class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="970" height="546"></video>').appendTo(videoWrapper);
            var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.getPosterUrl(), progressbarMove = VAST_PARSER.getProgressbarMove(), clickOption = VAST_PARSER.getClickOption(), LargeAdNextHour = Number(VAST_PARSER.getLargeAdNextHour()), videoClicks = VAST_PARSER.VideoClicks;
            videojs(videoEl[0], {
                controls: !0,
                autoplay: !1,
                preload: "auto",
                class: "video-js vjs-default-skin",
                sources: {
                    type: videoType,
                    src: videoUrl
                }
            }).ready(function() {
                if (videoClicks) {
                    var bannerPoster, clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                    "" != posterUrl ? (bannerPoster = $('<a class="__a1-video-banner-poster __a1-active"><img src="' + posterUrl + '"></a>').appendTo(videoWrapper)).css({
                        "background-image": "url(" + posterUrl + ")"
                    }) : bannerPoster = $('<a class="__a1-video-banner-poster __a1-active"></a>').appendTo(videoWrapper),
                    0 == clickOption && bannerPoster.attr({
                        href: clickThrough,
                        target: "_blank"
                    }).on("click", function(e) {
                        if (console.log("videoPlayer.paused : ", videoPlayer.paused), videoPlayer) {
                            if (videoPlayer.paused()) return videoPlayer.play(), e.preventDefault(), !1;
                            $.get(clickTracking), videoPlayer.pause();
                        }
                    }), 1 == clickOption && (bannerPoster.addClass("__a1-mouse-over-counter-action"),
                    bannerPoster.attr({}).on("click", function(e) {
                        if (console.log("videoPlayer.paused : ", videoPlayer.paused), videoPlayer) {
                            if (videoPlayer.paused()) return videoPlayer.play(), e.preventDefault(), !1;
                            mouseMoveCheckTF = 0, showFullScreenVideo(), videoPlayer.pause();
                        }
                    }));
                }
                videoPlayer = this, "Y" == VAST_PARSER.ControlPlayer.find("AutoPlay").text() && videoPlayer.play(),
                videoPlayer.responsiveControls({
                    controls: {
                        remainingTimeDisplay: {
                            mini: !1,
                            small: !1
                        },
                        "vjs-resolution-button": {
                            mini: !1
                        },
                        "vjs-language-container": {
                            mini: !1
                        }
                    }
                }), $(".vjs-progress-control", videoContainer).remove(), $(".vjs-big-play-button", videoContainer).remove();
                var extendedPlayerVASTurl = controlPlayerInfo.find("ExtendedPlayerVASTurl").text(), repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0, playInduceHide = controlPlayerInfo.find("PlayInduceHide").text(), playInduceImgUrl1 = controlPlayerInfo.find("PlayInduceImgUrl1").text(), playInduceImgUrl2 = controlPlayerInfo.find("PlayInduceImgUrl2").text(), playInduceImgChange = controlPlayerInfo.find("PlayInduceImgChange").text(), playInduceImgSize = controlPlayerInfo.find("PlayInduceImgSize").text(), playInducePosition = controlPlayerInfo.find("PlayInducePosition").text(), playInduceImgSizes = playInduceImgSize.split(","), playInducePositions = playInducePosition.split(",");
                console.log(videoPlayer.controlBar.fullscreenToggle);
                var fullscreenButton = $('<button class="__a1-mouse-over-counter-action vjs-fullscreen-control vjs-control vjs-button __a1-fullscreen-button" type="button" aria-live="polite" title="Fullscreen" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text">Fullscreen</span></button>').insertBefore(videoPlayer.controlBar.fullscreenToggle.el_);
                if (playInduceImgUrl1 && "" != playInduceImgUrl1) {
                    var playInduce = $('<span class="__a1-play-induce  __a1-mouse-over-counter-action"></span>').appendTo(videoWrapper);
                    $('<img src="' + playInduceImgUrl1 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img">').appendTo(playInduce);
                }
                function showFullScreenVideo() {
                    fullscreenButton.hasClass("__a1-active") || (mouseOverCountTick && (clearTimeout(mouseOverCountTick),
                    mouseOverCountTick = null, clearTimeout(mouseMoveCheck), mouseMoveCheck = null),
                    mouseOverCounter && mouseOverCounter.removeClass("__a1-active"), videoPlayer.pause(),
                    window.a1CreateVideoBannerLargeAd(fullscreenButton, extendedPlayerVASTurl, function() {}),
                    fullscreenButton.addClass("__a1-active"), 1 == clickOption && bannerPoster.removeClass("__a1-mouse-over-counter-action"));
                }
                playInduceImgUrl2 && "" != playInduceImgUrl2 && ($('<img src="' + playInduceImgUrl2 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img-over">').appendTo(playInduce),
                playInduceImgChange && 0 < playInduceImgChange && setInterval(function() {
                    playInduce.toggleClass("__a1-toggle");
                }, 1e3 * playInduceImgChange)), playInducePosition && playInduce.css({
                    right: playInducePositions[0] + "%",
                    bottom: playInducePositions[1] + "%",
                    width: playInduceImgSizes[0],
                    height: playInduceImgSizes[1]
                }), "Y" == playInduceHide && playInduce.addClass("__a1-hide"), playInduce.css({
                    cursor: "pointer"
                }).on("click", function(e) {
                    e.preventDefault(), showFullScreenVideo();
                }), fullscreenButton.on("click", function(e) {
                    e.preventDefault(), showFullScreenVideo();
                });
                var mouseOverCount = controlPlayerInfo.find("MouseOverCount").text();
                console.log("mouseOverCount", mouseOverCount);
                var mouseOverCountTick = null, mouseMoveCheck = null, mouseMoveCheckTF = 0;
                if (mouseOverCount && 0 < parseInt(mouseOverCount)) {
                    parseInt(mouseOverCount);
                    var mouseOverCounter = $('<div class="__a1-mouse-over-counter"><span class="__a1-track"><span class="__a1-bar"></span></span></div>').appendTo(videoBanner);
                    $(document).on("mouseenter", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseMoveCheck), mouseMoveCheck = null,
                        0 == mouseMoveCheckTF && (mouseMoveCheckTF = 1, clearTimeout(mouseOverCountTick),
                        mouseOverCountTick = null, mouseOverCounter.find(".__a1-bar").width(0), parseInt(mouseOverCount),
                        mouseOverCountTick = setTimeout(function() {
                            fullscreenButton.hasClass("__a1-active") || (mouseMoveCheckTF = 0, clearTimeout(mouseOverCountTick),
                            mouseOverCountTick = null, clearTimeout(mouseMoveCheck), mouseMoveCheck = null,
                            mouseOverCounter.removeClass("__a1-active"), showFullScreenVideo());
                        }, 1e3 * mouseOverCount), mouseOverCounter.find(".__a1-bar").css("width", 0).stop().animate({
                            width: "100%"
                        }, 1e3 * mouseOverCount), mouseOverCounter.addClass("__a1-active")));
                    }), $(document).on("mousemove", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || mouseOverCounter.css({
                            top: e.pageY - videoBanner.offset().top - 5,
                            left: e.pageX - videoBanner.offset().left
                        });
                    }), $(document).on("mouseleave", ".__a1-mouse-over-counter-action", function(e) {
                        mouseMoveCheck = setTimeout(function() {
                            mouseMoveCheckTF = 0, fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseOverCountTick),
                            mouseOverCountTick = null, mouseOverCounter.removeClass("__a1-active"));
                        }, 200);
                    });
                }
                var name, value, firstPlay = !1;
                function onLoadedMetadata() {
                    var timeAsset_visible = !0, timeAsset_position = 1;
                    if (console.log("timeAsset.visible", timeAsset_visible), timeAsset_visible) {
                        var duration = videoPlayer.duration();
                        duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                        var videoControlTimer = $('<div class="__a1-video-control-timer"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset_position).insertBefore(".vjs-volume-panel");
                        function updateTimer(time) {
                            time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                            (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                            var timeStr = (time = (time = "00" + time).substr(time.length - 2, 2)) + ":" + (duration = (duration = "00" + duration).substr(duration.length - 2, 2));
                            $(".__a1-time", videoControlTimer).html(timeStr);
                        }
                        updateTimer(duration), setInterval(function() {
                            updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                        }, 1e3 / 24);
                    }
                }
                videoPlayer.on("play", function(e) {
                    firstPlay || (videoPlayer.volume(0), VAST_PARSER.fireImpression(), videoPlayer.controlBar.hide(),
                    videoPlayer.controlBar.fullscreenToggle.hide(), "Y" == progressbarMove && videoPlayer.controlBar.progressControl.disable()),
                    firstPlay = !0;
                }), videoPlayer.on("playing", function(e) {
                    bannerPoster.removeClass("__a1-active"), 1 == clickOption && bannerPoster.addClass("__a1-mouse-over-counter-action"),
                    window.a1platform.mobile && ($(".vjs-volume-panel", videoContainer).removeClass("vjs-hidden").addClass("__a1-mobile-active"),
                    $(".vjs-mute-control", videoContainer).removeClass("vjs-hidden"), $(".vjs-volume-control", videoContainer).removeClass("vjs-hidden"));
                }), videoPlayer.on("pause", function(e) {
                    bannerPoster.addClass("__a1-active"), 1 == clickOption && bannerPoster.removeClass("__a1-mouse-over-counter-action");
                }), videoPlayer.on("ended", function(e) {
                    videoPlayCount++, console.log("repeatLimit", repeatLimit, videoPlayCount), 0 < repeatLimit && repeatLimit <= videoPlayCount ? (videoContainer.removeClass("__a1-active"),
                    videoPlayer.pause()) : videoPlayer.play();
                }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                    if (0 < videoPlayer.currentTime()) {
                        var currentTime = Math.floor(videoPlayer.currentTime());
                        currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                        videoPlayer.prevCurrentTime = currentTime);
                    }
                }), videoPlayer.on("useractive", function(e) {
                    console.log(e);
                }), videoPlayer.on("userinactive", function(e) {
                    console.log(e);
                }), videoPlayer.on("ended", function(e) {
                    console.log(e), VAST_PARSER.fireTrackingEventComplete();
                }), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                $(".__a1-video-banner-poster", videoContainer).insertAfter($("video", videoContainer)),
                "1" != (name = "LVB", (value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)")) ? value[2] : null) && (showFullScreenVideo(),
                function(name, value, exp) {
                    var date = new Date();
                    date.setHours(date.getHours() + exp), document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
                }("LVB", "1", LargeAdNextHour));
            });
        }();
    }
    window.a1CreateVideoBannerAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Video Banner Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res && createAd(VAST_PARSER), cb(res, error);
        });
    }, window.a1CreateVideoBannerAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, videoEl, parentEl = $("#__A1VideoBanner"), controlPlayerInfo = VAST_PARSER.ControlPlayer, videoBanner = $('<div class="__a1-video-banner-container"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-video-banner-video-container"></div>').appendTo(videoBanner), videoWrapper = $('<div class="__a1-video-banner-video-wrapper"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image"></div>').appendTo(videoContainer);
        !function() {
            videoEl = $('<video id="videoPlayer" playsInline muted class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="970" height="546"></video>').appendTo(videoWrapper);
            var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.getPosterUrl(), progressbarMove = VAST_PARSER.getProgressbarMove(), clickOption = VAST_PARSER.getClickOption(), LargeAdNextHour = Number(VAST_PARSER.getLargeAdNextHour()), videoClicks = VAST_PARSER.VideoClicks;
            videojs(videoEl[0], {
                controls: !0,
                autoplay: !1,
                preload: "auto",
                class: "video-js vjs-default-skin",
                sources: {
                    type: videoType,
                    src: videoUrl
                }
            }).ready(function() {
                if (videoClicks) {
                    var bannerPoster, clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                    "" != posterUrl ? (bannerPoster = $('<a class="__a1-video-banner-poster __a1-active"><img src="' + posterUrl + '"></a>').appendTo(videoWrapper)).css({
                        "background-image": "url(" + posterUrl + ")"
                    }) : bannerPoster = $('<a class="__a1-video-banner-poster __a1-active"></a>').appendTo(videoWrapper),
                    0 == clickOption && bannerPoster.attr({
                        href: clickThrough,
                        target: "_blank"
                    }).on("click", function(e) {
                        if (console.log("videoPlayer.paused : ", videoPlayer.paused), videoPlayer) {
                            if (videoPlayer.paused()) return videoPlayer.play(), e.preventDefault(), !1;
                            $.get(clickTracking), videoPlayer.pause();
                        }
                    }), 1 == clickOption && (bannerPoster.addClass("__a1-mouse-over-counter-action"),
                    bannerPoster.attr({}).on("click", function(e) {
                        if (console.log("videoPlayer.paused : ", videoPlayer.paused), videoPlayer) {
                            if (videoPlayer.paused()) return videoPlayer.play(), e.preventDefault(), !1;
                            mouseMoveCheckTF = 0, showFullScreenVideo(), videoPlayer.pause();
                        }
                    }));
                }
                videoPlayer = this, "Y" == VAST_PARSER.ControlPlayer.find("AutoPlay").text() && videoPlayer.play(),
                videoPlayer.responsiveControls({
                    controls: {
                        remainingTimeDisplay: {
                            mini: !1,
                            small: !1
                        },
                        "vjs-resolution-button": {
                            mini: !1
                        },
                        "vjs-language-container": {
                            mini: !1
                        }
                    }
                }), $(".vjs-progress-control", videoContainer).remove(), $(".vjs-big-play-button", videoContainer).remove();
                var extendedPlayerVASTurl = controlPlayerInfo.find("ExtendedPlayerVASTurl").text(), repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0, playInduceHide = controlPlayerInfo.find("PlayInduceHide").text(), playInduceImgUrl1 = controlPlayerInfo.find("PlayInduceImgUrl1").text(), playInduceImgUrl2 = controlPlayerInfo.find("PlayInduceImgUrl2").text(), playInduceImgChange = controlPlayerInfo.find("PlayInduceImgChange").text(), playInduceImgSize = controlPlayerInfo.find("PlayInduceImgSize").text(), playInducePosition = controlPlayerInfo.find("PlayInducePosition").text(), playInduceImgSizes = playInduceImgSize.split(","), playInducePositions = playInducePosition.split(",");
                console.log(videoPlayer.controlBar.fullscreenToggle);
                var fullscreenButton = $('<button class="__a1-mouse-over-counter-action vjs-fullscreen-control vjs-control vjs-button __a1-fullscreen-button" type="button" aria-live="polite" title="Fullscreen" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text">Fullscreen</span></button>').insertBefore(videoPlayer.controlBar.fullscreenToggle.el_);
                if (playInduceImgUrl1 && "" != playInduceImgUrl1) {
                    var playInduce = $('<span class="__a1-play-induce  __a1-mouse-over-counter-action"></span>').appendTo(videoWrapper);
                    $('<img src="' + playInduceImgUrl1 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img">').appendTo(playInduce);
                }
                function showFullScreenVideo() {
                    fullscreenButton.hasClass("__a1-active") || (mouseOverCountTick && (clearTimeout(mouseOverCountTick),
                    mouseOverCountTick = null, clearTimeout(mouseMoveCheck), mouseMoveCheck = null),
                    mouseOverCounter && mouseOverCounter.removeClass("__a1-active"), videoPlayer.pause(),
                    window.parent.postMessage({
                        name: "a1CreateVideoBannerLargeAd",
                        params: {
                            button: void 0,
                            url: extendedPlayerVASTurl,
                            cb: void 0
                        }
                    }, "*"), fullscreenButton.addClass("__a1-active"), 1 == clickOption && bannerPoster.removeClass("__a1-mouse-over-counter-action"));
                }
                playInduceImgUrl2 && "" != playInduceImgUrl2 && ($('<img src="' + playInduceImgUrl2 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img-over">').appendTo(playInduce),
                playInduceImgChange && 0 < playInduceImgChange && setInterval(function() {
                    playInduce.toggleClass("__a1-toggle");
                }, 1e3 * playInduceImgChange)), playInducePosition && playInduce.css({
                    right: playInducePositions[0] + "%",
                    bottom: playInducePositions[1] + "%",
                    width: playInduceImgSizes[0],
                    height: playInduceImgSizes[1]
                }), "Y" == playInduceHide && playInduce.addClass("__a1-hide"), playInduce.css({
                    cursor: "pointer"
                }).on("click", function(e) {
                    e.preventDefault(), showFullScreenVideo();
                }), fullscreenButton.on("click", function(e) {
                    e.preventDefault(), showFullScreenVideo();
                });
                var mouseOverCount = controlPlayerInfo.find("MouseOverCount").text();
                console.log("mouseOverCount", mouseOverCount);
                var mouseOverCountTick = null, mouseMoveCheck = null, mouseMoveCheckTF = 0;
                if (mouseOverCount && 0 < parseInt(mouseOverCount)) {
                    parseInt(mouseOverCount);
                    var mouseOverCounter = $('<div class="__a1-mouse-over-counter"><span class="__a1-track"><span class="__a1-bar"></span></span></div>').appendTo(videoBanner);
                    $(document).on("mouseenter", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseMoveCheck), mouseMoveCheck = null,
                        0 == mouseMoveCheckTF && (mouseMoveCheckTF = 1, clearTimeout(mouseOverCountTick),
                        mouseOverCountTick = null, mouseOverCounter.find(".__a1-bar").width(0), parseInt(mouseOverCount),
                        mouseOverCountTick = setTimeout(function() {
                            fullscreenButton.hasClass("__a1-active") || (mouseMoveCheckTF = 0, clearTimeout(mouseOverCountTick),
                            mouseOverCountTick = null, clearTimeout(mouseMoveCheck), mouseMoveCheck = null,
                            mouseOverCounter.removeClass("__a1-active"), showFullScreenVideo());
                        }, 1e3 * mouseOverCount), mouseOverCounter.find(".__a1-bar").css("width", 0).stop().animate({
                            width: "100%"
                        }, 1e3 * mouseOverCount), mouseOverCounter.addClass("__a1-active")));
                    }), $(document).on("mousemove", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || mouseOverCounter.css({
                            top: e.pageY - videoBanner.offset().top - 5,
                            left: e.pageX - videoBanner.offset().left
                        });
                    }), $(document).on("mouseleave", ".__a1-mouse-over-counter-action", function(e) {
                        mouseMoveCheck = setTimeout(function() {
                            mouseMoveCheckTF = 0, fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseOverCountTick),
                            mouseOverCountTick = null, mouseOverCounter.removeClass("__a1-active"));
                        }, 200);
                    });
                }
                var name, value, firstPlay = !1;
                function onLoadedMetadata() {
                    var timeAsset_visible = !0, timeAsset_position = 1;
                    if (console.log("timeAsset.visible", timeAsset_visible), timeAsset_visible) {
                        var duration = videoPlayer.duration();
                        duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                        var videoControlTimer = $('<div class="__a1-video-control-timer"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset_position).insertBefore(".vjs-volume-panel");
                        function updateTimer(time) {
                            time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                            (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                            var timeStr = (time = (time = "00" + time).substr(time.length - 2, 2)) + ":" + (duration = (duration = "00" + duration).substr(duration.length - 2, 2));
                            $(".__a1-time", videoControlTimer).html(timeStr);
                        }
                        updateTimer(duration), setInterval(function() {
                            updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                        }, 1e3 / 24);
                    }
                }
                videoPlayer.on("play", function(e) {
                    firstPlay || (videoPlayer.volume(0), VAST_PARSER.fireImpression(), videoPlayer.controlBar.hide(),
                    videoPlayer.controlBar.fullscreenToggle.hide(), "Y" == progressbarMove && videoPlayer.controlBar.progressControl.disable()),
                    firstPlay = !0;
                }), videoPlayer.on("playing", function(e) {
                    bannerPoster.removeClass("__a1-active"), 1 == clickOption && bannerPoster.addClass("__a1-mouse-over-counter-action"),
                    window.a1platform.mobile && ($(".vjs-volume-panel", videoContainer).removeClass("vjs-hidden").addClass("__a1-mobile-active"),
                    $(".vjs-mute-control", videoContainer).removeClass("vjs-hidden"), $(".vjs-volume-control", videoContainer).removeClass("vjs-hidden"));
                }), videoPlayer.on("pause", function(e) {
                    bannerPoster.addClass("__a1-active"), 1 == clickOption && bannerPoster.removeClass("__a1-mouse-over-counter-action");
                }), videoPlayer.on("ended", function(e) {
                    videoPlayCount++, console.log("repeatLimit", repeatLimit, videoPlayCount), 0 < repeatLimit && repeatLimit <= videoPlayCount ? (videoContainer.removeClass("__a1-active"),
                    videoPlayer.pause()) : videoPlayer.play();
                }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                    if (0 < videoPlayer.currentTime()) {
                        var currentTime = Math.floor(videoPlayer.currentTime());
                        currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                        videoPlayer.prevCurrentTime = currentTime);
                    }
                }), videoPlayer.on("useractive", function(e) {
                    console.log(e);
                }), videoPlayer.on("userinactive", function(e) {
                    console.log(e);
                }), videoPlayer.on("ended", function(e) {
                    console.log(e), VAST_PARSER.fireTrackingEventComplete(), nis_reload();
                }), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                $(".__a1-video-banner-poster", videoContainer).insertAfter($("video", videoContainer)),
                0 <= LargeAdNextHour && "1" != (name = "LVB", (value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)")) ? value[2] : null) && (showFullScreenVideo(),
                function(name, value, exp) {
                    var date = new Date();
                    date.setHours(date.getHours() + exp), document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
                }("LVB", "1", LargeAdNextHour));
            });
        }();
    }
    window.a1CreateVideoBannerIfAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Video Banner Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res && createAd(VAST_PARSER), cb(res, error);
        });
    }, window.a1CreateVideoBannerIfAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, videoEl, parentEl = $("#__A1VideoBanner_board"), controlPlayerInfo = VAST_PARSER.ControlPlayer, videoBanner = $('<div class="__a1-video-banner-container"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-video-banner-video-container"></div>').appendTo(videoBanner), videoWrapper = $('<div class="__a1-video-banner-video-wrapper-board"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image-board"></div>').appendTo(videoContainer);
        !function() {
            videoEl = $('<video id="videoPlayer" playsInline muted class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="970" height="546"></video>').appendTo(videoWrapper);
            var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.getPosterUrl(), progressbarMove = VAST_PARSER.getProgressbarMove(), clickOption = VAST_PARSER.getClickOption(), videoClicks = VAST_PARSER.VideoClicks;
            videojs(videoEl[0], {
                controls: !0,
                autoplay: !1,
                preload: "auto",
                class: "video-js vjs-default-skin",
                sources: {
                    type: videoType,
                    src: videoUrl
                }
            }).ready(function() {
                if (videoClicks) {
                    var bannerPoster, clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                    "" != posterUrl ? (bannerPoster = $('<a class="__a1-video-banner-poster __a1-active"><img src="' + posterUrl + '"></a>').appendTo(videoWrapper)).css({
                        "background-image": "url(" + posterUrl + ")"
                    }) : bannerPoster = $('<a class="__a1-video-banner-poster __a1-active"></a>').appendTo(videoWrapper),
                    0 == clickOption && bannerPoster.attr({
                        href: clickThrough,
                        target: "_blank"
                    }).on("click", function(e) {
                        if (console.log("videoPlayer.paused : ", videoPlayer.paused), videoPlayer) {
                            if (videoPlayer.paused()) return videoPlayer.play(), e.preventDefault(), !1;
                            $.get(clickTracking), videoPlayer.pause();
                        }
                    }), 1 == clickOption && (bannerPoster.addClass("__a1-mouse-over-counter-action"),
                    bannerPoster.attr({}).on("click", function(e) {
                        if (console.log("videoPlayer.paused : ", videoPlayer.paused), videoPlayer) {
                            if (videoPlayer.paused()) return videoPlayer.play(), e.preventDefault(), !1;
                            mouseMoveCheckTF = 0, showFullScreenVideo(), videoPlayer.pause();
                        }
                    }));
                }
                videoPlayer = this, "Y" == VAST_PARSER.ControlPlayer.find("AutoPlay").text() && videoPlayer.play(),
                videoPlayer.responsiveControls({
                    controls: {
                        remainingTimeDisplay: {
                            mini: !1,
                            small: !1
                        },
                        "vjs-resolution-button": {
                            mini: !1
                        },
                        "vjs-language-container": {
                            mini: !1
                        }
                    }
                }), $(".vjs-progress-control", videoContainer).remove(), $(".vjs-big-play-button", videoContainer).remove();
                var extendedPlayerVASTurl = controlPlayerInfo.find("ExtendedPlayerVASTurl").text(), repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0, playInduceHide = controlPlayerInfo.find("PlayInduceHide").text(), playInduceImgUrl1 = controlPlayerInfo.find("PlayInduceImgUrl1").text(), playInduceImgUrl2 = controlPlayerInfo.find("PlayInduceImgUrl2").text(), playInduceImgChange = controlPlayerInfo.find("PlayInduceImgChange").text(), playInduceImgSize = controlPlayerInfo.find("PlayInduceImgSize").text(), playInducePosition = controlPlayerInfo.find("PlayInducePosition").text(), playInduceImgSizes = playInduceImgSize.split(","), playInducePositions = playInducePosition.split(",");
                console.log(videoPlayer.controlBar.fullscreenToggle);
                var fullscreenButton = $('<button class="__a1-mouse-over-counter-action vjs-fullscreen-control vjs-control vjs-button __a1-fullscreen-button" type="button" aria-live="polite" title="Fullscreen" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text">Fullscreen</span></button>').insertBefore(videoPlayer.controlBar.fullscreenToggle.el_);
                if (playInduceImgUrl1 && "" != playInduceImgUrl1) {
                    var playInduce = $('<span class="__a1-play-induce  __a1-mouse-over-counter-action"></span>').appendTo(videoWrapper);
                    $('<img src="' + playInduceImgUrl1 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img">').appendTo(playInduce);
                }
                function showFullScreenVideo() {
                    fullscreenButton.hasClass("__a1-active") || (mouseOverCountTick && (clearTimeout(mouseOverCountTick),
                    mouseOverCountTick = null, clearTimeout(mouseMoveCheck), mouseMoveCheck = null),
                    mouseOverCounter && mouseOverCounter.removeClass("__a1-active"), videoPlayer.pause(),
                    window.parent.postMessage({
                        name: "a1CreateVideoBannerLargeAd",
                        params: {
                            button: void 0,
                            url: extendedPlayerVASTurl,
                            cb: void 0
                        }
                    }, "*"), fullscreenButton.addClass("__a1-active"), 1 == clickOption && bannerPoster.removeClass("__a1-mouse-over-counter-action"));
                }
                playInduceImgUrl2 && "" != playInduceImgUrl2 && ($('<img src="' + playInduceImgUrl2 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img-over">').appendTo(playInduce),
                playInduceImgChange && 0 < playInduceImgChange && setInterval(function() {
                    playInduce.toggleClass("__a1-toggle");
                }, 1e3 * playInduceImgChange)), playInducePosition && playInduce.css({
                    right: playInducePositions[0] + "%",
                    bottom: playInducePositions[1] + "%",
                    width: playInduceImgSizes[0],
                    height: playInduceImgSizes[1]
                }), "Y" == playInduceHide && playInduce.addClass("__a1-hide"), playInduce.css({
                    cursor: "pointer"
                }).on("click", function(e) {
                    e.preventDefault(), showFullScreenVideo();
                }), fullscreenButton.on("click", function(e) {
                    e.preventDefault(), showFullScreenVideo();
                });
                var mouseOverCount = controlPlayerInfo.find("MouseOverCount").text();
                console.log("mouseOverCount", mouseOverCount);
                var mouseOverCountTick = null, mouseMoveCheck = null, mouseMoveCheckTF = 0;
                if (mouseOverCount && 0 < parseInt(mouseOverCount)) {
                    parseInt(mouseOverCount);
                    var mouseOverCounter = $('<div class="__a1-mouse-over-counter"><span class="__a1-track"><span class="__a1-bar"></span></span></div>').appendTo(videoBanner);
                    $(document).on("mouseenter", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseMoveCheck), mouseMoveCheck = null,
                        0 == mouseMoveCheckTF && (mouseMoveCheckTF = 1, clearTimeout(mouseOverCountTick),
                        mouseOverCountTick = null, mouseOverCounter.find(".__a1-bar").width(0), parseInt(mouseOverCount),
                        mouseOverCountTick = setTimeout(function() {
                            fullscreenButton.hasClass("__a1-active") || (mouseMoveCheckTF = 0, clearTimeout(mouseOverCountTick),
                            mouseOverCountTick = null, clearTimeout(mouseMoveCheck), mouseMoveCheck = null,
                            mouseOverCounter.removeClass("__a1-active"), showFullScreenVideo());
                        }, 1e3 * mouseOverCount), mouseOverCounter.find(".__a1-bar").css("width", 0).stop().animate({
                            width: "100%"
                        }, 1e3 * mouseOverCount), mouseOverCounter.addClass("__a1-active")));
                    }), $(document).on("mousemove", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || mouseOverCounter.css({
                            top: e.pageY - videoBanner.offset().top - 5,
                            left: e.pageX - videoBanner.offset().left
                        });
                    }), $(document).on("mouseleave", ".__a1-mouse-over-counter-action", function(e) {
                        mouseMoveCheck = setTimeout(function() {
                            mouseMoveCheckTF = 0, fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseOverCountTick),
                            mouseOverCountTick = null, mouseOverCounter.removeClass("__a1-active"));
                        }, 200);
                    });
                }
                var firstPlay = !1;
                function onLoadedMetadata() {
                    var timeAsset_visible = !0, timeAsset_position = 1;
                    if (console.log("timeAsset.visible", timeAsset_visible), timeAsset_visible) {
                        var duration = videoPlayer.duration();
                        duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                        var videoControlTimer = $('<div class="__a1-video-control-timer"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset_position).insertBefore(".vjs-volume-panel");
                        function updateTimer(time) {
                            time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                            (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                            var timeStr = (time = (time = "00" + time).substr(time.length - 2, 2)) + ":" + (duration = (duration = "00" + duration).substr(duration.length - 2, 2));
                            $(".__a1-time", videoControlTimer).html(timeStr);
                        }
                        updateTimer(duration), setInterval(function() {
                            updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                        }, 1e3 / 24);
                    }
                }
                videoPlayer.on("play", function(e) {
                    firstPlay || (videoPlayer.volume(0), VAST_PARSER.fireImpression(), videoPlayer.controlBar.hide(),
                    videoPlayer.controlBar.fullscreenToggle.hide(), "Y" == progressbarMove && videoPlayer.controlBar.progressControl.disable()),
                    firstPlay = !0;
                }), videoPlayer.on("playing", function(e) {
                    bannerPoster.removeClass("__a1-active"), 1 == clickOption && bannerPoster.addClass("__a1-mouse-over-counter-action"),
                    window.a1platform.mobile && ($(".vjs-volume-panel", videoContainer).removeClass("vjs-hidden").addClass("__a1-mobile-active"),
                    $(".vjs-mute-control", videoContainer).removeClass("vjs-hidden"), $(".vjs-volume-control", videoContainer).removeClass("vjs-hidden"));
                }), videoPlayer.on("pause", function(e) {
                    bannerPoster.addClass("__a1-active"), 1 == clickOption && bannerPoster.removeClass("__a1-mouse-over-counter-action");
                }), videoPlayer.on("ended", function(e) {
                    videoPlayCount++, console.log("repeatLimit", repeatLimit, videoPlayCount), 0 < repeatLimit && repeatLimit <= videoPlayCount ? (videoContainer.removeClass("__a1-active"),
                    videoPlayer.pause()) : videoPlayer.play();
                }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                    if (0 < videoPlayer.currentTime()) {
                        var currentTime = Math.floor(videoPlayer.currentTime());
                        currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                        videoPlayer.prevCurrentTime = currentTime);
                    }
                }), videoPlayer.on("useractive", function(e) {
                    console.log(e);
                }), videoPlayer.on("userinactive", function(e) {
                    console.log(e);
                }), videoPlayer.on("ended", function(e) {
                    console.log(e), VAST_PARSER.fireTrackingEventComplete(), nis_reload();
                }), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                $(".__a1-video-banner-poster", videoContainer).insertAfter($("video", videoContainer));
            });
        }();
    }
    window.a1CreateVideoBannerIfBAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Video Banner Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res && createAd(VAST_PARSER), cb(res, error);
        });
    }, window.a1CreateVideoBannerIfBAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}(), function() {
    var videoPlayer, controllerButton = null, playerLoaded = !1, parentEl = $("#__A1VideoLargeBanner");
    window.a1CreateVideoBannerLargeAd = function(button, url, cb) {
        controllerButton = button;
        var VAST_PARSER = new A1_VAST("a1 Video Banner Large Ad").parser;
        0 == playerLoaded ? VAST_PARSER.load(url, function(res, error) {
            res && function(VAST_PARSER) {
                function closeAdLargeboard() {
                    try {
                        $("div.__a1-video-banner-large-video-container").removeClass("active"), $("div#__A1VideoLargeBanner_board").slideUp(500);
                        try {
                            videojs("videoPlayerLarge_board_html5_api").pause();
                        } catch (ex) {
                            console.log(ex);
                        }
                        $(controllerButton).removeClass("__a1-active"), null == window.videoPlayer ? document.getElementById("comAdBBSSubject_board").contentWindow.window.videoPlayer.player.play() : window.videoPlayer.player.play();
                    } catch (e) {
                        console.log(e);
                    }
                }
                closeAdLargeboard(), parentEl.slideUp(0);
                var controlPlayerInfo = VAST_PARSER.ControlPlayer, soundAutoOn = controlPlayerInfo.find("SoundAutoOn").text(), videoBanner = $('<div class="__a1-video-banner-large-container"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-video-banner-large-video-container"></div>').appendTo(videoBanner), videoWrapper = $('<div class="__a1-video-banner-large-video-wrapper"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image"></div>').appendTo(videoContainer), videoEl = null, videoPlayerEl = null;
                !function() {
                    videoEl = $('<video id="videoPlayerLarge" playsInline class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto"></video>').appendTo(videoWrapper);
                    var testc = videojs.getPlayers();
                    console.log(testc), console.log("window.a1platform.mobile ", window.a1platform.mobile),
                    ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoEl.attr("muted", !0);
                    videoPlayerEl = $("#videoPlayerLarge");
                    var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.getPosterUrl(), progressbarMove = VAST_PARSER.getProgressbarMove(), soundValue = VAST_PARSER.getSoundValue();
                    videoPlayerEl.attr({
                        poster: posterUrl
                    });
                    var videoClicks = VAST_PARSER.VideoClicks, posterUrl = VAST_PARSER.getPosterUrl();
                    if (videoClicks) {
                        var poster = $('<a href="#" class="__a1-poster __a1-active"><img src="' + posterUrl + '"></a>').prependTo(videoContainer);
                        poster.css({
                            "background-image": "url(" + posterUrl + ")"
                        });
                        var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                        poster.attr({
                            href: clickThrough,
                            target: "_blank"
                        }).on("click", function(e) {
                            $.get(clickTracking), videoPlayer && videoPlayer.pause();
                        });
                    }
                    videojs(videoPlayerEl[0], {
                        controls: !0,
                        autoplay: !1,
                        preload: "auto",
                        class: "video-js vjs-default-skin",
                        sources: {
                            type: videoType,
                            src: videoUrl
                        }
                    }).ready(function() {
                        playerLoaded = !0, (videoPlayer = this).play(), videoPlayer.responsiveControls({
                            controls: {
                                remainingTimeDisplay: {
                                    mini: !1,
                                    small: !1
                                },
                                "vjs-resolution-button": {
                                    mini: !1
                                },
                                "vjs-language-container": {
                                    mini: !1
                                }
                            }
                        });
                        var firstPlay = !1;
                        videoPlayer.on("play", function(e) {
                            console.log(e), closeAdLargeboard(), firstPlay || (videoPlayer.volume(soundValue / 100),
                            ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoPlayer.volume(0),
                            VAST_PARSER.fireImpression()), firstPlay = !0, "N" == progressbarMove && videoPlayer.controlBar.progressControl.disable(),
                            poster.removeClass("__a1-active"), clearTimeout(void 0);
                        }), videoPlayer.on("playing", function(e) {
                            window.a1platform.mobile && ($(".vjs-volume-panel", videoContainer).removeClass("vjs-hidden").addClass("__a1-mobile-active"),
                            $(".vjs-mute-control", videoContainer).removeClass("vjs-hidden"), $(".vjs-volume-control", videoContainer).removeClass("vjs-hidden"));
                        }), videoPlayer.on("pause", function(e) {});
                        var playerRetain = controlPlayerInfo.find("PlayerRetain").text();
                        function onLoadedMetadata() {}
                        videoPlayer.on("ended", function(e) {
                            console.log("ended", e), videoPlayer.load(), "N" == playerRetain && btnClose.trigger("click");
                        }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                            if (0 < videoPlayer.currentTime()) {
                                var currentTime = Math.floor(videoPlayer.currentTime());
                                currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                                videoPlayer.prevCurrentTime = currentTime);
                            }
                        }), videoPlayer.on("useractive", function(e) {
                            console.log(e);
                        }), videoPlayer.on("userinactive", function(e) {
                            console.log(e);
                        }), videoPlayer.on("ended", function(e) {
                            console.log(e), VAST_PARSER.fireTrackingEventComplete();
                        }), videoPlayer.readyState() < 1 && videoPlayer.one("loadedmetadata", onLoadedMetadata);
                        var playInduceTextUrl = controlPlayerInfo.find("PlayInduceTextUrl").text(), playInduceImgUrl1 = controlPlayerInfo.find("PlayInduceImgUrl1").text(), playInduce = $('<div class="__a1-add-img-webzine"></div>').appendTo(videoContainer);
                        $('<img src="' + playInduceImgUrl1 + '" class="__a1-img-webzine">').appendTo(playInduce),
                        $('<div class="__a1-add-text">' + playInduceTextUrl + "</div>").appendTo(playInduce),
                        $(".__a1-img-webzine").mouseenter(function() {
                            $(".__a1-add-text").css("display", "block");
                        }), $(".__a1-img-webzine").mouseleave(function() {
                            $(".__a1-add-text").css("display", "none");
                        });
                    });
                    var btnClose = $('<a href="#" class="__a1-btn-close">&times;</a>').appendTo(videoContainer);
                    btnClose.on("click", function(e) {
                        !function(e) {
                            e.preventDefault(), videoContainer.removeClass("active"), parentEl.slideUp(500),
                            videoPlayer.pause(), $(controllerButton).removeClass("__a1-active"), null == window.videoPlayer ? document.getElementById("comAdBBSSubject").contentWindow.window.postMessage({
                                name: "comAdBBSSubjectPlay"
                            }, "*") : window.videoPlayer.player.play();
                        }(e);
                    }), parentEl.slideDown(500), $(".__a1-poster", videoContainer).insertAfter($("video", videoContainer));
                }();
            }(VAST_PARSER), cb && "function" == typeof cb && cb(res, error);
        }) : (parentEl.slideDown(500), videoPlayer.currentTime(0), videoPlayer.play());
    };
}(), function() {
    var videoPlayer, controllerButton = null, playerLoaded = !1, parentEl = $("#__A1VideoLargeBanner_board");
    window.a1CreateVideoBannerLargeBAd = function(button, url, cb) {
        controllerButton = button;
        var VAST_PARSER = new A1_VAST("a1 Video Banner Large Ad").parser;
        0 == playerLoaded ? VAST_PARSER.load(url, function(res, error) {
            res && function(VAST_PARSER) {
                function closeAdLarge() {
                    try {
                        $("div.__a1-video-banner-large-video-container").removeClass("active"), $("div#__A1VideoLargeBanner").slideUp(500);
                        try {
                            videojs("videoPlayerLarge_html5_api").pause();
                        } catch (ex) {
                            console.log(ex);
                        }
                        $(controllerButton).removeClass("__a1-active"), null == window.videoPlayer ? document.getElementById("comAdBBSSubject").contentWindow.window.videoPlayer.player.play() : window.videoPlayer.player.play();
                    } catch (e) {
                        console.log(e);
                    }
                }
                closeAdLarge(), parentEl.slideUp(0);
                var controlPlayerInfo = VAST_PARSER.ControlPlayer, soundAutoOn = controlPlayerInfo.find("SoundAutoOn").text(), videoBanner = $('<div class="__a1-video-banner-large-container"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-video-banner-large-video-container"></div>').appendTo(videoBanner), videoWrapper = $('<div class="__a1-video-banner-large-video-wrapper"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image"></div>').appendTo(videoContainer), videoEl = null, videoPlayerEl = null;
                !function() {
                    videoEl = $('<video id="videoPlayerLarge_board" playsInline class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto"></video>').appendTo(videoWrapper);
                    var testc = videojs.getPlayers();
                    console.log(testc), console.log("window.a1platform.mobile ", window.a1platform.mobile),
                    ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoEl.attr("muted", !0);
                    videoPlayerEl = $("#videoPlayerLarge_board");
                    var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.getPosterUrl(), progressbarMove = VAST_PARSER.getProgressbarMove(), soundValue = VAST_PARSER.getSoundValue();
                    videoPlayerEl.attr({
                        poster: posterUrl
                    });
                    var videoClicks = VAST_PARSER.VideoClicks, posterUrl = VAST_PARSER.getPosterUrl();
                    if (videoClicks) {
                        var poster = $('<a href="#" class="__a1-poster __a1-active"><img src="' + posterUrl + '"></a>').prependTo(videoContainer);
                        poster.css({
                            "background-image": "url(" + posterUrl + ")"
                        });
                        var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                        poster.attr({
                            href: clickThrough,
                            target: "_blank"
                        }).on("click", function(e) {
                            $.get(clickTracking), videoPlayer && videoPlayer.pause();
                        });
                    }
                    videojs(videoPlayerEl[0], {
                        controls: !0,
                        autoplay: !1,
                        preload: "auto",
                        class: "video-js vjs-default-skin",
                        sources: {
                            type: videoType,
                            src: videoUrl
                        }
                    }).ready(function() {
                        playerLoaded = !0, (videoPlayer = this).play(), videoPlayer.responsiveControls({
                            controls: {
                                remainingTimeDisplay: {
                                    mini: !1,
                                    small: !1
                                },
                                "vjs-resolution-button": {
                                    mini: !1
                                },
                                "vjs-language-container": {
                                    mini: !1
                                }
                            }
                        });
                        var firstPlay = !1;
                        videoPlayer.on("play", function(e) {
                            console.log(e), closeAdLarge(), firstPlay || (videoPlayer.volume(soundValue / 100),
                            ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoPlayer.volume(0),
                            VAST_PARSER.fireImpression()), firstPlay = !0, "N" == progressbarMove && videoPlayer.controlBar.progressControl.disable(),
                            poster.removeClass("__a1-active"), clearTimeout(void 0);
                        }), videoPlayer.on("playing", function(e) {
                            window.a1platform.mobile && ($(".vjs-volume-panel", videoContainer).removeClass("vjs-hidden").addClass("__a1-mobile-active"),
                            $(".vjs-mute-control", videoContainer).removeClass("vjs-hidden"), $(".vjs-volume-control", videoContainer).removeClass("vjs-hidden"));
                        }), videoPlayer.on("pause", function(e) {});
                        var playerRetain = controlPlayerInfo.find("PlayerRetain").text();
                        function onLoadedMetadata() {}
                        videoPlayer.on("ended", function(e) {
                            console.log("ended", e), videoPlayer.load(), "N" == playerRetain && btnClose.trigger("click");
                        }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                            if (0 < videoPlayer.currentTime()) {
                                var currentTime = Math.floor(videoPlayer.currentTime());
                                currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                                videoPlayer.prevCurrentTime = currentTime);
                            }
                        }), videoPlayer.on("useractive", function(e) {
                            console.log(e);
                        }), videoPlayer.on("userinactive", function(e) {
                            console.log(e);
                        }), videoPlayer.on("ended", function(e) {
                            console.log(e), VAST_PARSER.fireTrackingEventComplete();
                        }), videoPlayer.readyState() < 1 && videoPlayer.one("loadedmetadata", onLoadedMetadata);
                        var playInduceTextUrl = controlPlayerInfo.find("PlayInduceTextUrl").text(), playInduceImgUrl1 = controlPlayerInfo.find("PlayInduceImgUrl1").text(), playInduce = $('<div class="__a1-add-img-board"></div>').appendTo(videoContainer);
                        $('<img src="' + playInduceImgUrl1 + '" class="__a1-img-board">').appendTo(playInduce),
                        $('<div class="__a1-add-text">' + playInduceTextUrl + "</div>").appendTo(playInduce),
                        $(".__a1-img-board").mouseenter(function() {
                            $(".__a1-add-text").css("display", "block");
                        }), $(".__a1-img-board").mouseleave(function() {
                            $(".__a1-add-text").css("display", "none");
                        });
                    });
                    var btnClose = $('<a href="#" class="__a1-btn-close">&times;</a>').appendTo(videoContainer);
                    btnClose.on("click", function(e) {
                        !function(e) {
                            e.preventDefault(), videoContainer.removeClass("active"), parentEl.slideUp(500),
                            videoPlayer.pause(), $(controllerButton).removeClass("__a1-active"), null == window.videoPlayer ? document.getElementById("comAdBBSSubject_board").contentWindow.window.videoPlayer.player.play() : window.videoPlayer.player.play();
                        }(e);
                    }), parentEl.slideDown(500), $(".__a1-poster", videoContainer).insertAfter($("video", videoContainer));
                }();
            }(VAST_PARSER), cb(res, error);
        }) : (parentEl.slideDown(500), videoPlayer.currentTime(0), videoPlayer.play());
    };
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, parentEl = $("#__A1TopBanner"), controlPlayerInfo = VAST_PARSER.ControlPlayer, companionInfo = VAST_PARSER.Companion, BannerImgSrc = companionInfo.find("StaticResource").text(), bannerClickSrc = companionInfo.find("CompanionClickThrough").text(), playInduceImgUrl1 = controlPlayerInfo.find("PlayInduceImgUrl1").text(), playInduceImgUrl2 = controlPlayerInfo.find("PlayInduceImgUrl2").text(), playInduceImgChange = controlPlayerInfo.find("PlayInduceImgChange").text(), playInduceImgSize = controlPlayerInfo.find("PlayInduceImgSize").text(), playInducePosition = controlPlayerInfo.find("PlayInducePosition").text(), AdDisplayType = controlPlayerInfo.find("AdDisplayType").text(), soundAutoOn = controlPlayerInfo.find("SoundAutoOn").text(), bannerClick = controlPlayerInfo.find("BannerClick").text(), playerMaximumHeight = controlPlayerInfo.find("PlayerMaximumHeight").text(), bannerWidth = companionInfo.attr("width"), bannerHeight = companionInfo.attr("height"), responsive = companionInfo.attr("responsive");
        bannerWidth = parseInt(bannerWidth), bannerHeight = parseInt(bannerHeight), 2 == AdDisplayType && parentEl.addClass("__a1-under-video");
        var topBanner = $('<div class="__a1-top-banner-container"></div>').appendTo(parentEl), topBannerA = $('<a class="__a1-mouse-over-counter-action"></a>').attr({
            href: bannerClickSrc,
            target: "_blank"
        }).appendTo(topBanner), bannerImg = $("<img>").attr("src", BannerImgSrc).appendTo(topBannerA);
        2 == bannerClick && topBannerA.on("click", function(e) {
            e.preventDefault(), btnVideoLink.trigger("click");
        });
        var playInduceImgSizes = playInduceImgSize.split(","), btnVideoLink = $('<a class="__a1-mouse-over-counter-action __a1-top-banner-video-link  __a1-animated __a1-infinite __a1-anim-bounce" href="#"></a>').appendTo(topBanner);
        playInduceImgUrl1 && "" != playInduceImgUrl1 && $('<img src="' + playInduceImgUrl1 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img">').appendTo(btnVideoLink),
        playInduceImgUrl2 && "" != playInduceImgUrl2 && ($('<img src="' + playInduceImgUrl2 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img-over">').appendTo(btnVideoLink),
        playInduceImgChange && 0 < playInduceImgChange && setInterval(function() {
            btnVideoLink.toggleClass("__a1-toggle");
        }, 1e3 * playInduceImgChange)), playInducePosition && btnVideoLink.css({
            right: playInducePosition,
            width: playInduceImgSizes[0],
            height: playInduceImgSizes[1]
        }), btnVideoLink.on("click", function(e) {
            e.preventDefault(), console.log($(this).closest(".__a1-top-banner-container")),
            $(this).closest(".__a1-top-banner").find(".__a1-top-banner-video-container").addClass("__a1-active").slideDown(500),
            clearTimeout(mouseOverCountTick), mouseOverCountTick = null, mouseOverCounter.removeClass("__a1-active"),
            videoPlayer ? videoPlayer.play() : function() {
                videoEl = $('<video id="videoPlayer" playsInline class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="970" height="546"></video>').appendTo(videoWrapper),
                console.log("window.a1platform.mobile ", window.a1platform.mobile), ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoEl.attr("muted", !0),
                videoPlayerEl = $("#videoPlayer");
                var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.getPosterUrl(), progressbarMove = VAST_PARSER.getProgressbarMove(), soundValue = VAST_PARSER.getSoundValue();
                videoPlayerEl.attr({
                    poster: posterUrl
                });
                var videoClicks = VAST_PARSER.VideoClicks, playerClick = VAST_PARSER.ControlPlayer.find("PlayerClick").text(), poster = $('<a href="#" class="__a1-poster __a1-active"><img src="' + posterUrl + '"></a>').prependTo(videoContainer);
                if (poster.css({
                    "background-image": "url(" + posterUrl + ")"
                }), 2 == playerClick && videoClicks) {
                    var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                    poster.attr({
                        href: clickThrough,
                        target: "_blank"
                    }).on("click", function(e) {
                        $.get(clickTracking), videoPlayer && (videoPlayer.muted() || 0 == videoPlayer.volume()) && videoPlayer.pause();
                    });
                } else poster.on("click", function(e) {
                    e.preventDefault(), videoPlayer.paused() ? videoPlayer.play() : videoPlayer.pause();
                });
                if (videojs(videoPlayerEl[0], {
                    controls: !0,
                    autoplay: !1,
                    preload: "auto",
                    class: "video-js vjs-default-skin",
                    sources: {
                        type: videoType,
                        src: videoUrl
                    }
                }).ready(function() {
                    (videoPlayer = this).play(), videoPlayer.responsiveControls({
                        controls: {
                            remainingTimeDisplay: {
                                mini: !1,
                                small: !1
                            },
                            "vjs-resolution-button": {
                                mini: !1
                            },
                            "vjs-language-container": {
                                mini: !1
                            }
                        }
                    });
                    var firstPlay = !1;
                    videoPlayer.on("play", function(e) {
                        console.log(e), firstPlay || ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari ? videoPlayer.volume(0) : videoPlayer.volume(soundValue / 100),
                        VAST_PARSER.fireImpression()), firstPlay = !0, "N" == progressbarMove && videoPlayer.controlBar.progressControl.disable(),
                        poster.removeClass("__a1-active");
                    }), videoPlayer.on("playing", function(e) {
                        window.a1platform.mobile && ($(".vjs-volume-panel", videoContainer).removeClass("vjs-hidden").addClass("__a1-mobile-active"),
                        $(".vjs-mute-control", videoContainer).removeClass("vjs-hidden"), $(".vjs-volume-control", videoContainer).removeClass("vjs-hidden"));
                    }), videoPlayer.on("pause", function(e) {});
                    var playerRetain = controlPlayerInfo.find("PlayerRetain").text();
                    function onLoadedMetadata() {}
                    videoPlayer.on("ended", function(e) {
                        console.log("ended", e), videoPlayer.load(), "N" == playerRetain && (videoContainer.removeClass("__a1-active"),
                        videoContainer.slideUp(500));
                    }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                        if (0 < videoPlayer.currentTime()) {
                            var currentTime = Math.floor(videoPlayer.currentTime());
                            currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                            videoPlayer.prevCurrentTime = currentTime);
                        }
                    }), videoPlayer.on("useractive", function(e) {
                        console.log(e);
                    }), videoPlayer.on("userinactive", function(e) {
                        console.log(e);
                    }), videoPlayer.on("ended", function(e) {
                        console.log(e), VAST_PARSER.fireTrackingEventComplete();
                    }), videoPlayer.readyState() < 1 && videoPlayer.one("loadedmetadata", onLoadedMetadata);
                }), "Y" == VAST_PARSER.ControlPlayer.find("CloseButton").text()) {
                    var btnClose = $('<a href="#" class="__a1-btn-close">&times;</a>').appendTo(videoContainer);
                    btnClose.on("click", function(e) {
                        e.preventDefault(), videoContainer.removeClass("__a1-active"), videoContainer.slideUp(500),
                        videoPlayer.pause();
                    });
                }
                $(".__a1-poster", videoContainer).insertAfter($("video", videoContainer));
            }();
        });
        var videoContainer = $('<div class="__a1-top-banner-video-container"></div>').insertBefore(topBanner), videoWrapper = $('<div class="__a1-top-banner-video-wrapper"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image"></div>').appendTo(videoContainer);
        console.log("responsive", responsive), "false" == responsive ? (topBanner.css({
            width: bannerWidth + "px",
            height: bannerHeight + "px"
        }), bannerImg.attr({
            width: bannerWidth + "px",
            height: bannerHeight + "px"
        })) : (0 < playerMaximumHeight && videoWrapper.css({
            "max-height": playerMaximumHeight + "px"
        }), console.log("playerMaximumHeight", playerMaximumHeight)), videoContainer.slideUp(0);
        var videoEl = null, videoPlayerEl = null;
        var bannerMouseOverCount = controlPlayerInfo.find("BannerMouseOverCount").text(), playInduceMouseOverCount = controlPlayerInfo.find("PlayInduceMouseOverCount").text();
        topBannerA.attr("data-mouse-over-count", bannerMouseOverCount), btnVideoLink.attr("data-mouse-over-count", playInduceMouseOverCount),
        0 == bannerMouseOverCount && topBannerA.removeClass("__a1-mouse-over-counter-action"),
        0 == playInduceMouseOverCount && btnVideoLink.removeClass("__a1-mouse-over-counter-action"),
        console.log("bannerMouseOverCount", bannerMouseOverCount), console.log("playInduceMouseOverCount", playInduceMouseOverCount);
        var mouseOverCountTick = null, mouseOverCounter = $('<div class="__a1-mouse-over-counter"><span class="__a1-track"><span class="__a1-bar"></span></span></div>').appendTo(topBannerA);
        $(document).on("mouseenter", ".__a1-mouse-over-counter-action", function(e) {
            if (!videoContainer.hasClass("__a1-active")) {
                clearTimeout(mouseOverCountTick), mouseOverCountTick = null, mouseOverCounter.find(".__a1-bar").width(0);
                var mouseOverCount = $(this).attr("data-mouse-over-count");
                parseInt(mouseOverCount), mouseOverCountTick = setTimeout(function() {
                    !function() {
                        if (videoContainer.hasClass("__a1-active")) return;
                        clearTimeout(mouseOverCountTick), mouseOverCountTick = null, mouseOverCounter.removeClass("__a1-active"),
                        btnVideoLink.trigger("click");
                    }();
                }, 1e3 * mouseOverCount), mouseOverCounter.find(".__a1-bar").css("width", 0).stop().animate({
                    width: "100%"
                }, 1e3 * mouseOverCount), mouseOverCounter.addClass("__a1-active");
            }
        }), $(document).on("mousemove", ".__a1-mouse-over-counter-action", function(e) {
            videoContainer.hasClass("__a1-active") || mouseOverCounter.css({
                top: e.pageY - topBannerA.offset().top - 5,
                left: e.pageX - topBannerA.offset().left
            });
        }), $(document).on("mouseleave", ".__a1-mouse-over-counter-action", function(e) {
            videoContainer.hasClass("__a1-active") || (clearTimeout(mouseOverCountTick), mouseOverCountTick = null,
            mouseOverCounter.removeClass("__a1-active"));
        });
    }
    window.a1CreateVideoBannerTopAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Video Banner Top Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res && ("VideoBannerTop" == VAST_PARSER.Companion.attr("goodsId") ? createAd(VAST_PARSER) : $("#__A1TopBanner").remove()),
            cb(res, error);
        });
    }, window.a1CreateVideoBannerTopAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, videoEl, parentEl = $("#__A1VideoExpandBanner"), controlPlayerInfo = VAST_PARSER.ControlPlayer, videoBanner = $('<div class="__a1-video-e-banner-container"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-video-e-banner-video-container"></div>').appendTo(videoBanner), videoWrapper = $('<div class="__a1-video-e-banner-video-wrapper"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image"></div>').appendTo(videoContainer), btnClose = $('<div class="__a1-btn-close __a1-hide">&times;</div>').appendTo(videoContainer);
        !function() {
            videoEl = $('<video id="videoPlayer" playsInline muted class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="970" height="546"></video>').appendTo(videoWrapper);
            var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.getPosterUrl(), progressbarMove = VAST_PARSER.getProgressbarMove(), expandWidthSizeValue = VAST_PARSER.getExpandWidthSizeValue(), videoClicks = VAST_PARSER.VideoClicks;
            if (videoClicks) {
                var bannerPoster = $('<a href="#" class="__a1-video-e-banner-poster __a1-active"><img src="' + posterUrl + '"></a>').appendTo(videoWrapper);
                bannerPoster.css({
                    "background-image": "url(" + posterUrl + ")"
                });
                var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                bannerPoster.attr({
                    href: clickThrough,
                    target: "_blank"
                }).on("click", function(e) {
                    if (console.log("videoPlayer.paused : ", videoPlayer.paused), videoPlayer) {
                        if (videoPlayer.paused()) return videoPlayer.play(), e.preventDefault(), !1;
                        $.get(clickTracking), (videoPlayer.muted() || 0 == videoPlayer.volume()) && videoPlayer.pause();
                    }
                });
            }
            videojs(videoEl[0], {
                controls: !0,
                autoplay: !1,
                preload: "auto",
                class: "video-js vjs-default-skin",
                sources: {
                    type: videoType,
                    src: videoUrl
                }
            }).ready(function() {
                videoPlayer = this, "Y" == VAST_PARSER.ControlPlayer.find("AutoPlay").text() && videoPlayer.play(),
                videoPlayer.responsiveControls({
                    controls: {
                        remainingTimeDisplay: {
                            mini: !1,
                            small: !1,
                            default: !1
                        },
                        "vjs-resolution-button": {
                            mini: !1
                        },
                        "vjs-language-container": {
                            mini: !1
                        }
                    }
                }), $(".vjs-progress-control", videoContainer).remove(), $(".vjs-big-play-button", videoContainer).remove(),
                controlPlayerInfo.find("ExtendedPlayerVASTurl").text();
                var repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0, playInduceHide = controlPlayerInfo.find("PlayInduceHide").text(), playInduceImgUrl1 = controlPlayerInfo.find("PlayInduceImgUrl1").text(), playInduceImgUrl2 = controlPlayerInfo.find("PlayInduceImgUrl2").text(), playInduceImgChange = controlPlayerInfo.find("PlayInduceImgChange").text(), playInduceImgSize = controlPlayerInfo.find("PlayInduceImgSize").text(), playInducePosition = controlPlayerInfo.find("PlayInducePosition").text(), playInduceImgSizes = playInduceImgSize.split(","), playInducePositions = playInducePosition.split(",");
                console.log(videoPlayer.controlBar.fullscreenToggle);
                var fullscreenButton = $('<button class="__a1-mouse-over-counter-action vjs-fullscreen-control vjs-control vjs-button __a1-fullscreen-button" type="button" aria-live="polite" title="Fullscreen" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text">Fullscreen</span></button>').insertBefore(videoPlayer.controlBar.fullscreenToggle.el_);
                if (playInduceImgUrl1 && "" != playInduceImgUrl1) {
                    var playInduce = $('<span class="__a1-play-induce  __a1-mouse-over-counter-action"></span>').appendTo(videoWrapper);
                    $('<img src="' + playInduceImgUrl1 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img">').appendTo(playInduce);
                }
                function showActionScreenVideo() {
                    fullscreenButton.hasClass("__a1-active") || (mouseOverCountTick && (clearTimeout(mouseOverCountTick),
                    mouseOverCountTick = null), mouseOverCounter && mouseOverCounter.removeClass("__a1-active"),
                    $(videoContainer).animate({
                        width: expandWidthSizeValue + "px",
                        marginLeft: "-=" + calculatedWidth + "px"
                    }, 400), playInduce.addClass("__a1-hide"), videoPlayer.paused() && videoPlayer.play(),
                    fullscreenButton.addClass("__a1-active"), btnClose.removeClass("__a1-hide"));
                }
                playInduceImgUrl2 && "" != playInduceImgUrl2 && ($('<img src="' + playInduceImgUrl2 + '" width="' + playInduceImgSizes[0] + '" height="' + playInduceImgSizes[1] + '" class="__a1-img-over">').appendTo(playInduce),
                playInduceImgChange && 0 < playInduceImgChange && setInterval(function() {
                    playInduce.toggleClass("__a1-toggle");
                }, 1e3 * playInduceImgChange)), playInducePosition && playInduce.css({
                    right: playInducePositions[0] + "%",
                    bottom: playInducePositions[1] + "%",
                    width: playInduceImgSizes[0],
                    height: playInduceImgSizes[1]
                }), "Y" == playInduceHide && playInduce.addClass("__a1-hide"), playInduce.css({
                    cursor: "pointer"
                }).on("click", function(e) {
                    e.preventDefault(), showActionScreenVideo();
                }), fullscreenButton.on("click", function(e) {
                    e.preventDefault(), showActionScreenVideo();
                });
                var defaultWidth = $(videoContainer).width(), calculatedWidth = expandWidthSizeValue - defaultWidth;
                btnClose.on("click", function(e) {
                    fullscreenButton.hasClass("__a1-active") && (fullscreenButton.removeClass("__a1-active"),
                    btnClose.addClass("__a1-hide"), $(videoContainer).animate({
                        width: defaultWidth + "px",
                        marginLeft: "+=" + calculatedWidth + "px"
                    }, 400), playInduce.removeClass("__a1-hide"));
                });
                var mouseOverCount = controlPlayerInfo.find("MouseOverCount").text();
                console.log("mouseOverCount", mouseOverCount);
                var mouseOverCountTick = null;
                if (mouseOverCount && 0 < parseInt(mouseOverCount)) {
                    parseInt(mouseOverCount);
                    var mouseOverCounter = $('<div class="__a1-mouse-over-counter"><span class="__a1-track"><span class="__a1-bar"></span></span></div>').appendTo(videoBanner);
                    $(document).on("mouseenter", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseOverCountTick), mouseOverCountTick = null,
                        mouseOverCounter.find(".__a1-bar").width(0), parseInt(mouseOverCount), mouseOverCountTick = setTimeout(function() {
                            fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseOverCountTick), mouseOverCountTick = null,
                            mouseOverCounter.removeClass("__a1-active"), showActionScreenVideo());
                        }, 1e3 * mouseOverCount), mouseOverCounter.find(".__a1-bar").css("width", 0).stop().animate({
                            width: "100%"
                        }, 1e3 * mouseOverCount), mouseOverCounter.addClass("__a1-active"));
                    }), $(document).on("mousemove", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || mouseOverCounter.css({
                            top: e.pageY - videoBanner.offset().top - 5,
                            left: e.pageX - videoBanner.offset().left
                        });
                    }), $(document).on("mouseleave", ".__a1-mouse-over-counter-action", function(e) {
                        fullscreenButton.hasClass("__a1-active") || (clearTimeout(mouseOverCountTick), mouseOverCountTick = null,
                        mouseOverCounter.removeClass("__a1-active"));
                    });
                }
                var firstPlay = !1;
                function onLoadedMetadata() {
                    var timeAsset_visible = !0, timeAsset_position = 1;
                    if (console.log("timeAsset.visible", timeAsset_visible), timeAsset_visible) {
                        var duration = videoPlayer.duration();
                        duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                        var videoControlTimer = $('<div class="__a1-video-control-timer"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset_position).insertBefore(".vjs-volume-panel");
                        function updateTimer(time) {
                            time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                            (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                            var timeStr = (time = (time = "00" + time).substr(time.length - 2, 2)) + ":" + (duration = (duration = "00" + duration).substr(duration.length - 2, 2));
                            $(".__a1-time", videoControlTimer).html(timeStr);
                        }
                        updateTimer(duration), setInterval(function() {
                            updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                        }, 1e3 / 24);
                    }
                }
                videoPlayer.on("play", function(e) {
                    firstPlay || (videoPlayer.volume(0), VAST_PARSER.fireImpression(), videoPlayer.controlBar.show(),
                    videoPlayer.controlBar.fullscreenToggle.hide(), "Y" == progressbarMove && videoPlayer.controlBar.progressControl.disable()),
                    firstPlay = !0;
                }), videoPlayer.on("playing", function(e) {
                    $(".__a1-video-control-timer").addClass("__a1-active"), bannerPoster.removeClass("__a1-active"),
                    window.a1platform.mobile && ($(".vjs-volume-panel", videoContainer).removeClass("vjs-hidden").addClass("__a1-mobile-active"),
                    $(".vjs-mute-control", videoContainer).removeClass("vjs-hidden"), $(".vjs-volume-control", videoContainer).removeClass("vjs-hidden"));
                }), videoPlayer.on("pause", function(e) {
                    bannerPoster.addClass("__a1-active");
                }), videoPlayer.on("ended", function(e) {
                    videoPlayCount++, console.log("repeatLimit", repeatLimit, videoPlayCount), 0 < repeatLimit && repeatLimit <= videoPlayCount ? (videoContainer.removeClass("__a1-active"),
                    videoPlayer.pause()) : videoPlayer.play();
                }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                    if (0 < videoPlayer.currentTime()) {
                        var currentTime = Math.floor(videoPlayer.currentTime());
                        currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                        videoPlayer.prevCurrentTime = currentTime);
                    }
                }), videoPlayer.on("useractive", function(e) {
                    console.log(e);
                }), videoPlayer.on("userinactive", function(e) {
                    console.log(e);
                }), videoPlayer.on("ended", function(e) {
                    console.log(e), VAST_PARSER.fireTrackingEventComplete();
                }), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                $(".__a1-video-e-banner-poster", videoContainer).insertAfter($("video", videoContainer));
            });
        }();
    }
    window.a1CreateVideoBannerExpandAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Video Expand Banner Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res && createAd(VAST_PARSER), cb(res, error);
        });
    }, window.a1CreateVideoBannerExpandAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}(), function() {
    var callback;
    function createAd(VAST_PARSER) {
        var videoPlayer, parentEl = $("#__A1InBanner"), bannerContainer = $('<div class="__a1-in-banner-container"></div>').appendTo(parentEl), CompanionAds = VAST_PARSER.CompanionAds, companionWidth = CompanionAds.find("Companion").attr("width"), companionHeight = CompanionAds.find("Companion").attr("height");
        bannerContainer.css({
            width: companionWidth,
            height: companionHeight
        });
        var staticResource = CompanionAds.find("StaticResource").text(), companionClickThrough = CompanionAds.find("CompanionClickThrough").text(), inBannerImgContainer = $('<a class="__a1-in-banner-img-container"></a>').attr("href", companionClickThrough).attr("target", "_blank").appendTo(bannerContainer);
        $("<img>").attr("src", staticResource).appendTo(inBannerImgContainer).css({
            width: companionWidth,
            height: companionHeight
        });
        var imageSizes = VAST_PARSER.ControlPlayer.find("ThumbnailImageSize").text().split(","), imageWidth = imageSizes[0], imageHeight = imageSizes[1], leftPos = (companionWidth - imageWidth) * VAST_PARSER.ControlPlayer.find("VideoPlayerPosition").text() / 100, videoTbContainer = $('<div class="__a1-in-banner-video-tb-container"></div>').appendTo(bannerContainer);
        videoTbContainer.css({
            width: imageWidth,
            height: imageHeight,
            left: leftPos
        });
        var videoPlayerEl = $('<video id="videoPlayer" playsInline class="video-js vjs-default-skin vjs-big-play-centered" muted preload="auto" width="' + imageWidth + '" height="' + imageHeight + '"></video>').appendTo(videoTbContainer), videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.ControlPlayer.find("ThumbnailImageURL").text(), repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0;
        0 == repeatLimit && videoPlayerEl.attr("loop", !0), videoPlayerEl.attr({
            poster: posterUrl
        });
        var tbClickEl = $('<a href="#" class="__a1-in-banner-tb"><img src="' + posterUrl + '"></a>').appendTo(videoTbContainer), VideoClicks = VAST_PARSER.VideoClicks, extendedPlayerVASTurl = VAST_PARSER.ControlPlayer.find("ExtendedPlayerVASTurl").text();
        if (VideoClicks) {
            var clickTracking = VideoClicks.find("ClickTracking").text();
            tbClickEl.on("click", function(e) {
                e.preventDefault(), $.get(clickTracking), window.a1CreateInBannerExtendedPlayerAd(extendedPlayerVASTurl, callback);
            });
        }
        videojs(videoPlayerEl[0], {
            controls: !1,
            autoplay: !0,
            preload: "auto",
            class: "video-js vjs-default-skin",
            sources: {
                type: videoType,
                src: videoUrl
            }
        }).ready(function() {
            (videoPlayer = this).responsiveControls({
                controls: {
                    remainingTimeDisplay: {
                        mini: !1,
                        small: !1
                    },
                    "vjs-resolution-button": {
                        mini: !1
                    },
                    "vjs-language-container": {
                        mini: !1
                    }
                }
            });
            var firstPlay = !1;
            videoPlayer.on("play", function(e) {
                firstPlay || (videoPlayer.volume(0), VAST_PARSER.fireImpression()), firstPlay = !0,
                bannerContainer.addClass("__a1-active");
            }), videoPlayer.on("playing", function(e) {}), videoPlayer.on("pause", function(e) {}),
            videoPlayer.on("ended", function(e) {
                videoPlayCount++, 0 < repeatLimit && repeatLimit <= videoPlayCount ? (bannerContainer.removeClass("__a1-active"),
                videoPlayer.pause()) : videoPlayer.play();
            }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                var currentTime = Math.floor(videoPlayer.currentTime());
                currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                videoPlayer.prevCurrentTime = currentTime);
            }), videoPlayer.on("useractive", function(e) {
                console.log(e);
            }), videoPlayer.on("userinactive", function(e) {
                console.log(e);
            }), videoPlayer.on("ended", function(e) {
                console.log(e), VAST_PARSER.fireTrackingEventComplete();
            });
        });
    }
    window.a1CreateInBannerAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 In Banner Ad").parser;
        callback = cb, VAST_PARSER.load(url, function(res, error) {
            res && ("InBanner" == VAST_PARSER.Companion.attr("goodsId") ? createAd(VAST_PARSER) : $("#__A1InBanner").remove()),
            cb(res, error);
        });
    }, window.a1CreateInBannerAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
    var firstPlay = !(window.a1CreateInBannerExtendedPlayerAd = function(url, cb) {
        console.log("a1CreateInBannerExtendedPlayerAd"), $(".__a1-in-banner-extended-player").remove();
        var VAST_PARSER = new A1_VAST("a1 In Banner Extended Player Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res ? function(VAST_PARSER) {
                var videoPlayer, extendedPlayerContainer = $('<div class="__a1-in-banner-extended-player-container"></div>').appendTo("body"), parentEl = $('<div class="__a1-in-banner-extended-player"></div>').appendTo(extendedPlayerContainer), bannerContainer = $('<div class="__a1-rectangle-banner-container"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-rectangle-banner-video-container __a1-rectangle-player"></div>').appendTo(bannerContainer), posterUrl = VAST_PARSER.getPosterUrl(), poster = $('<a href="#" class="__a1-poster __a1-active"><img src="' + posterUrl + '"></a>').prependTo(bannerContainer);
                poster.css({
                    "background-image": "url(" + posterUrl + ")"
                });
                var soundAutoOn = VAST_PARSER.ControlPlayer.find("SoundAutoOn").text(), repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0, videoClicks = VAST_PARSER.getVideoClicks(), termsLink = VAST_PARSER.getTerms(), actionButton = VAST_PARSER.getActionButton();
                termsLink.visible && $('<a class="__a1-banner-terms-link">A1</a>').attr("href", termsLink.link).attr("target", "_blank").appendTo(bannerContainer);
                actionButton.visible && $('<a class="__a1-banner-action-button"></a>').attr("href", videoClicks.link).attr("target", "_blank").css({
                    "font-size": actionButton.size + "px"
                }).html(actionButton.text).appendTo(bannerContainer);
                var iconPosition = VAST_PARSER.ControlPlayer.find("IconPosition").text();
                console.log("iconPosition", iconPosition), bannerContainer.addClass("__a1-pos-" + iconPosition),
                $('<a href="#" class="__a1-btn-close">&times;</a>').appendTo(extendedPlayerContainer).on("click", function(e) {
                    extendedPlayerContainer.remove();
                }), function() {
                    var videoPlayerEl = $('<video id="extendedVideoPlayer" playsInline class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="100%" height="100%"></video>').appendTo(videoContainer);
                    ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoPlayerEl.attr("muted", !0);
                    0 == repeatLimit && videoPlayerEl.attr("loop", !0);
                    var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), soundValue = (VAST_PARSER.getProgressbarMove(),
                    VAST_PARSER.getSoundValue()), playerSize = VAST_PARSER.ControlPlayer.find("PlayerSize").text();
                    null != playerSize && null != playerSize && "" != playerSize || (playerSize = "300,250");
                    var playerSizes = playerSize.split(",");
                    parentEl.css({
                        width: playerSizes[0],
                        height: playerSizes[1]
                    });
                    var checkAutoPlay = VAST_PARSER.ControlPlayer.find("AutoPlay").text();
                    videojs(videoPlayerEl[0], {
                        controls: !0,
                        autoplay: "Y" == checkAutoPlay,
                        preload: "auto",
                        fluid: !0,
                        class: "video-js vjs-default-skin",
                        sources: {
                            type: videoType,
                            src: videoUrl
                        }
                    }).ready(function() {
                        extendedPlayerContainer.addClass("__a1-active"), videoPlayer = this;
                        var videoClicks = VAST_PARSER.VideoClicks, playerClick = VAST_PARSER.ControlPlayer.find("PlayerClick").text();
                        if (2 == playerClick && videoClicks) {
                            var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                            poster.attr({
                                href: clickThrough,
                                target: "_blank"
                            }).on("click", function(e) {
                                if (videoPlayer.paused()) return e.preventDefault(), videoPlayer.play(), !1;
                                $.get(clickTracking), videoPlayer.pause();
                            });
                        } else poster.on("click", function(e) {
                            e.preventDefault(), videoPlayer.paused() ? videoPlayer.play() : videoPlayer.pause();
                        });
                        function onLoadedMetadata() {
                            console.log("loadedmetadata");
                            var timeAsset = VAST_PARSER.getTime();
                            if (timeAsset.visible) {
                                var duration = videoPlayer.duration();
                                duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                                var timer = $('<div class="__a1-video-control-timer __a1-active"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset.position).appendTo(bannerContainer);
                                function updateTimer(time) {
                                    time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                                    (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                                    var timeStr = time + "초";
                                    $(".__a1-time", timer).html(timeStr);
                                }
                                updateTimer(duration), setInterval(function() {
                                    updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                                }, 1e3 / 24);
                            }
                            window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                            $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden"));
                        }
                        $(".vjs-progress-control", bannerContainer).remove(), $(".vjs-big-play-button", bannerContainer).remove(),
                        $(".vjs-fullscreen-control", bannerContainer).remove(), $(".vjs-volume-control", bannerContainer).remove(),
                        window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                        $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden")), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                        videoPlayer.responsiveControls({
                            controls: {
                                remainingTimeDisplay: {
                                    mini: !1,
                                    small: !1
                                },
                                "vjs-resolution-button": {
                                    mini: !1
                                },
                                "vjs-language-container": {
                                    mini: !1
                                }
                            }
                        }), videoPlayer.on("play", function(e) {
                            console.log("video play", e), firstPlay || ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari ? videoPlayer.volume(0) : videoPlayer.volume(soundValue / 100),
                            VAST_PARSER.fireImpression()), firstPlay = !0, videoPlayer.controlBar.show(), videoPlayer.controlBar.volumePanel.show(),
                            videoPlayer.controlBar.volumePanel.volumeControl.show(), videoPlayer.controlBar.volumePanel.muteToggle.show(),
                            poster.removeClass("__a1-active"), console.log("poster is deactivate");
                        }), videoPlayer.on("playing", function(e) {
                            $(".__a1-video-control-timer").addClass("__a1-active"), !0;
                        }), videoPlayer.on("pause", function(e) {}), videoPlayer.on("ended", function(e) {
                            videoPlayCount++, 0 < repeatLimit && repeatLimit <= videoPlayCount ? (videoContainer.removeClass("__a1-active"),
                            videoPlayer.pause(), !1) : videoPlayer.play();
                        }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                            if (0 < videoPlayer.currentTime()) {
                                var currentTime = Math.floor(videoPlayer.currentTime());
                                currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                                videoPlayer.prevCurrentTime = currentTime);
                            }
                        }), videoPlayer.on("useractive", function(e) {
                            console.log(e);
                        }), videoPlayer.on("userinactive", function(e) {
                            console.log(e);
                        }), videoPlayer.on("ended", function(e) {
                            console.log(e), VAST_PARSER.fireTrackingEventComplete();
                        }), bannerContainer.addClass("__a1-loaded"), $(".__a1-poster", bannerContainer).insertAfter($("video", bannerContainer));
                    });
                }();
            }(VAST_PARSER) : cb(res, error);
        });
    });
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, parentEl = $("#__A1BigInBanner"), bigBannerImg = VAST_PARSER.Companion.find("StaticResource").text(), bigBannerWidth = VAST_PARSER.Companion.attr("width"), bigBannerHeight = VAST_PARSER.Companion.attr("height"), bigBannerLink = VAST_PARSER.Companion.find("CompanionClickThrough").text();
        $('<a href="' + bigBannerLink + '" target="_blank" class="__a1-big-banner-img"><img src="' + bigBannerImg + '" width="' + bigBannerWidth + '" height="' + bigBannerHeight + '"></a>').appendTo(parentEl);
        parentEl.width(bigBannerWidth), parentEl.height(bigBannerHeight);
        var videoEnlargeContainer = $('<div class="__a1-big-in-video-enlarge-container"></div>').appendTo(parentEl), btnClose = $('<a href="#" class="__a1-btn-close">&times;</a>').appendTo(videoEnlargeContainer), bannerContainer = $('<div class="__a1-big-in-banner-container"></div>').appendTo(videoEnlargeContainer), videoContainer = $('<div class="__a1-big-in-banner-video-container __a1-rectangle-player"></div>').appendTo(bannerContainer), posterUrl = VAST_PARSER.ControlPlayer.find("ThumbnailImageURL").text(), thumbnailImageSize = VAST_PARSER.ControlPlayer.find("ThumbnailImageSize").text(), videoPlayerLeftPosition = VAST_PARSER.ControlPlayer.find("VideoPlayerLeftPosition").text(), videoPlayerTopPosition = VAST_PARSER.ControlPlayer.find("VideoPlayerTopPosition").text();
        thumbnailImageSizes = thumbnailImageSize.split(",");
        var thumbnailImageSizeWidth = parseInt(thumbnailImageSizes[0]), thumbnailImageSizeHeight = parseInt(thumbnailImageSizes[1]);
        bannerContainer.css({
            left: videoPlayerLeftPosition + "%",
            top: videoPlayerTopPosition + "%",
            width: thumbnailImageSizeWidth + "px",
            height: thumbnailImageSizeHeight + "px"
        });
        var poster = $('<a href="#" class="__a1-poster"><img src="' + posterUrl + '" width="' + thumbnailImageSizeWidth + '" height="' + thumbnailImageSizeHeight + '"></a>').prependTo(bannerContainer);
        poster.css({
            "background-image": "url(" + posterUrl + ")"
        });
        var soundAutoOn = VAST_PARSER.ControlPlayer.find("SoundAutoOn").text(), repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0, videoClicks = VAST_PARSER.getVideoClicks(), termsLink = VAST_PARSER.getTerms(), actionButton = VAST_PARSER.getActionButton();
        termsLink.visible && $('<a class="__a1-banner-terms-link">A1</a>').attr("href", termsLink.link).attr("target", "_blank").appendTo(bannerContainer),
        actionButton.visible && $('<a class="__a1-banner-action-button"></a>').attr("href", videoClicks.link).attr("target", "_blank").css({
            "font-size": actionButton.size + "px"
        }).html(actionButton.text).appendTo(bannerContainer);
        var iconPosition = VAST_PARSER.ControlPlayer.find("IconPosition").text();
        console.log("iconPosition", iconPosition), bannerContainer.addClass("__a1-pos-" + iconPosition),
        btnClose.on("click", function(e) {
            e.preventDefault(), videoEnlargeContainer.removeClass("__a1-active"), videoPlayer.pause();
        });
        var playerTouch = VAST_PARSER.ControlPlayer.find("PlayerTouch").text(), videoCreated = !1;
        poster.on("click", function(e) {
            e.preventDefault(), videoCreated ? 0 == $(".video-js").hasClass("vjs-playing") ? videoPlayer.play() : videoPlayer.pause() : (videoCreated = !0,
            function() {
                var videoEl = $('<video id="videoPlayer" playsInline class="video-js vjs-default-skin vjs-big-play-centered" controls autoplay preload="auto" width="' + thumbnailImageSizeWidth + '" height="' + thumbnailImageSizeHeight + '"></video>').appendTo(videoContainer);
                ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoEl.attr("muted", !0),
                0 == repeatLimit && videoEl.attr("loop", !0);
                var videoPlayerEl = $("#videoPlayer"), videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), soundValue = (VAST_PARSER.getProgressbarMove(),
                VAST_PARSER.getSoundValue());
                videojs(videoPlayerEl[0], {
                    controls: !0,
                    autoplay: !0,
                    preload: "auto",
                    class: "video-js vjs-default-skin",
                    sources: {
                        type: videoType,
                        src: videoUrl
                    }
                }).ready(function() {
                    function onLoadedMetadata() {
                        var timeAsset = VAST_PARSER.getTime();
                        if (timeAsset.visible) {
                            var duration = videoPlayer.duration();
                            duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                            var timer = $('<div class="__a1-video-control-timer"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset.position).appendTo(bannerContainer);
                            function updateTimer(time) {
                                time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                                (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                                var timeStr = time + "초";
                                $(".__a1-time", timer).html(timeStr);
                            }
                            updateTimer(duration), setInterval(function() {
                                updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                            }, 1e3 / 24);
                        }
                        window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                        $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden"));
                    }
                    videoPlayer = this, $(".vjs-progress-control", bannerContainer).remove(), $(".vjs-big-play-button", bannerContainer).remove(),
                    $(".vjs-fullscreen-control", bannerContainer).remove(), $(".vjs-volume-control", bannerContainer).remove(),
                    window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                    $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden")), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                    videoPlayer.responsiveControls({
                        controls: {
                            remainingTimeDisplay: {
                                mini: !1,
                                small: !1
                            },
                            "vjs-resolution-button": {
                                mini: !1
                            },
                            "vjs-language-container": {
                                mini: !1
                            }
                        }
                    });
                    var firstPlay = !1;
                    videoPlayer.on("play", function(e) {
                        console.log(e), firstPlay || ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari ? videoPlayer.volume(0) : videoPlayer.volume(soundValue / 100),
                        VAST_PARSER.fireImpression()), firstPlay = !0, videoPlayer.controlBar.show(), videoPlayer.controlBar.volumePanel.show(),
                        videoPlayer.controlBar.volumePanel.volumeControl.show(), videoPlayer.controlBar.volumePanel.muteToggle.show();
                    }), videoPlayer.on("playing", function(e) {
                        $(".__a1-video-control-timer").addClass("__a1-active");
                    }), videoPlayer.on("pause", function(e) {}), videoPlayer.on("ended", function(e) {
                        videoPlayCount++, 0 < repeatLimit && repeatLimit <= videoPlayCount ? ($(".__a1-rectangle-banner-video-container.__a1-active").removeClass("__a1-active"),
                        videoPlayer.pause()) : videoPlayer.play();
                    }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                        if (0 < videoPlayer.currentTime()) {
                            var currentTime = Math.floor(videoPlayer.currentTime());
                            currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                            videoPlayer.prevCurrentTime = currentTime);
                        }
                    }), videoPlayer.on("useractive", function(e) {
                        console.log(e);
                    }), videoPlayer.on("userinactive", function(e) {
                        console.log(e);
                    }), videoPlayer.on("ended", function(e) {
                        console.log(e), VAST_PARSER.fireTrackingEventComplete();
                    }), $(window).trigger("scroll"), bannerContainer.addClass("__a1-loaded"), $(".__a1-poster", bannerContainer).insertAfter($("video", bannerContainer));
                });
            }()), 2 == playerTouch && (videoEnlargeContainer.addClass("__a1-active"), videoPlayer.play());
        });
    }
    window.a1CreateBigInBannerAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Big In Banner Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res ? createAd(VAST_PARSER) : cb(res, error);
        });
    }, window.a1CreateBigInBannerAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}(), function() {
    window.a1CreateBounceAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Bounce Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res && createAd(VAST_PARSER), cb(res, error);
        });
    };
    var firstPlay = !(window.a1CreateBounceAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    });
    function createAd(VAST_PARSER) {
        var videoPlayer, parentEl = $("#__A1BounceBanner"), soundAutoOn = VAST_PARSER.getSoundAutoOn(), videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), soundValue = (VAST_PARSER.getProgressbarMove(),
        VAST_PARSER.getSoundValue()), bannerContainer = $('<div class="__a1-bounce-container __a1-rectangle-player"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-bounce-video-container"></div>').appendTo(bannerContainer), videoPlayerEl = $('<video id="videoPlayer" playsInline class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="100%" height="100%"></video>').appendTo(videoContainer);
        ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoPlayerEl.attr("muted", !0);
        var termsLink = VAST_PARSER.getTerms(), actionButton = VAST_PARSER.getActionButton(), videoClicks = VAST_PARSER.getVideoClicks();
        termsLink.visible && $('<a class="__a1-banner-terms-link"></a>').attr("href", termsLink.link).attr("target", "_blank").appendTo(videoContainer),
        actionButton.visible && $('<a class="__a1-banner-action-button"></a>').attr("href", videoClicks.link).attr("target", "_blank").addClass("__a1-pos-" + actionButton.position).css({
            "font-size": actionButton.size + "px"
        }).html(actionButton.text).appendTo(videoContainer);
        var iconPosition = VAST_PARSER.ControlPlayer.find("IconPosition").text();
        bannerContainer.addClass("__a1-pos-" + iconPosition);
        var posterUrl = VAST_PARSER.getPosterUrl(), poster = $('<a href="#" class="__a1-poster __a1-active"><img src="' + posterUrl + '"></a>').prependTo(bannerContainer);
        poster.css({
            "background-image": "url(" + posterUrl + ")"
        }), videojs(videoPlayerEl[0], {
            controls: !0,
            autoplay: !1,
            preload: "auto",
            fluid: !0,
            class: "video-js vjs-default-skin",
            sources: {
                type: videoType,
                src: videoUrl
            }
        }).ready(function() {
            videoPlayer = this;
            var videoClicks = VAST_PARSER.VideoClicks;
            if (2 == VAST_PARSER.ControlPlayer.find("PlayerClick").text() && videoClicks) {
                var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                poster.attr({
                    href: clickThrough,
                    target: "_blank"
                }).on("click", function(e) {
                    if (videoPlayer.paused()) return e.preventDefault(), videoPlayer.play(), !1;
                    $.get(clickTracking), videoPlayer.pause();
                });
            } else poster.on("click", function(e) {
                e.preventDefault(), videoPlayer.paused() ? videoPlayer.play() : videoPlayer.pause();
            });
            function onLoadedMetadata() {
                var timeAsset = VAST_PARSER.getTime();
                if (timeAsset.visible) {
                    var duration = videoPlayer.duration(), timer = $('<div class="__a1-video-control-timer __a1-active"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset.position).appendTo(videoContainer);
                    function updateTimer(time) {
                        time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                        (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                        var timeStr = time + "초";
                        $(".__a1-time", timer).html(timeStr);
                    }
                    updateTimer(duration), videoPlayer.on("timeupdate", function(e) {
                        updateTimer(duration - videoPlayer.currentTime()), timer.show();
                    });
                }
                window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden"));
            }
            $(".vjs-progress-control", bannerContainer).remove(), $(".vjs-big-play-button", bannerContainer).remove(),
            $(".vjs-fullscreen-control", bannerContainer).remove(), $(".vjs-volume-control", bannerContainer).remove(),
            window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
            $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden")), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
            videoPlayer.responsiveControls({
                controls: {
                    remainingTimeDisplay: {
                        mini: !1,
                        small: !1
                    },
                    "vjs-resolution-button": {
                        mini: !1
                    },
                    "vjs-language-container": {
                        mini: !1
                    }
                }
            }), videoPlayer.on("play", function(e) {
                console.log(e), firstPlay || ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari ? videoPlayer.volume(0) : videoPlayer.volume(soundValue / 100),
                VAST_PARSER.fireImpression()), firstPlay = !0, videoPlayer.controlBar.show(), videoPlayer.controlBar.volumePanel.show(),
                videoPlayer.controlBar.volumePanel.volumeControl.show(), videoPlayer.controlBar.volumePanel.muteToggle.show(),
                poster.removeClass("__a1-active");
            }), videoPlayer.on("playing", function(e) {}), videoPlayer.on("pause", function(e) {}),
            videoPlayer.on("ended", function(e) {
                $(".__a1-bounce-video-container.active").removeClass("active"), clearTimeout(disappearTimeTick),
                disappearTimeTick = null;
            }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                var currentTime = Math.floor(videoPlayer.currentTime());
                currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                videoPlayer.prevCurrentTime = currentTime);
            }), videoPlayer.on("useractive", function(e) {
                console.log(e);
            }), videoPlayer.on("userinactive", function(e) {
                console.log(e);
            }), videoPlayer.on("ended", function(e) {
                console.log(e), VAST_PARSER.fireTrackingEventComplete();
            }), $(".__a1-poster", bannerContainer).insertAfter($("video", bannerContainer));
            var checkAutoPlay = VAST_PARSER.ControlPlayer.find("AutoPlay").text(), disappearTime = VAST_PARSER.ControlPlayer.find("DisappearTime").text();
            console.log("disappearTime", disappearTime), disappearTime = disappearTime && 0 < disappearTime ? 1e3 * parseInt(disappearTime) : 0;
            var disappearTimeTick = null, isChecked = !1;
            $(window).on("scroll", function() {
                var scrollTop = $(window).scrollTop(), windowHeight = $(window).innerHeight();
                if (parentEl.offset().top - windowHeight + parentEl.height() - 50 <= scrollTop) {
                    if (isChecked) return;
                    isChecked = !0, "Y" == checkAutoPlay && videoPlayer.play(), bannerContainer.addClass("__a1-active"),
                    clearTimeout(disappearTimeTick), disappearTimeTick = null;
                } else {
                    if (disappearTimeTick) return;
                    disappearTimeTick = setTimeout(function() {
                        isChecked = !1, videoPlayer.pause(), bannerContainer.removeClass("__a1-active");
                    }, disappearTime);
                }
            });
        });
    }
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, parentEl = $("#__A1InfeedBanner"), parentElWrapper = $('<div class="__a1-infeed-banner-root"></div>').insertBefore(parentEl);
        parentEl.appendTo(parentElWrapper);
        var bannerContainer = $('<div class="__a1-infeed-banner-container"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image"></div>').appendTo(parentEl), videoContainer = $('<div class="__a1-infeed-banner-video-container __a1-rectangle-player"></div>').appendTo(bannerContainer), posterUrl = VAST_PARSER.getPosterUrl(), poster = $('<a href="#" class="__a1-poster __a1-active"><img src="' + posterUrl + '"></a>').prependTo(bannerContainer);
        poster.css({
            "background-image": "url(" + posterUrl + ")"
        });
        var updateTimerTick, soundAutoOn = VAST_PARSER.ControlPlayer.find("SoundAutoOn").text(), repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0, termsLink = VAST_PARSER.getTerms();
        termsLink.visible && $('<a class="__a1-banner-terms-link">A1</a>').attr("href", termsLink.link).attr("target", "_blank").appendTo(bannerContainer);
        var iconPosition = VAST_PARSER.ControlPlayer.find("IconPosition").text();
        bannerContainer.addClass("__a1-pos-" + iconPosition);
        var companionURL = VAST_PARSER.ControlPlayer.find("CompanionURL").text(), companionContainer = $('<div class="__a1-companion-container"></div>').insertAfter(parentEl);
        console.log("companionURL", companionURL), companionContainer.load(companionURL, function(res) {
            console.log(res);
        });
        var closeButtonVisible = VAST_PARSER.ControlPlayer.find("CloseButtonVisible").text();
        VAST_PARSER.ControlPlayer.find("CloseButtonPosition").text();
        "Y" == closeButtonVisible && $('<a class="__a1-btn-close __a1-pos-' + iconPosition + '">&times;</a>').appendTo(parentElWrapper).on("click", function(e) {
            e.preventDefault(), videoPlayer && (videoPlayer.dispose(), videoPlayer = null),
            updateTimerTick && (clearInterval(updateTimerTick), updateTimerTick = null), parentElWrapper.slideUp(300, function() {
                parentElWrapper.remove();
            });
        });
        var checkScroll = !0, isVideoPlaying = !1, videoCreated = !1, firstPlay = !1;
        var checkAutoPlay = VAST_PARSER.ControlPlayer.find("AutoPlay").text(), getViewPlay = VAST_PARSER.getViewPlay();
        getViewPlay = parseInt(getViewPlay), window.a1RectanglePlayerScrolled = function(scrollTop, windowHeight, videoContainerOffsetTop, videoContainerHeight) {
            if (scrollTop = parseInt(scrollTop), 0 != checkScroll) if (scrollTop = parseFloat(scrollTop),
            windowHeight = parseFloat(windowHeight), videoContainerOffsetTop = parseFloat(videoContainerOffsetTop),
            videoContainerHeight = parseFloat(videoContainerHeight), 0 == isVideoPlaying) {
                if (videoContainerOffsetTop - windowHeight + videoContainerHeight * getViewPlay / 100 <= scrollTop && scrollTop <= videoContainerOffsetTop + videoContainerHeight * getViewPlay / 100) if (videoPlayer) {
                    if (0 == firstPlay && "N" == checkAutoPlay) return;
                    videoPlayer.play();
                } else !function() {
                    if (!videoCreated) {
                        videoCreated = !0;
                        var videoEl = $('<video id="videoPlayer" playsInline class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="100%" height="100%"></video>').appendTo(videoContainer);
                        ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari) && videoEl.attr("muted", !0),
                        0 == repeatLimit && videoEl.attr("loop", !0);
                        var videoPlayerEl = $("#videoPlayer"), videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), soundValue = (VAST_PARSER.getProgressbarMove(),
                        VAST_PARSER.getSoundValue());
                        videojs(videoPlayerEl[0], {
                            controls: !0,
                            autoplay: !1,
                            preload: "auto",
                            fluid: !0,
                            class: "video-js vjs-default-skin",
                            sources: {
                                type: videoType,
                                src: videoUrl
                            }
                        }).ready(function() {
                            videoPlayer = this;
                            var videoClicks = VAST_PARSER.VideoClicks;
                            if (2 == VAST_PARSER.ControlPlayer.find("PlayerClick").text() && videoClicks) {
                                var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                                poster.attr({
                                    href: clickThrough,
                                    target: "_blank"
                                }).on("click", function(e) {
                                    if (videoPlayer.paused()) return e.preventDefault(), videoPlayer.play(), !1;
                                    $.get(clickTracking), videoPlayer.pause(), checkScroll = !1;
                                });
                            } else poster.on("click", function(e) {
                                e.preventDefault(), 0 == $(".video-js").hasClass("vjs-playing") ? videoPlayer.play() : (videoPlayer.pause(),
                                checkScroll = !1);
                            });
                            function onLoadedMetadata() {
                                var timeAsset = VAST_PARSER.getTime();
                                if (timeAsset.visible) {
                                    var duration = videoPlayer.duration();
                                    duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                                    var timer = $('<div class="__a1-video-control-timer __a1-active"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset.position).appendTo(bannerContainer);
                                    function updateTimer(time) {
                                        time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                                        (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                                        var timeStr = time + "초";
                                        $(".__a1-time", timer).html(timeStr);
                                    }
                                    updateTimer(duration), updateTimerTick = setInterval(function() {
                                        videoPlayer && updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                                    }, 1e3 / 24);
                                }
                                window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                                $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden"));
                            }
                            $(".vjs-progress-control", bannerContainer).remove(), $(".vjs-big-play-button", bannerContainer).remove(),
                            $(".vjs-fullscreen-control", bannerContainer).remove(), $(".vjs-volume-control", bannerContainer).remove(),
                            window.a1platform.mobile && ($(".vjs-volume-panel", bannerContainer).removeClass("vjs-hidden"),
                            $(".vjs-mute-control", bannerContainer).removeClass("vjs-hidden")), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                            videoPlayer.responsiveControls({
                                controls: {
                                    remainingTimeDisplay: {
                                        mini: !1,
                                        small: !1
                                    },
                                    "vjs-resolution-button": {
                                        mini: !1
                                    },
                                    "vjs-language-container": {
                                        mini: !1
                                    }
                                }
                            }), videoPlayer.on("play", function(e) {
                                console.log(e), firstPlay || ("N" == soundAutoOn || window.a1platform.mobile || window.a1platform.isSafari ? videoPlayer.volume(0) : videoPlayer.volume(soundValue / 100),
                                VAST_PARSER.fireImpression()), firstPlay = !0, videoPlayer.controlBar.show(), videoPlayer.controlBar.volumePanel.show(),
                                videoPlayer.controlBar.volumePanel.volumeControl.show(), videoPlayer.controlBar.volumePanel.muteToggle.show(),
                                poster.removeClass("__a1-active");
                            }), videoPlayer.on("playing", function(e) {
                                $(".__a1-video-control-timer").addClass("__a1-active"), isVideoPlaying = checkScroll = !0;
                            }), videoPlayer.on("pause", function(e) {}), videoPlayer.on("ended", function(e) {
                                videoPlayCount++, 0 < repeatLimit && repeatLimit <= videoPlayCount ? (videoContainer.removeClass("__a1-active"),
                                videoPlayer.pause(), checkScroll = !1) : videoPlayer.play();
                            }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                                if (0 < videoPlayer.currentTime()) {
                                    var currentTime = Math.floor(videoPlayer.currentTime());
                                    currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                                    videoPlayer.prevCurrentTime = currentTime);
                                }
                            }), videoPlayer.on("useractive", function(e) {
                                console.log(e);
                            }), videoPlayer.on("userinactive", function(e) {
                                console.log(e);
                            }), videoPlayer.on("ended", function(e) {
                                console.log(e), VAST_PARSER.fireTrackingEventComplete();
                            }), window.a1platform.iframeMode && window.a1CheckScrollByLocalStorage(), $(window).trigger("scroll"),
                            bannerContainer.addClass("__a1-loaded"), $(".__a1-poster", bannerContainer).insertAfter($("video", bannerContainer));
                        });
                    }
                }();
            } else (scrollTop < videoContainerOffsetTop - windowHeight + videoContainerHeight * getViewPlay / 100 || videoContainerOffsetTop + videoContainerHeight * getViewPlay / 100 < scrollTop) && videoPlayer && (isVideoPlaying = !1,
            videoPlayer.pause(), console.log("videoPaused"));
        }, window.a1platform.iframeMode ? (window.addEventListener("storage", function(e) {
            window.a1CheckScrollByLocalStorage();
        }), window.a1CheckScrollByLocalStorage = function() {
            var scrollTop = localStorage.getItem("__a1_scroll_top"), windowHeight = localStorage.getItem("__a1_window_height"), videoContainerOffsetTop = localStorage.getItem("__a1_video_container_offset_top"), videoContainerHeight = localStorage.getItem("__a1_video_container_height");
            window.a1RectanglePlayerScrolled(scrollTop, windowHeight, videoContainerOffsetTop, videoContainerHeight),
            console.log("a1RectanglePlayerScrolled", scrollTop, windowHeight, videoContainerOffsetTop, videoContainerHeight);
        }, window.a1CheckScrollByLocalStorage()) : $(window).on("scroll", function() {
            var scrollTop = $(window).scrollTop(), windowHeight = $(window).innerHeight(), videoContainerOffsetTop = videoContainer.offset().top, videoContainerHeight = videoContainer.height();
            window.a1RectanglePlayerScrolled(scrollTop, windowHeight, videoContainerOffsetTop, videoContainerHeight);
        }).trigger("scroll");
    }
    window.a1CreateInfeedAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Infeed Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res ? createAd(VAST_PARSER) : cb(res, error);
        });
    }, window.a1CreateInfeedAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}(), function() {
    function createAd(VAST_PARSER) {
        var videoPlayer, videoEl, parentEl = $("#__A1ClickMobileBanner"), videoBanner = (VAST_PARSER.ControlPlayer,
        $('<div class="__a1-video-cm-banner-container"></div>').appendTo(parentEl)), videoContainer = $('<div class="__a1-video-cm-banner-video-container"></div>').appendTo(videoBanner), videoWrapper = $('<div class="__a1-video-cm-banner-video-wrapper"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMxRUJERTkzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMxRUJERUEzOUU0MTFFOEFCMUJDRUI1QzlDNTZGQzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzFFQkRFNzM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzFFQkRFODM5RTQxMUU4QUIxQkNFQjVDOUM1NkZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnarSGUAAAAzSURBVHjaYmRgYHgKxLwM5IHPjEDiPwMFgAlkCgX6PzMxUAiGgQEUxwILED+jJB0ABBgAAlsHwfzTrMsAAAAASUVORK5CYII=\n" class="__a1-16-9-image"></div>').appendTo(videoContainer);
        !function() {
            videoEl = $('<video id="videoPlayer" playsInline muted class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="970" height="546"></video>').appendTo(videoWrapper);
            var videoUrl = VAST_PARSER.getVideoUrl(), videoType = VAST_PARSER.getVideoType(), posterUrl = VAST_PARSER.getPosterUrl(), videoClicks = VAST_PARSER.VideoClicks;
            if (videoClicks) {
                var bannerPoster = $('<a href="#" class="__a1-video-cm-banner-poster __a1-active"><img src="' + posterUrl + '"></a>').appendTo(videoWrapper);
                bannerPoster.css({
                    "background-image": "url(" + posterUrl + ")"
                });
                var clickThrough = videoClicks.find("ClickThrough").text(), clickTracking = videoClicks.find("ClickTracking").text();
                bannerPoster.attr({
                    href: clickThrough,
                    target: "_blank"
                }).on("click", function(e) {
                    if (console.log("videoPlayer.paused : ", videoPlayer.paused), videoPlayer) {
                        if (videoPlayer.paused()) return videoPlayer.play(), e.preventDefault(), !1;
                        $.get(clickTracking), (videoPlayer.muted() || 0 == videoPlayer.volume()) && videoPlayer.pause();
                    }
                });
            }
            videojs(videoEl[0], {
                controls: !0,
                autoplay: !1,
                preload: "auto",
                class: "video-js vjs-default-skin",
                sources: {
                    type: videoType,
                    src: videoUrl
                }
            }).ready(function() {
                videoPlayer = this, "Y" == VAST_PARSER.ControlPlayer.find("AutoPlay").text() && videoPlayer.play(),
                videoPlayer.responsiveControls({
                    controls: {
                        remainingTimeDisplay: {
                            mini: !1,
                            small: !1
                        },
                        "vjs-resolution-button": {
                            mini: !1
                        },
                        "vjs-language-container": {
                            mini: !1
                        }
                    }
                }), $(".vjs-progress-control", videoContainer).remove(), $(".vjs-big-play-button", videoContainer).remove();
                var repeatLimit = VAST_PARSER.ControlPlayer.find("RepeatLimit").text(), videoPlayCount = 0;
                console.log(videoPlayer.controlBar.fullscreenToggle);
                var firstPlay = !1;
                function onLoadedMetadata() {
                    var timeAsset_visible = !0, timeAsset_position = 1;
                    if (console.log("timeAsset.visible", timeAsset_visible), timeAsset_visible) {
                        var duration = videoPlayer.duration();
                        duration = Math.ceil(VAST_PARSER.Duration / 1e3);
                        var videoControlTimer = $('<div class="__a1-video-control-timer"><span class="__a1-time"></span></div>').addClass("__a1-pos-" + timeAsset_position).insertBefore(".vjs-volume-panel");
                        function updateTimer(time) {
                            time = Math.max(0, time), time = Math.min(duration, time), time = Math.floor(time),
                            (isNaN(time) || 0 == isFinite(time)) && (time = 0);
                            var timeStr = (time = (time = "00" + time).substr(time.length - 2, 2)) + ":" + (duration = (duration = "00" + duration).substr(duration.length - 2, 2));
                            $(".__a1-time", videoControlTimer).html(timeStr);
                        }
                        updateTimer(duration), setInterval(function() {
                            updateTimer(duration - Math.floor(videoPlayer.currentTime()));
                        }, 1e3 / 24);
                    }
                }
                videoPlayer.on("play", function(e) {
                    firstPlay || (videoPlayer.volume(0), VAST_PARSER.fireImpression(), videoPlayer.controlBar.show()),
                    firstPlay = !0;
                }), videoPlayer.on("playing", function(e) {
                    $(".__a1-video-control-timer").addClass("__a1-active"), bannerPoster.removeClass("__a1-active"),
                    window.a1platform.mobile && ($(".vjs-volume-panel", videoContainer).removeClass("vjs-hidden").addClass("__a1-mobile-active"),
                    $(".vjs-mute-control", videoContainer).removeClass("vjs-hidden"), $(".vjs-volume-control", videoContainer).removeClass("vjs-hidden"));
                }), videoPlayer.on("pause", function(e) {
                    bannerPoster.addClass("__a1-active");
                }), videoPlayer.on("ended", function(e) {
                    videoPlayCount++, console.log("repeatLimit", repeatLimit, videoPlayCount), 0 < repeatLimit && repeatLimit <= videoPlayCount ? (videoContainer.removeClass("__a1-active"),
                    videoPlayer.pause()) : videoPlayer.play();
                }), videoPlayer.prevCurrentTime = -1, videoPlayer.on("timeupdate", function(e) {
                    if (0 < videoPlayer.currentTime()) {
                        var currentTime = Math.floor(videoPlayer.currentTime());
                        currentTime != videoPlayer.prevCurrentTime && (VAST_PARSER.fireTrackingEvent(videoPlayer.currentTime()),
                        videoPlayer.prevCurrentTime = currentTime);
                    }
                }), videoPlayer.on("useractive", function(e) {
                    console.log(e);
                }), videoPlayer.on("userinactive", function(e) {
                    console.log(e);
                }), videoPlayer.on("ended", function(e) {
                    console.log(e), VAST_PARSER.fireTrackingEventComplete();
                }), videoPlayer.readyState() < 1 ? videoPlayer.one("loadedmetadata", onLoadedMetadata) : onLoadedMetadata(),
                $(".__a1-video-cm-banner-poster", videoContainer).insertAfter($("video", videoContainer));
            });
        }();
    }
    window.a1CreateClickMobileBannerAd = function(url, cb) {
        var VAST_PARSER = new A1_VAST("a1 Mobile Click Video Banner Ad").parser;
        VAST_PARSER.load(url, function(res, error) {
            res && createAd(VAST_PARSER), cb(res, error);
        });
    }, window.a1CreateClickMobileBannerAdWithVast = function(VAST_PARSER) {
        createAd(VAST_PARSER);
    };
}();