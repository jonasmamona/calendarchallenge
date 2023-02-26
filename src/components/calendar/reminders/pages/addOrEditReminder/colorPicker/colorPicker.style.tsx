import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    cell: {
      width: "55px",
      height: "48px",
      borderRadius: "6px",
      border: "1px solid rgba(49, 39, 37, 0.4)",
      boxSizing: "border-box",
      marginTop: "-180px",
      margin: "4px",
      transition: "transform 0.1s ease-in-out",
      "&:hover": {
        border: "1px solid black",
        transform: "scale(1.1)",
      },
    },
    selected: {
      border: "1px solid black",
      transform: "scale(1.15)",
    },
  })
);
