function imageLoadError(img) {
    const fallbackImage = '/media/sites/cnn/cnn-fallback-image.jpg';

    img.removeAttribute('onerror');
    img.src = fallbackImage;
    let element = img.previousElementSibling;

    while (element && element.tagName === 'SOURCE') {
      element.srcset = fallbackImage;
      element = element.previousElementSibling;
    }
  }