import React from 'react';

import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const Wrapper = withStyles(theme => ({
  root: {
    padding: 10,
    height: '100%',
  }
}))(({ children, classes, ...props }) => (
  <Paper elevation={0} square={true} className={classes.root} {...props}>{children}</Paper>
));

export default Wrapper;
