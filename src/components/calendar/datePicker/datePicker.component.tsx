import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./datePicker.style";
import { NavigationButtons } from "./navigation/navigationButtons.component";
import { Calendar } from "./calendar/calendar.component";
import { getCurrentMonthFromDate, getYear } from "../../../domain/calendar";
import { useAppSelector } from "../../../application/hooks";
import { selectSelectedDate } from "../../../presentation/pages/reminderCalendar/reminderCalendar.slice";

export function DatePicker() {
  const classes = useStyles();
  const selectedDate = useAppSelector(selectSelectedDate);

  return (
    <>
      <Grid item xs={12} container>
        <Grid item xs={12} container className={classes.titleContainer}>
          <Grid item xs={12} className={classes.bigYear}>
            <Typography className="text">{getYear(selectedDate)}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.bigMonth}>
            <Typography className="text">
              {getCurrentMonthFromDate(selectedDate)}
            </Typography>
          </Grid>
        </Grid>
        <NavigationButtons />
        <Calendar />
      </Grid>
    </>
  );
}
