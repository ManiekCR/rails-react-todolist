import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions'

import TaskForm from './task_form';
import Task from './task';

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
                <Task key={task.id} {...task}/>
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
