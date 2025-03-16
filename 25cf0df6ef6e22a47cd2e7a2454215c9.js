(function () {
    document
      .querySelector('.notification-overlay')
      .addEventListener('click', function () {
        this.classList.remove('show')
      })
  })()