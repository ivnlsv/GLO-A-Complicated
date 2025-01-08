const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

const today = new Date();
const currentDay = today.getDay(); 
const currentDayIndex = currentDay === 0 ? 6 : currentDay - 1; 

week.forEach((day, index) => {
    if (index === 5 || index === 6) { 
        console.log(`%c${day}`, 'font-style: italic;');
    } else if (index === currentDayIndex) {
        console.log(`%c${day}`, 'font-weight: bold;');
    } else {
        console.log(day);
    }
});
