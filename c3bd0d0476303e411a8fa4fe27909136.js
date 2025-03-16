function getXuid() {
  const result = document.cookie.match(/(?:^|; )lid=(.*?)(?:;|$)/);
  return result && result[1];
}
window._config_aab = {
  publisherFirstParty: {
    uid: getXuid(),
    scope: '.lenta.ru'
  }
};