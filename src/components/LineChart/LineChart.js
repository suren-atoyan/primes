import React from 'react';
import { ResponsiveLine } from '@nivo/line'

import config from 'config';

const LineChart = ({ data }) => {

  if (!data) return null;

  return <ResponsiveLine
    data={data}
    {...config.graphics.lineChartProps}
  />;
};

export default LineChart;
