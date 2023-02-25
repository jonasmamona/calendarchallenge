import { Button, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./reminderList.style";
import {
  goToAddReminder,
  selectSelectedDate,
} from "../../../../../presentation/pages/reminderCalendar/reminderCalendar.slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../application/hooks";
import { getDateAsSentence } from "../../../../../domain/calendar";
import { ListItem } from "./listItem/listItem.component";
import { Reminder } from "../../../../../domain/reminder";
import { ReactComponent as NoRemindersImage } from "../../../../assets/images/no-reminders.svg";

type ReminderListProps = {
  reminderList: Reminder[];
};

export function ReminderList({ reminderList }: ReminderListProps) {
  const classes = useStyles();
  const selectedDate = useAppSelector(selectSelectedDate);
  const dispatch = useAppDispatch();

  return (
    <>
      <Grid
        item
        xs={12}
        container
        justifyContent="space-between"
        className={classes.titleContainer}
      >
        <Grid item className={classes.dateContainer}>
          <Typography className="title">
            {getDateAsSentence(selectedDate)}
          </Typography>
        </Grid>
        <Grid item className={classes.addReminderButtonContainer}>
          <Button
            className="addReminderButton"
            onClick={() => dispatch(goToAddReminder())}
          >
            Add reminder
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} className={classes.listContainer}>
          {!reminderList ||
            (reminderList.length === 0 && (
              <Grid item xs={12} className={classes.reminderImageContainer}>
                <NoRemindersImage />
              </Grid>
            ))}
          {reminderList &&
            reminderList.length > 0 &&
            reminderList.map((reminder) => (
              <ListItem
                key={reminder.id}
                id={reminder.id}
                title={reminder.title}
                description={reminder.description}
                hour={reminder.date.getHours().toString()}
                minutes={reminder.date.getMinutes().toString()}
                color={reminder.color}
              />
            ))}
        </Grid>
      </Grid>
    </>
  );
}
