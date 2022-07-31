import React from 'react';
import Chat from '../../../views/Chat/Chat';
import CouponsList from '../../../views/CouponsList/CouponsList';
import LeftInfoView from '../../../views/Information/ProjectInfo/LeftInfoView';
import LeftMainView from '../../../views/Information/WelcomeInfo/LeftMainView';
import Ranking from '../../../views/Ranking/Ranking';

import { StyledLeftNavigationView } from './LeftNavigationView.css';

export interface LeftNavigationViewProps {
  activeContent: string;
  active: boolean;
  close: () => void;
}

function LeftNavigationView({ activeContent, close, active }: LeftNavigationViewProps): JSX.Element {
  let content = null;

  content = 'Left Navigation space';
  switch (activeContent) {
    case 'football':
      content = <LeftMainView />;
      break;
    case 'coupons':
      content = <CouponsList />;
      break;
    case 'ranking':
      content = <Ranking />;
      break;
    case 'info':
      content = <LeftInfoView />;
      break;
    case 'chat':
      content = <Chat />;
      break;
    default:
      content = <LeftMainView />;
  }

  return (
    <StyledLeftNavigationView active={active}>
      <div className="closeBtn">
        <i className="icon-left" onClick={close} />
      </div>

      {content}
    </StyledLeftNavigationView>
  );
}

export default LeftNavigationView;
