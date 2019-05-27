import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Container from 'sections/DataVisualisation';

import useStyles from './useStyles';

const tabs = {
  graphics: 'graphics',
  lists: 'lists',
};

function DataVisualisation(props) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(tabs.graphics);

  const handleTabChange = (event, tabValue) => setActiveTab(tabValue);

  return (
    <>
      <Tabs
        value={activeTab} 
        variant="fullWidth" 
        onChange={handleTabChange}
      >
        <Tab label="Graphics" value={tabs.graphics} />
        <Tab label="Lists" value={tabs.lists} />
      </Tabs>

      <Grid container className={classes.content}><Container active={activeTab} /></Grid>
    </>
  );
}

export default DataVisualisation;
