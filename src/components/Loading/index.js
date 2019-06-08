import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './useStyles';

const Loading = _ => {
  const classes = useStyles();

  return <div className={classes.preloader}>
    <CircularProgress size={50} />
  </div>;
};

Loading.propTypes = {
  // interesting times; there are components not using any prop...
};

export default Loading;
