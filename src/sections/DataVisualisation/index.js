import React, { useMemo } from 'react';

import Graphic from './Graphic';
import Sequence from './Sequence';

import { useStore } from 'store';

import { calcPrimes, primeBoundaries, getPrime } from 'utils';

const DataVisualisation = props => {

  const { state: {
    primeNumbers: { show: showPrimes },
    primeLowerBound: { show: showPrimeLowerBound },
    primeUpperBound: { show: showPrimeUpperBound },
    custom: { show: showCustom, sequnce },
    range: { from, to },
  }} = useStore();

  const data = { from, to };

  data.primeNumbers = useMemo(_ => showPrimes &&
    calcPrimes(getPrime, from, to), [from, to, showPrimes])
  data.primeLowerBound = useMemo(_ => showPrimeLowerBound &&
    calcPrimes(primeBoundaries.min, from, to), [from, to, showPrimeLowerBound]);
  data.primeUpperBound = useMemo(_ => showPrimeUpperBound &&
    calcPrimes(primeBoundaries.max, from, to), [from, to, showPrimeUpperBound]);

  showCustom && (data.custom = sequnce);

  return <>
    {
      props.active === 'graphic'
        ? <Graphic data={data} />
        : <Sequence data={data} />
    }
  </>
};

export default DataVisualisation;
