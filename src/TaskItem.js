import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  if (!props.completed) {
    return (
      <div className="TaskItem-item">
        <h3>{props.name}</h3>
        <p><em>{props.dueDate}</em></p>
        <p>{props.description}</p>
        <button className="TaskItem-button">Complete</button>
      </div>
    );
  } else {
    return (
      <div className="TaskItem-item">
        <h3 className="TaskItem-completed">{props.name}</h3>
      </div>
    );
  }
}

export default TaskItem;