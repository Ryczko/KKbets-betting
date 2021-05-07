import { EventsStates } from 'types/EventState.model';
import React from 'react';
import { StyledStatus } from './Status.css';

export interface StatusProps {
    status: EventsStates;
}

function Status(props: StatusProps): JSX.Element {
    let iconClass = 'icon-help';
    switch (props.status) {
        case 'winning': {
            iconClass = 'icon-ok';
            break;
        }
        case 'lost': {
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
