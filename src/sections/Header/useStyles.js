import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto',
  },
  buttonsWrapper: {
    minWidth: 402,
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
