import React, {useState, useContext} from 'react';
import './TaskForm.css';
import {TaskContext} from './TaskContext';

function TaskForm() {
    const [name, setName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useContext(TaskContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateDueDate = (e) => {
        setDueDate(e.target.value);
    }
    const updateDescription = (e) => {
        setDescription(e.target.value);
    }
    const addTask = (e) => {
        e.preventDefault(); // prevent page reload
        // a task must have at least a name
        if (name) {
            // set tasks by appending new item to copy of previous items
            setTasks(prevTasks => [...prevTasks, {id: tasks.length + 1, name: name, dueDate: dueDate, description: description}]);
            // clear form field values
            setName('');
            setDescription('');
            setDueDate('');
        }
    }

    return (
        <div>
            <h3>Add new task</h3>
            <form className="TaskForm-form" onSubmit={addTask}>
                <input className="TaskForm-text-input" type="text" name="newTaskName" value={name} onChange={updateName} />
                <input className="TaskForm-date-input" type="date" name="newTaskDueDate" value={dueDate} onChange={updateDueDate} />
                <textarea className="TaskForm-text-textarea" name="newTaskDescription" value={description} onChange={updateDescription}></textarea>
                <button className="TaskForm-button" disabled={!name} type="submit" name="newTaskButton">Add</button>
            </form>
        </div>
    )
}

export default TaskForm;