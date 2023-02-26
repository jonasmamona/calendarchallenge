import { configureStore } from "@reduxjs/toolkit";
import {
  reminderCalendarSlice,
  addReminder,
  removeReminderFromList,
  selectReminders,
  selectCurrentPage,
  selectSelectedDate,
  selectReminderBeingEdited,
  saveEditedReminder,
} from "./reminderCalendar.slice";
import {
  CreateReminder,
  Reminder,
} from "../../../domain/reminder";

describe("reminderCalendarSlice", () => {
  let store = configureStore({
    reducer: {
      reminderCalendar: reminderCalendarSlice.reducer,
    },
  });

  beforeEach(() => {
    store = configureStore({
      reducer: {
        reminderCalendar: reminderCalendarSlice.reducer,
      },
    });
  });

  test("setSelectedDate should set the selected date", () => {
    const date = new Date();

    store.dispatch(reminderCalendarSlice.actions.setSelectedDate(date));

    const selectedDate = selectSelectedDate(store.getState());

    expect(selectedDate).toEqual(date);
  });

  test("addMonthsToSelectedDate should add months to the selected date", () => {
    const date = new Date();

    store.dispatch(reminderCalendarSlice.actions.setSelectedDate(date));
    store.dispatch(reminderCalendarSlice.actions.addMonthsToSelectedDate(1));

    const selectedDate = selectSelectedDate(store.getState());

    expect(selectedDate.getMonth()).toEqual(date.getMonth() + 1);
  });

  test("subtractMonths should subtract months to the selected date", () => {
    const date = new Date();

    store.dispatch(reminderCalendarSlice.actions.setSelectedDate(date));
    store.dispatch(reminderCalendarSlice.actions.subtractMonths(1));

    const selectedDate = selectSelectedDate(store.getState());

    expect(selectedDate.getMonth()).toEqual(date.getMonth() - 1);
  });

  test("goBackToCurrentDate should set the selected date to the current month", () => {
    const date = new Date();

    store.dispatch(reminderCalendarSlice.actions.setSelectedDate(date));
    store.dispatch(reminderCalendarSlice.actions.addMonthsToSelectedDate(1));

    let selectedDate = selectSelectedDate(store.getState());
    expect(selectedDate.getMonth()).toEqual(date.getMonth() + 1);

    store.dispatch(reminderCalendarSlice.actions.goBackToCurrentDate());

    selectedDate = selectSelectedDate(store.getState());
    expect(selectedDate.getMonth()).toEqual(date.getMonth());
  });

  test("goToDate should set the selected date to the given date", () => {
    const date = new Date();

    store.dispatch(reminderCalendarSlice.actions.setSelectedDate(date));
    store.dispatch(reminderCalendarSlice.actions.addMonthsToSelectedDate(1));

    let selectedDate = selectSelectedDate(store.getState());
    expect(selectedDate.getMonth()).toEqual(date.getMonth() + 1);

    store.dispatch(reminderCalendarSlice.actions.goToDate(date));

    selectedDate = selectSelectedDate(store.getState());
    expect(selectedDate.getMonth()).toEqual(date.getMonth());
  });

  test("goToDay should set the selected date to the given day", () => {
    const date = new Date();

    store.dispatch(reminderCalendarSlice.actions.setSelectedDate(date));
    store.dispatch(reminderCalendarSlice.actions.addMonthsToSelectedDate(1));

    let selectedDate = selectSelectedDate(store.getState());
    expect(selectedDate.getMonth()).toEqual(date.getMonth() + 1);

    store.dispatch(reminderCalendarSlice.actions.goToDay(date.getDate()));

    selectedDate = selectSelectedDate(store.getState());
    expect(selectedDate.getMonth()).toEqual(date.getMonth() + 1);
    expect(selectedDate.getDate()).toEqual(date.getDate());
  });

  test("goToAddReminder should set the current page to AddReminder", () => {
    store.dispatch(reminderCalendarSlice.actions.goToAddReminder());

    const currentPage = selectCurrentPage(store.getState());
    expect(currentPage).toEqual("AddReminder");
  });

  test("goToAddReminder should change current page to ReminderList", () => {
    store.dispatch(reminderCalendarSlice.actions.goToAddReminder());

    let currentPage = selectCurrentPage(store.getState());
    expect(currentPage).toEqual("AddReminder");

    store.dispatch(reminderCalendarSlice.actions.cancelAddingReminder());

    currentPage = selectCurrentPage(store.getState());
    expect(currentPage).toEqual("ReminderList");
  });

  test("cancelAddReminder should set the current page to ReminderList", () => {
    store.dispatch(reminderCalendarSlice.actions.goToAddReminder());

    let currentPage = selectCurrentPage(store.getState());
    expect(currentPage).toEqual("AddReminder");

    store.dispatch(reminderCalendarSlice.actions.cancelAddingReminder());

    currentPage = selectCurrentPage(store.getState());
    expect(currentPage).toEqual("ReminderList");
  });

  test("addReminder should add a reminder to the reminders list", () => {
    const reminder = CreateReminder(
      "title",
      "description",
      new Date(),
      "#C8E6C9"
    );

    store.dispatch(addReminder(reminder));

    const reminders = selectReminders(store.getState());
    expect(reminders).toHaveLength(1);
    expect(reminders[0]).toEqual(reminder);
  });

  test("setReminderBeingEdited should set the reminder being edited", () => {
    const reminder = CreateReminder(
      "title",
      "description",
      new Date(),
      "#C8E6C9"
    );

    store.dispatch(addReminder(reminder));

    store.dispatch(
      reminderCalendarSlice.actions.setReminderBeingEdited(reminder.id)
    );

    const reminderBeingEdited = selectReminderBeingEdited(store.getState());
    expect(reminderBeingEdited).toEqual(reminder);
  });

  test("saveEditedReminder should save the edited reminder", () => {
    const reminder = CreateReminder(
      "title",
      "description",
      new Date(),
      "#C8E6C9"
    );

    store.dispatch(addReminder(reminder));

    store.dispatch(
      reminderCalendarSlice.actions.setReminderBeingEdited(reminder.id)
    );

    const reminderBeingEdited = selectReminderBeingEdited(store.getState());
    expect(reminderBeingEdited).toEqual(reminder);

    const editedReminder: Reminder = {
      ...reminder,
      title: "edited title",
      description: "edited description",
      color: "#F5DD29",
    };

    store.dispatch(saveEditedReminder(editedReminder));

    const reminders = selectReminders(store.getState());
    expect(reminders).toHaveLength(1);
    expect(reminders[0]).toEqual(editedReminder);
  });

  test("removeReminderFromList should remove a reminder from the reminders list", () => {
    const reminder1 = CreateReminder(
      "title1",
      "Example reminder 1",
      new Date(),
      "#C8E6C9"
    );
    const reminder2 = CreateReminder(
      "title2",
      "Example reminder 2",
      new Date(),
      "#F5DD29"
    );

    store.dispatch(addReminder(reminder1));
    store.dispatch(addReminder(reminder2));

    let reminders = selectReminders(store.getState());
    expect(reminders).toHaveLength(2);

    store.dispatch(removeReminderFromList(reminder1.id));

    reminders = selectReminders(store.getState());
    expect(reminders).toHaveLength(1);
    expect(reminders[0]).toEqual(reminder2);
  });
});
