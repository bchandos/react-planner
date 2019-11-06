import React from 'react';
import './TaskForm.css';

function submitNewItem(e) {
    e.preventDefault();
}

function TaskForm() {
    return (
        <div>
            <h3>Add new task</h3>
            <form onSubmit={submitNewItem}>
                <input className="TaskForm-text-input" type="text" name="newTaskItem"/>
                <button className="TaskForm-button" type="submit" name="newTaskButton">Add</button>
            </form>
        </div>
    )
}

export default TaskForm;