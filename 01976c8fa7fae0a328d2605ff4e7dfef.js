var outer_link = document.querySelector('.pro-item.outer-link')
  outer_link.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() !== 'a' && !e.target.classList.contains('logo')){
      window.open(outer_link.getAttribute('href'), '_blank')
    }
  })
  // 首屏banner视频处理
  loadBanner()
  function loadBanner(){
    if(!$('.banner-section video').length) return

    if(document.body.clientWidth > 992) {
      $('.banner-section video').each(function(index,bv){
        bv.src = bv.getAttribute('data-src')
        bv.poster = bv.getAttribute('data-poster')
      })
    }else {
      $('.banner-section video').each(function(index,bv){
        bv.poster = bv.getAttribute('data-mobile-poster')
        bv.src = bv.getAttribute('data-mobile-src')
      })
    }
  }
  
  var swiper_banner = new Swiper('#swiper-banner', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    navigation: {
      nextEl: '#swiper-banner .swiper-button-next',
      prevEl: '#swiper-banner .swiper-button-prev'
    },
    pagination: {
      el: '.swiper-banner-pagination',
      clickable: true
    }
  })

  $('#swiper-banner').hover(
    function () {
      swiper_banner.autoplay.stop()
    },
    function () {
      swiper_banner.autoplay.start()
    }
  )