(async () => {
          await customElements.whenDefined('dds-masthead-container');
          document.getElementById('anti-flicker-style').remove();
          document.getElementById('anti-flicker-script').remove();
        })()