// TODO: as we also added functionality for the theme in this
// section, the name of it should be changed

import React from 'react';

import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';

import LightIcon from '@material-ui/icons/Highlight';
import DarkIcon from '@material-ui/icons/Brightness5';

import { useStore } from 'store';

import useStyles from './useStyles';
import classNames from 'classnames';

import config from 'config';

const Links = _ => {
  const { state: { themeMode, isEditorReady }, actions: { setThemeMode } } = useStore();
  const classes = useStyles();

  function handleThemeSwitch(ev) {
    setThemeMode(ev.target.checked ? 'dark' : 'light');
  }

  return <Paper elevation={0} square={true} className={classNames('full-size', classes.wrapper)}>
    <Button target="_blank" rel="noreferrer" href={config.links.telegram}>
      <img src={config.urls.telegramIcon} alt="telegram icon"/>
      Telegram
    </Button>
    <Button target="_blank" rel="noreferrer" href={config.links.github}>
      <img src={config.urls.octocatIcon} alt="github icon"/>
      GitHub
    </Button>
    <div className={classes.themeSwitch}>
      <LightIcon />
      <Switch
        disabled={!isEditorReady}
        onClick={handleThemeSwitch}
        checked={themeMode === 'dark'}
        color="primary"
      />
      <DarkIcon />
    </div>
  </Paper>
};

export default Links;
