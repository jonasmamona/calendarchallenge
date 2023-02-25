import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    cardContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    card: {
      borderRadius: "40px",
      color: "#FFFFFF",
      width: "1119px",
      height: "686px",
      boxShadow: "0px 4px 28px 2px #D1DCF0",
    },
    calendarBox: {
      backgroundColor: "#111278",
      height: "686px",
      borderRadius: "0px 40px 40px 0px",
      background: `linear-gradient(to bottom, #2a2d87, #4e2e99 )`,
    },
  })
);
