import React from 'react';

import Button from '../';
import ShareIcon from '@material-ui/icons/Share';

import useStyles from './useStyles';

const Share = props => {

  const classes = useStyles();

  return <Button
    color="primary"
    {...props}
  >
    Share
    <ShareIcon className={classes.rightIcon} />
  </Button>;
}

export default Share;
