(function () {
    var start = new Date('2020-04-04T00:00:00');
    var end = new Date('2020-04-05T00:00:00');
    var now = new Date();

    if (start <= now && now <= end) {
      document.body.className += ' gray-screen';
    }
  }());