import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Toolbar.module.css'

const toolBar = (props) => {

  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to='/generation/1'>Gen 1</NavLink></li>
          <li><NavLink to='/generation/2'>Gen 2</NavLink></li>
          <li><NavLink to='/generation/3'>Gen 3</NavLink></li>
          <li><NavLink to='/generation/4'>Gen 4</NavLink></li>
          <li><NavLink to='/generation/5'>Gen 5</NavLink></li>
          <li><NavLink to='/generation/6'>Gen 6</NavLink></li>
          <li><NavLink to='/generation/7'>Gen 7</NavLink></li>
          <li><NavLink to='/generation/8'>Gen 8</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default toolBar;