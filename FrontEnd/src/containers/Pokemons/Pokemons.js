import React, {Component} from 'react';
import axios from '../../axios';
import Pokemon from '../../compoments/Pokemon/Pokemon';
import classes from './Pokemons.module.css';
import Aux from '../../hoc/Auxiliary';
class Pokemons extends Component {
  state = {
    pokemons: [],
    generation: '/pokemon?limit=151'
  }

  componentDidMount() {
    console.log('didmount called')
    this.fetchData(this.state.generation);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('didupdate called')
    if(prevState.generation !== this.state.generation) {
      this.fetchData(this.state.generation);
    }
  }

  fetchData = async (extension) => {
    if(extension !== null){
      try {
        const pokemons = await axios.get(extension);
        const detail = await Promise.all(pokemons.data.results.map(async pokemon => {
          const pokemonSummary = await axios.get(pokemon.url);
          const pokemondetail = {
            name: pokemonSummary.data.name,
            id: pokemonSummary.data.id,
            image: pokemonSummary.data.sprites.front_default,
            types: pokemonSummary.data.types.map(el => {
              return el.type.name
            })
          };
          return pokemondetail;
        }));
        this.setState({pokemons: detail})
      } catch(e) {
        console.log(e);
      }
    }
  }

  changeGeneration = (gen) => {
    switch(gen){
      case 1:
        this.setState({
          generation: '/pokemon?limit=151'
        });
        break;
      case 2:
        this.setState({
          generation: '/pokemon?limit=100&offset=151'
        });
        break;
      case 3:
        this.setState({
          generation: '/pokemon?limit=135&offset=251'
        });
        break;
      case 4:
        this.setState({
          generation: '/pokemon?limit=107&offset=386'
        });
        break;
      case 5:
        this.setState({
          generation: '/pokemon?limit=156&offset=493'
        });
        break;
      case 6:
        this.setState({
          generation: '/pokemon?limit=72&offset=649'
        });
        break;
      case 7:
        this.setState({
          generation: '/pokemon?limit=86&offset=721'
        });
        break;
      case 8:
        this.setState({
          generation: null
        });
        break;
      default:
        this.setState({
          generation: '/pokemon?limit=151'
        });
        break;
    }
  }


  render() {
    let pokemons = <div className={classes.loader}>Loading...</div>
    if(this.state.pokemons.length > 0){
      pokemons = this.state.pokemons.map((pokemon, index)  => {
        return <Pokemon key={pokemon.id} name={pokemon.name} id={pokemon.id} types={pokemon.types} image={pokemon.image}/>
      });
    }
    return (
      <Aux>
        <div className={classes.Gen}>
          <div onClick={() => this.changeGeneration(1)}>Gen 1</div>
          <div onClick={() => this.changeGeneration(2)}>Gen 2</div>
          <div onClick={() => this.changeGeneration(3)}>Gen 3</div>
          <div onClick={() => this.changeGeneration(4)}>Gen 4</div>
          <div onClick={() => this.changeGeneration(5)}>Gen 5</div>
          <div onClick={() => this.changeGeneration(6)}>Gen 6</div>
          <div onClick={() => this.changeGeneration(7)}>Gen 7</div>
          <div onClick={() => this.changeGeneration(8)}>Gen 8</div>
        </div>
        <div className={classes.Pokemons}>
          {this.state.generation !==null ? pokemons : <p>Coming soon!</p>}
        </div>
      </Aux>
    );
  }
  
};

export default Pokemons;