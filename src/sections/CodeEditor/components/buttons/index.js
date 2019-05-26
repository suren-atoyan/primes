import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const EditorButton = props => {
  const classes = useStyles();

  return <Button
    size="small"
    variant="contained"
    {...props}
    className={classNames(classes.button, props.className)}
  />;
}

export default EditorButton;
