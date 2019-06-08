import React from 'react';

import Button from '../';
import ResetIcon from '@material-ui/icons/Refresh';

import useStyles from './useStyles';

const Reset = props => {

  const classes = useStyles();

  return <Button {...props}>
    Reset
    <ResetIcon className={classes.rightIcon} />
  </Button>;
}

export default Reset;
