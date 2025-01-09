document.addEventListener('DOMContentLoaded', () => {
  const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

  const today = new Date();
  const currentDay = today.getDay();
  const currentDayIndex = currentDay === 0 ? 6 : currentDay - 1;
  const weekDaysDiv = document.getElementById('weekDays');

  week.forEach((day, index) => {
    const dayItem = document.createElement('p');
    if (index === 5 || index === 6) {
      dayItem.className = 'italic';
    } else if (index === currentDayIndex) {
      dayItem.className = 'bold';
    }
    dayItem.textContent = day;
    weekDaysDiv.appendChild(dayItem);
    
  });
});

















