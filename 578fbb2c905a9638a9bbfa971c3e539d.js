$(document).ready(function(){
//var modal = document.getElementById('myModal');
var modal = $('#myModal');
//var btn = document.getElementById("myBtn");
var btn = $('#myBtn');
//var span = document.getElementsByClassName("close")[0];
var span = $('.close._t');
btn.click(function(){
modal.css('display','block');
})
span.click(function(){
modal.css('display','none');
})
$(window).click(function(){
if (event.target == modal) {
modal.css('display','none');
}
})
})



// $(document).mouseup(function(e){ 
//     var container = $(".menu__box"); 
//     // If the target of the click isn't the container
//     if(!container.is(e.target) && container.has(e.target).length === 0){
//       $("#menu__toggle").prop("checked", false);
//     } 
//     e.stopPropagation();
// });
$('.menu__btn').click(function(){
   $(this).toggleClass('selected');
   $('body').toggleClass('hidden');
   $('.overlay').toggleClass('active');
});

$('.overlay').on('click',function(){
    if($(this).hasClass('active')){
      $("#menu__toggle").prop("checked", false);
      $(this).removeClass('active');
      $('body').removeClass('hidden');
      $('.menu__btn').removeClass('selected');
    }
});