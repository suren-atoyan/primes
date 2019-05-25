import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 16,
  },
  root: {
    '&:first-child, &[data-prime="true"] ': {
      color: theme.palette.primary.light,
    },
  },
}))(TableCell);

export default StyledTableCell;
