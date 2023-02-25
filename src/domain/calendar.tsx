import { Month, Year, months } from "./calendarConstants";
import { isEqual } from "date-fns";

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
  let newDate = new Date(date.getFullYear(), date.getMonth(), day, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());

  return compareDates(newDate, date);
}

export {
  getCurrentMonthFromDate,
  getDateAsSentence,
  getYear,
  compareDates,
  compareDateWithDayIndex,
};
