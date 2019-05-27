import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import config from 'config';

const LineChart = ({ data }) => {

  if (!data) return null;

  return <ResponsiveLine
    data={data}
    {...config.graphics.lineChartProps}
    useMesh={data.to - data.from + 1 > 2} // those very suspicious magic numbers
    // have appeared just because in those cases when we have data to represent
    // with less than 3 lengths, "nivo" charts don't work with mesh.
  />;
};

export default LineChart;
