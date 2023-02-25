import {
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./listItem.style";
import { ReactComponent as ClockIcon } from "../../../../../assets/icons/clock-icon.svg";
import { ReactComponent as PencilIcon } from "../../../../../assets/icons/pencil-icon.svg";
import { reminderBeingEdited } from "../../../../../../presentation/pages/reminderCalendar/reminderCalendar.slice";
import { useAppDispatch } from "../../../../../../application/hooks";

type ListItemProps = {
  id: string;
  title: string;
  description: string;
  hour: string;
  minutes: string;
  color: string;
};

export function ListItem({
  id,
  title,
  description,
  hour,
  minutes,
  color,
}: ListItemProps) {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <div style={{ position: "relative" }}>
      <Paper elevation={0} className={classes.card}>
        <Grid item xs={12} container alignItems="center">
          <Grid item xs={1}>
            <div
              className={classes.colorDecorator}
              style={{ backgroundColor: color }}
            ></div>
          </Grid>
          <Grid item xs={8}>
            <Typography className={classes.cardTitle}>{title}</Typography>
            <Typography className={classes.cardDescription}>
              {description.length > 100 ? (
                <Tooltip title={description}>
                  <Typography className={classes.cardDescription}>
                    {description.substring(0, 120) + "..."}
                  </Typography>
                </Tooltip>
              ) : (
                <Typography className={classes.cardDescription}>
                  {description}
                </Typography>
              )}
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            item
            xs={3}
            className={classes.timeContainer}
          >
            <Grid item>
              <ClockIcon style={{ transform: "scale(1.1)" }} />
            </Grid>
            <Grid item>
              <Typography>
                {parseInt(hour) < 10 ? "0" + hour : hour}:
                {parseInt(minutes) < 10 ? "0" + minutes : minutes}
              </Typography>
            </Grid>
            <Tooltip className={classes.editButton} title="Edit reminder">
              <IconButton onClick={() => dispatch(reminderBeingEdited(id))}>
                <PencilIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
