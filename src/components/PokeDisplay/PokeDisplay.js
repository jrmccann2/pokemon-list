import React, { Component } from "react";
import "./PokeDisplay.css";

class PokeDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      pokeName: "",
      pokeImage: ""
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  toggleEdit() {
    if (this.state.editing) {
      this.setState({
        editing: false,
        pokeName: "",
        pokeImage: ""
      }); 
    } else {
      this.setState({editing: true});
      const updatedPokemon = {
        name: this.state.pokeName,
        image: this.state.pokeImage
      }
      this.props.updateList(updatedPokemon)
    }
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="user-display--component">
        {this.state.editing ? (
          <div>
            <input name="pokeName" value={this.state.pokeName} onChange={this.handleChange} />
            <input name="pokeImage" value={this.state.pokeImage} onChange={this.handleChange} />
            <button onClick={this.toggleEdit}>Save Changes</button>
          </div>
        ) : (
          <div>
            <p>{this.props.name}</p>
            <img src={this.props.image} alt="pokemon" />
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default PokeDisplay;
