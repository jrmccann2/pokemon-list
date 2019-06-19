import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import PokeDisplay from './components/PokeDisplay/PokeDisplay'
import UserInput from './components/UserInput/UserInput'

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      image: '',
      pokemonArray: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInput(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleClick(){
    const {name, image} = this.state
    const poke = {name: name, image: image}
    this.setState({pokemonArray: [...this.state.pokemonArray, poke], name: '', image: ''})
  }

  render(){
    const pokeDisplayCards = this.state.pokemonArray.map((pokemon, index) => {
      return (
        <PokeDisplay key={index} image={pokemon.image} name={pokemon.name} />
      )
    })
    return (
      <div className="app--component">
        <h3>Pokemon Catch 'em All</h3>
        <UserInput
          handleClick={this.handleClick}
          handleInput={this.handleInput}
          name={this.state.name}
          image={this.state.image}
        />
        <section className="users--container">
          {pokeDisplayCards}
        </section>
      </div>
    );

  }
}

export default App;
