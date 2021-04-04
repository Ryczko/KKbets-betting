import { useState } from 'react';
import { LeftNavStyle } from './LeftNavigation.css';

function LeftNavigation(): JSX.Element {
    const [activeLeftContent, setActiveLeftContent] = useState('football');

    const changeCategory = (name: string, e: React.MouseEvent<HTMLElement>): void => {
        setActiveLeftContent(name);
        const activeElement = document.querySelector('.left-nav-icon.active');

        if (activeElement) activeElement.classList.remove('active');

        const target = e.target as Element;
        if (target && target.parentElement) target.parentElement.classList.add('active');
    };

    return (
        <>
            <LeftNavStyle>
                <div className="left-nav-icon active">
                    <i className="icon-soccer-ball " onClick={(e) => changeCategory('football', e)} />
                </div>
                <div className="left-nav-icon">
                    <i className="icon-clipboard" onClick={(e) => changeCategory('coupons', e)} />
                </div>
                <div className="left-nav-icon">
                    <i className="icon-award" onClick={(e) => changeCategory('ranking', e)} />
                </div>
                <div className="left-nav-icon">
                    <i className="icon-chat" onClick={(e) => changeCategory('chat', e)} />
                </div>
                <div className="left-nav-icon">
                    <i className="icon-info-circled" onClick={(e) => changeCategory('info', e)} />
                </div>
            </LeftNavStyle>
        </>
    );
}

export default LeftNavigation;
