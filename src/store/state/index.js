import { parseState } from 'utils';
import config from 'config';

const sharedState = parseState();

const initialState = {
  primeNumbers: {
    show: true,
  },

  primeLowerBound: {
    show: false,
  },

  primeUpperBound: {
    show: false,
  },

  customSequence: {
    show: true,
    formula: config.custom,
  },

  range: {
    from: 1,
    to: 25,
  },

  themeMode: localStorage.getItem('themeMode') || 'light',

  isEditorReady: false,
  isRunnerActive: false,

  notifications: config.notifications.defaultState,
};

export { initialState, sharedState };
