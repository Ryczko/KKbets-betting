import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Loader from '../../components/Loader/Loader';

import AdminCategories from '../../features/admin/sections/AdminCategories';

import { Tab, Tabs } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { StyledAdminPage } from './AdminPage.css';
import AdminTeams from '../../features/admin/sections/AdminTeams';
import AdminEvents from '../../features/admin/sections/AdminEvents';
import AdminUpdateEvents from '../../features/admin/sections/AdminUpdateEvents';

function AdminPage(): JSX.Element {
  const { userData, isUserDataLoaded } = useContext(AuthContext);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
    setValue(newValue);
  };

  if (isUserDataLoaded)
    return !userData.admin ? (
      <Navigate to="/" />
    ) : (
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
            <Tab className="tab" label="Add category" value="1" />
            <Tab className="tab" label="Add team" value="2" />
            <Tab className="tab" label="Add event" value="3" />
            <Tab className="tab" label="update event" value="4" />
          </Tabs>
          <TabPanel value="1">
            <AdminCategories />
          </TabPanel>
          <TabPanel value="2">
            <AdminTeams />
          </TabPanel>
          <TabPanel value="3">
            <AdminEvents />
          </TabPanel>
          <TabPanel value="4">
            <AdminUpdateEvents />
          </TabPanel>
        </TabContext>
      </StyledAdminPage>
    );

  return <Loader />;
}

export default AdminPage;
