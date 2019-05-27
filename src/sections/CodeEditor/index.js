import React, { useState, useRef } from 'react';

import { useStore } from 'store';

import Snackbar from '@material-ui/core/Snackbar';
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

const snackbarPosition = { vertical: 'top', horizontal: 'right' };
const runMessage = `Your source executed, but for see result switch on 'custom'`;
const saveMessage = `Your state of application is successfully saved`;

const CodeEditor = ({ enqueueSnackbar }) => {
  const classes = useStyles();
  const [isEditorReady, setIsEditorReady] = useState(false);
  const getEditorValue = useRef();
  const [message, setMessage] = useState('');
  const { state: { custom }, actions: { setCustomFormula, saveState } } = useStore();

  function editorDidMount(getter) {
    getEditorValue.current = getter;
    setIsEditorReady(true);
  }

  function handleRun() {
    setCustomFormula(getEditorValue.current());
    !custom.show && setMessage(runMessage);
  }

  function handleSave() {
    saveState();
    setMessage(saveMessage);
  }

  return <div className="full-size">
    <Editor
      value={custom.formula}
      editorDidMount={editorDidMount}
    />
    <div className={classes.buttonsWrapper}>
      <Run disabled={!isEditorReady} onClick={handleRun} />
      <Save disabled={!isEditorReady} onClick={handleSave} />
      <Share disabled={!isEditorReady}/>
    </div>
    <Snackbar
      message={message}
      anchorOrigin={snackbarPosition}
      autoHideDuration={1850}
      onClose={_ => setMessage('')}
      open={!!message}
    />
  </div>;
};

export default CodeEditor;
