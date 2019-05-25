import React from 'react';

import { useStore } from 'store';
import { transformToChartData } from 'utils';

import LineChart from 'components/LineChart';

const Graphics = _ => {

  const { state: {
    primeNumbers,
    primeMinBoundaries,
    primeMaxBoundaries,
    custom,
  }} = useStore();

  return <LineChart data={transformToChartData({
    primeNumbers,
    primeMinBoundaries,
    primeMaxBoundaries,
    custom,
  })} />;
};

export default Graphics;
