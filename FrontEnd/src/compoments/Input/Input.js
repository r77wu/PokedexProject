import React from 'react';

const input = (props) => {
  return (
    <div>
      <label>{props.key}</label>
      <input {...props.config} value={props.value} onChange={props.changed}/>
    </div>
  );
};

export default input;