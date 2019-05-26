import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// Buttons
import Run from './components/buttons/Run';
import Save from './components/buttons/Save';
import Share from './components/buttons/Share';

import Editor from 'components/Editor';

const useStyles = makeStyles(theme => ({
  buttonsWrapper: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
}));

const CodeEditor = _ => {
  const classes = useStyles();

  return <div className="full-size">
    <Editor />
    <div className={classes.buttonsWrapper}>
      <Run />
      <Save />
      <Share />
    </div>
  </div>;
};

export default CodeEditor;
