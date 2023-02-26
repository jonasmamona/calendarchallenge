import { Button } from "@material-ui/core";
import { useStyles } from "./customButton.style";

type Background = "Red" | "Grey" | "Blue" | "Gradient";

type Width = "Medium" | "Large";

type CustomButtonProps = {
  onClick: () => void;
  width: Width;
  background: Background;
  text: string;
};

export function CustomButton({
  onClick,
  width,
  background,
  text,
}: CustomButtonProps) {
  const classes = useStyles();

  const buttonWidth = () => {
    switch (width) {
      case "Medium":
        return "123px";
      case "Large":
        return "180px";
    }
  };

  const backgroundColor = () => {
    switch (background) {
      case "Red":
        return "#D52222";
      case "Grey":
        return "#626262";
      case "Blue":
        return "#394ABC";
      case "Gradient":
        return "linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)";
    }
  };

  return (
    <Button
      onClick={() => onClick()}
      className={classes.button}
      style={{ width: buttonWidth(), background: backgroundColor() }}
    >
      {text}
    </Button>
  );
}
