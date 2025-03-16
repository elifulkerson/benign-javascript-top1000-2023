$(window).bind('load', function() {
  $("img").on('error', function(){
        $(this).attr('src', 'https://cdn.cnnindonesia.com/cnnid/images/default.jpg');
    });

    $('img').each(function(){
        $(this).attr('src', $(this).attr('src'));
    });
});

function resizeIframeCB(list='') {
    setTimeout(() => {
        var iframeList = document.querySelectorAll(list);
        for (var i = 0, len = iframeList.length; i < len; i++) {
            var iframe = iframeList[i];
            customIframeResize(iframe);
        }
    }, 500);
}

function customIframeResize(iframe)
{
    try {
        iframe.onload = () => { 
            iframe.style.height = iframe.contentWindow.document.documentElement.offsetHeight + 'px';
        };
    } catch (error) {
        console.log("error iframe", error)
    }
}