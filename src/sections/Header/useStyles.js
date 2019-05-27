import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  buttonsWrapper: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  root: {
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
