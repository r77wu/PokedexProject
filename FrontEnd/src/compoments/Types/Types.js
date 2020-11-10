import React from 'react';
import classes from './Types.module.css';

const types = (props) => {
  return (
    <div className={classes.type}>
      {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
    </div>
  );
};

export default types;