import React, {useContext} from 'react';
import './TaskList.css';
import TaskItem from './TaskItem'
import {TaskContext} from './TaskContext';

function sortDate(a, b) {
  return a.dueDate > b.dueDate;
}

function TaskList(props) {
  const [tasks, setTasks] = useContext(TaskContext);
  
  const markComplete = (e) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === parseInt(e.currentTarget.dataset.id)) {
        return {
          ...task,
          completed: true,
        }
      } else {
        return task;
      }
    }))
  }

  return (
    <div className="TaskList-container">
        {tasks.sort(sortDate).map(task => (
          <TaskItem name={task.name} dueDate={task.dueDate} taskId={task.id} description={task.description} completed={task.completed} markComplete={markComplete}/>
        ))}
    </div>
  );
}

export default TaskList;