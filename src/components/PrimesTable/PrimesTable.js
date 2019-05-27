import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

import TableBody from './TableBody';
import TableCell from './TableCell';
import TableRow from './TableRow';

const PrimesTable = ({ data: {
  primeNumbers,
  primeMinBoundaries,
  primeMaxBoundaries,
  custom,
  from,
  to,
}}) => (
  <Paper elevation={0} className="full-width">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>nth</TableCell>
          {primeMinBoundaries && <TableCell align="right">n⋅ln(n) + n⋅(ln(ln(n)) − 1)</TableCell>}
          {primeNumbers && <TableCell data-prime align="right">nth prime number</TableCell>}
          {primeMaxBoundaries && <TableCell align="right">n⋅ln(n) + n⋅ln(ln(n)</TableCell>}
          {custom && <TableCell align="right">Custom</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array(to - from).fill().map((prime, i) => (
          <TableRow key={i}>
            <TableCell component="th" scope="row">{i + 1}</TableCell>
            {primeMinBoundaries && <TableCell align="right">{primeMinBoundaries[i] || '-'}</TableCell>}
            {primeNumbers && <TableCell data-prime align="right">{prime}</TableCell>}
            {primeMaxBoundaries && <TableCell align="right">{primeMaxBoundaries[i] || '-'}</TableCell>}
            {custom && <TableCell align="right">{custom[i] || '-'}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default PrimesTable;
