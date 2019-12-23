import React, { Component } from 'react';
import './App.css';
import Todo from './Todo/Todo';

let id = 0;

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      todos: []
    }
  }
  
  addTodo = () => {
    console.log("Adding");
    const text = prompt("Enter your To-do here:");
    if(text) {
      this.setState({
        todos: [
          ...this.state.todos,
          {id: id++, text: text, checked: false},
        ]
      })
    }
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }
      })
    })
  }

  removeTodo = (id) => {
    this.setState ({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
    
  } 

  render() {
    return (
      <div className="App">
        <h1> TODO APP </h1>
        <p>To-do Count: {this.state.todos.length}</p>
        <p>Unckecked To-do Count: {(this.state.todos.filter(todo => !todo.checked)).length}</p>
        <button onClick={() => this.addTodo()}>New Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo 
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
