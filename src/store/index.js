import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

import { saveInUrl, parseState } from 'utils';
import config from 'config';

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
    formula: config.custom,
  },

  range: {
    from: 1,
    to: 25,
  },

  isEditorReady: false,
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
    },

    setIsEditorReady({ state }, isReady) {
      state.isEditorReady = isReady;
    },
  },
});

export const useStore = createHook(store);
