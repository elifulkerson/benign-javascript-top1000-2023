function update_poll_rslt_mod( msg_id, poll_id, option, thread_id, type ) {

      var ajax_url = URL_MONEYCONTROL + 'mccode/common/m3_common_functions.php?action=update_poll_rslt&data_type=jsonp&pollid=' + poll_id + '&option=' + option;

      $.ajax({
        url: ajax_url,
        type : "POST",
        dataType : "jsonp",
        async: false,
        success:function( json_data ) {

          var success_status = $.trim( json_data[0]['err_txt'] );

          if( success_status == "0" || success_status == 0 ) {

            var opt1 = json_data[0]['opt1'];
            var opt2 = json_data[0]['opt2'];
            var opt3 = json_data[0]['opt3'];
            var opt4 = json_data[0]['opt4'];

            total = parseInt(opt1) + parseInt(opt2) + parseInt(opt3) + parseInt(opt4);
            opt1_per = Math.round( parseInt( opt1 )/total*100 );
            opt2_per = Math.round( parseInt( opt2 )/total*100 );

            if(type == 'ibh') {

              if( opt1_per ) {
                $('.yo_result_section .yesMeter span').css( 'width', opt1_per + '%' );
                $('.yo_result_section .yesPercentage').html( opt1_per + '%' );
              }

              if( opt2_per ) {
                $('.yo_result_section .nometer span').css( 'width', opt2_per + '%' );
                $('.yo_result_section .noPercentage').html( opt2_per + '%' );
              }

              $('.yo_image_section').hide();
              $('.yo_result_section').show();
              $('.yo_options_section').hide();

            }

          }
        }
      })
    }

    function validate_poll_reply() {
      var reply_msg = $("#poll_txtArea_txt").val();
      reply_msg = $.trim( reply_msg );

      if( reply_msg == "") {
        alert("Please input your message.");
        $("#poll_txtArea_txt").focus();
        return false;
      } else if(reply_msg.length < 3) {
        alert ("Message needs to be more than 2 characters.");
        $("#poll_txtArea_txt").focus();  
        return false;
      }

      $("#poll_replyfrm #r_message").val(reply_msg);
      $("#poll_replyfrm").submit();
      return false;
    }