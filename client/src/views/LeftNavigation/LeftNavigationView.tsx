import LeftInfoView from './LeftNavigationViews/LeftInfoView';
import LeftMainView from './LeftNavigationViews/LeftMainView';
import { StyledLeftNavigationView } from './LeftNavigationView.css';

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
        case 'info':
            content = <LeftInfoView />;
            break;
        default:
            content = 'football';
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
