import { TextField } from '@material-ui/core';

export interface AdminInputProps {
    label: string;
    update: (val: string) => void;
    type: string;
    min?: number;
    max?: number;
    step?: number;
    value?: unknown;
}

function AdminInput(props: AdminInputProps): JSX.Element {
    return (
        <TextField
            id="standard-number"
            label={props.label}
            type={props.type}
            value={props.value}
            variant="outlined"
            onChange={(e) => props.update(e.target.value)}
            style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
            InputProps={{
                style: { color: 'white' },
                inputProps: {
                    min: props.min,
                    step: props.step,
                    max: props.max
                }
            }}
            InputLabelProps={{
                style: { color: '#fff' }
            }}
        />
    );
}

export default AdminInput;
