import React from 'react';

import { Tab, Tabs } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { StyledAdminPage } from './AdminPage.css';
import withAdminProtectedRoute from '../../Hoc/withAdminProtectedRoute';
import EventSection from '../../features/admin/EventSection';
import UserSection from '../../features/admin/UserSection';
import InterfaceSection from '../../features/admin/InterfaceSection';

function AdminPage(): JSX.Element {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledAdminPage>
      <TabContext value={value}>
        <Tabs
          className="tabs"
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
        >
          <Tab className="tab" label="Events" value="1" />
          <Tab className="tab" label="Users" value="2" />
          <Tab className="tab" label="Interface" value="3" />
        </Tabs>
        <TabPanel value="1">
          <EventSection />
        </TabPanel>
        <TabPanel value="2">
          <UserSection />
        </TabPanel>
        <TabPanel value="3">
          <InterfaceSection />
        </TabPanel>
      </TabContext>
    </StyledAdminPage>
  );
}

export default withAdminProtectedRoute(AdminPage);
