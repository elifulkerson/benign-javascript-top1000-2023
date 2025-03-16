var stock_advice_auto_suggesion_call = '';

		function stock_advice_suggest( e ) {
		  e = $.trim( e );
		  var t = $.trim( $("#fname").val() );
		  if( t == "" ) {
			t = 1;
		  }
		  var n = 0;
		  var r = "!@#$%^&*()+=[]\\';,./{}|\":<>?";
		  for( var i = 0; i < e.length; i++ ) {
			if( r.indexOf( e.charAt( i ) ) != -1 ) {
			  n = 0; 
			} else {
			  n = 1;
			}
		  }

		  if( e.length >= 3 && e != "" && e != "Enter Company" && n == 1 ) {
			e = encodeURIComponent( e );

			if( stock_advice_auto_suggesion_call && stock_advice_auto_suggesion_call.readyState != 4 ) {
			  stock_advice_auto_suggesion_call.abort();
			}

			var ajax_link = '';
			ajax_link = "https://www.moneycontrol.com/mccode/common/autosuggesion.php?query=" + e + "&type=" + t + "&section=mc_home&classic=true";

			stock_advice_auto_suggesion_call = $.ajax({
			  type: "POST",
			  url: ajax_link,
			  dataType: 'html',
			  error: function( obj, errorMsg, d ) {
				// alert( 'Unable to process request - ' + errorMsg + '- ' + d );
			  },
			  success: function( html_body ) {
				if( html_body != '' ) {
				  $( "#stkadv_frm #autosugg_mc2" ).html( html_body.replace( 'class="qt_suglist"', 'class="suglist"' ) ).show();
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
			$( "#stkadv_frm #autosugg_mc2" ).html( '' ).hide();
		  }
		}

		function stock_advice_clk( e, t ) {

		  if( e == "broker" ) {
			document.stkadv_frm.search_flag.value = e;
			document.stkadv_frm.sel_brok.value = t;
			document.stkadv_frm.action = "https://www.moneycontrol.com/stocks/advice/display_more.php";
			document.stkadv_frm.submit();
			return false
		  } else if( e == "analyst" ) {
			document.stkadv_frm.search_flag.value = e;
			document.stkadv_frm.sel_celeb.value = t;
			document.stkadv_frm.action = "https://www.moneycontrol.com/stocks/advice/display_more.php";
			document.stkadv_frm.submit();
			return false
		  }
		}

		function post_stock_advice_form( e ) {
		  var t = document.getElementById("stkadv_str").value;
		  t = $.trim(t);

		  if( t == "" ) {
			alert( "Please enter a Company name!!!" );
			document.stkadv_frm.stkadv_str.focus();
			return false
		  }
		  if( t.length < 3 ) {
			alert( "Please enter minimum 3 characters to search" );
			document.stkadv_frm.stkadv_str.focus();
			return false
		  }
		  document.stkadv_frm.companyname.value = t;
		  document.stkadv_frm.action = URL_MONEYCONTROL + "stocks/cptmarket/compsearchnew.php?classic=true";
		  document.stkadv_frm.submit();
		  return false
		}