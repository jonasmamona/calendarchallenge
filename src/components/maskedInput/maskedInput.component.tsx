import { TextFieldProps } from "@material-ui/core/TextField/TextField";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";

type MaskedInputProps = TextFieldProps & {
  mask: string;
  maskChar?: string;
  alwaysShowMask?: boolean;
  beforeMaskedValueChange?: any;
};

export const MaskedInput = ({
  mask,
  maskChar = "",
  alwaysShowMask,
  beforeMaskedValueChange,
  ...props
}: MaskedInputProps) => (
  <InputMask
    {...props}
    mask={mask}
    maskChar={maskChar}
    alwaysShowMask={alwaysShowMask}
    beforeMaskedValueChange={beforeMaskedValueChange}
  >
    {
      //@ts-ignore
      (inputProps) => <TextField {...inputProps} />
    }
  </InputMask>
);
