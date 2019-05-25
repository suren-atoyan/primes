import React from 'react';

import PrimesTable from 'components/PrimesTable';

import { useStore } from 'store';

const Lists = _ => {
  const { state: {
    primeNumbers,
    primeMinBoundaries,
    primeMaxBoundaries,
    custom,
  }} = useStore();

  return <PrimesTable data={{
    primeNumbers,
    primeMinBoundaries,
    primeMaxBoundaries,
    custom,
  }} />;
};

export default Lists;
