/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function Player(name) {
  this.name = name;
  this.error = 0;
  this.score = 0;
  this.bomb = new ClockBomb();
}
