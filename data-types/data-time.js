//Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

let d1 = new Date(2012, 1, 20, 3, 12);
console.log(d1);

//Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

const getWeekDay = (date) => {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

let date1 = new Date(2021, 0, 4);
console.log(getWeekDay(date1))

// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

const getLocalDay = (date) => {

    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}

let date2 = new Date(2012, 0, 3);
console.log(getLocalDay(date2))

//Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.


const getLastDayOfMonth = (year, month) => {
    let date3 = new Date(year, month + 1, 0);
    return date3.getDate();
}

console.log(getLastDayOfMonth(2021, 0));
console.log(getLastDayOfMonth(2021, 1));
console.log(getLastDayOfMonth(2021, 2));

//Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

const getSecondsToday = () => {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToday());