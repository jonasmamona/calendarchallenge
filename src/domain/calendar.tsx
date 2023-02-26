import { isEqual } from "date-fns";

export type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type Day = number;

export type Year = number;

export type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export type DayOfWeekShort =
  | "Sun"
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat";

export const daysOfWeek: DayOfWeek[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const daysOfWeekShort: DayOfWeekShort[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export const months: Month[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const isLeapYear = (year: Year): boolean => {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
};

export const numberOfDaysInMonth = (month: Month, year: Year): number => {
  switch (month) {
    case "January":
      return 31;
    case "February":
      if (isLeapYear(year)) {
        return 29;
      }
      return 28;
    case "March":
      return 31;
    case "April":
      return 30;
    case "May":
      return 31;
    case "June":
      return 30;
    case "July":
      return 31;
    case "August":
      return 31;
    case "September":
      return 30;
    case "October":
      return 31;
    case "November":
      return 30;
    case "December":
      return 31;
  }
};

function getDayOfWeekAsString(dayIndex: number): string {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][dayIndex];
}

function getCurrentMonthFromDate(date: Date): Month {
  const currentMonth = date.getMonth();
  return months[currentMonth];
}

export function IsSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function getYear(date: Date): Year {
  return date.getFullYear();
}

function getDateAsSentence(date: Date): string {
  if (!date) {
    date = new Date();
  }

  const currentDayOfWeek = date.getDay();
  const currentDay = date.getDate();

  return (
    getDayOfWeekAsString(currentDayOfWeek) +
    ", " +
    getCurrentMonthFromDate(date) +
    " " +
    currentDay +
    ", " +
    getYear(date)
  );
}

function compareDates(date1: Date, date2: Date): boolean {
  return isEqual(date1, date2);
}

function compareDateWithDayIndex(day: number, date: Date): boolean {
  let newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    day,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );

  return compareDates(newDate, date);
}

export {
  getCurrentMonthFromDate,
  getDateAsSentence,
  getYear,
  compareDates,
  compareDateWithDayIndex,
};
