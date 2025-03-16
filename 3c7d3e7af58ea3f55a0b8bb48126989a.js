var mfmeter_auto_suggesion_call = '';
	var URL_MONEYCONTROL = 'https://www.moneycontrol.com/';
  function post_mfmsearch() {
    var input_val = document.mfmeter_frm.mfmeter_str.value;
    input_val = $.trim( input_val );

    if( input_val == "Enter Scheme" || input_val == "" || input_val.length < 3 ) {
      alert("Please enter minimum 3 characters for search");
      document.mfmeter_frm.mfmeter_str.focus();
      return false;
    } else {
      document.mfmeter_frm.action = "//www.moneycontrol.com/mf/mf_info/mfsearch.php?AMCname=" + input_val + "&fname=snap";
      document.mfmeter_frm.submit();
      return false;
    }
  }

  function getAutosuggesion_mfmeter( search_str ) {
    var topsearch_type = '2';
    if(search_str == 'Enter Scheme') {
      search_str = '';
    }

    if(( topsearch_type == 1 || topsearch_type == 2 || topsearch_type == 6) && search_str.length >= 3 ) {

      if( mfmeter_auto_suggesion_call && mfmeter_auto_suggesion_call.readyState != 4 ) {
        mfmeter_auto_suggesion_call.abort();
      }

      var ajax_link = '';
      ajax_link = '/mccode/common/autosuggesion.php?query=' + escape(search_str) + '&type=2';

      mfmeter_auto_suggesion_call = $.ajax({
        type: "POST",
        url: ajax_link,
        dataType: 'html',
        error: function( obj, errorMsg, d ) {
          // alert( 'Unable to process request - ' + errorMsg + '- ' + d );
        },
        success: function( html_body ) {
          if( html_body != '' ) {
            $( "#mutual_funt_meter #autosugg_mc1" ).html( html_body.replace( 'class="qt_suglist"', 'class="suglist"' ) ).show();
          }
        },
        beforeSend: function() {
          // $( reload_div + ' .ajax_loading' ).show();
        },
        complete: function() {
          // $( reload_div + ' .ajax_loading' ).hide();
        }
      });

    } else {
      $("#mutual_funt_meter #autosugg_mc1").hide(); 
    }
  }