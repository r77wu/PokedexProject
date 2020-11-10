import React, {Component} from 'react';
import Aux from './hoc/Auxiliary';
import Intro from './compoments/Intro/Intro';
import Pokedex from './containers/Pokedex/Pokedex';
import { BrowserRouter } from 'react-router-dom';
//import classes from './App.module.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Aux>
          <Intro/>
          <Pokedex/>
        </Aux>
      </BrowserRouter>
    );
  }
}

export default App;
