const a = "01/01/2023";
const b = "10/02/2023";

// Split date strings into day, month, and year components
const [day1, month1, year1] = a.split("/");
const [day2, month2, year2] = b.split("/");

// Compare the year component first
if (year1 < year2) {
  console.log(`${a} is the earliest date`);
} else if (year1 > year2) {
  console.log(`${b} is the earliest date`);
} else {
  // If the years are the same, compare the month component
  if (month1 < month2) {
    console.log(`${a} is the earliest date`);
  } else if (month1 > month2) {
    console.log(`${b} is the earliest date`);
  } else {
    // If the months are the same, compare the day component
    if (day1 < day2) {
      console.log(`${a} is the earliest date`);
    } else if (day1 > day2) {
      console.log(`${b} is the earliest date`);
    } else {
      console.log(`Both dates are the same`);
    }
  }
}
