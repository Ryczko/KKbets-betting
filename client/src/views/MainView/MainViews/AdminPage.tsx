import { AppBar, Paper, Tab, Tabs } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import AdminCategories from 'components/Admin/AdminCategories';
import AdminEvents from 'components/Admin/AdminEvents';
import AdminTeams from 'components/Admin/AdminTeams';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function AdminPage(): JSX.Element {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        console.log('aaa');
    }, []);

    return (
        <div>
            <TabContext value={value}>
                <AppBar position="static" color="transparent">
                    <Tabs centered value={value} onChange={handleChange} indicatorColor="primary">
                        <Tab label="Add category" value="1" />
                        <Tab label="Add team" value="2" />
                        <Tab label="Add event" value="3" />
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
            </TabContext>
        </div>
    );
}

export default AdminPage;
