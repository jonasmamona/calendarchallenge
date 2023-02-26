import {
  daysOfWeek,
  months,
  isLeapYear,
  numberOfDaysInMonth,
  IsSameDay,
  getCurrentMonthFromDate,
  getYear,
  getDateAsSentence,
} from "./calendar";

describe("isLeapYear", () => {
  test("returns true for leap year", () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test("returns false for non-leap year", () => {
    expect(isLeapYear(2021)).toBe(false);
  });
});

describe("numberOfDaysInMonth", () => {
  test("returns 28 for February 2021", () => {
    expect(numberOfDaysInMonth("February", 2021)).toBe(28);
  });

  test("returns 29 for February 2020", () => {
    expect(numberOfDaysInMonth("February", 2020)).toBe(29);
  });

  test("returns 31 for January", () => {
    expect(numberOfDaysInMonth("January", 2021)).toBe(31);
  });

  test("returns 30 for April", () => {
    expect(numberOfDaysInMonth("April", 2021)).toBe(30);
  });
});

describe("IsSameDay", () => {
  test("returns true for same day", () => {
    const date1 = new Date("2021-03-01T00:00:01Z");
    const date2 = new Date("2021-03-01T00:00:01Z");
    expect(IsSameDay(date1, date2)).toBe(true);
  });

  test("returns false for different day", () => {
    const date1 = new Date("2021-03-01T00:00:01Z");
    const date2 = new Date("2021-03-02T00:00:01Z");
    expect(IsSameDay(date1, date2)).toBe(false);
  });
});

describe("getCurrentMonthFromDate", () => {
  test("returns correct month", () => {
    const date = new Date("2021-03-02T00:01:01Z");
    expect(getCurrentMonthFromDate(date)).toBe("March");
  });
});

describe("getYear", () => {
  test("returns correct year", () => {
    const date = new Date("2021-03-01T00:00:01Z");
    expect(getYear(date)).toBe(2021);
  });
});

