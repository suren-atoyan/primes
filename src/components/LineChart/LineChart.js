import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveLine } from '@nivo/line';

import config from 'config';

const LineChart = ({ data: { from, to, list } }) => list.length
  ? <ResponsiveLine
      data={list}
      {...config.graphics.lineChartProps}
      useMesh={to - from + 1 > 3} // those very suspicious magic numbers
      // have appeared just because in those cases when we need to represent
      // data which length is less than 3, "nivo" charts don't work with mesh.
      animate={false}
    />
  : null;

LineChart.propTypes = {
  data: PropTypes.shape({
    from: PropTypes.number,
    to: PropTypes.number,
    list: PropTypes.array,
  }),
};

export default LineChart;
