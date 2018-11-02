const RESULT = window.location.href
  .slice(window.location.href.indexOf('?') + 1)
  .split('&');

$('#top').text(RESULT[0]);
$('#front').text('POINTS');
$('#left').text(RESULT[2]);
$('#player').text(`${RESULT[1]} WON`);
$('#player-score').text(`${RESULT[2]} POINTS`);

$('#btn-play-again').click(function () {
  window.location.href = 'main.html';
});
