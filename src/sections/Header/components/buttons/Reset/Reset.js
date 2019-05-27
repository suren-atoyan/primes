import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '../';
import ResetIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const Reset = props => {

  const classes = useStyles();

  return <Button {...props}>
    Reset
    <ResetIcon className={classes.rightIcon} />
  </Button>;
}

export default Reset;
