var observer_komentar = new IntersectionObserver(function(entires){
    entires.forEach(function(entry) {
        if(entry.intersectionRatio > 0){
            show_widget_komentar(entry.target)                
        }
    });
}, {
    threshold: 0
}); 

if(document.getElementById('comment-widget') !== null){
    observer_komentar.observe(document.getElementById('comment-widget'));
}

function show_widget_komentar(element){
    console.log('show_widget_komentar');
    observer_komentar.unobserve(element);
    observer_komentar.disconnect();        

    Http = new XMLHttpRequest();
    Http.open("GET", 'https://apis.kompas.com/api/comment/widget');
    Http.send();

    Http.onreadystatechange = (e) => {
        if(Http.readyState == 4 && Http.status == 200) {
            json = JSON.parse(Http.responseText);
            new_comment = '';
            json.forEach(function(row, i){
                if(i > 4){
                    return;
                }
                content = row.detail[0].komentar;
                if(content.length > 100){
                    content = content.substring(0, 100)+'... [...]'
                }
                url_page = row.url_page.replace('http://', 'https://');

                new_comment += '<div class="cm__wItem">';
                new_comment += '<a href="'+url_page+'" class="cm__wLink">';
                new_comment += '<div class="cm__wNews">';
                new_comment += '<div class="cm__wImg"><img src="'+row.photo+'"></div>';
                new_comment += '<h4>'+row.title+'</h4>';
                kanal = url_page.substring(8, url_page.indexOf('.')).toUpperCase();
                if(kanal == 'WWW'){
                    kanal = url_page.split('/')[3].toUpperCase();
                }
                new_comment += '<span>'+kanal+' - '+row.tanggal_artikel+'</span>';
                new_comment += '</div></a>';
                new_comment += '<a href="'+url_page.replace('/read/', '/komentar/')+'?comment_id='+row.detail[0].id_comment+'" class="cm__wLink">';
                new_comment += '<div class="cm__wComment">';
                new_comment += '<div class="cm__wUsername">'+row.detail[0].nama+'</div>';
                new_comment += ' '+row.detail[0].komentar.split('$//$')[0]+'</div>';
                new_comment += '</a></div>';
                
            });
            document.getElementById('comment-widget').innerHTML = new_comment;
        }
    }
}