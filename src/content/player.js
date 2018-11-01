function Player(name) {
  this.name = name;
  this.error = 0;
  this.score = 0;
  this.questions = [];
  this.bomb = new ClockBomb();
}

Player.prototype.addQuestions = function (arr, qt) {
  if (qt >= arr.length) this.questions = arr;
  let ramdomIndex;
  let currentIndex;
  let obj;
  for (let i = 0; i < qt; i += 1) {
    currentIndex = arr.length;
    ramdomIndex = Math.floor(Math.random() * currentIndex);
    obj = arr.splice(ramdomIndex, 1);
    this.questions.push(obj[0]);
  }
};
