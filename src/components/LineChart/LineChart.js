import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import config from 'config';

const LineChart = ({ data: { from, to, list } }) => <ResponsiveLine
  data={list}
  {...config.graphics.lineChartProps}
  useMesh={to - from + 1 > 3} // those very suspicious magic numbers
  // have appeared just because in those cases when we have data to represent
  // with less than 3 lengths, "nivo" charts don't work with mesh.
/>;

export default LineChart;
