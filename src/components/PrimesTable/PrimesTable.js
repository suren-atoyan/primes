import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

import TableBody from './TableBody';
import TableCell from './TableCell';
import TableRow from './TableRow';

const PrimesTable = ({ data: {
  primeNumbers,
  primeLowerBound,
  primeUpperBound,
  custom,
  from,
  to,
}}) => (
  <Paper elevation={0} className="full-width">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>nth</TableCell>
          {primeLowerBound && <TableCell align="right">n⋅ln(n) + n⋅(ln(ln(n)) − 1)</TableCell>}
          {primeNumbers && <TableCell data-prime align="right">nth prime number</TableCell>}
          {primeUpperBound && <TableCell align="right">n⋅ln(n) + n⋅ln(ln(n)</TableCell>}
          {custom && <TableCell align="right">Custom</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array(to - from + 1).fill().map((_, i) => (
          <TableRow key={i}>
            <TableCell component="th" scope="row">{i + 1}</TableCell>
            {primeLowerBound && <TableCell align="right">{primeLowerBound[i] || '-'}</TableCell>}
            {primeNumbers && <TableCell data-prime align="right">{primeNumbers[i]}</TableCell>}
            {primeUpperBound && <TableCell align="right">{primeUpperBound[i] || '-'}</TableCell>}
            {custom && <TableCell align="right">{custom[i] || '-'}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default PrimesTable;
