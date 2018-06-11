// eslint-disable-next-line

// import react core and its component, usually we would import both 
import React, { Component } from 'react';
import './css/App.css';
import ToDoHeader from './components/ToDoHeader';
import ToDoBody from './components/ToDoBody';
import ToDoItem from './components/ToDoItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoHeader />
        <ToDoBody />
        <ToDoItem />
      </div>
    );
  }
}

export default App;