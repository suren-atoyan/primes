import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/styles';

const tabs = {
  graphics: 'graphics',
  lists: 'lists',
};

const contents = {
  [tabs.graphics]: () => <h4>Graphics</h4>,
  [tabs.lists]: () => <h4>Lists</h4>,
};

const useStyles = makeStyles(theme => ({
  content: {
    padding: 2,
  },
}));

function DataVisualisation(props) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(tabs.graphics);

  const handleTabChange = (event, tabValue) => setActiveTab(tabValue);

  const Comp = contents[activeTab];

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

      <Grid container className={classes.content}><Comp /></Grid>
    </>
  );
}

export default DataVisualisation;
