// Initialize library
    $(document).ready(function(){
        lozad('.lozad', {
            load: function(el) {
                el.src = el.dataset.src;
                el.onload = function() {
                    el.classList.add('fade')
                }
            }
        }).observe()
    });