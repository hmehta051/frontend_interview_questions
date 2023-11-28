// Dates

const todayDate = new Date();
const todayDateNow = Date.now();
// console.log(typeof todayDate[Symbol.toPrimitive]("string"));
// console.log(typeof todayDate[Symbol.toPrimitive]("number"));

//9 ways to write new Date
//1. new Date(date string)
const d1 = new Date("October 13, 2014 11:13:00");
const d2 = new Date("2022-03-25"); // yyyy-mm-dd
const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d1, d2);
// console.log(d3);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateObj = {
  dateStr: todayDate.toString(),
  toDateStr: todayDate.toDateString(),
  utcString: todayDate.toUTCString(),
  isoString: todayDate.toISOString(),
  localStr: todayDate.toLocaleString("en-US", options),
  localDateStr: todayDate.toLocaleDateString("de-DE", options),
  timeStr: todayDate.toLocaleTimeString("en-US"),
};
console.log(dateObj);

let currDate = Date.now();
currDate = currDate - 1000000000;
const currentDate = new Date(currDate);
const currObj = {
  dateStr: currentDate.toString(),
  toDateStr: currentDate.toDateString(),
  utcString: currentDate.toUTCString(),
  isoString: currentDate.toISOString(),
  localStr: currentDate.toLocaleString("en-US", options),
  localDateStr: currentDate.toLocaleDateString("de-DE", options),
  timeStr: currentDate.toLocaleTimeString("en-US"),
};
console.log(currObj);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Date.now() with a year
let years = Math.round(Date.now() / year);
console.log(years);

//set method

const td = new Date();
const dn = Date.now();
const dnow = new Date(dn);
td.setFullYear(2021, 0, 1);
dnow.setFullYear(2021);
console.log(td, dnow);

console.log("START HERE");

// date - 1633676344340
// 	checkDate(date) -> today
// checkDate(date) -> tomorrow
// checkDate(date) -> Aug 23, 2021

function checkDate(numericData) {
  const date1 = new Date(numericData);
  const date1Date = date1.getDate();
  const date1Month = date1.getMonth();
  const date1Year = date1.getFullYear();
  const todayDate = new Date();
  const todayDateDate = todayDate.getDate();
  const todayDateMonth = todayDate.getMonth();
  const todayDateYear = todayDate.getFullYear();

  if (
    date1Date === todayDateDate &&
    date1Month === todayDateMonth &&
    date1Year === todayDateYear
  ) {
    console.log("Today");
  } else if (
    date1Date === todayDateDate + 1 &&
    date1Month === todayDateMonth &&
    date1Year === todayDateYear
  ) {
    console.log("Tomorrow");
  } else {
    console.log(
      date1.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    );
  }
}
checkDate(1650461086415);
