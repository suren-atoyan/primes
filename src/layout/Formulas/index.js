import React from 'react';

import SplitterLayout from 'react-splitter-layout';

import HeaderLoader from 'sections/Header';
import CodeEditorLoader from 'sections/CodeEditor';
import SettingsLoader from 'sections/Settings';
import LinksLoader from 'sections/Links';

import { asyncComponentLoader } from 'utils';

import useStyles from './useStyles';

const Header = asyncComponentLoader(HeaderLoader);
const CodeEditor = asyncComponentLoader(CodeEditorLoader);
const Settings = asyncComponentLoader(SettingsLoader);
const Links = asyncComponentLoader(LinksLoader);

const Formulas = _ => {
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
};

export default Formulas;
