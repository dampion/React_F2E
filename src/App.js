// eslint-disable-next-line

// import react core and its component, usually we would import both 
import React, { Component } from 'react';
import './css/App.css';
import ToDoList from './components/ToDoList/ToDoList';
// practice.js 
// import Practice from './components/practice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;