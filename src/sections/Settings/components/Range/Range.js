import React, { useRef, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import throttle from 'lodash.throttle';

import { useMount } from 'hooks';
import config from 'config';

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

function calcPercentageOfRange(max, min, value) {
  return (max - min + 1) * value / 100;
}

const Range = props => {
  const [value, setValue] = useState(props.defaultValue);
  const classes = useStyles();

  const ref = useRef();

  useMount(_ => {
    ref.current = throttle(props.onChange, 240);
  });

  function handleChange(e, value) {
    const roundedValue = Math.round(value);
    setValue(roundedValue);
    ref.current && ref.current(
      calcPercentageOfRange(config.range.max, config.range.min, roundedValue)
    );
  }

  return <div className={classes.root}>
    <div className={classes.wrapper}>
      <div className={classes.from}>{config.range.min}</div>
      <div className={classNames("full-width", classes.sliderWrapper)}>
        <Slider value={value} onChange={handleChange} />
      </div>
      <div className={classes.to}>{config.range.max}</div>
    </div>
    <Typography variant="overline" display="block" gutterBottom>
      The choosen range is 1 - {
        calcPercentageOfRange(config.range.max, config.range.min, value)
      }
    </Typography>
  </div>
};

export default Range;
