import { AppBar, Tab, Tabs } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import AdminCategories from 'components/Admin/AdminCategories';
import AdminEvents from 'components/Admin/AdminEvents';
import AdminTeams from 'components/Admin/AdminTeams';
import AdminUpdateEvents from 'components/Admin/AdminUpdateEvents';

import React from 'react';

function AdminPage(): JSX.Element {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <TabContext value={value}>
                <AppBar position="static" color="transparent">
                    <Tabs centered value={value} onChange={handleChange} indicatorColor="primary">
                        <Tab label="Add category" value="1" />
                        <Tab label="Add team" value="2" />
                        <Tab label="Add event" value="3" />
                        <Tab label="update event" value="4" />
                    </Tabs>
                </AppBar>
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
        </div>
    );
}

export default AdminPage;
