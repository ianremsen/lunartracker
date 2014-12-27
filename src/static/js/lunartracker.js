// LunarTracker v0.0.4e
$(document).ready(function () {
  readFile("modules/sample.ltm");
});
$(document).click(function () {
  window.getSelection().removeAllRanges();
});

function dialogBox(title, text, height, width, buttons) {
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
      duration: 100
    },
    hide: {
      effect: "fade",
      duration: 100
    },
    buttons: buttons
  });
}

function leftPad(number, targetLength) {
  var output = number + '';
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output;
}

function readFile(filename) {
  $.getJSON(filename, function (module) {
    var numColumns = module.structure.columns;
    var tempo = module.structure.tempo;
    var numSteps = module.structure.num_steps;
    var numInstruments = module.structure.num_instruments;
    var instruments = module.instruments;
    var numSamples = module.structure.num_samples;
    var samples = module.samples;
    createColumn(numColumns, numSteps);
    $('#tempo').html(tempo);
    $('#instruments').append('<div class="numinstruments"></div>');
    for (var i = 0; i < numInstruments; i++) {
      var j = leftPad(i, 4);
      var name = instruments[j].name;
      var step = '<div class="line"><div class="instrumentstep">' + leftPad(i, 2) + '</div><div class="instrumentrow">' + name + '</div></div>';
      $('.numinstruments').append(step);
    }
    $('#samples').append('<div class="numsamples"></div>');
    for (var i = 0; i < numSamples; i++) {
      var j = leftPad(i, 4);
      var name = samples[j].name;
      var step = '<div class="line"><div class="samplestep">' + leftPad(i, 2) + '</div><div class="samplerow">' + name + '</div></div>';
      $('.numsamples').append(step);
    }
  });
}

function createColumn(numCol, numSteps) {
  for (var i = 1; i <= numCol; i++) {
    var column = '<div class="column"><div class="colnum">' + leftPad(i, 2) + '</div><div class="numsteps"></div></div>';
    $('#mainarea').append(column);
  }
  createSteps(numSteps);
}

function createSteps(number) {
  for (var i = 0; i < number; i++) {
    var step = '<div class="line"><div class="step">' + leftPad(i, 2) + '</div>';
    createSteps.row = '<div class="row"><div class="note noteinput">---</div> <div class="instrument noteinput">--</div> <div class="volume noteinput">--</div> <div class="effects noteinput">---</div></div></div>';
    $('.numsteps').append(step);
  }
  $('.step').after(createSteps.row);
}

function createSamples(number) {
  var column = '<div class="numsamples"></div>';
  $('#samples').append(column);
  createSampSteps(number);
}

function createSampSteps(number) {
  for (var i = 0; i < number; i++) {
    var step = '<div class="line"><div class="samplestep">' + leftPad(i, 2) + '</div>';
    createSampSteps.row = '<div class="samplerow"></div>';
    $('.numsamples').append(step);
  }
  $('.samplestep').after(createSampSteps.row);
}
$('#about').click(function () {
  var title = "About LunarTracker";
  var buttons = [{
    text: "OK",
    click: function () {
      $(this).dialog("close");
    }
  }];
  var text = "LunarTracker v0.0.4e, by remmie" + "<br><br>Special thanks to kfaraday, malmen, puke7, slimeball, and aji" + "<br><br>&lt;aji&gt; it's certainly possible but if you're trying to make tracker: google docs edition, you have a looooot of work cut out for you";
  dialogBox(title, text, 250, 400, buttons);
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
  }
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
  }
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
  }
});
$("#record").click(function () {
  if (!$(this).hasClass("clicked")) {
    $(this).addClass("clicked");
    $(".selected").css("background-color", "#E71D32");
    $("#menubar").css("background-color", "#4C0A17");
    $(".selected").addClass(".inputting");
    $(this).css("background-color", "#E71D32");
  } else {
    $("#menubar").css("background-color", "#010205");
    $(this).css("background-color", "transparent");
    $(this).removeClass("clicked");
  }
});