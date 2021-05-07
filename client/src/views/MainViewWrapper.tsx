import LeftNavigation from 'components/Navigations/LeftNavigation/LeftNavigation';
import TopNavigation from 'components/Navigations/TopNavigation/TopNavigation';
import RightPanel from 'components/RightPanel/RightPanel';
import { useState } from 'react';

import MainView from './MainView';

function MainViewWrapper(): JSX.Element {
    const [isLeftOpened, setIsLeftOpened] = useState(true);

    const openLeftMenu = () => {
        setIsLeftOpened(true);
    };

    const closeLeftMenu = () => {
        setIsLeftOpened(false);
        const activeElement = document.querySelector('.left-nav-icon.active');
        if (activeElement) activeElement.classList.remove('active');
    };

    return (
        <>
            <TopNavigation />
            <main>
                <LeftNavigation open={openLeftMenu} close={closeLeftMenu} active={isLeftOpened} />
                <MainView tight={isLeftOpened} />
                <RightPanel />
            </main>
        </>
    );
}

export default MainViewWrapper;
