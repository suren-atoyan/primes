import { createOvermind } from 'overmind'
import { createHook } from 'overmind-react'

export const store = createOvermind({
  state: {
    layout: {
      isSideBarOpen: false,
    },
  },

  actions: {
    toggleSideBarOpen({ state }) {
      state.layout.isSideBarOpen = !state.layout.isSideBarOpen;
    },
  },
});

export const useStore = createHook(store);
