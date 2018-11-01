$('#start-game').click(function () {
  const p1 = $('#p1').val();
  const p2 = $('#p2').val();
  // window.location.href = "game.html"
  window.location.href = `game.html?${p1}&${p2}`;
});
