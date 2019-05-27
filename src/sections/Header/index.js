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
import ShareChip from './components/ShareChip';

const snackbarPosition = { vertical: 'top', horizontal: 'right' };
const runMessage = `Your source executed, but for see result switch on 'custom'`;
const saveMessage = `Your state of application is successfully saved`;

const Header = _ => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
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

  function handleShare(event) {
    saveState();

    setAnchorEl(event.currentTarget);
  }

  return <div className="full-size">
    <div className={classes.buttonsWrapper}>
      <Run disabled={!(isEditorReady && getEditorValue)} onClick={handleRun} />
      <Save onClick={handleSave} />
      <Share onClick={handleShare}/>
    </div>
    <Snackbar
      message={message}
      anchorOrigin={snackbarPosition}
      autoHideDuration={1850}
      onClose={_ => setMessage('')}
      open={!!message}
    />
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={_ => setAnchorEl(null)}
      className={classes.root}
    >
      <ShareChip />
    </Popover>
  </div>
}

export default Header;
