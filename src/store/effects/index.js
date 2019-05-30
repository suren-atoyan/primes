import { runner } from 'utils';

const calculate = {
  async genSequence(formula, { from ,to }, fnName) {
    const source = `
      ${formula};
      const result = Array(${to} - ${from} + 1).fill().map((_, i) => ${fnName}(i + 1));
      const __x__ = _ => result;
    `;

    return await runner(source, '__x__');
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
