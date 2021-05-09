import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

interface AdminInputPickerProps {
    options: { name: string; _id: string }[];
    update: (val: string) => void;
    label: string;
}

function AdminInputPicker(props: AdminInputPickerProps): JSX.Element {
    return (
        <Autocomplete
            options={props.options}
            getOptionLabel={(option) => option.name}
            style={{ width: 300, color: 'white' }}
            onChange={(event, newValue) => {
                props.update(newValue!._id);
            }}
            renderInput={(params) => (
                <TextField
                    style={{ background: '#28282E', borderRadius: '5px', color: 'white' }}
                    {...params}
                    InputLabelProps={{
                        style: { color: '#fff' }
                    }}
                    InputProps={{
                        ...params.InputProps,
                        style: { color: 'white' }
                    }}
                    label={props.label}
                    variant="outlined"
                />
            )}
        />
    );
}

export default AdminInputPicker;
