var date = new Date().getTime();
            var start = new Date('2022/11/30 00:00:00').getTime();
            var end = new Date('2022/12/7 20:00:00').getTime();

            if (date >= start && date <= end) {
                document.documentElement.style.filter = 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)'
                document.write([ '<style>',
                    'html, img {',
                        'filter: grayscale(100%);',
                        '-webkit-filter: grayscale(100%);',
                        '-moz-filter: grayscale(100%);',
                        '-ms-filter: grayscale(100%);',
                        '-o-filter: grayscale(100%);',
                        'filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);',
                        '-webkit-filter: grayscale(1);',
                    '}',
                '</style>'].join(''))
            }