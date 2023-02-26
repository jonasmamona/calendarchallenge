import { IsSameDay } from "./calendar";
import { v4 as uuidv4 } from "uuid";

type ReminderList = "ReminderList";
type AddReminderPage = "AddReminder";
type EditReminderPage = "EditReminder";

export type ReminderPage = ReminderList | AddReminderPage | EditReminderPage;

type Green = "#C8E6C9";
type Yellow = "#F5DD29";
type Orange = "#FFCC80";
type Red = "#EF9A9A";
type Purple = "#CD8DE5";
type Blue = "#5BA4CF";
type LightBlue = "#29CCE5";
type LightGreen = "#6DECA9";
type Pink = "#FF8ED4";
type Grey = "#BCAAA4";

export type ReminderColor =
  | Green
  | Yellow
  | Orange
  | Red
  | Purple
  | Blue
  | LightBlue
  | LightGreen
  | Pink
  | Grey;

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

export function OrderRemindersByTime(reminders: Reminder[]): Reminder[] {
  return reminders.sort((a, b) => a.date.getTime() - b.date.getTime());
}

export function GetRemindersForDate(
  date: Date,
  reminders: Reminder[]
): Reminder[] {
  return OrderRemindersByTime(reminders.filter((reminder) => IsSameDay(reminder.date, date)));
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

export function CreateReminder(
  title: string,
  description: string,
  date: Date,
  color: ReminderColor
): Reminder {
  return {
    id: uuidv4(),
    title,
    description,
    date,
    color,
  };
}

export function EditReminder(
  reminder: Reminder,
  title: string,
  description: string,
  date: Date,
  color: ReminderColor
): Reminder {
  return {
    ...reminder,
    title,
    description,
    date,
    color,
  };
}