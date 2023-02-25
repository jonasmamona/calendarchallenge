import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import InputMask from 'react-input-mask';
import TextField from '@material-ui/core/TextField';

type MaskedInputProps = TextFieldProps & {
  mask: string | Array<string | RegExp>;
  maskChar?: string;
  alwaysShowMask?: boolean;
  beforeMaskedValueChange?: any;
};

export const MaskedInputComponent: FC<MaskedInputProps> = ({
  mask,
  maskChar = '',
  alwaysShowMask,
  beforeMaskedValueChange,
  ...props
}) => (
  <InputMask
    {...props}
    mask={mask}
    maskChar={maskChar}
    alwaysShowMask={alwaysShowMask}
    beforeMaskedValueChange={beforeMaskedValueChange}
  >
    {(inputProps) => <TextField {...inputProps} />}
  </InputMask>
);
