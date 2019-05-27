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
}) => {
  const transformedChartData = [];

  primeNumbers && transformedChartData.push(genPrimeNumbersChartData(primeNumbers));
  primeLowerBound && transformedChartData.push(genPrimeLowerBoundChartData(primeLowerBound));
  primeUpperBound && transformedChartData.push(genPrimeUpperBoundChartData(primeUpperBound));
  custom && transformedChartData.push(genCustomChartData(custom));

  // those checks we need to avoid nivo chart
  // exeptions. In future it'll can be removed
  return !transformedChartData.length ||
         (
          transformedChartData.length === 1 &&
          !transformedChartData[0].data.length
         )
    ? null
    : transformedChartData;
};

export default transformToChartData;
