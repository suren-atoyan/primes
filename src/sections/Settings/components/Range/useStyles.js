import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },

  wrapper: {
    display: 'flex',
  },

  from: {
    marginRight: 20,
  },

  to: {
    marginLeft: 20,
  },

  sliderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));

export default useStyles;
