import {
  selectCurrentPage,
  selectReminders,
  selectSelectedDate,
} from "../../../presentation/pages/reminderCalendar/reminderCalendar.slice";
import { useAppSelector } from "../../../application/hooks";
import { AddOrEditReminder } from "./pages/addOrEditReminder/addOrEditReminder.component";
import { ReminderList } from "./pages/reminderList/reminderList.component";
import { GetRemindersForDate } from "../../../domain/reminder";

export function Reminders() {
  const currentPage = useAppSelector(selectCurrentPage);
  const reminderList = useAppSelector(selectReminders);
  const selectedDate = useAppSelector(selectSelectedDate);

  switch (currentPage) {
    case "ReminderList":
      return (
        <ReminderList
          reminderList={GetRemindersForDate(selectedDate, reminderList)}
        />
      );
    case "AddReminder":
      return <AddOrEditReminder isEditing={false} />;
    case "EditReminder":
      return <AddOrEditReminder isEditing={true} />;
    default:
      return <ReminderList reminderList={reminderList} />;
  }
}
