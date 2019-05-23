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
  >
    <DataVisualization />
    <Formulas />
  </SplitterLayout>
);

export default Layout;
