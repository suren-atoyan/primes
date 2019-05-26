import React, { useMemo } from 'react';

import Graphics from './Graphics';
import Lists from './Lists';

import { useStore } from 'store';

import { calcPrimes, primeBoundaries, getPrime } from 'utils';

const DataVisualisation = props => {

  const { state: {
    primeNumbers: { show: showPrimes },
    primeMinBoundaries: { show: showPrimeMinBoundaries },
    primeMaxBoundaries: { show: showPrimeMaxBoundaries },
    custom: { showCustom },
    range: { from, to },
  }} = useStore();

  const data = {};

  data.primeNumbers = useMemo(_ => showPrimes &&
    calcPrimes(getPrime, from, to), [from, to, showPrimes])
  data.primeMinBoundaries = useMemo(_ => showPrimeMinBoundaries &&
    calcPrimes(primeBoundaries.min, from, to), [from, to, showPrimeMinBoundaries]);
  data.primeMaxBoundaries = useMemo(_ => showPrimeMaxBoundaries &&
    calcPrimes(primeBoundaries.max, from, to), [from, to, showPrimeMaxBoundaries]);
  data.custom = useMemo(_ => showCustom &&
    calcPrimes(primeBoundaries.min, from, to), [from, to, showCustom]);

  return <>
    {
      props.active === 'graphics'
        ? <Graphics data={data} />
        : <Lists data={data} />
    }
  </>
};

export default DataVisualisation;
