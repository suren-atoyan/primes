import hex2str from './hex2str';

const parseState = _ => {
  try {
    const hex = window.location.pathname;
    const json = hex2str(hex);

    const stateObj = JSON.parse(json);
    return stateObj;
  } catch(err) {
    return {};
  }
};

export default parseState;
