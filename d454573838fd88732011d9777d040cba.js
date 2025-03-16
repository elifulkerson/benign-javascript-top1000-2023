(runinit = window.runinit || []).push(function () {
        var slider = document.getElementById('slider'),
            sliderItems = document.getElementById('items'),
            prev = document.getElementById('prev'),
            next = document.getElementById('next');

        var settings = {
            //"url": "https://unstructuredapi.cnnd.vn/api/manager/search_datas_by_keyword",
            "url": "http://unstructuredapi.cnnd.vn/api/manager/search_datas_by_keyword",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "site-id": "w5Ot3bZtK8JJqgQkgiYYnA==",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "index": "1",
                "page_size": "15",
                "table_name": "albumanh",
                "keyword": "",
                "order": "{\"key\":\"Sort\",\"type\":\"asc\"}"
            }
        };

        $.ajax(settings).done(function (response) {
            if (response != null && response.status_code == 200 && response.data != null && response.data.Data != null) {
                try {
                    var data = response.data.Data;
                    var html = "";
                    var formatHtml = "<div class=\"slide\"><a href=\"{0}\" title=\"{3}\" target=\"_blank\"><img src=\"{2}\" alt=\"{1}\" /></a><a href=\"{0}\" title=\"{1}\" class=\"link\"><span class=\"readmore\">Xem thêm</span></a></div>";
                    var formatHtmlNotLink = "<div class=\"slide\"><a href=\"{0}\" title=\"{3}\"><img src=\"{2}\" alt=\"{1}\" /></a><a href=\"{0}\" title=\"{1}\" class=\"link\"></a></div>";
                    data.forEach(function (item, index) {
                        if (item.Link == null || item.Link == "" || item.Link == "null") {
                            item.Link = "javascript:;";
                            html += String.format(formatHtmlNotLink, item.Link, item.Title, thumbWidth(item.Image, 480), item.Title.replace('"',"'"));

                        } else {
                            html += String.format(formatHtml, item.Link, item.Title, thumbWidth(item.Image, 480), item.Title.replace('"',"'"));

                        }
                        $(".dots").append("<span class=\"dot\"></span>");

                    });
                    if (html != "") {
                        $("#slider #items").append(html);
                        setTimeout(function () {
                            var imagesLoaded = 0;
                            var totalImages = $('#slider img').length;
                            $('#slider img').on('load', function (event) {
                                imagesLoaded++;
                                if (imagesLoaded == totalImages) {
                                    $("#slider").show();
                                    slide(slider, sliderItems, prev, next);
                                }
                            }).each(function () {
                                if (this.complete) $(this).trigger('load');
                            });

                        }, 100);
                    } else {
                        $("#slider").remove();
                    }
                } catch (ex) {
                    console.log(ex);
                    $("#slider").remove();

                }

            } else {
                $("#slider").remove();

            }
        });


        function thumbWidth(url, width) {
            if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
                if (url.indexOf(appSettings.imageStorageDomain) == 0) {
                    return String.format("{0}/thumb_w/{1}/{2}", appSettings.imageStorageDomain, width, (url + "").replace(appSettings.imageStorageDomain, ""));

                } else
                    return url;

            }
            return String.format("{0}/thumb_w/{1}/{2}", appSettings.imageStorageDomain, width, (url + "").trimStart('/'));
        }
        function slide(wrapper, items, prev, next) {
            var posX1 = 0,
                posX2 = 0,
                posX = 0,
                posInitial,
                posFinal,
                threshold = 100,
                slides = items.getElementsByClassName('slide'),
                slidesLength = slides.length,
                slideSize = wrapper.offsetWidth,
                firstSlide = slides[0],
                lastSlide = slides[slidesLength - 1],
                cloneFirst = firstSlide.cloneNode(true),
                cloneLast = lastSlide.cloneNode(true),
                index = 0,
                indexActive = 1,
                dot = wrapper.getElementsByClassName('dot'),
                allowShift = true,
                autoPlay = null;

            // Clone first and last slide
            items.appendChild(cloneFirst);
            items.insertBefore(cloneLast, firstSlide);
            for (i = 0; i < slidesLength + 2; i++) {
                slides[i].style.width = slideSize + "px";
                if (i < slidesLength)
                    dot[i].style.width = (slideSize / slidesLength) + "px";
            }
            items.style.left = -slideSize + "px";
            wrapper.classList.add('loaded');
            slides[indexActive].classList.add("active");
            dot[0].classList.add("active");
            // Mouse and Touch events
            items.onmousedown = dragStart;

            // Touch events
            items.addEventListener('touchstart', dragStart);
            items.addEventListener('touchend', dragEnd);
            items.addEventListener('touchmove', dragAction);

            // Click events
            prev.addEventListener('click', function () { shiftSlide(-1) });
            next.addEventListener('click', function () { shiftSlide(1) });

            // Transition events
            items.addEventListener('transitionend', checkIndex);

            //autoplay
            var boolAuto = wrapper.getAttribute('slider-auto');
            console.log(boolAuto);
            if (boolAuto != null && boolAuto != 'undefine' && boolAuto === '1') {
                IntervalAutoPlay(true);
            }

            function IntervalAutoPlay(flag) {
                if (flag) {
                    wrapper.classList.add('autoplay');
                    autoPlay = setInterval(function () { next.click(); }, 10000);
                }
                else {
                    wrapper.classList.remove('autoplay');
                    clearInterval(autoPlay);
                }
            }

            function dragStart(e) {
                //console.log(e);
                e = e || window.event;
                posInitial = items.offsetLeft;
                if (e.type == 'touchstart') {
                    posX1 = e.touches[0].clientX;
                    posX = e.touches[0].clientX;
                } else {
                    e.preventDefault();
                    posX1 = e.clientX;
                    posX = e.clientX;
                    document.onmouseup = dragEnd;
                    document.onmousemove = dragAction;
                }
            }

            function dragAction(e) {
                e = e || window.event;
                if (e.type == 'touchmove') {
                    posX2 = posX1 - e.touches[0].clientX;
                    posX1 = e.touches[0].clientX;
                    if (posX - e.touches[0].clientX < -10 || posX - e.touches[0].clientX > 10)
                        e.preventDefault();
                    items.style.left = (items.offsetLeft - posX2) + "px";
                } else {
                    e.preventDefault();
                    items.classList.add('moving');
                    posX2 = posX1 - e.clientX;
                    posX1 = e.clientX;
                    if (posX - posX1 > slideSize || posX - posX1 < -slideSize) {
                        dragEnd();
                    } else
                        items.style.left = (items.offsetLeft - posX2) + "px";
                }

                if (!e.cancelable) {
                    dragEnd();
                    console.log('!cancelable');
                }
            }

            function dragEnd(e) {
                items.classList.remove('moving');
                posFinal = items.offsetLeft;
                if (posFinal - posInitial < -threshold) {
                    shiftSlide(1, 'drag');
                    IntervalAutoPlay(false);
                } else if (posFinal - posInitial > threshold) {
                    shiftSlide(-1, 'drag');
                    IntervalAutoPlay(false);
                } else {
                    items.style.left = (Math.round(posInitial / slideSize) * slideSize) + "px";
                }

                document.onmouseup = null;
                document.onmousemove = null;
            }

            function shiftSlide(dir, action) {
                items.classList.add('shifting');

                if (allowShift) {
                    if (!action) { posInitial = items.offsetLeft; }

                    if (dir == 1) {
                        items.style.left = (posInitial - slideSize) + "px";
                        index++;
                    } else if (dir == -1) {
                        items.style.left = (posInitial + slideSize) + "px";
                        index--;
                    }
                };

                allowShift = false;
            }

            function checkIndex(e) {
                e.preventDefault();
                e.stopPropagation();

                items.classList.remove('shifting');

                if (index == -1) {
                    items.style.left = -(slidesLength * slideSize) + "px";
                    index = slidesLength - 1;
                }

                if (index == slidesLength) {
                    items.style.left = -(1 * slideSize) + "px";
                    index = 0;
                }

                indexActive = parseInt(items.style.left) / slideSize;

                for (i = 0; i < slidesLength + 2; i++) {
                    slides[i].classList.remove("active");
                }
                for (i = 0; i < slidesLength; i++) {
                    dot[i].classList.remove('active');
                }
                //console.log(indexActive);
                if (!isNaN(indexActive) && Number.isInteger(indexActive) && indexActive < 0) {
                    slides[-indexActive].classList.add("active");
                    //dot[-indexActive - 1].classList.add("active");
                    for (i = 0; i < -indexActive; i++) {
                        dot[i].classList.add("active");
                    }
                }

                allowShift = true;
            }
            for (i = 0; i < slidesLength; i++) {
                (function (index) {
                    dot[i].onclick = function () {
                        shiftToSlide(index + 1);
                    }
                })(i);
            }
            function shiftToSlide(index) {
                items.classList.add('shifting');
                if (allowShift) {
                    items.style.left = -(index * slideSize) + "px";
                };

                allowShift = false;
            }
        }
    });