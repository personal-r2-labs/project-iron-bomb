/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const idMin1 = $('#idMin1');
const idMin2 = $('#idMin2');
const idSec1 = $('#idSec1');
const idSec2 = $('#idSec2');
const idQuestion = $('#idQuestion');
const player1 = $('#player1');
const player2 = $('#player2');

// Create the new game Object
const game = new Game();

//
const RESULT = window.location.href
  .slice(window.location.href.indexOf('?') + 1)
  .split('&');

// Constructor function Game
function Game() {
  this.turn = 1;
  this.questions = [];
  this.questionIDX = 0;
}

// Function to add questions to game
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

// Function to add players to game
Game.prototype.addPlayer = function (nameP1, nameP2) {
  this.player1 = new Player(nameP1);
  this.player2 = new Player(nameP2);
  player1.text(this.player1.name);
  player2.text(this.player2.name);
};

// Validate the answer from player and switch player
Game.prototype.answer = function () {
  const ANSWER = document.getElementById('answer').value;
  const BOMB = $('.bomb-item');
  const P1SCORE = $('#player1-score');
  const P2SCORE = $('#player2-score');
  const P1 = game.player1;
  const P2 = game.player2;
  if (this.turn === 1) {
    if (game.questions[game.questionIDX].result === ANSWER) {
      P1.error = 0;
      P1.score += game.questions[game.questionIDX].points;
      P1SCORE.text(`${P1.score} POINTS`);
      game.questionIDX += 1;
    } else if (game.questions[game.questionIDX].result !== ANSWER) {
      P1.error -= 1;
      game.questionIDX += 1;
    }
    this.turn = 2;
    P1.bomb.stop();
    P2.bomb.start();
    BOMB.toggle();
  } else if (this.turn === 2) {
    if (game.questions[game.questionIDX].result === ANSWER) {
      P2.error = 0;
      P2.score += game.questions[game.questionIDX].points;
      P2SCORE.text(`${P2.score} POINTS`);
      game.questionIDX += 1;
    } else if (game.questions[game.questionIDX].result !== ANSWER) {
      P2.error -= 1;
      game.questionIDX += 1;
    }
    this.turn = 1;
    P2.bomb.stop();
    P1.bomb.start();
    BOMB.toggle();
  }
  if (P1.error === -2 || P2.error === -2) game.lose();
  if (game.questionIDX >= game.questions.length) game.won();
  $('span').remove();
  idQuestion.append(game.questions[game.questionIDX].code);
};

// Function to
Game.prototype.won = function () {
  const P1 = game.player1;
  const P2 = game.player2;
  let result;
  if (P1.score > P2.score) {
    result = `P1&${P1.name}&${P1.score}&${P1.bomb.minClock}&${P1.bomb.secClock}`;
  } else if (P1.score < P2.score) {
    result = `P2&${P2.name}&${P2.score}&${P2.bomb.minClock}&${P2.bomb.secClock}`;
  } else if (P1.bomb.time > P2.bomb.time) {
    result = `P1&${P1.name}&${P1.score}&${P1.bomb.minClock}&${P1.bomb.secClock}`;
  } else if (P1.bomb.time < P2.bomb.time) {
    result = `P2&${P2.name}&${P2.score}&${P2.bomb.minClock}&${P2.bomb.secClock}`;
  }
  window.location.href = `won.html?${result}`;
};

Game.prototype.lose = function () {
  window.location.href = 'lose.html';
};

// Function to initialize the game
function gameStart() {
  // Add names to players
  game.addPlayer(RESULT[0], RESULT[1]);

  // Generate questions
  game.addQuestions(QEASY, 12);

  // Display the first question
  idQuestion.append(game.questions[game.questionIDX].code);

  // Set Clock and print the time on clock
  setClock();
  printTime();

  // Start the clock from player 1
  game.player1.bomb.start();
}

//
function setClock() {
  game.player1.bomb.idMin = idMin1;
  game.player1.bomb.idSec = idSec1;
  game.player2.bomb.idMin = idMin2;
  game.player2.bomb.idSec = idSec2;
}

// Display time on objects bombs
function printTime() {
  game.player1.bomb.printTime();
  game.player2.bomb.printTime();
}

// Click button Answer
$('#answer-btn').click(function () {
  game.answer();
  document.getElementById('answer').value = '';
});
