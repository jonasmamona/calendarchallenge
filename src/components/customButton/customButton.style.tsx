import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    button: {
      fontFamily: "Open Sans",
      color: "#FFFFFF",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      transition: "transform 0.1s ease-in-out",
      textTransform: "none",
      height: "49px",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  })
);
