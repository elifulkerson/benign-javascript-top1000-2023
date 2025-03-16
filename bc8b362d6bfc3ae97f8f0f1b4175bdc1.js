var stock_quote_auto_suggesion_call = '';

    function stock_quote_suggest( e ) {
      e = $.trim( e );
      var t = $.trim( $("#gq_fname").val() );
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

        if( stock_quote_auto_suggesion_call && stock_quote_auto_suggesion_call.readyState != 4 ) {
          stock_quote_auto_suggesion_call.abort();
        }

        var ajax_link = '';
        ajax_link = "//www.moneycontrol.com/mccode/common/autosuggesion.php?query=" + e + "&type=" + t + "&section=mc_home";

        stock_quote_auto_suggesion_call = $.ajax({
          type: "POST",
          url: ajax_link,
          dataType: 'html',
          error: function( obj, errorMsg, d ) {
            // alert( 'Unable to process request - ' + errorMsg + '- ' + d );
          },
          success: function( html_body ) {
            if( html_body != '' ) {
              $( "#compsearch #autosugg_mc1" ).html( html_body.replace( 'class="qt_suglist"', 'class="suglist"' ) ).show();
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
        $( "#compsearch #autosugg_mc1" ).html( '' ).hide();
      }
    }

    function post_quote( e ) {
      len = e.companyname.value.length;
      if( len < 3 ) {
        alert("Please enter minimum 3 characters for search");
        return false;
      }
      var t = e.companyname.value;
      if( t == "Stock Quote" || t == "Get Quote" || t == "Enter Company" ) {
        alert("Please Enter Keyword");
        e.companyname.focus();
        return false;
      }
      if( t.charAt(0) == " " && t.charAt(1) == " " || t.charAt(1) == " " && t.charAt(2) == " " ) {
        alert("Please Enter Keyword");
        e.companyname.focus();
        return false;
      }
      if( t == "" ) {
        alert("Please Enter Keyword");
        e.companyname.focus();
        return false;
      }
      var n = search_company( e );
      if( n == "false" ) {
        return false;
      }
      return false;
    }

    function search_company( e ) {
      var t = "";
      var n = "";
      var r = "";
      var i = "";
      var s = "";
      var o = "";
      var u = "";
      var a = "";
      var f = "";
      var s = "";
      var c,h,p,d,v,m;
      sel = 0;
      companyname = new String( e.companyname.value );
      c=companyname.length;
      for(p=0;p<=c-1;p++) {
        if( c > 10 ) {
          s = companyname;
          f = "true";
          break;
        } else {
          j = p+1;
          t = companyname.charAt(p);
          u = companyname.charAt(j);
          if( t == " " || u == " " || t == "." || u == "." || c < 6 ) {
            s = "";
            for( k = 0; k <= c-1; k++ ) {
              n = "";
              n = companyname.charAt(k);
              if( n != "." ) {
                s += n;
              }
            }
            a = "true";
            f = "true";
            break;
          } else {
            for( l = 0; l <= c-1; l++ ) {
              i = "";
              i = companyname.charAt(l);
              if( i != "." && l != c ) {
               s += i;
              }
            }
            f = "true";
            break;
          }
          if( a == "true" ) {
            f = "true";
            break;
          }
        }
      }
      if( f == "true" ) {
        compname = new String(s);
        rExp = "&";
        newString = new String("*");
        if( compname.replace( rExp, newString ) ) {
          companyname = compname.replace( rExp, newString );
        } else {
          companyname = s;
        }
        if( companyname == "TV18" || companyname == "tv18" ) {
          companyname = "TV 18";
        }
        if( document.getElementById("fname").value == "snap" ) {
          e.action = "//www.moneycontrol.com/mf/mf_info/mfsearch.php?fname=snap&AMCname=" + e.companyname.value;
          e.submit();
        } else {
          e.action = "//www.moneycontrol.com/stocks/cptmarket/compsearchnew.php";
          e.submit();
        }
        return true;
      } else {
        document.compsearch.companyname.focus();
      }
      return false;
    }

  function ass_pval( e, t ) {
    document.getElementById("gq_fname").value = e;
    document.getElementById("search_disp").innerHTML = t;
  }