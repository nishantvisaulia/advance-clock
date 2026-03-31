function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDeg = seconds * 6;
  const minDeg = minutes * 6;
  const hourDeg = hours * 30 + minutes / 2;

  // Clock hands rotate
  document.getElementById("second").style.transform =
    `translateX(-50%) rotate(${secDeg}deg)`;

  document.getElementById("minute").style.transform =
    `translateX(-50%) rotate(${minDeg}deg)`;

  document.getElementById("hour").style.transform =
    `translateX(-50%) rotate(${hourDeg}deg)`;


  // 📅 Date, Day, Month logic
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

  const day = dayNames[now.getDay()];
  const date = now.getDate();
  const month = monthNames[now.getMonth()];

  document.getElementById("day").innerText = day;
  document.getElementById("date").innerText = date;
  document.getElementById("month").innerText = month;
}

// Run every second
setInterval(updateClock, 1000);

// Run immediately
updateClock();
