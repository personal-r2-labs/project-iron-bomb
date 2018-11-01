function ClockBomb() {
  this.time = 600;
  this.minClock = 10;
  this.secClock = 0;
}
// Add '0' to number above of ten
ClockBomb.prototype.addZero = function (value) {
  return value < 10 ? `0${value}` : value;
};
// Clock from bomb start to count
ClockBomb.prototype.start = function () {
  this.countDown = setInterval(() => {
    this.time -= 1;
    this.minClock = this.addZero(Math.floor(this.time / 60));
    this.secClock = this.addZero(this.time % 60);
    console.log(this.minClock, this.secClock);
  }, 1000);
};
ClockBomb.prototype.stop = function () { clearInterval(this.countDown); };

ClockBomb.prototype.printTime = function (idMin, idSec) {
  idMin.text(this.minClock);
  idSec.text(this.secClock);
};
