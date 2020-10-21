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
        className="task-item"
      >
        {this.props.content}
        <div>
          <i className="fas fa-check"></i>
          <i onClick={this.handleDelete} className="fas fa-trash"></i>
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
