try {
  Object.defineProperty(window, 'adverts', {configurable: false, value:{}});
}
catch(error) {
  console.error(error);
}