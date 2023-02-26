import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    titleContainer: {
      padding: "30px 30px 0px 20px",
    },
    thinLine: {
      width: "100%",
      height: "1px",
      background: "rgba(49, 39, 37, 0.2)",
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
    buttonContainer: {
      marginTop: "-39px",
      marginBottom: "39px",
      "& > .cancelButton": {
        marginRight: "10px",
      },
      "& > .deleteButton": {
        marginRight: "38.1%",
      },
    },
  })
);
