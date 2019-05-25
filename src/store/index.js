import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

import { getPrime, primeBoundaries } from 'utils';

export const store = createOvermind({
  state: {
    layout: {
      isSideBarOpen: false,
    },

    primeNumbers: {
      show: true,
      list: [],
      range: { from: null, to: null },
    },

    primeMinBoundaries: {
      show: false,
      list: [],
      range: { from: null, to: null },
    },

    primeMaxBoundaries: {
      show: false,
      list: [],
      range: { from: null, to: null },
    },

    custom: {
      show: false,
      list: [],
      formula: `n => Math.ceil(2**(1.5 * Math.log2(n)) + Math.log2(n) + 1 - 2**Math.log2(n))`,
      range: { from: null, to: null },
    },
  },

  actions: {
    toggleSideBarOpen({ state }) {
      state.layout.isSideBarOpen = !state.layout.isSideBarOpen;
    },

    generatePrimeNumbers({ state: { primeNumbers } }, from = 1, to = 25) {
      // For now we will get prime numbers belonged mentioned interval
      // from predefined list of prime numbers (up to 1000th)
      // In next development cycle we will design and develop
      // the most proper way to do it programaticly

      if (primeNumbers.range.from !== from || primeNumbers.range.to !== to) {
        // TODO: here we can do optimizations to avoid
        // re-generating of existing numbers, which
        // can be just overwrited by the same value
        primeNumbers.list = Array(to - from + 1).fill().map((_, i) => getPrime(i + 1));
        primeNumbers.range = { from, to };
      }
    },

    generatePrimeMinBoundaries({ state: { primeMinBoundaries } }, from = 1, to = 25) {
      if (primeMinBoundaries.range.from !== from || primeMinBoundaries.range.to !== to) {
        // TODO: the structure of this code segment is repeating;
        // can be made a generic function for those methods
        primeMinBoundaries.list = Array(to - from + 1).fill().map((_, i) => primeBoundaries.min(i + 1));;
        primeMinBoundaries.range = { from, to };
      }
    },

    generatePrimeMaxBoundaries({ state: { primeMaxBoundaries } }, from = 1, to = 25) {
      if (primeMaxBoundaries.range.from !== from || primeMaxBoundaries.range.to !== to) {
        // TODO: the structure of this code segment is repeating;
        // can be made a generic function for those methods
        primeMaxBoundaries.list = Array(to - from + 1).fill().map((_, i) => primeBoundaries.max(i + 1));;
        primeMaxBoundaries.range = { from, to };
      }
    },

    generateCustom({ state: { custom } }, from = 1, to = 25) {
      if (custom.formula && (custom.range.from !== from || custom.range.to !== to)) {
        // TODO: the structure of this code segment is repeating;
        // can be made a generic function for those methods

        // NOTE: it should be implemented in next
        // development stage. Now it just for demo.
        // const formula = primeBoundaries.min;
        const formula = primeBoundaries.min;

        custom.list = Array(to - from + 1).fill().map((_, i) => formula(i + 1));
        custom.range = { from, to };
      }
    },

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
  },
});

export const useStore = createHook(store);
