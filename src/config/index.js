const defaultFnName = 'getNth';

const config = {
  formulas: {
    // JavaScript implementation of n⋅ln(n) + n⋅(ln(ln(n)) − 1)
    // NOTE: valid for n > 6
    primeLowerBound: `const getNth = n => n < 6 ? 0 : n * Math.log(n) + n * (Math.log(Math.log(n)))`,
    // JavaScript implementation of n⋅ln(n) + n⋅ln(ln(n)
    // NOTE: valid for n > 6
    primeUpperBound: `const getNth = n => n < 6 ? 0 : n * Math.log(n) + n * (Math.log(Math.log(n)) - 1)`,
  },

  graphics: {
    lineChartProps: {
      margin: { top: 10, right: 10, bottom: 30, left: 30 },
      xScale: { type: 'point' },
      yScale: { type: 'linear', stacked: false, min: 'auto', max: 'auto' },
      colors: { scheme: 'category10' },
      pointSize: 8,
      curve: 'natural',
      enableGridX: true,
      enableGridY: true,
      pointColor: { theme: 'background' },
      pointBorderWidth: 0.5,
      pointBorderColor: { from: 'serieColor' },
      pointLabel: 'y',
      pointLabelYOffset: -12,
      useMesh: true,
      lineWidth: 2,
      legends: [{
        anchor: 'bottom-right',
        direction: 'column',
        itemDirection: 'left-to-right',
        itemTextColor: '#fff',
        itemBackground: 'rgba(0, 0, 0, .2)',
        itemWidth: 120,
        itemHeight: 20,
        translateX: -70,
        translateY: -20,
        itemOpacity: 0.5,
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .8)',
              itemOpacity: 1,
            },
          },
        ],
      }],
    },

    darkModeStyles: {
      fill: '#123123',
    },
  },

  range: {
    min: 1,
    max: 100,
  },

  links: {
    telegram: 'https://t.me/joinchat/IgyRDRR4fp9YbVhY2_tTEw',
    github: 'https://github.com/SurenAt93/primes',
  },

  custom: `
    // write your formula here as a function named "${defaultFnName}".
    // It should be a function depending on "n"
    // and should try to return the nth prime number.
    // Something like this: (it's just an example)

    const { ceil, log2 } = Math;

    function ${defaultFnName}(n) {
      const res = 2**(3/2 * log2(n)) + log2(n) + 1 - 2**log2(n);
      return ceil(res);
    }

    // note that it can be another function too, not only something related
    // to prime, just name it "${defaultFnName}". (and you can remove all comments and everything else from here :))
  `.trim().replace(/^ {4}/gm, ''),

  editor: {
    language: 'javascript',
    value: '',

    theme: {
    'night-dark': {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#202124',
      },
    },
  },
  },

  defaultFnName,

  notifications: {
    props: {
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      autoHideDuration: 2500,
    },
    defaultState: {
      isActive: false,
      message: '',
      variant: 'info',
      opt: {},
    },
  },

  maxCodeLength: 2000,

  messages: {
    switchCustomToOn: 'To see the result switch “custom” to on',
    save: 'Your application state is successfully saved',
    codeIsTooLong: 'Your code is too long',
    tooLongExecution: 'Hmmm... it executes too long. Maybe you have written something wrong?',
    notNumericalSequence: 'Hmmm... looks like there are some items in your sequence are not numbers bro',

    errorBoundary: {
      somethingWentWrong: 'Oooops... Sorry, I guess, something went wrong. You can:',
      resetApp: 'Press here to reset the application',
      openIssue: 'Press here to open issue about it on GitHub',
    },
  },

  urls: {
    monacoLoader: '/monaco-editor/vs/loader.js',
    monacoBase: '/monaco-editor/vs',
    octocatIcon: '/icons/octocat.png',
    telegramIcon: '/icons/telegram.png',
  },

  supportedThemeModes: ['dark', 'light'],

  additionalStylesForLineChartDarkMode: {
    textColor: '#FFFFFF',
    grid: {
      line: {
        stroke: '#181414',
      },
    },
    crosshair: {
      line: {
        stroke: '#f50057',
      },
    },
    tooltip: {
      container: {
        background: '#181414',
      },
    },
  },

  maxAcceptableExecutionTime: 2500,
};

export default config;
