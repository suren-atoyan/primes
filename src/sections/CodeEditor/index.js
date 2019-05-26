import React, { useState, useRef } from 'react';

import { useStore } from 'store';

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
  const [isEditorReady, setIsEditorReady] = useState(false);
  const getEditorValue = useRef();
  const { actions: { setCustomFormula } } = useStore();

  function editorDidMount(getter) {
    getEditorValue.current = getter;
    setIsEditorReady(true);
  }

  function handleRun() {
    setCustomFormula(getEditorValue.current());
  }

  return <div className="full-size">
    <Editor
      editorDidMount={editorDidMount}
    />
    <div className={classes.buttonsWrapper}>
      <Run disabled={!isEditorReady} onClick={handleRun} />
      <Save disabled={!isEditorReady} />
      <Share disabled={!isEditorReady} />
    </div>
  </div>;
};

export default CodeEditor;
