import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    card: {
      borderRadius: "16px",
      color: "#FFFFFF",
      width: "567px",
      height: "134px",
      boxShadow: "0px 4px 10px 2px #D1DCF0",
      display: "flex",
      alignItems: "center",
    },
    cardTitle: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "19px",
      color: "#797979",
    },
    colorDecorator: {
      width: "8px",
      height: "111px",
      borderRadius: "100px",
      marginLeft: "12px",
    },
    descriptionContainer: {
      width:"95%"
    },
    cardDescription: {
      marginTop: "10px",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "25px",
      color: "#384042",
      maxHeight: "80px",
      width: "100%",
      wordWrap: "break-word",
    },
    timeContainer: {
      height: "134px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderLeft: "1px solid #D1DCF0",
      "& > *": {
        marginLeft: "-11px",
      },
      "& > * > p": {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "35px",
        lineHeight: "48px",
        color: "#797979",
        marginLeft: "10px",
      },
    },
    editButton: {
      position: "absolute",
      top: 110,
      right: 20,
      height: "36px",
      width: "36px",
      borderRadius: "50%",
      background: "linear-gradient(90deg, #3BC6FB 0%, #00FFCC 100%)",
      transition: "transform 0.1s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        background: "#00FFCC",
      },
    },
  })
);
