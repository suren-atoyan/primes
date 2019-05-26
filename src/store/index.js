import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

export const store = createOvermind({
  state: {
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
  },

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
    }
  },
});

export const useStore = createHook(store);
