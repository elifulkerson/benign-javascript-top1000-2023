HS_Array.functionArray.push(function () {
                     $(".pce_mic").click(function () {
                         $('.pce_mic').toggleClass('bdr-animt');
                     });
                 });
                 HS_Array.functionArray.push(function () {
                     var defaultLi = $('.gdg_tab-li').first().attr('data-tab');
                     $('.gdg_tab-cnt').css("display", "none");
                     $('#' + defaultLi).addClass('active').css("display", "block");

                     $('.gdg_tab-li').click(function () {

                         if ($(this).attr('id') != "last") {
                             var tab_id = $(this).attr('data-tab');


                             $('.gdg_tab-li').removeClass('active');
                             $('.gdg_tab-cnt').removeClass('active').hide();

                             $(this).addClass('active');
                             $("#" + tab_id).fadeIn(1500);
                             window.scrollBy(0, 1);
                             window.scrollBy(0, -1);
                         }
                     });
                     var count = -1;
                     HS_Array.functionArray.push(function () {
                         function AddRedClass() {
                             var boxes = $('.rgt_lst-li');
                             var boxLength = boxes.length - 1;
                             count < boxLength ? count++ : count = 0;
                             boxes.removeClass('rgt_itm-act').eq(count).addClass('rgt_itm-act');
                         }
                         setInterval(AddRedClass, 2000);
                     });
                     HS_Array.functionArray.push(function () {
                         $(".rgt_lst-li").mouseover(function () {
                             $(this).removeClass("rgt_itm-act");
                         });
                     });
                 });