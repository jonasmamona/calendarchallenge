import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    calendarContainer: {
      "& #calendar-grid": {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        "& > *": {
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: 900,
          fontSize: "12px",
          lineHeight: "12px",
          textAlign: "center",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          color: "#FFFFFF",
        },
      },
    },
    button: {
      "&:hover": {
        background: "#FF465D",
      },
    },
    selectedButton: {
      background: "linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)",
    },
    calendarDay: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "12px",
      textAlign: "center",
      letterSpacing: "0.03em",
      color: "#FFFFFF",
      padding: "5px",
    },
    dot: {
      position: "absolute",
      top: 3,
      right: 2,
      height: "6px",
      width: "6px",
      borderRadius: "50%",
      backgroundColor: "#00FFCC",
    },
  })
);
