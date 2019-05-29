import { runner } from 'utils';

const calculate = {
  async cutomSequence(formula, { from ,to }, fnName) {
    const source = `
      ${formula};
      const result = Array(${to} - ${from} + 1).fill().map((_, i) => ${fnName}(i + 1));
      const __x__ = _ => result;
    `;

    return await runner(source, '__x__');
  }
};

export { calculate };
