import {
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./addOrEditReminder.style";
import {
  addReminder,
  cancelAddingReminder,
  removeReminderFromList,
  saveEditedReminder,
  selectReminderBeingEdited,
  selectSelectedDate,
} from "../../../../../presentation/pages/reminderCalendar/reminderCalendar.slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../application/hooks";
import { getDateAsSentence } from "../../../../../domain/calendar";
import { ColorPicker } from "./colorPicker/colorPicker.component";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Reminder, ReminderColor } from "../../../../../domain/reminder";
import { v4 as uuidv4 } from "uuid";

type AddOrEditReminderProps = {
  isEditing: boolean;
};

interface ReminderForm {
  title: string;
  description: string;
  date: string;
  time: string;
  color: ReminderColor;
}

export function AddOrEditReminder({ isEditing }: AddOrEditReminderProps) {
  const classes = useStyles();
  const selectedDate = useAppSelector(selectSelectedDate);
  const [selectedColor, setSelectedColor] = useState<string>("#C8E6C9");
  const dispatch = useAppDispatch();
  const reminderBeingEdited = useAppSelector(selectReminderBeingEdited);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ReminderForm>({
    defaultValues: {
      date: selectedDate.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      time:
        selectedDate.getHours() +
        ":" +
        selectedDate.getMinutes().toString().padStart(2, "0"),
    },
  });

  useEffect(() => {
    if (isEditing && reminderBeingEdited) {
      setValue("title", reminderBeingEdited.title);
      setValue("description", reminderBeingEdited.description);
      setValue(
        "date",
        reminderBeingEdited.date.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
      );
      setValue(
        "time",
        reminderBeingEdited.date.getHours() +
          ":" +
          reminderBeingEdited.date.getMinutes().toString().padStart(2, "0")
      );
      setValue("color", reminderBeingEdited.color);
      setSelectedColor(reminderBeingEdited.color);
    }
  }, [reminderBeingEdited, isEditing, setValue]);

  const submit = handleSubmit((data: ReminderForm) => {
    data.color = selectedColor as ReminderColor;
    let thisDate = new Date(data.date);
    thisDate.setHours(parseInt(data.time.split(":")[0]));
    thisDate.setMinutes(parseInt(data.time.split(":")[1]));

    let id = reminderBeingEdited ? reminderBeingEdited?.id : uuidv4();

    let reminder: Reminder = {
      id: id,
      title: data.title,
      description: data.description,
      date: thisDate,
      color: data.color,
    };
    if (isEditing) {
      dispatch(saveEditedReminder(reminder));
    } else {
      dispatch(addReminder(reminder));
    }
  });

  return (
    <>
      <Grid item xs={12} container className={classes.titleContainer}>
        <Grid item className={classes.dateContainer}>
          <Typography className="title">
            {(isEditing ? "Edit reminder" : "Add reminder") +
              " - " +
              getDateAsSentence(selectedDate)}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={5}>
        <Grid item xs={12}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <TextField
            variant="outlined"
            id="title"
            fullWidth
            inputProps={{ maxLength: 64 }}
            InputLabelProps={{ shrink: true }}
            {...register("title", { required: true })}
            error={!!errors.title}
            helperText={errors.title ? "Title is required" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="description">Description</InputLabel>
          <TextField
            variant="outlined"
            id="description"
            fullWidth
            multiline
            minRows={2}
            maxRows={2}
            InputLabelProps={{ shrink: true }}
            {...register("description", { required: true })}
            error={!!errors.description}
            helperText={errors.description ? "A description is required" : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="date">Date</InputLabel>
          <TextField
            variant="outlined"
            id="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("date", { required: true })}
            error={!!errors.date}
            helperText={errors.date ? "Date is required" : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="time">Time</InputLabel>
          <TextField
            variant="outlined"
            id="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("time", { required: true })}
            error={!!errors.time}
            helperText={errors.time ? "Time is required" : ""}
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="space-between"
          alignItems="center"
          style={{ marginTop: "100px" }}
        >
          <Grid item xs={12}>
            <Typography>Color</Typography>
          </Grid>
          <ColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "-71px" }}>
          <div className={classes.thinLine}></div>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="flex-end"
          className={classes.buttonContainer}
        >
          {isEditing && reminderBeingEdited && (
            <Button
              className="deleteButton"
              onClick={() =>
                dispatch(removeReminderFromList(reminderBeingEdited.id))
              }
            >
              Remove
            </Button>
          )}

          <Button
            className="cancelButton"
            onClick={() => dispatch(cancelAddingReminder())}
          >
            Cancel
          </Button>
          <Button className="saveButton" onClick={() => submit()}>
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
