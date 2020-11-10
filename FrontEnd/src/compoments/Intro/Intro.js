import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Intro.module.css';
import Logo from '../Logo/Logo';
import Aux from '../../hoc/Auxiliary';
const intro = (props) => {
  return (
    <Aux>
      <header className={classes.Intro}>
        <Logo />
        <h1>PokeDex</h1>
        <NavLink to='/login'>User login</NavLink>
      </header>
    </Aux>
  );
}

export default intro;