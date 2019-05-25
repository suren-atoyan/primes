import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

const StyledTableBody = withStyles(theme => ({
  root: {
    '&:hover > tr': {
      backgroundColor: theme.palette.background.paper,
    },
  },
}))(TableBody);

export default StyledTableBody;
