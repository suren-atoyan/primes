import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    position: 'relative',

    '& button': {
      marginRight: 10,
    },

    '& img': {
      width: 'auto',
      height: 25,
      marginRight: 5,
    },
  },
  themeSwitch: {
    right: 10,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default useStyles;
