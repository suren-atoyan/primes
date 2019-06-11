import React from 'react';

import { transformToChartData } from 'utils';

import { extendDefaultTheme, defaultTheme } from '@nivo/core';

import Paper from '@material-ui/core/Paper';
import LineChart from 'components/LineChart';

import config from 'config';

const Graphic = ({ data, themeMode }) => {
  const theme = themeMode === 'dark'
    ? extendDefaultTheme(
        defaultTheme,
        config.additionalStylesForLineChartDarkMode,
      )
    : defaultTheme;

  return <Paper elevation={0} square={true} className="full-size">
    <LineChart
      data={transformToChartData(data)}
      theme={theme}
    />
  </Paper>;
};


export default Graphic;
