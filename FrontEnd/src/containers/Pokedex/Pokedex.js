import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokemons from '../Pokemons/Pokemons';
import Pokemoncard from '../Pokemoncard/Pokemoncard';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import classes from './Pokedex.module.css';


class Pokedex extends Component {
  render() {
    return (
      <section className={classes.Pokedex}>
        
        <Switch>
          <Route path="/" exact component={Pokemons}/>
          <Route path="/pokemon/:id" exact component={Pokemoncard}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
        </Switch>
      </section>
      
    );
  };
};

export default Pokedex;