import { TabContext, TabPanel } from '@mui/lab';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import AdminCategories from './sections/AdminCategories';
import AdminEvents from './sections/AdminEvents';
import AdminTeams from './sections/AdminTeams';
import AdminUpdateEvents from './sections/AdminUpdateEvents';

export default function EventSection() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
    setValue(newValue);
  };
  return (
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
      <TabPanel value="1" className="no-x-padding">
        <AdminCategories />
      </TabPanel>
      <TabPanel value="2" className="no-x-padding">
        <AdminTeams />
      </TabPanel>
      <TabPanel value="3" className="no-x-padding">
        <AdminEvents />
      </TabPanel>
      <TabPanel value="4" className="no-x-padding">
        <AdminUpdateEvents />
      </TabPanel>
    </TabContext>
  );
}
