import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Login.module.css';

class logIn extends Component {
  render() {
    return (
      <div >
        <form className={classes.Login}>
          <label>Email:</label>
          <input></input>
          <label>Password:</label>
          <input></input>
          <button>Log in</button>
        </form>
        <NavLink to='/signup'>Create Account</NavLink>
      </div>
    );
  }
  
};

export default logIn;