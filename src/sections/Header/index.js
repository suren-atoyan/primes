import React, { useState } from 'react';

import { useStore } from 'store';
import { useEditor } from 'utils/hooks';
import useStyles from './useStyles';

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [getEditorValue] = useEditor();
  const {
    state: { isEditorReady, isRunnerActive },
    actions: { setCustomFormula, createSnapshot, showNotification },
  } = useStore();

  function handleRun() {
    const code = getEditorValue();
    if (code.length > config.maxCodeLength) {
      showNotification({ message: config.messages.codeIsTooLong, variant: 'error'});
    } else {
      setCustomFormula(code);
    }
  }

  function handleSave() {
    createSnapshot();
    showNotification({ message: config.messages.save, variant: 'success'});
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
      <Run
        isRunnerActive={isRunnerActive}
        disabled={!(isEditorReady && getEditorValue)}
        onClick={handleRun}
      />
      <Save onClick={handleSave} />
      <Share onClick={handleShare}/>
      <Reset onClick={handleReset}/>
    </div>
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
