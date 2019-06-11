import TableCell from '@material-ui/core/TableCell';
import { withStyles, darken } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: darken(theme.palette.background.default, 0.5),
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 16,
  },
  root: {
    '&:first-child': {
      color: theme.palette.text.secondary,
    },
  },
}))(TableCell);

export default StyledTableCell;
