import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  preloader: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    display: 'flex',
    position: 'relative',
  },
}));

export default useStyles;
