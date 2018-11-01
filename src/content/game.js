const idMin1 = $('#idMin1');
const idMin2 = $('#idMin2');
const idSec1 = $('#idSec1');
const idSec2 = $('#idSec2');
const idQuestion = $('#question');
const game = new Game();
const bomb1 = game.player1.bomb;
const bomb2 = game.player2.bomb;

function Game() {
  this.turn = 1;
}

Game.prototype.addPlayer = function (nameP1, nameP2) {
  this.player1 = new Player(nameP1);
  this.player2 = new Player(nameP2);
};

Game.prototype.sliceQuestions = function (arr) {
  const MIDDLE = arr.length / 2;
  const END = arr.length;
  this.player1Questions = arr.slice(0, MIDDLE);
  this.player2Questions = arr.slice(MIDDLE, END);
};

Game.prototype.generateQuestions = function (arr) {
  const ARRQ = arr;
  let currentIndex = arr.length;
  let temporaryValue;
  let ramdomIndex;
  while (currentIndex !== 0) {
    ramdomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = ARRQ[currentIndex];
    ARRQ[currentIndex] = ARRQ[ramdomIndex];
    ARRQ[ramdomIndex] = temporaryValue;
  }
  this.sliceQuestions(ARRQ);
};

function gameStart() {
  // initialize the game object

  // Add names to players
  const RESULT = window.location.href
    .slice(window.location.href.indexOf('?') + 1)
    .split('&');
  game.addPlayer(RESULT[0], RESULT[1]);

  // Generate questions
  game.generateQuestions(QEASY);
  game.player1.addQuestions(game.player1Questions, 4);
  game.player2.addQuestions(game.player2Questions, 4);

  // Display the first question
  idQuestion.append(game.player1.questions[0].code);
}

function printTime() {
  printTime
}


