import React from 'react';
import { StyledButton } from './Button.css';

export interface ButtonProps {
    fill?: boolean;
    color?: string;
    borderColor?: string;
    click?: () => void;
    blocked?: boolean;
    style?: React.CSSProperties;
    children?: string;
}

function Button(props: ButtonProps): JSX.Element {
    return (
        <StyledButton
            fill={props.fill}
            color={props.color}
            borderColor={props.borderColor}
            onClick={props.click}
            blocked={props.blocked}
            style={props.style}
        >
            {props.children}
        </StyledButton>
    );
}

export default Button;
