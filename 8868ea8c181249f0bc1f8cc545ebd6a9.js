var svg_spirte_files = [
                

                "https://cdnn21.img.ria.ru//i/sprites/header_icon/inline.svg?101",
                "https://cdnn21.img.ria.ru//i/sprites/icon/inline.svg?100",
                "https://cdnn21.img.ria.ru//i/sprites/emoji/inline.svg?100",

                

                "https://cdnn21.img.ria.ru//i/sprites/white_longread/inline.svg?100",

                "https://cdnn21.img.ria.ru//i/sprites/logo/inline.svg?100",
                "https://cdnn21.img.ria.ru//i/sprites/social/inline.svg?102",

                "https://cdnn21.img.ria.ru//i/sprites/s_icon/inline.svg?100",
                "https://cdnn21.img.ria.ru//i/sprites/s_social/inline.svg?101"
            ];

            for (var i = 0; i < svg_spirte_files.length; i++) {
                var svg_ajax = new XMLHttpRequest();
                svg_ajax.open("GET", svg_spirte_files[i], true);
                svg_ajax.send();
                svg_ajax.onload = function(e) {
                    var svg_div = document.createElement("div");
                    svg_div.className = 'svg-sprite';
                    svg_div.innerHTML = this.responseText;
                    document.body.insertBefore(svg_div, document.body.childNodes[0]);
                }
            }