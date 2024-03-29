import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    // arrow function
    getStyle = ()=>{
        return {
            background: '#cfcfcf',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }

    }

    render() {
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}></input> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
  }

  //object literal 
const btnStyle={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '30%',
    cursor: 'pointer',
    float: 'right'

}





export default Todoitem
