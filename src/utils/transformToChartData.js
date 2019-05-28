const genPrimeNumbersChartData = list => ({
  id: 'primes',
  color: 'hsl(109, 70%, 50%)',
  data: list.map((item, i) => ({ x: i + 1, y: item })),
});

const genPrimeLowerBoundChartData = list => ({
  id: 'n⋅ln(n) + n⋅(ln(ln(n)) − 1)',
  color: 'hsl(338, 70%, 50%)',
  data: list.map((item, i) => ({ x: i + 1, y: item })),
});

const genPrimeUpperBoundChartData = list => ({
  id: 'n⋅ln(n) + n⋅ln(ln(n)',
  color: 'hsl(168, 70%, 50%)',
  data: list.map((item, i) => ({ x: i + 1, y: item })),
});

const genCustomChartData = list => ({
  id: 'custom',
  color: 'red',
  data: list.map((item, i) => ({ x: i + 1, y: item })),
});

const transformToChartData = ({
  primeNumbers,
  primeLowerBound,
  primeUpperBound,
  custom,
  from,
  to,
}) => {
  const transformedChartData = {
    from, to,
    list: [],
  };

  primeNumbers && transformedChartData.list.push(genPrimeNumbersChartData(primeNumbers));
  primeLowerBound && transformedChartData.list.push(genPrimeLowerBoundChartData(primeLowerBound));
  primeUpperBound && transformedChartData.list.push(genPrimeUpperBoundChartData(primeUpperBound));
  custom && transformedChartData.list.push(genCustomChartData(custom));

  return transformedChartData;
};

export default transformToChartData;
