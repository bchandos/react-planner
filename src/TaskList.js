import React from 'react';
import './TaskList.css';
import TaskItem from './TaskItem'


function TaskList() {
  return (
    <div className="TaskList-container">
        <TaskItem task="Some content" />
        <TaskItem task="Other content" />
        <TaskItem task="A third type of content" />
        <TaskItem task="Yet more content for your fat head." />
        <TaskItem task="How can you possibly consume any more content you unbelievable monster." />
    </div>
  );
}

export default TaskList;