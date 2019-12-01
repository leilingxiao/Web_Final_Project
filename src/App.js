import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodos from './components/AddTodo';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Particles from 'react-particles-js';



//uuid gives random id
import uuid from 'uuid';

import './App.css';


const  particleOpt = {
  particles:{
    number:{
      value: 150,
      density:{
        enbale :true,
        value_area: 800
      }
    }
  }
}



class App extends Component{
  
  state = {
    todos: [
      {
      id: uuid.v4(),
      title :'take out the trash',
      completed: false
      },
      {
      id: uuid.v4(),
      title :'dinner with family',
      completed: false
      },
      {
      id: uuid.v4(),
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
    id: uuid.v4(),
    title,
    completed: false
    

  }
  this.setState({ todos: [...this.state.todos, newTodo]})
  
}

  render() {
    return (
     
      
      <Router>
      <div className="App">
        
        <div className="container">
          <Header />
          <Route exact path="/" render={props =>(
            <React.Fragment>
              
              <AddTodos addTodo={this.addTodo}/>
              <Todos todos ={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )} />

          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          
        </div>
        
      </div>
      </Router>
    );
  }
}
export default App;
