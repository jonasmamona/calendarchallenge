import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reminderCalendarReducer from "../presentation/pages/reminderCalendar/reminderCalendar.slice";

export const store = configureStore({
  reducer: {
    reminderCalendar: reminderCalendarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
