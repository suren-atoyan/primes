import { saveInUrl } from 'utils';
import config from 'config';

const createSnapshot = ({ state }) => {
  saveInUrl(JSON.stringify(state));
};

const setIsEditorReady = ({ state }, isReady) => {
  state.isEditorReady = isReady;
};

const setCustomFormula = async ({ state }, formula) => {
  state.customSequence.formula = formula;
};

const setIsRunnerActive = ({ state }, status) => {
  state.isRunnerActive = status;
}

const switchPrimeNumbersView = ({ state: { primeNumbers } }, show) => {
  primeNumbers.show = show;
};

const switchPrimeLowerBoundView = ({ state: { primeLowerBound } }, show) => {
  primeLowerBound.show = show;
};

const switchPrimeUpperBoundView = ({ state: { primeUpperBound } }, show) => {
  primeUpperBound.show = show;
};

const switchCustomView = ({ state: { customSequence } }, show) => {
  customSequence.show = show;
};

const setRange = ({ state: { range }}, to, from = 1) => {
  if (to !== range.to || from !== range.from) {
    range.from = from;
    range.to = to;
  }
};

const setThemeMode = ({ state }, themeMode) => {
  state.themeMode = themeMode;
  localStorage.setItem('themeMode', themeMode); // Current solution is temporary
  // TODO: Design proper solution
  // to sync state (or a field of state) with localStorage
};

const showNotification = ({ state }, { message, variant = 'info', opt = {} }) => {
  state.notifications = {
    isActive: true,
    message,
    variant,
    opt,
  }; // now designed for only one message
};

const hideNotification = ({ state }) => {
  state.notifications = config.notifications.defaultState;
};

export {
  switchPrimeNumbersView,
  switchPrimeLowerBoundView,
  switchPrimeUpperBoundView,
  hideNotification,
  setIsRunnerActive,
  switchCustomView,
  setRange,
  setThemeMode,
  showNotification,
  createSnapshot,
  setIsEditorReady,
  setCustomFormula,
};
