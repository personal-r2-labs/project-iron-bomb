/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const idMin1 = $('#idMin1');
const idMin2 = $('#idMin2');
const idSec1 = $('#idSec1');
const idSec2 = $('#idSec2');
const idQuestion = $('#idQuestion');
// let IDX1 = 0;
// let IDX2 = 0;
const game = new Game();
const RESULT = window.location.href
  .slice(window.location.href.indexOf('?') + 1)
  .split('&');

function Game() {
  this.turn = 1;
  this.questions = [];
  this.questionIDX = 0;
}

Game.prototype.addQuestions = function (arr, qt) {
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
Game.prototype.addPlayer = function (nameP1, nameP2) {
  this.player1 = new Player(nameP1);
  this.player2 = new Player(nameP2);
};

Game.prototype.answer = function () {
  const ANSWER = document.getElementById('answer').value;
  console.log(ANSWER);
  const P1 = game.player1;
  const P2 = game.player2;
  if (this.turn === 1) {
    if (game.questions[game.questionIDX].result === ANSWER) {
      P1.error = 0;
      P1.score += game.questions[game.questionIDX].points;
      game.questionIDX += 1;
    } else if (game.questions[game.questionIDX].result !== ANSWER) {
      P1.error -= 1;
      game.questionIDX += 1;
    }
    this.turn = 2;
    P1.bomb.stop();
    P2.bomb.start();
  } else if (this.turn === 2) {
    if (game.questions[game.questionIDX].result === ANSWER) {
      P2.error = 0;
      P2.score += game.questions[game.questionIDX].points;
      game.questionIDX += 1;
    } else if (game.questions[game.questionIDX].result !== ANSWER) {
      P2.error -= 1;
      game.questionIDX += 1;
    }
    this.turn = 1;
    P2.bomb.stop();
    P1.bomb.start();
  }
  console.log(P1.score, P2.score, P1.error, P2.error);
  if (P1.error === -2 || P2.error === -2) game.lose();
  if (game.questionIDX >= game.questions.length - 1) game.won();
  $('span').remove();
  idQuestion.append(game.questions[game.questionIDX].code);
};

Game.prototype.won = function () {
  const P1 = game.player1;
  const P2 = game.player2;
  let result;
  if (P1.score > P2.score) {
    result = `${P1.name}&${P1.score}&${P1.bomb.minClock}&${P1.bomb.secClock}`;
  } else if (P1.score < P2.score) {
    result = `${P2.name}&${P2.score}&${P2.bomb.minClock}&${P2.bomb.secClock}`;
  }
  window.location.href = `won.html?${result}`;
};

Game.prototype.lose = function () {
  window.location.href = 'lose.html';
};

function gameStart() {
  // initialize the game object

  // Add names to players
  game.addPlayer(RESULT[0], RESULT[1]);

  // Generate questions
  game.addQuestions(QEASY, 12);

  // Display the first question
  idQuestion.append(game.questions[game.questionIDX].code);

  setClock();
  printTime();

  game.player1.bomb.start();
}

function setClock() {
  game.player1.bomb.idMin = idMin1;
  game.player1.bomb.idSec = idSec1;
  game.player2.bomb.idMin = idMin2;
  game.player2.bomb.idSec = idSec2;
}

function printTime() {
  game.player1.bomb.printTime();
  game.player2.bomb.printTime();
}

$('#answer-btn').click(function () {
  game.answer();
});
