import React from 'react';
import { StyledInput } from './Input.css';

interface InputProps {
    placeholder?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: () => void;
    disabled?: boolean;
    info?: string;
    label?: string;
}

function Input(props: InputProps): JSX.Element {
    return (
        <StyledInput>
            <input placeholder={props.placeholder} type={props.type || 'text'} name={props.name} value={props.value} />
            {props.info && <small>{props.info}</small>}
            {props.label && <label>{props.label}</label>}
        </StyledInput>
    );
}

export default Input;
