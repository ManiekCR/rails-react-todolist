import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createTask } from '../actions';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="task-editor mb-2 d-flex">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          placeholder="Add a task"
          className="form-control align-self-center w-50"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="button" className="btn btn-primary ml-1 w-50" type="submit">Create task</button>
      </form>
    )
  }
}

export default reduxForm({ form: 'newPostForm' })( connect(null, { createTask })(TaskForm)
);
