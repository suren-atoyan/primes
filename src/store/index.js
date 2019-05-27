import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

import { saveInUrl, parseState } from 'utils';

const sharedState = parseState();

const initialState = {
  primeNumbers: {
    show: true,
  },

  primeMinBoundaries: {
    show: false,
  },

  primeMaxBoundaries: {
    show: false,
  },

  custom: {
    show: false,
    formula: `n => Math.ceil(2**(1.5 * Math.log2(n)) + Math.log2(n) + 1 - 2**Math.log2(n))`,
  },

  range: {
    from: 1,
    to: 25,
  },
};

export const store = createOvermind({
  state: { ...initialState, ...sharedState },
  actions: {
    switchPrimeNumbersView({ state: { primeNumbers } }, show) {
      primeNumbers.show = show;
    },

    switchPrimeMinBoundariesView({ state: { primeMinBoundaries } }, show) {
      primeMinBoundaries.show = show;
    },

    switchPrimeMaxBoundariesView({ state: { primeMaxBoundaries } }, show) {
      primeMaxBoundaries.show = show;
    },

    switchCustomView({ state: { custom } }, show) {
      custom.show = show;
    },

    setCustomFormula({ state: { custom } }, formula) {
      custom.formula = formula;
    },

    setRange({ state: { range }}, to, from = 1) {
      if (to !== range.to || from !== range.from) {
        range.from = from;
        range.to = to;
      }
    },

    saveState({ state }) {
      saveInUrl(JSON.stringify(state));
    }
  },
});

export const useStore = createHook(store);
