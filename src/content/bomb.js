function ClockBomb() {
  this.time = 600;
  this.minClock = 10;
  this.secClock = '00';
  this.idMin = '';
  this.idSec = '';
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
    this.printTime();
  }, 1000);
};
ClockBomb.prototype.stop = function () { clearInterval(this.countDown); };

// Print time on bomb object
ClockBomb.prototype.printTime = function () {
  this.idMin.text(this.minClock);
  this.idSec.text(this.secClock);
};
