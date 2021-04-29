import { useState } from 'react';
import LeftNavigationView from 'views/LeftNavigation/LeftNavigationView';
import { StyledLeftNavigation } from './LeftNavigation.css';

interface LeftNavigationProps {
    open: () => void;
    close: () => void;
    active: boolean;
}

function LeftNavigation(props: LeftNavigationProps): JSX.Element {
    const [activeLeftContent, setActiveLeftContent] = useState('football');

    const changeCategory = (name: string, e: React.MouseEvent<HTMLElement>): void => {
        setActiveLeftContent(name);
        const activeElement = document.querySelector('.left-nav-icon.active');

        if (activeElement) activeElement.classList.remove('active');

        const target = e.target as Element;
        if (target && target.parentElement) target.parentElement.classList.add('active');
        props.open();
    };

    return (
        <div className="display-above-md">
            <StyledLeftNavigation>
                <div className="left-nav-icon active">
                    <i className="icon-soccer-ball " onClick={(e) => changeCategory('football', e)} />
                </div>
                <div className="left-nav-icon">
                    <i className="icon-clipboard" onClick={(e) => changeCategory('coupons', e)} />
                </div>
                <div className="left-nav-icon">
                    <i className="icon-info-circled" onClick={(e) => changeCategory('info', e)} />
                </div>
            </StyledLeftNavigation>
            <LeftNavigationView activeContent={activeLeftContent} close={props.close} active={props.active} />
        </div>
    );
}

export default LeftNavigation;
