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

const genCustomSequenceChartData = list => ({
  id: 'customSequence',
  color: 'red',
  data: list.map((item, i) => ({ x: i + 1, y: item })),
});

const transformToChartData = ({
  primeNumbers,
  primeLowerBound,
  primeUpperBound,
  customSequence,
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
  customSequence && transformedChartData.list.push(genCustomSequenceChartData(customSequence));

  return transformedChartData;
};

export default transformToChartData;
