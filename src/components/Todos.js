import React, {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component{

  
  render() {
    //using Map method, arrow function
      return this.props.todos.map((todo)=>(
      //todo is a prop
      <Todoitem key={todo.id} todo={todo} markComplete ={this.props.markComplete}
      delTodo={this.props.delTodo}/>
      ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;