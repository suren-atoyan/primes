import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

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
    <Paper elevation={0} square={true} className="full-size">
      <Tabs
        value={activeTab} 
        variant="fullWidth" 
        onChange={handleTabChange}
      >
        <Tab label="Graphic" value={tabs.graphic} />
        <Tab label="Sequence" value={tabs.sequence} />
      </Tabs>

      <Grid container className={classes.content}><Container active={activeTab} /></Grid>
    </Paper>
  );
};

export default DataVisualisation;
