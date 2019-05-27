import React from 'react';

import SplitterLayout from 'react-splitter-layout';

import Header from 'sections/Header';
import CodeEditor from 'sections/CodeEditor';
import Settings from 'sections/Settings';
import Links from 'sections/Links';

import useStyles from './useStyles';

const Formulas = props => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}><Header /></div>

      <div className={classes.contentWrapper}>
        <SplitterLayout vertical>
          <div className={classes.content}><CodeEditor /></div>
          <div className={classes.content}><Settings /></div>
        </SplitterLayout>
      </div>

      <div className={classes.links}><Links /></div>
    </div>
  );
}

export default Formulas;
