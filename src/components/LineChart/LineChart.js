import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveLine } from '@nivo/line';

import { canUseMesh } from 'utils';

import config from 'config';

const LineChart = ({ data: { from, to, list }, theme }) => list.length
  ? <ResponsiveLine
      data={list}
      {...config.graphics.lineChartProps}
      useMesh={canUseMesh(from, to, list)}
      animate={false}
      theme={theme}
    />
  : null;

LineChart.propTypes = {
  data: PropTypes.shape({
    from: PropTypes.number,
    to: PropTypes.number,
    list: PropTypes.array,
  }),
  theme: PropTypes.object,
};

export default LineChart;
