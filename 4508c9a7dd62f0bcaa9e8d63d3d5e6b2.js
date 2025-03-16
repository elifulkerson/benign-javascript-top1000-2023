$(document).ready(function() {
      reload_indices_details();
    });

    function reload_indices_details( ind_id = '', suggested_name = '' ) {

      var load_chart = true;
      if( ind_id == '' ) {
        ind_id = $.trim( $('#market_action #indices_price' ).attr( 'ind_id' ) );
        load_chart = false;
      }
	  
		if( suggested_name == '' ) {
			suggested_name = $.trim( $('#market_action #indices_price' ).attr( 'suggested_name' ) );
		}

      var ajax_link = 'https://appfeeds.moneycontrol.com/jsonapi/market/indices&ind_id=' + ind_id;

      $.ajax({
        type: "POST",
        url: ajax_link,
        dataType: 'jsonp',
        jsonpCallback:"indicereq",
        cache: true,
        error: function(obj, errorMsg, d) {
          // alert( 'Unable to process request - ' + errorMsg + '- ' + d );
        },
        success: function( jsonp_data ) {

          if( jsonp_data != '' ) {

            if( Object.keys( jsonp_data[0] ).length > 0 ) {
              var indices_object = jsonp_data[0]['indices'];

              if( Object.keys( indices_object ).length > 0 ) {
                if( $('#market_action #indices_price' ).length ) {
                  $('#market_action #indices_price' ).attr( 'ind_id', ind_id );

                  var name = '';
                  var name = $.trim( indices_object.stkexchg );

					if( suggested_name ) {
						$('#market_action #indices_price' ).attr( 'suggested_name', suggested_name );
						name = suggested_name;
					}

					var name_url = '';
					name_url = $.trim( indices_object.share_url );
					if( name_url ) {
						name_url = name_url.replace( 'http://m.moneycontrol.com/' ,'https://www.moneycontrol.com/' );
						name_url = name_url.replace( 'https://m.moneycontrol.com/' ,'https://www.moneycontrol.com/' );
					}

                  var change = 0;
                  change = $.trim( indices_object.change );

                  var arrow_class = '';
                  var color_class = '';
                  if( change > 0 ) {
                    arrow_class = "green_arw";
                    color_class = "grntxt";
                  } else if( change < 0 ) {
                    arrow_class = "red_arw";
                    color_class = "rdtxt";
                  }

                  $( '#market_action #indices_price #name' ).html( '<a href="' + name_url + '" title="' + name + '">'+ name + '</a>' );
                  $( '#market_action #indices_price #cp' ).html( $.trim( indices_object.lastprice ) );
                  $( '#market_action #indices_price #arrow_class' ).removeClass( 'red_arw green_arw' ).addClass( arrow_class );
                  
                  $( '#market_action #indices_price #chg' ).removeClass( 'rdtxt grntxt' ).addClass( color_class );
                  // $( '#market_action #indices_price #chg' ).html( change + ' (' + $.trim( indices_object.percentchange ) + '%)' );
                  $( '#market_action #indices_price #chg' ).html( change );

				  $( '#market_action #indices_price #percentchange' ).removeClass( 'rdtxt grntxt' ).addClass( color_class );
                  $( '#market_action #indices_price #percentchange' ).html( '(' + $.trim( indices_object.percentchange ) + '%)' );

                  $('#market_action #advance_decline_unchange #advances' ).html( $.trim( indices_object.advances ) );
                  $('#market_action #advance_decline_unchange #declines' ).html( $.trim( indices_object.declines ) );
                  $('#market_action #advance_decline_unchange #unchanged' ).html( $.trim( indices_object.unchanged ) );

                  $('#market_action #mac1d #ind_id' ).val( ind_id );
                  if( load_chart ) {

                    $( '#market_action .marctcNv li' ).each(function( index ) {
                      $( this ).removeClass( "active" );
                    });
                    $( '#market_action .marctcNv' ).find( "li:eq(0)" ).addClass( "active" );

                    var iframe_src = 'https://www.moneycontrol.com/mccode/common/indices_chart/indices_chart.php?classic=true&market=i&period=1d&ind_id=' + ind_id + '&width=250&height=120';
                    $( '#market_action #mac1d' ).find('iframe').attr( 'src', iframe_src );

                  }

                }
              }

            }
          }

          /* Send Ajax Call only in market hour + exculde Saturday and Sunday -> Start */
            var d = new Date();
            var hour = d.getHours();
            var day_number = d.getDay();

            // if(hour >= 9 && hour <= 16 && day_number != 6 && day_number != 7) {
              setTimeout( reload_indices_details, 15000 );
            // }
          /* End <- Send Ajax Call only in market hour + exculde Saturday and Sunday */

        },
        beforeSend: function() {
          //
        },
        complete: function() {
          //
        }
      });

    }