import React, { Component } from "react";
import "./App.css";

import PokeDisplay from "./components/PokeDisplay/PokeDisplay";
import UserInput from "./components/UserInput/UserInput";

let id = 0;

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      image: "",
      pokemonArray: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { name, image } = this.state;
    const poke = { id, name, image };
    this.setState({
      pokemonArray: [...this.state.pokemonArray, poke],
      name: "",
      image: ""
    });
    id++
  }

  updateList(updatedPokemon){
    const indexOfPokemonToUpdate = this.state.pokemonArray.findIndex( pokemon => pokemon.id === updatedPokemon.id)
    const copyOfPokemonArray = [...this.state.pokemonArray]
    copyOfPokemonArray.splice(indexOfPokemonToUpdate, 1, updatedPokemon)
    this.setState({pokemonArray: copyOfPokemonArray})
  }

  render() {
    const pokeDisplayCards = this.state.pokemonArray.map((pokemon, index) => {
      return (
        <PokeDisplay
          key={pokemon.id}
          id={pokemon.id}
          image={pokemon.image}
          name={pokemon.name}
          updateList={this.updateList}
        />
      );
    });
    return (
      <div className="app--component">
        <h3>Pokemon Catch 'em All</h3>
        <UserInput
          handleClick={this.handleClick}
          handleInput={this.handleInput}
          name={this.state.name}
          image={this.state.image}
        />
        <section className="users--container">{pokeDisplayCards}</section>
      </div>
    );
  }
}

export default App;
