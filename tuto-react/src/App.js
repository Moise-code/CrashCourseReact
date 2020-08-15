import React from 'react';
import Todos from './components/Todos.js'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:[
        {
          id: 1,
          title: 'Learn Js',
          completed: false
        },
        {
          id: 2,
          title: 'Learn React',
          completed: false
        },
        {
          id: 3,
          title: 'Go for a walk',
          completed: false
        }
      ]
    }
  }

  

  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
       <Todos/>
  
      </div>
    );

  }
  
}

export default App;
