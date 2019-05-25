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
    },

    primeMinBoundaries: {
      show: false,
      list: [],
    },

    primeMaxBoundaries: {
      show: false,
      list: [],
    },

    custom: {
      show: false,
      list: [],
      formula: `n => Math.ceil(2**(1.5 * Math.log2(n)) + Math.log2(n) + 1 - 2**Math.log2(n))`,
    },

    range: {
      from: 1,
      to: 25,
    },
  },

  actions: {
    toggleSideBarOpen({ state }) {
      state.layout.isSideBarOpen = !state.layout.isSideBarOpen;
    },

    generatePrimeNumbers({ state: { primeNumbers, range: { from, to } } }) {
      // For now we will get prime numbers belonged mentioned interval
      // from predefined list of prime numbers (up to 1000th)
      // In next development cycle we will design and develop
      // the most proper way to do it programaticly

      // TODO: here we can do optimizations to avoid
      // re-generating of existing numbers, which
      // can be just overwrited by the same value
      primeNumbers.list = Array(to - from + 1).fill().map((_, i) => getPrime(i + 1));
    },

    generatePrimeMinBoundaries({ state: { primeMinBoundaries, range: { from, to } } }) {
      // TODO: the structure of this code segment is repeating;
      // can be made a generic function for those methods
      primeMinBoundaries.list = Array(to - from + 1).fill().map((_, i) => primeBoundaries.min(i + 1));;
    },

    generatePrimeMaxBoundaries({ state: { primeMaxBoundaries, range: { from, to } } }) {
      // TODO: the structure of this code segment is repeating;
      // can be made a generic function for those methods
      primeMaxBoundaries.list = Array(to - from + 1).fill().map((_, i) => primeBoundaries.max(i + 1));;
    },

    generateCustom({ state: { custom, range: { from, to } } }) {
      // TODO: the structure of this code segment is repeating;
      // can be made a generic function for those methods

      // NOTE: it should be implemented in next
      // development stage. Now it just for demo.
      // const formula = primeBoundaries.min;
      const formula = primeBoundaries.min;

      custom.list = Array(to - from + 1).fill().map((_, i) => formula(i + 1));
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

    setRange({ state: { range }, actions: {
      generatePrimeNumbers,
      generatePrimeMinBoundaries,
      generatePrimeMaxBoundaries,
      generateCustom,
    }}, to, from = 1) {
      if (to !== range.to || from !== range.from) {
        range.from = from;
        range.to = to;

        generatePrimeNumbers();
        generatePrimeMinBoundaries();
        generatePrimeMaxBoundaries();
        generateCustom();
      }
    }
  },
});

export const useStore = createHook(store);
