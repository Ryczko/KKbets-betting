import { Tooltip } from '@mui/material';
import React, { CSSProperties } from 'react';
import { StyledBadge } from './Badge.css';

interface BadgeProps {
  name: string;
  src: string;
  description: string;
  style?: CSSProperties;
}

function Badge(props: BadgeProps): JSX.Element {
  return (
    <StyledBadge>
      <Tooltip title={props.description} arrow>
        <img
          src={props.src}
          alt={props.name}
          className="badge"
          style={props.style}
        />
      </Tooltip>
    </StyledBadge>
  );
}

export default Badge;
