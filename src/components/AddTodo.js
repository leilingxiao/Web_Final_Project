import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title:''
    }

//arrow function
    onChange=(e)=>this.setState({[e.target.name]: e.target.value });

//arrow function
    onSubmit=(e)=> {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title:''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type = "text" 
                name="title"
                style={{ flex:'10', padding:'5px'}}
                placeholder="Add Todos..."
                value={this.state.title}
                onChange={this.onChange}></input>

                <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex:'1'}}
                ></input>
            </form>
        )
    }
}

export default AddTodo
