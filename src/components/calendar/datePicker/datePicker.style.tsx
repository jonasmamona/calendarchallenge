import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    titleContainer: {
      padding: "30px 30px 10px 30px",
      maxHeight: "200px",
    },
    bigYear: {
      display: "flex",
      justifyContent: "center",
      "& > .text": {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: "80px",
        lineHeight: "109px",
      },
    },
    bigMonth: {
      display: "flex",
      justifyContent: "center",
      marginTop: "-28px",
      "& > .text": {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "40px",
        lineHeight: "61px",
      },
    },
    navigationButtonContainer: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "50px",
      "& > *": {
        padding: "0px 10px 10px 0px",
        cursor: "pointer",
      },
    },
  })
);
