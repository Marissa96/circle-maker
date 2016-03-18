var $body = $('body');

$('html').on('keydown', function() {
  var $ball = $('<div>');
  $body.append($ball);
  var newLeft = Math.random() * 1000;
  $ball.css('left', newLeft);
  var newTop = Math.random() * 1000;
  $ball.css('top', newTop);
  $ball.addClass('ball');
});
