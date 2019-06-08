import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Container from 'sections/DataVisualisation';

import useStyles from './useStyles';

const tabs = {
  graphic: 'graphic',
  sequence: 'sequence',
};

const DataVisualisation = _ => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(tabs.graphic);

  const handleTabChange = (event, tabValue) => setActiveTab(tabValue);

  return (
    <>
      <Tabs
        value={activeTab} 
        variant="fullWidth" 
        onChange={handleTabChange}
      >
        <Tab label="Graphic" value={tabs.graphic} />
        <Tab label="Sequence" value={tabs.sequence} />
      </Tabs>

      <Grid container className={classes.content}><Container active={activeTab} /></Grid>
    </>
  );
};

export default DataVisualisation;
