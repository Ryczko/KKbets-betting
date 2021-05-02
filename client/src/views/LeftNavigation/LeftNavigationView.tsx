import LeftInfoView from './LeftNavigationViews/LeftInfoView';
import LeftMainView from './LeftNavigationViews/LeftMainView';
import { StyledLeftNavigationView } from './LeftNavigationView.css';
import CouponsList from './LeftNavigationViews/CouponsList';
import Ranking from './LeftNavigationViews/Ranking';

export interface LeftNavigationViewProps {
    activeContent: string;
    active: boolean;
    close: () => void;
}

function LeftNavigationView({ activeContent, close, active }: LeftNavigationViewProps): JSX.Element {
    let content = null;

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
