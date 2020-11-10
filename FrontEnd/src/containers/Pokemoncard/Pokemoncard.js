import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import axios from '../../axios';
import classes from './Pokemoncard.module.css';
import Stat from '../../compoments/Stat/Stat';

class Pokemoncard extends Component {
  state = {
    pokemon: {
      name: null,
      id: null,
      stats: [],
      height: null,
      weight: null,
      abilities:[],
      types: [],
      img: null
    }
  }

  async componentDidMount() {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.id);
    const pokemonInfo = {
      name: pokemon.data.name.charAt(0).toUpperCase() +  pokemon.data.name.slice(1),
      id: pokemon.data.id,
      stats: pokemon.data.stats.map(el => {
        return {
          name: el.stat.name,
          baseStat: el.base_stat
        }
      }),
      height: pokemon.data.height / 10,
      weight: pokemon.data.weight / 10,
      abilities: pokemon.data.abilities.map(el => {
        return el.ability.name;
      }),
      types: pokemon.data.types.map(el => {
        return el.type.name
      }),
      image: pokemon.data.sprites.front_default
    }
    this.setState({
      pokemon: pokemonInfo
    })

  }

  
  render() {
    let PokemonStat = <div className={classes.loader}>Loading...</div>
    const Stats = this.state.pokemon.stats;
    if(Stats.length > 0 ){
      const sum = Stats.reduce((acc, curr) => acc + curr.baseStat, 0);
      PokemonStat = Stats.map((el, index) => {
        return <Stat name={el.name} val={el.baseStat} sum={sum} key={index} />
      });
    }
    

    return (
      
      <Aux>
        <div className={classes.Pokemoncard_container}>
          <div className={classes.title}>
            
            <p> {this.state.pokemon.name} {'#' + String('000'+ this.state.pokemon.id).slice(-3)}</p>
          </div>
          <div className={classes.image}>
            <img src={this.state.pokemon.image} alt="pokemonicon"/>
          </div>
          <div className={classes.profile}>
            <h2>Profile</h2>
            <p>Height: {this.state.pokemon.height}m</p>
            <p>Wight: {this.state.pokemon.weight}</p>
            <p>Abilities: {this.state.pokemon.abilities.join(', ')}</p>
          </div>
          <div className={classes.stats}>
            {PokemonStat}
          </div>
        </div>
      </Aux>
    );
  };
};

export default Pokemoncard;