import React from 'react';

import Button from '@material-ui/core/Button';

import useStyles from './useStyles';
import classNames from 'classnames';

import config from 'config';

const Links = _ => {
  const classes = useStyles();

  return <div className={classNames('full-size', classes.wrapper)}>
    <Button target="_blank" rel="noreferrer" href={config.links.telegram}>
      <img src={config.urls.telegramIcon} alt="telegram icon"/>
      Telegram
    </Button>
    <Button target="_blank" rel="noreferrer" href={config.links.github}>
      <img src={config.urls.octocatIcon} alt="github icon"/>
      GitHub
    </Button>
  </div>
};

export default Links;
