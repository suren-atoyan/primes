const transformToChartData = ({
  primeNumbers,
  primeMinBoundaries,
  primeMaxBoundaries,
  custom,
}) => {
  const transformedChartData = [];

  primeNumbers.show && transformedChartData.push({
    id: 'primes',
    color: 'hsl(109, 70%, 50%)',
    data: primeNumbers.list.map((item, i) => ({ x: i + 1, y: item })),
  });

  primeMinBoundaries.show && transformedChartData.push({
    id: 'n⋅ln(n) + n⋅(ln(ln(n)) − 1)',
    color: 'hsl(338, 70%, 50%)',
    data: primeMinBoundaries.list.map((item, i) => ({ x: i + 1, y: item })),
  });

  primeMaxBoundaries.show && transformedChartData.push({
    id: 'n⋅ln(n) + n⋅ln(ln(n)',
    color: 'hsl(168, 70%, 50%)',
    data: primeMaxBoundaries.list.map((item, i) => ({ x: i + 1, y: item })),
  });

  custom.show && transformedChartData.push({
    id: 'custom',
    color: 'red',
    data: custom.list.map((item, i) => ({ x: i + 1, y: item })),
  });

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
