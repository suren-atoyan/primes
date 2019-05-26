import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '../';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  run: {
    backgroundColor: '#689f38',
  },
}));

const Run = props => {

  const classes = useStyles();

  return <Button
    className={classes.run}
    {...props}
  >
    Run
    <PlayArrowIcon className={classes.rightIcon} />
  </Button>;
}

export default Run;
