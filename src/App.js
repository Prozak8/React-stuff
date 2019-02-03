import React, { Component } from 'react';
import './App.css';

import ValidationText from './ValidationText/ValidationText';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }


  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} />;
    });

    return (
      <div className="App">
        <h1>Letter Counter App</h1>
        <ul>
          <li>Create an input field (in APP component) with a change listener that outputs the length of the entered text below it (e.g. in a paragraph)</li>
          <li>Create a new component (=>ValidationText) that receives the text length as a prop.</li>
          <li>Inside the ValidationText component, either output "text too short" or "Text long enough" depending on the text length (e.g. take 5 as minumum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field as a prop)</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ul>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />

        <ValidationText 
          inputLength={this.state.userInput.length}/>
          {charList}
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput} 
          className="input-field">
        </input>

        <p>{this.state.userInput}</p>

      </div>
    );
  }
}

export default App;
