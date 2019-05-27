import config from 'config';

const max = n => n < 6 ? 0 : config.formulas.primeLowerBound(n);
const min = n => n < 6 ? 0 : config.formulas.primeUpperBound(n);

export {
  min,
  max,
};
