import { Grid } from "@material-ui/core";
import { useStyles } from "./colorPicker.style";
import classNames from "classnames";
import { colors } from "../../../../../../domain/reminder";

type ColorPickerProps = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

export function ColorPicker({
  selectedColor,
  setSelectedColor,
}: ColorPickerProps) {
  const classes = useStyles();

  const colorSquare = (color: string): JSX.Element => {
    return (
      <Grid
        key={color}
        item
        xs={1}
        className={
          selectedColor === color
            ? classNames(classes.cell, classes.selected)
            : classes.cell
        }
        style={{
          backgroundColor: color,
        }}
        onClick={() => setSelectedColor(color)}
      ></Grid>
    );
  };

  return (
    <Grid item xs={12} style={{ marginTop: "100px" }}>
      <Grid
        item
        container
        xs={12}
        id="color-picker"
        justifyContent="space-between"
        alignItems="center"  
      >
        {colors.map((color: string) => colorSquare(color))}
      </Grid>
    </Grid>
  );
}
