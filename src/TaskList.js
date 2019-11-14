import React, {useState, useContext} from 'react';
import './TaskList.css';
import TaskItem from './TaskItem'
import {TaskContext} from './TaskContext';

function sortDate(a, b) {
  return a.dueDate > b.dueDate;
}

function TaskList(props) {
  const [tasks, setTasks] = useContext(TaskContext);
  
  return (
    <div className="TaskList-container">
        {tasks.sort(sortDate).map(task => (
          <TaskItem name={task.name} dueDate={task.dueDate} description={task.description} completed={task.completed}/>
        ))}
    </div>
  );
}

export default TaskList;