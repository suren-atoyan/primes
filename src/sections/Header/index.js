import React, { useState } from 'react';

import { useStore } from 'store';
import { useEditor } from 'utils/hooks';
import useStyles from './useStyles';

import Snackbar from '@material-ui/core/Snackbar';
import Popover from '@material-ui/core/Popover';

// Buttons
import Run from './components/buttons/Run';
import Save from './components/buttons/Save';
import Share from './components/buttons/Share';
import Reset from './components/buttons/Reset';
import ShareChip from './components/ShareChip';

import { resetApp } from 'utils';
import config from 'config';

const Header = _ => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [getEditorValue] = useEditor();
  const { state: { custom, isEditorReady }, actions: { setCustomFormula, createSnapshot } } = useStore();

  function handleRun() {
    const code = getEditorValue();
    if (code.length > config.maxCodeLength) {
      setMessage(config.messages.codeIsTooLong);
    } else {
      setCustomFormula(code);
      !custom.show && setMessage(config.messages.switchCustomToOn);
    }
  }

  function handleSave() {
    createSnapshot();
    setMessage(config.messages.save);
  }

  function handleShare(event) {
    createSnapshot();
    setAnchorEl(event.currentTarget);
  }

  function handleReset() {
    resetApp();
  }

  return <div className={classes.root}>
    <div className={classes.buttonsWrapper}>
      <Run disabled={!(isEditorReady && getEditorValue)} onClick={handleRun} />
      <Save onClick={handleSave} />
      <Share onClick={handleShare}/>
      <Reset onClick={handleReset}/>
    </div>
    <Snackbar
      message={message}
      anchorOrigin={config.snackbarPosition}
      autoHideDuration={1300}
      onClose={_ => setMessage('')}
      open={!!message}
    />
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={_ => setAnchorEl(null)}
      className={classes.popover}
    >
      <ShareChip />
    </Popover>
  </div>
}

export default Header;
