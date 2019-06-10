import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',

    '& button': {
      marginRight: 10,
    },

    '& img': {
      width: 'auto',
      height: 25,
      marginRight: 5,
    },
  },
}));

export default useStyles;
