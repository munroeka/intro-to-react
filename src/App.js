import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      todos:[
        {description: 'Walk the cat', isCompleted: true },
        {description: 'Throw the dishes away', isCompleted: false},
        {description: 'Buy new dishes', isCompleted: false}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo />
          <ToDo />
          
        </ul>
      </div>
    );
  }
}

export default App;
