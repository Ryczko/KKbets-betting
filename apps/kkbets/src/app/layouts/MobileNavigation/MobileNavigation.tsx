import React from 'react';
import ReactDom from 'react-dom';
import { StyledMobileNavigation } from './MobileNavigation.css';
import { NavLink } from 'react-router-dom';
import AuthDisplayOnlyWrapper from '../../wrappers/AuthDisplayOnlyWrapper';

function MobileNavigation(): JSX.Element {
  return ReactDom.createPortal(
    <StyledMobileNavigation>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <i className="icon-home" />
            </NavLink>
          </li>
          <AuthDisplayOnlyWrapper>
            <li>
              <NavLink to="/coupons">
                <i className="icon-clipboard" />
              </NavLink>
            </li>
          </AuthDisplayOnlyWrapper>
          <li>
            <NavLink to="/ranking">
              <i className="icon-award" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat">
              <i className="icon-chat" />
            </NavLink>
          </li>
          <AuthDisplayOnlyWrapper>
            <li>
              <NavLink to="/users">
                <i className="icon-user" />
              </NavLink>
            </li>
          </AuthDisplayOnlyWrapper>
        </ul>
      </nav>
    </StyledMobileNavigation>,
    document.getElementById('mobile-nav')!
  );
}

export default MobileNavigation;
