var time = new Date().getTime();
var ban = true;
jQuery( document ).ready( function () {
  console.log( 'Programacion inicializado' );
  setCronStatusProgramacion();
} );

function setCronStatusProgramacion () {
  loadProgramacion();
  setInterval( 'loadProgramacion()', ( 5 * 60 ) * 1000 );
}

function loadProgramacion () {
  jQuery.ajax( {
    url: 'https://objects.canalrcn.com/canalrcn/servicios/parrilla.json?' + time,
    type: 'GET',
    success: function ( r, status, xhr ) {
      ban = true;
      var divs = {};
      let padre = document.getElementById( 'presentamos' );
      divs.programacion = React.createElement( Presentando, {
        data: r.list
      } );
      ReactDOM.unmountComponentAtNode( padre );
      var datos = ReactDOM.render( divs.programacion, padre );
      console.log( 'loading programacion' );
    },
    error: function ( res, status, error ) {
      ban = false;
    }
  } ).done( function () { } );
}

class Presentando extends React.Component {
  render () {

    let presentando = React.createElement( "div", {
      className: "presentando"
    }, React.createElement( "div", null,
      React.createElement( 'a', {
        href: 'https://www.canalrcn.com/senal-en-vivo/'
      },
        React.createElement( "p", null, "Estamos presentando" ),
        React.createElement( "span", {
          className: "linea"
        }, "" ),
        React.createElement( "div", {
          className: "programa"
        }, this.props.data[ 0 ].programa.title ) ),
      React.createElement( "a", {
        className: 'btn-canal_envivo',
        href: 'https://www.canalrcn.com/senal-en-vivo/'
      }, React.createElement( 'button', {
        className: 'btn',
        type: 'button',
        title: 'Señal en vivo'
      }, 'Ver en vivo', React.createElement( 'i', {
        className: 'bi bi-broadcast-pin'
      } ) ) ) ) );

    let sigue = this.props.data[ 1 ] ? React.createElement( "div", {
      className: "sigue"
    }, React.createElement( "div", null,
      React.createElement( "p", null, "Sigue" ),
      React.createElement( "span", {
        className: "linea"
      }, "" ),
      React.createElement( "div", {
        className: "programa"
      }, this.props.data[ 1 ].programa.title ),
      React.createElement( 'div', {
        className: 'hora'
      }, this.props.data[ 1 ].programa.hora ) ) ) : '';

    let tarde = this.props.data[ 2 ] ? React.createElement( "div", {
      className: "mas-tarde"
    }, React.createElement( "div", null,
      React.createElement( "p", null, "Más tarde" ),
      React.createElement( "span", {
        className: "linea"
      }, "" ),
      React.createElement( "div", {
        className: "programa"
      }, this.props.data[ 2 ].programa.title ),
      React.createElement( 'div', {
        className: 'hora'
      }, this.props.data[ 2 ].programa.hora ) ) ) : '';

    var parrilla = [ presentando, sigue, tarde ];

    return parrilla;
  }
}

function objectLength ( object ) {
  return Object.keys( object ).length;
}