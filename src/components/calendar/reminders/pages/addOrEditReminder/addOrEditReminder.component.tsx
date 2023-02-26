import { Grid, InputLabel, TextField, Typography } from "@material-ui/core";
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
import { Controller, useForm } from "react-hook-form";
import {
  CreateReminder,
  EditReminder,
  ReminderColor,
} from "../../../../../domain/reminder";
import { CustomButton } from "../../../../customButton/customButton.component";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

type AddOrEditReminderProps = {
  isEditing: boolean;
};

interface ReminderForm {
  title: string;
  description: string;
  date: Date;
  time: Date;
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
    control,
  } = useForm<ReminderForm>({
    defaultValues: {
      date: selectedDate,
      time: selectedDate,
    },
  });

  useEffect(() => {
    if (isEditing && reminderBeingEdited) {
      setValue("title", reminderBeingEdited.title);
      setValue("description", reminderBeingEdited.description);
      setValue("date", reminderBeingEdited.date);
      setValue("time", reminderBeingEdited.date);
      setValue("color", reminderBeingEdited.color);
      setSelectedColor(reminderBeingEdited.color);
    }
  }, [reminderBeingEdited, isEditing, setValue]);

  const submit = handleSubmit((data: ReminderForm) => {
    data.color = selectedColor as ReminderColor;
    let thisDate = new Date(data.date);
    thisDate.setHours(data.time.getHours());
    thisDate.setMinutes(data.time.getMinutes());

    if (isEditing) {
      let reminder = EditReminder(
        reminderBeingEdited!,
        data.title,
        data.description,
        thisDate,
        data.color
      );
      dispatch(saveEditedReminder(reminder));
    } else {
      let reminder = CreateReminder(
        data.title,
        data.description,
        thisDate,
        data.color
      );
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
            {...register("description", { required: "true" })}
            error={!!errors.description}
            helperText={errors.description ? "A description is required" : ""}
          />
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={6}>
            <InputLabel htmlFor="date">Date</InputLabel>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <KeyboardDatePicker
                  {...field}
                  ref={null}
                  fullWidth
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  error={!!errors.date}
                  helperText={errors.date ? errors.date.message : ""}
                />
              )}
              rules={{
                required: true,
                pattern: {
                  value:
                    /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/,
                  message: "Invalid date",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel htmlFor="time">Time</InputLabel>
            <Controller
              control={control}
              name="time"
              render={({ field }) => (
                <KeyboardTimePicker
                  {...field}
                  ref={null}
                  fullWidth
                  inputVariant="outlined"
                  format="HH:mm"
                  error={!!errors.time}
                  helperText={errors.time ? errors.time.message : ""}
                />
              )}
              rules={{
                required: true,
                pattern: {
                  value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
                  message:
                    "Hours must be between 0 and 23, and minutes between 0 and 59",
                },
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
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
            <div className="deleteButton">
              <CustomButton
                onClick={() =>
                  dispatch(removeReminderFromList(reminderBeingEdited.id))
                }
                background="Red"
                text="Remove"
                width="Medium"
              />
            </div>
          )}
          <div className="cancelButton">
            <CustomButton
              onClick={() => dispatch(cancelAddingReminder())}
              background="Grey"
              text="Cancel"
              width="Medium"
            />
          </div>
          <CustomButton
            onClick={() => submit()}
            background="Blue"
            text="Save"
            width="Medium"
          />
        </Grid>
      </Grid>
    </>
  );
}
