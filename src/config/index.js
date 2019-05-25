const config = {
  formulas: {
    // JavaScript implementation of n⋅ln(n) + n⋅(ln(ln(n)) − 1)
    // NOTE: valid for n > 6
    primeMinBoundaries: n => n * Math.log(n) + n * (Math.log(Math.log(n))),
    // JavaScript implementation of n⋅ln(n) + n⋅ln(ln(n)
    // NOTE: valid for n > 6
    primeMaxBoundaries: n => n * Math.log(n) + n * (Math.log(Math.log(n)) - 1),
  },

  urls: {
    monaco_loader: '/monaco-editor/vs/loader.js',
    monaco_base: '/monaco-editor/vs',
  },

  graphics: {
    lineChartProps: {
      margin: { top: 10, right: 10, bottom: 30, left: 30 },
      xScale: { type: 'point' },
      yScale: { type: 'linear', stacked: false, min: 'auto', max: 'auto' },
      axisTop: null,
      axisRight: null,
      colors: { scheme: 'category10' },
      pointSize: 8,
      curve: 'cardinal',
      pointColor: { theme: 'background' },
      pointBorderWidth: 0.5,
      pointBorderColor: { from: 'serieColor' },
      pointLabel: 'y',
      pointLabelYOffset: -12,
      useMesh: true,
      enableGridX: false,
      enableGridY: false,
      lineWidth: 1,
      legends: [{
        anchor: 'bottom-right',
        direction: 'column',
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        translateX: -70,
        translateY: -20,
        itemOpacity: 0.5,
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      }],
    },
  },

  range: {
    min: 1,
    max: 100,
  },
};

export default config;
