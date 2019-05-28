import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto',
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: 404,
  },
  popover: {
    '& div[role="document"]': {
      right: 8,
    },
    '& div[role="button"]': {
      justifyContent: 'space-between',
      display: 'flex',
      border: 'none',
      borderRadius: 'unset',
    },
  },
}));

export default useStyles;
