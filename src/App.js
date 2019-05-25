import React from 'react';
import Layout from 'layout';

import { useStore } from 'store';
import { useMount } from 'hooks';

function App(props) {

  const { actions: {
    generatePrimeNumbers,
    generatePrimeMinBoundaries,
    generatePrimeMaxBoundaries,
    generateCustom,
  }} = useStore();

  useMount(_ => {
    generatePrimeNumbers();
    generatePrimeMinBoundaries();
    generatePrimeMaxBoundaries();
    generateCustom();
  });

  return (
    <Layout />
  );
}

export default App;
