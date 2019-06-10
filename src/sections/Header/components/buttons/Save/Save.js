import React from 'react';

import Button from '../';
import SaveIcon from '@material-ui/icons/Save';

import useStyles from './useStyles';

const Save = props => {

  const classes = useStyles();

  return <Button
    className={classes.save}
    {...props}
  >
    Save
    <SaveIcon className={classes.rightIcon} />
  </Button>;
}

export default Save;
