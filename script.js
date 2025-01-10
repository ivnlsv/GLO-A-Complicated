function getHourWord(hour) {
  if (hour % 10 === 1 && hour % 100 !== 11) {
      return 'час';
  } else if ((hour % 10 >= 2 && hour % 10 <= 4) && (hour % 100 < 10 || hour % 100 >= 20)) {
      return 'часа';
  } else {
      return 'часов';
  }
}

function formatTimeUnit(unit) {
  return unit < 10 ? '0' + unit : unit;
}

function displayDateTime() {
  const now = new Date();
  const weekday = now.toLocaleString('ru-RU', { weekday: 'long' });
  const day = now.getDate();
  const month = now.toLocaleString('ru-RU', { month: 'long' });
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourWord = getHourWord(hours);
  const formattedDateA = `Сегодня ${weekday}, ${day} ${month} ${year} года, ${hours} ${hourWord} ${minutes} минут ${seconds} секунд`;
  const formattedDateB = `${formatTimeUnit(day)}.${formatTimeUnit(now.getMonth() + 1)}.${year} - ${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;

  document.getElementById('date-time-a').innerText = formattedDateA;
  document.getElementById('date-time-b').innerText = formattedDateB;
}

setInterval(displayDateTime, 1000);
displayDateTime();
