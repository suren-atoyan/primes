import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '../';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

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
