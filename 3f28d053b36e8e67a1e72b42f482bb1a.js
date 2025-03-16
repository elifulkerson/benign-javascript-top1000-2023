(function (){
            function setCookie(cname, cvalue) {
                const d = new Date('2023-05-15');
                let expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
            let searchArray = location.hash.substring(1).split('&');
            if(searchArray.includes('test_a')) {
                if(searchArray.includes('test_a')) {
                    setCookie('test_ab', '1_0');
                    location.hash = '';
                    location.reload();
                }
            } else if(searchArray.includes('test_b')) {
                setCookie('test_ab', '1_1');
                location.hash = '';
                location.reload();
            } else if(searchArray.includes('test_c')) {
                setCookie('test_ab', '1_2');
                location.hash = '';
                location.reload();
            }
        })()