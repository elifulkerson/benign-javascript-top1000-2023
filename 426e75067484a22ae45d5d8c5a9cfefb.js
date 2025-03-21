
$(function () {

  if (document.domain !== 'www.wondershare.com' || window.screen.width <= 576) return

  var path = 'https://www.wondershare.com/assets/nlj/'
  var api = {
    geoip: 'https://i.wondershare.com/api/v1/geoip/country',
    link: 'nlj2-link.json',
    data: 'nlj2-data.json',
    language: 'nlj2-language.json',
    modal: 'nlj2-modal.html',
    select: 'nlj2-select.html'
  }

  var current_lang = $('html').attr('lang') || $('body').data('lan') || $('main#body').data('lan')
  var count = +localStorage.getItem('nlj2-count') || 0
  count++
  if( count > 2 ) return

  $.getJSON('https://i.wondershare.com/api/v1/geoip/country', function (res) {
    if (res && (res.code === 200)) {
      var geoip = res.data.country || 'US'
      $.getJSON(path + api.data, function (res) {
        var data = res
        var geo_lang = data[geoip][0].code

        if(current_lang === geo_lang) return

        var pool = []
        for ( var k in data ) {
          pool.push(k)
        }

        if( !data[geoip][0].ignore && pool.indexOf(geoip) > -1) {
          $.getJSON(path + api.link, function(res) {
            var link = res[geo_lang]

            $.getJSON(path + api.language, function(res) {

              $.get(path + api.select, function(res) {
                $('body').prepend(res)

                var collapse = document.querySelector('.menu-wrapper'),
                    $continue = $('.nlj2-select .continue-link')
                    $site = $('.nlj2-select .site')
                
                handleCollapse ( document.querySelector('.nlj2-select-wrapper') )
                setTimeout(function () {
                  document.querySelector('.nlj2-select-wrapper').style.overflow = 'visible'
                },300)
                $continue.attr('href', link)
                $('.nlj2-select .continue-menu').on('click', function (e) {
                  e.stopPropagation()
                  handleCollapse(collapse)
                })
                $(document).on('click', function () {
                  collapse.style.height = 0
                  collapse.classList.remove('active')
                })
                $('.nlj2-select .select-item').on('click', function () {
                  $continue.attr('href', $(this).data('index') == 1 ? link : 'https://www.wondershare.com/')
                  $site.text($(this).text())
                })
                $('.nlj2-select .close').on('click', function () {
                  $('.nlj2-select-wrapper').remove()
                  localStorage.setItem('nlj2-count', count)
                })
                $continue.on('click', function () {
                  localStorage.setItem('nlj2-count', count)
                })
                
              })
            })
          })
        }
      })
    }
  })

  function handleCollapse (el) {
    var h = el.children[0].getBoundingClientRect().height
    el.style.height =  (el.classList.contains('active') ? 0 : h) + 'px'
    el.classList.toggle('active')
  }

})
