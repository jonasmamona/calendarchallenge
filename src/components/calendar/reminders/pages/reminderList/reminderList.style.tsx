import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    titleContainer: {
      padding: "30px 30px 0px 20px",
      maxHeight: "100px",
    },
    reminderImageContainer: {
      display: "flex",
      justifyContent: "center",
      "& > *": {
        marginBottom: "20%",
      },
    },
    listContainer: {
      width: "620px",
      maxWidth: "600px",
      margin: "0 auto",
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
      maxHeight: "500px",
      overflowY: "auto",
      "& > *": {
        marginTop: "31px",
      },
      paddingLeft: "10px",
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
    },
  })
);
