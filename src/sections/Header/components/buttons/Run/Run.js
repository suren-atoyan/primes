import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '../';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import useStyles from './useStyles';

const Run = ({ isRunnerActive, disabled, ...props }) => {

  const classes = useStyles();

  return <Button
    className={classes.run}
    disabled={disabled || isRunnerActive}
    {...props}
  >
    {
      isRunnerActive
        ? <CircularProgress size={24} />
        : (
          <>
            Run
            <PlayArrowIcon className={classes.rightIcon} />
          </>
        )
    }
  </Button>;
}

export default Run;
