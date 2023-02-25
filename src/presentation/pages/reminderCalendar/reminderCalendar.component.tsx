import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./reminderCalendar.style";
import { Reminders } from "../../../components/calendar/reminders/reminders.component";
import { DatePicker } from "../../../components/calendar/datePicker/datePicker.component";

export function ReminderCalendar() {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Paper className={classes.card} elevation={0}>
        <Grid container>
          <Grid item container xs={7} justifyContent="center">
            <Reminders />
          </Grid>
          <Grid item xs={5} className={classes.calendarBox}>
            <DatePicker />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
