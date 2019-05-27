import React, { useState } from 'react';

import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

import useStyles from './useStyles';
import classNames from 'classnames';

import config from 'config';

function calcPercentageOfRange(max, min, value) {
  return (max - min + 1) * value / 100;
}

const Range = props => {
  const [value, setValue] = useState(props.defaultValue);
  const classes = useStyles();

  function handleChange(e, value) {
    setValue(Math.round(value));
  }

  function handleDragEnd(e, value) {
    props.onChange(
      calcPercentageOfRange(config.range.max, config.range.min, Math.round(value))
    );
  }

  return <div className={classes.root}>
    <div className={classes.wrapper}>
      <div className={classes.from}>{config.range.min}</div>
      <div className={classNames("full-width", classes.sliderWrapper)}>
        <Slider value={value} onChange={handleChange} onDragEnd={handleDragEnd} />
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
