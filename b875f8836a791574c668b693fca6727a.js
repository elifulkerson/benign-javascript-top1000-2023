waitForGlobal(function() {
  return window.jQuery && (window.jQuery("#categories").find("section.zone").length > 0 || window.jQuery("#categories-zone").find("section.zone").length > 0);
}, function() {
  window.jQuery(".author-list--card:contains('By Booking.com')").html("By Booking.com");
  window.jQuery(".author-list--card:contains('By Booking.com')").append("<br><span style=\"font-style:italic\">Paid Partner</span>");
});