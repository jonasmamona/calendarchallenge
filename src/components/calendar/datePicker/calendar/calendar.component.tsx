import { Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import {
  daysOfWeekShort,
  numberOfDaysInMonth,
} from "../../../../domain/calendar";
import { useStyles } from "./calendar.style";
import { useAppDispatch, useAppSelector } from "../../../../application/hooks";
import {
  goToDay,
  selectReminders,
  selectSelectedDate,
} from "../../../../presentation/pages/reminderCalendar/reminderCalendar.slice";
import {
  compareDateWithDayIndex,
  getCurrentMonthFromDate,
} from "../../../../domain/calendar";
import { startOfMonth } from "date-fns";
import { DoesThisDateHaveAReminderWithDayIndex } from "../../../../domain/reminder";

export function Calendar() {
  const classes = useStyles();
  const selectedDate = useAppSelector(selectSelectedDate);
  const dispatch = useAppDispatch();
  const reminders = useAppSelector(selectReminders);

  const firstDayOfMonthIndex = startOfMonth(selectedDate).getDay();
  const daysInMonth = numberOfDaysInMonth(
    getCurrentMonthFromDate(selectedDate),
    selectedDate.getFullYear()
  );

  const days = [];

  days.length = firstDayOfMonthIndex;
  for (let i = 0; i < firstDayOfMonthIndex; i++) {
    days.push(<Grid item key={`empty-${i}`} />);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <Grid item key={i}>
        <Tooltip title="Switch to this day">
          <IconButton
            className={
              compareDateWithDayIndex(i, selectedDate)
                ? classes.selectedButton
                : classes.button
            }
            style={
              i > 9
                ? { padding: "8px 3px 6px 3px", borderRadius: "50%" }
                : { padding: "8px 8px 6px 8px", borderRadius: "50%" }
            }
            onClick={() => dispatch(goToDay(i))}
          >
            <Typography className={classes.calendarDay}>{i}</Typography>
            {DoesThisDateHaveAReminderWithDayIndex(
              i,
              selectedDate,
              reminders
            ) && <div className={classes.dot} />}
          </IconButton>
        </Tooltip>
      </Grid>
    );
  }

  const totalDays = days.length;
  const remainingDays = 35 - totalDays;
  for (let i = 0; i < remainingDays; i++) {
    days.push(<Grid item key={`empty-${totalDays + i}`} />);
  }

  return (
    <Grid
      item
      container
      wrap="nowrap"
      xs={12}
      className={classes.calendarContainer}
    >
      <Grid item xs={1} />
      <Grid item xs={10} id="calendar-grid">
        {daysOfWeekShort.map((day) => (
          <Grid key={day} item>
            <p>{day.toUpperCase()}</p>{" "}
          </Grid>
        ))}
        {days}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
