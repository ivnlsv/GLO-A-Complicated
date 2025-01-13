function getWordHour(hour) {
  if (hour % 10 === 1 && hour % 100 !== 11) {
    return "час";
  } else if (
    hour % 10 >= 2 &&
    hour % 10 <= 4 &&
    (hour % 100 < 10 || hour % 100 >= 20)
  ) {
    return "часа";
  } else {
    return "часов";
  }
}

function formatTime(item) {
  return item < 10 ? "0" + item : item;
}

function dateTime() {
  const now = new Date();
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const weekday = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const wordHour = getWordHour(hours);
  const longDate = `Сегодня ${weekday}, ${day} ${month} ${year} года, ${hours} ${wordHour} ${minutes} минут ${seconds} секунд`;
  const shortDate = `${formatTime(day)}.${formatTime(
    now.getMonth() + 1
  )}.${year} - ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
    seconds
  )}`;

  document.getElementById("date-time-full").innerText = longDate;
  document.getElementById("date-time-short").innerText = shortDate;
}

setInterval(dateTime, 1000);
dateTime();
