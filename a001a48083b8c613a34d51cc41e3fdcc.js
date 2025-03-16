function fragmentlazyload(selector){
      var fragmentcontent = [];
     if(typeof selector !== 'undefined' && selector){
      fragmentcontent = [].slice.call(document.querySelectorAll(selector +" .fragmentcontent.lazy"));
     }
     else{
      fragmentcontent = [].slice.call(document.querySelectorAll(".fragmentcontent.lazy"))
     }
   if ("IntersectionObserver" in window) {
    let optionsItersect = {
  rootMargin: '-400px',
  threshold: 0
}
     let lazyContentObserver = new IntersectionObserver(function(entries, optionsItersect) {
       entries.forEach(function(entry) {
         if (entry.isIntersecting) {
           let lazycontent = entry.target;

           let fragmentUrl =  lazycontent.dataset.fragmentUrl;
           
           fetch(fragmentUrl).then(function(response) {
            if(response.ok && (response.status >= 200 &&  response.status < 400)) {        
                return response.text();
            }
        }).then(function(resp) {
           if(typeof resp !="undefined"){
            
            try{
              $(lazycontent).html(resp);
            }
            catch(e){
              lazycontent.innerHTML = resp;
            }
            
            delete lazycontent.dataset.fragmentUrl;
            imglazyload("#"+lazycontent.id); 
            lazycontent.classList.remove("lazy");
            lazyContentObserver.unobserve(lazycontent);
           }

           
        }).catch(function(error) {
          console.error(error)
        });
           
         }
       });
     });
 
     fragmentcontent.forEach(function(content) {
      lazyContentObserver.observe(content);
     });
   } else {
     fragmentcontent.forEach(function(lazycontent) {
        let fragmentUrl =  lazycontent.dataset.fragmentUrl;
           
        fetch(fragmentUrl).then(function(response) {
         if(response.ok && (response.status >= 200 &&  response.status < 400)) {        
             return response.text();
         }
          }).then(function(resp) {
              if(typeof resp !="undefined"){
              lazycontent.innerHTML = resp;
              delete lazycontent.dataset.fragmentUrl;
              imglazyload("#"+lazycontent.id); 
              lazycontent.classList.remove("lazy");
              }

              
          }).catch(function(error) {
            console.error(error)
          });
      });
   }
   }document.addEventListener("DOMContentLoaded", function (event) {
    imglazyload();
    fragmentlazyload();});