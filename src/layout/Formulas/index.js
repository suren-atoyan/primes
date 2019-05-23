import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => {
  const border = '1px solid lightgray';

  const footerHeaderHeight = 48;

  return {
    wrapper: {
      height: '100%',
      borderLeft: border,
    },
    header: {
      height: footerHeaderHeight,
    },
    contentWrapper: {
      height: `calc(100% - ${footerHeaderHeight * 2}px)`,
    },
    content: {
      height: '50%',
      borderTop: border,
    },
    links: {
      height: footerHeaderHeight,
      borderTop: border,
    },
  };
});

const Formulas = props => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h5" className={classes.header}>Formulas</Typography>

      <Grid container direction="column" className={classes.contentWrapper}>
        <Grid item className={classes.content}>Editor</Grid>
        <Grid item className={classes.content}>Settings</Grid>
      </Grid>

      <div className={classes.links}>Links</div>
    </div>
  );
}

export default Formulas;
