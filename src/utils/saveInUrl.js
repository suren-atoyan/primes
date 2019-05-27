import str2hex from './str2hex';

const saveInUrl = json => {
  window.history.pushState(null, null, str2hex(json));
};

export default saveInUrl;
