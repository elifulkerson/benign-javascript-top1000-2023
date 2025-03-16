jQuery(document).ready(function () {
    const testimonials_mb = document.querySelector(".banner_market_moviles");
    const scroller_mb = testimonials_mb.querySelector(".scroller");
    const nextBtn_mb = testimonials_mb.querySelector(".btn.next");
    const prevBtn_mb = testimonials_mb.querySelector(".btn.prev");
    const itemWidth_mb =
      testimonials_mb.querySelector(".item_compras").clientWidth;
  
    nextBtn_mb.addEventListener("click", scrollToNextItem_mb);
    prevBtn_mb.addEventListener("click", scrollToPrevItem_mb);
  
    function scrollToNextItem_mb() {
      if (scroller_mb.scrollLeft < scroller_mb.scrollWidth - itemWidth_mb)
        // The scroll position is not at the beginning of last item
        scroller_mb.scrollBy({
          left: itemWidth_mb,
          top: 0,
          behavior: "smooth",
        });
      // Last item reached. Go back to first item by setting scroll position to 0
      else
        scroller_mb.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
    }
  
    function scrollToPrevItem_mb() {
      if (scroller_mb.scrollLeft != 0)
        // The scroll position is not at the beginning of first item
        scroller_mb.scrollBy({
          left: -itemWidth_mb,
          top: 0,
          behavior: "smooth",
        });
      // This is the first item. Go to last item by setting scroll position to scroller_mb width
      else
        scroller_mb.scrollTo({
          left: scroller_mb.scrollWidth,
          top: 0,
          behavior: "smooth",
        });
    }
    if(typeof document.getElementsByClassName('carousel-shop')[0] !== 'undefined'){
        document.getElementsByClassName('btn prev')[1].style.top = '27%';
        document.getElementsByClassName('btn next')[1].style.top = '27%'
    }
  });