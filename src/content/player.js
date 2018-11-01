function Player(name) {
  this.name = name;
  this.error = 0;
  this.score = 0;
  this.questions = [];
}

Player.prototype.addQuestions = function (arr, qt) {
  if (qt >= arr.length) this.questions = arr;
  let ramdomIndex;
  for (let i = 0; i < qt; i += 1) {
    const currentIndex = arr.length;
    ramdomIndex = Math.floor(Math.random() * currentIndex);
    const obj = arr.splice(ramdomIndex, 1);
    this.questions.push(obj[0]);
  }
};
