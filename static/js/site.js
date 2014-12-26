$(document).ready(function () {
  $(".startbutton").hover(function () {
    $(this).toggleClass("buttonhover", 100);
    $(this).css('cursor', 'pointer');
  });
  $("#demo").click(function () {
    $('body').fadeOut(0);
    $('body').html('');
    $('body').load('/static/tracker.html').fadeIn(100);
  });
    $('#register').click(function () {
  var form = '<input type="email" placeholder="Email"><input type="text" placeholder="Username">';
      $('#set').fadeOut(0);
      $('#set').html('')
  $('#set').html(form).fadeIn(100);
  });
});