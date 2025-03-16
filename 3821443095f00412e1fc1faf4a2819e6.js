function doAdvSearchBtn(event) {
         sel = document.querySelector('select[name="group"]')
         if(sel && sel.options && sel.options[sel.selectedIndex].dataset.url ){
             data_url = sel.options[sel.selectedIndex].dataset.url
             if( data_url ){
                 window.location = data_url;
             }else{
                 console.error('home page search button: no data_url found for search');
             }
         }
     }
     document.addEventListener('DOMContentLoaded',function() {
         document.getElementById('adv-search-btn').onclick=doAdvSearchBtn;
     },false);