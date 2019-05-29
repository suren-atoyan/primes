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

  custom: {
    show: false,
    formula: config.custom,
  },

  range: {
    from: 1,
    to: 25,
  },

  isEditorReady: false,
  isRunnerActive: false,

  notifications: config.notifications.defaultState,
};

export { initialState, sharedState };
