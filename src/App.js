import React, {Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodos from './components/AddTodo';

import './App.css';

class App extends Component{
  
  state = {
    todos: [
      {
      id:1,
      title :'take out the trash',
      completed: false
      },
      {
      id:2,
      title :'dinner with family',
      completed: true
      },
      {
      id:3,
      title :'Meeting with friends',
      completed: false
      }
    ]
  }

  // arrow function, map
  //Toggle Complete
  markComplete =(id)=> {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id ===id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})

}

//arrow function
//Delete Todo
delTodo = (id)=>{
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}


//Add Todo
addTodo =(title)=>{
  //object literal
  const newTodo={
    id: 4,
    title,
    completed: false

  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodos addTodo={this.addTodo}/>
          <Todos todos ={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
        
      </div>
    );
  }
}
export default App;
