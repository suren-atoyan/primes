import React, { useState } from 'react';

import DataVisualization from './DataVisualization';
import Formulas from './Formulas';

import { useSplitterClick } from 'utils/hooks';
import getLayoutSplitterProps from './getLayoutSplitterProps';

import { ThemeProvider } from 'theme';

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

const Layout = _ => {
  const [isSettingsSectionOpen, setIsSettingsSectionOpen] = useState(false);
  useSplitterClick(_ => setIsSettingsSectionOpen(!isSettingsSectionOpen));

  return <ThemeProvider>
    <SplitterLayout
      {...getLayoutSplitterProps(isSettingsSectionOpen)}
      // strange? not exactly
      // after "DragEnd" of splitter, we have to dispatch a resize event
      // to the window to avoid non-actual layout of elements
      // inside that particular pane (for example
      // "tab indicators" fo Material-UI)
      onDragEnd={_ => window.dispatchEvent(new Event('resize'))}
    >
      <DataVisualization />
      <Formulas />
    </SplitterLayout>
  </ThemeProvider>
};

export default Layout;
