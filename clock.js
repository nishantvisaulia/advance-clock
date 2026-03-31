function clockRotation() {
serInterval(function() {
var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();
var secondsRotation = seconds * 6;
var minutesRotaion = minutes * 6;
var hoursRotation = Hours * 30 + minutes / 2;
$("#seconds").css({
"-webkit-transform": "rotate(" +
secondsRotaton + "ge)",
transform:"rotate(" +
secondsRotation + "deg)"
});
}, 1000);
}
