import { Autocomplete, TextField } from '@mui/material';
import { useTheme } from 'styled-components';

interface AdminInputPickerProps {
  options: { name: string; _id: string }[];
  update: (val: string) => void;
  label: string;
}

function AdminInputPicker(props: AdminInputPickerProps): JSX.Element {
  const theme = useTheme();
  return (
    <Autocomplete
      options={props.options}
      getOptionLabel={(option) => option.name}
      fullWidth
      style={{ color: 'white' }}
      onChange={(event, newValue) => {
        props.update(newValue?._id || '');
      }}
      renderInput={(params) => (
        <TextField
          style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
          {...params}
          InputLabelProps={{
            style: { color: theme.colors.font.dark }
          }}
          InputProps={{
            ...params.InputProps,
            style: { color: 'white' }
          }}
          placeholder={props.label}
          variant="outlined"
        />
      )}
    />
  );
}

export default AdminInputPicker;
