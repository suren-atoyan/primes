import React from 'react';

import { withStyles } from '@material-ui/styles';

const Wrapper = withStyles(theme => ({
  root: {
    padding: 10,
  }
}))(({ children, classes, ...props }) => (
  <div className={classes.root} {...props}>{children}</div>
));

export default Wrapper;
