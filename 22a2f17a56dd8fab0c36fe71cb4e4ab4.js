+function () {
                    var li = document.querySelectorAll('ul#DfpChumoku1 > li');
                    var arr = [];
                    for (var i = 0; i < li.length; i++) {
                        arr.push([Math.random(), li[i]]);
                    }
                    arr.sort();
                    arr.forEach(function (v) {
                        document.getElementById('DfpChumoku1').appendChild(v[1]);
                    });
                }();