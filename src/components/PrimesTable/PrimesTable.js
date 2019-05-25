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
}}) => (
  <Paper elevation={0} className="full-width">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>nth</TableCell>
          {primeMinBoundaries.show && <TableCell align="right">n⋅ln(n) + n⋅(ln(ln(n)) − 1)</TableCell>}
          {primeNumbers.show && <TableCell align="right">nth prime number</TableCell>}
          {primeMaxBoundaries.show && <TableCell align="right">n⋅ln(n) + n⋅ln(ln(n)</TableCell>}
          {custom.show && <TableCell align="right">Custom</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {primeNumbers.list.map((prime, i) => (
          <TableRow key={i}>
            <TableCell component="th" scope="row">{i + 1}</TableCell>
            {primeMinBoundaries.show && <TableCell align="right">{primeMinBoundaries.list[i] || '-'}</TableCell>}
            {primeNumbers.show && <TableCell data-prime align="right">{prime}</TableCell>}
            {primeMaxBoundaries.show && <TableCell align="right">{primeMaxBoundaries.list[i] || '-'}</TableCell>}
            {custom.show && <TableCell align="right">{custom.list[i] || '-'}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default PrimesTable;
