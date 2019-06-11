import React from 'react';

import Paper from '@material-ui/core/Paper';
import PrimesTable from 'components/PrimesTable';

const Sequence = ({ data }) => <Paper elevation={0} square={true} className="full-width">
  <PrimesTable data={data} />
</Paper>;

export default Sequence;
