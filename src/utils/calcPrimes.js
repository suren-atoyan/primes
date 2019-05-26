const calcPrimes = (formula, from, to) => {
  return Array(to - from + 1).fill().map((_, i) => formula(i + 1));
}

export default calcPrimes;
