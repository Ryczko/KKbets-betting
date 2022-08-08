import { Tooltip } from '@mui/material';
import React, { CSSProperties } from 'react';
import Loader from '../Loader/Loader';
import { StyledBadge } from './Badge.css';

interface BadgeProps {
  name: string;
  src: string;
  description: string;
  width?: number;
  style?: CSSProperties;
}

function Badge(props: BadgeProps): JSX.Element {
  const [isLoading, setIsLoading] = React.useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <StyledBadge width={props.width}>
      {isLoading && <Loader className="loader" minHeight={props.width} />}
      <Tooltip title={props.description} arrow>
        <img onLoad={imageLoaded} src={props.src} alt={props.name} className="badge" style={props.style} />
      </Tooltip>
    </StyledBadge>
  );
}

export default Badge;
