import { IsSameDay } from "./calendar";

type ReminderList = "ReminderList";
type AddReminder = "AddReminder";
type EditReminder = "EditReminder";

export type ReminderPage = ReminderList | AddReminder | EditReminder;

export type Green = "#C8E6C9";
export type Yellow = "#F5DD29";
export type Orange = "#FFCC80";
export type Red = "#EF9A9A";
export type Purple = "#CD8DE5";
export type Blue = "#5BA4CF";
export type LightBlue = "#29CCE5";
export type LightGreen = "#6DECA9";
export type Pink = "#FF8ED4";
export type Grey = "#BCAAA4";

export type ReminderColor = Green | Yellow | Orange | Red | Purple | Blue | LightBlue | LightGreen | Pink | Grey;

export const colors: ReminderColor[] = [
  "#C8E6C9",
  "#F5DD29",
  "#FFCC80",
  "#EF9A9A",
  "#CD8DE5",
  "#5BA4CF",
  "#29CCE5",
  "#6DECA9",
  "#FF8ED4",
  "#BCAAA4",
];
  

export type Reminder = {
  id: string;
  title: string;
  description: string;
  date: Date;
  color: ReminderColor;
};

export function DoesReminderExistForDate(
  date: Date,
  reminders: Reminder[]
): boolean {
  return reminders.some((reminder) => IsSameDay(reminder.date, date));
}

export function GetRemindersForDate(
  date: Date,
  reminders: Reminder[]
): Reminder[] {
  return reminders.filter((reminder) => IsSameDay(reminder.date, date));
}

export function DoesThisDateHaveAReminder(
  date: Date,
  reminders: Reminder[]
): boolean {
  return reminders.some((reminder) => IsSameDay(reminder.date, date));
}

export function DoesThisDateHaveAReminderWithDayIndex(
  day: number,
  date: Date,
  reminders: Reminder[]
): boolean {
  let newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    day,
    date.getHours()
  );

  return reminders.some((reminder) => IsSameDay(reminder.date, newDate));
}
