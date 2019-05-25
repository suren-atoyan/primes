import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { useStore } from 'store';

const Settings = _ => {
  const {
    state: {
      primeNumbers: { show: showPrimeNumbers },
      primeMinBoundaries: { show: showPrimeMinBoundaries },
      primeMaxBoundaries: { show: showPrimeMaxBoundaries },
      custom: { show: showCustom },
    },

    actions: {
      switchPrimeNumbersView,
      switchPrimeMinBoundariesView,
      switchPrimeMaxBoundariesView,
      switchCustomView,
    },
  } = useStore();

  return <FormGroup>
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
      label="Prime Min Boundaries"
    />
    <FormControlLabel
      control={
        <Switch
          checked={showPrimeMaxBoundaries}
          onChange={_ => switchPrimeMaxBoundariesView(!showPrimeMaxBoundaries)}
          color="primary"
        />
      }
      label="Prime Max Boundaries"
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
  </FormGroup>;
};

export default Settings;
