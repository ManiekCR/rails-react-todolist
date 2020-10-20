import React, { Component } from 'react';

class Task extends Component {
  render (props) {
    return (
      <div
        className="task-item"
      >
        {this.props.content}
        <div>
          <i className="fas fa-check"></i>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}

export default Task;
