import React from 'react';
import ReactDom from 'react-dom';
import { StyledMobileNavigation } from './MobileNavigation.css';
import { NavLink } from 'react-router-dom';

function MobileNavigation(): JSX.Element {
    return ReactDom.createPortal(
        <StyledMobileNavigation>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            <i className="icon-home" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/coupons">
                            <i className="icon-clipboard" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ranking">
                            <i className="icon-award" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account">
                            <i className="icon-user" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </StyledMobileNavigation>,
        document.getElementById('mobile-nav')!
    );
}

export default MobileNavigation;
