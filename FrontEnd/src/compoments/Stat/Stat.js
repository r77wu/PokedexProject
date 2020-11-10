import React from 'react';
import classes from './Stat.module.css';

const stat = (props) => {
  return (
    <div className={classes.Stat}>
      <div>
        {props.name}: {props.val}
      </div>
      <div>
        <progress max={props.sum} value={props.val}>{props.val}</progress>
      </div>
    </div>
  );
};

export default stat;