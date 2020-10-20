import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions'

import TaskForm from './task_form';

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render () {
    return (
      <div>
        <TaskForm />
        <div className="task-list">
          {
            this.props.tasks.map((task) => {
              return (
                <div key={task.id}>{task.content}</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
