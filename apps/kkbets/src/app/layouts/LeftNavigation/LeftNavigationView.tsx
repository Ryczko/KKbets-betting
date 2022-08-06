import Chat from '../../pages/Chat/Chat';
import CouponsList from '../../pages/CouponsList/CouponsList';
import LeftInfoView from '../../pages/Information/ProjectInfo/LeftInfoView';
import LeftMainView from '../../pages/Information/WelcomeInfo/LeftMainView';
import Ranking from '../../pages/Ranking/Ranking';

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
