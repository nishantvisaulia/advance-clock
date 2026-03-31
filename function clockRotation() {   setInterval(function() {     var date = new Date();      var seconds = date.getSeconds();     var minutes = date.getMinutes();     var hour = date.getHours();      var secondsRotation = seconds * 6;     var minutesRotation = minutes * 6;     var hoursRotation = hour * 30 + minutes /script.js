function clockRotation() {
  setInterval(function() {
    var date = new Date();

    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();

    var secondsRotation = seconds * 6;
    var minutesRotation = minutes * 6;
    var hoursRotation = hour * 30 + minutes / 2;

    $("#seconds").css({
      "-webkit-transform": "rotate(" + secondsRotation + "deg)",
      "transform": "rotate(" + secondsRotation + "deg)"
    });

    $("#minutes").css({
      "-webkit-transform": "rotate(" + minutesRotation + "deg)",
      "transform": "rotate(" + minutesRotation + "deg)"
    });

    $("#hours").css({
      "-webkit-transform": "rotate(" + hoursRotation + "deg)",
      "transform": "rotate(" + hoursRotation + "deg)"
    });

  }, 1000);
}
