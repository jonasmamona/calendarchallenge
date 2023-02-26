import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk, RootState } from "../../../application/store";
import { addMonths, subMonths } from "date-fns";
import { Reminder, ReminderPage } from "../../../domain/reminder";

interface ReminderCalendarState {
  currentDate: Date;
  selectedDate: Date;
  currentPage: ReminderPage;
  setReminderBeingEdited: Reminder | undefined;
  reminders: Reminder[];
}

const initialState: ReminderCalendarState = {
  currentDate: new Date(),
  selectedDate: new Date(),
  currentPage: "ReminderList",
  setReminderBeingEdited: undefined,
  reminders: [
  ],
};

export const reminderCalendarSlice = createSlice({
  name: "reminderCalendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
    addMonthsToSelectedDate: (state, action: PayloadAction<number>) => {
      state.selectedDate = addMonths(
        new Date(state.selectedDate),
        action.payload
      );
    },
    subtractMonths: (state, action: PayloadAction<number>) => {
      state.selectedDate = subMonths(
        new Date(state.selectedDate),
        action.payload
      );
    },
    goBackToCurrentDate: (state) => {
      state.selectedDate = new Date(state.currentDate);
    },
    goToDate: (state, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
    goToDay: (state, action: PayloadAction<number>) => {
      state.selectedDate = new Date(
        state.selectedDate.getFullYear(),
        state.selectedDate.getMonth(),
        action.payload
      );
    },
    goToAddReminder: (state) => {
      state.currentPage = "AddReminder";
    },
    cancelAddingReminder: (state) => {
      state.currentPage = "ReminderList";
    },
    addReminder: (state, action: PayloadAction<Reminder>) => {
      state.reminders.push(action.payload);
      state.selectedDate = action.payload.date;
      state.currentPage = "ReminderList";
    },
    setReminderBeingEdited: (state, action: PayloadAction<string>) => {
      state.setReminderBeingEdited = state.reminders.find(
        (reminder) => reminder.id === action.payload
      );
      state.currentPage = "EditReminder";
    },
    saveEditedReminder: (state, action: PayloadAction<Reminder>) => {
      const reminderIndex = state.reminders.findIndex(
        (reminder) => reminder.id === action.payload.id
      );
      state.reminders[reminderIndex] = action.payload;
      state.currentPage = "ReminderList";
    },
    removeReminderFromList: (state, action: PayloadAction<string>) => {
      state.reminders = state.reminders.filter(
        (reminder) => reminder.id !== action.payload
      );
      state.currentPage = "ReminderList";
    },
  },
});

export const {
  setSelectedDate,
  subtractMonths,
  addMonthsToSelectedDate,
  goBackToCurrentDate,
  goToDate,
  goToDay,
  goToAddReminder,
  addReminder,
  cancelAddingReminder,
  setReminderBeingEdited,
  saveEditedReminder,
  removeReminderFromList,
} = reminderCalendarSlice.actions;

export const selectCurrentDate = (state: RootState) =>
  state.reminderCalendar.currentDate;

export const selectSelectedDate = (state: RootState) =>
  state.reminderCalendar.selectedDate;

export const selectCurrentPage = (state: RootState) =>
  state.reminderCalendar.currentPage;

export const selectReminders = (state: RootState) =>
  state.reminderCalendar.reminders;

export const selectReminderBeingEdited = (state: RootState) =>
  state.reminderCalendar.setReminderBeingEdited;

export const returnToCurrentDate = (): AppThunk => (dispatch, getState) => {
  dispatch(setSelectedDate(selectCurrentDate(getState())));
};

export default reminderCalendarSlice.reducer;
