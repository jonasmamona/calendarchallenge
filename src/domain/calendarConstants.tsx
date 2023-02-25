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
