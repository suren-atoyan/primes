import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

import { initialState, sharedState } from './state';
import * as actions from './actions';
import * as effects from './effects';

export const store = createOvermind({
  state: { ...initialState, ...sharedState, isRunnerActive: false },
  actions,
  effects,
});

export const useStore = createHook(store);
