const HeroHomeTypeAnimation = function () {
  this.el = document.getElementById('word');
  this.cursor = document.getElementById('cursor');
  this.isDeleting = false;
  this.text = '';
  this.loopNum = 0;
  this.timeOut = 2500;
  this.words = this.cursor.innerHTML.split(', ');
  this.typePrint();
};

HeroHomeTypeAnimation.prototype.typePrint = function () {
  const i = this.loopNum % this.words.length;
  const fullText = this.words[i];
  let delta = 200 - Math.random() * 100;

  const direction = this.isDeleting ? -1 : 1;
  this.text = fullText.substring(0, this.text.length + direction);

  this.el.innerHTML = this.text;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.text === fullText) {
    delta = this.timeOut;
    this.isDeleting = true;
    this.cursor?.classList.add('PzIRwO');
  } else if (this.isDeleting && this.text === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    this.cursor?.classList.remove('PzIRwO');
  }

  setTimeout(() => {
    this.typePrint();
  }, delta);
};

window.onload = function () {
  new HeroHomeTypeAnimation();
};