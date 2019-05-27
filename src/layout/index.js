import React from 'react';

import DataVisualization from './DataVisualization';
import Formulas from './Formulas';

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

const Layout = _ => (
  <SplitterLayout
    percentage
    primaryIndex={0}
    secondaryInitialSize={30}
    primaryMinSize={50}
    // strange? not exactly
    // after "DragEnd" of splitter, we have to dispatch a resize event
    // to window to avoid non-actual layout of elements
    // inside of that particular pane (for example
    // "tab indicators" fo Material-UI)
    onDragEnd={_ => window.dispatchEvent(new Event('resize'))}
  >
    <DataVisualization />
    <Formulas />
  </SplitterLayout>
);

export default Layout;
