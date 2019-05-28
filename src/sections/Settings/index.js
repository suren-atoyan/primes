import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Range from './components/Range';

import Wrapper from './components/Wrapper';

import { useStore } from 'store';

const Settings = _ => {
  const {
    state: {
      primeNumbers: { show: showPrimeNumbers },
      primeLowerBound: { show: showPrimeLowerBound },
      primeUpperBound: { show: showPrimeUpperBound },
      custom: { show: showCustom },
      range,
    },

    actions: {
      switchPrimeNumbersView,
      switchPrimeLowerBoundView,
      switchPrimeUpperBoundView,
      switchCustomView,
      setRange,
    },
  } = useStore();

  function handleRangeChange(value) {
    setRange(value);
  }

  return <Wrapper>
    <FormControl component="fieldset">
      <FormLabel component="legend">Switch prime generators</FormLabel>
      <FormControlLabel
        control={
          <Switch
            checked={showPrimeNumbers}
            onChange={_ => switchPrimeNumbersView(!showPrimeNumbers)}
          />
        }
        label="Prime Numbers"
      />
      <FormControlLabel
        control={
          <Switch
            checked={showPrimeLowerBound}
            onChange={_ => switchPrimeLowerBoundView(!showPrimeLowerBound)}
            color="primary"
          />
        }
        label="Prime Lower Bound: n⋅ln(n) + n⋅(ln(ln(n)) − 1)"
      />
      <FormControlLabel
        control={
          <Switch
            checked={showPrimeUpperBound}
            onChange={_ => switchPrimeUpperBoundView(!showPrimeUpperBound)}
            color="primary"
          />
        }
        label="Prime Upper Bound: n⋅ln(n) + n⋅ln(ln(n)"
      />
      <FormControlLabel
        control={
          <Switch
            checked={showCustom}
            onChange={_ => switchCustomView(!showCustom)}
            color="primary"
          />
        }
        label="Custom"
      />
      <FormLabel component="legend">Choose range</FormLabel>
      <Range defaultValue={range.to} onChange={handleRangeChange} />
    </FormControl>
  </Wrapper>
};

export default Settings;
