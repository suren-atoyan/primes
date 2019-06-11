import TableRow from '@material-ui/core/TableRow';
import { withStyles, darken } from '@material-ui/core/styles';

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {
      backgroundColor: [darken(theme.palette.background.paper, 0.2), '!important'],
    },
  },
}))(TableRow);

export default StyledTableRow;
