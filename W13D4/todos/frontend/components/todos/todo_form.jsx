import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      title: this.state.title,
      body: this.state.body
    }
    
    this.props.createTodo(todo)
      .then(() => {
        this.setState({ title: '', body: '' });
        this.props.clearErrors();
      });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="title">Title:</label>
        <input
          type="text" 
          id="title" 
          value={ this.state.title }
          onChange={ this.update("title") }  
        />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          value={ this.state.body }
          onChange={ this.update("body") }
        />
        <button>Add Todo!</button>

        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li> )}
        </ul>
      </form>
    );
  }
}

export default TodoForm;