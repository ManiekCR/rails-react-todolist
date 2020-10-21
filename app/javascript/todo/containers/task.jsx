import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteTask, fetchTasks } from '../actions'

class Task extends Component {
  handleDelete = () => {
    if (window.confirm("Delete this task?")) {
      this.props.deleteTask(this.props.id);
    }
  }

  render (props) {
    return (
      <div
        className="task-item d-flex space-between"
      >
        <p>{this.props.content}</p>
        <div className="d-flex">
          <i className="fas fa-check align-self-center"></i>
          <i onClick={this.handleDelete} className="fas fa-trash align-self-center"></i>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTask, fetchTasks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
