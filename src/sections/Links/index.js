import React from 'react';

import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

import config from 'config';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',

    '& button': {
      marginRight: 10,
    },

    '& img': {
      width: 25,
      height: 25,
      marginRight: 5,
    },
  },
}));

const Links = _ => {
  const classes = useStyles();

  return <div className={classNames('full-size', classes.wrapper)}>
    <Button target="_blank" href={config.links.telegram}>
      <img src="/icons/telegram.png" alt="telegram icon"/>
      Telegram
    </Button>
    <Button target="_blank" href={config.links.github}>
      <img src="/icons/octocat.png" alt="github icon"/>
      GitHub
    </Button>
  </div>
};

export default Links;
