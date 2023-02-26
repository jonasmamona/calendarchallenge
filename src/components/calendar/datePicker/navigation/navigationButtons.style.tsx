import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    navigationButtonContainer: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "50px",
      "& > *": {
        padding: "0px 10px 10px 0px",
        cursor: "pointer",
      },
      marginLeft: "14px",
    },
    svgIcon: {
      transition: "transform 0.1s ease-in-out",
      "&:hover": {
        transform: "scale(1.4)",
      },
    },
  })
);
