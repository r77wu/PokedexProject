import React from 'react';
import {  NavLink } from 'react-router-dom';
import classes from './Pokemon.module.css';
import Type from '../Types/Types';

const pokemon = (props) => {
  const types = props.types.map(( el, index) => {
    return <Type type={el} key={index}/>;
  });

  return (
    <div className={classes.Pokemon}>
      <img src={props.image} alt="pokemonImg" />
      <p className={classes.pokedex}>{'#' + String(`000${props.id}`).slice(-3)}</p>
      <NavLink to={'/pokemon/' + props.id} className={classes.pokename}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</NavLink>
      <div className={classes.types}>
        {types}
      </div>
      
    </div>
    
  );
}

export default pokemon;