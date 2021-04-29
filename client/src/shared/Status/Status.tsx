import React from 'react';
import { StyledStatus } from './Status.css';

export interface StatusProps {
    status: 'win' | 'loss' | 'pending';
}

function Status(props: StatusProps): JSX.Element {
    let iconClass = 'icon-help';
    switch (props.status) {
        case 'win': {
            iconClass = 'icon-ok';
            break;
        }
        case 'loss': {
            iconClass = 'icon-cancel';
            break;
        }
        case 'pending': {
            iconClass = 'icon-help';
            break;
        }
        default: {
            iconClass = 'icon-help';
        }
    }

    return (
        <StyledStatus status={props.status}>
            <i className={iconClass} />
        </StyledStatus>
    );
}

export default Status;
