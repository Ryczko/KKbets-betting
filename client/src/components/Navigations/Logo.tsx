import React from 'react';
import logo from 'assets/images/logo.png';
import { StyledLogo } from './Logo.css';
import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
    return (
        <StyledLogo>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </StyledLogo>
    );
}

export default Logo;
