function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDeg = seconds * 6;
  const minDeg = minutes * 6;
  const hourDeg = hours * 30 + minutes / 2;

  document.getElementById("second").style.transform =
    `translateX(-50%) rotate(${secDeg}deg)`;

  document.getElementById("minute").style.transform =
    `translateX(-50%) rotate(${minDeg}deg)`;

  document.getElementById("hour").style.transform =
    `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
