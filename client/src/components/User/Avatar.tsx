import React from 'react';
import { StyledAvatar } from './Avatar.css';
import avatarPhoto from 'assets/images/avatar.svg';
import { Link } from 'react-router-dom';

export interface AvatarProps {
    width?: string;
    src?: string;
    className?: string;
}

function Avatar(props: AvatarProps): JSX.Element {
    return (
        <StyledAvatar className={props.className} width={props.width || '50px'}>
            <Link to="/account">
                <img src={props.src && props.src !== '' ? props.src : avatarPhoto} alt="avatar" />
            </Link>
        </StyledAvatar>
    );
}

export default Avatar;
