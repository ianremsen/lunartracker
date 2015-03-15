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
    var notifyRef = new Firebase('https://lunartracker.firebaseio.com/notify/');
    var form = '<input id="email" type="email" placeholder="Email"><input id="username" type="text" placeholder="Username">';
    $('#set').fadeOut(0);
    $('#set').html('');
    $('#set').html(form).fadeIn(100);
    $('input').keypress(function (e) {
      if (e.keyCode === 13) {
        $emailinput = $('#email').val().replace(/\s+/g, ' ');
        $usernameinput = $('#username').val().replace(/\s+/g, ' ');
        if ($emailinput !== '' && $emailinput !== ' ' && $usernameinput !== '' && $usernameinput !== ' ') {
          notifyRef.push({
            username: $usernameinput,
            email: $emailinput
          });
          $('#set').fadeOut(0);
          $('#set').html('Thank you, you have been added to the list of people to notify when LunarTracker becomes functional!').fadeIn(200);
          setTimeout(function () {
            window.location.href = "http://lunartracker.cultfan.club";
          }, 5000);
        }
      }
    });
  });
});