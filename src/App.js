import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {

  render() {
    return (
        <div className="container bg-jk">
          <div className="todoApp">
            <ToDoList />
          </div>
        </div>
    );
  }
}


export default App;