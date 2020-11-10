import React from 'react';
import {NavLink} from 'react-router-dom';
import PokeLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';
const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <NavLink to='/'><img src={PokeLogo} alt="myLogo"/></NavLink>
    </div>
  );
}

export default logo;