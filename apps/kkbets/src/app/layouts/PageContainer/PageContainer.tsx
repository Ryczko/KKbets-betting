import React, { useState } from 'react';

import TopNavigation from '../TopNavigation/TopNavigation';
import RightPanel from '../RightPanel/RightPanel';

import MainView from '../MainView/MainView';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import LeftNavigation from '../LeftNavigation/LeftNavigation';

function PageContainer(): JSX.Element {
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
      <MobileNavigation />
      <main>
        <LeftNavigation open={openLeftMenu} close={closeLeftMenu} active={isLeftOpened} />
        <MainView tight={isLeftOpened} />
        <RightPanel />
      </main>
    </>
  );
}

export default PageContainer;
