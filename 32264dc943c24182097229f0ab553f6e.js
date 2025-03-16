setTimeout(function () {
 try {
 
 $('.d-awards-slider').slick({
 dots: true,
 autoplay: true,
 slidesToShow: 2,
 slidesToScroll: 2
 });
 $('.cb-d-awards .slick-next').click(function () {
 _pt(this, 'box detikcom awards 2023', 'button right', 'button right');
 });
 $('.cb-d-awards .slick-prev').click(function () {
 _pt(this, 'box detikcom awards 2023', 'button left', 'button left');
 });
 for (let j = 0; j <= 2; j++) {
 $('.cb-d-awards #slick-slide-control0' + j).click(function () {
 _pt(this, 'box detikcom awards 2023', 'button slider', 'button slider', j + 1);
 });
 }
 } catch (error) {}
}, 500)