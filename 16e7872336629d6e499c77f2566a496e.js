function validate_message_investors( dvid ) {
      var reply_msg = $("#m3_txtArea_txt_" + dvid).val();
      reply_msg = $.trim( reply_msg );

      if( reply_msg == "") {
        alert("Please input your message.");
        $("#m3_txtArea_txt_" + dvid).focus();
        return false;
      } else if(reply_msg.length < 3) {
        alert ("Message needs to be more than 2 characters.");
        $("#m3_txtArea_txt_" + dvid).focus();  
        return false;
      }

      $("#frm_m3_mc_element #f_message").val(reply_msg);
      $("#frm_m3_mc_element").submit();
      return false;
    }