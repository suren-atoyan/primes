import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import SplitterLayout from 'react-splitter-layout';

import Editor from 'sections/Editor';
import Settings from 'sections/Settings';
import Links from 'sections/Links';

const useStyles = makeStyles(theme => {
  const border = '1px solid lightgray';

  const footerHeaderHeight = 48;

  return {
    wrapper: {
      height: '100%',
    },
    header: {
      height: footerHeaderHeight,
    },
    contentWrapper: {
      position: 'relative',
      height: `calc(100% - ${footerHeaderHeight * 2}px)`,
    },
    content: {
      borderTop: border,
    },
    links: {
      height: footerHeaderHeight,
      borderTop: border,
    },
  };
});

const Formulas = props => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h5" className={classes.header}>Formulas</Typography>

      <div className={classes.contentWrapper}>
        <SplitterLayout vertical>
          <div className={classes.content}><Editor /></div>
          <div className={classes.content}><Settings /></div>
        </SplitterLayout>
      </div>

      <div className={classes.links}><Links /></div>
    </div>
  );
}

export default Formulas;
