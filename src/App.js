import React from 'react';

import ErrorBoundary from 'react-error-boundary';
import ErrorBoundaryFallback from 'components/ErrorBoundaryFallback';

import Layout from 'layout';

const App = props => <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
  <Layout />
</ErrorBoundary>;

export default App;
