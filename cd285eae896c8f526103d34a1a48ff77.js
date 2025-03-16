const breakingItems = document.querySelectorAll('.breaking-item');
    const carouselContainer = document.querySelector('.carousel-container');
    const bulletsContainer = document.querySelector('.carousel-bullets');

    let currentIndex = 0;

    function updateCarousel() {
      breakingItems.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      setActiveBullet();
    }

    function setActiveBullet() {
      const bullets = document.querySelectorAll('.carousel-bullet');
      bullets.forEach((bullet, index) => {
        if (index === currentIndex) {
          bullet.classList.add('active');
        } else {
          bullet.classList.remove('active');
        }
      });
    }

    if (breakingItems.length > 1) {  
      function createBullets() {
        breakingItems.forEach((_, index) => {
          const bullet = document.createElement('div');
          bullet.classList.add('carousel-bullet');
          bullet.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
          });
          bulletsContainer.appendChild(bullet);
        });
        setActiveBullet();
      }
      createBullets();
    }

    // Swipe handling for mobile using Hammer.js
    const hammer = new Hammer(carouselContainer);

    hammer.on('swipeleft', () => {
      if (currentIndex < breakingItems.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    hammer.on('swiperight', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });