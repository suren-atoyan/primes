import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => {
  const border = '1px solid lightgray';

  const footerHeaderHeight = 48;

  return {
    wrapper: {
      height: '100%',
    },
    header: {
      height: footerHeaderHeight,
    },
    contentWrapper: {
      position: 'relative',
      height: `calc(100% - ${footerHeaderHeight * 2}px)`,
    },
    content: {
      height: '100%',
      borderTop: border,
    },
    links: {
      height: footerHeaderHeight,
      borderTop: border,
    },
  };
});

export default useStyles;
