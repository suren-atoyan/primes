import config from 'config';

const max = n => n < 6 ? 0 : config.formulas.primeMinBoundaries(n);
const min = n => n < 6 ? 0 : config.formulas.primeMaxBoundaries(n);

export {
  min,
  max,
};
