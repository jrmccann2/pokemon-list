import React from 'react'
import './UserInput.css'

export default function(props){
  return (
    <div className="user-input--component">
      <input placeholder="Name" name="name" onChange={props.handleInput} value={props.name}></input>
      <input placeholder="URL" name="image" onChange={props.handleInput} value={props.image}></input>
      <button onClick={props.handleClick}>Submit</button>
    </div>
  )
}