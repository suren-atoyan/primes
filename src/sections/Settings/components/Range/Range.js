import React, { useState, useRef } from 'react';

import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

import useStyles from './useStyles';
import classNames from 'classnames';

import { useMount } from 'utils/hooks';

import config from 'config';

function calcPercentageOfRange(max, min, value) {
  return (max - min + 1) * value / 100;
}

const Range = props => {
  const [value, setValue] = useState(props.defaultValue);
  const sliderRef = useRef();
  const classes = useStyles();

  function handleChange(e, value) {
    setValue(Math.round(value));
  }

  function handleDragEnd(e, value) {
    props.onChange(
      calcPercentageOfRange(config.range.max, config.range.min, Math.round(value))
    );
  }

  useMount(_ => {
    // You may ask me - why? Look, there is an issue related to accessibility.
    // For saying short - the problem is that there is a button, which hasn't "arial-label" attribute.

    // The Material UI Slider component contains some divs and a button
    // element inside one of the divs; it looks like this:
    // <div>
    //   <div></div>
    //   <div>
    //     <button></button> <------- I am about this very button
    //   </div>
    //   <div></div>
    // </div>

    // And this button (which is the tumb of the slider) hasn't "arial-label" attribute
    // which is required for accessibility because without that attribute screen readers
    // will announce it as "button", making it unusable for users who rely on screen readers.
    // And as I have no ability to add it by using an API  provided by Material UI and until
    // the Material UI team doesn't fix it, this magic line will live here.
    sliderRef.current.querySelector('button').setAttribute('aria-label', 'sequence-range');
  });

  return <div className={classes.root}>
    <div className={classes.wrapper}>
      <div className={classes.from}>{config.range.min}</div>
      <div className={classNames("full-width", classes.sliderWrapper)}>
        <Slider ref={sliderRef} value={value} onChange={handleChange} onDragEnd={handleDragEnd} />
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
