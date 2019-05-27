
import React, { useState } from 'react';

import { useStore } from 'store';
import { useEditor } from 'utils/hooks';

import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

// Buttons
import Run from './components/buttons/Run';
import Save from './components/buttons/Save';
import Share from './components/buttons/Share';

const useStyles = makeStyles(theme => ({
  buttonsWrapper: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
}));

const snackbarPosition = { vertical: 'top', horizontal: 'right' };
const runMessage = `Your source executed, but for see result switch on 'custom'`;
const saveMessage = `Your state of application is successfully saved`;

const Header = _ => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [getEditorValue] = useEditor();
  const { state: { custom, isEditorReady }, actions: { setCustomFormula, saveState } } = useStore();

  function handleRun() {
    setCustomFormula(getEditorValue());
    !custom.show && setMessage(runMessage);
  }

  function handleSave() {
    saveState();
    setMessage(saveMessage);
  }

  return <div className="full-size">
    <div className={classes.buttonsWrapper}>
      <Run disabled={!(isEditorReady && getEditorValue)} onClick={handleRun} />
      <Save onClick={handleSave} />
      <Share />
    </div>
    <Snackbar
      message={message}
      anchorOrigin={snackbarPosition}
      autoHideDuration={1850}
      onClose={_ => setMessage('')}
      open={!!message}
    />
  </div>
}

export default Header;
