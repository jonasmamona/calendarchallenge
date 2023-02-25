import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    titleContainer: {
      height: "49px",
    },
    reminderFormContainer: {
      display: "flex",
      justifyContent: "center",
    },
    dateContainer: {
      height: "49px",
      display: "flex",
      alignItems: "center",
      "& > .title": {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "33px",
        color: "#384042",
      },
    },
    addReminderButtonContainer: {
      height: "49px",
      display: "flex",
      alignItems: "center",
      "& > .addReminderButton": {
        color: "#FFFFFF",
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "22px",
        background: "linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)",
        boxShadow: "0px 4px 28px 2px #D1DCF0",
        borderRadius: "4px",
        width: "180px",
        padding: "10px 15px 10px 15px",
      },
    },
  })
);
