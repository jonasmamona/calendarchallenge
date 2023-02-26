import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { ReactComponent as GoLeftArrow } from "../../../assets/icons/goLeft.svg";
import { ReactComponent as GoRightArrow } from "../../../assets/icons/goRight.svg";
import { ReactComponent as ReturnToCurrentButton } from "../../../assets/icons/returnToCurrent.svg";
import { useStyles } from "./navigationButtons.style";
import {
  subtractMonths,
  addMonthsToSelectedDate,
  goBackToCurrentDate,
} from "../../../../presentation/pages/reminderCalendar/reminderCalendar.slice";
import { useAppDispatch } from "../../../../application/hooks";

export function NavigationButtons() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Grid item xs={12} className={classes.navigationButtonContainer}>
      <Tooltip title="Go back one month">
        <IconButton onClick={() => dispatch(subtractMonths(1))}>
          <GoLeftArrow className={classes.svgIcon}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Return to today">
        <IconButton onClick={() => dispatch(goBackToCurrentDate())}>
          <ReturnToCurrentButton className={classes.svgIcon}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Advance one month">
        <IconButton onClick={() => dispatch(addMonthsToSelectedDate(1))}>
          <GoRightArrow className={classes.svgIcon}/>
        </IconButton>
      </Tooltip>
    </Grid>
  );
}
