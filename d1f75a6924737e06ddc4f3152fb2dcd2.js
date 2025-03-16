var observer_kilas = new IntersectionObserver(function(entires){
        entires.forEach(function(entry) {
            if(entry.intersectionRatio > 0){
                show_embed_kilas(entry.target)                
            }
        });
    }, {
        threshold: 0
    });        

    observer_kilas.observe(document.getElementById("kilas-inject"));
    function show_embed_kilas(element){
        console.log('show_embed_kilas');
        observer_kilas.unobserve(element);
        observer_kilas.disconnect();        

        var kilasxhttp = new XMLHttpRequest();
        kilasxhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var kilasres = JSON.parse(kilasxhttp.responseText);
                document.getElementById("kilas-inject").innerHTML = kilasres.data;
            }
        };
        kilasxhttp.open("GET", document.getElementById("kilas-inject").getAttribute('data-url'), true);
        kilasxhttp.send();
    }