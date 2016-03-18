var $body = $('body');

$('html').on('keydown', function() {
  var $ball = $('<div>');
  $body.append($ball);
  var newLeft = Math.random() * 100;
  $ball.css('left', newLeft);
  var newTop = Math.random() * 200;
  $ball.css('top', newTop);
  $ball.addClass('ball');
});
