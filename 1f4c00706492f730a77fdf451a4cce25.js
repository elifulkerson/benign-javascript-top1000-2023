document.addEventListener('DOMContentLoaded', function(){
  var $dismissible = $(".dismissible_banner");
  $dismissible.click(function(ev) {
    $dismissible.hide();
  });
});