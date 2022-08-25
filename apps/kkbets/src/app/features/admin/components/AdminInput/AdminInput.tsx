import { TextField } from '@mui/material';
import { useTheme } from 'styled-components';

export interface AdminInputProps {
  label: string;
  update: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type: string;
  min?: number;
  max?: number;
  step?: number;
  value?: unknown;
  fullWidth?: boolean;
}

function AdminInput(props: AdminInputProps): JSX.Element {
  const theme = useTheme();
  return (
    <TextField
      id="standard-number"
      placeholder={props.label}
      type={props.type}
      value={props.value}
      fullWidth={props.fullWidth ?? true}
      onChange={(e) => props.update(e)}
      style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
      InputProps={{
        style: { color: theme.colors.font.light },
        inputProps: {
          min: props.min,
          step: props.step,
          max: props.max
        }
      }}
      InputLabelProps={{
        style: { color: theme.colors.font.dark }
      }}
    />
  );
}

export default AdminInput;
