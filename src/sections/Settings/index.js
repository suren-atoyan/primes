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
      primeMinBoundaries: { show: showPrimeMinBoundaries },
      primeMaxBoundaries: { show: showPrimeMaxBoundaries },
      custom: { show: showCustom },
      range,
    },

    actions: {
      switchPrimeNumbersView,
      switchPrimeMinBoundariesView,
      switchPrimeMaxBoundariesView,
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
            checked={showPrimeMinBoundaries}
            onChange={_ => switchPrimeMinBoundariesView(!showPrimeMinBoundaries)}
            color="primary"
          />
        }
        label="Prime Min Boundaries -> n⋅ln(n) + n⋅(ln(ln(n)) − 1)"
      />
      <FormControlLabel
        control={
          <Switch
            checked={showPrimeMaxBoundaries}
            onChange={_ => switchPrimeMaxBoundariesView(!showPrimeMaxBoundaries)}
            color="primary"
          />
        }
        label="Prime Max Boundaries -> n⋅ln(n) + n⋅ln(ln(n)"
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
