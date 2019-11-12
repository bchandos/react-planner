import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="TaskItem-item">
      <h3>{props.name}</h3>
      <p><em>{props.dueDate}</em></p>
      <p>{props.description}</p>
    </div>
  );
}

export default TaskItem;