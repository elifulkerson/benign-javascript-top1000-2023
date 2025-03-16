// WSYIWYG button text fix
  document.querySelectorAll('.embedded-content-cookie-message').forEach(function (message) {
      if (!message.querySelector('#ot-sdk-btn')) {
        const p = message.querySelector('p');
        if (p) {
            p.innerHTML = p.innerHTML + ' cookie settings using the link in the footer.';
        }
      }
  });