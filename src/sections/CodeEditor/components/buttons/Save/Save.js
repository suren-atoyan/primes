import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '../';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const Save = props => {

  const classes = useStyles();

  return <Button
    color="secondary"
    {...props}
  >
    Save
    <SaveIcon className={classes.rightIcon} />
  </Button>;
}

export default Save;
