$(document).ready(function () {

 createColumn(4);

});
$(document).click(function () {
  window.getSelection().removeAllRanges();
});
function dialogBox(title, text, height, width) {
  $(".dialog").html(text);
  $(".dialog").dialog({
    dialogClass: "no-close",
    resizable: false,
    height: height,
    title: title,
    width: width,
    appendTo: 'body',
    show: {
      effect: "fade",
      duration: 200
    },
    hide: {
      effect: "fade",
      duration: 200
    },
    dialogClass: "no-close",
    buttons: [{
      text: "OK",
      click: function () {
        $(this).dialog("close");
      }
    }]
  });
};
function createColumn(number) {
for (var i = 1; i <= number; i++) {
var column = '<div class="column"><div class="colnum">'+ i +'</div><div class="numsteps"></div></div>';
$('#mainarea').append(column);
};
createSteps(32);
}
function createSteps(number) {
for (var i = 0; i < number; i++) {
var step = '<div class="line"><div class="step">'+ i +'</div>';
var row = '<div class="row"><div class="note noteinput">---</div> <div class="instrument noteinput">--</div> <div class="volume noteinput">--</div> <div class="effects noteinput">---</div></div></div>';
$('.numsteps').append(step);
};
$('.step').after(row);
}

$('#about').click(function () {
  var title = "About LunarTracker";
  var text = "LunarTracker v0.0.4a, by remmie" + "<br><br>Special thanks to kfaraday, malmen, puke7, and aji" + "<br><br>&lt;aji&gt; it's certainly possible but if you're trying to make tracker: google docs edition, you have a looooot of work cut out for you";
  dialogBox(title, text, 250, 400);
});
$(".ctrlbtn").hover(function () {
  $(this).toggleClass("ctrlbuttonhover", 50);
  $(this).css('cursor', 'pointer');
});
$("#traybutton").hover(function () {
  $(this).css('cursor', 'pointer');
});
$("#rightTab").hover(function () {
  $(this).css('cursor', 'pointer');
});
$("#leftTab").hover(function () {
  $(this).css('cursor', 'pointer');
});
$("#traybutton").click(function () {
  var $this = $(this);
  if ($this.hasClass("toggletray")) {
    $(this).addClass('trayclick');
    $(this).removeClass('toggletray');
    $(this).html("▲");
    $(this).animate({
      bottom: "0px",
    }, 500);
    $('#tray').animate({
      bottom: "-33%",
    }, 500);
  } else if ($this.hasClass("trayclick")) {
    $(this).addClass('toggletray');
    $(this).removeClass('trayclick');
    $(this).html("▼");
    $(this).animate({
      bottom: "33%",
    }, 500);
    $('#tray').animate({
      bottom: "0px",
    }, 500);
  };
});
$("#leftTab").click(function () {
  var $tray = $('#tray');
  var $tabnum = $('#tabnum');
  if ($tray.hasClass("tab1")) {
    $tray.addClass('tab3');
    $tray.removeClass('tab1');
    $('#traybutton').addClass('tab3');
    $('#traybutton').removeClass('tab1');
    $tabnum.html("Keyboard");
  } else if ($tray.hasClass("tab2")) {
    $tray.addClass('tab1');
    $tray.removeClass('tab2');
    $('#traybutton').addClass('tab1');
    $('#traybutton').removeClass('tab2');
    $tabnum.html("Sample Editor");
  } else if ($tray.hasClass("tab3")) {
    $tray.addClass('tab2');
    $tray.removeClass('tab3');
    $('#traybutton').addClass('tab2');
    $('#traybutton').removeClass('tab3');
    $tabnum.html("Envelopes");
  };
});
$("#rightTab").click(function () {
  var $tray = $('#tray');
  var $tabnum = $('#tabnum');
  if ($tray.hasClass("tab1")) {
    $tray.addClass('tab2');
    $tray.removeClass('tab1');
    $('#traybutton').addClass('tab2');
    $('#traybutton').removeClass('tab1');
    $tray.addClass('trayclick');
    $tray.removeClass('toggletray');
    $tabnum.html("Envelopes");
  } else if ($tray.hasClass("tab2")) {
    $tray.addClass('tab3');
    $tray.removeClass('tab2');
    $('#traybutton').addClass('tab3');
    $('#traybutton').removeClass('tab2');
    $tabnum.html("Keyboard");
  } else if ($tray.hasClass("tab3")) {
    $tray.addClass('tab1');
    $tray.removeClass('tab3');
    $('#traybutton').addClass('tab1');
    $('#traybutton').removeClass('tab3');
    $tabnum.html("Sample Editor");
  };
});
$("#record").click(function () {
var selected = $(".selected");
selected.removeClass(".selected");
selected.addClass(".inputting");
});