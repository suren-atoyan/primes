import React from 'react';

import ErrorBoundary from 'react-error-boundary';

import Layout from 'layout';
import Notifications from 'notifications';

import ErrorBoundaryFallback from 'components/ErrorBoundaryFallback';

const App = props => <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
  <Layout />
  <Notifications />
</ErrorBoundary>;

export default App;
