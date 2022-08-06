import React, { CSSProperties } from 'react';
import { StyledAvatar } from './Avatar.css';
import avatarPhoto from '../../../assets/images/avatar.svg';
import { Link } from 'react-router-dom';

export interface AvatarProps {
  width?: string;
  src?: string;
  className?: string;
  style?: CSSProperties;
  blockLink?: boolean;
}

function Avatar(props: AvatarProps): JSX.Element {
  return (
    <StyledAvatar className={props.className} width={props.width || '50px'}>
      {props.blockLink ? (
        <img style={props.style} src={props.src && props.src !== '' ? props.src : avatarPhoto} alt="avatar" />
      ) : (
        <Link to="/account">
          <img style={props.style} src={props.src && props.src !== '' ? props.src : avatarPhoto} alt="avatar" />
        </Link>
      )}
    </StyledAvatar>
  );
}

export default Avatar;
