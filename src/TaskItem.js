import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="TaskItem-item">
      {props.task}
    </div>
  );
}

export default TaskItem;