import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import DataVisualization from './DataVisualization';
import Formulas from './Formulas';

const useStyles = makeStyles(theme => ({
  layout: {
    height: '100vh',
  },
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <Grid 
      container
      direction="row"
      className={classes.layout}
    >
      <Grid item xs={9}><DataVisualization /></Grid>
      <Grid item xs={3}><Formulas /></Grid>
    </Grid>
  );
}

export default Layout;
