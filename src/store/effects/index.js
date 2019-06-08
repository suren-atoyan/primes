import { runner, checkForNumericalSequence } from 'utils';
import config from 'config';

const calculate = {
  async genSequence(formula, { from ,to }, fnName) {
    const source = `
      ${formula};
      const result = Array(${to} - ${from} + 1).fill().map((_, i) => ${fnName}(i + 1));
      const __x__ = _ => result;
    `;

    const result = await runner(source, '__x__');

    if (result.value) {
      const isSequenceNumerical = checkForNumericalSequence(result.value);

      if (!isSequenceNumerical) {
        result.error = config.messages.notNumericalSequence;
      }
    }

    return result;
  },

  customSequence(formula, { from ,to }, fnName) {
    return new Promise(async (res, rej) => {
      const result = await calculate.genSequence(formula, { from ,to }, fnName);

      if (result.error || result.timeout) return rej(result);
      return res(result);
    });
  },

  primeLowerBound(formula, { from ,to }, fnName) {
    return calculate.genSequence(formula, { from ,to }, fnName);
  },

  primeUpperBound(formula, { from ,to }, fnName) {
    return calculate.genSequence(formula, { from ,to }, fnName);
  },
};

export { calculate };
