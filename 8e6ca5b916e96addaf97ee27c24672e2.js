function yourFunction() {
            $.getJSON('https://camtrack.reachableads.com/CricketScoreAPI/', function (data) {

                var country1 = data.score1
                var country2 = data.score2
                var dummy_coun1 = data.country1
                var dummy_coun2 = data.country2
                var im1 = ""
                var im2 = ""
                var mm = true
                var mapObj = {
                    Pakistan: "PAK",
                    Nepal: "NEP",
                    Bangladesh: "BAN",
                    India: "IND",
                    Afghanistan: "AFG",
                    Sri: "SRI",
                    England: "ENG",
                    New: "NZ",
                    Zealand: "",
                    Netherlands: "NL",
                    South: "SA",
                    Africa: "",
                    Australia: "AUS",
                    Lanka: "",
                    Innings: "",

                };
                country1 = country1.replace(/Australia|Africa|South|Netherlands|Zealand|New|England|Pakistan|Nepal|Bangladesh|India|Afghanistan|Sri|Lanka|Innings/gi, function (matched) {
                    return mapObj[matched];
                });
                country2 = country2.replace(/Australia|Africa|South|Netherlands|Zealand|New|England|Pakistan|Nepal|Bangladesh|India|Afghanistan|Sri|Lanka|Innings/gi, function (matched) {
                    return mapObj[matched];
                });
                console.log(country1, country2)

                var img1 = data.img1
                var img2 = data.img2
  

                if (country1.includes("PAK") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/pak.png";
                    if(dummy_coun1.includes("PAK") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }
                if (country1.includes("BAN") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/ban.png";
                    if(dummy_coun1.includes("BAN") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }
                if (country1.includes("IND") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/ind.png";
                    if(dummy_coun1.includes("IND") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }
                if (country1.includes("AFG") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/afg.png";
                    if(dummy_coun1.includes("AFG") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }
                if (country1.includes("SRI") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/sri.png";
                    if(dummy_coun1.includes("SRI") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }
                if (country1.includes("ENG") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/eng.png";
                    if(dummy_coun1.includes("ENG") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }
                if (country1.includes("NL") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/nl.png";
                    if(dummy_coun1.includes("NL") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }
                if (country1.includes("NZ") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/nzl.png";
                    if(dummy_coun1.includes("NZ") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }
                if (country1.includes("SA") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/sa.png";
                    if(dummy_coun1.includes("SA") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    
                    }


                }
                if (country1.includes("AUS") == true) {
                    img1 = "https://reachableads-av.s3.ap-southeast-1.amazonaws.com/ICC+World+Cup+Kaler+Kontho/flag/aus.png";
                    if(dummy_coun1.includes("AUS") == true){
                        img2 = data.img2
                    }
                    else{
                        img2 = data.img1
                    }


                }


                template = `<div id="c" class="title">${data.title}</div>
            <div class="first-line">
                <img id="x1" class="flag-img"
                    src="${img1}" alt="" />
                <div id="c1" class="first-line-text">
                   ${dummy_coun1}
                </div>
            </div>
            <div class="second-line">
                <img id="x2" class="flag-img"
                    src="${img2}" alt="" />
                <div id="c2" class="first-line-text">${dummy_coun2}</div>
            </div>
            <div class="third-line">
                <div id="c3" class="first-line-text">
                    <p>${data.final_result}</p>
                </div>
            </div>`


                template2 = `<div id="c" class="title">${data.title}</div>
            <div class="first-line">
                <img id="x1" class="flag-img"
                    src="${img1}" alt="" />
                <div id="c1" class="first-line-text">
                    <p>${country1}</p>
                </div>
            </div>
            <div class="second-line">
                <img id="x2" class="flag-img"
                    src="${img2}" alt="" />
                <div id="c2" class="first-line-text">${country2}</div>
            </div>
            <div class="third-line">
                <div id="c3" class="first-line-text">
                    <p>${data.final_result}</p>
                </div>
            </div>`


                template3 = `<div id="c" class="title">${data.title}</div>
            <div class="first-line">
                <img id="x1" class="flag-img"
                    src="${img1}" alt="" />
                <div id="c1" class="first-line-text">
                    <p>${country1}</p>
                </div>
            </div>
            <div class="second-line">
                <img id="x2" class="flag-img"
                    src="${img2}" alt="" />
                <div id="c2" class="first-line-text">${dummy_coun2}</div>
            </div>
            <div class="third-line">
                <div id="c3" class="first-line-text">
                    <p>${data.final_result}</p>
                </div>
            </div>`


                template4 = `<div id="c" class="title">${data.title}</div>
            <div class="first-line">
                <img id="x1" class="flag-img"
                    src="${img1}" alt="" />
                <div id="c1" class="first-line-text">
                    <p>${dummy_coun1}</p>
                </div>
            </div>
            <div class="second-line">
                <img id="x2" class="flag-img"
                    src="${img2}" alt="" />
                <div id="c2" class="first-line-text">${country2}</div>
            </div>
            <div class="third-line">
                <div id="c3" class="first-line-text">
                    <p>${data.final_result}</p>
                </div>
            </div>`


                if (country1 != "Match Info" && country2 != "Match Info") {
                    $('#scr-mob').html("");
                    $('#scr-mob').append(template2);

                }
                if (country1 == "Match Info" && country2 == "Match Info") {
                    $('#scr-mob').html("");
                    $('#scr-mob').append(template);

                }
                if (country1 != "Match Info" && country2 == "Match Info") {
                    $('#scr-mob').html("");
                    $('#scr-mob').append(template3);

                }
                if (country1 == "Match Info" && country2 != "Match Info") {
                    $('#scr-mob').html("");
                    $('#scr-mob').append(template4);

                }


            });

            setTimeout(yourFunction, 14000);
        }

        yourFunction();
        function NewTab() {

            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);

            if (check == false) {

                window.open(
                    "https://www.jugantor.com//icc-world-cup-2023/detail-desktop", "_blank");
            }

            else {
                window.open(
                    "https://www.jugantor.com//icc-world-cup-2023/detail-mobile", "_blank");
            }
        }